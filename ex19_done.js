// Exercise 19: Write a function named 'flattenObject' that takes a nested object and returns a new object with no nested properties.

function flattenObject(obj) {
  // your code here
  const result = {}
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      const temp = flattenObject(obj[key])
      for (let prop in temp) {
        result[`${key}.${prop}`] = temp[prop]
      }
    } else {
      result[key] = obj[key]
    }
  }
  return result
}

console.log(flattenObject({ a: { b: { c: 1 } }, d: 2 })) // { 'a.b.c': 1, d: 2 }