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