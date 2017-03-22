var name = 'World!';
(function () {
    if (typeof name === 'undefined') {
        var name = 'Jack';		// 这个真是个trick, 因为name提前被申明了
        console.log('Goodbye ' + name);
    } else {
        console.log('Hello ' + name);
    }
})();

// 呵呵哒，尼玛switch 用的是 ===
function showCase(value) {
    switch(value) {
    case 'A':
        console.log('Case A');
        break;
    case 'B':
        console.log('Case B');
        break;
    case undefined:
        console.log('undefined');
        break;
    default:
        console.log('Do not know!');
    }
}
showCase(new String('A'));

var a = [0];
if ([0]) {
  console.log(a == true);
} else {
  console.log("wut");
}
