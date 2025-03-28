let arr = [2, 4, 5, 9, 11, 12,5, 15, 17, 20];

function isPrime(num){
    if (num <= 1) return false
    if (num === 2) return true
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num%i==0){
            return false
        }
    }
    return true
}

function sumofPrime(){

    let sum=0
    let result=[]
    let obj={}
    for(let i=0;i<arr.length;i++){
        if(!obj[arr[i]] && isPrime(arr[i])){
            obj[arr[i]]=true
            result.push(arr[i])
            sum+=arr[i]
        }
    }
    return  sum  
}


// console.log(sumofPrime(arr));

//---------remove Prime number---------Inplace without using inbuilt method

let arr1=[1,2,3,4,5,6,7,8,9,10,11]

function removePrime(arr1){
    let j=0
    let len=arr1.length
    for(let i=0;i<len;i++){
        let item=arr1[i]
        // let prime=isPrime(item)
        if(!isPrime(item)){
            arr1[j]=item
            j++
        }
    }
    arr1.length=j
    return arr1
}

// console.log(removePrime(arr1))


//--------duplicates prime remove---------


//result=1,2,3,4,5,4,6
let arr2=[1,2,1,3,3,1,2,4,5,4,6,2,3]

function duplicatePrimeRemove(arr2){
    let len=arr2.length
    let j=0
    let obj={}
    for(let i=0;i<len;i++){
        let item=arr2[i]
        if(!obj[item] && isPrime(item)){
            obj[item]=true
            arr2[j]=item
            j++
        }else if(!isPrime(item)){
            arr2[j]=item
            j++
        }
    }
    arr2.length=j
    return arr2
}


// console.log(duplicatePrimeRemove(arr2))

//---------Duplicates prime number remove and only unique prime and  not prime

//-------------------this code is not right
//  result=[5,6,3,6,9,7]
let arr3=[1,6,7,5,3,1,6,5,9,7]

function uniquePrimeNumber(arr3){
   let seen={}
   let j=0

   for(let i=0;i<arr3.length;i++){
    let item=arr3[i]
    if(seen[item]){
        seen[item]++
        arr3[j]=item
        j++
    }else if(!seen[item] && isPrime(item)){
        seen[item]=1
        arr3[j]=item
        j++
    }else if(!isPrime(item)){
        arr3[j]=item
        j++
    }
   }
   arr3.length=j
   return arr3
}
console.log(uniquePrimeNumber(arr3)) //this code is not right