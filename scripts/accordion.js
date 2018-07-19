(function($) {

    var collapseAll = true,
        showProducts = document.getElementById("showProducts").getAttribute("data-show"),
        hideProducts = document.getElementById("showProducts").getAttribute("data-hide");

   $(document).ready(function() {

        var headers = $(".accordion__header"),
            categories = $(".accordion__category"),
            arrows = categories.children('.accordion__detail').children('.fas'),
            descriptions = categories.children('.accordion__detail').children('.accordion__link');
            items = $(".accordion__item"),
            products = $(".accordion__product");

        items.hide();

        function collapseCategories(){
            arrows.removeClass('fa-angle-up');
            arrows.addClass('fa-angle-down');
            descriptions.text(showProducts);
            categories.removeClass("accordion__category--active");
        };

        headers.on("click", function() {

            if(collapseAll) {
                headers.removeClass("accordion__header--active");
                collapseCategories();
                items.stop().slideUp(300);
                products.stop().slideUp(300);   //stop() - Stop the currently-running animation on the matched elements and then slideUp
            };

            var that = $(this),
                item = that.next(".accordion__item"),
                isVisible = item.is(":visible");

            that.toggleClass("accordion__header--active", !isVisible);

            if(!isVisible) {
                item.stop().slideDown(300);
            } else {
                item.stop().slideUp(300);
            };

        });

        categories.on('click', function() {

            var that = $(this),
                product = that.next(".accordion__product"),
                products = $(".accordion__product"),
                isVisible = product.is(":visible"),
                arrow = that.children('.accordion__detail').children('.fas'),      
                description = that.children('.accordion__detail').children('.accordion__link');

            if(collapseAll) {  
                collapseCategories();
                products.stop().slideUp(300);
            };

            that.toggleClass("accordion__category--active", !isVisible);

            if(!isVisible) {
                product.stop().slideDown(300);
                arrow.removeClass('fa-angle-down');
                arrow.addClass('fa-angle-up');
                description.text(hideProducts);
            } else {
                product.stop().slideUp(300);
                arrow.removeClass('fa-angle-up');
                arrow.addClass('fa-angle-down');
                description.text(showProducts);
            };
        });

    });

})(jQuery);


















