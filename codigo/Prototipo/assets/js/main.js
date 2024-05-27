/*funcionalidade do carrosel
const myCarousel = document.querySelector('#carouselExampleDark')

const carousel = new bootstrap.Carousel(myCarousel, {
  interval: 2000,
  touch: false
})
//Fim funcionalidade carrosel
*/
// Funcionalidade de armazenar dados
const nomeInput = document.getElementById("nome");
const crmInput = document.getElementById("crm");
const especialidadeSelect = document.getElementById("especialidade");
const telefoneInput = document.getElementById("telefone");
const emailInput = document.getElementById("email");
const datanascimentoInput = document.getElementById("data_nascimento");
const senhaInput = document.getElementById("senha");
const form = document.querySelector("form");
let especialidadeText = null;

//especialidades nao pode ser input
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

function armazenaDados() {

  let departamento = new Object();
  departamento.id = obterID();
  departamento.nome = nomeInput.value.trim();
  departamento.crm = crmInput.value.trim();

  departamento.especialidade = especialidadeText;
  
  departamento.telefone = telefoneInput.value.trim();
  departamento.email = emailInput.value.trim();
  departamento.senha = senhaInput.value.trim();
  departamento.data_nascimento = datanascimentoInput.value;
  
  let departamentos = JSON.parse(localStorage.getItem("departamentos")) || [];
  departamentos.push(departamento);  
  localStorage.setItem("departamentos", JSON.stringify(departamentos));

  form.reset(); 
  window.location.href = "Login_Med.html";
  alert("Cadastro bem-sucedido!");
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

  const departamentos = JSON.parse(localStorage.getItem("departamentos")) || [];

  const foundDepartment = departamentos.find(departamento => departamento.email === email && departamento.senha === password);

  if (foundDepartment) {
      sessionStorage.setItem("idDepartamento", foundDepartment.id);
      window.location.href = "Perfil_Med.html";
      alert("Login bem-sucedido!");
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
//const ceph4 = document.querySelector("#cep_perfil"); // Adicionado elemento para exibir o CEP
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
// Funcionalidade calcular idade

// Funcionalidade visualizar dados 
function exibirDetalhesDepartamento() {
    const id = sessionStorage.getItem("idDepartamento");
    
    if (id !== null) {
        let departamentos = JSON.parse(localStorage.getItem("departamentos")) || [];
        let departamento = departamentos.find((d) => { return d.id == id; } );

        if (departamento) {
            nomeh1.innerText = departamento.nome;
            idadeh4.innerText = `Idade: ${calcularIdade(departamento.data_nascimento)}`;
            emailh4.innerText = `Email: ${departamento.email}`;
            telefoneh4.innerText = `Telefone: ${departamento.telefone}`;
            //ceph4.innerText = departamento.cep;
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
// Fim funcionalidade visualizar dados 

//Funcionalidade de editar dados
document.addEventListener("DOMContentLoaded", function() {
  const id = sessionStorage.getItem("idDepartamento");
  let departamento = null;
  
  if (id !== null) {
      let departamentos = JSON.parse(localStorage.getItem("departamentos")) || [];
      departamento = departamentos.find((d) => { return d.id == id; });
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

  document.querySelector('.btn.btn-primary').addEventListener('click', function() {
      habilitarEdicao();
  });

  function salvarEdicoes() {
      if (departamento) {
          departamento.nome = nomeh1.textContent;
          departamento.email = emailh4.textContent.replace("Email: ", "").trim();
          departamento.telefone = telefoneh4.textContent.replace("Telefone: ", "").trim();
          departamento.especialidade = expecializacaoh4.textContent.replace("Especialização: ", "").trim();

          let departamentos = JSON.parse(localStorage.getItem("departamentos")) || [];
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
  }

  document.querySelectorAll('.btn.btn-primary.btn-right')[0].addEventListener('click', function() {
      salvarEdicoes();
  });
  document.querySelectorAll('.btn.btn-primary.btn-right')[1].addEventListener('click', function() {
      location.reload();
  });
});
  // Fim funcionalida editar dados

  // Funcionalida excluir dados
document.addEventListener("DOMContentLoaded", function() {
  const id = sessionStorage.getItem("idDepartamento");

  function excluirConta() {
      if (confirm("Tem certeza de que deseja excluir sua conta? Esta ação é irreversível.")) {
          let departamentos = JSON.parse(localStorage.getItem("departamentos")) || [];
          departamentos = departamentos.filter(departamento => departamento.id !== parseInt(id));
          localStorage.setItem("departamentos", JSON.stringify(departamentos));
          window.location.href = "Login_Med.html";
          alert("Sua conta foi excluída com sucesso!");
      }
  }

  document.querySelector('.btn.btn-danger').addEventListener('click', function() {
      excluirConta();
  });
});
  // Fim funcionalida excluir dados
