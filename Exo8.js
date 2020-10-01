/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as parameter
*/

const upperFirst = function (S){
 



 return  S.charAt(0).toUpperCase() + S.slice(1);

}

console.log(upperFirst('strive'))