//非递归方法
this.binarySearch = function(item) {

	this.quickSort();

	var low = 0,
		high = this.length - 1,
		mid,
		midItem;

	while (low <= high) {

		mid = Math.floor((low + high) / 2);
		midItem = this[mid];

		if (item > midItem) {
			low = mid + 1;
		} else if (item < midItem) {
			high = mid - 1;
		} else {
			return mid;
		}
	}
	return -1;
};

//递归方法
this.binarySearch = function(low, high, item) {

	//this.quickSort();
	if (low <= high) {

		var mid = Math.floor((high + low) / 2),
			midItem = this[mid];

		if (midItem > item) {
			return this.binary_search(low, mid - 1, item);
		} else if (midItem < item) {
			return this.binary_search(mid + 1, high, item);
		} else {
			return mid;
		}
	}
	return -1;
};