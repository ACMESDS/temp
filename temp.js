var 														// Totem modules
	ENUM = require("../enum");
	
var															// shortcuts
	Copy = ENUM.copy,
	Each = ENUM.each;

var TEMP = module.exports = {
	
	// options
	
	// configuration

	config: function (opts) {  // configure the module
	
		if (opts) Copy(opts, TEMP);
		
	},
	
	start: function () {  // run the module
	}
};