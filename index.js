const express=require('express')
const app=express()
const mongoose=require('mongoose')
const dotenv=require('dotenv').config()
// Routes
const auth=require('./routes/auth')
// DB
const connectDB=require('./db/db')
const port=process.env.PORT||5000

app.use(express.json())
app.get('/',(req,res)=>{
    res.send('success')
})
// app.use('/api',userRoute)
app.use('/auth',auth)
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