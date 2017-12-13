//var arr=[8,32,5,10,1,22,7];
var arr=[5,9,4,20,13,27,3,16,1,10,18,21,7,25,8];
var p =arr.length-1;
var swap;
for (var p = arr.length-1; p > 0; p--) {
	for (var i = 0; i < p; i++) {
		if (arr[i]>arr[p]) {
			swap=arr[p];
			arr[p]=arr[i];
			arr[i]=swap;
		}	

	}	console.log(arr);

}	console.log(arr);




