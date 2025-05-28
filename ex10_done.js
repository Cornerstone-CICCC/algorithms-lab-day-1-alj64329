// Exercise 10: Write a function named 'formatDate' that takes a date string (in the format 'YYYY-MM-DD') and returns a formatted date string (e.g., 'January 1, 2022').

function formatDate(dateStr) {
  // your code here
  let dateArr = dateStr.split("-")

  if (dateArr[1] === "01") {
    dateArr.splice(1, 1, "January")
  } else if (dateArr[1] === "02") {
    dateArr.splice(1, 1, "Febuary")
  } else if (dateArr[1] === "03") {
    dateArr.splice(1, 1, "March")
  } else if (dateArr[1] === "04") {
    dateArr.splice(1, 1, "April")
  } else if (dateArr[1] === "05") {
    dateArr.splice(1, 1, "May")
  } else if (dateArr[1] === "06") {
    dateArr.splice(1, 1, "June")
  } else if (dateArr[1] === "07") {
    dateArr.splice(1, 1, "July")
  } else if (dateArr[1] === "08") {
    dateArr.splice(1, 1, "August")
  } else if (dateArr[1] === "09") {
    dateArr.splice(1, 1, "September")
  } else if (dateArr[1] === "10") {
    dateArr.splice(1, 1, "October")
  } else if (dateArr[1] === "11") {
    dateArr.splice(1, 1, "November")
  } else {
    dateArr.splice(1, 1, "December")
  }
  return `${dateArr[1]} ${dateArr[2]}, ${dateArr[0]}`
}

console.log(formatDate('2022-01-01')) // 'January 1, 2022'