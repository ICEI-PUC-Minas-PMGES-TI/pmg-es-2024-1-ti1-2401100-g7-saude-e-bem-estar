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
<<<<<<< HEAD
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
=======

  let departamento = new Object();
  departamento.id = obterID();
  departamento.nome = nomeInput.value.trim();
  departamento.crm = crmInput.value.trim();
  departamento.especialidade = especialidadeText;
  departamento.telefone = telefoneInput.value.trim();
  departamento.email = emailInput.value.trim();
  departamento.senha = senhaInput.value.trim();
  departamento.data_nascimento = datanascimentoInput.value;


  const email = emailInput.value.trim();

  if(departamento.email == '' || departamento.senha == '' || departamento.nome == '' || departamento.crm == '' || departamento.data_nascimento == ''){
    alert("Preencha os campos!");
  }else{

    const foundDepartment = departamentos.find(departamento => departamento.email == email);
  
    if (foundDepartment) {
        alert("E-mail já cadastrado");
    } else {
        departamentos.push(departamento);  
        localStorage.setItem("departamentos", JSON.stringify(departamentos));

        form.reset(); 
        window.location.href = "Login_Med.html";
        alert("Cadastro bem-sucedido!");
>>>>>>> 563b8728584edf3535e10c9ad6465e326e3cb3b0
    }

  }

}
/**
 @returns {number}
 */

function obterID() {
  let id = parseInt(localStorage.getItem("id")) || 0;
  id += 1;
  localStorage.setItem("id", id);
  return id;
}
// Fim funcionalidade de armazenar dados

// Funcionalidade de login 
function Login() {
  const email = emailInput.value.trim();
  const password = senhaInput.value.trim();
<<<<<<< HEAD
  const foundPaciente = pacientes.find(p => p.email === email && p.senha === password);
  if (foundPaciente) {
    sessionStorage.setItem("idPaciente", foundPaciente.id);
    window.location.href = "TelaPrincipal_Pac.html";
    alert("Login bem-sucedido!");
=======

  const departamentos = JSON.parse(localStorage.getItem("departamentos")) || [];

  const foundDepartment = departamentos.find(departamento => departamento.email === email && departamento.senha === password);

  if (foundDepartment) {
    console.log("ID do departamento encontrado:", foundDepartment.id);
      sessionStorage.setItem("idDepartamento", foundDepartment.id);
      window.location.href = "TelaPrincipal_Med.html";
      alert("Login bem-sucedido!");
>>>>>>> 563b8728584edf3535e10c9ad6465e326e3cb3b0
  } else {
      alert("E-mail ou senha incorretos. Por favor, tente novamente.");
      console.log('load')
  }
}
// Fim funcionalidade de login 

// Funcionalidade calcular idade
const nomeh1 = document.querySelector("#name_perfil");
const idadeh4 = document.querySelector("#idade_perfil");
const emailh4 = document.querySelector("#email_perfil");
const telefoneh4 = document.querySelector("#telefone_perfil");
<<<<<<< HEAD
=======
const expecializacaoh4 = document.querySelector("#expecializacao_perfil");
>>>>>>> 563b8728584edf3535e10c9ad6465e326e3cb3b0

function calcularIdade(dataNascimento) {
    const hoje = new Date();
    const dataNasc = new Date(dataNascimento);
    let idade = hoje.getFullYear() - dataNasc.getFullYear();
    const mes = hoje.getMonth() - dataNasc.getMonth();

<<<<<<< HEAD
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
=======
    if (mes < 0 || (mes === 0 && hoje.getDate() < dataNasc.getDate())) {
        idade--;
    }
    return idade;
}
// Funcionalidade calcular idade

// Funcionalidade visualizar dados 
function exibirDetalhesDepartamento() {
    const id = sessionStorage.getItem("idDepartamento");
    
    if (id !== null) {
        let departamento = departamentos.find((d) => { return d.id == id; } );

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
>>>>>>> 563b8728584edf3535e10c9ad6465e326e3cb3b0
});
// Fim funcionalidade visualizar dados 

//Funcionalidade de editar dados
document.addEventListener("DOMContentLoaded", function() {
<<<<<<< HEAD
  const id = sessionStorage.getItem("idPaciente");
  let paciente = null;

  if (id !== null) {
    paciente = pacientes.find(p => p.id == id);
  } else {
    console.error("ID de paciente não definido na sessionStorage. O paciente deve fazer login primeiro.");
=======
  const id = sessionStorage.getItem("idDepartamento");
  let departamento = null;
  
  if (id !== null) {
      departamento = departamentos.find((d) => { return d.id == id; });
  } else {
      console.error("ID de departamento do usuário não definido no sessionStorage. O usuário deve fazer login primeiro.");
>>>>>>> 563b8728584edf3535e10c9ad6465e326e3cb3b0
  }
  
  function preencherCampos() {
<<<<<<< HEAD
    if (paciente) {
      nomeh1.innerText = paciente.nome;
      idadeh4.innerText = `Idade: ${calcularIdade(paciente.data_nascimento)}`;
      emailh4.innerText = `Email: ${paciente.email}`;
      telefoneh4.innerText = `Telefone: ${paciente.telefone}`;
    }
=======
      if (departamento) {
          nomeh1.innerText = departamento.nome;
          idadeh4.innerText = `Idade: ${calcularIdade(departamento.data_nascimento)}`;
          emailh4.innerText = `Email: ${departamento.email}`;
          telefoneh4.innerText = `Telefone: ${departamento.telefone}`;
          expecializacaoh4.innerText = `Especialização: ${departamento.especialidade}`;
      }
>>>>>>> 563b8728584edf3535e10c9ad6465e326e3cb3b0
  }

  preencherCampos();

  function habilitarEdicao() {
<<<<<<< HEAD
    if (paciente) {
      nomeh1.contentEditable = true;
      idadeh4.contentEditable = true;
      emailh4.contentEditable = true;
      telefoneh4.contentEditable = true;
    }
=======
      if (departamento) {
          nomeh1.contentEditable = true;
          idadeh4.contentEditable = true;
          emailh4.contentEditable = true;
          telefoneh4.contentEditable = true;
          expecializacaoh4.contentEditable = true;
      }
>>>>>>> 563b8728584edf3535e10c9ad6465e326e3cb3b0
  }

  document.querySelector('.btn.btn-primary').addEventListener('click', function() {
      habilitarEdicao();
  });

  function salvarEdicoes() {
<<<<<<< HEAD
    if (paciente) {
      paciente.nome = nomeh1.textContent;
      paciente.email = emailh4.textContent.replace("Email: ", "").trim();
      paciente.telefone = telefoneh4.textContent.replace("Telefone: ", "").trim();
      pacientes = pacientes.map(p => p.id === paciente.id ? paciente : p);
      localStorage.setItem("pacientes", JSON.stringify(pacientes));
      location.reload();
    }
=======
      if (departamento) {
          departamento.nome = nomeh1.textContent;
          departamento.email = emailh4.textContent.replace("Email: ", "").trim();
          departamento.telefone = telefoneh4.textContent.replace("Telefone: ", "").trim();
          departamento.especialidade = expecializacaoh4.textContent.replace("Especialização: ", "").trim();


          departamentos = departamentos.map(d => {
              if (d.id === departamento.id) {
                  return departamento;
              } else {
                  return d;
              }
          });
          localStorage.setItem("departamentos", JSON.stringify(departamentos));
          location.reload();
      }
>>>>>>> 563b8728584edf3535e10c9ad6465e326e3cb3b0
  }

  document.querySelectorAll('.btn.btn-primary.btn-left')[0].addEventListener('click', function() {
      salvarEdicoes();
  });
  document.querySelectorAll('.btn.btn-primary.btn-left')[1].addEventListener('click', function() {
      location.reload();
  });
});
  // Fim funcionalida editar dados

  // Funcionalida excluir dados
document.addEventListener("DOMContentLoaded", function() {
  const id = sessionStorage.getItem("idPaciente");

  function excluirConta() {
<<<<<<< HEAD
    if (confirm("Tem certeza de que deseja excluir sua conta? Esta ação é irreversível.")) {
      pacientes = pacientes.filter(p => p.id !== parseInt(id));
      localStorage.setItem("pacientes", JSON.stringify(pacientes));
      window.location.href = "Login_Pac.html";
      alert("Sua conta foi excluída com sucesso!");
    }
=======
      if (confirm("Tem certeza de que deseja excluir sua conta? Esta ação é irreversível.")) {

          departamentos = departamentos.filter(departamento => departamento.id !== parseInt(id));
          localStorage.setItem("departamentos", JSON.stringify(departamentos));
          window.location.href = "Login_Med.html";
          alert("Sua conta foi excluída com sucesso!");
      }
>>>>>>> 563b8728584edf3535e10c9ad6465e326e3cb3b0
  }

  document.querySelector('.btn.btn-danger').addEventListener('click', function() {
      excluirConta();
  });
});
  // Fim funcionalida excluir dados

<<<<<<< HEAD
// Carregar especialidades no select
let especialidadesJSON = getEspecialidades("assets/json/especialidades.json")
  .then((value) => {
    let especialidades = value.especialidades;
    especialidades.forEach(especialidade => {
      createCustomOptions(especialidadeSelect, especialidade.id, especialidade.nome);
    });
  });
=======
  //especialidades nao pode ser input
let especialidadesJSON = getEspecialidades("assets/json/especialidades.json")
.then((value) => {
    let especialidades = value.especialidades;
    let tamanho = Object.keys(value.especialidades).length;

    for (let i = 0; i < tamanho; i++){
        createCustomOptions(especialidadeSelect, especialidades[i].id, especialidades[i].nome);
    }
})
>>>>>>> 563b8728584edf3535e10c9ad6465e326e3cb3b0

const especialidadeSelect = document.getElementById("especialidade");
especialidadeSelect.addEventListener("click", () => {
<<<<<<< HEAD
  let options = especialidadeSelect.querySelectorAll("option");
  if (options.length < 2) {
    console.log("Erro ao carregar o arquivo .json");
  }
});
=======
    let options = especialidadeSelect.querySelectorAll("option");
    let quantidadeOptions = options.length;

    if (typeof(quantidadeOptions) === "undefined" || quantidadeOptions < 2)
        console.log("Erro ao carregar o arquivo .json");
})

especialidadeSelect.addEventListener("change", () => {
    especialidadeText = especialidadeSelect.options[especialidadeSelect.selectedIndex].text;
    console.log(especialidadeText);
})
>>>>>>> 563b8728584edf3535e10c9ad6465e326e3cb3b0
