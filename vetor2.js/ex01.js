const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

   let vet = []

rl.question('digite oa quantidade de valores que voce quer inserir no vetor', (valor) => {

   let numero_repeteicao = +valor
   let i = 0
function maiores(){


    if(numero_repeteicao > i){

    rl.question(`digite o valor da posicao ${i} do vetor `, (valor_vetor) => {

     vet[i] = +valor_vetor
     i++
     maiores()
    })

}else{

    let maior = vet[0] 

    for(let j = 0; j<numero_repeteicao; j++){

       if(maior<vet[j])
       maior = vet[j]
    }

    let segundo_maior = -Infinity
    for(j = 0; j < numero_repeteicao; j++){

        if(vet[j]< maior && vet[j]>segundo_maior){

            segundo_maior = vet[j]
        }
    }

    console.log("o maior e ", maior)
    console.log("o segundo maior e ", segundo_maior)
    rl.close();
}

}

    

})