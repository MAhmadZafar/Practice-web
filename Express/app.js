const express = require("express");
const fs = require("fs")
const path = require("path")
const app = express();
const linereader= require("line-reader")
const port=80;

app.use('/static',express.static('static'))
app.use(express.urlencoded())

app.set("view engine","pug")

app.set("views",path.join(__dirname,"views"))

app.get("/",(req,res)=>{
    const message="ahmad is a good boy"
    const parameters={'title':"Ahmad",'message':message}
    res.status(200).render("index.pug",parameters)
})


global.flag=true;

app.post("/",(req,res)=>{
    fame=req.body
    global.Name=JSON.stringify(fame)
    Name="\n"+Name
    linereader.eachLine("index.txt",(line,last)=>{
        // console.log(line)
        let obj= JSON.parse(line)
        if(fame.Name==obj.Name){
            console.log("customer already exist")
            global.flag=false
            global.Name=""
        }
            console.log(flag)
            console.log(obj)
            if(flag){
                fs.appendFileSync("index.txt",Name,"utf-8",()=>{})
            }
        }) 
        const message="Form is submitted successfully"
    const parameters={'msg':fame.Name}
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