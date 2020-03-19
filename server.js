const express = require('express')
const app = express()
const path = require('path')

app.get('/',function(req,res){
    app.use('/',express.static(path.join(__dirname,'/assets')))
    res.status(200).sendFile(path.join(__dirname,'/assets/html/index.html'))
    console.log('Connected to the webapp !')
})

app.get('/assets/pattern/:pattern', function(req,res){
    const pattern = req.params.pattern
    res.status(200).sendFile(path.join(__dirname + "/assets/pattern/" + pattern))
    console.log('Pattern ' + pattern + ' is charged !')
})

console.log('Server launched !')
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'))
console.log('You can connect yourself locally to this address : localhost:' + app.get('port'))
