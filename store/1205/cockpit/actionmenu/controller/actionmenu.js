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

function io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$1() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$view = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$1_val$view'] = v; return this['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$1_val$view']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$1_val$view'] = lcA1;
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.handle__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;
(refs_io_cloudoffice_platform_cockpit_api_Logger || (refs_io_cloudoffice_platform_cockpit_api_Logger = vm.io_cloudoffice_platform_cockpit_api_Logger(false)))['log__VLjava_lang_String_2']("Save Callback");
(refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent || (refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent = io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent(false))).resetConfiguration__VLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_2(lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$1_val$view']);
(refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent || (refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent = io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent(false))).closeConfigurationPanel__VLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_2(lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$1_val$view']);
return;

};
c['handle__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$1', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_CallBack(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$1fillInstOf });
    io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/actionmenu/ActionMenuComponent$1';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_CallBack(false).constructor.$class
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_Logger;
    var refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$1_val$view'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$1 = io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$1;

vm.io_cloudoffice_platform_cockpit_api_CallBack = link('io/cloudoffice/platform/cockpit/api/CallBack', function(f) { vm.io_cloudoffice_platform_cockpit_api_CallBack =  f; });

function io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent;
  if (!CLS.$class) {
    var pp = vm.io_cloudoffice_platform_cockpit_api_AbstractComponent(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = c.getInstance__Lio_cloudoffice_platform_cockpit_api_Component_2Ljava_lang_String_2 = function(lcA0) {
var stA0 = new io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent;
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
    m = c.setComponentName__V = function() {
  var  lcA0 = this;
c['_componentName'].call(lcA0, "actionmenu-component");
return;

};
c['setComponentName__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.bindViewNames__V = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.getName__Ljava_lang_String_2((refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView || (refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView = io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView(false))).constructor.$class);
invoker.setDefaultViewName__VLjava_lang_String_2(stA0,stA1);
var stA0 = lcA0;var stA1 = invoker.getName__Ljava_lang_String_2((refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration || (refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration = io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration(false))).constructor.$class);
invoker.setDefaultConfigViewName__VLjava_lang_String_2(stA0,stA1);
return;

};
c['bindViewNames__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.bindEventListeners__V = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = "loginsuccess";var stA2 = new io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$LoginEventListener;
(refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$LoginEventListener || (refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$LoginEventListener = io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$LoginEventListener(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent_2.call(stA2, lcA0);
invoker.attachListener__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_EventListener_2(stA0,stA1, stA2);
var stA0 = lcA0;var stA1 = "designermode";var stA2 = new io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$DesignModeListener;
(refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$DesignModeListener || (refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$DesignModeListener = io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$DesignModeListener(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent_2Lio_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$1_2.call(stA2, lcA0, null);
invoker.attachListener__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_EventListener_2(stA0,stA1, stA2);
var stA0 = lcA0;var stA1 = "toogleactionmenu";var stA2 = new io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$ToogleActionMenuListener;
(refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$ToogleActionMenuListener || (refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$ToogleActionMenuListener = io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$ToogleActionMenuListener(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent_2.call(stA2, lcA0);
invoker.attachListener__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_EventListener_2(stA0,stA1, stA2);
var stA0 = lcA0;var stA1 = "invokefunction";var stA2 = new io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$FunctionInvokeListener;
(refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$FunctionInvokeListener || (refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$FunctionInvokeListener = io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$FunctionInvokeListener(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent_2Lio_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$1_2.call(stA2, lcA0, null);
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
    m = c.openConfig__VLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_2 = function(lcA0) {
lcA0.setDesignerMode__VZ(1);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.closeConfigurationPanel__VLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_2 = function(lcA0) {
lcA0.setDesignerMode__VZ(0);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.save__VLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_2 = function(lcA0) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['_CONFIG']();var stA1 = "actionmenu";var stA2 = lcA0.getInstance__Ljava_lang_String_2();
var stA1 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['configPostEndpoint__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2'](stA1, stA2, "");
var stA2 = lcA0.toString__Ljava_lang_String_2();
var stA3 = new io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$1;
(refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$1 || (refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$1 = io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$1(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_2.call(stA3, lcA0);
invoker.post__VLjava_lang_String_2Ljava_lang_String_2Lio_cloudoffice_platform_cockpit_api_CallBack_2(stA0,stA1, stA2, stA3);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.resetConfiguration__VLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_2 = function(lcA0) {
c.resetConfigurationModelFromJSON__VLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_2(lcA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.resetConfigurationModelFromJSON__VLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_2 = function(lcA0) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['_CONFIG']();var stA1 = "actionmenu";var stA2 = lcA0.getInstance__Ljava_lang_String_2();
var stA1 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['configFetchEndpoint__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2'](stA1, stA2);
var stA2 = null;var stA3 = new io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$2;
(refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$2 || (refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$2 = io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$2(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_2.call(stA3, lcA0);
invoker.fetch__VLjava_lang_String_2Ljava_util_Map_2Lio_cloudoffice_platform_cockpit_api_CallBack_2(stA0,stA1, stA2, stA3);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.prepareConfigurationModelFromJSON__VLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_2Lio_cloudoffice_platform_cockpit_api_MapBuilder_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = lcA1.getConfiguration__Lio_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_2();
var lcA3 = stA0;
var stA0 = invoker.getJsonObject__Lorg_json_JSONObject_2Ljava_lang_String_2(lcA2,"configuration");
var lcA4 = stA0;
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_Object_2'](lcA4);
if ((stI0) == 0) { gt = 48; break IF; }
var stA0 = lcA1;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA4,"viewType");
stA0.setViewType__VLjava_lang_String_2(stA1);
var stA0 = lcA3;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA4,"viewType");
stA0.setViewType__VLjava_lang_String_2(stA1);
c.setComponentDefinition__VLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_2Lio_cloudoffice_platform_cockpit_api_MapBuilder_2(lcA1, lcA2);
    }
    X_48: for (;;) { IF: if (gt <= 48) {
return;

    }
}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.setComponentDefinition__VLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_2Lio_cloudoffice_platform_cockpit_api_MapBuilder_2 = function(lcA0, lcA1) {
var stA0 = lcA0.getConfiguration__Lio_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_2();
var lcA2 = stA0;
var stA0 = invoker.getJsonObject__Lorg_json_JSONObject_2Ljava_lang_String_2(lcA1,"configuration");
var lcA3 = stA0;
var stA0 = invoker.getJSONObject__Lorg_json_JSONObject_2Ljava_lang_String_2(lcA3,"tagItemComponentDefinition");
var lcA4 = stA0;
var stA0 = lcA2.getTagItemComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA4,"component");
invoker.setComponent__VLjava_lang_String_2(stA0,stA1);
var stA0 = lcA2.getTagItemComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA4,"instanceId");
invoker.setInstanceId__VLjava_lang_String_2(stA0,stA1);
var stA0 = lcA0.getTagItemComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA4,"component");
invoker.setComponent__VLjava_lang_String_2(stA0,stA1);
var stA0 = lcA0.getTagItemComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA4,"instanceId");
invoker.setInstanceId__VLjava_lang_String_2(stA0,stA1);
var stA0 = invoker.getJSONObject__Lorg_json_JSONObject_2Ljava_lang_String_2(lcA3,"shareItemComponentDefinition");
var lcA5 = stA0;
var stA0 = lcA2.getShareItemComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA5,"component");
invoker.setComponent__VLjava_lang_String_2(stA0,stA1);
var stA0 = lcA2.getShareItemComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA5,"instanceId");
invoker.setInstanceId__VLjava_lang_String_2(stA0,stA1);
var stA0 = lcA0.getShareItemComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA5,"component");
invoker.setComponent__VLjava_lang_String_2(stA0,stA1);
var stA0 = lcA0.getShareItemComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA5,"instanceId");
invoker.setInstanceId__VLjava_lang_String_2(stA0,stA1);
var stA0 = invoker.getJSONObject__Lorg_json_JSONObject_2Ljava_lang_String_2(lcA3,"relatedItemComponentDefinition");
var lcA6 = stA0;
var stA0 = lcA2.getRelatedItemComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA6,"component");
invoker.setComponent__VLjava_lang_String_2(stA0,stA1);
var stA0 = lcA2.getRelatedItemComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA6,"instanceId");
invoker.setInstanceId__VLjava_lang_String_2(stA0,stA1);
var stA0 = lcA0.getRelatedItemComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA6,"component");
invoker.setComponent__VLjava_lang_String_2(stA0,stA1);
var stA0 = lcA0.getRelatedItemComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA6,"instanceId");
invoker.setInstanceId__VLjava_lang_String_2(stA0,stA1);
var stA0 = invoker.getJSONObject__Lorg_json_JSONObject_2Ljava_lang_String_2(lcA3,"searchBoxComponentDefinition");
var lcA7 = stA0;
var stA0 = lcA2.getSearchBoxComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA7,"component");
invoker.setComponent__VLjava_lang_String_2(stA0,stA1);
var stA0 = lcA2.getSearchBoxComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA7,"instanceId");
invoker.setInstanceId__VLjava_lang_String_2(stA0,stA1);
var stA0 = lcA0.getSearchBoxComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA7,"component");
invoker.setComponent__VLjava_lang_String_2(stA0,stA1);
var stA0 = lcA0.getSearchBoxComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA7,"instanceId");
invoker.setInstanceId__VLjava_lang_String_2(stA0,stA1);
return;

};
    m.access = 10;
    m.cls = CLS;
    m = c.showTagItem__VLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

c.addFilter__VLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_2(lcA0);
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['builder__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2']();
var stA1 = "itemId";var stA2 = lcA0.getSelectedItemId__Ljava_lang_String_2();
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2(stA0,stA1, stA2);
var stA1 = "itemName";var stA2 = lcA0.getSelectedItemName__Ljava_lang_String_2();
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2(stA0,stA1, stA2);
var stA1 = "itemType";var stA2 = lcA0.getSelectedItemType__Ljava_lang_String_2();
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2(stA0,stA1, stA2);
var lcA1 = stA0;
var stA0 = lcA0.getTagItemComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA0 = invoker.getComponent__Ljava_lang_String_2(stA0);
var lcA2 = stA0;
var stA0 = lcA0.getTagItemComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA0 = invoker.getInstanceId__Ljava_lang_String_2(stA0);
var lcA3 = stA0;
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_Event;
(refs_io_cloudoffice_platform_cockpit_api_Event || (refs_io_cloudoffice_platform_cockpit_api_Event = vm.io_cloudoffice_platform_cockpit_api_Event(false))).constructor['cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2'].call(stA0, "toogleitemaction", "toogleitemaction", lcA1);
var lcA4 = stA0;
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_Components || (refs_io_cloudoffice_platform_cockpit_api_Components = vm.io_cloudoffice_platform_cockpit_api_Components(false)))['get__Lio_cloudoffice_platform_cockpit_api_Component_2Ljava_lang_String_2Ljava_lang_String_2'](lcA2, lcA3);
invoker.listen__VLio_cloudoffice_platform_cockpit_api_Signal_2(stA0,lcA4);
var stA0 = lcA0.getViewType__Ljava_lang_String_2();
var stI0 = invoker.equalsIgnoreCase__ZLjava_lang_String_2(stA0,"dropdown");
if ((stI0) == 0) { gt = 96; break IF; }
c.closeActionMenu__VLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_2(lcA0);
    }
    X_96: for (;;) { IF: if (gt <= 96) {
return;

    }
}}
};
c['showTagItem__VLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.showShareItem__VLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

c.addFilter__VLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_2(lcA0);
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['builder__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2']();
var stA1 = "itemId";var stA2 = lcA0.getSelectedItemId__Ljava_lang_String_2();
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2(stA0,stA1, stA2);
var stA1 = "itemName";var stA2 = lcA0.getSelectedItemName__Ljava_lang_String_2();
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2(stA0,stA1, stA2);
var stA1 = "itemType";var stA2 = lcA0.getSelectedItemType__Ljava_lang_String_2();
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2(stA0,stA1, stA2);
var stA1 = "maximumPermission";var stA2 = lcA0.getMaximumPermission__Ljava_lang_String_2();
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2(stA0,stA1, stA2);
var lcA1 = stA0;
var stA0 = lcA0.getShareItemComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA0 = invoker.getComponent__Ljava_lang_String_2(stA0);
var lcA2 = stA0;
var stA0 = lcA0.getShareItemComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA0 = invoker.getInstanceId__Ljava_lang_String_2(stA0);
var lcA3 = stA0;
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_Event;
(refs_io_cloudoffice_platform_cockpit_api_Event || (refs_io_cloudoffice_platform_cockpit_api_Event = vm.io_cloudoffice_platform_cockpit_api_Event(false))).constructor['cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2'].call(stA0, "toogleitemaction", "toogleitemaction", lcA1);
var lcA4 = stA0;
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_Components || (refs_io_cloudoffice_platform_cockpit_api_Components = vm.io_cloudoffice_platform_cockpit_api_Components(false)))['get__Lio_cloudoffice_platform_cockpit_api_Component_2Ljava_lang_String_2Ljava_lang_String_2'](lcA2, lcA3);
invoker.listen__VLio_cloudoffice_platform_cockpit_api_Signal_2(stA0,lcA4);
var stA0 = lcA0.getViewType__Ljava_lang_String_2();
var stI0 = invoker.equalsIgnoreCase__ZLjava_lang_String_2(stA0,"dropdown");
if ((stI0) == 0) { gt = 106; break IF; }
c.closeActionMenu__VLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_2(lcA0);
    }
    X_106: for (;;) { IF: if (gt <= 106) {
return;

    }
}}
};
c['showShareItem__VLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.showRelatedItem__VLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

c.addFilter__VLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_2(lcA0);
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['builder__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2']();
var stA1 = "itemId";var stA2 = lcA0.getSelectedItemId__Ljava_lang_String_2();
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2(stA0,stA1, stA2);
var stA1 = "itemName";var stA2 = lcA0.getSelectedItemName__Ljava_lang_String_2();
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2(stA0,stA1, stA2);
var stA1 = "itemType";var stA2 = lcA0.getSelectedItemType__Ljava_lang_String_2();
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2(stA0,stA1, stA2);
var stA1 = "businessModelName";var stA2 = lcA0.getBusinessModelName__Ljava_lang_String_2();
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2(stA0,stA1, stA2);
var lcA1 = stA0;
var stA0 = lcA0.getRelatedItemComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA0 = invoker.getComponent__Ljava_lang_String_2(stA0);
var lcA2 = stA0;
var stA0 = lcA0.getRelatedItemComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA0 = invoker.getInstanceId__Ljava_lang_String_2(stA0);
var lcA3 = stA0;
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_Event;
(refs_io_cloudoffice_platform_cockpit_api_Event || (refs_io_cloudoffice_platform_cockpit_api_Event = vm.io_cloudoffice_platform_cockpit_api_Event(false))).constructor['cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2'].call(stA0, "toogleitemaction", "toogleitemaction", lcA1);
var lcA4 = stA0;
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_Components || (refs_io_cloudoffice_platform_cockpit_api_Components = vm.io_cloudoffice_platform_cockpit_api_Components(false)))['get__Lio_cloudoffice_platform_cockpit_api_Component_2Ljava_lang_String_2Ljava_lang_String_2'](lcA2, lcA3);
invoker.listen__VLio_cloudoffice_platform_cockpit_api_Signal_2(stA0,lcA4);
var stA0 = lcA0.getViewType__Ljava_lang_String_2();
var stI0 = invoker.equalsIgnoreCase__ZLjava_lang_String_2(stA0,"dropdown");
if ((stI0) == 0) { gt = 106; break IF; }
c.closeActionMenu__VLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_2(lcA0);
    }
    X_106: for (;;) { IF: if (gt <= 106) {
return;

    }
}}
};
c['showRelatedItem__VLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.showItemDetailView__VLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_2 = function(lcA0) {
c.closeActionMenu__VLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_2(lcA0);
c.addFilter__VLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_2(lcA0);
c.loadDetail__VLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_2(lcA0);
return;

};
c['showItemDetailView__VLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.loadDetail__VLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_2 = function(lcA0) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['builder__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2']();
var stA1 = "itemId";var stA2 = lcA0.getSelectedItemId__Ljava_lang_String_2();
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2(stA0,stA1, stA2);
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Z(stA0,"isSplitView", 0);
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2(stA0,"viewType", "editMode");
var lcA1 = stA0;
var stA0 = lcA0.getDetailComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA0 = invoker.getComponent__Ljava_lang_String_2(stA0);
var lcA2 = stA0;
var stA0 = lcA0.getDetailComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA0 = invoker.getInstanceId__Ljava_lang_String_2(stA0);
var lcA3 = stA0;
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_Event;
(refs_io_cloudoffice_platform_cockpit_api_Event || (refs_io_cloudoffice_platform_cockpit_api_Event = vm.io_cloudoffice_platform_cockpit_api_Event(false))).constructor['cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2'].call(stA0, "loaditemdetail", "loaditemdetail", lcA1);
var lcA4 = stA0;
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_Components || (refs_io_cloudoffice_platform_cockpit_api_Components = vm.io_cloudoffice_platform_cockpit_api_Components(false)))['get__Lio_cloudoffice_platform_cockpit_api_Component_2Ljava_lang_String_2Ljava_lang_String_2'](lcA2, lcA3);
invoker.listen__VLio_cloudoffice_platform_cockpit_api_Signal_2(stA0,lcA4);
return;

};
c['loadDetail__VLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.addFilter__VLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_2 = function(lcA0) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['builder__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2']();
var stA1 = "itemId";var stA2 = lcA0.getSelectedItemId__Ljava_lang_String_2();
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2(stA0,stA1, stA2);
var stA1 = "itemName";var stA2 = lcA0.getSelectedItemName__Ljava_lang_String_2();
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2(stA0,stA1, stA2);
var stA1 = "itemType";var stA2 = lcA0.getSelectedItemType__Ljava_lang_String_2();
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2(stA0,stA1, stA2);
var lcA1 = stA0;
var stA0 = lcA0.getSearchBoxComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA0 = invoker.getComponent__Ljava_lang_String_2(stA0);
var lcA2 = stA0;
var stA0 = lcA0.getSearchBoxComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
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
    m = c.showActionMenu__VLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = lcA0;var stI1 = lcA0.isVisible__Z();
if ((stI1) != 0) { gt = 12; break IF; }
var stI1 = 1;{ gt = 13; break IF; }
    }
    X_12: for (;;) { IF: if (gt <= 12) {

var stI1 = 0;    }
    X_13: for (;;) { IF: if (gt <= 13) {
stA0.setVisible__VZ(stI1);
return;

    }
}}}
};
c['showActionMenu__VLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.closeActionMenu__VLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_2 = function(lcA0) {
lcA0.setVisible__VZ(0);
return;

};
c['closeActionMenu__VLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.closeAllActionMenu__VLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_2 = function(lcA0) {
c.closeActionMenu__VLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_2(lcA0);
c.closeTagItem__VLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_2(lcA0);
c.closeShareItem__VLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_2(lcA0);
c.closeRelatedItem__VLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_2(lcA0);
return;

};
c['closeAllActionMenu__VLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.closeTagItem__VLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_2 = function(lcA0) {
var stA0 = lcA0.getTagItemComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA0 = invoker.getComponent__Ljava_lang_String_2(stA0);
var lcA1 = stA0;
var stA0 = lcA0.getTagItemComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA0 = invoker.getInstanceId__Ljava_lang_String_2(stA0);
var lcA2 = stA0;
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_Event;
(refs_io_cloudoffice_platform_cockpit_api_Event || (refs_io_cloudoffice_platform_cockpit_api_Event = vm.io_cloudoffice_platform_cockpit_api_Event(false))).constructor['cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2'].call(stA0, "invokefunction", "invokefunction", "closeTagItem");
var lcA3 = stA0;
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_Components || (refs_io_cloudoffice_platform_cockpit_api_Components = vm.io_cloudoffice_platform_cockpit_api_Components(false)))['get__Lio_cloudoffice_platform_cockpit_api_Component_2Ljava_lang_String_2Ljava_lang_String_2'](lcA1, lcA2);
invoker.listen__VLio_cloudoffice_platform_cockpit_api_Signal_2(stA0,lcA3);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.closeShareItem__VLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_2 = function(lcA0) {
var stA0 = lcA0.getShareItemComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA0 = invoker.getComponent__Ljava_lang_String_2(stA0);
var lcA1 = stA0;
var stA0 = lcA0.getShareItemComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA0 = invoker.getInstanceId__Ljava_lang_String_2(stA0);
var lcA2 = stA0;
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_Event;
(refs_io_cloudoffice_platform_cockpit_api_Event || (refs_io_cloudoffice_platform_cockpit_api_Event = vm.io_cloudoffice_platform_cockpit_api_Event(false))).constructor['cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2'].call(stA0, "invokefunction", "invokefunction", "closeShareItem");
var lcA3 = stA0;
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_Components || (refs_io_cloudoffice_platform_cockpit_api_Components = vm.io_cloudoffice_platform_cockpit_api_Components(false)))['get__Lio_cloudoffice_platform_cockpit_api_Component_2Ljava_lang_String_2Ljava_lang_String_2'](lcA1, lcA2);
invoker.listen__VLio_cloudoffice_platform_cockpit_api_Signal_2(stA0,lcA3);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.closeRelatedItem__VLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_2 = function(lcA0) {
var stA0 = lcA0.getRelatedItemComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA0 = invoker.getComponent__Ljava_lang_String_2(stA0);
var lcA1 = stA0;
var stA0 = lcA0.getRelatedItemComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA0 = invoker.getInstanceId__Ljava_lang_String_2(stA0);
var lcA2 = stA0;
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_Event;
(refs_io_cloudoffice_platform_cockpit_api_Event || (refs_io_cloudoffice_platform_cockpit_api_Event = vm.io_cloudoffice_platform_cockpit_api_Event(false))).constructor['cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2'].call(stA0, "invokefunction", "invokefunction", "closeRelatedItem");
var lcA3 = stA0;
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_Components || (refs_io_cloudoffice_platform_cockpit_api_Components = vm.io_cloudoffice_platform_cockpit_api_Components(false)))['get__Lio_cloudoffice_platform_cockpit_api_Component_2Ljava_lang_String_2Ljava_lang_String_2'](lcA1, lcA2);
invoker.listen__VLio_cloudoffice_platform_cockpit_api_Signal_2(stA0,lcA3);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.processActionMenu__VLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_2Ljava_lang_String_2 = function(lcA0, lcA1) {
c.showActionMenu__VLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_2(lcA0);
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['query__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2'](lcA1);
var lcA2 = stA0;
var stA0 = lcA0;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA2,"itemId");
stA0.setSelectedItemId__VLjava_lang_String_2(stA1);
var stA0 = lcA0;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA2,"itemName");
stA0.setSelectedItemName__VLjava_lang_String_2(stA1);
var stA0 = lcA0;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA2,"itemType");
stA0.setSelectedItemType__VLjava_lang_String_2(stA1);
var stA0 = lcA0;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA2,"maximumPermission");
stA0.setMaximumPermission__VLjava_lang_String_2(stA1);
var stA0 = lcA0;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA2,"businessModelName");
stA0.setBusinessModelName__VLjava_lang_String_2(stA1);
var stA0 = lcA0.getDetailComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA2,"component");
invoker.setComponent__VLjava_lang_String_2(stA0,stA1);
var stA0 = lcA0.getDetailComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA2,"instanceId");
invoker.setInstanceId__VLjava_lang_String_2(stA0,stA1);
var stA0 = lcA0;var stI1 = invoker.getBoolean__ZLjava_lang_String_2(lcA2,"isFromList");
stA0.setIsFromList__VZ(stI1);
return;

};
c['processActionMenu__VLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_2Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.access$200__VLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_2Lio_cloudoffice_platform_cockpit_api_MapBuilder_2 = function(lcA0, lcA1) {
c.setComponentDefinition__VLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_2Lio_cloudoffice_platform_cockpit_api_MapBuilder_2(lcA0, lcA1);
return;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$300__VLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent_2Lio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_2Lio_cloudoffice_platform_cockpit_api_MapBuilder_2 = function(lcA0, lcA1, lcA2) {
c.prepareConfigurationModelFromJSON__VLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_2Lio_cloudoffice_platform_cockpit_api_MapBuilder_2.call(lcA0, lcA1, lcA2);
return;

};
    m.access = 4104;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponentfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponentfillInstOf });
    io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponentfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/actionmenu/ActionMenuComponent';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 33;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_AbstractComponent;
    var refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView;
    var refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration;
    var refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$LoginEventListener;
    var refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$DesignModeListener;
    var refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$ToogleActionMenuListener;
    var refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$FunctionInvokeListener;
    var refs_java_lang_UnsupportedOperationException;
    var refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration;
    var refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$1;
    var refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$2;
    var refs_io_cloudoffice_platform_cockpit_api_UtilValidate;
    var refs_io_cloudoffice_platform_cockpit_api_MapBuilder;
    var refs_io_cloudoffice_platform_cockpit_api_Event;
    var refs_io_cloudoffice_platform_cockpit_api_Components;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent = registerClass(exports,'io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent',io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent);

vm.io_cloudoffice_platform_cockpit_api_Components = link('io/cloudoffice/platform/cockpit/api/Components', function(f) { vm.io_cloudoffice_platform_cockpit_api_Components =  f; });
vm.io_cloudoffice_platform_cockpit_api_Event = link('io/cloudoffice/platform/cockpit/api/Event', function(f) { vm.io_cloudoffice_platform_cockpit_api_Event =  f; });
vm.io_cloudoffice_platform_cockpit_api_MapBuilder = link('io/cloudoffice/platform/cockpit/api/MapBuilder', function(f) { vm.io_cloudoffice_platform_cockpit_api_MapBuilder =  f; });
vm.io_cloudoffice_platform_cockpit_api_UtilValidate = link('io/cloudoffice/platform/cockpit/api/UtilValidate', function(f) { vm.io_cloudoffice_platform_cockpit_api_UtilValidate =  f; });

function io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$2() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$2;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$view = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$2_val$view'] = v; return this['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$2_val$view']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$2_val$view'] = lcA1;
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
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$2_val$view'].getConfiguration__Lio_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_2();
var lcA3 = stA0;
var stA0 = invoker.getJsonObject__Lorg_json_JSONObject_2Ljava_lang_String_2(lcA2,"configuration");
var lcA4 = stA0;
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_Object_2'](lcA4);
if ((stI0) == 0) { gt = 62; break IF; }
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$2_val$view'];var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA4,"viewType");
stA0.setViewType__VLjava_lang_String_2(stA1);
var stA0 = lcA3;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA4,"viewType");
stA0.setViewType__VLjava_lang_String_2(stA1);
(refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent || (refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent = io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent(false))).access$200__VLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_2Lio_cloudoffice_platform_cockpit_api_MapBuilder_2(lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$2_val$view'], lcA2);
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
    function io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$2fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$2', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_CallBack(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$2fillInstOf });
    io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$2fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/actionmenu/ActionMenuComponent$2';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_CallBack(false).constructor.$class
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_MapBuilder;
    var refs_io_cloudoffice_platform_cockpit_api_UtilValidate;
    var refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$2_val$view'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$2 = io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$2;

vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration = link('io/cloudoffice/platform/cockpit/api/ComponentConfiguration', function(f) { vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration =  f; });
vm.java_lang_UnsupportedOperationException = link('java/lang/UnsupportedOperationException', function(f) { vm.java_lang_UnsupportedOperationException =  f; });

function io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$FunctionInvokeListener() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$FunctionInvokeListener;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._this$0 = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$FunctionInvokeListener_this$0'] = v; return this['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$FunctionInvokeListener_this$0']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$FunctionInvokeListener_this$0'] = lcA1;
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
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$FunctionInvokeListener_this$0'];var stA1 = (refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false)))['valueOf__Ljava_lang_String_2Ljava_lang_Object_2'](lcA2);
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
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent_2Lio_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$1_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
c.constructor.cons__VLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent_2.call(lcA0, lcA1);
return;

};
    m.access = 4096;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$FunctionInvokeListenerfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$FunctionInvokeListener', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_EventListener(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$FunctionInvokeListenerfillInstOf });
    io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$FunctionInvokeListenerfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/actionmenu/ActionMenuComponent$FunctionInvokeListener';
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
    this['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$FunctionInvokeListener_this$0'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$FunctionInvokeListener = io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$FunctionInvokeListener;

vm.io_cloudoffice_platform_cockpit_api_EventListener = link('io/cloudoffice/platform/cockpit/api/EventListener', function(f) { vm.io_cloudoffice_platform_cockpit_api_EventListener =  f; });
vm.java_lang_String = link('java/lang/String', function(f) { vm.java_lang_String =  f; });

function io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$ToogleActionMenuListener() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$ToogleActionMenuListener;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._this$0 = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$ToogleActionMenuListener_this$0'] = v; return this['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$ToogleActionMenuListener_this$0']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$ToogleActionMenuListener_this$0'] = lcA1;
return;

};
CLS['cons__VLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.onReceive__VLio_cloudoffice_platform_cockpit_api_Signal_2 = function(lcA1) {
  var  lcA0 = this;
lcA0.toogleActionMenu__VLio_cloudoffice_platform_cockpit_api_Signal_2(lcA1);
return;

};
c['onReceive__VLio_cloudoffice_platform_cockpit_api_Signal_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.toogleActionMenu__VLio_cloudoffice_platform_cockpit_api_Signal_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var lcA2 = null;
var stA0 = invoker.getPackets__Ljava_util_List_2(lcA1);
var stI0 = invoker.isEmpty__Z(stA0);
if ((stI0) != 0) { gt = 42; break IF; }
var stA0 = invoker.getPackets__Ljava_util_List_2(lcA1);
var stA0 = invoker.get__Ljava_lang_Object_2I(stA0,0);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_api_MapBuilder']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.api.MapBuilder');
var lcA2 = stA0;
invoker.invoke__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_MapBuilder_2(lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$ToogleActionMenuListener_this$0'],"processActionMenu", lcA2);
    }
    X_42: for (;;) { IF: if (gt <= 42) {
return;

    }
}}
};
    m.access = 0;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$ToogleActionMenuListenerfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$ToogleActionMenuListener', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_EventListener(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$ToogleActionMenuListenerfillInstOf });
    io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$ToogleActionMenuListenerfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/actionmenu/ActionMenuComponent$ToogleActionMenuListener';
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
    this['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$ToogleActionMenuListener_this$0'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$ToogleActionMenuListener = registerClass(exports,'io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$ToogleActionMenuListener',io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$ToogleActionMenuListener);


function io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$DesignModeListener() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$DesignModeListener;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._this$0 = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$DesignModeListener_this$0'] = v; return this['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$DesignModeListener_this$0']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$DesignModeListener_this$0'] = lcA1;
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
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$DesignModeListener_this$0'];var stA1 = (refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false)))['valueOf__Ljava_lang_String_2Ljava_lang_Object_2'](lcA2);
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
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent_2Lio_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$1_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
c.constructor.cons__VLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent_2.call(lcA0, lcA1);
return;

};
    m.access = 4096;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$DesignModeListenerfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$DesignModeListener', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_EventListener(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$DesignModeListenerfillInstOf });
    io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$DesignModeListenerfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/actionmenu/ActionMenuComponent$DesignModeListener';
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
    this['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$DesignModeListener_this$0'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$DesignModeListener = io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$DesignModeListener;


function io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$LoginEventListener() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$LoginEventListener;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._this$0 = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$LoginEventListener_this$0'] = v; return this['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$LoginEventListener_this$0']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$LoginEventListener_this$0'] = lcA1;
return;

};
CLS['cons__VLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent_2'] = m;

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
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, 1);
Array.at(stA0, 0, "actionmenu");
(refs_io_cloudoffice_platform_cockpit_js_VIEW || (refs_io_cloudoffice_platform_cockpit_js_VIEW = vm.io_cloudoffice_platform_cockpit_js_VIEW(false)))['render__V_3Ljava_lang_String_2'](stA0);
var stA0 = invoker.getInstanceId__Ljava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$LoginEventListener_this$0']);
var lcA2 = stA0;
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['_CONFIG']();var stA1 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['configFetchEndpoint__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2']("actionmenu", lcA2);
var stA2 = null;var stA3 = new io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$LoginEventListener$1;
(refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$LoginEventListener$1 || (refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$LoginEventListener$1 = io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$LoginEventListener$1(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$LoginEventListener_2.call(stA3, lcA0);
invoker.fetch__VLjava_lang_String_2Ljava_util_Map_2Lio_cloudoffice_platform_cockpit_api_CallBack_2(stA0,stA1, stA2, stA3);
return;

};
    m.access = 0;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$LoginEventListenerfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$LoginEventListener', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_EventListener(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$LoginEventListenerfillInstOf });
    io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$LoginEventListenerfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/actionmenu/ActionMenuComponent$LoginEventListener';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_EventListener(false).constructor.$class
    ]; };
    CLS.$class.access = 33;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_js_VIEW;
    var refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration;
    var refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$LoginEventListener$1;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$LoginEventListener_this$0'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$LoginEventListener = registerClass(exports,'io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$LoginEventListener',io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$LoginEventListener);


function io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$LoginEventListener$1() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$LoginEventListener$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._this$1 = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$LoginEventListener$1_this$1'] = v; return this['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$LoginEventListener$1_this$1']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$LoginEventListener_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$LoginEventListener$1_this$1'] = lcA1;
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.handle__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['query__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2'](lcA1);
var lcA2 = stA0;
var stA0 = new io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView;
(refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView || (refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView = io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView(false))).constructor.cons__V.call(stA0);
var lcA3 = stA0;
var stA0 = lcA3;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA2,"instance");
stA0.setInstance__VLjava_lang_String_2(stA1);
(refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent || (refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent = io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent(false))).access$300__VLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent_2Lio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_2Lio_cloudoffice_platform_cockpit_api_MapBuilder_2(lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$LoginEventListener$1_this$1']['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$LoginEventListener_this$0'], lcA3, lcA2);
lcA3.setVisible__VZ(0);
invoker.setView__VLjava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$LoginEventListener$1_this$1']['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$LoginEventListener_this$0'],lcA3);
var stA0 = invoker.getDefaultViewName__Ljava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$LoginEventListener$1_this$1']['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$LoginEventListener_this$0']);
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['toRaw__Ljava_lang_Object_2Ljava_lang_Object_2'](lcA3);
(refs_io_cloudoffice_platform_cockpit_js_VIEW || (refs_io_cloudoffice_platform_cockpit_js_VIEW = vm.io_cloudoffice_platform_cockpit_js_VIEW(false)))['bind__VLjava_lang_String_2Ljava_lang_Object_2'](stA0, stA1);
return;

};
c['handle__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$LoginEventListener$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$LoginEventListener$1', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_CallBack(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$LoginEventListener$1fillInstOf });
    io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$LoginEventListener$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/actionmenu/ActionMenuComponent$LoginEventListener$1';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_CallBack(false).constructor.$class
    ]; };
    CLS.$class.access = 65568;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_MapBuilder;
    var refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView;
    var refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent;
    var refs_net_java_html_json_Models;
    var refs_io_cloudoffice_platform_cockpit_js_VIEW;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$LoginEventListener$1_this$1'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$LoginEventListener$1 = io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$LoginEventListener$1;

vm.net_java_html_json_Models = link('net/java/html/json/Models', function(f) { vm.net_java_html_json_Models =  f; });
vm.io_cloudoffice_platform_cockpit_js_VIEW = link('io/cloudoffice/platform/cockpit/js/VIEW', function(f) { vm.io_cloudoffice_platform_cockpit_js_VIEW =  f; });

function io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_TYPE'] = null;
  m = c._TYPE = function (v) {  if (arguments.length == 1) CLS['fld_TYPE'] = v; return CLS['fld_TYPE']; };
  m = c._proto = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_proto'] = v; return this['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_proto']; };
  m = c._prop_viewType = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_prop_viewType'] = v; return this['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_prop_viewType']; };
  m = c._prop_tagItemComponentDefinition = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_prop_tagItemComponentDefinition'] = v; return this['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_prop_tagItemComponentDefinition']; };
  m = c._prop_shareItemComponentDefinition = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_prop_shareItemComponentDefinition'] = v; return this['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_prop_shareItemComponentDefinition']; };
  m = c._prop_relatedItemComponentDefinition = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_prop_relatedItemComponentDefinition'] = v; return this['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_prop_relatedItemComponentDefinition']; };
  m = c._prop_searchBoxComponentDefinition = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_prop_searchBoxComponentDefinition'] = v; return this['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_prop_searchBoxComponentDefinition']; };
    m = c.modelFor__Ljava_lang_Class_2 = function() {
return (refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$ActionMenuManager || (refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$ActionMenuManager = io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$ActionMenuManager(false))).constructor.$class;

};
    m.access = 10;
    m.cls = CLS;
    m = c.getViewType__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_proto'],"viewType");
return lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_prop_viewType'];

};
c['getViewType__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setViewType__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_prop_viewType'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_prop_viewType'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_proto'],"viewType", lcA2, lcA1);
return;

    }
}}
};
c['setViewType__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getTagItemComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_proto'],"tagItemComponentDefinition");
if ((lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_prop_tagItemComponentDefinition']) !== (c._TYPE())) { gt = 40; break IF; }
var stA0 = lcA0;var stA1 = new vm.io_cloudoffice_platform_cockpit_api_ComponentDef;
(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor['cons__V'].call(stA1);
var stA2 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_proto']);
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, stA2);
stA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_prop_tagItemComponentDefinition'] = stA1;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

if (lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_prop_tagItemComponentDefinition'] !== null && !lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_prop_tagItemComponentDefinition']['$instOf_io_cloudoffice_platform_cockpit_api_ComponentDef']) vm.java_lang_Class(false).castEx(lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_prop_tagItemComponentDefinition'], 'io.cloudoffice.platform.cockpit.api.ComponentDef');
return lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_prop_tagItemComponentDefinition'];

    }
}}
};
c['getTagItemComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setTagItemComponentDefinition__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_prop_tagItemComponentDefinition'];
if ((lcA2) !== (lcA1)) { gt = 18; break IF; }
return;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_prop_tagItemComponentDefinition'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_proto'],"tagItemComponentDefinition", lcA2, lcA1);
return;

    }
}}
};
c['setTagItemComponentDefinition__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getShareItemComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_proto'],"shareItemComponentDefinition");
if ((lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_prop_shareItemComponentDefinition']) !== (c._TYPE())) { gt = 40; break IF; }
var stA0 = lcA0;var stA1 = new vm.io_cloudoffice_platform_cockpit_api_ComponentDef;
(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor['cons__V'].call(stA1);
var stA2 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_proto']);
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, stA2);
stA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_prop_shareItemComponentDefinition'] = stA1;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

if (lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_prop_shareItemComponentDefinition'] !== null && !lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_prop_shareItemComponentDefinition']['$instOf_io_cloudoffice_platform_cockpit_api_ComponentDef']) vm.java_lang_Class(false).castEx(lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_prop_shareItemComponentDefinition'], 'io.cloudoffice.platform.cockpit.api.ComponentDef');
return lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_prop_shareItemComponentDefinition'];

    }
}}
};
c['getShareItemComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setShareItemComponentDefinition__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_prop_shareItemComponentDefinition'];
if ((lcA2) !== (lcA1)) { gt = 18; break IF; }
return;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_prop_shareItemComponentDefinition'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_proto'],"shareItemComponentDefinition", lcA2, lcA1);
return;

    }
}}
};
c['setShareItemComponentDefinition__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getRelatedItemComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_proto'],"relatedItemComponentDefinition");
if ((lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_prop_relatedItemComponentDefinition']) !== (c._TYPE())) { gt = 40; break IF; }
var stA0 = lcA0;var stA1 = new vm.io_cloudoffice_platform_cockpit_api_ComponentDef;
(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor['cons__V'].call(stA1);
var stA2 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_proto']);
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, stA2);
stA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_prop_relatedItemComponentDefinition'] = stA1;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

if (lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_prop_relatedItemComponentDefinition'] !== null && !lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_prop_relatedItemComponentDefinition']['$instOf_io_cloudoffice_platform_cockpit_api_ComponentDef']) vm.java_lang_Class(false).castEx(lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_prop_relatedItemComponentDefinition'], 'io.cloudoffice.platform.cockpit.api.ComponentDef');
return lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_prop_relatedItemComponentDefinition'];

    }
}}
};
c['getRelatedItemComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setRelatedItemComponentDefinition__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_prop_relatedItemComponentDefinition'];
if ((lcA2) !== (lcA1)) { gt = 18; break IF; }
return;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_prop_relatedItemComponentDefinition'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_proto'],"relatedItemComponentDefinition", lcA2, lcA1);
return;

    }
}}
};
c['setRelatedItemComponentDefinition__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getSearchBoxComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_proto'],"searchBoxComponentDefinition");
if ((lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_prop_searchBoxComponentDefinition']) !== (c._TYPE())) { gt = 40; break IF; }
var stA0 = lcA0;var stA1 = new vm.io_cloudoffice_platform_cockpit_api_ComponentDef;
(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor['cons__V'].call(stA1);
var stA2 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_proto']);
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, stA2);
stA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_prop_searchBoxComponentDefinition'] = stA1;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

if (lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_prop_searchBoxComponentDefinition'] !== null && !lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_prop_searchBoxComponentDefinition']['$instOf_io_cloudoffice_platform_cockpit_api_ComponentDef']) vm.java_lang_Class(false).castEx(lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_prop_searchBoxComponentDefinition'], 'io.cloudoffice.platform.cockpit.api.ComponentDef');
return lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_prop_searchBoxComponentDefinition'];

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

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_prop_searchBoxComponentDefinition'];
if ((lcA2) !== (lcA1)) { gt = 18; break IF; }
return;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_prop_searchBoxComponentDefinition'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_proto'],"searchBoxComponentDefinition", lcA2, lcA1);
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
stA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_proto'] = stA1;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = (refs_net_java_html_BrwsrCtx || (refs_net_java_html_BrwsrCtx = vm.net_java_html_BrwsrCtx(false)))['findDefault__Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'](c.constructor.$class);
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, stA1);
lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_prop_tagItemComponentDefinition'] = c._TYPE();
lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_prop_shareItemComponentDefinition'] = c._TYPE();
lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_prop_relatedItemComponentDefinition'] = c._TYPE();
lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_prop_searchBoxComponentDefinition'] = c._TYPE();
return;

};
CLS['cons__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_ComponentDef_2Lio_cloudoffice_platform_cockpit_api_ComponentDef_2Lio_cloudoffice_platform_cockpit_api_ComponentDef_2Lio_cloudoffice_platform_cockpit_api_ComponentDef_2 = function(lcA1, lcA2, lcA3, lcA4, lcA5) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = (refs_net_java_html_BrwsrCtx || (refs_net_java_html_BrwsrCtx = vm.net_java_html_BrwsrCtx(false)))['findDefault__Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'](c.constructor.$class);
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, stA1);
lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_prop_viewType'] = lcA1;
lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_prop_tagItemComponentDefinition'] = lcA2;
lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_prop_shareItemComponentDefinition'] = lcA3;
lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_prop_relatedItemComponentDefinition'] = lcA4;
lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_prop_searchBoxComponentDefinition'] = lcA5;
return;

};
CLS['cons__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_ComponentDef_2Lio_cloudoffice_platform_cockpit_api_ComponentDef_2Lio_cloudoffice_platform_cockpit_api_ComponentDef_2Lio_cloudoffice_platform_cockpit_api_ComponentDef_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 5);
var lcA3 = stA0;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_proto'];var stA1 = lcA2;var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, 5);
Array.at(stA2, 0, "viewType");
Array.at(stA2, 1, "tagItemComponentDefinition");
Array.at(stA2, 2, "shareItemComponentDefinition");
Array.at(stA2, 3, "relatedItemComponentDefinition");
Array.at(stA2, 4, "searchBoxComponentDefinition");
invoker.extract__VLjava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Object_2(stA0,stA1, stA2, lcA3);
if ((lcA3[0] || Array.at(lcA3, 0)) !== null && !(lcA3[0] || Array.at(lcA3, 0))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[0] || Array.at(lcA3, 0)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_prop_viewType'] = (lcA3[0] || Array.at(lcA3, 0));
var stA0 = lcA0;var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_proto'],(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor.$class, (lcA3[1] || Array.at(lcA3, 1)));
stA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_prop_tagItemComponentDefinition'] = stA1;
var stA0 = lcA0;var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_proto'],(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor.$class, (lcA3[2] || Array.at(lcA3, 2)));
stA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_prop_shareItemComponentDefinition'] = stA1;
var stA0 = lcA0;var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_proto'],(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor.$class, (lcA3[3] || Array.at(lcA3, 3)));
stA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_prop_relatedItemComponentDefinition'] = stA1;
var stA0 = lcA0;var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_proto'],(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor.$class, (lcA3[4] || Array.at(lcA3, 4)));
stA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_prop_searchBoxComponentDefinition'] = stA1;
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
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"viewType");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getViewType__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"tagItemComponentDefinition");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_prop_tagItemComponentDefinition']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"shareItemComponentDefinition");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_prop_shareItemComponentDefinition']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"relatedItemComponentDefinition");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_prop_relatedItemComponentDefinition']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"searchBoxComponentDefinition");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_prop_searchBoxComponentDefinition']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(125));
var stA0 = invoker.toString__Ljava_lang_String_2(lcA1);
return stA0;

};
c['toString__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Lio_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_proto']);
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_2Lnet_java_html_BrwsrCtx_2.call(stA0, stA1);
return stA0;

};
c['clone__Lio_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Lio_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_2Lnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
var stA0 = new io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, lcA1);
var lcA2 = stA0;
var stA0 = lcA2;var stA1 = lcA0.getViewType__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_prop_viewType'] = stA1;
var stA0 = lcA2;if ((lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_prop_tagItemComponentDefinition']) !== null) { gt = 29; break IF; }
var stA1 = null;{ gt = 53; break IF; }
    }
    X_29: for (;;) { IF: if (gt <= 29) {

if ((lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_prop_tagItemComponentDefinition']) !== (c._TYPE())) { gt = 45; break IF; }
var stA1 = c._TYPE();{ gt = 53; break IF; }
    }
    X_45: for (;;) { IF: if (gt <= 45) {

var stA1 = lcA0.getTagItemComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, lcA1);
    }
    X_53: for (;;) { IF: if (gt <= 53) {
stA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_prop_tagItemComponentDefinition'] = stA1;
var stA0 = lcA2;if ((lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_prop_shareItemComponentDefinition']) !== null) { gt = 68; break IF; }
var stA1 = null;{ gt = 92; break IF; }
    }
    X_68: for (;;) { IF: if (gt <= 68) {

if ((lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_prop_shareItemComponentDefinition']) !== (c._TYPE())) { gt = 84; break IF; }
var stA1 = c._TYPE();{ gt = 92; break IF; }
    }
    X_84: for (;;) { IF: if (gt <= 84) {

var stA1 = lcA0.getShareItemComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, lcA1);
    }
    X_92: for (;;) { IF: if (gt <= 92) {
stA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_prop_shareItemComponentDefinition'] = stA1;
var stA0 = lcA2;if ((lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_prop_relatedItemComponentDefinition']) !== null) { gt = 107; break IF; }
var stA1 = null;{ gt = 131; break IF; }
    }
    X_107: for (;;) { IF: if (gt <= 107) {

if ((lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_prop_relatedItemComponentDefinition']) !== (c._TYPE())) { gt = 123; break IF; }
var stA1 = c._TYPE();{ gt = 131; break IF; }
    }
    X_123: for (;;) { IF: if (gt <= 123) {

var stA1 = lcA0.getRelatedItemComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, lcA1);
    }
    X_131: for (;;) { IF: if (gt <= 131) {
stA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_prop_relatedItemComponentDefinition'] = stA1;
var stA0 = lcA2;if ((lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_prop_searchBoxComponentDefinition']) !== null) { gt = 146; break IF; }
var stA1 = null;{ gt = 170; break IF; }
    }
    X_146: for (;;) { IF: if (gt <= 146) {

if ((lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_prop_searchBoxComponentDefinition']) !== (c._TYPE())) { gt = 162; break IF; }
var stA1 = c._TYPE();{ gt = 170; break IF; }
    }
    X_162: for (;;) { IF: if (gt <= 162) {

var stA1 = lcA0.getSearchBoxComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, lcA1);
    }
    X_170: for (;;) { IF: if (gt <= 170) {
stA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_prop_searchBoxComponentDefinition'] = stA1;
return lcA2;

    }
}}}}}}}}}}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.applyBindings__Lio_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_2 = function() {
  var  lcA0 = this;
invoker.applyBindings__V(lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_proto']);
return lcA0;

};
c['applyBindings__Lio_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_2'] = m;

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

var stI0 = lcA1 != null && lcA1['$instOf_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration'] ? 1 : 0;
if ((stI0) != 0) { gt = 16; break IF; }
return 0;
    }
    X_16: for (;;) { IF: if (gt <= 16) {

if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.actionmenu.ActionMenuConfiguration');
var lcA2 = lcA1;
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_prop_viewType'], lcA2['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_prop_viewType']);
if ((stI0) != 0) { gt = 40; break IF; }
return 0;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_prop_tagItemComponentDefinition']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_prop_tagItemComponentDefinition']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 67; break IF; }
return 0;
    }
    X_67: for (;;) { IF: if (gt <= 67) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_prop_shareItemComponentDefinition']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_prop_shareItemComponentDefinition']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 94; break IF; }
return 0;
    }
    X_94: for (;;) { IF: if (gt <= 94) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_prop_relatedItemComponentDefinition']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_prop_relatedItemComponentDefinition']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 121; break IF; }
return 0;
    }
    X_121: for (;;) { IF: if (gt <= 121) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_prop_searchBoxComponentDefinition']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_prop_searchBoxComponentDefinition']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 148; break IF; }
return 0;
    }
    X_148: for (;;) { IF: if (gt <= 148) {

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
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_prop_viewType'], lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_prop_tagItemComponentDefinition']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_prop_shareItemComponentDefinition']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_prop_relatedItemComponentDefinition']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_prop_searchBoxComponentDefinition']);
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
var stA0 = lcA0.clone__Lio_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_2();
return stA0;

};
c['clone__Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.access$100__Lio_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration$Html4JavaType_2 = function() {
return c._TYPE();

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_2 = function(lcA0) {
return lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_proto'];

};
    m.access = 4104;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration$1_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2.call(lcA0, lcA1, lcA2);
return;

};
    m.access = 4096;
    m.cls = CLS;
    m = c.access$400__Lio_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_2Lio_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_2Lnet_java_html_BrwsrCtx_2 = function(lcA0, lcA1) {
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_2Lnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
return stA0;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration$Html4JavaType;
(refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration$Html4JavaType || (refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration$Html4JavaType = io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration$Html4JavaType(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration$1_2.call(stA0, null);
c._TYPE(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfigurationfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration', { value : true });
      vm.java_lang_Cloneable(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfigurationfillInstOf });
    io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfigurationfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/actionmenu/ActionMenuConfiguration';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.java_lang_Cloneable(false).constructor.$class
    ]; };
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$ActionMenuManager;
    var refs_io_cloudoffice_platform_cockpit_api_ComponentDef;
    var refs_net_java_html_json_Models;
    var refs_net_java_html_BrwsrCtx;
    var refs_java_lang_StringBuilder;
    var refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration$Html4JavaType;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_proto'] = null;
    this['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_prop_viewType'] = null;
    this['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_prop_tagItemComponentDefinition'] = null;
    this['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_prop_shareItemComponentDefinition'] = null;
    this['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_prop_relatedItemComponentDefinition'] = null;
    this['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_prop_searchBoxComponentDefinition'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration = registerClass(exports,'io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration',io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration);

vm.java_lang_Cloneable = link('java/lang/Cloneable', function(f) { vm.java_lang_Cloneable =  f; });

function io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration$Html4JavaType() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration$Html4JavaType;
  if (!CLS.$class) {
    var pp = vm.org_netbeans_html_json_spi_Proto$Type(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_org_netbeans_html_json_spi_Proto$Type || (refs_org_netbeans_html_json_spi_Proto$Type = vm.org_netbeans_html_json_spi_Proto$Type(false))).constructor['cons__VLjava_lang_Class_2Ljava_lang_Class_2II'].call(lcA0, (refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration || (refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration = io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration(false))).constructor.$class, (refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$ActionMenuManager || (refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$ActionMenuManager = io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$ActionMenuManager(false))).constructor.$class, 5, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"viewType", 0, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"tagItemComponentDefinition", 1, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"shareItemComponentDefinition", 2, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"relatedItemComponentDefinition", 3, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"searchBoxComponentDefinition", 4, 0, 0);
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.setValue__VLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
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

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration || (refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration = io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration(false))).access$100__Lio_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setViewType__VLjava_lang_String_2(stA1);
return;
    }
    X_53: for (;;) { IF: if (gt <= 53) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration || (refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration = io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration(false))).access$100__Lio_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_api_ComponentDef']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.api.ComponentDef');
stA0.setTagItemComponentDefinition__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2(stA1);
return;
    }
    X_70: for (;;) { IF: if (gt <= 70) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration || (refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration = io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration(false))).access$100__Lio_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_api_ComponentDef']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.api.ComponentDef');
stA0.setShareItemComponentDefinition__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2(stA1);
return;
    }
    X_87: for (;;) { IF: if (gt <= 87) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration || (refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration = io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration(false))).access$100__Lio_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_api_ComponentDef']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.api.ComponentDef');
stA0.setRelatedItemComponentDefinition__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2(stA1);
return;
    }
    X_104: for (;;) { IF: if (gt <= 104) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration || (refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration = io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration(false))).access$100__Lio_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration$Html4JavaType_2();
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
    m = c.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_2I = function(lcA1, lcI2) {
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

var stA0 = lcA1.getViewType__Ljava_lang_String_2();
return stA0;
    }
    X_41: for (;;) { IF: if (gt <= 41) {

var stA0 = lcA1.getTagItemComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
return stA0;
    }
    X_46: for (;;) { IF: if (gt <= 46) {

var stA0 = lcA1.getShareItemComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
return stA0;
    }
    X_51: for (;;) { IF: if (gt <= 51) {

var stA0 = lcA1.getRelatedItemComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
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
    m = c.call__VLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.actionmenu.ActionMenuConfiguration');
var stA0 = (refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration || (refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration = io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_2(lcA1);
return stA0;

};
c['protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.onChange__VLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
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
    m = c.read__Lio_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = new io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration;
(refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration || (refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration = io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration(false))).constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration$1_2.call(stA0, lcA1, lcA2, null);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.cloneTo__Lio_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_2Lio_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = (refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration || (refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration = io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration(false))).access$400__Lio_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_2Lio_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.actionmenu.ActionMenuConfiguration');
lcA0.onMessage__VLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_2IILjava_lang_Object_2_3Ljava_lang_Object_2(lcA1, lcI2, lcI3, lcA4, lcA5);
return;

};
c['onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.onChange__VLjava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.actionmenu.ActionMenuConfiguration');
lcA0.onChange__VLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_2I(lcA1, lcI2);
return;

};
c['onChange__VLjava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = lcA0.read__Lio_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2(lcA1, lcA2);
return stA0;

};
c['read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.actionmenu.ActionMenuConfiguration');
var stA0 = lcA0.cloneTo__Lio_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_2Lio_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
c['cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.actionmenu.ActionMenuConfiguration');
lcA0.call__VLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_2ILjava_lang_Object_2Ljava_lang_Object_2(lcA1, lcI2, lcA3, lcA4);
return;

};
c['call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Ljava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.actionmenu.ActionMenuConfiguration');
var stA0 = lcA0.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_2I(lcA1, lcI2);
return stA0;

};
c['getValue__Ljava_lang_Object_2Ljava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.setValue__VLjava_lang_Object_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.actionmenu.ActionMenuConfiguration');
lcA0.setValue__VLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_2ILjava_lang_Object_2(lcA1, lcI2, lcA3);
return;

};
c['setValue__VLjava_lang_Object_2ILjava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration$1_2 = function(lcA1) {
  var  lcA0 = this;
c.constructor.cons__V.call(lcA0);
return;

};
    m.access = 4096;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration$Html4JavaTypefillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration$Html4JavaType', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration$Html4JavaTypefillInstOf });
    io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration$Html4JavaTypefillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/actionmenu/ActionMenuConfiguration$Html4JavaType';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration;
    var refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$ActionMenuManager;
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
vm.io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration$Html4JavaType = io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration$Html4JavaType;

vm.org_netbeans_html_json_spi_Proto$Type = link('org/netbeans/html/json/spi/Proto$Type', function(f) { vm.org_netbeans_html_json_spi_Proto$Type =  f; });
vm.java_lang_StringBuilder = link('java/lang/StringBuilder', function(f) { vm.java_lang_StringBuilder =  f; });
vm.net_java_html_BrwsrCtx = link('net/java/html/BrwsrCtx', function(f) { vm.net_java_html_BrwsrCtx =  f; });
vm.io_cloudoffice_platform_cockpit_api_ComponentDef = link('io/cloudoffice/platform/cockpit/api/ComponentDef', function(f) { vm.io_cloudoffice_platform_cockpit_api_ComponentDef =  f; });

function io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$ActionMenuManager() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$ActionMenuManager;
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
    function io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$ActionMenuManagerfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$ActionMenuManager', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$ActionMenuManagerfillInstOf });
    io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$ActionMenuManagerfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/actionmenu/ActionMenuComponent$ActionMenuManager';
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
vm.io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$ActionMenuManager = registerClass(exports,'io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$ActionMenuManager',io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent$ActionMenuManager);


function io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_TYPE'] = null;
  m = c._TYPE = function (v) {  if (arguments.length == 1) CLS['fld_TYPE'] = v; return CLS['fld_TYPE']; };
  m = c._proto = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_proto'] = v; return this['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_proto']; };
  m = c._prop_instance = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_instance'] = v; return this['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_instance']; };
  m = c._prop_designerMode = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_designerMode'] = v; return this['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_designerMode']; };
  m = c._prop_configuration = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_configuration'] = v; return this['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_configuration']; };
  m = c._prop_viewType = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_viewType'] = v; return this['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_viewType']; };
  m = c._prop_selectedItemId = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_selectedItemId'] = v; return this['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_selectedItemId']; };
  m = c._prop_selectedItemName = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_selectedItemName'] = v; return this['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_selectedItemName']; };
  m = c._prop_selectedItemType = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_selectedItemType'] = v; return this['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_selectedItemType']; };
  m = c._prop_maximumPermission = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_maximumPermission'] = v; return this['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_maximumPermission']; };
  m = c._prop_businessModelName = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_businessModelName'] = v; return this['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_businessModelName']; };
  m = c._prop_visible = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_visible'] = v; return this['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_visible']; };
  m = c._prop_isFromList = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_isFromList'] = v; return this['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_isFromList']; };
  m = c._prop_detailComponentDefinition = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_detailComponentDefinition'] = v; return this['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_detailComponentDefinition']; };
  m = c._prop_tagItemComponentDefinition = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_tagItemComponentDefinition'] = v; return this['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_tagItemComponentDefinition']; };
  m = c._prop_shareItemComponentDefinition = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_shareItemComponentDefinition'] = v; return this['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_shareItemComponentDefinition']; };
  m = c._prop_relatedItemComponentDefinition = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_relatedItemComponentDefinition'] = v; return this['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_relatedItemComponentDefinition']; };
  m = c._prop_searchBoxComponentDefinition = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_searchBoxComponentDefinition'] = v; return this['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_searchBoxComponentDefinition']; };
    m = c.modelFor__Ljava_lang_Class_2 = function() {
return (refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent || (refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent = io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent(false))).constructor.$class;

};
    m.access = 10;
    m.cls = CLS;
    m = c.getInstance__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_proto'],"instance");
return lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_instance'];

};
c['getInstance__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setInstance__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_instance'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_instance'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_proto'],"instance", lcA2, lcA1);
return;

    }
}}
};
c['setInstance__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isDesignerMode__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_proto'],"designerMode");
return lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_designerMode'];

};
c['isDesignerMode__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setDesignerMode__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_designerMode']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_designerMode'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_proto'];var stA1 = "designerMode";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2, stA3);
return;

    }
}}
};
c['setDesignerMode__VZ'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getConfiguration__Lio_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_proto'],"configuration");
if ((lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_configuration']) !== (c._TYPE())) { gt = 40; break IF; }
var stA0 = lcA0;var stA1 = new io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration;
(refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration || (refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration = io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration(false))).constructor.cons__V.call(stA1);
var stA2 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_proto']);
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, stA2);
stA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_configuration'] = stA1;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

if (lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_configuration'] !== null && !lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_configuration']['$instOf_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration']) vm.java_lang_Class(false).castEx(lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_configuration'], 'io.cloudoffice.platform.cockpit.actionmenu.ActionMenuConfiguration');
return lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_configuration'];

    }
}}
};
c['getConfiguration__Lio_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setConfiguration__VLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_configuration'];
if ((lcA2) !== (lcA1)) { gt = 18; break IF; }
return;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_configuration'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_proto'],"configuration", lcA2, lcA1);
return;

    }
}}
};
c['setConfiguration__VLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getViewType__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_proto'],"viewType");
return lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_viewType'];

};
c['getViewType__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setViewType__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_viewType'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_viewType'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_proto'],"viewType", lcA2, lcA1);
return;

    }
}}
};
c['setViewType__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getSelectedItemId__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_proto'],"selectedItemId");
return lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_selectedItemId'];

};
c['getSelectedItemId__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setSelectedItemId__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_selectedItemId'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_selectedItemId'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_proto'],"selectedItemId", lcA2, lcA1);
return;

    }
}}
};
c['setSelectedItemId__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getSelectedItemName__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_proto'],"selectedItemName");
return lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_selectedItemName'];

};
c['getSelectedItemName__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setSelectedItemName__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_selectedItemName'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_selectedItemName'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_proto'],"selectedItemName", lcA2, lcA1);
return;

    }
}}
};
c['setSelectedItemName__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getSelectedItemType__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_proto'],"selectedItemType");
return lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_selectedItemType'];

};
c['getSelectedItemType__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setSelectedItemType__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_selectedItemType'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_selectedItemType'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_proto'],"selectedItemType", lcA2, lcA1);
return;

    }
}}
};
c['setSelectedItemType__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getMaximumPermission__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_proto'],"maximumPermission");
return lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_maximumPermission'];

};
c['getMaximumPermission__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setMaximumPermission__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_maximumPermission'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_maximumPermission'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_proto'],"maximumPermission", lcA2, lcA1);
return;

    }
}}
};
c['setMaximumPermission__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getBusinessModelName__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_proto'],"businessModelName");
return lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_businessModelName'];

};
c['getBusinessModelName__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setBusinessModelName__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_businessModelName'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_businessModelName'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_proto'],"businessModelName", lcA2, lcA1);
return;

    }
}}
};
c['setBusinessModelName__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isVisible__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_proto'],"visible");
return lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_visible'];

};
c['isVisible__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setVisible__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_visible']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_visible'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_proto'];var stA1 = "visible";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2, stA3);
return;

    }
}}
};
c['setVisible__VZ'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isIsFromList__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_proto'],"isFromList");
return lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_isFromList'];

};
c['isIsFromList__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setIsFromList__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_isFromList']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_isFromList'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_proto'];var stA1 = "isFromList";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2, stA3);
return;

    }
}}
};
c['setIsFromList__VZ'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getDetailComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_proto'],"detailComponentDefinition");
if ((lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_detailComponentDefinition']) !== (c._TYPE())) { gt = 40; break IF; }
var stA0 = lcA0;var stA1 = new vm.io_cloudoffice_platform_cockpit_api_ComponentDef;
(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor['cons__V'].call(stA1);
var stA2 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_proto']);
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, stA2);
stA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_detailComponentDefinition'] = stA1;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

if (lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_detailComponentDefinition'] !== null && !lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_detailComponentDefinition']['$instOf_io_cloudoffice_platform_cockpit_api_ComponentDef']) vm.java_lang_Class(false).castEx(lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_detailComponentDefinition'], 'io.cloudoffice.platform.cockpit.api.ComponentDef');
return lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_detailComponentDefinition'];

    }
}}
};
c['getDetailComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setDetailComponentDefinition__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_detailComponentDefinition'];
if ((lcA2) !== (lcA1)) { gt = 18; break IF; }
return;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_detailComponentDefinition'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_proto'],"detailComponentDefinition", lcA2, lcA1);
return;

    }
}}
};
c['setDetailComponentDefinition__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getTagItemComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_proto'],"tagItemComponentDefinition");
if ((lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_tagItemComponentDefinition']) !== (c._TYPE())) { gt = 40; break IF; }
var stA0 = lcA0;var stA1 = new vm.io_cloudoffice_platform_cockpit_api_ComponentDef;
(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor['cons__V'].call(stA1);
var stA2 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_proto']);
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, stA2);
stA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_tagItemComponentDefinition'] = stA1;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

if (lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_tagItemComponentDefinition'] !== null && !lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_tagItemComponentDefinition']['$instOf_io_cloudoffice_platform_cockpit_api_ComponentDef']) vm.java_lang_Class(false).castEx(lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_tagItemComponentDefinition'], 'io.cloudoffice.platform.cockpit.api.ComponentDef');
return lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_tagItemComponentDefinition'];

    }
}}
};
c['getTagItemComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setTagItemComponentDefinition__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_tagItemComponentDefinition'];
if ((lcA2) !== (lcA1)) { gt = 18; break IF; }
return;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_tagItemComponentDefinition'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_proto'],"tagItemComponentDefinition", lcA2, lcA1);
return;

    }
}}
};
c['setTagItemComponentDefinition__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getShareItemComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_proto'],"shareItemComponentDefinition");
if ((lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_shareItemComponentDefinition']) !== (c._TYPE())) { gt = 40; break IF; }
var stA0 = lcA0;var stA1 = new vm.io_cloudoffice_platform_cockpit_api_ComponentDef;
(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor['cons__V'].call(stA1);
var stA2 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_proto']);
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, stA2);
stA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_shareItemComponentDefinition'] = stA1;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

if (lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_shareItemComponentDefinition'] !== null && !lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_shareItemComponentDefinition']['$instOf_io_cloudoffice_platform_cockpit_api_ComponentDef']) vm.java_lang_Class(false).castEx(lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_shareItemComponentDefinition'], 'io.cloudoffice.platform.cockpit.api.ComponentDef');
return lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_shareItemComponentDefinition'];

    }
}}
};
c['getShareItemComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setShareItemComponentDefinition__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_shareItemComponentDefinition'];
if ((lcA2) !== (lcA1)) { gt = 18; break IF; }
return;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_shareItemComponentDefinition'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_proto'],"shareItemComponentDefinition", lcA2, lcA1);
return;

    }
}}
};
c['setShareItemComponentDefinition__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getRelatedItemComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_proto'],"relatedItemComponentDefinition");
if ((lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_relatedItemComponentDefinition']) !== (c._TYPE())) { gt = 40; break IF; }
var stA0 = lcA0;var stA1 = new vm.io_cloudoffice_platform_cockpit_api_ComponentDef;
(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor['cons__V'].call(stA1);
var stA2 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_proto']);
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, stA2);
stA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_relatedItemComponentDefinition'] = stA1;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

if (lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_relatedItemComponentDefinition'] !== null && !lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_relatedItemComponentDefinition']['$instOf_io_cloudoffice_platform_cockpit_api_ComponentDef']) vm.java_lang_Class(false).castEx(lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_relatedItemComponentDefinition'], 'io.cloudoffice.platform.cockpit.api.ComponentDef');
return lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_relatedItemComponentDefinition'];

    }
}}
};
c['getRelatedItemComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setRelatedItemComponentDefinition__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_relatedItemComponentDefinition'];
if ((lcA2) !== (lcA1)) { gt = 18; break IF; }
return;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_relatedItemComponentDefinition'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_proto'],"relatedItemComponentDefinition", lcA2, lcA1);
return;

    }
}}
};
c['setRelatedItemComponentDefinition__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getSearchBoxComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_proto'],"searchBoxComponentDefinition");
if ((lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_searchBoxComponentDefinition']) !== (c._TYPE())) { gt = 40; break IF; }
var stA0 = lcA0;var stA1 = new vm.io_cloudoffice_platform_cockpit_api_ComponentDef;
(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor['cons__V'].call(stA1);
var stA2 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_proto']);
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, stA2);
stA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_searchBoxComponentDefinition'] = stA1;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

if (lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_searchBoxComponentDefinition'] !== null && !lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_searchBoxComponentDefinition']['$instOf_io_cloudoffice_platform_cockpit_api_ComponentDef']) vm.java_lang_Class(false).castEx(lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_searchBoxComponentDefinition'], 'io.cloudoffice.platform.cockpit.api.ComponentDef');
return lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_searchBoxComponentDefinition'];

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

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_searchBoxComponentDefinition'];
if ((lcA2) !== (lcA1)) { gt = 18; break IF; }
return;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_searchBoxComponentDefinition'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_proto'],"searchBoxComponentDefinition", lcA2, lcA1);
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
stA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_proto'] = stA1;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = (refs_net_java_html_BrwsrCtx || (refs_net_java_html_BrwsrCtx = vm.net_java_html_BrwsrCtx(false)))['findDefault__Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'](c.constructor.$class);
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, stA1);
lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_configuration'] = c._TYPE();
lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_detailComponentDefinition'] = c._TYPE();
lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_tagItemComponentDefinition'] = c._TYPE();
lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_shareItemComponentDefinition'] = c._TYPE();
lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_relatedItemComponentDefinition'] = c._TYPE();
lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_searchBoxComponentDefinition'] = c._TYPE();
return;

};
CLS['cons__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLjava_lang_String_2ZLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2ZZLio_cloudoffice_platform_cockpit_api_ComponentDef_2Lio_cloudoffice_platform_cockpit_api_ComponentDef_2Lio_cloudoffice_platform_cockpit_api_ComponentDef_2Lio_cloudoffice_platform_cockpit_api_ComponentDef_2Lio_cloudoffice_platform_cockpit_api_ComponentDef_2 = function(lcA1, lcI2, lcA3, lcA4, lcA5, lcA6, lcA7, lcA8, lcA9, lcI10, lcI11, lcA12, lcA13, lcA14, lcA15, lcA16) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = (refs_net_java_html_BrwsrCtx || (refs_net_java_html_BrwsrCtx = vm.net_java_html_BrwsrCtx(false)))['findDefault__Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'](c.constructor.$class);
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, stA1);
lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_instance'] = lcA1;
lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_designerMode'] = lcI2;
lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_configuration'] = lcA3;
lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_viewType'] = lcA4;
lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_selectedItemId'] = lcA5;
lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_selectedItemName'] = lcA6;
lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_selectedItemType'] = lcA7;
lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_maximumPermission'] = lcA8;
lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_businessModelName'] = lcA9;
lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_visible'] = lcI10;
lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_isFromList'] = lcI11;
lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_detailComponentDefinition'] = lcA12;
lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_tagItemComponentDefinition'] = lcA13;
lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_shareItemComponentDefinition'] = lcA14;
lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_relatedItemComponentDefinition'] = lcA15;
lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_searchBoxComponentDefinition'] = lcA16;
return;

};
CLS['cons__VLjava_lang_String_2ZLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2ZZLio_cloudoffice_platform_cockpit_api_ComponentDef_2Lio_cloudoffice_platform_cockpit_api_ComponentDef_2Lio_cloudoffice_platform_cockpit_api_ComponentDef_2Lio_cloudoffice_platform_cockpit_api_ComponentDef_2Lio_cloudoffice_platform_cockpit_api_ComponentDef_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, (16));
var lcA3 = stA0;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_proto'];var stA1 = lcA2;var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, (16));
Array.at(stA2, 0, "instance");
Array.at(stA2, 1, "designerMode");
Array.at(stA2, 2, "configuration");
Array.at(stA2, 3, "viewType");
Array.at(stA2, 4, "selectedItemId");
Array.at(stA2, 5, "selectedItemName");
Array.at(stA2, (6), "selectedItemType");
Array.at(stA2, (7), "maximumPermission");
Array.at(stA2, (8), "businessModelName");
Array.at(stA2, (9), "visible");
Array.at(stA2, (10), "isFromList");
Array.at(stA2, (11), "detailComponentDefinition");
Array.at(stA2, (12), "tagItemComponentDefinition");
Array.at(stA2, (13), "shareItemComponentDefinition");
Array.at(stA2, (14), "relatedItemComponentDefinition");
Array.at(stA2, (15), "searchBoxComponentDefinition");
invoker.extract__VLjava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Object_2(stA0,stA1, stA2, lcA3);
if ((lcA3[0] || Array.at(lcA3, 0)) !== null && !(lcA3[0] || Array.at(lcA3, 0))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[0] || Array.at(lcA3, 0)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_instance'] = (lcA3[0] || Array.at(lcA3, 0));
var stA0 = lcA0;if (((lcA3[1] || Array.at(lcA3, 1))) !== null) { gt = 136; break IF; }
var stI1 = 0;{ gt = 148; break IF; }
    }
    X_136: for (;;) { IF: if (gt <= 136) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[1] || Array.at(lcA3, 1)));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_148: for (;;) { IF: if (gt <= 148) {
stA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_designerMode'] = stI1;
var stA0 = lcA0;var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_proto'],(refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration || (refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration = io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration(false))).constructor.$class, (lcA3[2] || Array.at(lcA3, 2)));
stA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_configuration'] = stA1;
if ((lcA3[3] || Array.at(lcA3, 3)) !== null && !(lcA3[3] || Array.at(lcA3, 3))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[3] || Array.at(lcA3, 3)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_viewType'] = (lcA3[3] || Array.at(lcA3, 3));
if ((lcA3[4] || Array.at(lcA3, 4)) !== null && !(lcA3[4] || Array.at(lcA3, 4))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[4] || Array.at(lcA3, 4)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_selectedItemId'] = (lcA3[4] || Array.at(lcA3, 4));
if ((lcA3[5] || Array.at(lcA3, 5)) !== null && !(lcA3[5] || Array.at(lcA3, 5))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[5] || Array.at(lcA3, 5)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_selectedItemName'] = (lcA3[5] || Array.at(lcA3, 5));
if ((lcA3[(6)] || Array.at(lcA3, (6))) !== null && !(lcA3[(6)] || Array.at(lcA3, (6)))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[(6)] || Array.at(lcA3, (6))), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_selectedItemType'] = (lcA3[(6)] || Array.at(lcA3, (6)));
if ((lcA3[(7)] || Array.at(lcA3, (7))) !== null && !(lcA3[(7)] || Array.at(lcA3, (7)))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[(7)] || Array.at(lcA3, (7))), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_maximumPermission'] = (lcA3[(7)] || Array.at(lcA3, (7)));
if ((lcA3[(8)] || Array.at(lcA3, (8))) !== null && !(lcA3[(8)] || Array.at(lcA3, (8)))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[(8)] || Array.at(lcA3, (8))), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_businessModelName'] = (lcA3[(8)] || Array.at(lcA3, (8)));
var stA0 = lcA0;if (((lcA3[(9)] || Array.at(lcA3, (9)))) !== null) { gt = 242; break IF; }
var stI1 = 0;{ gt = 255; break IF; }
    }
    X_242: for (;;) { IF: if (gt <= 242) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[(9)] || Array.at(lcA3, (9))));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_255: for (;;) { IF: if (gt <= 255) {
stA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_visible'] = stI1;
var stA0 = lcA0;if (((lcA3[(10)] || Array.at(lcA3, (10)))) !== null) { gt = 270; break IF; }
var stI1 = 0;{ gt = 283; break IF; }
    }
    X_270: for (;;) { IF: if (gt <= 270) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[(10)] || Array.at(lcA3, (10))));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_283: for (;;) { IF: if (gt <= 283) {
stA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_isFromList'] = stI1;
var stA0 = lcA0;var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_proto'],(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor.$class, (lcA3[(11)] || Array.at(lcA3, (11))));
stA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_detailComponentDefinition'] = stA1;
var stA0 = lcA0;var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_proto'],(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor.$class, (lcA3[(12)] || Array.at(lcA3, (12))));
stA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_tagItemComponentDefinition'] = stA1;
var stA0 = lcA0;var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_proto'],(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor.$class, (lcA3[(13)] || Array.at(lcA3, (13))));
stA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_shareItemComponentDefinition'] = stA1;
var stA0 = lcA0;var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_proto'],(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor.$class, (lcA3[(14)] || Array.at(lcA3, (14))));
stA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_relatedItemComponentDefinition'] = stA1;
var stA0 = lcA0;var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_proto'],(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor.$class, (lcA3[(15)] || Array.at(lcA3, (15))));
stA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_searchBoxComponentDefinition'] = stA1;
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
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_configuration']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"viewType");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getViewType__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"selectedItemId");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getSelectedItemId__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"selectedItemName");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getSelectedItemName__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"selectedItemType");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getSelectedItemType__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"maximumPermission");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getMaximumPermission__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"businessModelName");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getBusinessModelName__Ljava_lang_String_2();
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
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"isFromList");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stI2 = lcA0.isIsFromList__Z();
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI2);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"detailComponentDefinition");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_detailComponentDefinition']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"tagItemComponentDefinition");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_tagItemComponentDefinition']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"shareItemComponentDefinition");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_shareItemComponentDefinition']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"relatedItemComponentDefinition");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_relatedItemComponentDefinition']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"searchBoxComponentDefinition");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_searchBoxComponentDefinition']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(125));
var stA0 = invoker.toString__Ljava_lang_String_2(lcA1);
return stA0;

};
c['toString__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Lio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_proto']);
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_2Lnet_java_html_BrwsrCtx_2.call(stA0, stA1);
return stA0;

};
c['clone__Lio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Lio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_2Lnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
var stA0 = new io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, lcA1);
var lcA2 = stA0;
var stA0 = lcA2;var stA1 = lcA0.getInstance__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_instance'] = stA1;
var stA0 = lcA2;var stI1 = lcA0.isDesignerMode__Z();
stA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_designerMode'] = stI1;
var stA0 = lcA2;if ((lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_configuration']) !== null) { gt = 37; break IF; }
var stA1 = null;{ gt = 61; break IF; }
    }
    X_37: for (;;) { IF: if (gt <= 37) {

if ((lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_configuration']) !== (c._TYPE())) { gt = 53; break IF; }
var stA1 = c._TYPE();{ gt = 61; break IF; }
    }
    X_53: for (;;) { IF: if (gt <= 53) {

var stA1 = lcA0.getConfiguration__Lio_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_2();
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, lcA1);
    }
    X_61: for (;;) { IF: if (gt <= 61) {
stA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_configuration'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getViewType__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_viewType'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getSelectedItemId__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_selectedItemId'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getSelectedItemName__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_selectedItemName'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getSelectedItemType__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_selectedItemType'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getMaximumPermission__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_maximumPermission'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getBusinessModelName__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_businessModelName'] = stA1;
var stA0 = lcA2;var stI1 = lcA0.isVisible__Z();
stA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_visible'] = stI1;
var stA0 = lcA2;var stI1 = lcA0.isIsFromList__Z();
stA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_isFromList'] = stI1;
var stA0 = lcA2;if ((lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_detailComponentDefinition']) !== null) { gt = 140; break IF; }
var stA1 = null;{ gt = 164; break IF; }
    }
    X_140: for (;;) { IF: if (gt <= 140) {

if ((lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_detailComponentDefinition']) !== (c._TYPE())) { gt = 156; break IF; }
var stA1 = c._TYPE();{ gt = 164; break IF; }
    }
    X_156: for (;;) { IF: if (gt <= 156) {

var stA1 = lcA0.getDetailComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, lcA1);
    }
    X_164: for (;;) { IF: if (gt <= 164) {
stA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_detailComponentDefinition'] = stA1;
var stA0 = lcA2;if ((lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_tagItemComponentDefinition']) !== null) { gt = 179; break IF; }
var stA1 = null;{ gt = 203; break IF; }
    }
    X_179: for (;;) { IF: if (gt <= 179) {

if ((lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_tagItemComponentDefinition']) !== (c._TYPE())) { gt = 195; break IF; }
var stA1 = c._TYPE();{ gt = 203; break IF; }
    }
    X_195: for (;;) { IF: if (gt <= 195) {

var stA1 = lcA0.getTagItemComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, lcA1);
    }
    X_203: for (;;) { IF: if (gt <= 203) {
stA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_tagItemComponentDefinition'] = stA1;
var stA0 = lcA2;if ((lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_shareItemComponentDefinition']) !== null) { gt = 218; break IF; }
var stA1 = null;{ gt = 242; break IF; }
    }
    X_218: for (;;) { IF: if (gt <= 218) {

if ((lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_shareItemComponentDefinition']) !== (c._TYPE())) { gt = 234; break IF; }
var stA1 = c._TYPE();{ gt = 242; break IF; }
    }
    X_234: for (;;) { IF: if (gt <= 234) {

var stA1 = lcA0.getShareItemComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, lcA1);
    }
    X_242: for (;;) { IF: if (gt <= 242) {
stA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_shareItemComponentDefinition'] = stA1;
var stA0 = lcA2;if ((lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_relatedItemComponentDefinition']) !== null) { gt = 257; break IF; }
var stA1 = null;{ gt = 281; break IF; }
    }
    X_257: for (;;) { IF: if (gt <= 257) {

if ((lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_relatedItemComponentDefinition']) !== (c._TYPE())) { gt = 273; break IF; }
var stA1 = c._TYPE();{ gt = 281; break IF; }
    }
    X_273: for (;;) { IF: if (gt <= 273) {

var stA1 = lcA0.getRelatedItemComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, lcA1);
    }
    X_281: for (;;) { IF: if (gt <= 281) {
stA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_relatedItemComponentDefinition'] = stA1;
var stA0 = lcA2;if ((lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_searchBoxComponentDefinition']) !== null) { gt = 296; break IF; }
var stA1 = null;{ gt = 320; break IF; }
    }
    X_296: for (;;) { IF: if (gt <= 296) {

if ((lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_searchBoxComponentDefinition']) !== (c._TYPE())) { gt = 312; break IF; }
var stA1 = c._TYPE();{ gt = 320; break IF; }
    }
    X_312: for (;;) { IF: if (gt <= 312) {

var stA1 = lcA0.getSearchBoxComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, lcA1);
    }
    X_320: for (;;) { IF: if (gt <= 320) {
stA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_searchBoxComponentDefinition'] = stA1;
return lcA2;

    }
}}}}}}}}}}}}}}}}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.applyBindings__Lio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_2 = function() {
  var  lcA0 = this;
invoker.applyBindings__V(lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_proto']);
return lcA0;

};
c['applyBindings__Lio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_2'] = m;

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

var stI0 = lcA1 != null && lcA1['$instOf_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView'] ? 1 : 0;
if ((stI0) != 0) { gt = 16; break IF; }
return 0;
    }
    X_16: for (;;) { IF: if (gt <= 16) {

if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.actionmenu.ActionMenuView');
var lcA2 = lcA1;
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_instance'], lcA2['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_instance']);
if ((stI0) != 0) { gt = 40; break IF; }
return 0;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_designerMode']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_designerMode']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 65; break IF; }
return 0;
    }
    X_65: for (;;) { IF: if (gt <= 65) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_configuration']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_configuration']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 92; break IF; }
return 0;
    }
    X_92: for (;;) { IF: if (gt <= 92) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_viewType'], lcA2['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_viewType']);
if ((stI0) != 0) { gt = 111; break IF; }
return 0;
    }
    X_111: for (;;) { IF: if (gt <= 111) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_selectedItemId'], lcA2['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_selectedItemId']);
if ((stI0) != 0) { gt = 130; break IF; }
return 0;
    }
    X_130: for (;;) { IF: if (gt <= 130) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_selectedItemName'], lcA2['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_selectedItemName']);
if ((stI0) != 0) { gt = 149; break IF; }
return 0;
    }
    X_149: for (;;) { IF: if (gt <= 149) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_selectedItemType'], lcA2['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_selectedItemType']);
if ((stI0) != 0) { gt = 168; break IF; }
return 0;
    }
    X_168: for (;;) { IF: if (gt <= 168) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_maximumPermission'], lcA2['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_maximumPermission']);
if ((stI0) != 0) { gt = 187; break IF; }
return 0;
    }
    X_187: for (;;) { IF: if (gt <= 187) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_businessModelName'], lcA2['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_businessModelName']);
if ((stI0) != 0) { gt = 206; break IF; }
return 0;
    }
    X_206: for (;;) { IF: if (gt <= 206) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_visible']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_visible']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 231; break IF; }
return 0;
    }
    X_231: for (;;) { IF: if (gt <= 231) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_isFromList']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_isFromList']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 256; break IF; }
return 0;
    }
    X_256: for (;;) { IF: if (gt <= 256) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_detailComponentDefinition']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_detailComponentDefinition']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 283; break IF; }
return 0;
    }
    X_283: for (;;) { IF: if (gt <= 283) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_tagItemComponentDefinition']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_tagItemComponentDefinition']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 310; break IF; }
return 0;
    }
    X_310: for (;;) { IF: if (gt <= 310) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_shareItemComponentDefinition']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_shareItemComponentDefinition']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 337; break IF; }
return 0;
    }
    X_337: for (;;) { IF: if (gt <= 337) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_relatedItemComponentDefinition']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_relatedItemComponentDefinition']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 364; break IF; }
return 0;
    }
    X_364: for (;;) { IF: if (gt <= 364) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_searchBoxComponentDefinition']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_searchBoxComponentDefinition']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 391; break IF; }
return 0;
    }
    X_391: for (;;) { IF: if (gt <= 391) {

return 1;

    }
}}}}}}}}}}}}}}}}}}}
};
c['equals__ZLjava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.hashCode__I = function() {
  var  lcA0 = this;
var stA0 = invoker.getName__Ljava_lang_String_2(c.constructor.$class);
var stI0 = invoker.hashCode__I(stA0);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_instance'], lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_designerMode']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_configuration']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_viewType'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_selectedItemId'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_selectedItemName'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_selectedItemType'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_maximumPermission'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_businessModelName'], lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_visible']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_isFromList']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_detailComponentDefinition']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_tagItemComponentDefinition']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_shareItemComponentDefinition']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_relatedItemComponentDefinition']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_searchBoxComponentDefinition']);
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
var stA0 = lcA0.clone__Lio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_2();
return stA0;

};
c['clone__Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.access$100__Lio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView$Html4JavaType_2 = function() {
return c._TYPE();

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_2 = function(lcA0) {
return lcA0['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_proto'];

};
    m.access = 4104;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView$1_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2.call(lcA0, lcA1, lcA2);
return;

};
    m.access = 4096;
    m.cls = CLS;
    m = c.access$400__Lio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_2Lio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_2Lnet_java_html_BrwsrCtx_2 = function(lcA0, lcA1) {
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_2Lnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
return stA0;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView$Html4JavaType;
(refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView$Html4JavaType || (refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView$Html4JavaType = io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView$Html4JavaType(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView$1_2.call(stA0, null);
c._TYPE(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_actionmenu_ActionMenuViewfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView', { value : true });
      vm.java_lang_Cloneable(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_actionmenu_ActionMenuViewfillInstOf });
    io_cloudoffice_platform_cockpit_actionmenu_ActionMenuViewfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/actionmenu/ActionMenuView';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.java_lang_Cloneable(false).constructor.$class
    ]; };
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent;
    var refs_java_lang_Boolean;
    var refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration;
    var refs_net_java_html_json_Models;
    var refs_io_cloudoffice_platform_cockpit_api_ComponentDef;
    var refs_net_java_html_BrwsrCtx;
    var refs_java_lang_StringBuilder;
    var refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView$Html4JavaType;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_proto'] = null;
    this['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_instance'] = null;
    this['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_designerMode'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_configuration'] = null;
    this['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_viewType'] = null;
    this['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_selectedItemId'] = null;
    this['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_selectedItemName'] = null;
    this['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_selectedItemType'] = null;
    this['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_maximumPermission'] = null;
    this['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_businessModelName'] = null;
    this['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_visible'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_isFromList'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_detailComponentDefinition'] = null;
    this['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_tagItemComponentDefinition'] = null;
    this['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_shareItemComponentDefinition'] = null;
    this['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_relatedItemComponentDefinition'] = null;
    this['fld_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_prop_searchBoxComponentDefinition'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView = registerClass(exports,'io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView',io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView);


function io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView$Html4JavaType() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView$Html4JavaType;
  if (!CLS.$class) {
    var pp = vm.org_netbeans_html_json_spi_Proto$Type(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_org_netbeans_html_json_spi_Proto$Type || (refs_org_netbeans_html_json_spi_Proto$Type = vm.org_netbeans_html_json_spi_Proto$Type(false))).constructor['cons__VLjava_lang_Class_2Ljava_lang_Class_2II'].call(lcA0, (refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView || (refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView = io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView(false))).constructor.$class, (refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent || (refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent = io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent(false))).constructor.$class, (16), (16));
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"instance", 0, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"designerMode", 1, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"configuration", 2, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"viewType", 3, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"selectedItemId", 4, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"selectedItemName", 5, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"selectedItemType", (6), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"maximumPermission", (7), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"businessModelName", (8), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"visible", (9), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"isFromList", (10), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"detailComponentDefinition", (11), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"tagItemComponentDefinition", (12), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"shareItemComponentDefinition", (13), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"relatedItemComponentDefinition", (14), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"searchBoxComponentDefinition", (15), 0, 0);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"openConfig", 0);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"closeConfigurationPanel", 1);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"save", 2);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"resetConfiguration", 3);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"showTagItem", 4);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"showShareItem", 5);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"showRelatedItem", (6));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"showItemDetailView", (7));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"loadDetail", (8));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"showActionMenu", (9));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"closeActionMenu", (10));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"closeAllActionMenu", (11));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"closeTagItem", (12));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"closeShareItem", (13));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"closeRelatedItem", (14));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"processActionMenu", (15));
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.setValue__VLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0:{ gt = 80; break IF; }
  case 1:{ gt = 97; break IF; }
  case 2:{ gt = 117; break IF; }
  case 3:{ gt = 134; break IF; }
  case 4:{ gt = 151; break IF; }
  case 5:{ gt = 168; break IF; }
  case 6:{ gt = 185; break IF; }
  case 7:{ gt = 202; break IF; }
  case 8:{ gt = 219; break IF; }
  case 9:{ gt = 236; break IF; }
  case 10:{ gt = 256; break IF; }
  case 11:{ gt = 276; break IF; }
  case 12:{ gt = 293; break IF; }
  case 13:{ gt = 310; break IF; }
  case 14:{ gt = 327; break IF; }
  case 15:{ gt = 344; break IF; }
  default: { gt = 361; break IF; }
}
    }
    X_80: for (;;) { IF: if (gt <= 80) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView || (refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView = io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView(false))).access$100__Lio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setInstance__VLjava_lang_String_2(stA1);
return;
    }
    X_97: for (;;) { IF: if (gt <= 97) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView || (refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView = io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView(false))).access$100__Lio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setDesignerMode__VZ(stI1);
return;
    }
    X_117: for (;;) { IF: if (gt <= 117) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView || (refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView = io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView(false))).access$100__Lio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration || (refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration = io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.actionmenu.ActionMenuConfiguration');
stA0.setConfiguration__VLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_2(stA1);
return;
    }
    X_134: for (;;) { IF: if (gt <= 134) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView || (refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView = io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView(false))).access$100__Lio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setViewType__VLjava_lang_String_2(stA1);
return;
    }
    X_151: for (;;) { IF: if (gt <= 151) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView || (refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView = io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView(false))).access$100__Lio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setSelectedItemId__VLjava_lang_String_2(stA1);
return;
    }
    X_168: for (;;) { IF: if (gt <= 168) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView || (refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView = io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView(false))).access$100__Lio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setSelectedItemName__VLjava_lang_String_2(stA1);
return;
    }
    X_185: for (;;) { IF: if (gt <= 185) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView || (refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView = io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView(false))).access$100__Lio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setSelectedItemType__VLjava_lang_String_2(stA1);
return;
    }
    X_202: for (;;) { IF: if (gt <= 202) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView || (refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView = io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView(false))).access$100__Lio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setMaximumPermission__VLjava_lang_String_2(stA1);
return;
    }
    X_219: for (;;) { IF: if (gt <= 219) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView || (refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView = io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView(false))).access$100__Lio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setBusinessModelName__VLjava_lang_String_2(stA1);
return;
    }
    X_236: for (;;) { IF: if (gt <= 236) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView || (refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView = io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView(false))).access$100__Lio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setVisible__VZ(stI1);
return;
    }
    X_256: for (;;) { IF: if (gt <= 256) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView || (refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView = io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView(false))).access$100__Lio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setIsFromList__VZ(stI1);
return;
    }
    X_276: for (;;) { IF: if (gt <= 276) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView || (refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView = io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView(false))).access$100__Lio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_api_ComponentDef']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.api.ComponentDef');
stA0.setDetailComponentDefinition__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2(stA1);
return;
    }
    X_293: for (;;) { IF: if (gt <= 293) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView || (refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView = io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView(false))).access$100__Lio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_api_ComponentDef']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.api.ComponentDef');
stA0.setTagItemComponentDefinition__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2(stA1);
return;
    }
    X_310: for (;;) { IF: if (gt <= 310) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView || (refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView = io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView(false))).access$100__Lio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_api_ComponentDef']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.api.ComponentDef');
stA0.setShareItemComponentDefinition__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2(stA1);
return;
    }
    X_327: for (;;) { IF: if (gt <= 327) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView || (refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView = io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView(false))).access$100__Lio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_api_ComponentDef']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.api.ComponentDef');
stA0.setRelatedItemComponentDefinition__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2(stA1);
return;
    }
    X_344: for (;;) { IF: if (gt <= 344) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView || (refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView = io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView(false))).access$100__Lio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_api_ComponentDef']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.api.ComponentDef');
stA0.setSearchBoxComponentDefinition__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2(stA1);
return;
    }
    X_361: for (;;) { IF: if (gt <= 361) {
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

    }
}}}}}}}}}}}}}}}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_2I = function(lcA1, lcI2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0:{ gt = 80; break IF; }
  case 1:{ gt = 85; break IF; }
  case 2:{ gt = 93; break IF; }
  case 3:{ gt = 98; break IF; }
  case 4:{ gt = 103; break IF; }
  case 5:{ gt = 108; break IF; }
  case 6:{ gt = 113; break IF; }
  case 7:{ gt = 118; break IF; }
  case 8:{ gt = 123; break IF; }
  case 9:{ gt = 128; break IF; }
  case 10:{ gt = 136; break IF; }
  case 11:{ gt = 144; break IF; }
  case 12:{ gt = 149; break IF; }
  case 13:{ gt = 154; break IF; }
  case 14:{ gt = 159; break IF; }
  case 15:{ gt = 164; break IF; }
  default: { gt = 169; break IF; }
}
    }
    X_80: for (;;) { IF: if (gt <= 80) {

var stA0 = lcA1.getInstance__Ljava_lang_String_2();
return stA0;
    }
    X_85: for (;;) { IF: if (gt <= 85) {

var stI0 = lcA1.isDesignerMode__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_93: for (;;) { IF: if (gt <= 93) {

var stA0 = lcA1.getConfiguration__Lio_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration_2();
return stA0;
    }
    X_98: for (;;) { IF: if (gt <= 98) {

var stA0 = lcA1.getViewType__Ljava_lang_String_2();
return stA0;
    }
    X_103: for (;;) { IF: if (gt <= 103) {

var stA0 = lcA1.getSelectedItemId__Ljava_lang_String_2();
return stA0;
    }
    X_108: for (;;) { IF: if (gt <= 108) {

var stA0 = lcA1.getSelectedItemName__Ljava_lang_String_2();
return stA0;
    }
    X_113: for (;;) { IF: if (gt <= 113) {

var stA0 = lcA1.getSelectedItemType__Ljava_lang_String_2();
return stA0;
    }
    X_118: for (;;) { IF: if (gt <= 118) {

var stA0 = lcA1.getMaximumPermission__Ljava_lang_String_2();
return stA0;
    }
    X_123: for (;;) { IF: if (gt <= 123) {

var stA0 = lcA1.getBusinessModelName__Ljava_lang_String_2();
return stA0;
    }
    X_128: for (;;) { IF: if (gt <= 128) {

var stI0 = lcA1.isVisible__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_136: for (;;) { IF: if (gt <= 136) {

var stI0 = lcA1.isIsFromList__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_144: for (;;) { IF: if (gt <= 144) {

var stA0 = lcA1.getDetailComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
return stA0;
    }
    X_149: for (;;) { IF: if (gt <= 149) {

var stA0 = lcA1.getTagItemComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
return stA0;
    }
    X_154: for (;;) { IF: if (gt <= 154) {

var stA0 = lcA1.getShareItemComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
return stA0;
    }
    X_159: for (;;) { IF: if (gt <= 159) {

var stA0 = lcA1.getRelatedItemComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
return stA0;
    }
    X_164: for (;;) { IF: if (gt <= 164) {

var stA0 = lcA1.getSearchBoxComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
return stA0;
    }
    X_169: for (;;) { IF: if (gt <= 169) {
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

    }
}}}}}}}}}}}}}}}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.call__VLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0:{ gt = 80; break IF; }
  case 1:{ gt = 85; break IF; }
  case 2:{ gt = 90; break IF; }
  case 3:{ gt = 95; break IF; }
  case 4:{ gt = 100; break IF; }
  case 5:{ gt = 105; break IF; }
  case 6:{ gt = 110; break IF; }
  case 7:{ gt = 115; break IF; }
  case 8:{ gt = 120; break IF; }
  case 9:{ gt = 125; break IF; }
  case 10:{ gt = 130; break IF; }
  case 11:{ gt = 135; break IF; }
  case 12:{ gt = 140; break IF; }
  case 13:{ gt = 145; break IF; }
  case 14:{ gt = 150; break IF; }
  case 15:{ gt = 155; break IF; }
  default: { gt = 169; break IF; }
}
    }
    X_80: for (;;) { IF: if (gt <= 80) {

(refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent || (refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent = io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent(false))).openConfig__VLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_2(lcA1);
return;
    }
    X_85: for (;;) { IF: if (gt <= 85) {

(refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent || (refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent = io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent(false))).closeConfigurationPanel__VLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_2(lcA1);
return;
    }
    X_90: for (;;) { IF: if (gt <= 90) {

(refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent || (refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent = io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent(false))).save__VLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_2(lcA1);
return;
    }
    X_95: for (;;) { IF: if (gt <= 95) {

(refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent || (refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent = io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent(false))).resetConfiguration__VLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_2(lcA1);
return;
    }
    X_100: for (;;) { IF: if (gt <= 100) {

(refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent || (refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent = io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent(false))).showTagItem__VLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_2(lcA1);
return;
    }
    X_105: for (;;) { IF: if (gt <= 105) {

(refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent || (refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent = io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent(false))).showShareItem__VLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_2(lcA1);
return;
    }
    X_110: for (;;) { IF: if (gt <= 110) {

(refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent || (refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent = io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent(false))).showRelatedItem__VLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_2(lcA1);
return;
    }
    X_115: for (;;) { IF: if (gt <= 115) {

(refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent || (refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent = io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent(false))).showItemDetailView__VLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_2(lcA1);
return;
    }
    X_120: for (;;) { IF: if (gt <= 120) {

(refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent || (refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent = io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent(false))).loadDetail__VLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_2(lcA1);
return;
    }
    X_125: for (;;) { IF: if (gt <= 125) {

(refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent || (refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent = io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent(false))).showActionMenu__VLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_2(lcA1);
return;
    }
    X_130: for (;;) { IF: if (gt <= 130) {

(refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent || (refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent = io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent(false))).closeActionMenu__VLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_2(lcA1);
return;
    }
    X_135: for (;;) { IF: if (gt <= 135) {

(refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent || (refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent = io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent(false))).closeAllActionMenu__VLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_2(lcA1);
return;
    }
    X_140: for (;;) { IF: if (gt <= 140) {

(refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent || (refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent = io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent(false))).closeTagItem__VLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_2(lcA1);
return;
    }
    X_145: for (;;) { IF: if (gt <= 145) {

(refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent || (refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent = io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent(false))).closeShareItem__VLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_2(lcA1);
return;
    }
    X_150: for (;;) { IF: if (gt <= 150) {

(refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent || (refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent = io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent(false))).closeRelatedItem__VLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_2(lcA1);
return;
    }
    X_155: for (;;) { IF: if (gt <= 155) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView || (refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView = io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_2(lcA1);
var stA1 = invoker.toString__Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_String_2(stA1,lcA3, null);
(refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent || (refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent = io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent(false))).processActionMenu__VLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_2Ljava_lang_String_2(stA0, stA1);
return;
    }
    X_169: for (;;) { IF: if (gt <= 169) {
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

    }
}}}}}}}}}}}}}}}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.actionmenu.ActionMenuView');
var stA0 = (refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView || (refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView = io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_2(lcA1);
return stA0;

};
c['protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.onChange__VLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
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
    m = c.read__Lio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = new io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView;
(refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView || (refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView = io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView(false))).constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView$1_2.call(stA0, lcA1, lcA2, null);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.cloneTo__Lio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_2Lio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = (refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView || (refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView = io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView(false))).access$400__Lio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_2Lio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.actionmenu.ActionMenuView');
lcA0.onMessage__VLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_2IILjava_lang_Object_2_3Ljava_lang_Object_2(lcA1, lcI2, lcI3, lcA4, lcA5);
return;

};
c['onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.onChange__VLjava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.actionmenu.ActionMenuView');
lcA0.onChange__VLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_2I(lcA1, lcI2);
return;

};
c['onChange__VLjava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = lcA0.read__Lio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2(lcA1, lcA2);
return stA0;

};
c['read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.actionmenu.ActionMenuView');
var stA0 = lcA0.cloneTo__Lio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_2Lio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
c['cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.actionmenu.ActionMenuView');
lcA0.call__VLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_2ILjava_lang_Object_2Ljava_lang_Object_2(lcA1, lcI2, lcA3, lcA4);
return;

};
c['call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Ljava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.actionmenu.ActionMenuView');
var stA0 = lcA0.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_2I(lcA1, lcI2);
return stA0;

};
c['getValue__Ljava_lang_Object_2Ljava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.setValue__VLjava_lang_Object_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.actionmenu.ActionMenuView');
lcA0.setValue__VLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView_2ILjava_lang_Object_2(lcA1, lcI2, lcA3);
return;

};
c['setValue__VLjava_lang_Object_2ILjava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_actionmenu_ActionMenuView$1_2 = function(lcA1) {
  var  lcA0 = this;
c.constructor.cons__V.call(lcA0);
return;

};
    m.access = 4096;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView$Html4JavaTypefillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView$Html4JavaType', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView$Html4JavaTypefillInstOf });
    io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView$Html4JavaTypefillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/actionmenu/ActionMenuView$Html4JavaType';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView;
    var refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuComponent;
    var refs_org_netbeans_html_json_spi_Proto$Type;
    var refs_java_lang_String;
    var refs_java_lang_Boolean;
    var refs_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration;
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
vm.io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView$Html4JavaType = io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView$Html4JavaType;

vm.java_lang_Boolean = link('java/lang/Boolean', function(f) { vm.java_lang_Boolean =  f; });
vm.io_cloudoffice_platform_cockpit_api_AbstractComponent = link('io/cloudoffice/platform/cockpit/api/AbstractComponent', function(f) { vm.io_cloudoffice_platform_cockpit_api_AbstractComponent =  f; });
vm.io_cloudoffice_platform_cockpit_api_Logger = link('io/cloudoffice/platform/cockpit/api/Logger', function(f) { vm.io_cloudoffice_platform_cockpit_api_Logger =  f; });

function io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration$1() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration$1', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration$1fillInstOf });
    io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/actionmenu/ActionMenuConfiguration$1';
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
vm.io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration$1 = io_cloudoffice_platform_cockpit_actionmenu_ActionMenuConfiguration$1;


function io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView$1() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView$1', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView$1fillInstOf });
    io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/actionmenu/ActionMenuView$1';
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
vm.io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView$1 = io_cloudoffice_platform_cockpit_actionmenu_ActionMenuView$1;

  invoker.getName__Ljava_lang_String_2 = function(target) {
    return target['getName__Ljava_lang_String_2']();
  };
  invoker.setDefaultViewName__VLjava_lang_String_2 = function(target, p1) {
    return target['setDefaultViewName__VLjava_lang_String_2'](p1);
  };
  invoker.setDefaultConfigViewName__VLjava_lang_String_2 = function(target, p1) {
    return target['setDefaultConfigViewName__VLjava_lang_String_2'](p1);
  };
  invoker.attachListener__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_EventListener_2 = function(target, p1, p2) {
    return target['attachListener__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_EventListener_2'](p1,p2);
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
  invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2 = function(target, p1, p2) {
    return target['addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2'](p1,p2);
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
  invoker.equalsIgnoreCase__ZLjava_lang_String_2 = function(target, p1) {
    return target['equalsIgnoreCase__ZLjava_lang_String_2'](p1);
  };
  invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Z = function(target, p1, p2) {
    return target['addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Z'](p1,p2);
  };
  invoker.getBoolean__ZLjava_lang_String_2 = function(target, p1) {
    return target['getBoolean__ZLjava_lang_String_2'](p1);
  };
  invoker.getPackets__Ljava_util_List_2 = function(target) {
    return target['getPackets__Ljava_util_List_2']();
  };
  invoker.get__Ljava_lang_Object_2I = function(target, p1) {
    return target['get__Ljava_lang_Object_2I'](p1);
  };
  invoker.invoke__VLjava_lang_String_2 = function(target, p1) {
    return target['invoke__VLjava_lang_String_2'](p1);
  };
  invoker.isEmpty__Z = function(target) {
    return target['isEmpty__Z']();
  };
  invoker.invoke__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_MapBuilder_2 = function(target, p1, p2) {
    return target['invoke__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_MapBuilder_2'](p1,p2);
  };
  invoker.setView__VLjava_lang_Object_2 = function(target, p1) {
    return target['setView__VLjava_lang_Object_2'](p1);
  };
  invoker.getDefaultViewName__Ljava_lang_String_2 = function(target) {
    return target['getDefaultViewName__Ljava_lang_String_2']();
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
  invoker.getContext__Lnet_java_html_BrwsrCtx_2 = function(target) {
    return target['getContext__Lnet_java_html_BrwsrCtx_2']();
  };
  invoker.createProto__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2 = function(target, p1, p2) {
    return target['createProto__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](p1,p2);
  };
  invoker.extract__VLjava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Object_2 = function(target, p1, p2, p3) {
    return target['extract__VLjava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Object_2'](p1,p2,p3);
  };
  invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2 = function(target, p1, p2) {
    return target['read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2'](p1,p2);
  };
  invoker.append__Ljava_lang_StringBuilder_2C = function(target, p1) {
    return target['append__Ljava_lang_StringBuilder_2C'](p1);
  };
  invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2 = function(target, p1) {
    return target['append__Ljava_lang_StringBuilder_2Ljava_lang_String_2'](p1);
  };
  invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2 = function(target, p1) {
    return target['toJSON__Ljava_lang_String_2Ljava_lang_Object_2'](p1);
  };
  invoker.toString__Ljava_lang_String_2 = function(target) {
    return target['toString__Ljava_lang_String_2']();
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
  invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2 = function(target, p1) {
    return target['boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2'](p1);
  };
  invoker.booleanValue__Z = function(target) {
    return target['booleanValue__Z']();
  };
  invoker.registerFunction__VLjava_lang_String_2I = function(target, p1, p2) {
    return target['registerFunction__VLjava_lang_String_2I'](p1,p2);
  };
  invoker.toString__Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_String_2 = function(target, p1, p2) {
    return target['toString__Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_String_2'](p1,p2);
  };
  exports['registerResource']('META-INF/MANIFEST.MF', 'TWFuaWZlc3QtVmVyc2lvbjogMS4wDQpCbmQtTGFzdE1vZGlmaWVkOiAxNTk3NzY0MDkxMjcxDQpCdWlsZC1KZGs6IDEuOC4wXzEzMQ0KQnVpbHQtQnk6IGV1c2lhDQpCdW5kbGUtTWFuaWZlc3RWZXJzaW9uOiAyDQpCdW5kbGUtTmFtZTogR2FkZ2V0IEFjdGlvbiBNZW51DQpCdW5kbGUtU3ltYm9saWNOYW1lOiBpby5jbG91ZG9mZmljZS5wbGF0Zm9ybS5jb2NrcGl0LmFjdGlvbm1lbnUNCkJ1bmRsZS1WZXJzaW9uOiAxLjEuMA0KQ3JlYXRlZC1CeTogQXBhY2hlIE1hdmVuIEJ1bmRsZSBQbHVnaW4NCkV4cG9ydC1QYWNrYWdlOiBpby5jbG91ZG9mZmljZS5wbGF0Zm9ybS5jb2NrcGl0LmFjdGlvbm1lbnU7dXNlczo9ImlvLmNsbw0KIHVkb2ZmaWNlLnBsYXRmb3JtLmNvY2twaXQuYXBpIjt2ZXJzaW9uPSIxLjEuMCINCkltcG9ydC1QYWNrYWdlOiBpby5jbG91ZG9mZmljZS5wbGF0Zm9ybS5jb2NrcGl0LmFwaTt2ZXJzaW9uPSJbMS4xLDIpIixpbw0KIC5jbG91ZG9mZmljZS5wbGF0Zm9ybS5jb2NrcGl0LmpzO3ZlcnNpb249IlsxLjEsMikiLG5ldC5qYXZhLmh0bWw7dmVyc2lvDQogbj0iWzEuNiwyKSIsbmV0LmphdmEuaHRtbC5qc29uO3ZlcnNpb249IlsxLjYsMikiLG9yZy5qc29uO3ZlcnNpb249IlsyMDENCiA4MDgxMy4wLDIwMTgwODE0KSIsb3JnLm5ldGJlYW5zLmh0bWwuanNvbi5zcGk7dmVyc2lvbj0iWzEuNiwyKSINClRvb2w6IEJuZC0yLjEuMC4yMDEzMDQyNi0xMjIyMTMNCg==');
});