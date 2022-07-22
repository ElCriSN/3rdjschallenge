// HOISTING (ALZAR)

// x() /* LLAMAMOS A LA FUNCIÓN =D JAJAJAA =P!!  */
// function x() { /* Aquí declaramos la Función jajajaa =)! */
//     console.log("hola");
// }

// y()

// y = function() {
//     console.log("hola");
// }


// CONSTANTES JAJAJJAAJAA =DD!
// const a = 5
// a = 7

// const suma = (a, b) => a + b

//LET
// a = 5
// if (a == 5){
//     let b = 8 /* LA VARIABLE b LA DEFINIMOS DENTRO DEL BLOQUE Y LA CREAMOS CON ALCANCE DEL BLOQUE =)! JAJAJJAJAA =P!!*/
// }

// let a = 5
// let a = 8 /* error =P */

// /* USAR LA LET JAJAJAA =P!!! */

// let a = 5
// a = 8

//FORMAS DE DEFINIR VARIABLES =DDDD!! JAJAJA =P!!
// var variable = valor

// // POR EJEMPLO : =DDD!!
// var a = 5

// function hola() {
//     var a = 5
//     console.log(a);
// }
// =)!!
//SCOPE EN JAVASCRIPTT JAJAJAJA =D!!
// HAY TRES TIPOS DE SCOPES = GLOBAL, FUNCIÓN, BLOQUE =)!! JAJAJA =P!

// /* AQUÍ ESTAMOS EN UN SCOPE GLOBAL */

// if (a == 5) {
//     /* AQUÍ ESTAMOS EN UN SCOPE DE BLOQUE  JAJAJAA =D!!*/
// }

// function hola(){
//     /* AQUÍ ESTAMOS EN UN SCOPE DE FUNCIÓOOON AJAJAJJAA =)!! */
// }

// ARROW FUNCTIONS Y ADDEVENTLISTERN =DD!! AJAJAJA =P !! =)!!

// btn = document.querySelector("button")
// btn.addEventListener("click", () => alert('hola'))

// ARROW FUNCTIONS =DDD JAJAJA =)!!! =P!!
// suma = (a, b) => a + b

//Es lo mismo que =)!!:

// suma = function (a, b) {
//     return a + b
// }

// SUMA CON MÚLTIPLES LÍNEAS EN ARROW FUNCTION =P!!!

// suma = (a, b) => {
//     console.log(a)
//     console.log(b)
//     return a + b
// }

// CUANDO ES UNA SOLA LÍNEA EL RETURN ES IMPLÍCITOOO JAJAAJA =P!! =DDD!! =)!!

// suma = (a, b) => a + b /* a + b es lo mismo que return a + b */

// () alert('hola')

// function alertar(){
//     alert("hola")
// }// alertar = function() {
//     alert("hola");
// }

// alertar()

// function ejemplo(par-1){
//     par-1() /* AQUÍ LLAMAMOS A LA FUNCIÓN PASADA */
// }

// ejemplo(function() {alert ("hola")} )
    
/* script.js */
// function alertar(){
//     alert("hola =DDD!! jaajajajjaa");
// }

// btn = document.querySelector("button");
// btn.addEventListener("click", alertar);

// function pintar(color) {
//     elemento = document.querySelector("body");
//     elemento.style.backgroundColor = color;
// }

// btn = document.querySelector("button")
// btn.addEventListener("click", pintar("black"))

// btn = document.querySelector("button")

/* Ejemplo de uso con Función Normal ajjajaa =)!! */
// function alertar() {
//     alert("hola jajajaa =DDD!! =PPP!!");
// }

// btn.addEventListener("click", alertar)

/* Ejemplo de uso con Función Anónima */
// btn.addEventListener("click", function() {
//     alert("hola")
// });