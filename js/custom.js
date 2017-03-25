$(document).ready(function(){
    var wrapper = $('.wrapper'),
        button = $('.ham-menu');
    button.on('click', function(){
        $(this).toggleClass('open');
        wrapper.toggleClass('open_nav');
    });
});