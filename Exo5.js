
/* EXERCISE 5
Write a function "strivify" which accepts a string S. Add to S "Strive" in front of a given string, if the given string begins with "Strive" then return the original string.
*/

const strivify = function (S){

  const S1 = 'strive';
  const SS1 = S1.concat(S);

  if (S.startsWith('strive')){

    return S;
  }
  else{

    return SS1;

  }



}

console.log(strivify('strive awsome!'));
