
const res1= new Promise((resolve)=>setTimeout(resolve,1000,'res1'))
const res2= new Promise((resolve)=>setTimeout(resolve,500,'res2'))


Promise.race([res1,res2]).then((res)=>{
    console.log(res)
})