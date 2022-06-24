$(function () {

    $('.store__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        variableWidth: true
    });


    $('.about__inner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        autoplay: true,
        arrows: true,
        infinite: true,
        fade: true,
        prevArrow:'.slick__prev',
        nextArrow:'.slick__next'
    });


    $('.menu_btn').on('click', function () {
        $('.menu_btn').toggleClass('menu_btn--active');
        $('.menu__list').toggleClass('menu__list--active');
    });

    $('.header_menu-link').on('click', function () {
        $('.menu_btn').removeClass('menu_btn--active');
        $('.menu__list').removeClass('menu_list--active');
    });

    var mixer = mixitup('.gallery_inner', {
        load: {
            filter: '.all'
        }
    });

});