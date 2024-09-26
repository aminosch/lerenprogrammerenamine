let getal = parseInt((prompt("geef een getal")))

for (let i = 1 ;  i <= 100 ; i++){
    if(i % getal === 0){
        console.log(i);
    }
}
