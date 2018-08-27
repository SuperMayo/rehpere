$(window).on('resize', function() {
    if($(window).width() < 800) {
      $('.btn-group-responsive').addClass('btn-group-vertical');
    }
    else {
    	$('.btn-group-responsive').removeClass('btn-group-vertical');
    }
});