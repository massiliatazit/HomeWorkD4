/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/
const cutString = function(S){


    return S.slice(1,-1)
}

console.log(cutString('awsome'))