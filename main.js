function adicionarContato() {
    // Obter os valores do formulário
    var nome = document.getElementById('nome').value;
    var telefone = document.getElementById('telefone').value;

    // Validar se ambos os campos foram preenchidos
    if (nome === '' || telefone === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Adicionar uma nova linha à tabela
    var tabela = document.getElementById('contatos');
    var novaLinha = tabela.insertRow(tabela.rows.length);
    var colunaNome = novaLinha.insertCell(0);
    var colunaTelefone = novaLinha.insertCell(1);

    // Preencher as colunas com os valores do formulário
    colunaNome.innerHTML = nome;
    colunaTelefone.innerHTML = telefone;

    // Limpar os campos do formulário
    document.getElementById('nome').value = '';
    document.getElementById('telefone').value = '';
}