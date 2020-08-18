/* 
 * This JS must return a viewModel object which will be used as ViewModel for the registered component
 */



/* global PaginationManager */

viewmodel = function(params){
    $(document).ready(function () {
        PaginationManager.enablepagination("grid-view");
    });
    return params.data;
};