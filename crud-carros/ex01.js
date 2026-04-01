const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let carros = [];
let proximoIdCarro = 1;

let clientes = [];
let proximoIdCliente = 1;

function mostrarMenu() {

    console.log("==========================")
    console.log("Carros");
    console.log("========================");
    console.log("1 - Cadastrar Carro");
    console.log("2 - Listar Carros ");
    console.log("3 - Buscar Carro por Id");
    console.log("4 - Atualizar Carro");
    console.log("5 - Remover Carro");
    console.log("=======================");
    console.log("Clientes")
    console.log("6 - Cadastrar Clientes");
    console.log("7 - Listar Clientes")
    console.log("8 - buscar cliente por id")
    console.log("9 - Atualizar Cliente")
    console.log("10 - Remover Cliente")
    console.log("0 - Sair");


    rl.question("Escolha uma opção: ", (opcao) => {
        if (opcao === "1") {
            cadastrarCarro();
        } else if (opcao === "2") {
            listarCarros();
        } else if (opcao === "3") {
            buscarCarroPorId();
        } else if (opcao === "4") {
            atualizarCarro();
        } else if (opcao === "5") {
             removerCarro();
        } else if ( opcao === "6") {
            cadastrarCliente();
        }else if ( opcao === "7") {
            ListarClientes();
        } else if(opcao === "8"){
            buscarClientePorId();
        }else if(opcao === "9"){
            atualizarCliente();
        }else if(opcao === "10"){
            removerCliente();
        }else if(opcao === "0"){
            console.log("saindo")
            rl.close();
        }

    })

}


function removerCliente(){

    rl.question("Digite o id do Cliente que quer remover; ", (id) => {
    
        id = number(id)
    
        for( let i = 0; i < clientes.length; i++){
    
          if(clientes[i].id === id) {
            clientes.splice(i,1);
            console.log("cliente removido com sucesso");
            mostrarMenu();
            return;
          }
    
        }
    })
    
    
    }



function atualizarCliente() {
    console.log(" Cliente Aluno");

    rl.question("Digite o ID do Cliente: ", (id) => {
        id = Number(id);
        let cliente = encontrarClientePorId(id);

        if(cliente === null){
            console.log("Cliente não encontrado");
            mostrarMenu();
            return;
        } 
        rl.question("Digite um novo nome: ", (novoNome) => {
            rl.question("Digite a novo cpf: ", (novocpf) => {
                rl.question("Digite o novo telefone: ", (novaTelefone) => {


                        if(novoNome === "" || novocpf === "" || novaTelefone === ""){
                            console.log("Todos os dados precisam ser preenchidos");
                            mostrarMenu();
                            return;
                        }

                        aluno.nome = novaNome;
                        aluno.cpf = novocpf;
                        aluno.telefone = novaTelefone;

                        console.log("atualizado com sucesso")
                        mostrarMenu();

                        
                
                })
            })
        })
    })


}

function buscarClientePorId() {
    console.log("Buscar aluno por id");

    rl.question("Digite o ID do aluno: ", (id) => {
        id = Number(id);

        let Cliente = encontrarClientePorId(id);

        if (aluno === null) {
            console.log("Cliente não encontrado");
            mostrarMenu();
            return;
        }

        console.log("\nCliente Encontrado");
        console.log("ID: " + clientes.id);
        console.log("Nome: " + clientes.nome)
        console.log("cpf: " + clientes.cpf)
        console.log("Telefone: " + clientes.telefone)

        mostrarMenu()
    })
}

function encontrarClientePorId(id) {
    for(let i = 0; i < clientes.length; i++) {
        if (clientes[i].id === id) {
            return clientes[i];
        }
    }

    return null;
}


function ListarClientes(){
    console.log("Listar Clientes");

    if (alunos.length === 0) {
        console.log("Nenhum Cliente cadastrado");
        mostrarMenu();
        return;
    }

    for(let i = 0; i < alunos.length; i++) {
        console.log("\nID: " + clientes[i].id);
        console.log("Nome: " + clientes[i].nome)
        console.log("cpf: " + clientes[i].cpf)
        console.log("Telefone: " + alunos[i].telefone)
    }

    mostrarMenu();

}

function removerCarro(){

    rl.question("Digite o id do Carro que quer remover; ", (id) => {

        id = number(id)
    
        for( let i = 0; i < alunos.length; i++){
    
          if(carros[i].id === id) {
            carros.splice(i,1);
            console.log("Carro removido com sucesso");
            mostrarMenu();
            return;
          }
    
        }

    })



}

function atualizarCarro(){

    console.log(" Atualizar Carro");

    rl.question("Digite o ID do Carro: ", (id) => {
        id = Number(id);
        let carro = encontrarCarroPorId(id);

        if(carro === null){
            console.log("Carro não encontrado");
            mostrarMenu();
            return;
        } 
        rl.question("Digite um novo modelo: ", (novoModelo) => {
            rl.question("Digite a nova placa: ", (novaPlaca) => {
                rl.question("Digite o novo ano: ", (novoAno) => {
                    rl.question("Digite o novo preço da diaria: ", (novaDiaria) => {

                        novoModelo = Number(novoModelo);
                        novoAno = Number(novoAno);
                        novaDiaria = Number(novaDiaria);

                        if(id === "" || modelo === "" || placa === "" || ano === "" || diaria === "") {
                            console.log("ERRO: Não preencheu todas as informaçoes");
                            mostrarMenu();
                            return;
                        }
         
                        if (ano <= 0 || ano > 2026 ) {
                            console.log("ERRO: ano inválido");
                            mostrarMenu();
                            return;
                        }

                        carro.modelo = novoModelo;
                        carro.placa = novaPlaca;
                        carro.Ano = novaAno;
                        carros.diaria = novaDiaria;

                        console.log("atualizado com sucesso")
                        mostrarMenu();

                        
                    })
                })
            })
        })
    })
}




function listarCarros(){

    if (carros.length === 0) {
        console.log("Nenhum carro cadastrado");
        mostrarMenu();
        return;
    }

  for(i = 0; i<carros.length;i--){

    console.log("\nID: " + carros[i].id);
    console.log("Nome: " + carros[i].modelo)
    console.log("Ano: " + carros[i].ano)
    console.log("preco_diaria: " + carros[i].preco_diaria)
    console.log("Disponibilidade: " + alunos[i].disponivel)
       
  }

}

function buscarCarroPorId() {
    console.log("Buscar Carro por id");

    rl.question("Digite o ID do Carro: ", (id) => {
        id = Number(id);

        let carro = encontrarCarroPorId(id);

        if (carro === null) {
            console.log("carro não encontrado");
            mostrarMenu();
            return;
        }

        console.log("\nCarro Encontrado");
        console.log("ID: " + carro.id);
        console.log("Modelo: " + carro.modelo)
        console.log("placa: " + carro.placa)
        console.log("ano: " + carro.ano)
        console.log("preço da diaria: " + carro.preco_diaria)
        console.log("disponivel: " + carro.diponivel)

        mostrarMenu()
    })
}

function encontrarCarroPorId(id) {
    for(let i = 0; i < carros.length; i++) {
        if (Carros[i].id === id) {
            return carros[i];
        }
    }

    return null;
}


function cadastrarCarro() {

        rl.question("Digite o Modelo do carro que voce quer cadastrar; ", (modelo) => {
            rl.question("Digite a placa do carro que voce quer cadastrar; ", (placa) => {
                rl.question("Digite o Ano do carro que voce quer cadastrar; ", (ano) => {
                    rl.question("Digite o preço da diaria do carro que voce quer cadastrar; ", (diaria) => {

                  ano = Number(ano)
                  preco_diaria = Number(diaria)

                  if(id === "" || modelo === "" || placa === "" || ano === "" || diaria === "") {
                    console.log("ERRO: Não preencheu todas as informaçoes");
                    mostrarMenu();
                    return;
                }
 
                if (ano <= 0 || ano > 2026 || nota > 10) {
                    console.log("ERRO: Idade ou nota inválida");
                    mostrarMenu();
                    return;
                }

                let carro = {
                    id: proximoIdCarro,
                    modelo: modelo,
                    ano: ano,
                    preco_diaria: preco_diaria,
                    diponivel: true
                };

                carros.push(carro)
                proximoIdCarro++

                    
                })
            })
        })
    })

}

function cadastrarCliente() {

        console.log("Cadastrar Cliente");
    
        rl.question("Digite o nome do Cliente: ", (cliente) => {
            rl.question("Digite o cpf do cliente: ", (cpf) => {
                rl.question("Digite o telefone do cliente: ", (telefone) => {

                      
                        if(nome === "" || cpf === "" || telefone === "" ) {
                            console.log("ERRO: Não preencheu todas as infos");
                            mostrarMenu();
                            return;
                        }
    
                       
                        let cliente = {
                            id: proximoIdCliente,
                            nome: nome,
                            cpf: cpf

                        };
    
                        clientes.push(cliente);
                        proximoIdCliente++;
    
                        console.log("Cliente Cadastrado com sucesso")
                        mostrarMenu(); 
                
                } )
            })
        })
    }
    