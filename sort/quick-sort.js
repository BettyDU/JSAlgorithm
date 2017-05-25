var quickSort = function(arr) {　　

    if (arr.length <= 1) {
        return arr;
    }

    var pivotIndex = Math.floor(arr.length / 2);　　
    var pivot = arr.splice(pivotIndex, 1)[0]; //将中间数删除　　
    var left = [];　　
    var right = [];

    for (var i = 0; i < arr.length; i++) {　　　　
        if (arr[i] < pivot) {　　　　　　
            left.push(arr[i]);　　　　
        } else {　　　　　　
            right.push(arr[i]);　　　　
        }　　
    }

    return quickSort(left).concat([pivot], quickSort(right));
};

var array = [43, 6, 37, 12, 46, 94, 32];
var newArr = quickSort(array);
console.log(newArr);