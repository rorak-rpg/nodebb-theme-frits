$(document).ready(function() {
    setTimeout(function() {
        $('body').addClass('loaded');
    }, 50);

    $(window).on('action:ajaxify.end', function() {
        var gearHeader = $('.frits.container-header');
        var headerMenu = $('#header-menu');
        var footer = $('.frits.container-footer')
        $(window).on('scroll', function () {	
            var scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
    
            if ($(this).scrollTop() > 50) {	
                gearHeader.addClass('minimized');
                headerMenu.addClass('minimized');
            } else {	
                gearHeader.removeClass('minimized');	
                headerMenu.removeClass('minimized');	
            }	

            if (scrollBottom < 50) {
                footer.removeClass('minimized');
            } else {
                footer.addClass('minimized');
            }
        });
    });
});