const students = require("../data/students");
const calculateAverage = require("./calculateAverage");

function listStudents() {

    console.log("Students:");

    students.forEach(student => {

        console.log(
            `${student.name}
Grades: ${student.grades.join(", ")}
Average: ${calculateAverage(student.grades)}`
        );

    });
}

module.exports = listStudents;
