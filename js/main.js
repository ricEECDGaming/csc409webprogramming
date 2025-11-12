
// testing print statements
console.log("Hello World!");

console.log(3 / 2);
console.log(0.1 + 0.2);

console.log((0.1 + 0.2) == (0.1 + 0.2));

const test_a = 0.1 + 0.2;
const test_b = 0.3;
console.log("is " + test_a + " + " + test_b + " true??? = " + (test_a==test_b));

// let allows to declare block-level variables. the variable is available within the block it's declared in. i can view this as a "var" like in gml
// "var" declarations in javascript can have... interesting behaviors

console.log("print statement before block");
if (false) {
    let x = 10;
    const test_y = 20;
    console.log(x);
    console.log(test_y);
}
console.log("print statement after block");

// this is how to define an object
const parent = {
    firstName: "firstname",
    lastName: "lastname"
};

const name1 = getLastName(parent);
console.log(name1);

const name3 = getFullName(getFirstName, getLastName, parent);
console.log(name3);

// adding something to an object after its declared
// person.address = "test_address";

console.log("eetss");



// function
function getLastName(person) {
    return person.lastName;
}

function getFirstName(person) {
    return person.firstName;
}

// you can pass functions as arguments!
function getFullName(firstFunction, secondFunction, person) {
    return firstFunction(person) + " " + secondFunction(person);
}

console.log("   ");

// ============================================
// practice time

console.log("=====");
console.log("practice 1");
console.log("   ");

const test_name1 = "myfirstname";
const test_name2 = "mysecondname";

let testname4 = assembleFullName(test_name1, test_name2);
console.log(testname4);

// practice stuff 1
function assembleFullName(inputFirstName, inputSecondName) {
    return inputFirstName + " " + inputSecondName;
}

console.log("=====");
console.log("practice 2");
console.log("   ");

// array stuff
const temp_array = [1, 2, 3, 7, 3, 8, 4];

let temp_mean_thing = getArrayMean(temp_array);
console.log(temp_mean_thing);

function getArrayMean(inp_array) {
    let arr_total = 0;
    let arr_count = 0;

    for (let i = 0; i < inp_array.length; i++){
        arr_total = arr_total + inp_array[i];
        arr_count++;
    }

    return (arr_total / arr_count);
}

console.log("=====");
console.log("practice 3");
console.log("   ");

// stuff

let temp_num_thing = 19;
console.log("the inputted number was: " + temp_num_thing);
integerRepeating(temp_num_thing);

function integerRepeating(inp_int) {

    let countthing = 0;

    for (let j = 1; j < inp_int+1; j++){
        // repeat so to cut down on doing multiple for loops
        let output_num_str = " ".repeat(countthing) + (j);
        console.log(output_num_str);
        countthing++;
    }
}