let arr=[1,2,3,4,5,6,5,7,6,5,3]

function primeSum(arr,i=0,j=2,sum=0){
  
  if(i>=arr.length) return sum
  
  if(arr[i]<2) return primeSum(arr,i+1,2,sum)
  
  
  if(j > Math.sqrt(arr[i])) return primeSum(arr,i+1,2,sum+arr[i])
  
  if(arr[i]%j==0) return primeSum(arr,i+1,2,sum)
  
  return primeSum(arr,i,j+1,sum)
    
}



console.log(primeSum(arr))

