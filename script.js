// URL del recurso JSON
const url = 'https://jsonplaceholder.typicode.com/posts';

// Función para obtener y mostrar los datos JSON
function cargarPosts() {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json(); // Convierte la respuesta en JSON
        })
        .then(posts => {
            // Manipula los datos JSON aquí
            console.log(posts); // Imprime los datos en la consola

            // Obtén el contenedor donde se mostrarán los posts
            const divPosts = document.getElementById('posts');

            // Construye el HTML para mostrar los posts
            divPosts.innerHTML = posts.map(post => `
                <div class="post">
                    <h2>${post.title}</h2>
                    <p>${post.body}</p>
                </div>
            `).join('');
        })
        .catch(error => {
            console.error('Hubo un problema con la solicitud Fetch:', error);
            const divPosts = document.getElementById('posts');
            divPosts.innerHTML = '<p>Hubo un error al cargar los posts.</p>';
        });
}

// Llama a la función para cargar los posts
cargarPosts();
