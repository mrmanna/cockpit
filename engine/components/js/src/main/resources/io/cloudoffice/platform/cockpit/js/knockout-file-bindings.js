/*
 * knockout-file-bindings
 * Copyright 2014 Muhammad Safraz Razik
 * All Rights Reserved.
 * Use, reproduction, distribution, and modification of this code is subject to the terms and
 * conditions of the MIT license, available at http://www.opensource.org/licenses/mit-license.php
 *
 * Author: Muhammad Safraz Razik
 * Project: https://github.com/adrotec/knockout-file-bindings
 */
(function (factory) {
    // Module systems magic dance.

    if (typeof require === "function" && typeof exports === "object" && typeof module === "object") {
        // CommonJS or Node: hard-coded dependency on "knockout"
        factory(require("knockout"), require("jquery"));
    } else if (typeof define === "function" && define["amd"]) {
        // AMD anonymous module with hard-coded dependency on "knockout"
        define(["knockout", "jquery"], factory);
    } else {
        // <script> tag: use the global `ko` object, attaching a `mapping` property
        factory(ko, jQuery);
    }
}(function (ko, $) {

    var windowURL = window.URL || window.webkitURL;
    
    ko.bindingHandlers.fileInput = {
        init: function (element, valueAccessor) {
            element.onchange = function () {
                var fileData = ko.utils.unwrapObservable(valueAccessor()) || {};



                if (fileData.dataUrl) {
                    fileData.dataURL = fileData.dataUrl;
                }
                if (fileData.objectUrl) {
                    fileData.objectURL = fileData.objectUrl;
                }
                fileData.file = fileData.file || ko.observable();

                var file = this.files[0];

                if (file === undefined) {
                    return;
                }

//                var maxFileSize = 1 * 1024 * 1024; //1MB
//
//                if (file.size > maxFileSize) {
//                    //bindingContext.$data.clearFile(ko.dataFor(element));
//                    alert('Image upload limit is 1MB.');
//                    return;
//                }

                if (file) {
                    fileData.file(file);
                }

                if (!fileData.clear) {
                    fileData.clear = function () {
                        $.each(['file', 'objectURL', 'base64String', 'binaryString', 'text', 'dataURL', 'arrayBuffer'], function (i, property) {
                            if (fileData[property] && ko.isObservable(fileData[property])) {
                                if (property == 'objectURL') {
                                    windowURL.revokeObjectURL(fileData.objectURL());
                                }
                                fileData[property](null);
                            }
                        });
                        element.value = '';
                    }
                }
                if (ko.isObservable(valueAccessor())) {
                    valueAccessor()(fileData);
                }
            };
            element.onchange();
        },
        update: function (element, valueAccessor, allBindingsAccessor) {

            var fileData = ko.utils.unwrapObservable(valueAccessor());

            var file = ko.isObservable(fileData.file) && fileData.file();

            if (fileData.objectURL && ko.isObservable(fileData.objectURL)) {
                var newUrl = file && windowURL.createObjectURL(file);
                if (newUrl) {
                    var oldUrl = fileData.objectURL();
                    if (oldUrl) {
                        windowURL.revokeObjectURL(oldUrl);
                    }
                    fileData.objectURL(newUrl);
                }
            }


            if (fileData.base64String && ko.isObservable(fileData.base64String)) {
                if (fileData.dataURL && ko.isObservable(fileData.dataURL)) {
                    // will be handled
                } else {
                    fileData.dataURL = ko.observable(); // hack
                }
            }

            // var properties = ['binaryString', 'text', 'dataURL', 'arrayBuffer'], property;
            // for(var i = 0; i < properties.length; i++){
            //     property = properties[i];
            ['binaryString', 'text', 'dataURL', 'arrayBuffer'].forEach(function (property) {
                var method = 'readAs' + (property.substr(0, 1).toUpperCase() + property.substr(1));
                if (property != 'dataURL' && !(fileData[property] && ko.isObservable(fileData[property]))) {
                    return true;
                }
                if (!file) {
                    return true;
                }
                var reader = new FileReader();
                reader.onload = function (e) {
                    if (fileData[property]) {
                        fileData[property](e.target.result);
                    }
                    if (method == 'readAsDataURL' && fileData.base64String && ko.isObservable(fileData.base64String)) {
                        var resultParts = e.target.result.split(",");
                        if (resultParts.length === 2) {
                            fileData.base64String(resultParts[1]);
                        }
                    }
                };

                reader[method](file);
            });
        }
    };
    
    ko.bindingHandlers['file'] = {
	init : function(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
            
                    var fileName,
                    fileContent,
                    mimeType,
                    fileSize,
                    fileData;

                    fileName = valueAccessor()['name'];
                    fileContent = valueAccessor()['content'];
                    mimeType = valueAccessor()['mimeType'];
                    fileSize = valueAccessor()['size'];  
                    fileData = valueAccessor()['data']; 
                    
                
		var handler = function() {
			
                        var fileReaders = [];
                        var fileContents = [];
                        var loadCount = 0;
                        var maxFileSize = 2 * 1024 * 1024;
                        
                        function loadend() {
                                    for(var i=0;i<element.files.length;i++){
                                            //alert(i);
                                            var theFile = element.files[i];
                                            fileName("");
                                            mimeType("");
                                            fileContent("");
                                            //console.log(fileName());  
                                            //console.log(fileContent()); 
                                            //console.log(fileSize());
                                            fileName(theFile.name);
                                            mimeType(theFile.type);
                                            if(theFile.size){
                                                fileSize(theFile.size.toString());
                                            }

                                            fileContent(fileContents[i]);

                                            //console.log(fileName());  
                                            //console.log(fileContent());
                                            bindingContext.$data.selectFile(ko.dataFor(element));
                                            //console.log(fileName());  
                                            //console.log(fileContent()); 
                                    }
                                    
                        }
                        
			for(var i=0;i<element.files.length;i++){
                            

				var file = element.files[i];
				
				// Opening the file picker then canceling will trigger a 'change'
				// event without actually picking a file.
				if (file === undefined) {
					return;
				}
                                
//                                if(file.size>maxFileSize){
//                                    //bindingContext.$data.clearFile(ko.dataFor(element));
//                                    alert('ERROR: Large File Size: '+file.name);
//                                    return;
//                                }
                                
                                var fileLoaded = function(event) {
                                        loadCount++;
                                        var resultParts = event.target.result.split(",");
                                        fileContents.push(resultParts[1]);
                                        //Check if we've loaded all the files
                                        if (loadCount == element.files.length) {
                                            loadend();
                                        }
                                  };
                                
                                var reader = new FileReader();

                                reader.onloadend = fileLoaded;
                                          
				reader.readAsDataURL(file);
			
			}
			
		};

		ko.utils.registerEventHandler(element, 'change', handler);
	}
    };

}));
