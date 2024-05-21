const express=require('express')
const router=express.Router()
const {verifyToken,verifyUser,verifyAdmin}=require('../middlewares/verifyJWT')
const Cart=require('../models/Cart')
// create cart

router.post('/',verifyUser,async (req,res)=>{

})
// find cart
router.get('/:id',verifyUser,async(req,res)=>{   
    try{
        const product=await Product.findById(req.params.id)
        res.status(200).json(product)
    }catch(error){
        res.status(500).json(error)
    }
})



module.exports=router