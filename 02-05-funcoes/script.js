/* function greet(name = "Warlley") {
  return `boa madrugada, ${name}`;
}

let greeting = greet("Warlley");
console.log(greet());
 */

function saudacao(nome = "Warlley") {
  return `boa tarde, ${nome}`;
}

let saudando = saudacao();

console.log(saudando);

function meuCarro(modelo, cor) {
  return {
    modelo: modelo,
    cor: cor,
    ano: 2023,
  };
}

let Jetta = meuCarro("Jetta", "Preto");

console.log(Jetta);
