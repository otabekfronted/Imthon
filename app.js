"use strict";

// masala 1
// function remove(str, value) {
//     const a = value;
//     return str.replace(a, "");
// }

// console.log(remove("To be or not to be", " not"));

// masala 2
// function unbracketTag(str) {
//     let result = str.match(/<(.*?)>/)[1];
//     return result;
// }
// console.log(unbracketTag("<div>"));

// masala 3
// function isPrime(n) {
//     if (n === 1) {
//         return false;
//     } else if (n === 2) {
//         return true;
//     } else {
//         for (let x = 2; x < n; x++) {
//             if (n % x === 0) {
//                 return false;
//             }
//         }
//         return true;
//     }
// }

// console.log(isPrime(13));

// masala 4
// function group(array, keySelector, valueSelector) {
//     return array.reduce((acc, val) => {
//         let key = keySelector(val);
//         let value = valueSelector(val);

//         acc[key] = acc[key] || [];
//         acc[key].push(value);
//         return acc;
//     }, {});
// }

// let data = [
//     { country: "Belarus", city: "Brest" },
//     { country: "Russia", city: "Omsk" },
//     { country: "Russia", city: "Samara" },
//     { country: "Belarus", city: "Grodno" },
//     { country: "Belarus", city: "Minsk" },
//     { country: "Poland", city: "Lodz" },
// ];

// const result = group(
//     data,
//     (val) => val.country,
//     (val) => val.city
// );
// console.log(result);

// let n = [1, 2, 3, 4, 5, 6, 7, 8];
// let k = 2;
// let m = 5;

// masala 5
// function getSumBetweenNumbers(n1, n2) {
//     let sum = 0;
//     for (let i = n1; i <= n2; i++) {
//         sum += i;
//     }
//     console.log(sum);
// }

// getSumBetweenNumbers(5, 10);

// function rangeOutSum(arr, k, l) {
//     let first = 0;
//     let sum = 0;
//     for (let i = k; i <= l; i++) {
//         sum += 1;
//     }
//     for (let i = 0; i < arr.length; i++) {
//         first += 1;
//     }
//     let result = first - sum;
//     console.log(result);
//     console.log(first);
//     console.log(`O'chirilgan elemntlar soni ${sum}`);
// }
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let k = 2;
// let l = 4;
// rangeOutSum(arr, k, l);

// masala 9
// const books = [
//     {
//         title: "Halqa",
//         author: "Akrom Malik",
//         alreadyRead: false,
//     },
//     {
//         title: "Dunyo ishlari",
//         author: "O'tkir Hoshimov",
//         alreadyRead: true,
//     },
//     {
//         title: "Vaqtning qadri",
//         author: "Abdulfattoh Abu G'udda",
//         alreadyRead: true,
//     },
// ];

// let a = books.map((item) => {
//     if (item.alreadyRead == true) {
//         console.log(`${item.author}ning "${item.title}" kitobi o'qilgan `);
//     }
// });

// masala 10
// const products = [
//     { name: "Product 1", price: 20000, discount: 10, quantity: 5 },
//     { name: "Product 2", price: 10000, discount: 20, quantity: 4 },
//     { name: "Product 3", price: 15000, discount: 8, quantity: 10 },
//     { name: "Product 4", price: 18000, discount: 5, quantity: 6 },
//     { name: "Product 5", price: 5000, discount: 10, quantity: 16 },
// ];

// let result = products
//     .map((item) => {
//         let s = 0;
//         let sum = item.price / item.discount;
//         return (s += sum);
//     })
//     .reduce((acc, val) => {
//         return val + acc;
//     });

// console.log(`Narxlarning umumiy qiymati = ${result}, chegirmalar hioblangan.`);
