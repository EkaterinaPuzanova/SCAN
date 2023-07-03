export const ValidateInn = (inn) => {
	// let result = false;
  // let errorMessage = '';
	// if (typeof inn === 'number') {
	// 	inn = inn.toString();
	// } else if (typeof inn !== 'string') {
	// 	inn = '';
	// }
	// if (!inn.length) {
	// 	errorMessage = 'ИНН пуст';
	// } else if (/[^0-9]/.test(inn)) {
	// 	errorMessage = 'ИНН может состоять только из цифр';
	// } else if ([10].indexOf(inn.length) === -1) {
	// 	errorMessage = 'ИНН может состоять только из 10 цифр';
	// } else {
	// 	let checkDigit = function (inn, coefficients) {
	// 		let n = 0;
	// 		for (let i in coefficients) {
	// 			n += coefficients[i] * inn[i];
	// 		}
	// 		return parseInt(n % 11 % 10);
	// 	};
  //   let n10 = checkDigit(inn, [2, 4, 10, 3, 5, 9, 4, 6, 8]);
	// 	if (n10 === parseInt(inn[9])) {
	// 		result = true;
	// 	}
	// 	if (!result) {
	// 		errorMessage = 'Неправильное контрольное число';
	// 	}
	// }
	// return {result, errorMessage};
  let result = false;
	if (typeof inn === 'number') {
		inn = inn.toString();
	} else if (typeof inn !== 'string') {
		inn = '';
	}
	let checkDigit = function (inn, coefficients) {
		let n = 0;
		for (let i in coefficients) {
			n += coefficients[i] * inn[i];
		}
		return parseInt(n % 11 % 10);
	};
  let n10 = checkDigit(inn, [2, 4, 10, 3, 5, 9, 4, 6, 8]);
	if (n10 === parseInt(inn[9])) {
		result = true;
	}
	return result;
}