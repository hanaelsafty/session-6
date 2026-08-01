const students = require("../data/students");
const calculateAverage = require("./calculateAverage");

function filterPassed() {

    const passed = students.filter(student => {
        return calculateAverage(student.grades) >= 60;
    });

    console.log("Passed Students:");

    passed.forEach(student => {
        console.log(
            `${student.name} - Average: ${calculateAverage(student.grades)}`
        );
    });
}

module.exports = filterPassed;