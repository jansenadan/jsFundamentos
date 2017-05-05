function platzom(str) {
	let translation = str;
	// Primer condición
	// Si la palabra termina en "ar", se le quitan esos dos caracteres
	if (str.toLowerCase().endsWith('ar')) {
		translation = str.slice(0, -2);
	}

	// Segunda condición
	// Si la palabra inicia con Z, se le añade "pe" al final
	if (str.toLowerCase().startsWith('z')) {
		translation += 'pe'
	}

	// Tercera condición
	// Si la palabra traducida tiene 10 o más letras, 
  // se debe partir a la mitad y unit con un guión del medio
	const length = translation.length;
	if (length >= 10) {
		const firstHalf = translation.slice(0, Math.round(length / 2));
		const secondHalf = translation.slice(Math.round(length / 2));
		translation = `${firstHalf}-${secondHalf}`;
	}

	// Cuarta condición
	// Si la palabra original es un palíndromo, ninguna regla anterior se cuenta y se devuelve
  // la misma palabra intercalando mayúsculas y minúsculas
	const reverse = (str) => str.split('').reverse().join('')

	function minMay(str) {
		const length = str.length;
		let translation = '';
		let capitalize = true;
		for (let i = 0; i < length; i++) {
			const char = str.charAt(i)
			translation += capitalize ? char.toUpperCase() : char.toLowerCase();
			capitalize = !capitalize
		}
		return translation;
	}
	if (str == reverse(str)) {
		return minMay(str)
	}

	return translation;
}

console.log(platzom("Programar"));
console.log(platzom("Zopenco"));
console.log(platzom("Zarzuelar"));
console.log(platzom("Ornitorrinco"));
console.log(platzom("sometemos"));
console.log(platzom("anitalavalatina"));
