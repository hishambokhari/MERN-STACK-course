const express = require('express');
const app = express();
const mongoose = require('mongoose');
const {mongourl} = require('./config/keys')
const Wish = require('./models/wish');

var data = ['code','sleep'];


mongoose.connect(mongourl);


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

        const Item = new Wish({
            wish:req.body.item
        });
        Item.save().then(data=>{
            console.log('saved')
        }).catch(err=>{
            throw err;
        })

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



