const keys =[
    {
        code: "Backquote",
        multi: true,
        ru: "ё",
        RU: "Ё",
        en: "`",
        EN: "~"

    },
    {
        code: "Digit1",
        multi: true,
        ru: "1",
        RU: "!",
        en: "1",
        EN: "!"
    },
    {
        code: "Digit2",
        multi: true,
        ru: "2",
        RU: "\"",
        en: "2",
        EN: "@"
    },
    {
        code: "Digit3",
        multi: true,
        ru: "3",
        RU: "№",
        en: "3",
        EN: "#"
    },
    {
        code: "Digit4",
        multi: true,
        ru: "4",
        RU: ";",
        en: "4",
        EN: "$"
    },
    {
        code: "Digit5",
        multi: true,
        ru: "5",
        RU: "%",
        en: "5",
        EN: "%"
    },
    {
        code: "Digit6",
        multi: true,
        ru: "6",
        RU: ":",
        en: "6",
        EN: "^"
    },
    {
        code: "Digit7",
        multi: true,
        ru: "7",
        RU: "?",
        en: "7",
        EN: "&"
    },
    {
        code: "Digit8",
        multi: true,
        ru: "8",
        RU: "*",
        en: "8",
        EN: "*"
    },
    {
        code: "Digit9",
        multi: true,
        ru: "9",
        RU: "(",
        en: "9",
        EN: "("
    },
    {
        code: "Digit0",
        multi: true,
        ru: "0",
        RU: ")",
        en: "0",
        EN: ")"
    },
    {
        code: "Minus",
        multi: true,
        ru: "-",
        RU: "_",
        en: "-",
        EN: "_"
    },
    {
        code: "Equal",
        multi: true,
        ru: "=",
        RU: "+",
        en: "=",
        EN: "+"
    },
    {
        code: "Backspace",
        multi: false,
        value: "Backspace"
    },
    {
        code: "Tab",
        multi: false,
        value: "Tab"
    },
    {
        code: "KeyQ",
        multi: true,
        ru: "й",
        RU: "Й",
        en: "q",
        EN: "Q"
    },
    {
        code: "KeyW",
        multi: true,
        ru: "ц",
        RU: "Ц",
        en: "w",
        EN: "W"
    },
    {
        code: "KeyE",
        multi: true,
        ru: "у",
        RU: "У",
        en: "e",
        EN: "E"
    },
    {
        code: "KeyR",
        multi: true,
        ru: "к",
        RU: "К",
        en: "r",
        EN: "R"
    },
    {
        code: "KeyT",
        multi: true,
        ru: "е",
        RU: "Е",
        en: "t",
        EN: "T"
    },
    {
        code: "KeyY",
        multi: true,
        ru: "н",
        RU: "Н",
        en: "y",
        EN: "Y"
    },
    {
        code: "KeyU",
        multi: true,
        ru: "г",
        RU: "Г",
        en: "u",
        EN: "U"
    },
    {
        code: "KeyI",
        multi: true,
        ru: "ш",
        RU: "Ш",
        en: "i",
        EN: "I"
    },
    {
        code: "KeyO",
        multi: true,
        ru: "щ",
        RU: "Щ",
        en: "o",
        EN: "O"
    },
    {
        code: "KeyP",
        multi: true,
        ru: "з",
        RU: "З",
        en: "p",
        EN: "P"
    },
    {
        code: "BracketLeft",
        multi: true,
        ru: "х",
        RU: "Х",
        en: "\[",
        EN: "\{"
    },
    {
        code: "BracketRight",
        multi: true,
        ru: "ъ",
        RU: "Ъ",
        en: "\]",
        EN: "\}"
    },
    {
        code: "Backslash",
        multi: true,
        ru: "\\",
        RU: "\/",
        en: "\\",
        EN: "\|"
    },
    {
        code: "Delete",
        multi: false,
        value: "Del"
    },
    {
        code: "CapsLock",
        multi: false,
        value: "CapsLock"
    },
    {
        code: "KeyA",
        multi: true,
        ru: "ф",
        RU: "Ф",
        en: "a",
        EN: "A"
    },
    {
        code: "KeyS",
        multi: true,
        ru: "ы",
        RU: "Ы",
        en: "s",
        EN: "S"
    },
    {
        code: "KeyD",
        multi: true,
        ru: "в",
        RU: "В",
        en: "d",
        EN: "D"
    },
    {
        code: "KeyF",
        multi: true,
        ru: "а",
        RU: "А",
        en: "f",
        EN: "F"
    },
    {
        code: "KeyG",
        multi: true,
        ru: "п",
        RU: "П",
        en: "g",
        EN: "G"
    },
    {
        code: "KeyH",
        multi: true,
        ru: "р",
        RU: "Р",
        en: "h",
        EN: "H"
    },
    {
        code: "KeyJ",
        multi: true,
        ru: "о",
        RU: "О",
        en: "j",
        EN: "J"
    },
    {
        code: "KeyK",
        multi: true,
        ru: "л",
        RU: "Л",
        en: "k",
        EN: "K"
    },
    {
        code: "KeyL",
        multi: true,
        ru: "д",
        RU: "Д",
        en: "l",
        EN: "L"
    },
    {
        code: "Semicolon",
        multi: true,
        ru: "ж",
        RU: "Ж",
        en: ";",
        EN: ":"
    },
    {
        code: "Quote",
        multi: true,
        ru: "э",
        RU: "Э",
        en: "\'",
        EN: "\""
    },
    {
        code: "Enter",
        multi: false,
        value: "Enter"
    },
    {
        code: "ShiftLeft",
        multi: false,
        value: "Shift"
    },
    {
        code: "KeyZ",
        multi: true,
        ru: "я",
        RU: "Я",
        en: "z",
        EN: "Z"
    },
    {
        code: "KeyX",
        multi: true,
        ru: "ч",
        RU: "Ч",
        en: "x",
        EN: "X"
    },
    {
        code: "KeyC",
        multi: true,
        ru: "с",
        RU: "С",
        en: "c",
        EN: "C"
    },
    {
        code: "KeyV",
        multi: true,
        ru: "м",
        RU: "М",
        en: "v",
        EN: "V"
    },
    {
        code: "KeyB",
        multi: true,
        ru: "и",
        RU: "И",
        en: "b",
        EN: "B"
    },
    {
        code: "KeyN",
        multi: true,
        ru: "т",
        RU: "Т",
        en: "n",
        EN: "N"
    },
    {
        code: "KeyM",
        multi: true,
        ru: "ь",
        RU: "Ь",
        en: "m",
        EN: "M"
    },
    {
        code: "Comma",
        multi: true,
        ru: "б",
        RU: "Б",
        en: ",",
        EN: "<"
    },
    {
        code: "Period",
        multi: true,
        ru: "ю",
        RU: "Ю",
        en: ".",
        EN: ">"
    },
    {
        code: "Slash",
        multi: true,
        ru: ".",
        RU: ",",
        en: "/",
        EN: "?"
    },
    {
        code: "ArrowUp",
        multi: false,
        value: "&#8593;"
    },
    {
        code: "ShiftRight",
        multi: false,
        value: "Shift"
    },
    {
        code: "ControlLeft",
        multi: false,
        value: "Ctrl"
    },
    {
        code: "MetaLeft",
        multi: false,
        value: "Win"
    },
    {
        code: "AltLeft",
        multi: false,
        value: "Alt"
    },
    {
        code: "Space",
        multi: false,
        value: " "
    },
    {
        code: "AltRight",
        multi: false,
        value: "Alt"
    },
    {
        code: "ArrowLeft",
        multi: false,
        value: "&#8592;"
    },
    {
        code: "ArrowDown",
        multi: false,
        value: "&#8595;"
    },
    {
        code: "ArrowRight",
        multi: false,
        value: '&#8594;'
    },
    {
        code: "ControlRight",
        multi: false,
        value: "Ctrl"
    }
];

document.body.insertAdjacentHTML('afterbegin', `<div class="container">
                                                    <div class="input"><textarea class="textarea"></textarea></div>
                                                    <div class="keyboard"></div>                                                
                                                </div>`);

let keyboard = document.querySelector('.keyboard');
let currentLang = "ru";
let shift = false;
let shiftPress = false;

const textArea = document.querySelector('.textarea');

for (key of keys) {
    let button;
    if (key.multi) {
        button = `<div class="key key-${key.code}" data-button="${key.code}">${key[currentLang]}</div>`;
    }
    else{
        button = `<div class="key key-${key.code}" data-button="${key.code}">${key.value}</div>`;
    }
    keyboard.insertAdjacentHTML('beforeend', button);
}

function changeKeyboard (lang) {
    for (key of keys) {
        if (key.multi) {
            document.querySelector(`[data-button='${key.code}']`).textContent = key[lang];
        }
    }
}

keyboard.addEventListener('mousedown', function(event) {
    let key = event.target;
    if(key.classList.contains('key')) {
        key.classList.add('active');
        switchKey(key);
    }
});

keyboard.addEventListener('mouseup', function() {
    document.querySelectorAll('.key').forEach(el => el.classList.remove('active'));
    textArea.focus();
})







document.addEventListener('keydown', function(event) {
    event.preventDefault();
    let key = document.querySelector(`[data-button='${event.code}']`);
    if(key){
        if((key.dataset.button == 'ShiftLeft' || key.dataset.button == 'ShiftRight') && shiftPress) {

        }
        else {
            key.classList.add('active');
            switchKey(key);
        }
    }

    if (key.dataset.button == 'ShiftLeft' || key.dataset.button == 'ShiftRight') {
        shiftPress = true;
    }
  });

document.addEventListener('keyup', function(event) {
    let key = document.querySelector(`[data-button='${event.code}']`);
    if(key){
        key.classList.remove('active');
    }

    if (key.dataset.button == 'ShiftLeft' || key.dataset.button == 'ShiftRight') {
        shift = false;
        shiftPress = false;
        changeKeyboard('ru');
    }
  });

function switchKey (key) {
    switch (key.dataset.button) {
        case 'Tab':
            insertText('\t');
            break;

        case 'Delete':
            deleteText('next');
            break;
        
        case 'Backspace':
            deleteText('prev');
            break;

        case 'Enter':
            insertText('\n');
            break;

        case 'ShiftLeft':
                if (!shift) {
                    shift = true;
                    changeKeyboard("RU");
                }
                else {
                    shift = false;
                    changeKeyboard('ru');
                }
            break;
        
        case 'ShiftRight':
            if (!shift) {
                shift = true;
                changeKeyboard("RU");
            }
            else {
                shift = false;
                changeKeyboard('ru');
            }
        break;
        
        default:
            insertText(key.innerHTML)
            break;
    }
}


//delete text from textarea at cursor position
function deleteText(direction) {
    let start = textArea.selectionStart;
    let end = textArea.selectionEnd;
    direction === 'next' ? end += 1 : start--;
    let finText = textArea.value.substring(0, start) + textArea.value.substring(end);
    textArea.value = finText;
    textArea.selectionEnd = direction === 'next' ? end-1 : start;
    
    if (!shiftPress && shift) {
        shift = false;
        changeKeyboard("ru");
    }
    
    textArea.focus();
}

//insert text in textarea at cursor position
function insertText(text) {
    let start = textArea.selectionStart;
    let end = textArea.selectionEnd;
    let finText = textArea.value.substring(0, start) + text + textArea.value.substring(end);
    textArea.value = finText;
    
    if (!shiftPress && shift) {
        shift = false;
        changeKeyboard("ru");
    }
    
    textArea.focus();
    textArea.selectionEnd = ( start == end )? (end + text.length) : end ;
}