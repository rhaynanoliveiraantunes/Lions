const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('preço do produto 1? ', (preco_produto1) => {
    rl.question('preço do produto 2? ', (preco_produto2) => {
        rl.question('preço do produto 3? ', (preco_produto3) => {
            rl.question('Cupom: ', (cupom) => {
                rl.question('Pagamento no PIX? ', (pix) => {

                    let piso = true;
                    let preco1 = +preco_produto1;
                    let preco2 = +preco_produto2;
                    let preco3 = +preco_produto3;

                    let total = preco1 + preco2 + preco3;
                    let pagamento = total;

                    if (total >= 200 && cupom === 'DESC20') {
                        pagamento = total * 0.8;
                    } else if (total >= 80 && cupom === 'DESC10') {
                        pagamento = total * 0.9;
                    } else if (pix === 's') {
                        pagamento = total * 0.95;
                    }

                    if (pagamento < total * 0.8) {
                        pagamento = total * 0.8;
                    }

                    if (preco1 < 50 || preco2 < 50 || preco3 < 50) {
                        if (pagamento < 50) {
                            pagamento = 50;
                            piso = false;
                        }
                    }

                    let desconto = total - pagamento;

                    console.log("O valor do desconto é R$", desconto);
                    console.log("O valor a ser pago é R$", pagamento);

                    if (piso === false) {
                        console.log("O piso foi aplicado");
                    } else {
                        console.log("O piso não foi aplicado");
                    }

                    rl.close();

                });
            });
        });
    });
});