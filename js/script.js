// Navbar sticky scroll
$(function () {
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 275) {
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active');
        }
    });
});

// Page sroll
$('.page-scroll').on('click', function () {

    var tujuan = $(this).attr('href');

    var elemenTujuan = $(tujuan);

    $('html,body').animate({
        scrollTop: elemenTujuan.offset().top - 99
    }, 1000)

});

// Scroll to top button
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    // scroll body to 0px on click
    $('#back-to-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 1000);
        return false;
    });
});

// Portfolio
$(window).scroll(function () {

    var wScroll = $(this).scrollTop();

    if (wScroll > $('.popular').offset().top - 300) {
        $('.img-popular').each(function (i) {
            setTimeout(function () {
                $('.img-popular').eq(i).addClass('appear');
            }, 300 * (i + 1));
        });
    } else {
        $('.img-popular').each(function (i) {
            setTimeout(function () {
                $('.img-popular').eq(i).removeClass('appear');
            }, 300 * (i + 1));
        });
    }
});