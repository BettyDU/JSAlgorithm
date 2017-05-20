//数组是最简单的内存数据结构

/**********声明、创建和初始化数组**********/
//new方法
var daysOfWeek = new Array();
var daysOfWeek = new Array(7);
var daysOfWeek = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
//[]方法
var daysOfWeek = [];

//求斐波那契数列前20个数字
var fibonacci = [];
fibonacci[0] = 1;
fibonacci[1] = 1;
for (var i = 2; i < 20; i++) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]; //
}
for (var i = 1; i < fibonacci.length; i++) {
  //console.log(fibonacci[i]);
}

/**************添加和删除元素**************/
//添加到数组的末尾push,添加到数组开头unshift
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var i = numbers.length; i >= 0; i--) {
  numbers[i] = numbers[i - 1];
}
numbers[0] = -1;

//删除最后的元素pop，删除第一个元素shift
numbers.pop();
//console.log(numbers);

//在数组中的任意位置上删除或添加元素splice，直接对数组进行修改
//array.splice(start, deleteCount, additem1, additem2, ...),返回被删除元素数组
var myFish = ["angel", "clown", "mandarin", "surgeon"];
//从第 2 位开始删除 0 个元素，插入 "drum"
var removed = myFish.splice(2, 0, "drum");
//从第 2 位开始删除 1 个元素，然后插入 "trumpet"
removed = myFish.splice(2, 1, "trumpet");

/**************二维和多维数组**************/
var averageTemp=[];
averageTemp[0] = [72,75,79,79,81,81];
averageTemp[1] = [81,79,75,75,73,72];
function printMatrix(myMatrix) {
  for (var i = 0; i < myMatrix.length; i++) {
    for (var j = 0; j < myMatrix[i].length; j++) {
      console.log(myMatrix[i][j]);
    }
  }
}
printMatrix(averageTemp);