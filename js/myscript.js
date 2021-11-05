// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km) va applicato uno sconto del 20% per i minorenni va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
// Bonus: effettuate dei controlli sui dati di input

const km = prompt('Quanti chilometri devi percorrere?');

const eta = prompt('Qual è la tua età?');

let prezzoBiglietto = parseFloat(0.21 * km);

let sconto20 = prezzoBiglietto * 20 / 100;
let sconto40 = prezzoBiglietto * 40 / 100;

if(eta < 18 && !(isNaN(eta)) && !(isNaN(km))){
    prezzoBiglietto = prezzoBiglietto - sconto20;
    console.log(prezzoBiglietto);
    console.log(sconto20); 
    document.writeln("il costo del tuo biglietto sarà: " + prezzoBiglietto.toFixed(2) + "€.");
}else if(eta > 65 && !(isNaN(eta)) && !(isNaN(km))){
    prezzoBiglietto = prezzoBiglietto - sconto40;
    console.log(prezzoBiglietto);
    console.log(sconto40); 
    document.writeln("il costo del tuo biglietto sarà: " + prezzoBiglietto.toFixed(2) + "€.");
}else if(eta >= 18 && eta <= 65 && !(isNaN(eta)) && !(isNaN(km))){
    console.log(prezzoBiglietto);
    document.writeln("il costo del tuo biglietto sarà: " + prezzoBiglietto.toFixed(2) + "€.");
}else{
    document.writeln("Errore non hai inserito un numero! riprova!");
}


