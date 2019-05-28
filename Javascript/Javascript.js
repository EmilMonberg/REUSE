  $(document).ready(function () {
      $('button').click(function () {

          $('.hidden').delay(8000).fadeIn(2000);
          $('.knap').fadeOut(500);
          $('.spoergsmaal').fadeOut(500);
          $('.animation').delay(7000).fadeOut(1000)

      });
  });

  $(window).on('scroll', function () {
      if ($(window).scrollTop()) {
          $('nav').addClass('menu_baggrund');
      } else {
          $('nav').removeClass('menu_baggrund');
      }
  });


  $(document).ready(function () {
      $(".knap").click(function () {
          $(".animation").attr("src", "Billeder/skrald-til-logo-8.gif");
      });

  });

  function myFunction() {
      var x = document.getElementById("myLinks");
      if (x.style.display === "block") {
          x.style.display = "none";
      } else {
          x.style.display = "block";
      }
  }
