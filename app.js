// question 4, find the sum of an array


function arrSum (array) {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }
    return sum
    
}

arr = [100, 200, 500]

console.log(arrSum(arr))