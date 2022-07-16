const express = require("express");
const path = require("path")
const app = express();
const port=80;

app.use('/static',express.static('static'))



app.set("view engine","pug")

app.set("views",path.join(__dirname,"views"))

app.get("/",(req,res)=>{
    const message="ahmad is a good boy"
    const parameters={'title':"Ahmad",'message':message}
    res.status(200).render("index.pug",parameters)
})









// app.get("/demo",(req,res)=>{
//     res.status(200).render('demo',{title:'pug view',message:'hi Ahmad'})
// })

// app.get("/",(req,res)=>{
//     res.send("hello Ahmad")
// })

// app.get("/about",(req,res)=>{
//     res.send("Ahmad  as")
// })

app.listen(port,()=>{
    console.log(`listning on port ${port}`)
})