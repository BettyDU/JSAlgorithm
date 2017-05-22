function Queue() {
  let items = [];
  //从队尾插入元素
  this.enqueue = function(element) {
    items.push(element);
  };
  //删除队头元素
  this.dequeue = function() {
    return items.shift();
  };

  this.front = function() {
    return items[0];
  };

  this.isEmpty = function() {
    return items === 0;
  };

  this.clear = function() {
    items = [];
  };

  this.size = function() {
    return items.length;
  };

  this.print = function() {
    console.log(items.toString());
  };
}
