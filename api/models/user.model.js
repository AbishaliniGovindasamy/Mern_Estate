import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type:String,
        required:true,
        unique:true,

    },
      email: {
        type:String,
        required:true,
        unique:true,

    },  
    password: {
        type:String,
        required:true,
        unique:true,
    },
    avatar:{
        type:String,
        default : "https://tse2.mm.bing.net/th?id=OIP.MNYMRopweKA9axhd73z_GwHaE8&pid=Api&P=0&h=180"

    },
},
    {timestamps:true}

);

const User = mongoose.model('User', userSchema);

export default User;