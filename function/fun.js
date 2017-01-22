/* 
	函数间的传值是按值传递的
*/
	function setName (obj) {
		obj.name = "Zhangyunlu",
		obj = new Object();
		obj.name = "GG"
	}
	var person = new Object();
	setName(person);
	console.log(person.name);	//Zhangyunlu
/*
	instanceof 是判断是否是某对象的实例
*/
/*
	函数没有块级作用域
*/
	for（var i =0; i<10; i++）{

	}
	console.log(i); // 10
/*
	arr.reduce(callback, accumulator, currentValue, currentIndex)
*/
	var sum = [0, 1, 2, 3].reduce(function(a, b) {
	  return a + b;
	}, 0);
	// 6
/*
	arguments.callee 是一个指向arguments对象的函数 的指针
*/
	function faactorial (num) {
		if (num <= 1) {
			return 1
		} else {
			return num * arguments.callee(num - 1)''
		}
	}
/*
	apply, call, bind
*/
	var a = function(){ console.log(this) };
    var attr = new Array();
    a.bind(attr)()  // []
    a.call(attr)  // []
    a.apply(attr,[]) // []

    // apply支持数组参数。e.g Math.max.apply(null.array)