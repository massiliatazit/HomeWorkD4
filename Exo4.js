
/* EXERCISE 4
Write a function "boundary" which accept an integer N and returns true if N is within 20 and 100 (included) or equal to 400.
*/

const boundary = function(N){

 if ((N>=20) && (N<=100) || (N === 400)) {
    return true;
    }
    else{

        return false;
    }



}