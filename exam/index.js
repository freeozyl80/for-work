var c = 1;
var cObject = {
	c: 2,
	add: function (argument) {
		this.c = 3;
		(function(){
			this.c = 4;
			console.log(this.c);
		})()
		return this.c;
	}
}
console.log(cObject.add());