const n = parseInt(prompt('Enter the "n" value of Fibonacci numer'));

const result = findFiboCycle;     //findFibo;
document.write(result);

// function findFibo(n) {
//     if (n <= 1){
//         return 1;
//     }
//     return findFibo(n-1) + findFibo(n-2);
// }



function findFiboCycle(n) {
let fibTwoPrev = 0;
let fibOnePrev = 1;
let fibNext = 1;
let i;
    for ( i = 2; i <= n; i++ ) {
    fibNext = fibOnePrev + fibTwoPrev;
    fibOnePrev = fibNext;
    fibNext = fibTwoPrev;
    return fibNext;
  }
}