$(document).ready( function(){

    var vans = $(".basicGrid div img").offset();

    $(window).scroll(function() {
      var wScroll = $(this).scrollTop();

      if(wScroll > vans.top - 550) {
          //do stuff
          $(".basicGrid div img").addClass('anim');
}
  });

  $("#h2").mouseover(function(){
    $("#h2").css("color", "rgb(255, 252, 0)");
  });

  $("#h2").mouseleave(function(){
    $("#h2").css("color", "white");
  });


  $("#text").mouseover(function(){
        // Find all class fade and fadeOut in 1 second
      $("#text").css("color", "rgb(25, 252, 232)");
  });

  $("#text").mouseleave(function(){
    $("#text").css("color", "rgb(189, 255, 0)");
  });


  });
