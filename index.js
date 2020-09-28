console.log("Connected");

//index and about
$(".hamburger").click(function () {
  $(".nav-menu-mobile").toggle();
  $(".nav-menu-mobile").addClass("show");
});

//mobile nav close on click outside index.html
$(".hero-text-container").click(function () {
  $(".nav-menu-mobile").hide();
});

$("#work").click(function () {
  $(".nav-menu-mobile").hide();
});

$("footer").click(function () {
  $(".nav-menu-mobile").hide();
});

//mobile nav close on click outside about.html
$(".hero").click(function () {
  $(".nav-menu-mobile").hide();
});

$(".info-paragraphs").click(function () {
  $(".nav-menu-mobile").hide();
});

$("footer").click(function () {
  $(".nav-menu-mobile").hide();
});
