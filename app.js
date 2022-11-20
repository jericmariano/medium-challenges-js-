// question 12, truthy to true, falsy to false

function convertToBoolean (array) {
    return array.map( elem => !!elem)
}

console.log(convertToBoolean([500, 0, "Jeric", "", []]))