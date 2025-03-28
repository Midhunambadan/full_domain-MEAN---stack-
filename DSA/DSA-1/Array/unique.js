const arr= [1,1,2,2,3,3,4,5,6,6,'a','a']

function frequency(arr){
    let seen={}
    for(let i=0;i<arr.length;i++){
        if(seen[arr[i]]){
            seen[arr[i]]++
        }else{
            seen[arr[i]]=1
        }
    }

    console.log(seen)
    let unique=[]

    for(let i in seen){
        if(seen[i]===1){
            unique.push(Number(i))
        }
    }

    return unique

}

console.log(frequency(arr))