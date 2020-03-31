$(document).ready( function(){


$("#_hide").click(function(){
  $(".gridContent div:first-child p").hide();
});

$("#_show").click(function(){
  $(".gridContent div:first-child p").show();
});

$("#_toggle").click( function(){
  $(".gridContent div:nth-child(2) p").toggle();
});

$("#_html").click(function() {
  $(".gridContent div:nth-child(3) p").html("Hello <b>World</b>!");
});

$("#_css").click(function(){
  $(".box").css("background-color", "lightblue");
});


$("footer").mouseover(function(){
    $("footer p").html("Yeah! You're over me");
});

$("footer").mouseleave(function() {
  $("footer p").html("Comeback...=(");
});



// --------------------- Debug #4 ----------------------------

// Here goes your jQuery :
$("#Show").click(function() {
   $(".smallGridBug div:first-child p").show();

});

$("#Hide").click(function() {
   $(".smallGridBug div:first-child p").hide();

});

$("#Toggle").click( function(){
  $(".smallGridBug div:first-child p").toggle();
});

$("#Html").click( function(){
  $(".smallGridBug div:nth-child(4) p").html("Hi there!");
});

$("#Css").click( function(){
  $(".smallGridBug div:nth-child(2) p").css("background-color", "lightblue");
  $(".smallGridBug div:nth-child(3) p").css("background-color", "lightblue");
});

});
