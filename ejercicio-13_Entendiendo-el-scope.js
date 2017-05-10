
	var nombre = "Jansen";

	function saludar() {
		var nombre = "Joselito"
		console.log(`Hola ${nombre}`)
	}

	saludar("Juancho");

	console.log(`La variable nombre tiene el valor de ${nombre}`)



function saludar10(nombre) {
	for (var i = 0; i < 10; i++) {
		console.log(`Hola ${nombre}`)
	}

	console.log(`El valor de i es: ${i}`)
}

saludar10("Juanchito");

console.log(`La variable nombre tiene el valor de ${nombre}`)


function saludar11(nombre) {
	for (let i = 0; i < 11; i++) {
		console.log(`Hola ${nombre}`)
	}

	console.log(`El valor de i es: ${i}`)
	// Esto da error porque i esta definido como una variable que existe unicamente en el scope de el bloque de código donde esta definida (let), no en el scope de la función donde se definió
}

saludar11("Teodoro");


function saludarAJansen8() {
	const nombre = "Jansen"
	for (let i = 0; i < 8; i++) {
		console.log(`Hola ${nombre}`)
	}

	// console.log(`El valor de i es: ${i}`)
}

saludarAJansen8();