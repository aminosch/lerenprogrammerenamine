n = parseInt(prompt("geef een getal in"))
let priem;

    priem = true;
    for(let i = 2; i < n ; i++){
        if(n % i === 0){
            priem = false;
            break;
        }
    }
    if(priem === true){
        console.log(`${n} is een priem getal`);
    }else{
        console.log(`${n} is geen priem getal`);
    }
