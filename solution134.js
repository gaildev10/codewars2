//Sum even numbers

function sumEvenNumbers(input) {
    return input.filter(element => element % 2 == 0).reduce((acc, c) => acc + c, 0)
}