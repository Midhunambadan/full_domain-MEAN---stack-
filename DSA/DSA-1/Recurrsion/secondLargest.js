

let arr=[5,2,6,3,7,8,4]

// result=6

let lar=-Infinity
let secLar=-Infinity
function secondLargest(arr,i=0){

  if(i>=arr.length) return secLar
  if(arr[i]>lar){
    secLar=lar
    lar=arr[i]
  }
  
  if(arr[i]<lar && arr[i]>secLar) secLar=arr[i]
  
  return secondLargest(arr,i+1)
  
}

console.log(secondLargest(arr))