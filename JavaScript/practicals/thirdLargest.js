let arr=[6,4,6,-7,2,3,-9]

// thridlargest=6

function thirdLargest(arr){
  
  let lar=-Infinity;
  let sec=-Infinity;
  let third=-Infinity;
  
  for(let i=0;i<arr.length;i++){
    
    if(arr[i]>lar){
      third=sec
      sec=lar
      lar=arr[i]
    }
    
    if(arr[i]<lar && arr[i]>sec){
      third=sec
      sec=arr[i]
    }
   
    
    if(arr[i]<lar && arr[i] < sec && arr[i]>third ){
      third=arr[i]
    }
    
  }
  
  return third
}

console.log(thirdLargest(arr))