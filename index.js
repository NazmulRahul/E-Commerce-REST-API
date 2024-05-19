const express=require('express')
const app=express()
const mongoose=require('mongoose')
const dotenv=require('dotenv').config()
const userRoute=require('./routes/user')
const connectDB=require('./db/db')
const port=process.env.PORT||5000

app.use(express.json())
app.get('/',(req,res)=>{
    res.send('success')
})
app.use('/api',userRoute)

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