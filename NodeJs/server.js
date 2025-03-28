

const express=require('express')
const app=express()
const PORT=3000

app.get('/',(req,res)=>{

    res.send('helllo')
})

app.get('/user/:id',(req,res)=>{
    const params=req.params.id
    res.send(`params: ${params}`)
})


app.get('/search',(req,res)=>{
    const {name,age}=req.query
    res.send(`query: ${name}`+age)
})

app.listen(PORT,()=>{
    console.log('server is running on http://localhost:3000')
})