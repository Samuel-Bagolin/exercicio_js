document.getElementById('soma-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const num3 = parseFloat(document.getElementById('num3').value);
    const mensagem = document.getElementById('mensagem');

    if ((num1 + num2) > num3) {
        mensagem.textContent = "Sucesso! A soma do primeiro e segundo número é maior que o terceiro.";
        mensagem.className = "mensagem positiva";
    } else {
        mensagem.textContent = "Erro! A soma do primeiro e segundo número deve ser maior que o terceiro.";
        mensagem.className = "mensagem negativa";
    }
});
