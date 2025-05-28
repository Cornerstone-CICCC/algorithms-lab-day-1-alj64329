// Exercise 20: Write a function named 'anagramGroups' that takes an array of strings and returns an array of arrays, grouping anagrams together.

function anagramGroups(arr) {
  // your code here
  words = []

  for (let i = 0; i < arr.length; i++) {
    let anagram = []
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i].split('').sort().join() === arr[j].split('').sort().join()) {
        anagram = [arr[i], arr[j]]
        if (!words.includes(anagram)) {
          words.push(anagram)
        }
      }
    }
  }
  return words
}

console.log(anagramGroups(['bat', 'tab', 'cat', 'act'])) // [['bat', 'tab'], ['cat', 'act']]