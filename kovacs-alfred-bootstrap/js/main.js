$(document).ready(function () {
    $(window).on("scroll", function () {
        var wn = $(window).scrollTop();
        if (wn > 120) {
            $(".navbar").css("background", "rgba(255,255,255,1)");
            $(".navbar a, nav a").css("color", "rgba(0,0,0,1)");
        } else {
            $(".navbar").css("background", "rgba(0,0,0,0)");
            $(".navbar a, nav a").css("color", "rgba(255,255,255,1)");
        }
    });
});