package io.cloudoffice.platform.cockpit.js;

import net.java.html.js.JavaScriptBody;

/**
 * Use {@link JavaScriptBody} annotation on methods to directly interact with
 * JavaScript. See
 * http://bits.netbeans.org/html+java/1.2/net/java/html/js/package-summary.html
 * to understand how.
 */
public final class JSUIUtils {

    private JSUIUtils() {
    }
     @JavaScriptBody(
            args = {},
            javacall = true,
            body = ""
    )
    public static native void init();

    /**
     * Shows confirmation dialog to the user.
     *
     * @param msg the message
     * @param callback called back when the use accepts (can be null)
     */
    @JavaScriptBody(
            args = {"msg", "callback"},
            javacall = true,
            body = "if (confirm(msg)) {\n"
            + "  callback.@java.lang.Runnable::run()();\n"
            + "}\n"
    )
    public static native void confirmByUser(String msg, Runnable callback);

    @JavaScriptBody(
            args = {"msg"},
            javacall = true,
            body = "alert(msg);\n"
    )
    public static native void alert(String msg);

    @JavaScriptBody(
            args = {"msg"},
            javacall = true,
            body = "window.console.log(msg);\n"
    )
    public static native void console(String msg);

    @JavaScriptBody(
            args = {"uri"},
            javacall = true,
            body = "return encodeURIComponent(uri);\n"
    )
    public static native String encodeURI(String uri);

    @JavaScriptBody(
            args = {}, body
            = "var w = window,\n"
            + "    d = document,\n"
            + "    e = d.documentElement,\n"
            + "    g = d.getElementsByTagName('body')[0],\n"
            + "    x = w.innerWidth || e.clientWidth || g.clientWidth;\n"
            + "return  x;\n"
    )
    public static native int screenWidth();

    @JavaScriptBody(
            args = {}, body
            = "var w = window,\n"
            + "    d = document,\n"
            + "    e = d.documentElement,\n"
            + "    g = d.getElementsByTagName('body')[0],\n"
            + "    y = w.innerHeight|| e.clientHeight|| g.clientHeight;\n"
            + "return y;\n"
    )
    public static native int screenHeight();

    @JavaScriptBody(
            args = {"id"}, body
            = " var y = $(\"#\"+id).height();\n"
            + "return y;\n"
    )
    public static native int getHeight(String id);

    @JavaScriptBody(
            args = {"id"}, body
            = " var y = $(\"#\"+id).parent(\"li\").parent(\"ul\").attr(\"id\");\n"
            + "return y;\n"
    )
    public static native String getParentColumn(String id);

    @JavaScriptBody(
            args = {"id"}, body
            = "$(\"#\"+id).addClass('m-col-lft');"
    )
    public static native void smallDeviceFullSize(String id);

    @JavaScriptBody(
            args = {"username", "password"}, body
            = " var tok = username + ':' + password;\n"
            + "              var hash = btoa(tok);\n"
            + "              return \"Basic \" + hash;"
    )
    public static native String getAuthToken(String username, String password);

    @JavaScriptBody(
            args = {"id"}, body
            = "var value='#'+id+' '+'.tag-item-input';\n"
            + "$(value).html('');\n"
    )
    public static native String clearTagInputField(String id);

    @JavaScriptBody(
            args = {"id"}, body
            = "var value='#'+id+' '+'.tag-item-input';\n"
            + "var selectedTag =$(value).val().trim();\n"
            + "return selectedTag;\n"
    )
    public static native String getTagInput(String id);

    @JavaScriptBody(
            args = {}, body
            = "var count =$(\".tag-item-container .tag\").length;\n"
            + "return count;\n"
    )
    public static native long getTagItemNumber();

    @JavaScriptBody(
            args = {}, body
            = "return serverUrl;"
    )
    public static native String getServerURL();

    @JavaScriptBody(
            args = {}, body
            = "return serverDefaultUser;"
    )
    public static native String getServerDefaultUserName();

    @JavaScriptBody(
            args = {}, body
            = "return serverDefaultPassword;"
    )
    public static native String getServerDefaultUserPassword();

    @JavaScriptBody(
            args = {"id"}, body
            = "$(\"#\"+id).show();\n"
    )
    public static native void showDropDownBlock(String id);

    @JavaScriptBody(
            args = {"id"}, body
            = "$(\"#\"+id).hide();\n"
    )
    public static native void hideDropDownBlock(String id);
    
    @JavaScriptBody(
            args = {"id"}, body
            = "var css = $(\"#\"+id).css('display');\n" +
              "return css;"
    )
    public static native String getSelectedBlockDisplayById(String id);
    
    @JavaScriptBody(
            args = {}, body = "$(\"#progress\").show(); "
            + "$({property: 0}).animate({property: 105}, {\n"
            + "            duration: 4000,\n"
            + "            step: function() {\n"
            + "                var _percent = Math.round(this.property);\n"
            + "                $('#progress').css('width',  _percent+\"%\");\n"
            + "                if(_percent == 105) {\n"
            + "                    $(\"#progress\").hide();\n"
            + "                }\n"
            + "            },\n"
            + "            complete: function() {"
            + " \n"
            + "            }\n"
            + "        });")
    public static native void loaderBar();

    @JavaScriptBody(
            args = {}, body = "$('.cstm-file-viewer').hide();\n "
            + "$('.wait').show(); "
    )
    public static native void showFileLoader();

    @JavaScriptBody(
            args = {}, body = "$('.wait').hide();\n  "
            + "$('.cstm-file-viewer').show();"
    )
    public static native void HideFileLoader();

    @JavaScriptBody(
            args = {}, body = "return serverBaseUrl;"
    )
    public static native String getServerBaseUrl();

    @JavaScriptBody(
            args = {"webContent", "host"}, body
            = ""
            + "webContent = doUtfReplace(webContent);"
            + "String.prototype.replaceAll = function (find, replace) {\n"
            + "var str = this;\n"
            + "return str.replace(new RegExp(find.replace(/[-\\/\\\\^$*+?.()|[\\]{}]/g, '\\\\$&'), 'g'), replace);\n"
            + "};\n"
            + "webContent = webContent.replaceAll('\"/html/', '\"'+host+'/html/');\n"
            + "webContent = webContent.replaceAll('\"/documents/', '\"'+host+'/documents/');\n"
            + "webContent = webContent.replaceAll('\"/combo/', '\"'+host+'/combo/');\n"
            + "return webContent;"
    )
    public static native String addBaseUrl(String webContent, String host);

    /**
     * It will serve defaultDomain value set in properties.js
     *
     * @return
     */
    @JavaScriptBody(
            args = {}, body = "return defaultDomain;"
    )
    public static native String getDefaultDomain();

    @JavaScriptBody(
            args = {}, body = "return wsUrl;"
    )
    public static native String getWsUrl();

    @JavaScriptBody(
            args = {"base64EncodedString"}, body
            = "var decodedString = atob(base64EncodedString);\n"
            //+ "decodedString=decodedString.replace(/(<img *src=\")(?!http:\\/\\/)(.*?)\"/g, '$1' + defaultDomain + '$2\"');"
            + "decodedString = decodedString.replace(/&nbsp;/g,\"\");"
            + "decodedString = decodedString.replace(/&amp;nbsp;/g,\"\");"
            + "return decodedString;"
    )
    public static native String stringDecodeWithImageReplace(String base64EncodedString);

    @JavaScriptBody(
            args = {"encodedString"}, body
            = "var Base64={_keyStr:\"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\",encode:function(e){var t=\"\";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t=\"\";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9+/=]/g,\"\");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/rn/g,\"n\");var t=\"\";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t=\"\";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}}\n"
            + "var decodedString = Base64.decode(encodedString);"
            + "return decodedString;"
    )
    public static native String stringDecodeCrosBrowser(String encodedString);

    @JavaScriptBody(
            args = {"decodedString"}, body
            = "var Base64={_keyStr:\"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\",encode:function(e){var t=\"\";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t=\"\";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9+/=]/g,\"\");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/rn/g,\"n\");var t=\"\";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t=\"\";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}}\n"
            + "var encodedString = Base64.encode(decodedString);"
            + "return encodedString;"
    )
    public static native String stringEncodeCrosBrowser(String decodedString);
    
    @JavaScriptBody(
            args = {"decodedString"}, body
            = ""
            //+ "var encodedString = btoa(decodedString);"
            + "var encodedString = window.btoa(unescape(encodeURIComponent( decodedString )));"
            + "return encodedString;"
    )
    public static native String stringEncode(String decodedString);
    
    @JavaScriptBody(
            args = {"base64EncodedString"}, body
            = ""
            //+ "var decodedString = atob(base64EncodedString);\n"
            + "var decodedString = decodeURIComponent(escape(window.atob( base64EncodedString )));"
            //+ "decodedString=decodedString.replace(/(<img *src=\")(?!http:\\/\\/)(.*?)\"/g, '$1' + defaultDomain + '$2\"');"
            + "decodedString = decodedString.replace(/&nbsp;/g,\" \");"
            + "decodedString = decodedString.replace(/&amp;nbsp;/g,\" \");"
            + "return decodedString;"
    )
    public static native String stringDecode(String base64EncodedString);
    
    @JavaScriptBody(
            args = {}, body
            = "var doc = document.getElementById(\"icontent\").contentDocument; \n"
            + "var content=document.getElementById(\"showContent\"); \n"
            + "doc.write(content.innerHTML);\n"
            + "doc.close();$(\"#showContent\").hide();"
    )
    public static native String webContentLoadToIframe();

    @JavaScriptBody(
            args = {"hostname", "pageUrl"}, body
            = ""
            + "var doc = document.getElementById(\"frame\").contentDocument; \n"
            + "doc.write(\"\");\n"
            + "doc.close();"
            + "String.prototype.replaceAll = function (find, replace) {\n"
            + "  var str = this;\n"
            + "  return str.replace(new RegExp(find.replace(/[-\\/\\\\^$*+?.()|[\\]{}]/g, '\\\\$&'), 'g'), replace);\n"
            + "};\n"
            + "  $.ajax({\n"
            + "    url: pageUrl,\n"
            + "    type: 'GET',\n"
            + "    success: function(res) {\n"
            + "    var data = res.replaceAll('\"/documents/', '\"'+hostname+'/documents/');\n"
            + "    data = data.replaceAll('\"/combo/', '\"'+hostname+'/combo/');\n"
            + "    data = data.replaceAll('\"/html/css/main.css', '\"'+hostname+'/html/css/main.css');\n"
            + "    data = data.replaceAll('\"/html/js/barebone.jsp', '\"'+hostname+'/html/js/barebone.jsp');\n"
            + "    data = data.replaceAll('\"/html/js/liferay/', '\"'+hostname+'/html/js/liferay/');\n"
            + "    doc.write(data);\n"
            + "    doc.close();"
            + "  },"
            + "    error: function (request, status, error) {\n"
            + "        if(request.status === 0){"
            + "             alert('Please accept HTTPS certificate for '+hostname);"
            + "         }"
            + "    }\n"
            + "});"
            + "$('#pageViewLoader').css({'display':'none'});"
    )
    public static native String setHostnameToIframe(String hostname, String pageUrl);

    @JavaScriptBody(
            args = {"pageUrl"}, body
            = "var doc = document.getElementById(\"templatepreviewframe\").contentDocument; \n"
            + "  $.ajax({\n"
            + "    url: pageUrl,\n"
            + "    type: 'GET',\n"
            + "    success: function(res) {\n"
            + "    doc.write(res);\n"
            + "    doc.close();"
            + "  }\n"
            + "});")
    public static native String showPageTemplateOnIframe(String pageUrl);

    @JavaScriptBody(
            args = {"pageUrl"}, body
            = "var doc = document.getElementById(\"mailpagepreviewframe\").contentDocument; \n"
            + "  $.ajax({\n"
            + "    url: pageUrl,\n"
            + "    type: 'GET',\n"
            + "    success: function(res) {\n"
            + "    doc.write(res);\n"
            + "    doc.close();"
            + "  }\n"
            + "});")
    public static native String showMailPageTemplateOnIframe(String pageUrl);

    @JavaScriptBody(args = {}, body
            = "$('.webContents *').filter(function() {\n"
            + "  var boolValue = $(this).css(\"position\") === 'fixed';\n"
            + "  if (boolValue) {\n"
            + "    $(this).css(\"position\", \"relative\");\n"
            + "  }\n"
            + "});"
    )
    public static native void replaceFixedPosition();

    /*
     @JavaScriptBody(
     args = {"idData"}, body
     = "tinymce.init({selector:'#'+idData,plugins: [\n"
     + "    'advlist autolink lists link image charmap print preview anchor',\n"
     + "    'searchreplace visualblocks code fullscreen',\n"
     + "    'insertdatetime media table contextmenu paste'\n"
     + "  ],\n"
     + "  toolbar: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',\n"
     + "    setup: function (editor) {\n"
     + "        editor.on('change', function () {\n"
     + "           var contentData = tinymce.activeEditor.getContent();"
     + "           $('#'+idData).val(contentData);"
     + "           editor.save();\n"
     + "        });\n"
     + "    }});"
     )
     public static native void showtinyMCEditor(String idData);
     */
    @JavaScriptBody(
            args = {}, body
            = "disconnectMessenger();"
            + "location.reload();"
    )
    public static native void logout();

    @JavaScriptBody(
            args = {"hostname", "pageUrl", "id", "content"}, body
            = "var doc = document.getElementById(id).contentDocument; \n"
            + "doc.write(content);\n"
            + "    doc.close();"
    )
    public static native String setCampTempHostnameToIframe(String hostname, String pageUrl, String id, String content);

    @JavaScriptBody(
            args = {"content"}, body
            = "var doc = document.getElementById(\"mailpagepreviewframe\").contentDocument; \n"
            + "doc.write('');\n"
            + "doc.write(content);\n"
            + "    doc.close();"
    )
    public static native String setMailTempViewToIframe(String content);

    @JavaScriptBody(
            args = {"content"}, body
            = "var doc = document.getElementById(\"sitetemplatepreviewframe\").contentDocument; \n"
            + "doc.write('');"
            + "doc.write(content);\n"
            + "    doc.close();"
    )
    public static native String setSiteTempViewToIframe(String content);

    @JavaScriptBody(
            args = {}, body
            = "var ua = window.navigator.userAgent;\n"
            + "    var msie = ua.indexOf(\"MSIE \");\n"
            + "\n"
            + "    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\\:11\\./))  // If Internet Explorer, return version number\n"
            + "    {\n"
            + "        return true;\n"
            + "    }\n"
            + "    return false;"
    )
    public static native boolean isBrowserIE();

    @JavaScriptBody(args = {}, body = "tinyMCE.triggerSave();")
    public static native void saveTinyMCE();

    @JavaScriptBody(
            args = {"id"}, body
            = "return $('#'+id).val();"
    )
    public static native String getValueById(String id);


    /* POPUP LOADER */
    @JavaScriptBody(
            args = {}, body
            = "$('.popup-loader').css({'display':'block'})\n"
            + "setTimeout(function(){\n"
            + "$('.popup-loader').css({'display':'none'})\n"
            + "},10000);"
    )
    public static native void showPopupLoader();

    
    @JavaScriptBody(
            args = {}, body = "$('.popup-loader').css({'display':'none'});"
    )
    public static native void hidePopupLoader();

    /* EAST-TOP-TAB LOADER */
    @JavaScriptBody(
            args = {}, body
            = "$('#east-top-loader').css({'display':'block'})\n"
            + "setTimeout(function(){\n"
            + "$('#east-top-loader').css({'display':'none'})\n"
            + "},10000);"
    )
    public static native void showEastTopTabLoader();

    @JavaScriptBody(
            args = {}, body = "$('#east-top-loader').css({'display':'none'});"
    )
    public static native void hideEastTopTabLoader();

    /* BLANK-TAB LOADER */
    @JavaScriptBody(
            args = {}, body
            = "$('.blank-tab-loader').css({'display':'block'})\n"
            + "setTimeout(function(){\n"
            + "$('.blank-tab-loader').css({'display':'none'})\n"
            + "},10000);"
    )
    public static native void showBlankTabLoader();

    @JavaScriptBody(
            args = {}, body = "$('.blank-tab-loader').css({'display':'none'});"
    )
    public static native void hideBlankTabLoader();

    /* PAGE-EDIT-VIEW loader */
    @JavaScriptBody(
            args = {}, body
            = "$('.pageEditLoader').css({'display':'block'})\n"
            + "setTimeout(function(){\n"
            + "$('.pageEditLoader').css({'display':'none'})\n"
            + "},10000);"
    )
    public static native void showPageEditViewLoader();

    @JavaScriptBody(
            args = {}, body = "$('.pageEditLoader').css({'display':'none'});"
    )
    public static native void hidePageEditViewLoader();

    @JavaScriptBody(
            args = {}, body
            = "$('#pageViewLoader').css({'display':'block'})\n"
            + "setTimeout(function(){\n"
            + "$('#pageViewLoader').css({'display':'none'})\n"
            + "},15000);"
    )
    public static native void showPageViewLoader();

    @JavaScriptBody(
            args = {}, body = "$('#pageViewLoader').css({'display':'none'});"
    )
    public static native void hidePageViewLoader();

    @JavaScriptBody(
            args = {}, body
            = "$('#relatedItemLoaderView').css({'display':'block'})\n"
            + "setTimeout(function(){\n"
            + "$('#relatedItemLoaderView').css({'display':'none'})\n"
            + "},15000);"
    )
    public static native void showRelatedItemLoaderView();

    @JavaScriptBody(
            args = {}, body = "$('#relatedItemLoaderView').css({'display':'none'});"
    )
    public static native void hideRelatedItemLoaderView();

    /* RELATED-ITEM-LOADER loader*/
    @JavaScriptBody(
            args = {}, body
            = "$('.related-item-loader').css({'display':'block'})\n"
            + "setTimeout(function(){\n"
            + "$('.related-item-loader').css({'display':'none'})\n"
            + "},7000);"
    )
    public static native void showRelatedItemLoader();

    @JavaScriptBody(
            args = {}, body = "$('.related-item-loader').css({'display':'none'});"
    )
    public static native void hideRelatedItemLoader();

    /* EAST-BOTTOM Content-Edit-tab LOADER */
    @JavaScriptBody(
            args = {}, body
            = "$('#content-edit-loader').css({'display':'block'})\n"
            + "setTimeout(function(){\n"
            + "$('#content-edit-loader').css({'display':'none'})\n"
            + "},10000);"
    )
    public static native void showContentEditLoader();

    @JavaScriptBody(
            args = {}, body = "$('#content-edit-loader').css({'display':'none'});"
    )
    public static native void hideContentEditLoader();

    @JavaScriptBody(
            args = {"text"}, body = ""
            + "setTimeout(function(){\n"
            + "processXMLContent(text);\n"
            + "}, 200);"
    )
    public static native void contentXMLParseAndFormFieldMake(String text);

    @JavaScriptBody(
            args = {"contentLayoutId"}, body = ""
            + "var allElements = document.getElementsByClassName(\"contentInputField\");"
            + "  for (var i = 0; allElements.length > i; i++) {"
            + "    updateXML(allElements[i]);"
            + "  }"
            + "function updateXML(element){"
            + "  var v = $(element).val();"
            + " var dataValue = $(element).attr('data-value');"
            + " if ($(element).is('textarea')) { "
            + " v = tinymce.get($(element).attr('id')).getContent();"
            + "}"
            + "if(v === ''){"
            + " v = dataValue;"
            + " }"
            + "if(typeof v === 'undefined'){"
            + "     v='';"
            + "}"
            + "v=v.trim();"
            + "  var xpath = $(element).attr('xpath');"
            + "$($xml).find('[xpath=\"'+xpath+'\"]').text('<![CDATA['+v+']]>');"
            + "}"
            + "$($xml).find('[name=\"customPropContentLayoutId\"]').children().last().text('<![CDATA['+contentLayoutId+']]>');"
    )
    public static native void updateContentXML(String contentLayoutId);

    @JavaScriptBody(
            args = {"customPropName"}, body = ""
            + "return $($xml).find('[name='+customPropName+']').children().last().text();"
    )
    public static native String getCustomPropVal(String customPropName);

    @JavaScriptBody(
            args = {"customPropName", "customPropVal"}, body = ""
            + "$($xml).find('[name='+customPropName+']').children().last().empty();"
            + "$($xml).find('[name='+customPropName+']').children().last().append($xml.createCDATASection(customPropVal));"
    )
    public static native void setCustomPropVal(String customPropName, String customPropVal);

    @JavaScriptBody(args = {}, body = "return $($xml).find('root').attr('available-locales');")
    public static native String getxmlString0();

    @JavaScriptBody(args = {}, body = "return $($xml).find('root').attr('default-locale');")
    public static native String getxmlString1();

    @JavaScriptBody(args = {}, body = ""
            + "return getXml();"
    )
    public static native String getxmlString2();

    @JavaScriptBody(args = {"xmlStucture"}, body = ""
            + "$xmlStucture = $.parseXML(xmlStucture);"
    )
    public static native String processStructureXml(String xmlStucture);

    @JavaScriptBody(args = {"pageList"}, body = ""
            + "pageLinkList = pageList;"
    )
    public static native String processPageLinkList(String pageList);

    @JavaScriptBody(args = {}, body = ""
            + "chooseImageByChooser();"
    )
    public static native void insertImage();

    @JavaScriptBody(
            args = {"hostname", "pageUrl", "content"}, body
            = "$('#pageEditLoader').css({'display':'block'});"
            + "var doc = document.getElementById(\"frame\").contentDocument; \n"
            + "doc.write(content);\n"
            + "doc.close();"
    )
    public static native String setContentToIframe(String hostname, String pageUrl, String content);

    @JavaScriptBody(
            args = {"hostname", "pageUrl", "content"}, body
            = "$('#pageEditLoader').css({'display':'block'});"
            + "var doc = document.getElementById(\"related-frame\").contentDocument; \n"
            + "doc.write(content);\n"
            + "doc.close();"
    )
    public static native String setContentToRelatedIframe(String hostname, String pageUrl, String content);

    @JavaScriptBody(
            args = {"content"}, body
            = "$(\"#mailPreview\").html(\"\");$(\"#mailPreview\").append(content);"
    )
    public static native String setContentToDiv(String content);

    // PROFILE CALENDAR LOADER
    @JavaScriptBody(
            args = {}, body
            = "$('#calendar-loader').show();"
    )
    public static native void showCalendarLoader();

    @JavaScriptBody(
            args = {}, body
            = "$('#slot-edit-popup').css({display:'block'});\n"
    )
    public static native void showSlotEditPopup();

    @JavaScriptBody(
            args = {}, body
            = "$('#slot-edit-popup').css({display:'none'});\n"
    )
    public static native void hideSlotEditPopup();

    @JavaScriptBody(
            args = {"id"}, body
            = "var parentOffsetTop = $(\".calendar-ui\").offset().top;\n"
            + "var slotOffsetTop = $(\"#\"+id).offset().top;\n"
            + "var popupTop = slotOffsetTop - parentOffsetTop;\n"
            + "return popupTop+'';\n"
    )
    public static native String getPopupPositionTop(String id);

    @JavaScriptBody(
            args = {"id"}, body
            = "var parentOffsetLeft = $(\".calendar-ui\").offset().left;\n"
            + "var slotOffsetLeft = $(\"#\"+id).offset().left;\n"
            + "var popupLeft = slotOffsetLeft - parentOffsetLeft;\n"
            + "return popupLeft+'';\n"
    )
    public static native String getPopupPositionLeft(String id);

    @JavaScriptBody(
            args = {}, body
            = "$('.dropdown-menu').css({display:'none'});\n"
    )
    public static native void hideEditBlock();

    @JavaScriptBody(
            args = {"id"}, body
            = "$(\"#\"+id+\".dropdown-menu\").css({display:'block'});\n"
    )
    public static native void showEditBlock(String id);

    @JavaScriptBody(
            args = {}, body
            = "$('#search-box-input').width('100%');"
            + "var searchboxitemcontainer = $('#item-container').width();\n"
            + "var searchboxinput = $('#search-box-input').width();\n"
            + "var inputWidth = searchboxinput-searchboxitemcontainer-5;\n"
            + "$('#search-box-input').css(\"width\",inputWidth+'px');"
    )
    public static native void changeInputWidth();

    /*ACTION LOADER: loader will visible while loading data*/
    @JavaScriptBody(
            args = {}, body
            = "$('.action-loader').css({'display':'block'});\n"
            + "startProgress(70);\n"
            + "setTimeout(function(){\n"
            + "$('.action-loader').css({'display':'none'})\n"
            + "},10000);"
    )
    public static native void showActionPerformLoader();

    @JavaScriptBody(
            args = {}, body = "document.getElementById('action-loader').style.display='none';"
    )
    public static native void hideActionPerformLoader();

    @JavaScriptBody(
            args = {"id"}, body
            = "$(\"#\"+id).show();\n"
    )
    public static native void showOverlayById(String id);

    @JavaScriptBody(
            args = {"id"}, body
            = "$(\"#\"+id).hide();\n"
    )
    public static native void hideOverlayById(String id);

    @JavaScriptBody(
            args = {}, body
            = "$(\"#commonOverlay\").show();\n"
    )
    public static native void showOverlay();

    @JavaScriptBody(
            args = {}, body
            = "$(\"#commonOverlay\").hide();\n"
    )
    public static native void hideOverlay();

    // show message bar (hide action loader)
    @JavaScriptBody(
            args = {}, body
            = "$('.success-msg').css({'display':'none'});\n"
            + "$('.error-msg').css({'display':'none'});\n"
            + "$('#confirmation-message-bar').show().delay(3000).fadeOut();"
    )
    public static native void showMessageBar();

    @JavaScriptBody(
            args = {}, body
            = "setTimeout(function(){ko.dataFor(document.body).countryDataProvider().callCountryListService();}, 15000);"
    )
    public static native void callCountryListService();

    @JavaScriptBody(
            args = {}, body
            = "setTimeout(function(){"
            + "ko.dataFor(document.body).mainLayoutView().middleContainerView().loggedInUserDetails();"
            + "}, 10);"
    )
    public static native void afterLogin();

    @JavaScriptBody(
            args = {}, body
            = "ko.dataFor(document.body).mainLayoutView().messageInfo($('#message-input').text());"
    )
    public static native void getNewMessageInfo();

    @JavaScriptBody(
            args = {}, body
            = "setTimeout(function(){"
            + "ko.dataFor(document.body).calendarView().constructDefault();}, 10000);"
    )
    public static native void constructCalendar();

    @JavaScriptBody(
            args = {}, body
            = "setTimeout(function(){"
            + "ko.dataFor(document.body).navigationView().reloadNavigationHistory();}, 6000);"
    )
    public static native void reloadNavigationHistory();

    @JavaScriptBody(
            args = {}, body
            = "setTimeout(function(){"
            + "ko.dataFor(document.body).favoriteView().getFavoriteCollections(ko.dataFor(document.body).favoriteView);}, 3000);"
    )
    public static native void callFavoriteListService();

    @JavaScriptBody(
            args = {}, body
            = "setTimeout(function(){"
            + "ko.dataFor(document.body).collectionView().reloadCollectionByJSMethod();}, 3000);"
    )
    public static native void reloadCollectionListService();

    @JavaScriptBody(
            args = {}, body
            = "setTimeout(function(){"
            + "ko.dataFor(document.body).init();}, 1);"
    )
    public static native void appContextInit();

    @JavaScriptBody(
            args = {}, body
            = "return JSON.parse(JSON.stringify(calendarJSON));"
    )
    public static native Object getCalenarJson();
    
    @JavaScriptBody(
            args = {}, body
            = "return JSON.parse(JSON.stringify(app));"
    )
    public static native Object getApp();

     @JavaScriptBody(
            args = {"viewmodel"}, body
            = "return ko.applyBindings(viewmodel,{});"
    )
    public static native Object doBind(Object viewmodel);
    
    @JavaScriptBody(
            args = {}, body
            = "return JSON.parse(JSON.stringify(tempMessage));"
    )
    public static native Object getTempMessage();

    //TODO varName variable is not working here.
    @JavaScriptBody(
            args = {"varName"}, body
            = "return JSON.parse(JSON.stringify(tempRecentConversation));"
    )
    public static native Object getValue(String varName);

    @JavaScriptBody(
            args = {}, body
            = "return companyName;"
    )
    public static native String getCompanyName();

    @JavaScriptBody(
            args = {}, body
            = "return stylePath;"
    )
    public static native String getCompanyStylePath();

    @JavaScriptBody(
            args = {}, body
            = "return logoPath;"
    )
    public static native String getCompanyLogoPath();

    @JavaScriptBody(
            args = {"timeInSec"}, body
            = "scrollMessegeToBottom(timeInSec);"
    )
    public static native void messageScrollToBottom(int timeInSec);
    
    @JavaScriptBody(
            args = {}, body
            = "setTimeout(function(){var height=$('.scrollDiv02').scrollHeight;"
            + "$('.scrollDiv02').scrollTop(height+200)},0);"
    )
    public static native void messageScrollBottomMainSearch();

    @JavaScriptBody(
            args = {}, body
            = "setTimeout(function(){var height=$('.scrollDiv02').scrollHeight;"
            + "$('.scrollDiv02').scrollTop(height)},0);"
    )
    public static native void listSearchScrollBottomMainSearch();

    @JavaScriptBody(
            args = {}, body
            = "setTimeout(function(){var height=$('.cus-col-lft').scrollHeight;"
            + "$('.cus-col-lft').scrollTop(0)},0);"
    )
    public static native void messageScrollTopChat();

    @JavaScriptBody(
            args = {}, body
            = "return defaultCountryName;"
    )
    public static native String getDefaultCountryName();

    @JavaScriptBody(
            args = {}, body
            = "return defaultCountryCode;"
    )
    public static native String getDefaultCountryCode();

    @net.java.html.js.JavaScriptBody(
            args = {"runnable", "time"},
            javacall = true,
            body
            = "return window.setInterval(function() { runnable.@java.lang.Runnable::run()(); }, time);"
    )
    public static native Object timer(Runnable runnable, int time);

    @JavaScriptBody(args = {},
            javacall = true,
            body
            = "window.onbeforeunload = function() {};"
    )
    public static native void stopNavigate();

    @JavaScriptBody(
            args = {}, body
            = "setTimeout(function(){"
            + "ko.dataFor(document.body).messageView().loadNewChat();}, 2000);"
    )
    public static native void loadNewChat();

    @JavaScriptBody(
            args = {}, body
            = "return softwareVersion;"
    )
    public static native int getSoftwareVersion();
    
    @JavaScriptBody(
            args = {"name", "value"},
            javacall = true,
            body = ""
            + " var d = new Date();\n"
            + "    d.setTime(d.getTime() + (365*24*60*60*1000));\n"
            + "    var expires = \"expires=\"+d.toUTCString();\n"
            + "    document.cookie = name + \"=\" + value + \"; \" + expires;"
    )
    public static native void setCookie(String name, String value);

    @JavaScriptBody(
            args = {"name", "value"},
            javacall = true,
            body = ""
            + " var d = new Date();\n"
            + "    d.setTime(d.getTime() + (365*24*60*60*1000));\n"
            + "    var expires = \"expires=\"+d.toUTCString();\n"
            + "    document.cookie = name + \"=\" + value + \"; \" + expires;"
    )
    public static native void setCookie(String name, int value);

    @JavaScriptBody(
            args = {"cname"},
            javacall = true,
            body = ""
            + "     var name = cname + \"=\";\n"
            + "    var ca = document.cookie.split(';');\n"
            + "    for(var i=0; i<ca.length; i++) {\n"
            + "        var c = ca[i];\n"
            + "        while (c.charAt(0)==' ') {\n"
            + "            c = c.substring(1);\n"
            + "        }\n"
            + "        if (c.indexOf(name) == 0) {\n"
            + "            return c.substring(name.length, c.length);\n"
            + "        }\n"
            + "    }\n"
            + "    return \"\";"
    )
    public static native String getCookie(String cname);

    @JavaScriptBody(
            args = {}, body
            = "$('#newversionmsg').show();"
    )
    public static native void showNewVersionMsg();

    @JavaScriptBody(
            args = {}, body
            = "$('#newversionmsg').hide();"
    )
    public static native void hideNewVersionMsg();

    @JavaScriptBody(
            args = {}, body
            = "$('.dropDownList').hide();"
    )
    public static native void hideSelectItemDropDown();

    @JavaScriptBody(
            args = {"milli"},
            javacall = true,
            body = "setTimeout(function(){ location.reload(true); }, milli);\n"
    )
    public static native void setTimeOut(int milli);

    @JavaScriptBody(
            args = {}, body
            = " var el = document.getElementById(\"message-input\");\n"
            + "  \n"
            + "    el.focus();"
    )
    public static native void setCreateMessageCaret();

    @JavaScriptBody(
            args = {}, body
            = "return debugOn;"
    )
    public static native boolean isDebugOn();

    @JavaScriptBody(
            args = {}, body
            = "setTimeout(function(){"
            + "ko.dataFor(document.body).mainLayoutView().actionMenu().selectedActionMenuItem().popover().popoverContent().reloadItemList();}, 10000);"
    )
    public static native void reloadPopoverListItem();

    @JavaScriptBody(
            args = {}, body
            = "setTimeout(function(){ko.dataFor(document.body).dynamicItemTopContainer().reloadSupportingTop();}, 1000);"
    )
    public static native void reloadSupportingTop();

    @JavaScriptBody(
            args = {}, body
            = "setTimeout(function(){ko.dataFor(document.body).dynamicItemBottomContainer().reloadSupportingBottom();}, 2000);"
    )
    public static native void reloadSupportingBottom();

    @JavaScriptBody(
            args = {}, body
            = "setTimeout(function(){ko.dataFor(document.body).mainLayoutView().middleContainerView().reloadContextAfterRelateItemJSMethod();}, 3000);"
    )
    public static native void reloadSelectedContext();

    @JavaScriptBody(
            args = {}, body
            = "setTimeout(function(){ko.dataFor(document.body).chatCollectionListView().setTopConversationActive();}, 2000);"
    )
    public static native void setTopConversationActive();

    @JavaScriptBody(
            args = {}, body
            = "setTimeout(function(){ko.dataFor(document.body).chatCollectionListView().setTopConversationActiveAndSetToSearchBox();}, 2000);"
    )
    public static native void setTopConversationActiveAndSetToSearchBox();

    @JavaScriptBody(
            args = {"url"}, body
            = "window.open(url, '_blank');"
    )
    public static native void downloadFile(String url);

    @JavaScriptBody(
            args = {}, body
            = "return defaultSiteId;"
    )
    public static native String getDefaultSiteId();

    @JavaScriptBody(
            args = {}, body
            = "$('.componentLoader').css({'display':'block'})\n"
            + "setTimeout(function(){\n"
            + "$('.componentLoader').css({'display':'none'})\n"
            + "},10000);"
    )
    public static native void showComponentLoader();

    @JavaScriptBody(
            args = {}, body = "$('.componentLoader').css({'display':'none'});"
    )
    public static native void hideComponentLoader();

    @JavaScriptBody(args = {"contentLayoutId"}, body = ""
            + "$contentLayoutId = contentLayoutId;"
    )
    public static native void setContentLayoutId(String contentLayoutId);

    @JavaScriptBody(
            args = {"id"}, body
            = ""
            + "setTimeout(function(){\n"
            + "     richTextEditorFull(id);"
            + "},1);"
    )
    public static native void richTextEditorFull(String id);

    @JavaScriptBody(
            args = {"id"}, body
            = "return tinymce.get(id).getContent();"
    )
    public static native String getRichTextEditorContent(String id);

    @JavaScriptBody(
            args = {"id"}, body
            = "return tinymce.get(id).setContent('');"
    )
    public static native String clearRichTextEditorContent(String id);

    @JavaScriptBody(
            args = {}, body
            = "$(\"div.mce-toolbar.mce-last\").show();"
            + "$(\"div.mce-toolbar.mce-first\").hide();"
    )
    public static native void maxRichTextEditorToolbar();

    @JavaScriptBody(
            args = {}, body
            = "$(\"div.mce-toolbar.mce-last\").hide();"
            + "$(\"div.mce-toolbar.mce-first\").show();"
    )
    public static native void minRichTextEditorToolbar();

    @JavaScriptBody(
            args = {"id"}, body
            = "$(\"#\"+id).hide();\n"
    )
    public static native void hide(String id);

    @JavaScriptBody(
            args = {}, body
            = "$('.appLoader').css({'display':'block'})\n"
            + "setTimeout(function(){\n"
            + "$('.appLoader').css({'display':'none'})\n"
            + "},10000);"
    )
    public static native void showAppLoader();

    @JavaScriptBody(
            args = {}, body = "$('.appLoader').css({'display':'none'});"
    )
    public static native void hideAppLoader();
    
    @JavaScriptBody(
            args = {}, body = "$('.action-menu').css({'display':'none'});"
                    + "if($('#selectAll').css('display') == 'block')"
                    + "{$('#exportId').css('margin-left','265px');}"
                    + "else{$('#exportId').css('margin-left','105px');}"
                    + "$('#exportId').css({'display':'block'});"
    )
    public static native void showExportBlock();
    
    @JavaScriptBody(
            args = {}, body = "$('#exportId').css({'display':'none'});"
    )
    public static native void hideExportBlock();
    

    @JavaScriptBody(
            args = {}, body
            = "openLeftSection();\n"
    )
    public static native void openLeftSection();
    
    @JavaScriptBody(
            args = {}, body
            = "openCenterSection();\n"
    )
    public static native void openCenterSection();

    @JavaScriptBody(
            args = {}, body
            = "return timeZone;"
    )
    public static native String getTimeZoneFromProperties();
    
    @JavaScriptBody(
            args = {"msg"},
            javacall = true,
            body = "console.log(msg +':'+new Date());\n"
    )
    public static native void consoleTime(String msg); 
    
    
    @JavaScriptBody(
            args = {}, body
            = "setTimeout(function(){"
            + "ko.dataFor(document.body).workspaceView().workSpaceDefaultSelection();}, 3000);"
    )
    public static native void workSpaceDefaultSelection();


    
    @JavaScriptBody(
            args = {},
            javacall = true,
            body = "uploadProgress();\n"
    )
    public static native void uploadProgressStart(); 
    
    
    @JavaScriptBody(
            args = {},
            javacall = true,
            body = "uploadProgressDone();\n"
    )
    public static native void uploadProgressEnd();
    
    @JavaScriptBody(
            args = {}, body
            = "showCustomMessegeLoader();"
    )
    public static native void showCustomMessegeLoader();
    
    @JavaScriptBody(
            args = {}, body
            = "hideCustomMessageLoader();"
    )
    public static native void hideCustomMessegeLoader(); 
    
    @JavaScriptBody(
            args = {}, body
            = "return googleSyncAuthUrl;"
    )
    public static native String getGoogleSyncAuthUrl();

    @JavaScriptBody(
            args = {}, body
            = "return googleSyncClientId;"
    )
    public static native String getGoogleSyncClientId();

    @JavaScriptBody(
            args = {}, body
            = "return googleSyncScope;"
    )
    public static native String getGoogleSyncScope();

    @JavaScriptBody(
            args = {}, body
            = "return googleSyncResponseType;"
    )
    public static native String getGoogleSyncResponseType();
    

    @JavaScriptBody(
            args = {"id","bean"}, body
            =  "if (!window.localStorage) return;\n" +
                     "window.localStorage.setItem(id,JSON.stringify(bean));"
    )
     public static native void setBean(String id,String bean);
     @JavaScriptBody(
            args = {"id"}, body
            =  "if (!window.localStorage) return;\n" +
             "\n return JSON.parse(window.localStorage.getItem(id));"
    )
    public static native String getBean(String id);
    
    @JavaScriptBody(
            args = {}, body
            = "return isProduction;"
    )
    public static native boolean isProduction();
    
     @JavaScriptBody(
            args = {"id"}, body
            =  "company=id;"
    )
    public static native void setCompany(String id);
     @JavaScriptBody(
            args = {"id"}, body
            =  "site=id;"
    )
    public static native void setSite(String id);
         @JavaScriptBody(
            args = {"id"}, body
            =  "layout=id;"
    )
    public static native void setLayout(String id);
      @JavaScriptBody(
            args = {}, body
            =  "return layout;"
    )
    public static native String getLayout();
     @JavaScriptBody(
            args = {}, body
            =  "return path;"
    )
    public static native String getPath();
     @JavaScriptBody(
            args = {"pathValue"}, body
            =  "path=pathValue;"
    )
    public static native String setPath(String pathValue);
     @JavaScriptBody(
            args = {}, body
            =  "return company;"
    )
    public static native String getCompany();
      @JavaScriptBody(
            args = {}, body
            =  "return companyJSON;"
    )
    public static native String getCompanyJSON();
     @JavaScriptBody(
            args = {}, body
            =  "return site;"
    )
    public static native String getSite();
    
         @JavaScriptBody(
            args = {}, body
            =  "return repoURL;"
    )
    public static native String getREPOURL();
    
     @JavaScriptBody(
            args = {}, body
            =  "return window.location.host;"
    )
    public static native String getHost();
            @JavaScriptBody(
            args = {}, body
            =  "return host;"
    )
    public static native String getDHost();
    @JavaScriptBody(
            args = {}, body
            =  "return window.location.search.split(\"=\")[1];"
    )
    public static native String getServiceURL();
    
    @JavaScriptBody(
            args = {"location"}, body
            = "window.location.href=location;"
    )
    public static native String redirect(String location);
    
    @JavaScriptBody(
            args = {}, body
            = "return platformCompany;"
    )
    public static native String getPlatformCompany();

    @JavaScriptBody(
            args = {}, body
            = "return platformSite;"
    )
    public static native String getPlatformSite();

    @JavaScriptBody(
            args = {}, body
            = "return blanklayout;"
    )
    public static native String getPlatformBlankLayout();
    
}
