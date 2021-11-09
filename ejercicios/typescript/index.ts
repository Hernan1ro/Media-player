console.log("hello, TypeScript");

// function add(a: number, b: number) {
//   return a + b;
// }

// const sum = add(2, 3);
// console.log(sum);

let muted: boolean = true;
muted = false;

//Números
let numerador = 42;
let denominador = 6;
let resultado = numerador / denominador;

//String
let nombre: string = "Hernan";
let saludo = `Me llamo ${nombre}`;

// Arreglos
let people: string[] = [];
people = ["Isabel", "Nicole", "Raul"];

// Arreglos de strings y numeros
let peopleAndNumbers: Array<string | number> = [];

// Enum
enum Color {
  Rojo,
  Verde,
  Azul,
}

let colorFavorito: Color = Color.Rojo;

//Any keyboard
let comodin: any = "Joker";

comodin = { type: "Wildcard" };

// Object

let someObject: object = { type: "Wildcard" };

// Funciones

function add(a: number, b: number): number {
  return a + b;
}

const sum = add(4, 5);

// Funciones que regresa otras Funciones

function createAdder(a: number): (number) => number {
  return function (b: number) {
    return b + a;
  };
}

const addFour = createAdder(4);
const fourPlus6 = addFour(6);

// funcion que escribe el nombre completo de alguien y solo se envia un argumento

function fullName(firstName: string, lastName: string = "Smith"): string {
  return `${firstName} ${lastName}`;
}

const hernan = fullName("Agente");

console.log(hernan);
