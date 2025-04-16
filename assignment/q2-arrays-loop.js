/*
    Task
    - In the function, iterate through the array `studentList`.
    - Print each student's name inside the loop using console.log().
*/

const studentList = [
  "Johnson",
  "Christina",
  "Michael",
  "Lina",
  "Larry",
  "Michelle",
  "Bob",
  "Wilson",
];

function printStudentNames() {
  for (const name in studentList) {
    console.log(studentList[name]);
  }
}

printStudentNames();

// Ignore the code below this line
module.exports = {
  studentList,
  printStudentNames,
};
