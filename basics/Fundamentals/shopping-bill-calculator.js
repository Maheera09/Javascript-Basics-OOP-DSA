//Create a function calculateBill(prices):

/*Rules:
prices is an array of numbers
If array is empty → return "No items"
Calculate total price
If total ≥ 1000 → apply 10% discount
Return final amount*/

function calculateBill(prices) {
  if (!prices || prices.length === 0) {
    return "No items";
  }

  let totalPrice = 0;
  for (let i = 0; i < prices.length; i++) {
    if (typeof prices[i] !== "number") {
      return "Invalid price detected";
    }
    totalPrice += prices[i];
  }

  if (totalPrice >= 1000) {
    let discountedPrice = 0;
    let temp = totalPrice * 0.1; //or to simplify calculation  let discountedPrice = totalPrice * 0.9;
    discountedPrice = totalPrice - temp;
    return `Congratulations! You have been given 10% disocunt. Your total bill is ${discountedPrice}`;
  } else {
    return `Your total bill is ${totalPrice}`;
  }
}

console.log(calculateBill([]));
console.log(calculateBill([500, 600]));
console.log(calculateBill([200, 300]));
console.log(calculateBill());
