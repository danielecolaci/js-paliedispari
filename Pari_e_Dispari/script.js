console.log('ok');

let choiseInput = prompt('Pari o Dispari?')
let numberInput = parseInt(prompt('Inserisci un numero da 1 a 5'));

let choiseComputer = numberCasual();

function numberCasual() {
    return Math.floor(Math.random() * 5) + 1;
}

console.log(choiseInput, numberInput, choiseComputer);
