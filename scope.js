/*  Use your knowledge of the variables' scope and place the following code inside one of the functions in scope.js so the output is 
a: 1, b: 8, c: 6  
   
     console.log(`a: ${a}, b: ${b}, c: ${c}`)  
*/

const a = 1; const b = 2; const c = 3;

(function firstFunction() {
  const b = 5; const c = 6;

  (function secondFunction() {
    const b = 8;
    console.log(`a: ${a}, b: ${b}, c: ${c}`);

    (function thirdFunction() {
      const a = 7; const c = 9;


      (function fourthFunction() {
        const a = 1; const c = 8;
      })()
    })()
  })()
})()

// F1 a = 1, b=5, c=6
// F2 a=1 , b=8, c=6
// F3 a=7, b=8, c=9
// F4 a=1, b=2, c=8

