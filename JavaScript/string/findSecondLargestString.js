


// -find the second longest word in sentence without inbuilt , split()

let str='hello my name is midhun ambadan'

// result=midhun

let word = '';
let largest = '';
let second = '';

for (let i = 0; i <= str.length; i++) {
  // End of word (space or end of string)
  if (str[i] === ' ' || i === str.length) {
    if (word.length > largest.length) {
      second = largest;
      largest = word;
    } else if (word.length > second.length && word !== largest) {
      second = word;
    }
    word = ''; // Reset for next word
  } else {
    word += str[i];
  }
}

console.log(second)