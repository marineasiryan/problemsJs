function createVector(num) {
    let elem = Math.ceil(num / 31);
    let vector = new Array(elem);
    for (let i = 0; i < elem; ++i) {
        vector[i] = 0;
    }
    return vector;
}

function set(vector, pos) {
    let bitIndex = Math.floor(pos / 31);
    let mask = 1 << pos % 32;
    if (vector) {
        return vector[bitIndex] = vector[bitIndex] | mask;
    }
    return vector[bitIndex] = vector[bitIndex] & ~mask;
}

function get(vector, pos) {
    let bitIndex = Math.floor(pos / 31);
    let mask = 1 << pos % 32;
    let value = vector[bitIndex] & (mask);
    return value !== 0;
}

let vec = createVector(100);
console.log(set(vec, 16));
console.log(set(vec, 36));
console.log(get(vec, 36));
console.log(get(vec, 19));