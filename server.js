const { response } = require('express');
const express = require('express');
const app = express();
const port = 3090;


app.set("view engine","ejs");

app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.render("main");
})







app.listen(port,() => console.log("listening",port));