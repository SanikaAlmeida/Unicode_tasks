const express=require('express')
const mongoose=require('mongoose')
const url='mongodb://127.0.0.1:27017/PairDBex'

const app=express()
app.use(express.json())   //middleware that allows to handle json request body
mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology: true})  //connect to MongoDB database
const con=mongoose.connection

con.on('open',()=>{
    console.log("Connected")
})
con.on('error', err => {
    console.error('connection error:',err)
  })

const pairRouter=require('./route/pairs')  //import the module that handles the routing
app.use('/pairs',pairRouter)

  app.listen(8080,()=>{
    console.log("Running on port 8080")
  })