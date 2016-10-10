<<<<<<< HEAD
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
	$('.prompter').fadeIn(18000).removeClass('hidden');
    $('.btn.hidden').fadeIn(10000).removeClass('hidden');
});
=======
function grabCursor() {
	var tb_mode = jQuery(".tb_mode_cb").prop("checked");
		jQuery("body").addClass("touch_mode_grab");
		jQuery("body").mousedown(function() {
			jQuery(this).removeClass("touch_mode_grab")
				.addClass("touch_mode_grabbing");
		}).mouseup(function() {
			jQuery(this).removeClass("touch_mode_grabbing")
				.addClass("touch_mode_grab");
		});
	return this;
}

jQuery(document).ready(function($) {
	$(".tb_mode_cb").prop("checked", false);
	grabCursor();
	$(".tb_mode_cb").change(function() {
		grabCursor();
	});
});
>>>>>>> origin/master
