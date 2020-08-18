bck2brwsr.register({
  'magic' : 'kaf\u010do'
}, function(exports) {
  var vm = {};
  function link(n, assign) {
    function replaceAll(s, o, n) {
      var pos = 0;
      for (;;) {
         var indx = s.indexOf(o, pos);
         if (indx === -1) {
           return s;
         }
         pos = indx + n.length;
         s = s.substring(0, indx) + n + s.substring(indx + o.length);
      }
    }
    return function() {
      var no_ = replaceAll(n, '_', '_1');
      var cls = replaceAll(no_, '/', '_');
      var dot = replaceAll(n, '/', '.');
      exports.loadClass(dot);
      assign(exports[cls]);
      return exports[cls](arguments);
    };
  };

  var invoker = {};
  function registerClass(vm, name, fn) {
    if (!vm[name]) vm[name] = fn;
    return vm[name];
  }
vm.java_lang_Object = link('java/lang/Object', function(f) { vm.java_lang_Object =  f; });
vm.java_lang_Class = link('java/lang/Class', function(f) { vm.java_lang_Class =  f; });
vm.java_lang_ArithmeticException = link('java/lang/ArithmeticException', function(f) { vm.java_lang_ArithmeticException =  f; });

function io_cloudoffice_platform_cockpit_document_DocumentComponent$1() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_document_DocumentComponent$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$view = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$1_val$view'] = v; return this['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$1_val$view']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_document_DocumentView_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$1_val$view'] = lcA1;
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.handle__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;
(refs_io_cloudoffice_platform_cockpit_api_Logger || (refs_io_cloudoffice_platform_cockpit_api_Logger = vm.io_cloudoffice_platform_cockpit_api_Logger(false)))['log__VLjava_lang_String_2']("Save Callback");
(refs_io_cloudoffice_platform_cockpit_document_DocumentComponent || (refs_io_cloudoffice_platform_cockpit_document_DocumentComponent = io_cloudoffice_platform_cockpit_document_DocumentComponent(false))).resetConfiguration__VLio_cloudoffice_platform_cockpit_document_DocumentView_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$1_val$view']);
(refs_io_cloudoffice_platform_cockpit_document_DocumentComponent || (refs_io_cloudoffice_platform_cockpit_document_DocumentComponent = io_cloudoffice_platform_cockpit_document_DocumentComponent(false))).closeConfigurationPanel__VLio_cloudoffice_platform_cockpit_document_DocumentView_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$1_val$view']);
return;

};
c['handle__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_document_DocumentComponent$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_document_DocumentComponent$1', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_CallBack(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_document_DocumentComponent$1fillInstOf });
    io_cloudoffice_platform_cockpit_document_DocumentComponent$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/document/DocumentComponent$1';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_CallBack(false).constructor.$class
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_Logger;
    var refs_io_cloudoffice_platform_cockpit_document_DocumentComponent;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$1_val$view'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_document_DocumentComponent$1 = io_cloudoffice_platform_cockpit_document_DocumentComponent$1;

vm.io_cloudoffice_platform_cockpit_api_CallBack = link('io/cloudoffice/platform/cockpit/api/CallBack', function(f) { vm.io_cloudoffice_platform_cockpit_api_CallBack =  f; });

function io_cloudoffice_platform_cockpit_document_DocumentComponent() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_document_DocumentComponent;
  if (!CLS.$class) {
    var pp = vm.io_cloudoffice_platform_cockpit_api_AbstractComponent(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = c.getInstance__Lio_cloudoffice_platform_cockpit_api_Component_2Ljava_lang_String_2 = function(lcA0) {
var stA0 = new io_cloudoffice_platform_cockpit_document_DocumentComponent;
c.constructor.cons__VLjava_lang_String_2.call(stA0, lcA0);
return stA0;

};
c['getInstance__Lio_cloudoffice_platform_cockpit_api_Component_2Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = CLS.cons__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;
(refs_io_cloudoffice_platform_cockpit_api_AbstractComponent || (refs_io_cloudoffice_platform_cockpit_api_AbstractComponent = vm.io_cloudoffice_platform_cockpit_api_AbstractComponent(false))).constructor['cons__VLjava_lang_String_2'].call(lcA0, lcA1);
return;

};
CLS['cons__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.bindEventListeners__V = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = "loginsuccess";var stA2 = new io_cloudoffice_platform_cockpit_document_DocumentComponent$LoginEventListener;
(refs_io_cloudoffice_platform_cockpit_document_DocumentComponent$LoginEventListener || (refs_io_cloudoffice_platform_cockpit_document_DocumentComponent$LoginEventListener = io_cloudoffice_platform_cockpit_document_DocumentComponent$LoginEventListener(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_document_DocumentComponent_2.call(stA2, lcA0);
invoker.attachListener__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_EventListener_2(stA0,stA1, stA2);
var stA0 = lcA0;var stA1 = "designermode";var stA2 = new io_cloudoffice_platform_cockpit_document_DocumentComponent$DesignModeListener;
(refs_io_cloudoffice_platform_cockpit_document_DocumentComponent$DesignModeListener || (refs_io_cloudoffice_platform_cockpit_document_DocumentComponent$DesignModeListener = io_cloudoffice_platform_cockpit_document_DocumentComponent$DesignModeListener(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_document_DocumentComponent_2Lio_cloudoffice_platform_cockpit_document_DocumentComponent$1_2.call(stA2, lcA0, null);
invoker.attachListener__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_EventListener_2(stA0,stA1, stA2);
var stA0 = lcA0;var stA1 = "enabledetailfullview";var stA2 = new io_cloudoffice_platform_cockpit_document_DocumentComponent$EnableFullViewListener;
(refs_io_cloudoffice_platform_cockpit_document_DocumentComponent$EnableFullViewListener || (refs_io_cloudoffice_platform_cockpit_document_DocumentComponent$EnableFullViewListener = io_cloudoffice_platform_cockpit_document_DocumentComponent$EnableFullViewListener(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_document_DocumentComponent_2.call(stA2, lcA0);
invoker.attachListener__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_EventListener_2(stA0,stA1, stA2);
var stA0 = lcA0;var stA1 = "enabledetailsplitview";var stA2 = new io_cloudoffice_platform_cockpit_document_DocumentComponent$EnableSplitViewListener;
(refs_io_cloudoffice_platform_cockpit_document_DocumentComponent$EnableSplitViewListener || (refs_io_cloudoffice_platform_cockpit_document_DocumentComponent$EnableSplitViewListener = io_cloudoffice_platform_cockpit_document_DocumentComponent$EnableSplitViewListener(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_document_DocumentComponent_2.call(stA2, lcA0);
invoker.attachListener__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_EventListener_2(stA0,stA1, stA2);
var stA0 = lcA0;var stA1 = "loaditemdetail";var stA2 = new io_cloudoffice_platform_cockpit_document_DocumentComponent$LoadItemDetailListener;
(refs_io_cloudoffice_platform_cockpit_document_DocumentComponent$LoadItemDetailListener || (refs_io_cloudoffice_platform_cockpit_document_DocumentComponent$LoadItemDetailListener = io_cloudoffice_platform_cockpit_document_DocumentComponent$LoadItemDetailListener(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_document_DocumentComponent_2.call(stA2, lcA0);
invoker.attachListener__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_EventListener_2(stA0,stA1, stA2);
var stA0 = lcA0;var stA1 = "invokefunction";var stA2 = new io_cloudoffice_platform_cockpit_document_DocumentComponent$FunctionInvokeListener;
(refs_io_cloudoffice_platform_cockpit_document_DocumentComponent$FunctionInvokeListener || (refs_io_cloudoffice_platform_cockpit_document_DocumentComponent$FunctionInvokeListener = io_cloudoffice_platform_cockpit_document_DocumentComponent$FunctionInvokeListener(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_document_DocumentComponent_2Lio_cloudoffice_platform_cockpit_document_DocumentComponent$1_2.call(stA2, lcA0, null);
invoker.attachListener__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_EventListener_2(stA0,stA1, stA2);
var stA0 = lcA0;var stA1 = "newiteminitcomponent";var stA2 = new io_cloudoffice_platform_cockpit_document_DocumentComponent$InitNewItemComponentListener;
(refs_io_cloudoffice_platform_cockpit_document_DocumentComponent$InitNewItemComponentListener || (refs_io_cloudoffice_platform_cockpit_document_DocumentComponent$InitNewItemComponentListener = io_cloudoffice_platform_cockpit_document_DocumentComponent$InitNewItemComponentListener(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_document_DocumentComponent_2.call(stA2, lcA0);
invoker.attachListener__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_EventListener_2(stA0,stA1, stA2);
return;

};
c['bindEventListeners__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.onError__VLio_cloudoffice_platform_cockpit_api_Error_2Lio_cloudoffice_platform_cockpit_api_Source_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__VLjava_lang_String_2'].call(stA0, "Not supported yet.");
{ var stA0 = stA0; throw stA0; }

};
c['onError__VLio_cloudoffice_platform_cockpit_api_Error_2Lio_cloudoffice_platform_cockpit_api_Source_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.bindViewNames__V = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.getName__Ljava_lang_String_2((refs_io_cloudoffice_platform_cockpit_document_DocumentView || (refs_io_cloudoffice_platform_cockpit_document_DocumentView = io_cloudoffice_platform_cockpit_document_DocumentView(false))).constructor.$class);
invoker.setDefaultViewName__VLjava_lang_String_2(stA0,stA1);
var stA0 = lcA0;var stA1 = invoker.getName__Ljava_lang_String_2((refs_io_cloudoffice_platform_cockpit_document_DocumentConfiguration || (refs_io_cloudoffice_platform_cockpit_document_DocumentConfiguration = io_cloudoffice_platform_cockpit_document_DocumentConfiguration(false))).constructor.$class);
invoker.setDefaultConfigViewName__VLjava_lang_String_2(stA0,stA1);
var stA0 = lcA0;var stA1 = "createview";var stA2 = invoker.getName__Ljava_lang_String_2((refs_io_cloudoffice_platform_cockpit_document_DocumentView || (refs_io_cloudoffice_platform_cockpit_document_DocumentView = io_cloudoffice_platform_cockpit_document_DocumentView(false))).constructor.$class);
invoker.addViewName__VLjava_lang_String_2Ljava_lang_String_2(stA0,stA1, stA2);
return;

};
c['bindViewNames__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setComponentName__V = function() {
  var  lcA0 = this;
c['_componentName'].call(lcA0, "document-component");
return;

};
c['setComponentName__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isBrowserIE__Z = function() {
var stI0 = (refs_io_cloudoffice_platform_cockpit_js_JSUIUtils || (refs_io_cloudoffice_platform_cockpit_js_JSUIUtils = vm.io_cloudoffice_platform_cockpit_js_JSUIUtils(false)))['isBrowserIE__Z']();
return stI0;

};
c['isBrowserIE__Z'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.openConfig__VLio_cloudoffice_platform_cockpit_document_DocumentView_2 = function(lcA0) {
lcA0.setDesignerMode__VZ(1);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.closeConfigurationPanel__VLio_cloudoffice_platform_cockpit_document_DocumentView_2 = function(lcA0) {
lcA0.setDesignerMode__VZ(0);
c.resetConfiguration__VLio_cloudoffice_platform_cockpit_document_DocumentView_2(lcA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.save__VLio_cloudoffice_platform_cockpit_document_DocumentView_2 = function(lcA0) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['_CONFIG']();var stA1 = "document";var stA2 = lcA0.getInstance__Ljava_lang_String_2();
var stA1 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['configPostEndpoint__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2'](stA1, stA2, "");
var stA2 = lcA0.toString__Ljava_lang_String_2();
var stA3 = new io_cloudoffice_platform_cockpit_document_DocumentComponent$1;
(refs_io_cloudoffice_platform_cockpit_document_DocumentComponent$1 || (refs_io_cloudoffice_platform_cockpit_document_DocumentComponent$1 = io_cloudoffice_platform_cockpit_document_DocumentComponent$1(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_document_DocumentView_2.call(stA3, lcA0);
invoker.post__VLjava_lang_String_2Ljava_lang_String_2Lio_cloudoffice_platform_cockpit_api_CallBack_2(stA0,stA1, stA2, stA3);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.resetConfiguration__VLio_cloudoffice_platform_cockpit_document_DocumentView_2 = function(lcA0) {
c.resetConfigurationModelFromJSON__VLio_cloudoffice_platform_cockpit_document_DocumentView_2(lcA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.resetConfigurationModelFromJSON__VLio_cloudoffice_platform_cockpit_document_DocumentView_2 = function(lcA0) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['_CONFIG']();var stA1 = "document";var stA2 = lcA0.getInstance__Ljava_lang_String_2();
var stA1 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['configFetchEndpoint__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2'](stA1, stA2);
var stA2 = null;var stA3 = new io_cloudoffice_platform_cockpit_document_DocumentComponent$2;
(refs_io_cloudoffice_platform_cockpit_document_DocumentComponent$2 || (refs_io_cloudoffice_platform_cockpit_document_DocumentComponent$2 = io_cloudoffice_platform_cockpit_document_DocumentComponent$2(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_document_DocumentView_2.call(stA3, lcA0);
invoker.fetch__VLjava_lang_String_2Ljava_util_Map_2Lio_cloudoffice_platform_cockpit_api_CallBack_2(stA0,stA1, stA2, stA3);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.prepareConfigurationModelFromJSON__VLio_cloudoffice_platform_cockpit_document_DocumentView_2Lio_cloudoffice_platform_cockpit_api_MapBuilder_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = lcA1.getConfiguration__Lio_cloudoffice_platform_cockpit_document_DocumentConfiguration_2();
var lcA3 = stA0;
var stA0 = invoker.getJsonObject__Lorg_json_JSONObject_2Ljava_lang_String_2(lcA2,"configuration");
var lcA4 = stA0;
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_Object_2'](lcA4);
if ((stI0) == 0) { gt = 48; break IF; }
var stA0 = lcA1;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA4,"layoutColumnId");
stA0.setLayoutColumnId__VLjava_lang_String_2(stA1);
var stA0 = lcA3;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA4,"layoutColumnId");
stA0.setLayoutColumnId__VLjava_lang_String_2(stA1);
c.setComponentDefinition__VLio_cloudoffice_platform_cockpit_document_DocumentView_2Lio_cloudoffice_platform_cockpit_api_MapBuilder_2(lcA1, lcA2);
    }
    X_48: for (;;) { IF: if (gt <= 48) {
return;

    }
}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.setComponentDefinition__VLio_cloudoffice_platform_cockpit_document_DocumentView_2Lio_cloudoffice_platform_cockpit_api_MapBuilder_2 = function(lcA0, lcA1) {
var stA0 = lcA0.getConfiguration__Lio_cloudoffice_platform_cockpit_document_DocumentConfiguration_2();
var lcA2 = stA0;
var stA0 = invoker.getJsonObject__Lorg_json_JSONObject_2Ljava_lang_String_2(lcA1,"configuration");
var lcA3 = stA0;
var stA0 = lcA2;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA3,"componentWidth");
stA0.setComponentWidth__VLjava_lang_String_2(stA1);
var stA0 = invoker.getJSONObject__Lorg_json_JSONObject_2Ljava_lang_String_2(lcA3,"listComponentDefinition");
var lcA4 = stA0;
var stA0 = lcA2.getListComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA4,"component");
invoker.setComponent__VLjava_lang_String_2(stA0,stA1);
var stA0 = lcA2.getListComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA4,"instanceId");
invoker.setInstanceId__VLjava_lang_String_2(stA0,stA1);
var stA0 = invoker.getJSONObject__Lorg_json_JSONObject_2Ljava_lang_String_2(lcA3,"actionMenuComponentDefinition");
var lcA5 = stA0;
var stA0 = lcA2.getActionMenuComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA5,"component");
invoker.setComponent__VLjava_lang_String_2(stA0,stA1);
var stA0 = lcA2.getActionMenuComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA5,"instanceId");
invoker.setInstanceId__VLjava_lang_String_2(stA0,stA1);
var stA0 = invoker.getJSONObject__Lorg_json_JSONObject_2Ljava_lang_String_2(lcA3,"searchBoxComponentDefinition");
var lcA6 = stA0;
var stA0 = lcA2.getSearchBoxComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA6,"component");
invoker.setComponent__VLjava_lang_String_2(stA0,stA1);
var stA0 = lcA2.getSearchBoxComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA6,"instanceId");
invoker.setInstanceId__VLjava_lang_String_2(stA0,stA1);
return;

};
    m.access = 10;
    m.cls = CLS;
    m = c.enableFullView__VLio_cloudoffice_platform_cockpit_document_DocumentView_2 = function(lcA0) {
lcA0.setVisible__VZ(1);
lcA0.setFullViewEnabled__VZ(1);
c.hideList__VLio_cloudoffice_platform_cockpit_document_DocumentView_2(lcA0);
var lcA1 = "100";
var stA0 = lcA0.getLayoutColumnId__Ljava_lang_String_2();
var lcA2 = stA0;
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"LayoutManager.toggleListDetailView(\"");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,lcA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"\",\"");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,lcA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"\");");
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
(refs_io_cloudoffice_platform_cockpit_js_VIEW || (refs_io_cloudoffice_platform_cockpit_js_VIEW = vm.io_cloudoffice_platform_cockpit_js_VIEW(false)))['invokeJSFunction__VLjava_lang_String_2'](stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.enableSplitView__VLio_cloudoffice_platform_cockpit_document_DocumentView_2 = function(lcA0) {
lcA0.setVisible__VZ(1);
lcA0.setFullViewEnabled__VZ(0);
c.showList__VLio_cloudoffice_platform_cockpit_document_DocumentView_2(lcA0);
var stA0 = lcA0.getLayoutColumnId__Ljava_lang_String_2();
var lcA1 = stA0;
var stA0 = lcA0.getConfiguration__Lio_cloudoffice_platform_cockpit_document_DocumentConfiguration_2();
var stA0 = stA0.getComponentWidth__Ljava_lang_String_2();
var lcA2 = stA0;
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"LayoutManager.toggleListDetailView(\"");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,lcA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"\",\"");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,lcA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"\");");
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
(refs_io_cloudoffice_platform_cockpit_js_VIEW || (refs_io_cloudoffice_platform_cockpit_js_VIEW = vm.io_cloudoffice_platform_cockpit_js_VIEW(false)))['invokeJSFunction__VLjava_lang_String_2'](stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.backToList__VLio_cloudoffice_platform_cockpit_document_DocumentView_2 = function(lcA0) {
c.enableFullView__VLio_cloudoffice_platform_cockpit_document_DocumentView_2(lcA0);
lcA0.setVisible__VZ(0);
c.clearFilter__VLio_cloudoffice_platform_cockpit_document_DocumentView_2(lcA0);
c.showList__VLio_cloudoffice_platform_cockpit_document_DocumentView_2(lcA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.hideList__VLio_cloudoffice_platform_cockpit_document_DocumentView_2 = function(lcA0) {
var stA0 = lcA0.getConfiguration__Lio_cloudoffice_platform_cockpit_document_DocumentConfiguration_2();
var stA0 = stA0.getListComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA0 = invoker.getComponent__Ljava_lang_String_2(stA0);
var lcA1 = stA0;
var stA0 = lcA0.getConfiguration__Lio_cloudoffice_platform_cockpit_document_DocumentConfiguration_2();
var stA0 = stA0.getListComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA0 = invoker.getInstanceId__Ljava_lang_String_2(stA0);
var lcA2 = stA0;
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_Event;
(refs_io_cloudoffice_platform_cockpit_api_Event || (refs_io_cloudoffice_platform_cockpit_api_Event = vm.io_cloudoffice_platform_cockpit_api_Event(false))).constructor['cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2'].call(stA0, "invokefunction", "invokefunction", "hideList");
var lcA3 = stA0;
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_Components || (refs_io_cloudoffice_platform_cockpit_api_Components = vm.io_cloudoffice_platform_cockpit_api_Components(false)))['get__Lio_cloudoffice_platform_cockpit_api_Component_2Ljava_lang_String_2Ljava_lang_String_2'](lcA1, lcA2);
invoker.listen__VLio_cloudoffice_platform_cockpit_api_Signal_2(stA0,lcA3);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.showList__VLio_cloudoffice_platform_cockpit_document_DocumentView_2 = function(lcA0) {
var stA0 = lcA0.getLayoutColumnId__Ljava_lang_String_2();
var lcA1 = stA0;
var stA0 = lcA0.getConfiguration__Lio_cloudoffice_platform_cockpit_document_DocumentConfiguration_2();
var stA0 = stA0.getListComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA0 = invoker.getComponent__Ljava_lang_String_2(stA0);
var lcA2 = stA0;
var stA0 = lcA0.getConfiguration__Lio_cloudoffice_platform_cockpit_document_DocumentConfiguration_2();
var stA0 = stA0.getListComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA0 = invoker.getInstanceId__Ljava_lang_String_2(stA0);
var lcA3 = stA0;
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_Event;
(refs_io_cloudoffice_platform_cockpit_api_Event || (refs_io_cloudoffice_platform_cockpit_api_Event = vm.io_cloudoffice_platform_cockpit_api_Event(false))).constructor['cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2'].call(stA0, "invokefunction", "invokefunction", "showList");
var lcA4 = stA0;
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_Components || (refs_io_cloudoffice_platform_cockpit_api_Components = vm.io_cloudoffice_platform_cockpit_api_Components(false)))['get__Lio_cloudoffice_platform_cockpit_api_Component_2Ljava_lang_String_2Ljava_lang_String_2'](lcA2, lcA3);
invoker.listen__VLio_cloudoffice_platform_cockpit_api_Signal_2(stA0,lcA4);
var lcA5 = "0";
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"LayoutManager.toggleListDetailView(\"");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,lcA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"\",\"");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,lcA5);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"\");");
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
(refs_io_cloudoffice_platform_cockpit_js_VIEW || (refs_io_cloudoffice_platform_cockpit_js_VIEW = vm.io_cloudoffice_platform_cockpit_js_VIEW(false)))['invokeJSFunction__VLjava_lang_String_2'](stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.clearFilter__VLio_cloudoffice_platform_cockpit_document_DocumentView_2 = function(lcA0) {
var stA0 = lcA0.getConfiguration__Lio_cloudoffice_platform_cockpit_document_DocumentConfiguration_2();
var stA0 = stA0.getSearchBoxComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA0 = invoker.getComponent__Ljava_lang_String_2(stA0);
var lcA1 = stA0;
var stA0 = lcA0.getConfiguration__Lio_cloudoffice_platform_cockpit_document_DocumentConfiguration_2();
var stA0 = stA0.getSearchBoxComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA0 = invoker.getInstanceId__Ljava_lang_String_2(stA0);
var lcA2 = stA0;
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_Event;
(refs_io_cloudoffice_platform_cockpit_api_Event || (refs_io_cloudoffice_platform_cockpit_api_Event = vm.io_cloudoffice_platform_cockpit_api_Event(false))).constructor['cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2'].call(stA0, "invokefunction", "invokefunction", "clearFilters");
var lcA3 = stA0;
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_Components || (refs_io_cloudoffice_platform_cockpit_api_Components = vm.io_cloudoffice_platform_cockpit_api_Components(false)))['get__Lio_cloudoffice_platform_cockpit_api_Component_2Ljava_lang_String_2Ljava_lang_String_2'](lcA1, lcA2);
invoker.listen__VLio_cloudoffice_platform_cockpit_api_Signal_2(stA0,lcA3);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.addFilter__VLio_cloudoffice_platform_cockpit_document_DocumentView_2Lio_cloudoffice_platform_cockpit_api_MapBuilder_2 = function(lcA0, lcA1) {
var stA0 = lcA0.getConfiguration__Lio_cloudoffice_platform_cockpit_document_DocumentConfiguration_2();
var stA0 = stA0.getSearchBoxComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA0 = invoker.getComponent__Ljava_lang_String_2(stA0);
var lcA2 = stA0;
var stA0 = lcA0.getConfiguration__Lio_cloudoffice_platform_cockpit_document_DocumentConfiguration_2();
var stA0 = stA0.getSearchBoxComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA0 = invoker.getInstanceId__Ljava_lang_String_2(stA0);
var lcA3 = stA0;
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_Event;
(refs_io_cloudoffice_platform_cockpit_api_Event || (refs_io_cloudoffice_platform_cockpit_api_Event = vm.io_cloudoffice_platform_cockpit_api_Event(false))).constructor['cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2'].call(stA0, "addfilter", "addfilter", lcA1);
var lcA4 = stA0;
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_Components || (refs_io_cloudoffice_platform_cockpit_api_Components = vm.io_cloudoffice_platform_cockpit_api_Components(false)))['get__Lio_cloudoffice_platform_cockpit_api_Component_2Ljava_lang_String_2Ljava_lang_String_2'](lcA2, lcA3);
invoker.listen__VLio_cloudoffice_platform_cockpit_api_Signal_2(stA0,lcA4);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.enableEditMode__VLio_cloudoffice_platform_cockpit_document_DocumentView_2 = function(lcA0) {
c.enableFullView__VLio_cloudoffice_platform_cockpit_document_DocumentView_2(lcA0);
lcA0.setViewMode__VLjava_lang_String_2("createMode");
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.enableCreateMode__VLio_cloudoffice_platform_cockpit_document_DocumentView_2 = function(lcA0) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['builder__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2']();
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2(stA0,"itemId", "0");
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2(stA0,"itemName", "Untitle");
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2(stA0,"itemType", "FILE");
var lcA1 = stA0;
c.addFilter__VLio_cloudoffice_platform_cockpit_document_DocumentView_2Lio_cloudoffice_platform_cockpit_api_MapBuilder_2(lcA0, lcA1);
c.clearDocumentData__VLio_cloudoffice_platform_cockpit_document_DocumentView_2(lcA0);
c.enableFullView__VLio_cloudoffice_platform_cockpit_document_DocumentView_2(lcA0);
lcA0.setViewMode__VLjava_lang_String_2("createMode");
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.checkRequiredData__ZLio_cloudoffice_platform_cockpit_document_DocumentView_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = lcA0.getItemId__Ljava_lang_String_2();
var stI0 = invoker.equals__ZLjava_lang_Object_2(stA0,"0");
var lcI1 = stI0;
if ((lcI1) == 0) { gt = 37; break IF; }
var stA0 = lcA0.getFileData__Lio_cloudoffice_platform_cockpit_document_FileView_2();
var stA0 = stA0.getFileList__Ljava_util_List_2();
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isEmpty__ZLjava_util_Collection_2'](stA0);
if ((stI0) == 0) { gt = 37; break IF; }
(refs_io_cloudoffice_platform_cockpit_js_JSUIUtils || (refs_io_cloudoffice_platform_cockpit_js_JSUIUtils = vm.io_cloudoffice_platform_cockpit_js_JSUIUtils(false)))['alert__VLjava_lang_String_2']("Select a File");
{ gt = 92; break IF; }
    }
    X_37: for (;;) { IF: if (gt <= 37) {

if ((lcI1) == 0) { gt = 67; break IF; }
var stA0 = lcA0.getFileData__Lio_cloudoffice_platform_cockpit_document_FileView_2();
var stA0 = stA0.getFileList__Ljava_util_List_2();
var stI0 = invoker.size__I(stA0);
if ((stI0) != (1)) { gt = 67; break IF; }
var stA0 = lcA0.getTitle__Ljava_lang_String_2();
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isEmpty__ZLjava_lang_String_2'](stA0);
if ((stI0) != 0) { gt = 81; break IF; }
    }
    X_67: for (;;) { IF: if (gt <= 67) {

if ((lcI1) != 0) { gt = 90; break IF; }
var stA0 = lcA0.getTitle__Ljava_lang_String_2();
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isEmpty__ZLjava_lang_String_2'](stA0);
if ((stI0) == 0) { gt = 90; break IF; }
    }
    X_81: for (;;) { IF: if (gt <= 81) {

(refs_io_cloudoffice_platform_cockpit_js_JSUIUtils || (refs_io_cloudoffice_platform_cockpit_js_JSUIUtils = vm.io_cloudoffice_platform_cockpit_js_JSUIUtils(false)))['alert__VLjava_lang_String_2']("Enter File Title");
{ gt = 92; break IF; }
    }
    X_90: for (;;) { IF: if (gt <= 90) {

return 1;
    }
    X_92: for (;;) { IF: if (gt <= 92) {

return 0;

    }
}}}}}}
};
c['checkRequiredData__ZLio_cloudoffice_platform_cockpit_document_DocumentView_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.createDocument__VLio_cloudoffice_platform_cockpit_document_DocumentView_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = c.checkRequiredData__ZLio_cloudoffice_platform_cockpit_document_DocumentView_2(lcA0);
if ((stI0) == 0) { gt = 41; break IF; }
var stA0 = lcA0.getLoader__Lio_cloudoffice_platform_cockpit_api_HelperItemView_2();
invoker.setActive__VZ(stA0,1);
var stA0 = lcA0.getItemId__Ljava_lang_String_2();
var stI0 = invoker.equals__ZLjava_lang_Object_2(stA0,"0");
var lcI1 = stI0;
if ((lcI1) == 0) { gt = 37; break IF; }
c.saveFile__VLio_cloudoffice_platform_cockpit_document_DocumentView_2(lcA0);
{ gt = 41; break IF; }
    }
    X_37: for (;;) { IF: if (gt <= 37) {

c.updateFile__VLio_cloudoffice_platform_cockpit_document_DocumentView_2(lcA0);
    }
    X_41: for (;;) { IF: if (gt <= 41) {
return;

    }
}}}
};
    m.access = 8;
    m.cls = CLS;
    m = c.saveFile__VLio_cloudoffice_platform_cockpit_document_DocumentView_2 = function(lcA0) {
var stA0 = new io_cloudoffice_platform_cockpit_document_DocumentComponent$4;
(refs_io_cloudoffice_platform_cockpit_document_DocumentComponent$4 || (refs_io_cloudoffice_platform_cockpit_document_DocumentComponent$4 = io_cloudoffice_platform_cockpit_document_DocumentComponent$4(false))).constructor.cons__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_document_DocumentView_2Lio_cloudoffice_platform_cockpit_document_DocumentView_2.call(stA0, "\"/VirtualItem-portlet.virtualdocumentitem/createDocument\"", lcA0, lcA0);
var stA1 = new io_cloudoffice_platform_cockpit_document_DocumentComponent$3;
(refs_io_cloudoffice_platform_cockpit_document_DocumentComponent$3 || (refs_io_cloudoffice_platform_cockpit_document_DocumentComponent$3 = io_cloudoffice_platform_cockpit_document_DocumentComponent$3(false))).constructor.cons__V.call(stA1);
invoker.call__VLio_cloudoffice_platform_cockpit_api_ServerCallback_2(stA0,stA1);
return;

};
c['saveFile__VLio_cloudoffice_platform_cockpit_document_DocumentView_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.updateFile__VLio_cloudoffice_platform_cockpit_document_DocumentView_2 = function(lcA0) {
var stA0 = new io_cloudoffice_platform_cockpit_document_DocumentComponent$6;
(refs_io_cloudoffice_platform_cockpit_document_DocumentComponent$6 || (refs_io_cloudoffice_platform_cockpit_document_DocumentComponent$6 = io_cloudoffice_platform_cockpit_document_DocumentComponent$6(false))).constructor.cons__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_document_DocumentView_2Lio_cloudoffice_platform_cockpit_document_DocumentView_2.call(stA0, "\"/VirtualItem-portlet.virtualdocumentitem/updateDocument\"", lcA0, lcA0);
var stA1 = new io_cloudoffice_platform_cockpit_document_DocumentComponent$5;
(refs_io_cloudoffice_platform_cockpit_document_DocumentComponent$5 || (refs_io_cloudoffice_platform_cockpit_document_DocumentComponent$5 = io_cloudoffice_platform_cockpit_document_DocumentComponent$5(false))).constructor.cons__V.call(stA1);
invoker.call__VLio_cloudoffice_platform_cockpit_api_ServerCallback_2(stA0,stA1);
return;

};
c['updateFile__VLio_cloudoffice_platform_cockpit_document_DocumentView_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.reloadSelectedDocument__VLio_cloudoffice_platform_cockpit_document_DocumentView_2 = function(lcA0) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['builder__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2']();
var stA1 = "itemId";var stA2 = lcA0.getItemId__Ljava_lang_String_2();
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2(stA0,stA1, stA2);
var stA1 = "itemName";var stA2 = lcA0.getItemName__Ljava_lang_String_2();
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2(stA0,stA1, stA2);
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2(stA0,"itemType", "FILE");
var lcA1 = stA0;
c.addFilter__VLio_cloudoffice_platform_cockpit_document_DocumentView_2Lio_cloudoffice_platform_cockpit_api_MapBuilder_2(lcA0, lcA1);
var stA0 = lcA0;var stA1 = invoker.toJSON__Ljava_lang_String_2(lcA1);
c.processDocumentDetail__VLio_cloudoffice_platform_cockpit_document_DocumentView_2Ljava_lang_String_2(stA0, stA1);
return;

};
c['reloadSelectedDocument__VLio_cloudoffice_platform_cockpit_document_DocumentView_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.saveRelatedItem__VLio_cloudoffice_platform_cockpit_document_DocumentView_2Ljava_util_List_2 = function(lcA0, lcA1) {
var stA0 = new io_cloudoffice_platform_cockpit_document_DocumentComponent$8;
(refs_io_cloudoffice_platform_cockpit_document_DocumentComponent$8 || (refs_io_cloudoffice_platform_cockpit_document_DocumentComponent$8 = io_cloudoffice_platform_cockpit_document_DocumentComponent$8(false))).constructor.cons__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_document_DocumentView_2Ljava_util_List_2.call(stA0, "\"/VirtualItem-portlet.searchitem/batchSaveRelatedItems\"", lcA0, lcA1);
var stA1 = new io_cloudoffice_platform_cockpit_document_DocumentComponent$7;
(refs_io_cloudoffice_platform_cockpit_document_DocumentComponent$7 || (refs_io_cloudoffice_platform_cockpit_document_DocumentComponent$7 = io_cloudoffice_platform_cockpit_document_DocumentComponent$7(false))).constructor.cons__V.call(stA1);
invoker.call__VLio_cloudoffice_platform_cockpit_api_ServerCallback_2(stA0,stA1);
return;

};
c['saveRelatedItem__VLio_cloudoffice_platform_cockpit_document_DocumentView_2Ljava_util_List_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.showActionMenu__VLio_cloudoffice_platform_cockpit_document_DocumentView_2 = function(lcA0) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['builder__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2']();
var stA1 = "itemId";var stA2 = lcA0.getItemId__Ljava_lang_String_2();
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2(stA0,stA1, stA2);
var stA1 = "itemName";var stA2 = lcA0.getItemName__Ljava_lang_String_2();
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2(stA0,stA1, stA2);
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2(stA0,"itemType", "FILE");
var stA1 = "maximumPermission";var stA2 = c.getMaximumPermission__Ljava_lang_String_2Lio_cloudoffice_platform_cockpit_document_DocumentView_2(lcA0);
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2(stA0,stA1, stA2);
var lcA1 = stA0;
var stA0 = lcA0.getConfiguration__Lio_cloudoffice_platform_cockpit_document_DocumentConfiguration_2();
var stA0 = stA0.getActionMenuComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA0 = invoker.getComponent__Ljava_lang_String_2(stA0);
var lcA2 = stA0;
var stA0 = lcA0.getConfiguration__Lio_cloudoffice_platform_cockpit_document_DocumentConfiguration_2();
var stA0 = stA0.getActionMenuComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA0 = invoker.getInstanceId__Ljava_lang_String_2(stA0);
var lcA3 = stA0;
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_Event;
(refs_io_cloudoffice_platform_cockpit_api_Event || (refs_io_cloudoffice_platform_cockpit_api_Event = vm.io_cloudoffice_platform_cockpit_api_Event(false))).constructor['cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2'].call(stA0, "toogleactionmenu", "toogleactionmenu", lcA1);
var lcA4 = stA0;
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_Components || (refs_io_cloudoffice_platform_cockpit_api_Components = vm.io_cloudoffice_platform_cockpit_api_Components(false)))['get__Lio_cloudoffice_platform_cockpit_api_Component_2Ljava_lang_String_2Ljava_lang_String_2'](lcA2, lcA3);
invoker.listen__VLio_cloudoffice_platform_cockpit_api_Signal_2(stA0,lcA4);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.getMaximumPermission__Ljava_lang_String_2Lio_cloudoffice_platform_cockpit_document_DocumentView_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = lcA0.isHasOwnerPermission__Z();
if ((stI0) == 0) { gt = 11; break IF; }
return "Owner";
    }
    X_11: for (;;) { IF: if (gt <= 11) {

var stI0 = lcA0.isHasAdminPermission__Z();
if ((stI0) == 0) { gt = 22; break IF; }
return "Admin";
    }
    X_22: for (;;) { IF: if (gt <= 22) {

var stI0 = lcA0.isHasWritePermission__Z();
if ((stI0) == 0) { gt = 33; break IF; }
return "Write";
    }
    X_33: for (;;) { IF: if (gt <= 33) {

return "Read";

    }
}}}}
};
    m.access = 8;
    m.cls = CLS;
    m = c.clearDocumentData__VLio_cloudoffice_platform_cockpit_document_DocumentView_2 = function(lcA0) {
lcA0.setDataURL__VLjava_lang_String_2("");
lcA0.setViewerWidth__VLjava_lang_String_2("");
lcA0.setViewerHeight__VLjava_lang_String_2("");
lcA0.setFileTypeIcon__VLjava_lang_String_2("");
lcA0.setFileTypeIconColor__VLjava_lang_String_2("");
lcA0.setTitle__VLjava_lang_String_2("");
lcA0.setItemId__VLjava_lang_String_2("0");
lcA0.setItemName__VLjava_lang_String_2("");
lcA0.setFileType__VLjava_lang_String_2("");
lcA0.setFileSize__VLjava_lang_String_2("");
lcA0.setVersion__VLjava_lang_String_2("");
lcA0.setTitle__VLjava_lang_String_2("");
var stA0 = lcA0.getRelatedItemList__Ljava_util_List_2();
invoker.clear__V(stA0);
var stA0 = lcA0.getSharedItemList__Ljava_util_List_2();
invoker.clear__V(stA0);
lcA0.setCreatedBy__VLjava_lang_String_2("");
lcA0.setCreatedDate__VLjava_lang_String_2("");
lcA0.setLastModifiedBy__VLjava_lang_String_2("");
lcA0.setLastModifiedDate__VLjava_lang_String_2("");
var stA0 = lcA0.getFileData__Lio_cloudoffice_platform_cockpit_document_FileView_2();
stA0.setFileContent__VLjava_lang_String_2("");
var stA0 = lcA0.getFileData__Lio_cloudoffice_platform_cockpit_document_FileView_2();
stA0.setFileName__VLjava_lang_String_2("");
var stA0 = lcA0.getFileData__Lio_cloudoffice_platform_cockpit_document_FileView_2();
stA0.setFileSize__VLjava_lang_String_2("");
var stA0 = lcA0.getFileData__Lio_cloudoffice_platform_cockpit_document_FileView_2();
stA0.setItemId__VLjava_lang_String_2("");
var stA0 = lcA0.getFileData__Lio_cloudoffice_platform_cockpit_document_FileView_2();
stA0.setItemType__VLjava_lang_String_2("");
var stA0 = lcA0.getFileData__Lio_cloudoffice_platform_cockpit_document_FileView_2();
stA0.setMimeType__VLjava_lang_String_2("");
var stA0 = lcA0.getFileData__Lio_cloudoffice_platform_cockpit_document_FileView_2();
var stA0 = stA0.getFileList__Ljava_util_List_2();
invoker.clear__V(stA0);
var stA0 = lcA0.getFileData__Lio_cloudoffice_platform_cockpit_document_FileView_2();
var stA0 = stA0.getFilesName__Ljava_util_List_2();
invoker.clear__V(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.setViewType__VLio_cloudoffice_platform_cockpit_document_DocumentView_2Lio_cloudoffice_platform_cockpit_api_MapBuilder_2 = function(lcA0, lcA1) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA1,"viewType");
var lcA2 = stA0;
var stI0 = invoker.getBoolean__ZLjava_lang_String_2(lcA1,"isSplitView");
var lcI3 = stI0;
if ((lcI3) == 0) { gt = 27; break IF; }
c.enableSplitView__VLio_cloudoffice_platform_cockpit_document_DocumentView_2(lcA0);
{ gt = 31; break IF; }
    }
    X_27: for (;;) { IF: if (gt <= 27) {

c.enableFullView__VLio_cloudoffice_platform_cockpit_document_DocumentView_2(lcA0);
    }
    X_31: for (;;) { IF: if (gt <= 31) {

var stA0 = lcA0;var stI1 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](lcA2);
if ((stI1) == 0) { gt = 43; break IF; }
var stA1 = lcA2;{ gt = 46; break IF; }
    }
    X_43: for (;;) { IF: if (gt <= 43) {

var stA1 = "editMode";    }
    X_46: for (;;) { IF: if (gt <= 46) {
stA0.setViewMode__VLjava_lang_String_2(stA1);
return;

    }
}}}}}
};
c['setViewType__VLio_cloudoffice_platform_cockpit_document_DocumentView_2Lio_cloudoffice_platform_cockpit_api_MapBuilder_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.processDocumentDetail__VLio_cloudoffice_platform_cockpit_document_DocumentView_2Ljava_lang_String_2 = function(lcA0, lcA1) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['query__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2'](lcA1);
var lcA2 = stA0;
var stA0 = lcA0.getLoader__Lio_cloudoffice_platform_cockpit_api_HelperItemView_2();
invoker.setActive__VZ(stA0,1);
c.clearDocumentData__VLio_cloudoffice_platform_cockpit_document_DocumentView_2(lcA0);
c.setViewType__VLio_cloudoffice_platform_cockpit_document_DocumentView_2Lio_cloudoffice_platform_cockpit_api_MapBuilder_2(lcA0, lcA2);
var stA0 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA2,"itemId");
var lcA3 = stA0;
var stA0 = new io_cloudoffice_platform_cockpit_document_DocumentComponent$10;
(refs_io_cloudoffice_platform_cockpit_document_DocumentComponent$10 || (refs_io_cloudoffice_platform_cockpit_document_DocumentComponent$10 = io_cloudoffice_platform_cockpit_document_DocumentComponent$10(false))).constructor.cons__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_document_DocumentView_2Ljava_lang_String_2.call(stA0, "\"/VirtualItem-portlet.virtualdocumentitem/getDocument\"", lcA0, lcA3);
var stA1 = new io_cloudoffice_platform_cockpit_document_DocumentComponent$9;
(refs_io_cloudoffice_platform_cockpit_document_DocumentComponent$9 || (refs_io_cloudoffice_platform_cockpit_document_DocumentComponent$9 = io_cloudoffice_platform_cockpit_document_DocumentComponent$9(false))).constructor.cons__VLjava_lang_String_2.call(stA1, lcA3);
invoker.call__VLio_cloudoffice_platform_cockpit_api_ServerCallback_2(stA0,stA1);
return;

};
c['processDocumentDetail__VLio_cloudoffice_platform_cockpit_document_DocumentView_2Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.processDetailData__VLio_cloudoffice_platform_cockpit_document_DocumentView_2Lio_cloudoffice_platform_cockpit_api_MapBuilder_2 = function(lcA0, lcA1) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA1,"virtualDocumentItemId");
var lcA2 = stA0;
var stA0 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA1,"documentId");
var lcA3 = stA0;
var stA0 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA1,"title");
var lcA4 = stA0;
var stA0 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA1,"fileName");
var lcA5 = stA0;
var stA0 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA1,"fileType");
var lcA6 = stA0;
var stA0 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA1,"fileSize");
var lcA7 = stA0;
var stA0 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA1,"formats");
var lcA8 = stA0;
var stA0 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA1,"fileContent");
var lcA9 = stA0;
var stA0 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA1,"version");
var lcA10 = stA0;
var stA0 = invoker.getList__Ljava_util_List_2Ljava_lang_String_2(lcA1,"versions");
var lcA11 = stA0;
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"data:");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,lcA6);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,";base64,");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,lcA9);
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
var lcA12 = stA0;
lcA0.setItemId__VLjava_lang_String_2(lcA2);
lcA0.setItemName__VLjava_lang_String_2(lcA4);
lcA0.setTitle__VLjava_lang_String_2(lcA4);
lcA0.setVersion__VLjava_lang_String_2(lcA10);
lcA0.setDataURL__VLjava_lang_String_2(lcA12);
lcA0.setFileName__VLjava_lang_String_2(lcA5);
lcA0.setFileType__VLjava_lang_String_2(lcA6);
lcA0.setFileSize__VLjava_lang_String_2(lcA7);
var stA0 = lcA0;var stA1 = (refs_io_cloudoffice_platform_cockpit_api_IconModel || (refs_io_cloudoffice_platform_cockpit_api_IconModel = vm.io_cloudoffice_platform_cockpit_api_IconModel(false)))['getFileTypeIconClass__Ljava_lang_String_2Ljava_lang_String_2'](lcA6);
stA0.setFileTypeIcon__VLjava_lang_String_2(stA1);
var stA0 = lcA0;var stA1 = (refs_io_cloudoffice_platform_cockpit_api_IconModel || (refs_io_cloudoffice_platform_cockpit_api_IconModel = vm.io_cloudoffice_platform_cockpit_api_IconModel(false)))['getFileTypeIconColor__Ljava_lang_String_2Ljava_lang_String_2'](lcA6);
stA0.setFileTypeIconColor__VLjava_lang_String_2(stA1);
var stA0 = lcA0;var stI1 = invoker.getBoolean__ZLjava_lang_String_2(lcA1,"hasOwnerPermission");
stA0.setHasOwnerPermission__VZ(stI1);
var stA0 = lcA0;var stI1 = invoker.getBoolean__ZLjava_lang_String_2(lcA1,"hasAdminPermission");
stA0.setHasAdminPermission__VZ(stI1);
var stA0 = lcA0;var stI1 = invoker.getBoolean__ZLjava_lang_String_2(lcA1,"hasWritePermission");
stA0.setHasWritePermission__VZ(stI1);
var stA0 = lcA0;var stI1 = invoker.getBoolean__ZLjava_lang_String_2(lcA1,"hasReadPermission");
stA0.setHasReadPermission__VZ(stI1);
var stI0 = invoker.contains__ZLjava_lang_CharSequence_2(lcA6,"image");
if ((stI0) == 0) { gt = 257; break IF; }
lcA0.setIsImage__VZ(1);
lcA0.setViewerWidth__VLjava_lang_String_2("100%");
{ gt = 293; break IF; }
    }
    X_257: for (;;) { IF: if (gt <= 257) {

lcA0.setIsImage__VZ(0);
lcA0.setViewerWidth__VLjava_lang_String_2("100%");
var stI0 = lcA0.isFullViewEnabled__Z();
if ((stI0) == 0) { gt = 286; break IF; }
lcA0.setViewerHeight__VLjava_lang_String_2("88vh");
{ gt = 293; break IF; }
    }
    X_286: for (;;) { IF: if (gt <= 286) {

lcA0.setViewerHeight__VLjava_lang_String_2("40vh");
    }
    X_293: for (;;) { IF: if (gt <= 293) {

var stI0 = invoker.getBoolean__ZLjava_lang_String_2(lcA1,"hasOwnerPermission");
if ((stI0) == 0) { gt = 310; break IF; }
lcA0.setCreatedBy__VLjava_lang_String_2("me");
    }
    X_310: for (;;) { IF: if (gt <= 310) {
return;

    }
}}}}}
};
c['processDetailData__VLio_cloudoffice_platform_cockpit_document_DocumentView_2Lio_cloudoffice_platform_cockpit_api_MapBuilder_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.processTagShareRelate__VLio_cloudoffice_platform_cockpit_document_DocumentView_2Lio_cloudoffice_platform_cockpit_api_MapBuilder_2 = function(lcA0, lcA1) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = lcA0.getRelatedItemList__Ljava_util_List_2();
invoker.clear__V(stA0);
var stA0 = lcA0.getSharedItemList__Ljava_util_List_2();
invoker.clear__V(stA0);
var stA0 = invoker.getList__Ljava_util_List_2Ljava_lang_String_2(lcA1,"relatedItemName");
var lcA2 = stA0;
var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA2);
var lcA3 = stA0;
    }
    X_33: for (;;) { IF: if (gt <= 33) {

var stI0 = invoker.hasNext__Z(lcA3);
if ((stI0) == 0) { gt = 156; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA3);
if (stA0 !== null && !stA0['$instOf_java_util_Map']) vm.java_lang_Class(false).castEx(stA0, 'java.util.Map');
var lcA4 = stA0;
var stA0 = invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2(lcA4,"itemType");
if (stA0 !== null && !stA0['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA0, 'java.lang.String');
var lcA5 = stA0;
var stI0 = invoker.equalsIgnoreCase__ZLjava_lang_String_2(lcA5,"GROUP");
if ((stI0) != 0) { gt = 153; break IF; }
var stA0 = new io_cloudoffice_platform_cockpit_document_Item;
(refs_io_cloudoffice_platform_cockpit_document_Item || (refs_io_cloudoffice_platform_cockpit_document_Item = io_cloudoffice_platform_cockpit_document_Item(false))).constructor.cons__V.call(stA0);
var lcA6 = stA0;
var stA0 = lcA6;var stA1 = invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2(lcA4,"itemId");
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setItemId__VLjava_lang_String_2(stA1);
var stA0 = lcA6;var stA1 = invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2(lcA4,"itemName");
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setItemName__VLjava_lang_String_2(stA1);
lcA6.setItemType__VLjava_lang_String_2(lcA5);
var stA0 = lcA6;var stA1 = (refs_io_cloudoffice_platform_cockpit_api_QueryMetaModel || (refs_io_cloudoffice_platform_cockpit_api_QueryMetaModel = vm.io_cloudoffice_platform_cockpit_api_QueryMetaModel(false)))['getItemTypeIconCss__Ljava_lang_String_2Ljava_lang_String_2'](lcA5);
stA0.setItemTypeIconCss__VLjava_lang_String_2(stA1);
var stA0 = lcA0.getRelatedItemList__Ljava_util_List_2();
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,lcA6);
    }
    X_153: for (;;) { IF: if (gt <= 153) {
{ gt = 0; continue X_33; }
    }
    X_156: for (;;) { IF: if (gt <= 156) {

var stA0 = invoker.getList__Ljava_util_List_2Ljava_lang_String_2(lcA1,"shareItemName");
var lcA3 = stA0;
var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA3);
var lcA4 = stA0;
    }
    X_172: for (;;) { IF: if (gt <= 172) {

var stI0 = invoker.hasNext__Z(lcA4);
if ((stI0) == 0) { gt = 318; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA4);
if (stA0 !== null && !stA0['$instOf_java_util_Map']) vm.java_lang_Class(false).castEx(stA0, 'java.util.Map');
var lcA5 = stA0;
var stA0 = invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2(lcA5,"itemType");
if (stA0 !== null && !stA0['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA0, 'java.lang.String');
var lcA6 = stA0;
var stI0 = invoker.equalsIgnoreCase__ZLjava_lang_String_2(lcA6,"PERSON");
if ((stI0) != 0) { gt = 231; break IF; }
var stI0 = invoker.equalsIgnoreCase__ZLjava_lang_String_2(lcA6,"OWNER");
if ((stI0) == 0) { gt = 315; break IF; }
    }
    X_231: for (;;) { IF: if (gt <= 231) {
var stA0 = new io_cloudoffice_platform_cockpit_document_Item;
(refs_io_cloudoffice_platform_cockpit_document_Item || (refs_io_cloudoffice_platform_cockpit_document_Item = io_cloudoffice_platform_cockpit_document_Item(false))).constructor.cons__V.call(stA0);
var lcA7 = stA0;
var stA0 = invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2(lcA5,"itemId");
if (stA0 !== null && !stA0['$instOf_java_lang_Integer']) vm.java_lang_Class(false).castEx(stA0, 'java.lang.Integer');
var stI0 = invoker.intValue__I(stA0);
var lcI8 = stI0;
var stA0 = lcA7;var stA1 = (refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false)))['valueOf__Ljava_lang_String_2I'](lcI8);
stA0.setItemId__VLjava_lang_String_2(stA1);
var stA0 = lcA7;var stA1 = invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2(lcA5,"itemName");
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setItemName__VLjava_lang_String_2(stA1);
lcA7.setItemType__VLjava_lang_String_2(lcA6);
var stA0 = lcA7;var stA1 = (refs_io_cloudoffice_platform_cockpit_api_QueryMetaModel || (refs_io_cloudoffice_platform_cockpit_api_QueryMetaModel = vm.io_cloudoffice_platform_cockpit_api_QueryMetaModel(false)))['getItemTypeIconCss__Ljava_lang_String_2Ljava_lang_String_2'](lcA6);
stA0.setItemTypeIconCss__VLjava_lang_String_2(stA1);
var stA0 = lcA0.getSharedItemList__Ljava_util_List_2();
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,lcA7);
    }
    X_315: for (;;) { IF: if (gt <= 315) {
{ gt = 0; continue X_172; }
    }
    X_318: for (;;) { IF: if (gt <= 318) {
return;

    }
}}}}}}}}
};
c['processTagShareRelate__VLio_cloudoffice_platform_cockpit_document_DocumentView_2Lio_cloudoffice_platform_cockpit_api_MapBuilder_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.getSystemData__VLio_cloudoffice_platform_cockpit_document_DocumentView_2Ljava_lang_String_2 = function(lcA0, lcA1) {
var stA0 = new io_cloudoffice_platform_cockpit_document_DocumentComponent$12;
(refs_io_cloudoffice_platform_cockpit_document_DocumentComponent$12 || (refs_io_cloudoffice_platform_cockpit_document_DocumentComponent$12 = io_cloudoffice_platform_cockpit_document_DocumentComponent$12(false))).constructor.cons__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_document_DocumentView_2Ljava_lang_String_2.call(stA0, "\"/VirtualItem-portlet.virtualsystemdataitem/getSystemData\"", lcA0, lcA1);
var stA1 = new io_cloudoffice_platform_cockpit_document_DocumentComponent$11;
(refs_io_cloudoffice_platform_cockpit_document_DocumentComponent$11 || (refs_io_cloudoffice_platform_cockpit_document_DocumentComponent$11 = io_cloudoffice_platform_cockpit_document_DocumentComponent$11(false))).constructor.cons__V.call(stA1);
invoker.call__VLio_cloudoffice_platform_cockpit_api_ServerCallback_2(stA0,stA1);
return;

};
c['getSystemData__VLio_cloudoffice_platform_cockpit_document_DocumentView_2Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.setSystemData__VLio_cloudoffice_platform_cockpit_document_DocumentView_2Ljava_lang_String_2 = function(lcA0, lcA1) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['query__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2'](lcA1);
var lcA2 = stA0;
var stA0 = lcA0.getCreatedBy__Ljava_lang_String_2();
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isEmpty__ZLjava_lang_String_2'](stA0);
if ((stI0) != 0) { gt = 28; break IF; }
var stA0 = lcA0.getCreatedBy__Ljava_lang_String_2();
var stI0 = invoker.equalsIgnoreCase__ZLjava_lang_String_2(stA0,"me");
if ((stI0) != 0) { gt = 39; break IF; }
    }
    X_28: for (;;) { IF: if (gt <= 28) {

var stA0 = lcA0;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA2,"createdBy");
stA0.setCreatedBy__VLjava_lang_String_2(stA1);
    }
    X_39: for (;;) { IF: if (gt <= 39) {

var stA0 = lcA0;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA2,"createdDate");
stA0.setCreatedDate__VLjava_lang_String_2(stA1);
var stA0 = lcA0;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA2,"lastModifiedBy");
stA0.setLastModifiedBy__VLjava_lang_String_2(stA1);
var stA0 = lcA0;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA2,"lastModifiedDate");
stA0.setLastModifiedDate__VLjava_lang_String_2(stA1);
return;

    }
}}}
};
c['setSystemData__VLio_cloudoffice_platform_cockpit_document_DocumentView_2Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.access$200__VLio_cloudoffice_platform_cockpit_document_DocumentView_2Lio_cloudoffice_platform_cockpit_api_MapBuilder_2 = function(lcA0, lcA1) {
c.setComponentDefinition__VLio_cloudoffice_platform_cockpit_document_DocumentView_2Lio_cloudoffice_platform_cockpit_api_MapBuilder_2(lcA0, lcA1);
return;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$300__VLio_cloudoffice_platform_cockpit_document_DocumentComponent_2Lio_cloudoffice_platform_cockpit_document_DocumentView_2Lio_cloudoffice_platform_cockpit_api_MapBuilder_2 = function(lcA0, lcA1, lcA2) {
c.prepareConfigurationModelFromJSON__VLio_cloudoffice_platform_cockpit_document_DocumentView_2Lio_cloudoffice_platform_cockpit_api_MapBuilder_2.call(lcA0, lcA1, lcA2);
return;

};
    m.access = 4104;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_document_DocumentComponentfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_document_DocumentComponent', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_document_DocumentComponentfillInstOf });
    io_cloudoffice_platform_cockpit_document_DocumentComponentfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/document/DocumentComponent';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 33;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_AbstractComponent;
    var refs_io_cloudoffice_platform_cockpit_document_DocumentComponent$LoginEventListener;
    var refs_io_cloudoffice_platform_cockpit_document_DocumentComponent$DesignModeListener;
    var refs_io_cloudoffice_platform_cockpit_document_DocumentComponent$EnableFullViewListener;
    var refs_io_cloudoffice_platform_cockpit_document_DocumentComponent$EnableSplitViewListener;
    var refs_io_cloudoffice_platform_cockpit_document_DocumentComponent$LoadItemDetailListener;
    var refs_io_cloudoffice_platform_cockpit_document_DocumentComponent$FunctionInvokeListener;
    var refs_io_cloudoffice_platform_cockpit_document_DocumentComponent$InitNewItemComponentListener;
    var refs_java_lang_UnsupportedOperationException;
    var refs_io_cloudoffice_platform_cockpit_document_DocumentView;
    var refs_io_cloudoffice_platform_cockpit_document_DocumentConfiguration;
    var refs_io_cloudoffice_platform_cockpit_js_JSUIUtils;
    var refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration;
    var refs_io_cloudoffice_platform_cockpit_document_DocumentComponent$1;
    var refs_io_cloudoffice_platform_cockpit_document_DocumentComponent$2;
    var refs_io_cloudoffice_platform_cockpit_api_UtilValidate;
    var refs_java_lang_StringBuilder;
    var refs_io_cloudoffice_platform_cockpit_js_VIEW;
    var refs_io_cloudoffice_platform_cockpit_api_Event;
    var refs_io_cloudoffice_platform_cockpit_api_Components;
    var refs_io_cloudoffice_platform_cockpit_api_MapBuilder;
    var refs_io_cloudoffice_platform_cockpit_document_DocumentComponent$4;
    var refs_io_cloudoffice_platform_cockpit_document_DocumentComponent$3;
    var refs_io_cloudoffice_platform_cockpit_document_DocumentComponent$6;
    var refs_io_cloudoffice_platform_cockpit_document_DocumentComponent$5;
    var refs_io_cloudoffice_platform_cockpit_document_DocumentComponent$8;
    var refs_io_cloudoffice_platform_cockpit_document_DocumentComponent$7;
    var refs_io_cloudoffice_platform_cockpit_document_DocumentComponent$10;
    var refs_io_cloudoffice_platform_cockpit_document_DocumentComponent$9;
    var refs_io_cloudoffice_platform_cockpit_api_IconModel;
    var refs_io_cloudoffice_platform_cockpit_document_Item;
    var refs_io_cloudoffice_platform_cockpit_api_QueryMetaModel;
    var refs_java_lang_String;
    var refs_io_cloudoffice_platform_cockpit_document_DocumentComponent$12;
    var refs_io_cloudoffice_platform_cockpit_document_DocumentComponent$11;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_document_DocumentComponent = registerClass(exports,'io_cloudoffice_platform_cockpit_document_DocumentComponent',io_cloudoffice_platform_cockpit_document_DocumentComponent);


function io_cloudoffice_platform_cockpit_document_DocumentComponent$11() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_document_DocumentComponent$11;
  if (!CLS.$class) {
    var pp = vm.io_cloudoffice_platform_cockpit_api_ServerCallback(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_io_cloudoffice_platform_cockpit_api_ServerCallback || (refs_io_cloudoffice_platform_cockpit_api_ServerCallback = vm.io_cloudoffice_platform_cockpit_api_ServerCallback(false))).constructor['cons__V'].call(lcA0);
return;

};
CLS['cons__V'] = m;

    m.access = 0;
    m.cls = CLS;
    m = c.process__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = invoker.getRequest__Lio_cloudoffice_platform_cockpit_api_AsyncRequest_2(lcA0);
var stA0 = invoker.getView__Ljava_lang_Object_2(stA0);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_document_DocumentView']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.document.DocumentView');
var lcA2 = stA0;
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](lcA1);
if ((stI0) == 0) { gt = 23; break IF; }
(refs_io_cloudoffice_platform_cockpit_document_DocumentComponent || (refs_io_cloudoffice_platform_cockpit_document_DocumentComponent = io_cloudoffice_platform_cockpit_document_DocumentComponent(false))).setSystemData__VLio_cloudoffice_platform_cockpit_document_DocumentView_2Ljava_lang_String_2(lcA2, lcA1);
    }
    X_23: for (;;) { IF: if (gt <= 23) {
return;

    }
}}
};
c['process__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_document_DocumentComponent$11fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_document_DocumentComponent$11', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_document_DocumentComponent$11fillInstOf });
    io_cloudoffice_platform_cockpit_document_DocumentComponent$11fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/document/DocumentComponent$11';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_ServerCallback;
    var refs_io_cloudoffice_platform_cockpit_api_UtilValidate;
    var refs_io_cloudoffice_platform_cockpit_document_DocumentComponent;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_document_DocumentComponent$11 = io_cloudoffice_platform_cockpit_document_DocumentComponent$11;

vm.io_cloudoffice_platform_cockpit_api_ServerCallback = link('io/cloudoffice/platform/cockpit/api/ServerCallback', function(f) { vm.io_cloudoffice_platform_cockpit_api_ServerCallback =  f; });

function io_cloudoffice_platform_cockpit_document_DocumentComponent$12() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_document_DocumentComponent$12;
  if (!CLS.$class) {
    var pp = vm.io_cloudoffice_platform_cockpit_api_AsyncRequest(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$virtualDocumentItemId = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$12_val$virtualDocumentItemId'] = v; return this['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$12_val$virtualDocumentItemId']; };
    m = CLS.cons__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_document_DocumentView_2Ljava_lang_String_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$12_val$virtualDocumentItemId'] = lcA3;
(refs_io_cloudoffice_platform_cockpit_api_AsyncRequest || (refs_io_cloudoffice_platform_cockpit_api_AsyncRequest = vm.io_cloudoffice_platform_cockpit_api_AsyncRequest(false))).constructor['cons__VLjava_lang_String_2Ljava_lang_Object_2'].call(lcA0, lcA1, lcA2);
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.preparePostData__V = function() {
  var  lcA0 = this;
var stA0 = new vm.java_util_HashMap;
(refs_java_util_HashMap || (refs_java_util_HashMap = vm.java_util_HashMap(false))).constructor['cons__V'].call(stA0);
var lcA1 = stA0;
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA1,"itemId", lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$12_val$virtualDocumentItemId']);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA1,"itemType", "FILE");
var stA0 = lcA0;var stA1 = invoker.getEndpoint__Ljava_lang_String_2(lcA0);
invoker.put__VLjava_lang_String_2Ljava_lang_Object_2(stA0,stA1, lcA1);
return;

};
c['preparePostData__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.doValidate__Z = function() {
  var  lcA0 = this;
return 1;

};
c['doValidate__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_document_DocumentComponent$12fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_document_DocumentComponent$12', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_document_DocumentComponent$12fillInstOf });
    io_cloudoffice_platform_cockpit_document_DocumentComponent$12fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/document/DocumentComponent$12';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_AsyncRequest;
    var refs_java_util_HashMap;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$12_val$virtualDocumentItemId'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_document_DocumentComponent$12 = io_cloudoffice_platform_cockpit_document_DocumentComponent$12;

vm.java_util_HashMap = link('java/util/HashMap', function(f) { vm.java_util_HashMap =  f; });
vm.io_cloudoffice_platform_cockpit_api_AsyncRequest = link('io/cloudoffice/platform/cockpit/api/AsyncRequest', function(f) { vm.io_cloudoffice_platform_cockpit_api_AsyncRequest =  f; });
vm.java_lang_String = link('java/lang/String', function(f) { vm.java_lang_String =  f; });
vm.io_cloudoffice_platform_cockpit_api_QueryMetaModel = link('io/cloudoffice/platform/cockpit/api/QueryMetaModel', function(f) { vm.io_cloudoffice_platform_cockpit_api_QueryMetaModel =  f; });

function io_cloudoffice_platform_cockpit_document_Item() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_document_Item;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_TYPE'] = null;
  m = c._TYPE = function (v) {  if (arguments.length == 1) CLS['fld_TYPE'] = v; return CLS['fld_TYPE']; };
  m = c._proto = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_document_Item_proto'] = v; return this['fld_io_cloudoffice_platform_cockpit_document_Item_proto']; };
  m = c._prop_itemId = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_document_Item_prop_itemId'] = v; return this['fld_io_cloudoffice_platform_cockpit_document_Item_prop_itemId']; };
  m = c._prop_itemName = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_document_Item_prop_itemName'] = v; return this['fld_io_cloudoffice_platform_cockpit_document_Item_prop_itemName']; };
  m = c._prop_itemType = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_document_Item_prop_itemType'] = v; return this['fld_io_cloudoffice_platform_cockpit_document_Item_prop_itemType']; };
  m = c._prop_itemTypeIconCss = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_document_Item_prop_itemTypeIconCss'] = v; return this['fld_io_cloudoffice_platform_cockpit_document_Item_prop_itemTypeIconCss']; };
    m = c.modelFor__Ljava_lang_Class_2 = function() {
return (refs_io_cloudoffice_platform_cockpit_document_DocumentComponent$ItemModel || (refs_io_cloudoffice_platform_cockpit_document_DocumentComponent$ItemModel = io_cloudoffice_platform_cockpit_document_DocumentComponent$ItemModel(false))).constructor.$class;

};
    m.access = 10;
    m.cls = CLS;
    m = c.getItemId__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_Item_proto'],"itemId");
return lcA0['fld_io_cloudoffice_platform_cockpit_document_Item_prop_itemId'];

};
c['getItemId__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setItemId__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_document_Item_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_document_Item_prop_itemId'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_document_Item_prop_itemId'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_Item_proto'],"itemId", lcA2, lcA1);
return;

    }
}}
};
c['setItemId__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getItemName__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_Item_proto'],"itemName");
return lcA0['fld_io_cloudoffice_platform_cockpit_document_Item_prop_itemName'];

};
c['getItemName__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setItemName__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_document_Item_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_document_Item_prop_itemName'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_document_Item_prop_itemName'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_Item_proto'],"itemName", lcA2, lcA1);
return;

    }
}}
};
c['setItemName__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getItemType__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_Item_proto'],"itemType");
return lcA0['fld_io_cloudoffice_platform_cockpit_document_Item_prop_itemType'];

};
c['getItemType__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setItemType__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_document_Item_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_document_Item_prop_itemType'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_document_Item_prop_itemType'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_Item_proto'],"itemType", lcA2, lcA1);
return;

    }
}}
};
c['setItemType__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getItemTypeIconCss__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_Item_proto'],"itemTypeIconCss");
return lcA0['fld_io_cloudoffice_platform_cockpit_document_Item_prop_itemTypeIconCss'];

};
c['getItemTypeIconCss__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setItemTypeIconCss__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_document_Item_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_document_Item_prop_itemTypeIconCss'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_document_Item_prop_itemTypeIconCss'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_Item_proto'],"itemTypeIconCss", lcA2, lcA1);
return;

    }
}}
};
c['setItemTypeIconCss__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.createProto__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2(c._TYPE(),lcA0, lcA1);
stA0['fld_io_cloudoffice_platform_cockpit_document_Item_proto'] = stA1;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = (refs_net_java_html_BrwsrCtx || (refs_net_java_html_BrwsrCtx = vm.net_java_html_BrwsrCtx(false)))['findDefault__Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'](c.constructor.$class);
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, stA1);
return;

};
CLS['cons__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2 = function(lcA1, lcA2, lcA3, lcA4) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = (refs_net_java_html_BrwsrCtx || (refs_net_java_html_BrwsrCtx = vm.net_java_html_BrwsrCtx(false)))['findDefault__Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'](c.constructor.$class);
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, stA1);
lcA0['fld_io_cloudoffice_platform_cockpit_document_Item_prop_itemId'] = lcA1;
lcA0['fld_io_cloudoffice_platform_cockpit_document_Item_prop_itemName'] = lcA2;
lcA0['fld_io_cloudoffice_platform_cockpit_document_Item_prop_itemType'] = lcA3;
lcA0['fld_io_cloudoffice_platform_cockpit_document_Item_prop_itemTypeIconCss'] = lcA4;
return;

};
CLS['cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 4);
var lcA3 = stA0;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_document_Item_proto'];var stA1 = lcA2;var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, 4);
Array.at(stA2, 0, "itemId");
Array.at(stA2, 1, "itemName");
Array.at(stA2, 2, "itemType");
Array.at(stA2, 3, "itemTypeIconCss");
invoker.extract__VLjava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Object_2(stA0,stA1, stA2, lcA3);
if ((lcA3[0] || Array.at(lcA3, 0)) !== null && !(lcA3[0] || Array.at(lcA3, 0))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[0] || Array.at(lcA3, 0)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_document_Item_prop_itemId'] = (lcA3[0] || Array.at(lcA3, 0));
if ((lcA3[1] || Array.at(lcA3, 1)) !== null && !(lcA3[1] || Array.at(lcA3, 1))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[1] || Array.at(lcA3, 1)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_document_Item_prop_itemName'] = (lcA3[1] || Array.at(lcA3, 1));
if ((lcA3[2] || Array.at(lcA3, 2)) !== null && !(lcA3[2] || Array.at(lcA3, 2))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[2] || Array.at(lcA3, 2)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_document_Item_prop_itemType'] = (lcA3[2] || Array.at(lcA3, 2));
if ((lcA3[3] || Array.at(lcA3, 3)) !== null && !(lcA3[3] || Array.at(lcA3, 3))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[3] || Array.at(lcA3, 3)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_document_Item_prop_itemTypeIconCss'] = (lcA3[3] || Array.at(lcA3, 3));
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.useAsArray___3Ljava_lang_Object_2Ljava_lang_Object_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](lcA0, 1, vm.java_lang_Object);
if ((stI0) == 0) { gt = 17; break IF; }
if (lcA0 !== null && !Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](lcA0, 1, vm.java_lang_Object)) vm.java_lang_Class(false).castEx(lcA0, '');
if (lcA0 !== null && !Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](lcA0, 1, vm.java_lang_Object)) vm.java_lang_Class(false).castEx(lcA0, '');
var stA0 = lcA0;{ gt = 36; break IF; }
    }
    X_17: for (;;) { IF: if (gt <= 17) {

if ((lcA0) !== null) { gt = 28; break IF; }
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 0);
{ gt = 36; break IF; }
    }
    X_28: for (;;) { IF: if (gt <= 28) {

var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 1);
Array.at(stA0, 0, lcA0);
    }
    X_36: for (;;) { IF: if (gt <= 36) {
return stA0;

    }
}}}}
};
    m.access = 10;
    m.cls = CLS;
    m = c.toString__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var lcA1 = stA0;
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(123));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"itemId");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getItemId__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"itemName");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getItemName__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"itemType");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getItemType__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"itemTypeIconCss");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getItemTypeIconCss__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(125));
var stA0 = invoker.toString__Ljava_lang_String_2(lcA1);
return stA0;

};
c['toString__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Lio_cloudoffice_platform_cockpit_document_Item_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_Item_proto']);
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_document_Item_2Lnet_java_html_BrwsrCtx_2.call(stA0, stA1);
return stA0;

};
c['clone__Lio_cloudoffice_platform_cockpit_document_Item_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Lio_cloudoffice_platform_cockpit_document_Item_2Lnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = new io_cloudoffice_platform_cockpit_document_Item;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, lcA1);
var lcA2 = stA0;
var stA0 = lcA2;var stA1 = lcA0.getItemId__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_document_Item_prop_itemId'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getItemName__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_document_Item_prop_itemName'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getItemType__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_document_Item_prop_itemType'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getItemTypeIconCss__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_document_Item_prop_itemTypeIconCss'] = stA1;
return lcA2;

};
    m.access = 2;
    m.cls = CLS;
    m = c.applyBindings__Lio_cloudoffice_platform_cockpit_document_Item_2 = function() {
  var  lcA0 = this;
invoker.applyBindings__V(lcA0['fld_io_cloudoffice_platform_cockpit_document_Item_proto']);
return lcA0;

};
c['applyBindings__Lio_cloudoffice_platform_cockpit_document_Item_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.equals__ZLjava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((lcA1) !== (lcA0)) { gt = 7; break IF; }
return 1;
    }
    X_7: for (;;) { IF: if (gt <= 7) {

var stI0 = lcA1 != null && lcA1['$instOf_io_cloudoffice_platform_cockpit_document_Item'] ? 1 : 0;
if ((stI0) != 0) { gt = 16; break IF; }
return 0;
    }
    X_16: for (;;) { IF: if (gt <= 16) {

if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_document_Item']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.document.Item');
var lcA2 = lcA1;
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_document_Item_prop_itemId'], lcA2['fld_io_cloudoffice_platform_cockpit_document_Item_prop_itemId']);
if ((stI0) != 0) { gt = 40; break IF; }
return 0;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_document_Item_prop_itemName'], lcA2['fld_io_cloudoffice_platform_cockpit_document_Item_prop_itemName']);
if ((stI0) != 0) { gt = 59; break IF; }
return 0;
    }
    X_59: for (;;) { IF: if (gt <= 59) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_document_Item_prop_itemType'], lcA2['fld_io_cloudoffice_platform_cockpit_document_Item_prop_itemType']);
if ((stI0) != 0) { gt = 78; break IF; }
return 0;
    }
    X_78: for (;;) { IF: if (gt <= 78) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_document_Item_prop_itemTypeIconCss'], lcA2['fld_io_cloudoffice_platform_cockpit_document_Item_prop_itemTypeIconCss']);
if ((stI0) != 0) { gt = 97; break IF; }
return 0;
    }
    X_97: for (;;) { IF: if (gt <= 97) {

return 1;

    }
}}}}}}}
};
c['equals__ZLjava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.hashCode__I = function() {
  var  lcA0 = this;
var stA0 = invoker.getName__Ljava_lang_String_2(c.constructor.$class);
var stI0 = invoker.hashCode__I(stA0);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_document_Item_prop_itemId'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_document_Item_prop_itemName'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_document_Item_prop_itemType'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_document_Item_prop_itemTypeIconCss'], lcI1);
var lcI1 = stI0;
return lcI1;

};
c['hashCode__I'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Ljava_lang_Object_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0.clone__Lio_cloudoffice_platform_cockpit_document_Item_2();
return stA0;

};
c['clone__Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.access$100__Lio_cloudoffice_platform_cockpit_document_Item$Html4JavaType_2 = function() {
return c._TYPE();

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_document_Item_2 = function(lcA0) {
return lcA0['fld_io_cloudoffice_platform_cockpit_document_Item_proto'];

};
    m.access = 4104;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_document_Item$1_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2.call(lcA0, lcA1, lcA2);
return;

};
    m.access = 4096;
    m.cls = CLS;
    m = c.access$400__Lio_cloudoffice_platform_cockpit_document_Item_2Lio_cloudoffice_platform_cockpit_document_Item_2Lnet_java_html_BrwsrCtx_2 = function(lcA0, lcA1) {
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_document_Item_2Lnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
return stA0;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new io_cloudoffice_platform_cockpit_document_Item$Html4JavaType;
(refs_io_cloudoffice_platform_cockpit_document_Item$Html4JavaType || (refs_io_cloudoffice_platform_cockpit_document_Item$Html4JavaType = io_cloudoffice_platform_cockpit_document_Item$Html4JavaType(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_document_Item$1_2.call(stA0, null);
c._TYPE(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_document_ItemfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_document_Item', { value : true });
      vm.java_lang_Cloneable(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_document_ItemfillInstOf });
    io_cloudoffice_platform_cockpit_document_ItemfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/document/Item';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.java_lang_Cloneable(false).constructor.$class
    ]; };
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_io_cloudoffice_platform_cockpit_document_DocumentComponent$ItemModel;
    var refs_net_java_html_BrwsrCtx;
    var refs_java_lang_StringBuilder;
    var refs_io_cloudoffice_platform_cockpit_document_Item$Html4JavaType;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_document_Item_proto'] = null;
    this['fld_io_cloudoffice_platform_cockpit_document_Item_prop_itemId'] = null;
    this['fld_io_cloudoffice_platform_cockpit_document_Item_prop_itemName'] = null;
    this['fld_io_cloudoffice_platform_cockpit_document_Item_prop_itemType'] = null;
    this['fld_io_cloudoffice_platform_cockpit_document_Item_prop_itemTypeIconCss'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_document_Item = registerClass(exports,'io_cloudoffice_platform_cockpit_document_Item',io_cloudoffice_platform_cockpit_document_Item);

vm.java_lang_Cloneable = link('java/lang/Cloneable', function(f) { vm.java_lang_Cloneable =  f; });

function io_cloudoffice_platform_cockpit_document_Item$Html4JavaType() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_document_Item$Html4JavaType;
  if (!CLS.$class) {
    var pp = vm.org_netbeans_html_json_spi_Proto$Type(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_org_netbeans_html_json_spi_Proto$Type || (refs_org_netbeans_html_json_spi_Proto$Type = vm.org_netbeans_html_json_spi_Proto$Type(false))).constructor['cons__VLjava_lang_Class_2Ljava_lang_Class_2II'].call(lcA0, (refs_io_cloudoffice_platform_cockpit_document_Item || (refs_io_cloudoffice_platform_cockpit_document_Item = io_cloudoffice_platform_cockpit_document_Item(false))).constructor.$class, (refs_io_cloudoffice_platform_cockpit_document_DocumentComponent$ItemModel || (refs_io_cloudoffice_platform_cockpit_document_DocumentComponent$ItemModel = io_cloudoffice_platform_cockpit_document_DocumentComponent$ItemModel(false))).constructor.$class, 4, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"itemId", 0, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"itemName", 1, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"itemType", 2, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"itemTypeIconCss", 3, 0, 0);
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.setValue__VLio_cloudoffice_platform_cockpit_document_Item_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0:{ gt = 32; break IF; }
  case 1:{ gt = 49; break IF; }
  case 2:{ gt = 66; break IF; }
  case 3:{ gt = 83; break IF; }
  default: { gt = 100; break IF; }
}
    }
    X_32: for (;;) { IF: if (gt <= 32) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_document_Item || (refs_io_cloudoffice_platform_cockpit_document_Item = io_cloudoffice_platform_cockpit_document_Item(false))).access$100__Lio_cloudoffice_platform_cockpit_document_Item$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setItemId__VLjava_lang_String_2(stA1);
return;
    }
    X_49: for (;;) { IF: if (gt <= 49) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_document_Item || (refs_io_cloudoffice_platform_cockpit_document_Item = io_cloudoffice_platform_cockpit_document_Item(false))).access$100__Lio_cloudoffice_platform_cockpit_document_Item$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setItemName__VLjava_lang_String_2(stA1);
return;
    }
    X_66: for (;;) { IF: if (gt <= 66) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_document_Item || (refs_io_cloudoffice_platform_cockpit_document_Item = io_cloudoffice_platform_cockpit_document_Item(false))).access$100__Lio_cloudoffice_platform_cockpit_document_Item$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setItemType__VLjava_lang_String_2(stA1);
return;
    }
    X_83: for (;;) { IF: if (gt <= 83) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_document_Item || (refs_io_cloudoffice_platform_cockpit_document_Item = io_cloudoffice_platform_cockpit_document_Item(false))).access$100__Lio_cloudoffice_platform_cockpit_document_Item$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setItemTypeIconCss__VLjava_lang_String_2(stA1);
return;
    }
    X_100: for (;;) { IF: if (gt <= 100) {
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

    }
}}}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_document_Item_2I = function(lcA1, lcI2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0:{ gt = 32; break IF; }
  case 1:{ gt = 37; break IF; }
  case 2:{ gt = 42; break IF; }
  case 3:{ gt = 47; break IF; }
  default: { gt = 52; break IF; }
}
    }
    X_32: for (;;) { IF: if (gt <= 32) {

var stA0 = lcA1.getItemId__Ljava_lang_String_2();
return stA0;
    }
    X_37: for (;;) { IF: if (gt <= 37) {

var stA0 = lcA1.getItemName__Ljava_lang_String_2();
return stA0;
    }
    X_42: for (;;) { IF: if (gt <= 42) {

var stA0 = lcA1.getItemType__Ljava_lang_String_2();
return stA0;
    }
    X_47: for (;;) { IF: if (gt <= 47) {

var stA0 = lcA1.getItemTypeIconCss__Ljava_lang_String_2();
return stA0;
    }
    X_52: for (;;) { IF: if (gt <= 52) {
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

    }
}}}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.call__VLio_cloudoffice_platform_cockpit_document_Item_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_document_Item']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.document.Item');
var stA0 = (refs_io_cloudoffice_platform_cockpit_document_Item || (refs_io_cloudoffice_platform_cockpit_document_Item = io_cloudoffice_platform_cockpit_document_Item(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_document_Item_2(lcA1);
return stA0;

};
c['protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.onChange__VLio_cloudoffice_platform_cockpit_document_Item_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLio_cloudoffice_platform_cockpit_document_Item_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
var stA1 = stA0;var stA2 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"index: ");
var stA2 = invoker.append__Ljava_lang_StringBuilder_2I(stA2,lcI2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2," type: ");
var stA2 = invoker.append__Ljava_lang_StringBuilder_2I(stA2,lcI3);
var stA2 = invoker.toString__Ljava_lang_String_2(stA2);
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__VLjava_lang_String_2'].call(stA1, stA2);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.read__Lio_cloudoffice_platform_cockpit_document_Item_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = new io_cloudoffice_platform_cockpit_document_Item;
(refs_io_cloudoffice_platform_cockpit_document_Item || (refs_io_cloudoffice_platform_cockpit_document_Item = io_cloudoffice_platform_cockpit_document_Item(false))).constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_document_Item$1_2.call(stA0, lcA1, lcA2, null);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.cloneTo__Lio_cloudoffice_platform_cockpit_document_Item_2Lio_cloudoffice_platform_cockpit_document_Item_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = (refs_io_cloudoffice_platform_cockpit_document_Item || (refs_io_cloudoffice_platform_cockpit_document_Item = io_cloudoffice_platform_cockpit_document_Item(false))).access$400__Lio_cloudoffice_platform_cockpit_document_Item_2Lio_cloudoffice_platform_cockpit_document_Item_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_document_Item']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.document.Item');
lcA0.onMessage__VLio_cloudoffice_platform_cockpit_document_Item_2IILjava_lang_Object_2_3Ljava_lang_Object_2(lcA1, lcI2, lcI3, lcA4, lcA5);
return;

};
c['onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.onChange__VLjava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_document_Item']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.document.Item');
lcA0.onChange__VLio_cloudoffice_platform_cockpit_document_Item_2I(lcA1, lcI2);
return;

};
c['onChange__VLjava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = lcA0.read__Lio_cloudoffice_platform_cockpit_document_Item_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2(lcA1, lcA2);
return stA0;

};
c['read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_document_Item']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.document.Item');
var stA0 = lcA0.cloneTo__Lio_cloudoffice_platform_cockpit_document_Item_2Lio_cloudoffice_platform_cockpit_document_Item_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
c['cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_document_Item']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.document.Item');
lcA0.call__VLio_cloudoffice_platform_cockpit_document_Item_2ILjava_lang_Object_2Ljava_lang_Object_2(lcA1, lcI2, lcA3, lcA4);
return;

};
c['call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Ljava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_document_Item']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.document.Item');
var stA0 = lcA0.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_document_Item_2I(lcA1, lcI2);
return stA0;

};
c['getValue__Ljava_lang_Object_2Ljava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.setValue__VLjava_lang_Object_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_document_Item']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.document.Item');
lcA0.setValue__VLio_cloudoffice_platform_cockpit_document_Item_2ILjava_lang_Object_2(lcA1, lcI2, lcA3);
return;

};
c['setValue__VLjava_lang_Object_2ILjava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_document_Item$1_2 = function(lcA1) {
  var  lcA0 = this;
c.constructor.cons__V.call(lcA0);
return;

};
    m.access = 4096;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_document_Item$Html4JavaTypefillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_document_Item$Html4JavaType', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_document_Item$Html4JavaTypefillInstOf });
    io_cloudoffice_platform_cockpit_document_Item$Html4JavaTypefillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/document/Item$Html4JavaType';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_document_Item;
    var refs_io_cloudoffice_platform_cockpit_document_DocumentComponent$ItemModel;
    var refs_org_netbeans_html_json_spi_Proto$Type;
    var refs_java_lang_String;
    var refs_java_lang_UnsupportedOperationException;
    var refs_java_lang_StringBuilder;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_document_Item$Html4JavaType = io_cloudoffice_platform_cockpit_document_Item$Html4JavaType;

vm.org_netbeans_html_json_spi_Proto$Type = link('org/netbeans/html/json/spi/Proto$Type', function(f) { vm.org_netbeans_html_json_spi_Proto$Type =  f; });
vm.net_java_html_BrwsrCtx = link('net/java/html/BrwsrCtx', function(f) { vm.net_java_html_BrwsrCtx =  f; });

function io_cloudoffice_platform_cockpit_document_DocumentComponent$ItemModel() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_document_DocumentComponent$ItemModel;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._this$0 = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$ItemModel_this$0'] = v; return this['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$ItemModel_this$0']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_document_DocumentComponent_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$ItemModel_this$0'] = lcA1;
return;

};
CLS['cons__VLio_cloudoffice_platform_cockpit_document_DocumentComponent_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_document_DocumentComponent$ItemModelfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_document_DocumentComponent$ItemModel', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_document_DocumentComponent$ItemModelfillInstOf });
    io_cloudoffice_platform_cockpit_document_DocumentComponent$ItemModelfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/document/DocumentComponent$ItemModel';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 33;
    CLS.$class.cnstr = CLS;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$ItemModel_this$0'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_document_DocumentComponent$ItemModel = registerClass(exports,'io_cloudoffice_platform_cockpit_document_DocumentComponent$ItemModel',io_cloudoffice_platform_cockpit_document_DocumentComponent$ItemModel);

vm.io_cloudoffice_platform_cockpit_api_IconModel = link('io/cloudoffice/platform/cockpit/api/IconModel', function(f) { vm.io_cloudoffice_platform_cockpit_api_IconModel =  f; });

function io_cloudoffice_platform_cockpit_document_DocumentComponent$9() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_document_DocumentComponent$9;
  if (!CLS.$class) {
    var pp = vm.io_cloudoffice_platform_cockpit_api_ServerCallback(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$virtualDocumentItemId = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$9_val$virtualDocumentItemId'] = v; return this['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$9_val$virtualDocumentItemId']; };
    m = CLS.cons__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$9_val$virtualDocumentItemId'] = lcA1;
(refs_io_cloudoffice_platform_cockpit_api_ServerCallback || (refs_io_cloudoffice_platform_cockpit_api_ServerCallback = vm.io_cloudoffice_platform_cockpit_api_ServerCallback(false))).constructor['cons__V'].call(lcA0);
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.process__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = invoker.getRequest__Lio_cloudoffice_platform_cockpit_api_AsyncRequest_2(lcA0);
var stA0 = invoker.getView__Ljava_lang_Object_2(stA0);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_document_DocumentView']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.document.DocumentView');
var lcA2 = stA0;
var stA0 = lcA2.getVersionList__Ljava_util_List_2();
invoker.clear__V(stA0);
var stA0 = lcA2.getFormatList__Ljava_util_List_2();
invoker.clear__V(stA0);
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](lcA1);
if ((stI0) == 0) { gt = 67; break IF; }
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['query__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2'](lcA1);
var lcA3 = stA0;
(refs_io_cloudoffice_platform_cockpit_document_DocumentComponent || (refs_io_cloudoffice_platform_cockpit_document_DocumentComponent = io_cloudoffice_platform_cockpit_document_DocumentComponent(false))).processDetailData__VLio_cloudoffice_platform_cockpit_document_DocumentView_2Lio_cloudoffice_platform_cockpit_api_MapBuilder_2(lcA2, lcA3);
(refs_io_cloudoffice_platform_cockpit_document_DocumentComponent || (refs_io_cloudoffice_platform_cockpit_document_DocumentComponent = io_cloudoffice_platform_cockpit_document_DocumentComponent(false))).processTagShareRelate__VLio_cloudoffice_platform_cockpit_document_DocumentView_2Lio_cloudoffice_platform_cockpit_api_MapBuilder_2(lcA2, lcA3);
(refs_io_cloudoffice_platform_cockpit_document_DocumentComponent || (refs_io_cloudoffice_platform_cockpit_document_DocumentComponent = io_cloudoffice_platform_cockpit_document_DocumentComponent(false))).getSystemData__VLio_cloudoffice_platform_cockpit_document_DocumentView_2Ljava_lang_String_2(lcA2, lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$9_val$virtualDocumentItemId']);
var stA0 = lcA2.getLoader__Lio_cloudoffice_platform_cockpit_api_HelperItemView_2();
invoker.setActive__VZ(stA0,0);
    }
    X_67: for (;;) { IF: if (gt <= 67) {
return;

    }
}}
};
c['process__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_document_DocumentComponent$9fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_document_DocumentComponent$9', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_document_DocumentComponent$9fillInstOf });
    io_cloudoffice_platform_cockpit_document_DocumentComponent$9fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/document/DocumentComponent$9';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_ServerCallback;
    var refs_io_cloudoffice_platform_cockpit_api_UtilValidate;
    var refs_io_cloudoffice_platform_cockpit_api_MapBuilder;
    var refs_io_cloudoffice_platform_cockpit_document_DocumentComponent;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$9_val$virtualDocumentItemId'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_document_DocumentComponent$9 = io_cloudoffice_platform_cockpit_document_DocumentComponent$9;


function io_cloudoffice_platform_cockpit_document_DocumentComponent$10() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_document_DocumentComponent$10;
  if (!CLS.$class) {
    var pp = vm.io_cloudoffice_platform_cockpit_api_AsyncRequest(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$virtualDocumentItemId = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$10_val$virtualDocumentItemId'] = v; return this['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$10_val$virtualDocumentItemId']; };
    m = CLS.cons__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_document_DocumentView_2Ljava_lang_String_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$10_val$virtualDocumentItemId'] = lcA3;
(refs_io_cloudoffice_platform_cockpit_api_AsyncRequest || (refs_io_cloudoffice_platform_cockpit_api_AsyncRequest = vm.io_cloudoffice_platform_cockpit_api_AsyncRequest(false))).constructor['cons__VLjava_lang_String_2Ljava_lang_Object_2'].call(lcA0, lcA1, lcA2);
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.preparePostData__V = function() {
  var  lcA0 = this;
var stA0 = new vm.java_util_HashMap;
(refs_java_util_HashMap || (refs_java_util_HashMap = vm.java_util_HashMap(false))).constructor['cons__V'].call(stA0);
var lcA1 = stA0;
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA1,"virtualDocumentItemId", lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$10_val$virtualDocumentItemId']);
var stA0 = lcA0;var stA1 = invoker.getEndpoint__Ljava_lang_String_2(lcA0);
invoker.put__VLjava_lang_String_2Ljava_lang_Object_2(stA0,stA1, lcA1);
return;

};
c['preparePostData__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.doValidate__Z = function() {
  var  lcA0 = this;
return 1;

};
c['doValidate__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_document_DocumentComponent$10fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_document_DocumentComponent$10', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_document_DocumentComponent$10fillInstOf });
    io_cloudoffice_platform_cockpit_document_DocumentComponent$10fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/document/DocumentComponent$10';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_AsyncRequest;
    var refs_java_util_HashMap;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$10_val$virtualDocumentItemId'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_document_DocumentComponent$10 = io_cloudoffice_platform_cockpit_document_DocumentComponent$10;


function io_cloudoffice_platform_cockpit_document_DocumentComponent$7() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_document_DocumentComponent$7;
  if (!CLS.$class) {
    var pp = vm.io_cloudoffice_platform_cockpit_api_ServerCallback(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_io_cloudoffice_platform_cockpit_api_ServerCallback || (refs_io_cloudoffice_platform_cockpit_api_ServerCallback = vm.io_cloudoffice_platform_cockpit_api_ServerCallback(false))).constructor['cons__V'].call(lcA0);
return;

};
CLS['cons__V'] = m;

    m.access = 0;
    m.cls = CLS;
    m = c.process__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](lcA1);
if ((stI0) == 0) { gt = 48; break IF; }
var stA0 = invoker.getRequest__Lio_cloudoffice_platform_cockpit_api_AsyncRequest_2(lcA0);
var stA0 = invoker.getView__Ljava_lang_Object_2(stA0);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_document_DocumentView']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.document.DocumentView');
var lcA2 = stA0;
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['query__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2'](lcA1);
var lcA3 = stA0;
var stA0 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA3,"code");
var lcA4 = stA0;
var stI0 = invoker.equalsIgnoreCase__ZLjava_lang_String_2(lcA4,"200");
if ((stI0) == 0) { gt = 48; break IF; }
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_Object_2'](lcA2);
if ((stI0) == 0) { gt = 48; break IF; }
    }
    X_48: for (;;) { IF: if (gt <= 48) {
return;

    }
}}
};
c['process__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_document_DocumentComponent$7fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_document_DocumentComponent$7', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_document_DocumentComponent$7fillInstOf });
    io_cloudoffice_platform_cockpit_document_DocumentComponent$7fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/document/DocumentComponent$7';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_ServerCallback;
    var refs_io_cloudoffice_platform_cockpit_api_UtilValidate;
    var refs_io_cloudoffice_platform_cockpit_api_MapBuilder;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_document_DocumentComponent$7 = io_cloudoffice_platform_cockpit_document_DocumentComponent$7;


function io_cloudoffice_platform_cockpit_document_DocumentComponent$8() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_document_DocumentComponent$8;
  if (!CLS.$class) {
    var pp = vm.io_cloudoffice_platform_cockpit_api_AsyncRequest(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$itemIds = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$8_val$itemIds'] = v; return this['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$8_val$itemIds']; };
    m = CLS.cons__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_document_DocumentView_2Ljava_util_List_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$8_val$itemIds'] = lcA3;
(refs_io_cloudoffice_platform_cockpit_api_AsyncRequest || (refs_io_cloudoffice_platform_cockpit_api_AsyncRequest = vm.io_cloudoffice_platform_cockpit_api_AsyncRequest(false))).constructor['cons__VLjava_lang_String_2Ljava_lang_Object_2'].call(lcA0, lcA1, lcA2);
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.preparePostData__V = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
var stA0 = new vm.java_util_ArrayList;
(refs_java_util_ArrayList || (refs_java_util_ArrayList = vm.java_util_ArrayList(false))).constructor['cons__V'].call(stA0);
var lcA1 = stA0;
var stA0 = new vm.java_util_ArrayList;
(refs_java_util_ArrayList || (refs_java_util_ArrayList = vm.java_util_ArrayList(false))).constructor['cons__V'].call(stA0);
var lcA2 = stA0;
var stA0 = new vm.java_util_HashMap;
(refs_java_util_HashMap || (refs_java_util_HashMap = vm.java_util_HashMap(false))).constructor['cons__V'].call(stA0);
var lcA3 = stA0;
var lcI4 = 0;
    }
    X_27: for (;;) { IF: if (gt <= 27) {

var stI0 = lcI4;var stI1 = invoker.size__I(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$8_val$itemIds']);
if ((stI0) >= (stI1)) { gt = 101; break IF; }
var stA0 = new vm.java_util_HashMap;
(refs_java_util_HashMap || (refs_java_util_HashMap = vm.java_util_HashMap(false))).constructor['cons__V'].call(stA0);
var lcA5 = stA0;
var stA0 = lcA5;var stA1 = "itemId";var stA2 = invoker.get__Ljava_lang_Object_2I(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$8_val$itemIds'],lcI4);
var stA2 = (refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false)))['valueOf__Ljava_lang_String_2Ljava_lang_Object_2'](stA2);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA5,"itemType", "FILE");
var stI0 = invoker.add__ZLjava_lang_Object_2(lcA1,lcA5);
lcI4++;
{ gt = 0; continue X_27; }
    }
    X_101: for (;;) { IF: if (gt <= 101) {

var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA3,"items", lcA1);
var stA0 = lcA3;var stA1 = "relatedItemId";var stA2 = (refs_io_cloudoffice_platform_cockpit_api_Session || (refs_io_cloudoffice_platform_cockpit_api_Session = vm.io_cloudoffice_platform_cockpit_api_Session(false)))['getCompany__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2']();
var stA2 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(stA2,"itemId");
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA3,"relatedItemType", "GROUP");
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA3,"searchKey", "''");
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA3,"description", "''");
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA3,"companyRelationTypeA", "''");
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA3,"companyRelationTypeB", "''");
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA3,"personCompanyRelation", "''");
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA3,"personCompanyPhone", "''");
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA3,"personCompanyMobile", "''");
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA3,"personCompanyEmail", "''");
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA3,"function", "''");
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA3,"personCompanyDepartment", "''");
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA3,"engagementEndDate", "''");
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA3,"projectRelationType", "''");
var stA0 = lcA3;var stA1 = "isEmployee";var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](0);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA3,"businessModelName", "''");
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA3,"selectedCampaignTypeList", lcA2);
var stA0 = lcA0;var stA1 = invoker.getEndpoint__Ljava_lang_String_2(lcA0);
invoker.put__VLjava_lang_String_2Ljava_lang_Object_2(stA0,stA1, lcA3);
return;

    }
}}}
};
c['preparePostData__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.doValidate__Z = function() {
  var  lcA0 = this;
return 1;

};
c['doValidate__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_document_DocumentComponent$8fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_document_DocumentComponent$8', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_document_DocumentComponent$8fillInstOf });
    io_cloudoffice_platform_cockpit_document_DocumentComponent$8fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/document/DocumentComponent$8';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_AsyncRequest;
    var refs_java_util_ArrayList;
    var refs_java_util_HashMap;
    var refs_java_lang_String;
    var refs_io_cloudoffice_platform_cockpit_api_Session;
    var refs_java_lang_Boolean;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$8_val$itemIds'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_document_DocumentComponent$8 = io_cloudoffice_platform_cockpit_document_DocumentComponent$8;

vm.java_lang_Boolean = link('java/lang/Boolean', function(f) { vm.java_lang_Boolean =  f; });
vm.io_cloudoffice_platform_cockpit_api_Session = link('io/cloudoffice/platform/cockpit/api/Session', function(f) { vm.io_cloudoffice_platform_cockpit_api_Session =  f; });
vm.java_util_ArrayList = link('java/util/ArrayList', function(f) { vm.java_util_ArrayList =  f; });

function io_cloudoffice_platform_cockpit_document_DocumentComponent$5() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_document_DocumentComponent$5;
  if (!CLS.$class) {
    var pp = vm.io_cloudoffice_platform_cockpit_api_ServerCallback(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_io_cloudoffice_platform_cockpit_api_ServerCallback || (refs_io_cloudoffice_platform_cockpit_api_ServerCallback = vm.io_cloudoffice_platform_cockpit_api_ServerCallback(false))).constructor['cons__V'].call(lcA0);
return;

};
CLS['cons__V'] = m;

    m.access = 0;
    m.cls = CLS;
    m = c.process__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = invoker.getRequest__Lio_cloudoffice_platform_cockpit_api_AsyncRequest_2(lcA0);
var stA0 = invoker.getView__Ljava_lang_Object_2(stA0);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_document_DocumentView']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.document.DocumentView');
var lcA2 = stA0;
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](lcA1);
if ((stI0) == 0) { gt = 57; break IF; }
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['query__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2'](lcA1);
var lcA3 = stA0;
var stI0 = invoker.getInt__ILjava_lang_String_2(lcA3,"code");
var lcI4 = stI0;
if ((lcI4) != ((200))) { gt = 57; break IF; }
var stA0 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA3,"title");
var lcA5 = stA0;
lcA2.setItemName__VLjava_lang_String_2(lcA5);
(refs_io_cloudoffice_platform_cockpit_document_DocumentComponent || (refs_io_cloudoffice_platform_cockpit_document_DocumentComponent = io_cloudoffice_platform_cockpit_document_DocumentComponent(false))).reloadSelectedDocument__VLio_cloudoffice_platform_cockpit_document_DocumentView_2(lcA2);
    }
    X_57: for (;;) { IF: if (gt <= 57) {
return;

    }
}}
};
c['process__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_document_DocumentComponent$5fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_document_DocumentComponent$5', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_document_DocumentComponent$5fillInstOf });
    io_cloudoffice_platform_cockpit_document_DocumentComponent$5fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/document/DocumentComponent$5';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_ServerCallback;
    var refs_io_cloudoffice_platform_cockpit_api_UtilValidate;
    var refs_io_cloudoffice_platform_cockpit_api_MapBuilder;
    var refs_io_cloudoffice_platform_cockpit_document_DocumentComponent;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_document_DocumentComponent$5 = io_cloudoffice_platform_cockpit_document_DocumentComponent$5;


function io_cloudoffice_platform_cockpit_document_DocumentComponent$6() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_document_DocumentComponent$6;
  if (!CLS.$class) {
    var pp = vm.io_cloudoffice_platform_cockpit_api_AsyncRequest(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$view = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$6_val$view'] = v; return this['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$6_val$view']; };
    m = CLS.cons__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_document_DocumentView_2Lio_cloudoffice_platform_cockpit_document_DocumentView_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$6_val$view'] = lcA3;
(refs_io_cloudoffice_platform_cockpit_api_AsyncRequest || (refs_io_cloudoffice_platform_cockpit_api_AsyncRequest = vm.io_cloudoffice_platform_cockpit_api_AsyncRequest(false))).constructor['cons__VLjava_lang_String_2Ljava_lang_Object_2'].call(lcA0, lcA1, lcA2);
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.preparePostData__V = function() {
  var  lcA0 = this;
var stA0 = new vm.java_util_ArrayList;
(refs_java_util_ArrayList || (refs_java_util_ArrayList = vm.java_util_ArrayList(false))).constructor['cons__V'].call(stA0);
var lcA1 = stA0;
var stA0 = new vm.java_util_HashMap;
(refs_java_util_HashMap || (refs_java_util_HashMap = vm.java_util_HashMap(false))).constructor['cons__V'].call(stA0);
var lcA2 = stA0;
var stA0 = lcA2;var stA1 = "fileList";var stA2 = lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$6_val$view'].getFileData__Lio_cloudoffice_platform_cockpit_document_FileView_2();
var stA2 = stA2.getFileList__Ljava_util_List_2();
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA2,"tagList", lcA1);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA2,"shareList", lcA1);
var stA0 = lcA2;var stA1 = "itemId";var stA2 = lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$6_val$view'].getItemId__Ljava_lang_String_2();
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA2,"itemType", "FILE");
var stA0 = lcA2;var stA1 = "title";var stA2 = lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$6_val$view'].getTitle__Ljava_lang_String_2();
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = lcA2;var stA1 = "showAll";var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](0);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = lcA0;var stA1 = invoker.getEndpoint__Ljava_lang_String_2(lcA0);
invoker.put__VLjava_lang_String_2Ljava_lang_Object_2(stA0,stA1, lcA2);
return;

};
c['preparePostData__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.doValidate__Z = function() {
  var  lcA0 = this;
return 1;

};
c['doValidate__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_document_DocumentComponent$6fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_document_DocumentComponent$6', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_document_DocumentComponent$6fillInstOf });
    io_cloudoffice_platform_cockpit_document_DocumentComponent$6fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/document/DocumentComponent$6';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_AsyncRequest;
    var refs_java_util_ArrayList;
    var refs_java_util_HashMap;
    var refs_java_lang_Boolean;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$6_val$view'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_document_DocumentComponent$6 = io_cloudoffice_platform_cockpit_document_DocumentComponent$6;


function io_cloudoffice_platform_cockpit_document_DocumentComponent$3() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_document_DocumentComponent$3;
  if (!CLS.$class) {
    var pp = vm.io_cloudoffice_platform_cockpit_api_ServerCallback(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_io_cloudoffice_platform_cockpit_api_ServerCallback || (refs_io_cloudoffice_platform_cockpit_api_ServerCallback = vm.io_cloudoffice_platform_cockpit_api_ServerCallback(false))).constructor['cons__V'].call(lcA0);
return;

};
CLS['cons__V'] = m;

    m.access = 0;
    m.cls = CLS;
    m = c.process__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = invoker.getRequest__Lio_cloudoffice_platform_cockpit_api_AsyncRequest_2(lcA0);
var stA0 = invoker.getView__Ljava_lang_Object_2(stA0);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_document_DocumentView']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.document.DocumentView');
var lcA2 = stA0;
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](lcA1);
if ((stI0) == 0) { gt = 111; break IF; }
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['query__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2'](lcA1);
var lcA3 = stA0;
var stI0 = invoker.getInt__ILjava_lang_String_2(lcA3,"code");
var lcI4 = stI0;
if ((lcI4) != ((200))) { gt = 111; break IF; }
var stA0 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA3,"fileName");
var lcA5 = stA0;
var stA0 = new vm.java_util_ArrayList;
(refs_java_util_ArrayList || (refs_java_util_ArrayList = vm.java_util_ArrayList(false))).constructor['cons__V'].call(stA0);
var lcA6 = stA0;
var stA0 = invoker.getList__Ljava_util_List_2Ljava_lang_String_2(lcA3,"virtualDocumentItemIds");
var lcA6 = stA0;
var stA0 = lcA2;var stA1 = lcA6;var stI2 = invoker.size__I(lcA6);
var stA1 = invoker.get__Ljava_lang_Object_2I(stA1,(((stI2) - (1)) | 0));
var stA1 = (refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false)))['valueOf__Ljava_lang_String_2Ljava_lang_Object_2'](stA1);
stA0.setItemId__VLjava_lang_String_2(stA1);
lcA2.setItemName__VLjava_lang_String_2(lcA5);
var stA0 = lcA2.getLoader__Lio_cloudoffice_platform_cockpit_api_HelperItemView_2();
invoker.setActive__VZ(stA0,0);
(refs_io_cloudoffice_platform_cockpit_document_DocumentComponent || (refs_io_cloudoffice_platform_cockpit_document_DocumentComponent = io_cloudoffice_platform_cockpit_document_DocumentComponent(false))).reloadSelectedDocument__VLio_cloudoffice_platform_cockpit_document_DocumentView_2(lcA2);
(refs_io_cloudoffice_platform_cockpit_document_DocumentComponent || (refs_io_cloudoffice_platform_cockpit_document_DocumentComponent = io_cloudoffice_platform_cockpit_document_DocumentComponent(false))).saveRelatedItem__VLio_cloudoffice_platform_cockpit_document_DocumentView_2Ljava_util_List_2(lcA2, lcA6);
    }
    X_111: for (;;) { IF: if (gt <= 111) {
return;

    }
}}
};
c['process__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_document_DocumentComponent$3fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_document_DocumentComponent$3', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_document_DocumentComponent$3fillInstOf });
    io_cloudoffice_platform_cockpit_document_DocumentComponent$3fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/document/DocumentComponent$3';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_ServerCallback;
    var refs_io_cloudoffice_platform_cockpit_api_UtilValidate;
    var refs_io_cloudoffice_platform_cockpit_api_MapBuilder;
    var refs_java_util_ArrayList;
    var refs_java_lang_String;
    var refs_io_cloudoffice_platform_cockpit_document_DocumentComponent;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_document_DocumentComponent$3 = io_cloudoffice_platform_cockpit_document_DocumentComponent$3;


function io_cloudoffice_platform_cockpit_document_DocumentComponent$4() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_document_DocumentComponent$4;
  if (!CLS.$class) {
    var pp = vm.io_cloudoffice_platform_cockpit_api_AsyncRequest(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$view = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$4_val$view'] = v; return this['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$4_val$view']; };
    m = CLS.cons__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_document_DocumentView_2Lio_cloudoffice_platform_cockpit_document_DocumentView_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$4_val$view'] = lcA3;
(refs_io_cloudoffice_platform_cockpit_api_AsyncRequest || (refs_io_cloudoffice_platform_cockpit_api_AsyncRequest = vm.io_cloudoffice_platform_cockpit_api_AsyncRequest(false))).constructor['cons__VLjava_lang_String_2Ljava_lang_Object_2'].call(lcA0, lcA1, lcA2);
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.preparePostData__V = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
var stA0 = new vm.java_util_ArrayList;
(refs_java_util_ArrayList || (refs_java_util_ArrayList = vm.java_util_ArrayList(false))).constructor['cons__V'].call(stA0);
var lcA1 = stA0;
var stA0 = new vm.java_util_HashMap;
(refs_java_util_HashMap || (refs_java_util_HashMap = vm.java_util_HashMap(false))).constructor['cons__V'].call(stA0);
var lcA2 = stA0;
var stA0 = lcA2;var stA1 = "fileList";var stA2 = lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$4_val$view'].getFileData__Lio_cloudoffice_platform_cockpit_document_FileView_2();
var stA2 = stA2.getFileList__Ljava_util_List_2();
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA2,"tagList", lcA1);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA2,"shareList", lcA1);
var stA0 = lcA2;var stA1 = "title";var stA2 = lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$4_val$view'].getFileData__Lio_cloudoffice_platform_cockpit_document_FileView_2();
var stA2 = stA2.getFileList__Ljava_util_List_2();
var stI2 = invoker.size__I(stA2);
if ((stI2) <= (1)) { gt = 82; break IF; }
var stA2 = "''";{ gt = 89; break IF; }
    }
    X_82: for (;;) { IF: if (gt <= 82) {

var stA2 = lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$4_val$view'].getTitle__Ljava_lang_String_2();
    }
    X_89: for (;;) { IF: if (gt <= 89) {
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = lcA2;var stA1 = "showAll";var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](0);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = lcA0;var stA1 = invoker.getEndpoint__Ljava_lang_String_2(lcA0);
invoker.put__VLjava_lang_String_2Ljava_lang_Object_2(stA0,stA1, lcA2);
return;

    }
}}}
};
c['preparePostData__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.doValidate__Z = function() {
  var  lcA0 = this;
return 1;

};
c['doValidate__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_document_DocumentComponent$4fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_document_DocumentComponent$4', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_document_DocumentComponent$4fillInstOf });
    io_cloudoffice_platform_cockpit_document_DocumentComponent$4fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/document/DocumentComponent$4';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_AsyncRequest;
    var refs_java_util_ArrayList;
    var refs_java_util_HashMap;
    var refs_java_lang_Boolean;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$4_val$view'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_document_DocumentComponent$4 = io_cloudoffice_platform_cockpit_document_DocumentComponent$4;

vm.io_cloudoffice_platform_cockpit_api_MapBuilder = link('io/cloudoffice/platform/cockpit/api/MapBuilder', function(f) { vm.io_cloudoffice_platform_cockpit_api_MapBuilder =  f; });
vm.io_cloudoffice_platform_cockpit_api_Components = link('io/cloudoffice/platform/cockpit/api/Components', function(f) { vm.io_cloudoffice_platform_cockpit_api_Components =  f; });
vm.io_cloudoffice_platform_cockpit_api_Event = link('io/cloudoffice/platform/cockpit/api/Event', function(f) { vm.io_cloudoffice_platform_cockpit_api_Event =  f; });
vm.io_cloudoffice_platform_cockpit_js_VIEW = link('io/cloudoffice/platform/cockpit/js/VIEW', function(f) { vm.io_cloudoffice_platform_cockpit_js_VIEW =  f; });
vm.java_lang_StringBuilder = link('java/lang/StringBuilder', function(f) { vm.java_lang_StringBuilder =  f; });
vm.io_cloudoffice_platform_cockpit_api_UtilValidate = link('io/cloudoffice/platform/cockpit/api/UtilValidate', function(f) { vm.io_cloudoffice_platform_cockpit_api_UtilValidate =  f; });

function io_cloudoffice_platform_cockpit_document_DocumentComponent$2() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_document_DocumentComponent$2;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$view = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$2_val$view'] = v; return this['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$2_val$view']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_document_DocumentView_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$2_val$view'] = lcA1;
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.handle__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['query__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2'](lcA1);
var lcA2 = stA0;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$2_val$view'].getConfiguration__Lio_cloudoffice_platform_cockpit_document_DocumentConfiguration_2();
var lcA3 = stA0;
var stA0 = invoker.getJsonObject__Lorg_json_JSONObject_2Ljava_lang_String_2(lcA2,"configuration");
var lcA4 = stA0;
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_Object_2'](lcA4);
if ((stI0) == 0) { gt = 62; break IF; }
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$2_val$view'];var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA4,"layoutColumnId");
stA0.setLayoutColumnId__VLjava_lang_String_2(stA1);
var stA0 = lcA3;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA4,"layoutColumnId");
stA0.setLayoutColumnId__VLjava_lang_String_2(stA1);
(refs_io_cloudoffice_platform_cockpit_document_DocumentComponent || (refs_io_cloudoffice_platform_cockpit_document_DocumentComponent = io_cloudoffice_platform_cockpit_document_DocumentComponent(false))).access$200__VLio_cloudoffice_platform_cockpit_document_DocumentView_2Lio_cloudoffice_platform_cockpit_api_MapBuilder_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$2_val$view'], lcA2);
    }
    X_62: for (;;) { IF: if (gt <= 62) {
return;

    }
}}
};
c['handle__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_document_DocumentComponent$2fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_document_DocumentComponent$2', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_CallBack(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_document_DocumentComponent$2fillInstOf });
    io_cloudoffice_platform_cockpit_document_DocumentComponent$2fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/document/DocumentComponent$2';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_CallBack(false).constructor.$class
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_MapBuilder;
    var refs_io_cloudoffice_platform_cockpit_api_UtilValidate;
    var refs_io_cloudoffice_platform_cockpit_document_DocumentComponent;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$2_val$view'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_document_DocumentComponent$2 = io_cloudoffice_platform_cockpit_document_DocumentComponent$2;

vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration = link('io/cloudoffice/platform/cockpit/api/ComponentConfiguration', function(f) { vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration =  f; });
vm.io_cloudoffice_platform_cockpit_js_JSUIUtils = link('io/cloudoffice/platform/cockpit/js/JSUIUtils', function(f) { vm.io_cloudoffice_platform_cockpit_js_JSUIUtils =  f; });

function io_cloudoffice_platform_cockpit_document_DocumentConfiguration() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_document_DocumentConfiguration;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_TYPE'] = null;
  m = c._TYPE = function (v) {  if (arguments.length == 1) CLS['fld_TYPE'] = v; return CLS['fld_TYPE']; };
  m = c._proto = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_proto'] = v; return this['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_proto']; };
  m = c._prop_componentWidth = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_prop_componentWidth'] = v; return this['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_prop_componentWidth']; };
  m = c._prop_layoutColumnId = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_prop_layoutColumnId'] = v; return this['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_prop_layoutColumnId']; };
  m = c._prop_listComponentDefinition = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_prop_listComponentDefinition'] = v; return this['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_prop_listComponentDefinition']; };
  m = c._prop_actionMenuComponentDefinition = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_prop_actionMenuComponentDefinition'] = v; return this['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_prop_actionMenuComponentDefinition']; };
  m = c._prop_searchBoxComponentDefinition = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_prop_searchBoxComponentDefinition'] = v; return this['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_prop_searchBoxComponentDefinition']; };
    m = c.modelFor__Ljava_lang_Class_2 = function() {
return (refs_io_cloudoffice_platform_cockpit_document_DocumentComponent$DocumentManager || (refs_io_cloudoffice_platform_cockpit_document_DocumentComponent$DocumentManager = io_cloudoffice_platform_cockpit_document_DocumentComponent$DocumentManager(false))).constructor.$class;

};
    m.access = 10;
    m.cls = CLS;
    m = c.getComponentWidth__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_proto'],"componentWidth");
return lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_prop_componentWidth'];

};
c['getComponentWidth__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setComponentWidth__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_prop_componentWidth'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_prop_componentWidth'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_proto'],"componentWidth", lcA2, lcA1);
return;

    }
}}
};
c['setComponentWidth__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getLayoutColumnId__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_proto'],"layoutColumnId");
return lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_prop_layoutColumnId'];

};
c['getLayoutColumnId__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setLayoutColumnId__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_prop_layoutColumnId'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_prop_layoutColumnId'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_proto'],"layoutColumnId", lcA2, lcA1);
return;

    }
}}
};
c['setLayoutColumnId__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getListComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_proto'],"listComponentDefinition");
if ((lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_prop_listComponentDefinition']) !== (c._TYPE())) { gt = 40; break IF; }
var stA0 = lcA0;var stA1 = new vm.io_cloudoffice_platform_cockpit_api_ComponentDef;
(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor['cons__V'].call(stA1);
var stA2 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_proto']);
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, stA2);
stA0['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_prop_listComponentDefinition'] = stA1;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

if (lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_prop_listComponentDefinition'] !== null && !lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_prop_listComponentDefinition']['$instOf_io_cloudoffice_platform_cockpit_api_ComponentDef']) vm.java_lang_Class(false).castEx(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_prop_listComponentDefinition'], 'io.cloudoffice.platform.cockpit.api.ComponentDef');
return lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_prop_listComponentDefinition'];

    }
}}
};
c['getListComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setListComponentDefinition__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_prop_listComponentDefinition'];
if ((lcA2) !== (lcA1)) { gt = 18; break IF; }
return;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_prop_listComponentDefinition'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_proto'],"listComponentDefinition", lcA2, lcA1);
return;

    }
}}
};
c['setListComponentDefinition__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getActionMenuComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_proto'],"actionMenuComponentDefinition");
if ((lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_prop_actionMenuComponentDefinition']) !== (c._TYPE())) { gt = 40; break IF; }
var stA0 = lcA0;var stA1 = new vm.io_cloudoffice_platform_cockpit_api_ComponentDef;
(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor['cons__V'].call(stA1);
var stA2 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_proto']);
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, stA2);
stA0['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_prop_actionMenuComponentDefinition'] = stA1;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

if (lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_prop_actionMenuComponentDefinition'] !== null && !lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_prop_actionMenuComponentDefinition']['$instOf_io_cloudoffice_platform_cockpit_api_ComponentDef']) vm.java_lang_Class(false).castEx(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_prop_actionMenuComponentDefinition'], 'io.cloudoffice.platform.cockpit.api.ComponentDef');
return lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_prop_actionMenuComponentDefinition'];

    }
}}
};
c['getActionMenuComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setActionMenuComponentDefinition__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_prop_actionMenuComponentDefinition'];
if ((lcA2) !== (lcA1)) { gt = 18; break IF; }
return;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_prop_actionMenuComponentDefinition'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_proto'],"actionMenuComponentDefinition", lcA2, lcA1);
return;

    }
}}
};
c['setActionMenuComponentDefinition__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getSearchBoxComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_proto'],"searchBoxComponentDefinition");
if ((lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_prop_searchBoxComponentDefinition']) !== (c._TYPE())) { gt = 40; break IF; }
var stA0 = lcA0;var stA1 = new vm.io_cloudoffice_platform_cockpit_api_ComponentDef;
(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor['cons__V'].call(stA1);
var stA2 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_proto']);
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, stA2);
stA0['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_prop_searchBoxComponentDefinition'] = stA1;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

if (lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_prop_searchBoxComponentDefinition'] !== null && !lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_prop_searchBoxComponentDefinition']['$instOf_io_cloudoffice_platform_cockpit_api_ComponentDef']) vm.java_lang_Class(false).castEx(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_prop_searchBoxComponentDefinition'], 'io.cloudoffice.platform.cockpit.api.ComponentDef');
return lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_prop_searchBoxComponentDefinition'];

    }
}}
};
c['getSearchBoxComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setSearchBoxComponentDefinition__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_prop_searchBoxComponentDefinition'];
if ((lcA2) !== (lcA1)) { gt = 18; break IF; }
return;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_prop_searchBoxComponentDefinition'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_proto'],"searchBoxComponentDefinition", lcA2, lcA1);
return;

    }
}}
};
c['setSearchBoxComponentDefinition__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.createProto__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2(c._TYPE(),lcA0, lcA1);
stA0['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_proto'] = stA1;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = (refs_net_java_html_BrwsrCtx || (refs_net_java_html_BrwsrCtx = vm.net_java_html_BrwsrCtx(false)))['findDefault__Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'](c.constructor.$class);
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, stA1);
lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_prop_listComponentDefinition'] = c._TYPE();
lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_prop_actionMenuComponentDefinition'] = c._TYPE();
lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_prop_searchBoxComponentDefinition'] = c._TYPE();
return;

};
CLS['cons__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLjava_lang_String_2Ljava_lang_String_2Lio_cloudoffice_platform_cockpit_api_ComponentDef_2Lio_cloudoffice_platform_cockpit_api_ComponentDef_2Lio_cloudoffice_platform_cockpit_api_ComponentDef_2 = function(lcA1, lcA2, lcA3, lcA4, lcA5) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = (refs_net_java_html_BrwsrCtx || (refs_net_java_html_BrwsrCtx = vm.net_java_html_BrwsrCtx(false)))['findDefault__Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'](c.constructor.$class);
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, stA1);
lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_prop_componentWidth'] = lcA1;
lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_prop_layoutColumnId'] = lcA2;
lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_prop_listComponentDefinition'] = lcA3;
lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_prop_actionMenuComponentDefinition'] = lcA4;
lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_prop_searchBoxComponentDefinition'] = lcA5;
return;

};
CLS['cons__VLjava_lang_String_2Ljava_lang_String_2Lio_cloudoffice_platform_cockpit_api_ComponentDef_2Lio_cloudoffice_platform_cockpit_api_ComponentDef_2Lio_cloudoffice_platform_cockpit_api_ComponentDef_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 5);
var lcA3 = stA0;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_proto'];var stA1 = lcA2;var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, 5);
Array.at(stA2, 0, "componentWidth");
Array.at(stA2, 1, "layoutColumnId");
Array.at(stA2, 2, "listComponentDefinition");
Array.at(stA2, 3, "actionMenuComponentDefinition");
Array.at(stA2, 4, "searchBoxComponentDefinition");
invoker.extract__VLjava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Object_2(stA0,stA1, stA2, lcA3);
if ((lcA3[0] || Array.at(lcA3, 0)) !== null && !(lcA3[0] || Array.at(lcA3, 0))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[0] || Array.at(lcA3, 0)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_prop_componentWidth'] = (lcA3[0] || Array.at(lcA3, 0));
if ((lcA3[1] || Array.at(lcA3, 1)) !== null && !(lcA3[1] || Array.at(lcA3, 1))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[1] || Array.at(lcA3, 1)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_prop_layoutColumnId'] = (lcA3[1] || Array.at(lcA3, 1));
var stA0 = lcA0;var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_proto'],(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor.$class, (lcA3[2] || Array.at(lcA3, 2)));
stA0['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_prop_listComponentDefinition'] = stA1;
var stA0 = lcA0;var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_proto'],(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor.$class, (lcA3[3] || Array.at(lcA3, 3)));
stA0['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_prop_actionMenuComponentDefinition'] = stA1;
var stA0 = lcA0;var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_proto'],(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor.$class, (lcA3[4] || Array.at(lcA3, 4)));
stA0['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_prop_searchBoxComponentDefinition'] = stA1;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.useAsArray___3Ljava_lang_Object_2Ljava_lang_Object_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](lcA0, 1, vm.java_lang_Object);
if ((stI0) == 0) { gt = 17; break IF; }
if (lcA0 !== null && !Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](lcA0, 1, vm.java_lang_Object)) vm.java_lang_Class(false).castEx(lcA0, '');
if (lcA0 !== null && !Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](lcA0, 1, vm.java_lang_Object)) vm.java_lang_Class(false).castEx(lcA0, '');
var stA0 = lcA0;{ gt = 36; break IF; }
    }
    X_17: for (;;) { IF: if (gt <= 17) {

if ((lcA0) !== null) { gt = 28; break IF; }
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 0);
{ gt = 36; break IF; }
    }
    X_28: for (;;) { IF: if (gt <= 28) {

var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 1);
Array.at(stA0, 0, lcA0);
    }
    X_36: for (;;) { IF: if (gt <= 36) {
return stA0;

    }
}}}}
};
    m.access = 10;
    m.cls = CLS;
    m = c.toString__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var lcA1 = stA0;
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(123));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"componentWidth");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getComponentWidth__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"layoutColumnId");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getLayoutColumnId__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"listComponentDefinition");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_prop_listComponentDefinition']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"actionMenuComponentDefinition");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_prop_actionMenuComponentDefinition']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"searchBoxComponentDefinition");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_prop_searchBoxComponentDefinition']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(125));
var stA0 = invoker.toString__Ljava_lang_String_2(lcA1);
return stA0;

};
c['toString__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Lio_cloudoffice_platform_cockpit_document_DocumentConfiguration_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_proto']);
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_document_DocumentConfiguration_2Lnet_java_html_BrwsrCtx_2.call(stA0, stA1);
return stA0;

};
c['clone__Lio_cloudoffice_platform_cockpit_document_DocumentConfiguration_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Lio_cloudoffice_platform_cockpit_document_DocumentConfiguration_2Lnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
var stA0 = new io_cloudoffice_platform_cockpit_document_DocumentConfiguration;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, lcA1);
var lcA2 = stA0;
var stA0 = lcA2;var stA1 = lcA0.getComponentWidth__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_prop_componentWidth'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getLayoutColumnId__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_prop_layoutColumnId'] = stA1;
var stA0 = lcA2;if ((lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_prop_listComponentDefinition']) !== null) { gt = 37; break IF; }
var stA1 = null;{ gt = 61; break IF; }
    }
    X_37: for (;;) { IF: if (gt <= 37) {

if ((lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_prop_listComponentDefinition']) !== (c._TYPE())) { gt = 53; break IF; }
var stA1 = c._TYPE();{ gt = 61; break IF; }
    }
    X_53: for (;;) { IF: if (gt <= 53) {

var stA1 = lcA0.getListComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, lcA1);
    }
    X_61: for (;;) { IF: if (gt <= 61) {
stA0['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_prop_listComponentDefinition'] = stA1;
var stA0 = lcA2;if ((lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_prop_actionMenuComponentDefinition']) !== null) { gt = 76; break IF; }
var stA1 = null;{ gt = 100; break IF; }
    }
    X_76: for (;;) { IF: if (gt <= 76) {

if ((lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_prop_actionMenuComponentDefinition']) !== (c._TYPE())) { gt = 92; break IF; }
var stA1 = c._TYPE();{ gt = 100; break IF; }
    }
    X_92: for (;;) { IF: if (gt <= 92) {

var stA1 = lcA0.getActionMenuComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, lcA1);
    }
    X_100: for (;;) { IF: if (gt <= 100) {
stA0['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_prop_actionMenuComponentDefinition'] = stA1;
var stA0 = lcA2;if ((lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_prop_searchBoxComponentDefinition']) !== null) { gt = 115; break IF; }
var stA1 = null;{ gt = 139; break IF; }
    }
    X_115: for (;;) { IF: if (gt <= 115) {

if ((lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_prop_searchBoxComponentDefinition']) !== (c._TYPE())) { gt = 131; break IF; }
var stA1 = c._TYPE();{ gt = 139; break IF; }
    }
    X_131: for (;;) { IF: if (gt <= 131) {

var stA1 = lcA0.getSearchBoxComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, lcA1);
    }
    X_139: for (;;) { IF: if (gt <= 139) {
stA0['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_prop_searchBoxComponentDefinition'] = stA1;
return lcA2;

    }
}}}}}}}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.applyBindings__Lio_cloudoffice_platform_cockpit_document_DocumentConfiguration_2 = function() {
  var  lcA0 = this;
invoker.applyBindings__V(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_proto']);
return lcA0;

};
c['applyBindings__Lio_cloudoffice_platform_cockpit_document_DocumentConfiguration_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.equals__ZLjava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((lcA1) !== (lcA0)) { gt = 7; break IF; }
return 1;
    }
    X_7: for (;;) { IF: if (gt <= 7) {

var stI0 = lcA1 != null && lcA1['$instOf_io_cloudoffice_platform_cockpit_document_DocumentConfiguration'] ? 1 : 0;
if ((stI0) != 0) { gt = 16; break IF; }
return 0;
    }
    X_16: for (;;) { IF: if (gt <= 16) {

if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_document_DocumentConfiguration']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.document.DocumentConfiguration');
var lcA2 = lcA1;
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_prop_componentWidth'], lcA2['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_prop_componentWidth']);
if ((stI0) != 0) { gt = 40; break IF; }
return 0;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_prop_layoutColumnId'], lcA2['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_prop_layoutColumnId']);
if ((stI0) != 0) { gt = 59; break IF; }
return 0;
    }
    X_59: for (;;) { IF: if (gt <= 59) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_prop_listComponentDefinition']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_prop_listComponentDefinition']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 86; break IF; }
return 0;
    }
    X_86: for (;;) { IF: if (gt <= 86) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_prop_actionMenuComponentDefinition']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_prop_actionMenuComponentDefinition']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 113; break IF; }
return 0;
    }
    X_113: for (;;) { IF: if (gt <= 113) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_prop_searchBoxComponentDefinition']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_prop_searchBoxComponentDefinition']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 140; break IF; }
return 0;
    }
    X_140: for (;;) { IF: if (gt <= 140) {

return 1;

    }
}}}}}}}}
};
c['equals__ZLjava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.hashCode__I = function() {
  var  lcA0 = this;
var stA0 = invoker.getName__Ljava_lang_String_2(c.constructor.$class);
var stI0 = invoker.hashCode__I(stA0);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_prop_componentWidth'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_prop_layoutColumnId'], lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_prop_listComponentDefinition']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_prop_actionMenuComponentDefinition']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_prop_searchBoxComponentDefinition']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
return lcI1;

};
c['hashCode__I'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((lcA1) === (lcA0)) { gt = 12; break IF; }
if ((lcA1) !== (c._TYPE())) { gt = 16; break IF; }
    }
    X_12: for (;;) { IF: if (gt <= 12) {

var stA0 = null;{ gt = 17; break IF; }
    }
    X_16: for (;;) { IF: if (gt <= 16) {

var stA0 = lcA1;    }
    X_17: for (;;) { IF: if (gt <= 17) {
return stA0;

    }
}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.clone__Ljava_lang_Object_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0.clone__Lio_cloudoffice_platform_cockpit_document_DocumentConfiguration_2();
return stA0;

};
c['clone__Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.access$100__Lio_cloudoffice_platform_cockpit_document_DocumentConfiguration$Html4JavaType_2 = function() {
return c._TYPE();

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_document_DocumentConfiguration_2 = function(lcA0) {
return lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_proto'];

};
    m.access = 4104;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_document_DocumentConfiguration$1_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2.call(lcA0, lcA1, lcA2);
return;

};
    m.access = 4096;
    m.cls = CLS;
    m = c.access$400__Lio_cloudoffice_platform_cockpit_document_DocumentConfiguration_2Lio_cloudoffice_platform_cockpit_document_DocumentConfiguration_2Lnet_java_html_BrwsrCtx_2 = function(lcA0, lcA1) {
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_document_DocumentConfiguration_2Lnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
return stA0;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new io_cloudoffice_platform_cockpit_document_DocumentConfiguration$Html4JavaType;
(refs_io_cloudoffice_platform_cockpit_document_DocumentConfiguration$Html4JavaType || (refs_io_cloudoffice_platform_cockpit_document_DocumentConfiguration$Html4JavaType = io_cloudoffice_platform_cockpit_document_DocumentConfiguration$Html4JavaType(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_document_DocumentConfiguration$1_2.call(stA0, null);
c._TYPE(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_document_DocumentConfigurationfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_document_DocumentConfiguration', { value : true });
      vm.java_lang_Cloneable(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_document_DocumentConfigurationfillInstOf });
    io_cloudoffice_platform_cockpit_document_DocumentConfigurationfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/document/DocumentConfiguration';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.java_lang_Cloneable(false).constructor.$class
    ]; };
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_io_cloudoffice_platform_cockpit_document_DocumentComponent$DocumentManager;
    var refs_io_cloudoffice_platform_cockpit_api_ComponentDef;
    var refs_net_java_html_json_Models;
    var refs_net_java_html_BrwsrCtx;
    var refs_java_lang_StringBuilder;
    var refs_io_cloudoffice_platform_cockpit_document_DocumentConfiguration$Html4JavaType;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_proto'] = null;
    this['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_prop_componentWidth'] = null;
    this['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_prop_layoutColumnId'] = null;
    this['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_prop_listComponentDefinition'] = null;
    this['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_prop_actionMenuComponentDefinition'] = null;
    this['fld_io_cloudoffice_platform_cockpit_document_DocumentConfiguration_prop_searchBoxComponentDefinition'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_document_DocumentConfiguration = registerClass(exports,'io_cloudoffice_platform_cockpit_document_DocumentConfiguration',io_cloudoffice_platform_cockpit_document_DocumentConfiguration);


function io_cloudoffice_platform_cockpit_document_DocumentConfiguration$Html4JavaType() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_document_DocumentConfiguration$Html4JavaType;
  if (!CLS.$class) {
    var pp = vm.org_netbeans_html_json_spi_Proto$Type(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_org_netbeans_html_json_spi_Proto$Type || (refs_org_netbeans_html_json_spi_Proto$Type = vm.org_netbeans_html_json_spi_Proto$Type(false))).constructor['cons__VLjava_lang_Class_2Ljava_lang_Class_2II'].call(lcA0, (refs_io_cloudoffice_platform_cockpit_document_DocumentConfiguration || (refs_io_cloudoffice_platform_cockpit_document_DocumentConfiguration = io_cloudoffice_platform_cockpit_document_DocumentConfiguration(false))).constructor.$class, (refs_io_cloudoffice_platform_cockpit_document_DocumentComponent$DocumentManager || (refs_io_cloudoffice_platform_cockpit_document_DocumentComponent$DocumentManager = io_cloudoffice_platform_cockpit_document_DocumentComponent$DocumentManager(false))).constructor.$class, 5, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"componentWidth", 0, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"layoutColumnId", 1, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"listComponentDefinition", 2, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"actionMenuComponentDefinition", 3, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"searchBoxComponentDefinition", 4, 0, 0);
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.setValue__VLio_cloudoffice_platform_cockpit_document_DocumentConfiguration_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0:{ gt = 36; break IF; }
  case 1:{ gt = 53; break IF; }
  case 2:{ gt = 70; break IF; }
  case 3:{ gt = 87; break IF; }
  case 4:{ gt = 104; break IF; }
  default: { gt = 121; break IF; }
}
    }
    X_36: for (;;) { IF: if (gt <= 36) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_document_DocumentConfiguration || (refs_io_cloudoffice_platform_cockpit_document_DocumentConfiguration = io_cloudoffice_platform_cockpit_document_DocumentConfiguration(false))).access$100__Lio_cloudoffice_platform_cockpit_document_DocumentConfiguration$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setComponentWidth__VLjava_lang_String_2(stA1);
return;
    }
    X_53: for (;;) { IF: if (gt <= 53) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_document_DocumentConfiguration || (refs_io_cloudoffice_platform_cockpit_document_DocumentConfiguration = io_cloudoffice_platform_cockpit_document_DocumentConfiguration(false))).access$100__Lio_cloudoffice_platform_cockpit_document_DocumentConfiguration$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setLayoutColumnId__VLjava_lang_String_2(stA1);
return;
    }
    X_70: for (;;) { IF: if (gt <= 70) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_document_DocumentConfiguration || (refs_io_cloudoffice_platform_cockpit_document_DocumentConfiguration = io_cloudoffice_platform_cockpit_document_DocumentConfiguration(false))).access$100__Lio_cloudoffice_platform_cockpit_document_DocumentConfiguration$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_api_ComponentDef']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.api.ComponentDef');
stA0.setListComponentDefinition__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2(stA1);
return;
    }
    X_87: for (;;) { IF: if (gt <= 87) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_document_DocumentConfiguration || (refs_io_cloudoffice_platform_cockpit_document_DocumentConfiguration = io_cloudoffice_platform_cockpit_document_DocumentConfiguration(false))).access$100__Lio_cloudoffice_platform_cockpit_document_DocumentConfiguration$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_api_ComponentDef']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.api.ComponentDef');
stA0.setActionMenuComponentDefinition__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2(stA1);
return;
    }
    X_104: for (;;) { IF: if (gt <= 104) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_document_DocumentConfiguration || (refs_io_cloudoffice_platform_cockpit_document_DocumentConfiguration = io_cloudoffice_platform_cockpit_document_DocumentConfiguration(false))).access$100__Lio_cloudoffice_platform_cockpit_document_DocumentConfiguration$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_api_ComponentDef']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.api.ComponentDef');
stA0.setSearchBoxComponentDefinition__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2(stA1);
return;
    }
    X_121: for (;;) { IF: if (gt <= 121) {
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

    }
}}}}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_document_DocumentConfiguration_2I = function(lcA1, lcI2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0:{ gt = 36; break IF; }
  case 1:{ gt = 41; break IF; }
  case 2:{ gt = 46; break IF; }
  case 3:{ gt = 51; break IF; }
  case 4:{ gt = 56; break IF; }
  default: { gt = 61; break IF; }
}
    }
    X_36: for (;;) { IF: if (gt <= 36) {

var stA0 = lcA1.getComponentWidth__Ljava_lang_String_2();
return stA0;
    }
    X_41: for (;;) { IF: if (gt <= 41) {

var stA0 = lcA1.getLayoutColumnId__Ljava_lang_String_2();
return stA0;
    }
    X_46: for (;;) { IF: if (gt <= 46) {

var stA0 = lcA1.getListComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
return stA0;
    }
    X_51: for (;;) { IF: if (gt <= 51) {

var stA0 = lcA1.getActionMenuComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
return stA0;
    }
    X_56: for (;;) { IF: if (gt <= 56) {

var stA0 = lcA1.getSearchBoxComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
return stA0;
    }
    X_61: for (;;) { IF: if (gt <= 61) {
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

    }
}}}}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.call__VLio_cloudoffice_platform_cockpit_document_DocumentConfiguration_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_document_DocumentConfiguration']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.document.DocumentConfiguration');
var stA0 = (refs_io_cloudoffice_platform_cockpit_document_DocumentConfiguration || (refs_io_cloudoffice_platform_cockpit_document_DocumentConfiguration = io_cloudoffice_platform_cockpit_document_DocumentConfiguration(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_document_DocumentConfiguration_2(lcA1);
return stA0;

};
c['protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.onChange__VLio_cloudoffice_platform_cockpit_document_DocumentConfiguration_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLio_cloudoffice_platform_cockpit_document_DocumentConfiguration_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
var stA1 = stA0;var stA2 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"index: ");
var stA2 = invoker.append__Ljava_lang_StringBuilder_2I(stA2,lcI2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2," type: ");
var stA2 = invoker.append__Ljava_lang_StringBuilder_2I(stA2,lcI3);
var stA2 = invoker.toString__Ljava_lang_String_2(stA2);
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__VLjava_lang_String_2'].call(stA1, stA2);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.read__Lio_cloudoffice_platform_cockpit_document_DocumentConfiguration_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = new io_cloudoffice_platform_cockpit_document_DocumentConfiguration;
(refs_io_cloudoffice_platform_cockpit_document_DocumentConfiguration || (refs_io_cloudoffice_platform_cockpit_document_DocumentConfiguration = io_cloudoffice_platform_cockpit_document_DocumentConfiguration(false))).constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_document_DocumentConfiguration$1_2.call(stA0, lcA1, lcA2, null);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.cloneTo__Lio_cloudoffice_platform_cockpit_document_DocumentConfiguration_2Lio_cloudoffice_platform_cockpit_document_DocumentConfiguration_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = (refs_io_cloudoffice_platform_cockpit_document_DocumentConfiguration || (refs_io_cloudoffice_platform_cockpit_document_DocumentConfiguration = io_cloudoffice_platform_cockpit_document_DocumentConfiguration(false))).access$400__Lio_cloudoffice_platform_cockpit_document_DocumentConfiguration_2Lio_cloudoffice_platform_cockpit_document_DocumentConfiguration_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_document_DocumentConfiguration']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.document.DocumentConfiguration');
lcA0.onMessage__VLio_cloudoffice_platform_cockpit_document_DocumentConfiguration_2IILjava_lang_Object_2_3Ljava_lang_Object_2(lcA1, lcI2, lcI3, lcA4, lcA5);
return;

};
c['onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.onChange__VLjava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_document_DocumentConfiguration']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.document.DocumentConfiguration');
lcA0.onChange__VLio_cloudoffice_platform_cockpit_document_DocumentConfiguration_2I(lcA1, lcI2);
return;

};
c['onChange__VLjava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = lcA0.read__Lio_cloudoffice_platform_cockpit_document_DocumentConfiguration_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2(lcA1, lcA2);
return stA0;

};
c['read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_document_DocumentConfiguration']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.document.DocumentConfiguration');
var stA0 = lcA0.cloneTo__Lio_cloudoffice_platform_cockpit_document_DocumentConfiguration_2Lio_cloudoffice_platform_cockpit_document_DocumentConfiguration_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
c['cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_document_DocumentConfiguration']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.document.DocumentConfiguration');
lcA0.call__VLio_cloudoffice_platform_cockpit_document_DocumentConfiguration_2ILjava_lang_Object_2Ljava_lang_Object_2(lcA1, lcI2, lcA3, lcA4);
return;

};
c['call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Ljava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_document_DocumentConfiguration']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.document.DocumentConfiguration');
var stA0 = lcA0.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_document_DocumentConfiguration_2I(lcA1, lcI2);
return stA0;

};
c['getValue__Ljava_lang_Object_2Ljava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.setValue__VLjava_lang_Object_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_document_DocumentConfiguration']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.document.DocumentConfiguration');
lcA0.setValue__VLio_cloudoffice_platform_cockpit_document_DocumentConfiguration_2ILjava_lang_Object_2(lcA1, lcI2, lcA3);
return;

};
c['setValue__VLjava_lang_Object_2ILjava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_document_DocumentConfiguration$1_2 = function(lcA1) {
  var  lcA0 = this;
c.constructor.cons__V.call(lcA0);
return;

};
    m.access = 4096;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_document_DocumentConfiguration$Html4JavaTypefillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_document_DocumentConfiguration$Html4JavaType', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_document_DocumentConfiguration$Html4JavaTypefillInstOf });
    io_cloudoffice_platform_cockpit_document_DocumentConfiguration$Html4JavaTypefillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/document/DocumentConfiguration$Html4JavaType';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_document_DocumentConfiguration;
    var refs_io_cloudoffice_platform_cockpit_document_DocumentComponent$DocumentManager;
    var refs_org_netbeans_html_json_spi_Proto$Type;
    var refs_java_lang_String;
    var refs_io_cloudoffice_platform_cockpit_api_ComponentDef;
    var refs_java_lang_UnsupportedOperationException;
    var refs_java_lang_StringBuilder;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_document_DocumentConfiguration$Html4JavaType = io_cloudoffice_platform_cockpit_document_DocumentConfiguration$Html4JavaType;

vm.net_java_html_json_Models = link('net/java/html/json/Models', function(f) { vm.net_java_html_json_Models =  f; });
vm.io_cloudoffice_platform_cockpit_api_ComponentDef = link('io/cloudoffice/platform/cockpit/api/ComponentDef', function(f) { vm.io_cloudoffice_platform_cockpit_api_ComponentDef =  f; });

function io_cloudoffice_platform_cockpit_document_DocumentComponent$DocumentManager() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_document_DocumentComponent$DocumentManager;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
return;

};
CLS['cons__V'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_document_DocumentComponent$DocumentManagerfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_document_DocumentComponent$DocumentManager', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_document_DocumentComponent$DocumentManagerfillInstOf });
    io_cloudoffice_platform_cockpit_document_DocumentComponent$DocumentManagerfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/document/DocumentComponent$DocumentManager';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 33;
    CLS.$class.cnstr = CLS;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_document_DocumentComponent$DocumentManager = registerClass(exports,'io_cloudoffice_platform_cockpit_document_DocumentComponent$DocumentManager',io_cloudoffice_platform_cockpit_document_DocumentComponent$DocumentManager);


function io_cloudoffice_platform_cockpit_document_DocumentView() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_document_DocumentView;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_TYPE'] = null;
  m = c._TYPE = function (v) {  if (arguments.length == 1) CLS['fld_TYPE'] = v; return CLS['fld_TYPE']; };
  m = c._proto = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto'] = v; return this['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto']; };
  m = c._prop_instance = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_instance'] = v; return this['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_instance']; };
  m = c._prop_designerMode = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_designerMode'] = v; return this['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_designerMode']; };
  m = c._prop_configuration = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_configuration'] = v; return this['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_configuration']; };
  m = c._prop_viewMode = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_viewMode'] = v; return this['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_viewMode']; };
  m = c._prop_fullViewEnabled = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_fullViewEnabled'] = v; return this['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_fullViewEnabled']; };
  m = c._prop_visible = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_visible'] = v; return this['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_visible']; };
  m = c._prop_layoutColumnId = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_layoutColumnId'] = v; return this['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_layoutColumnId']; };
  m = c._prop_itemId = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_itemId'] = v; return this['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_itemId']; };
  m = c._prop_itemName = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_itemName'] = v; return this['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_itemName']; };
  m = c._prop_fileTypeIcon = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_fileTypeIcon'] = v; return this['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_fileTypeIcon']; };
  m = c._prop_fileTypeIconColor = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_fileTypeIconColor'] = v; return this['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_fileTypeIconColor']; };
  m = c._prop_fileName = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_fileName'] = v; return this['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_fileName']; };
  m = c._prop_fileContent = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_fileContent'] = v; return this['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_fileContent']; };
  m = c._prop_fileType = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_fileType'] = v; return this['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_fileType']; };
  m = c._prop_fileSize = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_fileSize'] = v; return this['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_fileSize']; };
  m = c._prop_isImage = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_isImage'] = v; return this['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_isImage']; };
  m = c._prop_viewerHeight = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_viewerHeight'] = v; return this['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_viewerHeight']; };
  m = c._prop_viewerWidth = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_viewerWidth'] = v; return this['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_viewerWidth']; };
  m = c._prop_dataURL = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_dataURL'] = v; return this['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_dataURL']; };
  m = c._prop_title = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_title'] = v; return this['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_title']; };
  m = c._prop_version = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_version'] = v; return this['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_version']; };
  m = c._prop_versionList = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_versionList'] = v; return this['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_versionList']; };
  m = c._prop_formatList = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_formatList'] = v; return this['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_formatList']; };
  m = c._prop_relatedItemList = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_relatedItemList'] = v; return this['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_relatedItemList']; };
  m = c._prop_sharedItemList = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_sharedItemList'] = v; return this['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_sharedItemList']; };
  m = c._prop_fileData = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_fileData'] = v; return this['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_fileData']; };
  m = c._prop_createdDate = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_createdDate'] = v; return this['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_createdDate']; };
  m = c._prop_createdBy = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_createdBy'] = v; return this['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_createdBy']; };
  m = c._prop_lastModifiedDate = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_lastModifiedDate'] = v; return this['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_lastModifiedDate']; };
  m = c._prop_lastModifiedBy = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_lastModifiedBy'] = v; return this['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_lastModifiedBy']; };
  m = c._prop_loader = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_loader'] = v; return this['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_loader']; };
  m = c._prop_hasOwnerPermission = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_hasOwnerPermission'] = v; return this['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_hasOwnerPermission']; };
  m = c._prop_hasAdminPermission = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_hasAdminPermission'] = v; return this['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_hasAdminPermission']; };
  m = c._prop_hasWritePermission = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_hasWritePermission'] = v; return this['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_hasWritePermission']; };
  m = c._prop_hasReadPermission = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_hasReadPermission'] = v; return this['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_hasReadPermission']; };
    m = c.modelFor__Ljava_lang_Class_2 = function() {
return (refs_io_cloudoffice_platform_cockpit_document_DocumentComponent || (refs_io_cloudoffice_platform_cockpit_document_DocumentComponent = io_cloudoffice_platform_cockpit_document_DocumentComponent(false))).constructor.$class;

};
    m.access = 10;
    m.cls = CLS;
    m = c.isIsBrowserIE__Z = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
try {
invoker.acquireLock__V(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto']);
var stI0 = (refs_io_cloudoffice_platform_cockpit_document_DocumentComponent || (refs_io_cloudoffice_platform_cockpit_document_DocumentComponent = io_cloudoffice_platform_cockpit_document_DocumentComponent(false))).isBrowserIE__Z();
var lcI1 = stI0;
} catch (e) {
var stA0 = e;{ gt = 20; break IF; }
}
invoker.releaseLock__V(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto']);
return lcI1;
    }
    X_20: for (;;) { IF: if (gt <= 20) {
var lcA2 = stA0;
invoker.releaseLock__V(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto']);
{ var stA0 = lcA2; throw lcA2; }

    }
}}
};
c['isIsBrowserIE__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getInstance__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto'],"instance");
return lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_instance'];

};
c['getInstance__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setInstance__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_instance'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_instance'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto'],"instance", lcA2, lcA1);
return;

    }
}}
};
c['setInstance__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isDesignerMode__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto'],"designerMode");
return lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_designerMode'];

};
c['isDesignerMode__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setDesignerMode__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_designerMode']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_designerMode'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto'];var stA1 = "designerMode";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2, stA3);
return;

    }
}}
};
c['setDesignerMode__VZ'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getConfiguration__Lio_cloudoffice_platform_cockpit_document_DocumentConfiguration_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto'],"configuration");
if ((lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_configuration']) !== (c._TYPE())) { gt = 40; break IF; }
var stA0 = lcA0;var stA1 = new io_cloudoffice_platform_cockpit_document_DocumentConfiguration;
(refs_io_cloudoffice_platform_cockpit_document_DocumentConfiguration || (refs_io_cloudoffice_platform_cockpit_document_DocumentConfiguration = io_cloudoffice_platform_cockpit_document_DocumentConfiguration(false))).constructor.cons__V.call(stA1);
var stA2 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto']);
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, stA2);
stA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_configuration'] = stA1;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

if (lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_configuration'] !== null && !lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_configuration']['$instOf_io_cloudoffice_platform_cockpit_document_DocumentConfiguration']) vm.java_lang_Class(false).castEx(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_configuration'], 'io.cloudoffice.platform.cockpit.document.DocumentConfiguration');
return lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_configuration'];

    }
}}
};
c['getConfiguration__Lio_cloudoffice_platform_cockpit_document_DocumentConfiguration_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setConfiguration__VLio_cloudoffice_platform_cockpit_document_DocumentConfiguration_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_configuration'];
if ((lcA2) !== (lcA1)) { gt = 18; break IF; }
return;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_configuration'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto'],"configuration", lcA2, lcA1);
return;

    }
}}
};
c['setConfiguration__VLio_cloudoffice_platform_cockpit_document_DocumentConfiguration_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getViewMode__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto'],"viewMode");
return lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_viewMode'];

};
c['getViewMode__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setViewMode__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_viewMode'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_viewMode'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto'],"viewMode", lcA2, lcA1);
return;

    }
}}
};
c['setViewMode__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isFullViewEnabled__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto'],"fullViewEnabled");
return lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_fullViewEnabled'];

};
c['isFullViewEnabled__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setFullViewEnabled__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_fullViewEnabled']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_fullViewEnabled'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto'];var stA1 = "fullViewEnabled";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2, stA3);
return;

    }
}}
};
c['setFullViewEnabled__VZ'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isVisible__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto'],"visible");
return lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_visible'];

};
c['isVisible__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setVisible__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_visible']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_visible'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto'];var stA1 = "visible";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2, stA3);
return;

    }
}}
};
c['setVisible__VZ'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getLayoutColumnId__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto'],"layoutColumnId");
return lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_layoutColumnId'];

};
c['getLayoutColumnId__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setLayoutColumnId__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_layoutColumnId'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_layoutColumnId'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto'],"layoutColumnId", lcA2, lcA1);
return;

    }
}}
};
c['setLayoutColumnId__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getItemId__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto'],"itemId");
return lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_itemId'];

};
c['getItemId__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setItemId__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_itemId'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_itemId'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto'],"itemId", lcA2, lcA1);
return;

    }
}}
};
c['setItemId__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getItemName__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto'],"itemName");
return lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_itemName'];

};
c['getItemName__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setItemName__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_itemName'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_itemName'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto'],"itemName", lcA2, lcA1);
return;

    }
}}
};
c['setItemName__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getFileTypeIcon__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto'],"fileTypeIcon");
return lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_fileTypeIcon'];

};
c['getFileTypeIcon__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setFileTypeIcon__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_fileTypeIcon'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_fileTypeIcon'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto'],"fileTypeIcon", lcA2, lcA1);
return;

    }
}}
};
c['setFileTypeIcon__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getFileTypeIconColor__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto'],"fileTypeIconColor");
return lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_fileTypeIconColor'];

};
c['getFileTypeIconColor__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setFileTypeIconColor__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_fileTypeIconColor'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_fileTypeIconColor'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto'],"fileTypeIconColor", lcA2, lcA1);
return;

    }
}}
};
c['setFileTypeIconColor__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getFileName__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto'],"fileName");
return lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_fileName'];

};
c['getFileName__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setFileName__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_fileName'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_fileName'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto'],"fileName", lcA2, lcA1);
return;

    }
}}
};
c['setFileName__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getFileContent__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto'],"fileContent");
return lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_fileContent'];

};
c['getFileContent__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setFileContent__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_fileContent'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_fileContent'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto'],"fileContent", lcA2, lcA1);
return;

    }
}}
};
c['setFileContent__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getFileType__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto'],"fileType");
return lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_fileType'];

};
c['getFileType__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setFileType__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_fileType'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_fileType'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto'],"fileType", lcA2, lcA1);
return;

    }
}}
};
c['setFileType__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getFileSize__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto'],"fileSize");
return lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_fileSize'];

};
c['getFileSize__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setFileSize__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_fileSize'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_fileSize'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto'],"fileSize", lcA2, lcA1);
return;

    }
}}
};
c['setFileSize__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isIsImage__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto'],"isImage");
return lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_isImage'];

};
c['isIsImage__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setIsImage__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_isImage']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_isImage'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto'];var stA1 = "isImage";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2, stA3);
return;

    }
}}
};
c['setIsImage__VZ'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getViewerHeight__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto'],"viewerHeight");
return lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_viewerHeight'];

};
c['getViewerHeight__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setViewerHeight__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_viewerHeight'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_viewerHeight'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto'],"viewerHeight", lcA2, lcA1);
return;

    }
}}
};
c['setViewerHeight__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getViewerWidth__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto'],"viewerWidth");
return lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_viewerWidth'];

};
c['getViewerWidth__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setViewerWidth__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_viewerWidth'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_viewerWidth'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto'],"viewerWidth", lcA2, lcA1);
return;

    }
}}
};
c['setViewerWidth__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getDataURL__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto'],"dataURL");
return lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_dataURL'];

};
c['getDataURL__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setDataURL__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_dataURL'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_dataURL'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto'],"dataURL", lcA2, lcA1);
return;

    }
}}
};
c['setDataURL__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getTitle__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto'],"title");
return lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_title'];

};
c['getTitle__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setTitle__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_title'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_title'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto'],"title", lcA2, lcA1);
return;

    }
}}
};
c['setTitle__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getVersion__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto'],"version");
return lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_version'];

};
c['getVersion__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setVersion__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_version'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_version'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto'],"version", lcA2, lcA1);
return;

    }
}}
};
c['setVersion__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getVersionList__Ljava_util_List_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto'],"versionList");
return lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_versionList'];

};
c['getVersionList__Ljava_util_List_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getFormatList__Ljava_util_List_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto'],"formatList");
return lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_formatList'];

};
c['getFormatList__Ljava_util_List_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getRelatedItemList__Ljava_util_List_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto'],"relatedItemList");
return lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_relatedItemList'];

};
c['getRelatedItemList__Ljava_util_List_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getSharedItemList__Ljava_util_List_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto'],"sharedItemList");
return lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_sharedItemList'];

};
c['getSharedItemList__Ljava_util_List_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getFileData__Lio_cloudoffice_platform_cockpit_document_FileView_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto'],"fileData");
if ((lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_fileData']) !== (c._TYPE())) { gt = 41; break IF; }
var stA0 = lcA0;var stA1 = new io_cloudoffice_platform_cockpit_document_FileView;
(refs_io_cloudoffice_platform_cockpit_document_FileView || (refs_io_cloudoffice_platform_cockpit_document_FileView = io_cloudoffice_platform_cockpit_document_FileView(false))).constructor.cons__V.call(stA1);
var stA2 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto']);
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, stA2);
stA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_fileData'] = stA1;
    }
    X_41: for (;;) { IF: if (gt <= 41) {

if (lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_fileData'] !== null && !lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_fileData']['$instOf_io_cloudoffice_platform_cockpit_document_FileView']) vm.java_lang_Class(false).castEx(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_fileData'], 'io.cloudoffice.platform.cockpit.document.FileView');
return lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_fileData'];

    }
}}
};
c['getFileData__Lio_cloudoffice_platform_cockpit_document_FileView_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setFileData__VLio_cloudoffice_platform_cockpit_document_FileView_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_fileData'];
if ((lcA2) !== (lcA1)) { gt = 18; break IF; }
return;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_fileData'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto'],"fileData", lcA2, lcA1);
return;

    }
}}
};
c['setFileData__VLio_cloudoffice_platform_cockpit_document_FileView_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getCreatedDate__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto'],"createdDate");
return lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_createdDate'];

};
c['getCreatedDate__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setCreatedDate__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_createdDate'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_createdDate'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto'],"createdDate", lcA2, lcA1);
return;

    }
}}
};
c['setCreatedDate__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getCreatedBy__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto'],"createdBy");
return lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_createdBy'];

};
c['getCreatedBy__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setCreatedBy__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_createdBy'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_createdBy'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto'],"createdBy", lcA2, lcA1);
return;

    }
}}
};
c['setCreatedBy__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getLastModifiedDate__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto'],"lastModifiedDate");
return lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_lastModifiedDate'];

};
c['getLastModifiedDate__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setLastModifiedDate__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_lastModifiedDate'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_lastModifiedDate'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto'],"lastModifiedDate", lcA2, lcA1);
return;

    }
}}
};
c['setLastModifiedDate__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getLastModifiedBy__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto'],"lastModifiedBy");
return lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_lastModifiedBy'];

};
c['getLastModifiedBy__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setLastModifiedBy__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_lastModifiedBy'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_lastModifiedBy'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto'],"lastModifiedBy", lcA2, lcA1);
return;

    }
}}
};
c['setLastModifiedBy__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getLoader__Lio_cloudoffice_platform_cockpit_api_HelperItemView_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto'],"loader");
if ((lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_loader']) !== (c._TYPE())) { gt = 41; break IF; }
var stA0 = lcA0;var stA1 = new vm.io_cloudoffice_platform_cockpit_api_HelperItemView;
(refs_io_cloudoffice_platform_cockpit_api_HelperItemView || (refs_io_cloudoffice_platform_cockpit_api_HelperItemView = vm.io_cloudoffice_platform_cockpit_api_HelperItemView(false))).constructor['cons__V'].call(stA1);
var stA2 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto']);
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, stA2);
stA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_loader'] = stA1;
    }
    X_41: for (;;) { IF: if (gt <= 41) {

if (lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_loader'] !== null && !lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_loader']['$instOf_io_cloudoffice_platform_cockpit_api_HelperItemView']) vm.java_lang_Class(false).castEx(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_loader'], 'io.cloudoffice.platform.cockpit.api.HelperItemView');
return lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_loader'];

    }
}}
};
c['getLoader__Lio_cloudoffice_platform_cockpit_api_HelperItemView_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setLoader__VLio_cloudoffice_platform_cockpit_api_HelperItemView_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_loader'];
if ((lcA2) !== (lcA1)) { gt = 18; break IF; }
return;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_loader'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto'],"loader", lcA2, lcA1);
return;

    }
}}
};
c['setLoader__VLio_cloudoffice_platform_cockpit_api_HelperItemView_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isHasOwnerPermission__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto'],"hasOwnerPermission");
return lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_hasOwnerPermission'];

};
c['isHasOwnerPermission__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setHasOwnerPermission__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_hasOwnerPermission']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_hasOwnerPermission'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto'];var stA1 = "hasOwnerPermission";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2, stA3);
return;

    }
}}
};
c['setHasOwnerPermission__VZ'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isHasAdminPermission__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto'],"hasAdminPermission");
return lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_hasAdminPermission'];

};
c['isHasAdminPermission__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setHasAdminPermission__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_hasAdminPermission']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_hasAdminPermission'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto'];var stA1 = "hasAdminPermission";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2, stA3);
return;

    }
}}
};
c['setHasAdminPermission__VZ'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isHasWritePermission__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto'],"hasWritePermission");
return lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_hasWritePermission'];

};
c['isHasWritePermission__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setHasWritePermission__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_hasWritePermission']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_hasWritePermission'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto'];var stA1 = "hasWritePermission";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2, stA3);
return;

    }
}}
};
c['setHasWritePermission__VZ'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isHasReadPermission__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto'],"hasReadPermission");
return lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_hasReadPermission'];

};
c['isHasReadPermission__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setHasReadPermission__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_hasReadPermission']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_hasReadPermission'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto'];var stA1 = "hasReadPermission";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2, stA3);
return;

    }
}}
};
c['setHasReadPermission__VZ'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.createProto__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2(c._TYPE(),lcA0, lcA1);
stA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto'] = stA1;
var stA0 = lcA0;var stA1 = lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto'];var stA2 = "versionList";var stI3 = -1;var stA4 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, 0);
var stA1 = invoker.createList__Ljava_util_List_2Ljava_lang_String_2I_3Ljava_lang_String_2(stA1,stA2, stI3, stA4);
stA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_versionList'] = stA1;
var stA0 = lcA0;var stA1 = lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto'];var stA2 = "formatList";var stI3 = -1;var stA4 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, 0);
var stA1 = invoker.createList__Ljava_util_List_2Ljava_lang_String_2I_3Ljava_lang_String_2(stA1,stA2, stI3, stA4);
stA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_formatList'] = stA1;
var stA0 = lcA0;var stA1 = lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto'];var stA2 = "relatedItemList";var stI3 = -1;var stA4 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, 0);
var stA1 = invoker.createList__Ljava_util_List_2Ljava_lang_String_2I_3Ljava_lang_String_2(stA1,stA2, stI3, stA4);
stA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_relatedItemList'] = stA1;
var stA0 = lcA0;var stA1 = lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto'];var stA2 = "sharedItemList";var stI3 = -1;var stA4 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, 0);
var stA1 = invoker.createList__Ljava_util_List_2Ljava_lang_String_2I_3Ljava_lang_String_2(stA1,stA2, stI3, stA4);
stA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_sharedItemList'] = stA1;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = (refs_net_java_html_BrwsrCtx || (refs_net_java_html_BrwsrCtx = vm.net_java_html_BrwsrCtx(false)))['findDefault__Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'](c.constructor.$class);
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, stA1);
lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_configuration'] = c._TYPE();
lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_fileData'] = c._TYPE();
lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_loader'] = c._TYPE();
return;

};
CLS['cons__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLjava_lang_String_2ZLio_cloudoffice_platform_cockpit_document_DocumentConfiguration_2Ljava_lang_String_2ZZLjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2ZLjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Lio_cloudoffice_platform_cockpit_document_FileView_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Lio_cloudoffice_platform_cockpit_api_HelperItemView_2ZZZZ_3Lio_cloudoffice_platform_cockpit_document_FileVersion_2 = function(lcA1, lcI2, lcA3, lcA4, lcI5, lcI6, lcA7, lcA8, lcA9, lcA10, lcA11, lcA12, lcA13, lcA14, lcA15, lcI16, lcA17, lcA18, lcA19, lcA20, lcA21, lcA22, lcA23, lcA24, lcA25, lcA26, lcA27, lcI28, lcI29, lcI30, lcI31, lcA32) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = (refs_net_java_html_BrwsrCtx || (refs_net_java_html_BrwsrCtx = vm.net_java_html_BrwsrCtx(false)))['findDefault__Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'](c.constructor.$class);
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, stA1);
lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_instance'] = lcA1;
lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_designerMode'] = lcI2;
lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_configuration'] = lcA3;
lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_viewMode'] = lcA4;
lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_fullViewEnabled'] = lcI5;
lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_visible'] = lcI6;
lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_layoutColumnId'] = lcA7;
lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_itemId'] = lcA8;
lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_itemName'] = lcA9;
lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_fileTypeIcon'] = lcA10;
lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_fileTypeIconColor'] = lcA11;
lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_fileName'] = lcA12;
lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_fileContent'] = lcA13;
lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_fileType'] = lcA14;
lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_fileSize'] = lcA15;
lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_isImage'] = lcI16;
lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_viewerHeight'] = lcA17;
lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_viewerWidth'] = lcA18;
lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_dataURL'] = lcA19;
lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_title'] = lcA20;
lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_version'] = lcA21;
lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_fileData'] = lcA22;
lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_createdDate'] = lcA23;
lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_createdBy'] = lcA24;
lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_lastModifiedDate'] = lcA25;
lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_lastModifiedBy'] = lcA26;
lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_loader'] = lcA27;
lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_hasOwnerPermission'] = lcI28;
lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_hasAdminPermission'] = lcI29;
lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_hasWritePermission'] = lcI30;
lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_hasReadPermission'] = lcI31;
invoker.initTo__VLjava_util_Collection_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto'],lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_versionList'], lcA32);
return;

};
CLS['cons__VLjava_lang_String_2ZLio_cloudoffice_platform_cockpit_document_DocumentConfiguration_2Ljava_lang_String_2ZZLjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2ZLjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Lio_cloudoffice_platform_cockpit_document_FileView_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Lio_cloudoffice_platform_cockpit_api_HelperItemView_2ZZZZ_3Lio_cloudoffice_platform_cockpit_document_FileVersion_2'] = m;

    m.access = 129;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, (35));
var lcA3 = stA0;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto'];var stA1 = lcA2;var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, (35));
Array.at(stA2, 0, "instance");
Array.at(stA2, 1, "designerMode");
Array.at(stA2, 2, "configuration");
Array.at(stA2, 3, "viewMode");
Array.at(stA2, 4, "fullViewEnabled");
Array.at(stA2, 5, "visible");
Array.at(stA2, (6), "layoutColumnId");
Array.at(stA2, (7), "itemId");
Array.at(stA2, (8), "itemName");
Array.at(stA2, (9), "fileTypeIcon");
Array.at(stA2, (10), "fileTypeIconColor");
Array.at(stA2, (11), "fileName");
Array.at(stA2, (12), "fileContent");
Array.at(stA2, (13), "fileType");
Array.at(stA2, (14), "fileSize");
Array.at(stA2, (15), "isImage");
Array.at(stA2, (16), "viewerHeight");
Array.at(stA2, (17), "viewerWidth");
Array.at(stA2, (18), "dataURL");
Array.at(stA2, (19), "title");
Array.at(stA2, (20), "version");
Array.at(stA2, (21), "versionList");
Array.at(stA2, (22), "formatList");
Array.at(stA2, (23), "relatedItemList");
Array.at(stA2, (24), "sharedItemList");
Array.at(stA2, (25), "fileData");
Array.at(stA2, (26), "createdDate");
Array.at(stA2, (27), "createdBy");
Array.at(stA2, (28), "lastModifiedDate");
Array.at(stA2, (29), "lastModifiedBy");
Array.at(stA2, (30), "loader");
Array.at(stA2, (31), "hasOwnerPermission");
Array.at(stA2, (32), "hasAdminPermission");
Array.at(stA2, (33), "hasWritePermission");
Array.at(stA2, (34), "hasReadPermission");
invoker.extract__VLjava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Object_2(stA0,stA1, stA2, lcA3);
if ((lcA3[0] || Array.at(lcA3, 0)) !== null && !(lcA3[0] || Array.at(lcA3, 0))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[0] || Array.at(lcA3, 0)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_instance'] = (lcA3[0] || Array.at(lcA3, 0));
var stA0 = lcA0;if (((lcA3[1] || Array.at(lcA3, 1))) !== null) { gt = 264; break IF; }
var stI1 = 0;{ gt = 276; break IF; }
    }
    X_264: for (;;) { IF: if (gt <= 264) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[1] || Array.at(lcA3, 1)));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_276: for (;;) { IF: if (gt <= 276) {
stA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_designerMode'] = stI1;
var stA0 = lcA0;var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto'],(refs_io_cloudoffice_platform_cockpit_document_DocumentConfiguration || (refs_io_cloudoffice_platform_cockpit_document_DocumentConfiguration = io_cloudoffice_platform_cockpit_document_DocumentConfiguration(false))).constructor.$class, (lcA3[2] || Array.at(lcA3, 2)));
stA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_configuration'] = stA1;
if ((lcA3[3] || Array.at(lcA3, 3)) !== null && !(lcA3[3] || Array.at(lcA3, 3))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[3] || Array.at(lcA3, 3)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_viewMode'] = (lcA3[3] || Array.at(lcA3, 3));
var stA0 = lcA0;if (((lcA3[4] || Array.at(lcA3, 4))) !== null) { gt = 316; break IF; }
var stI1 = 0;{ gt = 328; break IF; }
    }
    X_316: for (;;) { IF: if (gt <= 316) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[4] || Array.at(lcA3, 4)));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_328: for (;;) { IF: if (gt <= 328) {
stA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_fullViewEnabled'] = stI1;
var stA0 = lcA0;if (((lcA3[5] || Array.at(lcA3, 5))) !== null) { gt = 342; break IF; }
var stI1 = 0;{ gt = 354; break IF; }
    }
    X_342: for (;;) { IF: if (gt <= 342) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[5] || Array.at(lcA3, 5)));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_354: for (;;) { IF: if (gt <= 354) {
stA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_visible'] = stI1;
if ((lcA3[(6)] || Array.at(lcA3, (6))) !== null && !(lcA3[(6)] || Array.at(lcA3, (6)))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[(6)] || Array.at(lcA3, (6))), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_layoutColumnId'] = (lcA3[(6)] || Array.at(lcA3, (6)));
if ((lcA3[(7)] || Array.at(lcA3, (7))) !== null && !(lcA3[(7)] || Array.at(lcA3, (7)))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[(7)] || Array.at(lcA3, (7))), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_itemId'] = (lcA3[(7)] || Array.at(lcA3, (7)));
if ((lcA3[(8)] || Array.at(lcA3, (8))) !== null && !(lcA3[(8)] || Array.at(lcA3, (8)))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[(8)] || Array.at(lcA3, (8))), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_itemName'] = (lcA3[(8)] || Array.at(lcA3, (8)));
if ((lcA3[(9)] || Array.at(lcA3, (9))) !== null && !(lcA3[(9)] || Array.at(lcA3, (9)))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[(9)] || Array.at(lcA3, (9))), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_fileTypeIcon'] = (lcA3[(9)] || Array.at(lcA3, (9)));
if ((lcA3[(10)] || Array.at(lcA3, (10))) !== null && !(lcA3[(10)] || Array.at(lcA3, (10)))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[(10)] || Array.at(lcA3, (10))), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_fileTypeIconColor'] = (lcA3[(10)] || Array.at(lcA3, (10)));
if ((lcA3[(11)] || Array.at(lcA3, (11))) !== null && !(lcA3[(11)] || Array.at(lcA3, (11)))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[(11)] || Array.at(lcA3, (11))), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_fileName'] = (lcA3[(11)] || Array.at(lcA3, (11)));
if ((lcA3[(12)] || Array.at(lcA3, (12))) !== null && !(lcA3[(12)] || Array.at(lcA3, (12)))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[(12)] || Array.at(lcA3, (12))), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_fileContent'] = (lcA3[(12)] || Array.at(lcA3, (12)));
if ((lcA3[(13)] || Array.at(lcA3, (13))) !== null && !(lcA3[(13)] || Array.at(lcA3, (13)))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[(13)] || Array.at(lcA3, (13))), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_fileType'] = (lcA3[(13)] || Array.at(lcA3, (13)));
if ((lcA3[(14)] || Array.at(lcA3, (14))) !== null && !(lcA3[(14)] || Array.at(lcA3, (14)))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[(14)] || Array.at(lcA3, (14))), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_fileSize'] = (lcA3[(14)] || Array.at(lcA3, (14)));
var stA0 = lcA0;if (((lcA3[(15)] || Array.at(lcA3, (15)))) !== null) { gt = 468; break IF; }
var stI1 = 0;{ gt = 481; break IF; }
    }
    X_468: for (;;) { IF: if (gt <= 468) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[(15)] || Array.at(lcA3, (15))));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_481: for (;;) { IF: if (gt <= 481) {
stA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_isImage'] = stI1;
if ((lcA3[(16)] || Array.at(lcA3, (16))) !== null && !(lcA3[(16)] || Array.at(lcA3, (16)))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[(16)] || Array.at(lcA3, (16))), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_viewerHeight'] = (lcA3[(16)] || Array.at(lcA3, (16)));
if ((lcA3[(17)] || Array.at(lcA3, (17))) !== null && !(lcA3[(17)] || Array.at(lcA3, (17)))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[(17)] || Array.at(lcA3, (17))), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_viewerWidth'] = (lcA3[(17)] || Array.at(lcA3, (17)));
if ((lcA3[(18)] || Array.at(lcA3, (18))) !== null && !(lcA3[(18)] || Array.at(lcA3, (18)))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[(18)] || Array.at(lcA3, (18))), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_dataURL'] = (lcA3[(18)] || Array.at(lcA3, (18)));
if ((lcA3[(19)] || Array.at(lcA3, (19))) !== null && !(lcA3[(19)] || Array.at(lcA3, (19)))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[(19)] || Array.at(lcA3, (19))), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_title'] = (lcA3[(19)] || Array.at(lcA3, (19)));
if ((lcA3[(20)] || Array.at(lcA3, (20))) !== null && !(lcA3[(20)] || Array.at(lcA3, (20)))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[(20)] || Array.at(lcA3, (20))), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_version'] = (lcA3[(20)] || Array.at(lcA3, (20)));
var stA0 = c.useAsArray___3Ljava_lang_Object_2Ljava_lang_Object_2((lcA3[(21)] || Array.at(lcA3, (21))));
var lcA4 = stA0;
var lcI5 = (lcA4).length;
var lcI6 = 0;
    }
    X_556: for (;;) { IF: if (gt <= 556) {

if ((lcI6) >= (lcI5)) { gt = 598; break IF; }
var lcA7 = (lcA4[lcI6] || Array.at(lcA4, lcI6));
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_versionList'];var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto'],(refs_io_cloudoffice_platform_cockpit_document_FileVersion || (refs_io_cloudoffice_platform_cockpit_document_FileVersion = io_cloudoffice_platform_cockpit_document_FileVersion(false))).constructor.$class, lcA7);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,stA1);
lcI6++;
{ gt = 0; continue X_556; }
    }
    X_598: for (;;) { IF: if (gt <= 598) {

var stA0 = c.useAsArray___3Ljava_lang_Object_2Ljava_lang_Object_2((lcA3[(22)] || Array.at(lcA3, (22))));
var lcA4 = stA0;
var lcI5 = (lcA4).length;
var lcI6 = 0;
    }
    X_615: for (;;) { IF: if (gt <= 615) {

if ((lcI6) >= (lcI5)) { gt = 657; break IF; }
var lcA7 = (lcA4[lcI6] || Array.at(lcA4, lcI6));
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_formatList'];var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto'],(refs_io_cloudoffice_platform_cockpit_document_FileFormat || (refs_io_cloudoffice_platform_cockpit_document_FileFormat = io_cloudoffice_platform_cockpit_document_FileFormat(false))).constructor.$class, lcA7);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,stA1);
lcI6++;
{ gt = 0; continue X_615; }
    }
    X_657: for (;;) { IF: if (gt <= 657) {

var stA0 = c.useAsArray___3Ljava_lang_Object_2Ljava_lang_Object_2((lcA3[(23)] || Array.at(lcA3, (23))));
var lcA4 = stA0;
var lcI5 = (lcA4).length;
var lcI6 = 0;
    }
    X_674: for (;;) { IF: if (gt <= 674) {

if ((lcI6) >= (lcI5)) { gt = 716; break IF; }
var lcA7 = (lcA4[lcI6] || Array.at(lcA4, lcI6));
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_relatedItemList'];var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto'],(refs_io_cloudoffice_platform_cockpit_document_Item || (refs_io_cloudoffice_platform_cockpit_document_Item = io_cloudoffice_platform_cockpit_document_Item(false))).constructor.$class, lcA7);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,stA1);
lcI6++;
{ gt = 0; continue X_674; }
    }
    X_716: for (;;) { IF: if (gt <= 716) {

var stA0 = c.useAsArray___3Ljava_lang_Object_2Ljava_lang_Object_2((lcA3[(24)] || Array.at(lcA3, (24))));
var lcA4 = stA0;
var lcI5 = (lcA4).length;
var lcI6 = 0;
    }
    X_733: for (;;) { IF: if (gt <= 733) {

if ((lcI6) >= (lcI5)) { gt = 775; break IF; }
var lcA7 = (lcA4[lcI6] || Array.at(lcA4, lcI6));
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_sharedItemList'];var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto'],(refs_io_cloudoffice_platform_cockpit_document_Item || (refs_io_cloudoffice_platform_cockpit_document_Item = io_cloudoffice_platform_cockpit_document_Item(false))).constructor.$class, lcA7);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,stA1);
lcI6++;
{ gt = 0; continue X_733; }
    }
    X_775: for (;;) { IF: if (gt <= 775) {

var stA0 = lcA0;var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto'],(refs_io_cloudoffice_platform_cockpit_document_FileView || (refs_io_cloudoffice_platform_cockpit_document_FileView = io_cloudoffice_platform_cockpit_document_FileView(false))).constructor.$class, (lcA3[(25)] || Array.at(lcA3, (25))));
stA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_fileData'] = stA1;
if ((lcA3[(26)] || Array.at(lcA3, (26))) !== null && !(lcA3[(26)] || Array.at(lcA3, (26)))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[(26)] || Array.at(lcA3, (26))), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_createdDate'] = (lcA3[(26)] || Array.at(lcA3, (26)));
if ((lcA3[(27)] || Array.at(lcA3, (27))) !== null && !(lcA3[(27)] || Array.at(lcA3, (27)))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[(27)] || Array.at(lcA3, (27))), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_createdBy'] = (lcA3[(27)] || Array.at(lcA3, (27)));
if ((lcA3[(28)] || Array.at(lcA3, (28))) !== null && !(lcA3[(28)] || Array.at(lcA3, (28)))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[(28)] || Array.at(lcA3, (28))), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_lastModifiedDate'] = (lcA3[(28)] || Array.at(lcA3, (28)));
if ((lcA3[(29)] || Array.at(lcA3, (29))) !== null && !(lcA3[(29)] || Array.at(lcA3, (29)))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[(29)] || Array.at(lcA3, (29))), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_lastModifiedBy'] = (lcA3[(29)] || Array.at(lcA3, (29)));
var stA0 = lcA0;var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto'],(refs_io_cloudoffice_platform_cockpit_api_HelperItemView || (refs_io_cloudoffice_platform_cockpit_api_HelperItemView = vm.io_cloudoffice_platform_cockpit_api_HelperItemView(false))).constructor.$class, (lcA3[(30)] || Array.at(lcA3, (30))));
stA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_loader'] = stA1;
var stA0 = lcA0;if (((lcA3[(31)] || Array.at(lcA3, (31)))) !== null) { gt = 867; break IF; }
var stI1 = 0;{ gt = 880; break IF; }
    }
    X_867: for (;;) { IF: if (gt <= 867) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[(31)] || Array.at(lcA3, (31))));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_880: for (;;) { IF: if (gt <= 880) {
stA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_hasOwnerPermission'] = stI1;
var stA0 = lcA0;if (((lcA3[(32)] || Array.at(lcA3, (32)))) !== null) { gt = 895; break IF; }
var stI1 = 0;{ gt = 908; break IF; }
    }
    X_895: for (;;) { IF: if (gt <= 895) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[(32)] || Array.at(lcA3, (32))));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_908: for (;;) { IF: if (gt <= 908) {
stA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_hasAdminPermission'] = stI1;
var stA0 = lcA0;if (((lcA3[(33)] || Array.at(lcA3, (33)))) !== null) { gt = 923; break IF; }
var stI1 = 0;{ gt = 936; break IF; }
    }
    X_923: for (;;) { IF: if (gt <= 923) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[(33)] || Array.at(lcA3, (33))));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_936: for (;;) { IF: if (gt <= 936) {
stA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_hasWritePermission'] = stI1;
var stA0 = lcA0;if (((lcA3[(34)] || Array.at(lcA3, (34)))) !== null) { gt = 951; break IF; }
var stI1 = 0;{ gt = 964; break IF; }
    }
    X_951: for (;;) { IF: if (gt <= 951) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[(34)] || Array.at(lcA3, (34))));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_964: for (;;) { IF: if (gt <= 964) {
stA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_hasReadPermission'] = stI1;
return;

    }
}}}}}}}}}}}}}}}}}}}}}}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.useAsArray___3Ljava_lang_Object_2Ljava_lang_Object_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](lcA0, 1, vm.java_lang_Object);
if ((stI0) == 0) { gt = 17; break IF; }
if (lcA0 !== null && !Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](lcA0, 1, vm.java_lang_Object)) vm.java_lang_Class(false).castEx(lcA0, '');
if (lcA0 !== null && !Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](lcA0, 1, vm.java_lang_Object)) vm.java_lang_Class(false).castEx(lcA0, '');
var stA0 = lcA0;{ gt = 36; break IF; }
    }
    X_17: for (;;) { IF: if (gt <= 17) {

if ((lcA0) !== null) { gt = 28; break IF; }
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 0);
{ gt = 36; break IF; }
    }
    X_28: for (;;) { IF: if (gt <= 28) {

var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 1);
Array.at(stA0, 0, lcA0);
    }
    X_36: for (;;) { IF: if (gt <= 36) {
return stA0;

    }
}}}}
};
    m.access = 10;
    m.cls = CLS;
    m = c.toString__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var lcA1 = stA0;
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(123));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"instance");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getInstance__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"designerMode");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stI2 = lcA0.isDesignerMode__Z();
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI2);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"configuration");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_configuration']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"viewMode");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getViewMode__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"fullViewEnabled");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stI2 = lcA0.isFullViewEnabled__Z();
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI2);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"visible");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stI2 = lcA0.isVisible__Z();
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI2);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"layoutColumnId");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getLayoutColumnId__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"itemId");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getItemId__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"itemName");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getItemName__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"fileTypeIcon");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getFileTypeIcon__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"fileTypeIconColor");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getFileTypeIconColor__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"fileName");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getFileName__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"fileContent");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getFileContent__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"fileType");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getFileType__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"fileSize");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getFileSize__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"isImage");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stI2 = lcA0.isIsImage__Z();
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI2);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"viewerHeight");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getViewerHeight__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"viewerWidth");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getViewerWidth__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"dataURL");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getDataURL__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"title");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getTitle__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"version");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getVersion__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"versionList");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_versionList']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"formatList");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_formatList']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"relatedItemList");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_relatedItemList']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"sharedItemList");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_sharedItemList']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"fileData");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_fileData']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"createdDate");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getCreatedDate__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"createdBy");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getCreatedBy__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"lastModifiedDate");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getLastModifiedDate__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"lastModifiedBy");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getLastModifiedBy__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"loader");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_loader']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"hasOwnerPermission");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stI2 = lcA0.isHasOwnerPermission__Z();
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI2);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"hasAdminPermission");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stI2 = lcA0.isHasAdminPermission__Z();
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI2);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"hasWritePermission");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stI2 = lcA0.isHasWritePermission__Z();
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI2);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"hasReadPermission");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stI2 = lcA0.isHasReadPermission__Z();
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI2);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(125));
var stA0 = invoker.toString__Ljava_lang_String_2(lcA1);
return stA0;

};
c['toString__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Lio_cloudoffice_platform_cockpit_document_DocumentView_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto']);
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_document_DocumentView_2Lnet_java_html_BrwsrCtx_2.call(stA0, stA1);
return stA0;

};
c['clone__Lio_cloudoffice_platform_cockpit_document_DocumentView_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Lio_cloudoffice_platform_cockpit_document_DocumentView_2Lnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
var stA0 = new io_cloudoffice_platform_cockpit_document_DocumentView;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, lcA1);
var lcA2 = stA0;
var stA0 = lcA2;var stA1 = lcA0.getInstance__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_instance'] = stA1;
var stA0 = lcA2;var stI1 = lcA0.isDesignerMode__Z();
stA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_designerMode'] = stI1;
var stA0 = lcA2;if ((lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_configuration']) !== null) { gt = 37; break IF; }
var stA1 = null;{ gt = 61; break IF; }
    }
    X_37: for (;;) { IF: if (gt <= 37) {

if ((lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_configuration']) !== (c._TYPE())) { gt = 53; break IF; }
var stA1 = c._TYPE();{ gt = 61; break IF; }
    }
    X_53: for (;;) { IF: if (gt <= 53) {

var stA1 = lcA0.getConfiguration__Lio_cloudoffice_platform_cockpit_document_DocumentConfiguration_2();
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, lcA1);
    }
    X_61: for (;;) { IF: if (gt <= 61) {
stA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_configuration'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getViewMode__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_viewMode'] = stA1;
var stA0 = lcA2;var stI1 = lcA0.isFullViewEnabled__Z();
stA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_fullViewEnabled'] = stI1;
var stA0 = lcA2;var stI1 = lcA0.isVisible__Z();
stA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_visible'] = stI1;
var stA0 = lcA2;var stA1 = lcA0.getLayoutColumnId__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_layoutColumnId'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getItemId__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_itemId'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getItemName__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_itemName'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getFileTypeIcon__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_fileTypeIcon'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getFileTypeIconColor__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_fileTypeIconColor'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getFileName__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_fileName'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getFileContent__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_fileContent'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getFileType__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_fileType'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getFileSize__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_fileSize'] = stA1;
var stA0 = lcA2;var stI1 = lcA0.isIsImage__Z();
stA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_isImage'] = stI1;
var stA0 = lcA2;var stA1 = lcA0.getViewerHeight__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_viewerHeight'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getViewerWidth__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_viewerWidth'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getDataURL__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_dataURL'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getTitle__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_title'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getVersion__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_version'] = stA1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto'];var stA1 = lcA2.getVersionList__Ljava_util_List_2();
invoker.cloneList__VLjava_util_Collection_2Lnet_java_html_BrwsrCtx_2Ljava_util_Collection_2(stA0,stA1, lcA1, lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_versionList']);
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto'];var stA1 = lcA2.getFormatList__Ljava_util_List_2();
invoker.cloneList__VLjava_util_Collection_2Lnet_java_html_BrwsrCtx_2Ljava_util_Collection_2(stA0,stA1, lcA1, lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_formatList']);
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto'];var stA1 = lcA2.getRelatedItemList__Ljava_util_List_2();
invoker.cloneList__VLjava_util_Collection_2Lnet_java_html_BrwsrCtx_2Ljava_util_Collection_2(stA0,stA1, lcA1, lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_relatedItemList']);
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto'];var stA1 = lcA2.getSharedItemList__Ljava_util_List_2();
invoker.cloneList__VLjava_util_Collection_2Lnet_java_html_BrwsrCtx_2Ljava_util_Collection_2(stA0,stA1, lcA1, lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_sharedItemList']);
var stA0 = lcA2;if ((lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_fileData']) !== null) { gt = 284; break IF; }
var stA1 = null;{ gt = 308; break IF; }
    }
    X_284: for (;;) { IF: if (gt <= 284) {

if ((lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_fileData']) !== (c._TYPE())) { gt = 300; break IF; }
var stA1 = c._TYPE();{ gt = 308; break IF; }
    }
    X_300: for (;;) { IF: if (gt <= 300) {

var stA1 = lcA0.getFileData__Lio_cloudoffice_platform_cockpit_document_FileView_2();
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, lcA1);
    }
    X_308: for (;;) { IF: if (gt <= 308) {
stA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_fileData'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getCreatedDate__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_createdDate'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getCreatedBy__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_createdBy'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getLastModifiedDate__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_lastModifiedDate'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getLastModifiedBy__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_lastModifiedBy'] = stA1;
var stA0 = lcA2;if ((lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_loader']) !== null) { gt = 355; break IF; }
var stA1 = null;{ gt = 379; break IF; }
    }
    X_355: for (;;) { IF: if (gt <= 355) {

if ((lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_loader']) !== (c._TYPE())) { gt = 371; break IF; }
var stA1 = c._TYPE();{ gt = 379; break IF; }
    }
    X_371: for (;;) { IF: if (gt <= 371) {

var stA1 = lcA0.getLoader__Lio_cloudoffice_platform_cockpit_api_HelperItemView_2();
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, lcA1);
    }
    X_379: for (;;) { IF: if (gt <= 379) {
stA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_loader'] = stA1;
var stA0 = lcA2;var stI1 = lcA0.isHasOwnerPermission__Z();
stA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_hasOwnerPermission'] = stI1;
var stA0 = lcA2;var stI1 = lcA0.isHasAdminPermission__Z();
stA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_hasAdminPermission'] = stI1;
var stA0 = lcA2;var stI1 = lcA0.isHasWritePermission__Z();
stA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_hasWritePermission'] = stI1;
var stA0 = lcA2;var stI1 = lcA0.isHasReadPermission__Z();
stA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_hasReadPermission'] = stI1;
return lcA2;

    }
}}}}}}}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.applyBindings__Lio_cloudoffice_platform_cockpit_document_DocumentView_2 = function() {
  var  lcA0 = this;
invoker.applyBindings__V(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto']);
return lcA0;

};
c['applyBindings__Lio_cloudoffice_platform_cockpit_document_DocumentView_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.equals__ZLjava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((lcA1) !== (lcA0)) { gt = 7; break IF; }
return 1;
    }
    X_7: for (;;) { IF: if (gt <= 7) {

var stI0 = lcA1 != null && lcA1['$instOf_io_cloudoffice_platform_cockpit_document_DocumentView'] ? 1 : 0;
if ((stI0) != 0) { gt = 16; break IF; }
return 0;
    }
    X_16: for (;;) { IF: if (gt <= 16) {

if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_document_DocumentView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.document.DocumentView');
var lcA2 = lcA1;
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_instance'], lcA2['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_instance']);
if ((stI0) != 0) { gt = 40; break IF; }
return 0;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_designerMode']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_designerMode']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 65; break IF; }
return 0;
    }
    X_65: for (;;) { IF: if (gt <= 65) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_configuration']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_configuration']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 92; break IF; }
return 0;
    }
    X_92: for (;;) { IF: if (gt <= 92) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_viewMode'], lcA2['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_viewMode']);
if ((stI0) != 0) { gt = 111; break IF; }
return 0;
    }
    X_111: for (;;) { IF: if (gt <= 111) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_fullViewEnabled']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_fullViewEnabled']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 136; break IF; }
return 0;
    }
    X_136: for (;;) { IF: if (gt <= 136) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_visible']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_visible']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 161; break IF; }
return 0;
    }
    X_161: for (;;) { IF: if (gt <= 161) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_layoutColumnId'], lcA2['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_layoutColumnId']);
if ((stI0) != 0) { gt = 180; break IF; }
return 0;
    }
    X_180: for (;;) { IF: if (gt <= 180) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_itemId'], lcA2['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_itemId']);
if ((stI0) != 0) { gt = 199; break IF; }
return 0;
    }
    X_199: for (;;) { IF: if (gt <= 199) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_itemName'], lcA2['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_itemName']);
if ((stI0) != 0) { gt = 218; break IF; }
return 0;
    }
    X_218: for (;;) { IF: if (gt <= 218) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_fileTypeIcon'], lcA2['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_fileTypeIcon']);
if ((stI0) != 0) { gt = 237; break IF; }
return 0;
    }
    X_237: for (;;) { IF: if (gt <= 237) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_fileTypeIconColor'], lcA2['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_fileTypeIconColor']);
if ((stI0) != 0) { gt = 256; break IF; }
return 0;
    }
    X_256: for (;;) { IF: if (gt <= 256) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_fileName'], lcA2['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_fileName']);
if ((stI0) != 0) { gt = 275; break IF; }
return 0;
    }
    X_275: for (;;) { IF: if (gt <= 275) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_fileContent'], lcA2['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_fileContent']);
if ((stI0) != 0) { gt = 294; break IF; }
return 0;
    }
    X_294: for (;;) { IF: if (gt <= 294) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_fileType'], lcA2['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_fileType']);
if ((stI0) != 0) { gt = 313; break IF; }
return 0;
    }
    X_313: for (;;) { IF: if (gt <= 313) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_fileSize'], lcA2['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_fileSize']);
if ((stI0) != 0) { gt = 332; break IF; }
return 0;
    }
    X_332: for (;;) { IF: if (gt <= 332) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_isImage']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_isImage']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 357; break IF; }
return 0;
    }
    X_357: for (;;) { IF: if (gt <= 357) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_viewerHeight'], lcA2['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_viewerHeight']);
if ((stI0) != 0) { gt = 376; break IF; }
return 0;
    }
    X_376: for (;;) { IF: if (gt <= 376) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_viewerWidth'], lcA2['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_viewerWidth']);
if ((stI0) != 0) { gt = 395; break IF; }
return 0;
    }
    X_395: for (;;) { IF: if (gt <= 395) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_dataURL'], lcA2['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_dataURL']);
if ((stI0) != 0) { gt = 414; break IF; }
return 0;
    }
    X_414: for (;;) { IF: if (gt <= 414) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_title'], lcA2['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_title']);
if ((stI0) != 0) { gt = 433; break IF; }
return 0;
    }
    X_433: for (;;) { IF: if (gt <= 433) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_version'], lcA2['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_version']);
if ((stI0) != 0) { gt = 452; break IF; }
return 0;
    }
    X_452: for (;;) { IF: if (gt <= 452) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_versionList']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_versionList']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 479; break IF; }
return 0;
    }
    X_479: for (;;) { IF: if (gt <= 479) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_formatList']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_formatList']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 506; break IF; }
return 0;
    }
    X_506: for (;;) { IF: if (gt <= 506) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_relatedItemList']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_relatedItemList']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 533; break IF; }
return 0;
    }
    X_533: for (;;) { IF: if (gt <= 533) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_sharedItemList']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_sharedItemList']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 560; break IF; }
return 0;
    }
    X_560: for (;;) { IF: if (gt <= 560) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_fileData']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_fileData']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 587; break IF; }
return 0;
    }
    X_587: for (;;) { IF: if (gt <= 587) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_createdDate'], lcA2['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_createdDate']);
if ((stI0) != 0) { gt = 606; break IF; }
return 0;
    }
    X_606: for (;;) { IF: if (gt <= 606) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_createdBy'], lcA2['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_createdBy']);
if ((stI0) != 0) { gt = 625; break IF; }
return 0;
    }
    X_625: for (;;) { IF: if (gt <= 625) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_lastModifiedDate'], lcA2['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_lastModifiedDate']);
if ((stI0) != 0) { gt = 644; break IF; }
return 0;
    }
    X_644: for (;;) { IF: if (gt <= 644) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_lastModifiedBy'], lcA2['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_lastModifiedBy']);
if ((stI0) != 0) { gt = 663; break IF; }
return 0;
    }
    X_663: for (;;) { IF: if (gt <= 663) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_loader']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_loader']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 690; break IF; }
return 0;
    }
    X_690: for (;;) { IF: if (gt <= 690) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_hasOwnerPermission']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_hasOwnerPermission']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 715; break IF; }
return 0;
    }
    X_715: for (;;) { IF: if (gt <= 715) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_hasAdminPermission']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_hasAdminPermission']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 740; break IF; }
return 0;
    }
    X_740: for (;;) { IF: if (gt <= 740) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_hasWritePermission']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_hasWritePermission']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 765; break IF; }
return 0;
    }
    X_765: for (;;) { IF: if (gt <= 765) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_hasReadPermission']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_hasReadPermission']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 790; break IF; }
return 0;
    }
    X_790: for (;;) { IF: if (gt <= 790) {

return 1;

    }
}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}
};
c['equals__ZLjava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.hashCode__I = function() {
  var  lcA0 = this;
var stA0 = invoker.getName__Ljava_lang_String_2(c.constructor.$class);
var stI0 = invoker.hashCode__I(stA0);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_instance'], lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_designerMode']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_configuration']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_viewMode'], lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_fullViewEnabled']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_visible']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_layoutColumnId'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_itemId'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_itemName'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_fileTypeIcon'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_fileTypeIconColor'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_fileName'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_fileContent'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_fileType'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_fileSize'], lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_isImage']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_viewerHeight'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_viewerWidth'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_dataURL'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_title'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_version'], lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_versionList']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_formatList']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_relatedItemList']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_sharedItemList']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_fileData']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_createdDate'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_createdBy'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_lastModifiedDate'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_lastModifiedBy'], lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_loader']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_hasOwnerPermission']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_hasAdminPermission']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_hasWritePermission']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_hasReadPermission']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
return lcI1;

};
c['hashCode__I'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((lcA1) === (lcA0)) { gt = 12; break IF; }
if ((lcA1) !== (c._TYPE())) { gt = 16; break IF; }
    }
    X_12: for (;;) { IF: if (gt <= 12) {

var stA0 = null;{ gt = 17; break IF; }
    }
    X_16: for (;;) { IF: if (gt <= 16) {

var stA0 = lcA1;    }
    X_17: for (;;) { IF: if (gt <= 17) {
return stA0;

    }
}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.clone__Ljava_lang_Object_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0.clone__Lio_cloudoffice_platform_cockpit_document_DocumentView_2();
return stA0;

};
c['clone__Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.access$100__Lio_cloudoffice_platform_cockpit_document_DocumentView$Html4JavaType_2 = function() {
return c._TYPE();

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_document_DocumentView_2 = function(lcA0) {
return lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto'];

};
    m.access = 4104;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_document_DocumentView$1_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2.call(lcA0, lcA1, lcA2);
return;

};
    m.access = 4096;
    m.cls = CLS;
    m = c.access$400__Lio_cloudoffice_platform_cockpit_document_DocumentView_2Lio_cloudoffice_platform_cockpit_document_DocumentView_2Lnet_java_html_BrwsrCtx_2 = function(lcA0, lcA1) {
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_document_DocumentView_2Lnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
return stA0;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new io_cloudoffice_platform_cockpit_document_DocumentView$Html4JavaType;
(refs_io_cloudoffice_platform_cockpit_document_DocumentView$Html4JavaType || (refs_io_cloudoffice_platform_cockpit_document_DocumentView$Html4JavaType = io_cloudoffice_platform_cockpit_document_DocumentView$Html4JavaType(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_document_DocumentView$1_2.call(stA0, null);
c._TYPE(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_document_DocumentViewfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_document_DocumentView', { value : true });
      vm.java_lang_Cloneable(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_document_DocumentViewfillInstOf });
    io_cloudoffice_platform_cockpit_document_DocumentViewfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/document/DocumentView';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.java_lang_Cloneable(false).constructor.$class
    ]; };
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_io_cloudoffice_platform_cockpit_document_DocumentComponent;
    var refs_java_lang_Boolean;
    var refs_io_cloudoffice_platform_cockpit_document_DocumentConfiguration;
    var refs_net_java_html_json_Models;
    var refs_io_cloudoffice_platform_cockpit_document_FileView;
    var refs_io_cloudoffice_platform_cockpit_api_HelperItemView;
    var refs_net_java_html_BrwsrCtx;
    var refs_io_cloudoffice_platform_cockpit_document_FileVersion;
    var refs_io_cloudoffice_platform_cockpit_document_FileFormat;
    var refs_io_cloudoffice_platform_cockpit_document_Item;
    var refs_java_lang_StringBuilder;
    var refs_io_cloudoffice_platform_cockpit_document_DocumentView$Html4JavaType;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_document_DocumentView_proto'] = null;
    this['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_instance'] = null;
    this['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_designerMode'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_configuration'] = null;
    this['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_viewMode'] = null;
    this['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_fullViewEnabled'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_visible'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_layoutColumnId'] = null;
    this['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_itemId'] = null;
    this['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_itemName'] = null;
    this['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_fileTypeIcon'] = null;
    this['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_fileTypeIconColor'] = null;
    this['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_fileName'] = null;
    this['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_fileContent'] = null;
    this['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_fileType'] = null;
    this['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_fileSize'] = null;
    this['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_isImage'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_viewerHeight'] = null;
    this['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_viewerWidth'] = null;
    this['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_dataURL'] = null;
    this['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_title'] = null;
    this['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_version'] = null;
    this['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_versionList'] = null;
    this['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_formatList'] = null;
    this['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_relatedItemList'] = null;
    this['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_sharedItemList'] = null;
    this['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_fileData'] = null;
    this['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_createdDate'] = null;
    this['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_createdBy'] = null;
    this['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_lastModifiedDate'] = null;
    this['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_lastModifiedBy'] = null;
    this['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_loader'] = null;
    this['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_hasOwnerPermission'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_hasAdminPermission'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_hasWritePermission'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_document_DocumentView_prop_hasReadPermission'] = 0;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_document_DocumentView = registerClass(exports,'io_cloudoffice_platform_cockpit_document_DocumentView',io_cloudoffice_platform_cockpit_document_DocumentView);


function io_cloudoffice_platform_cockpit_document_DocumentView$Html4JavaType() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_document_DocumentView$Html4JavaType;
  if (!CLS.$class) {
    var pp = vm.org_netbeans_html_json_spi_Proto$Type(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_org_netbeans_html_json_spi_Proto$Type || (refs_org_netbeans_html_json_spi_Proto$Type = vm.org_netbeans_html_json_spi_Proto$Type(false))).constructor['cons__VLjava_lang_Class_2Ljava_lang_Class_2II'].call(lcA0, (refs_io_cloudoffice_platform_cockpit_document_DocumentView || (refs_io_cloudoffice_platform_cockpit_document_DocumentView = io_cloudoffice_platform_cockpit_document_DocumentView(false))).constructor.$class, (refs_io_cloudoffice_platform_cockpit_document_DocumentComponent || (refs_io_cloudoffice_platform_cockpit_document_DocumentComponent = io_cloudoffice_platform_cockpit_document_DocumentComponent(false))).constructor.$class, (36), (20));
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"isBrowserIE", 0, 1, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"instance", 1, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"designerMode", 2, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"configuration", 3, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"viewMode", 4, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"fullViewEnabled", 5, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"visible", (6), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"layoutColumnId", (7), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"itemId", (8), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"itemName", (9), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"fileTypeIcon", (10), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"fileTypeIconColor", (11), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"fileName", (12), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"fileContent", (13), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"fileType", (14), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"fileSize", (15), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"isImage", (16), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"viewerHeight", (17), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"viewerWidth", (18), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"dataURL", (19), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"title", (20), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"version", (21), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"versionList", (22), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"formatList", (23), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"relatedItemList", (24), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"sharedItemList", (25), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"fileData", (26), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"createdDate", (27), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"createdBy", (28), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"lastModifiedDate", (29), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"lastModifiedBy", (30), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"loader", (31), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"hasOwnerPermission", (32), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"hasAdminPermission", (33), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"hasWritePermission", (34), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"hasReadPermission", (35), 0, 0);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"openConfig", 0);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"closeConfigurationPanel", 1);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"save", 2);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"resetConfiguration", 3);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"enableFullView", 4);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"enableSplitView", 5);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"backToList", (6));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"hideList", (7));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"showList", (8));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"clearFilter", (9));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"enableEditMode", (10));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"enableCreateMode", (11));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"createDocument", (12));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"saveFile", (13));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"updateFile", (14));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"reloadSelectedDocument", (15));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"showActionMenu", (16));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"clearDocumentData", (17));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"processDocumentDetail", (18));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"getSystemData", (19));
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.setValue__VLio_cloudoffice_platform_cockpit_document_DocumentView_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 1:{ gt = 156; break IF; }
  case 2:{ gt = 173; break IF; }
  case 3:{ gt = 193; break IF; }
  case 4:{ gt = 210; break IF; }
  case 5:{ gt = 227; break IF; }
  case 6:{ gt = 247; break IF; }
  case 7:{ gt = 267; break IF; }
  case 8:{ gt = 284; break IF; }
  case 9:{ gt = 301; break IF; }
  case 10:{ gt = 318; break IF; }
  case 11:{ gt = 335; break IF; }
  case 12:{ gt = 352; break IF; }
  case 13:{ gt = 369; break IF; }
  case 14:{ gt = 386; break IF; }
  case 15:{ gt = 403; break IF; }
  case 16:{ gt = 420; break IF; }
  case 17:{ gt = 440; break IF; }
  case 18:{ gt = 457; break IF; }
  case 19:{ gt = 474; break IF; }
  case 20:{ gt = 491; break IF; }
  case 21:{ gt = 508; break IF; }
  case 22:{ gt = 525; break IF; }
  case 23:{ gt = 539; break IF; }
  case 24:{ gt = 553; break IF; }
  case 25:{ gt = 567; break IF; }
  case 26:{ gt = 581; break IF; }
  case 27:{ gt = 598; break IF; }
  case 28:{ gt = 615; break IF; }
  case 29:{ gt = 632; break IF; }
  case 30:{ gt = 649; break IF; }
  case 31:{ gt = 666; break IF; }
  case 32:{ gt = 684; break IF; }
  case 33:{ gt = 704; break IF; }
  case 34:{ gt = 724; break IF; }
  case 35:{ gt = 744; break IF; }
  default: { gt = 764; break IF; }
}
    }
    X_156: for (;;) { IF: if (gt <= 156) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_document_DocumentView || (refs_io_cloudoffice_platform_cockpit_document_DocumentView = io_cloudoffice_platform_cockpit_document_DocumentView(false))).access$100__Lio_cloudoffice_platform_cockpit_document_DocumentView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setInstance__VLjava_lang_String_2(stA1);
return;
    }
    X_173: for (;;) { IF: if (gt <= 173) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_document_DocumentView || (refs_io_cloudoffice_platform_cockpit_document_DocumentView = io_cloudoffice_platform_cockpit_document_DocumentView(false))).access$100__Lio_cloudoffice_platform_cockpit_document_DocumentView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setDesignerMode__VZ(stI1);
return;
    }
    X_193: for (;;) { IF: if (gt <= 193) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_document_DocumentView || (refs_io_cloudoffice_platform_cockpit_document_DocumentView = io_cloudoffice_platform_cockpit_document_DocumentView(false))).access$100__Lio_cloudoffice_platform_cockpit_document_DocumentView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_document_DocumentConfiguration || (refs_io_cloudoffice_platform_cockpit_document_DocumentConfiguration = io_cloudoffice_platform_cockpit_document_DocumentConfiguration(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_document_DocumentConfiguration']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.document.DocumentConfiguration');
stA0.setConfiguration__VLio_cloudoffice_platform_cockpit_document_DocumentConfiguration_2(stA1);
return;
    }
    X_210: for (;;) { IF: if (gt <= 210) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_document_DocumentView || (refs_io_cloudoffice_platform_cockpit_document_DocumentView = io_cloudoffice_platform_cockpit_document_DocumentView(false))).access$100__Lio_cloudoffice_platform_cockpit_document_DocumentView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setViewMode__VLjava_lang_String_2(stA1);
return;
    }
    X_227: for (;;) { IF: if (gt <= 227) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_document_DocumentView || (refs_io_cloudoffice_platform_cockpit_document_DocumentView = io_cloudoffice_platform_cockpit_document_DocumentView(false))).access$100__Lio_cloudoffice_platform_cockpit_document_DocumentView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setFullViewEnabled__VZ(stI1);
return;
    }
    X_247: for (;;) { IF: if (gt <= 247) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_document_DocumentView || (refs_io_cloudoffice_platform_cockpit_document_DocumentView = io_cloudoffice_platform_cockpit_document_DocumentView(false))).access$100__Lio_cloudoffice_platform_cockpit_document_DocumentView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setVisible__VZ(stI1);
return;
    }
    X_267: for (;;) { IF: if (gt <= 267) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_document_DocumentView || (refs_io_cloudoffice_platform_cockpit_document_DocumentView = io_cloudoffice_platform_cockpit_document_DocumentView(false))).access$100__Lio_cloudoffice_platform_cockpit_document_DocumentView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setLayoutColumnId__VLjava_lang_String_2(stA1);
return;
    }
    X_284: for (;;) { IF: if (gt <= 284) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_document_DocumentView || (refs_io_cloudoffice_platform_cockpit_document_DocumentView = io_cloudoffice_platform_cockpit_document_DocumentView(false))).access$100__Lio_cloudoffice_platform_cockpit_document_DocumentView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setItemId__VLjava_lang_String_2(stA1);
return;
    }
    X_301: for (;;) { IF: if (gt <= 301) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_document_DocumentView || (refs_io_cloudoffice_platform_cockpit_document_DocumentView = io_cloudoffice_platform_cockpit_document_DocumentView(false))).access$100__Lio_cloudoffice_platform_cockpit_document_DocumentView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setItemName__VLjava_lang_String_2(stA1);
return;
    }
    X_318: for (;;) { IF: if (gt <= 318) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_document_DocumentView || (refs_io_cloudoffice_platform_cockpit_document_DocumentView = io_cloudoffice_platform_cockpit_document_DocumentView(false))).access$100__Lio_cloudoffice_platform_cockpit_document_DocumentView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setFileTypeIcon__VLjava_lang_String_2(stA1);
return;
    }
    X_335: for (;;) { IF: if (gt <= 335) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_document_DocumentView || (refs_io_cloudoffice_platform_cockpit_document_DocumentView = io_cloudoffice_platform_cockpit_document_DocumentView(false))).access$100__Lio_cloudoffice_platform_cockpit_document_DocumentView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setFileTypeIconColor__VLjava_lang_String_2(stA1);
return;
    }
    X_352: for (;;) { IF: if (gt <= 352) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_document_DocumentView || (refs_io_cloudoffice_platform_cockpit_document_DocumentView = io_cloudoffice_platform_cockpit_document_DocumentView(false))).access$100__Lio_cloudoffice_platform_cockpit_document_DocumentView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setFileName__VLjava_lang_String_2(stA1);
return;
    }
    X_369: for (;;) { IF: if (gt <= 369) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_document_DocumentView || (refs_io_cloudoffice_platform_cockpit_document_DocumentView = io_cloudoffice_platform_cockpit_document_DocumentView(false))).access$100__Lio_cloudoffice_platform_cockpit_document_DocumentView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setFileContent__VLjava_lang_String_2(stA1);
return;
    }
    X_386: for (;;) { IF: if (gt <= 386) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_document_DocumentView || (refs_io_cloudoffice_platform_cockpit_document_DocumentView = io_cloudoffice_platform_cockpit_document_DocumentView(false))).access$100__Lio_cloudoffice_platform_cockpit_document_DocumentView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setFileType__VLjava_lang_String_2(stA1);
return;
    }
    X_403: for (;;) { IF: if (gt <= 403) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_document_DocumentView || (refs_io_cloudoffice_platform_cockpit_document_DocumentView = io_cloudoffice_platform_cockpit_document_DocumentView(false))).access$100__Lio_cloudoffice_platform_cockpit_document_DocumentView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setFileSize__VLjava_lang_String_2(stA1);
return;
    }
    X_420: for (;;) { IF: if (gt <= 420) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_document_DocumentView || (refs_io_cloudoffice_platform_cockpit_document_DocumentView = io_cloudoffice_platform_cockpit_document_DocumentView(false))).access$100__Lio_cloudoffice_platform_cockpit_document_DocumentView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setIsImage__VZ(stI1);
return;
    }
    X_440: for (;;) { IF: if (gt <= 440) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_document_DocumentView || (refs_io_cloudoffice_platform_cockpit_document_DocumentView = io_cloudoffice_platform_cockpit_document_DocumentView(false))).access$100__Lio_cloudoffice_platform_cockpit_document_DocumentView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setViewerHeight__VLjava_lang_String_2(stA1);
return;
    }
    X_457: for (;;) { IF: if (gt <= 457) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_document_DocumentView || (refs_io_cloudoffice_platform_cockpit_document_DocumentView = io_cloudoffice_platform_cockpit_document_DocumentView(false))).access$100__Lio_cloudoffice_platform_cockpit_document_DocumentView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setViewerWidth__VLjava_lang_String_2(stA1);
return;
    }
    X_474: for (;;) { IF: if (gt <= 474) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_document_DocumentView || (refs_io_cloudoffice_platform_cockpit_document_DocumentView = io_cloudoffice_platform_cockpit_document_DocumentView(false))).access$100__Lio_cloudoffice_platform_cockpit_document_DocumentView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setDataURL__VLjava_lang_String_2(stA1);
return;
    }
    X_491: for (;;) { IF: if (gt <= 491) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_document_DocumentView || (refs_io_cloudoffice_platform_cockpit_document_DocumentView = io_cloudoffice_platform_cockpit_document_DocumentView(false))).access$100__Lio_cloudoffice_platform_cockpit_document_DocumentView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setTitle__VLjava_lang_String_2(stA1);
return;
    }
    X_508: for (;;) { IF: if (gt <= 508) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_document_DocumentView || (refs_io_cloudoffice_platform_cockpit_document_DocumentView = io_cloudoffice_platform_cockpit_document_DocumentView(false))).access$100__Lio_cloudoffice_platform_cockpit_document_DocumentView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setVersion__VLjava_lang_String_2(stA1);
return;
    }
    X_525: for (;;) { IF: if (gt <= 525) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_document_DocumentView || (refs_io_cloudoffice_platform_cockpit_document_DocumentView = io_cloudoffice_platform_cockpit_document_DocumentView(false))).access$100__Lio_cloudoffice_platform_cockpit_document_DocumentView$Html4JavaType_2();
var stA1 = lcA1.getVersionList__Ljava_util_List_2();
invoker.replaceValue__VLjava_util_Collection_2Ljava_lang_Class_2Ljava_lang_Object_2(stA0,stA1, (refs_io_cloudoffice_platform_cockpit_document_FileVersion || (refs_io_cloudoffice_platform_cockpit_document_FileVersion = io_cloudoffice_platform_cockpit_document_FileVersion(false))).constructor.$class, lcA3);
return;
    }
    X_539: for (;;) { IF: if (gt <= 539) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_document_DocumentView || (refs_io_cloudoffice_platform_cockpit_document_DocumentView = io_cloudoffice_platform_cockpit_document_DocumentView(false))).access$100__Lio_cloudoffice_platform_cockpit_document_DocumentView$Html4JavaType_2();
var stA1 = lcA1.getFormatList__Ljava_util_List_2();
invoker.replaceValue__VLjava_util_Collection_2Ljava_lang_Class_2Ljava_lang_Object_2(stA0,stA1, (refs_io_cloudoffice_platform_cockpit_document_FileFormat || (refs_io_cloudoffice_platform_cockpit_document_FileFormat = io_cloudoffice_platform_cockpit_document_FileFormat(false))).constructor.$class, lcA3);
return;
    }
    X_553: for (;;) { IF: if (gt <= 553) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_document_DocumentView || (refs_io_cloudoffice_platform_cockpit_document_DocumentView = io_cloudoffice_platform_cockpit_document_DocumentView(false))).access$100__Lio_cloudoffice_platform_cockpit_document_DocumentView$Html4JavaType_2();
var stA1 = lcA1.getRelatedItemList__Ljava_util_List_2();
invoker.replaceValue__VLjava_util_Collection_2Ljava_lang_Class_2Ljava_lang_Object_2(stA0,stA1, (refs_io_cloudoffice_platform_cockpit_document_Item || (refs_io_cloudoffice_platform_cockpit_document_Item = io_cloudoffice_platform_cockpit_document_Item(false))).constructor.$class, lcA3);
return;
    }
    X_567: for (;;) { IF: if (gt <= 567) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_document_DocumentView || (refs_io_cloudoffice_platform_cockpit_document_DocumentView = io_cloudoffice_platform_cockpit_document_DocumentView(false))).access$100__Lio_cloudoffice_platform_cockpit_document_DocumentView$Html4JavaType_2();
var stA1 = lcA1.getSharedItemList__Ljava_util_List_2();
invoker.replaceValue__VLjava_util_Collection_2Ljava_lang_Class_2Ljava_lang_Object_2(stA0,stA1, (refs_io_cloudoffice_platform_cockpit_document_Item || (refs_io_cloudoffice_platform_cockpit_document_Item = io_cloudoffice_platform_cockpit_document_Item(false))).constructor.$class, lcA3);
return;
    }
    X_581: for (;;) { IF: if (gt <= 581) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_document_DocumentView || (refs_io_cloudoffice_platform_cockpit_document_DocumentView = io_cloudoffice_platform_cockpit_document_DocumentView(false))).access$100__Lio_cloudoffice_platform_cockpit_document_DocumentView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_document_FileView || (refs_io_cloudoffice_platform_cockpit_document_FileView = io_cloudoffice_platform_cockpit_document_FileView(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_document_FileView']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.document.FileView');
stA0.setFileData__VLio_cloudoffice_platform_cockpit_document_FileView_2(stA1);
return;
    }
    X_598: for (;;) { IF: if (gt <= 598) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_document_DocumentView || (refs_io_cloudoffice_platform_cockpit_document_DocumentView = io_cloudoffice_platform_cockpit_document_DocumentView(false))).access$100__Lio_cloudoffice_platform_cockpit_document_DocumentView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setCreatedDate__VLjava_lang_String_2(stA1);
return;
    }
    X_615: for (;;) { IF: if (gt <= 615) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_document_DocumentView || (refs_io_cloudoffice_platform_cockpit_document_DocumentView = io_cloudoffice_platform_cockpit_document_DocumentView(false))).access$100__Lio_cloudoffice_platform_cockpit_document_DocumentView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setCreatedBy__VLjava_lang_String_2(stA1);
return;
    }
    X_632: for (;;) { IF: if (gt <= 632) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_document_DocumentView || (refs_io_cloudoffice_platform_cockpit_document_DocumentView = io_cloudoffice_platform_cockpit_document_DocumentView(false))).access$100__Lio_cloudoffice_platform_cockpit_document_DocumentView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setLastModifiedDate__VLjava_lang_String_2(stA1);
return;
    }
    X_649: for (;;) { IF: if (gt <= 649) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_document_DocumentView || (refs_io_cloudoffice_platform_cockpit_document_DocumentView = io_cloudoffice_platform_cockpit_document_DocumentView(false))).access$100__Lio_cloudoffice_platform_cockpit_document_DocumentView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setLastModifiedBy__VLjava_lang_String_2(stA1);
return;
    }
    X_666: for (;;) { IF: if (gt <= 666) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_document_DocumentView || (refs_io_cloudoffice_platform_cockpit_document_DocumentView = io_cloudoffice_platform_cockpit_document_DocumentView(false))).access$100__Lio_cloudoffice_platform_cockpit_document_DocumentView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_api_HelperItemView || (refs_io_cloudoffice_platform_cockpit_api_HelperItemView = vm.io_cloudoffice_platform_cockpit_api_HelperItemView(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_api_HelperItemView']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.api.HelperItemView');
stA0.setLoader__VLio_cloudoffice_platform_cockpit_api_HelperItemView_2(stA1);
return;
    }
    X_684: for (;;) { IF: if (gt <= 684) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_document_DocumentView || (refs_io_cloudoffice_platform_cockpit_document_DocumentView = io_cloudoffice_platform_cockpit_document_DocumentView(false))).access$100__Lio_cloudoffice_platform_cockpit_document_DocumentView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setHasOwnerPermission__VZ(stI1);
return;
    }
    X_704: for (;;) { IF: if (gt <= 704) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_document_DocumentView || (refs_io_cloudoffice_platform_cockpit_document_DocumentView = io_cloudoffice_platform_cockpit_document_DocumentView(false))).access$100__Lio_cloudoffice_platform_cockpit_document_DocumentView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setHasAdminPermission__VZ(stI1);
return;
    }
    X_724: for (;;) { IF: if (gt <= 724) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_document_DocumentView || (refs_io_cloudoffice_platform_cockpit_document_DocumentView = io_cloudoffice_platform_cockpit_document_DocumentView(false))).access$100__Lio_cloudoffice_platform_cockpit_document_DocumentView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setHasWritePermission__VZ(stI1);
return;
    }
    X_744: for (;;) { IF: if (gt <= 744) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_document_DocumentView || (refs_io_cloudoffice_platform_cockpit_document_DocumentView = io_cloudoffice_platform_cockpit_document_DocumentView(false))).access$100__Lio_cloudoffice_platform_cockpit_document_DocumentView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setHasReadPermission__VZ(stI1);
return;
    }
    X_764: for (;;) { IF: if (gt <= 764) {
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

    }
}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_document_DocumentView_2I = function(lcA1, lcI2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0:{ gt = 160; break IF; }
  case 1:{ gt = 168; break IF; }
  case 2:{ gt = 173; break IF; }
  case 3:{ gt = 181; break IF; }
  case 4:{ gt = 186; break IF; }
  case 5:{ gt = 191; break IF; }
  case 6:{ gt = 199; break IF; }
  case 7:{ gt = 207; break IF; }
  case 8:{ gt = 212; break IF; }
  case 9:{ gt = 217; break IF; }
  case 10:{ gt = 222; break IF; }
  case 11:{ gt = 227; break IF; }
  case 12:{ gt = 232; break IF; }
  case 13:{ gt = 237; break IF; }
  case 14:{ gt = 242; break IF; }
  case 15:{ gt = 247; break IF; }
  case 16:{ gt = 252; break IF; }
  case 17:{ gt = 260; break IF; }
  case 18:{ gt = 265; break IF; }
  case 19:{ gt = 270; break IF; }
  case 20:{ gt = 275; break IF; }
  case 21:{ gt = 280; break IF; }
  case 22:{ gt = 285; break IF; }
  case 23:{ gt = 290; break IF; }
  case 24:{ gt = 295; break IF; }
  case 25:{ gt = 300; break IF; }
  case 26:{ gt = 305; break IF; }
  case 27:{ gt = 310; break IF; }
  case 28:{ gt = 315; break IF; }
  case 29:{ gt = 320; break IF; }
  case 30:{ gt = 325; break IF; }
  case 31:{ gt = 330; break IF; }
  case 32:{ gt = 335; break IF; }
  case 33:{ gt = 343; break IF; }
  case 34:{ gt = 351; break IF; }
  case 35:{ gt = 359; break IF; }
  default: { gt = 367; break IF; }
}
    }
    X_160: for (;;) { IF: if (gt <= 160) {

var stI0 = lcA1.isIsBrowserIE__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_168: for (;;) { IF: if (gt <= 168) {

var stA0 = lcA1.getInstance__Ljava_lang_String_2();
return stA0;
    }
    X_173: for (;;) { IF: if (gt <= 173) {

var stI0 = lcA1.isDesignerMode__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_181: for (;;) { IF: if (gt <= 181) {

var stA0 = lcA1.getConfiguration__Lio_cloudoffice_platform_cockpit_document_DocumentConfiguration_2();
return stA0;
    }
    X_186: for (;;) { IF: if (gt <= 186) {

var stA0 = lcA1.getViewMode__Ljava_lang_String_2();
return stA0;
    }
    X_191: for (;;) { IF: if (gt <= 191) {

var stI0 = lcA1.isFullViewEnabled__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_199: for (;;) { IF: if (gt <= 199) {

var stI0 = lcA1.isVisible__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_207: for (;;) { IF: if (gt <= 207) {

var stA0 = lcA1.getLayoutColumnId__Ljava_lang_String_2();
return stA0;
    }
    X_212: for (;;) { IF: if (gt <= 212) {

var stA0 = lcA1.getItemId__Ljava_lang_String_2();
return stA0;
    }
    X_217: for (;;) { IF: if (gt <= 217) {

var stA0 = lcA1.getItemName__Ljava_lang_String_2();
return stA0;
    }
    X_222: for (;;) { IF: if (gt <= 222) {

var stA0 = lcA1.getFileTypeIcon__Ljava_lang_String_2();
return stA0;
    }
    X_227: for (;;) { IF: if (gt <= 227) {

var stA0 = lcA1.getFileTypeIconColor__Ljava_lang_String_2();
return stA0;
    }
    X_232: for (;;) { IF: if (gt <= 232) {

var stA0 = lcA1.getFileName__Ljava_lang_String_2();
return stA0;
    }
    X_237: for (;;) { IF: if (gt <= 237) {

var stA0 = lcA1.getFileContent__Ljava_lang_String_2();
return stA0;
    }
    X_242: for (;;) { IF: if (gt <= 242) {

var stA0 = lcA1.getFileType__Ljava_lang_String_2();
return stA0;
    }
    X_247: for (;;) { IF: if (gt <= 247) {

var stA0 = lcA1.getFileSize__Ljava_lang_String_2();
return stA0;
    }
    X_252: for (;;) { IF: if (gt <= 252) {

var stI0 = lcA1.isIsImage__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_260: for (;;) { IF: if (gt <= 260) {

var stA0 = lcA1.getViewerHeight__Ljava_lang_String_2();
return stA0;
    }
    X_265: for (;;) { IF: if (gt <= 265) {

var stA0 = lcA1.getViewerWidth__Ljava_lang_String_2();
return stA0;
    }
    X_270: for (;;) { IF: if (gt <= 270) {

var stA0 = lcA1.getDataURL__Ljava_lang_String_2();
return stA0;
    }
    X_275: for (;;) { IF: if (gt <= 275) {

var stA0 = lcA1.getTitle__Ljava_lang_String_2();
return stA0;
    }
    X_280: for (;;) { IF: if (gt <= 280) {

var stA0 = lcA1.getVersion__Ljava_lang_String_2();
return stA0;
    }
    X_285: for (;;) { IF: if (gt <= 285) {

var stA0 = lcA1.getVersionList__Ljava_util_List_2();
return stA0;
    }
    X_290: for (;;) { IF: if (gt <= 290) {

var stA0 = lcA1.getFormatList__Ljava_util_List_2();
return stA0;
    }
    X_295: for (;;) { IF: if (gt <= 295) {

var stA0 = lcA1.getRelatedItemList__Ljava_util_List_2();
return stA0;
    }
    X_300: for (;;) { IF: if (gt <= 300) {

var stA0 = lcA1.getSharedItemList__Ljava_util_List_2();
return stA0;
    }
    X_305: for (;;) { IF: if (gt <= 305) {

var stA0 = lcA1.getFileData__Lio_cloudoffice_platform_cockpit_document_FileView_2();
return stA0;
    }
    X_310: for (;;) { IF: if (gt <= 310) {

var stA0 = lcA1.getCreatedDate__Ljava_lang_String_2();
return stA0;
    }
    X_315: for (;;) { IF: if (gt <= 315) {

var stA0 = lcA1.getCreatedBy__Ljava_lang_String_2();
return stA0;
    }
    X_320: for (;;) { IF: if (gt <= 320) {

var stA0 = lcA1.getLastModifiedDate__Ljava_lang_String_2();
return stA0;
    }
    X_325: for (;;) { IF: if (gt <= 325) {

var stA0 = lcA1.getLastModifiedBy__Ljava_lang_String_2();
return stA0;
    }
    X_330: for (;;) { IF: if (gt <= 330) {

var stA0 = lcA1.getLoader__Lio_cloudoffice_platform_cockpit_api_HelperItemView_2();
return stA0;
    }
    X_335: for (;;) { IF: if (gt <= 335) {

var stI0 = lcA1.isHasOwnerPermission__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_343: for (;;) { IF: if (gt <= 343) {

var stI0 = lcA1.isHasAdminPermission__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_351: for (;;) { IF: if (gt <= 351) {

var stI0 = lcA1.isHasWritePermission__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_359: for (;;) { IF: if (gt <= 359) {

var stI0 = lcA1.isHasReadPermission__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_367: for (;;) { IF: if (gt <= 367) {
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

    }
}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.call__VLio_cloudoffice_platform_cockpit_document_DocumentView_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0:{ gt = 96; break IF; }
  case 1:{ gt = 101; break IF; }
  case 2:{ gt = 106; break IF; }
  case 3:{ gt = 111; break IF; }
  case 4:{ gt = 116; break IF; }
  case 5:{ gt = 121; break IF; }
  case 6:{ gt = 126; break IF; }
  case 7:{ gt = 131; break IF; }
  case 8:{ gt = 136; break IF; }
  case 9:{ gt = 141; break IF; }
  case 10:{ gt = 146; break IF; }
  case 11:{ gt = 151; break IF; }
  case 12:{ gt = 156; break IF; }
  case 13:{ gt = 161; break IF; }
  case 14:{ gt = 166; break IF; }
  case 15:{ gt = 171; break IF; }
  case 16:{ gt = 176; break IF; }
  case 17:{ gt = 181; break IF; }
  case 18:{ gt = 186; break IF; }
  case 19:{ gt = 200; break IF; }
  default: { gt = 217; break IF; }
}
    }
    X_96: for (;;) { IF: if (gt <= 96) {

(refs_io_cloudoffice_platform_cockpit_document_DocumentComponent || (refs_io_cloudoffice_platform_cockpit_document_DocumentComponent = io_cloudoffice_platform_cockpit_document_DocumentComponent(false))).openConfig__VLio_cloudoffice_platform_cockpit_document_DocumentView_2(lcA1);
return;
    }
    X_101: for (;;) { IF: if (gt <= 101) {

(refs_io_cloudoffice_platform_cockpit_document_DocumentComponent || (refs_io_cloudoffice_platform_cockpit_document_DocumentComponent = io_cloudoffice_platform_cockpit_document_DocumentComponent(false))).closeConfigurationPanel__VLio_cloudoffice_platform_cockpit_document_DocumentView_2(lcA1);
return;
    }
    X_106: for (;;) { IF: if (gt <= 106) {

(refs_io_cloudoffice_platform_cockpit_document_DocumentComponent || (refs_io_cloudoffice_platform_cockpit_document_DocumentComponent = io_cloudoffice_platform_cockpit_document_DocumentComponent(false))).save__VLio_cloudoffice_platform_cockpit_document_DocumentView_2(lcA1);
return;
    }
    X_111: for (;;) { IF: if (gt <= 111) {

(refs_io_cloudoffice_platform_cockpit_document_DocumentComponent || (refs_io_cloudoffice_platform_cockpit_document_DocumentComponent = io_cloudoffice_platform_cockpit_document_DocumentComponent(false))).resetConfiguration__VLio_cloudoffice_platform_cockpit_document_DocumentView_2(lcA1);
return;
    }
    X_116: for (;;) { IF: if (gt <= 116) {

(refs_io_cloudoffice_platform_cockpit_document_DocumentComponent || (refs_io_cloudoffice_platform_cockpit_document_DocumentComponent = io_cloudoffice_platform_cockpit_document_DocumentComponent(false))).enableFullView__VLio_cloudoffice_platform_cockpit_document_DocumentView_2(lcA1);
return;
    }
    X_121: for (;;) { IF: if (gt <= 121) {

(refs_io_cloudoffice_platform_cockpit_document_DocumentComponent || (refs_io_cloudoffice_platform_cockpit_document_DocumentComponent = io_cloudoffice_platform_cockpit_document_DocumentComponent(false))).enableSplitView__VLio_cloudoffice_platform_cockpit_document_DocumentView_2(lcA1);
return;
    }
    X_126: for (;;) { IF: if (gt <= 126) {

(refs_io_cloudoffice_platform_cockpit_document_DocumentComponent || (refs_io_cloudoffice_platform_cockpit_document_DocumentComponent = io_cloudoffice_platform_cockpit_document_DocumentComponent(false))).backToList__VLio_cloudoffice_platform_cockpit_document_DocumentView_2(lcA1);
return;
    }
    X_131: for (;;) { IF: if (gt <= 131) {

(refs_io_cloudoffice_platform_cockpit_document_DocumentComponent || (refs_io_cloudoffice_platform_cockpit_document_DocumentComponent = io_cloudoffice_platform_cockpit_document_DocumentComponent(false))).hideList__VLio_cloudoffice_platform_cockpit_document_DocumentView_2(lcA1);
return;
    }
    X_136: for (;;) { IF: if (gt <= 136) {

(refs_io_cloudoffice_platform_cockpit_document_DocumentComponent || (refs_io_cloudoffice_platform_cockpit_document_DocumentComponent = io_cloudoffice_platform_cockpit_document_DocumentComponent(false))).showList__VLio_cloudoffice_platform_cockpit_document_DocumentView_2(lcA1);
return;
    }
    X_141: for (;;) { IF: if (gt <= 141) {

(refs_io_cloudoffice_platform_cockpit_document_DocumentComponent || (refs_io_cloudoffice_platform_cockpit_document_DocumentComponent = io_cloudoffice_platform_cockpit_document_DocumentComponent(false))).clearFilter__VLio_cloudoffice_platform_cockpit_document_DocumentView_2(lcA1);
return;
    }
    X_146: for (;;) { IF: if (gt <= 146) {

(refs_io_cloudoffice_platform_cockpit_document_DocumentComponent || (refs_io_cloudoffice_platform_cockpit_document_DocumentComponent = io_cloudoffice_platform_cockpit_document_DocumentComponent(false))).enableEditMode__VLio_cloudoffice_platform_cockpit_document_DocumentView_2(lcA1);
return;
    }
    X_151: for (;;) { IF: if (gt <= 151) {

(refs_io_cloudoffice_platform_cockpit_document_DocumentComponent || (refs_io_cloudoffice_platform_cockpit_document_DocumentComponent = io_cloudoffice_platform_cockpit_document_DocumentComponent(false))).enableCreateMode__VLio_cloudoffice_platform_cockpit_document_DocumentView_2(lcA1);
return;
    }
    X_156: for (;;) { IF: if (gt <= 156) {

(refs_io_cloudoffice_platform_cockpit_document_DocumentComponent || (refs_io_cloudoffice_platform_cockpit_document_DocumentComponent = io_cloudoffice_platform_cockpit_document_DocumentComponent(false))).createDocument__VLio_cloudoffice_platform_cockpit_document_DocumentView_2(lcA1);
return;
    }
    X_161: for (;;) { IF: if (gt <= 161) {

(refs_io_cloudoffice_platform_cockpit_document_DocumentComponent || (refs_io_cloudoffice_platform_cockpit_document_DocumentComponent = io_cloudoffice_platform_cockpit_document_DocumentComponent(false))).saveFile__VLio_cloudoffice_platform_cockpit_document_DocumentView_2(lcA1);
return;
    }
    X_166: for (;;) { IF: if (gt <= 166) {

(refs_io_cloudoffice_platform_cockpit_document_DocumentComponent || (refs_io_cloudoffice_platform_cockpit_document_DocumentComponent = io_cloudoffice_platform_cockpit_document_DocumentComponent(false))).updateFile__VLio_cloudoffice_platform_cockpit_document_DocumentView_2(lcA1);
return;
    }
    X_171: for (;;) { IF: if (gt <= 171) {

(refs_io_cloudoffice_platform_cockpit_document_DocumentComponent || (refs_io_cloudoffice_platform_cockpit_document_DocumentComponent = io_cloudoffice_platform_cockpit_document_DocumentComponent(false))).reloadSelectedDocument__VLio_cloudoffice_platform_cockpit_document_DocumentView_2(lcA1);
return;
    }
    X_176: for (;;) { IF: if (gt <= 176) {

(refs_io_cloudoffice_platform_cockpit_document_DocumentComponent || (refs_io_cloudoffice_platform_cockpit_document_DocumentComponent = io_cloudoffice_platform_cockpit_document_DocumentComponent(false))).showActionMenu__VLio_cloudoffice_platform_cockpit_document_DocumentView_2(lcA1);
return;
    }
    X_181: for (;;) { IF: if (gt <= 181) {

(refs_io_cloudoffice_platform_cockpit_document_DocumentComponent || (refs_io_cloudoffice_platform_cockpit_document_DocumentComponent = io_cloudoffice_platform_cockpit_document_DocumentComponent(false))).clearDocumentData__VLio_cloudoffice_platform_cockpit_document_DocumentView_2(lcA1);
return;
    }
    X_186: for (;;) { IF: if (gt <= 186) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_document_DocumentView || (refs_io_cloudoffice_platform_cockpit_document_DocumentView = io_cloudoffice_platform_cockpit_document_DocumentView(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_document_DocumentView_2(lcA1);
var stA1 = invoker.toString__Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_String_2(stA1,lcA3, null);
(refs_io_cloudoffice_platform_cockpit_document_DocumentComponent || (refs_io_cloudoffice_platform_cockpit_document_DocumentComponent = io_cloudoffice_platform_cockpit_document_DocumentComponent(false))).processDocumentDetail__VLio_cloudoffice_platform_cockpit_document_DocumentView_2Ljava_lang_String_2(stA0, stA1);
return;
    }
    X_200: for (;;) { IF: if (gt <= 200) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_document_DocumentView || (refs_io_cloudoffice_platform_cockpit_document_DocumentView = io_cloudoffice_platform_cockpit_document_DocumentView(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_document_DocumentView_2(lcA1);
var stA1 = invoker.toString__Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_String_2(stA1,lcA4, "virtualDocumentItemId");
(refs_io_cloudoffice_platform_cockpit_document_DocumentComponent || (refs_io_cloudoffice_platform_cockpit_document_DocumentComponent = io_cloudoffice_platform_cockpit_document_DocumentComponent(false))).getSystemData__VLio_cloudoffice_platform_cockpit_document_DocumentView_2Ljava_lang_String_2(stA0, stA1);
return;
    }
    X_217: for (;;) { IF: if (gt <= 217) {
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

    }
}}}}}}}}}}}}}}}}}}}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_document_DocumentView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.document.DocumentView');
var stA0 = (refs_io_cloudoffice_platform_cockpit_document_DocumentView || (refs_io_cloudoffice_platform_cockpit_document_DocumentView = io_cloudoffice_platform_cockpit_document_DocumentView(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_document_DocumentView_2(lcA1);
return stA0;

};
c['protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.onChange__VLio_cloudoffice_platform_cockpit_document_DocumentView_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLio_cloudoffice_platform_cockpit_document_DocumentView_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
var stA1 = stA0;var stA2 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"index: ");
var stA2 = invoker.append__Ljava_lang_StringBuilder_2I(stA2,lcI2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2," type: ");
var stA2 = invoker.append__Ljava_lang_StringBuilder_2I(stA2,lcI3);
var stA2 = invoker.toString__Ljava_lang_String_2(stA2);
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__VLjava_lang_String_2'].call(stA1, stA2);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.read__Lio_cloudoffice_platform_cockpit_document_DocumentView_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = new io_cloudoffice_platform_cockpit_document_DocumentView;
(refs_io_cloudoffice_platform_cockpit_document_DocumentView || (refs_io_cloudoffice_platform_cockpit_document_DocumentView = io_cloudoffice_platform_cockpit_document_DocumentView(false))).constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_document_DocumentView$1_2.call(stA0, lcA1, lcA2, null);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.cloneTo__Lio_cloudoffice_platform_cockpit_document_DocumentView_2Lio_cloudoffice_platform_cockpit_document_DocumentView_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = (refs_io_cloudoffice_platform_cockpit_document_DocumentView || (refs_io_cloudoffice_platform_cockpit_document_DocumentView = io_cloudoffice_platform_cockpit_document_DocumentView(false))).access$400__Lio_cloudoffice_platform_cockpit_document_DocumentView_2Lio_cloudoffice_platform_cockpit_document_DocumentView_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_document_DocumentView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.document.DocumentView');
lcA0.onMessage__VLio_cloudoffice_platform_cockpit_document_DocumentView_2IILjava_lang_Object_2_3Ljava_lang_Object_2(lcA1, lcI2, lcI3, lcA4, lcA5);
return;

};
c['onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.onChange__VLjava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_document_DocumentView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.document.DocumentView');
lcA0.onChange__VLio_cloudoffice_platform_cockpit_document_DocumentView_2I(lcA1, lcI2);
return;

};
c['onChange__VLjava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = lcA0.read__Lio_cloudoffice_platform_cockpit_document_DocumentView_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2(lcA1, lcA2);
return stA0;

};
c['read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_document_DocumentView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.document.DocumentView');
var stA0 = lcA0.cloneTo__Lio_cloudoffice_platform_cockpit_document_DocumentView_2Lio_cloudoffice_platform_cockpit_document_DocumentView_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
c['cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_document_DocumentView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.document.DocumentView');
lcA0.call__VLio_cloudoffice_platform_cockpit_document_DocumentView_2ILjava_lang_Object_2Ljava_lang_Object_2(lcA1, lcI2, lcA3, lcA4);
return;

};
c['call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Ljava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_document_DocumentView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.document.DocumentView');
var stA0 = lcA0.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_document_DocumentView_2I(lcA1, lcI2);
return stA0;

};
c['getValue__Ljava_lang_Object_2Ljava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.setValue__VLjava_lang_Object_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_document_DocumentView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.document.DocumentView');
lcA0.setValue__VLio_cloudoffice_platform_cockpit_document_DocumentView_2ILjava_lang_Object_2(lcA1, lcI2, lcA3);
return;

};
c['setValue__VLjava_lang_Object_2ILjava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_document_DocumentView$1_2 = function(lcA1) {
  var  lcA0 = this;
c.constructor.cons__V.call(lcA0);
return;

};
    m.access = 4096;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_document_DocumentView$Html4JavaTypefillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_document_DocumentView$Html4JavaType', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_document_DocumentView$Html4JavaTypefillInstOf });
    io_cloudoffice_platform_cockpit_document_DocumentView$Html4JavaTypefillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/document/DocumentView$Html4JavaType';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_document_DocumentView;
    var refs_io_cloudoffice_platform_cockpit_document_DocumentComponent;
    var refs_org_netbeans_html_json_spi_Proto$Type;
    var refs_java_lang_String;
    var refs_java_lang_Boolean;
    var refs_io_cloudoffice_platform_cockpit_document_DocumentConfiguration;
    var refs_io_cloudoffice_platform_cockpit_document_FileVersion;
    var refs_io_cloudoffice_platform_cockpit_document_FileFormat;
    var refs_io_cloudoffice_platform_cockpit_document_Item;
    var refs_io_cloudoffice_platform_cockpit_document_FileView;
    var refs_io_cloudoffice_platform_cockpit_api_HelperItemView;
    var refs_java_lang_UnsupportedOperationException;
    var refs_java_lang_StringBuilder;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_document_DocumentView$Html4JavaType = io_cloudoffice_platform_cockpit_document_DocumentView$Html4JavaType;


function io_cloudoffice_platform_cockpit_document_FileFormat() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_document_FileFormat;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_TYPE'] = null;
  m = c._TYPE = function (v) {  if (arguments.length == 1) CLS['fld_TYPE'] = v; return CLS['fld_TYPE']; };
  m = c._proto = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_document_FileFormat_proto'] = v; return this['fld_io_cloudoffice_platform_cockpit_document_FileFormat_proto']; };
  m = c._prop_format = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_document_FileFormat_prop_format'] = v; return this['fld_io_cloudoffice_platform_cockpit_document_FileFormat_prop_format']; };
  m = c._prop_formatURL = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_document_FileFormat_prop_formatURL'] = v; return this['fld_io_cloudoffice_platform_cockpit_document_FileFormat_prop_formatURL']; };
    m = c.modelFor__Ljava_lang_Class_2 = function() {
return (refs_io_cloudoffice_platform_cockpit_document_DocumentComponent$FileFormatModel || (refs_io_cloudoffice_platform_cockpit_document_DocumentComponent$FileFormatModel = io_cloudoffice_platform_cockpit_document_DocumentComponent$FileFormatModel(false))).constructor.$class;

};
    m.access = 10;
    m.cls = CLS;
    m = c.getFormat__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_FileFormat_proto'],"format");
return lcA0['fld_io_cloudoffice_platform_cockpit_document_FileFormat_prop_format'];

};
c['getFormat__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setFormat__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_document_FileFormat_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_document_FileFormat_prop_format'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_document_FileFormat_prop_format'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_FileFormat_proto'],"format", lcA2, lcA1);
return;

    }
}}
};
c['setFormat__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getFormatURL__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_FileFormat_proto'],"formatURL");
return lcA0['fld_io_cloudoffice_platform_cockpit_document_FileFormat_prop_formatURL'];

};
c['getFormatURL__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setFormatURL__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_document_FileFormat_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_document_FileFormat_prop_formatURL'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_document_FileFormat_prop_formatURL'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_FileFormat_proto'],"formatURL", lcA2, lcA1);
return;

    }
}}
};
c['setFormatURL__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.createProto__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2(c._TYPE(),lcA0, lcA1);
stA0['fld_io_cloudoffice_platform_cockpit_document_FileFormat_proto'] = stA1;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = (refs_net_java_html_BrwsrCtx || (refs_net_java_html_BrwsrCtx = vm.net_java_html_BrwsrCtx(false)))['findDefault__Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'](c.constructor.$class);
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, stA1);
return;

};
CLS['cons__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLjava_lang_String_2Ljava_lang_String_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = (refs_net_java_html_BrwsrCtx || (refs_net_java_html_BrwsrCtx = vm.net_java_html_BrwsrCtx(false)))['findDefault__Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'](c.constructor.$class);
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, stA1);
lcA0['fld_io_cloudoffice_platform_cockpit_document_FileFormat_prop_format'] = lcA1;
lcA0['fld_io_cloudoffice_platform_cockpit_document_FileFormat_prop_formatURL'] = lcA2;
return;

};
CLS['cons__VLjava_lang_String_2Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 2);
var lcA3 = stA0;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_document_FileFormat_proto'];var stA1 = lcA2;var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, 2);
Array.at(stA2, 0, "format");
Array.at(stA2, 1, "formatURL");
invoker.extract__VLjava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Object_2(stA0,stA1, stA2, lcA3);
if ((lcA3[0] || Array.at(lcA3, 0)) !== null && !(lcA3[0] || Array.at(lcA3, 0))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[0] || Array.at(lcA3, 0)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_document_FileFormat_prop_format'] = (lcA3[0] || Array.at(lcA3, 0));
if ((lcA3[1] || Array.at(lcA3, 1)) !== null && !(lcA3[1] || Array.at(lcA3, 1))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[1] || Array.at(lcA3, 1)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_document_FileFormat_prop_formatURL'] = (lcA3[1] || Array.at(lcA3, 1));
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.useAsArray___3Ljava_lang_Object_2Ljava_lang_Object_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](lcA0, 1, vm.java_lang_Object);
if ((stI0) == 0) { gt = 17; break IF; }
if (lcA0 !== null && !Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](lcA0, 1, vm.java_lang_Object)) vm.java_lang_Class(false).castEx(lcA0, '');
if (lcA0 !== null && !Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](lcA0, 1, vm.java_lang_Object)) vm.java_lang_Class(false).castEx(lcA0, '');
var stA0 = lcA0;{ gt = 36; break IF; }
    }
    X_17: for (;;) { IF: if (gt <= 17) {

if ((lcA0) !== null) { gt = 28; break IF; }
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 0);
{ gt = 36; break IF; }
    }
    X_28: for (;;) { IF: if (gt <= 28) {

var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 1);
Array.at(stA0, 0, lcA0);
    }
    X_36: for (;;) { IF: if (gt <= 36) {
return stA0;

    }
}}}}
};
    m.access = 10;
    m.cls = CLS;
    m = c.toString__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var lcA1 = stA0;
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(123));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"format");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getFormat__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"formatURL");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getFormatURL__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(125));
var stA0 = invoker.toString__Ljava_lang_String_2(lcA1);
return stA0;

};
c['toString__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Lio_cloudoffice_platform_cockpit_document_FileFormat_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_FileFormat_proto']);
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_document_FileFormat_2Lnet_java_html_BrwsrCtx_2.call(stA0, stA1);
return stA0;

};
c['clone__Lio_cloudoffice_platform_cockpit_document_FileFormat_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Lio_cloudoffice_platform_cockpit_document_FileFormat_2Lnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = new io_cloudoffice_platform_cockpit_document_FileFormat;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, lcA1);
var lcA2 = stA0;
var stA0 = lcA2;var stA1 = lcA0.getFormat__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_document_FileFormat_prop_format'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getFormatURL__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_document_FileFormat_prop_formatURL'] = stA1;
return lcA2;

};
    m.access = 2;
    m.cls = CLS;
    m = c.applyBindings__Lio_cloudoffice_platform_cockpit_document_FileFormat_2 = function() {
  var  lcA0 = this;
invoker.applyBindings__V(lcA0['fld_io_cloudoffice_platform_cockpit_document_FileFormat_proto']);
return lcA0;

};
c['applyBindings__Lio_cloudoffice_platform_cockpit_document_FileFormat_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.equals__ZLjava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((lcA1) !== (lcA0)) { gt = 7; break IF; }
return 1;
    }
    X_7: for (;;) { IF: if (gt <= 7) {

var stI0 = lcA1 != null && lcA1['$instOf_io_cloudoffice_platform_cockpit_document_FileFormat'] ? 1 : 0;
if ((stI0) != 0) { gt = 16; break IF; }
return 0;
    }
    X_16: for (;;) { IF: if (gt <= 16) {

if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_document_FileFormat']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.document.FileFormat');
var lcA2 = lcA1;
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_document_FileFormat_prop_format'], lcA2['fld_io_cloudoffice_platform_cockpit_document_FileFormat_prop_format']);
if ((stI0) != 0) { gt = 40; break IF; }
return 0;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_document_FileFormat_prop_formatURL'], lcA2['fld_io_cloudoffice_platform_cockpit_document_FileFormat_prop_formatURL']);
if ((stI0) != 0) { gt = 59; break IF; }
return 0;
    }
    X_59: for (;;) { IF: if (gt <= 59) {

return 1;

    }
}}}}}
};
c['equals__ZLjava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.hashCode__I = function() {
  var  lcA0 = this;
var stA0 = invoker.getName__Ljava_lang_String_2(c.constructor.$class);
var stI0 = invoker.hashCode__I(stA0);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_document_FileFormat_prop_format'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_document_FileFormat_prop_formatURL'], lcI1);
var lcI1 = stI0;
return lcI1;

};
c['hashCode__I'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Ljava_lang_Object_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0.clone__Lio_cloudoffice_platform_cockpit_document_FileFormat_2();
return stA0;

};
c['clone__Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.access$100__Lio_cloudoffice_platform_cockpit_document_FileFormat$Html4JavaType_2 = function() {
return c._TYPE();

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_document_FileFormat_2 = function(lcA0) {
return lcA0['fld_io_cloudoffice_platform_cockpit_document_FileFormat_proto'];

};
    m.access = 4104;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_document_FileFormat$1_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2.call(lcA0, lcA1, lcA2);
return;

};
    m.access = 4096;
    m.cls = CLS;
    m = c.access$400__Lio_cloudoffice_platform_cockpit_document_FileFormat_2Lio_cloudoffice_platform_cockpit_document_FileFormat_2Lnet_java_html_BrwsrCtx_2 = function(lcA0, lcA1) {
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_document_FileFormat_2Lnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
return stA0;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new io_cloudoffice_platform_cockpit_document_FileFormat$Html4JavaType;
(refs_io_cloudoffice_platform_cockpit_document_FileFormat$Html4JavaType || (refs_io_cloudoffice_platform_cockpit_document_FileFormat$Html4JavaType = io_cloudoffice_platform_cockpit_document_FileFormat$Html4JavaType(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_document_FileFormat$1_2.call(stA0, null);
c._TYPE(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_document_FileFormatfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_document_FileFormat', { value : true });
      vm.java_lang_Cloneable(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_document_FileFormatfillInstOf });
    io_cloudoffice_platform_cockpit_document_FileFormatfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/document/FileFormat';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.java_lang_Cloneable(false).constructor.$class
    ]; };
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_io_cloudoffice_platform_cockpit_document_DocumentComponent$FileFormatModel;
    var refs_net_java_html_BrwsrCtx;
    var refs_java_lang_StringBuilder;
    var refs_io_cloudoffice_platform_cockpit_document_FileFormat$Html4JavaType;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_document_FileFormat_proto'] = null;
    this['fld_io_cloudoffice_platform_cockpit_document_FileFormat_prop_format'] = null;
    this['fld_io_cloudoffice_platform_cockpit_document_FileFormat_prop_formatURL'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_document_FileFormat = registerClass(exports,'io_cloudoffice_platform_cockpit_document_FileFormat',io_cloudoffice_platform_cockpit_document_FileFormat);


function io_cloudoffice_platform_cockpit_document_FileFormat$Html4JavaType() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_document_FileFormat$Html4JavaType;
  if (!CLS.$class) {
    var pp = vm.org_netbeans_html_json_spi_Proto$Type(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_org_netbeans_html_json_spi_Proto$Type || (refs_org_netbeans_html_json_spi_Proto$Type = vm.org_netbeans_html_json_spi_Proto$Type(false))).constructor['cons__VLjava_lang_Class_2Ljava_lang_Class_2II'].call(lcA0, (refs_io_cloudoffice_platform_cockpit_document_FileFormat || (refs_io_cloudoffice_platform_cockpit_document_FileFormat = io_cloudoffice_platform_cockpit_document_FileFormat(false))).constructor.$class, (refs_io_cloudoffice_platform_cockpit_document_DocumentComponent$FileFormatModel || (refs_io_cloudoffice_platform_cockpit_document_DocumentComponent$FileFormatModel = io_cloudoffice_platform_cockpit_document_DocumentComponent$FileFormatModel(false))).constructor.$class, 2, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"format", 0, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"formatURL", 1, 0, 0);
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.setValue__VLio_cloudoffice_platform_cockpit_document_FileFormat_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0: { gt = 28; break IF; }
  case 1: { gt = 45; break IF; }
  default: { gt = 62; break IF; }
}
    }
    X_28: for (;;) { IF: if (gt <= 28) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_document_FileFormat || (refs_io_cloudoffice_platform_cockpit_document_FileFormat = io_cloudoffice_platform_cockpit_document_FileFormat(false))).access$100__Lio_cloudoffice_platform_cockpit_document_FileFormat$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setFormat__VLjava_lang_String_2(stA1);
return;
    }
    X_45: for (;;) { IF: if (gt <= 45) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_document_FileFormat || (refs_io_cloudoffice_platform_cockpit_document_FileFormat = io_cloudoffice_platform_cockpit_document_FileFormat(false))).access$100__Lio_cloudoffice_platform_cockpit_document_FileFormat$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setFormatURL__VLjava_lang_String_2(stA1);
return;
    }
    X_62: for (;;) { IF: if (gt <= 62) {
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

    }
}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_document_FileFormat_2I = function(lcA1, lcI2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0: { gt = 28; break IF; }
  case 1: { gt = 33; break IF; }
  default: { gt = 38; break IF; }
}
    }
    X_28: for (;;) { IF: if (gt <= 28) {

var stA0 = lcA1.getFormat__Ljava_lang_String_2();
return stA0;
    }
    X_33: for (;;) { IF: if (gt <= 33) {

var stA0 = lcA1.getFormatURL__Ljava_lang_String_2();
return stA0;
    }
    X_38: for (;;) { IF: if (gt <= 38) {
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

    }
}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.call__VLio_cloudoffice_platform_cockpit_document_FileFormat_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_document_FileFormat']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.document.FileFormat');
var stA0 = (refs_io_cloudoffice_platform_cockpit_document_FileFormat || (refs_io_cloudoffice_platform_cockpit_document_FileFormat = io_cloudoffice_platform_cockpit_document_FileFormat(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_document_FileFormat_2(lcA1);
return stA0;

};
c['protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.onChange__VLio_cloudoffice_platform_cockpit_document_FileFormat_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLio_cloudoffice_platform_cockpit_document_FileFormat_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
var stA1 = stA0;var stA2 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"index: ");
var stA2 = invoker.append__Ljava_lang_StringBuilder_2I(stA2,lcI2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2," type: ");
var stA2 = invoker.append__Ljava_lang_StringBuilder_2I(stA2,lcI3);
var stA2 = invoker.toString__Ljava_lang_String_2(stA2);
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__VLjava_lang_String_2'].call(stA1, stA2);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.read__Lio_cloudoffice_platform_cockpit_document_FileFormat_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = new io_cloudoffice_platform_cockpit_document_FileFormat;
(refs_io_cloudoffice_platform_cockpit_document_FileFormat || (refs_io_cloudoffice_platform_cockpit_document_FileFormat = io_cloudoffice_platform_cockpit_document_FileFormat(false))).constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_document_FileFormat$1_2.call(stA0, lcA1, lcA2, null);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.cloneTo__Lio_cloudoffice_platform_cockpit_document_FileFormat_2Lio_cloudoffice_platform_cockpit_document_FileFormat_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = (refs_io_cloudoffice_platform_cockpit_document_FileFormat || (refs_io_cloudoffice_platform_cockpit_document_FileFormat = io_cloudoffice_platform_cockpit_document_FileFormat(false))).access$400__Lio_cloudoffice_platform_cockpit_document_FileFormat_2Lio_cloudoffice_platform_cockpit_document_FileFormat_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_document_FileFormat']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.document.FileFormat');
lcA0.onMessage__VLio_cloudoffice_platform_cockpit_document_FileFormat_2IILjava_lang_Object_2_3Ljava_lang_Object_2(lcA1, lcI2, lcI3, lcA4, lcA5);
return;

};
c['onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.onChange__VLjava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_document_FileFormat']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.document.FileFormat');
lcA0.onChange__VLio_cloudoffice_platform_cockpit_document_FileFormat_2I(lcA1, lcI2);
return;

};
c['onChange__VLjava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = lcA0.read__Lio_cloudoffice_platform_cockpit_document_FileFormat_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2(lcA1, lcA2);
return stA0;

};
c['read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_document_FileFormat']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.document.FileFormat');
var stA0 = lcA0.cloneTo__Lio_cloudoffice_platform_cockpit_document_FileFormat_2Lio_cloudoffice_platform_cockpit_document_FileFormat_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
c['cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_document_FileFormat']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.document.FileFormat');
lcA0.call__VLio_cloudoffice_platform_cockpit_document_FileFormat_2ILjava_lang_Object_2Ljava_lang_Object_2(lcA1, lcI2, lcA3, lcA4);
return;

};
c['call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Ljava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_document_FileFormat']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.document.FileFormat');
var stA0 = lcA0.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_document_FileFormat_2I(lcA1, lcI2);
return stA0;

};
c['getValue__Ljava_lang_Object_2Ljava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.setValue__VLjava_lang_Object_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_document_FileFormat']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.document.FileFormat');
lcA0.setValue__VLio_cloudoffice_platform_cockpit_document_FileFormat_2ILjava_lang_Object_2(lcA1, lcI2, lcA3);
return;

};
c['setValue__VLjava_lang_Object_2ILjava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_document_FileFormat$1_2 = function(lcA1) {
  var  lcA0 = this;
c.constructor.cons__V.call(lcA0);
return;

};
    m.access = 4096;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_document_FileFormat$Html4JavaTypefillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_document_FileFormat$Html4JavaType', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_document_FileFormat$Html4JavaTypefillInstOf });
    io_cloudoffice_platform_cockpit_document_FileFormat$Html4JavaTypefillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/document/FileFormat$Html4JavaType';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_document_FileFormat;
    var refs_io_cloudoffice_platform_cockpit_document_DocumentComponent$FileFormatModel;
    var refs_org_netbeans_html_json_spi_Proto$Type;
    var refs_java_lang_String;
    var refs_java_lang_UnsupportedOperationException;
    var refs_java_lang_StringBuilder;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_document_FileFormat$Html4JavaType = io_cloudoffice_platform_cockpit_document_FileFormat$Html4JavaType;


function io_cloudoffice_platform_cockpit_document_DocumentComponent$FileFormatModel() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_document_DocumentComponent$FileFormatModel;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._this$0 = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$FileFormatModel_this$0'] = v; return this['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$FileFormatModel_this$0']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_document_DocumentComponent_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$FileFormatModel_this$0'] = lcA1;
return;

};
CLS['cons__VLio_cloudoffice_platform_cockpit_document_DocumentComponent_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_document_DocumentComponent$FileFormatModelfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_document_DocumentComponent$FileFormatModel', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_document_DocumentComponent$FileFormatModelfillInstOf });
    io_cloudoffice_platform_cockpit_document_DocumentComponent$FileFormatModelfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/document/DocumentComponent$FileFormatModel';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 33;
    CLS.$class.cnstr = CLS;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$FileFormatModel_this$0'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_document_DocumentComponent$FileFormatModel = registerClass(exports,'io_cloudoffice_platform_cockpit_document_DocumentComponent$FileFormatModel',io_cloudoffice_platform_cockpit_document_DocumentComponent$FileFormatModel);


function io_cloudoffice_platform_cockpit_document_FileVersion() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_document_FileVersion;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_TYPE'] = null;
  m = c._TYPE = function (v) {  if (arguments.length == 1) CLS['fld_TYPE'] = v; return CLS['fld_TYPE']; };
  m = c._proto = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_document_FileVersion_proto'] = v; return this['fld_io_cloudoffice_platform_cockpit_document_FileVersion_proto']; };
  m = c._prop_version = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_document_FileVersion_prop_version'] = v; return this['fld_io_cloudoffice_platform_cockpit_document_FileVersion_prop_version']; };
  m = c._prop_fileName = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_document_FileVersion_prop_fileName'] = v; return this['fld_io_cloudoffice_platform_cockpit_document_FileVersion_prop_fileName']; };
  m = c._prop_versionURL = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_document_FileVersion_prop_versionURL'] = v; return this['fld_io_cloudoffice_platform_cockpit_document_FileVersion_prop_versionURL']; };
  m = c._prop_formatList = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_document_FileVersion_prop_formatList'] = v; return this['fld_io_cloudoffice_platform_cockpit_document_FileVersion_prop_formatList']; };
  m = c._prop_selectedFormat = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_document_FileVersion_prop_selectedFormat'] = v; return this['fld_io_cloudoffice_platform_cockpit_document_FileVersion_prop_selectedFormat']; };
  m = c._prop_formatListDisplay = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_document_FileVersion_prop_formatListDisplay'] = v; return this['fld_io_cloudoffice_platform_cockpit_document_FileVersion_prop_formatListDisplay']; };
    m = c.modelFor__Ljava_lang_Class_2 = function() {
return (refs_io_cloudoffice_platform_cockpit_document_DocumentComponent$FileVersionModel || (refs_io_cloudoffice_platform_cockpit_document_DocumentComponent$FileVersionModel = io_cloudoffice_platform_cockpit_document_DocumentComponent$FileVersionModel(false))).constructor.$class;

};
    m.access = 10;
    m.cls = CLS;
    m = c.getVersion__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_FileVersion_proto'],"version");
return lcA0['fld_io_cloudoffice_platform_cockpit_document_FileVersion_prop_version'];

};
c['getVersion__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setVersion__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_document_FileVersion_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_document_FileVersion_prop_version'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_document_FileVersion_prop_version'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_FileVersion_proto'],"version", lcA2, lcA1);
return;

    }
}}
};
c['setVersion__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getFileName__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_FileVersion_proto'],"fileName");
return lcA0['fld_io_cloudoffice_platform_cockpit_document_FileVersion_prop_fileName'];

};
c['getFileName__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setFileName__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_document_FileVersion_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_document_FileVersion_prop_fileName'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_document_FileVersion_prop_fileName'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_FileVersion_proto'],"fileName", lcA2, lcA1);
return;

    }
}}
};
c['setFileName__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getVersionURL__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_FileVersion_proto'],"versionURL");
return lcA0['fld_io_cloudoffice_platform_cockpit_document_FileVersion_prop_versionURL'];

};
c['getVersionURL__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setVersionURL__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_document_FileVersion_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_document_FileVersion_prop_versionURL'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_document_FileVersion_prop_versionURL'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_FileVersion_proto'],"versionURL", lcA2, lcA1);
return;

    }
}}
};
c['setVersionURL__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getFormatList__Ljava_util_List_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_FileVersion_proto'],"formatList");
return lcA0['fld_io_cloudoffice_platform_cockpit_document_FileVersion_prop_formatList'];

};
c['getFormatList__Ljava_util_List_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getSelectedFormat__Lio_cloudoffice_platform_cockpit_document_FileFormat_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_FileVersion_proto'],"selectedFormat");
if ((lcA0['fld_io_cloudoffice_platform_cockpit_document_FileVersion_prop_selectedFormat']) !== (c._TYPE())) { gt = 40; break IF; }
var stA0 = lcA0;var stA1 = new io_cloudoffice_platform_cockpit_document_FileFormat;
(refs_io_cloudoffice_platform_cockpit_document_FileFormat || (refs_io_cloudoffice_platform_cockpit_document_FileFormat = io_cloudoffice_platform_cockpit_document_FileFormat(false))).constructor.cons__V.call(stA1);
var stA2 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_FileVersion_proto']);
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, stA2);
stA0['fld_io_cloudoffice_platform_cockpit_document_FileVersion_prop_selectedFormat'] = stA1;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

if (lcA0['fld_io_cloudoffice_platform_cockpit_document_FileVersion_prop_selectedFormat'] !== null && !lcA0['fld_io_cloudoffice_platform_cockpit_document_FileVersion_prop_selectedFormat']['$instOf_io_cloudoffice_platform_cockpit_document_FileFormat']) vm.java_lang_Class(false).castEx(lcA0['fld_io_cloudoffice_platform_cockpit_document_FileVersion_prop_selectedFormat'], 'io.cloudoffice.platform.cockpit.document.FileFormat');
return lcA0['fld_io_cloudoffice_platform_cockpit_document_FileVersion_prop_selectedFormat'];

    }
}}
};
c['getSelectedFormat__Lio_cloudoffice_platform_cockpit_document_FileFormat_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setSelectedFormat__VLio_cloudoffice_platform_cockpit_document_FileFormat_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_document_FileVersion_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_document_FileVersion_prop_selectedFormat'];
if ((lcA2) !== (lcA1)) { gt = 18; break IF; }
return;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

lcA0['fld_io_cloudoffice_platform_cockpit_document_FileVersion_prop_selectedFormat'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_FileVersion_proto'],"selectedFormat", lcA2, lcA1);
return;

    }
}}
};
c['setSelectedFormat__VLio_cloudoffice_platform_cockpit_document_FileFormat_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getFormatListDisplay__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_FileVersion_proto'],"formatListDisplay");
return lcA0['fld_io_cloudoffice_platform_cockpit_document_FileVersion_prop_formatListDisplay'];

};
c['getFormatListDisplay__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setFormatListDisplay__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_document_FileVersion_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_document_FileVersion_prop_formatListDisplay'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_document_FileVersion_prop_formatListDisplay'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_FileVersion_proto'],"formatListDisplay", lcA2, lcA1);
return;

    }
}}
};
c['setFormatListDisplay__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.createProto__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2(c._TYPE(),lcA0, lcA1);
stA0['fld_io_cloudoffice_platform_cockpit_document_FileVersion_proto'] = stA1;
var stA0 = lcA0;var stA1 = lcA0['fld_io_cloudoffice_platform_cockpit_document_FileVersion_proto'];var stA2 = "formatList";var stI3 = -1;var stA4 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, 0);
var stA1 = invoker.createList__Ljava_util_List_2Ljava_lang_String_2I_3Ljava_lang_String_2(stA1,stA2, stI3, stA4);
stA0['fld_io_cloudoffice_platform_cockpit_document_FileVersion_prop_formatList'] = stA1;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = (refs_net_java_html_BrwsrCtx || (refs_net_java_html_BrwsrCtx = vm.net_java_html_BrwsrCtx(false)))['findDefault__Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'](c.constructor.$class);
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, stA1);
lcA0['fld_io_cloudoffice_platform_cockpit_document_FileVersion_prop_selectedFormat'] = c._TYPE();
return;

};
CLS['cons__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Lio_cloudoffice_platform_cockpit_document_FileFormat_2Ljava_lang_String_2_3Lio_cloudoffice_platform_cockpit_document_FileFormat_2 = function(lcA1, lcA2, lcA3, lcA4, lcA5, lcA6) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = (refs_net_java_html_BrwsrCtx || (refs_net_java_html_BrwsrCtx = vm.net_java_html_BrwsrCtx(false)))['findDefault__Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'](c.constructor.$class);
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, stA1);
lcA0['fld_io_cloudoffice_platform_cockpit_document_FileVersion_prop_version'] = lcA1;
lcA0['fld_io_cloudoffice_platform_cockpit_document_FileVersion_prop_fileName'] = lcA2;
lcA0['fld_io_cloudoffice_platform_cockpit_document_FileVersion_prop_versionURL'] = lcA3;
lcA0['fld_io_cloudoffice_platform_cockpit_document_FileVersion_prop_selectedFormat'] = lcA4;
lcA0['fld_io_cloudoffice_platform_cockpit_document_FileVersion_prop_formatListDisplay'] = lcA5;
invoker.initTo__VLjava_util_Collection_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_FileVersion_proto'],lcA0['fld_io_cloudoffice_platform_cockpit_document_FileVersion_prop_formatList'], lcA6);
return;

};
CLS['cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Lio_cloudoffice_platform_cockpit_document_FileFormat_2Ljava_lang_String_2_3Lio_cloudoffice_platform_cockpit_document_FileFormat_2'] = m;

    m.access = 129;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, (6));
var lcA3 = stA0;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_document_FileVersion_proto'];var stA1 = lcA2;var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, (6));
Array.at(stA2, 0, "version");
Array.at(stA2, 1, "fileName");
Array.at(stA2, 2, "versionURL");
Array.at(stA2, 3, "formatList");
Array.at(stA2, 4, "selectedFormat");
Array.at(stA2, 5, "formatListDisplay");
invoker.extract__VLjava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Object_2(stA0,stA1, stA2, lcA3);
if ((lcA3[0] || Array.at(lcA3, 0)) !== null && !(lcA3[0] || Array.at(lcA3, 0))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[0] || Array.at(lcA3, 0)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_document_FileVersion_prop_version'] = (lcA3[0] || Array.at(lcA3, 0));
if ((lcA3[1] || Array.at(lcA3, 1)) !== null && !(lcA3[1] || Array.at(lcA3, 1))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[1] || Array.at(lcA3, 1)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_document_FileVersion_prop_fileName'] = (lcA3[1] || Array.at(lcA3, 1));
if ((lcA3[2] || Array.at(lcA3, 2)) !== null && !(lcA3[2] || Array.at(lcA3, 2))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[2] || Array.at(lcA3, 2)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_document_FileVersion_prop_versionURL'] = (lcA3[2] || Array.at(lcA3, 2));
var stA0 = c.useAsArray___3Ljava_lang_Object_2Ljava_lang_Object_2((lcA3[3] || Array.at(lcA3, 3)));
var lcA4 = stA0;
var lcI5 = (lcA4).length;
var lcI6 = 0;
    }
    X_101: for (;;) { IF: if (gt <= 101) {

if ((lcI6) >= (lcI5)) { gt = 142; break IF; }
var lcA7 = (lcA4[lcI6] || Array.at(lcA4, lcI6));
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_document_FileVersion_prop_formatList'];var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_FileVersion_proto'],(refs_io_cloudoffice_platform_cockpit_document_FileFormat || (refs_io_cloudoffice_platform_cockpit_document_FileFormat = io_cloudoffice_platform_cockpit_document_FileFormat(false))).constructor.$class, lcA7);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,stA1);
lcI6++;
{ gt = 0; continue X_101; }
    }
    X_142: for (;;) { IF: if (gt <= 142) {

var stA0 = lcA0;var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_FileVersion_proto'],(refs_io_cloudoffice_platform_cockpit_document_FileFormat || (refs_io_cloudoffice_platform_cockpit_document_FileFormat = io_cloudoffice_platform_cockpit_document_FileFormat(false))).constructor.$class, (lcA3[4] || Array.at(lcA3, 4)));
stA0['fld_io_cloudoffice_platform_cockpit_document_FileVersion_prop_selectedFormat'] = stA1;
if ((lcA3[5] || Array.at(lcA3, 5)) !== null && !(lcA3[5] || Array.at(lcA3, 5))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[5] || Array.at(lcA3, 5)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_document_FileVersion_prop_formatListDisplay'] = (lcA3[5] || Array.at(lcA3, 5));
return;

    }
}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.useAsArray___3Ljava_lang_Object_2Ljava_lang_Object_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](lcA0, 1, vm.java_lang_Object);
if ((stI0) == 0) { gt = 17; break IF; }
if (lcA0 !== null && !Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](lcA0, 1, vm.java_lang_Object)) vm.java_lang_Class(false).castEx(lcA0, '');
if (lcA0 !== null && !Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](lcA0, 1, vm.java_lang_Object)) vm.java_lang_Class(false).castEx(lcA0, '');
var stA0 = lcA0;{ gt = 36; break IF; }
    }
    X_17: for (;;) { IF: if (gt <= 17) {

if ((lcA0) !== null) { gt = 28; break IF; }
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 0);
{ gt = 36; break IF; }
    }
    X_28: for (;;) { IF: if (gt <= 28) {

var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 1);
Array.at(stA0, 0, lcA0);
    }
    X_36: for (;;) { IF: if (gt <= 36) {
return stA0;

    }
}}}}
};
    m.access = 10;
    m.cls = CLS;
    m = c.toString__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var lcA1 = stA0;
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(123));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"version");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getVersion__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"fileName");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getFileName__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"versionURL");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getVersionURL__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"formatList");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_document_FileVersion_prop_formatList']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"selectedFormat");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_document_FileVersion_prop_selectedFormat']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"formatListDisplay");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getFormatListDisplay__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(125));
var stA0 = invoker.toString__Ljava_lang_String_2(lcA1);
return stA0;

};
c['toString__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Lio_cloudoffice_platform_cockpit_document_FileVersion_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_FileVersion_proto']);
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_document_FileVersion_2Lnet_java_html_BrwsrCtx_2.call(stA0, stA1);
return stA0;

};
c['clone__Lio_cloudoffice_platform_cockpit_document_FileVersion_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Lio_cloudoffice_platform_cockpit_document_FileVersion_2Lnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
var stA0 = new io_cloudoffice_platform_cockpit_document_FileVersion;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, lcA1);
var lcA2 = stA0;
var stA0 = lcA2;var stA1 = lcA0.getVersion__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_document_FileVersion_prop_version'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getFileName__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_document_FileVersion_prop_fileName'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getVersionURL__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_document_FileVersion_prop_versionURL'] = stA1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_document_FileVersion_proto'];var stA1 = lcA2.getFormatList__Ljava_util_List_2();
invoker.cloneList__VLjava_util_Collection_2Lnet_java_html_BrwsrCtx_2Ljava_util_Collection_2(stA0,stA1, lcA1, lcA0['fld_io_cloudoffice_platform_cockpit_document_FileVersion_prop_formatList']);
var stA0 = lcA2;if ((lcA0['fld_io_cloudoffice_platform_cockpit_document_FileVersion_prop_selectedFormat']) !== null) { gt = 61; break IF; }
var stA1 = null;{ gt = 85; break IF; }
    }
    X_61: for (;;) { IF: if (gt <= 61) {

if ((lcA0['fld_io_cloudoffice_platform_cockpit_document_FileVersion_prop_selectedFormat']) !== (c._TYPE())) { gt = 77; break IF; }
var stA1 = c._TYPE();{ gt = 85; break IF; }
    }
    X_77: for (;;) { IF: if (gt <= 77) {

var stA1 = lcA0.getSelectedFormat__Lio_cloudoffice_platform_cockpit_document_FileFormat_2();
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, lcA1);
    }
    X_85: for (;;) { IF: if (gt <= 85) {
stA0['fld_io_cloudoffice_platform_cockpit_document_FileVersion_prop_selectedFormat'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getFormatListDisplay__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_document_FileVersion_prop_formatListDisplay'] = stA1;
return lcA2;

    }
}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.applyBindings__Lio_cloudoffice_platform_cockpit_document_FileVersion_2 = function() {
  var  lcA0 = this;
invoker.applyBindings__V(lcA0['fld_io_cloudoffice_platform_cockpit_document_FileVersion_proto']);
return lcA0;

};
c['applyBindings__Lio_cloudoffice_platform_cockpit_document_FileVersion_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.equals__ZLjava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((lcA1) !== (lcA0)) { gt = 7; break IF; }
return 1;
    }
    X_7: for (;;) { IF: if (gt <= 7) {

var stI0 = lcA1 != null && lcA1['$instOf_io_cloudoffice_platform_cockpit_document_FileVersion'] ? 1 : 0;
if ((stI0) != 0) { gt = 16; break IF; }
return 0;
    }
    X_16: for (;;) { IF: if (gt <= 16) {

if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_document_FileVersion']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.document.FileVersion');
var lcA2 = lcA1;
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_document_FileVersion_prop_version'], lcA2['fld_io_cloudoffice_platform_cockpit_document_FileVersion_prop_version']);
if ((stI0) != 0) { gt = 40; break IF; }
return 0;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_document_FileVersion_prop_fileName'], lcA2['fld_io_cloudoffice_platform_cockpit_document_FileVersion_prop_fileName']);
if ((stI0) != 0) { gt = 59; break IF; }
return 0;
    }
    X_59: for (;;) { IF: if (gt <= 59) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_document_FileVersion_prop_versionURL'], lcA2['fld_io_cloudoffice_platform_cockpit_document_FileVersion_prop_versionURL']);
if ((stI0) != 0) { gt = 78; break IF; }
return 0;
    }
    X_78: for (;;) { IF: if (gt <= 78) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_document_FileVersion_prop_formatList']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_document_FileVersion_prop_formatList']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 105; break IF; }
return 0;
    }
    X_105: for (;;) { IF: if (gt <= 105) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_document_FileVersion_prop_selectedFormat']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_document_FileVersion_prop_selectedFormat']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 132; break IF; }
return 0;
    }
    X_132: for (;;) { IF: if (gt <= 132) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_document_FileVersion_prop_formatListDisplay'], lcA2['fld_io_cloudoffice_platform_cockpit_document_FileVersion_prop_formatListDisplay']);
if ((stI0) != 0) { gt = 151; break IF; }
return 0;
    }
    X_151: for (;;) { IF: if (gt <= 151) {

return 1;

    }
}}}}}}}}}
};
c['equals__ZLjava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.hashCode__I = function() {
  var  lcA0 = this;
var stA0 = invoker.getName__Ljava_lang_String_2(c.constructor.$class);
var stI0 = invoker.hashCode__I(stA0);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_document_FileVersion_prop_version'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_document_FileVersion_prop_fileName'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_document_FileVersion_prop_versionURL'], lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_document_FileVersion_prop_formatList']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_document_FileVersion_prop_selectedFormat']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_document_FileVersion_prop_formatListDisplay'], lcI1);
var lcI1 = stI0;
return lcI1;

};
c['hashCode__I'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((lcA1) === (lcA0)) { gt = 12; break IF; }
if ((lcA1) !== (c._TYPE())) { gt = 16; break IF; }
    }
    X_12: for (;;) { IF: if (gt <= 12) {

var stA0 = null;{ gt = 17; break IF; }
    }
    X_16: for (;;) { IF: if (gt <= 16) {

var stA0 = lcA1;    }
    X_17: for (;;) { IF: if (gt <= 17) {
return stA0;

    }
}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.clone__Ljava_lang_Object_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0.clone__Lio_cloudoffice_platform_cockpit_document_FileVersion_2();
return stA0;

};
c['clone__Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.access$100__Lio_cloudoffice_platform_cockpit_document_FileVersion$Html4JavaType_2 = function() {
return c._TYPE();

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_document_FileVersion_2 = function(lcA0) {
return lcA0['fld_io_cloudoffice_platform_cockpit_document_FileVersion_proto'];

};
    m.access = 4104;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_document_FileVersion$1_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2.call(lcA0, lcA1, lcA2);
return;

};
    m.access = 4096;
    m.cls = CLS;
    m = c.access$400__Lio_cloudoffice_platform_cockpit_document_FileVersion_2Lio_cloudoffice_platform_cockpit_document_FileVersion_2Lnet_java_html_BrwsrCtx_2 = function(lcA0, lcA1) {
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_document_FileVersion_2Lnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
return stA0;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new io_cloudoffice_platform_cockpit_document_FileVersion$Html4JavaType;
(refs_io_cloudoffice_platform_cockpit_document_FileVersion$Html4JavaType || (refs_io_cloudoffice_platform_cockpit_document_FileVersion$Html4JavaType = io_cloudoffice_platform_cockpit_document_FileVersion$Html4JavaType(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_document_FileVersion$1_2.call(stA0, null);
c._TYPE(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_document_FileVersionfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_document_FileVersion', { value : true });
      vm.java_lang_Cloneable(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_document_FileVersionfillInstOf });
    io_cloudoffice_platform_cockpit_document_FileVersionfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/document/FileVersion';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.java_lang_Cloneable(false).constructor.$class
    ]; };
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_io_cloudoffice_platform_cockpit_document_DocumentComponent$FileVersionModel;
    var refs_io_cloudoffice_platform_cockpit_document_FileFormat;
    var refs_net_java_html_json_Models;
    var refs_net_java_html_BrwsrCtx;
    var refs_java_lang_StringBuilder;
    var refs_io_cloudoffice_platform_cockpit_document_FileVersion$Html4JavaType;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_document_FileVersion_proto'] = null;
    this['fld_io_cloudoffice_platform_cockpit_document_FileVersion_prop_version'] = null;
    this['fld_io_cloudoffice_platform_cockpit_document_FileVersion_prop_fileName'] = null;
    this['fld_io_cloudoffice_platform_cockpit_document_FileVersion_prop_versionURL'] = null;
    this['fld_io_cloudoffice_platform_cockpit_document_FileVersion_prop_formatList'] = null;
    this['fld_io_cloudoffice_platform_cockpit_document_FileVersion_prop_selectedFormat'] = null;
    this['fld_io_cloudoffice_platform_cockpit_document_FileVersion_prop_formatListDisplay'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_document_FileVersion = registerClass(exports,'io_cloudoffice_platform_cockpit_document_FileVersion',io_cloudoffice_platform_cockpit_document_FileVersion);


function io_cloudoffice_platform_cockpit_document_FileVersion$Html4JavaType() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_document_FileVersion$Html4JavaType;
  if (!CLS.$class) {
    var pp = vm.org_netbeans_html_json_spi_Proto$Type(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_org_netbeans_html_json_spi_Proto$Type || (refs_org_netbeans_html_json_spi_Proto$Type = vm.org_netbeans_html_json_spi_Proto$Type(false))).constructor['cons__VLjava_lang_Class_2Ljava_lang_Class_2II'].call(lcA0, (refs_io_cloudoffice_platform_cockpit_document_FileVersion || (refs_io_cloudoffice_platform_cockpit_document_FileVersion = io_cloudoffice_platform_cockpit_document_FileVersion(false))).constructor.$class, (refs_io_cloudoffice_platform_cockpit_document_DocumentComponent$FileVersionModel || (refs_io_cloudoffice_platform_cockpit_document_DocumentComponent$FileVersionModel = io_cloudoffice_platform_cockpit_document_DocumentComponent$FileVersionModel(false))).constructor.$class, (6), 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"version", 0, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"fileName", 1, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"versionURL", 2, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"formatList", 3, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"selectedFormat", 4, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"formatListDisplay", 5, 0, 0);
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.setValue__VLio_cloudoffice_platform_cockpit_document_FileVersion_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0:{ gt = 40; break IF; }
  case 1:{ gt = 57; break IF; }
  case 2:{ gt = 74; break IF; }
  case 3:{ gt = 91; break IF; }
  case 4:{ gt = 105; break IF; }
  case 5:{ gt = 122; break IF; }
  default: { gt = 139; break IF; }
}
    }
    X_40: for (;;) { IF: if (gt <= 40) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_document_FileVersion || (refs_io_cloudoffice_platform_cockpit_document_FileVersion = io_cloudoffice_platform_cockpit_document_FileVersion(false))).access$100__Lio_cloudoffice_platform_cockpit_document_FileVersion$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setVersion__VLjava_lang_String_2(stA1);
return;
    }
    X_57: for (;;) { IF: if (gt <= 57) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_document_FileVersion || (refs_io_cloudoffice_platform_cockpit_document_FileVersion = io_cloudoffice_platform_cockpit_document_FileVersion(false))).access$100__Lio_cloudoffice_platform_cockpit_document_FileVersion$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setFileName__VLjava_lang_String_2(stA1);
return;
    }
    X_74: for (;;) { IF: if (gt <= 74) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_document_FileVersion || (refs_io_cloudoffice_platform_cockpit_document_FileVersion = io_cloudoffice_platform_cockpit_document_FileVersion(false))).access$100__Lio_cloudoffice_platform_cockpit_document_FileVersion$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setVersionURL__VLjava_lang_String_2(stA1);
return;
    }
    X_91: for (;;) { IF: if (gt <= 91) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_document_FileVersion || (refs_io_cloudoffice_platform_cockpit_document_FileVersion = io_cloudoffice_platform_cockpit_document_FileVersion(false))).access$100__Lio_cloudoffice_platform_cockpit_document_FileVersion$Html4JavaType_2();
var stA1 = lcA1.getFormatList__Ljava_util_List_2();
invoker.replaceValue__VLjava_util_Collection_2Ljava_lang_Class_2Ljava_lang_Object_2(stA0,stA1, (refs_io_cloudoffice_platform_cockpit_document_FileFormat || (refs_io_cloudoffice_platform_cockpit_document_FileFormat = io_cloudoffice_platform_cockpit_document_FileFormat(false))).constructor.$class, lcA3);
return;
    }
    X_105: for (;;) { IF: if (gt <= 105) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_document_FileVersion || (refs_io_cloudoffice_platform_cockpit_document_FileVersion = io_cloudoffice_platform_cockpit_document_FileVersion(false))).access$100__Lio_cloudoffice_platform_cockpit_document_FileVersion$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_document_FileFormat || (refs_io_cloudoffice_platform_cockpit_document_FileFormat = io_cloudoffice_platform_cockpit_document_FileFormat(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_document_FileFormat']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.document.FileFormat');
stA0.setSelectedFormat__VLio_cloudoffice_platform_cockpit_document_FileFormat_2(stA1);
return;
    }
    X_122: for (;;) { IF: if (gt <= 122) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_document_FileVersion || (refs_io_cloudoffice_platform_cockpit_document_FileVersion = io_cloudoffice_platform_cockpit_document_FileVersion(false))).access$100__Lio_cloudoffice_platform_cockpit_document_FileVersion$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setFormatListDisplay__VLjava_lang_String_2(stA1);
return;
    }
    X_139: for (;;) { IF: if (gt <= 139) {
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

    }
}}}}}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_document_FileVersion_2I = function(lcA1, lcI2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0:{ gt = 40; break IF; }
  case 1:{ gt = 45; break IF; }
  case 2:{ gt = 50; break IF; }
  case 3:{ gt = 55; break IF; }
  case 4:{ gt = 60; break IF; }
  case 5:{ gt = 65; break IF; }
  default: { gt = 70; break IF; }
}
    }
    X_40: for (;;) { IF: if (gt <= 40) {

var stA0 = lcA1.getVersion__Ljava_lang_String_2();
return stA0;
    }
    X_45: for (;;) { IF: if (gt <= 45) {

var stA0 = lcA1.getFileName__Ljava_lang_String_2();
return stA0;
    }
    X_50: for (;;) { IF: if (gt <= 50) {

var stA0 = lcA1.getVersionURL__Ljava_lang_String_2();
return stA0;
    }
    X_55: for (;;) { IF: if (gt <= 55) {

var stA0 = lcA1.getFormatList__Ljava_util_List_2();
return stA0;
    }
    X_60: for (;;) { IF: if (gt <= 60) {

var stA0 = lcA1.getSelectedFormat__Lio_cloudoffice_platform_cockpit_document_FileFormat_2();
return stA0;
    }
    X_65: for (;;) { IF: if (gt <= 65) {

var stA0 = lcA1.getFormatListDisplay__Ljava_lang_String_2();
return stA0;
    }
    X_70: for (;;) { IF: if (gt <= 70) {
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

    }
}}}}}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.call__VLio_cloudoffice_platform_cockpit_document_FileVersion_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_document_FileVersion']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.document.FileVersion');
var stA0 = (refs_io_cloudoffice_platform_cockpit_document_FileVersion || (refs_io_cloudoffice_platform_cockpit_document_FileVersion = io_cloudoffice_platform_cockpit_document_FileVersion(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_document_FileVersion_2(lcA1);
return stA0;

};
c['protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.onChange__VLio_cloudoffice_platform_cockpit_document_FileVersion_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLio_cloudoffice_platform_cockpit_document_FileVersion_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
var stA1 = stA0;var stA2 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"index: ");
var stA2 = invoker.append__Ljava_lang_StringBuilder_2I(stA2,lcI2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2," type: ");
var stA2 = invoker.append__Ljava_lang_StringBuilder_2I(stA2,lcI3);
var stA2 = invoker.toString__Ljava_lang_String_2(stA2);
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__VLjava_lang_String_2'].call(stA1, stA2);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.read__Lio_cloudoffice_platform_cockpit_document_FileVersion_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = new io_cloudoffice_platform_cockpit_document_FileVersion;
(refs_io_cloudoffice_platform_cockpit_document_FileVersion || (refs_io_cloudoffice_platform_cockpit_document_FileVersion = io_cloudoffice_platform_cockpit_document_FileVersion(false))).constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_document_FileVersion$1_2.call(stA0, lcA1, lcA2, null);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.cloneTo__Lio_cloudoffice_platform_cockpit_document_FileVersion_2Lio_cloudoffice_platform_cockpit_document_FileVersion_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = (refs_io_cloudoffice_platform_cockpit_document_FileVersion || (refs_io_cloudoffice_platform_cockpit_document_FileVersion = io_cloudoffice_platform_cockpit_document_FileVersion(false))).access$400__Lio_cloudoffice_platform_cockpit_document_FileVersion_2Lio_cloudoffice_platform_cockpit_document_FileVersion_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_document_FileVersion']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.document.FileVersion');
lcA0.onMessage__VLio_cloudoffice_platform_cockpit_document_FileVersion_2IILjava_lang_Object_2_3Ljava_lang_Object_2(lcA1, lcI2, lcI3, lcA4, lcA5);
return;

};
c['onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.onChange__VLjava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_document_FileVersion']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.document.FileVersion');
lcA0.onChange__VLio_cloudoffice_platform_cockpit_document_FileVersion_2I(lcA1, lcI2);
return;

};
c['onChange__VLjava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = lcA0.read__Lio_cloudoffice_platform_cockpit_document_FileVersion_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2(lcA1, lcA2);
return stA0;

};
c['read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_document_FileVersion']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.document.FileVersion');
var stA0 = lcA0.cloneTo__Lio_cloudoffice_platform_cockpit_document_FileVersion_2Lio_cloudoffice_platform_cockpit_document_FileVersion_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
c['cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_document_FileVersion']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.document.FileVersion');
lcA0.call__VLio_cloudoffice_platform_cockpit_document_FileVersion_2ILjava_lang_Object_2Ljava_lang_Object_2(lcA1, lcI2, lcA3, lcA4);
return;

};
c['call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Ljava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_document_FileVersion']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.document.FileVersion');
var stA0 = lcA0.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_document_FileVersion_2I(lcA1, lcI2);
return stA0;

};
c['getValue__Ljava_lang_Object_2Ljava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.setValue__VLjava_lang_Object_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_document_FileVersion']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.document.FileVersion');
lcA0.setValue__VLio_cloudoffice_platform_cockpit_document_FileVersion_2ILjava_lang_Object_2(lcA1, lcI2, lcA3);
return;

};
c['setValue__VLjava_lang_Object_2ILjava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_document_FileVersion$1_2 = function(lcA1) {
  var  lcA0 = this;
c.constructor.cons__V.call(lcA0);
return;

};
    m.access = 4096;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_document_FileVersion$Html4JavaTypefillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_document_FileVersion$Html4JavaType', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_document_FileVersion$Html4JavaTypefillInstOf });
    io_cloudoffice_platform_cockpit_document_FileVersion$Html4JavaTypefillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/document/FileVersion$Html4JavaType';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_document_FileVersion;
    var refs_io_cloudoffice_platform_cockpit_document_DocumentComponent$FileVersionModel;
    var refs_org_netbeans_html_json_spi_Proto$Type;
    var refs_java_lang_String;
    var refs_io_cloudoffice_platform_cockpit_document_FileFormat;
    var refs_java_lang_UnsupportedOperationException;
    var refs_java_lang_StringBuilder;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_document_FileVersion$Html4JavaType = io_cloudoffice_platform_cockpit_document_FileVersion$Html4JavaType;


function io_cloudoffice_platform_cockpit_document_DocumentComponent$FileVersionModel() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_document_DocumentComponent$FileVersionModel;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._this$0 = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$FileVersionModel_this$0'] = v; return this['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$FileVersionModel_this$0']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_document_DocumentComponent_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$FileVersionModel_this$0'] = lcA1;
return;

};
CLS['cons__VLio_cloudoffice_platform_cockpit_document_DocumentComponent_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_document_DocumentComponent$FileVersionModelfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_document_DocumentComponent$FileVersionModel', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_document_DocumentComponent$FileVersionModelfillInstOf });
    io_cloudoffice_platform_cockpit_document_DocumentComponent$FileVersionModelfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/document/DocumentComponent$FileVersionModel';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 33;
    CLS.$class.cnstr = CLS;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$FileVersionModel_this$0'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_document_DocumentComponent$FileVersionModel = registerClass(exports,'io_cloudoffice_platform_cockpit_document_DocumentComponent$FileVersionModel',io_cloudoffice_platform_cockpit_document_DocumentComponent$FileVersionModel);

vm.io_cloudoffice_platform_cockpit_api_HelperItemView = link('io/cloudoffice/platform/cockpit/api/HelperItemView', function(f) { vm.io_cloudoffice_platform_cockpit_api_HelperItemView =  f; });

function io_cloudoffice_platform_cockpit_document_FileView() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_document_FileView;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_TYPE'] = null;
  m = c._TYPE = function (v) {  if (arguments.length == 1) CLS['fld_TYPE'] = v; return CLS['fld_TYPE']; };
  m = c._proto = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_document_FileView_proto'] = v; return this['fld_io_cloudoffice_platform_cockpit_document_FileView_proto']; };
  m = c._prop_fileName = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_document_FileView_prop_fileName'] = v; return this['fld_io_cloudoffice_platform_cockpit_document_FileView_prop_fileName']; };
  m = c._prop_fileContent = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_document_FileView_prop_fileContent'] = v; return this['fld_io_cloudoffice_platform_cockpit_document_FileView_prop_fileContent']; };
  m = c._prop_mimeType = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_document_FileView_prop_mimeType'] = v; return this['fld_io_cloudoffice_platform_cockpit_document_FileView_prop_mimeType']; };
  m = c._prop_fileSize = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_document_FileView_prop_fileSize'] = v; return this['fld_io_cloudoffice_platform_cockpit_document_FileView_prop_fileSize']; };
  m = c._prop_filesName = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_document_FileView_prop_filesName'] = v; return this['fld_io_cloudoffice_platform_cockpit_document_FileView_prop_filesName']; };
  m = c._prop_fileList = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_document_FileView_prop_fileList'] = v; return this['fld_io_cloudoffice_platform_cockpit_document_FileView_prop_fileList']; };
  m = c._prop_itemId = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_document_FileView_prop_itemId'] = v; return this['fld_io_cloudoffice_platform_cockpit_document_FileView_prop_itemId']; };
  m = c._prop_single = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_document_FileView_prop_single'] = v; return this['fld_io_cloudoffice_platform_cockpit_document_FileView_prop_single']; };
  m = c._prop_itemType = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_document_FileView_prop_itemType'] = v; return this['fld_io_cloudoffice_platform_cockpit_document_FileView_prop_itemType']; };
    m = c.modelFor__Ljava_lang_Class_2 = function() {
return (refs_io_cloudoffice_platform_cockpit_document_DocumentComponent$FileViewModel || (refs_io_cloudoffice_platform_cockpit_document_DocumentComponent$FileViewModel = io_cloudoffice_platform_cockpit_document_DocumentComponent$FileViewModel(false))).constructor.$class;

};
    m.access = 10;
    m.cls = CLS;
    m = c.getFileName__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_FileView_proto'],"fileName");
return lcA0['fld_io_cloudoffice_platform_cockpit_document_FileView_prop_fileName'];

};
c['getFileName__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setFileName__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_document_FileView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_document_FileView_prop_fileName'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_document_FileView_prop_fileName'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_FileView_proto'],"fileName", lcA2, lcA1);
return;

    }
}}
};
c['setFileName__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getFileContent__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_FileView_proto'],"fileContent");
return lcA0['fld_io_cloudoffice_platform_cockpit_document_FileView_prop_fileContent'];

};
c['getFileContent__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setFileContent__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_document_FileView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_document_FileView_prop_fileContent'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_document_FileView_prop_fileContent'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_FileView_proto'],"fileContent", lcA2, lcA1);
return;

    }
}}
};
c['setFileContent__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getMimeType__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_FileView_proto'],"mimeType");
return lcA0['fld_io_cloudoffice_platform_cockpit_document_FileView_prop_mimeType'];

};
c['getMimeType__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setMimeType__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_document_FileView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_document_FileView_prop_mimeType'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_document_FileView_prop_mimeType'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_FileView_proto'],"mimeType", lcA2, lcA1);
return;

    }
}}
};
c['setMimeType__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getFileSize__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_FileView_proto'],"fileSize");
return lcA0['fld_io_cloudoffice_platform_cockpit_document_FileView_prop_fileSize'];

};
c['getFileSize__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setFileSize__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_document_FileView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_document_FileView_prop_fileSize'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_document_FileView_prop_fileSize'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_FileView_proto'],"fileSize", lcA2, lcA1);
return;

    }
}}
};
c['setFileSize__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getFilesName__Ljava_util_List_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_FileView_proto'],"filesName");
return lcA0['fld_io_cloudoffice_platform_cockpit_document_FileView_prop_filesName'];

};
c['getFilesName__Ljava_util_List_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getFileList__Ljava_util_List_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_FileView_proto'],"fileList");
return lcA0['fld_io_cloudoffice_platform_cockpit_document_FileView_prop_fileList'];

};
c['getFileList__Ljava_util_List_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getItemId__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_FileView_proto'],"itemId");
return lcA0['fld_io_cloudoffice_platform_cockpit_document_FileView_prop_itemId'];

};
c['getItemId__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setItemId__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_document_FileView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_document_FileView_prop_itemId'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_document_FileView_prop_itemId'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_FileView_proto'],"itemId", lcA2, lcA1);
return;

    }
}}
};
c['setItemId__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isSingle__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_FileView_proto'],"single");
return lcA0['fld_io_cloudoffice_platform_cockpit_document_FileView_prop_single'];

};
c['isSingle__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setSingle__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_document_FileView_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_document_FileView_prop_single']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_document_FileView_prop_single'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_document_FileView_proto'];var stA1 = "single";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2, stA3);
return;

    }
}}
};
c['setSingle__VZ'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getItemType__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_FileView_proto'],"itemType");
return lcA0['fld_io_cloudoffice_platform_cockpit_document_FileView_prop_itemType'];

};
c['getItemType__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setItemType__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_document_FileView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_document_FileView_prop_itemType'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_document_FileView_prop_itemType'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_FileView_proto'],"itemType", lcA2, lcA1);
return;

    }
}}
};
c['setItemType__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.createProto__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2(c._TYPE(),lcA0, lcA1);
stA0['fld_io_cloudoffice_platform_cockpit_document_FileView_proto'] = stA1;
var stA0 = lcA0;var stA1 = lcA0['fld_io_cloudoffice_platform_cockpit_document_FileView_proto'];var stA2 = "filesName";var stI3 = -1;var stA4 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, 0);
var stA1 = invoker.createList__Ljava_util_List_2Ljava_lang_String_2I_3Ljava_lang_String_2(stA1,stA2, stI3, stA4);
stA0['fld_io_cloudoffice_platform_cockpit_document_FileView_prop_filesName'] = stA1;
var stA0 = lcA0;var stA1 = lcA0['fld_io_cloudoffice_platform_cockpit_document_FileView_proto'];var stA2 = "fileList";var stI3 = -1;var stA4 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, 0);
var stA1 = invoker.createList__Ljava_util_List_2Ljava_lang_String_2I_3Ljava_lang_String_2(stA1,stA2, stI3, stA4);
stA0['fld_io_cloudoffice_platform_cockpit_document_FileView_prop_fileList'] = stA1;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = (refs_net_java_html_BrwsrCtx || (refs_net_java_html_BrwsrCtx = vm.net_java_html_BrwsrCtx(false)))['findDefault__Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'](c.constructor.$class);
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, stA1);
return;

};
CLS['cons__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2ZLjava_lang_String_2_3Ljava_lang_String_2 = function(lcA1, lcA2, lcA3, lcA4, lcA5, lcI6, lcA7, lcA8) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = (refs_net_java_html_BrwsrCtx || (refs_net_java_html_BrwsrCtx = vm.net_java_html_BrwsrCtx(false)))['findDefault__Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'](c.constructor.$class);
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, stA1);
lcA0['fld_io_cloudoffice_platform_cockpit_document_FileView_prop_fileName'] = lcA1;
lcA0['fld_io_cloudoffice_platform_cockpit_document_FileView_prop_fileContent'] = lcA2;
lcA0['fld_io_cloudoffice_platform_cockpit_document_FileView_prop_mimeType'] = lcA3;
lcA0['fld_io_cloudoffice_platform_cockpit_document_FileView_prop_fileSize'] = lcA4;
lcA0['fld_io_cloudoffice_platform_cockpit_document_FileView_prop_itemId'] = lcA5;
lcA0['fld_io_cloudoffice_platform_cockpit_document_FileView_prop_single'] = lcI6;
lcA0['fld_io_cloudoffice_platform_cockpit_document_FileView_prop_itemType'] = lcA7;
invoker.initTo__VLjava_util_Collection_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_FileView_proto'],lcA0['fld_io_cloudoffice_platform_cockpit_document_FileView_prop_filesName'], lcA8);
return;

};
CLS['cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2ZLjava_lang_String_2_3Ljava_lang_String_2'] = m;

    m.access = 129;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, (9));
var lcA3 = stA0;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_document_FileView_proto'];var stA1 = lcA2;var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, (9));
Array.at(stA2, 0, "fileName");
Array.at(stA2, 1, "fileContent");
Array.at(stA2, 2, "mimeType");
Array.at(stA2, 3, "fileSize");
Array.at(stA2, 4, "filesName");
Array.at(stA2, 5, "fileList");
Array.at(stA2, (6), "itemId");
Array.at(stA2, (7), "single");
Array.at(stA2, (8), "itemType");
invoker.extract__VLjava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Object_2(stA0,stA1, stA2, lcA3);
if ((lcA3[0] || Array.at(lcA3, 0)) !== null && !(lcA3[0] || Array.at(lcA3, 0))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[0] || Array.at(lcA3, 0)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_document_FileView_prop_fileName'] = (lcA3[0] || Array.at(lcA3, 0));
if ((lcA3[1] || Array.at(lcA3, 1)) !== null && !(lcA3[1] || Array.at(lcA3, 1))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[1] || Array.at(lcA3, 1)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_document_FileView_prop_fileContent'] = (lcA3[1] || Array.at(lcA3, 1));
if ((lcA3[2] || Array.at(lcA3, 2)) !== null && !(lcA3[2] || Array.at(lcA3, 2))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[2] || Array.at(lcA3, 2)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_document_FileView_prop_mimeType'] = (lcA3[2] || Array.at(lcA3, 2));
if ((lcA3[3] || Array.at(lcA3, 3)) !== null && !(lcA3[3] || Array.at(lcA3, 3))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[3] || Array.at(lcA3, 3)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_document_FileView_prop_fileSize'] = (lcA3[3] || Array.at(lcA3, 3));
var stA0 = c.useAsArray___3Ljava_lang_Object_2Ljava_lang_Object_2((lcA3[4] || Array.at(lcA3, 4)));
var lcA4 = stA0;
var lcI5 = (lcA4).length;
var lcI6 = 0;
    }
    X_129: for (;;) { IF: if (gt <= 129) {

if ((lcI6) >= (lcI5)) { gt = 164; break IF; }
var lcA7 = (lcA4[lcI6] || Array.at(lcA4, lcI6));
if (lcA7 !== null && !lcA7['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(lcA7, 'java.lang.String');
var stI0 = invoker.add__ZLjava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_FileView_prop_filesName'],lcA7);
lcI6++;
{ gt = 0; continue X_129; }
    }
    X_164: for (;;) { IF: if (gt <= 164) {

var stA0 = c.useAsArray___3Ljava_lang_Object_2Ljava_lang_Object_2((lcA3[5] || Array.at(lcA3, 5)));
var lcA4 = stA0;
var lcI5 = (lcA4).length;
var lcI6 = 0;
    }
    X_180: for (;;) { IF: if (gt <= 180) {

if ((lcI6) >= (lcI5)) { gt = 221; break IF; }
var lcA7 = (lcA4[lcI6] || Array.at(lcA4, lcI6));
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_document_FileView_prop_fileList'];var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_FileView_proto'],(refs_io_cloudoffice_platform_cockpit_document_File || (refs_io_cloudoffice_platform_cockpit_document_File = io_cloudoffice_platform_cockpit_document_File(false))).constructor.$class, lcA7);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,stA1);
lcI6++;
{ gt = 0; continue X_180; }
    }
    X_221: for (;;) { IF: if (gt <= 221) {

if ((lcA3[(6)] || Array.at(lcA3, (6))) !== null && !(lcA3[(6)] || Array.at(lcA3, (6)))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[(6)] || Array.at(lcA3, (6))), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_document_FileView_prop_itemId'] = (lcA3[(6)] || Array.at(lcA3, (6)));
var stA0 = lcA0;if (((lcA3[(7)] || Array.at(lcA3, (7)))) !== null) { gt = 244; break IF; }
var stI1 = 0;{ gt = 257; break IF; }
    }
    X_244: for (;;) { IF: if (gt <= 244) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[(7)] || Array.at(lcA3, (7))));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_257: for (;;) { IF: if (gt <= 257) {
stA0['fld_io_cloudoffice_platform_cockpit_document_FileView_prop_single'] = stI1;
if ((lcA3[(8)] || Array.at(lcA3, (8))) !== null && !(lcA3[(8)] || Array.at(lcA3, (8)))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[(8)] || Array.at(lcA3, (8))), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_document_FileView_prop_itemType'] = (lcA3[(8)] || Array.at(lcA3, (8)));
return;

    }
}}}}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.useAsArray___3Ljava_lang_Object_2Ljava_lang_Object_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](lcA0, 1, vm.java_lang_Object);
if ((stI0) == 0) { gt = 17; break IF; }
if (lcA0 !== null && !Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](lcA0, 1, vm.java_lang_Object)) vm.java_lang_Class(false).castEx(lcA0, '');
if (lcA0 !== null && !Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](lcA0, 1, vm.java_lang_Object)) vm.java_lang_Class(false).castEx(lcA0, '');
var stA0 = lcA0;{ gt = 36; break IF; }
    }
    X_17: for (;;) { IF: if (gt <= 17) {

if ((lcA0) !== null) { gt = 28; break IF; }
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 0);
{ gt = 36; break IF; }
    }
    X_28: for (;;) { IF: if (gt <= 28) {

var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 1);
Array.at(stA0, 0, lcA0);
    }
    X_36: for (;;) { IF: if (gt <= 36) {
return stA0;

    }
}}}}
};
    m.access = 10;
    m.cls = CLS;
    m = c.toString__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var lcA1 = stA0;
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(123));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"fileName");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getFileName__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"fileContent");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getFileContent__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"mimeType");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getMimeType__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"fileSize");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getFileSize__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"filesName");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getFilesName__Ljava_util_List_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"fileList");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_document_FileView_prop_fileList']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"itemId");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getItemId__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"single");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stI2 = lcA0.isSingle__Z();
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI2);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"itemType");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getItemType__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(125));
var stA0 = invoker.toString__Ljava_lang_String_2(lcA1);
return stA0;

};
c['toString__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Lio_cloudoffice_platform_cockpit_document_FileView_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_FileView_proto']);
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_document_FileView_2Lnet_java_html_BrwsrCtx_2.call(stA0, stA1);
return stA0;

};
c['clone__Lio_cloudoffice_platform_cockpit_document_FileView_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Lio_cloudoffice_platform_cockpit_document_FileView_2Lnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = new io_cloudoffice_platform_cockpit_document_FileView;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, lcA1);
var lcA2 = stA0;
var stA0 = lcA2;var stA1 = lcA0.getFileName__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_document_FileView_prop_fileName'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getFileContent__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_document_FileView_prop_fileContent'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getMimeType__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_document_FileView_prop_mimeType'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getFileSize__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_document_FileView_prop_fileSize'] = stA1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_document_FileView_proto'];var stA1 = lcA2.getFilesName__Ljava_util_List_2();
invoker.cloneList__VLjava_util_Collection_2Lnet_java_html_BrwsrCtx_2Ljava_util_Collection_2(stA0,stA1, lcA1, lcA0['fld_io_cloudoffice_platform_cockpit_document_FileView_prop_filesName']);
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_document_FileView_proto'];var stA1 = lcA2.getFileList__Ljava_util_List_2();
invoker.cloneList__VLjava_util_Collection_2Lnet_java_html_BrwsrCtx_2Ljava_util_Collection_2(stA0,stA1, lcA1, lcA0['fld_io_cloudoffice_platform_cockpit_document_FileView_prop_fileList']);
var stA0 = lcA2;var stA1 = lcA0.getItemId__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_document_FileView_prop_itemId'] = stA1;
var stA0 = lcA2;var stI1 = lcA0.isSingle__Z();
stA0['fld_io_cloudoffice_platform_cockpit_document_FileView_prop_single'] = stI1;
var stA0 = lcA2;var stA1 = lcA0.getItemType__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_document_FileView_prop_itemType'] = stA1;
return lcA2;

};
    m.access = 2;
    m.cls = CLS;
    m = c.applyBindings__Lio_cloudoffice_platform_cockpit_document_FileView_2 = function() {
  var  lcA0 = this;
invoker.applyBindings__V(lcA0['fld_io_cloudoffice_platform_cockpit_document_FileView_proto']);
return lcA0;

};
c['applyBindings__Lio_cloudoffice_platform_cockpit_document_FileView_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.equals__ZLjava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((lcA1) !== (lcA0)) { gt = 7; break IF; }
return 1;
    }
    X_7: for (;;) { IF: if (gt <= 7) {

var stI0 = lcA1 != null && lcA1['$instOf_io_cloudoffice_platform_cockpit_document_FileView'] ? 1 : 0;
if ((stI0) != 0) { gt = 16; break IF; }
return 0;
    }
    X_16: for (;;) { IF: if (gt <= 16) {

if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_document_FileView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.document.FileView');
var lcA2 = lcA1;
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_document_FileView_prop_fileName'], lcA2['fld_io_cloudoffice_platform_cockpit_document_FileView_prop_fileName']);
if ((stI0) != 0) { gt = 40; break IF; }
return 0;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_document_FileView_prop_fileContent'], lcA2['fld_io_cloudoffice_platform_cockpit_document_FileView_prop_fileContent']);
if ((stI0) != 0) { gt = 59; break IF; }
return 0;
    }
    X_59: for (;;) { IF: if (gt <= 59) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_document_FileView_prop_mimeType'], lcA2['fld_io_cloudoffice_platform_cockpit_document_FileView_prop_mimeType']);
if ((stI0) != 0) { gt = 78; break IF; }
return 0;
    }
    X_78: for (;;) { IF: if (gt <= 78) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_document_FileView_prop_fileSize'], lcA2['fld_io_cloudoffice_platform_cockpit_document_FileView_prop_fileSize']);
if ((stI0) != 0) { gt = 97; break IF; }
return 0;
    }
    X_97: for (;;) { IF: if (gt <= 97) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_document_FileView_prop_filesName'], lcA2['fld_io_cloudoffice_platform_cockpit_document_FileView_prop_filesName']);
if ((stI0) != 0) { gt = 116; break IF; }
return 0;
    }
    X_116: for (;;) { IF: if (gt <= 116) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_document_FileView_prop_fileList']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_document_FileView_prop_fileList']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 143; break IF; }
return 0;
    }
    X_143: for (;;) { IF: if (gt <= 143) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_document_FileView_prop_itemId'], lcA2['fld_io_cloudoffice_platform_cockpit_document_FileView_prop_itemId']);
if ((stI0) != 0) { gt = 162; break IF; }
return 0;
    }
    X_162: for (;;) { IF: if (gt <= 162) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_document_FileView_prop_single']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_document_FileView_prop_single']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 187; break IF; }
return 0;
    }
    X_187: for (;;) { IF: if (gt <= 187) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_document_FileView_prop_itemType'], lcA2['fld_io_cloudoffice_platform_cockpit_document_FileView_prop_itemType']);
if ((stI0) != 0) { gt = 206; break IF; }
return 0;
    }
    X_206: for (;;) { IF: if (gt <= 206) {

return 1;

    }
}}}}}}}}}}}}
};
c['equals__ZLjava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.hashCode__I = function() {
  var  lcA0 = this;
var stA0 = invoker.getName__Ljava_lang_String_2(c.constructor.$class);
var stI0 = invoker.hashCode__I(stA0);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_document_FileView_prop_fileName'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_document_FileView_prop_fileContent'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_document_FileView_prop_mimeType'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_document_FileView_prop_fileSize'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_document_FileView_prop_filesName'], lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_document_FileView_prop_fileList']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_document_FileView_prop_itemId'], lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_document_FileView_prop_single']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_document_FileView_prop_itemType'], lcI1);
var lcI1 = stI0;
return lcI1;

};
c['hashCode__I'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((lcA1) === (lcA0)) { gt = 12; break IF; }
if ((lcA1) !== (c._TYPE())) { gt = 16; break IF; }
    }
    X_12: for (;;) { IF: if (gt <= 12) {

var stA0 = null;{ gt = 17; break IF; }
    }
    X_16: for (;;) { IF: if (gt <= 16) {

var stA0 = lcA1;    }
    X_17: for (;;) { IF: if (gt <= 17) {
return stA0;

    }
}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.clone__Ljava_lang_Object_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0.clone__Lio_cloudoffice_platform_cockpit_document_FileView_2();
return stA0;

};
c['clone__Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.access$100__Lio_cloudoffice_platform_cockpit_document_FileView$Html4JavaType_2 = function() {
return c._TYPE();

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_document_FileView_2 = function(lcA0) {
return lcA0['fld_io_cloudoffice_platform_cockpit_document_FileView_proto'];

};
    m.access = 4104;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_document_FileView$1_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2.call(lcA0, lcA1, lcA2);
return;

};
    m.access = 4096;
    m.cls = CLS;
    m = c.access$400__Lio_cloudoffice_platform_cockpit_document_FileView_2Lio_cloudoffice_platform_cockpit_document_FileView_2Lnet_java_html_BrwsrCtx_2 = function(lcA0, lcA1) {
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_document_FileView_2Lnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
return stA0;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new io_cloudoffice_platform_cockpit_document_FileView$Html4JavaType;
(refs_io_cloudoffice_platform_cockpit_document_FileView$Html4JavaType || (refs_io_cloudoffice_platform_cockpit_document_FileView$Html4JavaType = io_cloudoffice_platform_cockpit_document_FileView$Html4JavaType(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_document_FileView$1_2.call(stA0, null);
c._TYPE(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_document_FileViewfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_document_FileView', { value : true });
      vm.java_lang_Cloneable(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_document_FileViewfillInstOf });
    io_cloudoffice_platform_cockpit_document_FileViewfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/document/FileView';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.java_lang_Cloneable(false).constructor.$class
    ]; };
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_io_cloudoffice_platform_cockpit_document_DocumentComponent$FileViewModel;
    var refs_java_lang_Boolean;
    var refs_net_java_html_BrwsrCtx;
    var refs_io_cloudoffice_platform_cockpit_document_File;
    var refs_java_lang_StringBuilder;
    var refs_io_cloudoffice_platform_cockpit_document_FileView$Html4JavaType;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_document_FileView_proto'] = null;
    this['fld_io_cloudoffice_platform_cockpit_document_FileView_prop_fileName'] = null;
    this['fld_io_cloudoffice_platform_cockpit_document_FileView_prop_fileContent'] = null;
    this['fld_io_cloudoffice_platform_cockpit_document_FileView_prop_mimeType'] = null;
    this['fld_io_cloudoffice_platform_cockpit_document_FileView_prop_fileSize'] = null;
    this['fld_io_cloudoffice_platform_cockpit_document_FileView_prop_filesName'] = null;
    this['fld_io_cloudoffice_platform_cockpit_document_FileView_prop_fileList'] = null;
    this['fld_io_cloudoffice_platform_cockpit_document_FileView_prop_itemId'] = null;
    this['fld_io_cloudoffice_platform_cockpit_document_FileView_prop_single'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_document_FileView_prop_itemType'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_document_FileView = registerClass(exports,'io_cloudoffice_platform_cockpit_document_FileView',io_cloudoffice_platform_cockpit_document_FileView);


function io_cloudoffice_platform_cockpit_document_FileView$Html4JavaType() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_document_FileView$Html4JavaType;
  if (!CLS.$class) {
    var pp = vm.org_netbeans_html_json_spi_Proto$Type(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_org_netbeans_html_json_spi_Proto$Type || (refs_org_netbeans_html_json_spi_Proto$Type = vm.org_netbeans_html_json_spi_Proto$Type(false))).constructor['cons__VLjava_lang_Class_2Ljava_lang_Class_2II'].call(lcA0, (refs_io_cloudoffice_platform_cockpit_document_FileView || (refs_io_cloudoffice_platform_cockpit_document_FileView = io_cloudoffice_platform_cockpit_document_FileView(false))).constructor.$class, (refs_io_cloudoffice_platform_cockpit_document_DocumentComponent$FileViewModel || (refs_io_cloudoffice_platform_cockpit_document_DocumentComponent$FileViewModel = io_cloudoffice_platform_cockpit_document_DocumentComponent$FileViewModel(false))).constructor.$class, (9), 3);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"fileName", 0, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"fileContent", 1, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"mimeType", 2, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"fileSize", 3, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"filesName", 4, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"fileList", 5, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"itemId", (6), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"single", (7), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"itemType", (8), 0, 0);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"removeFileItem", 0);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"clearFile", 1);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"selectFile", 2);
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.setValue__VLio_cloudoffice_platform_cockpit_document_FileView_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0:{ gt = 52; break IF; }
  case 1:{ gt = 69; break IF; }
  case 2:{ gt = 86; break IF; }
  case 3:{ gt = 103; break IF; }
  case 4:{ gt = 120; break IF; }
  case 5:{ gt = 134; break IF; }
  case 6:{ gt = 148; break IF; }
  case 7:{ gt = 165; break IF; }
  case 8:{ gt = 185; break IF; }
  default: { gt = 202; break IF; }
}
    }
    X_52: for (;;) { IF: if (gt <= 52) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_document_FileView || (refs_io_cloudoffice_platform_cockpit_document_FileView = io_cloudoffice_platform_cockpit_document_FileView(false))).access$100__Lio_cloudoffice_platform_cockpit_document_FileView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setFileName__VLjava_lang_String_2(stA1);
return;
    }
    X_69: for (;;) { IF: if (gt <= 69) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_document_FileView || (refs_io_cloudoffice_platform_cockpit_document_FileView = io_cloudoffice_platform_cockpit_document_FileView(false))).access$100__Lio_cloudoffice_platform_cockpit_document_FileView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setFileContent__VLjava_lang_String_2(stA1);
return;
    }
    X_86: for (;;) { IF: if (gt <= 86) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_document_FileView || (refs_io_cloudoffice_platform_cockpit_document_FileView = io_cloudoffice_platform_cockpit_document_FileView(false))).access$100__Lio_cloudoffice_platform_cockpit_document_FileView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setMimeType__VLjava_lang_String_2(stA1);
return;
    }
    X_103: for (;;) { IF: if (gt <= 103) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_document_FileView || (refs_io_cloudoffice_platform_cockpit_document_FileView = io_cloudoffice_platform_cockpit_document_FileView(false))).access$100__Lio_cloudoffice_platform_cockpit_document_FileView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setFileSize__VLjava_lang_String_2(stA1);
return;
    }
    X_120: for (;;) { IF: if (gt <= 120) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_document_FileView || (refs_io_cloudoffice_platform_cockpit_document_FileView = io_cloudoffice_platform_cockpit_document_FileView(false))).access$100__Lio_cloudoffice_platform_cockpit_document_FileView$Html4JavaType_2();
var stA1 = lcA1.getFilesName__Ljava_util_List_2();
invoker.replaceValue__VLjava_util_Collection_2Ljava_lang_Class_2Ljava_lang_Object_2(stA0,stA1, (refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
return;
    }
    X_134: for (;;) { IF: if (gt <= 134) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_document_FileView || (refs_io_cloudoffice_platform_cockpit_document_FileView = io_cloudoffice_platform_cockpit_document_FileView(false))).access$100__Lio_cloudoffice_platform_cockpit_document_FileView$Html4JavaType_2();
var stA1 = lcA1.getFileList__Ljava_util_List_2();
invoker.replaceValue__VLjava_util_Collection_2Ljava_lang_Class_2Ljava_lang_Object_2(stA0,stA1, (refs_io_cloudoffice_platform_cockpit_document_File || (refs_io_cloudoffice_platform_cockpit_document_File = io_cloudoffice_platform_cockpit_document_File(false))).constructor.$class, lcA3);
return;
    }
    X_148: for (;;) { IF: if (gt <= 148) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_document_FileView || (refs_io_cloudoffice_platform_cockpit_document_FileView = io_cloudoffice_platform_cockpit_document_FileView(false))).access$100__Lio_cloudoffice_platform_cockpit_document_FileView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setItemId__VLjava_lang_String_2(stA1);
return;
    }
    X_165: for (;;) { IF: if (gt <= 165) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_document_FileView || (refs_io_cloudoffice_platform_cockpit_document_FileView = io_cloudoffice_platform_cockpit_document_FileView(false))).access$100__Lio_cloudoffice_platform_cockpit_document_FileView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setSingle__VZ(stI1);
return;
    }
    X_185: for (;;) { IF: if (gt <= 185) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_document_FileView || (refs_io_cloudoffice_platform_cockpit_document_FileView = io_cloudoffice_platform_cockpit_document_FileView(false))).access$100__Lio_cloudoffice_platform_cockpit_document_FileView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setItemType__VLjava_lang_String_2(stA1);
return;
    }
    X_202: for (;;) { IF: if (gt <= 202) {
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

    }
}}}}}}}}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_document_FileView_2I = function(lcA1, lcI2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0:{ gt = 52; break IF; }
  case 1:{ gt = 57; break IF; }
  case 2:{ gt = 62; break IF; }
  case 3:{ gt = 67; break IF; }
  case 4:{ gt = 72; break IF; }
  case 5:{ gt = 77; break IF; }
  case 6:{ gt = 82; break IF; }
  case 7:{ gt = 87; break IF; }
  case 8:{ gt = 95; break IF; }
  default: { gt = 100; break IF; }
}
    }
    X_52: for (;;) { IF: if (gt <= 52) {

var stA0 = lcA1.getFileName__Ljava_lang_String_2();
return stA0;
    }
    X_57: for (;;) { IF: if (gt <= 57) {

var stA0 = lcA1.getFileContent__Ljava_lang_String_2();
return stA0;
    }
    X_62: for (;;) { IF: if (gt <= 62) {

var stA0 = lcA1.getMimeType__Ljava_lang_String_2();
return stA0;
    }
    X_67: for (;;) { IF: if (gt <= 67) {

var stA0 = lcA1.getFileSize__Ljava_lang_String_2();
return stA0;
    }
    X_72: for (;;) { IF: if (gt <= 72) {

var stA0 = lcA1.getFilesName__Ljava_util_List_2();
return stA0;
    }
    X_77: for (;;) { IF: if (gt <= 77) {

var stA0 = lcA1.getFileList__Ljava_util_List_2();
return stA0;
    }
    X_82: for (;;) { IF: if (gt <= 82) {

var stA0 = lcA1.getItemId__Ljava_lang_String_2();
return stA0;
    }
    X_87: for (;;) { IF: if (gt <= 87) {

var stI0 = lcA1.isSingle__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_95: for (;;) { IF: if (gt <= 95) {

var stA0 = lcA1.getItemType__Ljava_lang_String_2();
return stA0;
    }
    X_100: for (;;) { IF: if (gt <= 100) {
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

    }
}}}}}}}}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.call__VLio_cloudoffice_platform_cockpit_document_FileView_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0:{ gt = 28; break IF; }
  case 1:{ gt = 46; break IF; }
  case 2:{ gt = 51; break IF; }
  default: { gt = 56; break IF; }
}
    }
    X_28: for (;;) { IF: if (gt <= 28) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_document_FileView || (refs_io_cloudoffice_platform_cockpit_document_FileView = io_cloudoffice_platform_cockpit_document_FileView(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_document_FileView_2(lcA1);
var stA1 = invoker.toModel__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_document_File || (refs_io_cloudoffice_platform_cockpit_document_File = io_cloudoffice_platform_cockpit_document_File(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_document_File']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.document.File');
(refs_io_cloudoffice_platform_cockpit_document_DocumentComponent$FileViewModel || (refs_io_cloudoffice_platform_cockpit_document_DocumentComponent$FileViewModel = io_cloudoffice_platform_cockpit_document_DocumentComponent$FileViewModel(false))).removeFileItem__VLio_cloudoffice_platform_cockpit_document_FileView_2Lio_cloudoffice_platform_cockpit_document_File_2(stA0, stA1);
return;
    }
    X_46: for (;;) { IF: if (gt <= 46) {

(refs_io_cloudoffice_platform_cockpit_document_DocumentComponent$FileViewModel || (refs_io_cloudoffice_platform_cockpit_document_DocumentComponent$FileViewModel = io_cloudoffice_platform_cockpit_document_DocumentComponent$FileViewModel(false))).clearFile__VLio_cloudoffice_platform_cockpit_document_FileView_2(lcA1);
return;
    }
    X_51: for (;;) { IF: if (gt <= 51) {

(refs_io_cloudoffice_platform_cockpit_document_DocumentComponent$FileViewModel || (refs_io_cloudoffice_platform_cockpit_document_DocumentComponent$FileViewModel = io_cloudoffice_platform_cockpit_document_DocumentComponent$FileViewModel(false))).selectFile__VLio_cloudoffice_platform_cockpit_document_FileView_2(lcA1);
return;
    }
    X_56: for (;;) { IF: if (gt <= 56) {
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

    }
}}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_document_FileView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.document.FileView');
var stA0 = (refs_io_cloudoffice_platform_cockpit_document_FileView || (refs_io_cloudoffice_platform_cockpit_document_FileView = io_cloudoffice_platform_cockpit_document_FileView(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_document_FileView_2(lcA1);
return stA0;

};
c['protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.onChange__VLio_cloudoffice_platform_cockpit_document_FileView_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLio_cloudoffice_platform_cockpit_document_FileView_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
var stA1 = stA0;var stA2 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"index: ");
var stA2 = invoker.append__Ljava_lang_StringBuilder_2I(stA2,lcI2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2," type: ");
var stA2 = invoker.append__Ljava_lang_StringBuilder_2I(stA2,lcI3);
var stA2 = invoker.toString__Ljava_lang_String_2(stA2);
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__VLjava_lang_String_2'].call(stA1, stA2);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.read__Lio_cloudoffice_platform_cockpit_document_FileView_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = new io_cloudoffice_platform_cockpit_document_FileView;
(refs_io_cloudoffice_platform_cockpit_document_FileView || (refs_io_cloudoffice_platform_cockpit_document_FileView = io_cloudoffice_platform_cockpit_document_FileView(false))).constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_document_FileView$1_2.call(stA0, lcA1, lcA2, null);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.cloneTo__Lio_cloudoffice_platform_cockpit_document_FileView_2Lio_cloudoffice_platform_cockpit_document_FileView_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = (refs_io_cloudoffice_platform_cockpit_document_FileView || (refs_io_cloudoffice_platform_cockpit_document_FileView = io_cloudoffice_platform_cockpit_document_FileView(false))).access$400__Lio_cloudoffice_platform_cockpit_document_FileView_2Lio_cloudoffice_platform_cockpit_document_FileView_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_document_FileView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.document.FileView');
lcA0.onMessage__VLio_cloudoffice_platform_cockpit_document_FileView_2IILjava_lang_Object_2_3Ljava_lang_Object_2(lcA1, lcI2, lcI3, lcA4, lcA5);
return;

};
c['onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.onChange__VLjava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_document_FileView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.document.FileView');
lcA0.onChange__VLio_cloudoffice_platform_cockpit_document_FileView_2I(lcA1, lcI2);
return;

};
c['onChange__VLjava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = lcA0.read__Lio_cloudoffice_platform_cockpit_document_FileView_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2(lcA1, lcA2);
return stA0;

};
c['read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_document_FileView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.document.FileView');
var stA0 = lcA0.cloneTo__Lio_cloudoffice_platform_cockpit_document_FileView_2Lio_cloudoffice_platform_cockpit_document_FileView_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
c['cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_document_FileView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.document.FileView');
lcA0.call__VLio_cloudoffice_platform_cockpit_document_FileView_2ILjava_lang_Object_2Ljava_lang_Object_2(lcA1, lcI2, lcA3, lcA4);
return;

};
c['call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Ljava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_document_FileView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.document.FileView');
var stA0 = lcA0.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_document_FileView_2I(lcA1, lcI2);
return stA0;

};
c['getValue__Ljava_lang_Object_2Ljava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.setValue__VLjava_lang_Object_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_document_FileView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.document.FileView');
lcA0.setValue__VLio_cloudoffice_platform_cockpit_document_FileView_2ILjava_lang_Object_2(lcA1, lcI2, lcA3);
return;

};
c['setValue__VLjava_lang_Object_2ILjava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_document_FileView$1_2 = function(lcA1) {
  var  lcA0 = this;
c.constructor.cons__V.call(lcA0);
return;

};
    m.access = 4096;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_document_FileView$Html4JavaTypefillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_document_FileView$Html4JavaType', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_document_FileView$Html4JavaTypefillInstOf });
    io_cloudoffice_platform_cockpit_document_FileView$Html4JavaTypefillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/document/FileView$Html4JavaType';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_document_FileView;
    var refs_io_cloudoffice_platform_cockpit_document_DocumentComponent$FileViewModel;
    var refs_org_netbeans_html_json_spi_Proto$Type;
    var refs_java_lang_String;
    var refs_io_cloudoffice_platform_cockpit_document_File;
    var refs_java_lang_Boolean;
    var refs_java_lang_UnsupportedOperationException;
    var refs_java_lang_StringBuilder;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_document_FileView$Html4JavaType = io_cloudoffice_platform_cockpit_document_FileView$Html4JavaType;


function io_cloudoffice_platform_cockpit_document_File() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_document_File;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_TYPE'] = null;
  m = c._TYPE = function (v) {  if (arguments.length == 1) CLS['fld_TYPE'] = v; return CLS['fld_TYPE']; };
  m = c._proto = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_document_File_proto'] = v; return this['fld_io_cloudoffice_platform_cockpit_document_File_proto']; };
  m = c._prop_fileName = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_document_File_prop_fileName'] = v; return this['fld_io_cloudoffice_platform_cockpit_document_File_prop_fileName']; };
  m = c._prop_fileContent = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_document_File_prop_fileContent'] = v; return this['fld_io_cloudoffice_platform_cockpit_document_File_prop_fileContent']; };
  m = c._prop_mimeType = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_document_File_prop_mimeType'] = v; return this['fld_io_cloudoffice_platform_cockpit_document_File_prop_mimeType']; };
  m = c._prop_size = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_document_File_prop_size'] = v; return this['fld_io_cloudoffice_platform_cockpit_document_File_prop_size']; };
    m = c.modelFor__Ljava_lang_Class_2 = function() {
return (refs_io_cloudoffice_platform_cockpit_document_DocumentComponent$FileModel || (refs_io_cloudoffice_platform_cockpit_document_DocumentComponent$FileModel = io_cloudoffice_platform_cockpit_document_DocumentComponent$FileModel(false))).constructor.$class;

};
    m.access = 10;
    m.cls = CLS;
    m = c.getFileName__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_File_proto'],"fileName");
return lcA0['fld_io_cloudoffice_platform_cockpit_document_File_prop_fileName'];

};
c['getFileName__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setFileName__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_document_File_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_document_File_prop_fileName'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_document_File_prop_fileName'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_File_proto'],"fileName", lcA2, lcA1);
return;

    }
}}
};
c['setFileName__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getFileContent__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_File_proto'],"fileContent");
return lcA0['fld_io_cloudoffice_platform_cockpit_document_File_prop_fileContent'];

};
c['getFileContent__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setFileContent__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_document_File_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_document_File_prop_fileContent'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_document_File_prop_fileContent'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_File_proto'],"fileContent", lcA2, lcA1);
return;

    }
}}
};
c['setFileContent__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getMimeType__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_File_proto'],"mimeType");
return lcA0['fld_io_cloudoffice_platform_cockpit_document_File_prop_mimeType'];

};
c['getMimeType__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setMimeType__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_document_File_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_document_File_prop_mimeType'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_document_File_prop_mimeType'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_File_proto'],"mimeType", lcA2, lcA1);
return;

    }
}}
};
c['setMimeType__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getSize__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_File_proto'],"size");
return lcA0['fld_io_cloudoffice_platform_cockpit_document_File_prop_size'];

};
c['getSize__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setSize__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_document_File_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_document_File_prop_size'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_document_File_prop_size'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_File_proto'],"size", lcA2, lcA1);
return;

    }
}}
};
c['setSize__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.createProto__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2(c._TYPE(),lcA0, lcA1);
stA0['fld_io_cloudoffice_platform_cockpit_document_File_proto'] = stA1;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = (refs_net_java_html_BrwsrCtx || (refs_net_java_html_BrwsrCtx = vm.net_java_html_BrwsrCtx(false)))['findDefault__Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'](c.constructor.$class);
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, stA1);
return;

};
CLS['cons__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2 = function(lcA1, lcA2, lcA3, lcA4) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = (refs_net_java_html_BrwsrCtx || (refs_net_java_html_BrwsrCtx = vm.net_java_html_BrwsrCtx(false)))['findDefault__Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'](c.constructor.$class);
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, stA1);
lcA0['fld_io_cloudoffice_platform_cockpit_document_File_prop_fileName'] = lcA1;
lcA0['fld_io_cloudoffice_platform_cockpit_document_File_prop_fileContent'] = lcA2;
lcA0['fld_io_cloudoffice_platform_cockpit_document_File_prop_mimeType'] = lcA3;
lcA0['fld_io_cloudoffice_platform_cockpit_document_File_prop_size'] = lcA4;
return;

};
CLS['cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 4);
var lcA3 = stA0;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_document_File_proto'];var stA1 = lcA2;var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, 4);
Array.at(stA2, 0, "fileName");
Array.at(stA2, 1, "fileContent");
Array.at(stA2, 2, "mimeType");
Array.at(stA2, 3, "size");
invoker.extract__VLjava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Object_2(stA0,stA1, stA2, lcA3);
if ((lcA3[0] || Array.at(lcA3, 0)) !== null && !(lcA3[0] || Array.at(lcA3, 0))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[0] || Array.at(lcA3, 0)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_document_File_prop_fileName'] = (lcA3[0] || Array.at(lcA3, 0));
if ((lcA3[1] || Array.at(lcA3, 1)) !== null && !(lcA3[1] || Array.at(lcA3, 1))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[1] || Array.at(lcA3, 1)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_document_File_prop_fileContent'] = (lcA3[1] || Array.at(lcA3, 1));
if ((lcA3[2] || Array.at(lcA3, 2)) !== null && !(lcA3[2] || Array.at(lcA3, 2))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[2] || Array.at(lcA3, 2)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_document_File_prop_mimeType'] = (lcA3[2] || Array.at(lcA3, 2));
if ((lcA3[3] || Array.at(lcA3, 3)) !== null && !(lcA3[3] || Array.at(lcA3, 3))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[3] || Array.at(lcA3, 3)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_document_File_prop_size'] = (lcA3[3] || Array.at(lcA3, 3));
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.useAsArray___3Ljava_lang_Object_2Ljava_lang_Object_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](lcA0, 1, vm.java_lang_Object);
if ((stI0) == 0) { gt = 17; break IF; }
if (lcA0 !== null && !Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](lcA0, 1, vm.java_lang_Object)) vm.java_lang_Class(false).castEx(lcA0, '');
if (lcA0 !== null && !Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](lcA0, 1, vm.java_lang_Object)) vm.java_lang_Class(false).castEx(lcA0, '');
var stA0 = lcA0;{ gt = 36; break IF; }
    }
    X_17: for (;;) { IF: if (gt <= 17) {

if ((lcA0) !== null) { gt = 28; break IF; }
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 0);
{ gt = 36; break IF; }
    }
    X_28: for (;;) { IF: if (gt <= 28) {

var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 1);
Array.at(stA0, 0, lcA0);
    }
    X_36: for (;;) { IF: if (gt <= 36) {
return stA0;

    }
}}}}
};
    m.access = 10;
    m.cls = CLS;
    m = c.toString__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var lcA1 = stA0;
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(123));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"fileName");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getFileName__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"fileContent");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getFileContent__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"mimeType");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getMimeType__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"size");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getSize__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(125));
var stA0 = invoker.toString__Ljava_lang_String_2(lcA1);
return stA0;

};
c['toString__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Lio_cloudoffice_platform_cockpit_document_File_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_File_proto']);
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_document_File_2Lnet_java_html_BrwsrCtx_2.call(stA0, stA1);
return stA0;

};
c['clone__Lio_cloudoffice_platform_cockpit_document_File_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Lio_cloudoffice_platform_cockpit_document_File_2Lnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = new io_cloudoffice_platform_cockpit_document_File;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, lcA1);
var lcA2 = stA0;
var stA0 = lcA2;var stA1 = lcA0.getFileName__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_document_File_prop_fileName'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getFileContent__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_document_File_prop_fileContent'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getMimeType__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_document_File_prop_mimeType'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getSize__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_document_File_prop_size'] = stA1;
return lcA2;

};
    m.access = 2;
    m.cls = CLS;
    m = c.applyBindings__Lio_cloudoffice_platform_cockpit_document_File_2 = function() {
  var  lcA0 = this;
invoker.applyBindings__V(lcA0['fld_io_cloudoffice_platform_cockpit_document_File_proto']);
return lcA0;

};
c['applyBindings__Lio_cloudoffice_platform_cockpit_document_File_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.equals__ZLjava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((lcA1) !== (lcA0)) { gt = 7; break IF; }
return 1;
    }
    X_7: for (;;) { IF: if (gt <= 7) {

var stI0 = lcA1 != null && lcA1['$instOf_io_cloudoffice_platform_cockpit_document_File'] ? 1 : 0;
if ((stI0) != 0) { gt = 16; break IF; }
return 0;
    }
    X_16: for (;;) { IF: if (gt <= 16) {

if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_document_File']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.document.File');
var lcA2 = lcA1;
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_document_File_prop_fileName'], lcA2['fld_io_cloudoffice_platform_cockpit_document_File_prop_fileName']);
if ((stI0) != 0) { gt = 40; break IF; }
return 0;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_document_File_prop_fileContent'], lcA2['fld_io_cloudoffice_platform_cockpit_document_File_prop_fileContent']);
if ((stI0) != 0) { gt = 59; break IF; }
return 0;
    }
    X_59: for (;;) { IF: if (gt <= 59) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_document_File_prop_mimeType'], lcA2['fld_io_cloudoffice_platform_cockpit_document_File_prop_mimeType']);
if ((stI0) != 0) { gt = 78; break IF; }
return 0;
    }
    X_78: for (;;) { IF: if (gt <= 78) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_document_File_prop_size'], lcA2['fld_io_cloudoffice_platform_cockpit_document_File_prop_size']);
if ((stI0) != 0) { gt = 97; break IF; }
return 0;
    }
    X_97: for (;;) { IF: if (gt <= 97) {

return 1;

    }
}}}}}}}
};
c['equals__ZLjava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.hashCode__I = function() {
  var  lcA0 = this;
var stA0 = invoker.getName__Ljava_lang_String_2(c.constructor.$class);
var stI0 = invoker.hashCode__I(stA0);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_document_File_prop_fileName'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_document_File_prop_fileContent'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_document_File_prop_mimeType'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_document_File_prop_size'], lcI1);
var lcI1 = stI0;
return lcI1;

};
c['hashCode__I'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Ljava_lang_Object_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0.clone__Lio_cloudoffice_platform_cockpit_document_File_2();
return stA0;

};
c['clone__Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.access$100__Lio_cloudoffice_platform_cockpit_document_File$Html4JavaType_2 = function() {
return c._TYPE();

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_document_File_2 = function(lcA0) {
return lcA0['fld_io_cloudoffice_platform_cockpit_document_File_proto'];

};
    m.access = 4104;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_document_File$1_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2.call(lcA0, lcA1, lcA2);
return;

};
    m.access = 4096;
    m.cls = CLS;
    m = c.access$400__Lio_cloudoffice_platform_cockpit_document_File_2Lio_cloudoffice_platform_cockpit_document_File_2Lnet_java_html_BrwsrCtx_2 = function(lcA0, lcA1) {
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_document_File_2Lnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
return stA0;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new io_cloudoffice_platform_cockpit_document_File$Html4JavaType;
(refs_io_cloudoffice_platform_cockpit_document_File$Html4JavaType || (refs_io_cloudoffice_platform_cockpit_document_File$Html4JavaType = io_cloudoffice_platform_cockpit_document_File$Html4JavaType(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_document_File$1_2.call(stA0, null);
c._TYPE(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_document_FilefillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_document_File', { value : true });
      vm.java_lang_Cloneable(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_document_FilefillInstOf });
    io_cloudoffice_platform_cockpit_document_FilefillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/document/File';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.java_lang_Cloneable(false).constructor.$class
    ]; };
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_io_cloudoffice_platform_cockpit_document_DocumentComponent$FileModel;
    var refs_net_java_html_BrwsrCtx;
    var refs_java_lang_StringBuilder;
    var refs_io_cloudoffice_platform_cockpit_document_File$Html4JavaType;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_document_File_proto'] = null;
    this['fld_io_cloudoffice_platform_cockpit_document_File_prop_fileName'] = null;
    this['fld_io_cloudoffice_platform_cockpit_document_File_prop_fileContent'] = null;
    this['fld_io_cloudoffice_platform_cockpit_document_File_prop_mimeType'] = null;
    this['fld_io_cloudoffice_platform_cockpit_document_File_prop_size'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_document_File = registerClass(exports,'io_cloudoffice_platform_cockpit_document_File',io_cloudoffice_platform_cockpit_document_File);


function io_cloudoffice_platform_cockpit_document_File$Html4JavaType() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_document_File$Html4JavaType;
  if (!CLS.$class) {
    var pp = vm.org_netbeans_html_json_spi_Proto$Type(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_org_netbeans_html_json_spi_Proto$Type || (refs_org_netbeans_html_json_spi_Proto$Type = vm.org_netbeans_html_json_spi_Proto$Type(false))).constructor['cons__VLjava_lang_Class_2Ljava_lang_Class_2II'].call(lcA0, (refs_io_cloudoffice_platform_cockpit_document_File || (refs_io_cloudoffice_platform_cockpit_document_File = io_cloudoffice_platform_cockpit_document_File(false))).constructor.$class, (refs_io_cloudoffice_platform_cockpit_document_DocumentComponent$FileModel || (refs_io_cloudoffice_platform_cockpit_document_DocumentComponent$FileModel = io_cloudoffice_platform_cockpit_document_DocumentComponent$FileModel(false))).constructor.$class, 4, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"fileName", 0, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"fileContent", 1, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"mimeType", 2, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"size", 3, 0, 0);
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.setValue__VLio_cloudoffice_platform_cockpit_document_File_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0:{ gt = 32; break IF; }
  case 1:{ gt = 49; break IF; }
  case 2:{ gt = 66; break IF; }
  case 3:{ gt = 83; break IF; }
  default: { gt = 100; break IF; }
}
    }
    X_32: for (;;) { IF: if (gt <= 32) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_document_File || (refs_io_cloudoffice_platform_cockpit_document_File = io_cloudoffice_platform_cockpit_document_File(false))).access$100__Lio_cloudoffice_platform_cockpit_document_File$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setFileName__VLjava_lang_String_2(stA1);
return;
    }
    X_49: for (;;) { IF: if (gt <= 49) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_document_File || (refs_io_cloudoffice_platform_cockpit_document_File = io_cloudoffice_platform_cockpit_document_File(false))).access$100__Lio_cloudoffice_platform_cockpit_document_File$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setFileContent__VLjava_lang_String_2(stA1);
return;
    }
    X_66: for (;;) { IF: if (gt <= 66) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_document_File || (refs_io_cloudoffice_platform_cockpit_document_File = io_cloudoffice_platform_cockpit_document_File(false))).access$100__Lio_cloudoffice_platform_cockpit_document_File$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setMimeType__VLjava_lang_String_2(stA1);
return;
    }
    X_83: for (;;) { IF: if (gt <= 83) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_document_File || (refs_io_cloudoffice_platform_cockpit_document_File = io_cloudoffice_platform_cockpit_document_File(false))).access$100__Lio_cloudoffice_platform_cockpit_document_File$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setSize__VLjava_lang_String_2(stA1);
return;
    }
    X_100: for (;;) { IF: if (gt <= 100) {
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

    }
}}}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_document_File_2I = function(lcA1, lcI2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0:{ gt = 32; break IF; }
  case 1:{ gt = 37; break IF; }
  case 2:{ gt = 42; break IF; }
  case 3:{ gt = 47; break IF; }
  default: { gt = 52; break IF; }
}
    }
    X_32: for (;;) { IF: if (gt <= 32) {

var stA0 = lcA1.getFileName__Ljava_lang_String_2();
return stA0;
    }
    X_37: for (;;) { IF: if (gt <= 37) {

var stA0 = lcA1.getFileContent__Ljava_lang_String_2();
return stA0;
    }
    X_42: for (;;) { IF: if (gt <= 42) {

var stA0 = lcA1.getMimeType__Ljava_lang_String_2();
return stA0;
    }
    X_47: for (;;) { IF: if (gt <= 47) {

var stA0 = lcA1.getSize__Ljava_lang_String_2();
return stA0;
    }
    X_52: for (;;) { IF: if (gt <= 52) {
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

    }
}}}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.call__VLio_cloudoffice_platform_cockpit_document_File_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_document_File']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.document.File');
var stA0 = (refs_io_cloudoffice_platform_cockpit_document_File || (refs_io_cloudoffice_platform_cockpit_document_File = io_cloudoffice_platform_cockpit_document_File(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_document_File_2(lcA1);
return stA0;

};
c['protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.onChange__VLio_cloudoffice_platform_cockpit_document_File_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLio_cloudoffice_platform_cockpit_document_File_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
var stA1 = stA0;var stA2 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"index: ");
var stA2 = invoker.append__Ljava_lang_StringBuilder_2I(stA2,lcI2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2," type: ");
var stA2 = invoker.append__Ljava_lang_StringBuilder_2I(stA2,lcI3);
var stA2 = invoker.toString__Ljava_lang_String_2(stA2);
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__VLjava_lang_String_2'].call(stA1, stA2);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.read__Lio_cloudoffice_platform_cockpit_document_File_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = new io_cloudoffice_platform_cockpit_document_File;
(refs_io_cloudoffice_platform_cockpit_document_File || (refs_io_cloudoffice_platform_cockpit_document_File = io_cloudoffice_platform_cockpit_document_File(false))).constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_document_File$1_2.call(stA0, lcA1, lcA2, null);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.cloneTo__Lio_cloudoffice_platform_cockpit_document_File_2Lio_cloudoffice_platform_cockpit_document_File_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = (refs_io_cloudoffice_platform_cockpit_document_File || (refs_io_cloudoffice_platform_cockpit_document_File = io_cloudoffice_platform_cockpit_document_File(false))).access$400__Lio_cloudoffice_platform_cockpit_document_File_2Lio_cloudoffice_platform_cockpit_document_File_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_document_File']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.document.File');
lcA0.onMessage__VLio_cloudoffice_platform_cockpit_document_File_2IILjava_lang_Object_2_3Ljava_lang_Object_2(lcA1, lcI2, lcI3, lcA4, lcA5);
return;

};
c['onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.onChange__VLjava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_document_File']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.document.File');
lcA0.onChange__VLio_cloudoffice_platform_cockpit_document_File_2I(lcA1, lcI2);
return;

};
c['onChange__VLjava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = lcA0.read__Lio_cloudoffice_platform_cockpit_document_File_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2(lcA1, lcA2);
return stA0;

};
c['read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_document_File']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.document.File');
var stA0 = lcA0.cloneTo__Lio_cloudoffice_platform_cockpit_document_File_2Lio_cloudoffice_platform_cockpit_document_File_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
c['cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_document_File']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.document.File');
lcA0.call__VLio_cloudoffice_platform_cockpit_document_File_2ILjava_lang_Object_2Ljava_lang_Object_2(lcA1, lcI2, lcA3, lcA4);
return;

};
c['call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Ljava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_document_File']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.document.File');
var stA0 = lcA0.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_document_File_2I(lcA1, lcI2);
return stA0;

};
c['getValue__Ljava_lang_Object_2Ljava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.setValue__VLjava_lang_Object_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_document_File']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.document.File');
lcA0.setValue__VLio_cloudoffice_platform_cockpit_document_File_2ILjava_lang_Object_2(lcA1, lcI2, lcA3);
return;

};
c['setValue__VLjava_lang_Object_2ILjava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_document_File$1_2 = function(lcA1) {
  var  lcA0 = this;
c.constructor.cons__V.call(lcA0);
return;

};
    m.access = 4096;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_document_File$Html4JavaTypefillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_document_File$Html4JavaType', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_document_File$Html4JavaTypefillInstOf });
    io_cloudoffice_platform_cockpit_document_File$Html4JavaTypefillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/document/File$Html4JavaType';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_document_File;
    var refs_io_cloudoffice_platform_cockpit_document_DocumentComponent$FileModel;
    var refs_org_netbeans_html_json_spi_Proto$Type;
    var refs_java_lang_String;
    var refs_java_lang_UnsupportedOperationException;
    var refs_java_lang_StringBuilder;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_document_File$Html4JavaType = io_cloudoffice_platform_cockpit_document_File$Html4JavaType;


function io_cloudoffice_platform_cockpit_document_DocumentComponent$FileModel() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_document_DocumentComponent$FileModel;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._this$0 = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$FileModel_this$0'] = v; return this['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$FileModel_this$0']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_document_DocumentComponent_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$FileModel_this$0'] = lcA1;
return;

};
CLS['cons__VLio_cloudoffice_platform_cockpit_document_DocumentComponent_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.prepareFileFromInfo__Lio_cloudoffice_platform_cockpit_document_File_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2 = function(lcA1, lcA2, lcA3, lcA4) {
  var  lcA0 = this;
var stA0 = new io_cloudoffice_platform_cockpit_document_File;
(refs_io_cloudoffice_platform_cockpit_document_File || (refs_io_cloudoffice_platform_cockpit_document_File = io_cloudoffice_platform_cockpit_document_File(false))).constructor.cons__V.call(stA0);
var lcA5 = stA0;
lcA5.setFileName__VLjava_lang_String_2(lcA1);
lcA5.setFileContent__VLjava_lang_String_2(lcA2);
lcA5.setMimeType__VLjava_lang_String_2(lcA3);
lcA5.setSize__VLjava_lang_String_2(lcA4);
return lcA5;

};
c['prepareFileFromInfo__Lio_cloudoffice_platform_cockpit_document_File_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_document_DocumentComponent$FileModelfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_document_DocumentComponent$FileModel', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_document_DocumentComponent$FileModelfillInstOf });
    io_cloudoffice_platform_cockpit_document_DocumentComponent$FileModelfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/document/DocumentComponent$FileModel';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 33;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_document_File;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$FileModel_this$0'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_document_DocumentComponent$FileModel = registerClass(exports,'io_cloudoffice_platform_cockpit_document_DocumentComponent$FileModel',io_cloudoffice_platform_cockpit_document_DocumentComponent$FileModel);


function io_cloudoffice_platform_cockpit_document_DocumentComponent$FileViewModel() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_document_DocumentComponent$FileViewModel;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
return;

};
CLS['cons__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.removeFileItem__VLio_cloudoffice_platform_cockpit_document_FileView_2Lio_cloudoffice_platform_cockpit_document_File_2 = function(lcA0, lcA1) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = lcA0.getFileList__Ljava_util_List_2();
var stI0 = invoker.contains__ZLjava_lang_Object_2(stA0,lcA1);
if ((stI0) == 0) { gt = 40; break IF; }
var stA0 = lcA1.getFileName__Ljava_lang_String_2();
var lcA2 = stA0;
var stA0 = lcA0.getFileList__Ljava_util_List_2();
var stI0 = invoker.remove__ZLjava_lang_Object_2(stA0,lcA1);
var stA0 = lcA0.getFilesName__Ljava_util_List_2();
var stI0 = invoker.remove__ZLjava_lang_Object_2(stA0,lcA2);
    }
    X_40: for (;;) { IF: if (gt <= 40) {
return;

    }
}}
};
    m.access = 8;
    m.cls = CLS;
    m = c.clearFile__VLio_cloudoffice_platform_cockpit_document_FileView_2 = function(lcA0) {
lcA0.setFileContent__VLjava_lang_String_2("");
lcA0.setFileName__VLjava_lang_String_2("");
lcA0.setFileSize__VLjava_lang_String_2("");
lcA0.setMimeType__VLjava_lang_String_2("");
var stA0 = lcA0.getFileList__Ljava_util_List_2();
invoker.clear__V(stA0);
var stA0 = lcA0.getFilesName__Ljava_util_List_2();
invoker.clear__V(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.selectFile__VLio_cloudoffice_platform_cockpit_document_FileView_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = lcA0.getFileName__Ljava_lang_String_2();
var lcA1 = stA0;
var stA0 = lcA0.getFileContent__Ljava_lang_String_2();
var lcA2 = stA0;
var stI0 = lcA0.isSingle__Z();
var lcI3 = stI0;
if ((lcI3) == 0) { gt = 148; break IF; }
var stA0 = lcA0.getFilesName__Ljava_util_List_2();
invoker.clear__V(stA0);
var stA0 = lcA0.getFileList__Ljava_util_List_2();
invoker.clear__V(stA0);
if ((lcA1) === null) { gt = 278; break IF; }
var stI0 = invoker.isEmpty__Z(lcA1);
if ((stI0) != 0) { gt = 278; break IF; }
var stA0 = lcA0.getFilesName__Ljava_util_List_2();
var stI0 = invoker.contains__ZLjava_lang_Object_2(stA0,lcA1);
if ((stI0) != 0) { gt = 140; break IF; }
var stA0 = lcA0.getFilesName__Ljava_util_List_2();
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,lcA1);
var stA0 = lcA0.getMimeType__Ljava_lang_String_2();
var lcA4 = stA0;
var stA0 = lcA0.getFileSize__Ljava_lang_String_2();
var lcA5 = stA0;
var stA0 = new io_cloudoffice_platform_cockpit_document_File;
(refs_io_cloudoffice_platform_cockpit_document_File || (refs_io_cloudoffice_platform_cockpit_document_File = io_cloudoffice_platform_cockpit_document_File(false))).constructor.cons__V.call(stA0);
var lcA6 = stA0;
lcA6.setFileName__VLjava_lang_String_2(lcA1);
lcA6.setFileContent__VLjava_lang_String_2(lcA2);
lcA6.setMimeType__VLjava_lang_String_2(lcA4);
lcA6.setSize__VLjava_lang_String_2(lcA5);
var stA0 = lcA0.getFileList__Ljava_util_List_2();
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,lcA6);
lcA0.setFileName__VLjava_lang_String_2("");
{ gt = 278; break IF; }
    }
    X_140: for (;;) { IF: if (gt <= 140) {

(refs_io_cloudoffice_platform_cockpit_js_JSUIUtils || (refs_io_cloudoffice_platform_cockpit_js_JSUIUtils = vm.io_cloudoffice_platform_cockpit_js_JSUIUtils(false)))['alert__VLjava_lang_String_2']("This file already selected.");
{ gt = 278; break IF; }
    }
    X_148: for (;;) { IF: if (gt <= 148) {

if ((lcA1) === null) { gt = 278; break IF; }
var stI0 = invoker.isEmpty__Z(lcA1);
if ((stI0) != 0) { gt = 278; break IF; }
var stA0 = lcA0.getFilesName__Ljava_util_List_2();
var stI0 = invoker.contains__ZLjava_lang_Object_2(stA0,lcA1);
if ((stI0) != 0) { gt = 273; break IF; }
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"fileName :");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,lcA1);
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
(refs_io_cloudoffice_platform_cockpit_js_JSUIUtils || (refs_io_cloudoffice_platform_cockpit_js_JSUIUtils = vm.io_cloudoffice_platform_cockpit_js_JSUIUtils(false)))['console__VLjava_lang_String_2'](stA0);
var stA0 = lcA0.getFilesName__Ljava_util_List_2();
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,lcA1);
var stA0 = lcA0.getMimeType__Ljava_lang_String_2();
var lcA4 = stA0;
var stA0 = lcA0.getFileSize__Ljava_lang_String_2();
var lcA5 = stA0;
var stA0 = new io_cloudoffice_platform_cockpit_document_File;
(refs_io_cloudoffice_platform_cockpit_document_File || (refs_io_cloudoffice_platform_cockpit_document_File = io_cloudoffice_platform_cockpit_document_File(false))).constructor.cons__V.call(stA0);
var lcA6 = stA0;
lcA6.setFileName__VLjava_lang_String_2(lcA1);
lcA6.setFileContent__VLjava_lang_String_2(lcA2);
lcA6.setMimeType__VLjava_lang_String_2(lcA4);
lcA6.setSize__VLjava_lang_String_2(lcA5);
var stA0 = lcA0.getFileList__Ljava_util_List_2();
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,lcA6);
lcA0.setFileName__VLjava_lang_String_2("");
{ gt = 278; break IF; }
    }
    X_273: for (;;) { IF: if (gt <= 273) {

(refs_io_cloudoffice_platform_cockpit_js_JSUIUtils || (refs_io_cloudoffice_platform_cockpit_js_JSUIUtils = vm.io_cloudoffice_platform_cockpit_js_JSUIUtils(false)))['alert__VLjava_lang_String_2']("This file already selected.");
    }
    X_278: for (;;) { IF: if (gt <= 278) {
return;

    }
}}}}}
};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_document_DocumentComponent$FileViewModelfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_document_DocumentComponent$FileViewModel', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_document_DocumentComponent$FileViewModelfillInstOf });
    io_cloudoffice_platform_cockpit_document_DocumentComponent$FileViewModelfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/document/DocumentComponent$FileViewModel';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 33;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_document_File;
    var refs_io_cloudoffice_platform_cockpit_js_JSUIUtils;
    var refs_java_lang_StringBuilder;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_document_DocumentComponent$FileViewModel = registerClass(exports,'io_cloudoffice_platform_cockpit_document_DocumentComponent$FileViewModel',io_cloudoffice_platform_cockpit_document_DocumentComponent$FileViewModel);

vm.java_lang_UnsupportedOperationException = link('java/lang/UnsupportedOperationException', function(f) { vm.java_lang_UnsupportedOperationException =  f; });

function io_cloudoffice_platform_cockpit_document_DocumentComponent$InitNewItemComponentListener() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_document_DocumentComponent$InitNewItemComponentListener;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._this$0 = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$InitNewItemComponentListener_this$0'] = v; return this['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$InitNewItemComponentListener_this$0']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_document_DocumentComponent_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$InitNewItemComponentListener_this$0'] = lcA1;
return;

};
CLS['cons__VLio_cloudoffice_platform_cockpit_document_DocumentComponent_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.onReceive__VLio_cloudoffice_platform_cockpit_api_Signal_2 = function(lcA1) {
  var  lcA0 = this;
lcA0.loadComponents__VLio_cloudoffice_platform_cockpit_api_Signal_2(lcA1);
return;

};
c['onReceive__VLio_cloudoffice_platform_cockpit_api_Signal_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.loadComponents__VLio_cloudoffice_platform_cockpit_api_Signal_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = invoker.getInstanceId__Ljava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$InitNewItemComponentListener_this$0']);
var lcA2 = stA0;
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['_CONFIG']();var stA1 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['configFetchEndpoint__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2']("document", lcA2);
var stA2 = null;var stA3 = new io_cloudoffice_platform_cockpit_document_DocumentComponent$InitNewItemComponentListener$1;
(refs_io_cloudoffice_platform_cockpit_document_DocumentComponent$InitNewItemComponentListener$1 || (refs_io_cloudoffice_platform_cockpit_document_DocumentComponent$InitNewItemComponentListener$1 = io_cloudoffice_platform_cockpit_document_DocumentComponent$InitNewItemComponentListener$1(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_document_DocumentComponent$InitNewItemComponentListener_2.call(stA3, lcA0);
invoker.fetch__VLjava_lang_String_2Ljava_util_Map_2Lio_cloudoffice_platform_cockpit_api_CallBack_2(stA0,stA1, stA2, stA3);
return;

};
    m.access = 0;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_document_DocumentComponent$InitNewItemComponentListenerfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_document_DocumentComponent$InitNewItemComponentListener', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_EventListener(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_document_DocumentComponent$InitNewItemComponentListenerfillInstOf });
    io_cloudoffice_platform_cockpit_document_DocumentComponent$InitNewItemComponentListenerfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/document/DocumentComponent$InitNewItemComponentListener';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_EventListener(false).constructor.$class
    ]; };
    CLS.$class.access = 33;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration;
    var refs_io_cloudoffice_platform_cockpit_document_DocumentComponent$InitNewItemComponentListener$1;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$InitNewItemComponentListener_this$0'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_document_DocumentComponent$InitNewItemComponentListener = registerClass(exports,'io_cloudoffice_platform_cockpit_document_DocumentComponent$InitNewItemComponentListener',io_cloudoffice_platform_cockpit_document_DocumentComponent$InitNewItemComponentListener);

vm.io_cloudoffice_platform_cockpit_api_EventListener = link('io/cloudoffice/platform/cockpit/api/EventListener', function(f) { vm.io_cloudoffice_platform_cockpit_api_EventListener =  f; });

function io_cloudoffice_platform_cockpit_document_DocumentComponent$InitNewItemComponentListener$1() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_document_DocumentComponent$InitNewItemComponentListener$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._this$1 = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$InitNewItemComponentListener$1_this$1'] = v; return this['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$InitNewItemComponentListener$1_this$1']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_document_DocumentComponent$InitNewItemComponentListener_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$InitNewItemComponentListener$1_this$1'] = lcA1;
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.handle__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['query__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2'](lcA1);
var lcA2 = stA0;
var stA0 = new io_cloudoffice_platform_cockpit_document_DocumentView;
(refs_io_cloudoffice_platform_cockpit_document_DocumentView || (refs_io_cloudoffice_platform_cockpit_document_DocumentView = io_cloudoffice_platform_cockpit_document_DocumentView(false))).constructor.cons__V.call(stA0);
var lcA3 = stA0;
var stA0 = lcA3;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA2,"instance");
stA0.setInstance__VLjava_lang_String_2(stA1);
(refs_io_cloudoffice_platform_cockpit_document_DocumentComponent || (refs_io_cloudoffice_platform_cockpit_document_DocumentComponent = io_cloudoffice_platform_cockpit_document_DocumentComponent(false))).access$300__VLio_cloudoffice_platform_cockpit_document_DocumentComponent_2Lio_cloudoffice_platform_cockpit_document_DocumentView_2Lio_cloudoffice_platform_cockpit_api_MapBuilder_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$InitNewItemComponentListener$1_this$1']['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$InitNewItemComponentListener_this$0'], lcA3, lcA2);
lcA3.setVisible__VZ(1);
lcA3.setFullViewEnabled__VZ(1);
(refs_io_cloudoffice_platform_cockpit_document_DocumentComponent || (refs_io_cloudoffice_platform_cockpit_document_DocumentComponent = io_cloudoffice_platform_cockpit_document_DocumentComponent(false))).enableCreateMode__VLio_cloudoffice_platform_cockpit_document_DocumentView_2(lcA3);
invoker.setView__VLjava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$InitNewItemComponentListener$1_this$1']['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$InitNewItemComponentListener_this$0'],lcA3);
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"VIEW: ");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2(stA0,lcA3);
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
(refs_io_cloudoffice_platform_cockpit_js_JSUIUtils || (refs_io_cloudoffice_platform_cockpit_js_JSUIUtils = vm.io_cloudoffice_platform_cockpit_js_JSUIUtils(false)))['alert__VLjava_lang_String_2'](stA0);
var stA0 = invoker.getViewName__Ljava_lang_String_2Ljava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$InitNewItemComponentListener$1_this$1']['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$InitNewItemComponentListener_this$0'],"createview");
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['toRaw__Ljava_lang_Object_2Ljava_lang_Object_2'](lcA3);
(refs_io_cloudoffice_platform_cockpit_js_VIEW || (refs_io_cloudoffice_platform_cockpit_js_VIEW = vm.io_cloudoffice_platform_cockpit_js_VIEW(false)))['bind__VLjava_lang_String_2Ljava_lang_Object_2'](stA0, stA1);
return;

};
c['handle__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_document_DocumentComponent$InitNewItemComponentListener$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_document_DocumentComponent$InitNewItemComponentListener$1', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_CallBack(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_document_DocumentComponent$InitNewItemComponentListener$1fillInstOf });
    io_cloudoffice_platform_cockpit_document_DocumentComponent$InitNewItemComponentListener$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/document/DocumentComponent$InitNewItemComponentListener$1';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_CallBack(false).constructor.$class
    ]; };
    CLS.$class.access = 65568;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_MapBuilder;
    var refs_io_cloudoffice_platform_cockpit_document_DocumentView;
    var refs_io_cloudoffice_platform_cockpit_document_DocumentComponent;
    var refs_java_lang_StringBuilder;
    var refs_io_cloudoffice_platform_cockpit_js_JSUIUtils;
    var refs_net_java_html_json_Models;
    var refs_io_cloudoffice_platform_cockpit_js_VIEW;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$InitNewItemComponentListener$1_this$1'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_document_DocumentComponent$InitNewItemComponentListener$1 = io_cloudoffice_platform_cockpit_document_DocumentComponent$InitNewItemComponentListener$1;


function io_cloudoffice_platform_cockpit_document_DocumentComponent$FunctionInvokeListener() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_document_DocumentComponent$FunctionInvokeListener;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._this$0 = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$FunctionInvokeListener_this$0'] = v; return this['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$FunctionInvokeListener_this$0']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_document_DocumentComponent_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$FunctionInvokeListener_this$0'] = lcA1;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.onReceive__VLio_cloudoffice_platform_cockpit_api_Signal_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = invoker.getPackets__Ljava_util_List_2(lcA1);
var stA0 = invoker.get__Ljava_lang_Object_2I(stA0,0);
var lcA2 = stA0;
if ((null) === (lcA2)) { gt = 29; break IF; }
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$FunctionInvokeListener_this$0'];var stA1 = (refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false)))['valueOf__Ljava_lang_String_2Ljava_lang_Object_2'](lcA2);
invoker.invoke__VLjava_lang_String_2(stA0,stA1);
    }
    X_29: for (;;) { IF: if (gt <= 29) {
return;

    }
}}
};
c['onReceive__VLio_cloudoffice_platform_cockpit_api_Signal_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_document_DocumentComponent_2Lio_cloudoffice_platform_cockpit_document_DocumentComponent$1_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
c.constructor.cons__VLio_cloudoffice_platform_cockpit_document_DocumentComponent_2.call(lcA0, lcA1);
return;

};
    m.access = 4096;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_document_DocumentComponent$FunctionInvokeListenerfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_document_DocumentComponent$FunctionInvokeListener', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_EventListener(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_document_DocumentComponent$FunctionInvokeListenerfillInstOf });
    io_cloudoffice_platform_cockpit_document_DocumentComponent$FunctionInvokeListenerfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/document/DocumentComponent$FunctionInvokeListener';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_EventListener(false).constructor.$class
    ]; };
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
    var refs_java_lang_String;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$FunctionInvokeListener_this$0'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_document_DocumentComponent$FunctionInvokeListener = io_cloudoffice_platform_cockpit_document_DocumentComponent$FunctionInvokeListener;


function io_cloudoffice_platform_cockpit_document_DocumentComponent$LoadItemDetailListener() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_document_DocumentComponent$LoadItemDetailListener;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._this$0 = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$LoadItemDetailListener_this$0'] = v; return this['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$LoadItemDetailListener_this$0']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_document_DocumentComponent_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$LoadItemDetailListener_this$0'] = lcA1;
return;

};
CLS['cons__VLio_cloudoffice_platform_cockpit_document_DocumentComponent_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.onReceive__VLio_cloudoffice_platform_cockpit_api_Signal_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = invoker.getPackets__Ljava_util_List_2(lcA1);
var stA0 = invoker.get__Ljava_lang_Object_2I(stA0,0);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_api_MapBuilder']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.api.MapBuilder');
var lcA2 = stA0;
if ((null) === (lcA2)) { gt = 34; break IF; }
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$LoadItemDetailListener_this$0'];var stA1 = "processDocumentDetail";var stA2 = invoker.toJSON__Ljava_lang_String_2(lcA2);
invoker.invoke__VLjava_lang_String_2Ljava_lang_String_2(stA0,stA1, stA2);
    }
    X_34: for (;;) { IF: if (gt <= 34) {
return;

    }
}}
};
c['onReceive__VLio_cloudoffice_platform_cockpit_api_Signal_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_document_DocumentComponent$LoadItemDetailListenerfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_document_DocumentComponent$LoadItemDetailListener', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_EventListener(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_document_DocumentComponent$LoadItemDetailListenerfillInstOf });
    io_cloudoffice_platform_cockpit_document_DocumentComponent$LoadItemDetailListenerfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/document/DocumentComponent$LoadItemDetailListener';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_EventListener(false).constructor.$class
    ]; };
    CLS.$class.access = 33;
    CLS.$class.cnstr = CLS;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$LoadItemDetailListener_this$0'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_document_DocumentComponent$LoadItemDetailListener = registerClass(exports,'io_cloudoffice_platform_cockpit_document_DocumentComponent$LoadItemDetailListener',io_cloudoffice_platform_cockpit_document_DocumentComponent$LoadItemDetailListener);


function io_cloudoffice_platform_cockpit_document_DocumentComponent$EnableSplitViewListener() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_document_DocumentComponent$EnableSplitViewListener;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._this$0 = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$EnableSplitViewListener_this$0'] = v; return this['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$EnableSplitViewListener_this$0']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_document_DocumentComponent_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$EnableSplitViewListener_this$0'] = lcA1;
return;

};
CLS['cons__VLio_cloudoffice_platform_cockpit_document_DocumentComponent_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.onReceive__VLio_cloudoffice_platform_cockpit_api_Signal_2 = function(lcA1) {
  var  lcA0 = this;
invoker.invoke__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$EnableSplitViewListener_this$0'],"enableSplitView");
return;

};
c['onReceive__VLio_cloudoffice_platform_cockpit_api_Signal_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_document_DocumentComponent$EnableSplitViewListenerfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_document_DocumentComponent$EnableSplitViewListener', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_EventListener(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_document_DocumentComponent$EnableSplitViewListenerfillInstOf });
    io_cloudoffice_platform_cockpit_document_DocumentComponent$EnableSplitViewListenerfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/document/DocumentComponent$EnableSplitViewListener';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_EventListener(false).constructor.$class
    ]; };
    CLS.$class.access = 33;
    CLS.$class.cnstr = CLS;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$EnableSplitViewListener_this$0'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_document_DocumentComponent$EnableSplitViewListener = registerClass(exports,'io_cloudoffice_platform_cockpit_document_DocumentComponent$EnableSplitViewListener',io_cloudoffice_platform_cockpit_document_DocumentComponent$EnableSplitViewListener);


function io_cloudoffice_platform_cockpit_document_DocumentComponent$EnableFullViewListener() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_document_DocumentComponent$EnableFullViewListener;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._this$0 = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$EnableFullViewListener_this$0'] = v; return this['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$EnableFullViewListener_this$0']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_document_DocumentComponent_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$EnableFullViewListener_this$0'] = lcA1;
return;

};
CLS['cons__VLio_cloudoffice_platform_cockpit_document_DocumentComponent_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.onReceive__VLio_cloudoffice_platform_cockpit_api_Signal_2 = function(lcA1) {
  var  lcA0 = this;
invoker.invoke__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$EnableFullViewListener_this$0'],"enableFullView");
return;

};
c['onReceive__VLio_cloudoffice_platform_cockpit_api_Signal_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_document_DocumentComponent$EnableFullViewListenerfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_document_DocumentComponent$EnableFullViewListener', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_EventListener(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_document_DocumentComponent$EnableFullViewListenerfillInstOf });
    io_cloudoffice_platform_cockpit_document_DocumentComponent$EnableFullViewListenerfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/document/DocumentComponent$EnableFullViewListener';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_EventListener(false).constructor.$class
    ]; };
    CLS.$class.access = 33;
    CLS.$class.cnstr = CLS;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$EnableFullViewListener_this$0'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_document_DocumentComponent$EnableFullViewListener = registerClass(exports,'io_cloudoffice_platform_cockpit_document_DocumentComponent$EnableFullViewListener',io_cloudoffice_platform_cockpit_document_DocumentComponent$EnableFullViewListener);


function io_cloudoffice_platform_cockpit_document_DocumentComponent$DesignModeListener() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_document_DocumentComponent$DesignModeListener;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._this$0 = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$DesignModeListener_this$0'] = v; return this['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$DesignModeListener_this$0']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_document_DocumentComponent_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$DesignModeListener_this$0'] = lcA1;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.onReceive__VLio_cloudoffice_platform_cockpit_api_Signal_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = invoker.getPackets__Ljava_util_List_2(lcA1);
var stA0 = invoker.get__Ljava_lang_Object_2I(stA0,0);
var lcA2 = stA0;
if ((null) === (lcA2)) { gt = 29; break IF; }
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$DesignModeListener_this$0'];var stA1 = (refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false)))['valueOf__Ljava_lang_String_2Ljava_lang_Object_2'](lcA2);
invoker.invoke__VLjava_lang_String_2(stA0,stA1);
    }
    X_29: for (;;) { IF: if (gt <= 29) {
return;

    }
}}
};
c['onReceive__VLio_cloudoffice_platform_cockpit_api_Signal_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_document_DocumentComponent_2Lio_cloudoffice_platform_cockpit_document_DocumentComponent$1_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
c.constructor.cons__VLio_cloudoffice_platform_cockpit_document_DocumentComponent_2.call(lcA0, lcA1);
return;

};
    m.access = 4096;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_document_DocumentComponent$DesignModeListenerfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_document_DocumentComponent$DesignModeListener', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_EventListener(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_document_DocumentComponent$DesignModeListenerfillInstOf });
    io_cloudoffice_platform_cockpit_document_DocumentComponent$DesignModeListenerfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/document/DocumentComponent$DesignModeListener';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_EventListener(false).constructor.$class
    ]; };
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
    var refs_java_lang_String;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$DesignModeListener_this$0'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_document_DocumentComponent$DesignModeListener = io_cloudoffice_platform_cockpit_document_DocumentComponent$DesignModeListener;


function io_cloudoffice_platform_cockpit_document_DocumentComponent$LoginEventListener() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_document_DocumentComponent$LoginEventListener;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._this$0 = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$LoginEventListener_this$0'] = v; return this['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$LoginEventListener_this$0']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_document_DocumentComponent_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$LoginEventListener_this$0'] = lcA1;
return;

};
CLS['cons__VLio_cloudoffice_platform_cockpit_document_DocumentComponent_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.onReceive__VLio_cloudoffice_platform_cockpit_api_Signal_2 = function(lcA1) {
  var  lcA0 = this;
lcA0.loadComponents__VLio_cloudoffice_platform_cockpit_api_Signal_2(lcA1);
return;

};
c['onReceive__VLio_cloudoffice_platform_cockpit_api_Signal_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.loadComponents__VLio_cloudoffice_platform_cockpit_api_Signal_2 = function(lcA1) {
  var  lcA0 = this;
(refs_io_cloudoffice_platform_cockpit_js_VIEW || (refs_io_cloudoffice_platform_cockpit_js_VIEW = vm.io_cloudoffice_platform_cockpit_js_VIEW(false)))['renderView__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2']("document", "document", "document");
(refs_io_cloudoffice_platform_cockpit_js_VIEW || (refs_io_cloudoffice_platform_cockpit_js_VIEW = vm.io_cloudoffice_platform_cockpit_js_VIEW(false)))['renderView__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2']("document", "documentcontentview", "documentcontentview");
(refs_io_cloudoffice_platform_cockpit_js_VIEW || (refs_io_cloudoffice_platform_cockpit_js_VIEW = vm.io_cloudoffice_platform_cockpit_js_VIEW(false)))['renderView__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2']("document", "documentmetaview", "documentmetaview");
(refs_io_cloudoffice_platform_cockpit_js_VIEW || (refs_io_cloudoffice_platform_cockpit_js_VIEW = vm.io_cloudoffice_platform_cockpit_js_VIEW(false)))['renderView__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2']("document", "documenteditview", "documenteditview");
var stA0 = invoker.getInstanceId__Ljava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$LoginEventListener_this$0']);
var lcA2 = stA0;
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['_CONFIG']();var stA1 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['configFetchEndpoint__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2']("document", lcA2);
var stA2 = null;var stA3 = new io_cloudoffice_platform_cockpit_document_DocumentComponent$LoginEventListener$1;
(refs_io_cloudoffice_platform_cockpit_document_DocumentComponent$LoginEventListener$1 || (refs_io_cloudoffice_platform_cockpit_document_DocumentComponent$LoginEventListener$1 = io_cloudoffice_platform_cockpit_document_DocumentComponent$LoginEventListener$1(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_document_DocumentComponent$LoginEventListener_2.call(stA3, lcA0);
invoker.fetch__VLjava_lang_String_2Ljava_util_Map_2Lio_cloudoffice_platform_cockpit_api_CallBack_2(stA0,stA1, stA2, stA3);
return;

};
    m.access = 0;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_document_DocumentComponent$LoginEventListenerfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_document_DocumentComponent$LoginEventListener', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_EventListener(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_document_DocumentComponent$LoginEventListenerfillInstOf });
    io_cloudoffice_platform_cockpit_document_DocumentComponent$LoginEventListenerfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/document/DocumentComponent$LoginEventListener';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_EventListener(false).constructor.$class
    ]; };
    CLS.$class.access = 33;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_js_VIEW;
    var refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration;
    var refs_io_cloudoffice_platform_cockpit_document_DocumentComponent$LoginEventListener$1;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$LoginEventListener_this$0'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_document_DocumentComponent$LoginEventListener = registerClass(exports,'io_cloudoffice_platform_cockpit_document_DocumentComponent$LoginEventListener',io_cloudoffice_platform_cockpit_document_DocumentComponent$LoginEventListener);


function io_cloudoffice_platform_cockpit_document_DocumentComponent$LoginEventListener$1() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_document_DocumentComponent$LoginEventListener$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._this$1 = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$LoginEventListener$1_this$1'] = v; return this['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$LoginEventListener$1_this$1']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_document_DocumentComponent$LoginEventListener_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$LoginEventListener$1_this$1'] = lcA1;
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.handle__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['query__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2'](lcA1);
var lcA2 = stA0;
var stA0 = new io_cloudoffice_platform_cockpit_document_DocumentView;
(refs_io_cloudoffice_platform_cockpit_document_DocumentView || (refs_io_cloudoffice_platform_cockpit_document_DocumentView = io_cloudoffice_platform_cockpit_document_DocumentView(false))).constructor.cons__V.call(stA0);
var lcA3 = stA0;
var stA0 = lcA3;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA2,"instance");
stA0.setInstance__VLjava_lang_String_2(stA1);
(refs_io_cloudoffice_platform_cockpit_document_DocumentComponent || (refs_io_cloudoffice_platform_cockpit_document_DocumentComponent = io_cloudoffice_platform_cockpit_document_DocumentComponent(false))).access$300__VLio_cloudoffice_platform_cockpit_document_DocumentComponent_2Lio_cloudoffice_platform_cockpit_document_DocumentView_2Lio_cloudoffice_platform_cockpit_api_MapBuilder_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$LoginEventListener$1_this$1']['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$LoginEventListener_this$0'], lcA3, lcA2);
lcA3.setFullViewEnabled__VZ(1);
invoker.setView__VLjava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$LoginEventListener$1_this$1']['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$LoginEventListener_this$0'],lcA3);
var stA0 = invoker.getDefaultViewName__Ljava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$LoginEventListener$1_this$1']['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$LoginEventListener_this$0']);
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['toRaw__Ljava_lang_Object_2Ljava_lang_Object_2'](lcA3);
(refs_io_cloudoffice_platform_cockpit_js_VIEW || (refs_io_cloudoffice_platform_cockpit_js_VIEW = vm.io_cloudoffice_platform_cockpit_js_VIEW(false)))['bind__VLjava_lang_String_2Ljava_lang_Object_2'](stA0, stA1);
return;

};
c['handle__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_document_DocumentComponent$LoginEventListener$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_document_DocumentComponent$LoginEventListener$1', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_CallBack(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_document_DocumentComponent$LoginEventListener$1fillInstOf });
    io_cloudoffice_platform_cockpit_document_DocumentComponent$LoginEventListener$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/document/DocumentComponent$LoginEventListener$1';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_CallBack(false).constructor.$class
    ]; };
    CLS.$class.access = 65568;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_MapBuilder;
    var refs_io_cloudoffice_platform_cockpit_document_DocumentView;
    var refs_io_cloudoffice_platform_cockpit_document_DocumentComponent;
    var refs_net_java_html_json_Models;
    var refs_io_cloudoffice_platform_cockpit_js_VIEW;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_document_DocumentComponent$LoginEventListener$1_this$1'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_document_DocumentComponent$LoginEventListener$1 = io_cloudoffice_platform_cockpit_document_DocumentComponent$LoginEventListener$1;

vm.io_cloudoffice_platform_cockpit_api_AbstractComponent = link('io/cloudoffice/platform/cockpit/api/AbstractComponent', function(f) { vm.io_cloudoffice_platform_cockpit_api_AbstractComponent =  f; });
vm.io_cloudoffice_platform_cockpit_api_Logger = link('io/cloudoffice/platform/cockpit/api/Logger', function(f) { vm.io_cloudoffice_platform_cockpit_api_Logger =  f; });

function io_cloudoffice_platform_cockpit_document_DocumentConfiguration$1() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_document_DocumentConfiguration$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_document_DocumentConfiguration$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_document_DocumentConfiguration$1', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_document_DocumentConfiguration$1fillInstOf });
    io_cloudoffice_platform_cockpit_document_DocumentConfiguration$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/document/DocumentConfiguration$1';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 69664;
    CLS.$class.cnstr = CLS;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_document_DocumentConfiguration$1 = io_cloudoffice_platform_cockpit_document_DocumentConfiguration$1;


function io_cloudoffice_platform_cockpit_document_DocumentView$1() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_document_DocumentView$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_document_DocumentView$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_document_DocumentView$1', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_document_DocumentView$1fillInstOf });
    io_cloudoffice_platform_cockpit_document_DocumentView$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/document/DocumentView$1';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 69664;
    CLS.$class.cnstr = CLS;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_document_DocumentView$1 = io_cloudoffice_platform_cockpit_document_DocumentView$1;


function io_cloudoffice_platform_cockpit_document_File$1() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_document_File$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_document_File$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_document_File$1', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_document_File$1fillInstOf });
    io_cloudoffice_platform_cockpit_document_File$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/document/File$1';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 69664;
    CLS.$class.cnstr = CLS;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_document_File$1 = io_cloudoffice_platform_cockpit_document_File$1;


function io_cloudoffice_platform_cockpit_document_FileFormat$1() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_document_FileFormat$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_document_FileFormat$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_document_FileFormat$1', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_document_FileFormat$1fillInstOf });
    io_cloudoffice_platform_cockpit_document_FileFormat$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/document/FileFormat$1';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 69664;
    CLS.$class.cnstr = CLS;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_document_FileFormat$1 = io_cloudoffice_platform_cockpit_document_FileFormat$1;


function io_cloudoffice_platform_cockpit_document_FileVersion$1() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_document_FileVersion$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_document_FileVersion$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_document_FileVersion$1', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_document_FileVersion$1fillInstOf });
    io_cloudoffice_platform_cockpit_document_FileVersion$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/document/FileVersion$1';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 69664;
    CLS.$class.cnstr = CLS;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_document_FileVersion$1 = io_cloudoffice_platform_cockpit_document_FileVersion$1;


function io_cloudoffice_platform_cockpit_document_FileView$1() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_document_FileView$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_document_FileView$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_document_FileView$1', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_document_FileView$1fillInstOf });
    io_cloudoffice_platform_cockpit_document_FileView$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/document/FileView$1';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 69664;
    CLS.$class.cnstr = CLS;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_document_FileView$1 = io_cloudoffice_platform_cockpit_document_FileView$1;


function io_cloudoffice_platform_cockpit_document_Item$1() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_document_Item$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_document_Item$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_document_Item$1', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_document_Item$1fillInstOf });
    io_cloudoffice_platform_cockpit_document_Item$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/document/Item$1';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 69664;
    CLS.$class.cnstr = CLS;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_document_Item$1 = io_cloudoffice_platform_cockpit_document_Item$1;

  invoker.attachListener__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_EventListener_2 = function(target, p1, p2) {
    return target['attachListener__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_EventListener_2'](p1,p2);
  };
  invoker.getName__Ljava_lang_String_2 = function(target) {
    return target['getName__Ljava_lang_String_2']();
  };
  invoker.setDefaultViewName__VLjava_lang_String_2 = function(target, p1) {
    return target['setDefaultViewName__VLjava_lang_String_2'](p1);
  };
  invoker.setDefaultConfigViewName__VLjava_lang_String_2 = function(target, p1) {
    return target['setDefaultConfigViewName__VLjava_lang_String_2'](p1);
  };
  invoker.addViewName__VLjava_lang_String_2Ljava_lang_String_2 = function(target, p1, p2) {
    return target['addViewName__VLjava_lang_String_2Ljava_lang_String_2'](p1,p2);
  };
  invoker.post__VLjava_lang_String_2Ljava_lang_String_2Lio_cloudoffice_platform_cockpit_api_CallBack_2 = function(target, p1, p2, p3) {
    return target['post__VLjava_lang_String_2Ljava_lang_String_2Lio_cloudoffice_platform_cockpit_api_CallBack_2'](p1,p2,p3);
  };
  invoker.fetch__VLjava_lang_String_2Ljava_util_Map_2Lio_cloudoffice_platform_cockpit_api_CallBack_2 = function(target, p1, p2, p3) {
    return target['fetch__VLjava_lang_String_2Ljava_util_Map_2Lio_cloudoffice_platform_cockpit_api_CallBack_2'](p1,p2,p3);
  };
  invoker.getJsonObject__Lorg_json_JSONObject_2Ljava_lang_String_2 = function(target, p1) {
    return target['getJsonObject__Lorg_json_JSONObject_2Ljava_lang_String_2'](p1);
  };
  invoker.getString__Ljava_lang_String_2Ljava_lang_String_2 = function(target, p1) {
    return target['getString__Ljava_lang_String_2Ljava_lang_String_2'](p1);
  };
  invoker.getJSONObject__Lorg_json_JSONObject_2Ljava_lang_String_2 = function(target, p1) {
    return target['getJSONObject__Lorg_json_JSONObject_2Ljava_lang_String_2'](p1);
  };
  invoker.setComponent__VLjava_lang_String_2 = function(target, p1) {
    return target['setComponent__VLjava_lang_String_2'](p1);
  };
  invoker.setInstanceId__VLjava_lang_String_2 = function(target, p1) {
    return target['setInstanceId__VLjava_lang_String_2'](p1);
  };
  invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2 = function(target, p1) {
    return target['append__Ljava_lang_StringBuilder_2Ljava_lang_String_2'](p1);
  };
  invoker.toString__Ljava_lang_String_2 = function(target) {
    return target['toString__Ljava_lang_String_2']();
  };
  invoker.getComponent__Ljava_lang_String_2 = function(target) {
    return target['getComponent__Ljava_lang_String_2']();
  };
  invoker.getInstanceId__Ljava_lang_String_2 = function(target) {
    return target['getInstanceId__Ljava_lang_String_2']();
  };
  invoker.listen__VLio_cloudoffice_platform_cockpit_api_Signal_2 = function(target, p1) {
    return target['listen__VLio_cloudoffice_platform_cockpit_api_Signal_2'](p1);
  };
  invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2 = function(target, p1, p2) {
    return target['addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2'](p1,p2);
  };
  invoker.equals__ZLjava_lang_Object_2 = function(target, p1) {
    return target['equals__ZLjava_lang_Object_2'](p1);
  };
  invoker.size__I = function(target) {
    return target['size__I']();
  };
  invoker.setActive__VZ = function(target, p1) {
    return target['setActive__VZ'](p1);
  };
  invoker.call__VLio_cloudoffice_platform_cockpit_api_ServerCallback_2 = function(target, p1) {
    return target['call__VLio_cloudoffice_platform_cockpit_api_ServerCallback_2'](p1);
  };
  invoker.toJSON__Ljava_lang_String_2 = function(target) {
    return target['toJSON__Ljava_lang_String_2']();
  };
  invoker.clear__V = function(target) {
    return target['clear__V']();
  };
  invoker.getBoolean__ZLjava_lang_String_2 = function(target, p1) {
    return target['getBoolean__ZLjava_lang_String_2'](p1);
  };
  invoker.getList__Ljava_util_List_2Ljava_lang_String_2 = function(target, p1) {
    return target['getList__Ljava_util_List_2Ljava_lang_String_2'](p1);
  };
  invoker.contains__ZLjava_lang_CharSequence_2 = function(target, p1) {
    return target['contains__ZLjava_lang_CharSequence_2'](p1);
  };
  invoker.iterator__Ljava_util_Iterator_2 = function(target) {
    return target['iterator__Ljava_util_Iterator_2']();
  };
  invoker.hasNext__Z = function(target) {
    return target['hasNext__Z']();
  };
  invoker.next__Ljava_lang_Object_2 = function(target) {
    return target['next__Ljava_lang_Object_2']();
  };
  invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2 = function(target, p1) {
    return target['get__Ljava_lang_Object_2Ljava_lang_Object_2'](p1);
  };
  invoker.equalsIgnoreCase__ZLjava_lang_String_2 = function(target, p1) {
    return target['equalsIgnoreCase__ZLjava_lang_String_2'](p1);
  };
  invoker.add__ZLjava_lang_Object_2 = function(target, p1) {
    return target['add__ZLjava_lang_Object_2'](p1);
  };
  invoker.intValue__I = function(target) {
    return target['intValue__I']();
  };
  invoker.getRequest__Lio_cloudoffice_platform_cockpit_api_AsyncRequest_2 = function(target) {
    return target['getRequest__Lio_cloudoffice_platform_cockpit_api_AsyncRequest_2']();
  };
  invoker.getView__Ljava_lang_Object_2 = function(target) {
    return target['getView__Ljava_lang_Object_2']();
  };
  invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2 = function(target, p1, p2) {
    return target['put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2'](p1,p2);
  };
  invoker.getEndpoint__Ljava_lang_String_2 = function(target) {
    return target['getEndpoint__Ljava_lang_String_2']();
  };
  invoker.put__VLjava_lang_String_2Ljava_lang_Object_2 = function(target, p1, p2) {
    return target['put__VLjava_lang_String_2Ljava_lang_Object_2'](p1,p2);
  };
  invoker.accessProperty__VLjava_lang_String_2 = function(target, p1) {
    return target['accessProperty__VLjava_lang_String_2'](p1);
  };
  invoker.verifyUnlocked__V = function(target) {
    return target['verifyUnlocked__V']();
  };
  invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2 = function(target, p1, p2) {
    return target['isSame__ZLjava_lang_Object_2Ljava_lang_Object_2'](p1,p2);
  };
  invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2 = function(target, p1, p2, p3) {
    return target['valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2'](p1,p2,p3);
  };
  invoker.createProto__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2 = function(target, p1, p2) {
    return target['createProto__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](p1,p2);
  };
  invoker.extract__VLjava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Object_2 = function(target, p1, p2, p3) {
    return target['extract__VLjava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Object_2'](p1,p2,p3);
  };
  invoker.append__Ljava_lang_StringBuilder_2C = function(target, p1) {
    return target['append__Ljava_lang_StringBuilder_2C'](p1);
  };
  invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2 = function(target, p1) {
    return target['toJSON__Ljava_lang_String_2Ljava_lang_Object_2'](p1);
  };
  invoker.getContext__Lnet_java_html_BrwsrCtx_2 = function(target) {
    return target['getContext__Lnet_java_html_BrwsrCtx_2']();
  };
  invoker.applyBindings__V = function(target) {
    return target['applyBindings__V']();
  };
  invoker.hashCode__I = function(target) {
    return target['hashCode__I']();
  };
  invoker.hashPlus__ILjava_lang_Object_2I = function(target, p1, p2) {
    return target['hashPlus__ILjava_lang_Object_2I'](p1,p2);
  };
  invoker.registerProperty__VLjava_lang_String_2IZZ = function(target, p1, p2, p3, p4) {
    return target['registerProperty__VLjava_lang_String_2IZZ'](p1,p2,p3,p4);
  };
  invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2 = function(target, p1, p2) {
    return target['extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2'](p1,p2);
  };
  invoker.append__Ljava_lang_StringBuilder_2I = function(target, p1) {
    return target['append__Ljava_lang_StringBuilder_2I'](p1);
  };
  invoker.get__Ljava_lang_Object_2I = function(target, p1) {
    return target['get__Ljava_lang_Object_2I'](p1);
  };
  invoker.getInt__ILjava_lang_String_2 = function(target, p1) {
    return target['getInt__ILjava_lang_String_2'](p1);
  };
  invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2 = function(target, p1, p2) {
    return target['read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2'](p1,p2);
  };
  invoker.acquireLock__V = function(target) {
    return target['acquireLock__V']();
  };
  invoker.releaseLock__V = function(target) {
    return target['releaseLock__V']();
  };
  invoker.createList__Ljava_util_List_2Ljava_lang_String_2I_3Ljava_lang_String_2 = function(target, p1, p2, p3) {
    return target['createList__Ljava_util_List_2Ljava_lang_String_2I_3Ljava_lang_String_2'](p1,p2,p3);
  };
  invoker.initTo__VLjava_util_Collection_2Ljava_lang_Object_2 = function(target, p1, p2) {
    return target['initTo__VLjava_util_Collection_2Ljava_lang_Object_2'](p1,p2);
  };
  invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2 = function(target, p1) {
    return target['boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2'](p1);
  };
  invoker.booleanValue__Z = function(target) {
    return target['booleanValue__Z']();
  };
  invoker.cloneList__VLjava_util_Collection_2Lnet_java_html_BrwsrCtx_2Ljava_util_Collection_2 = function(target, p1, p2, p3) {
    return target['cloneList__VLjava_util_Collection_2Lnet_java_html_BrwsrCtx_2Ljava_util_Collection_2'](p1,p2,p3);
  };
  invoker.registerFunction__VLjava_lang_String_2I = function(target, p1, p2) {
    return target['registerFunction__VLjava_lang_String_2I'](p1,p2);
  };
  invoker.replaceValue__VLjava_util_Collection_2Ljava_lang_Class_2Ljava_lang_Object_2 = function(target, p1, p2, p3) {
    return target['replaceValue__VLjava_util_Collection_2Ljava_lang_Class_2Ljava_lang_Object_2'](p1,p2,p3);
  };
  invoker.toString__Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_String_2 = function(target, p1, p2) {
    return target['toString__Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_String_2'](p1,p2);
  };
  invoker.toModel__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2 = function(target, p1, p2) {
    return target['toModel__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2'](p1,p2);
  };
  invoker.contains__ZLjava_lang_Object_2 = function(target, p1) {
    return target['contains__ZLjava_lang_Object_2'](p1);
  };
  invoker.remove__ZLjava_lang_Object_2 = function(target, p1) {
    return target['remove__ZLjava_lang_Object_2'](p1);
  };
  invoker.isEmpty__Z = function(target) {
    return target['isEmpty__Z']();
  };
  invoker.setView__VLjava_lang_Object_2 = function(target, p1) {
    return target['setView__VLjava_lang_Object_2'](p1);
  };
  invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2 = function(target, p1) {
    return target['append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2'](p1);
  };
  invoker.getViewName__Ljava_lang_String_2Ljava_lang_String_2 = function(target, p1) {
    return target['getViewName__Ljava_lang_String_2Ljava_lang_String_2'](p1);
  };
  invoker.getPackets__Ljava_util_List_2 = function(target) {
    return target['getPackets__Ljava_util_List_2']();
  };
  invoker.invoke__VLjava_lang_String_2 = function(target, p1) {
    return target['invoke__VLjava_lang_String_2'](p1);
  };
  invoker.invoke__VLjava_lang_String_2Ljava_lang_String_2 = function(target, p1, p2) {
    return target['invoke__VLjava_lang_String_2Ljava_lang_String_2'](p1,p2);
  };
  invoker.getDefaultViewName__Ljava_lang_String_2 = function(target) {
    return target['getDefaultViewName__Ljava_lang_String_2']();
  };
  exports['registerResource']('META-INF/MANIFEST.MF', 'TWFuaWZlc3QtVmVyc2lvbjogMS4wDQpCbmQtTGFzdE1vZGlmaWVkOiAxNTk3NzY0MDc1MjEzDQpCdWlsZC1KZGs6IDEuOC4wXzEzMQ0KQnVpbHQtQnk6IGV1c2lhDQpCdW5kbGUtTWFuaWZlc3RWZXJzaW9uOiAyDQpCdW5kbGUtTmFtZTogR2FkZ2V0IERvY3VtZW50DQpCdW5kbGUtU3ltYm9saWNOYW1lOiBpby5jbG91ZG9mZmljZS5wbGF0Zm9ybS5jb2NrcGl0LmRvY3VtZW50DQpCdW5kbGUtVmVyc2lvbjogMS4xLjANCkNyZWF0ZWQtQnk6IEFwYWNoZSBNYXZlbiBCdW5kbGUgUGx1Z2luDQpFeHBvcnQtUGFja2FnZTogaW8uY2xvdWRvZmZpY2UucGxhdGZvcm0uY29ja3BpdC5kb2N1bWVudDt1c2VzOj0iaW8uY2xvdWQNCiBvZmZpY2UucGxhdGZvcm0uY29ja3BpdC5hcGkiO3ZlcnNpb249IjEuMS4wIg0KSW1wb3J0LVBhY2thZ2U6IGlvLmNsb3Vkb2ZmaWNlLnBsYXRmb3JtLmNvY2twaXQuYXBpO3ZlcnNpb249IlsxLjEsMikiLGlvDQogLmNsb3Vkb2ZmaWNlLnBsYXRmb3JtLmNvY2twaXQuanM7dmVyc2lvbj0iWzEuMSwyKSIsbmV0LmphdmEuaHRtbDt2ZXJzaW8NCiBuPSJbMS42LDIpIixuZXQuamF2YS5odG1sLmpzb247dmVyc2lvbj0iWzEuNiwyKSIsb3JnLmpzb247dmVyc2lvbj0iWzIwMQ0KIDgwODEzLjAsMjAxODA4MTQpIixvcmcubmV0YmVhbnMuaHRtbC5qc29uLnNwaTt2ZXJzaW9uPSJbMS42LDIpIg0KVG9vbDogQm5kLTIuMS4wLjIwMTMwNDI2LTEyMjIxMw0K');
});