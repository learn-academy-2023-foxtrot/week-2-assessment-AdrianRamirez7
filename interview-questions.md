# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

Type your initials here to confirm you read the instructions: AR

1. What is the difference between a parameter and an argument? 

Your answer: The paramamter acts as a placeholder that receives specific input for the function expression, this can be in the form of an array, objects, or primitive data types. Arguments on the other hand, are not directly alongside the function. Although they connect to the function parameter, arguments reside outside of the function body in the global scope and are responsible for sending output to the terminal or the webpage via a log method or a return keyword. 

Researched answer: Parameters act as a variable definition. They are placeholders and don't have a concret value. Arguments are values passes to the function invocation. Arguments fill in the place the parameters have held for them.

2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

Your answer: The .map() method has three built in parameters known as the value, index, and array. The value grabs the exact data type displayed inside the array. This can be in the form of a string, number, or boolean. The index, since arrays are based off zeroth indexing, will output the specific number the element is stored in. For example, if we are grabbing the second element inside of an array, the output will be 1 since that is the order number the element is stored in. The array parameter is 
the specific array vairable that is connected to the map method. Overall, the value is required majority of the time to grab and recieve an output to a new array.

Researched answer: The three predifined parameters are the currentValue, also known as the value, index, and arr. The current value is the current element in the array, the index is the direct number where the current element is stored in, and the arr, which is optional, contains what specific array is connected to the map method. The currentValue is the only required one. The other two predifined paramters are optional.

3. What is the difference between map and filter?

Your answer: The map method modfies all elements inside of an array and returns an entirely new one based on the condition that the map method's callback function is requiring. For instance, if all elements need to be doubled, the map method will return a new array with doubled elements. Filter, takes in an array but will only modify specific elements inside of the array. If a condition inside the filter method is not met, the filter will leave that data type out of the output. For example, if the filter requiring only odd numbers, the new array will leave out the even numbers that were inside the array previously. 

Researched answer: The map method transforms each element in the array and returns a new one with transformed values. Filter on the other hand, createss a new array that only satisfy a specific condition.

4. What is iteration?

Your answer: Iterations are a form of a loop that count through an array or a string of characters and will continue on a  iteration count until it reaches an appropriate ending condition. 

Researched answer: Iterations are the process of repeating a block of code until a specific condition is met. This mostly done inside a loop statement or a high order function. There are three types of loops that iterations occur in and these are for loops, while loops, and the do-while loops.

5. What is the difference between a function and a method?

Your answer: Functions are blocks of code that hold specific tasks that developers can store and re-use in other parts of a program. They also store input placeholders that take in optional input. Methods, are pre built functions, that contain functionality inside a single statment. They can be chained to almost any syntax inside of the program without having to write lines of code inside of a block scope like normal functions. Methods also take in arguments rather than parameters.  

Researched answer: Functions are sets of instructions that hold data and variables and return a result of a variety pieces of code. Functions can be recycled. That is, functions can be repeatedly used without having to wite the same amount of code again.
Methods can also hold a set of instructions similar to functions. However, the difference is that methods are associated with an object while functions are not. 

6. STRETCH: What is hoisting in JavaScript?

Your answer: Hoisting it process of connecting a variety of functions that are stored in the global scope. In other words, functions can call on each other whether they are a line above or below one another.

Researched answer: Hoisting is the process of moving variable and function declerations to the top of their scope before they are executed. Meaning that even if a variable or function is declared in the middle of a script, it will be available to use as if it were declared to the top globally.

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Spread operator: The spread operator makes copies of javascript objects. They can make a deep and shallow copy of nested data, objects, and arrays, and recieve these data types and enhance their readability.

2. React state: State is a built-in react object that contains data or information about the react component. Since components state can change over time, whenever changes happen and the component re-renders, the change inside the react state can happen as a response to user action or system generated events that determine the behavior of how the component will render.

3. DOM events: The Dom, which stands for Document Object Model, can be used to manipulate a javascript function. DOM events 
    can inclide any built in computer component such as click events and mouse over events. Events are defined as a part of the JavaScript API built into the web browser.
