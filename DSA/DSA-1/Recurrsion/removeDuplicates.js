

// Remove the duplicate from an array using recusion 


let arr=[1,2,1,1,3,4,3,4,4,5,6,7,8,7,8,10,10,10,8,9]

// result=[1,2,3,4,5,6,7,8,9]

function removeDuplicates(arr,i=0,res=[]){
  
  if(i>=arr.length) return res
  
  if(!res.includes(arr[i])){
    res.push(arr[i])
  
  }
  
  return removeDuplicates(arr,i+1,res)
  
}

console.log(removeDuplicates(arr))