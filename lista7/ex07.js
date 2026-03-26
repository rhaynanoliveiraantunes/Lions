const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function bloqueio(tarifa, feriado, remarcacao) {
    if (tarifa === 'light' && feriado === 's' && remarcacao === 's') {
        console.log("nao disponivel");
        process.exit();
    }
}

rl.question('tarifa ', (tarifa) => {
    rl.question('feriado s/n? ', (feriado) => {
        rl.question('bagagem? s/n ', (bagagem) => {
            rl.question('remarcaçao? s/n ', (remarcacao) => {

                let total = 0;

                bloqueio(tarifa, feriado, remarcacao);

                if (tarifa === 'light') {
                    total = 350;
                } else if (tarifa === 'flex') {
                    total = 480;
                } else {
                    total = 700;
                }

                if (feriado === 's') {
                    total = total * 1.15;
                }

                if (bagagem === 's') {
                    total = total + 120;
                }

                if ((tarifa === 'premium' || tarifa === 'flex') && remarcacao === 's') {
                    console.log("A remarcação é gratuita para as tarifas premium e flex");
                } else if (remarcacao === 's' && tarifa === 'light') {
                    total = total + 130;
                }

                console.log("O valor a ser pago é R$", total);

                rl.close();
            });
        });
    });
});
