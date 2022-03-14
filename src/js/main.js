import './lib/lib';

$('button').on('click', function() {
    $(this).toggleClass('active');

});

$('button').on('mouseenter', function() {
    $(this).addClass('active');
});

$('button').on('mouseleave', function() {
    $(this).removeClass('active');
});