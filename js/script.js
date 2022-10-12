$(document).ready(function(){
    $('.header__burger').click(function (event) {
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

$(document).ready(function(){
    $("a[href*='#']").on("click", function(e){
      var anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top
      }, 777);
      e.preventDefault();
      return false;
    });
});


jQuery(() => {

  // открываем вкладку по умолчанию
  $(".active__item .accordion__content").slideDown();

  $("#accordion .accordion__title").on("click", function () {
      $("#accordion .accordion__content").not($(this).next()).slideUp(299);
      $(".accordion__item").removeClass("active__item");
      $(this).next().slideDown(299).parent().addClass("active__item");
  });

});