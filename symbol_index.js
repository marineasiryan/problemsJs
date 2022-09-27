function symb_index(str, char) {
    let indexes = [];
    for (let i = 0; i < str.length; ++i) {
        if (str[i] === char) {
            indexes.push(i)
        }
    }
    return indexes;
}

console.log(symb_index('js squadron', 's'))