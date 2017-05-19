function ArrayList() {
	var array = []; 
	this.insert = function(item) { 
		array.push(item);
	};
	this.toString = function() { 
		return array.join();
	};
	this.bubbleSort = function() {
		var length = array.length; 
		for (var i = 0; i < length; i++) {
			for (var j = 0; j < length - 1; j++) { 
				if (array[j] > array[j + 1]) { 
					swap(j, j + 1, array); 
				}
			}
		}
	};
	//改进版的冒泡排序,时间复杂度是O(n2)
	this.modifiedBubbleSort = function() {
		var length = array.length;
		for (var i = 0; i < length; i++) {
			for (var j = 0; j < length - 1 - i; j++) { 
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
			for (var j = i; j < length; j++) {
				if (array[indexMin] > array[j]) { 
					indexMin = j;
					if (i !== indexMin) {
						swap(i, indexMin,array);
					}
				}
			}
		}
	};
}
var swap = function(index1, index2, array) {
	var aux = array[index1];
	array[index1] = array[index2];
	array[index2] = aux;
};

function createNonSortedArray(size) { 
	var array = new ArrayList();
	for (var i = size; i > 0; i--) {
		array.insert(i);
	}
	return array;
}
var myArray = createNonSortedArray(5); 
console.log(myArray.toString());
myArray.modifiedBubbleSort();
console.log(myArray.toString());