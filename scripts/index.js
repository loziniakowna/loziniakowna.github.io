(function($) {


   $(document).ready(function() {

        var boxDesc = $(".box__description"),
            boxIcon = $(".box__icon"),
            box = $(".box");

        boxDesc.on("click", function() {
            var that = $(this),
                text = that.children(".box__text"),
                title = that.children(".box__title"),
                arrow = title.children('.box__angle'),
                circle = that.prev(".circle__item"),
                icon = that.prev().children(".box__icon");

            text.toggleClass('box__text--visible');
            title.toggleClass('box__title--selected');

            icon.toggleClass('box__icon--visible');

            var boxCircle = box.children('.circle__item');
            var circleIndex = boxCircle.index();
            var circleItem = that.prev(".circle__item");
            var circleId = that.prev().attr("id");

            console.log(boxCircle);
            console.log(circleIndex);
            console.log(circle);
            console.log(circleId);
            console.log(icon);


            if (circle.hasClass('.circle__item--selected')) {
                    circle.css('visibility', 'visible');
                    arrow.css('display', 'inline');
                    circle.removeClass('.circle__item--selected');             

            } else {
                circle.css('visibility', 'hidden');
                arrow.css('display', 'none');
                circle.addClass('.circle__item--selected');
            }
            


        });

    });

})(jQuery);
