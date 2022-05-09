const keys = [
  {
    code: 'Backquote',
    multi: true,
    ru: 'ё',
    RU: 'Ё',
    en: '`',
    EN: '~',

  },
  {
    code: 'Digit1',
    multi: true,
    ru: '1',
    RU: '!',
    en: '1',
    EN: '!',
  },
  {
    code: 'Digit2',
    multi: true,
    ru: '2',
    RU: '"',
    en: '2',
    EN: '@',
  },
  {
    code: 'Digit3',
    multi: true,
    ru: '3',
    RU: '№',
    en: '3',
    EN: '#',
  },
  {
    code: 'Digit4',
    multi: true,
    ru: '4',
    RU: ';',
    en: '4',
    EN: '$',
  },
  {
    code: 'Digit5',
    multi: true,
    ru: '5',
    RU: '%',
    en: '5',
    EN: '%',
  },
  {
    code: 'Digit6',
    multi: true,
    ru: '6',
    RU: ':',
    en: '6',
    EN: '^',
  },
  {
    code: 'Digit7',
    multi: true,
    ru: '7',
    RU: '?',
    en: '7',
    EN: '&',
  },
  {
    code: 'Digit8',
    multi: true,
    ru: '8',
    RU: '*',
    en: '8',
    EN: '*',
  },
  {
    code: 'Digit9',
    multi: true,
    ru: '9',
    RU: '(',
    en: '9',
    EN: '(',
  },
  {
    code: 'Digit0',
    multi: true,
    ru: '0',
    RU: ')',
    en: '0',
    EN: ')',
  },
  {
    code: 'Minus',
    multi: true,
    ru: '-',
    RU: '_',
    en: '-',
    EN: '_',
  },
  {
    code: 'Equal',
    multi: true,
    ru: '=',
    RU: '+',
    en: '=',
    EN: '+',
  },
  {
    code: 'Backspace',
    multi: false,
    value: 'Backspace',
  },
  {
    code: 'Tab',
    multi: false,
    value: 'Tab',
  },
  {
    code: 'KeyQ',
    multi: true,
    ru: 'й',
    RU: 'Й',
    en: 'q',
    EN: 'Q',
  },
  {
    code: 'KeyW',
    multi: true,
    ru: 'ц',
    RU: 'Ц',
    en: 'w',
    EN: 'W',
  },
  {
    code: 'KeyE',
    multi: true,
    ru: 'у',
    RU: 'У',
    en: 'e',
    EN: 'E',
  },
  {
    code: 'KeyR',
    multi: true,
    ru: 'к',
    RU: 'К',
    en: 'r',
    EN: 'R',
  },
  {
    code: 'KeyT',
    multi: true,
    ru: 'е',
    RU: 'Е',
    en: 't',
    EN: 'T',
  },
  {
    code: 'KeyY',
    multi: true,
    ru: 'н',
    RU: 'Н',
    en: 'y',
    EN: 'Y',
  },
  {
    code: 'KeyU',
    multi: true,
    ru: 'г',
    RU: 'Г',
    en: 'u',
    EN: 'U',
  },
  {
    code: 'KeyI',
    multi: true,
    ru: 'ш',
    RU: 'Ш',
    en: 'i',
    EN: 'I',
  },
  {
    code: 'KeyO',
    multi: true,
    ru: 'щ',
    RU: 'Щ',
    en: 'o',
    EN: 'O',
  },
  {
    code: 'KeyP',
    multi: true,
    ru: 'з',
    RU: 'З',
    en: 'p',
    EN: 'P',
  },
  {
    code: 'BracketLeft',
    multi: true,
    ru: 'х',
    RU: 'Х',
    en: '[',
    EN: '{',
  },
  {
    code: 'BracketRight',
    multi: true,
    ru: 'ъ',
    RU: 'Ъ',
    en: ']',
    EN: '}',
  },
  {
    code: 'Backslash',
    multi: true,
    ru: '\\',
    RU: '/',
    en: '\\',
    EN: '|',
  },
  {
    code: 'Delete',
    multi: false,
    value: 'Del',
  },
  {
    code: 'CapsLock',
    multi: false,
    value: 'CapsLock',
  },
  {
    code: 'KeyA',
    multi: true,
    ru: 'ф',
    RU: 'Ф',
    en: 'a',
    EN: 'A',
  },
  {
    code: 'KeyS',
    multi: true,
    ru: 'ы',
    RU: 'Ы',
    en: 's',
    EN: 'S',
  },
  {
    code: 'KeyD',
    multi: true,
    ru: 'в',
    RU: 'В',
    en: 'd',
    EN: 'D',
  },
  {
    code: 'KeyF',
    multi: true,
    ru: 'а',
    RU: 'А',
    en: 'f',
    EN: 'F',
  },
  {
    code: 'KeyG',
    multi: true,
    ru: 'п',
    RU: 'П',
    en: 'g',
    EN: 'G',
  },
  {
    code: 'KeyH',
    multi: true,
    ru: 'р',
    RU: 'Р',
    en: 'h',
    EN: 'H',
  },
  {
    code: 'KeyJ',
    multi: true,
    ru: 'о',
    RU: 'О',
    en: 'j',
    EN: 'J',
  },
  {
    code: 'KeyK',
    multi: true,
    ru: 'л',
    RU: 'Л',
    en: 'k',
    EN: 'K',
  },
  {
    code: 'KeyL',
    multi: true,
    ru: 'д',
    RU: 'Д',
    en: 'l',
    EN: 'L',
  },
  {
    code: 'Semicolon',
    multi: true,
    ru: 'ж',
    RU: 'Ж',
    en: ';',
    EN: ':',
  },
  {
    code: 'Quote',
    multi: true,
    ru: 'э',
    RU: 'Э',
    en: "'",
    EN: '"',
  },
  {
    code: 'Enter',
    multi: false,
    value: 'Enter',
  },
  {
    code: 'ShiftLeft',
    multi: false,
    value: 'Shift',
  },
  {
    code: 'KeyZ',
    multi: true,
    ru: 'я',
    RU: 'Я',
    en: 'z',
    EN: 'Z',
  },
  {
    code: 'KeyX',
    multi: true,
    ru: 'ч',
    RU: 'Ч',
    en: 'x',
    EN: 'X',
  },
  {
    code: 'KeyC',
    multi: true,
    ru: 'с',
    RU: 'С',
    en: 'c',
    EN: 'C',
  },
  {
    code: 'KeyV',
    multi: true,
    ru: 'м',
    RU: 'М',
    en: 'v',
    EN: 'V',
  },
  {
    code: 'KeyB',
    multi: true,
    ru: 'и',
    RU: 'И',
    en: 'b',
    EN: 'B',
  },
  {
    code: 'KeyN',
    multi: true,
    ru: 'т',
    RU: 'Т',
    en: 'n',
    EN: 'N',
  },
  {
    code: 'KeyM',
    multi: true,
    ru: 'ь',
    RU: 'Ь',
    en: 'm',
    EN: 'M',
  },
  {
    code: 'Comma',
    multi: true,
    ru: 'б',
    RU: 'Б',
    en: ',',
    EN: '<',
  },
  {
    code: 'Period',
    multi: true,
    ru: 'ю',
    RU: 'Ю',
    en: '.',
    EN: '>',
  },
  {
    code: 'Slash',
    multi: true,
    ru: '.',
    RU: ',',
    en: '/',
    EN: '?',
  },
  {
    code: 'ArrowUp',
    multi: false,
    value: '&#8593;',
  },
  {
    code: 'ShiftRight',
    multi: false,
    value: 'Shift',
  },
  {
    code: 'ControlLeft',
    multi: false,
    value: 'Ctrl',
  },
  {
    code: 'MetaLeft',
    multi: false,
    value: 'Win',
  },
  {
    code: 'AltLeft',
    multi: false,
    value: 'Alt',
  },
  {
    code: 'Space',
    multi: false,
    value: ' ',
  },
  {
    code: 'AltRight',
    multi: false,
    value: 'Alt',
  },
  {
    code: 'ArrowLeft',
    multi: false,
    value: '&#8592;',
  },
  {
    code: 'ArrowDown',
    multi: false,
    value: '&#8595;',
  },
  {
    code: 'ArrowRight',
    multi: false,
    value: '&#8594;',
  },
  {
    code: 'ControlRight',
    multi: false,
    value: 'Ctrl',
  },
];

let currentLang = 'ru';
let shift = false;
let shiftPress = false;
let caps = false;
let flagLang = true;
let ctrlFlag = false;
let altFlag = false;
let ff = false;

document.body.insertAdjacentHTML('afterbegin', `<div class="container">
                                                    <h1>RSS Virtual Keyboard</h1>
                                                    <div class="input"><textarea class="textarea" autofocus="autofocus"></textarea></div>
                                                    <div class="keyboard"></div>
                                                    <p>Клавиатура создана в операционной среде Windows</p>
                                                    <p>Клавиши для переключения языка - Ctrl + Alt</p>                                              
                                                </div>`);

const keyboard = document.querySelector('.keyboard');

const textArea = document.querySelector('.textarea');

function init() {
  keys.forEach((el) => {
    let button;
    if (el.multi) {
      button = `<div class="key key-${el.code}" data-button="${el.code}"></div>`;
    } else {
      button = `<div class="key key-${el.code}" data-button="${el.code}">${el.value}</div>`;
    }
    keyboard.insertAdjacentHTML('beforeend', button);
  });
}

function changeKeyboard(lang) {
  keys.forEach((el) => { if (el.multi) document.querySelector(`[data-button='${el.code}']`).textContent = el[lang]; });
}

function changeCaps(state) {
  const patter = '[а-яА-ЯёЁa-zA-Z]{1}';
  const re = new RegExp(patter);
  document.querySelectorAll('.key').forEach((el) => {
    const text = el;
    if (el.textContent.length === 1 && re.test(el.textContent)) {
      if (state) {
        text.textContent = el.textContent.toUpperCase();
      } else {
        text.textContent = el.textContent.toLowerCase();
      }
    }
  });
}

function checkCaps() {
  const caspsLock = document.querySelector('[data-button=\'CapsLock\']');
  caspsLock.classList.toggle('backlight');
  caps = !caps;
  if (shift) {
    changeCaps(!caps);
  } else {
    changeCaps(caps);
  }
}

// delete text from textarea at cursor position
function deleteText(direction) {
  let start = textArea.selectionStart;
  let end = textArea.selectionEnd;
  if (direction === 'next') {
    end += 1;
  } else {
    start -= 1;
  }

  const finText = textArea.value.substring(0, start) + textArea.value.substring(end);
  textArea.value = finText;
  textArea.selectionEnd = direction === 'next' ? end - 1 : start;

  if (!shiftPress && shift) {
    shift = false;
    changeKeyboard(currentLang);
    changeCaps(caps);
  }

  textArea.focus();
}

// insert text in textarea at cursor position
function insertText(text) {
  const start = textArea.selectionStart;
  const end = textArea.selectionEnd;
  const finText = textArea.value.substring(0, start) + text + textArea.value.substring(end);
  textArea.value = finText;

  if (!shiftPress && shift) {
    shift = false;
    changeKeyboard(currentLang);
    changeCaps(caps);
  }

  textArea.focus();
  textArea.selectionEnd = (start === end) ? (end + text.length) : end;
}

function switchKey(key) {
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
        changeKeyboard(currentLang.toUpperCase());
        if (caps) {
          changeCaps(false);
        }
      } else {
        shift = false;
        changeKeyboard(currentLang);
        if (caps) {
          changeCaps(true);
        }
      }
      break;

    case 'ShiftRight':
      if (!shift) {
        shift = true;
        changeKeyboard(currentLang.toUpperCase());
        if (caps) {
          changeCaps(false);
        }
      } else {
        shift = false;
        changeKeyboard(currentLang);
        if (caps) {
          changeCaps(true);
        }
      }
      break;

    case 'CapsLock':
      checkCaps();
      break;

    case 'ControlLeft':
      break;

    case 'AltLeft':
      break;

    case 'AltRight':
      break;

    case 'ControlRight':
      break;

    case 'MetaLeft':
      break;

    default:
      insertText(key.innerHTML);
      break;
  }
}

function checkAltCtrl(key) {
  if (ff) {
    if ((key.dataset.button === 'AltLeft' && ctrlFlag) || (key.dataset.button === 'ControlLeft' && altFlag)) {
      if (currentLang === 'ru') {
        currentLang = 'en';
        changeKeyboard('en');
      } else {
        currentLang = 'ru';
        changeKeyboard('ru');
      }
      // changeCaps(caps);
    }
    document.querySelector('[data-button="AltLeft"]').classList.remove('backlight');
    document.querySelector('[data-button="ControlLeft"]').classList.remove('backlight');
    ctrlFlag = false;
    altFlag = false;
    ff = false;
  } else {
    if (key.dataset.button === 'AltLeft') {
      key.classList.add('backlight');
      altFlag = true;
    }
    if (key.dataset.button === 'ControlLeft') {
      key.classList.add('backlight');
      ctrlFlag = true;
    }
    ff = true;
  }
}

keyboard.addEventListener('mousedown', (event) => {
  const key = event.target;
  if (key.classList.contains('key')) {
    key.classList.add('active');
    switchKey(key);

    checkAltCtrl(key);
  }
});

keyboard.addEventListener('mouseup', () => {
  document.querySelectorAll('.key').forEach((el) => el.classList.remove('active'));
  textArea.focus();
});

document.addEventListener('keydown', (event) => {
  const key = document.querySelector(`[data-button='${event.code}']`);
  if (event.code !== 'F5') {
    event.preventDefault();
  }

  if (key) {
    if (!((key.dataset.button === 'ShiftLeft' || key.dataset.button === 'ShiftRight') && shiftPress)) {
      key.classList.add('active');
      switchKey(key);
    }
  } else {
    return;
  }

  if (event.ctrlKey && event.altKey && flagLang) {
    flagLang = false;
    if (currentLang === 'ru') {
      currentLang = 'en';
      changeKeyboard('en');
    } else {
      currentLang = 'ru';
      changeKeyboard('ru');
    }
    changeCaps(caps);
  }

  if (key) {
    if (key.dataset.button === 'ShiftLeft' || key.dataset.button === 'ShiftRight') {
      shiftPress = true;
    }
  }
});

document.addEventListener('keyup', (event) => {
  const key = document.querySelector(`[data-button='${event.code}']`);
  if (key) {
    key.classList.remove('active');
  }

  if (key) {
    if (key.dataset.button === 'ShiftLeft' || key.dataset.button === 'ShiftRight') {
      shift = false;
      shiftPress = false;
      changeKeyboard(currentLang);
      if (caps) {
        changeCaps(caps);
      }
    }
    flagLang = true;
  }
});

const setLocalStorage = () => localStorage.setItem('lang', currentLang);

const getLocalStorage = () => {
  if (localStorage.getItem('lang')) {
    currentLang = localStorage.getItem('lang');
    changeKeyboard(currentLang);
  } else {
    setLocalStorage();
    getLocalStorage();
  }
};

init();
window.addEventListener('load', getLocalStorage);
window.addEventListener('beforeunload', setLocalStorage);
