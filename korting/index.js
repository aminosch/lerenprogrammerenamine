let prijs = parseFloat(prompt("voer de prijs van het product in"));

let kopen ;

if(prijs >= 100){
    kopen = prijs*0.9
}else if(prijs >= 50){
    kopen = prijs*0.95
}else{
    kopen = prijs
}

console.log(kopen.toFixed(2))