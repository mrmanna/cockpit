/* 
 * This JS must return a viewModel object which will be used as ViewModel for the registered component
 */


var articleComponent = '';
viewmodel = function(params) {
    var data = componentsValue[params.name()];
    articleComponent = componentsValue[params.name()];
    if (typeof data !== "undefined" && null !== data) {
        CSSLOADER.loadremote(company + "/" + site + "/articlelist" + path + "/" + data.instance() + "/view/style/articlelist");
    }
    return data;
};


ArticleListManager = {
    showFullText: function (divId) {
        var id = $(divId).attr("id");
        articleComponent["setFullDescriptionText"](id);
    }
};