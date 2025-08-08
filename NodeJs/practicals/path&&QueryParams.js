

const express = require('express');
const app = express();

//-------------path params----------------
// ---path params (http://localhost:3000/sum/10/20)---------


app.get('/sum/:a/:b', (req, res) => {
  const a = Number(req.params.a);
  const b = Number(req.params.b);
 
  const total = a + b;
  res.send(`sum:== ${total}`)
//   res.redirect(`/result/${total}`);
});


//-------Query parms (http://localhost:3000/finalSum?a=15&b=35)---------
app.get('/finalSum',(req,res)=>{
    const a=Number(req.query.a)
    const b=Number(req.query.b)

    const total=a+b
    res.send(`Total sum==${total}`)

})

app.get('/details',(req,res)=>{
    const name=req.query.name
    const age=req.query.age
    const place=req.query.place

    res.send(`User details is:${name},${age},${place}`)
})

app.get('/:name',(req,res)=>{
    const name=req.params.name
    res.send(`hello ${name}`)
})

app.get('/result/:total', (req, res) => {
  res.send(`Sum is ${req.params.total}`); 
});

///---------------------------------







app.listen(3000, () => {
  console.log('Server on http://localhost:3000');
});

///---------------------------------