const fs=require('fs')

const readStream=fs.createReadStream('note.txt','utf8')

const writeStream=fs.createWriteStream('destination.txt')

readStream.pipe(writeStream)

writeStream.on('finish',()=>{
    console.log('File successflly copied');
    
})