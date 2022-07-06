function sliderMainone() {
    var swiper = new Swiper('.equipment .swiper', {
        slidesPerView: 1,
        centeredSlides: 'true',
        navigation: {
            nextEl: '.equipment .swiper-button-next',
            prevEl: '.equipment .swiper-button-prev',
        },
        pagination: {
            el: ".equipment .swiper-pagination",
            clickable: true,
        },
    })
}

function sliderMainTwo() {
    var swiper = new Swiper('.video .swiper', {
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: 'true',
        navigation: {
            nextEl: '.video .swiper-button-next',
            prevEl: '.video .swiper-button-prev',
        },
        pagination: {
            el: ".video .swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },

            992: {
                slidesPerView: 3,
                centeredSlides: false

            },

        }
    })
}



$(document).ready(function() {

    sliderMainone();
    sliderMainTwo();

    // Menu
    $(".header-mob__burger").click(function() {
        $(this).toggleClass("header-mob__burger--active")
        $(".header-dekstop").toggleClass("header-dekstop--active")
        $("body").toggleClass("fixed-body")

    })

    $(".header-bottom__item-show").click(function() {
        $(this).toggleClass("header-bottom__item-show--active");
        $(this).siblings(".header-bottom__item-hidden").toggleClass("header-bottom__item-hidden--active");
    })

    $(".header-bottom__item").hover(onIn, onOut);
    $(".header-bottom__item-show").click(function() {
        if (window.innerWidth < 1150) {
            $(this).siblings(".header-bottom__item-hidden").slideToggle()
        }
    })

    // Up
    $(function() {
        $('.footer-top__up').click(function() {
            $('html, body').animate({ scrollTop: 0 }, 500);
            return false;
        })
    })

    //Video 



})

function onIn() {
    if (window.innerWidth > 1150) {
        let el = $(this)
        setTimeout(function() {
            if (el.is(':hover')) {
                el.children(".header-bottom__item-hidden").addClass("header-bottom__item-hidden--active")
            }

        }, 200);
    }
}

function onOut() {
    if (window.innerWidth > 1150) {
        $(this).children(".header-bottom__item-hidden").removeClass("header-bottom__item-hidden--active")
    }
}