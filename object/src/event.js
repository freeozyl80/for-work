dom.addEventListener('click',function (event) {
	// body...
	event.currentTarget === this // true
	event.target === this

},false);   // false表示冒泡阶段调事件处理程序，true代表捕获阶段调用事件处理程序
// 上面这种匿名函数是不能removerEventListener

// 阻止事件的默认行为 用 
event.preventDefault();
// 阻止事件冒泡 用
event.stopPropagation();
// event.eventPhase    => 1代表捕获阶段调用，2代表正处对象上，3代表冒泡阶段调用

// relatedTarget 事件属性返回与事件的目标节点相关的节点。
// 对于 mouseover 事件来说，该属性是鼠标指针移到目标节点上时所离开的那个节点。
// 对于 mouseout 事件来说，该属性是离开目标时，鼠标指针进入的节点。