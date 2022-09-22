function areEqualMostLeastBits(num) {
    let mostSignBit = (num >>> 31);
    let leastSignBit = ((num << 31) >>> 31);
    if (mostSignBit === leastSignBit) {
        return true;
    }
    return false;
}

console.log(areEqualMostLeastBits(11))