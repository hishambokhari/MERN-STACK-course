const express = require('express');
const app = express();
const port = 5000
const bodyParser = require('body-parser')

// serving static files
app.use(express.static('public'))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// import routes 
require('./routes')(app);

app.set('view engine','ejs')

app.listen(port,()=>{
    console.log("server is running on port " + port)
})

