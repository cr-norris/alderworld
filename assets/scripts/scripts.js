// cursor

$(document).ready(function () {
    $('html').awesomeCursor('circle', {
        color: '#E85133',
        hotspot: 'center',
        size: 55
    });
});

// preloader

$(window).on('load', function () {
    $('#status').delay(1000).fadeOut();
    $('#preloader').delay(1000).fadeOut('slow');
    $('body').delay(1000).css({
        'overflow': 'visible'
    });
});

$(".story").hover(function () {
    $('.story-card-image').eq($(this).index()).toggleClass('hide');
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


//Animate Page Anchor Scrolling


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