<<<<<<< HEAD
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


$('.count').each(function () {
    $(this).prop('Counter',1).animate({
        Counter: $(this).text()
    }, {
        duration: 8000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});
=======
$(document).ready(function(){$(".navbar a").on('click',function(event){if(this.hash!==""){event.preventDefault();var hash=this.hash;$('html, body').animate({scrollTop:$(hash).offset().top},800,function(){window.location.hash=hash;});}});});
>>>>>>> 696fddc756135cd71e379e3a1f417e1c590c3218
