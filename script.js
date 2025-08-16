// Selección del formulario
const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // Evita recargar la página

    const nombre = document.getElementById('nombre').value;
    const monto = document.getElementById('monto').value;
    const telefono = document.getElementById('telefono').value;

    if(nombre && monto && telefono) {
        // Número de WhatsApp de destino (ejemplo: tu número)
        const numero = "573173726547"; // <-- Numero de whatsapp con prefijo del pais

        // Mensaje que se enviará
        const mensaje = `Hola, mi nombre es ${nombre}. Quiero un préstamo por $${monto}. Mi teléfono de contacto es ${telefono}.`;

        // Crear la URL para WhatsApp
        const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

        // Redirigir a WhatsApp
        window.open(url, "_blank");
        
        form.reset(); // Limpia el formulario
    } else {
        alert('Por favor, completa todos los campos antes de enviar.');
    }
});


