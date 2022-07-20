$(document).ready(function() {
    var windowWidth = $(window).width();
    //alert(windowWidth);
    if(windowWidth<860)
	{
        $(".categories ul").hide();
        $(".categories ul li").click(function(){
            $(".categories ul").hide();
            $(".search").hide();
        })
    }
    //$(".categories ul").hide();
    $(".menu-icon").click(function() {
        $(".categories ul").toggle(500);
    });
    $(".box-search").click(function() {
        $(".search").toggle(500);
    });
});