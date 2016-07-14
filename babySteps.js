var arguments = process.argv;
arguments = arguments.splice(2,arguments.length);

var answer = arguments.reduce(function(a,b){
	return +a + +b;
});
console.log(answer);