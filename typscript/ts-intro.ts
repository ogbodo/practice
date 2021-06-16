const firstName = "Solomon";
const lastName = "Ogbodo";
let age = 21;
age = 45;
console.log(firstName);
console.log(lastName);

function displayName(name: string) {
  let myName: string;
  myName = "Solomon";
  console.log(name);
}

const displayName2 = () => {
  console.log("sdsnsdsds");
};

const calculate = (first: number, second: number) => {
  const sum = first + second;
  const division = first / second;
  const modulus = first % second;

  return {
    sum: sum,
    division: division,
    modulus: modulus,
  };
};

const calculate2 = (first: number, second: number) => {
  const sum = first + second;
  const division = first / second;
  const modulus = first % second;
  const multiplication = first * second;

  return { sum, division, modulus, times: multiplication };
};

displayName("Samuel");
displayName2();
const returnedValue = calculate(34, 90);
const returnedValue2 = calculate2(34, 90);
console.log(returnedValue);
console.log(returnedValue2);

const obj = { name: "Ridwan", lastName: "Baba" };
const object = new Object({ firstName: "Solomn", lastName: "Ogbododddd" });

console.log(obj);
console.log(object);

interface ICircle {
  radius: number;
}

const circleCalculation = (data: ICircle) => {
  const { radius } = data;

  const parameter = 2 * 3.142 * radius;
  const area = 3.142 * (radius * radius);

  return { parameter, area };
};

const result = circleCalculation({ radius: 34 });
console.log(result);

interface IPerson {
  firstName: string;
  lastName: string;
  age: number;
  address: string;
}
let person: IPerson;

const getPerson = () => {
  const databasePerson = {
    firstName: "Solomon",
    lastName: "Ogbodo",
    address: "my address",
    age: 100,
  };
  person = databasePerson;

  return person;
};

const myPerson = getPerson();

console.log(myPerson);
