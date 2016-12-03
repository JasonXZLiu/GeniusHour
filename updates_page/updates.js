$(function() {
    var fixmeTop = $('.fixedBoard').offset().top;
    $(window).scroll(function() {
        var currentScroll = $(window).scrollTop();
        if (currentScroll >= fixmeTop) { 
            $('.fixedBoard').css({
                position: 'fixed',
                top: '100',
                left: '100'
            });
        } else {
            $('.fixedBoard').css({
                position: 'absolute',
                top: '300',
                left: '100'
            });
        }
    });
});
