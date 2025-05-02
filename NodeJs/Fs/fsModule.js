
// file system module
// Uses:-read files,create files,update files,delete files,rename files



// read file

// const fs=require('fs')

// fs.readFile('./text.txt','utf-8',(err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log(data);
// })



// create file

// const fs=require('fs')

// fs.writeFile('./new.txt','This is new file',(err)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log('file created')
// })


// appenFile

// const fs=require('fs')

// fs.appendFile('new.txt','This is new file \n',(err)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log('file created')
// })


// Rename  a file

// const fs=require('fs')

// fs.rename('./test.txt','./sample.txt',(err)=>{
//    if(err){
//     console.log(err);
//    } 
//    console.log('file renamed');
// })


// Delete files

// const fs=require('fs')

// fs.unlink('./sample.txt',(err)=>{
//   if(err){
//     console.log(err)
//   } 
//    console.log('file deleted')
// })





//-------------------Stream----------

// const fs = require('fs');

// const readStream = fs.createReadStream('input.txt');
// const writeStream = fs.createWriteStream('output.txt');

// readStream.pipe(writeStream);