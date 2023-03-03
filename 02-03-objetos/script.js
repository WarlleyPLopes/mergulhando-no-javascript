let person = {
  name: "Warlley",
  age: 21,
  sex: "male",
};

let pessoa = {
  nome: "Warlley",
  idade: 21,
  sex: "masculino",
};

pessoa.nome = "Karen";
pessoa.idade = 23;
pessoa.sex = "feminino";

let carro = {
  marca: "VW",
  modelo: "Jetta",
  cor: "Preto",
  km: 0,
  valor: 240000,
};

console.log(
  `O cliente ${person.name}, comprou o ${carro.modelo} pelo preço de ${carro.valor}R$, da antiga dona ${pessoa.nome}`
);
