// header sticky
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
            $('header').addClass('sticky');
        } else {
            $('header').removeClass('sticky');
        }
    });

    // button Up
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

        $('.upbtn').on('click', function() {
            $('html, body').animate({
                scrollTop: 0
            }, 500);
            return false;
        });
    });
    // add dynamically html
    function windowSize() {
        if ($(window).width() <= '601') {
            $('.menu__box').append('<li><div class="menu-phone visual"><a href="tel:+375115555555" target="_blank" title="Звоните!">+375 11 555-55-55</a><a href="tel:+375115555555" target="_blank" title="Звоните!">+375 11 555-55-55</a></div></li>');
        } else {}
    }
    $(window).load(windowSize);

    // accordeon
    $(document).ready(function() {
        $('.accordeon').find('dd:last').show();
    });

    $('.accordeon dd').hide().prev().click(function() {
        $(this).parents('.accordeon').find('dd').not(this).slideUp().prev().removeClass('active');
        $(this).next().not(':visible').slideDown().prev().addClass('active');
    });

    //modal form
    $('.menu-advice-btn').click(function() {
        $('.contact-form').show();
        $('.modal').show();
    });
    $('.close').click(function() {
        $('.contact-form').hide();
        $('.modal').hide();
        $('.modal-testimonial').hide();

    });
    $('.modal form').submit(function() {
        var name = $(this).find('input[name="name"]').val();
        var tel = $(this).find('input[name="tel"]').val();
        $.ajax({
            url: "",
            type: "post",
            dataType: "json",
            data: {
                "name": name,
                "tel": tel
            },
            success: function(data) {}
        });
        $('.contact-form').hide();
        setTimeout(function() {
            $('.modal-testimonial').show();
        }, 1000);
        return false;
    });
});