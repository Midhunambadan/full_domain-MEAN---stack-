
const {Worker}=require('worker_threads')

const path=require('path')
console.log('main thread starting')

const worker=new Worker(path.join(__dirname,'zchild.js'))

worker.on('message',(mesg)=>{
    console.log(mesg)
})


console.log('worker therd continue');
