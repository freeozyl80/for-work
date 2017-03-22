/*
	提供拦截javascript的方法
*/
/*
	Reflect对象的方法与Proxy对象的方法一一对应，只要是Proxy对象的方法，
	就能在Reflect对象上找到对应的方法。这就让Proxy对象可以方便地调用对应
	的Reflect方法，完成默认行为，作为修改行为的基础。也就是说，不管Proxy
	怎么修改默认行为，你总可以在Reflect上获取默认行为。
*/

// 老写法
Function.prototype.apply.call(Math.floor, undefined, [1.75]) // 1

// 新写法
Reflect.apply(Math.floor, undefined, [1.75]) // 1