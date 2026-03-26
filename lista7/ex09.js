const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('valor do pedido ' ,(valor) => {
    rl.question('distacia(km)? ' ,(distancia) => {
      rl.question('esta chovendo? s/n' ,(chuva) => {

        let total = +valor
        let km = +distancia;
        let taxa = 0
        
        if(total >= 80){
if (km <= 3 ) {
    taxa = 5
    total = total+taxa
}else if (km <= 6) {
    taxa = 10
    total = total + taxa;
}else{
    taxa = 15
    total = total + taxa;
}
        }

        if(chuva === 's' && taxa > 0){
            total = total + 3
        }
if(total < 25){
    total = 25
}

console.log("O total a ser pago é R$", total);
console.log("A taxa é R$", taxa);

rl.close();

            });
         
        });
    });