

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

       //20:100=x:prezzoBiglietto

//


//sconto del 20% per i minorenni
if (eta < 18){
 prezzoBiglietto = prezzoBiglietto - prezzoBiglietto * 0.2;

}
else if (eta > 65){
prezzoBiglietto = prezzoBiglietto - prezzoBiglietto * 0.4;
}
//sconto del 40% per gli over 65





document.getElementById('testo').innerHTML="prezzo biglietto: " + prezzoBiglietto.toFixed(2) +"€";
