```javascript
function responder(resposta) {

    document.getElementById("step1").classList.add("hidden");
    document.getElementById("loading").classList.remove("hidden");

    console.log("Resposta:", resposta);

    // Simula a verificação
    setTimeout(() => {

        document.getElementById("loading").classList.add("hidden");
        document.getElementById("success").classList.remove("hidden");

    }, 1500);
}

function conectar() {

    alert(
        "Acesso autorizado!\\n\\n" +
        "Nesta versão de demonstração, a conexão ainda não está integrada ao roteador."
    );

    // Aqui futuramente entra a integração
    // com o captive portal/roteador.
}
```
