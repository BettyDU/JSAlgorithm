//设置优先级，然后在正确的位置添加元素

//优先队列构造函数
function PriorityQueue(argument) {
  var items = [];

  //优先元素构造函数
  function QueueElement(element, priority) {
    this.element = element;
    this.priority = priority;
  }

  //插入元素
  this.enqueue = function(element, priority) {
    var queueElement = new QueueElement(element, priority);

    //如果队列为空，直接将元素入列
    if (this.isEmpty()) {
      items.push(queueElement);
    } else {
      var added = false;
      for (var i = 0; i < items.length; i++) {
        //找到比要添加的元素的priority值更大的项时，就把新元素插入到它之前
        if (queueElement.priority < items[i].priority) {
          items.splice(i, 0, queueElement);
          added = true;
          break;
        } 
        //对于优先级相同，但是先添加到队列的元素，同样遵循先进先出的原则
        else if (queueElement.priority = items[i].priority) {
          items.splice(i + 1, 0, queueElement);
          added = true;
          break;
        }
      }

      //如果要添加元素的priority值大于任何已有的元素，把它添加到队列的末尾
      if (!added) {
        items.push(queueElement);
      }
    }
  };
  //其他方法和默认的Queue实现相同
}

var priorityQueue = new PriorityQueue();
priorityQueue.enqueue("John", 2);
priorityQueue.enqueue("Jack", 1);
priorityQueue.enqueue("Camila", 1);
priorityQueue.print();