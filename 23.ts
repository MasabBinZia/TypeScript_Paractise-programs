let num1 = 10;
let num2 = 5;
let str1 = "hello";
let str2 = "world";
let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];

console.log("Test 1: num1 is greater than num2. I predict True.");
console.log(num1 > num2);

console.log("Test 2: num1 is less than num2. I predict False.");
console.log(num1 < num2);

console.log("Test 3: str1 is equal to 'hello'. I predict True.");
console.log(str1 === "hello");

console.log("Test 4: str2 is not equal to 'world'. I predict False.");
console.log(str2 !== "world");

console.log("Test 5: arr1 is an array. I predict True.");
console.log(Array.isArray(arr1));

console.log("Test 6: arr1 is not empty. I predict True.");
console.log(arr1.length > 0);

console.log("Test 7: arr1 is equal to arr2. I predict True.");
console.log(arr1 === arr2);

console.log("Test 8: num1 is greater than 5 and num2 is less than 3. I predict False.");
console.log(num1 > 5 && num2 < 3);

console.log("Test 9: str1 starts with 'h' and ends with 'o'. I predict True.");
console.log(str1.startsWith("h") && str1.endsWith("o"));

console.log("Test 10: num1 is divisible by 2 or num2 is divisible by 2. I predict True.");
console.log(num1 % 2 === 0 || num2 % 2 === 0);
