$(document).ready(function () {

    $("a").hover(function () {
        e.preventDefault();
    });

    $(".project").hover(function () {
        $(this).mouseout('hide');
        $('.article-image').eq($(this).index()).toggleClass('hide');
    });

    $(".close").click(function () {
        $('.outside').toggleClass('in');
        $(this).toggleClass('is-showing');
    });

    $(".hidden-content").hide();
    $(".show_hide").click(function () {
        var txt = $(".hidden-content").is(':visible') ? 'Read More' : 'Read Less';
        $(".show_hide").text(txt);
        $(".hidden-content").slideToggle();
    });

    $("body").awesomeCursor('circle', {
        color: '#E85133',
        hotspot: 'center',
        size: 70
    });

    $('textarea').each(function () {
        this.setAttribute('style', 'height:' + (this.scrollHeight) + 'px;overflow-y:hidden;');
    }).on('input', function () {
        this.style.height = 'auto';
        this.style.height = (this.scrollHeight) + 'px';
    });

});