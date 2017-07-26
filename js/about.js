/**
 * Created by dwang on 2017/7/25.
 */
'use strict'
$(function () {
    window.onscroll = function () {
        var scrollTop = $(window).scrollTop();
        if(scrollTop > 120){
            $('#nav_spy').css({'position':'fixed','top':20});
        }else {
            $('#nav_spy').css({'position':'absolute'});
        };
    }
    $('#about_toTop').on('click', function () {
        var scroll = new SmoothScroll();
        //var anchor = document.querySelector( '#section1' );
        var toggle = document.querySelector('#about_toTop');
        var options = { speed: 1000, easing: 'easeOutCubic' };
        scroll.animateScroll( 0, toggle, options );
    })

})