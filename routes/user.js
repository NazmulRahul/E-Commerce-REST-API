const {verifyToken,verifyUser,verifyAdmin}= require('../middlewares/verifyJWT')
const User=require('../models/User')
const express=require('express')
const router=express.Router()

router.put('/:id',verifyUser,(req,res)=>{
    res.status(201).send(req.user)
})

module.exports=router
