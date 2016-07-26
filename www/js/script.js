$(function () {

    /* ボタンhover時 main pageを表示*/
    $('a').hover(function () {
        $('#main').load($(this).attr('href'))
    });

    /* メニュー切り替え */
    $('#more').on('click', function () {
        $('div.more_menu:not(:animated)').slideToggle();
        $('div.main_menu:not(:animated)').slideToggle();
    });
});
