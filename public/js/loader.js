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
        distance: '2em',
        duration: 1500
    });

    sr.reveal('.aa_foo-left', {
        origin: 'left',
        distance: '20em',
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
