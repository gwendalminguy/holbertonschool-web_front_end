function countPrimeNumbers() {
    let count = 0;
    let prime;

    for (let i = 2 ; i < 100 ; i++) {
        prime = true;

        for (let j = 2 ; j <= Math.sqrt(i) ; j++) {
            if (i % j === 0) {
                prime = false;
                break;
            }
        }

        if (prime === true) {
            count++;
        }
    }

    return count;
}

const now = performance.now();
const quantity = countPrimeNumbers();
const duration = performance.now() - now;

console.log(`Execution time of printing countPrimeNumbers was ${duration} milliseconds.`)
