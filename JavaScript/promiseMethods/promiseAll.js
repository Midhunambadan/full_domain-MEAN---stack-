
const num1=Promise.resolve(30)
const num2=Promise.resolve(40)
const num3=Promise.reject(50)

Promise.all([num1,num2,num3]).then((res)=>{
    console.log(res.reduce((acc,curr)=>acc+curr))
})
.catch((err)=>{
    console.log(err)
})



