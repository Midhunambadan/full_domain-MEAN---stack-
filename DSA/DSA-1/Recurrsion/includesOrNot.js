let arr = [18, 32, 3, 14, 7, 26];
let target = 7;

function isIncludes(arr, i = 0) {
  if (i >= arr.length) return 'Value not found';
  if (arr[i] === target) return 'Value found at index ' + i;

  return isIncludes(arr, i + 1);
}

console.log(isIncludes(arr));
