const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let carros = [];
let proximoIdCarro = 1;

let clientes = [];
let proximoIdCliente = 1;

let alugueis = [];
let proximoIdAluguel = 1

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
    console.log("========================")
    console.log("6 - Cadastrar Clientes");
    console.log("7 - Listar Clientes")
    console.log("8 - buscar cliente por id")
    console.log("9 - Atualizar Cliente")
    console.log("10 - Remover Cliente")
    console.log("========================")
    console.log("ALUGUEL")
    console.log("========================")
    console.log("11 - Realizar Aluguel")
    console.log("12 - Devolver Carro")
    console.log("13 - Listar Alugueis Todos")
    console.log("14 - Listar Alugueis Ativos")
    console.log("15 - Listar Alugueis Finalizados")
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
        } else if (opcao === "6") {
            cadastrarCliente();
        } else if (opcao === "7") {
            ListarClientes();
        } else if (opcao === "8") {
            buscarClientePorId();
        } else if (opcao === "9") {
            atualizarCliente();
        } else if (opcao === "10") {
            removerCliente();
        } else if (opcao === "11") {
            realizarAluguel();
        } else if (opcao === "12") {
            devolverCarro();
        } else if (opcao === "13") {
            listarAlugueisTodos();
        } else if (opcao === "14") {
            listarAlugueisAtivos();
        } else if (opcao === "15") {
            listarAlugueisFinalizados();
        } else if (opcao === "0") {
            console.log("saindo")
            rl.close();
        }
    })
}

function listarAlugueisFinalizados() {

    if (alugueis.length === 0) {
        console.log("Nenhum Aluguel cadastrado");
        mostrarMenu();
        return;
    }

    for (let i = 0; i < alugueis.length; i++) {
        if (!alugueis[i].status) {
            console.log("\nID Aluguel: " + alugueis[i].id_aluguel);
            console.log("\nID Cliente: " + alugueis[i].id_cliente);
            console.log("\nID Carro: " + alugueis[i].id_carro);
            console.log("Nome: " + alugueis[i].nome)
            console.log("dias: " + alugueis[i].dias)
            console.log("Total: " + alugueis[i].total)
            console.log("Finalizado")
        }
    }

    mostrarMenu();
}

function listarAlugueisAtivos() {

    if (alugueis.length === 0) {
        console.log("Nenhum Aluguel cadastrado");
        mostrarMenu();
        return;
    }

    for (let i = 0; i < alugueis.length; i++) {
        if (alugueis[i].status) {
            console.log("\nID Aluguel: " + alugueis[i].id_aluguel);
            console.log("\nID Cliente: " + alugueis[i].id_cliente);
            console.log("\nID Carro: " + alugueis[i].id_carro);
            console.log("Nome: " + alugueis[i].nome)
            console.log("dias: " + alugueis[i].dias)
            console.log("Total: " + alugueis[i].total)
            console.log("Ativo")
        }
    }

    mostrarMenu();
}

function listarAlugueisTodos() {

    if (alugueis.length === 0) {
        console.log("Nenhum Aluguel cadastrado");
        mostrarMenu();
        return;
    }

    for (let i = 0; i < alugueis.length; i++) {
        console.log("\nID Aluguel: " + alugueis[i].id_aluguel);
        console.log("\nID Cliente: " + alugueis[i].id_cliente);
        console.log("\nID Carro: " + alugueis[i].id_carro);
        console.log("Nome: " + alugueis[i].nome)
        console.log("dias: " + alugueis[i].dias)
        console.log("Total: " + alugueis[i].total)
        if (alugueis[i].status) {
            console.log("Ativo")
        } else {
            console.log("Finalizado")
        }
    }

    mostrarMenu();
}

function devolverCarro() {

    rl.question("Digite o id do Emprestimo que sera devolvido; ", (id_emprestimo) => {

        id_emprestimo = Number(id_emprestimo)

        let aluguel = buscarAluguelPorId(id_emprestimo)

        if (aluguel === null) {
            console.log("Aluguel nao encontrado")
            mostrarMenu();
            return;
        }

        let carro = encontrarCarroPorId(aluguel.id_carro)

        if (carro === null) {
            console.log("Carro nao encontrado")
            mostrarMenu();
            return;
        }

        aluguel.status = false
        carro.diponivel = true

        console.log("carro devolvido com sucesso")
        mostrarMenu();
    })
}

function buscarAluguelPorId(id) {

    for (let i = 0; i < alugueis.length; i++) {
        if (alugueis[i].id_aluguel === id) {
            return alugueis[i];
        }
    }

    return null;
}

function realizarAluguel() {

    rl.question("Digite o id do Cliente que ira realizar o emprestimo; ", (id_cliente) => {
        rl.question("Digite o id do Carro que sera emprestado; ", (id_carro) => {
            rl.question("Digite o total de dias que sera emprestado; ", (dias) => {

                dias = Number(dias)
                id_cliente = Number(id_cliente)
                id_carro = Number(id_carro)

                let carro = encontrarCarroPorId(id_carro)
                let cliente = encontrarClientePorId(id_cliente)

                if (carro === null || cliente === null) {
                    console.log("carro ou cliente nao encontrado")
                    mostrarMenu();
                    return;
                }

                if (carro.diponivel === false) {
                    console.log("Carro indisponivel")
                    mostrarMenu();
                    return;
                }

                let total = dias * carro.preco_diaria

                carro.diponivel = false

                let aluguel = {
                    id_aluguel: proximoIdAluguel,
                    id_cliente: id_cliente,
                    id_carro: id_carro,
                    dias: dias,
                    total: total,
                    status: true
                }

                alugueis.push(aluguel)
                proximoIdAluguel++
                console.log("Aluguel realizado com sucesso!")
                mostrarMenu();
            })
        })
    })
}

function removerCliente() {

    rl.question("Digite o id do Cliente que quer remover; ", (id) => {

        id = Number(id)

        for (let i = 0; i < clientes.length; i++) {
            if (clientes[i].id === id) {
                clientes.splice(i, 1);
                console.log("cliente removido com sucesso");
                mostrarMenu();
                return;
            }
        }

        console.log("Cliente nao encontrado");
        mostrarMenu();
    })
}

function atualizarCliente() {
    console.log("Atualizar Cliente");

    rl.question("Digite o ID do Cliente: ", (id) => {
        id = Number(id);
        let cliente = encontrarClientePorId(id);

        if (cliente === null) {
            console.log("Cliente não encontrado");
            mostrarMenu();
            return;
        }
        rl.question("Digite um novo nome: ", (novoNome) => {
            rl.question("Digite a novo cpf: ", (novoCpf) => {
                rl.question("Digite o novo telefone: ", (novoTelefone) => {

                    if (novoNome === "" || novoCpf === "" || novoTelefone === "") {
                        console.log("Todos os dados precisam ser preenchidos");
                        mostrarMenu();
                        return;
                    }

                    cliente.nome = novoNome;
                    cliente.cpf = novoCpf;
                    cliente.telefone = novoTelefone;

                    console.log("atualizado com sucesso")
                    mostrarMenu();
                })
            })
        })
    })
}

function buscarClientePorId() {
    console.log("Buscar cliente por id");

    rl.question("Digite o ID do cliente: ", (id) => {
        id = Number(id);

        let cliente = encontrarClientePorId(id);

        if (cliente === null) {
            console.log("Cliente não encontrado");
            mostrarMenu();
            return;
        }

        console.log("\nCliente Encontrado");
        console.log("ID: " + cliente.id);
        console.log("Nome: " + cliente.nome)
        console.log("cpf: " + cliente.cpf)
        console.log("Telefone: " + cliente.telefone)

        mostrarMenu()
    })
}

function encontrarClientePorId(id) {
    for (let i = 0; i < clientes.length; i++) {
        if (clientes[i].id === id) {
            return clientes[i];
        }
    }
    return null;
}

function ListarClientes() {
    console.log("Listar Clientes");

    if (clientes.length === 0) {
        console.log("Nenhum Cliente cadastrado");
        mostrarMenu();
        return;
    }

    for (let i = 0; i < clientes.length; i++) {
        console.log("\nID: " + clientes[i].id);
        console.log("Nome: " + clientes[i].nome)
        console.log("cpf: " + clientes[i].cpf)
        console.log("Telefone: " + clientes[i].telefone)
    }

    mostrarMenu();
}

function removerCarro() {

    rl.question("Digite o id do Carro que quer remover; ", (id) => {

        id = Number(id)

        for (let i = 0; i < carros.length; i++) {
            if (carros[i].id === id) {
                carros.splice(i, 1);
                console.log("Carro removido com sucesso");
                mostrarMenu();
                return;
            }
        }

        console.log("Carro nao encontrado");
        mostrarMenu();
    })
}

function atualizarCarro() {

    console.log("Atualizar Carro");

    rl.question("Digite o ID do Carro: ", (id) => {
        id = Number(id);
        let carro = encontrarCarroPorId(id);

        if (carro === null) {
            console.log("Carro não encontrado");
            mostrarMenu();
            return;
        }
        rl.question("Digite um novo modelo: ", (novoModelo) => {
            rl.question("Digite a nova placa: ", (novaPlaca) => {
                rl.question("Digite o novo ano: ", (novoAno) => {
                    rl.question("Digite o novo preço da diaria: ", (novaDiaria) => {

                        novoAno = Number(novoAno);
                        novaDiaria = Number(novaDiaria);

                        if (novoModelo === "" || novaPlaca === "" || isNaN(novoAno) || isNaN(novaDiaria)) {
                            console.log("ERRO: Não preencheu todas as informaçoes");
                            mostrarMenu();
                            return;
                        }

                        if (novoAno <= 0 || novoAno > 2026) {
                            console.log("ERRO: ano inválido");
                            mostrarMenu();
                            return;
                        }

                        carro.modelo = novoModelo;
                        carro.placa = novaPlaca;
                        carro.ano = novoAno;
                        carro.preco_diaria = novaDiaria;

                        console.log("atualizado com sucesso")
                        mostrarMenu();
                    })
                })
            })
        })
    })
}

function listarCarros() {

    if (carros.length === 0) {
        console.log("Nenhum carro cadastrado");
        mostrarMenu();
        return;
    }

    for (let i = 0; i < carros.length; i++) {
        console.log("\nID: " + carros[i].id);
        console.log("Modelo: " + carros[i].modelo)
        console.log("Ano: " + carros[i].ano)
        console.log("preco_diaria: " + carros[i].preco_diaria)
        console.log("Disponibilidade: " + carros[i].diponivel)
    }

    mostrarMenu();
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
    for (let i = 0; i < carros.length; i++) {
        if (carros[i].id === id) {
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
                    let preco_diaria = Number(diaria)

                    if (modelo === "" || placa === "" || isNaN(ano) || isNaN(preco_diaria)) {
                        console.log("ERRO: Não preencheu todas as informaçoes");
                        mostrarMenu();
                        return;
                    }

                    if (ano <= 0 || ano > 2026) {
                        console.log("ERRO: ano inválido");
                        mostrarMenu();
                        return;
                    }

                    let carro = {
                        id: proximoIdCarro,
                        modelo: modelo,
                        placa: placa,
                        ano: ano,
                        preco_diaria: preco_diaria,
                        diponivel: true
                    };

                    carros.push(carro)
                    proximoIdCarro++
                    console.log("Carro cadastrado com sucesso!")
                    mostrarMenu();
                })
            })
        })
    })
}

function cadastrarCliente() {

    console.log("Cadastrar Cliente");

    rl.question("Digite o nome do Cliente: ", (nome) => {
        rl.question("Digite o cpf do cliente: ", (cpf) => {
            rl.question("Digite o telefone do cliente: ", (telefone) => {

                if (nome === "" || cpf === "" || telefone === "") {
                    console.log("ERRO: Não preencheu todas as infos");
                    mostrarMenu();
                    return;
                }

                let cliente = {
                    id: proximoIdCliente,
                    nome: nome,
                    cpf: cpf,
                    telefone: telefone
                };

                clientes.push(cliente);
                proximoIdCliente++;

                console.log("Cliente Cadastrado com sucesso")
                mostrarMenu();
            })
        })
    })
}

mostrarMenu();