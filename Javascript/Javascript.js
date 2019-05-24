  $(document).ready(function () {
      $('button').click(function () {
<<<<<<< Updated upstream

          $('.hidden').delay(12400).fadeIn(3000);
          $('.knap').fadeOut(1000);
          $('.spoergsmaal').fadeOut(1000);
          $('.animation').delay(12000).fadeOut(1000)
          
          
=======
          $('#hidden').delay(16500).fadeIn(2000);
          $('.knap').fadeOut(500);
          $('.animation').delay(16000).fadeOut(1000)
>>>>>>> Stashed changes
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


