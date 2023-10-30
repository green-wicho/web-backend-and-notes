// let oneLinnerJoke = require('one-liner-joke')

// console.log(oneLinnerJoke.getRandomJoke())

// let figlet = require("figlet");

// figlet("YO!YO!", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });

const express = require('express')
const app = express()

app.use(function(req,res,next){
    res.send('hey this is middlewares')
    next();
})

app.get('/', function (req,res){
    res.send('Hey I am rathan veer')
})

app.use(function(req,res,next){
    console.log("hello from middleware2")
    next();
})

app.get('/contact', function (req,res){
    res.send('Contact Me: My insta id is - rathanarts')
})


app.listen(3000)