require("./sass/style.scss");

require ("jquery");

require("../build/lem_youtube");



// if (NODE_ENV == 'development') {
//     console.log('NODE_ENV == dev');
// }


$(document).ready(function () {


    $(window).on('ly.apiReady', function(){
        $('.youtube-video').lemYoutube();
    });

    $('.youtube-video').on('ly.playerReady', function(){
        $(this).lemYoutube('ytPlayer', 'setSize', [1, 2]);
    });


    $('.play-btn').on('click', function(){
        let $item = $(this).closest('.feature-item');
        let $youtube = $item.find('.youtube-video');

        $youtube.lemYoutube('play');
    })


    $('.pause-btn').on('click', function(){
        let $item = $(this).closest('.feature-item');
        let $youtube = $item.find('.youtube-video');

        $youtube.lemYoutube('pause');
    })


});