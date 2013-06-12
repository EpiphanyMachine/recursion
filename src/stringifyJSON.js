// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
	var string;
	if ( Object.prototype.toString.call( obj ) === '[object Number]' ) {
		string = obj + ',';
	}
	if ( Object.prototype.toString.call( obj ) === '[object String]' ) {
		string = '"' + obj + '",';
	}
	if ( Object.prototype.toString.call( obj ) === '[object Array]' ) {
		string = stringifyJSONarray(obj);
	}
	if ( Object.prototype.toString.call( obj ) === '[object Object]' ) {
		string = stringifyJSONobj(obj);
		string = string.substring(0, string.length - 1) + '},';
	}
	return string.substring(0, string.length - 1);
};

var stringifyJSONobj = function (obj) {
	var string = '{';
	for (var key in obj) {
		string += '"' + key + '":';
		if ( Object.prototype.toString.call( obj[key] ) === '[object Number]' ) {
			string += obj[key] + ',';
		}
		if ( Object.prototype.toString.call( obj[key] ) === '[object String]' ) {
			string += '"' + obj[key] + '",';
		}
		if ( Object.prototype.toString.call( obj[key] ) === '[object Array]' ) {
			string += stringifyJSONarray(obj[key]);
		}
		if ( Object.prototype.toString.call( obj[key] ) === '[object Object]' ) {
			string += stringifyJSONobj(obj[key]);
			string = string.substring(0, string.length - 1) + '},';
		}
	}
	return string.substring(0, string.length - 1) + '}';
};

var stringifyJSONarray = function (obj) {
	var string = '[';
	for (var i = 0; i < obj.length; i++) {
		if ( Object.prototype.toString.call( obj[i] ) === '[object Number]' ) {
			string += obj[i] + ',';
		}
		if ( Object.prototype.toString.call( obj[i] ) === '[object String]' ) {
			string += '"' + obj[i] + '",';
		}
		if ( Object.prototype.toString.call( obj[i] ) === '[object Array]' ) {
			string += stringifyJSONarray(obj[i]);
		}
		if ( Object.prototype.toString.call( obj[i] ) === '[object Object]' ) {
			string += stringifyJSONobj(obj[i]);
			string = string.substring(0, string.length - 1) + '},';
		}
	}
	return string.substring(0, string.length - 1) + '],';
};
