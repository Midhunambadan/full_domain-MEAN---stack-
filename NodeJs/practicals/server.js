const express=require('express')
const app=express()
const PORT=3001
const path = require('path');
app.set('view engine','ejs')
app.set('views', path.join(__dirname, 'views'));


app.get('/ejs',(req,res)=>{
    console.log('hellloo welcome to ejs page');
    res.render('index')
})

app.get('/',(req,res)=>{
    console.log('hellloo welcome to html page');
    res.sendFile(path.join(__dirname,'views','name.html'))
})

app.

app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`)
})