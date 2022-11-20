// question 10, filter out all the apples

function removeApples (array) {
    let newArr = array.filter( (element) => element !== 'Apple')
   return newArr
}

console.log(removeApples(['Banana', 'Apple', 'Orange', 'Apple']))