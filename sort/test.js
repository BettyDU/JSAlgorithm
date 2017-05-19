var number = 285.44;

function transform(array) {
	var result = 1;
	array.forEach(function(val, index) {
		result *= Number(val);
	});
	return result.toString().split("");
}

function countTimes(num) {
	if(num<=0||num>2000000000){
		return;
	}
	var strArray = Math.floor(num).toString().split("");
	var count = 0;
	while (strArray.length > 1) {
		strArray=transform(strArray);
		count++;
	}
	console.log(count);
}
countTimes(number);