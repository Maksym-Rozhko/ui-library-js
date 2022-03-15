import $ from "../core";

$.prototype.modal = function(created) {
    for(let i = 0; i < this.length; i++) {
        const target = this[i].getAttribute('data-target');

        $(this[i]).click((e) => {
            e.preventDefault();
            $(target).fadeIn(500);
            document.body.style.overflow = 'hidden';
        });

        const closeElements = document.querySelectorAll(`${target} [data-close]`);

        closeElements.forEach(elem => {
            $(elem).click(() => {
                $(target).fadeOut(500);
                document.body.style.overflow = '';

                if (created) {
                    document.querySelector(target).remove();
                }
            });
        });

        $(target).click((e) => {
            if (e.target.classList.contains('modal')) {
                $(target).fadeOut(500);
                document.body.style.overflow = '';

                if (created) {
                    document.querySelector(target).remove();
                }
            }
        });
    };
};

$('[data-toggle="modal"]').modal();

$.prototype.createModal = function({text, btns} = {}) {
    for (let i = 0; i < this.length; i++) {
        let modal = document.createElement('div');
        modal.classList.add('modal');
        modal.setAttribute('id', this[i].getAttribute('data-target').slice(1));

        // btns = {count: num, settings: [[text, classNames =[], close, callback]]}
        const buttons = [];

        for (let j = 0; j < btns.count; j++) {
            let btn = document.createElement('button');
            btn.classList.add('btn', ...btns.settings[j][1]);
            btn.textContent = btns.settings[j][0];

            if (btns.settings[j][2]) {
                btn.setAttribute('data-close', 'true');
            }

            if (btns.settings[j][3] && typeof(btns.settings[j][3]) === 'function') {
                btn.addEventListener('click', btns.settings[j][3]);
            }

            buttons.push(btn);
        }

        modal.innerHTML = `
            <div class="modal__dialog">
                <div class="modal__content">
                    <button data-close class="modal__close">
                        <span>&times;</span>
                    </button>
                    <div class="modal__header">
                        <h2 class="modal__title">
                            ${text.title}
                        </h2>
                    </div>
                    <div class="modal__body">
                        <p class="modal__text">
                            ${text.descr}
                        </p>
                    </div>
                    <div class="modal__footer"></div>
                </div>
            </div>
        `;

        modal.querySelector('.modal__footer').append(...buttons);

        document.body.append(modal);
        $(this[i]).modal(true);
        $(this[i].getAttribute('data-target')).fadeIn(500);
    };
};