$(document).ready(function(){
	$('div.img-bg').each(function(){
		var $obj = $(this);

	$(window).scroll(function() {
		var yPos = -($(window).scrollTop() / $obj.data('speed')); 

		var bgpos = '50% '+ yPos + 'px';

		$obj.css('background-position', bgpos );

		}); 
	});	
});




//PARA O SELECT DOS EPISODIOS FUNCIONAR ================

window.onload = function(){
    document.getElementById('lista-eps').onchange = function(){
        window.location = this.value;
    }
}