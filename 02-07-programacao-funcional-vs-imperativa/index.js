/* let person = {
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
 */

let carro = {
  modelo: "HB20",
  km: 0,
};

// função funcional
function quilometragemParaRevisao(variavel) {
  return 10000 - variavel.km;
}

// função imperativa
function andarComOCarro(variavel) {
  variavel.km = variavel.km + 4000;
}

andarComOCarro(carro);
andarComOCarro(carro);

let kmDisponivel = quilometragemParaRevisao(carro);
console.log(`Falta apenas ${kmDisponivel}Km disponivel até a próxima revisão`);
