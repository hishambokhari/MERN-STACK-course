const express = require('express');
const app = express();
const port = 5000

// serving static files
app.use(express.static('public'))

// '/' Route
app.get('/',(req, res)=>{
    res.sendFile(__dirname + '/index.html')
})

// '/About' route
app.get('/about',(req, res)=>{
    res.send("This is the about page")
})

// '/Home' route
app.get('/home',(req, res)=>{
    res.send({msg:"walalalala"})
})

app.listen(port,()=>{
    console.log("server is running on port " + port)
})

