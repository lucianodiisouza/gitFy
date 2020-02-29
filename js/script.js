const http = new XMLHttpRequest();
http.open("GET", "https://api.github.com/users/lucianodiisouza");
http.send();

function handleErrors() {
    const usuario = document.querySelector(".usuario");
    usuario.innerHTML = "<p>Erro.</p>";
}

http.addEventListener("error", handleErrors);

function handleLoad() {
    const response = event.target.response;
    const data = JSON.parse(response);

    const nome = document.querySelector(".nome");
    const empresa = document.querySelector(".empresa");

    nome.innerText = data.name;
    empresa.innerText = data.company;
}

http.addEventListener("load", handleLoad);