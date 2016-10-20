$(document).ready(function () {
	var $el = $(".wordfade:first"), text = $.trim($el.text()),
	    words = text.split(" "), html = "";
	for (var i = 0; i < words.length; i++) {
	    html += "<span>" + words[i] + ((i+1) === words.length ? "" : " ") + "</span>";
	};
	$el.html(html).children().hide().each(function(i){
		if (i == 1) {
    		$(this).delay(i*3000).fadeIn(4000);
		}
	  $(this).delay(i*2000).fadeIn(5000);
	});
	$el.find("span").promise().done(function(){
	    $el.text(function(i, text){
	       return $.trim(text);
	    });            
	});
	$('#fadediv').click(function() {
		$('.image_background.hidden').fadeIn(5000).removeClass('hidden');
		$('.btn.hidden').fadeIn(8000).removeClass('hidden');
	});
	$('.prompter.hidden').fadeIn(18000).removeClass('hidden');
	
});
