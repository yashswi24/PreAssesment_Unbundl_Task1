$('.owl-carousel').owlCarousel({
    loop: true,
    items: 1,
    margin: 40,
    nav: true,
    autoplay: true,
    autoplaySpeed: 1500,
    autoplayTimeout: 2000,
    stagePadding: 20,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        },
        1400: {
            items: 1
        }
    }
})