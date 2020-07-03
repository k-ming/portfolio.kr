function popup(){
  window.open("http://keiramingj.dothome.co.kr/project_03/m_index.html", "_blank","width=425, height=1000, toolbars=no, location=no, status=no");
}

$(document).ready(function () {
  $('.eng').on('click',function(){
    alert("It's coming soon");
  });


  $(".menu-toggler").on("click", function () {
    $(this).toggleClass("open");
    $(".top-nav").toggleClass("open");
  });

  $(".top-nav .nav-link").on("click", function () {
    $(".menu-toggler").removeClass("open");
    $(".top-nav").toggleClass("open");
  });


  $('.menu li a[href*="#"]').on("click", function () {
    $("html,body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top - 100,
      },
      2000
    );
  });


  $('.resume').on('click',function(){
    alert("It's coming soon");
  });


  $("#up").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      2000
    );
  });

  AOS.init({
    easing: "ease",
    duration: 1800,
  });



});
