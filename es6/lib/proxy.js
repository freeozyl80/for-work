/*
	个人理解proxy相当于一个中间件，提供被代理对象的handler
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