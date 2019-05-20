  $(document).ready(function () {
      $('button').click(function () {

          $('#hidden').delay(16500).fadeIn(2000);
          $('.knap').fadeOut(500);
          $('.animation').delay(16000).fadeOut(1000)
      });
  });

  $(window).on('scroll', function () {
      if ($(window).scrollTop()) {
          $('nav').addClass('menu_baggrund');
      } else {
          $('nav').removeClass('menu_baggrund');
      }
  })

  $(document).ready(function () {
      $(".knap").click(function () {
          $(".animation").attr("src", "Billeder/Skrald-til-Logo.gif");
      });
  });
