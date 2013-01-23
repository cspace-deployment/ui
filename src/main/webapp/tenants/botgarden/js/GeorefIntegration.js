/*
Copyright 2011 University of California, Berkeley; Museum of Moving Image

Licensed under the Educational Community License (ECL), Version 2.0. 
You may not use this file except in compliance with this License.

You may obtain a copy of the ECL 2.0 License at
https://source.collectionspace.org/collection-space/LICENSE.txt
*/

/*global jQuery, fluid, window, cspace:true*/
"use strict";

var cspace = cspace || {};

(function ($, fluid) {   
    
    fluid.defaults("cspace.georefIntegration", {
        gradeNames: ["fluid.rendererComponent", "autoInit"],
        selectors: {
			georefBtn: ".csc-georef-btn",
            georefSrc: ".csc-georef-src .content textarea",
			
			georefLatitude: ".csc-georef-lat",
			georefLongitude: ".csc-georef-long",
			georefDatum: ".csc-georef-datum",
			georefUncertainty: ".csc-georef-uncertainty",
			georefUncertaintyUnits: ".csc-georef-uncertaintyUnits",
			georefProtocol: ".csc-georef-protocol",
            georefRemarks: ".csc-georef-remarks"
		},
		model: {
			source: "santa cruz, ca",
			latitude: "",
			longitude: "",
			datum: "",
			uncertainty: "",
			uncertaintyUnits: "",
			protocol: "",
			remarks: ""
		},
		events: {
			onGeoRef: null,
		},
		parentBundle: "{globalBundle}",
		produceTree: "cspace.georefIntegration.produceTree",
		finalInitFunction: "cspace.georefIntegration.finalInit",
		renderOnInit: true
	});
	
	cspace.georefIntegration.produceTree = function (that) {
		return {
			georefSrc: "${source}",
			georefBtn: {
				decorators: [{
					type: "jQuery",
					func: "click",
                    args: (
						function() {
							console.log("clicky");
						}
					)
				}]
			}
		};
	}
	
    cspace.georefIntegration.finalInit = function (that) {
        $(that.options.selectors.georefBtn).css("color", "purple").click(function() { console.log("clicky") });
    };
		
})(jQuery, fluid);