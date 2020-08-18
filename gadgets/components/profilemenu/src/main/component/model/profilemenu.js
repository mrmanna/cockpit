/* 
 * This JS must return a viewModel object which will be used as ViewModel for the registered component
 */


/* global CSSLOADER, path, site, company, componentsValue */

viewmodel = function(params) {
    var data = componentsValue[params.name()];
    CSSLOADER.loadremote(company + "/" + site + "/profilemenu" + path + "/" + data.instance() + "/view/style/profilemenu");
    return data;
};

ProfileManager = {
    syncCache: function() {
        if (navigator.serviceWorker) {
            navigator.serviceWorker.controller.postMessage("updateCache");
            setTimeout(function() {
                window.location.reload();
            }, 3000);
        }
    }
};