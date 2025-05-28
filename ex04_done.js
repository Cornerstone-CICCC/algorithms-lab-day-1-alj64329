// Exercise 4: Write a function named 'countOccurrences' that takes an array of strings and returns an object with the count of each string in the array.

function countOccurrences(arr) {
  // your code here
  let countObj = {}

  for (let i = 0; i < arr.length; i++) {
    if (countObj[arr[i]]) {
      countObj[arr[i]]++
    } else {
      countObj[arr[i]] = 1
    }
  }
  return countObj
}

console.log(countOccurrences(['apple', 'banana', 'apple'])) // { apple: 2, banana: 1 }