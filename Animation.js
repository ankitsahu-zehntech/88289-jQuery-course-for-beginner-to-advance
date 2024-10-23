$(document).ready(function () {
    $('#animate-button').click(function () {
        const $box1 = $('.box-1');
        const $box2 = $('.box-2');

        $box1.addClass('shifted');
        
        $box1.animate({
            width:'60px',
            height:'60px'
        });
        
        $(".small-circle").css("display","flex");
        $box2.animate({ width: '300px', backgroundColor: 'white' }, {
            duration: 1000,
            step: function(now, fx) {
                if (fx.prop === "backgroundColor") {
                    $(this).css('background-color', now);
                }
            }
        });
        $(".progress-holder").css("display", "block")
        $(".progress-line").css("display", "block").animate({ width: '200px' }, 2000, function() {
           
            $(".small-circle").css("animation", "none")
                              .css("border", "none")
                              .css("background-color", "transparent");
            $(".tick-mark").css("display", "block");
        });

        $(this).hide();
    });
});