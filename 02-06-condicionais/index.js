let me = {
  name: "Warlley",
  age: 18,
};

function checkAge(person) {
  console.log(`A idade da pessoa é: ${person.age}`);
  if (person.age >= 18) {
    console.log("Caiu dentro do bloco");
  } else {
    console.log("batata");
  }
}

checkAge(me);
