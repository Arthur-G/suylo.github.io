$(document).ready(function() {

    setTimeout(function(){
        $('body').addClass('loaded');
    }, 1750);

    window.sr = ScrollReveal({ reset: false });


    sr.reveal('.foo', {
        duration: 1500,
    });

    sr.reveal('.foo-top', {
        origin: 'top',
        distance: '2em',
        duration: 1500
    });

    sr.reveal('.foo-left', {
        origin: 'right',
        duration: 1500
    });

    sr.reveal('.foo-right', {
        origin: 'right',
        distance: '25px',
        duration: 1500
    });

    sr.reveal('.foo-bottom', {
        origin: 'bottom',
        distance: '50em',
        duration: 1500
    });

    sr.reveal('.foo-bottom2', {
        origin: 'bottom',
        distance: '30em',
        duration: 1000
    });

    sr.reveal('.foo-bottom3', {
        origin: 'bottom',
        distance: '30em',
        duration: 1500
    });

    sr.reveal('.foo-bottom4', {
        origin: 'bottom',
        distance: '30em',
        duration: 2000
    });
    sr.reveal('.foo-top2', {
        origin: 'top',
        distance: '5em',
        duration: 1000
    });

    sr.reveal('.foo-top3', {
        origin: 'top',
        distance: '5em',
        duration: 1500
    });

    sr.reveal('.foo-top4', {
        origin: 'top',
        distance: '5em',
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
