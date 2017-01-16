$(document).ready(function(){
  $('.nav_links a').click(function(){
    $('.nav_links a').removeClass("active");
    $(this).addClass("active");
});
});