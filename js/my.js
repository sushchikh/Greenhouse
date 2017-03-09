$(document).ready(function() {
	

$(window).scroll(function() {
	var wScroll =  $(this).scrollTop();


// features elements
	if (wScroll > ($('.features_trigger').offset().top - ($(window).height()/2))){
		$('.features_element').each(function(index) {
			setTimeout(function(){
				$('.features_element').eq(index).addClass('show rotate');
			}, 100 * (index + 1))
		});
	};

// razbor img
	if (wScroll > ($('.razbor_trigger').offset().top - ($(window).height()/2))){
		$('.razbor_img').each(function(index) {
			setTimeout(function(){
				$('.razbor_img').eq(index).addClass('show');
			}, 100 * (index + 1))
		});
	};


});


}); //$(document).ready-func END