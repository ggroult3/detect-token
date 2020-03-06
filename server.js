const express = require('express')
const app = express()
const path = require('path')

app.get('/',function(req,res){
    app.use('/',express.static(path.join(__dirname,'/assets')))
    res.status(200).sendFile(path.join(__dirname,'/assets/html/index.html'))
    console.log('Connected')
})

console.log('Server launched !')
app.listen(8080)