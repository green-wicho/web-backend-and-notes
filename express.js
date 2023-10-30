const express = require('express')
const app = express();

app.use(function(req,res,next){
    next()
})

app.get('/',function(req,res){
    console.log(req)
    res.send("HI please enter your name and login to our website ________")
})

app.get('/profile',function(req,res){
    res.send("Hey! you are in your profile in our website!! <style>body{background-color: black; color:white}</style>")
})

app.listen(65535)