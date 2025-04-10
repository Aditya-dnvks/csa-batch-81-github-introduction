// console.log("Hello Website");

// 5 seconds
// DOM. Event listeners, Async tasks
//binary --> Human to Machine

// Human --> Programming languages --> Binary code ---> Machine
// Python, Java, C, C++, JS etc.

// JS --> Keywords, Syntax and concepts

//1. Data types
// Primitive -- number, string, boolean,undefined, null etc.
// Non Primitive -- Arrays, Objects, Map, Set etc.

// 2. Variables:
//let, const

// let x = 20;
// console.log(typeof typeof x); //20

// x = 100.78;
// console.log(typeof x); //100

// x = `Hello Website`;
// console.log(typeof x); // 150

// x = true;
// console.log(typeof x); //40

// let y = null ;
// console.log(y);
// y = 78;
// console.log(y);

// let y = 30;
// y = 80;
// console.log(y); //80

// const x = 30;
// console.log(x);

//Operators:
// 1. Arthiematoc
// 2. Logical
// 3. Comparsion
// 4. Assignment operators
// 5. Bitwise Opertors
// 6. Pre-incremnemt, post incremnet & pre-decrement, post-decrement

// 1. Arthematic: +, -, *, /, %

// console.log(1 + 3);
// console.log(2 - 2);
// console.log(5 * 6);
// console.log(10244565 / 565);
// console.log(5 ** 4);
// console.log(21 / 7);
// console.log(21 % 6);

//2. Comparsion op:
// console.log(5 > 10);
// console.log(5 < 10);
// console.log(5 >= 5);
// console.log(5 <= 10);
// console.log(5 == "5"); // loose equal to --> value
// console.log(5 !== "5"); // strict equal to --> data type, value

// let x = 10 // single  = is an assignment operator

//3. Assignmnet ops:

// let x = 50;
// console.log(x);

// // x = x + 20;
// x += 20;
// console.log(x);

// // x = x - 30;
// x -= 30;
// console.log(x);

// // x = x * 5;
// x *= 5;
// console.log(x);

// // x = x / 10;
// x /= 10;
// console.log(x);

// let y = x + 50;
// console.log(y);
// console.log(x);

// x %= 10;
// console.log(x);

// 4. pre, post
// let x = 5;
// console.log(++x); //6
// console.log(x++); // 6 prints, 7
// console.log(x); // 7

// let y = 7;
// console.log(--y); //6
// console.log(y--); //6
// console.log(y); //5

//5. Logical operators:

// 1. AND - &&
// 2. OR - ||
// 3. NOT - !

// const condition1 = false;
// const condition2 = false;

// console.log(condition1 && condition2);

// const condition1 = false;
// const condition2 = false;

// console.log(condition1 || condition2);
// console.log(!true);
// console.log(5 != 5); //false

// let age = 16;
// let height = 170;

// let condition1 = age > 18; //false
// let condition2 = height > 160; // true

// console.log(condition1 || condition2); //true

// if-else

// if(condition){
//     //this code runs if condition is true
// }else{
//   //this code runs if condition is false
// }
// let age = 13;

// if (age > 18) {
//   console.log("Condition is true");
// } else {
//   console.log("Condition is false");
// }

// if (false) {
//   //  block of code to be executed if condition1 is true
//   console.log("1");
// } else if (false) {
//   //  block of code to be executed if the condition1 is false and condition2 is true
//   console.log("2");
// } else if (false) {
//   console.log("3");
// } else if (false) {
//   console.log("4");
// } else {
//   //  block of code to be executed if all the above conditions fail
//   console.log("Else block", "Everything else failed");
// }

// let time = 20;
// let greeting;
// if (time < 10) {
//   greeting = "Good morning";
// } else if (time < 20) {
//   greeting = "Good day";
// } else {
//   greeting = "Good evening";
// }

// console.log(greeting);

//type corecions: Implicit & Explicit

// console.log("Hello " + "World" + " " + "! ");
// console.log(null - "wrferf"); //NaN
// console.log(undefined + 3); //NaN

//falsy values - false, "", null, undefined, NaN, 0 ---> 0
//truthy values - Everything else true ---> 1

// if (NaN) {
//   console.log("Truthy");
// } else {
//   console.log("Falsy Value");
// }

// console.log(true + false + null + true);

// Explicit;

// let str = true;
// // str = String(str);
// str = toString(str);
// console.log(typeof str);

// let num = "356.777777";
// // num = Number(num);
// num = parseFloat(num);
// console.log(typeof num, num);

// let boo = 100;
// boo = Boolean(boo);
// console.log(boo);

// switch (expression) {
//   case x:
//     // code block
//     break;
//   case y:
//     // code block
//     break;
//   case y:
//     // code block
//     break;
//   case y:
//     // code block
//     break;
//   case y:
//     // code block
//     break;
//   default:
//   // code block
// }

// let cases = 8;
// let day;
// switch (cases) {
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//     day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case 6:
//     day = "Saturday";
//     break;
//   default:
//     day = "Invalid";
// }

// console.log(day);

//Loops:
//  for, while, do-while

// for (initialization; condition; update) {
//   // Code to execute if condition is met
// }

// for (let x = 5; x < 100; x += 5) {
//   console.log(x);
// }
// for (let x = 100; x >= 0; x--) {
//   console.log(x);
// }
// console.log("Loop terminated");

// initialiazation
// while(condition){

// code executes when condition is true
//     updation
// }

// let y = 0;
// while (y < 1000) {
//   console.log("Aditya");
//   y++;
// }

// console.log("While Loop terminated");

// let z = 11;
// do {
//   console.log(z);
//   z++;
// } while (z < 20);
// console.log("Do-While Loop terminated");

//dry:
// 1st iteration:
// x = 3
// 3< 100
// 3 prints
// x = x + 3 = 3 + 3 =6

// 2nd iteration:
// x = 6
// 6<100
// 6 prints
// x= 6+3 =9

// 34th iteration:
// x = 102
// 102<100 ---> false

// dry run:
// 1st iteration:
// let x  = 0
// 0 < 10 ---> true
// 0 print
// x = 1

//2nd iteration:
// x = 1
// 1<10 --> true
// 1 print
// x = 2

//11th iteration:
// x =10
// 10 <10 --> false

//Problems:
//1
// let age = 20;
// let height = 180;

// if (age >= 18 || height > 170) {
//   console.log("Eligible to vote");
// } else {
//   console.log("Not Eligible to vote");
// }

//2
// let angle1 = 80;
// let angle2 = 50;
// let angle3 = 50;

// //TRiangle  ---> Sum of angles 180

// if (angle1 + angle2 + angle3 === 180) {
//   console.log("Forms a traingle");

//   if (angle1 === 60 && angle2 === 60 && angle3 == 60) {
//     console.log("Equilateral triangle");
//   } else if (angle1 === angle2 || angle1 === angle3 || angle2 === angle3) {
//     console.log("Isocelses triangle");
//   } else {
//     console.log("Scalene triangle");
//   }
// } else {
//   console.log("No triangle can be formed");
// }

//Data structure: Arrays, Objects, Map, Set
// --> CRUD
// C --- Create
// R --- Read
// U --- Update
// D --- Delete

//Arrays:
// const arr1 = [3, 2.45454, "string", true, null, undefined, NaN, "string"];

// console.log(arr[2]); // Read
// arr[2] = "New"; // Update
// console.log(arr);

// // Create:
// let returnValue = arr.push("New 1");
// console.log(returnValue);
// // arr[7] = "New 1";
// console.log(arr);

// //Delete:
// let returnValue2 = arr.pop();
// console.log(returnValue2);
// arr.pop();
// console.log(arr);

// arr.splice(1, 3);
// console.log(arr);

// arr[100] = "100th"; //create
// console.log(arr);

//array methods:
// 1.lenght
// console.log(arr.length);
// console.log(arr[arr.length - 1]);

// 2. includes
// const value = arr.includes(2.4545);
// console.log(value);

// 3. shift, unshift
// arr.unshift("ergerg");
// console.log(arr);

// arr.shift();
// arr.shift();
// console.log(arr);

// 4. concat
// let arr2 = [4, 2, 1];
// const newVal = arr1.concat(arr2);
// console.log(newVal);

// 5.slice
// console.log(arr1);
// const newVal = arr1.slice(1, 4); //---> 1th index to 3rd index
// console.log(newVal);

//6. indexOf, lastIndexOf
// console.log(arr1.indexOf("string"));
// console.log(arr1.lastIndexOf("string"));

// 7. reverse
// arr1.reverse();
// console.log(arr1);

// 8. join --> arr to string
// const newVal = arr1.join("");
// console.log(newVal);

//find, map, reduce, filter, forEach, sort

// 9. sort
// const arr2 = [4, 2, 1, 1, 0, 5, 9, 2, 8, 6, 7, 3];
// arr2.sort();
// console.log(arr2);

// const arr = [99, 88, 23, 35, 69, 76, 30];

// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);
// console.log(arr[5]);

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] >= 35) {
//     console.log("pass");
//   } else {
//     console.log("fail");
//   }
// }

// for of loop
// for in loop

// for (let items of arr) {
//   console.log(items);
// }

// for (let index in arr) {
//   console.log(arr[index]);
// }

// break , continue

// const arr = [3, 5, 1, 3, 7, 9, 0, 8];

// for (let items of arr) {
//   if (items === 7) {
//     console.log("7 is found");
//     break;
//   }

//   console.log("not found", items);
// }

// for (let index in arr) {
//   console.log("1st iteration", index);
//   break;
//   console.log(arr[index]);
// }

// for (let items of arr) {
//   if (items === 7) {
//     continue;
//   }

//   console.log(items);
// }

// standard for variables:

// const 1d = "rtg"
// const _ab = "erf"

// const nameOfThePerson = "Aditya"; // camelCase

// console.log(nameOfThePerson.toUpperCase());

// js --> camelCase
// css --> kabab-case
// react components--> PasacalCase
// API Data, python ---> snake_case
// Constants, API_KEYS,.env --> Captial lettrs snake case API_KEY, MONGODB_CONFIG_URL

// nested loops, nested arrays
// const arr = [1, 2, 3, 5, 6, 7, "ty", true]; // --> 1D array

// const arr2 = [
//   [1, 2, 3, 5, 6],
//   [4, 5, 6, 0, 9],
//   [7, 8, 9, 7, 5],
//   [7, 8, 9, 7, 5],
// ]; // 2D array

// let m = arr2.length;
// let n = arr2[0].length;

// let sum = 0;
// for (let i = 0; i < m; i++) {
//   console.log("each row:", arr2[i]);
//   for (let j = 0; j < n; j++) {
//     sum += arr2[i][j];
//   }
// }

// console.log(sum);

// const arr = [5, 2, 1, 6, 7];

// let sum2 = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum2 += arr[i];
// }

// // "", 0, false, null, undefined, NaN
// console.log(sum2);
// 2--row , 3rd column
// 1 -- row, 2nd column

// console.log(arr2[0][2]);

// const arr3 = [
//   [1, 2, [4, 5]],
//   [7, 8],
// ]; //3D

// console.log(arr3[0][2][1]);

//syntax error, refrence error, logical error, timeout error

// console.log("Hello");
// console.log(a);
// console.log("Hello");

// {}, []
// const obj = {
//   name: "Aditya",
//   email: "aditya.dnvks@gmail.com",
//   "My Job": "Dev",
//   1: "Key as number",
// };

//CRUD ???
// Dot, Bracket;

// console.log(obj.email ) //READ
// console.log(obj["My Job"]);

// obj.age = 24; //Create
// console.log(obj);

// obj.name = 50; //Update
// console.log(obj);

// delete obj[1];
// console.log(obj);

// console.log(typeof [3, 6]);

// const obj = {
//   student1: {
//     name: "Lokeswar",
//     age: 20,
//     hobbies: {
//       cricket: true,
//       books: false,
//     },
//   },
//   student2: {
//     name: "Vamsi",
//     age: 23,
//     hobbies: {
//       cricket: false,
//       books: true,
//     },
//   },
// };

// console.log(obj.student1.hobbies.books);

//Object methods:

// const obj = {
//   name: "Aditya",
//   email: "aditya.dnvks@gmail.com",
//   "My Job": "Dev",
//   1: "Key as number",
// };

// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));

//Freeze, Seal

// Object.freeze(obj);
// // CRUD --> Only Read
// obj.city = "Hyd";
// console.log(obj);

// Object.seal(obj);
// // CRUD --> Only Read, Update
// obj.name = "Hyd";
// console.log(obj);

//Composite data structures:
// const obj = {
//   student1: {
//     name: "Lokeswar",
//     age: 20,
//     hobbies: ["Cricket", "Chess", "Books"],
//   },
//   student2: {
//     name: "Vamsi",
//     age: 23,
//     hobbies: ["Cricket", "Chess", "Books"],
//   },
// };

// console.log(obj.student1.hobbies[2]);

//Array of objects

// const arr = [
//   {
//     id: 1,
//     title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//     price: 109.95,
//     description:
//       "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//     category: "men's clothing",
//     image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//     rating: {
//       rate: 3.9,
//       count: 120,
//     },
//   },
//   {
//     id: 2,
//     title: "Mens Casual Premium Slim Fit T-Shirts ",
//     price: 22.3,
//     description:
//       "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
//     category: "men's clothing",
//     image:
//       "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
//     rating: {
//       rate: 4.1,
//       count: 259,
//     },
//   },
// ];

//data types
// Primitive - String, number, undefined, null - immutability, passed by value
// Non-Primitive - Array, Object - mutable, passed by reference

// const str = "dregeg";
// str[0] = "Z";
// console.log(str);

// const arr = [4, 7, 8, 1];
// arr[0] = 100;
// console.log(arr);

// pass by reference & pass by value

// let a = 40;
// let b = a; // pass by value
// a = 60;
// console.log("a:", a);
// console.log("b:", b);

// let arr1 = [1, 2, 3];
// let arr2 = arr1;
// arr1 = [5, 6, 7];

// console.log(arr1, "arr1");
// console.log(arr2, "arr2");

// let obj1 = { value: 10 };
// let obj2 = obj1; // pass by reference

// obj2.value = 20;

// console.log(obj1.value); // Outputs: 20
// console.log(obj2.value); // Outputs: 20

// const arr = [2, 5, 6, 7, 5];

// const [a, b] = arr; // array destructuring
// console.log(a, b);

// swap the variables:
// let x = 40;
// let y = 50;

// let temp = x;
// x = y;
// y = temp;
// console.log(x, y);

// [x, y] = [y, x];
// console.log(x, y);

//Obj Destructuring:
// const obj = {
//   name: "CSA",
//   age: 40,
//   city: "Hyderabad",
// };
// const { name , city, job } = obj;

// console.log(obj.name, name)

// Spread operator: (...)

// const arr = [5, 3, 1, 2];
// const arr2 = [...arr, 7, 8, 10]; // this is entirely new arrr
// arr2[0] = 100;

// console.log(arr2, arr);

// const obj = {
//   name: "CSA",
//   age: 40,
//   city: "Hyderabad",
//   nested: {
//     test: "name",
//   },
// };

// const obj2 = { ...obj, job: "Dev", name: "Aditya" }; // 1 level copy
// obj.nested.test = "changed";
// console.log(obj2, obj);

// const arr = [6, 7, 8, 2, 1, 1];

// const [a, b, c, ...remaining] = arr;

// console.log(a, b, c, remaining);

// 3 functions

// 3. Arrow Functions

// 1. Function Declaration
// function myFunc(a, b, c) {
//   return a + b + c;
// }

// console.log(myFunc(40, 10, 5));

// // 2. Function Expression
// const myFunc1 = function (a, b) {
//   return a + b;
// };

// console.log(myFunc1(8, 5));

// //3. Arrow
// const myFunc2 = (a, b) => a + b; //this, higher ordr order, callbacks
// console.log(myFunc2(10, 15));

// (function () {
//   console.log("IIFE");
// })();

// function myFunc3(a = 10, b = 60, c = 10) {
//   return a + b + c;
// }

// console.log(myFunc3(0, 10, 10));

//REST:

// function myFunc(a, b, ...adiyerf) {
//   console.log(a, b, adiyerf);
// }

// myFunc(4, 6, 1, 7, 9, 0, 5, 6, 7);

// let, const, var

// let x = 10;
// console.log(x);
//Decalration and initilization can be in separate steps
//Re-initialization can be possible
//Re-declaration cannot be possible
// Block scope
// Doesn't support Hoisting

// const y = 20;
// console.log(y);
//Decalration and initilization must be in single step
//Re-initialization not possible
//Re-declaration cannot be possible
// Block scope
// Doesn't support Hoisting

// var z = 40;
// var z = 60;
// console.log(z);
//Decalration and initilization can be in separate steps
//Re-initialization can be possible
//Re-declaration can be possible
//Function Scope
//Supports Hoisting

//Hoisting:
// w.r.t ---Window
// Fucntions Hoisting

// Scope: Local Scope - Block scope, function scope, Global scope, Lexical Scope

// let y = 10;

// if (true) {
//   console.log(y);
// }

// // if (true) {
// //   let x = 10;
// // }
// // console.log(x);

// function myFunc() {
//   var z = 20;
//   console.log(y);
// }

// console.log(z);
// myFunc();

//Window Object:
// var age = 30;
// var age = 40;
// console.log(window);

// var age = 50;
// console.log(window);

// console.log(func1());
// function func1() {
//   return "Function Declaration -  Support Hoisting";
// }

// console.log(func2());
// const func2 = function () {
//   return "Function Expression - Don't Support Hoisting";
// };

// console.log(window);

//Higher Order Functions:

// const arr = [6, 7, 1, 6, 10];
// const newArr = [8,9,3,8,12];

// for (let i = 0; i < arr.length; i++) {
//   newArr[i] = 2 * arr[i];
// }

// console.log(arr, newArr);

//Map: ---> Tranfroms the existing array --> For

// function doubleTheValue(each) {
//   console.log(each, "Each Iteration");
//   return 2 + each;
// }

// const newArr = arr.map(doubleTheValue);
// // [6, 7, 1, 6, 10] --> arr
// // [12, 14,2, 12,20]               --> newArr

// console.log(newArr);

// function findMin(x, y) {
//   if (x < y) {
//     return x;
//   }

//   return y;
// }

// console.log(findMin(8, 10));

// function isPalindrome(str) {
//   //   const reverse = str.split("").reverse().join("");
//   //   return reverse === str;

//   // 2 Pointer Approach
//   let left = 0;
//   let right = str.length - 1;

//   while (left < right) {
//     if (str[left] != str[right]) {
//       return false;
//     }
//     left++;
//     right--;
//   }

//   return true;
// }

// console.log(isPalindrome("madbm"));
//Dry run:
// left = 0
// right = 4

// left = 1, right =3

// left = 2 right = 2

// const arr = [6, 7, 1, 6, 10, 0];
// const newArr = [8,9,3,8,12];

// for (let i = 0; i < arr.length; i++) {
//   newArr[i] = 2 * arr[i];
// }

// console.log(arr, newArr);

// Map: ---> Tranfroms the existing array --> For

// function doubleTheValue(each) {
//   console.log(each, "Each Iteration");
//   return 2 * each;
// }

// const newArr = arr.map((each) => 2 * each);
// // [6, 7, 1, 6, 10] --> arr
// // [12, 14,2, 12,20] --> newArr

// console.log(newArr);

// const filtered = arr.filter((each) => false);

// console.log(filtered);

// const newArr = arr.forEach((each) => {
//   console.log(each);
// });

// console.log(newArr);

//reduce

// const reducer = arr.reduce((acc, each) => acc + each, 0);
// console.log(reducer);

// string methods:

// const str = "Hello-I-am-string";

// console.log(str.length);
// console.log(str[0]);
// console.log(str.at(1));
// console.log(str.charAt(9));
// console.log(str.slice(1, 4));
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.includes(" am st"));
// console.log(str.startsWith("ell"));
// console.log(str.endsWith("ing"));
// console.log(str.indexOf("e"));
// console.log(str.trim());
// console.log(str.replaceAll("l", "A"));
// console.log(str.split("-").join(" "));

// console.log(str.charCodeAt(6));

//template literal --> Backtick
// const obj = {
//   name: "Aditya",
//   age: 24,
//   city: "Hyderabad",
// };

// console.log(
//   "Hi, I am " + obj.name + " My age is " + obj.age + " I am from " + obj.city
// );

// console.log(
//   `Hi, I am ${obj.name}. My age is ${obj.age}. I am from ${obj.city}`
// );

// const findPrime = (n) => {
//   let count = 0;
//   for (let i = 1; i <= n; i++) {
//     if (n % i == 0) {
//       count++;
//     }
//   }

//   return count === 2;
// };

// console.log(findPrime(17));

//iteration:

// let fib = [0, 1];
// let n = 10;

// for (let i = 2; i < n; i++) {
//   fib[i] = fib[i - 1] + fib[i - 2];
// }

// console.log(fib);

//recusrion:

// 0, 1, 1, 2, 3;

// function fib(n) {
//   if (n <= 1) {
//     return n;
//   }

//   return fib(n - 1) + fib(n - 2);
// }

// console.log(fib(3));

// Dry run:

// fib(3) = fib(2) + fib(1) = 1 + 1 = 2

// fib(2) = fib(1) + fib(0) = 1 + 0 = 1

//anagrams:
// Find if 2 strings are anagrams ---> ?

// 1st approach:

// const arr = [4, 6, 1, 1, 3, 2];

// function findAnagram(str1, str2) {
//   const firstSort = str1.toLowerCase().split("").sort().join("").trim();
//   const secondSort = str2.toLowerCase().split("").sort().join("").trim();

//   return firstSort == secondSort;
// }

// const str1 = "Tom Marvolo Riddle";
// const str2 = "I am Lord Voldemort";

// console.log(findAnagram(str1, str2));

//JS DOM:

// const obj = {
//   name: "CSSA",
// };

// obj.name = "CSA";

// console.log(obj);

// document.children[0].children[1].children[3].children[0].textContent =
//   "My Content";
// console.log(document.children[0].children[1].children[3].children[0]);

//Accesing HTML elements through JS DOM:

// const h1El = document.getElementById("restaurant-heading");

// h1El.textContent = "My Content";

// h1El.style.fontWeight = "bold";
// h1El.style.backgroundColor = "red";

// // h1El.className = "my-class";

// h1El.classList.add("my-class");
// h1El.classList.remove("sticky");

// console.log(h1El);

//setAttribute()

//Other ways of accesign DOM:

// const h1El = document.getElementsByClassName("main-heading"); //HTML collection --- Array of objects
// const h1El = document.getElementsByTagName("p"); //HTML collection --- Array of objects

//querySelector:

// const h1El = document.querySelector(""); --> Only single element

// console.log(h1El);

//querySelectorAll:
// const h1El = document.querySelectorAll("#restaurant-heading"); //Node lIST --- Array of objects
// console.log(h1El[0]);

//Creating elements through js:

// const h1El = document.createElement("h1");
// h1El.textContent = "h1 Created from JS";

// // h1El.className = "my-class";
// // h1El.classList.add("my-class");
// // h1El.style.textAlign = "center";
// // h1El.style.color = "green";
// h1El.setAttribute("class", "my-class");
// h1El.setAttribute("id", "my-h1el");

// const pEl = document.createElement("p");
// pEl.textContent = "paragraph element Created from JS";

// const imgEl = document.createElement("img");
// // imgEl.src = ""
// imgEl.setAttribute(
//   "src",
//   "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/8/c4500379-b463-4357-8b9b-b057a9324b54_812299.jpg"
// );
// imgEl.classList.add("logo2");

// const divEl = document.getElementById("sample-div");
// divEl.appendChild(imgEl);
// divEl.appendChild(h1El);
// divEl.appendChild(pEl);

//Events

// const btn = document.getElementById("events-btn");

// function callBackFunc() {
//   alert("Pop up from  CLick Event");
// }

// btn.addEventListener("click", callBackFunc);

// const inputEl = document.querySelector("input");

// // inputEl.addEventListener("keyup", (event) => {
// //   console.log("keyup", event.key);
// // });

// inputEl.addEventListener("input", (event) => {
//   console.log("change event");
// });

//classes - OOPs
// ES6 --> class

// let obj = {
//   name: "Aditya"
// }

//this context

// console.log(this);

// function add() {
//   console.log(this);
// }
// add();

// const age = 20;
// console.log(window);

// console.log(this.age);

// let obj = {
//   name: "Aditya",
//   age: 24,
//   greet: function () {
//     return `Hi I'm ${this.name}. My age is ${this.age}`;
//   },
//   // greet2: () => {
//   //   return this;
//   // },
// };

// console.log(obj.greet());

// const arr = [3, 5, 7];
// arr.push();
// console.log(arr);

// const obj = {};
// const person = new Object();

// console.log(person);

// function Person(first, last, age, eye, callBackFunc) {
//   console.log(this, "at the beginning");
//   this.firstName = first;
//   this.lastName = last;
//   this.age = age;
//   this.eyeColor = eye;
//   this.greet = callBackFunc;
// }

// function callBackFunc() {
//   return this;
// }

// const personObj1 = new Person("CS", "Academy", 25, "black", callBackFunc); //Obj instance -instantiation
// const personObj2 = new Person("CSWEF", "Academy", 25, "black");
// const personObj3 = new Person("CSWFE  3wd", "Acadeererfvmy", 25, "black");

// console.log(personObj1.greet());

//Classes

// Properties ---> Through constructor method
// Methods

//ES6  - Ecmascript JS - 2015 - arrow, new, spread, rest, promises, classes, import, export

// class Car {
//   constructor(model, color, year) {
//     this.model = model;
//     this.color = color;
//     this.year = year;
//   }

//   horn() {
//     this.model = "Audi";
//     return this;
//   }

//   drive() {
//     return "drive";
//   }
// }

// const car1 = new Car("Benz", "Black", 2025); //Instance of the Class obje
// const car2 = new Car("Audi", "Black", 2025); //Instance of the Class obje

// console.log(car1);
// console.log(car1.horn());
// console.log(car1.drive());

//Abstraction
//Inheritance
//Polymorphism
//Encapsulation

// class Bank {
//   #balance;
//   constructor(accountHolder, bankName, balance) {
//     this.name = accountHolder;
//     this.bank = bankName;
//     this.#balance = balance;
//   }

//   deposit(amount) {
//     this.#balance += amount;
//     return `Rs. ${amount} has been credited to your account`;
//   }

//   withdraw(amount) {
//     this.#balance -= amount;
//     return `Rs. ${amount} has been debited from your account`;
//   }

//   getBalance() {
//     return `Your current balance is Rs. ${this.#balance}`;
//   }
// }

// const account1 = new Bank("John Doe", "ICICI", 10000);

// console.log(account1.deposit(1000));
// console.log(account1.getBalance());
// console.log(account1.withdraw(5000));
// console.log(account1.getBalance());

// console.log(account1.balance);

// class Animal {
//   constructor(color, type) {
//     this.color = color;
//     this.type = type;
//   }

//   move() {
//     console.log("Animal is moving");
//   }
// }

// class Lion extends Animal {
//   constructor(color, type, runSpeed) {
//     super();
//     this.color = color;
//     this.type = type;
//     this.runSpeed = runSpeed;
//   }

//   run() {
//     console.log(`Lion is running with speed of ${this.runSpeed}`);
//   }
// }

// class Eagle extends Animal {
//   constructor(color, type, flySpeed) {
//     super();
//     this.color = color;
//     this.type = type;
//     this.flySpeed = flySpeed;
//   }

//   fly() {
//     console.log(`Eagle is flying with speed of ${this.flySpeed}`);
//   }
// }

// class Fish extends Animal {
//   constructor(color, type, swimSpeed) {
//     super();
//     this.color = color;
//     this.type = type;
//     this.swimSpeed = swimSpeed;
//   }

//   swim() {
//     console.log(`Fish is swimming with speed of ${this.swimSpeed}`);
//   }
// }

// const lion1 = new Lion("Gold", "Mammal", 60);
// const eagle1 = new Eagle("Gold", "Bird", 70);
// const fish1 = new Fish("Gold", "Fish", 80);

// console.log(lion1, eagle1, fish1);

// lion1.run();
// eagle1.fly();

// const arr = [1, 2, 4, 4];

// console.log(arr.push());
// console.log(arr.__proto__);

// const obj1 = {
//   name: "Aditya",
//   age: 24,
// };

// obj1.__proto__ = null;

// const obj2 = {
//   name: "CSA",
// };

// obj2.__proto__ = obj1;

// console.log(obj2);
// console.log(obj2.age);

// const arr = [4, 6, 3, 2];

// console.log(arr.__proto__);

// console.log(Array.__proto__);

// const fun = () => {
//   console.log("hello");
// };

// console.log(fun.__proto__.__proto__);

// const obj1 = {
//   name: "Aditya",
//   age: 24,
// };

// console.log(obj1);
// console.log(Object.__proto__.__proto__);

//prototype obj
//protoype inheritance

//Asynchrous JS:

//setTimeout, setInterval, fetch(), promises --> JS can't handle async tasks

// console.log("Start");

// let count = 0;
// const timerId = setInterval(() => {
//   count++;
//   console.log(count);
//   if (count == 4) {
//     clearInterval(timerId);
//   }
// }, 5000);

// // Mechanism - Event loop - JS can handle async tasks

// console.log("End");

// Event loop:
// 1. Call Stack
// 2. Macro task - settimout, setinterval
// 3. Micro task - fetch, promises

//Web APIs --- Async tasks

// To handle async tasks like fetch API we use some syntaxes

// console.log("start");

// const data = fetch("https://finalspaceapi.com/api/v0/character/")
//   .then((response) => response.json())
//   .then((data) => console.log(data, "inside .then"))
//   .catch((err) => console.log(err, "inside .catch"))
//   .finally(() => console.log("I am final")); // used for loaders

// console.log("end");

// Callbacks --> Callback hell (usage of nested callback, makes difficult to read
// and dubug the code). no error handling

//  .then, .catch
//  or async/await ----******* ES6

// Promise --> Reolsve, reject

// console.log("Start");

// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve([4, 5, 6]);
//   }, 6000);
// });

// p.then((data) => console.log(data)).catch((err) => console.log(err));

// console.log("End");

// console.log("start");

//CRUD

// C - Create - POST;
// R - Read - GET;
// U - Update - PUT;
// D - Delete - DELETE;

// async function apiCall() {
//   try {
//     const response = await fetch("https://fakestoreapi.com/products");
//     const data = await response.json();
//     console.log(data);
//   } catch (err) {
//     console.log("Eror", err);
//   }
// }

// apiCall();

// console.log("end");

// Create a Promise
// const myPromise1 = new Promise((resolve, reject) => {
//   setTimeout(reject, 200, "King");
// });

// // Create another Promise
// const myPromise2 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 1000, "Queen");
// });

// // Both resolve, who is faster?
// Promise.race([myPromise1, myPromise2])
//   .then((x) => {
//     console.log(x);
//   })
//   .catch((err) => console.log(err));
