//sum of diagonal values

let matrix = [
  [1, 2, 3, 4],
  [4, 3, 2, 1],
  [6, 5, 4, 3],
  [8, 6, 5, 3],
];

let sum = 0;
for (let i = 0; i < matrix.length; i++) {
  sum += matrix[i][i];
}

console.log(sum);
