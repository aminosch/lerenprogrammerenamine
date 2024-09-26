/*iteratie
*
* * for loop
 */

/*for(initialisatie; conditie; update){

}*/

/*let eindGetal = parseFloat(prompt("geef een eindgetal in"));

for(let i=1; i<eindGetal; i++){
    console.log(`dit is nummer ${i}`);
}*/

/*let tafel = parseInt(prompt("wat is de tafel"))
let eindGetal = parseInt(prompt("geef het eindgetal"))

for(let i = 1 ; i<=eindGetal; i++){

        console.log(`${tafel} * ${i} = ${tafel * i}`)

}*/
let eindGetal = parseInt(prompt("ggef een getal in"))
let gemiddelde = 0;
let somme = 0;
for (let i = 1; i <=eindGetal; i++){
    somme += i;
}
gemiddelde = somme / eindGetal;
console.log(gemiddelde);

