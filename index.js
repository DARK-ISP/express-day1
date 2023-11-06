import express from "express";

const app = express();

app.get("/",(req,res)=>{
    res.send("welcome to js");
})

app.get("/node",(req,res)=>{
    res.send("thanks for comming")
})

const port = 8080;

app.listen(port,(req,res)=>{
    console.log("hello")
    console.log(`server is running on ${port}`);
})

