// Exercise 7: Write a function named 'calculateAverage' that takes an array of numbers and returns the average value.

function calculateAverage(arr) {
  // your code here
  let sum = 0

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return Math.floor(sum / arr.length)
}

console.log(calculateAverage([10, 20, 30, 40, 50])) // 30