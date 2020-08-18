/* 
 * This JS must return a viewModel object which will be used as ViewModel for the registered component
 */


var textComponent = '';
viewmodel = function (params) {
   var data= componentsValue[params.name()];
   CSSLOADER.loadremote(company+"/"+site+"/text"+path+"/"+data.instance()+"/view/style/text");
   textComponent = componentsValue[params.name()];
   return data;
};


TextManager = {
    createNewItem: function () {
        var titleText = "";
        var descriptionText = $("#editor1").html();
        
        descriptionText = descriptionText.replace(/\s\s+/g, ' ').trim();
        titleText = $(descriptionText).text().trim();
        if (titleText) {
            if (titleText.length > 15) {
                titleText = titleText.substring(0, 15)+"...";
            }
            
            var map = {
    		'titleText':titleText,
    		'descriptionText':descriptionText
    		};
	
            var context = JSON.stringify(map); 
            textComponent["createItem"](context);
        } else {
            alert("Write somthing in the Article");
        }
    },
    
    setDetailData: function (articleText) {
        $("#editor1").html(articleText);
    }
};
