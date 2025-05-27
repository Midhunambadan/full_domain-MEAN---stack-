
// Return the reverse of a string.




function reverse(name,i=0,j=name.length-1){
  
  if(i>=j) return name
  
  if(i!==j){
    let temp=name[i]
    name[i]=name[j]
    name[j]=temp
  }
  return reverse(name,i+1,j-1)
  
  
}

let str='midhun'
let name=str.split('')

console.log(reverse(name).join(''))