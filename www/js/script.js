$(function () {

    /* ボタンhover時 main pageを表示*/

    $('a').hover(function () {
        $('#main').load($(this).attr('href'))
    }).click(function () {
        return false;
    });

    /* メニュー切り替え */

    $('#more').on('click', function () {
        $('div.more_menu:not(:animated)').slideToggle();
        $('div.main_menu:not(:animated)').slideToggle();
    });


    /* スクロールボタン */

    /* スクロールにしたがってボタンをフィードアウトする */

    $(window).scroll(function () {
        if ($(this).scrollTop() >= 100) {
            $('.scroll-up').fadeIn();
            $('.scroll-down').fadeOut();
        } else {
            $('.scroll-up').fadeOut();
            $('.scroll-down').fadeIn();
        }
    });

    /* ページトップにスクロールする */

    $('.scroll-up').click(function () {
        $('html, body:not(:animated)').animate({scrollTop: 0}, 1000);
    });

    /* ページ下部にスクロールする */

    $('.scroll-down').click(function () {
        $('html,body:not(:animated)').animate({scrollTop: $('html,body').height()}, 1000);
    });


});
