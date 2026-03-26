
const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
        function trava(estudante, desempregado, renda){
          
        if(estudante === 's' && desempregado === 's' && renda >= 900){
           return false;;
        }
        return true;

    }

rl.question('renda per capita ' ,(percapta) => {
    rl.question('desempregado s/n? ' ,(desempregado) => {
      rl.question('estudante? s/n ' ,(estudante) => {

        let renda = +percapta;
        let pagamento = 120

if (desempregado === 's' && renda < 900) {
    if(trava(estudante, desempregado, renda)){
    pagamento = 0;
    console.log("O valor a ser pago é R$", pagamento);
    console.log("isençao foi aplicada");
    process.exit();
    }
}else if (estudante === 's' || desempregado === 's') {
    pagamento = pagamento * 0.5;

    console.log("O valor a ser pago é R$", pagamento);
    console.log("A isençao de 50% foi aplicada");
    process.exit();
}else{
    console.log("O valor a ser pago é R$", pagamento);
    console.log("nenhuma isenção foi aplicada");
    process.exit();
}

rl.close();

            });
         
        });
    });