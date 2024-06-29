// Função para obter as especialidades do arquivo JSON
async function getEspecialidades(url) {
  try {
    let response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    let data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao obter especialidades:', error);
  }
}

// Função para criar opções personalizadas para o select
function createCustomOptions(select, value, text) {
  let option = document.createElement('option');
  option.value = value;
  option.textContent = text;
  select.appendChild(option);
}

// Funcionalidade de armazenar dados
let pacientes = JSON.parse(localStorage.getItem("pacientes")) || [];

const nomeInput = document.getElementById("nome");
const cpfInput = document.getElementById("cpf");
const telefoneInput = document.getElementById("telefone");
const emailInput = document.getElementById("email");
const datanascimentoInput = document.getElementById("data_nascimento");
const senhaInput = document.getElementById("senha");
const form = document.querySelector("form");
let especialidadeText = null;

function armazenaDados() {
  let paciente = new Object();
  paciente.id = obterID();
  paciente.nome = nomeInput.value.trim();
  paciente.cpf = cpfInput.value.trim();
  paciente.telefone = telefoneInput.value.trim();
  paciente.email = emailInput.value.trim();
  paciente.senha = senhaInput.value.trim();
  paciente.data_nascimento = datanascimentoInput.value;

  if (paciente.email === '' || paciente.senha === '' || paciente.nome === '' || paciente.cpf === '' || paciente.data_nascimento === '') {
    alert("Preencha os campos!");
  } else {
    const foundPaciente = pacientes.find(p => p.email === paciente.email);
    if (foundPaciente) {
      alert("E-mail já cadastrado");
    } else {
      pacientes.push(paciente);  
      localStorage.setItem("pacientes", JSON.stringify(pacientes));
      form.reset(); 
      window.location.href = "Login_Pac.html";
      alert("Cadastro bem-sucedido!");
    }
  }
}

function obterID() {
  let id = parseInt(localStorage.getItem("id")) || 0;
  id += 1;
  localStorage.setItem("id", id);
  return id;
}

function Login() {
  const email = emailInput.value.trim();
  const password = senhaInput.value.trim();
  const foundPaciente = pacientes.find(p => p.email === email && p.senha === password);
  if (foundPaciente) {
    sessionStorage.setItem("idPaciente", foundPaciente.id);
    window.location.href = "TelaPrincipal_Pac.html";
    alert("Login bem-sucedido!");
  } else {
    alert("E-mail ou senha incorretos. Por favor, tente novamente.");
  }
}

const nomeh1 = document.querySelector("#name_perfil");
const idadeh4 = document.querySelector("#idade_perfil");
const emailh4 = document.querySelector("#email_perfil");
const telefoneh4 = document.querySelector("#telefone_perfil");

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

function exibirDetalhesPaciente() {
  const id = sessionStorage.getItem("idPaciente");
  if (id !== null) {
    let paciente = pacientes.find(p => p.id == id);
    if (paciente) {
      nomeh1.innerText = paciente.nome;
      idadeh4.innerText = `Idade: ${calcularIdade(paciente.data_nascimento)}`;
      emailh4.innerText = `Email: ${paciente.email}`;
      telefoneh4.innerText = `Telefone: ${paciente.telefone}`;
    } else {
      console.error("Paciente não encontrado para o ID:", id);
    }
  } else {
    console.error("ID de paciente não definido na sessionStorage. O paciente deve fazer login primeiro.");
  }
}

window.addEventListener("load", () => {
  exibirDetalhesPaciente();
});

document.addEventListener("DOMContentLoaded", function() {
  const id = sessionStorage.getItem("idPaciente");
  let paciente = null;

  if (id !== null) {
    paciente = pacientes.find(p => p.id == id);
  } else {
    console.error("ID de paciente não definido na sessionStorage. O paciente deve fazer login primeiro.");
  }

  function preencherCampos() {
    if (paciente) {
      nomeh1.innerText = paciente.nome;
      idadeh4.innerText = `Idade: ${calcularIdade(paciente.data_nascimento)}`;
      emailh4.innerText = `Email: ${paciente.email}`;
      telefoneh4.innerText = `Telefone: ${paciente.telefone}`;
    }
  }

  preencherCampos();

  function habilitarEdicao() {
    if (paciente) {
      nomeh1.contentEditable = true;
      idadeh4.contentEditable = true;
      emailh4.contentEditable = true;
      telefoneh4.contentEditable = true;
    }
  }

  document.querySelector('.btn.btn-primary').addEventListener('click', function() {
    habilitarEdicao();
  });

  function salvarEdicoes() {
    if (paciente) {
      paciente.nome = nomeh1.textContent;
      paciente.email = emailh4.textContent.replace("Email: ", "").trim();
      paciente.telefone = telefoneh4.textContent.replace("Telefone: ", "").trim();
      pacientes = pacientes.map(p => p.id === paciente.id ? paciente : p);
      localStorage.setItem("pacientes", JSON.stringify(pacientes));
      location.reload();
    }
  }

  document.querySelectorAll('.btn.btn-primary.btn-left')[0].addEventListener('click', function() {
    salvarEdicoes();
  });

  document.querySelectorAll('.btn.btn-primary.btn-left')[1].addEventListener('click', function() {
    location.reload();
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const id = sessionStorage.getItem("idPaciente");

  function excluirConta() {
    if (confirm("Tem certeza de que deseja excluir sua conta? Esta ação é irreversível.")) {
      pacientes = pacientes.filter(p => p.id !== parseInt(id));
      localStorage.setItem("pacientes", JSON.stringify(pacientes));
      window.location.href = "Login_Pac.html";
      alert("Sua conta foi excluída com sucesso!");
    }
  }

  document.querySelector('.btn.btn-danger').addEventListener('click', function() {
    excluirConta();
  });
});

// Carregar especialidades no select
let especialidadesJSON = getEspecialidades("assets/json/especialidades.json")
  .then((value) => {
    let especialidades = value.especialidades;
    especialidades.forEach(especialidade => {
      createCustomOptions(especialidadeSelect, especialidade.id, especialidade.nome);
    });
  });

const especialidadeSelect = document.getElementById("especialidade");
especialidadeSelect.addEventListener("click", () => {
  let options = especialidadeSelect.querySelectorAll("option");
  if (options.length < 2) {
    console.log("Erro ao carregar o arquivo .json");
  }
});
