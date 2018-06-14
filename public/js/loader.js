$(document).ready(function() {

    setTimeout(function(){
        $('body').addClass('aa_loaded');
    }, 1750);

    window.sr = ScrollReveal({ reset: false });


    sr.reveal('.aa_foo-2', {
        origin: 'left',
        distance: '50em',
        duration: 1500
    });

    sr.reveal('.aa_foo-top', {
        origin: 'top',
        distance: '10em',
        duration: 1500
    });

    sr.reveal('.aa_foo-left', {
        origin: 'left',
        distance: '20em',
        duration: 1500
    });

    sr.reveal('.aa_foo-right', {
       origin: 'right',
        distance: '10em',
       duration: 1500
    });

    sr.reveal('.aa_foo-bottom', {
        origin: 'bottom',
        distance: '50em',
        duration: 1500
    });

});
