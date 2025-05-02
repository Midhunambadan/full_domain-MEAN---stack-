
const express=require('express')
const app=express()
const fs=require('fs')

app.use(express.json())

app.get('/',(req,res)=>{
    fs.readFile('note.txt','utf8',(err,data)=>{
        res.send(data)
    })
})

app.post('/write',(req,res)=>{
    let content=req.body

    fs.writeFile('note.txt',JSON.stringify(content),(err)=>{
        res.send('Successfulyy , check the note.txt file')
    })
})

app.listen(3000,()=>{
    console.log('server is running on : http://localhost:3000');
    
})