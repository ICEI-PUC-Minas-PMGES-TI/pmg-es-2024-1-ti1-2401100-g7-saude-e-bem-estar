document.addEventListener('DOMContentLoaded', function() {
    const medicos = JSON.parse(localStorage.getItem("departamentos")) || [];
    const medicosSelect = document.getElementById("medicos");
    const regHorario = new RegExp("([0-1]?[0-9]|2[0-3]):[0-5][0-9]");
    const botaoAvancar = document.getElementById("botao-avancar");
    let medicoSelecionado = new Medico(0, "");

    medicos.forEach(medico => {
        createCustomOptions(medicosSelect, medico.id, medico.nome);
    });

    medicosSelect.addEventListener("change", () => {
        const selectedMedico = medicos.find(medico => medico.id == medicosSelect.value);
        if (selectedMedico) {
            medicoSelecionado.setId(selectedMedico.id);
            medicoSelecionado.setNome(selectedMedico.nome);
            medicoSelecionado.setEspecialidade(selectedMedico.especialidade);
        }
    });

    botaoAvancar.addEventListener("click", () => {
        const dataConsulta = document.getElementById("data-consulta").value;
        const horario = document.getElementById("horario").value;

        if (regHorario.test(horario) && dataConsulta) {
            let key = medicoSelecionado.getNome().replace(" ", "");
            let localStorageObj = JSON.parse(localStorage.getItem(key)) || {
                medico: medicoSelecionado.getStringfyAttrs(),
                datas: [],
                horarios: []
            };
            
            localStorageObj.datas.push(dataConsulta);
            localStorageObj.horarios.push(horario);
            localStorage.setItem(key, JSON.stringify(localStorageObj));
        } else {
            alert("Data ou horário inválidos!");
        }
    });
});
