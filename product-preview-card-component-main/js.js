// // console.log(type);

// // let mundadno = Numbesr(type);
// // console.log(mundadno);
// let Strings = "1234";
// let Numbers = 11223;
// console.log(Numbers.tofixed(1))

// console.log( String(Numbers));
// console.log(String(Numbers));
// //
//  console.log(Strings.length)
//  console.log(String(Numbers).length);
// let   n1 = 12303.344;
//  console.log(n1.replace())

let value = 1223.1727363;
console.log(value.toFixed(2).replace(".", ","));
console.log(String(value.toFixed(2).replace(".", ".")));

let nombre = "Faustino Henriques";
console.log(nombre.toUpperCase());

console.log(nombre.toLowerCase());

// manipulando array
// let place = "Eu quero viver o Amor";
// let caixa = place.split(" ");
// // let abrindo = place.join()
//  let separando = abrindo.split(" ")
//  console.log(separando)
// console.log(caixa);
// console.log(caixa.split());

// console.log(new Array(place).push("Angola"))

let nome = " Faustino Henriques"; 
console.log(nome.split("").join(""))


//metodo includes

console.log(nome.includes("He"))

//arrays = construtores

var construtor = new Array(nombre)
console.log(construtor)
console.log(construtor[0])
let faustino = new Array("Angola" , " launda" , function nomse(){
    return " estou dentro de uma function"
})
console.log(faustino)
let bloc = faustino.unshift("Lunda");
console.log(bloc)

console.log( typeof faustino[3]())

// ==> estou executando um fucntion \
 //strings para arrays 

 let word  = "manuplacao";
let mudando  = Array.from(word)
// let juntando = word.includes("")
// console.log(juntando)
// console.log(Array.from(nome).unshift("10202");

let adicionado  = mudando.push("Angola");
console.log( mudando)
console.log(mudando.pop());
console.log(mudando.shift());

// found  the position of some elemnt 

console.log(mudando.slice(1 ,6));
console.log(mudando.splice(0 , 2));
console.log(mudando.indexOf('Angola'));


//operadores //
//  + , - , * / 
  let number  = 1;
(function() {
    console.log("Retornand")
})();


(function(){
  console.log(" Dentro de uma function")
})();





