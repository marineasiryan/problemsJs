// function addZeroToString(str1, str2){
//     while (str1.length > str2.length) {
//         str2 = "0" + str2;
//     }
//     return str2;
// }

// function addTwoBugNumbers(a, b) {
//     if (a.length > b.length) {
//         b = addZeroToString(a,b);
//     } else {
//         a = addZeroToString(b,a);
//     }
//    let a1 = a.split(" ");
//     let b1 = b.split('');
// let a1;
//     let sum = 0;
//     let carry = 0;
//     let array = [];
//     for (var i = a1.length-1; i >= 0; i--) {
//         sum = parseInt(a[i]) + parseInt(b[i]) + parseInt(carry);
//         if (sum >= 10) {
//             carry = 1;
//             sum = sum - 10;
//         } else {
//             carry = 0;
//         }
//         array.push(sum);
//     }
//     console.log(array.reverse().join(""));
//     return array.join("");
// }
// console.log(addTwoBugNumbers(123456789123,123456789123))


var first = '893427328497983427893248932498034289324';
var second = '234859234879342897893427893274';

if (first.length >= second.length) {
	console.log(findSum(first, second));
} else {
	findSum(second, first);
}

function findSum(first, second) {
	var sum = '';
	var carry = 0;
	var diff = second.length - first.length;
	for (i = first.length - 1; i >= 0; i--) {
		var temp =
			(Number(first.charAt(i)) % 10) +
			(Number(second.charAt(i + diff)) % 10) +
			carry;
		if (temp >= 10) {
			sum = (temp % 10) + sum;
			carry = Math.floor(temp / 10);
		} else {
			sum = temp + sum;
			carry = 0;
		}
	}
	if (carry) {
		sum = carry + sum;
	}
	return sum;
}
console.log(findSum());