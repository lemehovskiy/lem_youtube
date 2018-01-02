/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LemYoutube = function () {
    function LemYoutube(element, options) {
        _classCallCheck(this, LemYoutube);

        var self = this;

        self.settings = $.extend(true, {
            playerVars: {
                'autoplay': 0,
                'loop': 1,
                'rel': 0,
                'showinfo': 0,
                'controls': 0
                // 'modestbranding': 1,
                // 'playlist': players[i].getAttribute("data-yt-id")

            }
        }, options);

        self.$element = $(element);

        self.$player_element = $(self.$element.find('.player'));

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

    _createClass(LemYoutube, [{
        key: 'init',
        value: function init() {

            var self = this;

            self.player = new YT.Player(self.$player_element[0], self.settings);
        }
    }, {
        key: 'play',
        value: function play() {

            var self = this;

            self.player.playVideo();
        }
    }, {
        key: 'pause',
        value: function pause() {

            var self = this;

            self.player.pauseVideo();
        }
    }]);

    return LemYoutube;
}();

$.fn.lemYoutube = function () {
    var $this = this,
        options = arguments[0],
        args = Array.prototype.slice.call(arguments, 1),
        length = $this.length,
        i = void 0,
        ret = void 0;

    // console.log(args);
    for (i = 0; i < length; i++) {
        if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) == 'object' || typeof options == 'undefined') {
            $this[i].lem_youtube = new LemYoutube($this[i], options);
        } else {
            ret = $this[i].lem_youtube[options].apply($this[i].lem_youtube, args);
        }

        if (typeof ret != 'undefined') return ret;
    }
    return $this;
};

/***/ })
/******/ ]);