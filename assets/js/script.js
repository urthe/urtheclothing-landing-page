$(window).scroll(function () {
    if ($(window).scrollTop() > 123) {
        $('header').addClass('fixed-header');
		
    }else{
        $('header').removeClass('fixed-header');
    }
});