const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('total da compra ' ,(compra) => {
    rl.question('é cliente vip s/n? ' ,(vip) => {
      rl.question('pagamento?' ,(pagamento) => {


        let total = +compra
        let porc_desc = 0;

if (total >= 300) {
    total = total*0.88
    porc_desc =+ 12;
}else if (total >= 150) {
    total = total*0.94
    porc_desc =+ 6
}

if (vip === 's' && porc_desc <= 10) {
    total = total*0.95
    porc_desc =+ 5
}
if(pagamento === 'pix'){
    total = total*0.98
    porc_desc =+ 2
}

console.log("O total final deu R$", total);

if(total >= 200 && pagemento === 'cartão'){
    console.log("10 real de cashback")
}else{
    console.log("sem cashback")
}
rl.close();

            });
         
        });
    });