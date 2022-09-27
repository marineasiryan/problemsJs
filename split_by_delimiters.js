function split_by(str, ...delim) {
    let elem = '';
    let result = [];
    for (let i = 0; i < str.length; ++i) {
        for(let char of delim) {
            if (str[i] === char) {
                result.push(elem);
                elem = '';
                str = str.replace(char, '');
            }
        }
        elem += str[i];
    }
    result.push(elem)
    console.log(result);
}

split_by('how, did i sp_end, sum_mer; holidays', ',', ';', '_')