// 常量
const a = 'const';  //var a = '123' => error
// 块级作用域
for (let i=0; i++; i<10) {
	// 执行
}
console.log(i) // i is undefined;



// 函数
function sum(num1, num2, ...nums) {
	console.log(num1,num2,nums)
}
sum(1,2,3,4,5);   //1 2 [3, 4, 5]
// 下面两个是相等的
sum(...[1,2,3,4,5])
sum.apply(this,[1,2,3,4,5])

// 迭代器
var someString = "hi";
var iterator = someString[Symbol.iterator]();
iterator + "";                               // "[object String Iterator]"
 
iterator.next();                             // { value: "h", done: false }
iterator.next();                             // { value: "i", done: false }
iterator.next();                             // { value: undefined, done: true }


// 解构赋值
var [name, value] = ["color", "red"]