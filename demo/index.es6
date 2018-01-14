require("./sass/style.scss");

require ("jquery");

require("../build/lem_youtube");



// if (NODE_ENV == 'development') {
//     console.log('NODE_ENV == dev');
// }


$(document).ready(function () {


    $(window).on('ytApiReady.ly', function(){
        $('.youtube-video').lemYoutube();
    });

    $('.youtube-video').on('onReady.ly', function(){
        $(this).lemYoutube('ytPlayer', 'setSize', [1, 2]);
    });

    $('.youtube-video').on('onStateChange.ly', function(event, data){
        if (data == 0) {
            $(this).lemYoutube('ytPlayer', 'playVideo')
        }
    });


    $('.play-btn').on('click', function(){
        let $item = $(this).closest('.feature-item');
        let $youtube = $item.find('.youtube-video');

        $youtube.lemYoutube('ytPlayer', 'playVideo');
    })


    $('.pause-btn').on('click', function(){
        let $item = $(this).closest('.feature-item');
        let $youtube = $item.find('.youtube-video');

        $youtube.lemYoutube('ytPlayer', 'pauseVideo');
    })


});