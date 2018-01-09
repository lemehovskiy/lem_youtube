'use strict';

//init youtube
let tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";

let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

window.onYouTubePlayerAPIReady = function () {
    $(window).trigger('ly.apiReady');
};

class LemYoutube {
    constructor(element, options) {
        let self = this;

        self.settings = $.extend(true, {
            playerVars: {
                'autoplay': 0,
                'loop': 1,
                'rel': 0,
                'showinfo': 0,
                'controls': 0
            },
            events: {
                'onReady': function(){

                }
            }

        }, options);

        self.$element = $(element);

        //create div for iframe init
        $(self.$element).append('<div class="player"></div>');

        self.$player_element = $(self.$element).find('.player');

        //extend by data options
        self.data_options = self.$element.data('lem-youtube');

        // console.log(self.data_options);

        self.settings = $.extend(true, self.settings, self.data_options);


        self.settings.events = {
            'onReady': function(){
                self.$element.trigger('ly.playerReady');
            }
        }


        self.init();
    }

    init() {
        let self = this;
        self.player = new YT.Player(self.$player_element[0], self.settings);
    }

    play() {
        let self = this;
        self.player.playVideo();
    }

    pause() {
        let self = this;
        self.player.pauseVideo();
    }

    mute() {
        let self = this;
        self.player.mute();
    }
}

$.fn.lemYoutube = function () {
    let $this = this,
        options = arguments[0],
        args = Array.prototype.slice.call(arguments, 1),
        length = $this.length,
        i,
        ret;

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