const express = require ("express")
const app = express();

app.get("/api/home",(req,res)=>{
    res.send("Hello world")
})

app.listen(3000,()=>{
    console.log("Server running on localhost:3000")
})