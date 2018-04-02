const n = parseInt(prompt('Enter the "n" value of Fibonacci number'));

const result = findFibo(n);
document.write("Fibonacci through recursion = " + result);

const resultCycle = findFiboCycle(n);
document.write('<br>' + "Fibonacci through cycle = " + resultCycle);

const resultArray = findFiboArray(n);
document.write('<br>' + "Fibonacci through array = " + resultArray);

function findFibo(n) {
    if (n <= 1){
        return 1;
    }
    return findFibo(n-1) + findFibo(n-2);
}



function findFiboCycle(n) {
    if (n < 2) {
        return 1;
    }
let fibTwoPrev = 1;
let fibOnePrev = 1;
let fibNext = fibOnePrev + fibTwoPrev;
let i;
    for ( i = 2; i <= n; i++ ) {
        fibNext = fibOnePrev + fibTwoPrev;
        fibTwoPrev = fibOnePrev;
        fibOnePrev = fibNext;
    } 
    return fibNext;
}


function findFiboArray(n) {
    const fibos = [1, 1];
    if (n < 2) {
        return fibos[n];
    }
    for ( let i = 2; i <= n; i++) {
        fibos.push( fibos[i - 1] + fibos[i - 2] );
    }
    return fibos [n];
}