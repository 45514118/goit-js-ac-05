// Измени код так, чтобы объект parent стал прототипом для объекта в переменной сhild.
const parent = {
  name: "Stacey",
  surname: "Moore",
  age: 54,
  heritage: "Irish",
};

const child = Object.create(parent);

child.name = "Jason";
child.age = 27;
