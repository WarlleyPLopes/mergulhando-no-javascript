let person1 = {
  name: "Warlley",
  age: 21,
};

let person2 = {
  name: "Daniel",
  age: 23,
};

let person3 = {
  name: "Karen",
  age: 23,
};

let list = [person1, person2, person3];

for (let person of list) {
  console.log(person.name);
}
