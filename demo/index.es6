require("./sass/style.scss");

require ("jquery");

require("../build/lem_youtube");


if (NODE_ENV == 'development') {
    console.log('NODE_ENV == dev');
}


$(document).ready(function () {


    $('.youtube').lemYoutube();


});