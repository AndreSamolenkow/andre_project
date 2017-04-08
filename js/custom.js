//Navigation

$(document).ready(function(){
    var wrapper = $('.wrapper'),
        button = $('.ham-menu');
    button.on('click', function() {
        $(this).toggleClass('open');
        wrapper.toggleClass('open_nav');
    });
});

//remove open nav if scrolled further down

//$(window).scroll(function() {    
//    var scroll = $(window).scrollTop(),
//        wrapper = $('.wrapper'),
//        button = $('.ham-menu');
//    if (scroll >= 400) {
//        wrapper.removeClass("open_nav");
//        button.removeClass("open");
//        
//    }
//});


//Smooth scrolling

$(document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  $(".navigation a, footer a, .top-rect a, header a[href='#myPage']").on('click', function(event) {

   // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {

    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 900, function(){

      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
      });
    } // End if
  });
})

//Slide-in

$(window).scroll(function() {
  $(".slideanim").each(function(){
    var pos = $(this).offset().top;
    var winTop = $(window).scrollTop();
    if (pos < winTop + 600) {
      $(this).addClass("slide");
    }
  });
});