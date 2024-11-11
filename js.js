let nombre = "Alfredo";
let edad = 37;
let objeto = {nombre: "Alfredo", edad: 20};
let numeros = [1, 2, 3, 4, 5, 6];
let fecha = new Date();

console.table(objeto);
console

let a = 5;
let b = 3;

let resultado = ((a + b - 2) * 3) /2;
console.log(resultado); // 9
resultado +=1;

console.log(a > b); // true
console.log(a === b); // false, se compra el valor y el tipo

console.log(resultado % 3 == 0 ? "👍" : "👎");

let cadena = "Hola, " + "mundo";

console.log(cadena); // Hola, mundo

if (edad >= 18){
    console.info("eres mayor de edad");
  } else {
    console.warn("Eres menos de edad");
  }
  let anio = prompt("En que año naciste?");
let anio_actual = new Date().getFullYear();
let ed = anio_actual - anio;

if (edad >= 18) {
  console.info("Eres mayor de edad");
}else if (edad >= 12 && edad < 18) {
  if (edad == 12) {
    console.log("Eres un preadolescente");
  }else{
    console.log("eres un adolescente");
  }
}else{
  console.warn("Eres  un niño");
}


let dia = prompt("Ingresa un numero del 1 al 7");

switch (dia){
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miercoles");
   break;
  default:
    console.error("Dia no válido");
}