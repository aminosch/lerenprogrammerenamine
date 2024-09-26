let eindeGetal = parseInt(prompt('geef een eind getal in'));
let res = "";
let n = 1;
for(let i = 1 ; n <= eindeGetal ; i++){
    if((n +i) < eindeGetal){
        res = res + n + ", ";
    }else{
        res = res + n;
    }

    n = n + i;
}

console.log(res)