console.log("El área de un triángulo de base 5 y altura 7 es: " + 5 * 7 / 2)

// Con Template strings de ES 2015
console.log(`El área de un triángulo de base 5 y altura 7 es: ${5 * 7 / 2}`)

// Segundo intento
let base = 5;
let height = 7;
console.log(`El área de un triángulo de base ${base} y altura ${height} es: ${base * height / 2}`)

// Tercer intento
let base = 5;
let height = 7;

function triangleArea(base, height) {
	return base * height / 2
}

console.log(`El área de un triángulo de base ${base} y altura ${height} es: 
	${triangleArea(base, height)}`)

// Cuarto intento
let base = 5;
let height = 7;
let triangleArea = function (base, height) {
	return base * height / 2
}

console.log(`El área de un triángulo de base ${base} y altura ${height} es: 
	${triangleArea(base, height)}`)


// Quinto intento // Arrow function
let base = 5;
let height = 7;
let triangleArea = (base, height) => base * height / 2

console.log(`El área de un triángulo de base ${base} y altura ${height} es: 
	${triangleArea(base, height)}`)


// Sexto intento // Arrow function y Constante
let base = 5;
let height = 7;
const triangleArea = (base, height) => base * height / 2

console.log(`El área de un triángulo de base ${base} y altura ${height} es: 
	${triangleArea(base, height)}`)

/*Área Circulo*/ //Robado
let radio = prompt(`Radio del Ciculo`);
const circleArea = (radio) => Math.PI * Math.pow(radio, 2);
console.log(`El area del circulo con radio de ${radio} es: ${circleArea(radio)}`);