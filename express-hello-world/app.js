const express = require('express')
const app = express()

app.get('/',(req,res) => {
    res.send({'msg':'Hello world!'})
})

app.listen(3000)