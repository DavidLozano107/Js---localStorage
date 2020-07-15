//Variables 
const listaTweets = document.getElementById('lista-tweets');



//Eventos

eventListener();

function eventListener() {
    //Seleccionamos el articulo del formulario y cuando se envie se agrega el tweet
    document.querySelector('#formulario').addEventListener('submit', agregarTweet);

    //Borrar tweet
    listaTweets.addEventListener('click', eliminarTweet);



}



//Funciones


// Añadimos El tweet al formulario 
function agregarTweet(e) {
    e.preventDefault();
    //Extrar el valor del textArea
    tweet = document.getElementById('tweet').value;
    //Creat el btn de eliminar
    const btnEliminar = document.createElement('a');
    //Le colocamos una clase con el nombre de borrar tweet 
    btnEliminar.classList = 'borrar-tweet';
    //Le agregamos el valor del texto a la etiqueta
    btnEliminar.innerText = 'X';
    //Imprimirlo en la pantalla
    //Crear la etiqueta li
    const li = document.createElement('li');
    //Le agregamos el valor del tweet y el btn para eliminar
    li.innerText = tweet;
    li.appendChild(btnEliminar);
    //Agregamos la etiqueta que creamos anteriormente en container de ListaTweet 
    listaTweets.appendChild(li);
}

function eliminarTweet(e) {
    e.preventDefault();
    if (e.target.className == 'borrar-tweet') {

        e.target.parentElement.remove();
        alert('Tweet Eliminado');
    }
}