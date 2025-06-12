// Given an object with key-value pairs, remove the key that has the lowest value.

const scores = {
  alice: 50,
  bob: 70,
  charlie: 40,
  dave: 60,
};

// let sort=Object.fromEntries(Object.entries(scores).sort((a,b)=>a[1]-b[1]))
// let firstKey = Object.keys(sort)[0]
// delete sort[firstKey]
// console.log(sort)

let lowKey = Object.keys(scores)[0];
let lowValue = scores[lowKey];

console.log(lowKey, lowValue);

function removeKey(scores) {
  for (let i in scores) {
    if (scores[i] < lowValue) {
      lowKey = i;
      lowValue = scores[i];
    }
  }

  return lowKey;
}

console.log(removeKey(scores));

delete scores[lowKey];

console.log(scores);
