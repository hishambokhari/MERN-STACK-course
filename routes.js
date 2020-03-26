const express = require('express');
const app = express();


var data = ['code','sleep'];


module.exports = (app)=>{

// get routes
    app.get('/',(req, res)=>{
        res.render('home',{wish:data})
    })
    
    
    app.get('/about',(req, res)=>{
        res.render("about")
    })
    // post routes
    app.post('/sent',(req,res)=>{
        console.log(req.body.item)
        data.push(req.body.item)
        res.send(data)
    })
    
    // delete routes

    app.delete('/remove/:id',(req,res)=>{

       data = data.map(item=>{
            if(item!=req.params.id){
                return item
            }
        })
        console.log('Deleted',req.params.id)
        res.send(data)
    })


}



