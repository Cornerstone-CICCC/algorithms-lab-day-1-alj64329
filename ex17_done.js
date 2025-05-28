// Exercise 17: Write a function named 'mostFrequent' that takes an array of strings and returns the string that appears the most frequently.

function mostFrequent(arr) {
  // your code here
  let countObj = {}
  let result = ""

  for (let i = 0; i < arr.length; i++) {
    if (countObj[arr[i]]) {
      countObj[arr[i]]++
    } else {
      countObj[arr[i]] = 1
    }
  }

  let maxCount = 0

  for (const key in countObj) {
    if (countObj[key] > maxCount) {
      result = key
      maxCount = countObj[key]
    }
  }
  return result

}

console.log(mostFrequent(['apple', 'banana', 'apple', 'orange', 'banana', 'apple'])) // 'apple'