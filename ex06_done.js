// Exercise 6: Write a function named 'uniqueValues' that takes an array of values and returns a new array with only unique values, removing duplicates.

function uniqueValues(arr) {
  // your code here
  let uniqueNums = []
  for (let i = 0; i < arr.length; i++) {

    if (!uniqueNums.includes(arr[i])) {
      uniqueNums.push(arr[i])
    }
  }

  return uniqueNums
}

console.log(uniqueValues([1, 2, 2, 3, 4, 4, 5])) // [1, 2, 3, 4, 5]