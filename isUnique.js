function isUnique(str) {
    const a_pos = 97;
    let table = 0;
    for (let i = 0; i < str.length; ++i) {
        let pos = str.charCodeAt(i) - a_pos;
        if (table & (1 << pos)) {
            return false;
        }
        table |= (1 << pos);

    }
    return true;
}
console.log(isUnique('hello'));




