function mostrarCampoOutro(selectElement, targetId) {
    var outroOption = selectElement.options[selectElement.selectedIndex].value;
    var targetInput = document.getElementById(targetId);
    if (outroOption === 'outra') {
        targetInput.style.display = 'block';
        targetInput.setAttribute('required', 'true');
    } else {
        targetInput.style.display = 'none';
        targetInput.removeAttribute('required');
        targetInput.value = '';
    }
}

document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Obtenção dos dados do formulário
    const paciente = {
        nome: document.getElementById('nome').value,
        telefone: document.getElementById('telefone').value,
        email: document.getElementById('email').value,
        senha: document.getElementById('senha').value,
        data_nascimento: document.getElementById('data_nascimento').value,
        historico_familiar: document.getElementById('historico_familiar').value,
        condicao_atual: document.getElementById('condicao_atual').value,
        doenca_passada: document.getElementById('doenca_passada').value,
        historico_alergias: document.getElementById('historico_alergias').value,
        medicamentos_atuais: document.getElementById('medicamentos_atuais').value,
        habitos_exercicio: document.querySelector('input[name="habitos_exercicio"]:checked').value,
        consumo_alcool: document.querySelector('input[name="consumo_alcool"]:checked').value,
        consumo_tabaco: document.querySelector('input[name="consumo_tabaco"]:checked').value
    };

    // Salvando os dados no localStorage
    localStorage.setItem('paciente', JSON.stringify(paciente));

    alert('Cadastro realizado com sucesso!');
    window.location.href = 'Login_Pac.html'; // Redireciona para a página de login após o cadastro
});
