let anni = prompt('Quanti anni hai');
let km = prompt('Quanti km vuoi percorrere?');
let prezzo = 0.21;
let sconto_20 = 20;
let sconto_40 = 40;

console.log(anni, 'Anni');
console.log(km, 'Km');

if (anni <= 18) {
    document.write('Il tuo biglietto costa ' + km * prezzo - sconto_20, ' €');
}

// document.write('Il tuo biglietto costa ' + km * prezzo, ' €');



