/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10
*/

 const giveMeRandom = function(n){

    let arandom = [];

    for (i=0; i<n ; i++){

        return arandom.push(Math.floor(Math.random()*10))

    }
  return arandom;



 }

 console.log(giveMeRandom(7));