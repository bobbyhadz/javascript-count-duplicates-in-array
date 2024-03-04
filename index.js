// EXAMPLE 1 - Count the Duplicates in an Array in JavaScript

const arr = ['one', 'one', 'one', 'two', 'two', 'three'];

const count = {};

arr.forEach(element => {
  count[element] = (count[element] || 0) + 1;
});

// 👇️ {one: 3, two: 2, three: 1}
console.log(count);

// ------------------------------------------------------------------

// // EXAMPLE 2 - Count the Duplicates in an Array using `Array.reduce()`

// const arr = ['one', 'one', 'one', 'two', 'two', 'three'];

// const count = arr.reduce((accumulator, value) => {
//   return {
//     ...accumulator,
//     [value]: (accumulator[value] || 0) + 1,
//   };
// }, {});

// // 👇️ {one: 3, two: 2, three: 1}
// console.log(count);

// ------------------------------------------------------------------

// // EXAMPLE 3 - Count the Duplicates in an Array using `map` and `filter`

// const arr = ['one', 'one', 'one', 'two', 'two', 'three'];

// const uniqueElements = [...new Set(arr)];

// const count = uniqueElements.map(element => [
//   element,
//   arr.filter(el => el === element).length,
// ]);

// // 👇️ [ [ 'one', 3 ], [ 'two', 2 ], [ 'three', 1 ] ]
// console.log(count);

// ------------------------------------------------------------------

// // EXAMPLE 4 - Count the Duplicates in an Array using a `for...of` loop

// const arr = ['one', 'one', 'one', 'two', 'two', 'three'];

// const count = {};

// for (const element of arr) {
//   count[element] = (count[element] || 0) + 1;
// }

// // 👇️ { one: 3, two: 2, three: 1 }
// console.log(count);

// ------------------------------------------------------------------

// // EXAMPLE 5 - Count the Duplicates in an Array using a `for` loop

// const arr = ['one', 'one', 'one', 'two', 'two', 'three'];

// const count = {};

// for (let index = 0; index < arr.length; index++) {
//   count[arr[index]] = (count[arr[index]] || 0) + 1;
// }

// // 👇️ { one: 3, two: 2, three: 1 }
// console.log(count);
