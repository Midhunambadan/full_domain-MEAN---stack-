let person = {
    name: "Midhun Ambadan",
    age: 25,
    place: "Kothamangalam"
};

// person.location=person.place
// delete person.place;

for(let value in person){
    person[value]='Hello'
    
}

console.log(person)