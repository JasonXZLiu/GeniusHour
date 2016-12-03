// $(document).ready(function(){
//   $('.header').load("header.html");
// });

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

$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 0) {
        $('.container-body').slideDown(1000).removeClass('hidden');
    } else {
        $('.container-body').slideUp(1000);
    }
});

// $(document).scroll(function () {
//     var y = $(this).scrollTop();
//     if (y > 100) {
//         $('.bios').fadeIn().removeClass('hidden');
//     } else {
//         $('.bios').fadeOut();
//     }
// });

// // $(document).scroll(function () {
// //     var y = $(this).scrollTop();
//     if (y = 0) {
//         $('.placeholder1').fadeIn().removeClass('hidden');
//     } else {
//         $('.placeholder1').fadeOut.addClass('hidden');
//     }
// });