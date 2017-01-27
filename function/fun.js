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

/*
	闭包
*/
	//闭包的影响
	function createFunctions () {
		var result = new Array();
		for (var i=0; i<10; i++) {
			result[i] = function () {
				return i;			// i被闭包掉了，所以最后的i都会是10
			}
		}
		return result;
	}
	//解决方案
	//...
	for (var i=0; i<10; i++) {
		result[i] = function(num) {
			return function() {
				return num;
			};
		}(i);
	}
	//...
/*
	匿名函数以及匿名函数解决闭包的方案
*/
	function Unknow () {
		(function(){					//添加私有作用域
			for (var i=0; i<10; i++){
				console.log(i)
			}
		})()
		console.log(i);	//报错
	}
/*
	函数防抖
*/
	// debounce函数用来包裹我们的事件
	function debounce(fn, delay) {
		// 持久化一个timer
		let timer = null;
		// 闭包可以获取到timer
		return function() {
			// 通过函数获取到作用域和参数列表
			// 通过 'this' 和 'arguments'
			let context = this;
			let args = arguments;
			// 如果事件被触发，清除timer并重新开始计时
			clearTimeout(timer);
			timer = setTimeout(function() {
				fn.apply(context, args);
			}, delay);
		}
	}
	function foo(arg1, arg2) {
		console.log(arg1, arg2);
	}

	// 在事件触发的两秒后，我们包裹在debounce中的函数才会被触发
	let elem = document.getElementById('container');
	elem.addEventListener('scroll', debounce(foo, 2000));
	debounce(foo)(1,2)

/*
	移除事件  btn.onclik = null
*/


/*
	模拟事件
*/
//  1.creatEvent()创建event对象

	var btn = document.getElementById('myBtn');

	var event = document.creatEvent('MouseEvents');
	// initEvent = > 其实参数可以不填
	event.initMouseEvent("click", true, true, document.defaultView, 0, 0, 0, 0, 0, false, false, false,false, 0, null);

	btn.dispatchEvent(event);