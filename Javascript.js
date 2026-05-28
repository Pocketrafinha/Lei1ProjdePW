const API_KEY = "6aYxijUti77ez30M1KUwXVHpVBGBDhtUaBpFzh5VcIc";
const searchBar = document.getElementById("searchBar");
const containerFotos = document.getElementById("fotos");

searchBar.addEventListener("input", () => {
    const query = searchBar.value.trim();

    if (query.length > 2) {
        unsplashRequest(query);
    }
});

function unsplashRequest(query) {
    let url = `https://api.unsplash.com/search/photos/?client_id=${API_KEY}&query=${encodeURIComponent(query)}&per_page=9`;

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

    if (data.results.length === 0) {
        containerFotos.innerHTML = "<p>Nenhuma foto encontrada para esta pesquisa.</p>";
        return;
    }

    data.results.forEach(foto => {
        const figure = document.createElement("figure");

        const img = document.createElement("img");
        img.src = foto.urls.small;
        img.alt = foto.alt_description || "Foto do Unsplash";

        const figcaption = document.createElement("figcaption");

        const autor = document.createElement("span");
        autor.textContent = foto.user.name;

        const areaLikes = document.createElement("span");
        
        let contadorLikes = foto.likes; 
        let curtido = false; 
            
        const Like = document.createElement("button");
        Like.textContent = "🤍"; 
        Like.style.background = "none";
        Like.style.border = "none";
        Like.style.cursor = "pointer";
            
        const numLikes = document.createElement("span");
        numLikes.textContent = ` ${contadorLikes}`;
            
        Like.addEventListener("click", () => {
            if (!curtido) {
                contadorLikes++;
                Like.textContent = "❤️"; 
                curtido = true;
            } else {
                contadorLikes--;
                Like.textContent = "🤍"; 
                curtido = false;
            }
            numLikes.textContent = ` ${contadorLikes}`;
        });
        
        areaLikes.appendChild(Like);
        areaLikes.appendChild(numLikes);

        figcaption.appendChild(autor);
        figcaption.appendChild(areaLikes);

        figure.appendChild(img);
        figure.appendChild(figcaption);

        containerFotos.appendChild(figure);
    });
}