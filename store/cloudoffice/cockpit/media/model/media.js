/* 
 * This JS must return a viewModel object which will be used as ViewModel for the registered component
 */


viewmodel = function (params) {
   var data= componentsValue[params.name()];
   CSSLOADER.loadremote(company+"/"+site+"/media"+path+"/"+data.instance()+"/view/style/media");
    return data;
};

