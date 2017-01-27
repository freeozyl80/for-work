/*
	判断是否支持canvas
*/
var drawing = document.getElementById('drawing');
if (drawing.getContext) {
	console.log('浏览器支持canvas')
}
/*
	translate 是针对坐标系而言不是针对canvas上的图像而言
*/
/*
	canvas save restore 相当于撤销和重建
*/
/*
	imagesData 对象是三个属性 (width, height, data); data是个数组
*/
	var imageData = context.getImageData(10, 5, 50, 50)