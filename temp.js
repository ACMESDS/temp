var 														// Totem modules
	ENUM = require("../enum");
	
var															// shortcuts
	Copy = ENUM.copy,
	Each = ENUM.each;

var TEMP = module.exports = {
	
	// options
	
	thread: null,  // reserved for sql connector
	
	errors: {
		example: new Error("this is an exampe error message")
	},
	
	paths: {  // for paths to things
		example: "./this/path/is/long"
	},
	
	// configuration

	config: function (opts) {  // configure the module
	
		if (opts) Copy(opts, TEMP);
		
	},
	
	start: function () {  // run the module
	}
};