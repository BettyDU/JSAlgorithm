
function parenthesesChecker(symbols) {
	let stack = new Stack(),
		balanced = true, //初始化为平衡
		index = 0,
		length = symbols.length,
		symbol, //被检测的单个字符
		top,
		opens = "([{",
		closers = ")]}";

	while (index < length && balanced) {
		symbol = symbols.charAt(index);
		//遇到开括号，将其入栈
		if (opens.indexOf(symbol) >= 0) {
			stack.push(symbol);
			console.log(`open symbol - stacking ${symbol}`);
		} 
		//遇到闭括号
		else if (closers.indexOf(symbol) >= 0){
			console.log(`close symbol ${symbol}`);
			//先判断开括号的栈是否为空
			if (stack.isEmpty()) {
				balanced = false;
				console.log('Stack is empty, no more symbols to pop and compare');
			} 
			//如果不为空，将栈顶取出进行匹配
			else {
				top = stack.pop();
				if (!(opens.indexOf(top) === closers.indexOf(symbol))) {
					balanced = false;
					console.log(`poping symbol ${top} - is not a match compared to ${symbol}`);
				} else {
					console.log(`poping symbol ${top} - is a match compared to ${symbol}`);
				}
			}
		}
		index++;
	}
	if (balanced && stack.isEmpty()) {
		return true;
	}
	return false;
}

console.log(parenthesesChecker('3+(6-[1]+8/3)}')); //true