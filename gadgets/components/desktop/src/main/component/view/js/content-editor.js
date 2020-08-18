Array.prototype.unique = function() {
  return this.filter(function (value, index, self) { 
    return self.indexOf(value) === index;
  });
}

id = 1;
$xmlStucture = "";
$xml = "";
pageLinkList = "";
rawXmlText = "";
$contentLayoutId = "";

$elementNames = [];
$elementTypes = [];
loopId = 1;
previousSelectedElementType = null;

function processXMLContent(text) {
    
    console.log('contentLayoutId> '+$contentLayoutId);
    
    $elementNames = [];
    $elementTypes = [];
    previousSelectedElementType = null;
    
    var mainDiv = ".textForm";
    
    rawXmlText = text;
    //var loopId = 1;
    
    $(".textForm").html("");
    $(".editElement-list").html("");
    
    $xml = $.parseXML(text);
    
    console.log('before $xml> '+getXml());
    
    $($xml).find("root").each(function () {
        $(this.childNodes).each(function () {
            processElement(this, false, mainDiv);
            loopId = loopId + 1;
        });
    });
    
    console.log('after $xml> '+getXml());
    console.log('after $xmlStucture> '+ (new XMLSerializer()).serializeToString($xmlStucture) );
    
    // List element types
    $elementTypes = $elementTypes.unique();
    for(var i = 0; i < $elementTypes.length; i++) {
        $(".editElement-list").append(' <li onclick="selectElementType(this)" data-elementtype="'+$elementTypes[i]+'"><span><i class="'+getCustomElementTypeIcon($elementTypes[i])+'" aria-hidden="true"></i></span><b>Edit '+$elementTypes[i]+'</b></li> ');
        $('.elementtype_'+$elementTypes[i]).hide();
    }
    
    $('.element-action-tab').hide();
    
    ko.dataFor(document.body).componentSetting().loader(false);
}

function selectElementType (customElementType) {
    $('.element-action-tab').show();
    
    if (previousSelectedElementType !== null) {
        $(previousSelectedElementType).removeClass("active");
        $('.elementtype_'+$(previousSelectedElementType).data('elementtype')).hide();
    }
    
    $(customElementType).addClass("active");
    previousSelectedElementType = customElementType;
    
    $('.elementtype_'+$(customElementType).data('elementtype')).show();
    
}

function getCustomElementTypeIcon (customElementType) {
    if (customElementType === 'text') {
        return "fa fa-align-justify";
    } else if (customElementType === 'image') {
        return "fa fa-picture-o";
    } else if (customElementType === 'menu') {
        return "fa fa-align-justify";
    } else {
        return "fa fa-align-justify";
    }
}

function processElement(dynamicElement, childElement, mainDiv) {
    var hasChildren = dynamicElement.childNodes.length > 1;

    var elementName = $(dynamicElement).attr("name");
    var readOnly = eval( $($xmlStucture).find('[name="' + elementName + '"]').attr("readOnly") );
    var repeatable = eval( $($xmlStucture).find('[name="' + elementName + '"]').attr("repeatable") );
    var required = eval( $($xmlStucture).find('[name="' + elementName + '"]').attr("required") );
    
    if (elementName.match("^customProp")) {
        console.log('find custom property............... >'+elementName);
        return;
    }
    
    console.log( "hasChildren>>>" + hasChildren );
    
    console.log( "elementName>>>" + elementName );
    //console.log( "readOnly>>>" + readOnly );
    console.log( "repeatable>>>" + repeatable );
    //console.log( "required>>>" + required );

    var inputdiv = "content-group-"+loopId;
    
    console.log( "mainDiv>>>" + mainDiv );
    console.log( "inputdiv>>>" + inputdiv );
    //var mainDiv = ".textForm";
    
    if (elementName.match("^css")) {
        mainDiv = ".cssForm";
    }

    if (repeatable) {
        console.log('repeatable>>>>>>> ');
        
        $(mainDiv).append('<div class="'+inputdiv+' field-box01 field-box01Bg" data-fieldname="'+elementName+'" data-repeatable="'+repeatable+'" data-readOnly="'+readOnly+'" data-required="'+required+'" >');
        
        processContent(dynamicElement, "."+inputdiv);
        
        $("."+inputdiv).append('<a onclick="addRepeateContent(this)" style="margin-right: 20px" href="javascript:;"><i class="fa fa-plus-circle" aria-hidden="true"></i></a>');

        if ( $.inArray(elementName, $elementNames) >=0 ) {
            $("."+inputdiv).append('<a class="plus-icon01" onclick="removeRepeateContent(this)" style="margin-right: 20px" href="javascript:;"><i class="fa fa-minus-circle" aria-hidden="true"></i></a>');
            $("."+inputdiv).append('<a class="arrow-icon01" onclick="expandAndCollaps('+"'"+inputdiv+"'"+')" href="javascript:;"><i class="fa fa-chevron-circle-down" aria-hidden="true"></i></a>');
        } else {
            $("."+inputdiv).append('<a class="arrow2-icon01" onclick="expandAndCollaps('+"'"+inputdiv+"'"+')" href="javascript:;"><i class="fa fa-chevron-circle-down" aria-hidden="true"></i></a>');
            $elementNames.push(elementName);
        }
        
    } else {
        var customCss = childElement ? "field-box01Bg" : "";
        $(mainDiv).append('<div class="'+inputdiv+' field-box01 '+customCss+'" data-fieldname="'+elementName+'" data-repeatable="'+repeatable+'" data-readOnly="'+readOnly+'" data-required="'+required+'" >');
        processContent(dynamicElement, "."+inputdiv);
    }
    
    if (hasChildren) {
        $(dynamicElement.childNodes).each(function () {
            if (this.tagName === "dynamic-element") {
                ++loopId;
                processElement(this, true, "."+inputdiv);
            }
        });
    }
    
    $(mainDiv).append('</div>');
    
}

function removeRepeateContent (actionButton) {
    console.log( "Handler for repeatable-remove-button .click() called." );
    
    var parentElement = $(actionButton).parent();
    
    var elementName = parentElement.data("fieldname");
    console.log('remove elementName> '+elementName);
    
    var elementFound = false;
    
    parentElement.find(':input').each(function () {
        
        var xpath = $(this).attr('xpath');
        
        $($xml).find('[name=\"'+elementName+'\"]').each(function () {
            
            console.log('element index> ' + $(this).attr('index'));
            console.log('element name> ' + $(this).attr('name'));
            
            $(this).find('dynamic-content').each(function () {
                if ( $(this).attr('xpath') == xpath ) {
                    console.log('found dynamic content');
                    elementFound = true;
                    return false;
                }
            });
            
            if (elementFound) {
                console.log('founddddddd remove element');
                $(this).remove();
                return false;
            }
            
        });
        
        return false;
        
    });
    
    console.log('updated $xml> '+getXml());
    
    $(actionButton).parent().remove();
    
}

function addRepeateContent (actionButton) {
    console.log( "Handler for repeatable-add-button .click() called." );
    var cloneHtml = $(actionButton).parent().clone();
    
    var elementName = cloneHtml.data("fieldname");
    console.log('elementName> '+elementName);
    
    var elementFound = false;
    var dynamicElement = null;
    
    cloneHtml.find(':input').each(function () {
        
        console.log('found input22222 tagname> '+this.tagName);
        
        $(this).val("");
        
        var xpath = $(this).attr('xpath');
        
        if (!xpath) {
            return true;
        }
        
        var xpathId = xpath.substring( xpath.indexOf("=")+1, xpath.length-1 );
        console.log('xpath>' + xpath);
        
        var newXpath = xpath.replace(xpathId, "content"+(++id));
        console.log('newXpath>' + newXpath);
        
        if (!dynamicElement) {
            
            $($xml).find('[name=\"'+elementName+'\"]').each(function () {
                
                dynamicElement = $(this).clone();

                dynamicElement.find('dynamic-content').each(function () {
                    if ( $(this).attr('xpath') == xpath ) {
                        console.log('found dynamic content');
                        $(this).attr('xpath', newXpath);
                        elementFound = true;
                        return false;
                    }
                });

                if (elementFound) {
                    $(this).after( dynamicElement );
                    return false;
                }
                
            });
            
            // Reindexing ........
            var index = 0;
            $($xml).find('[name=\"'+elementName+'\"]').each(function () {
                $(this).attr('index', index++);
            });
        
        } else {
            
            dynamicElement.find('dynamic-content').each(function () {
                if ( $(this).attr('xpath') == xpath ) {
                    console.log('found dynamic content222');
                    $(this).attr('xpath', newXpath);
                    return false;
                }
            });
            
        }
        
        $(this).attr('xpath', newXpath);
        
    });
    
    console.log('updated $xml> '+getXml());
    
    if ( $(actionButton).parent().children().find('[class=\"fa fa-minus-circle\"]').length == 0 ) {
        cloneHtml.children().find('[class=\"fa fa-plus-circle\"]').parent().before('<a class="plus-icon01" style="margin-right: 20px" onclick="removeRepeateContent(this)" href="javascript:;"><i class="fa fa-minus-circle" aria-hidden="true"></i></a>');
    }
    
    $(actionButton).parent().after(cloneHtml);
    
}

function expandAndCollaps(inputdiv) {
    var divs = $("."+inputdiv+"> div");
    var isfaIcon = $("."+inputdiv+" a").hasClass("arrow-icon01");
    var faIcon;
    if(isfaIcon) {
        faIcon = $("."+inputdiv+" .arrow-icon01 i")[0].className;
    }else {
        faIcon = $("."+inputdiv+" .arrow2-icon01 i")[0].className;
    }
    if(faIcon == "fa fa-chevron-circle-right") {
            $("."+inputdiv+" .arrow-icon01 i").removeClass("fa fa-chevron-circle-right").addClass("fa fa-chevron-circle-down");
            $("."+inputdiv+" .arrow2-icon01 i").removeClass("fa fa-chevron-circle-right").addClass("fa fa-chevron-circle-down");
        } else {
             $("."+inputdiv+" .arrow-icon01 i").removeClass("fa fa-chevron-circle-down").addClass("fa fa-chevron-circle-right");
             $("."+inputdiv+" .arrow2-icon01 i").removeClass("fa fa-chevron-circle-down").addClass("fa fa-chevron-circle-right");

        }

    
    if(!$("."+inputdiv+" > input[type=text]").is(':visible')){
        $("."+inputdiv+ " > input[type=text]").show();
    } else {
        $("."+inputdiv+ "> input[type=text]").hide();
    }
    for(i = 0;i < divs.length; i++) {
        var innerClass= divs[i].className.split(' ')[0];
        if (!$("."+inputdiv+" ."+innerClass).is(':visible')) {
            $("."+inputdiv+" ."+innerClass).show();
        } else {
             $("."+inputdiv+" ."+innerClass).hide();
        }
    }
}


function processContent(dynamicElement, inputdiv) {
    
    if ($(dynamicElement).attr("name").match("^elementtype_")) {
        
        var customElementType = $(dynamicElement).attr("name").split("_", 2)[1];
        console.log('customElementType> ' + customElementType + ", inputdiv> "+inputdiv);
        
        $( inputdiv ).attr( "data-elementtype", customElementType );
        $elementTypes.push( customElementType );
        
        $( inputdiv ).addClass($(dynamicElement).attr("name"));
        
        return;
    }
    
    $(dynamicElement.childNodes).each(function () {
        if (this.tagName === "dynamic-content") {
            
            var elementName = $(this).parent().attr("name");
            //var elementVal = $($xmlStucture).find('[name="' + elementName + '"]').children().last().text();
            var elementVal = $($xmlStucture).find('[name="' + elementName + '"]').children().last().find('[name="label"]').text();
            var elementType = $(this).parent().attr("type");
            
            var contentVal = $(this).text();
            var predefinedValue = $($xmlStucture).find('[name="' + elementName + '"]').children().last().find('[name="predefinedValue"]').text();
            
            var url = generateXpath(this, "content" + id);
            
            console.log('elementType> ' + elementType);
            
            //var xmlString = (new XMLSerializer()).serializeToString($xmlStucture);;
            //console.log('xml> ' + xmlString);
            console.log('elementName> ' + elementName+', elementVal> ' + elementVal + ', url> ' + url + ', text> ' + contentVal);
            console.log('predefinedValue>>>' + predefinedValue);
            
            // skip if any custom properties identifying by start with 'customProp'
            if (elementName.match("^customProp")) {
                console.log('find custom property............... >'+elementName);
                return true;
            }
            
            $(this).attr('xpath', url); // set the xpath attr with the article content
            
            if (!contentVal && predefinedValue) {
                contentVal = predefinedValue;
                console.log('setting predefined value............... >'+contentVal);
            }
            
            if (elementType === "text_area" && validateInput(elementName, elementType)) {
                
                $(inputdiv).append('<label for="">' + elementVal + '</label><textarea class="contentInputField textarea" xpath="' + url + '" id="content' + id + '" >' + contentVal + '</textarea>');
                
                richTextEditor(id);
            } else if (elementType === "text" && validateInput(elementName, elementType)) {
                
                $(inputdiv).append('<label for="">' + elementVal + '</label><input class="contentInputField" xpath="' + url + '" type="text" value="' + contentVal + '">');
                
            } else if (elementType === "image" && validateInput(elementName, elementType)) {
                
                $(inputdiv).append('<label for="">' + elementVal + '</label><input class="contentInputField" xpath="' + url + '" type="file" id="file" accept="image/*" name="imageData" value="' + contentVal + '">');
                
            } else if (elementType === "document_library" && validateInput(elementName, elementType)) {
                
                $(inputdiv).append('<label for="">' + elementVal + '</label><input class="contentInputField" xpath="' + url + '" readonly type="text" id="file" name="imageData" value="' + contentVal + '"><button idxpath="' + url + '" onclick="chooseImage(this)">Select</button><button idxpath="' + url + '" onclick="removeImage(this)">Clear</button>');
                
            } else if (elementType === "link_to_layout" && validateInput(elementName, elementType)) {
                console.log('link_to_layout> contentVal>' + contentVal);
                $(inputdiv).append('<label for="">' + elementVal + '</label><div class="styleDrop" class="contentInputField" xpath="' + url + '" id="content' + id + '" name="' + elementVal + '" onclick="toogleLinkList(this)"><div class="style-select clearfix content-edit-combo"><span class="contentInputField" xpath="' + url + '" id="content' + id + 'style-select" data-value=""></span><i class="fa fa-caret-down" style="display:block"></i></div><div id="content' + id + 'style-list" class="style-list"><ul id="content' + id + 'style-list-ul"></ul></div></div>');
                
                // append li inside ul
                // all li's are generated from java com.eusia.coorg.client.content.actions.PageLinkListAction
                var location = "";
                location = "#content" + id + "style-list-ul";
                $(location).html(pageLinkList);
                // set the default selection of list element
                
                var pageId = "";
                
                if (contentVal) {
                    
                    var link = contentVal;
                    var linkParts = link.split("@");
                    pageId = linkParts[0];
                    
                } else {
                    pageId = $(location).children().first().children().first().attr("for");
                    console.log('link_to_layout> firstPageId>' + pageId);
                }
                
                var defaultSelectedItem = $(location + ' [for="' + pageId + '"]').text();
                var defaultSelectedItemLocation = "#content" + id + "style-select";
                console.log('link_to_layout> defaultSelectedItem>' + defaultSelectedItem);
                $(defaultSelectedItemLocation).text(defaultSelectedItem);
                $(defaultSelectedItemLocation).attr("data-value", link);
                
            } else if (elementType === "ddm-decimal" && validateInput(elementName, elementType)) {
                
                $(inputdiv).append('<label for="">' + elementVal + '</label><input class="contentInputField" xpath="' + url + '" type="number" id="content' + id + '" value="' + contentVal + '">');
                
            } else if (elementType === "boolean" && validateInput(elementName, elementType)) {
                
                $(inputdiv).append('<label for="">' + elementVal + '</label><input class="contentInputField" xpath="' + url + '" type="checkbox" name="vehicle" id="content' + id + '" value="' + contentVal + '">');
                
            } else if (elementType === "ddm-integer" && validateInput(elementName, elementType)) {
                
                $(inputdiv).append('<label for="">' + elementVal + '</label><input class="contentInputField" xpath="' + url + '" type="number" id="content' + id + '" value="' + contentVal + '">');
                
            } else if (elementType === "radio" && validateInput(elementName, elementType)) {
                
                $(inputdiv).append('<label for="">' + elementVal + '</label><input class="contentInputField" xpath="' + url + '" type="radio" name="gender" id="content' + id + '" value="' + contentVal + '" checked><span>' + contentVal + '</span><br>');
                
            } else if (elementType === "ddm-date" && validateInput(elementName, elementType)) {
                var datetext = contentVal;
                var dateTxt = moment(Number(datetext)).format("MM/DD/YYYY");
                
                $(inputdiv).append('<label for="">' + elementVal + '</label><input onclick="contentDatePicker(this.id)" class="contentInputField" xpath="' + url + '" type="text" id="content' + id + '" value="' + dateTxt + '" placeholder="mm/dd/yyyy">');
                
            } else if (elementType === "list" && validateInput(elementName, elementType)) {
                //TODO
            } else if (elementType === "ddm-number" && validateInput(elementName, elementType)) {
                
                $(inputdiv).append('<label for="">' + elementVal + '</label><input class="contentInputField" xpath="' + url + '" type="number" id="content' + id + '" value="' + contentVal + '">');
                
            } else if (elementType === "text_box" && validateInput(elementName, elementType)) {
                
                $(inputdiv).append('<label for="">' + elementVal + '</label><textarea class="contentInputField textarea" xpath="' + url + '" id="content' + id + '" >' + contentVal + '</textarea>');
                
                richTextEditor(id);
                
            }
            id++;
            
        }
    });
}

function validateInput(elementName, elementType) {
    
    if (elementName.match("^css")) {
        return true;
    }
    
    if ($contentLayoutId === 'TEXT' && (elementType === 'text' || elementType === 'text_area'
            || elementType === 'text_box'
            )) {
        return true;
    } else if ($contentLayoutId === 'IMAGE' && (elementType === 'document_library' || elementType === 'image'
            )) {
        return true;
    } else if ($contentLayoutId === 'IMAGE_TITLE' && (elementType === 'document_library' || elementType === 'image'
            || elementType === 'text' || elementType === 'text_box'
            )) {
        return true;
    } else if ($contentLayoutId === 'DESC' && (elementType === 'text_area'
            )) {
        return true;
    } else if ( ( $contentLayoutId === 'IMAGE_TITLE_DESC' || $contentLayoutId === 'PEOPLE_QOUTE' || $contentLayoutId === 'PEOPLE_QOUTE_RATING' )
        && (elementType === 'document_library' || elementType === 'image'
            || elementType === 'text' || elementType === 'text_box'
            || elementType === 'text_area' || elementType === 'link_to_layout'
            )) {
        return true;
    }
    return false;
}

function richTextEditor(id) {
    tinymce.init({
        selector: "#content" + id,
        menubar: false,
        mode : "textareas",
        force_br_newlines : true,
        force_p_newlines : false,
        forced_root_block : '',
        entity_encoding : "raw",
        plugins: [
            'advlist autolink lists link image charmap print preview hr anchor pagebreak',
            'searchreplace wordcount visualblocks visualchars code fullscreen table',
            'insertdatetime media nonbreaking save table contextmenu directionality',
            'emoticons template paste textcolor colorpicker textpattern imagetools fullscreen spellchecker'
          ],
        //toolbar1: "undo redo | cut copy paste | styleselect | bold italic underline | fontselect fontsizeselect | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link myvariablebutton",
        toolbar1: "newdocument styleselect bold italic bullist numlist alignleft aligncenter alignright link myvariablebutton code fullscreen",
        //toolbar2: 'preview | forecolor backcolor emoticons | code | table',
        toolbar2: 'undo redo | newdocument cut copy paste searchreplace | styleselect formatselect fontselect fontsizeselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | print preview media insertdatetime | link unlink image | forecolor backcolor emoticons | table removeformat | spellchecker code | fullscreen',
        
        setup: function (editor) {
            
            editor.on('init', function (e) {
                console.log('Editor was initialized.');
                if (ko.dataFor(document.body).componentSetting().compSetExpanded()) {
                    $("div.mce-toolbar.mce-first").hide();
                    $("div.mce-toolbar.mce-last").show();
                } else {
                    $("div.mce-toolbar.mce-last").hide();
                }
            });
            
            editor.on('FullscreenStateChanged', function (e) {
                console.log('FullscreenStateChanged event fired state>>'+e.state);
                if (e.state || ko.dataFor(document.body).componentSetting().compSetExpanded()) {
                    $("div.mce-toolbar.mce-last").show();
                    $("div.mce-toolbar.mce-first").hide();
                } else {
                    $("div.mce-toolbar.mce-last").hide();
                    $("div.mce-toolbar.mce-first").show();
                }
            });
            
        }
        
        /*setup: function (editor) {
            if (ko.dataFor(document.body).coFinder().selectedItemData().selectedPage().isMailTemplate()) {
                editor.addButton('myvariablebutton', {
                    type: 'listbox',
                    text: 'Variables',
                    icon: false,
                    onselect: function (e) {
                        editor.insertContent(this.value());
                    },
                    values: [
                        {text: '--- Organization ---', value: '&nbsp;'},
                        {text: 'Organisatie naam', value: '&nbsp;${COMPANY_NAME!}'},
                        {text: 'Bezoeken Straat', value: '&nbsp;${VISIT_STREET!}'},
                        {text: 'Nummer', value: '&nbsp;${VISIT_NUMBER!}'},
                        {text: 'Postcode', value: '&nbsp;${VISIT_ZIPCODE!}'},
                        {text: 'Plaats', value: '&nbsp;${VISIT_CITY!}'},
                        {text: 'Land', value: '&nbsp;${VISIT_COUNTRY!}'},
                        {text: 'Postadres Straat', value: '&nbsp;${POST_STREET!}'},
                        {text: 'Postadres Nummer', value: '&nbsp;${POST_NUMBER!}'},
                        {text: 'Postadres Postcode', value: '&nbsp;${POST_ZIPCODE!}'},
                        {text: 'Postadres Plaats', value: '&nbsp;${POST_CITY!}'},
                        {text: '--- Person ---', value: '&nbsp;&nbsp;'},
                        {text: 'Voornaam', value: '&nbsp;${FIRST_NAME!}'},
                        {text: 'Initialen', value: '&nbsp;${INITIALS!}'},
                        {text: 'Tussenvoegsel', value: '&nbsp;${SURENAME_PREFIXES!}'},
                        {text: 'Achternaam', value: '&nbsp;${SURENAME!}'},
                        {text: 'Geslacht', value: '&nbsp;${GENDER!}'},
                        {text: 'Functie', value: '&nbsp;${FUNCTION!}'},
                        {text: 'Afdeling', value: '&nbsp;${DEPARTMENT!}'},
                        {text: 'Persoon Bezoeken Straat', value: '&nbsp;${PERS_VISIT_STREET!}'},
                        {text: 'Persoon Bezoeken Nummer', value: '&nbsp;${PERS_VISIT_NUMBER!}'},
                        {text: 'Persoon Bezoeken Postcode', value: '&nbsp;${PERS_VISIT_ZIPCODE!}'},
                        {text: 'Persoon Bezoeken Plaats', value: '&nbsp;${PERS_VISIT_CITY!}'},
                        {text: 'Persoon Bezoeken Land', value: '&nbsp;${PERS_VISIT_COUNTRY!}'},
                    ],
                    onPostRender: function () {
                        // Select the second item by default
                        this.value('&nbsp;<em>Some text!</em>');
                    }
                });
            }
            editor.on('change', function () {
                var contentData = tinymce.activeEditor.getContent();
                $('#content' + id).val(contentData);
                editor.save();
            });
        }*/
        
    });
}



function generateXpath(element, id) {
    var arr = [];
    $(element).parents().each(function () {
        arr.push(this.tagName);
    });
    arr.reverse();
    var url = "";
    for (var i = 0; arr.length > i; i++) {
        url = url + "/" + arr[i];
    }
    url = url + "/dynamic-content" + '[@id=' + id + ']';
    return url;
}
function generateXpathForElement(element) {
    var arr = [];
    $(element).parents().each(function () {
        arr.push(this.tagName);
    });
    arr.reverse();
    var url = "";
    for (var i = 0; arr.length > i; i++) {
        url = url + "/" + arr[i];
    }
    var index = $(element).attr('index');
    url = url + "/dynamic-element" + '[@index=' + index + ']';
    return url;
}

function generateXpathForParent(element) {
    var arr = [];
    $(element).parents().each(function () {
        arr.push(this.tagName);
    });
    arr.reverse();
    var url = "";
    for (var i = 0; arr.length > i; i++) {
        url = url + "/" + arr[i];
    }
    var index = $(element).parent().attr('index');
    if (index !== null) {
        url = url + '[@index=' + index + ']';
    }
    return url;
}

function repeatableIncrease(xpath) {
    var element = $($xml).find('[xpath="' + xpath + '"]');
}

function repeatableDecrease(idTxt) {
}

function contentEditCollapsibleHide(idTxt) {
    $("#" + idTxt).hide();

    $("#" + idTxt + "down").show();
    $("#" + idTxt + "up").hide();
}

function contentEditCollapsibleShow(idTxt) {
    $("#" + idTxt).show();

    $("#" + idTxt + "down").hide();
    $("#" + idTxt + "up").show();
}

selectedItem = "";

function allowDropOver(ev) {
    ev.preventDefault();
    var x = ev.clientX;
    var y = ev.clientY;
    var el = document.elementFromPoint(x, y);

    if (el.tagName === "DIV" && $(el).parents("li").hasClass("webContents")) {
        $('.content-placeholder').remove();
        selectedItem = $(el).parents("li");
        $(selectedItem).after('<li class="content-placeholder"></li>');

    } else if ($(el).hasClass("webContents")) {
        $('.content-placeholder').remove();
        $(el).after('<li class="content-placeholder"></li>');
        selectedItem = el;
    } else if ($(el).hasClass("dropzone-content")) {
        $('.content-placeholder').remove();
        $(el).append('<li class="content-placeholder"></li>');
        selectedItem = el;
    } else {
        selectedItem = null;
    }
}
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    setTimeout(function () {
        $('.content-placeholder').remove();
    }, 2000);
}
function drop(ev) {
    ev.preventDefault();

    var data = ev.dataTransfer.getData("text");
    var tar = ev.target;
    var $data = document.getElementById(data);//html

    if (!$(tar).hasClass("dropzone-content")) {
        tar = $(tar).parents('ul');
    }
    if ($(tar).hasClass("dropzone-content") && $(tar).is("UL")) { // restrict to add content other than UL Sections

        if ($(selectedItem).hasClass("webContents") && $(selectedItem).is("li") && selectedItem !== null) {
            $(selectedItem).after($data);
        } else if ($(tar).hasClass("dropzone-content")) {
            $(tar).append($data);
        }

        $(".content-placeholder").remove();

        if ($($data).hasClass('none-droppable-contents')) {

            var stringForServer = "";
            var columnId = $(tar).attr('id');
            stringForServer = columnId + ":";

            if (typeof columnId !== "undefined") {
                $(tar).children("li").each(function () {
                    if (!$(this).hasClass("webContents")) {
                        stringForServer = stringForServer + "staticId,";
                    } else {
                        var contentId = $(this).find(".contentId").attr("id");
                        if (typeof contentId !== "undefined") {
                            stringForServer = stringForServer + contentId + ",";
                        }
                    }
                });
            }

            $data.remove();
            ko.dataFor(document.body).coFinder().selectedItemData().selectedPage().contentId(data.toString());
            ko.dataFor(document.body).coFinder().selectedItemData().selectedPage().addContentInPage(stringForServer.toString());

        } else {
            var stringDataForServer = "";
            var columnStore = new Object();
            $(".dropzone-content").each(function () {
                var columnId = $(this).attr('id');
                if (typeof columnId !== "undefined" && columnStore["'"+columnId+"'"] == null) {
                    stringDataForServer = stringDataForServer + columnId + ":";

                    var c = $(this).children("li");

                    for (i = 0; i < c.length; i++) {
                        var elements = $("#" + columnId + " .contentId")[i].getAttribute("id");
                        stringDataForServer = stringDataForServer + elements + ",";
                    }
                    stringDataForServer = stringDataForServer + "\n";
                    columnStore["'"+columnId+"'"] = columnId;
                }
            });
            $data.remove();
            ko.dataFor(document.body).coFinder().selectedItemData().selectedPage().rearrangeContentInPage(stringDataForServer);
        }
    } else {

    }
}

function getXml() {
    var txt = (new XMLSerializer()).serializeToString($xml);
    txt = txt.replace(/&lt;/g, "<").replace(/&gt;/g, ">");
    return txt;
}