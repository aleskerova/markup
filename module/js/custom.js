//плавная навигация по сайту
 $(document).ready(function(){
  $("a").click(function () {
    elementClick = $(this).attr("href");
    destination = $(elementClick).offset().top;
    $("body,html").animate({scrollTop: destination }, 800);
  });
});

 //burger

$(document).ready(function () {

    $('#swipe-open, #swipe-close').click(function () {

        $('#swipe-menu').toggleClass('opened');

    });

});

    