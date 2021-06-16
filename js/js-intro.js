let userName;
userName = "james";

let fatherName = "my father name";
console.log(fatherName);

const lastName = "my last name";

console.log(userName);
console.log(lastName);

function myFunction() {}
console.log(myFunction);

const myFunction2 = () => {};

fatherName = "the second father name";

console.log(fatherName);

function displayName(name) {
  const theName = name + " is the king";
  const theName1 = name + " is the king" + theName + "jjsdsdwiquwiq";
  const theName2 = `${name} is a wise man ${theName1} dsjdhjsdhjds`;
  console.log(theName);
  console.log(theName1);
  console.log(theName2);
  console.log(name);
}

displayName("Solomon");
// displayName(false);
// displayName(4343545454);

function calculate(first, second) {
  const sum = first + second;
  const division = first / second;
  const modulus = first % second;
  console.log(sum);
  console.log(division);
  console.log(modulus);
}

calculate(12, 24);
// calculate(12, "solomon");
