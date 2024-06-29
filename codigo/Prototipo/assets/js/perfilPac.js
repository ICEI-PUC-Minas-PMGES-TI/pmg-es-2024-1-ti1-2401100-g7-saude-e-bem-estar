document.addEventListener('DOMContentLoaded', () => {
    displayData();
    fillProfile();
});

// Função para preencher o perfil do paciente
const fillProfile = () => {
    const storedData = getStoredData(); // Recupera os dados armazenados

    if (Array.isArray(storedData) && storedData.length > 0) {
        const latestData = storedData[storedData.length - 1]; // Pega o último conjunto de dados

        // Preenche as informações pessoais
        document.getElementById('nome').textContent = latestData.nome;
        document.getElementById('data-nascimento').textContent = latestData.dataNascimento;

        // Preenche o histórico médico
        document.getElementById('doencas-cronicas').textContent = latestData.doenca_cardiaca ? 'Sim' : 'Não';
        document.getElementById('medicamentos').textContent = latestData.medicamentos || 'Nenhum';
        document.getElementById('alergias').textContent = latestData.alergias || 'Nenhuma';

        // Preenche o estilo de vida
        document.getElementById('habitos-exercicio').textContent = latestData.habitos_exercicio || 'Nenhum';
        document.getElementById('consumo-alcool').textContent = latestData.consumo_alcool ? 'Sim' : 'Não';
        document.getElementById('consumo-tabaco').textContent = latestData.consumo_tabaco ? 'Sim' : 'Não';
    }
};