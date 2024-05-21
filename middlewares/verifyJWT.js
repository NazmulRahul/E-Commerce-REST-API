const jwt = require('jsonwebtoken')
require("dotenv").config();

const verifyToken=(req,res,next)=>{
    const authHeader = req.headers["authorization"];
    if (!authHeader) return res.sendStatus(401).send('unauthorized');
    const token = authHeader.split(" ")[1];
    try {
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        const {userName,isAdmin}=decoded
        req.user={userName,isAdmin}
        next();
    }catch (error) {
        return res.status(401).send(error);
    }
}

const verifyUser=(req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.userName===req.params.id || req.user.isAdmin)
            next()
        else
            return res.status(403).send('unauthorized')
    })
}
const verifyAdmin=(req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.isAdmin)
            next()
        else{
            return res.status(403).send('unauthorized')
        }
    })
}
module.exports={verifyToken,verifyUser,verifyAdmin}

