$(() => {
    $('.js-tel').mask("+7 (999) 999-99-99");
});

$(() => {
    $(".js-button-anchor").click(function(e) {
        e.preventDefault();
        var aid = $(this).attr("data-to");
        $('html,body').animate({scrollTop: $(aid).offset().top},1300);


        if ($('.header').hasClass('active')) {
            $('.burger').removeClass('active');
            $('.header').removeClass('active');
            $('body').removeClass('is-loading');
        }
    });
    $('.js-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({scrollTop: $('.offer-wrapper').offset().top},1000)
    });

});


// header
$(() => {
    $('.js-toggle-menu').on('click', function () {
        $(this).toggleClass('active');
        $('.header').toggleClass('active')
        $('body').toggleClass('is-loading');
    });
});
// // containers
// $(() => {
//     $(document).on('click', function (e) {
//         var container = $('.header.active');
//
//         if (!container.is(e.target) && container.has(e.target).length === 0) {
//             container.removeClass('active');
//             $('.burger').removeClass('active')
//             $('body').removeClass('active');
//         }
//     });
// });

// fancybox
$(() => {
    const fancyOpts = {
        animationDuration: 600,
        animationEffect: 'slide-in-in',
        touch: false,
        scrolling: true,
    }

    $('[data-fancybox]').fancybox({
        ...fancyOpts
    });

    $('.js-close-fancybox').on('click', function () {
        $.fancybox.close();
    });
});


