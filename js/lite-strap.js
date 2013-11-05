$(document).ready(function(){

	/* mobile menu slide toggle */
	if ($(document).width() < 500) {
	$('nav ul').toggle();
	$('nav div').click(function(){
		$('nav ul').slideToggle();
		return false;
	});

}
});