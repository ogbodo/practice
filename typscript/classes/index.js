var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    Person.prototype.setFirstName = function (firstName) {
        this.firstName = firstName;
    };
    Person.prototype.getFirstName = function () {
        return this.firstName;
    };
    Person.prototype.setLastName = function (lastName) {
        this.lastName = lastName;
    };
    Person.prototype.getLastName = function () {
        return this.lastName;
    };
    Person.prototype.setAge = function (age) {
        this.age = age;
    };
    Person.prototype.getAge = function () {
        return this.age;
    };
    Person.prototype.toString = function () {
        var stringVersion = "\n    FirstName: " + this.firstName + "\n    LastName: " + this.lastName + "\n    Age: " + this.age + "\n    Address: " + this.address + "\n    No. of Legs: " + Person.numOfLegs + "\n    Color " + Person.favorites.color + "\n    ";
        return stringVersion;
    };
    Person.numOfLegs = 2;
    Person.favorites = { color: "red" };
    return Person;
}());
var Josh = new Person("Josh", "Abraham", 21);
var stringValue = Josh.toString();
// console.log(stringValue);
Josh.address = "My address is this!!!!";
var stringValue2 = Josh.toString();
// console.log(stringValue2);
Josh.setAge(34);
Josh.setFirstName("Ife");
Josh.setLastName("Isaac");
var newJosh = Josh.toString();
// console.log(newJosh);
// console.log(Josh.getFirstName());
// console.log(Josh.getLastName());
// console.log(Josh.getAge());
var Girl = /** @class */ (function (_super) {
    __extends(Girl, _super);
    function Girl(firstName, lastName, age) {
        return _super.call(this, firstName, lastName, age) || this;
    }
    Girl.prototype.toString = function () {
        return "\n    " + _super.prototype.toString.call(this) + "\n    No. of Breast: " + Girl.numOfBreast + "\n    ";
    };
    Girl.numOfBreast = 2;
    return Girl;
}(Person));
var Ife = new Girl("Ife", "Booma", 56);
console.log(Ife.toString());
function profile(value) {
    return value;
}
function profile2(value) {
    return value;
}
var person = { firstName: "Moses", lastName: "Abdul" };
var aCar = { brand: "Toyota", price: 40000 };
var aGirl = {
    firstName: "Ife",
    lastName: "Yarrow",
    brand: "Benz",
    numOfBreast: 3,
    price: 200000
};
var myProfile1 = profile(aGirl);
var myProfile2 = profile2(person);
var myProfile3 = profile2(aCar);
var myProfile4 = profile2(aGirl);
console.log({ myProfile1: myProfile1, myProfile2: myProfile2, myProfile3: myProfile3, myProfile4: myProfile4 });
