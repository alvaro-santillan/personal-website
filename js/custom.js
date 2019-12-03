// HOME ARROW //

// arrow fades away as you scroll
$(window).scroll(function() {
    $(".home-body").css("opacity", 1 - $(window).scrollTop() / 300); 
        // 250: pixel fade
    });

/*==================================================================
                        STATS
==================================================================*/
$(function() {    
    $('.counter').counterUp({
        delay: 5, 
        time: 1000
    });    
});

// experiment
$(function() {
// show/hide the navigation bar    
    $(window).scroll(function() {                     
        if  ($(this).scrollTop() < 100) {
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