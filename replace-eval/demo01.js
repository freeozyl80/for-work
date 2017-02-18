var fun1 = function (arg) {
	eval(arg)
}
var fun2 = function (arg) {
	var temp = new Function(arg);
	temp();
}
fun1('console.log(1)');
fun2('console.log(1)');