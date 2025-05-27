
function sum(num){
    return new Promise((resolve)=>{
     setTimeout(()=>{
        // console.log(num)
        resolve(num)
    },1000)
   })
}
function sum1(num){
     return new Promise((resolve)=>{
     setTimeout(()=>{
        resolve(num)
    },2000)
   })
}
function sum2(num){
   return new Promise((resolve)=>{
     setTimeout(()=>{
        // console.log(num)
        resolve(num)
    },3000)
   })
}



async function add(){
   try {
        let res1 = await sum(10)
        let res2 = await sum1(20)
        let res3 = await sum2(30)
        return res1 + res2 + res3

   } catch (error) {
    console.log(error);
    
   }
}
add().then((res)=>{
    console.log(res);
    
})

