'use strict';

class LemYoutube {

    constructor(element, options) {

        let self = this;

        self.settings = $.extend({}, options);

        let $element = $(element);

        alert('asdf');

    }
}


$.fn.lemYoutube = function () {
    let $this = this,
        opt = arguments[0],
        args = Array.prototype.slice.call(arguments, 1),
        length = $this.length,
        i,
        ret;
    for (i = 0; i < length; i++) {
        if (typeof opt == 'object' || typeof opt == 'undefined')
            $this[i].lem_youtube = new LemYoutube($this[i], opt);
        else
            ret = $this[i].lem_youtube[opt].apply($this[i].lem_youtube, args);
        if (typeof ret != 'undefined') return ret;
    }
    return $this;
};