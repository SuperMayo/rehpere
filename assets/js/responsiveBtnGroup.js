$(window).on('resize', function() {
    if($(window).width() < 800) {
      $('.btn-group').addClass('btn-group-vertical');
    }
    else {
    	$('.btn-group').removeClass('btn-group-vertical');
    }
});