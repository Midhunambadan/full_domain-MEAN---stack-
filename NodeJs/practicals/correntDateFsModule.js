const path=require('path')
const fs=require('fs')
const date=new Date().toLocaleDateString()

const pathFile=path.join(__dirname,'../note.txt')
console.log(date);

fs.writeFile('date.txt',date,(err)=>{
    if(!err){
        console.log('Date printed success');
        
    }
})
