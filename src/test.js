// import the function sum from the app.js file
const {sum} = require('./app.js');
const { fromEuroToDollar } = require('./app.js');
const { fromDollarToYen } = require('./app.js');
const { fromYenToPound } = require('./app.js');

//Start your first step
test('adds 14 + 9 to equal 23', ()=>{
    //inside the test we call our sum function with 2 numbers
    let total = sum(14,9)
    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function(){
    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);
    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    // This is the comparison for the unit test
    expect(fromEuroToDollar(3.5)).toBe(3.745); 
    // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

//fromDollarToYen
test("3.5 Euros should be 3.745 Dollars that should be 586.0925 Yen", function(){
    const Yen = fromDollarToYen(3.745);
    const expected = 3.745 * 156.5; 
    expect(fromDollarToYen(3.745)).toBe(586.0925); 
})

//fromYenToPound
test("One Euro should be 0.87 pound", function(){
    const pound = fromYenToPound(586.0925);
    const expected = 586.0925 * 0.87; 
    expect(fromYenToPound(586.0925)).toBe(509.900475); 
})