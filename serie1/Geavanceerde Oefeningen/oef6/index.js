let getal = parseInt(prompt("geef een getal in"));
let grotesteDeeler = 0;


for(let i = 1;  i < getal ; i++){
    if(getal % i === 0){
        if(i > grotesteDeeler){
            grotesteDeeler = i;
        }
    }
}

console.log(grotesteDeeler);