


// -find the longest consecutive repeating characters in string. 

// output=y
const str='fftttgffyyyyeee'

console.log(str)
let flag
let count=1
let large
for(let i=0;i<str.length;i++){
  flag=true
  if(str[i]==str[i+1]){
    count++
  }else if(str[i]!==str[i+1]){
    count=1
    flag=false
  }
}
