/*
 Version: 1.0.0
 Author: lemehovskiy
 Website: http://lemehovskiy.github.io
 Repo: https://github.com/lemehovskiy/lem_youtube
*/

'use strict';

(function ($) {
    //init youtube
    let tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";

    let firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    window.onYouTubePlayerAPIReady = function () {
        $(document).ready(function () {
            $(window).trigger('ly.apiReady');
        });
    };

    class LemYoutube {
        constructor(element, options) {
            let self = this;

            self.settings = $.extend(true, {
                playerVars: {
                    'rel': 0,
                    'showinfo': 0
                }

            }, options);

            self.$element = $(element);

            //create div for iframe init
            $(self.$element).append('<div class="player"></div>');

            self.$player_element = $(self.$element).find('.player');

            //extend by data options
            self.data_options = self.$element.data('lem-youtube');

            self.settings = $.extend(true, self.settings, self.data_options);

            self.settings.events = {
                'onReady': function () {
                    self.$element.trigger('ly.playerReady');
                }
            }

            self.init();
        }

        init() {
            let self = this;
            self.player = new YT.Player(self.$player_element[0], self.settings);
        }

        ytPlayer(method, args) {

            let self = this;

            let params = [];

            if (typeof args === 'object') {
                params = args;
            }

            else {
                params.push(args);
            }

            self.player[method].apply(self.player, params);
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
})(jQuery);