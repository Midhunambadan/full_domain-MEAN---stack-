  
  
  
  let arr=[1,2,3,4,5,6,7,8,9,11,17,19]
  
  function removeEvenNumber(arr,i=0,j=0){
    
    if(i>=arr.length){
      arr.length=j 
      return arr
    }
    
    
    if(arr[i]%2!==0){
      arr[j]=arr[i]
      return removeEvenNumber(arr,i+1,j+1)
    }
    
    return removeEvenNumber(arr,i+1,j)
   
  }
  
  console.log(removeEvenNumber(arr))