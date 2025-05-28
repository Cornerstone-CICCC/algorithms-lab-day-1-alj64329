// Exercise 8: Write a function named 'longestWord' that takes a string of text and returns the longest word in the string.

function longestWord(text) {
  // your code here
  let arr = text.split(" ")
  let longest = arr[0]

  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length > longest.length) {
      longest = arr[i]
    }
  }
  return longest
}

console.log(longestWord('The duck loves bananas and grapes')) // 'bananas'
