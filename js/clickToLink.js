$(document).ready(function() {
    $("a[href*='#']:not([href='#])").click(function() {
      let target = $(this).attr("href");
      $('html,body').stop().animate({
        scrollTop: $(target).offset().top-140
      }, 200);
      e.preventDefault();
    });
});