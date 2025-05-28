// Exercise 20: Write a function named 'anagramGroups' that takes an array of strings and returns an array of arrays, grouping anagrams together.

function anagramGroups(arr) {
  // your code here
  words = []


  for (let i = 0; i < arr.length; i++) {
    let splitWords = arr[i].toLowerCase().split('')
    let sortSplit = splitWords.sort()
    if (!words.includes(sortSplit)) {
      words.push(splitWords)
    }
  }

}

console.log(anagramGroups(['bat', 'tab', 'cat', 'act'])) // [['bat', 'tab'], ['cat', 'act']]