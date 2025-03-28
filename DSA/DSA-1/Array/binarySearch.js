
let arr=[2,4,6,8,12]
// let str=['a','b','c','d','e']
// let word='midhun'

function binarySearch(arr,target){
    let left=0
    let right=arr.length-1

    while(left<=right){
        let mid=Math.floor((left+right)/2)

        if(target===arr[mid]){
            return mid
        }else if(target<arr[mid]){
            right=mid-1
        }else {
            left=mid+1
        }
    }

    return -1
}
// console.log(binarySearch(arr,8))
// console.log(binarySearch(str,'b'))

// console.log(binarySearch(arr,'u'))

//---------Binary Search using recurrsion


function recurrsiveBinary(arr,target,left,right){
    if(left>right) return -1

    let mid=Math.floor((left+right)/2)

    if(target===arr[mid]){
        return mid
    }else if(target<arr[mid]){
        return recurrsiveBinary(arr,target,left,mid-1)
    }else{
        return recurrsiveBinary(arr,target,mid+1,right)
    }
}

function recurrsiveBinarySearch(arr,target){
    return recurrsiveBinary(arr,target,0,arr.length-1)
}

console.log(recurrsiveBinarySearch(arr,8))