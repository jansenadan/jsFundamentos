let vidaGoku = 100;
let vidaSuperman = 100;

const MIN_POWER = 0;
const MAX_POWER = 30;

let round = 0;

const ambosSiguenVivos = () => vidaGoku > 0 && vidaSuperman > 0;

const calculaGolpe = () => Math.round(Math.random() * (MAX_POWER - MIN_POWER)) + MIN_POWER;


while (ambosSiguenVivos()) {
	round++
	console.log(`Round ${round}`)

}

//// La original del chino

let vidaGoku = 100
let vidaSuperman = 100

const MIN_POWER = 0
const MAX_POWER = 30

let round = 1

const ambosSiguenVivos = () => vidaGoku>0 && vidaSuperman>0

const calculaGolpe = () => Math.round(Math.random() * (MAX_POWER - MIN_POWER)) + MIN_POWER

while(ambosSiguenVivos()){

	console.log(`Round ${round}`)

	const golpeGoku = calculaGolpe()
	const golpeSuperman = calculaGolpe()

	functiongetAtaque(golpe,personaje){
		if(golpe==0){  // esquivado

			return"ATAQUE PERO ES ESQUIVADO"

		} elseif(golpe>=1 && golpe<=5){ //fallido 

			return"ATAQUE PERO FUE MUY DEBIL"

		} elseif(golpe>=6 && golpe<=10){ //patada

			return"PATADA"

		}elseif(golpe>=11 && golpe<=15){ //puñetazo

			return"PUÑETAZO"

		}elseif(golpe>=16 && golpe<=20){ //kamehameha - agilidad

			if(personaje=="goku"){
				return"KAME HAME HA"
			}else{
				return"AGILIDAD"
			}	

		}elseif(golpe>=21 && golpe<=25){ //genkidama - super aliento

			if(personaje=="goku"){
				return"GENKIDAMA"
			}else{
				return"SUPER ALIENTO"
			}	

		}elseif(golpe>=26 && golpe<=30){ //KaioKen - Mirada laser

			if(personaje=="goku"){
				return"KAIO KEN"
			}else{
				return"MIRADA LASER"
			}	

		}
	}

	if(golpeGoku > golpeSuperman){
		// goku ataca
		vidaSuperman -=golpeGoku
		console.log(`Goku ataca a Superman con ${getAtaque(golpeGoku,"goku")}(${golpeGoku}). Superman queda con ${vidaSuperman} puntos de vida`) 
	}else{
		// superman ataca
		vidaGoku -=golpeSuperman
		console.log(`Superman ataca a Goku con ${getAtaque(golpeSuperman,"superman")}(${golpeSuperman}). Goku queda con ${vidaGoku} puntos de vida`) 
	}

	round++

	if(vidaGoku>0 && vidaSuperman<=0){
		console.log("GOKU GANA!")
		break
	}elseif(vidaSuperman>0 && vidaGoku<=0){
		console.log("SUPERMAN GANA!")
		break
	}
}