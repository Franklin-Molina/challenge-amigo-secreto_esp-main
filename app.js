// Nnombres
let amigos = [];

function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const listaAmigos = document.getElementById('listaAmigos');
    const nombre = inputAmigo.value.trim();

//Validación 
    if (nombre === '') {
        alert('Por favor, ingrese un nombre');
        return;
    }

//Convertir a mayúsculas para la validación
    const nombreMayusculas = nombre.toUpperCase();
    
 //Verificar si el nombre ya existe (sin importar mayúsculas/minúsculas)
    if (amigos.some(amigo => amigo.toUpperCase() === nombreMayusculas)) {
        alert('Este nombre ya está en la lista');
        return;
    }

 //Agregar el nombre al array
    amigos.push(nombre);

 //Crear y agregar el elemento a la lista visual
    const li = document.createElement('li');
    li.textContent = nombre;
    li.className = 'name-item';
    
 //Agregar botón de eliminar
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '×';
    deleteButton.className = 'delete-button';
    deleteButton.onclick = () => {
        listaAmigos.removeChild(li);
        amigos = amigos.filter(a => a !== nombre);
    };

    li.appendChild(deleteButton);
    listaAmigos.appendChild(li);
//Limpiar el input
    inputAmigo.value = '';
    inputAmigo.focus();
}

//Función para sortear un amigo
function sortearAmigo() {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; // Limpiar resultados anteriores

    if (amigos.length < 2) {
        alert('Debe haber al menos 2 amigos en la lista para realizar el sorteo');
        return;
    }

//Seleccionar azar
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSeleccionado = amigos[indiceAleatorio];

//Crear y mostrar el resultado
    const li = document.createElement('li');
    li.className = 'result-item';
    li.textContent = `¡ El amigo secreto es:${amigoSeleccionado} `;
    resultado.appendChild(li);
 
}

//Agregar amigos con la tecla Enter
document.getElementById('amigo').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        agregarAmigo();
    }
});