// question 9, turn every element in an array into 0

function convertToZeros (array) {
   for (let i = 0; i < array.length; i++) {
    array[i] = 0
   }
   return array
}

console.log(convertToZeros([5, 100, 0]))