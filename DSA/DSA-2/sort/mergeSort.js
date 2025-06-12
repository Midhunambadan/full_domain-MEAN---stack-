

const arr = [6, 3, 4, 8, 2];

function mergeSort(arr){
    if(arr.length<2) return arr

    let mid=Math.floor(arr.length/2)
    let left=arr.slice(0,mid)
    let right=arr.slice(mid)

    return merge(mergeSort(left),mergeSort(right))


}



function merge(left,right){
    let sortedArr=[]

    while(left.length && right.length){
        if(left[0]<right[0]){
            sortedArr.push(left.shift())
        }else{
            sortedArr.push(right.shift())
        }
    }

    return [...sortedArr,...left,...right]

}

console.log(mergeSort(arr))


//------------------------------------------



// let arr=[
//     {
//       "name": "Alice",
//       "age": 20
//     },
//     {
//       "name": "Bob",
//       "age": 22
//     },
//     {
//       "name": "Charlie",
//       "age": 21
//     },
//     {
//       "name": "David",
//       "age": 23
//     }
//   ]


// function mergeSort(arr){
  
//   if(arr.length<2) return arr
  
//   let mid= Math.floor(arr.length/2)
//   let left=arr.slice(0,mid)
//   let right=arr.slice(mid)
  
//   return merge(mergeSort(left),mergeSort(right))
  
// }


// function merge(left,right){
//   let sortedArr=[];
//   while(left.length && right.length){
    
//     if(left[0].name.length<right[0].name.length){
//       sortedArr.push(left.shift())
//     }else{
//       sortedArr.push(right.shift())
//     }
//   }
  
//   return [...sortedArr,...left,...right]
// }


// console.log(mergeSort(arr));
