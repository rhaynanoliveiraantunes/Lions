let notas = [10, 20, 50, 2, 5, 10]
let menor = notas[0];
for (let i = 0; i< notas.length;i++){

if(menor>notas[i]){
    menor = notas[i]
}
}
console.log(menor)