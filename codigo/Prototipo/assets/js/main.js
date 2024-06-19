const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('../json/db_Med.jso')

const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)
server.listen(3000, () => {
  console.log('JSON Server está em execução!')
})

import { ProfissionalService } from '../services/profissionais-service.js';

const profissionalService = new ProfissionalService();

// Pegando elementos do formulário
const nomeInput = document.getElementById("nome");
const crmInput = document.getElementById("crm");
const especialidadeSelect = document.getElementById("especialidade");
const telefoneInput = document.getElementById("telefone");
const emailInput = document.getElementById("email");
const datanascimentoInput = document.getElementById("data_nascimento");
const senhaInput = document.getElementById("senha");
const form = document.querySelector("form");
let especialidadeText = null;

// Função para armazenar dados
async function armazenaDados() {
    let profissional = {};
    profissional.id = await obterID();
    profissional.nome = nomeInput.value.trim();
    profissional.crm = crmInput.value.trim();
    profissional.especialidade = especialidadeText;
    profissional.telefone = telefoneInput.value.trim();
    profissional.email = emailInput.value.trim();
    profissional.senha = senhaInput.value.trim();
    profissional.data_nascimento = datanascimentoInput.value;

    if (!profissional.email || !profissional.senha || !profissional.nome || !profissional.crm || !profissional.data_nascimento) {
        alert("Preencha todos os campos!");
        return;
    }

    try {
        const profissionais = await profissionalService.getAll();
        if (profissionais.find(prof => prof.email === profissional.email)) {
            alert("E-mail já cadastrado");
        } else {
            await profissionalService.create(profissional);
            form.reset(); 
            window.location.href = "Login_Med.html";
            alert("Cadastro bem-sucedido!");
        }
    } catch (error) {
        console.error(error);
    }
}

// Função para obter o próximo ID
async function obterID() {
    const profissionais = await profissionalService.getAll();
    return profissionais.length ? Math.max(...profissionais.map(prof => prof.id)) + 1 : 1;
}

// Função de login
async function Login() {
    const email = emailInput.value.trim();
    const password = senhaInput.value.trim();

    try {
        const profissionais = await profissionalService.getAll();
        const foundProfissional = profissionais.find(prof => prof.email === email && prof.senha === password);

        if (foundProfissional) {
            sessionStorage.setItem("idProfissional", foundProfissional.id);
            window.location.href = "Perfil_Med.html";
            alert("Login bem-sucedido!");
        } else {
            alert("E-mail ou senha incorretos. Por favor, tente novamente.");
        }
    } catch (error) {
        console.error(error);
    }
}

// Função para calcular idade
function calcularIdade(dataNascimento) {
    const hoje = new Date();
    const dataNasc = new Date(dataNascimento);
    let idade = hoje.getFullYear() - dataNasc.getFullYear();
    const mes = hoje.getMonth() - dataNasc.getMonth();

    if (mes < 0 || (mes === 0 && hoje.getDate() < dataNasc.getDate())) {
        idade--;
    }
    return idade;
}

// Função para exibir detalhes do departamento
async function exibirDetalhesProfissional() {
    const id = sessionStorage.getItem("idProfissional");
    
    if (id !== null) {
        try {
            const profissional = await profissionalService.getById(id);
            if (profissional) {
                nomeh1.innerText = profissional.nome;
                idadeh4.innerText = `Idade: ${calcularIdade(profissional.data_nascimento)}`;
                emailh4.innerText = `Email: ${profissional.email}`;
                telefoneh4.innerText = `Telefone: ${profissional.telefone}`;
                expecializacaoh4.innerText = `Especialização: ${profissional.especialidade}`;
            } else {
                console.error("Profissional não encontrado para o ID:", id);
            }
        } catch (error) {
            console.error(error);
        }
    } else {
        console.error("ID de profissional do usuário não definido. O usuário deve fazer login primeiro.");
    }
}

window.addEventListener("load", () => {
    exibirDetalhesProfissional();
});

// Função para salvar edições
async function salvarEdicoes() {
    const id = sessionStorage.getItem("idProfissional");

    if (id !== null) {
        try {
            let profissional = await profissionalService.getById(id);
            if (profissional) {
                profissional.nome = nomeh1.textContent;
                profissional.email = emailh4.textContent.replace("Email: ", "").trim();
                profissional.telefone = telefoneh4.textContent.replace("Telefone: ", "").trim();
                profissional.especialidade = expecializacaoh4.textContent.replace("Especialização: ", "").trim();

                await profissionalService.update(id, profissional);
                location.reload();
            }
        } catch (error) {
            console.error(error);
        }
    }
}

// Função para excluir conta
async function excluirConta() {
    const id = sessionStorage.getItem("idProfissional");

    if (confirm("Tem certeza de que deseja excluir sua conta? Esta ação é irreversível.")) {
        try {
            await profissionalService.delete(id);
            window.location.href = "Login_Med.html";
            alert("Sua conta foi excluída com sucesso!");
        } catch (error) {
            console.error(error);
        }
    }
}

document.querySelector('.btn.btn-danger').addEventListener('click', function() {
    excluirConta();
});
 
// Especialidades
let especialidadesJSON = getEspecialidades("assets/json/especialidades.json")
.then((value) => {
    let especialidades = value.especialidades;
    let tamanho = Object.keys(value.especialidades).length;

    for (let i = 0; i < tamanho; i++){
        createCustomOptions(especialidadeSelect, especialidades[i].id, especialidades[i].nome);
    }
})

especialidadeSelect.addEventListener("click", () => {
    let options = especialidadeSelect.querySelectorAll("option");
    let quantidadeOptions = options.length;

    if (typeof(quantidadeOptions) === "undefined" || quantidadeOptions < 2)
        console.log("Erro ao carregar o arquivo .json");
})

especialidadeSelect.addEventListener("change", () => {
    especialidadeText = especialidadeSelect.options[especialidadeSelect.selectedIndex].text;
    console.log(especialidadeText);
})