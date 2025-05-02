

//------Quick sort--------
// Quick sort is an efficient, in-place sorting algorithm that follows
// a divide-and-conquer approach. It works by selecting a 'pivot' element
// from the array and partitioning the other elements into two sub-arrays,
// according to whether they are less than or greater than the pivot. The 
// sub-arrays are then sorted recursively.

let arr=[-4,-3,10,4,5,-10,40]

function quickSort(arr){
    if(arr.length<2){
        return arr
    }

    let pivot = arr[arr.length-1]
    let left=[]
    let right=[]

    for(let i=0;i<arr.length-1;i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }

    return [...quickSort(left),pivot,...quickSort(right)]
}


console.log(quickSort(arr));
