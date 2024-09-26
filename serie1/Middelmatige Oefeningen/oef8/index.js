
let res = ""
for (let i = 1 ;  i <= 10 ; i++){
    if(i < 10){
        res = res + i ** 2 + ", "
    }else{
        res = res + i ** 2
    }
}
console.log(res);