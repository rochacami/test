$(document).ready(function(){

  $("main .ingredients").hide();
  $("main .steps").hide();
  $("main .finishedproduct").hide();


  // Find this id // when click run this function
    $("#content1").click(function(){
    // Find the id body
          $("main .ingredients").show();
          $("#content1").html("Scroll Down");
  });

  // Find this id // when click run this function
    $("#content2").click(function(){
    // Find the id body
          $("main .steps").show();
          $("#content2").html("Scroll Down");
  });

  // Find this id // when click run this function
    $("#content3").click(function(){
    // Find the id body
          $("main .finishedproduct").show();
          $("#content3").html("Scroll Down");
  });


  $("h1").mouseover(function(){
    $("h1").css("color", "rgb(75, 39, 16)");
  });

  $("h1").mouseleave(function(){
    $("h1").css("color", "white");
  });

  });
