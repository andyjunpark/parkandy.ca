(function ($) {
    $(document).ready(function(){
        // hide nav bar
        $(".scrollnav").hide();

        // fade in navbar
        $(function() {
            $(window).scroll(function() {
                if ($(this).scrollTop() > 800) {
                    $('.scrollnav').fadeIn();
                } else {
                    $('.scrollnav').fadeOut();
                }
                
            });
            
        });
        
    });  
}(jQuery));

