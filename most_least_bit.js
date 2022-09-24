function areEqualMostLeastBits(num) {
    let mostSignBit = (num >>> 31);
    let leastSignBit = ((num << 31) >>> 31);
    return (mostSignBit === leastSignBit)
}

console.log(areEqualMostLeastBits(11))