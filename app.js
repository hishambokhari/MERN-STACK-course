const express = require('express');
const app = express();
const port = 5000

// serving static files
app.use(express.static('public'))

// import routes 
require('./routes')(app);

app.set('view engine','ejs')

app.listen(port,()=>{
    console.log("server is running on port " + port)
})

