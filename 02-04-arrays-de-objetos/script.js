let pessoa1 = {
  name: "Warlley",
  age: 21,
  sexo: "masculino",
};

let pessoa2 = {
  name: "Daniel",
  age: 23,
  sexo: "masculino",
};

let pessoa3 = {
  name: "Karen",
  age: 23,
  sexo: "feminino",
};

let lista = [pessoa1, pessoa2, pessoa3];

console.table(lista);

for (let pessoa of lista) {
  console.table(pessoa);
}

let carro1 = {
  nome: "GTR",
  preco: 1000000,
  km: 0,
};

let carro2 = {
  nome: "Supra",
  preco: 1000000,
  km: 0,
};

let carro3 = {
  nome: "RX7",
  preco: 1000000,
  km: 0,
};

let garagem = [carro1, carro2, carro3];
console.log(garagem);

for (const carros of garagem) {
  console.log(carros);
}
