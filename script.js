const listaCarros = [];

function mostrarCarros(lista) {
    const quantidadeCarros = document.getElementById("quantidadeCarros");
    quantidadeCarros.textContent = lista.length;

    lista.forEach(carro => {
        console.log(`ID: ${carro.id}, 
        Modelo: ${carro.modelo}, 
        Marca: ${carro.marca}, 
        Ano: ${carro.ano}, 
        Cor: ${carro.cor}, 
        Preço: R$ ${carro.preco.toFixed(2)}`);
    });
}

function adicionarCarro(lista) {
    const novoCarro = {};

    if (lista.length === 0) {
        novoCarro.id = 1;
    } else {
        const ultimoID = lista[lista.length - 1].id;
        novoCarro.id = ultimoID + 1;
    }

    novoCarro.modelo = prompt("Digite o modelo do carro:");
    novoCarro.marca = prompt("Digite a marca do carro:");
    novoCarro.ano = parseInt(prompt("Digite o ano do carro:"));
    novoCarro.cor = prompt("Digite a cor do carro:");
    novoCarro.preco = parseFloat(prompt("Digite o preço do carro:"));

    lista.push(novoCarro);
    console.log("Carro adicionado com sucesso!");
    mostrarCarros(lista);
}

function removerCarro(lista, id) {
    const index = lista.findIndex(carro => carro.id === id);

    if (index !== -1) {
        lista.splice(index, 1);
        console.log(`Carro com ID ${id} removido com sucesso!`);
        mostrarCarros(lista);
    } else {
        console.log(`Carro com ID ${id} não encontrado.`);
    }
}

function atualizarCarro(lista, id) {
    const carro = lista.find(carro => carro.id === id);

    if (carro) {
        const novaCor = prompt("Digite a nova cor:");
        const novoPreco = parseFloat(prompt("Digite o novo preço:"));

        carro.cor = novaCor;
        carro.preco = novoPreco;

        console.log(`Valores do carro com ID ${id} atualizados com sucesso!`);
        mostrarCarros(lista);
    } else {
        console.log(`Carro com ID ${id} não encontrado.`);
    }
}

function sairDoSistema() {
    console.log("Saindo do sistema. Até mais!");
}

document.getElementById("adicionarVeiculoBtn").addEventListener("click", function() {
    adicionarCarro(listaCarros);
});

document.getElementById("removerVeiculoBtn").addEventListener("click", function() {
    const idVeiculoRemover = parseInt(prompt("Digite o ID do veículo que deseja remover:"));
    removerCarro(listaCarros, idVeiculoRemover);
});

document.getElementById("atualizarVeiculoBtn").addEventListener("click", function() {
    const idVeiculoAtualizar = parseInt(prompt("Digite o ID do veículo que deseja atualizar:"));
    atualizarCarro(listaCarros, idVeiculoAtualizar);
});

document.getElementById("sairBtn").addEventListener("click", function() {
    sairDoSistema();
});
