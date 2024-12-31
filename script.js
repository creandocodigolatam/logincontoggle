// Obtiene el contenedor con el id 'container' del documento HTML
const container = document.getElementById('container');

// Obtiene el botón de registro con el id 'register' del documento HTML
const registerBtn = document.getElementById('register');

// Obtiene el botón de inicio de sesión con el id 'login' del documento HTML
const loginBtn = document.getElementById('login');

// Añade un evento al botón de registro que se activa cuando se hace clic
registerBtn.addEventListener('click', () => {
    // Al hacer clic en el botón de registro, se agrega la clase 'active' al contenedor
    // Esta clase 'active' probablemente se utiliza para mostrar el formulario de registro
    container.classList.add("active");
});

// Añade un evento al botón de inicio de sesión que se activa cuando se hace clic
loginBtn.addEventListener('click', () => {
    // Al hacer clic en el botón de inicio de sesión, se elimina la clase 'active' del contenedor
    // Esto hace que el formulario de registro sea ocultado y se muestre el formulario de inicio de sesión
    container.classList.remove("active");
});
