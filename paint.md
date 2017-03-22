# 流程图
Javascript => Style => Layout => Paint => Composite

1. 下载HTML文档
2. 解析HTML文档
3. 下载文档中的CSS,JS
4. 解析CSS，生成cssdom
5. JS代码交给JS引擎执行
6. CSS Dom + Dom => render Tree
7. 根据Render tree 布局 layout
8. paint
9. 执行图层合并。

小记：
1. window.onload代表所有资源加载完毕（包括图片）
2. domcontentload代表dom树生成
3. css前的js的加载确实会阻碍dom树的生成，但不会影响其他资源的加载(prefetch),但是后面的资源不会执行

在记录下浏览器缓存的问题
1. HTML 防缓存 => <meta content="no-cache">
2. Exipires => 规定缓存失效时间ba
   Cache-Control => 缓存有效时间
3. Last-Modified/if-Modified-Since
	当有效期过后，check服务端文件是否更新的第一种方式
	和服务端文件的最后修改日期对比，如果相同则304，如果不同，200并且更新last-modified时间
4. etag/if-none-match
	当客户端发现和服务器约定的直接读取缓存的时间过了，就在请求中发送If-None-Match选项(上次的etag)

无法被缓存的请求
1. http头 cache-control:no-cache
2. https无法缓存
3. POST请求无法被缓存

<!-- 还是没有好好的理解到位整个浏览器渲染过程 -->
repaint 重绘 发生在元素的可见性发生变化时候，诸如背景色，前景色。一般回流必将引起重绘制
reflow 回流 Dom操作 => frame
	> 导致回流的原因
		1.初始化
		2.渐进回流，即：里面的元素变了
		3.改变大小
		4.样式改变
		5.Dirty
render tree
