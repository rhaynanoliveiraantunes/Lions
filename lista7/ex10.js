const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('quantos kilos de banana? ', (preco_ban) => {
    rl.question('quantos quilos de maça? ', (preco_ma) => {
        rl.question('quantos kilos de laranja? ', (preco_lara) => {
                rl.question('Pagamento no dinheiro? ', (dinheiro) => {
                    
                    let kilo_laranja = +preco_lara
                    let kilo_maca = +preco_ma
                    let kilo_banana = +preco_ban
                    let preco_banana = kilo_banana * 4;
                    let preco_maca = kilo_maca * 6;
                    let preco_laranja = kilo_laranja * 5;
                    let total_kilos = kilo_banana + kilo_maca + kilo_laranja;

                    let total =preco_banana  + preco_maca + preco_laranja;
                    let pagamento = total;

                    if(total_kilos > 10){
                        pagamento = total * 0.88
                    }else(total_kilos > 5){
                        pagamento = total * 0.95
                    }
                
                    if(dinheiro === 's') {
                        pagamento = pagamento - 2;
                    }
                    
                     if(pagamento >= 45){
                        console.log("ganhou brinde");
                     }

                     if(preco_banana >= 20 || preco_maca >= 20 || preco_laranja >= 20){
                        
                     }
                    rl.close();

                });
            });
        });
    });