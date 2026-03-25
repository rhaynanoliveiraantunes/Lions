let vetor = [10, 20, 50, 2, 5, 10]
let j = true
let crecente = vetor[0]
for (let i = 0; i< vetor.length;i++){

     if(crecente>=vetor[i]){
     j=false
     }
     crecente = vetor[i]
}
if(j){

    console.log("Crecente")
}else{
    console.log("nao crecente")
}