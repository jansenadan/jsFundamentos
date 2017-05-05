
const nombre = 'Pepito';
const dias = [
	"lunes",
	"martes",
	"miércoles",
	"jueves",
	"viernes",
	"sábado",
	"domingo"
];

function correr() {
	const min = 5;
	const max = 15;
	return Math.round(Math.random() * (max - min)) + min;
}

let totalKms = 0;
const length = dias.length;
for (let i = 0; i < length; i++) {
	const kms = correr()
	totalKms += kms
	console.log(`El día ${dias[i]} ${nombre} corrió ${kms}Km`)
}
let promedioKms = totalKms / length;
console.log(`En promedio, ${nombre} corrió ${promedioKms.toFixed(2)}Km`)



// for (let i = 0; i < 25; i++) {
// 	console.log(`valor de i: ${i} ${Math.floor(Math.random())}`)
// }



totalKms = 0;
for (let i = 0; i < length; i++) {
	const kms = correr()
	totalKms += kms
	console.log(`El día ${dias[i]} ${nombre} corrió ${kms}Km`)
}
promedioKms = totalKms / length;
console.log(`En promedio, ${nombre} corrió ${promedioKms.toFixed(2)}Km`)

