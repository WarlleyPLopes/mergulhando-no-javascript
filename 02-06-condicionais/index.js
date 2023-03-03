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

let eu = {
  nome: "warlley",
  idade: 21,
};

function checarIdade(pessoa) {
  console.log(`A idade da pessoa é: ${pessoa.idade}`);
  if (pessoa.idade >= 18) {
    console.log(`${pessoa.nome} é maior de idade`);
  } else {
    console.log(`${pessoa.nome} é menor de idade`);
  }
}

checarIdade(eu);
