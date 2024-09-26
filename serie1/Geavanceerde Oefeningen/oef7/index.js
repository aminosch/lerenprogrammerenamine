let prec = 0;
let suiv = 1;
let aux;
let r =""
for (i = 0; i < 10; i++){
    if(i < 9){
        r = r + suiv + ","
    }else{
        r = r + suiv;
    }
    aux= suiv;
    suiv = suiv + prec;
    prec = aux
}
console.log(r)