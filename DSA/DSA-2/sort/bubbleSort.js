
// ----------Defintion of Bubble sort---------
    // Bubble sort is a straightforward sorting algorithm that repeatedly iterates
// through a list, comparing adjacent elements and swapping them if they are 
// in the incorrect order. This process continues until no more swaps are needed,
// indicating that the list is sorted. The algorithm's name comes from the way
// larger elements "bubble" to the end of the list with each pass. 

let arr=[-4,-3,10,4,5,-10,40]

function bubbleSort(arr){
    let swapped;
    do{
        swapped=false
        for(let i=0;i<arr.length-1;i++){
            if(arr[i]>arr[i+1]){
                let temp=arr[i]
                arr[i]=arr[i+1]
                arr[i+1]=temp
                swapped=true
            }
        }
    }while(swapped)
}
bubbleSort(arr)
console.log(arr)