/*
capitalize(string) takes a string and returns that string with the first character capitalized.

reverseString(string) takes a string and returns it reversed.

A calculator object that contains the basic operations: add, subtract, divide, and multiply.

Caesar Cipher
Don’t forget to test wrapping from z to a.
Don’t forget to test keeping the same case.
Don’t forget to test punctuation!
For this one, you may want to split the final function into a few smaller functions. 
One concept of Testing is that you don’t need to explicitly test every function you write… 
Just the public ones. So in this case you only need tests for the final caesar() function. 
If it works as expected you can rest assured that your smaller helper functions are doing what 
they’re supposed to.

Array Analysis. Write a function that takes an array of numbers and returns an object with the following properties: average, min, max, and length.
*/

function capitalize(string) {
    return string.toUpperCase();
    };
exports.capitalize = capitalize;

function reverseString(string) {
    let reversedString = [];
    for(let i=string.length-1; i>=0; i--){
        reversedString.push(string[i]);
    }
    return reversedString.join('');
    };
exports.reverseString = reverseString;

function createCalculator() {

    function sum(a,b){
        return a+b;
    };
    
    function sub(a,b){
        return a-b;
    };

    function div(a,b){
        return a/b;
    };

    function mul(a,b){
        return a*b;
    };

    return {sum,sub,div,mul};
    };
exports.createCalculator = createCalculator;

//"9".charCodeAt(0)
function caesar(string,shift) {
    let cypher = [];
    for(let i=0; i<string.length; i++){
        cypher[i]=String.fromCharCode(string.charCodeAt(i)+shift)
    };

    return cypher.join('');
};
exports.caesar = caesar;

function analyzeArray(array) {
    /*average, min, max, and length*/
    let pivotMin=array[0];
    let pivotMax=array[0];

    for(let i=0; i<array.length; i++){
        if(pivotMin>array[i])pivotMin=array[i];
        if(pivotMax<array[i])pivotMax=array[i];
    };

    const min=pivotMin;
    const max=pivotMax;
    const length=array.length;

    return {min,max,length};
};
exports.analyzeArray = analyzeArray;