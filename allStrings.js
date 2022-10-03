// function allString() {
//     let result = [];
//     let characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
//     let str = characters[0];

//     for (let i = 0; i < characters.length; ++i) {
//         str += characters[i];
//         result.push(str);
//         str = characters[0];
//         for (let j = i + 1; j < characters.length; ++j) {
//             result.push(characters.slice(i, j));
//         }
//     }
//     return result;
// }
// console.log(allString())




// function allPossibleCombinations(input, length, curstr) {
//     if(curstr.length == length) return [ curstr ];
//     var ret = [];
//     for(var i = 0; i < input.length; i++) {
//         ret.push.apply(ret, allPossibleCombinations(input, length, curstr + input[i]));
//     }
//     return ret;
// }

// var input = [ 'a', 'b', 'c' ];
// console.log(allPossibleCombinations(input, 11, ''));





function subset(arra, arra_size) {
    var result_set = [],
        result;


    for (var x = 0; x < Math.pow(2, arra.length); x++) {
        result = [];
        i = arra.length-1 ;
        do {
            if ((x & (1 << i)) !== 0) {
                result.push(arra[i]);
            }
        } while (i--);

    
            result_set.push(result);
        
    }

    return result_set;
}

console.log(subset(['a', 'b', 'c', 'd', 'e', 'f']));


// const generateCharsMap = (chars) => {
//     const charsMap = new Map();
 
//     charsMap.set('-1', '');
 
//     chars.forEach((char, index) => {
//        charsMap.set(`${index}`, char);
//     });
 
//     return charsMap;
//  }
 
//  const generateArrayWithGivenValue = (arrayLength, value) => {
//     let array = [];
//     for (let i = 0; i < arrayLength; i++) {
//        array.push(value);
//     }
//     return array;
//  }
 
//  const decodeMapValues = (map, array) => {
//     let mutatedArray = array.slice();
//     for (let i = 0; i < mutatedArray.length; i++) {
//        if (map.has(String(mutatedArray[i]))) {
//           mutatedArray[i] = map.get(String(mutatedArray[i]));
//        }
//     }
//     return mutatedArray.join('');
//  }
 
//  const incrementArrayValues = (array, lastKey) => {
//     for (let i = array.length-1; i >= 0; i--) {
//        if (array[i] != parseInt(lastKey)) {
//           array[i]++;
//           return; 
//        } else {
//           array[i] = 0;
//        }
//     }
//  }
 
//  const upto16AllPossibleStrings = () => {
//     const englishAlphabet = 'abc';
//     const decimals = '01';
//     const emptyValue = -1;
//     const allCharsArray = decimals.concat(englishAlphabet).split('');
    
//     const allCharsMap = generateCharsMap(allCharsArray);
//     let array16Symbols = generateArrayWithGivenValue(3, emptyValue);
//     const lastKeyInMap = [...allCharsMap.keys()].pop();
 
//     for (let i = 0; i < Math.pow(3, allCharsArray.length) - 1; i++) {
//        incrementArrayValues(array16Symbols, lastKeyInMap);
//        console.log(decodeMapValues(allCharsMap, array16Symbols));
//     }
//  }
 
//  (upto16AllPossibleStrings());