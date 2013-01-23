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
			georef_Btn: ".csc-georef-btn",
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
            // georefLatitude: "${latitude}",
            // georefLongitude: "${longitude}",
            // georefDatum: {
            //     optionnames: ["Please select a value", "Not Recorded", "ADG66", "NAD27", "NAD83", "NAD83&WGS84", "WGS84"],
            //     optionlist: ["", "Not Recorded", "ADG66", "NAD27", "NAD83", "NAD83&WGS84", "WGS84"],
            //     selection: "${datum}"
            // },
            // georefUncertainty: "${uncertainty}",
            // georefUncertaintyUnits: {
            //     optionnames: ["Please select a value", "unknown", "feet", "kilometers", "meters", "miles"],
            //     optionlist: ["", "unknown", "feet", "kilometers", "meters", "miles"],
            //     selection: "${uncertaintyUnits}"
            // },
            // georefProtocol: {
            //     optionnames: ["Please select a value", "Chapman, Wieczorek 2006, Guide to Best Practices for Georeferencing", "MaNIS/HerpNet/ORNIS Georeferencing Guidelines", "Georeferencing For Dummies", "BioGeomancer", "Google Maps GeoCoding Service API v3"],
            //     optionlist: ["", "chapman-wieczorek-2006-guide-best-practices-georeferencing", "manis-herpnet-ornis-georeferencing-guidelines", "georeferencing-dummies", "biogeomancer", "Google Maps GeoCoding Service API v3"],
            //     selection: "${protocol}"
            // },
            // georefRemarks: "${remarks}",
			georef_Btn: {
				decorators: [{
					type: "jQuery",
					func: "click",
					args: (
					    function() { 
					        alert('Hello world!');
                            // georefjs.googleGeoref(that.model.source, function(val) {
                            //     console.log(val[0]);
                            //                                 that.applier.requestChange("latitude", val[0].decimalLatitude);
                            //                                 that.applier.requestChange("longitude", val[0].decimalLongitude);
                            //                                 that.applier.requestChange("datum", val[0].geodeticDatum);
                            //                                 that.applier.requestChange("uncertainty", val[0].coordinateUncertaintyInMeters);
                            //                                 that.applier.requestChange("uncertaintyUnits", "meters");
                            //                                 that.applier.requestChange("protocol", val[0].georeferenceProtocol);                             
                            //                                 that.applier.requestChange("remarks", val[0].georeferenceRemarks);
                            //                                 that.refreshView();
                            //                                 $(that.options.selectors.georefLatitude).css({"background": "#fffbbb"});
                            //                                 $(that.options.selectors.georefLongitude).css({"background": "#fffbbb"});
                            //                                 $(that.options.selectors.georefDatum).css({"background": "#fffbbb"});                                
                            //                                 $(that.options.selectors.georefUncertainty).css({"background": "#fffbbb"});
                            //                                 $(that.options.selectors.georefUncertaintyUnits).css({"background": "#fffbbb"});
                            //                                 $(that.options.selectors.georefProtocol).css({"background": "#fffbbb"});
                            //                                 $(that.options.selectors.georefRemarks).css({"background": "#fffbbb"});
                            // });
					    }
					)
				}]
			}
		};
	}
	
    cspace.georefIntegration.finalInit = function (that) {};
		
})(jQuery, fluid);