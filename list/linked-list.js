function LinkedList() {

	let Node = function(element) {
		this.element = element;
		this.next = null;
	};

	let length = 0;
	let head = null;

	//向列表尾部添加一个新的项
	this.append = function(element) {
		let node = new Node(element),
			current;
		//如果链表为空，该节点为第一个节点
		if (head === null) {
			head = node;
		} else {
			current = head;

			//循环列表直到找到最后一项
			while (current.next) {
				current = current.next;
			}

			//找到最后一项,建立连接
			current.next = node;
		}

		length++; //更新列表长度
	};

	//向列表的特定位置插入一个新的项
	this.insert = function(position, element) {
		//检查越界值
		if (position >= 0 && position <= length) {

			let node = new Node(element),
				current = head,
				previous,
				index = 0;
			//在第一个位置添加
			if (position === 0) {
				node.next = current;
				head = node;
			} else {
				while (index++ < position) {
					previous = current;
					current = current.next;
				}
				node.next = current;
				previous.next = node;
			}

			length++; //update size of list

			return true;

		} else {
			return false;
		}
	};
	//从列表的特定位置移除一项
	this.removeAt = function(position) {
		//判断是否越界
		if (position > -1 && position < length) {
			let current = head,
				previous,
				index = 0;

			//移除第一项，让head指向列表的第二个元素
			if (position === 0) {
				head = current.next;
			} else {
				while (index++ < position) {
					previous = current;
					current = current.next;
				}
				//当前元素被丢弃在计算机内存中，等着被垃圾回收器清除
				previous.next = current.next;
			}
			length--;

			return current.element;
		} else {
			return null;
		}
	};

	//从列表中移除一项元素
	this.remove = function(element) {
		let index = this.indexOf(element);
		return this.removeAt(index);
	};

	//返回元素在列表中的索引,如果列表中没有该元素则返回-1
	this.indexOf = function(element) {
		let current = head,
			index = 0;

		while (current) {
			if (element === current.element) {
				return index;
			}
			index++;
			current = current.next;
		}
		return -1;
	};

	this.isEmpty = function() {
		return length === 0;
	};

	this.size = function() {
		return length;
	};

	//把LinkedList对象转换成一个字符串
	this.toString = function() {
		let current = head,
			string = '';

		while (current) {
			string += current.element + (current.next ? ', ' : '');
			current = current.next;
		}
		return string;
	};

	this.print = function() {
		console.log(this.toString());
	};
}

var list = new LinkedList();
list.append(15);
list.append(10);
list.insert(1, "sas")
list.print();
list.remove(10);
list.print();
list.removeAt(1);
list.print();
console.log(list.isEmpty());