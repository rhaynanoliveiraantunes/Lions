let notas = [10, 20, 50, 2, 5, 10]
let maior = notas[0];
for (let i = 0; i< notas.length;i++){

if(maior<notas[i]){
    maior = notas[i]
}
}
console.log(maior)