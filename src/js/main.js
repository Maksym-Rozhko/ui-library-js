import './lib/lib';

$('button').on('click', function() {
    $('div').eq(2).toggleClass('active');
});

$('div').click(function() {
    console.log($(this).index());
});

// console.log($('div').eq(2).find('.more'));
// console.log($('.some').closest('.parent').addClass('new-class'));
// console.log('button:', $('button').html('Try click'));
// console.log($('.parent').siblings());
// $('button').fadeOut(1800);