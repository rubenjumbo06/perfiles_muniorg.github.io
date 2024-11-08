// Función para mostrar/ocultar contenido extra
function toggleContent() {
    const content = document.getElementById('extraContent');
    content.style.display = content.style.display === 'none' ? 'block' : 'none';
}

// Función para abrir el mapa en una nueva pestaña
function openMap() {
    window.open('https://www.google.com/maps', '_blank');
}