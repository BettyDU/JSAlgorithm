//记录步数
var i = 0;
//将n个盘子由初始塔移动到目标塔(利用借用塔)  
function towerOfHanoi(n, from, to, helper) {
	var moveElement;
	if (n > 0) {
		towerOfHanoi(n - 1, from, helper, to); //先将初始塔的前n-1个盘子借助目的塔移动到借用塔
		moveElement = from.pop();
		to.push(moveElement); //将剩下的一个盘子移动到目的塔上  
		i++;
		console.log('-----');
		console.log(`第${i}步：将${moveElement}号盘子 ${from.name } ---> ${to.name}`);
		towerOfHanoi(n - 1, helper, to, from); //最后将借用塔上的n-1个盘子移动到目的塔上 
	}
}

var source = new Stack("a");
source.push(3);
source.push(2);
source.push(1);

var dest = new Stack("c");
var helper = new Stack("b");

towerOfHanoi(source.size(), source, dest, helper);

source.print();
helper.print();
dest.print();