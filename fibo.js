const n = parseInt(prompt('Enter the "n" value of Fibonacci number'));

const result = findFibo;
document.write(result);

function findFibo(n) {
    if ( n <= 1) {
        return 1;
    }
    return findFibo(n-1) + findFibo(n-2);
}