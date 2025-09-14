// 35-1 Six JavaScript Fundamentals that you need to know

const arr = ["salim", "jsaim", "halim", "manik"];
// arr.push("halim");
// arr.pop();
// arr.shift();
// arr.unshift("jalal");
// const array = arr.slice(1, 3);
// const array = arr.splice(1, 3);
// console.log(array);

const object = {
  name: "sagor",
  age: 13,
  friends: arr,
};
// console.log(object.friends);

//  35-2 template string, arrow function, spread operator

// rest operator
const rest = (...rest) => {
  console.log(rest);
};
rest(1, 2, 3, 4);

// spread operator
const numbers = [1, 2, 3, 4];
const newNumber = [...numbers, 23, 34];
// console.log(newNumber);

// 35-3 Array methods map filter find forEach
const products = [
  { name: "samsunS6", brand: "samsung", price: 4000 },
  { name: "redmi6", brand: "xaomi", price: 2000 },
  { name: "iphone12", brand: "apple", price: 3000 },
  { name: "iphone14", brand: "apple", price: 5000 },
  { name: "waltonPrimo", brand: "walton", price: 4000 },
];

//  if need a array from object of this array use Map()
const Price = products.map((product) => product.price);
// array of price returned
// console.log(Price);

// when we need only show object after that it has some work use forEach() it doesn't return any value.
products.forEach((product) => console.log(product));

// when we need specific all value, use filter() it returns values
const results = products.filter((product) => product.brand === "apple");
// console.log(results);

// when we need specific single value use find()
const result = products.find((product) => (product.name = "iphone12"));
// console.log(result);

// 35-4 Array and object Destructuring
// array
const friends = ["apu", "amir", "jamal"];
const [friends1, friends2, friends3] = friends;
// console.log(friends2);
// objects
const person = {
  name: "samim",
  age: 12,
  friend: friends,
};
const { name, age, friend } = person;
// console.log(age);

// 35-5 JSON, Fetch, keys, values, array add or remove using dots
const data = {
  mane: "sobuj",
  age: 23,
  friendAll: friends,
  family: {
    name: "munsi",
    prime: "father",
  },
};

const JSONdata = JSON.stringify(data);
// console.log(JSONdata);
const OBJdata = JSON.parse(JSONdata);
// console.log(OBJdata);

// keys, values
const keys = Object.keys(data);
// console.log(keys);
const values = Object.values(data);
// console.log(values);

// array add
const mobile = [
  { name: "samsunS6", brand: "samsung", price: 4000 },
  { name: "redmi6", brand: "xaomi", price: 2000 },
  { name: "iphone12", brand: "apple", price: 3000 },
  { name: "iphone14", brand: "apple", price: 5000 },
  { name: "waltonPrimo", brand: "walton", price: 4000 },
];

const AddMobile = {
  name: "realme",
  brand: "oppo",
  price: 6000,
};

const newProducts = [...mobile, AddMobile];
// console.log(newProducts);
// remove
const remainingProduct = products.filter((p) => p.brand !== "apple");
// console.log(remainingProduct);

// 35-6 (advanced) truthy, false Ternary operator, shortcut and or
// 0,-0,"", false, null, undefined,NaN are falsy

const test = 10;
// if (test) {
//   console.log(`test is truthy`);
// } else {
//   console.log(`test is falsy`);
// }

// ternary operator
test ? console.log(`truthy`) : console.log(`falsy`);
const res = ((test) => 10 && test < 20) ? `truu` : `false`;
// console.log(res);

const isActive = 0;

const showUser = () => console.log(`user is green`);
const hideUser = () => console.log(`hide user`);

// for true or false
// isActive ? showUser() : hideUser();
// only for true
// isActive && showUser();
// only for false
isActive || hideUser();

// 35-7 Explore Local storage and session storage with JSON
const handleSubmit = () => {
  const name = document.getElementById("input").value;
  const id = document.getElementById("id").value;
  const data = { id, name };
  localStorage.setItem(id, JSON.stringify(data));

  document.getElementById("input").value = "";
  document.getElementById("id").value = "";
};
const getLocalStorage = localStorage.getItem("1");
console.log(JSON.parse(getLocalStorage));

const handleClear = () => {
  localStorage.clear();
};

// 35-8 dot vs bracket notation
