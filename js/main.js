$('.portfolio_slider').owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    margin: 20,
    autoplay: true,
    autoplayTimeout: 2500,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});


$('.client_Slider').owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    margin: 20,
    autoplay: true,
    autoplayTimeout: 2500,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
});


$(document).ready(function () {
    $(".menu_hamburger").click(function () {
        $(".openMenu").toggleClass("active");
    });
});