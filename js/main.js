// smooth scroll between sections //

$(document).ready(function(){
  // Add smooth scrolling to all links
  $(".navbar a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});


// Numbers count //

var eventFired = false,
    objectPositionTop = $('#about-us').offset().top;

$(window).on('scroll', function() {

 var currentPosition = $(document).scrollTop();
 if (currentPosition > objectPositionTop && eventFired === false) {
   eventFired = true;
   // your code
         $('.count').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 6000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
     
     
 }

});




// Fade In animation for Ipad and Iphone images //


       