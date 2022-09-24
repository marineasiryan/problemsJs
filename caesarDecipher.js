function caesarDecipher(string, shift) {
    string = string.toLowerCase();
    let result = [];
    for (let i = 0; i < string.length; ++i) {
        let dec = string.charCodeAt(i) - shift;
        if (dec < '0'.charCodeAt() ) {
            dec = (dec - 10);
        }
        if (dec < 'a'.charCodeAt() && dec > '9'.charCodeAt()) {
            dec = (dec - 26);
        }
        let char = String.fromCharCode(dec);
        result.push(char);
    }
    return result.join('')
}

console.log(caesarDecipher('khoor5356', 3))