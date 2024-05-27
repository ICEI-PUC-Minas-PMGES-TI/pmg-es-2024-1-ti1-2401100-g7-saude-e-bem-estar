const especialidadesSelect = document.getElementById("especialidades");
console.log(especialidadesSelect)

let especialidadesJSON = null;

especialidadesJSON = getEspecialidades("assets/json/especialidades.json");

especialidadesJSON
.then((value) => {
    let especialidades = value.especialidades;
    let tamanho = especialidades.length;

    for (let i = 0; i < tamanho; i++){
        createCustomOptions(especialidadesSelect, especialidades[i].id, especialidades[i].nome);
    }
})

//codar pra buscar por ID
