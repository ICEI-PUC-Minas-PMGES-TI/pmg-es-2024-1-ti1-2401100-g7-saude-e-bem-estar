// Função para recuperar os dados armazenados no localStorage
const getStoredData = () => {
    const storedData = localStorage.getItem('dadosFormulario');
    return storedData ? JSON.parse(storedData) : [];
};

// Função para exibir os dados na tabela
const displayData = () => {
    const storedData = getStoredData();

    if (!Array.isArray(storedData)) {
        console.error('Os dados armazenados não são um array:', storedData);
        return;
    }

    const dataTable = document.getElementById('data-table');
    dataTable.innerHTML = '';

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

    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(dataNascimento)) {
        alert('O formato da data de nascimento deve ser "yyyy-MM-dd"');
        return;
    }

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

    let storedData = getStoredData();
    storedData.push(novoDado);
    localStorage.setItem('dadosFormulario', JSON.stringify(storedData));
    displayData();
    alert('Seus dados foram cadastrados com sucesso!');
    resetForm();
};

document.addEventListener('DOMContentLoaded', () => {
    displayData();
});

const fillFormForEdit = (index) => {
    const storedData = getStoredData();
    const dataToEdit = storedData[index];

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

    storedData.splice(index, 1);
    localStorage.setItem('dadosFormulario', JSON.stringify(storedData));
    displayData();
};

const deleteEntry = (index) => {
    const confirmation = confirm('Tem certeza de que deseja excluir esta entrada?');
    if (confirmation) {
        const storedData = getStoredData();
        storedData.splice(index, 1);
        localStorage.setItem('dadosFormulario', JSON.stringify(storedData));
        displayData();
    }
};

const mostrarCampoOutro = (selectElement, outroCampoId) => {
    const selectedOption = selectElement.value;
    const outroCampo = document.getElementById(outroCampoId);

    if (selectedOption === 'outra') {
        outroCampo.style.display = 'block';
    } else {
        outroCampo.style.display = 'none';
    }
};

const displayPatientProfile = () => {
    const storedData = getStoredData();

    if (storedData.length === 0) {
        alert('Você ainda não cadastrou suas informações.');
        return;
    }

    const latestPatientData = storedData[storedData.length - 1];

    document.getElementById('nome').textContent = latestPatientData.nome;
    document.getElementById('data-nascimento').textContent = latestPatientData.dataNascimento;
    document.getElementById('doencas-cronicas').textContent = latestPatientData.historicoFamiliar;
    document.getElementById('medicamentos').textContent = latestPatientData.medicamentos_atuais;
    document.getElementById('alergias').textContent = latestPatientData.historico_alergias;
    document.getElementById('habitos-exercicio').textContent = latestPatientData.atividade_fisica;
    document.getElementById('consumo-alcool').textContent = latestPatientData.habitos;
    document.getElementById('consumo-tabaco').textContent = '';
};

document.addEventListener('DOMContentLoaded', () => {
    displayPatientProfile();
});
