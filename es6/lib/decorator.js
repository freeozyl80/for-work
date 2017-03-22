var _class, _dec, _class2, _dec2, _class3, _class4, _dec3, _class5, _desc, _value, _class6;

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

/*
	..........修饰器添加静态属性.............
*/
function testable01(target) {
  target.isTestable = true;
}

let MyTestableClass01 = testable01(_class = class MyTestableClass01 {}) || _class;

console.log(MyTestableClass01.isTestable); // true

/*
	..........修饰器添加函数.............
*/
function testable02(isTestable) {
  return function (target) {
    target.isTestable = isTestable;
  };
}

let MyTestableClass02 = (_dec = testable02(true), _dec(_class2 = class MyTestableClass02 {}) || _class2);

console.log(MyTestableClass02.isTestable); // true

let MyClass = (_dec2 = testable02(false), _dec2(_class3 = class MyClass {}) || _class3);

console.log(MyClass.isTestable); // false

/*
	..........修饰器添加实例属性.............
*/

function testable03(target) {
  target.prototype.isTestable = true;
}

let MyTestableClass03 = testable03(_class4 = class MyTestableClass03 {}) || _class4;

let obj = new MyTestableClass03();
console.log(obj.isTestable); // true

/*
	..........修饰器扩充对象.............
*/
function mixins(...list) {
  return function (target) {
    Object.assign(target.prototype, ...list);
  };
}
const Foo = {
  foo() {
    console.log('foo');
  }
};

let MyTestClass = (_dec3 = mixins(Foo), _dec3(_class5 = class MyTestClass {}) || _class5);


let tempObj = new MyTestClass();
tempObj.foo(); // 'foo'

/*
	修饰器修饰属性 》》》》》》》》》》
*/

// 修饰器函数一共可以接受三个参数，第一个参数是所要修饰的目标对象，第二个参数是所要修饰的属性名，第三个参数是该属性的描述对象。
let Math = (_class6 = class Math {
  add(a, b) {
    return a + b;
  }
}, (_applyDecoratedDescriptor(_class6.prototype, 'add', [log], Object.getOwnPropertyDescriptor(_class6.prototype, 'add'), _class6.prototype)), _class6);


function log(target, name, descriptor) {
  var oldValue = descriptor.value;
  console.log(descriptor.value);
  descriptor.value = function () {
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