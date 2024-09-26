let n = parseInt(prompt("geef n in"))
let prec = 0;
let suiv = 1;
let aux;
let som = 0;

for (i = 0; i < n; i++){
    som = som + suiv;
    aux= suiv;
    suiv = suiv + prec;
    prec = aux;
}
console.log(som)