$(document).ready(function () {

    $("body").awesomeCursor('circle', {
        color: '#E85133',
        hotspot: 'center',
        size: 55
    });

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

$('textarea').each(function () {
    this.setAttribute('style', 'height:' + (this.scrollHeight) + 'px;overflow-y:hidden;');
}).on('input', function () {
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + 'px';
});

$(".project").hover(function () {
    $('.article-image').eq($(this).index()).toggleClass('hide');
});