import express from 'express'
import data from "./data.js"

const app = express()
const port = process.env.PORT || 5000

app.get('/api/products', (req, res) => {
    res.send(data.products)
})

app.get('/', (req, res) => {
    res.send('Hello World!1111111111111111')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})