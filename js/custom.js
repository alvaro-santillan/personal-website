/*==================================================================
            FULL SITE
==================================================================*/
// Number animation.
$(function () {
    $('.counter').counterUp({
        delay: 5,
        time: 1000
    });
});

/*==================================================================
            NAV & BACK TO TOP BUTTON
==================================================================*/
// Navbar link closes navbar.
$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

// Back to top and nav bar animation.
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() < 100) {
            // Hide and fade out
            $("nav").removeClass("shadow-sm");
            $("#back-to-top").fadeOut();
        } else {
            // Show the fade in
            $("nav").addClass("shadow-sm");
            $("#back-to-top").fadeIn();
        }
    });
});

/*==================================================================
            HOME
==================================================================*/
// Fades arrow as you scroll.
$(window).scroll(function () {
    $(".home-body").css("opacity", 1 - $(window).scrollTop() / 300);
});

// Type effect
$(function () {
    var typed = new Typed('.typed', {
        strings: ['| My name is Álvaro F Santillan.', '| I&apos;m a CU Boulder junior majoring in CS (BS).', '| I&apos;m a CU Boulder buff minoring in TAM (BS).', '| I&apos;m an aspiring mobile application developer.', '| I&apos;m an aspiring full-stack developer.', '| I have experience making iOS and Android apps.', '| I have experience making well-designed websites.', '| I have experience with Python and Python libraries.', '| I have experience with Swift, Xcode, Java, and Android Studios.', '| I work with the professionals around me.', '| I build on the giants before me.', '| I like to design and create software.', '| Let&apos;s create something great together.'],
        // strings: ['| My name is Álvaro F Santillan.', '| I have experience with Swift, Xcode, Java, and Android Studios.'],
        startDelay: 3000,
        typeSpeed: 45,
        backSpeed: 20,
        backDelay: 1000,
        loop: true,
        loopCount: 1,
        smartBackspace: true
    });
});

/*==================================================================
            CONTACT
==================================================================*/
// Form validation
(function() {
    'use strict';
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();