class Medico {
    #id = 0;
    #especialidade = "";
    #nome = "";

    constructor(id, especialidade) {
        this.#id = id;
        this.#especialidade = especialidade;
    }

    setEspecialidade(especialidade) {
        this.#especialidade = especialidade;
    }

    setId(id) {
        this.#id = id;
    }

    setNome(nome) {
        this.#nome = nome;
    }

    getEspecialidade() {
        return this.#especialidade;
    }

    getId() {
        return this.#id;
    }

    getNome() {
        return this.#nome;
    }

    resetAllAttrs() {
        this.#id = 0;
        this.#especialidade = "";
    }

    getStringfyAttrs() {
        let attrs = {
            "id": this.getId(),
            "nome": this.getNome(),
            "especialidade": this.getEspecialidade()
        };
        
        return JSON.stringify(attrs);
    }
}

async function getEspecialidades(url) {
    try {
        const resultado = await fetch(url);
        if (!resultado.ok) throw new Error("Erro ao buscar especialidades");
        return resultado.json();
    } catch (error) {
        console.error(error);
    }
}

function createCustomOptions(select, value, desc) {
    const customOption = document.createElement("option");
    customOption.value = value;
    customOption.text = desc;
    select.append(customOption);
}
