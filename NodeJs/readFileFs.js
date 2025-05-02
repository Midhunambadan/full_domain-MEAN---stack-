

const fs=require('fs')

// fs.readFile('note.txt','utf8',(err,data)=>{
//     if(err){
//         console.log(err);
        
//     }
//     console.log(data);
    
// })

fs.writeFile('newfile.txt','This is new file ',(err)=>{
    if(err){
        console.log(err);
        
    }
    console.log('New file created');
})


fs.appendFile('newfile.txt','Message append has successfull',(err)=>{
    if(err){
        console.log(err);
        
    }
    console.log('File append work');
    
})

fs.unlink('newfile.txt',(err)=>{
    if(err){
        console.log(err);
        
    }

    console.log('File deleted');
    
})