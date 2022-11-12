$(function(){

"use strick"


// backtotop js

$(".backtotop i").on('click' , function(){
  $("html,body").animate({
    scrollTop:0
  },1200)
})


$(window).on('scroll' , function(){
  let scrolling = $(this).scrollTop()

  if(scrolling > 20){
    $(".backtotop i").fadeIn(500)
  }else{
    $(".backtotop i").fadeOut(500)
  }

  // navbar js
  if(scrolling > 50){
    $(".menu").addClass("menu_ex")
  }else{
    $(".menu").removeClass("menu_ex")
  }
})



lightbox.option({
  'resizeDuration': 200,
  'wrapAround': true
})


$('.counter').counterUp({
  delay: 10,
  time: 1500
});





















})