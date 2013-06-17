// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But in stead we're going to implement it from scratch:
var getElementsByClassName = function (className) {
	var result = [];
	// set base node to check for class
	var nodeTree = document.body.childNodes;
	// write function to check each child node for the class
	var checkClassName = function(node) {
		for ( var i = 0; i < node.length; i++ ) {
			// check if both the node is an element node and contain the class
			if ( node[i].nodeType === Node.ELEMENT_NODE && node[i].classList.contains(className) ) {
				result.push(node[i]);
			}
			// if node contains html inside, check those child nodes as well
			if ( node[i].innerHTML ) {
				checkClassName(node[i].childNodes);
			}
		}
	};
	// run function on itinial nodeTree
	checkClassName(nodeTree);
	return result;
};
