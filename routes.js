const express = require('express');
const app = express();


const data = ['code','sleep','eat']


module.exports = (app)=>{


    app.get('/',(req, res)=>{
        res.render('home',{wish:data})
    })
    
    
    app.get('/about',(req, res)=>{
        res.render("about")
    })

    app.post('/sent',(req,res)=>{
        console.log(req.body.item)
        data.push(req.body.item)
        res.send(data)
    })
    
}



