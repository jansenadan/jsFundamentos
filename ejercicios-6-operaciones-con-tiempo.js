// 26 marzo de 1978
// 26 03 1978

// const nacimiento = new date(año, mes - 1, dia)
const nacimiento = new Date(1978, 2, 26, 21, 15, 01);

nacimiento;

const hoy = new Date();
hoy;

tiempo = hoy - nacimiento;
tiempoSegundos = tiempo / 1000;
tiempoMinutos = tiempoSegundos / 60;
tiempoHoras = tiempoMinutos / 60;
tiempoDias = tiempoHoras / 24;
tiempoYear = tiempoDias / 365.242;

console.log(`Han pasado ${tiempo} milisegundos desde el día de mi nacimiento.
	Es decir ${tiempoSegundos.toFixed(2)} segundos
	o ${tiempoMinutos.toFixed(2)} minutos
	o ${tiempoHoras.toFixed(2)} horas
	o ${tiempoDias.toFixed(2)} dias
	o ${tiempoYear.toFixed(2)} años`);

const proximo = new Date(hoy.getFullYear(), nacimiento.getMonth(), nacimiento.getDate());

const diasSemana = [
	"Domingo",
	"Lunes",
	"Martes",
	"Miércoles",
	"Jueves",
	"Viernes",
	"Sábado"
];

console.log(diasSemana[proximo.getDate()])