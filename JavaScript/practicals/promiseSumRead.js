const fs=require('fs')


let arr=[3,2,4,5,1]

function sum(arr){

    return new Promise((resolve,reject)=>{
let result = arr.reduce((acc, curr) => acc + curr)

        resolve(result)
    }).then((result)=>{
    console.log(result)



let data=result.toString()
  fs.writeFile('midhunambadan.txt',data,(err)=>{

    if(err){
        console.log(err)
    }
    console.log(data, 'file created');
})
let time=setInterval(() => {
  
fs.readFile('midhunambadan.txt','utf-8',(err,data)=>{
    if(err){
        console.log(err)
    }
    console.log(data)
})
}, 2000);

setTimeout(() => {
    clearInterval(time)
    console.log('time interval worked')
}, 6000);



})
}



sum(arr)




