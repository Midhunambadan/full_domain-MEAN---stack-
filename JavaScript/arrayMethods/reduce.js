const users=[
    {fistName:'Midhun',lastName:'Ambadan',age:25,place:'Kothamangalam'},
    {fistName:'Alvin',lastName:'Mohan',age:27,place:'Muvattupuzha'},
    {fistName:'Ananthakrishnan',lastName:'KR',age:26,place:'Idukki'}
]

let count=users.reduce((acc,curr)=>{
    if(acc[curr.age]){
        acc[curr.age]=acc[curr.age]+1
    }else{
        acc[curr.age]=1
    }
    return acc
},{})



let names=users.reduce((acc,curr)=>{
    if(curr.age<27){
        acc.push(curr.fistName)
    }
    return acc
},[])

console.log(count,names);
