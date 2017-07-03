// Inicialização da sideNav
$( document ).ready(function() {
  $('.button-collapse').sideNav({
    closeOnClick: true,
    });
  });

$( document ).ready(function() {
  $('.parallax').parallax();
  });

$( document ).ready(function() {
  $('.scrollspy').scrollSpy();
  });

$( document ).ready(function() {
  $('.modal').modal();
    });

$( document ).ready(function() {
  $('.slider').slider();
  });

$( document ).ready(function() {
  $('select').material_select();
  });

  $(document).scroll(function () {
    var $nav = $(".navbar-fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });

$(document).scroll(function () {
  $('.collapsible').collapsible();
  });


$(document).scroll(function () {
  $(".dropdown-button").dropdown();
  });

$(document).scroll(function () {
  $('.carousel.carousel-slider').carousel({fullWidth: true});
});

  $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
  });

$(document).ready(function(){
      $('.carousel').carousel({dist:0});
      window.setInterval(function(){$('.carousel').carousel('next')},4000)
   });

function callToast (){
  Materialize.toast('Doação efetuada com sucesso!', 4000) // 4000 is the duration of the toast
}


// function confirmaDoacao () {
//   var app = angular.module('myApp', []);
//   app.controller('myCtrl', function($scope) {
//       $scope.count = 0;
// }}
