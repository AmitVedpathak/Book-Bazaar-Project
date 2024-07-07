import User from '../model/user.modal.js';
import bcrypt from 'bcrypt';

export const signup =async (req,res)=>{
    try {
        const {fullname, email,password} = req.body;
        const user = await User.findOne({email});
        if(user){
            return res.status(400).json({message: "User already exists"})
        }
        const hashPasswoed = await bcrypt.hash(password,10)
        const createdUser = new User({
            fullname,
            email,
            password : hashPasswoed
        })
        await createdUser.save();
        res.status(201).json({message:"User created sucessfully", user:{
            _id:createdUser._id,
            fullname:createdUser.fulllname,
            email:createdUser.email
        }})
    } catch (error) {
        
    }
}
export const login =async (req,res)=>{
    try {
        const {email,password} = req.body;
        const user = await User.findOne({email});
        const isMatch = await bcrypt.compare(password,user.password);
        if(!user || !isMatch){
            return res.status(400).json({message: "Invalid username or password"})
        }else{
            res.status(200).json({
                message:"Login Successfuly",
                user:{
                    _id:user._id,
                    fullname : user.fullname,
                    email : user.email
                }
            })
        }
    } catch (error) {
        console.log("Error",error.message);
        res.status(500).json({message:"Internal server error"})
    }
}