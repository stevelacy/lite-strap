$(document).ready(function(){

	/* mobile menu slide toggle */
if ($(document).width() < 500){
	toggleMenu();
}

$('nav div').click(function(){
		toggleMenu();
		return false;
})

function toggleMenu(){
	$('nav ul').slideToggle();	
}


});