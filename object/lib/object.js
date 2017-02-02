/*
object 的实例中有的方法：
	a. constructor: 保存着用于创建当前对象的函数。 
*/
var a;
//a.constructor === Object (native code);
/*
	b. hasOwnProperty(propertyName)。 =>用于检查给定属性在当前对象实例中是否存在。 
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
Object.prototype.isPrototypeOf(c) == true; // true;
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
console.log('object assign');
function d(argument) {
	// body...
};
receiver = {
	constructor: d,
	d1: function () {},
	d2: function () {}
};
Object.keys(d.prototype).forEach(function (key) {
	console.log(d.prototype[key].toString());
});

var receiver = {},
    supplier = {
	get name() {
		return "file.js";
	}
};
Object.assign(receiver, supplier);
// getOwnPropertyDescriptor 是返回指定对象的一个自由属性对应的属性描述符
// e.g value,writable,get.set.configureable,enumerable
var descriptor = Object.getOwnPropertyDescriptor(receiver, "name");
try {
	console.log(descriptor.value); // "file.js"
	console.log(descriptor.get); // undefined
} catch (e) {
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
console.log(friend.getGreeting()); // "Hello"
console.log(Object.getPrototypeOf(friend) === person); // true

// set prototype to dog
Object.setPrototypeOf(friend, dog);
console.log(friend.getGreeting()); // "Woof"
console.log(Object.getPrototypeOf(friend) === dog); // true
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
};
function Rectangle() {
	Shape.call(this);
}
// 按照我的理解 Object.create(Shape.prototype) 是 等同 new Shape()的
Rectangle.prototype = Object.create(Shape.prototype);

var rect = new Rectangle();
rect instanceof Rectangle; //true.
rect instanceof Shape; //true.

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
Child.prototype = new Parent();
console.log(child.__proto__); // Parent();
console.log(Child.prototype); // Parent();
/*
	super 引用   => 调用原型上的方法
*/
console.log("super");
var E = {
	fun: function () {
		console.log('eee');
	}
};
var e = {
	__proto__: E,
	fun() {
		return super.fun();
	}
};
console.log(e.fun()); // eeee
/*
	class 概念
*/
console.log('class');
class F {
	constructor(param) {
		this.param = param;
	}
	fun() {
		console.log('This is fun');
	}
}

class FF extends F {
	constructor() {
		super();
		this.param = 'FF param';
	}
	get area() {
		return this.param;
	}
}