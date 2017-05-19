function ArrayList() {
	var array = []; //{1}
	this.insert = function(item) { //{2}
		array.push(item);
	};
	this.toString = function() { //{3}
		return array.join();
	};
	this.bubbleSort = function() {
		var length = array.length; //{1}
		for (var i = 0; i < length; i++) {
			for (var j = 0; j < length - 1; j++) { //{3}
				if (array[j] > array[j + 1]) { //{4}
					swap(j, j + 1, array); //{5}
				}
			}
		}
	};
	//改进版的冒泡排序,时间复杂度是O(n2)
	this.modifiedBubbleSort = function() {
		var length = array.length;
		for (var i = 0; i < length; i++) {
			for (var j = 0; j < length - 1 - i; j++) { //{1}
				if (array[j] > array[j + 1]) {
					swap(j, j + 1, array);
				}
			}
		};
	};
	//选择排序
	this.selectionSort = function() {
		var length = array.length,
			indexMin;
		for (var i = 0; i < length - 1; i++) {
			indexMin = i;
			for (var j = i; j < length; j++) {}
		}
		if (array[indexMin] > array[j]) { //{5}
			indexMin = j;
			//{6} //{7}
			if (i !== indexMin) {
				swap(i, indexMin);
			}
		}
	};
}
var swap = function(index1, index2, array) {
	var aux = array[index1];
	array[index1] = array[index2];
	array[index2] = aux;
};

function createNonSortedArray(size) { //{6}
	var array = new ArrayList();
	for (var i = size; i > 0; i--) {
		array.insert(i);
	}
	return array;
}
var myArray = createNonSortedArray(5); //{7}
console.log(myArray.toString());
myArray.modifiedBubbleSort();
console.log(myArray.toString());