const elemBtn = document.querySelector('button');
const elemspan = document.querySelector('span');

let likes = 0;
elemBtn.addEventListener('click', DarMaisLikes);

function DarMaisLikes(){
likes++;

elemspan.textContent = likes;

}