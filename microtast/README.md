# 当我们去调用 setTimeout http.get fs.readFile, Node.js会把这些定时器、http、IO操作发送给另一个线程以保证V8继续执行我们的代码。

#然而我们只有一个主线程和一个 call-stack ，这样当一个读取文件的操作还在执行时，有一个网络请求request过来，那这时他的回调就需要等stack变空才能执行。

任务队列不止一个，还有 microtasks 和 macrotasks

> microtasks:

process.nextTick
promise
Object.observe

> macrotasks:

setTimeout
setInterval
setImmediate
I/O

https://github.com/ccforward/cc/issues/47


##################


# 个人理解，macrotasks 是大的，microtask是小的。一般都是小的先执行，然后再看大的。