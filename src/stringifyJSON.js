// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
  var result = '';  //set for empty obj
// check for null, undefined, boolean, number or string
	if( obj === null ) {
		return 'null';
	} else if ( obj === undefined ) {
		return undefined;
  } else if( obj === true || obj === false || typeof(obj) === 'number' ){
		return obj.toString();
  } else if( typeof(obj) === 'string' ) {
		return '"' + obj + '"';
// check for array
  } else if( Array.isArray(obj) ) {
		result = []; //reset to empty array (was empty object)
		for(var i = 0; i < obj.length; i++) {
			result.push(stringifyJSON(obj[i]));
		}
		return '[' + result + ']';
// check for object
		} else if( typeof obj === 'object' ) {
		for( var key in obj ) {
			// if value is undefined or a function, skip that key
			if( stringifyJSON(obj[key]) !== undefined || null ) {
				result += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
			}
		}
// after all keys have been evaluated remove trailing comma
		return '{' + result.slice(0, result.length - 1) + '}';
	}
};