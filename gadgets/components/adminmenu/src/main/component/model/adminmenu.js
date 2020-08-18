/*
 * This JS must return a viewModel object which will be used as ViewModel for the registered component
 */



viewmodel = function (params) {
    var data =componentsValue[params.name()];
    if (data.hasOwnProperty("instance")) {
        CSSLOADER.loadremote(company + "/" + site + "/adminmenu" + path + "/" + data.instance() + "/view/style/adminmenu");
    }
    return data;
};

AdminMenuManager = {
    openApplication: function (path) {
        var completepath = window.location.origin + path;
        if (path !== '') {
            window.open(completepath, '_blank');
        }
    }
};