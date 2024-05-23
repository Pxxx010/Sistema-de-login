
function run(event) {


    event.preventDefault()

    const formulario = document.querySelector("#loginForm")
    const login = new FormData(formulario)
    const email = login.get("email")
    const senha = login.get("senha")
    const usuarios = JSON.parse(localStorage.getItem("usuarios"))
    let encontrado = false

    if (usuarios === null || usuarios === undefined) {
        alert("Parabéns, você é o primeiro usuário, entretanto, o seu usuário ainda não esta cadastrado, por favor, cadastre o seu usuário para depois entrar em sua conta!")
    } else {
        for (const usuario of Object.values(usuarios)) {
            if (usuario.email === email && usuario.senha === senha) {
                encontrado = true
                break
            }
        }
        if (encontrado) {
            alert("Você entrou em sua conta!");
        } else {
            alert("Email ou senha incorreta")
        }
    }
}




// Adiciona um event listener para o evento "submit" do formulário
document.getElementById("loginForm").addEventListener("submit", run);