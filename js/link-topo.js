$(document).ready(function (){

	//variaves locais
	var _containerBtn = $(".btn-voltar");
	var _btnLink = $(".btn-voltar-link");

	//mostra o botão voltar
	$(window).scroll(function(){
		if($(this).scrollTop()> 100){
			_containerBtn.fadeIn(500);
		}else{
			_containerBtn.fadeOut(500);
		}
	});


	//click e voltar ao topo
	_btnLink.click(function(){
		
		$("body, html").animate({scrollTop: 0}, 800);

		return false;
	})
});




//$('div a[href^="#"]').on('click', function(e) {
//	e.preventDefault();
//	var id = $(this).attr('href'),
//			targetOffset = $(id).offset().top;
//			
//	$('html, body').animate({ 
//		scrollTop: targetOffset - 100
//	}, 500);
//
//	console.log(id);
//});