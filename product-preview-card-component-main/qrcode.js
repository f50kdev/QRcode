funcao();

function funcao() {
  console.log("Ola  Seja benvindo a minha fuction");
  console.log("estou chamando");
  return 0;
}


//parametros

const media = function (numberOne, NumberTwo) {
  medias = (numberOne + NumberTwo) / 2;
  return medias;
};

//escopo diferentes

let value1 = 13;
let value2 = 12;
media(value1, value2);
console.log(typeof media);
console.log(`o value1 e : ${value1}`);
console.log(`o value2 e de: ${value2}`);
//executando a function
funcao();
media(value1, value2);
console.log(`a soma entre ${media(value1, value2)}`);

//facilitando function

function suco(fruto1, fruta2) {
  return "Suco de :" + fruto1 + fruta2;
}

let copo = suco("banana ", "manga");
console.log(copo);

//function escopo

let subject = " criando vidoe";
function think(s) {
  s = "aplicando";
  return s;
}
console.log(think(subject));
console.log(subject);

let out = "adicionado";

let dados = function saida() {
  return out;
  console.log("welcome");
};

dados();

console.log(dados());

// aplicando conceito de escope

let aplicando = "Aplicando Fucntionss";

function func(aplicando) {
  aplicando = " retornando";
  return aplicando;
}

console.log(aplicando);
console.log(func());

//hosting em funcoes

console.log(nome())
nome()


function nome() {
  {
    nome: "faustino";
    idade: 24;
  }
  function print(saida) {
    saida = "imprimindo do valor do hostings";
    return saida;
  }
}


