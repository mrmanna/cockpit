/* 
 * This JS must return a viewModel object which will be used as ViewModel for the registered component
 */


viewmodel = function (params) {
   var data= componentsValue[params.name()];
   if (typeof data !== "undefined" && null !== data) {
       CSSLOADER.loadremote(company+"/"+site+"/document"+path+"/"+data.instance()+"/view/style/document");
   }
   return data;
};

