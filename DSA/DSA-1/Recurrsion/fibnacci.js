
// Fn=(Fn-1+Fn-2)  fibonacci Equation

function fibonacci(n){
    if(n<=1) return n
    else return fibonacci(n-1)+fibonacci(n-2)
}

console.log(fibonacci(8))