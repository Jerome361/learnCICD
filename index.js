const marks = require("./models/marks");
const student = require("./models/student");

const sandraGrade = new marks("SST","Sandra",60);
sandraGrade.computeGrade();

const hajiGrade = new marks("Islam","Haruna",90);
hajiGrade.computeGrade();

