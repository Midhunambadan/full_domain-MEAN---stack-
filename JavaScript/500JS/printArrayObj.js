let arr=[1,2,3,4,5]



// [
//    {a1:1},
//    {a1:1,a2:2},
//    {a1:1,a2:2,a3:3},
//    {a1:1,a2:2,a3:3,a4:4},
//    {a1:1,a2:2,a3:3,a4:4,a5:5}
// ]


let result=[]

function arrObj(arr){
   let obj={}
   for(let i=0;i<arr.length;i++){
         obj[`a${i+1}`]=arr[i]
         result.push({...obj})
      }
   
   return result
}

console.log(arrObj(arr))