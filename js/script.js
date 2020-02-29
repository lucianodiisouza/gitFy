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
    const avatar = document.querySelector(".avatar");
    const followers = document.querySelector(".followers");
    const following = document.querySelector(".following");
    const repos = document.querySelector(".repos");
    const bio = document.querySelector(".bio");
    const linkTo = document.querySelector(".linkTo");

    nome.innerText = data.name;
    empresa.innerText = data.company;
    avatar.src = data.avatar_url;
    followers.innerText = data.followers;
    following.innerText = data.following;
    repos.innerText = data.public_repos;
    bio.innerText = data.bio;
    linkTo.href = data.html_url;
}

http.addEventListener("load", handleLoad);