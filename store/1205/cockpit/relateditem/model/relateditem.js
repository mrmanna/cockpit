/* 
 * This JS must return a viewModel object which will be used as ViewModel for the registered component
 */


var relatedItemComponent = '';
viewmodel = function (params) {
   var data= componentsValue[params.name()];
   CSSLOADER.loadremote(company+"/"+site+"/relateditem"+path+"/"+data.instance()+"/view/style/relateditem");
   relatedItemComponent = componentsValue[params.name()];
   return data;
};


RelatedItemManager = {
    activate: function (type) {
        relatedItemComponent["activate"](type);
    }
};