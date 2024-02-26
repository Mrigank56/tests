// const accountName = "Mrigank";
// let accountId = "21";
// var accountPswrd = "438783";
// accountEmailId = "mrigank13@gmail.com";

// console.table([accountName, accountId, accountPswrd, accountEmailId]);

let score = "45";
// console.log(typeof score);
let thisNumber = Number(score);
// console.log(typeof thisNumber);
// console.log(thisNumber);
let nevValue = -score;
// console.log(nevValue);
let hello = "hello ";
let world = "world";
hello = hello + world;
// console.log(hello);
let obj1 = {
  name: "Mrigank",
  Age: 22,
};
// console.log(obj1.name);
let date = new Date();
// console.log(date.toJSON());
// console.log(typeof date);

const user = {
  username: "Mrigank",
  cost: 999,
  Welcome_message: function () {
    // console.log(`${this.username}, welcome to website`);
  },
};

user.Welcome_message();
// console.log(this);

const test = (num1, num2) => num1 + num2;
// console.log(test(3, 8));
let t1 = 55;
let t2 = 55;
t1 === t2 ? console.log("equal") : console.log("unequal");

// const FilterByYear = books.filter((bk) => {
// return bk.publish > 2005;
// });

// console.log(FilterByYear);
let myTotal = myNums.reduce((acc, currval) => {
  return acc + currval;
}, 0);

console.log(myTotal);

myTotal = shoppingCart.price.reduce((acc, curr) => {
  return acc + currval;
}, 0);
