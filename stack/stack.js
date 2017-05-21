
function Stack() {
	var items = [];
	//添加一个（或几个）新元素到栈顶
	this.push = function(element) {
		items.push(element);
	};
	//移除栈顶的元素，同时返回被移除的元素
	this.pop = function() {
		return items.pop();
	};
	//返回栈顶的元素，不对栈做任何修改
	this.peek = function() {
		return items[items.length - 1];
	};
	//如果栈里没有任何元素就返回true，否则返回false
	this.isEmpty = function() {
		return items.length == 0;
	};
	//返回栈里的元素个数
	this.size = function() {
		return items.length;
	};
	//栈清空
	this.clear = function() {
		items = [];
	};
	this.print = function() {
		console.log(items.toString());
	};
}
var stack = new Stack();
console.log(stack.isEmpty());
stack.push(5);
console.log(stack.peek());
stack.push(11);
stack.pop();
console.log(stack.size()); 
console.log(stack.isEmpty()); 
stack.print();

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
