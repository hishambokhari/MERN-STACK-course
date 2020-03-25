const express = require('express');
const app = express();


data = {
    name:"hisham",
    status:"programmer"
}

module.exports = (app)=>{


    app.get('/',(req, res)=>{
        res.render('home',{data:data})
    })
    
    
    app.get('/about',(req, res)=>{
        res.send("This is the about page")
    })

    app.get('/profile/:id',(req,res)=>{
        res.send("you are requested user no " + req.params.id)
    })
}


hh
