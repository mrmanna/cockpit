softwareVersion = 31;
tempMessage = '';

tempRecentConversation = '';

buttonXpath = "";
currentImagePath = "";
messengerTimeout = "";
client = {};
// This function is used to open image chooser by button xPath
function chooseImage(selectbutton) {
    var buttonIdXpath = $(selectbutton).attr("idxpath");
    buttonXpath = buttonIdXpath;
    var buttonObject = $("input[xpath='" + buttonIdXpath + "']").attr("value");
    currentImagePath = buttonObject;

    console.log('buttonXpath> ' + buttonXpath);
    console.log('currentImagePath> ' + currentImagePath);

    ko.dataFor(document.body).openImageChooser();
}

// This function is used to set selected image URL to the input field
function chooseImageByChooser() {
    console.log('chooseImageByChooser      buttonXpath> ' + buttonXpath);
    var selectedImageUrl = ko.dataFor(document.body).imageChooserView().selectedFile().imageUrl();
    console.log('chooseImageByChooser      defaultDomain> ' + defaultDomain);
    $("input[xpath='" + buttonXpath + "']").val(defaultDomain + selectedImageUrl);
}

// This function is uded to clear the iimage URL input field
function removeImage(clearbutton) {
    var clearButtonIdXpath = $(clearbutton).attr("idxpath");
    $("input[xpath='" + clearButtonIdXpath + "']").val("");
}

function contentDatePicker(siteContent) {
    ko.dataFor(document.body).webContents().contentEditView().contentId(siteContent);
    ko.dataFor(document.body).webContents().contentEditView().contentDatePicker();
}

function normallLogin() {
    var username = $("#inputEmail").val();
    var password = $("#inputPassword").val();

    if (typeof ko === "undefined") {
        alert("Javascript is not yet fully loaded! Please click again!");
    }
    ko.dataFor(document.body).loginUser().username(username);
    ko.dataFor(document.body).loginUser().password(password);
    if (username === "") {
        $("#inputEmail").focus()
    } else if (password === "") {
        $("#inputPassword").focus()
    } else {
        ko.dataFor(document.body).loginUser().login(ko.dataFor(document.body).loginUser());
    }
    detectMobileBrowser();
}

function detectMobileBrowser() {
    var w = window;
    var d = document;
    var e = d.documentElement;
    var g = d.getElementsByTagName('body')[0];
    var screenWidth = w.innerWidth || e.clientWidth || g.clientWidth;

    if (screenWidth < 768) {
        console.log("##### Mobile browser detected.");
        ko.dataFor(document.body).mobileBrowser(true);
    }
}


function keyPressLogin(e) {
    if (e.keyCode == 13) {
        normallLogin();
        return false;
    }
}
//------------COMBO: page link list on webContent selection : START--------------------------------------
comboBoxId = "";
comboBoxXpath = "";
comboBoxSelectedDataContainer = "";
comboBoxSelectedData = "";
dataOnComboList = "";
dataValueOnComboList = "";

// click on combo
function toogleLinkList(combobox) {
    comboBoxId = $(combobox).attr("id");
    comboBoxXpath = $(combobox).attr("xpath");
    comboBoxSelectedDataContainer = "#" + comboBoxId + "style-select";
    comboBoxSelectedData = $(comboBoxSelectedDataContainer).text();
    var listIdDiv = "#" + comboBoxId + "style-list";

    var currentDisplayPositionOfList = $(listIdDiv).css('display');
    if (currentDisplayPositionOfList === "none") {
        $(listIdDiv).css({
            'display': 'block'
        });
    } else {
        $(listIdDiv).css({
            'display': 'none'
        });
    }
}


// click on li
function selectfromList(listItem) {
    // Text of selected li (Ex. home)
    dataOnComboList = $(listItem).children().text();
    // data-value of selected li (Ex. 1@public@1000 )
    dataValueOnComboList = $(listItem).children().attr("data-value");
    // set selected li text to the span (visible to user)
    $(comboBoxSelectedDataContainer).text(dataOnComboList);
    // set selected li data-value to the span (not visible to user, used to update content)
    $(comboBoxSelectedDataContainer).attr("data-value", dataValueOnComboList);
}

function disconnectMessenger() {
    if (client && client.disconnect) {
        client.disconnect(function () {
            console.log("disconnected");
        });
    }

}

function statusConnectionMessenger() {
    if (client && client.connected) {
        return client.connected;
    }
}


function mqttConnect(url, dest, username, pass) {
    client = Stomp.client(url);
    client.debug = null;
    client.connect(username, pass, function () {
        client.subscribe("/topic/" + dest, function (message) {

            // console.log(message.body);
            messengerTimeout = "";
            var msg = JSON.parse(message.body);
            if (Array.isArray(msg)) {
                for (i = 0; i < msg.length; i++) {
                    var msgvar = msg[i];

                    if ('hasMore' in msgvar) {
                        ko.dataFor(document.body).mainLayoutView().incomingMessageSize(msg.length - 1);
                        ko.dataFor(document.body).mainLayoutView().hasMore(msgvar.hasMore);
                        ko.dataFor(document.body).mainLayoutView().messageNextPageNo(parseInt(msgvar.nextPageNumber));
                        ko.dataFor(document.body).messageView().feedListSize();
                    } else {
                        setMessageList(msgvar);
                    }

                }
                //loadMessageFacetSearch();
            } else {
                if (msg.handelarType === "note") {
                    msg.messageCollectionItemId = 0;
                    setMessage(msg);
                    //loadMessageFacetSearch();
                } else if (msg.handelarType === "recentWebConversation") {
                    setRecentConversation(msg.handelarType, msg.result);
                    ko.dataFor(document.body).chatCollectionListView().setActive();
                    //loadMessageFacetSearch();
                } else if ("unreadSize" === msg.handelarType) {
                    updateConversationUnreadSize(msg.result);
                }

            }

            document.getElementById('action-loader').style.display = 'none';
            ko.dataFor(document.body).mainLayoutView().middleContainerView().defaultListContainerView().showLoader(false);

        });
    }, function (error) {
        console.log('STOMP: ' + error);
        setTimeout(mqttConnect(url, dest, username, pass), 1000);
        console.log('STOMP: Reconecting in 1 seconds');
    });
}
//------------COMBO: page link list on webContent selection : END--------------------------------------
function setRecentConversation(handlertype, conversations) {
    var recentSelected = (ko.dataFor(document.body).chatCollectionListView().recentSelectedCss() === "active");
    if ((handlertype === "recentWebConversation" && recentSelected)) {
        if (undefined !== conversations && Array.isArray(conversations)) {
            loadConversationsOnList(conversations);
            ko.dataFor(document.body).chatCollectionListView().showLoader(false);
            ko.dataFor(document.body).chatCollectionListView().setActive();
        }
    }
}

// SORT list by their object key
function sortObj(list, key) {
    function compare(a, b) {
        a = a[key];
        b = b[key];
        var type = (typeof (a) === 'string' || typeof (b) === 'string') ? 'string' : 'number';
        var result;
        if (type === 'string') {
            result = a.localeCompare(b);
        } else {
            result = a - b;
        }
        return result;
    }
    return list.sort(compare);
}

function loadConversationsOnList(conversations) {
    if (conversations) {
        // clear clone list
        ko.dataFor(document.body).chatCollectionListView().clearConversationListClone();

        // prepare clone list
        conversations.forEach(function (conversation) {

            checkAndUpdateIfHasMoreConversations(conversation);
            var conversationItemId = conversation['itemId'];
            if (conversationItemId !== "-10") {
                var lastMessageCreateTimeMS = conversation['lastMessageCreateTimeMS'];
                console.log("lastMessageCreateTimeMS : " + lastMessageCreateTimeMS);
                var lastMessageCreateTimeMSNumber = parseInt(lastMessageCreateTimeMS);
                var isSameDay = moment(lastMessageCreateTimeMSNumber).isSame(moment(), 'day');
                if (isSameDay) {
                    var lastMessageCreateTime = moment(lastMessageCreateTimeMSNumber).tz(moment.tz.guess()).format('hh:mm:ss A');
                    conversation['lastMessageCreateTime'] = lastMessageCreateTime;
                } else {
                    var lastMessageCreateTime = moment(lastMessageCreateTimeMSNumber).tz(moment.tz.guess()).format('DD-MM-YYYY');
                    conversation['lastMessageCreateTime'] = lastMessageCreateTime;
                }

                tempRecentConversation = conversation;
                ko.dataFor(document.body).chatCollectionListView().addRecentConversationItem();
            }
            tempRecentConversation = '';
        });
        // clear original list if conversation request not from load more button
        var isRequestFromLoadMore = ko.dataFor(document.body).chatCollectionListView().requestViaLoadMoreMessege();
        if (!isRequestFromLoadMore) {
            ko.dataFor(document.body).chatCollectionListView().clearConversationItem();
        }
        // transfer conversations from clone list to original list
        ko.dataFor(document.body).chatCollectionListView().transferConversationsFromCloneListToOriginalList();
    }
}

function checkAndUpdateIfHasMoreConversations(conversation) {
    if ('hasMore' in conversation) {
        console.log("##### hasMoreConversation : " + conversation.hasMore);
        ko.dataFor(document.body).chatCollectionListView().hasMoreConversation(conversation.hasMore);
        ko.dataFor(document.body).chatCollectionListView().conversationNextPageNumber(parseInt(conversation.nextPageNumber));
    }
}

function updateConversationUnreadSize(arrivedResults) {
    if (undefined !== arrivedResults && Array.isArray(arrivedResults)) {
        if (arrivedResults) {
            arrivedResults.forEach(function (result) {
                var itemId = result.itemId;
                var itemType = result.itemType;
                var unreadSize = result.unreadSize;
                if (itemId && itemType && itemId !== "-10") {
                    updateSingleConversationUnreadSize(itemId, itemType, unreadSize);
                }
            });
        }
    }
}

function updateSingleConversationUnreadSize(itemId, itemType, unreadSize) {
    ko.utils.arrayForEach(ko.dataFor(document.body).chatCollectionListView().conversationList(), function (conversation) {
        var conversationItemId = conversation.itemId();
        var conversationItemType = conversation.itemType();
        if (itemId === conversationItemId && itemType === conversationItemType) {
            conversation.unreadMessageSize(unreadSize);
        }
    });
}














function setMessage(msg) {

    var createDateInMS = msg['createDateInMS'];
    console.log("createDateInMS : " + createDateInMS);
    var createDateInMSNumber = parseInt(createDateInMS);
    var isSameDay = moment(createDateInMSNumber).isSame(moment(), 'day');
    if (isSameDay) {
        var lastMessageCreateTime = moment(createDateInMSNumber).tz(moment.tz.guess()).format('hh:mm:ss A');
        msg['lastMessageCreateTime'] = lastMessageCreateTime;
        msg['lastMessageCreateTimeMS'] = createDateInMSNumber;
    } else {
        var lastMessageCreateTime = moment(createDateInMSNumber).tz(moment.tz.guess()).format('DD-MM-YYYY');
        msg['lastMessageCreateTime'] = lastMessageCreateTime;
        msg['lastMessageCreateTimeMS'] = createDateInMSNumber;
    }

    tempMessage = msg;
    ko.dataFor(document.body).messageView().addMessageToFeed();
    tempMessage = '';
}

function setMessageList(msg) {
    tempMessage = msg;
    ko.dataFor(document.body).messageView().addMessageToFeedList();
    tempMessage = '';
}



function loadMessageFacetSearch() {
    ko.dataFor(document.body).messageView().addMessageSearchFacetList();

    ko.dataFor(document.body).mainLayoutView().middleContainerView().defaultListContainerView().showLoader(false);

}

// SEARCHBOX
function searchBoxFilterKey(e) {
    var placeholderTextSize = e.placeholder.length;
    var widthOfPlaceholder = (placeholderTextSize * 8) + 4;

    var inputTexts = e.value;
    var widthOfInputTexts = ((inputTexts.length + 1) * 8) + 4;

    var inputWidth = 0;
    if (widthOfInputTexts < widthOfPlaceholder) {
        inputWidth = widthOfPlaceholder;
    } else {
        inputWidth = widthOfInputTexts;
    }
    e.style.width = inputWidth + "px";
}
;


function setCookie(name, value) {

    var d = new Date();
    d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires;

}

function getCookie(cname) {

    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";

}


function showNewVersionMsg() {
    $('#newversionmsg').show();
}

function hideNewVersionMsg() {
    $('#newversionmsg').hide();
}

function stopNavigate() {

    window.onbeforeunload = function () {};

}

function delayReload(milli) {
    setTimeout(function () {
        location.reload(true);
    }, milli);
}


function coorgReload() {

    var softwareCookieVersion = getCookie("softwareVersion");
    var reloadAgain = false;
    if (softwareCookieVersion != null && softwareCookieVersion.length > 0) {

        var existVersion = 0;
        try {
            existVersion = parseInt(softwareCookieVersion);
        } catch (err) {
        }

        if (softwareVersion > existVersion) {

            setCookie("softwareVersion", softwareVersion);
            reloadAgain = true;
        }

    } else {

        setCookie("softwareVersion", softwareVersion);
        reloadAgain = true;
    }


    if (reloadAgain) {
        showNewVersionMsg();
        stopNavigate();
        delayReload(8000); // 8 seconds waiting...
    }

}

function richTextEditorFull(id) {
    tinymce.init({
        selector: "#" + id,
        //selector: ".richTextEditor",
        height: 200,
        //theme: 'modern',
        mode: "textareas",
        force_br_newlines: true,
        force_p_newlines: false,
        forced_root_block: '',
        entity_encoding: "raw",
        plugins: ['advlist autolink lists link image charmap print preview hr anchor pagebreak', 'searchreplace wordcount visualblocks visualchars code fullscreen table', 'insertdatetime media nonbreaking save table contextmenu directionality', 'emoticons template paste textcolor colorpicker textpattern imagetools fullscreen spellchecker'],
        //toolbar1: 'undo redo | cut copy paste | insert | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent',
        //toolbar2: 'print preview media | link image | forecolor backcolor emoticons | spellchecker code | fullscreen'
        toolbar1: 'undo redo | newdocument cut copy paste searchreplace | styleselect formatselect fontselect fontsizeselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | print preview media insertdatetime | link unlink image | forecolor backcolor emoticons | table removeformat | spellchecker code | fullscreen',
    });

    /*
     tinymce.init({
     selector: "#" + id,
     menubar: false,
     plugins: ["insertdatetime table textcolor colorpicker preview emoticons textpattern code table link"],
     toolbar1: "undo redo | cut copy paste | styleselect | bold italic underline | fontselect fontsizeselect | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link myvariablebutton",
     //toolbar1: "styleselect bold italic bullist numlist alignleft aligncenter alignright link myvariablebutton code",
     toolbar2: 'preview | forecolor backcolor emoticons | code | table',
     
     });
     */

}

// utf str replace [start]
var toReplace = ["Ã€", "Ã", "Ã‚", "Ãƒ", "Ã„", "Ã…", "Ã†", "Ã‡", "Ãˆ", "Ã‰", "ÃŠ", "Ã‹", "ÃŒ", "Ã", "ÃŽ", "Ã", "Ã", "Ã‘", "Ã’", "Ã“", "Ã”", "Ã•", "Ã–", "Ã—", "Ã˜", "Ã™", "Ãš", "Ã›", "Ãœ", "Ã", "Ãž", "ÃŸ", "Ã", "Ã¡", "Ã¢", "Ã£", "Ã¤", "Ã¥", "Ã¦", "Ã§", "Ã¨", "Ã©", "Ãª", "Ã«", "Ã¬", "Ã­", "Ã®", "Ã¯", "Ã°", "Ã±", "Ã²", "Ã³", "Ã´", "Ãµ", "Ã¶", "Ã·", "Ã¸", "Ã¹", "Ãº", "Ã»", "Ã¼", "Ã½", "Ã¾", "Ã¿"];
var replaceWith = ["À", "Á", "Â", "Ã", "Ä", "Å", "Æ", "Ç", "È", "É", "Ê", "Ë", "Ì", "Í", "Î", "Ï", "Ð", "Ñ", "Ò", "Ó", "Ô", "Õ", "Ö", "×", "Ø", "Ù", "Ú", "Û", "Ü", "Ý", "Þ", "ß", "à", "á", "â", "ã", "ä", "å", "æ", "ç", "è", "é", "ê", "ë", "ì", "í", "î", "ï", "ð", "ñ", "ò", "ó", "ô", "õ", "ö", "÷", "ø", "ù", "ú", "û", "ü", "ý", "þ", "ÿ"];

var utfmap = {};
for (var i = 0; i < toReplace.length; i++) {
    utfmap[toReplace[i]] = replaceWith[i];
}

toReplace.sort(function (a, b) {
    return b.length - a.length;
});

var utfexpression = new RegExp(toReplace.join("|"), "g");

function doUtfReplace(source) {
    return source.replace(utfexpression, function (m) {
        return utfmap[m] || "";
    });
}

// utf str replace [end]
$(document).ready(function () {

    //$("#inputEmail").val(serverDefaultUser);
    //$("#inputPassword").val(serverDefaultPassword);
    //coorgReload();
});

function openLeftSection() {
    if ($('#north').length && $("#west-splitter").length && $("#cntr-column").length && $("#east-column").length && $("#searchbox-component").length && $("#workspace-component").length) {
        $('#north').attr('style', 'display: block !important');
        $('#west-splitter').attr('style', 'display: block !important');
        $('#cntr-column').attr('style', 'display: none !important');
        $('#east-column').attr('style', 'display: none !important');
        $('#workspace-component').attr('style', 'display: block !important');
        $('#searchbox-component').attr('style', 'display: none !important');
    } else {
        setTimeout(openLeftSection, 1000);
    }
}

function openCenterSection() {
    if ($('#north').length && $("#west-splitter").length && $("#cntr-column").length && $("#east-column").length && $("#searchbox-component").length && $("#workspace-component").length) {
        $('#north').attr('style', 'display: none !important');
        $('#west-splitter').attr('style', 'display: none !important');
        $('#cntr-column').attr('style', 'display: block !important');
        $('#east-column').attr('style', 'display: none !important');
        $('#workspace-component').attr('style', 'display: none !important');
        $('#searchbox-component').attr('style', 'display: none !important');
    } else {
        setTimeout(openCenterSection, 1000);
    }
}


function scrollMessegeToBottom(timeInSec) {
    timeInSec = timeInSec * 1000;
    setTimeout(function () {
        var height = $('.scrollDiv01').prop('scrollHeight');
        $(".scrollDiv01").animate({
            scrollTop: height
        }, 1000);
    }, timeInSec);

}

function startProgress(frameRate) {
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, frameRate);

    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}

window.applicationCache.addEventListener('downloading', function (e) {
    console.log("##### Downloading...");
    showNewVersionMsg();
    $('#action-loader').hide();
}, false);

window.applicationCache.addEventListener('cached', function (e) {
    console.log("##### Download complete.");
    stopNavigate();
    window.location.reload();
}, false);

window.applicationCache.addEventListener('updateready', function (e) {
    console.log("##### Download & Update complete.");
    stopNavigate();
    window.applicationCache.swapCache();
    window.location.reload();
}, false);


var progressBarInterval;
var progressBarDoneInterval;


function uploadProgress() {

    var progressBarContainer = document.getElementById("progress-bar-container");
    if (progressBarContainer) {
        $("#progress-bar-container").show();
        var progressBar = document.getElementById("progress-bar");
        var width = 1;
        if (progressBarDoneInterval) {
            clearInterval(progressBarDoneInterval);
        }
        progressBarInterval = setInterval(frame, 40);

        function frame() {
            if (width >= 50) {
                clearInterval(progressBarInterval);
                //$( "#progress-bar-container" ).hide();
            } else {
                width = width + 0.16;
                progressBar.style.width = width + '%';
                $('#progress-bar').text(width.toFixed(0) + '%');
            }
        }
    }

}

function uploadProgressDone() {


    var progressBarContainer = document.getElementById("progress-bar-container");
    if (progressBarContainer) {
        var progressBar = document.getElementById("progress-bar");
        var width = $('#progress-bar').text();
        width = parseInt(rtrim(width));
        if (progressBarInterval) {
            clearInterval(progressBarInterval);
        }
        progressBarDoneInterval = setInterval(frame, 10);

        function frame() {
            if (width >= 100) {
                clearInterval(progressBarDoneInterval);
                $("#progress-bar-container").hide();
                progressBar.style.width = 1 + '%';
            } else {
                width = width + 1;
                progressBar.style.width = width + '%';
                $('#progress-bar').text(width.toFixed(0) + '%');
            }
        }
    }

}

function hideCustomMessageLoader() {
    ko.dataFor(document.body).messageBar().isMessageActive(false);
}
function showCustomMessegeLoader() {
    $('#confirmation-message-bar').show();
    setTimeout(function () {
        hideCustomMessageLoader();
    }, 3000);
}





var WHITE_SPACES = [' ', '\n', '\r', '\t', '\f', '\v', '\u00A0', '\u1680', '\u180E', '\u2000', '\u2001', '\u2002', '\u2003', '\u2004', '\u2005', '\u2006', '\u2007', '\u2008', '\u2009', '\u200A', '\u2028', '\u2029', '\u202F', '\u205F', '\u3000'];


/**
 * Remove chars from end of string.
 */
function rtrim(str, chars) {
    chars = chars || WHITE_SPACES;

    var end = str.length - 1,
            charLen = chars.length,
            found = true,
            i, c;

    while (found && end >= 0) {
        found = false;
        i = -1;
        c = str.charAt(end);

        while (++i < charLen) {
            if (c === chars[i]) {
                found = true;
                end--;
                break;
            }
        }
    }

    return (end >= 0) ? str.substring(0, end + 1) : '';
}


CSSLOADER = {
    load: function (filename) {
        if (!this.exists()) {
            var fileref = document.createElement("link");
            fileref.setAttribute("rel", "stylesheet");
            fileref.setAttribute("type", "text/css");
            fileref.setAttribute("href", filename);
            document.getElementsByTagName("head")[0].appendChild(fileref);
        }
    },
    exists: function (filename) {
        for (var i in document.styleSheets) {
            console.log( window.location.origin+"/"+filename);
            if (document.styleSheets[i].href === window.location.origin+"/"+filename) {
                return true;
            }
        }
        return false;
    },
    remove: function (filename) {
        if (this.exists()) {
            for (var i in document.styleSheets) {
                if (document.styleSheets[i].href === window.location.origin+"/"+filename) {
                    document.styleSheets[i] = null;
                }
            }
        }
    }
};