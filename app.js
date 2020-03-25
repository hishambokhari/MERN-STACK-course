const express = require('express');
const app = express();
const port = 5000

app.get('/',(req, res)=>{
    res.send("Hello world")
})

app.get('/about',(req, res)=>{
    res.send("This is the about page")
})

app.listen(port,()=>{
    console.log("server is running on port " + port)
})

