
// recursive function to print sum of odd numbers in an array

// let arr=[1,2,3,4,5,6,7,8,9,10]

// function oddSum(arr,i=0){
//     if (arr.length==i) return 0

//     let value=0
//     if(arr[i]%2!==0) value=arr[i]

//     return value+oddSum(arr,i+1)
// }

// console.log(oddSum(arr))


//-------------------------------------------------



let arr=[1,2,,2,3,4,5,8,6,2]

function evenSum(arr,i=0){
 if(i>=arr.length) return 0
 
 return (arr[i]%2==0?arr[i]:0)+evenSum(arr,i+1)
}

console.log(evenSum(arr))
