const addStudent = require("./modules/addStudent");
const listStudents = require("./modules/listStudents");
const filterPassed = require("./modules/filterPassed");

addStudent("Hana", [90, 80, 95]);
addStudent("Ali", [70, 60, 50]);
addStudent("Sara", [40, 30, 50]);
addStudent("Omar", [100, 90, 95]);

listStudents();

filterPassed();