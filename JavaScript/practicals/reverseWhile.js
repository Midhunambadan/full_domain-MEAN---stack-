
let arr=[1,2,3,4,5,6]

function reverse(arr){
  let i=0
  while(i<=arr.length-1-i){
    [arr[i],arr[arr.length-1-i]]=[arr[arr.length-1-i],arr[i]]
    i++
   arr.length-1-i-1
  }
  return arr
}

let res=reverse(arr)
console.log(res)