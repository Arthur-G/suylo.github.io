$(document).ready(function() {

    setTimeout(function(){
        $('body').addClass('aa_loaded');
    }, 1750);

    window.sr = ScrollReveal({ reset: false });


    sr.reveal('.foo-2', {
        origin: 'left',
        distance: '20em',
        duration: 1500
    });

    sr.reveal('.foo-3', {
        origin: 'bottom',
        distance: '10em',
        duration: 1500
    });

    sr.reveal('.foo-4', {
        origin: 'left',
        distance: '50em',

        duration: 1500
    });

    sr.reveal('.foo-5', {
        duration: 1500
    });

});
