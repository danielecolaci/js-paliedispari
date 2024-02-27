let wordInput = prompt('Inserisci una parola');

function palindroma(word) {

    return word === word.split("").reverse().join("");

}

if (palindroma(wordInput)) {
    alert('La parola è palindroma!');
} else {
    alert('La parola non è palindroma. Riprova');
}

