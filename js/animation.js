$(document).ready(function() {
	$(window).scroll(function() {
        var winpos= $(window).scrollTop();
        $(".box-hidden").each(function(){
            var pos = $(this).offset().top;
            if(pos < winpos + 750){
                $(this).addClass('box-show');
            }		
        });
    });
})