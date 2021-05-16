$('.l_subtitle_1').click(function () {

    $('.l_type_detail').show();
    $('.l_main_bottom').show();

    $('.l_main_right_2').hide();
    $('.l_main_right2_bottom').hide();
    $('.l_yellow_line').css('transform', 'translateX(-4px)translateY(-15px)').css('transition', '.5s').css('width', '100px');
    $('.l_yellow_line_mobile').css('transform', 'translateX(60px)translateY(-23px)').css('transition', '.5s').css('width', '80px');

});
$('.l_subtitle_2').click(function () {
    $('.l_main_right_2').show();
    $('.l_main_right2_bottom').show();

    $('.l_type_detail').hide();
    $('.l_main_bottom').hide();

    $('.l_yellow_line').css('transform', 'translateX(240px) translateY(-15px)').css('transition', '.5s').css('width', '130px');

    $('.l_yellow_line_mobile').css('transform', 'translateX(185px) translateY(-23px)').css('transition', '.5s').css('width', '100px');


});




$(window).scroll(function () {
    // console.log($(this).scrollTop());
})

var mainLeft = $('.l_main_left_mobile')





$(window).scroll(function () {
    if ($(this).scrollTop() > 0 && $(this).scrollTop() < 2000) {
        mainLeft.fadeIn()



    } else {
        mainLeft.fadeOut()


    }



});

let navTop = $('.l_main_left').offset().top;

$('.l_immediately').click(function () {
    $("html,body").animate({ scrollTop: navTop - 400 }, 500);
});

let navTop2 = $('.l_money_oneday').offset().top;


$('.l_immediately2').click(function () {
    $("html,body").animate({ scrollTop: navTop2 - 400 }, 500);
});
