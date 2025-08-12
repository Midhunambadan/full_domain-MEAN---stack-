

let arr = [10, 5, 8, 20, 15];

const result=arr.reduce((acc,curr)=>{

    let [first,second]=acc

    if(curr>first){
        return [curr,first]
    }else if(curr>second && curr!==first){
        return  [first,curr]
    }

    return acc
},[-Infinity,-Infinity])

console.log(result[1])
