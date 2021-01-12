$(document).ready(function() {

    if(typeof(obSlider) == "object"){
        obSlider.init();
    }
    if(typeof(obTabs) == "object"){
        obTabs.init();
    }

    $('html,body').on("click", "a[href^='#']", function(e){
        var anchor = $(this);
        if ($(anchor.attr('href')).length > 0) {
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top
            }, 500);
            e.preventDefault();
        }
    });

});
