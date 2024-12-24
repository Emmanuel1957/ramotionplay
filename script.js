// Seleccionar el botón
const backButton = document.querySelector('button');

// Añadir el evento de clic
backButton.addEventListener('click', () => {
    // Retroceder una página en el historial del navegador
    window.history.back();
});
