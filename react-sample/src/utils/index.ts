export const calculate = (value1: number, value2: number) => {
  return {
    add: value1 + value2,
    divide: value1 / value2,
  };
};

const printsName = (name: string) => {
  console.log(name);
};

export default printsName;

export const shout = () => {
  console.log("shouting...");
};

export const myName = "Solomon";
