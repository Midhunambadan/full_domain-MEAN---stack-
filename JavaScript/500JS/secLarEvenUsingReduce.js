


// Using reduce find the second smallest even number)??


let arr=[3,5,8,6,8,3,9,4,11]
// output=4

let lar=-Infinity
let result=arr.reduce((acc,curr)=>{
  if(curr%2==0 && curr>lar){
    acc=lar
    lar=curr
  }
  
  if(curr%2==0 && curr<lar && curr>acc){
    
    acc=curr
  }
  
  return acc
},Infinity)


console.log(result)