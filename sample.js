//Binary Search

let arr=[20,30,40,50,60,70]

function binarySearch(target,arr){
    let left=0
    let right=arr.length-1

    while(left<=right){
        
        let mid=Math.floor((left+right)/2)
        if(target==arr[mid]){
            return mid;
        }else if( target <arr[mid]){
            right=mid-1
        }else{
            left=mid+1
        }
    }

    return -1
}

console.log(binarySearch(70,arr))

function recursiveBinarySearch(arr,target,left=0,right=arr.length-1){

    if(left > right) return -1
    let mid=Math.floor((left+right)/2)
    if(target===arr[mid]){
        return mid
    }else if(target<arr[mid]){
        return recursiveBinarySearch(arr,target,left,mid-1)
    }else{
        return recursiveBinarySearch(arr,target,mid+1,right)
    }
    
}

console.log(recursiveBinarySearch(arr,20));
