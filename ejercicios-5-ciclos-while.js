
const p1 = 'Gokú';
const p2 = 'Superman';

// let vidaGoku = 100;
// let vidaSuperman = 100;
let vidaP1 = 100;
let vidaP2 = 100;

const MIN_POWER = 5;
const MAX_POWER = 12;

// const ambosSiguenVivos = () => vidaGoku > 0 && vidaSuperman > 0
const ambosSiguenVivos = () => vidaP1 > 0 && vidaP2 > 0

const calcularGolpe = () => Math.round(Math.random() * (MAX_POWER - MIN_POWER) + MIN_POWER);

const gokuSigueVivo = () => vidaP1 > 0

let round = 0;

while (ambosSiguenVivos()) {
	round++

	console.log(`Round ${round}`)

	// const golpeGoku = calcularGolpe()
	// const golpeSuperman = calcularGolpe()
	const golpeP1 = calcularGolpe()
	const golpeP2 = calcularGolpe()

	// if (golpeGoku > golpeSuperman) {
	if (golpeP1 > golpeP2) {
		// console.log(`Goku ataca a Superman con u golpe de ${golpeGoku}`);
		console.log(`${p1} ataca a ${p2} con un golpe de ${golpeP1}`);
		// vidaSuperman -= golpeGoku;
		vidaP2 -= golpeP1;
		console.log(`${p2} queda con ${vidaP2} de vida`)
	} else {
		console.log(`${p2} ataca a ${p1} con un golpe de ${golpeP2}`);
		// vidaSuperman -= golpeGoku;
		vidaP1 -= golpeP2;
		console.log(`${p1} queda con ${vidaP1} de vida`)
	}

}

if (gokuSigueVivo()) {
	console.log(`${p1} ganó la pelea. Su vida es de: ${vidaP1}`)
} else {
	console.log(`${p2} ganó la pelea. Su vida es de: ${vidaP2}`)
}