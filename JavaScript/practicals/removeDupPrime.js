

function isPrime(num){
 

    if (num <= 1) return false;
    if (num == 2) return true;

    for(let i=2;i<=num/2;i++){
        if(num%i==0) return false
    }
    return true
}

let arr=[2,2,4,7,5,7,5,4,8]

function removeDuplicatePrime(arr){
    let seen={}
    let j=0
    let len=arr.length

    for(let i=0;i<len;i++){
        let item=arr[i]
        if(!seen[item] && isPrime(item)){
            seen[item]=true
            arr[j]=item
            j++
        }else if(!isPrime(item)){
            arr[j]=item
            j++
        }
    }
    arr.length=j
    return arr
}

console.log(removeDuplicatePrime(arr))