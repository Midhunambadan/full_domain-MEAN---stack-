// In an array of transaction objects use reduce() to calculate the total money left.

const transactions = [
  { type: "income", amount: 100 },
  { type: "expense", amount: 30 },
  { type: "income", amount: 50 },
  { type: "expense", amount: 20 }
];

// result=100


// let total=0
// for(let i=0;i<transactions.length;i++){
//   if(transactions[i].type=='income'){
//     total+=transactions[i].amount
//   }else {
//     total-=transactions[i].amount
//   }
// }



let balance=transactions.reduce((acc,curr)=>{
  if(curr.type=='income'){
    acc+=curr.amount
  }else{
    acc-=curr.amount
  }
    return acc
},0)


  console.log(balance)
