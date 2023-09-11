// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------1) What will this log?

const cohort = "Foxtrot 2023"
 console.log(cohort.split(""));

// a) Your answer: The value of the cohort variable will output an array of individual characters seperated by commas. 
// b) Verify and explain: My answer was correct because .split() is a built in array method that outputs similar behaivor to regular string concatination. For instance, if the strings are not spaced apart, the 
  //charcters merge together as one letter, and if they are spaced, the strings will split apart and output proper name or sentence. We can see this  

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
 console.log(greeter("LEARN Student"));

// a) Your answer: The greeter function will output undefined because of a missing return keyword
// b) Verify and explain: My answer was correct because every function, whether it is self closing or takes in an input, must have a return statement for the function invocation to display a proper output to the terminal or to production. 

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
console.log(multipliedByTwo);
// a) Your answer: The value stored inside the multipliedByTwo variable will output [8, 10, 12, 14, 16]. 
// "map" method, which modifies all elements inside of an array and returns a new one. Then, the callback function inside of .map() receives an input of an array and multiplies each value times a number, in this case 2. 
// b) Verify and explain: My answer was correct because from the beginning, the array of numbers is chained to the high order "map" method, which modifies all elements inside of an array and returns a new one. 
//Then, the callback function inside of .map() receives an input of an array and multiplies each value times a number, in this case 2. 

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
 console.log(onlyOdds);

// a) Your answer: The output of this array will be [11, 13, 15]. 
// b) Verify and explain: My answer was correct because the filter method only outputs specific values that meet its condition. In this case, the filter method is iterating through
// the array and checking if each number is odd by using a modulo and bang operator.  

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
};
 console.log(myCodingSkills.languages[0])

// a) Your answer: The result will be the first element of languages array which is "JavaScript"
// b) Verify and explain: My answer was correct because inside of the log method, this syntax is using dot notation to access the key value pairs inside of the myCodingSkills object.
  //In this example, it is accessing the languages key. Since languages is an array, the syntax chains bracket notation to its key property and access the specific number it desires which is the first element in brackets 0 or the "JavaScript" string.

// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Echo"
    this.year = 2023
  }
}
const learnStudent = new Learn("George")
 console.log(learnStudent)

// a) Your answer: I believe this will output all the constructor's this keywords and the name argument inside of the instance class. The answer would be {student: "George", cohort: "Echo", year: 2023}
// b) Verify and explain: My answer was slightly incorrect. On my predicted answer, I assumed the output would print only the key value pairs from the constructor method. However, 
//the answer include the class name "Learn" alongside the object syntax. The "Learn" class name is displayed since the class is called 
//from the instance variable learnStudent. 
