

const p1 = Promise.resolve("Success");
const p2 = Promise.reject("Failed");
const p3 = Promise.resolve("Done");


Promise.allSettled([p1,p2,p3]).then((res)=>{
    console.log(res);
    
}).catch((err)=>console.log(err))