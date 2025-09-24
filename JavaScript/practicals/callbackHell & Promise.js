
function add(a,b,callback){
    let result=a+b
    callback(result)
}

function multiply(a,callback){
    let result=a * 2
    callback(result)
}

function divide(a,callback){
    let result=a/2
    callback(result)
}

add(5,3,function(sum){
    multiply(sum,function(product){
        divide(product,function(final){
            console.log('Final answer Callback hell',final);
            
        })
    })
})


//---Using Promise-------------

function add1(a,b){
    return new Promise((resolve)=>{
        let result=a+b
        resolve(result)
    })
}

function multiply1(a){
    return new Promise((resolve)=>{
        let result=a*2
        resolve(result)
    })
}

function divide1(a){
    return new Promise((resolve)=>{
        let result = a/2
        resolve(result)
    })
}

add1(5,3)
        .then((sum)=>multiply1(sum))
        .then((product)=>divide1(product))
        .then((final)=>{
            console.log('final promise result',final);
            
        })