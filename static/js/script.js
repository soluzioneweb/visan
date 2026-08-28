// Espera a que todo el contenido del DOM (HTML) se cargue antes de ejecutar el script.
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Selecciona todos los botones de pregunta del FAQ
    const faqQuestions = document.querySelectorAll('.faq-question');

    // 2. Itera sobre cada botón encontrado para añadirles un 'listener'
    faqQuestions.forEach(button => {
        button.addEventListener('click', () => {
            
            // a. Encuentra el contenedor principal (el .faq-item) de esta pregunta
            const faqItem = button.closest('.faq-item');
            
            // b. Encuentra el div de la respuesta asociado a este botón
            const answer = faqItem.querySelector('.faq-answer');
            
            // c. Encuentra el icono asociado
            const icon = button.querySelector('.faq-icon');

            // d. Alterna la clase 'active' en el contenedor principal
            //    Esta clase es la que usaremos en CSS para mostrar u ocultar la respuesta
            faqItem.classList.toggle('active');
            
            // e. Cambia el icono de + a - (y viceversa)
            if (faqItem.classList.contains('active')) {
                icon.textContent = '-'; // Muestra el guion cuando está activo/abierto
            } else {
                icon.textContent = '+'; // Muestra el más cuando está inactivo/cerrado
            }
            
            // Opcional: Cierra otros items cuando uno se abre (comentar si quieres múltiples abiertos)
            // Esto mejora la experiencia móvil.
            faqQuestions.forEach(otherButton => {
                const otherItem = otherButton.closest('.faq-item');
                if (otherItem !== faqItem && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                    otherButton.querySelector('.faq-icon').textContent = '+';
                }
            });
        });
    });
    // 3. Funcionalidad para botones Leer más / Leer menos (Misión y Visión)
    const botonesLeerMas = document.querySelectorAll('.btn-leer-mas');

    botonesLeerMas.forEach(boton => {
        boton.addEventListener('click', () => {
            const tarjeta = boton.closest('.mv-card');
            const textoExtra = tarjeta.querySelector('.texto-extra');

            textoExtra.classList.toggle('mostrar');

            if (textoExtra.classList.contains('mostrar')) {
                boton.textContent = 'Leer menos';
            } else {
                boton.textContent = 'Leer más';
            }
        });
    });
});