const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('quantos amburgueres? ', (hamburguer) => {
    rl.question('quantos refri? ', (refri) => {
        rl.question('quantidade de batatas? ', (batatas) => {
            rl.question('usar cupom COMBO: ', (cupom) => {
                

                    let qnt_batatas = +batatas;
                    let qnt_refri = +refri;
                    let qnt_hamburgues = +hamburguer;
                    let preco_hamburguers = qnt_hamburgues * 12;
                    let preco_refri = qnt_refri * 6;
                    let preco_batatas = qnt_batatas * 8;

                    let total = preco_hamburguers + preco_refri + preco_batatas;
                    let pagamento = total;

                    let desconto_hamb_refri = false;
                    let desconto_hamb_bat = false;
                    let desconto_extra = false;
                    let desconto_combo = false;

                    if (qnt_hamburgues>=1 && qnt_refri>=1) {
                        pagamento = pagamento -2;
                        desconto_hamb_refri = true
                    }
                     if (qnt_hamburgues>=1 && qnt_batatas>=1) {
                        pagamento = pagamento - 2;
                        desconto_hamb_bat = true
                    }

                     if (qnt_hamburgues >= 2 && qnt_refri >= 2) {
                        pagamento = pagamento - 3;
                        desconto_extra = true
                    }

                    if (cupom === 'COMBO' && qnt_batatas >= 2) {
                        pagamento = pagamento * 0.9;
                        desconto_combo = true
                    }
                  
                    if(pagamento < total * 0.8){
                        pagamento = total * 0.8;
                    }

                    let desconto = total - pagamento;

                    console.log("O valor do desconto é R$", desconto);
                    console.log("O valor a ser pago é R$", pagamento);

                    if (desconto_hamb_refri === true) {
                        console.log("O desconto de hambúrguer + refri foi aplicado");
                    } else {
                        console.log("O desconto de hambúrguer + refri não foi aplicado");
                    }
                    if (desconto_hamb_bat === true) {
                        console.log("O desconto de hambúrguer + batatas foi aplicado");
                    } else {
                        console.log("O desconto de hambúrguer + batatas não foi aplicado");
                    }
                    if (desconto_extra === true) {
                        console.log("O desconto extra foi aplicado");
                    } else {
                        console.log("O desconto extra não foi aplicado");
                    }
                    if (desconto_combo === true) {
                        console.log("O desconto do combo foi aplicado");
                    } else {
                        console.log("O desconto do combo não foi aplicado");
                    }


                    rl.close();

                });
            });
        });
    });