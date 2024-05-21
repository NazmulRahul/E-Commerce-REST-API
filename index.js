const express=require('express')
const app=express()
const mongoose=require('mongoose')
const dotenv=require('dotenv').config()
// Routes
const auth=require('./routes/auth')
const cart=require('./routes/cart')
const userRoutes=require('./routes/user')
const productRoutes=require('./routes/product')
// DB
const connectDB=require('./db/db')
const port=process.env.PORT||5000

app.use(express.json())
app.get('/',(req,res)=>{
    res.send('success')
})
// app.use('/api',userRoute)
app.use('/auth',auth)
app.use('/api/cart',cart)
app.use('/api/user',userRoutes)
app.use('/api/products',productRoutes)

const start=()=>{
    try{
        connectDB(process.env.MONGO_URI);
        app.listen(port,()=>{
            console.log(`server started at port: ${port}`)
        })
    }catch(error){
        console.log("error")
    }
}
start()