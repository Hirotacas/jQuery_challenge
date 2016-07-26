$(function () {
    $('a').hover(function () {
        $('#main').load($(this).attr('href'))
    });
    $('#more').on('click', function () {
        $('div.more_menu').slideToggle();
        $('div.main_menu').slideToggle();
    });
});
