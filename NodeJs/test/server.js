const express = require('express');
const app = express();
const fs = require('fs');
const path=require('path')

app.use(express.json()); 

app.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname,'../views','user.html'))
    res.sendFile(path.join(__dirname,'user.html')) 
});

app.get('/create', (req, res) => {   // ✅ Fixed route
    fs.writeFile('midhun.txt', 'Hello user midhn', (err) => {
        if (err) {
            console.log('Error found', err);
            return res.status(500).send('Failed to create file');
        }

        console.log('File created');
        res.send('File successfully created');
    });
});


app.get('/read',(req,res)=>{
    fs.readFile('ambadan.txt','utf-8',(err,data)=>{
        if(err){
            console.log(err);
        }
        if(data){
            console.log('file readed---',data);
            res.send('file readed')
        }
    })
})

app.get('/rename',(req,res)=>{
    fs.rename('midhun.txt','ambadan.txt',(err)=>{
        if(err){
            console.log(err)
        }

        console.log('file renamed')
        res.send('file renamed')
    })
})

app.get('/append',(req,res)=>{
    fs.appendFile('ambadan.txt','Enthada mone...',(err)=>{
        if(err){
            console.log(err)
        }

        console.log('file append')
        res.send('file append')
    })
})

app.get('/unlink',(req,res)=>{
    fs.unlink('ambadan.txt',(err)=>{

        if(err){
            console.log('err found',err)
        }
        console.log('file deleted')
        res.send('filed deleted')
    })
})
// app.get('/replace',(req,res)=>{
//     fs.
        
// })

app.listen(3000, () => {
    console.log(`Server running at http://localhost:3000`);
});
