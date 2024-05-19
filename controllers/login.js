const User=require('../models/User') 

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
        return res.status(201).send('login successful')

    }catch(error){
        return res.status(500).json(error)
    }
}

module.exports=login
