const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
    '__________': ' ',
};
function decode(expr) {
    let re;
    let res = "";
    let res1 = [];
    let result;
    re = expr.match(/.{10}/g)
    for (let i = 0; i < re.length; i++) {
        let a = re[i];
        res = a.replace(/1{2}/g, '-').replace(/10/g, '.').replace(/0/g, '').replace(/\*/g, '_');

        for (let key in MORSE_TABLE) {
            if (res === key) {
                res1.push(MORSE_TABLE[res]);
                result = res1.join('');
            }
        }
    }
    return result;
}

module.exports = {
    decode
}


// console.log(decode('1010101100**********1111100010'))
