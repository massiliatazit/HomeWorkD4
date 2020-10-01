
/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

const check3and7 = function (x){

 if ((x > 0 ) && ( x % 3 === 0) || (x % 7 === 0)) {

    return true;

 }

}

console.log(check3and7(12));