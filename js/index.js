$(function () {
    $('.carousel').carousel();


    topicToggle('#topic_dd_1','#topic_cover_1',500,'-21px')
    topicToggle('#topic_dd_2','#topic_cover_2',500,'-21px')
    topicToggle('#topic_dd_3','#topic_cover_3',500,'-21px')
    backgroundSize('#topic_dd_1',800)
    backgroundSize('#topic_dd_2',800)
    backgroundSize('#topic_dd_3',800)

    topicToggle('#friend_link1','#friend_link_cover1',300, '-16px')
    topicToggle('#friend_link2','#friend_link_cover2',300, '-16px')
    topicToggle('#friend_link3','#friend_link_cover3',300, '-16px')
    topicToggle('#friend_link4','#friend_link_cover4',300, '-16px')
    topicToggle('#friend_link5','#friend_link_cover5',300, '-16px')
    /*弹窗条动画*/
    function topicToggle(triggerId, animateId, speed, bottomValue) {
        $(triggerId).hover(
            function () {
                $(animateId).stop().animate({'bottom':0},speed)}
            , function () {
                $(animateId).stop().animate({'bottom':bottomValue},speed)
            }
        );
    }
    function backgroundSize(triggerId,speed) {
        $(triggerId).hover(
            function () {
                $(triggerId).stop().animate({'background-size':'120%'},speed)}
            , function () {
                $(triggerId).stop().animate({'background-size':'110%'},speed)
            }
        );
    }
})
