const medicos = JSON.parse(localStorage.getItem("departamentos")) || [];
const medicosSelect = document.getElementById("medicos");
const regHorario = new RegExp("([0-1]?[0-9]|2[0-3]):[0-5][0-9]");
const botaoAvancar = document.getElementById("botao-avancar");
let medicoSelecionado = new Medico(0, "");
let key = null;

if (medicosSelect) {
    for (let i = 0; i < medicos.length; i++) {
        createCustomOptions(medicosSelect, medicos[i].id, medicos[i].nome);
    }

    medicosSelect.addEventListener("change", () => {
        let index = medicosSelect.selectedIndex;
        medicoSelecionado.resetAllAttrs();
        medicoSelecionado.setId(medicosSelect[index].value);
        medicoSelecionado.setNome(medicosSelect[index].text);
        medicoSelecionado.setEspecialidade(medicos[index-1].especialidade);
    });

    botaoAvancar.addEventListener("click", () => {
        key = medicoSelecionado.getNome().replace(" ", "");

        if (!localStorage.getItem(key)) {
            let localStorageObj = {
                medico: medicoSelecionado.getStringfyAttrs(),
                datas: [document.getElementById("data-consulta").value],
                horarios: [document.getElementById("horario").value]
            };

            localStorage.setItem(key, JSON.stringify(localStorageObj));
            key = null;
            return;
        }

        // Implementar edição de dados no localStorage

        key = null;
    });
}
