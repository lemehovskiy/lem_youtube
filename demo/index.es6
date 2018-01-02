require("./sass/style.scss");

require ("jquery");

require("../build/lem_youtube");



// if (NODE_ENV == 'development') {
//     console.log('NODE_ENV == dev');
// }


$(document).ready(function () {



    //init youtube
    var tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    window.onYouTubePlayerAPIReady = function () {

        $('.youtube-video').lemYoutube();


    };


    $('.play-btn').on('click', function(){
        $('.youtube-video').lemYoutube('play');
    })


    $('.pause-btn').on('click', function(){
        $('.youtube-video').lemYoutube('pause');
    })



});