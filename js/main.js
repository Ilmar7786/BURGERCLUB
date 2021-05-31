$(document).ready(() => {

    $('.category__btn').click((e) => {
        let currentElem = $(e.target);
        $('#burgers').hide();
        $('#fries').hide();
        $('#sauces').hide();
        $('#drinks').hide();
        let id = currentElem.data('id');
        $('#' + id).show();

        $('.category__btn').removeClass('category__btn_active');
        $(currentElem).addClass('category__btn_active');

        $('#' + id + ' .products').slick('refresh');
        $('#' + id + ' .products-nav').slick('refresh');
    });

    $('.burgers-wrap .products').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.burgers-wrap .products-nav'
    });
    $('.burgers-wrap .products-nav').slick({
        slidesToShow: 7,
        slidesToScroll: 7,
        asNavFor: '.burgers-wrap .products',
        dots: false,
        centerMode: false,
        infinite: false,
        focusOnSelect: true
    });

    $('.fries-wrap .products').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.fries-wrap .products-nav'
    });
    $('.fries-wrap .products-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        asNavFor: '.fries-wrap .products',
        dots: false,
        centerMode: false,
        infinite: false,
        focusOnSelect: true
    });

    $('.sauces-wrap .products').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.sauces-wrap .products-nav'
    });
    $('.sauces-wrap .products-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: '.sauces-wrap .products',
        dots: false,
        centerMode: false,
        infinite: false,
        focusOnSelect: true
    });


    $('.drinks-wrap .products').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.drinks-wrap .products-nav'
    });
    $('.drinks-wrap .products-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        asNavFor: '.drinks-wrap .products',
        dots: false,
        centerMode: false,
        infinite: false,
        focusOnSelect: true
    });

    $('.reviews-wrap').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive:[
            {
                breakpoint: 620,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
        ]
    });

    $('.btn-booking').click(() => {
        $('.reservation-bg').css('display', 'flex');
    });

    $('#close-modal, #reservation-bg').click((e) => {
        if (e.target.id === 'reservation-bg' || e.target.id === 'close-modal') {
            $('#reservation-bg').hide();
        }
    });

    $('.reservation__btn > button').click(() => {
        let name = $('#name');
        let phone = $('#phone');
        let count = $('#count');
        let time = $('#time');


        if (name.val() && count.val() && phone.val() && time.val()) {
            $('.reservation__content').hide();
            $('.reservation__sent').show();
        } else {
            $('#reserve-err').show();
        }
    });

    $('#burger').click(() => {
        $('.header').toggleClass('menu-open');
    });

    $('.menu__item').click(() => {
        $('.header').removeClass('menu-open');
    });

    $('#burger').click(() => {
        $('.header .btn-wrap').toggleClass('main-btn');
    });

});
