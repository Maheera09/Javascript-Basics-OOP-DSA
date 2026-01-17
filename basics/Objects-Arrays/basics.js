/*Create an object called user with:
-name
-age
-email
Add a method:
-getInfo() → returns a string with user info*/

const user = {
  name: "Maheera",
  age: 23,
  email: "maheera@gmail.com",
  getInfo: function () {
    return `User's Information is ${this.name}, ${this.age}, and email is ${this.email}`;
  },
};

console.log(user?.getInfo());

//------------------------------------------------------
/*Tasks:
Add property inStock
Update price
Delete name*/

const product = {
  name: "Laptop",
  price: 1200,

  updatePrice: function (price) {
    this.price = price;
  },
  deleteName: function () {
    delete this.name;
  },
};
product.inStock = true;
console.log(`This ${product.name} costs ${product.price}`);
product.updatePrice(1500);
console.log(`This ${product.name} costs ${product.price}`);
product.deleteName();
console.log(product.name);

//------------------------------------------------------

/*Create an array of numbers:
Use map() to double values
Use filter() to keep even numbers
Use reduce() to find sum*/

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(array.map((n) => n + n));
console.log(array.filter((n) => n % 2 === 0));
console.log(array.reduce((sum, n) => (sum = sum + n)));

//------------------------------------------------------

/*Tasks:
Get array of names
Get users older than 21
Find first user under 21*/
const user1 = [
  { name: "Ali", age: 22 },
  { name: "Sara", age: 25 },
  { name: "Ahmed", age: 20 },
];
const names = user1.map((n) => n.name);
console.log(names);

const olderThan21 = user1.filter((n) => n.age > 21);
olderThan21.forEach((n) =>
  console.log(`People older than 21 are ${n.name} and their age is ${n.age}`)
);

const firstUnder21 = user1.find((n) => n.age < 21);
console.log(`First under 21 is ${firstUnder21.name}`);

//------------------------------------------------------

/*Tasks:
Get all subjects
Get total score
Convert object to array of [key, value]*/
const scores = {
  math: 80,
  english: 70,
  science: 90,
};
const subjects = Object.keys(scores);
console.log(subjects);

const numbers = Object.values(scores);
const sum = numbers.reduce((sum, n) => sum + n, 0);
console.log(sum);

const arr = Object.entries(scores);
console.log(arr);

//------------------------------------------------------

/*Tasks:
Safely access profile.address.city
Provide default value "Unknown"*/

const user2 = {
  profile: {
    name: "Ali",
  },
};
const city = user2?.profile?.address?.city ?? "Unknown";
console.log(city);

//------------------------------------------------------

/*Tasks:
Create a copy
Update age in copy
Ensure original is unchanged*/

const user3 = { name: "Ali", age: 22 };
const copyUser = { ...user3 }; //creates a new object, not a reference
console.log(copyUser);
console.log(user3);
copyUser.age = 25;
console.log(copyUser);
console.log(user3);

//------------------------------------------------------

/*Tasks:
Merge arrays
Add value 5 at end without mutation*/

const a = [1, 2];
const b = [3, 4];
const c = a.concat(b);
console.log(c);
i = c.lastIndexOf(5);
console.log(i);
