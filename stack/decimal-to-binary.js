/***********十进制转换为二进制***********/
function divideBy2(decNumber) {
	var remStack = new Stack(),
		rem,
		binaryString = '';

	while (decNumber > 0) {
		rem = Math.floor(decNumber % 2); //余数取整
		remStack.push(rem); //余数入栈
		decNumber = Math.floor(decNumber / 2); //商取整
	}
	//依次取出余数，直到栈为空
	while (!remStack.isEmpty()) {
		binaryString += remStack.pop().toString();
	}
	return binaryString;
}
console.log(divideBy2(233)); //输出11101001
console.log(divideBy2(10)); //输出1010
console.log(divideBy2(1000)); //输出1111101000
