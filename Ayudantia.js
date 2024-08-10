document.addEventListener('DOMContentLoaded', function () {
    console.log('cargando Dom...');


let posts =[];
let paginaActual = 1;
let cantidadPostPorPagina = 5;

function fetchPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')/*  peticion de los posts */
    .then(posts => posts.json()) /* manipula la respuesta */
    .then(postsJson => {
        posts = postsJson;
        console.log('Posts dentro del array:', posts)
        refrescoPosts();
    })
    .catch(error => console.error('Error en fetch', error))

}


function refrescoPosts() {
    const inicio = (paginaActual -1) * cantidadPostPorPagina;
    const final = inicio + cantidadPostPorPagina;
    const postsActuales = posts.slice(inicio, final);
}

fetchPosts();

})

/* nueva linea añadida */