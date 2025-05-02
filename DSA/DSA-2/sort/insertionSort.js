

//----------Insertion sort-----------
// Insertion sort is a simple sorting algorithm that builds the final sorted array 
// one element at a time.It takes each element from the input, compares it with the
// elements before it, and inserts it into its correct position by shifting bigger 
// elements to the right.

let arr=[-4,-3,10,4,5,-10,40]

function insertionSort(arr){
    for(let i=1;i<arr.length;i++){
        let temp=arr[i]
        let j=i-1
        while(j>=0 && arr[j]>temp){
            arr[j+1]=arr[j]
            j--
        }
        arr[j+1]=temp
    }

    return arr
}

console.log(insertionSort(arr));
