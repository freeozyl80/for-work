//elementnode   => 1
//dom   => 9

// dom classList
div.classList.add
			 .contains
			 .remove
			 .toggle

//焦点管理
var button = document.getElementById("myButton");
button.focus();
document.activieElement === button // true;

// HTMLdocument的变化。
	
	//1. readyState
		document.redayState == 'complete'; //loading

// 自定义属性:  data-开头  
	var div = document.getElementById('myDiv');
	div.dataset.appId; // <div id="myDiv" data-appId = '123'></div>

// insertAdjacentHTML();
	element.insertAdjacentHTML('beforebegin', '<p>12313</p>'); //afterbegin beforeend afterend;


/*
	DOMCotentLoaded 事件
	window.load会在页面中的一切都加载完毕时触发
	DOMContentLoaded事件则是形成完整的dom树后触发，不会例会js.css，图像等其他资源的加载
*/

	document.addEventListener('DOMContentLoaded', function (argument) {
		// body...
	})
	document.addEventListener("DOMContentLoaded", function() {
	   // ...代码...
	}, false);

	window.addEventListener("load", function() {
	    // ...代码...
	}, false);
/*
	orientationchange  => 手持设备是否移动
*/

/*
	触摸事件
*/






