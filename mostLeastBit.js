// function mostLeast(dec) {
//     if (dec === 0) {
//         return 0;
//     }
//     let bin = (dec >>> 0).toString(2).padStart(32, "0");
//     console.log("the binary number is ", bin);
//
//     let lastDigitStr = String(bin).slice(-1);
//     let lastDigitNum = Number(lastDigitStr);
//     console.log("last digit is ", lastDigitNum);
//
//     let firstDigitStr = String(bin)[0];
//     let firstDigitNum = Number(firstDigitStr);
//     console.log("first digit is ", firstDigitNum);
//
//     if (lastDigitNum === firstDigitNum) {
//         return true;
//     }
//     return false;
// }
// console.log(mostLeast(10));


const areBinaryFirstLastBitsEqual = (value) => {
    const lastBit = (value >>> 31);
    const firstBit = ((value << 31) >>> 31);
    return Boolean(lastBit & firstBit);
}

console.log(areBinaryFirstLastBitsEqual(15));
console.log(areBinaryFirstLastBitsEqual(-5));

