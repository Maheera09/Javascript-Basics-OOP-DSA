// Step 1: action functions
function addOne(n) {
  return n + 1;
}
function square(n) {
  return Math.pow(n, 2);
}
function double(n) {
  return n + n;
}
function isEven(n) {
  if (n % 2 === 0) return true;
  else return false;
}

// Step 2: higher-order function (number)
function processNumber(num, actionFn) {
  return actionFn(num);
}

// Step 3: higher-order function (array)
function processArray(arr, actionFn) {
  return arr.map(actionFn);
}

console.log(processNumber(5, addOne)); // 6
console.log(processNumber(4, square)); // 16
console.log(processNumber(3, double)); // 6
console.log(processNumber(10, isEven)); // true

console.log(processArray([1, 2, 3], addOne)); // [2,3,4]
console.log(processArray([2, 3, 4], square)); // [4,9,16]
console.log(processArray([1, 2, 3], isEven)); // [false,true,false]
