

//chiedere all’utente il numero di chilometri che vuole percorrere
var numeroKm = prompt("Quanti chilometri vuoi percorrere?");
//chiedere all'utente l’età del passeggero
var eta = prompt("Qual è la tua età?")
//prezzo
var prezzo = 0.21;
//prezzo biglietto
var prezzoBiglietto = prezzo * numeroKm;
console.log(prezzo * numeroKm);

if (eta < 18){
 prezzoBiglietto = prezzoBiglietto - prezzoBiglietto * 0.2;

}
else if (eta > 65){
prezzoBiglietto = prezzoBiglietto - prezzoBiglietto * 0.4;
}







document.getElementById('testo').innerHTML="prezzo biglietto: " + prezzoBiglietto.toFixed(2) +"€";
