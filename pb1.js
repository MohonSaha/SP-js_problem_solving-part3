// Write a function that takes a string (a) as argument
// Get the first 3 characters of a
// Return the result


function myFunction(str){
    const three = str.slice(0, 3);
    return three;
}

const result = myFunction('fgedcba');
console.log(result);