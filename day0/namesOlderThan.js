// Write a function namesOlderThan that takes as arguments:
// 1. An array of students, where each student is an objects that has a name and age properties.
// 2. An age (number).
// The function will return an array with the names of the students who are older than the provided age.
// You may use the built-in array filter and map methods.

var nameArr = []

function namesOlderThan(students, age) {
  // non-verbose solution
  // return students.filter(x => x.age > age)
  //                .map(x => x.name)

  for (var i = 0; i < students.length; i++) {
    var student = students[i]
    if (student.age > age) {
      var filter = student.name;
      nameArr.push(filter)
    }
  }
  return nameArr
}

var students = [
  { name: 'John', age: 18 },
  { name: 'Ava', age: 24 },
  { name: 'Marco', age: 23 },
  { name: 'Mia', age: 19}
]

console.log(namesOlderThan(students, 20))
