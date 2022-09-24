function caesarCipher(string, shift) {
    string = string.toLowerCase();
    let result = [];
    for (let i = 0; i < string.length; ++i) {
        let dec = string.charCodeAt(i) + shift;
        if (dec > '9'.charCodeAt() && dec < 'a'.charCodeAt()) {
            dec = (dec - '9'.charCodeAt()) + '0'.charCodeAt() - 1;
        }
        if (dec > 'z'.charCodeAt()) {
            dec = (dec - 'z'.charCodeAt()) + 'a'.charCodeAt() - 1;
        }
        let char = String.fromCharCode(dec);
        result.push(char);
    }
    return result.join('')
}

console.log(caesarCipher('hello2023', 3))