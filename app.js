// question 11, filter out all the falsy values

function filterOutFalsy (array) {
    let newArr = array.filter( (element) => !!element === true)
   return newArr
}

console.log(filterOutFalsy(["", [], 0, null, undefined, "0", 500]))