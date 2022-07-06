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
    let burger = document.querySelector('.header-mob__burger');
    let menu = document.querySelector('.header-dekstop');
    let logo = document.querySelector('.header-mob__left');
    let body = document.querySelector('body')
    burger.addEventListener('click', function() {
        burger.classList.toggle('header-mob__burger--active');
        menu.classList.toggle('header-dekstop--active');
        logo.classList.toggle('header-mob__left--active');
        body.classList.toggle('fixed-body');
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


    // Map
    setTimeout(() => {
        $('.map__left').append(` <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d35884.81138952439!2d37.69566637802611!3d55.79669832643764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b53507c7540001%3A0x18a314cf81ddaac1!2z0JrRgNCw0YHQvdC-0LHQvtCz0LDRgtGL0YDRgdC60LDRjyDRg9C7LiwgODkg0YHRgtGALCDQnNC-0YHQutCy0LAsIDEwNzA2MQ!5e0!3m2!1sru!2sru!4v1657119343032!5m2!1sru!2sru"
        style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
    </iframe>`)
    }, 2000);

    setTimeout(() => {
        $('.map__center').append(` <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d35884.81138952439!2d37.69566637802611!3d55.79669832643764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b53507c7540001%3A0x18a314cf81ddaac1!2z0JrRgNCw0YHQvdC-0LHQvtCz0LDRgtGL0YDRgdC60LDRjyDRg9C7LiwgODkg0YHRgtGALCDQnNC-0YHQutCy0LAsIDEwNzA2MQ!5e0!3m2!1sru!2sru!4v1657119343032!5m2!1sru!2sru"
        style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
    </iframe>`)
    }, 2500);

    setTimeout(() => {
        $('.map__right').append(` <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d35884.81138952439!2d37.69566637802611!3d55.79669832643764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b53507c7540001%3A0x18a314cf81ddaac1!2z0JrRgNCw0YHQvdC-0LHQvtCz0LDRgtGL0YDRgdC60LDRjyDRg9C7LiwgODkg0YHRgtGALCDQnNC-0YHQutCy0LAsIDEwNzA2MQ!5e0!3m2!1sru!2sru!4v1657119343032!5m2!1sru!2sru"
        style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
    </iframe>`)
    }, 3000);



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