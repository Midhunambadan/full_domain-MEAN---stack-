
function sum(a,b){
    let sum=a+b
    return new Promise((resolve)=>{
        resolve(sum)
    })
}

function multiple(a){
    let multiple=a*2
    return new Promise((resolve)=>{
        resolve(multiple)
    })
}

function divide(a){
    let divide=a/2
    return new Promise((resolve)=>{
        resolve(divide)
    })
}

sum(10,20)
.then((sum)=>multiple(sum))
.then((product)=>divide(product))
.then((result)=>console.log(result))