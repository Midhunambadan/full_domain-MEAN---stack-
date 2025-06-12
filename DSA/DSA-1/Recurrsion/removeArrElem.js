
//--------with using  splice---------

// let arr=[3,4,2,7,5]
// function removeRecursion(arr,value,i=0){
//    if(i>=arr.length-1) return arr
//    if(arr[i]==value) arr.splice(i,1)
//    return removeRecursion(arr,value,i+1)
// }


// console.log(removeRecursion(arr,2))

//----------------------------------------

//------------without using any inbuilt method



let arr=[3,4,2,7,5]

function removeRecursion(arr,value,i=0,j=0){
   
   if(i>=arr.length){
      arr.length=j
      return arr
   } 
   
   if(arr[i]!==value){
      arr[j]=arr[i]
      return removeRecursion(arr,value,i+1,j+1)
   } 
   return removeRecursion(arr,value,i+1,j)
}

console.log(removeRecursion(arr,2))