const nome = "Pedro Lucas";
const idade = 12;
const estudante = true;
const hobbies = ["Ler", "Assistir", "Jogar"];
const endereco = { rua: "17", numero: 18, cidade: "São Luís" };
const sobrenome = " Oliveira Frazão"
const nomeCompleto = nome + sobrenome

console.log(typeof nome);
console.log(typeof idade);
console.log(typeof estudante);
console.log(typeof hobbies);
console.log(typeof endereco);
console.log ("Olá, eu me chamo " + nomeCompleto + ", tenho " + idade + " anos de idade, eu moro na rua " + endereco.rua + " na casa " + endereco.numero + ", em " + endereco.cidade + " e tenho aulas de programação.");