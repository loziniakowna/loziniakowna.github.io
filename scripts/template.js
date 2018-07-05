(function($) {


   $(document).ready(function() {

        var menuClosed = $(".fa-bars"),
            menuOpened = $(".fa-times"),
            menu = $(".menu"),
            closed = menu.is('.fa-bars'),
            nav = $(".nav");

        // if (closed) {
        //     nav.addClass('nav--hidden');
        // }

        menuClosed.on("click", function() {
            nav.addClass('nav--visible');
            menuClosed.addClass('menu--hidden');
            menuOpened.removeClass('menu--hidden');
        });

        menuOpened.on("click", function() {
            nav.removeClass('nav--visible');
            menuOpened.addClass('menu--hidden');
            menuClosed.removeClass('menu--hidden');

        });
    });

})(jQuery);
