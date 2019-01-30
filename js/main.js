$(document).ready(function(){
    $('.what_we_do .owl-carousel').owlCarousel({
    loop:true,
    margin:5,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        300:{
            items:2
        },
        500:{
            items:3
        },
        1000:{
            items:4
        }
    }
})
    
     $('.serst .owl-carousel').owlCarousel({
    loop:true,
    margin:5,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        800:{
            items:3
        },
        1100:{
            items:4
        }
    }
})
    
    $('.errors .items .item .owl-carousel').owlCarousel({
    loop:true,
    margin:5,
    nav:true,
    responsive:{
        0:{
            items:2
        },
        400:{
            items:3
        },
        1000:{
            items:3
        }
    }
})
    
    $('.faq .item a').click(function(){
        if ($(this).hasClass('active') == true) {
            $(this).parent().find('p').toggle( "slow", function() {}); 
            $(this).removeClass('active');
        } else {
            $(this).parent().find('p').toggle( "slow", function() {});
            $(this).addClass('active');
        }
        return false;
    });
    
    $('.pop_up_bg').click(function(){
        $(this).removeClass('active');
        $('.pop_up').removeClass('active');
    })
    
    $('header .consultation_form .line a').click(function(){
        var form_phone = $(this).parent().find('input[name="phone"]').val();
        if (form_phone == '') {
            $(this).parent().find('input[name="phone"]').addClass('error');
        } else {
            $(this).parent().find('input[name="phone"]').removeClass('error');
            $.ajax({
            url: "/form.php",
            type: "post", 
            dataType: "json",
            data: {
                "form_phone": form_phone
            },
            success: function (data) {
                $('.pop_up_bg').addClass('active');
                $('.pop_up').addClass('active');
            }
            });
            $(this).parent().find('input[name="phone"]').val('');
        }
        return false; 
    });
    
    $('.what_we_do .item .right .item_form .form_line a').click(function(){
        var form_phone = $(this).parent().find('input[name="phone"]').val();
        if (form_phone == '') {
            $(this).parent().find('input[name="phone"]').addClass('error');
        } else {
            $(this).parent().find('input[name="phone"]').removeClass('error');
            $.ajax({
            url: "/form.php",
            type: "post", 
            dataType: "json",
            data: {
                "form_phone": form_phone
            },
            success: function (data) {
                $('.pop_up_bg').addClass('active');
                $('.pop_up').addClass('active');
            }
            });
            $(this).parent().find('input[name="phone"]').val('');
        }
        return false; 
    });
    
    $('.raschet .line button').click(function(){
        var form_phone = $(this).parent().find('input[name="phone"]').val();
        if (form_phone == '') {
            $(this).parent().find('input[name="phone"]').addClass('error');
        } else {
            $(this).parent().find('input[name="phone"]').removeClass('error');
            $.ajax({
            url: "/form.php",
            type: "post", 
            dataType: "json",
            data: {
                "form_phone": form_phone
            },
            success: function (data) {
                $('.pop_up_bg').addClass('active');
                $('.pop_up').addClass('active');
            }
            });
            $(this).parent().find('input[name="phone"]').val('');
        }
        return false; 
    });
    
    $('footer .contacts .form_bot button').click(function(){
        var form_phone = $(this).parent().find('input[name="phone"]').val();
        if (form_phone == '') {
            $(this).parent().find('input[name="phone"]').addClass('error');
        } else {
            $(this).parent().find('input[name="phone"]').removeClass('error');
            $.ajax({
            url: "/form.php",
            type: "post", 
            dataType: "json",
            data: {
                "form_phone": form_phone
            },
            success: function (data) {
                $('.pop_up_bg').addClass('active');
                $('.pop_up').addClass('active');
            }
            });
            $(this).parent().find('input[name="phone"]').val('');
        }
        return false; 
    });
    
    $('.document .right .item_form .item_form_cont button').click(function(){
        var form_phone = $(this).parent().find('input[name="phone"]').val();
        var form_email = $(this).parent().find('input[name="email"]').val();
        if (form_phone == '' || form_email == '') {
            if (form_phone == '') {
            $(this).parent().find('input[name="phone"]').addClass('error');
            }
            if (form_email == '') {
            $(this).parent().find('input[name="email"]').addClass('error');
            }
            if (form_phone != '') {
            $(this).parent().find('input[name="phone"]').removeClass('error');
            }
            if (form_email != '') {
            $(this).parent().find('input[name="email"]').removeClass('error');
            }
        } else {
            $(this).parent().find('input[name="phone"]').removeClass('error');
            $(this).parent().find('input[name="email"]').removeClass('error');
            $.ajax({
            url: "/form_2.php",
            type: "post", 
            dataType: "json",
            data: {
                "form_phone": form_phone,
                "form_email": form_email
            },
            success: function (data) {
                $('.pop_up_bg').addClass('active');
                $('.pop_up').addClass('active');
            }
            });
            $(this).parent().find('input[name="phone"]').val('');
            $(this).parent().find('input[name="email"]').val('');
        }
        return false; 
    });
    
    $('.know_price .item .right .item_form .item_form_cont button').click(function(){
        var form_phone = $(this).parent().find('input[name="phone"]').val();
        var form_email = $(this).parent().find('input[name="email"]').val();
        if (form_phone == '' || form_email == '') {
            if (form_phone == '') {
            $(this).parent().find('input[name="phone"]').addClass('error');
            }
            if (form_email == '') {
            $(this).parent().find('input[name="email"]').addClass('error');
            }
            if (form_phone != '') {
            $(this).parent().find('input[name="phone"]').removeClass('error');
            }
            if (form_email != '') {
            $(this).parent().find('input[name="email"]').removeClass('error');
            }
        } else {
            $(this).parent().find('input[name="phone"]').removeClass('error');
            $(this).parent().find('input[name="email"]').removeClass('error');
            $.ajax({
            url: "/form_1.php",
            type: "post", 
            dataType: "json",
            data: {
                "form_phone": form_phone,
                "form_email": form_email
            },
            success: function (data) {
                $('.pop_up_bg').addClass('active');
                $('.pop_up').addClass('active');
            }
            });
            $(this).parent().find('input[name="phone"]').val('');
            $(this).parent().find('input[name="email"]').val('');
        }
        return false; 
    });
    
    $('.what_we_do .item .left .slider a').click(function(){
        var link = $(this).attr('href');
        var link1 = $(this).find('img').attr('src');
        $(this).parent().parent().parent().parent().parent().find('.photo').attr('href', link);
        $(this).parent().parent().parent().parent().parent().find('.photo img').attr('src', link1);
        return false;
    });
    
    $("input[type=tel]").mask("(999) 999-99-99");



    $('.pop__up-developer button').click(function(){
        var form_phone = $(this).parent().find('input').val();
        var form_message = $(this).parent().find('textarea').val();
        if (form_phone == '' || form_message == '') {
            if (form_phone == '') {
            $(this).parent().find('input').addClass('error');
            }
            if (form_message == '') {
            $(this).parent().find('textarea').addClass('error');
            }
            if (form_phone != '') {
            $(this).parent().find('input').removeClass('error');
            }
            if (form_message != '') {
            $(this).parent().find('textarea').removeClass('error');
            }
        } else {
            $(this).parent().find('input').removeClass('error');
            $(this).parent().find('textarea').removeClass('error');
            $.ajax({
            url: "/form_3.php",
            type: "post", 
            dataType: "json",
            data: {
                "form_phone": form_phone,
                "form_message": form_message
            },
            success: function (data) {
                $('.pop__up-bacg').removeClass('active');
                $('.pop__up-developer').removeClass('active');
                $('.pop_up_bg').addClass('active');
                $('.pop_up').addClass('active');
            }
            });
            $(this).parent().find('input').val('');
            $(this).parent().find('textarea').val('');
        }
        return false; 
    });

     $('.bot_text').click(function(){
        $('.pop__up-bacg').addClass('active');
        $('.pop__up-developer').addClass('active');
     });

    $('.pop__up-bacg').click(function(){
        $(this).removeClass('active');
        $(".pop__up-developer").removeClass('active');
    })
    $('.pop__up-developer i').click(function(){
        $('.pop__up-bacg').removeClass('active');
        $(".pop__up-developer").removeClass('active');
    })

})

$(document).ready(function(){
    $('.after_text').readmore({
      speed: 75,
      collapsedHeight: 40,
      moreLink: '<a href="#" class="readmore">подробнее</a>',
      lessLink: '<a href="#" class="readmore">закрыть</a>'
    });

    $('[data-fancybox]').fancybox({
        loop: true,
        infobar: false,
        buttons: [
            "zoom",
            //"share",
            // "slideShow",
            //"fullScreen",
            //"download",
            // "thumbs",
            "close"
        ],
    });

})