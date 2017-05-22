//循环队列
function hotPotato(nameList, num) {
	var queue = new Queue();

	for (var i = 0; i < nameList.length; i++) {
		queue.enqueue(nameList[i]);
	}

	var eliminated = '';
	while (queue.size() > 1) {
		for (var i = 0; i < num; i++) {
			//从队头移除，插入队尾
			queue.enqueue(queue.dequeue());
		}
		//传递次数达到给定次数时，队头拿着花的人被移除
		eliminated = queue.dequeue();
		console.log(`${eliminated}在击鼓传花中被淘汰`);
	}
	//直到只剩一个人时，这个人就是胜者
	return queue.dequeue();
}

var names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
var winner = hotPotato(names, 7);
console.log('胜利者：' + winner);