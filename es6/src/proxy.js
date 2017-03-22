/*
	个人理解proxy相当于一个中间件，提供被代理对象的handler
	很遗憾，这个没有babel，只能在新版chrome里面跑一下
*/

const target = {
	name: 'Billy Bob',
	age: 15
};
const handler = {
	get(target, key, proxy) {
		const today = new Date();
		console.log(`GET request made for ${key} at ${today}`);
		return Reflect.get(target, key, proxy);
	}
};
const proxy = new Proxy(target, handler);
proxy.name; // => "GET request made for name at Thu Jul 21 2016 15:26:20 GMT+0800 (CST)" // => "Billy Bob"著作权归作者所有。

// new Proxy({},{get:function(){},set:function(){}})

// PS: 如果一个属性不可配置（configurable）和不可写（writable），则该属性不能被代理，通过 Proxy 对象访问该属性会报错。


var twice = {
  apply (target, ctx, args) {
    return Reflect.apply(...arguments) * 2;
  }
};
function sum (left, right) {
  return left + right;
};
var proxy = new Proxy(sum, twice);
proxy(1, 2) // 6
proxy.call(null, 5, 6) // 22
proxy.apply(null, [7, 8]) // 30