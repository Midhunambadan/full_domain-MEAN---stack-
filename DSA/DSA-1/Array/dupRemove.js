

let arr=[4,2,3,2,5,6,3]


function removeDuplicate(arr){
    let duplicate=[]
    for(let i=0;i<arr.length;i++){
        if(!duplicate.includes(arr[i])){
            // unique[arr[i]]=true
            duplicate.push(arr[i])
        }
    }

    return duplicate
}

console.log('removeDuplicate',removeDuplicate(arr))

function deleteDuplicates(arr){
    let obj={}
    let result=[]

    for(let i=0;i<arr.length;i++){
        if(!obj[arr[i]]){
            obj[arr[i]]=true
            result.push(arr[i])
        }
    }

    return result
}

console.log('deleteDuplicates',deleteDuplicates(arr));
