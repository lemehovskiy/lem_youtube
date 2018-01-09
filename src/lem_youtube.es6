'use strict';

class LemYoutube {

    constructor(element, options) {

        let self = this;

        self.settings = $.extend(true, {
            playerVars: {
                'autoplay': 0,
                'loop': 1,
                'rel': 0,
                'showinfo': 0,
                'controls': 0,
                // 'modestbranding': 1,
                // 'playlist': players[i].getAttribute("data-yt-id")

            },
        }, options);

        self.$element = $(element);


        //create div for iframe init
        $(self.$element).append('<div class="player"></div>');

        self.$player_element = $(self.$element).find('.player');

        //extend by data options
        self.data_options = self.$element.data('lem-youtube');

        console.log(self.data_options);

        self.settings = $.extend(true, self.settings, self.data_options);


        console.log(self.settings);


        // //init youtube
        // var tag = document.createElement('script');
        //
        // tag.src = "https://www.youtube.com/iframe_api";
        // var firstScriptTag = document.getElementsByTagName('script')[0];
        // firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        //
        // var ytPlayers = [];
        //
        // onYouTubePlayerAPIReady = function () {
        //
        //     var players = document.querySelectorAll('.youtube-video');
        //
        //
        //     for (var i = 0; i < players.length; i++) {
        //         var player = new YT.Player(players[i], {
        //             playerVars: {
        //                 'autoplay': 1,
        //                 'loop': 1,
        //                 'rel': 0,
        //                 'showinfo': 0,
        //                 'controls': 0,
        //                 'modestbranding': 1,
        //                 'playlist': players[i].getAttribute("data-yt-id")
        //
        //             },
        //             videoId: players[i].getAttribute("data-yt-id"),
        //             events: {
        //                 'onReady': onPlayerReady
        //             }
        //
        //         });
        //
        //         ytPlayers.push(player);
        //     }
        // };
        //
        // function onPlayerReady(event) {
        //
        //     event.target.mute();
        //
        //
        //     //init videoBackground for youtube video
        //     $('.youtube-video-background').videoBackground();
        //
        // }

        self.init();
    }


    init() {

        let self = this;

        self.player = new YT.Player(self.$player_element[0], self.settings);

    }

    play(){

        let self = this;

        console.log('asdfsd');

        self.player.playVideo();

    }

    pause(){

        let self = this;

        self.player.pauseVideo();
    }
}


$.fn.lemYoutube = function () {
    let $this = this,
        options = arguments[0],
        args = Array.prototype.slice.call(arguments, 1),
        length = $this.length,
        i,
        ret;

    // console.log(args);
    for (i = 0; i < length; i++) {
        if (typeof options == 'object' || typeof options == 'undefined') {
            $this[i].lem_youtube = new LemYoutube($this[i], options);
        }
        else {
            ret = $this[i].lem_youtube[options].apply($this[i].lem_youtube, args);
        }

        if (typeof ret != 'undefined') return ret;
    }
    return $this;
};