/* 
 * This JS must return a viewModel object which will be used as ViewModel for the registered component
 */

var shareItemComponent = '';
viewmodel = function (params) {
   var data= componentsValue[params.name()];
   shareItemComponent = componentsValue[params.name()];
   CSSLOADER.loadremote(company+"/"+site+"/shareitem"+path+"/"+data.instance()+"/view/style/shareitem");
   return data;
};

ShareItemManager = {
    changePermission: function (permission) {
        shareItemComponent["changePermission"](permission);
    }
};