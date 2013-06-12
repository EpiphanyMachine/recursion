// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
	var string = '{';
	for (var key in obj) {
		string += '"' + key + '":"' + obj[key] + '",';
	}
	return string.substring(0, string.length - 1) + '}';
};
