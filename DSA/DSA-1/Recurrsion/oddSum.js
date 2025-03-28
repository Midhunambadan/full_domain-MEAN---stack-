
// recursive function to print sum of odd numbers in an array

let arr=[1,2,3,4,5,6,7,8,9]
function oddSum(arr,i=0){
    if (arr.length==i) return 0

    let value=0
    if(arr[i]%2!==0) value=arr[i]

    return value+oddSum(arr,i+1)
}

console.log(oddSum(arr))