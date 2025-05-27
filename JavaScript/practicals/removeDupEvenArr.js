// remove duplicate even numbers from an array
//result=[2,1,4,3,1,6]

let arr=[2,6,1,1,2,4,3,1,6,4]
let res=[]
function evenDuplicatesRemove(arr){
    let len=arr.length
    let j=0
    let seen={}

    for(let i=0;i<len;i++){
        let item=arr[i]
        if(!seen[item] && item%2==0){
            seen[item]=true
            arr[j]=item
            j++
        }else if(item%2!==0){
            arr[j]=item
            j++
        }
    }
    arr.length=j
    return arr
}

console.log(evenDuplicatesRemove(arr))