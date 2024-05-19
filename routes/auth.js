const express=require('express')
const router=express.Router()
const User=require('../models/User') 

// user register
router.post('/register',async(req,res)=>{
    const {name,userName,email,password}=req.body
    // check 
    const newUser=new User(
        {
            name:name,
            userName:userName,
            email:email,
            password:password
        }
    )
    try{
        const createUser= await newUser.save()
        console.log(createUser)
        return res.status(201).send(createUser)
    }catch(error){
        return res.status(500).send('failed')
    }
    
})

module.exports=router