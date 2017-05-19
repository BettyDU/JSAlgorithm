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
		for (var i = 0; i < length; i++) { //{2}
		}
	};
	for (var j = 0; j < length - 1; j++) { //{3}
		if (array[j] > array[j + 1]) { //{4}
			swap(j, j + 1, array); //{5}
		}
	}
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
myArray.bubbleSort();
console.log(myArray.toString());
//{8}
//{9} 7 //{10}