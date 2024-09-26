let priem;
for(let i = 1 ; i <= 100; i++){
    priem = true;
    for(let j = 2; j < i ; j++){
        if(i % j === 0){
            priem = false;
            break;
        }
    }
    if(priem === true){
        console.log(i);
    }
}