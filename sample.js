// // let obj = { a: 20, b: 30, c: 40, d: 50 };

// // obj.add('m':200)
// // for(let i in obj){
// //     console.log(i)
// // }


// // let apples = "2";
// // let oranges = "3";

// // console.log( +apples+ +oranges )

// // console.log( typeof Number("444dd"))

// let arr = [5, 8, 4,2, 3, 9, 10, 1, 2, 6, 7];

// function isPrime(num) {
//     if(num<2) return true
//   for (let i = 2; i < num; i++) {
//     if (num % i == 0) {
//       return false;
//     }
//   }
//   return true;
// }


// function sum(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (isPrime(arr[i])) {
//       sum += arr[i];
//     }
//   }
//   return sum;
// }

// // console.log('Sum of odd =',sum(arr));

// function frequency(arr){
//     let seen={}
//     count=0
//     for(let i=0;i<arr.length;i++){
//         if(seen[arr[i]]){
//             seen[arr[i]]++
//         }else{
//             seen[arr[i]]=1
//         }
//     }

//     return seen
// }


// // console.log(frequency(arr))



let str=''
console.log(!isNaN(str))