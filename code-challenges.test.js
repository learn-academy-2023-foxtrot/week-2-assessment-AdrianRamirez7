// ASSESSMENT 2: Coding Practical Questions with Jest


// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.
describe("multiplyByThree", () => {
    it("returns an array with all the numbers multiplied by 3", () => {
      const numbersArray1 = [6, 7, 8, 9, 10]
      // Expected output: [18, 21, 24, 27, 30]
      const numbersArray2 = [24, 27, 30, 33, 36]
      // Expected output: [72, 81, 90, 99, 108]
      expect(multiplyByThree(numbersArray1)).toEqual([18, 21, 24, 27, 30])
      expect(multiplyByThree(numbersArray2)).toEqual([72, 81, 90, 99, 108])
    })
  })
  

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.
const multiplyByThree = (arr) => {
    return arr.map(num => num * 3)
  }

// Pseudo code:
// input: array of numbers
// output: array of same length of each number multiplied by three
// iterate through array using .map
// .map is available on arrays and returns an array of the same length
// each iteration multiplies current value by 3


// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.
describe("checkDivisible", () => {
    it("decide if the number inside it is evenly divisible by three or not.", () => {
        const object1 = { number: 15 }
        // Expected output: "15 is divisible by three"
        const object2 = { number: 0 }
        // Expected output: "0 is divisible by three"
        const object3 = { number: -7 }
        // Expected output: "-7 is not divisible by three"
        expect(checkDivisible(object1)).toEqual(`${object1.number} is divisible by three`);
        expect(checkDivisible(object2)).toEqual(`${object2.number} is divisible by three`);
        //fail test
        expect(checkDivisible(object3)).toEqual(`${object3.number} is not divisible by three`);
    })
})

//const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
//const object2 = { number: 0 }
// Expected output: "0 is divisible by three"
//const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"

// b) Create the function that makes the test pass.
const checkDivisible = (obj) => {
    if (obj.number % 3 === 0) {
        return `${obj.number} is divisible by three`;
    } else {
        return `${obj.number} is not divisible by three`;
    }
}


// Pseudo code:
/*
input: An object that holds the key value pair of a number
output: String interpolated sentence that verifies if the divided number is or is not divisible by three.
process: check if the object key's value is divisible by three by grabbing the remainder of that value using a modulo. Afterwards, checking if that 
answer is true or false with a conditional statement
*/

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.
describe("capitalizeWords", () => {
    it("returns an array with all the words capitalized.", () => {
        const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
        // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
        const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
        // Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]
        expect(capitalizeWords(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]);
        expect(capitalizeWords(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"]);
    })
});


const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
 //Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
 const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

// b) Create the function that makes the test pass.
const capitalizeWords = (arr) => {
    return arr.map(word => {
        return word.charAt(0).toUpperCase() + word.substring(1);
    })
}

// Pseudo code:
/*
    input: An array of strings that begin with a lowercase character.
    output: All strings inside of the array must begin with a capitalized character.
    process: input both arrays into a high order map method that will take the first character of each element and capitalize
    it inside the functions block scope using a few built in string methods.
*/

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.
describe("grabFirstVowel", () => {
    it("take in a string and logs the index of the first vowel.", () => {
        const vowelTester1 = "learn"
        // Expected output: 1
        const vowelTester2 = "academy"
        // Expected output: 0
        const vowelTester3 = "challenges"
        // Expected output: 2
        expect(grabFirstVowel(vowelTester1)).toEqual(1);
        expect(grabFirstVowel(vowelTester2)).toEqual(0);
        expect(grabFirstVowel(vowelTester3)).toEqual(2);
    })
});

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

// b) Create the function that makes the test pass.

const grabFirstVowel = str => {
    for(let i = 0; str.length; i++) {
        if(str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u") {
           return str.indexOf(str[i]);
        }
    }
};


// Pseudo code:
/*
    input: three vairables with string values.
    output: capitalize the first vowel that appears in the string.
    process: Function expression that loops over a string of characters and adds a conditional statement to evaluate what index number does the vowel first
    appear in.  
*/
