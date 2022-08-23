let anni = prompt('Quanti anni hai');
let km = prompt('Quanti km vuoi percorrere?');
let prezzo = 0.21;
let prezzo_biglietto = prezzo * km;
const sconto_20 = 0.2;
const sconto_40 = 0.4;


if (anni <= 18) {
    let sconto = prezzo_biglietto * sconto_20;
    let prezzo_scontato = prezzo_biglietto - sconto;
    document.write(' Hai diritto al 20% di sconto. Il tuo biglietto costa ' + prezzo_scontato, ' € invece che ' + prezzo_biglietto, ' €');
}

else if (anni >= 65){
    let sconto = prezzo_biglietto * sconto_40;
    let prezzo_scontato = prezzo_biglietto - sconto;
    document.write(' Hai diritto al 40% di sconto. Il tuo biglietto costa ' + prezzo_scontato, ' € invece che ' + prezzo_biglietto, ' €');

}

else {
    document.write('Il tuo biglietto costa ' + km * prezzo, ' €');

}

// document.write('Il tuo biglietto costa ' + km * prezzo, ' €');



