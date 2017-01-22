/*
	访问对象属性 1：.表示法 2：[]表示法
*/
var a = {
	a1: 1,
	a2: 2,
}
var temp = 'a1';
console.log(a[temp]);
/*
	slice如果有负数的话，则用整个数组长度加上负数生成位置判断
*/
var b = [1,2,3,4]
var temp = b.slice(-4,-3);
console.log(temp);
/*
	splice 
*/
var c = [1,2,3,4,5,6]
console.log(c.splice(0,1));	// 删除 
console.log(c.splice(1,0,'temp')); // 添加
console.log(c.splice(1,1,'temp'));	// 替换
/*
	lastIndexOf()是从数组后面找
*/