let anni = prompt('Quanti anni hai');
let km = prompt('Quanti km vuoi percorrere?');
let prezzo = 0.21;
const sconto_20 = 20;
const sconto_40 = 40;

console.log(anni, 'Anni');
console.log(km, 'Km');

if (anni <= 18) {
    document.write(' Hai diritto al 20% di sconto. Il tuo biglietto costa ' + km * prezzo, ' €');
}

// document.write('Il tuo biglietto costa ' + km * prezzo, ' €');



