require('dotenv').config()
const express = require('express')

const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.send('Hello World')
})
app.get('/login', (req , res) => {
    res.send('<h1>Now you are able to login:</h1>')
})
app.get('/about_us' ,(req, res) =>{
    res.send('<h2>Hi weclome ...Aboutus...</h2>')
})
app.get('/contect_us' ,(req,res) => {
    res.send('<h3> contect us .....</h3>')
})

app.listen(process.env.PORT , () => {
    console.log (`Example app listening on port ${port}`)
})