document.addEventListener("DOMContentLoaded", function() {
   	console.log('页面加载完毕');
   	setTimeout(function(){
   		throw new Error(0);
   	}, 1000);
}, false);
