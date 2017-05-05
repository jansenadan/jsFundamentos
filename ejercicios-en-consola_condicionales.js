const starWars7 = 'Star Wars: El Despertar de la Fuerza';
const minAgestarWars7 = 13;

const nameSacha = 'Sacha';
const ageSacha = 26;

const nameSanti = 'Santi';
const ageSanti = 12;

function canWatchStarWars7(name, age, isWithAdult = false) {
	if (age >= minAgestarWars7) {
		alert(`${name} puede pasar a ver ${starWars7}`)
	} else if (isWithAdult) {
		alert(`${name} puede pasar a ver ${starWars7}.
			Aunque su edad es ${age}, se encuentra acompañado/a por un adulto`)
	} else {
		alert(`${name} no puede pasar a ver ${starWars7}.
			Tiene ${age} años y necesita tener al menos ${minAgestarWars7}`)
	}
}

canWatchStarWars7(nameSacha, ageSacha);
canWatchStarWars7(nameSanti, ageSanti, true);

// Versión mejorada y con arrow function
const movie = 'Cuatro bastardos por un lugar en el Infierno (Italia)',
	movieOriginalTitle = 'Shark!',
	minAgeToWatch = 18,
	namePers1 = 'Atahualpa',
	agePers1 = 26,
	namePers2 = 'Pedro De Ursua',
	agePers2 = 15,
	canWatchmovie = (name, age, nameAlcahueta = 'nadie', isWithPermisive = false) => {
		if (age >= minAgeToWatch) {
			alert(`${name} puede pasar a ver ${movie}`)
		} else if (isWithPermisive) {
			alert(`${name} puede pasar a ver ${movie}.
			Aunque su edad es ${age}, se encuentra acompañado/a por ${nameAlcahueta}, un adulto muy permisivo y alcahueta`)
		} else {
			alert(`${name} no puede pasar a ver ${movie}.
			Tiene ${age} años y necesita tener al menos ${minAgeToWatch}`)
		}
	}

canWatchmovie(namePers1, agePers1);
canWatchmovie(namePers2, agePers2);
canWatchmovie(namePers2, agePers2, namePers1, true);



