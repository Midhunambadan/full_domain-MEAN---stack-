
const express=require('express')
const app=express()
const blockGet = require('./middleware')

app.use(blockGet)

app.get('/',(req,res)=>{
    res.send('helllllllllllllll')
    
})

app.listen(4000,()=>{
    console.log(`http://localhost:4000`);
    
})