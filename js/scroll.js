$(document).ready(function(){

  function disableScroll()
  {  
    $('body').css({'overflow': 'hidden'});
    
  }  

  function enableScroll()
  {
    $('body').css('overflow', 'initial');

  }

	$('.btn').click(disableScroll);  
	
	$(document).on('click', function(e){
		console.log(e.target)
		if ($(e.target).hasClass('modal-overlay')) {
			enableScroll();
		}
	});

   
});

  