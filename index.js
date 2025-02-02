
const express = require('express')
const app = express();
const mongoose = require('mongoose')
const productRouter = require('./routes/ProductRouter')


app.use(express.json())
app.use('', productRouter)

app.listen('5000', ()=> console.log('server running on 5000'))

mongoose.connect('mongodb://localhost:27017/sample')
    .then(()=>console.log('db connected'))
    .catch((err)=> console.log(err.message))

app.get('/', (req, res)=> {
    res.send('server reacted')
})

