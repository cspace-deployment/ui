/* Copyright 2011 University of California, Berkeley; Museum of Moving Image

Licensed under the Educational Community License (ECL), Version 2.0. You may not use this file except in compliance with this License.

You may obtain a copy of the ECL 2.0 License at https://source.collectionspace.org/collection-space/LICENSE.txt */

/*global jQuery, fluid, window, cspace:true*/
"use strict";

var cspace = cspace || {};

(function($, fluid) {
    
    //TODO: Design Discussion: potentially this should be a component of the sidebar, instead of a component of the recordEditor?

    fluid.defaults("cspace.berkeleyMapperIntegration", {
        gradeNames: ["fluid.modelComponent", "autoInit"],
        model: "{recordEditor}.model",
        parentBundle: "{globalBundle}",
        finalInitFunction: "cspace.berkeleyMapperIntegration.finalInit",
        components: {
             globalModel: "{globalModel}"
        },
        recordType: "{recordEditor}.options.recordType",
        berkeleyMapperBtn: ".csc-berkeleyMapper-btn",
        reportName: "berkeleyMapperTest",
        urls: cspace.componentUrlBuilder({
            reportUrl: "%tenant/%tname/invokereport/%reportcsid/%recordType/%csid/publish",
            configUrl: "%webapp/config/BerkeleyMapperConfig-%recordType.xml",
            tabfileUrl: "%services%publicItemCsid/%tId/content/"
        })
    });
    
    cspace.berkeleyMapperIntegration.finalInit = function(that) {
        $('.secondary-nav-menu-sub .button-row').append('<button type="button" class="csc-berkeleyMapper-btn">Map with BerkeleyMapper</button>');

        $(that.options.berkeleyMapperBtn).click(function(me) {
            return function() {
                //TODO: Figure out an alternate way of getting the CSID of the BerkeleyMapper report
                var reportTypeSelection = $('#reportType-selection option').filter(function(index) {
                    return $(this).text() == me.options.reportName;
                }).val();

                var reportUrl = fluid.stringTemplate(me.options.urls.reportUrl, {
                    reportcsid: reportTypeSelection,
                    recordType: me.options.recordType,
                    csid: me.globalModel.model.primaryModel.csid
                });
                
                //TODO: this should be a POST with json payload to support mapping multiple items down the road
                $.get(reportUrl, function(data, textStatus, jqXHR) {
                    if (textStatus == "success") {
                        //TODO: where should the config file live? 
                        var configfile = fluid.stringTemplate(me.options.urls.configUrl, {
                            recordType: me.options.recordType
                        });
                        
                        var tabfile = fluid.stringTemplate(me.options.urls.tabfileUrl, {
                            publicItemCsid: jqXHR.getResponseHeader("Location"),
                            tId: me.model.fields.tenantId
                        });
                        
                        window.open("http://berkeleymapper.berkeley.edu/index.html?ViewResults=tab&tabfile=" + tabfile + "&configfile=" + configfile);
                    }
                });
            }
        }(that));
    };

})(jQuery, fluid);