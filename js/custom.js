$(function () {
    // testimonial slides
    $('.counter').counterUp({
        delay: 5,
        time: 2000
    });

    // testimonial slides
    $(".testimonial-slides").slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            }
        ],
    });

});
