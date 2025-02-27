import express from "express"
import jwt from "jsonwebtoken"
import { connectDB } from "./db";
const app = express();
const port = 3000;

app.post("/api/v1/signin",(req,res)=>{

})

app.post("api/v1/content",(req,res)=>{

})

app.get("api/v1/content",(req,res)=>{
    
})

app.delete("api/v1/content",(req,res)=>{
    
})


app.post("api/v1/brain/share",(req,res)=>{
    
})

app.get("api/v1/brain/:shareLink",(req,res)=>{
    
})



















connectDB();
app.listen(port,()=>{
    console.log(`app is listening on ${port}`);
    

})
