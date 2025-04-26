

let arr=[1,2,3,4,5,6,7]


for(let i=0;i<arr.length/2;i++){
    [arr[i],arr[arr.length-1-i]]=[arr[arr.length-1-i],arr[i]]
}


console.log(arr)