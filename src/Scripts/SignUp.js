let usuarios = new Array()

function login(event) {
    // Evita o comportamento padrão de envio do formulário
    event.preventDefault()

    const formulario = document.getElementById("loginForm");
    const formData = new FormData(formulario);

    const email = formData.get("email");
    const senha = formData.get("senha");
    const confirmarSen = formData.get("confirmarSen")

    if (email === "" || senha === "" || confirmarSen === "") {
        alert("O email e a senha não podem estar vazios.")
    } else if (!senha.match(/^[a-zA-Z0-9]+$/)) {
        alert("A senha não pode conter símbolos.")
    } else if (senha.length < 8) {
        alert("A senha deve ter pelo menos 8 caracteres.")
    } else if (senha !== confirmarSen) {
        alert("A senha não está igual!")
    } else {
        usuarios.push({email, senha})
        localStorage.setItem("usuarios", JSON.stringify(usuarios))
        alert("Conta criada com sucesso!")
        window.location.href = "../../Index.html"
    }
}

// Adiciona um event listener para o evento "submit" do formulário
document.getElementById("loginForm").addEventListener("submit", login);
