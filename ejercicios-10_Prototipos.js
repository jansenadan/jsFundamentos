// Métodos de un objeto: Los objetos estan compuestos de atributos (también las llaman propiedades) que tienen un valor asignado; la estructura de un objeto es así atributo: valor. El nombre del atributo puede ser un string o un número y a este nombre se le llama clave (key), el valor de un atributo puede ser un string, un numero entero (int), un número de valor de punto flotante (float?), un arreglo (array), un objeto, una función (método) o una variable.
// Los métodos son funciones que son atributos de un objeto.

// Una forma de definir un método dentro de un objeto.
const p1 = {
	x: 0,
	y: 4,
	moverEnX: function (x) { this.x += x },
	moverEnY: function (y) { this.y += y }
}

// otra forma de definir un método dentro de un objeto
const p2 = {
	x: 3,
	y: 0,
	moverEnX(x) {
		this.x += x
	},
	moverEnY(y) {
		this.y += y
	}
}

function distancia(p1, p2) {
	const x = p1.x - p2.x;
	const y = p1.y - p2.y;

	return Math.sqrt(x * x + y * y);
}

console.log(distancia(p1, p2));

p1.moverEnX(10); // Modificamos la posición en X del punto


// Misma funcionalidad pero usando prototype


function Punto(x, y) {
	this.x = x;
	this.y = y;
}

Punto.prototype.moverEnX = function moverEnX(x) {
	this.x += x
}

Punto.prototype.moverEnY = function moverEnY(y) {
	this.y += y
}

Punto.prototype.distancia = function distancia(p) {
	const x = this.x - p.x;
	const y = this.y - p.y;

	return Math.sqrt(x * x + y * y);
}


const p1 = new Punto(0,4);
const p2 = new Punto(3,0);


console.log(p1.distancia(p2));
console.log(p2.distancia(p1));
p1.moverEnX(10)
console.log(p1.distancia(p2));
p2.moverEnY(-4)
console.log(p1.distancia(p2));

// Si imprimo en la consola el valor de p1
// Me va a retornar un objeto así: Punto {x: 10, y: 4}
/* Pero si yo 'abro' ese objeto me va a mostrar ademas de las propiedades de este, va a tener una propiedad __proto__ así:
Punto {x: 10, y: 4}
	x: 10
	y: 4
	__proto__:
Object
distancia
:
function distancia(p)
moverEnX
:
function moverEnX(x)
moverEnY
:
function moverEnY(y)
constructor
:
function Punto(x, y)
__proto__
:
Object


es decir así:
Punto {
	x: 10,
	y: 4
	__proto__: 'Object' {
		distancia: 'function' distancia(p),
		moverEnX: 'function' moverEnX(x)
		moverEnY: 'function' moverEnY(y)
		constructor: 'function' Punto(x, y)
		__proto__: Object
	
	}