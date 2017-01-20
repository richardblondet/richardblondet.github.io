var require = [
// "vendor/module.js",
"vendor/route.js",
"vendor/sanitize.js",
"vendor/animate.js",
"vendor/ui-bootstrap-1.1.0.js"
]
function _load(files, callback) {
	// var head = (document.getElementsByTagName("head")[0] || document.head);
	var head = document.getElementsByTagName("script")[1];

	var ln = files.length - 1;
	[].forEach.call(files, function(file, index) {
		var type = file.split('.')[ (file.split('.').length - 1 )];
		console.log(index);
		switch( type ) {
			case 'css':
				// CSS CODE HERE
				break;
			default:
				var s = document.createElement("script");
					s.src = file;
					s.type = "text/javascript";
					s.async = true;
					
					// head.appendChild( s );
					(document.getElementsByTagName("body")[0] || document.body).insertBefore(s, head);
					if( index == ln ) {
						s.addEventListener("load", callback);
						
					}
				break;
		}
	})
}
_load(require, function(){
	// console.log("FROM LOAD");
	angular.bootstrap(document, ["babysitting"]);
});