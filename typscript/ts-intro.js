var firstName = "Solomon";
var lastName = "Ogbodo";
var age = 21;
age = 45;
console.log(firstName);
console.log(lastName);
function displayName(name) {
    var myName;
    myName = "Solomon";
    console.log(name);
}
var displayName2 = function () {
    console.log("sdsnsdsds");
};
var calculate = function (first, second) {
    var sum = first + second;
    var division = first / second;
    var modulus = first % second;
    return {
        sum: sum,
        division: division,
        modulus: modulus
    };
};
var calculate2 = function (first, second) {
    var sum = first + second;
    var division = first / second;
    var modulus = first % second;
    var multiplication = first * second;
    return { sum: sum, division: division, modulus: modulus, times: multiplication };
};
displayName("Samuel");
displayName2();
var returnedValue = calculate(34, 90);
var returnedValue2 = calculate2(34, 90);
console.log(returnedValue);
console.log(returnedValue2);
var obj = { name: "Ridwan", lastName: "Baba" };
var object = new Object({ firstName: "Solomn", lastName: "Ogbododddd" });
console.log(obj);
console.log(object);
var circleCalculation = function (data) {
    var radius = data.radius;
    var parameter = 2 * 3.142 * radius;
    var area = 3.142 * (radius * radius);
    return { parameter: parameter, area: area };
};
var result = circleCalculation({ radius: 34 });
console.log(result);
var person;
var getPerson = function () {
    var databasePerson = {
        firstName: "Solomon",
        lastName: "Ogbodo",
        address: "my address",
        age: 100
    };
    person = databasePerson;
    return person;
};
var myPerson = getPerson();
console.log(myPerson);
