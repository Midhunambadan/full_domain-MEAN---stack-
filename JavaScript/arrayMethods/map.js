// let nums = [1, 2, 3, 4]

// let newArray=nums.map((item)=>item+item)

// console.log(newArray)


//--------------------------------------

const users=[
    {fistName:'Midhun',lastName:'Ambadan',age:25,place:'Kothamangalam'},
    {fistName:'Alvin',lastName:'Mohan',age:27,place:'Muvattupuzha'},
    {fistName:'Ananthakrishnan',lastName:'KR',age:26,place:'Idukki'}
]


let result=users.filter((x)=>x.age>25).map((item)=>item.fistName +' '+ item.lastName)
console.log(result);
