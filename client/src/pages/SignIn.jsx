import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import  { useDispatch, useSelector } from 'react-redux';
import { signInStart,signInsuceess,signInFailure } from '../redux/user/userSlice.js';
export default function SignIn() {
  const [fromData , setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange= (e) => {
    setFormData(
      {
        ...fromData,
        [e.target.id]: e.target.value,

      }
    )

  };
  const handleSubmit = async (e) =>{
    e.preventDefault();
    try {
      dispatch(signInStart());
    const res = await fetch ("/api/auth/signin",
      {
        method: "POST",
        headers:{
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(fromData),
      } );
      const data = await res.json();
      if(data.success === false){
        dispatch(signInFailure(data.message));
      
        return;
      }
     dispatch(signInsuceess(data));
      navigate('/');
      
    } catch (error) {
      dispatch(signInFailure(error.message));
      
    }
   
    
  };
  console.log(fromData);
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl p-6 text-center font-semiboldmy-7'>
        Sign In</h1>
        <form  onSubmit={handleSubmit} className='flex flex-col gap-4'>
        
        <input type='email' placeholder='Email'
           className='border p-3 rounded-lg' id='email'onChange={handleChange}/>
           <input type='password' placeholder='Password'
           className='border p-3 rounded-lg' id='password'onChange={handleChange}/>
        <button  disabled={loading}className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
        {loading ? 'Loading...' : 'Sign In'}
        </button>
        </form>
        <div className='flex gap-2 mt-5'>
          <p>Don't Have an Account?</p>
          <Link to={"/sign-in"}>
          <span className='text-blue-700'>Sign-In</span></Link>
        </div>
        {error && <p className='text-red-500 mt-5'>{error}</p>}
        </div>
  )
}
