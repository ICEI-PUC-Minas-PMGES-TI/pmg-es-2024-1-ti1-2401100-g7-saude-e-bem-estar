// Função para recuperar os dados armazenados no localStorage
const getStoredData = () => {
    const storedData = localStorage.getItem('dadosFormulario');
    return storedData ? JSON.parse(storedData) : []; // Retorna um array vazio se não houver dados
};

// Função para exibir os dados na tabela
const displayData = () => {
    const storedData = getStoredData(); // Recupera os dados armazenados

    // Verifica se os dados recuperados são um array
    if (!Array.isArray(storedData)) {
        console.error('Os dados armazenados não são um array:', storedData);
        return;
    }

    const dataTable = document.getElementById('data-table');
    dataTable.innerHTML = ''; // Limpa os dados antigos

    storedData.forEach((data, index) => {
        const row = dataTable.insertRow();
        const perguntaCell = row.insertCell(0);
        const respostaCell = row.insertCell(1);
        const actionsCell = row.insertCell(2);

        perguntaCell.textContent = Object.keys(data)[0];
        respostaCell.textContent = data[Object.keys(data)[0]];

        const editButton = document.createElement('button');
        editButton.textContent = 'Editar';
        editButton.classList.add('btn', 'btn-primary', 'btn-sm', 'mr-2');
        editButton.onclick = () => fillFormForEdit(index);
        actionsCell.appendChild(editButton);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Excluir';
        deleteButton.classList.add('btn', 'btn-danger', 'btn-sm');
        deleteButton.onclick = () => deleteEntry(index);
        actionsCell.appendChild(deleteButton);
    });
};

// Função para limpar o formulário
const resetForm = () => {
    document.getElementById('dataForm').reset();
};

// Função para armazenar os dados do formulário no localStorage
const armazenaDadosPac = () => {
    // Obter valores dos campos do formulário
    const historicoFamiliar = document.getElementById('historico_familiar').value;
    const outraDoenca = document.getElementById('outra_doenca').value;
    const condicaoAtual = document.getElementById('condicao_atual').value;
    const outraCondicao = document.getElementById('outra_condicao').value;
    const doencaPassada = document.getElementById('doenca_passada').value;
    const outraDoencaPassada = document.getElementById('outra_doenca_passada').value;
    const historicoAlergias = document.getElementById('historico_alergias').value;
    const medicamentosAtuais = document.getElementById('medicamentos_atuais').value;
    const habitos = document.querySelector('input[name="habitos"]:checked') ? document.querySelector('input[name="habitos"]:checked').value : '';
    const atividadeFisica = document.querySelector('input[name="atividade_fisica"]:checked') ? document.querySelector('input[name="atividade_fisica"]:checked').value : '';
    const restricaoAlimentar = document.getElementById('restricao_alimentar').value;
    const preocupacoes = document.getElementById('preocupacoes').value;
    const dataNascimento = document.getElementById('data_nascimento').value;

    // Verifica se a data de nascimento está no formato yyyy-MM-dd
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(dataNascimento)) {
        alert('O formato da data de nascimento deve ser "yyyy-MM-dd"');
        return;
    }

    // Criar um objeto com os valores
    const novoDado = {
        historicoFamiliar,
        outraDoenca,
        condicaoAtual,
        outraCondicao,
        doencaPassada,
        outraDoencaPassada,
        historicoAlergias,
        medicamentosAtuais,
        habitos,
        atividadeFisica,
        restricaoAlimentar,
        preocupacoes,
        dataNascimento
    };

    // Recupera os dados armazenados anteriormente
    let storedData = getStoredData();

    // Adiciona o novo dado ao array
    storedData.push(novoDado);

    // Atualiza os dados armazenados no localStorage
    localStorage.setItem('dadosFormulario', JSON.stringify(storedData));

    // Exibe os dados na tabela
    displayData();

    // Exibe uma mensagem de sucesso para o usuário
    alert('Seus dados foram cadastrados com sucesso!');

    // Limpa o formulário após o cadastro
    resetForm();
};

// Chamada da função displayData após o carregamento inicial da página
document.addEventListener('DOMContentLoaded', () => {
    displayData();
});

// Função para preencher o formulário com os dados a serem editados
const fillFormForEdit = (index) => {
    const storedData = getStoredData();
    const dataToEdit = storedData[index];

    // Preenche os campos do formulário com os dados selecionados para edição
    document.getElementById('historico_familiar').value = dataToEdit.historicoFamiliar;
    document.getElementById('outra_doenca').value = dataToEdit.outraDoenca;
    document.getElementById('condicao_atual').value = dataToEdit.condicaoAtual;
    document.getElementById('outra_condicao').value = dataToEdit.outraCondicao;
    document.getElementById('doenca_passada').value = dataToEdit.doencaPassada;
    document.getElementById('outra_doenca_passada').value = dataToEdit.outraDoencaPassada;
    document.getElementById('historico_alergias').value = dataToEdit.historicoAlergias;
    document.getElementById('medicamentos_atuais').value = dataToEdit.medicamentosAtuais;
    if (dataToEdit.habitos) {
        document.querySelector(`input[name="habitos"][value="${dataToEdit.habitos}"]`).checked = true;
    }
    if (dataToEdit.atividadeFisica) {
        document.querySelector(`input[name="atividade_fisica"][value="${dataToEdit.atividadeFisica}"]`).checked = true;
    }
    document.getElementById('restricao_alimentar').value = dataToEdit.restricaoAlimentar;
    document.getElementById('preocupacoes').value = dataToEdit.preocupacoes;
    document.getElementById('data_nascimento').value = dataToEdit.dataNascimento;

    // Remover o item do array para edição
    storedData.splice(index, 1);

    // Atualiza os dados armazenados no localStorage
    localStorage.setItem('dadosFormulario', JSON.stringify(storedData));

    // Exibe os dados atualizados na tabela
    displayData();
};

// Função para excluir uma entrada de dados
const deleteEntry = (index) => {
    const confirmation = confirm('Tem certeza de que deseja excluir esta entrada?');
    if (confirmation) {
        const storedData = getStoredData();

        // Remove a entrada correspondente ao índice fornecido
        storedData.splice(index, 1);

        // Atualiza os dados armazenados no localStorage
        localStorage.setItem('dadosFormulario', JSON.stringify(storedData));

        // Exibe os dados atualizados na tabela
        displayData();
    }
};

// Função para exibir o campo 'Outro' quando selecionado no menu suspenso
const mostrarCampoOutro = (selectElement, outroCampoId) => {
    const selectedOption = selectElement.value;
    const outroCampo = document.getElementById(outroCampoId);

    if (selectedOption === 'outra') {
        outroCampo.style.display = 'block';
    } else {
        outroCampo.style.display = 'none';
    }
};
