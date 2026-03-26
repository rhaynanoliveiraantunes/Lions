const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('preço do remedio ' ,(valor) => {
    rl.question('generico s/n? ' ,(genrico) => {
      rl.question('idoso? s/n ' ,(idoso) => {
        rl.question('cupom', (cupom) => {


        let preco = +valor;
        let pagamento = 0
        let desconto = 0;
        let teto = false
        let trava = false 
        let cupomaceito = false

if (genrico === 's') {
    pagamento = preco * 0.85;
}
 if (idoso === 's') {
    pagamento = preco * 0.9;
}

if (cupom === 'SAUDE5' && preco >= 60) {
    pagamento = preco * 0.95;
    cupomaceito = true
}



if(desconto > (preco * 0.8)){
    pagamento = preco * 0.8;
        teto = true
}

if(preco >=50 && pagamento < 15 ){
  pagamento = 15;
  trava = true
}
 

console.log("O valor a ser pago é R$", pagamento);

if(trava === true){
    console.log("O piso foi aplicado")
}else{
    console.log("O piso não foi aplicado")
}

if(teto === true){
    console.log("O teto foi aplicado")
}else{
    console.log("O teto não foi aplicado")
}
if(cupomaceito === true){
    console.log("O cupom foi aceito")
}else{
    console.log("nenhum cupom foi aceito")
}

rl.close();

            });
         
        });
    });
});