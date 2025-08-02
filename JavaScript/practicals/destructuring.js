//-----------Array --------------

const numbers = [10, 20, 30, 40];

// Destructure the first two values and rest
const [first, second, ...rest] = numbers;

console.log(first);  // 10
console.log(second); // 20
console.log(rest);   // [30, 40]


//------------Object-------------
const person = {
  name: "Midhun",
  age: 25,
  location: "Kerala",
  job: "Developer"
};

// Destructure name and rest of the properties
const { name, ...others } = person;

console.log(name);    // Midhun
console.log(others);  // { age: 25, location: "Kerala", job: "Developer" }
