
/* AUTOSCROLL */

$(window).on("scroll", function () {
    if ($(window).scrollTop() > 50) {
        $('.menu').addClass('bgc'),
            $('nav li').addClass('bgcNav');
    } else {
        $('.menu').removeClass('bgc'),
            $('nav li').removeClass('bgcNav');
    }
})
$("nav li").on('click', function () {
    const goTo = "." + $(this).attr('id');
    console.log(goTo);
    $('body, html').animate({
        scrollTop: $(goTo).offset().top - $('.menu').outerHeight()
    }, 500)
})


function menu() {

    const scrollValue = $(window).scrollTop();
    const about = $('.about-us').offset().top - $('.menu').outerHeight() - (1);
    const serv = $('.our-services').offset().top - $('.menu').outerHeight() - (1);
    const gallery = $('.Gallery').offset().top - $('.menu').outerHeight() - (1);
    const blog = $('.blog').offset().top - $('.menu').outerHeight() - (1);
    const contact = $('.contact').offset().top - $('.menu').outerHeight() - (1);

    if (scrollValue < about) {
        $('nav li a').not('#home').removeClass('border');
        $('.hom').addClass('border');
    } else if (scrollValue < serv) {
        $('nav li a').not('#about').removeClass('border');
        $('.abo').addClass('border');
    } else if (scrollValue < gallery) {
        $('nav li a').not('#serv').removeClass('border');
        $('.ser').addClass('border');
    } else if (scrollValue < blog) {
        $('nav li a').not('#gallery').removeClass('border');
        $('.gal').addClass('border');
    } else if (scrollValue < contact) {
        $('nav li a').not('#blog').removeClass('border');
        $('.blo').addClass('border');
    } else {
        $('nav li a').not('#contact').removeClass('border');
        $('.con').addClass('border');
    }
}
$(window).on('scroll', _.debounce((menu), 80))


/* BURGER MENU */
const burger = document.querySelector('.burger');
const nav = document.querySelector('nav');
burger.addEventListener('click', function () {
    burger.classList.toggle('active');
    nav.classList.toggle('active');
})


/* OUR SERVICES BUTTONS */
const boxOne = document.querySelector('.boxOne');
const boxTwo = document.querySelector('.boxTwo');
const boxThree = document.querySelector('.boxThree');
const boxFour = document.querySelector('.boxFour');

boxOne.addEventListener('click', function () {
    const wrapOne = document.querySelector('.wrapOne')
    wrapOne.classList.toggle('wrapOne-active');
})
boxTwo.addEventListener('click', function () {
    const wrapTwo = document.querySelector('.wrapTwo')
    wrapTwo.classList.toggle('wrapTwo-active');
})
boxThree.addEventListener('click', function () {
    const wrapThree = document.querySelector('.wrapThree')
    wrapThree.classList.toggle('wrapThree-active');
})
boxFour.addEventListener('click', function () {
    const wrapFour = document.querySelector('.wrapFour')
    wrapFour.classList.toggle('wrapFour-active');
})

/* GALLERY */

$(".view-gallery").on("click", function () {
    $(".showMore").slideToggle("active");
    $(".more").toggleClass("showButton");
    $(".less").toggleClass("showButton");
})


/* BLOG */
$(".btn-calendar").on("click", function () {
    $(".view-calendars").slideToggle('active');
    $(".less2").toggleClass("hide");
    $(".more2").toggleClass("hide");
})