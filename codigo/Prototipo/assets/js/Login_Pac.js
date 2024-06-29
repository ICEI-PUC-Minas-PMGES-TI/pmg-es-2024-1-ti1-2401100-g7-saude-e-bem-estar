// JavaScript para validação do formulário de login de paciente

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Validação dos campos (exemplo simples)
    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;

    if (email && senha) {
        // Aqui você pode enviar os dados para o backend ou fazer outra ação
        alert('Login realizado com sucesso!');
        window.location.href = 'TelaPrincipal_Pac.html'; // Redireciona para a página principal após o login
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});
