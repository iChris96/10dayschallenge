// Day 1: Functions

const factorial = (n) => {
    if (n < 1) return 1
    const acc = factorial(n - 1)
    return n * acc
}

console.log(factorial(4))