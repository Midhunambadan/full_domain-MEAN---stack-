
// 2  find the name of the employee with the longest name
const employees = [
    { id: 1, name: "John Do444444444444444e", department: "Engineering" },
    { id: 2, name: "Alice Johnson", department: "Marketing" },
    { id: 3, name: "Bob Smith", department: "Human Resources" },
    { id: 4, name: "Emma Brown", department: "Finance" },
    { id: 5, name: "Michael Wilson", department: "Sales" }
];



let largestName=''
let len=0
for(let i=0;i<employees.length;i++){
    if(employees[i].name.length>len){
        len=employees[i].name.length
        largestName=employees[i].name
    }
}


// console.log(largestName);

//print the following
const arr = [23,5,7,3,5,2,87]
// 87
// 2 87
// 5 2 87
// 3 5 2 87
// 7 3 5 2 87

function pattern1(arr){
    for(let i=arr.length-1;i>=2;i--){
        let temp=[]
        for(let j=i;j<arr.length;j++){
            temp.push(arr[j])
            
        }
        console.log(temp);
    
    }

}
// pattern1(arr)


//Total sum ====================
const products = [
    { a: [1, 2, 3] },
    { b: [4, 5] },
    { c: [6, 7] },
    { d: [8,9,10,11] }
  ];


  function totalSum(products){
    let sum=0
    for(let i=0;i<products.length;i++){

        for(let value in products[i]){
            let item=products[i][value]
            sum+=item.reduce((curr,acc)=>curr+acc)
        }
          }

      return sum
      
  }

//   console.log(totalSum(products));
  
  

  //---------find the number of 0 in this 2D array [

  let arr2=[
  [0, 1, 0, 1],
  [1, 0, 1, 0],
  [0, 1, 0, 1],
  [1, 0, 1, 0]
]

function findZero(arr2){
    let count=0
    for(let i=0;i<arr2.length;i++){
        for(let j=0;j<arr2[i].length;j++){
            if(arr2[i][j]==0){
                count++
            }
        }
    }

    return count
}

// console.log(findZero(arr2));


//----------------------------------------------------------------------

const data = [
    { id: 1, customer: "John Doe", total: 150, status: "completed" },
    { id: 2, customer: "Emma Smith", total: 200, status: "pending" },
    { id: 3, customer: "Liam Johnson", total: 300, status: "cancelled" },
    { id: 4, customer: "Olivia Brown", total: 120, status: "completed" },
    { id: 5, customer: "Noah Davis", total: 180, status: "pending" },
    { id: 6, customer: "Sophia Wilson", total: 250, status: "cancelled" },
    { id: 7, customer: "James Miller", total: 400, status: "completed" },
    { id: 8, customer: "Mia Anderson", total: 100, status: "pending" },
    { id: 9, customer: "Ethan Martinez", total: 220, status: "cancelled" },
    { id: 10, customer: "Isabella Taylor", total: 330, status: "completed" },
  ];


  let result={
    completed:[],
    pending:[],
    cancelled:[]
  }
  
  function makeOrderArrayObject(data){

    for(let i=0;i<data.length;i++){
        let item=data[i]
        console.log(item.status);
        if(item.status==='completed'){
            result.completed.push(item)
        }else if(item.status==='pending'){
            result.pending.push(item)
        }else{
            result.cancelled.push(item)
        }
        
    }
    return result

  }
  

//   console.log(makeOrderArrayObject(data));
  

  //result like
//    {
//   completed: [
//     { id: 1, customer: "John Doe", total: 150, status: "completed" },
//     { id: 4, customer: "Olivia Brown", total: 120, status: "completed" },
//     { id: 7, customer: "James Miller", total: 400, status: "completed" },
//     { id: 10, customer: "Isabella Taylor", total: 330, status: "completed" }
//   ],
//   pending: [
//     { id: 2, customer: "Emma Smith", total: 200, status: "pending" },
//     { id: 5, customer: "Noah Davis", total: 180, status: "pending" },
//     { id: 8, customer: "Mia Anderson", total: 100, status: "pending" }
//   ],
//   cancelled: [
//     { id: 3, customer: "Liam Johnson", total: 300, status: "cancelled" },
//     { id: 6, customer: "Sophia Wilson", total: 250, status: "cancelled" },
//     { id: 9, customer: "Ethan Martinez", total: 220, status: "cancelled" }
//   ]
// }

//----------------------------------------------------------------------


// find the student with highest average score

const students = [
    { name: "Alice Johnson", scores: [85, 90, 78], age: 20 },
    { name: "Bob Smith", scores: [88, 76, 92], age: 22 },
    { name: "Charlie Brown", scores: [90, 85, 87], age: 21 },
    { name: "David Wilson", scores: [70, 80, 75], age: 19 },
    { name: "Emily Davis", scores: [95, 92, 89], age: 23 },
    { name: "Frank Miller", scores: [60, 65, 70], age: 20 },
    { name: "Grace Taylor", scores: [88, 91, 85], age: 22 },
    { name: "Hannah Martinez", scores: [72, 80, 78], age: 21 },
    { name: "Isaac White", scores: [85, 87, 90], age: 20 },
    { name: "Jack Anderson", scores: [93, 89, 95], age: 24 }
  ];

  function studentAvgScore(students){
    let resultName=''
    let maxAvg=0
    for(let i=0;i<students.length;i++){
        let item=students[i]
        let sum=(item.scores.reduce((curr,acc)=>curr+acc))
        let avg=sum/item.scores.length

        if(avg>maxAvg){
            maxAvg=avg
            resultName=item.name
        }
        
    }

    return resultName
  }

//   console.log(studentAvgScore(students));
  

  //------------------------------------------------------------------

  // find the total amount spend by the customers who have a completed order
const customers = [
    {
        orderId: 1,
        name: "John Doe",
        items: [
            { product: "Laptop", price: 1200 },
            { product: "Mouse", price: 25 }
        ],
        status: "completed"
    },
    {
        orderId: 2,
        name: "Alice Johnson",
        items: [
            { product: "Phone", price: 800 },
            { product: "Headphones", price: 150 }
        ],
        status: "pending"
    },
    {
        orderId: 3,
        name: "Bob Smith",
        items: [
            { product: "Tablet", price: 600 },
            { product: "Keyboard", price: 75 }
        ],
        status: "completed"
    },
    {
        orderId: 4,
        name: "Emma Brown",
        items: [
            { product: "Monitor", price: 300 },
            { product: "Webcam", price: 90 }
        ],
        status: "pending"
    },
    {
        orderId: 5,
        name: "Michael Wilson",
        items: [
            { product: "Smartwatch", price: 250 },
            { product: "Wireless Charger", price: 50 }
        ],
        status: "completed"
    }
];


function findTotalAmountByCompletedOrder(customers){
    let result={}

    for(let i=0;i<customers.length;i++){
        let total=0
        if(customers[i].status=='completed'){
            
            for(let j=0;j<customers[i].items.length;j++){
                total+=customers[i].items[j].price
            }
            result[customers[i].name]=total
        }
    }
    return result
}

console.log(findTotalAmountByCompletedOrder(customers));

// result: { 'John Doe': 1225, 'Bob Smith': 675, 'Michael Wilson': 300 }