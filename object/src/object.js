/*
object 的实例中有的方法：
	a. constructor: 保存着用于创建当前对象的函数。 
*/
	var a; 
	//a.constructor === Object (native code);
	// var A = function() {} => A.prototype.constructor = function () {}
	// var a = new A() => a.constructor = function () {}
/*
	b. hasOwnProperty(propertyName)。 =>用于检查给定属性在当前对象实例中是否存在。
	in => 只要存在就返回true 
*/
	Object.prototype.P = 1;
	var test = new Object();
	test.b = 1;
	test.hasOwnProperty('b'); // TRUE;
	test.hasOwnProperty('P'); // false;
/*
    c.isPrototypeOf(object)。 =》用于检查对象是否是传入对象的原型
*/
    var c = new Object();
    Object.prototype.isPrototypeOf(c) == true // true;
/*
	propertyIsEnumerable(propertyName) => 检查传入对象是否可以枚举；
*/
/*
	toLocalStirng, toString, valueOf => 并没有什么好说的。
*/

// es6 对象扩展

/*
	mixin对象模式   => 但是mixin的方法不能访问属性 propertire到接受者作为访问属性，object.assign是可以的
*/
	console.log('object assign')
	function d (argument) {
		// body...
	};
	receiver = {
		constructor: d,
		d1: function() {},
		d2: function() {},
	};
	Object.keys(d.prototype).forEach(function(key) {
        console.log(d.prototype[key].toString());
    });

	var receiver = {},
		supplier = {
			get name() {
				return "file.js"
			}
		};
	Object.assign(receiver, supplier);
	// getOwnPropertyDescriptor 是返回指定对象的一个自由属性对应的属性描述符
	// e.g value,writable,get.set.configureable,enumerable
	var descriptor = Object.getOwnPropertyDescriptor(receiver, "name");
	try {
		console.log(descriptor.value);      // "file.js"
		console.log(descriptor.get);        // undefined
	}
	catch (e) {
		console.log(e);
	}
/*
	改变原型
	ES5中添加了Object.getPrototypeOf()方法来检索任何给定对象的原型。
	在ES6中添加了相反操作的方法，Object.setPrototypeOf()，它允许我们改变任何给定对象的原型。
*/
	let person = {
	    getGreeting() {
	        return "Hello";
	    }
	};

	let dog = {
	    getGreeting() {
	        return "Woof";
	    }
	};

	// prototype is person
	let friend = Object.create(person);
	console.log(friend.getGreeting());                      // "Hello"
	console.log(Object.getPrototypeOf(friend) === person);  // true

	// set prototype to dog
	Object.setPrototypeOf(friend, dog);
	console.log(friend.getGreeting());                      // "Woof"
	console.log(Object.getPrototypeOf(friend) === dog);     // true
/*
	来看下Object.create();
*/
	// Object.create实现类式继承
	function Shape() {
		this.x = 0;
		this.y = 0;
	}
	Shape.prototype.move = function (x, y) {
		this.x += x;
    	this.y += y;
    	console.info("Shape moved.");
	}
	function Rectangle() {
		Shape.call(this);
	}
	// 按照我的理解 Object.create(Shape.prototype) 是 等同 new Shape()的
	Rectangle.prototype = Object.create(Shape.prototype);

	var rect = new Rectangle();
	rect instanceof Rectangle //true.
	rect instanceof Shape //true.

	rect.move(1, 1); //Outputs, "Shape moved."
/*
	prototype 是建立在类，而不是在实例上
	contructor 是实例去找类。
*/
	console.log('prototype');
	var Parent = function () {};
	var parent = new Parent();
	var Child = function () {};
	var child = new Child();
	Child.prototype.constructor = Child;
	// 其实constructor的消失是因为 prototype的重写
	Child.prototype = new Parent();
	console.log(child.__proto__)  // Parent();
	console.log(Child.prototype) // Parent();
/*
	super 引用   => 调用原型上的方法
*/
	console.log("super");
	var E = {
		fun : function () {
			console.log('eee');
		}
	}
	var e = {
		 __proto__: E,
		 fun () {
		 	return super.fun();
		 }
	}
	console.log(e.fun()); // eeee
/*
	class 概念
*/
	console.log('class');
	class F {
		constructor (param) {
			this.param = param;
		}
		fun () {
			console.log('This is fun')
		}
	}

	class FF extends F {
		constructor () {
			super();	//如果不写会有 this is not defined的报错
			this.param = 'FF param';
		}
		get area() {
			return this.param;
		}
	}
/*
	defineProperty
	Object.defineProperty(obj, prop, descriptor)
	obj
	需要定义属性的对象。
	prop
	需定义或修改的属性的名字。
	descriptor
	将被定义或修改的属性的描述符。
*/
	console.log('defineProperty');
	var G = {}
	Object.defineProperty(G, "temp", 
		{
			//value : 37,
	   		//writable : true,	//是否可以修改属性的值
	   		enumerable : true,	//for in 能否遍历出来
	   		configurable : true, //是否能够delete
		   	get : function () {
		   		console.log('读取属性时候调用');
		   	},
		   	set : function () {
		   		console.log('赋值的时候调用');
		   	}
	   	}
	);
	console.log(G.temp)
/*
	工厂模式
	构造函数模式  =》 不同实例上的函数是不相等的   =》 所以要定义在prototype上
*/

/*
	getOwenPropertyNames 获取所有包括不可枚举的属性。
*/	
/*
	原型链的问题
*/
	// this.colors 继承以后变成共享的了！！！！！
	function SuperType () {
		this.colors = ['red','blue'];
	}
	function SubType () {

	}
	SubType.prototype = new SuperType();
	var instance1 = new SubType();
	var instance2 = new SubType();
	instance1.colors.push('pink');
	console.log(instance2.colors);
	
	// 解决方法  组合继承
	function Super(name) {
		this.name = name;
		this.colors = ['red' , 'yellow'];
	}	
	Super.prototype.say = function () {
		console.log(this.name);
	}
	function Sub (name ,age) {
		Super.call (this, name);
		this.age = age;
	}
	Sub.prototype = new Super;
	Sub.prototype.constructor = Sub;
	Sub.prototype.sayAge = function () {
		console.log(this.age);
	}
	// 原型式继承
	var person = {
		name: 'zhangyunlu',
		friends: ['a','b']
	}
	var anotherPerson = Object.create(person);
	//Object.create =>
	// function object(o){
	//	function F(){};
	//	F.prototype = o;
	//	return new F();
	//}