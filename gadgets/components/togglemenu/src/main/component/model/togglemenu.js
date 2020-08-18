/*
 * This JS must return a viewModel object which will be used as ViewModel for the registered component
 */



viewmodel = function (params) {
    var data =componentsValue[params.name()];
    if (typeof data !== "undefined" && data.hasOwnProperty("instance")) {
        CSSLOADER.loadremote(company + "/" + site + "/togglemenu" + path + "/" + data.instance() + "/view/style/togglemenu");
    }
    return data;
};