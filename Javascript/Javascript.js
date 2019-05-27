  $(document).ready(function () {
      $('button').click(function () {

          $('.hidden').delay(12400).fadeIn(3000);
          $('.knap').fadeOut(1000);
          $('.spoergsmaal').fadeOut(1000);
          $('.animation').delay(12000).fadeOut(1000)

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
          $(".animation").attr("src", "Billeder/Skrald-til-Logoframes");
      });

  });
  /*
  $(document).ready(function() {
    $(".knap").click(function() {
      var p = $(".section1").delay(3000).css("background-color", "#008f8a");

    });
  });
  */
  $(document).ready(function () {
      $(".knap").click(function () {
          $(".animation").attr("src", "Billeder/Skrald-til-Logo.gif");
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
