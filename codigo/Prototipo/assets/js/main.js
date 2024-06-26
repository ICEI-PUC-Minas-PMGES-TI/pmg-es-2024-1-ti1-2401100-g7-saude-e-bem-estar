// Funcionalidade de armazenar dados
let departamentos = JSON.parse(localStorage.getItem("departamentos")) || [];

const nomeInput = document.getElementById("nome");
const crmInput = document.getElementById("crm");
const especialidadeSelect = document.getElementById("especialidade");
const telefoneInput = document.getElementById("telefone");
const emailInput = document.getElementById("email");
const datanascimentoInput = document.getElementById("data_nascimento");
const senhaInput = document.getElementById("senha");
const form = document.querySelector("form");
let especialidadeText = null;

function armazenaDados() {
    let departamento = {
        id: obterID(),
        nome: nomeInput.value.trim(),
        crm: crmInput.value.trim(),
        especialidade: especialidadeText,
        telefone: telefoneInput.value.trim(),
        email: emailInput.value.trim(),
        senha: senhaInput.value.trim(),
        data_nascimento: datanascimentoInput.value
    };

    if (!departamento.nome || !departamento.crm || !departamento.especialidade || !departamento.telefone || !departamento.email || !departamento.senha || !departamento.data_nascimento) {
        alert("Preencha todos os campos!");
        return;
    }

    const foundDepartment = departamentos.find(departamento => departamento.email === departamento.email);

    if (foundDepartment) {
        alert("E-mail já cadastrado");
    } else {
        departamentos.push(departamento);
        localStorage.setItem("departamentos", JSON.stringify(departamentos));

        form.reset();
        alert("Cadastro bem-sucedido!");
        window.location.href = "Login_Med.html";
    }
}

function obterID() {
    let id = parseInt(localStorage.getItem("id")) || 0;
    id += 1;
    localStorage.setItem("id", id);
    return id;
}

// Funcionalidade de login
function Login() {
    const email = emailInput.value.trim();
    const password = senhaInput.value.trim();

    const foundDepartment = departamentos.find(departamento => departamento.email === email && departamento.senha === password);

    if (foundDepartment) {
        console.log("ID do departamento encontrado:", foundDepartment.id);
        sessionStorage.setItem("idDepartamento", foundDepartment.id);
        alert("Login bem-sucedido!");
        window.location.href = "TelaPrincipal_Med.html";
    } else {
        alert("E-mail ou senha incorretos. Por favor, tente novamente.");
    }
}

// Funcionalidade calcular idade
const nomeh1 = document.querySelector("#name_perfil");
const idadeh4 = document.querySelector("#idade_perfil");
const emailh4 = document.querySelector("#email_perfil");
const telefoneh4 = document.querySelector("#telefone_perfil");
const expecializacaoh4 = document.querySelector("#expecializacao_perfil");

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

// Funcionalidade visualizar dados
function exibirDetalhesDepartamento() {
    const id = sessionStorage.getItem("idDepartamento");

    if (id !== null) {
        let departamento = departamentos.find(d => d.id == id);

        if (departamento) {
            nomeh1.innerText = departamento.nome;
            idadeh4.innerText = `Idade: ${calcularIdade(departamento.data_nascimento)}`;
            emailh4.innerText = `Email: ${departamento.email}`;
            telefoneh4.innerText = `Telefone: ${departamento.telefone}`;
            expecializacaoh4.innerText = `Especialização: ${departamento.especialidade}`;
        } else {
            console.error("Departamento não encontrado para o ID:", id);
        }
    } else {
        console.error("ID de departamento do usuário não definido no localStorage. O usuário deve fazer login primeiro.");
    }
}

window.addEventListener("load", () => {
    exibirDetalhesDepartamento();
});

// Funcionalidade de editar dados
document.addEventListener("DOMContentLoaded", function() {
    const id = sessionStorage.getItem("idDepartamento");
    let departamento = null;

    if (id !== null) {
        departamento = departamentos.find(d => d.id == id);
    } else {
        console.error("ID de departamento do usuário não definido no sessionStorage. O usuário deve fazer login primeiro.");
    }

    function preencherCampos() {
        if (departamento) {
            nomeh1.innerText = departamento.nome;
            idadeh4.innerText = `Idade: ${calcularIdade(departamento.data_nascimento)}`;
            emailh4.innerText = `Email: ${departamento.email}`;
            telefoneh4.innerText = `Telefone: ${departamento.telefone}`;
            expecializacaoh4.innerText = `Especialização: ${departamento.especialidade}`;
        }
    }

    preencherCampos();

    function habilitarEdicao() {
        if (departamento) {
            nomeh1.contentEditable = true;
            idadeh4.contentEditable = true;
            emailh4.contentEditable = true;
            telefoneh4.contentEditable = true;
            expecializacaoh4.contentEditable = true;
        }
    }

    document.querySelector('.btn.btn-primary').addEventListener('click', habilitarEdicao);

    function salvarEdicoes() {
        if (departamento) {
            departamento.nome = nomeh1.textContent;
            departamento.email = emailh4.textContent.replace("Email: ", "").trim();
            departamento.telefone = telefoneh4.textContent.replace("Telefone: ", "").trim();
            departamento.especialidade = expecializacaoh4.textContent.replace("Especialização: ", "").trim();

            departamentos = departamentos.map(d => d.id === departamento.id ? departamento : d);
            localStorage.setItem("departamentos", JSON.stringify(departamentos));
            location.reload();
        }
    }

    document.querySelectorAll('.btn.btn-primary.btn-left')[0].addEventListener('click', salvarEdicoes);
    document.querySelectorAll('.btn.btn-primary.btn-left')[1].addEventListener('click', function() {
        location.reload();
    });
});

// Funcionalidade de excluir dados
document.addEventListener("DOMContentLoaded", function() {
    const id = sessionStorage.getItem("idDepartamento");

    function excluirConta() {
        if (confirm("Tem certeza de que deseja excluir sua conta? Esta ação é irreversível.")) {
            departamentos = departamentos.filter(departamento => departamento.id !== parseInt(id));
            localStorage.setItem("departamentos", JSON.stringify(departamentos));
            alert("Sua conta foi excluída com sucesso!");
            window.location.href = "Login_Med.html";
        }
    }

    document.querySelector('.btn.btn-danger').addEventListener('click', excluirConta);
});

// Especialidades não podem ser input
async function getEspecialidades(url) {
    const response = await fetch(url);
    return response.json();
}

getEspecialidades("assets/json/especialidades.json").then(value => {
    let especialidades = value.especialidades;
    let tamanho = Object.keys(especialidades).length;

    for (let i = 0; i < tamanho; i++) {
        createCustomOptions(especialidadeSelect, especialidades[i].id, especialidades[i].nome);
    }
});

especialidadeSelect.addEventListener("click", () => {
    let options = especialidadeSelect.querySelectorAll("option");
    let quantidadeOptions = options.length;

    if (typeof(quantidadeOptions) === "undefined" || quantidadeOptions < 2)
        console.log("Erro ao carregar o arquivo .json");
});

especialidadeSelect.addEventListener("change", () => {
    especialidadeText = especialidadeSelect.options[especialidadeSelect.selectedIndex].text;
    console.log(especialidadeText);
});