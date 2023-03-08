const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()
const port = process.env.PORT || 5000


app.get('/',(req,res)=>{
    res.send("Recipe app server running")
})

app.listen(port,()=>{
    console.log(`The app is rumming on port ${port}`)
})