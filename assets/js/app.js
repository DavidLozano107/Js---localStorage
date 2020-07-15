//Variables
const listaTweets = document.getElementById('lista-tweets');

//Event-Listener

eventListener();

function eventListener() {
    //cuando se envia el formulario
    document.querySelector('#formulario').addEventListener('submit', agregarTweet)
}


//Funciones


//Añadir tweet del formulario
function agregarTweet(e) {
    e.preventDefault();
    //Leer el valor del textArea
    const tweet = document.getElementById('tweet').value;
    //Crear el btn de Borrar
    const btnBorrar = document.createElement('a');
    btnBorrar.classList = 'borrar-tweet';
    btnBorrar.innerText = 'X';


    //crear elemento y añadirle el contenido a la lista
    const li = document.createElement('li');
    li.innerText = tweet;
    //añade el brn de borrar al tweet
    li.appendChild(btnBorrar);
    //añade el btn a la lista
    listaTweets.appendChild(li);



}