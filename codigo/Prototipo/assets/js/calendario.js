const medicos = JSON.parse(localStorage.getItem("departamentos"));
const medicosSelect = document.getElementById("medicos")
const regHorario = new RegExp("([0-1]?[0-9]|2[0-3]):[0-5][0-9]");
const botaoAvancar = document.getElementById("botao-avancar")
let medicoSelecionado = new Medico(0, "");
let key = null;

//gambiarrinha do crime organizado, um salve da cadeia de neves
for (let i = 0; i < medicos.length; i++){
    createCustomOptions(medicosSelect, medicos[i].id, medicos[i].nome);
    console.log(medicos[i]);
}

medicosSelect.addEventListener("change", () => {
    let index = medicosSelect.selectedIndex;

    medicoSelecionado.resetAllAttrs();
    medicoSelecionado.setId(medicosSelect[index].value);
    medicoSelecionado.setNome(medicosSelect[index].text);
    medicoSelecionado.setEspecialidade(medicos[index-1].especialidade);

    console.log(medicoSelecionado);
})

botaoAvancar.addEventListener("click", () => {
    key = medicoSelecionado.getNome().replace(" ", "");

    // se nao existir o objeto, crie um e insira todas as info seus CORNO
    if (!(localStorage.getItem(key))){
        let localStorageObj = new Object();

        let dataConsulta = document.getElementById("data-consulta").value;
        let horarioConsulta = document.getElementById("horario").value;

        localStorageObj.medico = medicoSelecionado.getStringfyAttrs();

        localStorageObj.datas = [];
        localStorageObj.datas.push(dataConsulta);

        localStorageObj.horarios = [];
        localStorageObj.horarios.push(horarioConsulta);

        console.log(localStorageObj);

        //mongoDB da shopee
        localStorage.setItem(key, JSON.stringify(localStorageObj));

        key = null;
        return;
    }

    //codar pra editar 
    
    
    key = null;
})

