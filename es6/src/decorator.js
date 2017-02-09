/*
	..........修饰器添加静态属性.............
*/
function testable01(target) {
  target.isTestable = true;
}

@testable01

class MyTestableClass01 {}

console.log(MyTestableClass01.isTestable) // true

/*
	..........修饰器添加函数.............
*/
function testable02(isTestable) {
  return function(target) {
    target.isTestable = isTestable;
  }
}

@testable02(true)
class MyTestableClass02 {}
console.log(MyTestableClass02.isTestable) // true

@testable02(false)
class MyClass {}
console.log(MyClass.isTestable) // false

/*
	..........修饰器添加实例属性.............
*/

function testable03(target) {
  target.prototype.isTestable = true;
}

@testable03
class MyTestableClass03 {}

let obj = new MyTestableClass03();
console.log(obj.isTestable) // true

/*
	..........修饰器扩充对象.............
*/
function mixins(...list) {
  return function (target) {
    Object.assign(target.prototype, ...list)
  }
}
const Foo = {
  foo() { console.log('foo') }
};

@mixins(Foo)
class MyTestClass {}

let tempObj = new MyTestClass();
tempObj.foo()// 'foo'

/*
	修饰器修饰属性 》》》》》》》》》》
*/

// 修饰器函数一共可以接受三个参数，第一个参数是所要修饰的目标对象，第二个参数是所要修饰的属性名，第三个参数是该属性的描述对象。
class Math {
  @log
  add(a, b) {
    return a + b;
  }
}

function log(target, name, descriptor) {
  var oldValue = descriptor.value;
  console.log(descriptor.value);
  descriptor.value = function() {
    console.log(`Calling "${name}" with`, arguments);
    return oldValue.apply(null, arguments);
  };

  return descriptor;
}

const math = new Math();

// passed parameters should get logged now
math.add(2, 4);

/*
	修饰器不能修饰函数
*/