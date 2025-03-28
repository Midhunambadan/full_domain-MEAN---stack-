let people = [
    { name: "Midhun Ambadan", age: 25, place: "Kothamangalam",roll:10 },
    { name: "Pavithra", age: 24, place: "Ernakulam",roll:7 },
    { name: "Ananthan", age: 26, place: "Thrissur",roll:6 }
]


let sum=0
for(let i=0;i<people.length;i++){
    if(people[i].age%2!==0){
        sum+=people[i].age
    }
}
console.log(sum)