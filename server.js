const express = require('express')
const app = express()
const path = require('path')

app.use('/',express.static(path.join(__dirname,'/assets')))

app.get('/',function(req,res){
    app.use('/',express.static(path.join(__dirname,'/assets')))
    res.status(200).sendFile(path.join(__dirname,'/assets/html/index.html'))
    console.log('Connected to the webapp !')
})

app.get('/assets/js/:filename', function(req,res){
    const filename = req.params.filename
    res.status(200).sendFile(path.join(__dirname + "/assets/js/" + filename))
    console.log('File ' + filename + ' charged !')
})

app.get('/assets/css/style.css', function(req,res){
    res.status(200).sendFile(path.join(__dirname + "/assets/css/style.css"))
    console.log('File style.css charged !')
})

app.get('/assets/pattern/:pattern', function(req,res){
    const pattern = req.params.pattern
    res.status(200).sendFile(path.join(__dirname + "/assets/pattern/" + pattern))
    console.log('Pattern ' + pattern + ' charged !')
})

app.get('/assets/camera_para.dat', function(req,res){
    res.status(200).sendFile(path.join(__dirname + "/assets/camera_para.dat"))
    console.log('File camera_para.dat charged !')
})

console.log('Server launched !')
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'))
console.log('You can connect yourself locally to this address : localhost:' + app.get('port'))
