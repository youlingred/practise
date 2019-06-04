const express = require('express')
const app = express()
app.use(express.static(__dirname))
app.get('/api',function(req, res){
console.log(req)
})
app.listen(8000)