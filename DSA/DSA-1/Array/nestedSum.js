
let arr=[{a:[8,9,10],m:[''],b:20,e:{j:[98,85,46,'1']}},'08','12hello',{},['m',1],{c:[30,6],d:[29,18,'hello1',40]},7,'1','gopi',{mf:4}]

let sum=0

function sumOfArry(arr){
    for(let i=0;i<arr.length;i++){
        let value=arr[i]
        if(typeof value=='number' || typeof value=='string'){
            let num=parseInt(value)
            if(!isNaN(num)){
                sum+=num
            }
        }else if(Array.isArray(value)){
            sumOfArry(value)
        }else if(typeof value==='object' && value!==null){
            sumOfArry(Object.values(value))
        }
    }

    return sum
}

console.log(sumOfArry(arr))

//------------------------------------------------------------

// 

// let arr=[2,'1',4,'3','midhun']
// let value=0
// for(let i=0;i<arr.length;i++){
//     if(typeof arr[i]==='number'){
//         value+=arr[i]
//     }else if(typeof arr[i]=='string'){
//         let num=parseInt(arr[i])
//         if(!isNaN(num)){
//             value+=num
//         }        
//     }
// }

// console.log(value);


//-------------------------------------------------

// let val=1

// let str='12hey'
// let num=parseInt(str)

// if(!isNaN(num)){
//     val+=num
// }

// console.log('111',val );

//=------------------------------------------

// let arr=[1,2,[3,[4,5,6,7],8],9]

// console.log()

// function flatArray(arr,res=[]){
  
//   for(let i=0;i<arr.length;i++){
    
//     if( typeof arr[i]=='object' && arr[i].constructor==Array){
      
//         flatArray(arr[i],res)
//     }else if(typeof arr[i]==='number'){
//       res.push(arr[i])
//     }
//   }
  
//   return res
  
// }

// console.log(flatArray(arr))

