// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}
// Just a console log for ourselves
console.log(sum(7,3))

// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}

//fromDollarToYen meaning it will need to go to the previous function
const fromDollarToYen = function(valueInDollar) {
    // Convert the given valueInEuro to dollars
    let valueInYen = valueInDollar * 156.5;
    // return the dollar value
    return valueInYen;
}

//fromYenToPound meaning it will need to go to the previous function
const fromYenToPound = function(valueInYen) {
    // Convert the given valueInEuro to dollars
    let valueInPound = valueInYen * 0.87;
    // return the dollar value
    return valueInPound;
}

let first = fromEuroToDollar(3.5)
console.log("Euro to Dollar: " + first)
let second = fromDollarToYen(first)
console.log("Dollar To Yen: " + second)
let third = fromYenToPound(second)
console.log("Yen to Pound: " + third)

//Export the function to be used on other files
//similar to the keyword "export" when using webpack
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };