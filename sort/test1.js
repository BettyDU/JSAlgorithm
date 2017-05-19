function isPrimeNumber(num) {
	for (var i = 2; i < num; i++) {
		if (num % i !== 0) {
			return true;
		}
	}
	return false;
}

function test(num) {
	var strArray = Math.floor(num).toString().split("");
	var length = strArray.length;
	var count = 0;
	for (var i = 0; i < length; i++) {
		for (var j = 1; j < length - i; j++) {
			var newNum1 = Number(strArray[i] + strArray[j]);

			if (isPrimeNumber(newNum1)) {
				count++;
			}
			if (strArray[i] !== strArray[j]) {
				var newNum2 = Number(strArray[j] + strArray[i]);
				if (isPrimeNumber(newNum2)) {
					count++;
				}
			}

		}
		return count;
	}
}

function findNum(a, b) {
	var count = 0;
	if (a < 1 || b > 10000 || a > b) {
		return;
	}
	for (var i = a; i <= b; i++) {
		count += test(i);
	}
	console.log(count);
}
findNum(11, 20);