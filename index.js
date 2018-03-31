const n = parseInt(prompt('Enter the "n" value of Fibonacci number'));

// const result = findFibo(n);
// document.write(result);

// const resultArray = findFiboArray(n);
// document.write(resultArray);

const resultCycle = findFiboCycle(n);
document.write(resultCycle);

// function findFibo(n) {
//     if (n <= 1){
//         return 1;
//     }
//     return findFibo(n-1) + findFibo(n-2);
// }



function findFiboCycle(n) {
let fibTwoPrev = 1;
let fibOnePrev = 1;
let fibNext = fibOnePrev + fibTwoPrev;
let i;
    for ( i = 3; i <= n; i++ ) {
        fibNext = fibOnePrev + fibTwoPrev;
        fibTwoPrev = fibOnePrev;
        fibOnePrev = fibNext;
    } 
    return 'Cycle Fibonacci = ' + fibOnePrev + '<br>';
}