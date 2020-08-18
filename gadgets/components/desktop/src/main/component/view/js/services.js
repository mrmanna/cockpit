CSSLOADER = {
    load: function (filename) {
        if (!CSSLOADER.exists()) {
            var fileref = document.createElement("link");
            fileref.setAttribute("rel", "stylesheet");
            fileref.setAttribute("type", "text/css");
            fileref.setAttribute("href", appURL + filename);
            document.getElementsByTagName("head")[0].appendChild(fileref);
        }
    },
    loadremote: function (filename) {
        if (!CSSLOADER.remoteExists()) {
            var fileref = document.createElement("link");
            fileref.setAttribute("rel", "stylesheet");
            fileref.setAttribute("type", "text/css");
            fileref.setAttribute("href", CSSREPO+filename);
            document.getElementsByTagName("head")[0].appendChild(fileref);
        }
    },
    exists: function (filename) {
        for (var i in document.styleSheets) {
            if (document.styleSheets[i].href === appURL + filename) {
                return true;
            }
        }
        return false;
    },
    remoteExists: function (filename) {
        for (var i in document.styleSheets) {
            if (document.styleSheets[i].href === CSSREPO + filename) {
                return true;
            }
        }
        return false;
    },
    remove: function (filename) {
        if (this.exists()) {
            for (var i in document.styleSheets) {
                if (document.styleSheets[i].href === appURL + filename) {
                    document.styleSheets[i] = null;
                }
            }
        }
    }
};
//
//Sass.setWorkerUrl("js/sass.worker.js");
//
//
//SCSSLOADER = {
//    load: function (sassfilename, themename, cssfile) {
//       var sass = new Sass();
//        sass.options({
//            // Format output: nested, expanded, compact, compressed
//            style: Sass.style.nested,
//            // Decimal point precision for outputting fractional numbers
//            // (-1 will use the libsass default, which currently is 5)
//            precision: -1,
//            // If you want inline source comments
//            comments: false,
//            // String to be used for indentation
//            indent: '  ',
//            // String to be used to for line feeds
//            linefeed: '\n',
//        }, function callback() {
//            // invoked without arguments when operation completed
//        });
//        var sassfile = sassfilename;
//        var theme = themename;
//        var css = cssfile;
//        var csstext = '';
//        $.ajaxSetup({
//            headers: {
//                'Accept': "*/*; charset=utf-8",
//                "Content-Type": "*/*; charset=utf-8"
//            }
//        });
//        $.get(repoGETURL + theme, function (data) {
//            $.get(repoGETURL + sassfile, function (fdata) {
//                csstext = data.concat("\n").concat(fdata);
//                sass.compile(csstext, function (result2) {
//                    alert(result2.text);
//                    SCSSLOADER.save(result2.text,css);
//                });
//            });
//
//        });
//
//    },
//    save: function (rule,cssfilename) {
//        alert("SAVE:"+cssfilename);
//        $.ajax({
//            type: "POST", 
//            url: repoPOSTURL+cssfilename,
//            headers: {
//                Accept: "*/*; charset=utf-8",
//                "Content-Type": "*/*; charset=utf-8"
//            },
//            data: rule,
//            success: function (data) {
//                 alert("SAVED:"+cssfilename);
//                CSSLOADER.loadremote(repoGETURL+cssfilename);
//            },
//            failure: function (errMsg) {
//                alert(errMsg);
//            }
//        });
//    }
//}


WS = {
    firsttime: true,
    disconnect: function () {
        if (client && client.disconnect) {
            client.disconnect(function () {
                console.log("disconnected");
            });
        }

    },
    status: function () {
        if (client && client.connected) {
            return client.connected;
        }
    },
    connect: function (url, dest, username, pass) {
        client = Stomp.client(url);
        client.debug = null;
        client.connect(username, pass, function () {
            if (WS.firsttime) {
                console.log('WS: Connected ');
                var wsm = componentsValue["ws"];
                wsm["connectionSuccessCallback"]();
                WS.firsttime = false;
            }
            client.subscribe("/topic/" + dest, function (message) {
                var view = componentsValue["ws"];
                view["receive"](message.body);
            });
        }, function (error) {
            console.log('WS: ' + error);
            setTimeout(WS.connect(url, dest, username, pass), 1000);
            console.log('WS: Reconecting in 1 seconds');
        });
    }
};

//Cloudoffice = {
//    io: {
//        Services: {
//            FileWorker: {
//                files: [],
//                getCacheFileList: function (folder, filter) {
//                    return new Promise(function (resolve, reject) {
//                        $.ajax({
//                            url: folder,
//                            method: 'GET'
//                        }).done(function (data) {
//                            $(data).find("td > a").each(function () {
//                                var filename = $(this).attr("href");
//                                if (filename.split('.').pop() === filter)
//                                {
//                                    Cloudoffice.io.Services.FileWorker.files.push(folder + "/" + $(this).attr("href"));
//                                }
//                            });
//                            resolve(data);
//                        }).fail(function (error) {
//                            reject(error);
//                        });
//                    });
//                }
//            }
//        }
//    }};
//Cloudoffice.io.Services.Sync = {
//    hasUpdate: function (name) {
//        Cloudoffice.io.Services.CacheManager.checkVersion().then(function () {
//            componentsValue[name].newVersionAvailable(Cloudoffice.io.Services.CacheManager.newversionCaching);
//        });
//    },
//    processSync: function () {
//        Cloudoffice.io.Services.FileWorker.getCacheFileList("lib", "js").then(function () {
//            Cloudoffice.io.Services.FileWorker.getCacheFileList("css", "css").then(function () {
//                Cloudoffice.io.Services.FileWorker.getCacheFileList("js", "js").then(function () {
//                    Cloudoffice.io.Services.CacheManager.CACHE_FILES = Cloudoffice.io.Services.FileWorker.files;
//                    Cloudoffice.io.Services.CacheManager.processCache();
//                });
//            });
//        });
//    }
//};