// Write a function that takes a string (a) as argument
// Get the first 3 characters of a
// Return the result


function myFunction(string){
    const three = string.slice(0, 3);
    return three;
}

const result = myFunction('fgedcba');
console.log(result);