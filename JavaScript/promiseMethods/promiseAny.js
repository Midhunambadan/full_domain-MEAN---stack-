const p1=Promise.reject('Error 1')
const p2=Promise.resolve('resolve 1')
const p3=Promise.resolve('resolve 2')

Promise.any([p1,p2,p3]).then((res)=>{
    console.log(res)
}).catch((err)=>console.log(err))