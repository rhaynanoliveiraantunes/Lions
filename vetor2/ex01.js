const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

   let vet = []

rl.question('digite a quantidade de valores que voce quer inserir no vetor ', (valor) => {

   let numero_repeteicao = +valor
   let i = 0

function maiores(){


    if(numero_repeteicao > i){

    rl.question(`digite o valor da posicao ${i+1} do vetor `, (valor_vetor) => {

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
    for( let j = 0; j < numero_repeteicao; j++){

        if(vet[j]< maior && vet[j]>segundo_maior){

            segundo_maior = vet[j]
        }
    }

    console.log("o maior e ", maior)

    if(segundo_maior === -Infinity){
        console.log("todos os numeros sao iguais")
    }else{
        console.log("o segundo maior e ", segundo_maior)
    }
   
    rl.close();
}

}

    maiores();

})