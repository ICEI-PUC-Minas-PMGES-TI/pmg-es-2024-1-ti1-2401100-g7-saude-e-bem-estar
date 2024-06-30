document.addEventListener('DOMContentLoaded', function() {
    const paciente = JSON.parse(localStorage.getItem('paciente'));

    if (paciente) {
        document.getElementById('nome').value = paciente.nome;
        document.getElementById('telefone').value = paciente.telefone;
        document.getElementById('email').value = paciente.email;
        document.getElementById('data-nascimento').value = paciente.data_nascimento;
        document.getElementById('historico-familiar').value = paciente.historico_familiar;
        document.getElementById('condicoes-cronicas').value = paciente.condicao_atual;
        document.getElementById('doencas-passadas').value = paciente.doenca_passada;
        document.getElementById('alergias').value = paciente.historico_alergias;
        document.getElementById('medicamentos').value = paciente.medicamentos_atuais;
        
        if (paciente.habitos_exercicio) {
            document.querySelector(`input[name="habitos_exercicio"][value="${paciente.habitos_exercicio}"]`).checked = true;
        }
        if (paciente.consumo_alcool) {
            document.querySelector(`input[name="consumo_alcool"][value="${paciente.consumo_alcool}"]`).checked = true;
        }
        if (paciente.consumo_tabaco) {
            document.querySelector(`input[name="consumo_tabaco"][value="${paciente.consumo_tabaco}"]`).checked = true;
        }
    } else {
        alert('Nenhum dado de paciente encontrado. Por favor, faça o cadastro.');
    }

    document.getElementById('perfilForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Evita o envio padrão do formulário

        // Obtenção dos dados do formulário
        const pacienteAtualizado = {
            nome: document.getElementById('nome').value,
            telefone: document.getElementById('telefone').value,
            email: document.getElementById('email').value,
            data_nascimento: document.getElementById('data-nascimento').value,
            historico_familiar: document.getElementById('historico-familiar').value,
            condicao_atual: document.getElementById('condicoes-cronicas').value,
            doenca_passada: document.getElementById('doencas-passadas').value,
            historico_alergias: document.getElementById('alergias').value,
            medicamentos_atuais: document.getElementById('medicamentos').value,
            habitos_exercicio: document.querySelector('input[name="habitos_exercicio"]:checked').value,
            consumo_alcool: document.querySelector('input[name="consumo_alcool"]:checked').value,
            consumo_tabaco: document.querySelector('input[name="consumo_tabaco"]:checked').value,
        };

        // Salvando os dados atualizados no localStorage
        localStorage.setItem('paciente', JSON.stringify(pacienteAtualizado));

        alert('Dados atualizados com sucesso!');
    });
});
