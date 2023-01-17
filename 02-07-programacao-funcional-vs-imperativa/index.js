let person = {
  age: 14,
  name: "Warlley",
};

//Função pura
function getRemainingYearsToMajority(person) {
  return 18 - person.age;
}

//Função impura - gera efeitos colaterais
function increasePersonAge(person) {
  person.age = person.age + 1;
}

//Chamou um método impuro
increasePersonAge(person);

let remainingYears = getRemainingYearsToMajority(person);
console.log(remainingYears);
