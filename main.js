 // aggiungere il codice js necessario per visualizzare l'hamburger menu su mobile, a partire da html e css già pronti

 $(".header-right a").click(function() {
  $(".hamburger-menu").show();
});

$(".close").click(function() {
 $(".hamburger-menu").hide();
});
