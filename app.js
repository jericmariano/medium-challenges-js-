// question 5, add up the numbers from a single number


function progressiveSum (elem1) {
    let sum = 0
  for (let i = 0; i <= elem1; i++) {
    sum += i
}
    return sum
}

console.log(progressiveSum(600))