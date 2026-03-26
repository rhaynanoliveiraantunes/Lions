const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('quantidade de horas ' ,(horas) => {
    rl.question('noturno s/n? ' ,(noturno) => {
      rl.question('perdeu o ticket? s/n ' ,(ticket) => {
        rl.question('tarifa social? s/n', (tarifa) => {

        let qnt_horas = +horas;
        let pagamento = 0; 

        if(qnt_horas <= 2){
    pagamento = 12;
} else if (qnt_horas > 2 && qnt_horas <= 6) {
    pagamento = 12 + (qnt_horas - 2) * 3;
}else{
      pagamento = 30
    }


if (noturno === 's') {
    pagamento = pagamento - 2;
}

 if (ticket === 's') {
    pagamento = pagamento + 35;
}

if (tarifa === 's' && ticket === 's' && pagamento > 25) {
    pagamento = 25
}


console.log("O valor a ser pago é R$", pagamento);

rl.close();

            });
         
        });
    });
});