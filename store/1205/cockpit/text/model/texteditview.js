/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


viewmodel = function(params){
    var editor = new MediumEditor('.editable', {
        toolbar: {
            buttons: ['bold', 'italic', 'underline', 'quote', 'anchor', 'h2', 'h3']
        },
        buttonLabels: 'fontawesome',
        anchor: {
            targetCheckbox: true
        }
    });
    
//    $('.editable').mediumInsert({
//        editor: editor
//    });

    return params.data;
};


