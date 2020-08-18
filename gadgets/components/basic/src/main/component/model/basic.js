/*
 * This JS must return a viewModel object which will be used as ViewModel for the registered component
 */



viewmodel = function (params) {
    var data =componentsValue[params.name()];
    if (data.hasOwnProperty("instance")) {
        CSSLOADER.loadremote(company + "/" + site + "/basic" + path + "/" + data.instance() + "/view/style/basic");
    }
    return data;
};