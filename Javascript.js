const API_KEY = "6aYxijUti77ez30M1KUwXVHpVBGBDhtUaBpFzh5VcIc";



unsplashRequest();

function unsplashRequest()
{
    let url = `https://api.unsplash.com/search/photos/?client_id=${API_KEY}&query=${query}`;


   fetch(url)
    .then( function(response) { 
          return response.json();
    })
    .then( function(data) {
           processaResposta( data);     
    }  )
    .catch(error => {
        console.error('Aconteceu um erro na operação de carregamento dos dados:', error);
      });

    }


const elemBtn = document.querySelector('button');
const elemspan = document.querySelector('span');

let likes = 0;
elemBtn.addEventListener('click', DarMaisLikes);

function DarMaisLikes(){
likes++;

elemspan.textContent = likes;

}