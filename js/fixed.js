$(document).ready(function() {
	$(window).scroll(function(event) {
		var pos_body = $('html,body').scrollTop();
		// console.log(pos_body);
		if(pos_body>250){
			$('header').addClass('fixed');
		}
		else {
			$('header').removeClass('fixed');
		}		
	});
});