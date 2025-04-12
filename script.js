document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();

    const emailInput = document.getElementById("email");
    const erroMensagem = document.getElementById("erro");

    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const email = emailInput.value;

    if (regex.test(email)) {
        alert("E-mail válido! Formulário enviado.");
        erroMensagem.style.display = "none";
    } else {
        erroMensagem.style.display = "inline";
    }
});
