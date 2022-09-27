function split_by(str, delim) {
    let elem = '';
    let result = [];
    for (let i = 0; i < str.length; ++i) {
        if (str[i] === delim) {
            result.push(elem);
            elem = '';
            str = str.replace(delim, '');
        }
        elem += str[i];
    }
    result.push(elem)
    console.log(result);
}

split_by('how, did i spend, summer holidays', ',')