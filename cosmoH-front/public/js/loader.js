$(window).on('load', function(){

    function removePreloader() {
        var preLoader = $('.fidget');
        preLoader.fadeOut();
    }
    setTimeout(removePreloader, 1550);
});