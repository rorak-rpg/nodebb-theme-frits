$(document).ready(function() {
    setTimeout(function() {
        $('body').addClass('loaded');
    }, 50);

    $(window).on('scroll', function () {	
        var gearHeader = $('.frits.container-header');
        var headerMenu = $('#header-menu');

        if ($(this).scrollTop() > 50) {	
            gearHeader.addClass('minimized');
            headerMenu.addClass('minimized');
        } else {	
            gearHeader.removeClass('minimized');	
            headerMenu.removeClass('minimized');	
        }	
    });
});