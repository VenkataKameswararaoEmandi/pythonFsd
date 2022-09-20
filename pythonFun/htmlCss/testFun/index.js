// task - 1
let user = new Object();
let user1 = {
  name: "john",
  surname: "smith",
  name: "pete",
};
delete user1.name;
console.log(user1.name);
console.log(user1.surname);

// task - 2

const dotobj = {};
function isEmpty(object) {
  for (const property in object) {
    return false;
  }
  return true;
}
console.log(isEmpty(dotobj));

// task - 3

let Salaries = {
  user1: 500,
  user2: 1000,
  user3: 1500,
};
let sum = 0;
for (let key in Salaries) {
  sum += Salaries[key];
}
console.log(sum);

// task - 4

// merge Sorted Array
function mergeSortdArray(a, b) {
  for (var i = 0; i < b.length; i++) {
    a.push(b[i]);
  }
  return a;
}
console.log(mergeSortdArray([1, 2, 3], [1, 2, 3]));

//   for (i = 0; i < a.length; i++) {
//     for (j = i + 1; j < a.length; j++) {
//       if (a[i] > a[j]) {
//         temp = a[i];
//         a[i] = a[j];
//         a[j] = temp;
//       }
//     }
//   }
//   return a;
// }
// console.log(mergeSortdArray([1, 2, 3], [1, 2, 3]));

// Factorial of a number
let number = 5;
let fact = 1;
for (i = 1; i <= number; i++) {
  fact *= i;
}
console.log(fact);

// binary search array
