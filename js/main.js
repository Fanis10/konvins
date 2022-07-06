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
    var swiper = new Swiper('.video-work .swiper', {
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: 'true',
        navigation: {
            nextEl: '.video-work .swiper-button-next',
            prevEl: '.video-work .swiper-button-prev',
        },
        pagination: {
            el: ".video-work .swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },

            540: {
                slidesPerView: 2,
                centeredSlides: false

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
    // selector of all videos on the page
    const videos = document.querySelectorAll('.video');

    // generate video url
    let generateUrl = function(id) {
        let query = '?rel=0&showinfo=0&autoplay=1';

        return 'https://www.youtube.com/embed/' + id + query;
    };

    // creating iframe
    let createIframe = function(id) {
        let iframe = document.createElement('iframe');

        iframe.setAttribute('allowfullscreen', '');
        iframe.setAttribute('allow', 'autoplay; encrypted-media');
        iframe.setAttribute('src', generateUrl(id));

        return iframe;
    };

    // main code
    videos.forEach((el) => {
        let videoHref = el.getAttribute('data-video');

        let deletedLength = 'https://youtu.be/'.length;

        let videoId = videoHref.substring(deletedLength, videoHref.length);

        let img = el.querySelector('img');
        let youtubeImgSrc = 'https://i.ytimg.com/vi/' + videoId + '/maxresdefault.jpg';
        img.setAttribute('src', youtubeImgSrc);

        el.addEventListener('click', (e) => {
            e.preventDefault();

            let iframe = createIframe(videoId);
            el.querySelector('img').remove();
            el.appendChild(iframe);
            el.querySelector('button').remove();
        });
    });

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