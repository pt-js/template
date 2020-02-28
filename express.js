const express = require('express')
let bodyparser = require("body-parser");
let cors = require('cors')

let app = express()
app.use(cors())
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use((req,res, next) => {
    console.log(req.method, req.path)
    next()
})


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/data1', (req, res) => {
    console.log('headers', req.headers, 'query:', req.query, 'body:', req.body)
    res.send([1,2])
})
app.get('/data2', (req, res) => {
    console.log('headers', req.headers, 'query:', req.query, 'body:', req.body)
    res.send({count: 7})
})

app.post('/:id', (req, res) => {
    res.send(`get id of ${req.params.id}`)
})

PORT = process.env.PORT || '3000'
app.listen(PORT, () => {
    console.log(`app listen in ${PORT}`)
})