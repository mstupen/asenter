
$(document).ready(function() {


    $('.swipebox').swipebox({
        loopAtEnd: true
    });


    var menu2 = $('ul#lang_badge').superfish({
        cssArrows: false,
        delay: 300,
    });

    $('#case_study_slideshow').cycle({
        pager: '#csnav',
        startingSlide: 0,
        pagerAnchorBuilder: cspaginate,
        next: '#nav_right',
        prev: '#nav_left',
        delay: 5000,
        speed: 1000,
        after: onAfter
    });

});

function cspaginate(ind, el) {
    return '<a href="javascript:void(0);" class="pageelem"></a> ';
}

function onAfter(currSlideElement, nextSlideElement, options, forwardFlag) {
}
