let str1 = "hello";
let str2 = "world";
let num1 = 5;
let num2 = 10;
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

console.log("Equality test with strings. I predict True.");
console.log(str1 === "hello");

console.log("Inequality test with strings. I predict False.");
console.log(str2 !== "world");

console.log("Lowercase test. I predict True.");
console.log(str1.toLowerCase() === "hello");

console.log("Numerical tests. I predict True, False, True, False.");
console.log(num1 === 5);
console.log(num2 !== 5);
console.log(num1 < num2);
console.log(num1 >= num2);

console.log("Tests using 'and' and 'or' operators. I predict True, False, True.");
console.log(num1 > 3 && num2 < 15);
console.log(num1 > 7 || num2 < 15);
console.log(num1 > 7 || num2 < 15 && str1 === "hello");

console.log("Test whether an item is in an array. I predict True, False.");
console.log(arr1.includes(2));
console.log(arr2.includes(2));

console.log("Test whether an item is not in an array. I predict False, True.");
console.log(!arr1.includes(2));
console.log(!arr2.includes(2));
