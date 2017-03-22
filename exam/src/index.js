// const s = new Set();

// [2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));

// for (let i of s) {
//   console.log(i);
// }

const obj = {
  toString() {
    return 'abc';
  }
};
const sym = Symbol(obj);
console.log(sym) // Symbol(abc)

// 没有参数的情况
var s1 = Symbol();
var s2 = Symbol();

s1 === s2 // false

// 有参数的情况
var s1 = Symbol('foo');
var s2 = Symbol('foo');

s1 === s2 // false

/*
	重点就是作为属性名字
*/
var mySymbol = Symbol();

// 第一种写法
var a = {};
a[mySymbol] = 'Hello!';

// 第二种写法
var a = {
  [mySymbol]: 'Hello!'
};

// 第三种写法
var a = {};
Object.defineProperty(a, mySymbol, { value: 'Hello!' });

// 以上写法都得到同样结果
a[mySymbol] // "Hello!"

// 》注意，Symbol值作为对象属性名时，不能用点运算符。


/* e.g */
const shapeType = {
  triangle: Symbol()
};

function getArea(shape, options) {
  var area = 0;

  switch (shape) {
    case 'Triangle': // 魔术字符串
      area = .5 * options.width * options.height;
      break;
    /* ... more code ... */
  }

  return area;
}

getArea('Triangle', { width: 100, height: 100 }); // 魔术字符串
getArea(shapeType.triangle, { width: 100, height: 100 });