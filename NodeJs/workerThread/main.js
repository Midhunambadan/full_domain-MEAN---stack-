const {Worker}=require('worker_threads')
const path=require('path')

console.log('Main thread starting');

const worker = new Worker(path.join(__dirname,'worker.js')); // ✅ CORRECT


worker.on('message',(mesg)=>{
    console.log('Received from worker:',mesg)
})

// worker.on('exit', (code) => {
//   console.log(`👋 Worker exited with code ${code}`);
// });

console.log('Main thread working continues');
