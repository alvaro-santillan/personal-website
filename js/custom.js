// HOME ARROW //

// arrow fades away as you scroll
$(window).scroll(function () {
    $(".home-body").css("opacity", 1 - $(window).scrollTop() / 300);
    // 250: pixel fade
});

/*==================================================================
                        STATS
==================================================================*/
$(function () {
    $('.counter').counterUp({
        delay: 5,
        time: 1000
    });
});

// experiment
$(function () {
    // show/hide the navigation bar    
    $(window).scroll(function () {
        if ($(this).scrollTop() < 100) {
            // hide the nav bar
            $("nav").removeClass("vesco-top-nav");
            $("#back-to-top").fadeOut();
        } else {
            // show the nav bar
            $("nav").addClass("vesco-top-nav");
            $("#back-to-top").fadeIn();
        }
    });
});

$(function () {
    var typed = new Typed('.typed', {
        strings: ['| My name is Álvaro F Santillan.', '| I&apos;m a CU Boulder junior majoring in CS (BS).', '| I&apos;m a CU Boulder buff minoring in TAM (BS).', '| I&apos;m an aspiring mobile application developer.', '| I&apos;m an aspiring full-stack developer.', '| I have experience making iOS and Android apps.', '| I have experience making well-designed websites.', '| I have experience with Python and Python libraries.', '| I have experience with Swift, Xcode, Java, and Android Studios.', '| I work with the professionals around me.', '| I build on the giants before me.', '| I like to design and create software.', '| Let&apos;s create something great together.'],
        startDelay: 3000,
        typeSpeed: 45,
        backSpeed: 20,
        backDelay: 1000,
        loop: true,
        loopCount: 1,
        smartBackspace: true
    });
});

//$(function resorcesUsed() {
//        var typed = new Typed('.res-type', {
//        strings: ['Resources Used:', 'Resources Used: Python, Pygame, Visual Studios Code & GitHub Desktop.'],
//        startDelay: 0,
//        typeSpeed: 15,
//        backSpeed: 0,
//        backDelay: 0,
//        loop: true,
//        loopCount: 1,
//        showCursor: false,
//        smartBackspace: true
//    });
//});