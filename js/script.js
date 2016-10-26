$(function() {  
  
  $('header article').removeClass('hidden');
  $('header article').addClass('toFade');
  

  if (document.body.scrollTop != 0 && 
        ($('button').hasClass('collapsed'))) {
      $('.navbar').css('background-color', '#f6f6f6');
   }

   var scroll_start = 0;
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      var toSub = 0;
      
      if(scroll_start > $('.jumbotron').offset().top) {
          
          $('.navbar').css('background-color', '#f6f6f6');
      } else {
        if ($('button').hasClass('collapsed')) {
          $('.navbar').css('background-color', 'transparent');
          $('button').css('background-color', 'transparent');
        }
      }
   });

  $('button').click(function(){
    $('.navbar').css('background-color', '#f6f6f6');
    $('button').css('background-color', '#f6f6f6');
    if (document.body.scrollTop == 0 && 
        !($('button').hasClass('collapsed')) ) {
      $('.navbar').css('background-color', 'transparent');
      $('button').css('background-color', 'transparent');
    }
  });
});





