class Person {
  static numOfLegs = 2;
  private firstName: string;
  private lastName: string;
  private age: number;
  address: string;
  static favorites = { color: "red" };

  constructor(firstName: string, lastName: string, age: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  setFirstName(firstName: string) {
    this.firstName = firstName;
  }

  getFirstName() {
    return this.firstName;
  }

  setLastName(lastName: string) {
    this.lastName = lastName;
  }

  getLastName() {
    return this.lastName;
  }

  setAge(age: number) {
    this.age = age;
  }

  getAge() {
    return this.age;
  }

  toString() {
    const stringVersion = `
    FirstName: ${this.firstName}
    LastName: ${this.lastName}
    Age: ${this.age}
    Address: ${this.address}
    No. of Legs: ${Person.numOfLegs}
    Color ${Person.favorites.color}
    `;
    return stringVersion;
  }
}

const Josh = new Person("Josh", "Abraham", 21);
const stringValue = Josh.toString();
// console.log(stringValue);
Josh.address = "My address is this!!!!";
const stringValue2 = Josh.toString();
// console.log(stringValue2);
Josh.setAge(34);
Josh.setFirstName("Ife");
Josh.setLastName("Isaac");
const newJosh = Josh.toString();
// console.log(newJosh);
// console.log(Josh.getFirstName());
// console.log(Josh.getLastName());
// console.log(Josh.getAge());

class Girl extends Person {
  static numOfBreast = 2;

  constructor(firstName: string, lastName: string, age: number) {
    super(firstName, lastName, age);
  }

  toString() {
    return `
    ${super.toString()}
    No. of Breast: ${Girl.numOfBreast}
    `;
  }
}

const Ife = new Girl("Ife", "Booma", 56);
console.log(Ife.toString());

interface IPerson {
  firstName: string;
  lastName: string;
}

interface ICar {
  brand: string;
  price: number;
}

interface IGirl extends IPerson, ICar {
  numOfBreast: number;
}

function profile(value: IGirl) {
  return value;
}

function profile2(value: IGirl | IPerson | ICar) {
  return value;
}

const person: IPerson = { firstName: "Moses", lastName: "Abdul" };
const aCar: ICar = { brand: "Toyota", price: 40000 };
const aGirl: IGirl = {
  firstName: "Ife",
  lastName: "Yarrow",
  brand: "Benz",
  numOfBreast: 3,
  price: 200000,
};

const myProfile1 = profile(aGirl);
const myProfile2 = profile2(person);
const myProfile3 = profile2(aCar);
const myProfile4 = profile2(aGirl);

console.log({ myProfile1, myProfile2, myProfile3, myProfile4 });
