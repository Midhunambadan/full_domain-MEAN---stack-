
let num=17
function isPrime(num,i=2){
    if(num<2) return false
    if(i>=num ) return true
    if(num%i===0) return false
    return isPrime(num,i+1)

}

console.log(isPrime(num))