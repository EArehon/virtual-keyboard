const keys = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace', 'tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'Sla', 'Del', 'capsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'enter', 'shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'up', 'shiftr', 'ctrl', 'win', 'alt', 'space', 'alt', 'lf', 'dw', 'ri', 'ctrl'];
document.body.insertAdjacentHTML('afterbegin', `<div class="container">
                                                    <div class="input"></div>
                                                    <div class="keyboard"></div>                                                
                                                </div>`);

let keyboard = document.querySelector('.keyboard');


for (key of keys) {
    const button = `<div class="key key-${key}">${key}</div>`;

    keyboard.insertAdjacentHTML('beforeend', button);
}

keyboard.addEventListener('click', moouseClick);

function moouseClick(event) {
    if (event.target.classList.contains('key')) {
        event.target.classList.toggle('active');
    }
}