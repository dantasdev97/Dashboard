function abrirModal() {
    const modal = document.getElementById('janela-modal');
    modal.style.display = 'flex';
}

function fecharModal() {
    const modal = document.getElementById('janela-modal');
    modal.style.display = 'none';
}

function adicionarLinhaTabela(descricao, preco, categoria) {
    const tabela = document.getElementById('tabelaTransacoesBody');
    const novaLinha = tabela.insertRow();

    // Células da linha
    const celulaDescricao = novaLinha.insertCell(0);
    const celulaPreco = novaLinha.insertCell(1);
    const celulaCategoria = novaLinha.insertCell(2);
    const celulaEditar = novaLinha.insertCell(3);
    const celulaExcluir = novaLinha.insertCell(4);

    // Preencher as células com os dados do formulário
    celulaDescricao.innerHTML = descricao;
    celulaPreco.innerHTML = preco.toFixed(2); // Formatando para 2 casas decimais
    celulaCategoria.innerHTML = categoria;
    celulaEditar.innerHTML = '<button onclick="editarLinha(this)">Editar</button>';
    celulaExcluir.innerHTML = '<button onclick="excluirLinha(this)">Excluir</button>';
}

function editarLinha(botao) {
    // Adicione a lógica para editar a linha aqui
    console.log('Editar linha');
}

function excluirLinha(botao) {
    const linha = botao.parentNode.parentNode;
    linha.parentNode.removeChild(linha);

    // Após excluir a linha, atualize os valores
    atualizarValores();
}

function cadastrarTransacao() {
    const descricao = document.getElementById('descricao').value;
    const preco = parseFloat(document.getElementById('preco').value);
    const categoria = document.getElementById('categoria').value;

    // Validar se os campos estão preenchidos
    if (!descricao || isNaN(preco) || preco <= 0 || !categoria) {
        alert('Por favor, preencha todos os campos corretamente.');
        return;
    }

    // Adicionar a transação à tabela
    adicionarLinhaTabela(descricao, preco, categoria);

    // Atualizar os valores nas divs
    atualizarValores();

    // Limpar o formulário
    document.getElementById('formularioTransacao').reset();

    // Fechar o modal
    fecharModal();
}


let tipoTransacaoSelecionado = 'saida';

function cadastrarTransacao() {
    const descricao = document.getElementById('descricao').value;
    const preco = parseFloat(document.getElementById('preco').value);
    const categoria = document.getElementById('categoria').value;

    // Validar se os campos estão preenchidos
    if (!descricao || isNaN(preco) || preco === 0 || !categoria) {
        alert('Por favor, preencha todos os campos corretamente.');
        return;
    }

    // Adicionar a transação à tabela
    if (tipoTransacaoSelecionado === 'entrada') {
        adicionarLinhaTabela(descricao, preco, categoria);
    } else {
        adicionarLinhaTabela(descricao, -preco, categoria); // Valor negativo para saídas
    }

    // Atualizar os valores nas divs
    atualizarValores();

    // Limpar o formulário
    document.getElementById('formularioTransacao').reset();

    // Fechar o modal
    fecharModal();
}


function selecionarTipo(tipo) {
    tipoTransacaoSelecionado = tipo;

    const icc = document.getElementById('icc');
    if (tipo === 'entrada') {
        icc.className = 'bx bx-up-arrow-circle icon';
    } else {
        icc.className = 'bx bx-down-arrow-circle icon';
    }
}


function atualizarValores() {
    const valores = calcularValores();

    document.getElementById('totalRecebidos').textContent = valores.totalRecebidos.toFixed(2);
    document.getElementById('totalSaidas').textContent = valores.totalSaidas.toFixed(2);
    document.getElementById('saldoTotal').textContent = valores.saldoTotal.toFixed(2);
}

function calcularValores() {
    const linhas = document.querySelectorAll('#tabelaTransacoesBody tr');
    let totalRecebidos = 0;
    let totalSaidas = 0;

    linhas.forEach((linha) => {
        const preco = parseFloat(linha.cells[1].textContent);
        if (preco > 0) {
            totalRecebidos += preco;
        } else {
            totalSaidas += Math.abs(preco);
        }
    });

    const saldoTotal = totalRecebidos - totalSaidas;

    return {
        totalRecebidos,
        totalSaidas,
        saldoTotal,
    };
}


