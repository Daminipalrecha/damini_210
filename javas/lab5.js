var arr3 = new Array(); 

var arr1 =[2,6];
console.log(arr1); 
// console.log(arr1.length); 

var arr2 = [10,34,2,2,6,8,7,12,77];
console.log(arr2);
// console.log(arr2.length); 

for (var i=0;i<arr1.length;i++){
	arr3[i]=arr1[i];
}

var c = arr1.length + arr2.length;
for (i= arr1.length ;i<c;i++){
	arr3[i]=arr2[i-arr1.length] ;
}

console.log(arr3); 

for (i=0;i<arr1.length;i++){
	for (var j=0; j<arr2.length ; j++ ){
		if (arr1[i]==arr2[j]) {
			arr3[i]=0;
			arr3[arr1.length+j]=0;
		}
	}
}


console.log(arr3); 
var a = Math.max(...arr3);
console.log("max of both arrays which is uncommon is : ",a);