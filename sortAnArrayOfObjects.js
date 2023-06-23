// run `node sortAnArrayOfObjects.js` in the terminal



//2. You are required to sort an array of objects, where each student is represented as an object 

//  Each object has 4 keys, i.e, name, chemistry marks, biology marks, and date of birth. You should sort the array of objects according to the following rules: 

// 1. The first priority is the total marks.
// 2. In case the students have the same total marks, the next priority should be the number of marks in biology.
// 3. If students have the same marks in biology, and chemistry and have the same date of birth, then any order between them is acceptable. 
// Note: Date of birth is given in the DD-MM-YYYY format. Test your application with the data from the above link. There are 2 test cases provided for which you should try them out. 

let testCase1 = [
  {
    name: "Leo Messi",
    dob: "31-12-1995",
    biology: 95,
    chemistry: 91,
  },
  {
    name: "Cristiano Ronaldo",
    dob: "31-05-1992",
    biology: 90,
    chemistry: 81,
  },
  {
    name: "Virat Kohli",
    dob: "31-12-1995",
    biology: 95,
    chemistry: 96,
  },
  {
    name: "Rohit Sharma",
    dob: "31-12-1995",
    biology: 85,
    chemistry: 86,
  },
  {
    name: "Viswanathan Anand",
    dob: "12-12-1994",
    biology: 99,
    chemistry: 10,
  },
];

testCase1.sort((a, b) => {
  // Sort by total marks in descending order
  const totalMarksDiff = (b.biology + b.chemistry) - (a.biology + a.chemistry);
  if (totalMarksDiff !== 0) {
    return totalMarksDiff;
  }

  // Sort by biology marks in descending order
  const biologyMarksDiff = b.biology - a.biology;
  if (biologyMarksDiff !== 0) {
    return biologyMarksDiff;
  }

  // No need to compare date of birth if marks are the same
  return 0;
});

console.log(testCase1);

