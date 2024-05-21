const {verifyToken,verifyUser,verifyAdmin}= require('../middlewares/verifyJWT')
const express=require('express')
const router=express.Router()
const Product=require('../models/Product')

// new product
router.post('/',verifyAdmin,async (req,res)=>{
    const newProduct=new Product(req.body)
    try{
        const savedProduct=await newProduct.save()
        return res.status(201).send(savedProduct)
    }catch(err){
        res.send(err)
    }
})

// get products

router.get('/find/:id',verifyUser,async(req,res)=>{   
    try{
        const product=await Product.findById(req.params.id)
        res.status(200).json(product)
    }catch(error){
        res.status(500).json(error)
    }
})
router.get('/',verifyUser,async(req,res)=>{
    try{
        const Products= await Product.find()
        res.send(Products)
    }catch(error){
        res.send(error)
    }
})

module.exports=router