$(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
        $("header").addClass("sticky");
    } else {
        $("header").removeClass("sticky");
    }
});

$('body').append('<div class="upbtn"></div>');
$(window).scroll(function() {
    if ($(this).scrollTop() > 400) {
        $('.upbtn').css({
            transform: 'scale(.9)'
        });
    } else {
        $('.upbtn').css({
            transform: 'scale(0)'
        });
    }
});
$('.upbtn').on('click', function() {
    $('html, body').animate({
        scrollTop: 0
    }, 500);
    return false;
});

function windowSize() {
    if ($(window).width() <= '601') {
        $('.menu__box').append('<li><div class="menu-phone visual"><a href="tel:+375115555555" target="_blank" title="Звоните!">+375 11 555-55-55</a><a href="tel:+375115555555" target="_blank" title="Звоните!">+375 11 555-55-55</a></div></li>');
    } else {}
}
$(window).load(windowSize);

function windowSize2() {
    if ($(window).width() <= '426') {
        $('.visual').append('<li><button class="menu-advice-btn seeable">Консультация</button></li>');
    } else {}
}
$(window).load(windowSize2);

$(document).ready(function() {
    $(".accordeon").find("dd:last").show();
});

$(".accordeon dd").hide().prev().click(function() {
    $(this).parents(".accordeon").find("dd").not(this).slideUp().prev().removeClass("active");
    $(this).next().not(":visible").slideDown().prev().addClass("active");
});