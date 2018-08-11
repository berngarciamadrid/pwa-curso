'use strict'

// Service Worker
if ('serviceWorker' in navigator) {
    console.log('Puedes usar los serviceWorker en tu navegador');

    // Registramos un serviceWorker
    navigator.serviceWorker.register('./sw.js')
        .then(res => {
            console.log('serviceWorker cargado correctamente')
        })
        .catch(err => console.log('serviceWorker no se ha cargado'));
} else {
    console.log('No puedes usar los serviceWorker en tu navegador');
}



// Scroll suavizado
$(document).ready(function() {


    $('#menu a').click(function(e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        })

        return false;
    });
})