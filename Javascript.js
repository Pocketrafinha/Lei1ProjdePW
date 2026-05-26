const API_KEY = "6aYxijUti77ez30M1KUwXVHpVBGBDhtUaBpFzh5VcIc";
const searchBar = document.getElementById("searchBar");
const containerFotos = document.getElementById("fotos");

searchBar.addEventListener("input", () => {
    const query = searchBar.value;
    unsplashRequest(query);
});

function unsplashRequest(query) {
    let url = `https://api.unsplash.com/search/photos/?client_id=${API_KEY}&query=${query}&per_page=9`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            processaResposta(data);     
        })
        .catch(error => {
            console.error('Aconteceu um erro na operação de carregamento dos dados:', error);
        });
}

function processaResposta(data) {
    containerFotos.innerHTML = "";

    data.results.forEach(foto => {
        const figure = document.createElement("figure");
        const img = document.createElement("img");
        img.src = foto.urls.small;
        img.alt = foto.alt_description;

        const figcaption = document.createElement("figcaption");
        const autor = document.createElement("span");
        autor.textContent = foto.user.name;

        figcaption.appendChild(autor);
        figure.appendChild(img);
        figure.appendChild(figcaption);

        containerFotos.appendChild(figure);
    });
}

const elemBtn = document.getElementById('elemBtn');
const elemspan = document.querySelector('#elemBtn span');
let likes = 0;

if(elemBtn) {
    elemBtn.addEventListener('click', () => {
        likes++;
        elemspan.textContent = likes;
    });
}