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
