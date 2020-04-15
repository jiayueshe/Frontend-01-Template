
var game = function (guess=[1,2,3], answer=[1,2,3]) {
    let Awin = 0;
    for (i = 0; i < guess.length; i++) {
        if (guess[i] === answer[i]) Awin++
    }
    return Awin;
};

function guessNum (nummin = 1, nummax = 3) {
    return parseInt(Math.random() * (nummax - nummin + 1) + nummin);
}
function guessArray (length) {
    let numArray = []
    for (i = 0; i < length; i++) {
        numArray.push(guessNum());
    }
    return numArray;
}

var Bguess = guessArray(3);
console.log(Bguess);
var Aguess = guessArray(3);
console.log(Aguess);
var result = game(Aguess, Bguess);
console.log(result);