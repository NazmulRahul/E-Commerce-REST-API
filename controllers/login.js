const User=require('../models/User') 
const jwt=require('jsonwebtoken')

const login=async(req,res)=>{
    const{userName,password}=req.body

    try{
        const user=await User.findOne({userName:userName})
        if(!user){
           return res.status(401).send('not found')
        }
        if(user.password!==password){
            return res.status(401).send('password did not match')
        }
        const accessToken = jwt.sign(
            { userName: userName, isAdmin:user.isAdmin },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: "1d" })
        return res.status(201).json({accessToken})

    }catch(error){
        return res.status(500).json(error)
    }
}

module.exports=login
