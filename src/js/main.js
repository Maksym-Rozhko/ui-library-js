import './lib/lib';

$('#first').on('click', () => {
    $('div').eq(1).fadeOut(800);
});

$('[data-count="second"]').on('click', () => {
    $('div').eq(2).fadeOut(800);
});

$('button').eq(2).on('click', () => {
    $('.dropdown__button').fadeToggle(800);
});

$('.wrap').html(
    `
    <div class="dropdown">
        <button type="button" id="dropdownMenuBtn2" class="btn btn-primary dropdown__button">
            Dropdown button
        </button>
        <ul data-toggle-id="dropdownMenuBtn2" class="dropdown__menu">
            <li class="dropdown__item">
                <a href="#" class="dropdown__link">
                    first link
                </a>
            </li>
            <li class="dropdown__item">
                <a href="#" class="dropdown__link">
                    second link
                </a>
            </li>
            <li class="dropdown__item">
                <a href="#" class="dropdown__link">
                    third link
                </a>
            </li>
            <li class="dropdown__item">
                <a href="#" class="dropdown__link">
                    fourth link
                </a>
            </li>
        </ul>
    </div>
    `
);
$('#dropdownMenuBtn2').dropdown();