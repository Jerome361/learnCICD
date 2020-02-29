const marks = require("./models/marks");
const student = require("./models/student");

const sandraGrade = new marks("SST",-60);
sandraGrade.computeGrade();
sandraGrade.isValidate()

const hajiGrade = new marks("Islam","Haruna",90);
hajiGrade.computeGrade();
hajiGrade.isValidate();