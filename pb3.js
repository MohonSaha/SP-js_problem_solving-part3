// Write a function that takes a string (a) and a number (n) as argument
// Return the nth character of 'a'

function myFunction(a, n){
    const char = a.split("");
    const nth = char[n-1];
    return nth;
}

const result = myFunction('zyxbwpl',5);
console.log(result);