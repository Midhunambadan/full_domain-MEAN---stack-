

// fib=0,1,1,2,3,5,8,13,21 etc...

function fibonacci(num){
    let arr=[0,1]
    for(let i=2;i<num;i++){
        arr[i]=arr[i-1]+arr[i-2]
    }
    return arr
}
let num=5

console.log(fibonacci(num));
