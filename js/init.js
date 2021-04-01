$(document).ready(function() {

    // detect transit support
    var transitFlag = true;
    if(!Modernizr.cssanimations) {
        transitFlag = false;
    }

    // animate elements
    $(".move").on("inview", function(event, isInView, visiblePartX, visiblePartY) {
        var el = $(this);
        (isInView) ?
            el.addClass("end") :
            el.removeClass("end");
    });

    // top menu on index page
    if($("#siteHeader").length) {
        $(window).on("scroll", function () {
            ($(window).scrollTop() > $("#screenAbout").offset().top) ?
                $("#topMenuWrapper").removeClass("hidden") :
                $("#topMenuWrapper").addClass("hidden");
        });
    }

    // mobile menu
    var mobMenu = $("#mobMenu");
    var btnMobMenu = $("#btnMobMenu");
    btnMobMenu.on("click", function() {
        if($(this).hasClass("opened")) {
            mobMenu.removeClass("opened");
            $(this).removeClass("opened");
        }
        else {
            mobMenu.addClass("opened");
            $(this).addClass("opened");
        }
    });
});