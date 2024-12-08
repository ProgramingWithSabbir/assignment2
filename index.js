// 1) calculateDifference
function calculateDifference(a, b) {
  return a - b;
}

// 2) isOdd
function isOdd(number) {
  return number % 2 !== 0;
}

// 3) findMin
function findMin(numbers) {
  return Math.min(...numbers);
}

// 4) filterEvenNumbers
function filterEvenNumbers(numbers) {
  return numbers.filter((num) => num % 2 === 0);
}

// 5) sortArrayDescending
function sortArrayDescending(numbers) {
  return [...numbers].sort((a, b) => b - a);
}

// 6) lowercaseFirstLetter
function lowercaseFirstLetter(str) {
  return str.charAt(0).toLowerCase() + str.slice(1);
}

// 7) findAverage
function findAverage(numbers) {
  if (numbers.length === 0) return 0; // Avoid division by zero
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return sum / numbers.length;
}

// 8) isLeapYear
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

// Example Function Calls
console.log("1) Difference: ", calculateDifference(15, 5)); // 10
console.log("2) Is Odd: ", isOdd(7)); // true
console.log("3) Minimum: ", findMin([10, 20, 5, 8, 1])); // 1
console.log("4) Even Numbers: ", filterEvenNumbers([1, 2, 3, 4, 5, 6])); // [2, 4, 6]
console.log("5) Sorted Descending: ", sortArrayDescending([10, 3, 7, 8, 1])); // [10, 8, 7, 3, 1]
console.log(
  "6) Lowercased First Letter: ",
  lowercaseFirstLetter("Hello World")
); // "hello World"
console.log("7) Average: ", findAverage([2, 4, 6, 8, 10])); // 6
console.log("8) Is Leap Year: ", isLeapYear(2024)); // true
