//Create a function checkResult(marks):

/*Rules:
marks is an array of numbers
If empty → return "No marks"
Calculate average
If average ≥ 50 → "Pass"
Else → "Fail"*/

function checkResult(marks) {
  if (!Array.isArray(marks) || marks.length === 0) {
    return "No Marks";
  }
  let i = 0,
    total = 0;
  while (i < marks.length) {
    total += marks[i];
    i++;
  }
  let avg = total / marks.length;
  if (avg >= 50) {
    return "You Passed";
  } else {
    return "You failed";
  }
}
console.log(checkResult([40, 60, 70]));
console.log(checkResult([20, 30]));
console.log(checkResult([]));
