let vetor = [10, 20, 50, 2, 5, 10]
let invertido = []
for (let i = 0,j = vetor.length-1; i<vetor.length; i++,j--){


    invertido[j]=vetor[i]

}

for(let i=0;i<invertido.length;i++){

    console.log(invertido[i]);
}