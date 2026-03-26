const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question(' kwh fora' ,(porfora) => {
    rl.question('kwh ponta ' ,(porponta) => {
      rl.question('pagou em dia? s/n ' ,(dia) => {
        rl.question('tem solar?', (solar) => {
          rl.question('qual bandeira tarifaria? ' ,(bandeira) => {
         
        let quantidade_fora = +porfora;
        let quantidade_ponta = +porponta;
        let preco_fora = quantidade_fora * 0.60;
        let preco_ponta = quantidade_ponta * 0.81;       
        let total = preco_fora + preco_ponta;   
        let total_quantidade = quantidade_fora + quantidade_ponta;             
        let pagamento = total;


if (bandeira === 'amarela') {
    total = total + (total * 0.10);
    pagamento = total

}else if (bandeira === 'vermelha') {
    total = total + (total * 0.25);
    pagamento = total
}

if (dia === 's' && total_quantidade >= 150) {
    pagamento = total * 0.96;
}

if(solar === 's'){
    pagamento = pagamento - 12

     }


if(pagamento < 25){
        pagamento = 25;
}

console.log("O valor a ser pago é R$", pagamento);

rl.close();

            });
         
        });
    });
});
});