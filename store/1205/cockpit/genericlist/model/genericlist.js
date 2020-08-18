/* 
 * This JS must return a viewModel object which will be used as ViewModel for the registered component
 */

/* global componentsValue, CSSLOADER, path, site, company */

var paramname = "";
viewmodel = function(params) {
    paramname = params.name();
    var data = componentsValue[paramname];
    if (typeof data !== "undefined" && null !== data) {
        CSSLOADER.loadremote(company + "/" + site + "/genericlist" + path + "/" + data.instance() + "/view/style/genericlist");
    }
    return data;
};


PaginationManager = {
    enablepagination: function(classname) {
        console.log(">>>>>>>>>> pagination enabled on scroll to bottom @ class : "+classname);
        $("."+classname).on('scroll', function() {
            if ($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight) {
                console.log(">>>>>>>>>> reached @ the bottom of "+classname);
                PaginationManager.loadmore();
            }
        });
    },
    loadmore: function() {
        console.log(">>>>>>>>>> start loading more item @ "+paramname);
        componentsValue[paramname].next();
    }
};