document.getElementById('testo').innerHTML="prezzo biglietto: " + prezzoBiglietto;

//chiedere all’utente il numero di chilometri che vuole percorrere
var numeroKm = prompt("Quanti chilometri vuoi percorrere?");
//chiedere all'utente l’età del passeggero
var eta = prompt("Qual è la tua età?")
//prezzo
var prezzo = 0.21;
//prezzo biglietto
var prezzoBiglietto = prezzo * numeroKm;
console.log(prezzo * numeroKm);
//età
var minorenni = Math.floor(Math.random() * 18) + 1;
var scontoVenti = prezzoBiglietto * 20 / 100;       //20:100=x:prezzoBiglietto
//
var over = Math.floor(Math.random() * 65) + 1;

//sconto del 20% per i minorenni
if (minorenni < 18){
 prezzoBiglietto = scontoVenti;

}

//sconto del 40% per gli over 65
