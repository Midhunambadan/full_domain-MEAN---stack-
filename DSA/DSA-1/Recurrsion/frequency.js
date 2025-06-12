

let arr = [3, 2, 1, 3, 2, 5, 4];

function frequencyOfElem(arr,i=0,seen={}){
    if(i>=arr.length) return seen
    seen[arr[i]]=seen[arr[i]]?seen[arr[i]]+1:1
    return frequencyOfElem(arr,i+1,seen)

}

console.log(frequencyOfElem(arr))
