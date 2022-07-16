const path =require("path");
const fs= require("fs");
const http=require("http");
const { Server } = require("https");
        let About = fs.readFileSync(path.join(__dirname,"./html/grid.html"));
        let home =fs.readFileSync("../home.html");

//    const server =  http.createServer((req,res)=>{
//                 res.writeHead(200,{'Content-type':"text/html"})
//                 console.log(req.url)
//                 let url =req.url;
//                 if(url=="/"){
//                         res.end(home)
//                 }
//                 else if(url=="/About"){
//                         res.end(About)
//                 }
//                 else if(url=="/ContactUs"){
//                         res.end("THis is contact us")
//                 }
//                 else if(url=="/Services"){
//                         res.end("<h1>This is Services</h1>")
//                 }
//                 else{
//                         res.statusCode=404;
//                         res.end("<h1>404 not fount</h1>")
//                 }
//         })
// server.listen(80,'127.0.0.1' ,()=>{
//         console.log("listning....")
// })



function fuu(){
        console.log(" hello ahmad")
}

module.exports={
        fun : fuu,
        name:"hello"
}