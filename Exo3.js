
/* EXERCISE 3
Write a function "crazyDiff" that computes the 
absolute difference between a given number and 19. 
Returns triple their absolute difference if 
the specified
number is greater than 19.
*/

const crazyDiff = function(x){
    const y = 19;
    let Diff = Math.abs(x-y);
    if (x>19){
        return 3*Diff;
    }
    


}

console.log(crazyDiff(20));