$(document).ready(function () {

    $("body").awesomeCursor('circle', {
        color: '#E85133',
        hotspot: 'center',
        size: 55
    });

});

$(".story").hover(function () {
    $('.story-image').eq($(this).index()).toggleClass('hide');
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

$(".project").mouseenter(function () {
    $('.article-image').eq($(this).index()).removeClass('hide');
    $(this).mouseleave(function () {
        $('.article-image').addClass('hide');
    });
});


 // Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });