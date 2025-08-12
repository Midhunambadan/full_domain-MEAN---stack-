// function Person(name) {
//     this.name = name;
// }

// Person.prototype.greet = function() {
//     console.log(`Hello, I am ${this.name}`);
// };

// let user = new Person("Midhun");
// user.greet(); // Found in prototype


function Person(name){
    this.name=name
}

Person.prototype.greet= function(){
    console.log('This is a good boy '+this.name)
}

let user=new Person('Midhun')
user.greet()
