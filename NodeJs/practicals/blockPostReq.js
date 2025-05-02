
const expres=require('express')
const isPost = require('./middleware/isPost')
const app=expres()
const PORT=3999
app.use(isPost)


app.get('/',(req,res)=>{
    res.send('hello this is  get request')
})

app.post('/login',(req,res)=>{
    res.send('POST request (should be blocked)')
})

app.post('/signin',(req,res)=>{
    res.send('signin request found')
})

app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`)
})