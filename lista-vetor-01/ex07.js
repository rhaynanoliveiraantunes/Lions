let notas = [10, 20, 50, 2, 5, 10]
let pares = 0;
for (let i = 0; i< notas.length;i++){

if((notas[i]%2)===0){
    pares++
}
}
console.log(pares)