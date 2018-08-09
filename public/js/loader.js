$(document).ready(function() {

    setTimeout(function(){
        $('body').addClass('aa_loaded');
    }, 1750);

    window.sr = ScrollReveal({ reset: false });


    sr.reveal('.aa_foo', {
        duration: 1500,
    });

    sr.reveal('.aa_foo-top', {
        origin: 'top',
        distance: '2em',
        duration: 1500
    });

    sr.reveal('.aa_foo-left', {
        origin: 'right',
        distance: '1px',
        duration: 1500
    });

    sr.reveal('.aa_foo-right', {
        origin: 'right',
        distance: '25px',
        duration: 1500
    });

    sr.reveal('.aa_foo-bottom', {
        origin: 'bottom',
        distance: '50em',
        duration: 1500
    });

    sr.reveal('.aa_foo-bottom2', {
        origin: 'bottom',
        distance: '50em',
        duration: 1000
    });

    sr.reveal('.aa_foo-bottom3', {
        origin: 'bottom',
        distance: '50em',
        duration: 1500
    });

    sr.reveal('.aa_foo-bottom4', {
        origin: 'bottom',
        distance: '50em',
        duration: 2000
    });

});

$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            $('#scroll').fadeIn();
        }else{
            $('#scroll').fadeOut();
        }
    });
    $('#scroll').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});
