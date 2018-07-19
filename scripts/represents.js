(function($) {

   $(document).ready(function() {

        var boxes = $(".map__box"),
            markers = $(".map__marker"),
            popups = $(".map__popup");

        boxes.on("click", function(e) {

            var that = $(this),
                marker = that.children('.map__marker'),
                popup = that.children('.map__popup'),
                selected = marker.is('.map__marker--selected'),
                position = marker.position(),
                popupWidth = popup.width(),
                popupHeight = popup.height();

            popup.css({
                'top': position.top - popupHeight - 24 - 12 + "px",
                'left': position.left - (popupWidth/2) - 24 + 9 + "px"
            });

            popups.removeClass('map__popup--visible');
            markers.removeClass('map__marker--selected');
            
            marker.toggleClass('map__marker--selected', !selected);
            popup.toggleClass('map__popup--visible', !selected);
            
        });

    });

})(jQuery);












