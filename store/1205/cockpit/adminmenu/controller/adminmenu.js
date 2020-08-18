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

function io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$1() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$view = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$1_val$view'] = v; return this['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$1_val$view']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$1_val$view'] = lcA1;
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.handle__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

(refs_io_cloudoffice_platform_cockpit_api_Logger || (refs_io_cloudoffice_platform_cockpit_api_Logger = vm.io_cloudoffice_platform_cockpit_api_Logger(false)))['log__VLjava_lang_String_2']("Save Callback");
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$1_val$view'].getApps__Ljava_util_List_2();
invoker.clear__V(stA0);
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$1_val$view'].getConfiguration__Lio_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration_2();
var stA0 = stA0.getApps__Ljava_util_List_2();
var lcA2 = stA0;
var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA2);
var lcA3 = stA0;
    }
    X_35: for (;;) { IF: if (gt <= 35) {

var stI0 = invoker.hasNext__Z(lcA3);
if ((stI0) == 0) { gt = 81; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA3);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_adminmenu_App']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.adminmenu.App');
var lcA4 = stA0;
var stI0 = lcA4.isEnable__Z();
if ((stI0) == 0) { gt = 78; break IF; }
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$1_val$view'].getApps__Ljava_util_List_2();
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,lcA4);
    }
    X_78: for (;;) { IF: if (gt <= 78) {
{ gt = 0; continue X_35; }
    }
    X_81: for (;;) { IF: if (gt <= 81) {

(refs_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent || (refs_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent = io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent(false))).closeConfigurationPanel__VLio_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_2(lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$1_val$view']);
return;

    }
}}}}
};
c['handle__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$1', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_CallBack(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$1fillInstOf });
    io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/adminmenu/AdminMenuComponent$1';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_CallBack(false).constructor.$class
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_Logger;
    var refs_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$1_val$view'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$1 = io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$1;

vm.io_cloudoffice_platform_cockpit_api_CallBack = link('io/cloudoffice/platform/cockpit/api/CallBack', function(f) { vm.io_cloudoffice_platform_cockpit_api_CallBack =  f; });

function io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent;
  if (!CLS.$class) {
    var pp = vm.io_cloudoffice_platform_cockpit_api_AbstractComponent(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = c.getInstance__Lio_cloudoffice_platform_cockpit_api_Component_2Ljava_lang_String_2 = function(lcA0) {
var stA0 = new io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent;
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
var stA0 = lcA0;var stA1 = "loginsuccess";var stA2 = new io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$LoginEventListener;
(refs_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$LoginEventListener || (refs_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$LoginEventListener = io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$LoginEventListener(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent_2.call(stA2, lcA0);
invoker.attachListener__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_EventListener_2(stA0,stA1, stA2);
var stA0 = lcA0;var stA1 = "designermode";var stA2 = new io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$DesignModeListener;
(refs_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$DesignModeListener || (refs_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$DesignModeListener = io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$DesignModeListener(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent_2Lio_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$1_2.call(stA2, lcA0, null);
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
    m = c.toggleAdminMenu__VLio_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = lcA0;var stI1 = lcA0.isShowApps__Z();
if ((stI1) != 0) { gt = 12; break IF; }
var stI1 = 1;{ gt = 13; break IF; }
    }
    X_12: for (;;) { IF: if (gt <= 12) {

var stI1 = 0;    }
    X_13: for (;;) { IF: if (gt <= 13) {
stA0.setShowApps__VZ(stI1);
return;

    }
}}}
};
c['toggleAdminMenu__VLio_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.setComponentName__V = function() {
  var  lcA0 = this;
c['_componentName'].call(lcA0, "adminmenu-component");
return;

};
c['setComponentName__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.bindViewNames__V = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.getName__Ljava_lang_String_2((refs_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView || (refs_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView = io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView(false))).constructor.$class);
invoker.setDefaultViewName__VLjava_lang_String_2(stA0,stA1);
var stA0 = lcA0;var stA1 = invoker.getName__Ljava_lang_String_2((refs_io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration || (refs_io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration = io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration(false))).constructor.$class);
invoker.setDefaultConfigViewName__VLjava_lang_String_2(stA0,stA1);
return;

};
c['bindViewNames__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.openConfig__VLio_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_2 = function(lcA0) {
lcA0.setDesignerMode__VZ(1);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.closeConfigurationPanel__VLio_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_2 = function(lcA0) {
lcA0.setDesignerMode__VZ(0);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.save__VLio_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_2 = function(lcA0) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['_CONFIG']();var stA1 = "adminmenu";var stA2 = lcA0.getInstance__Ljava_lang_String_2();
var stA1 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['configPostEndpoint__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2'](stA1, stA2, "");
var stA2 = lcA0.toString__Ljava_lang_String_2();
var stA3 = new io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$1;
(refs_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$1 || (refs_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$1 = io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$1(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_2.call(stA3, lcA0);
invoker.post__VLjava_lang_String_2Ljava_lang_String_2Lio_cloudoffice_platform_cockpit_api_CallBack_2(stA0,stA1, stA2, stA3);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.resetConfiguration__VLio_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_2 = function(lcA0) {
c.resetConfigurationModelFromJSON__VLio_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_2(lcA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.resetConfigurationModelFromJSON__VLio_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_2 = function(lcA0) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['_CONFIG']();var stA1 = "adminmenu";var stA2 = lcA0.getInstance__Ljava_lang_String_2();
var stA1 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['configFetchEndpoint__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2'](stA1, stA2);
var stA2 = null;var stA3 = new io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$2;
(refs_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$2 || (refs_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$2 = io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$2(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_2.call(stA3, lcA0);
invoker.fetch__VLjava_lang_String_2Ljava_util_Map_2Lio_cloudoffice_platform_cockpit_api_CallBack_2(stA0,stA1, stA2, stA3);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.openApplication__VLio_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_2Lio_cloudoffice_platform_cockpit_adminmenu_App_2 = function(lcA0, lcA1) {
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"AdminMenuManager.openApplication(\"");
var stA1 = lcA1.getAppsUrl__Ljava_lang_String_2();
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"\")");
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
(refs_io_cloudoffice_platform_cockpit_js_VIEW || (refs_io_cloudoffice_platform_cockpit_js_VIEW = vm.io_cloudoffice_platform_cockpit_js_VIEW(false)))['invokeJSFunction__VLjava_lang_String_2'](stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.prepareConfigurationModelFromJSON__VLio_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_2Lio_cloudoffice_platform_cockpit_api_MapBuilder_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = lcA1.getConfiguration__Lio_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration_2();
var lcA3 = stA0;
var stA0 = invoker.getJsonObject__Lorg_json_JSONObject_2Ljava_lang_String_2(lcA2,"configuration");
var lcA4 = stA0;
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_Object_2'](lcA4);
if ((stI0) == 0) { gt = 227; break IF; }
var stA0 = lcA1.getApps__Ljava_util_List_2();
var stI0 = invoker.isEmpty__Z(stA0);
if ((stI0) != 0) { gt = 42; break IF; }
var stA0 = lcA1.getApps__Ljava_util_List_2();
invoker.clear__V(stA0);
    }
    X_42: for (;;) { IF: if (gt <= 42) {

var stA0 = lcA3.getApps__Ljava_util_List_2();
var stI0 = invoker.isEmpty__Z(stA0);
if ((stI0) != 0) { gt = 63; break IF; }
var stA0 = lcA3.getApps__Ljava_util_List_2();
invoker.clear__V(stA0);
    }
    X_63: for (;;) { IF: if (gt <= 63) {

var stA0 = invoker.getJSONArray__Lorg_json_JSONArray_2Ljava_lang_String_2(lcA4,"apps");
var stA0 = invoker.toList__Ljava_util_List_2(stA0);
var lcA5 = stA0;
var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA5);
var lcA6 = stA0;
    }
    X_84: for (;;) { IF: if (gt <= 84) {

var stI0 = invoker.hasNext__Z(lcA6);
if ((stI0) == 0) { gt = 227; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA6);
var lcA7 = stA0;
if (lcA7 !== null && !lcA7['$instOf_java_util_Map']) vm.java_lang_Class(false).castEx(lcA7, 'java.util.Map');
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['query__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_util_Map_2'](lcA7);
var lcA8 = stA0;
var stA0 = new io_cloudoffice_platform_cockpit_adminmenu_App;
(refs_io_cloudoffice_platform_cockpit_adminmenu_App || (refs_io_cloudoffice_platform_cockpit_adminmenu_App = io_cloudoffice_platform_cockpit_adminmenu_App(false))).constructor.cons__V.call(stA0);
var lcA9 = stA0;
var stA0 = lcA9;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA8,"appsId");
stA0.setAppsId__VLjava_lang_String_2(stA1);
var stA0 = lcA9;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA8,"appsName");
stA0.setAppsName__VLjava_lang_String_2(stA1);
var stA0 = lcA9;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA8,"appsIcon");
stA0.setAppsIcon__VLjava_lang_String_2(stA1);
var stA0 = lcA9;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA8,"appsColor");
stA0.setAppsColor__VLjava_lang_String_2(stA1);
var stA0 = lcA9;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA8,"appsUrl");
stA0.setAppsUrl__VLjava_lang_String_2(stA1);
var stI0 = invoker.getBoolean__ZLjava_lang_String_2(lcA8,"enable");
var lcI10 = stI0;
lcA9.setEnable__VZ(lcI10);
var stA0 = lcA1.getApps__Ljava_util_List_2();
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,lcA9);
var stA0 = lcA3.getApps__Ljava_util_List_2();
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,lcA9);
{ gt = 0; continue X_84; }
    }
    X_227: for (;;) { IF: if (gt <= 227) {
return;

    }
}}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.access$100__VLio_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent_2Lio_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_2Lio_cloudoffice_platform_cockpit_api_MapBuilder_2 = function(lcA0, lcA1, lcA2) {
c.prepareConfigurationModelFromJSON__VLio_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_2Lio_cloudoffice_platform_cockpit_api_MapBuilder_2.call(lcA0, lcA1, lcA2);
return;

};
    m.access = 4104;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponentfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponentfillInstOf });
    io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponentfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/adminmenu/AdminMenuComponent';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 33;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_AbstractComponent;
    var refs_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$LoginEventListener;
    var refs_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$DesignModeListener;
    var refs_java_lang_UnsupportedOperationException;
    var refs_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView;
    var refs_io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration;
    var refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration;
    var refs_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$1;
    var refs_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$2;
    var refs_java_lang_StringBuilder;
    var refs_io_cloudoffice_platform_cockpit_js_VIEW;
    var refs_io_cloudoffice_platform_cockpit_api_UtilValidate;
    var refs_io_cloudoffice_platform_cockpit_api_MapBuilder;
    var refs_io_cloudoffice_platform_cockpit_adminmenu_App;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent = registerClass(exports,'io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent',io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent);


function io_cloudoffice_platform_cockpit_adminmenu_App() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_adminmenu_App;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_TYPE'] = null;
  m = c._TYPE = function (v) {  if (arguments.length == 1) CLS['fld_TYPE'] = v; return CLS['fld_TYPE']; };
  m = c._proto = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_adminmenu_App_proto'] = v; return this['fld_io_cloudoffice_platform_cockpit_adminmenu_App_proto']; };
  m = c._prop_appsId = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_adminmenu_App_prop_appsId'] = v; return this['fld_io_cloudoffice_platform_cockpit_adminmenu_App_prop_appsId']; };
  m = c._prop_appsName = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_adminmenu_App_prop_appsName'] = v; return this['fld_io_cloudoffice_platform_cockpit_adminmenu_App_prop_appsName']; };
  m = c._prop_appsIcon = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_adminmenu_App_prop_appsIcon'] = v; return this['fld_io_cloudoffice_platform_cockpit_adminmenu_App_prop_appsIcon']; };
  m = c._prop_appsColor = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_adminmenu_App_prop_appsColor'] = v; return this['fld_io_cloudoffice_platform_cockpit_adminmenu_App_prop_appsColor']; };
  m = c._prop_appsUrl = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_adminmenu_App_prop_appsUrl'] = v; return this['fld_io_cloudoffice_platform_cockpit_adminmenu_App_prop_appsUrl']; };
  m = c._prop_enable = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_adminmenu_App_prop_enable'] = v; return this['fld_io_cloudoffice_platform_cockpit_adminmenu_App_prop_enable']; };
    m = c.modelFor__Ljava_lang_Class_2 = function() {
return (refs_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$AppsModel || (refs_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$AppsModel = io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$AppsModel(false))).constructor.$class;

};
    m.access = 10;
    m.cls = CLS;
    m = c.getAppsId__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_App_proto'],"appsId");
return lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_App_prop_appsId'];

};
c['getAppsId__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setAppsId__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_App_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_App_prop_appsId'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_App_prop_appsId'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_App_proto'],"appsId", lcA2, lcA1);
return;

    }
}}
};
c['setAppsId__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getAppsName__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_App_proto'],"appsName");
return lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_App_prop_appsName'];

};
c['getAppsName__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setAppsName__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_App_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_App_prop_appsName'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_App_prop_appsName'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_App_proto'],"appsName", lcA2, lcA1);
return;

    }
}}
};
c['setAppsName__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getAppsIcon__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_App_proto'],"appsIcon");
return lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_App_prop_appsIcon'];

};
c['getAppsIcon__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setAppsIcon__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_App_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_App_prop_appsIcon'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_App_prop_appsIcon'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_App_proto'],"appsIcon", lcA2, lcA1);
return;

    }
}}
};
c['setAppsIcon__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getAppsColor__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_App_proto'],"appsColor");
return lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_App_prop_appsColor'];

};
c['getAppsColor__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setAppsColor__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_App_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_App_prop_appsColor'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_App_prop_appsColor'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_App_proto'],"appsColor", lcA2, lcA1);
return;

    }
}}
};
c['setAppsColor__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getAppsUrl__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_App_proto'],"appsUrl");
return lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_App_prop_appsUrl'];

};
c['getAppsUrl__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setAppsUrl__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_App_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_App_prop_appsUrl'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_App_prop_appsUrl'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_App_proto'],"appsUrl", lcA2, lcA1);
return;

    }
}}
};
c['setAppsUrl__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isEnable__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_App_proto'],"enable");
return lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_App_prop_enable'];

};
c['isEnable__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setEnable__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_App_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_App_prop_enable']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_App_prop_enable'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_App_proto'];var stA1 = "enable";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2, stA3);
return;

    }
}}
};
c['setEnable__VZ'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.createProto__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2(c._TYPE(),lcA0, lcA1);
stA0['fld_io_cloudoffice_platform_cockpit_adminmenu_App_proto'] = stA1;
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
    m = CLS.cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Z = function(lcA1, lcA2, lcA3, lcA4, lcA5, lcI6) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = (refs_net_java_html_BrwsrCtx || (refs_net_java_html_BrwsrCtx = vm.net_java_html_BrwsrCtx(false)))['findDefault__Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'](c.constructor.$class);
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, stA1);
lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_App_prop_appsId'] = lcA1;
lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_App_prop_appsName'] = lcA2;
lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_App_prop_appsIcon'] = lcA3;
lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_App_prop_appsColor'] = lcA4;
lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_App_prop_appsUrl'] = lcA5;
lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_App_prop_enable'] = lcI6;
return;

};
CLS['cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, (6));
var lcA3 = stA0;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_App_proto'];var stA1 = lcA2;var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, (6));
Array.at(stA2, 0, "appsId");
Array.at(stA2, 1, "appsName");
Array.at(stA2, 2, "appsIcon");
Array.at(stA2, 3, "appsColor");
Array.at(stA2, 4, "appsUrl");
Array.at(stA2, 5, "enable");
invoker.extract__VLjava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Object_2(stA0,stA1, stA2, lcA3);
if ((lcA3[0] || Array.at(lcA3, 0)) !== null && !(lcA3[0] || Array.at(lcA3, 0))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[0] || Array.at(lcA3, 0)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_App_prop_appsId'] = (lcA3[0] || Array.at(lcA3, 0));
if ((lcA3[1] || Array.at(lcA3, 1)) !== null && !(lcA3[1] || Array.at(lcA3, 1))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[1] || Array.at(lcA3, 1)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_App_prop_appsName'] = (lcA3[1] || Array.at(lcA3, 1));
if ((lcA3[2] || Array.at(lcA3, 2)) !== null && !(lcA3[2] || Array.at(lcA3, 2))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[2] || Array.at(lcA3, 2)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_App_prop_appsIcon'] = (lcA3[2] || Array.at(lcA3, 2));
if ((lcA3[3] || Array.at(lcA3, 3)) !== null && !(lcA3[3] || Array.at(lcA3, 3))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[3] || Array.at(lcA3, 3)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_App_prop_appsColor'] = (lcA3[3] || Array.at(lcA3, 3));
if ((lcA3[4] || Array.at(lcA3, 4)) !== null && !(lcA3[4] || Array.at(lcA3, 4))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[4] || Array.at(lcA3, 4)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_App_prop_appsUrl'] = (lcA3[4] || Array.at(lcA3, 4));
var stA0 = lcA0;if (((lcA3[5] || Array.at(lcA3, 5))) !== null) { gt = 116; break IF; }
var stI1 = 0;{ gt = 128; break IF; }
    }
    X_116: for (;;) { IF: if (gt <= 116) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[5] || Array.at(lcA3, 5)));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_128: for (;;) { IF: if (gt <= 128) {
stA0['fld_io_cloudoffice_platform_cockpit_adminmenu_App_prop_enable'] = stI1;
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
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"appsId");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getAppsId__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"appsName");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getAppsName__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"appsIcon");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getAppsIcon__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"appsColor");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getAppsColor__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"appsUrl");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getAppsUrl__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"enable");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stI2 = lcA0.isEnable__Z();
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
    m = c.clone__Lio_cloudoffice_platform_cockpit_adminmenu_App_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_App_proto']);
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_adminmenu_App_2Lnet_java_html_BrwsrCtx_2.call(stA0, stA1);
return stA0;

};
c['clone__Lio_cloudoffice_platform_cockpit_adminmenu_App_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Lio_cloudoffice_platform_cockpit_adminmenu_App_2Lnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = new io_cloudoffice_platform_cockpit_adminmenu_App;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, lcA1);
var lcA2 = stA0;
var stA0 = lcA2;var stA1 = lcA0.getAppsId__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_adminmenu_App_prop_appsId'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getAppsName__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_adminmenu_App_prop_appsName'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getAppsIcon__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_adminmenu_App_prop_appsIcon'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getAppsColor__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_adminmenu_App_prop_appsColor'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getAppsUrl__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_adminmenu_App_prop_appsUrl'] = stA1;
var stA0 = lcA2;var stI1 = lcA0.isEnable__Z();
stA0['fld_io_cloudoffice_platform_cockpit_adminmenu_App_prop_enable'] = stI1;
return lcA2;

};
    m.access = 2;
    m.cls = CLS;
    m = c.applyBindings__Lio_cloudoffice_platform_cockpit_adminmenu_App_2 = function() {
  var  lcA0 = this;
invoker.applyBindings__V(lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_App_proto']);
return lcA0;

};
c['applyBindings__Lio_cloudoffice_platform_cockpit_adminmenu_App_2'] = m;

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

var stI0 = lcA1 != null && lcA1['$instOf_io_cloudoffice_platform_cockpit_adminmenu_App'] ? 1 : 0;
if ((stI0) != 0) { gt = 16; break IF; }
return 0;
    }
    X_16: for (;;) { IF: if (gt <= 16) {

if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_adminmenu_App']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.adminmenu.App');
var lcA2 = lcA1;
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_App_prop_appsId'], lcA2['fld_io_cloudoffice_platform_cockpit_adminmenu_App_prop_appsId']);
if ((stI0) != 0) { gt = 40; break IF; }
return 0;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_App_prop_appsName'], lcA2['fld_io_cloudoffice_platform_cockpit_adminmenu_App_prop_appsName']);
if ((stI0) != 0) { gt = 59; break IF; }
return 0;
    }
    X_59: for (;;) { IF: if (gt <= 59) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_App_prop_appsIcon'], lcA2['fld_io_cloudoffice_platform_cockpit_adminmenu_App_prop_appsIcon']);
if ((stI0) != 0) { gt = 78; break IF; }
return 0;
    }
    X_78: for (;;) { IF: if (gt <= 78) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_App_prop_appsColor'], lcA2['fld_io_cloudoffice_platform_cockpit_adminmenu_App_prop_appsColor']);
if ((stI0) != 0) { gt = 97; break IF; }
return 0;
    }
    X_97: for (;;) { IF: if (gt <= 97) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_App_prop_appsUrl'], lcA2['fld_io_cloudoffice_platform_cockpit_adminmenu_App_prop_appsUrl']);
if ((stI0) != 0) { gt = 116; break IF; }
return 0;
    }
    X_116: for (;;) { IF: if (gt <= 116) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_App_prop_enable']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_adminmenu_App_prop_enable']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 141; break IF; }
return 0;
    }
    X_141: for (;;) { IF: if (gt <= 141) {

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
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_App_prop_appsId'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_App_prop_appsName'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_App_prop_appsIcon'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_App_prop_appsColor'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_App_prop_appsUrl'], lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_App_prop_enable']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
return lcI1;

};
c['hashCode__I'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Ljava_lang_Object_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0.clone__Lio_cloudoffice_platform_cockpit_adminmenu_App_2();
return stA0;

};
c['clone__Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.access$100__Lio_cloudoffice_platform_cockpit_adminmenu_App$Html4JavaType_2 = function() {
return c._TYPE();

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_adminmenu_App_2 = function(lcA0) {
return lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_App_proto'];

};
    m.access = 4104;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_adminmenu_App$1_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2.call(lcA0, lcA1, lcA2);
return;

};
    m.access = 4096;
    m.cls = CLS;
    m = c.access$400__Lio_cloudoffice_platform_cockpit_adminmenu_App_2Lio_cloudoffice_platform_cockpit_adminmenu_App_2Lnet_java_html_BrwsrCtx_2 = function(lcA0, lcA1) {
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_adminmenu_App_2Lnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
return stA0;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new io_cloudoffice_platform_cockpit_adminmenu_App$Html4JavaType;
(refs_io_cloudoffice_platform_cockpit_adminmenu_App$Html4JavaType || (refs_io_cloudoffice_platform_cockpit_adminmenu_App$Html4JavaType = io_cloudoffice_platform_cockpit_adminmenu_App$Html4JavaType(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_adminmenu_App$1_2.call(stA0, null);
c._TYPE(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_adminmenu_AppfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_adminmenu_App', { value : true });
      vm.java_lang_Cloneable(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_adminmenu_AppfillInstOf });
    io_cloudoffice_platform_cockpit_adminmenu_AppfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/adminmenu/App';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.java_lang_Cloneable(false).constructor.$class
    ]; };
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$AppsModel;
    var refs_java_lang_Boolean;
    var refs_net_java_html_BrwsrCtx;
    var refs_java_lang_StringBuilder;
    var refs_io_cloudoffice_platform_cockpit_adminmenu_App$Html4JavaType;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_adminmenu_App_proto'] = null;
    this['fld_io_cloudoffice_platform_cockpit_adminmenu_App_prop_appsId'] = null;
    this['fld_io_cloudoffice_platform_cockpit_adminmenu_App_prop_appsName'] = null;
    this['fld_io_cloudoffice_platform_cockpit_adminmenu_App_prop_appsIcon'] = null;
    this['fld_io_cloudoffice_platform_cockpit_adminmenu_App_prop_appsColor'] = null;
    this['fld_io_cloudoffice_platform_cockpit_adminmenu_App_prop_appsUrl'] = null;
    this['fld_io_cloudoffice_platform_cockpit_adminmenu_App_prop_enable'] = 0;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_adminmenu_App = registerClass(exports,'io_cloudoffice_platform_cockpit_adminmenu_App',io_cloudoffice_platform_cockpit_adminmenu_App);

vm.java_lang_Cloneable = link('java/lang/Cloneable', function(f) { vm.java_lang_Cloneable =  f; });

function io_cloudoffice_platform_cockpit_adminmenu_App$Html4JavaType() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_adminmenu_App$Html4JavaType;
  if (!CLS.$class) {
    var pp = vm.org_netbeans_html_json_spi_Proto$Type(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_org_netbeans_html_json_spi_Proto$Type || (refs_org_netbeans_html_json_spi_Proto$Type = vm.org_netbeans_html_json_spi_Proto$Type(false))).constructor['cons__VLjava_lang_Class_2Ljava_lang_Class_2II'].call(lcA0, (refs_io_cloudoffice_platform_cockpit_adminmenu_App || (refs_io_cloudoffice_platform_cockpit_adminmenu_App = io_cloudoffice_platform_cockpit_adminmenu_App(false))).constructor.$class, (refs_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$AppsModel || (refs_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$AppsModel = io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$AppsModel(false))).constructor.$class, (6), 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"appsId", 0, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"appsName", 1, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"appsIcon", 2, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"appsColor", 3, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"appsUrl", 4, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"enable", 5, 0, 0);
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.setValue__VLio_cloudoffice_platform_cockpit_adminmenu_App_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0:{ gt = 40; break IF; }
  case 1:{ gt = 57; break IF; }
  case 2:{ gt = 74; break IF; }
  case 3:{ gt = 91; break IF; }
  case 4:{ gt = 108; break IF; }
  case 5:{ gt = 125; break IF; }
  default: { gt = 145; break IF; }
}
    }
    X_40: for (;;) { IF: if (gt <= 40) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_adminmenu_App || (refs_io_cloudoffice_platform_cockpit_adminmenu_App = io_cloudoffice_platform_cockpit_adminmenu_App(false))).access$100__Lio_cloudoffice_platform_cockpit_adminmenu_App$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setAppsId__VLjava_lang_String_2(stA1);
return;
    }
    X_57: for (;;) { IF: if (gt <= 57) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_adminmenu_App || (refs_io_cloudoffice_platform_cockpit_adminmenu_App = io_cloudoffice_platform_cockpit_adminmenu_App(false))).access$100__Lio_cloudoffice_platform_cockpit_adminmenu_App$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setAppsName__VLjava_lang_String_2(stA1);
return;
    }
    X_74: for (;;) { IF: if (gt <= 74) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_adminmenu_App || (refs_io_cloudoffice_platform_cockpit_adminmenu_App = io_cloudoffice_platform_cockpit_adminmenu_App(false))).access$100__Lio_cloudoffice_platform_cockpit_adminmenu_App$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setAppsIcon__VLjava_lang_String_2(stA1);
return;
    }
    X_91: for (;;) { IF: if (gt <= 91) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_adminmenu_App || (refs_io_cloudoffice_platform_cockpit_adminmenu_App = io_cloudoffice_platform_cockpit_adminmenu_App(false))).access$100__Lio_cloudoffice_platform_cockpit_adminmenu_App$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setAppsColor__VLjava_lang_String_2(stA1);
return;
    }
    X_108: for (;;) { IF: if (gt <= 108) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_adminmenu_App || (refs_io_cloudoffice_platform_cockpit_adminmenu_App = io_cloudoffice_platform_cockpit_adminmenu_App(false))).access$100__Lio_cloudoffice_platform_cockpit_adminmenu_App$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setAppsUrl__VLjava_lang_String_2(stA1);
return;
    }
    X_125: for (;;) { IF: if (gt <= 125) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_adminmenu_App || (refs_io_cloudoffice_platform_cockpit_adminmenu_App = io_cloudoffice_platform_cockpit_adminmenu_App(false))).access$100__Lio_cloudoffice_platform_cockpit_adminmenu_App$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setEnable__VZ(stI1);
return;
    }
    X_145: for (;;) { IF: if (gt <= 145) {
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

    }
}}}}}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_adminmenu_App_2I = function(lcA1, lcI2) {
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
  default: { gt = 73; break IF; }
}
    }
    X_40: for (;;) { IF: if (gt <= 40) {

var stA0 = lcA1.getAppsId__Ljava_lang_String_2();
return stA0;
    }
    X_45: for (;;) { IF: if (gt <= 45) {

var stA0 = lcA1.getAppsName__Ljava_lang_String_2();
return stA0;
    }
    X_50: for (;;) { IF: if (gt <= 50) {

var stA0 = lcA1.getAppsIcon__Ljava_lang_String_2();
return stA0;
    }
    X_55: for (;;) { IF: if (gt <= 55) {

var stA0 = lcA1.getAppsColor__Ljava_lang_String_2();
return stA0;
    }
    X_60: for (;;) { IF: if (gt <= 60) {

var stA0 = lcA1.getAppsUrl__Ljava_lang_String_2();
return stA0;
    }
    X_65: for (;;) { IF: if (gt <= 65) {

var stI0 = lcA1.isEnable__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_73: for (;;) { IF: if (gt <= 73) {
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

    }
}}}}}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.call__VLio_cloudoffice_platform_cockpit_adminmenu_App_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_adminmenu_App']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.adminmenu.App');
var stA0 = (refs_io_cloudoffice_platform_cockpit_adminmenu_App || (refs_io_cloudoffice_platform_cockpit_adminmenu_App = io_cloudoffice_platform_cockpit_adminmenu_App(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_adminmenu_App_2(lcA1);
return stA0;

};
c['protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.onChange__VLio_cloudoffice_platform_cockpit_adminmenu_App_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLio_cloudoffice_platform_cockpit_adminmenu_App_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
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
    m = c.read__Lio_cloudoffice_platform_cockpit_adminmenu_App_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = new io_cloudoffice_platform_cockpit_adminmenu_App;
(refs_io_cloudoffice_platform_cockpit_adminmenu_App || (refs_io_cloudoffice_platform_cockpit_adminmenu_App = io_cloudoffice_platform_cockpit_adminmenu_App(false))).constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_adminmenu_App$1_2.call(stA0, lcA1, lcA2, null);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.cloneTo__Lio_cloudoffice_platform_cockpit_adminmenu_App_2Lio_cloudoffice_platform_cockpit_adminmenu_App_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = (refs_io_cloudoffice_platform_cockpit_adminmenu_App || (refs_io_cloudoffice_platform_cockpit_adminmenu_App = io_cloudoffice_platform_cockpit_adminmenu_App(false))).access$400__Lio_cloudoffice_platform_cockpit_adminmenu_App_2Lio_cloudoffice_platform_cockpit_adminmenu_App_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_adminmenu_App']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.adminmenu.App');
lcA0.onMessage__VLio_cloudoffice_platform_cockpit_adminmenu_App_2IILjava_lang_Object_2_3Ljava_lang_Object_2(lcA1, lcI2, lcI3, lcA4, lcA5);
return;

};
c['onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.onChange__VLjava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_adminmenu_App']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.adminmenu.App');
lcA0.onChange__VLio_cloudoffice_platform_cockpit_adminmenu_App_2I(lcA1, lcI2);
return;

};
c['onChange__VLjava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = lcA0.read__Lio_cloudoffice_platform_cockpit_adminmenu_App_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2(lcA1, lcA2);
return stA0;

};
c['read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_adminmenu_App']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.adminmenu.App');
var stA0 = lcA0.cloneTo__Lio_cloudoffice_platform_cockpit_adminmenu_App_2Lio_cloudoffice_platform_cockpit_adminmenu_App_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
c['cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_adminmenu_App']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.adminmenu.App');
lcA0.call__VLio_cloudoffice_platform_cockpit_adminmenu_App_2ILjava_lang_Object_2Ljava_lang_Object_2(lcA1, lcI2, lcA3, lcA4);
return;

};
c['call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Ljava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_adminmenu_App']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.adminmenu.App');
var stA0 = lcA0.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_adminmenu_App_2I(lcA1, lcI2);
return stA0;

};
c['getValue__Ljava_lang_Object_2Ljava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.setValue__VLjava_lang_Object_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_adminmenu_App']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.adminmenu.App');
lcA0.setValue__VLio_cloudoffice_platform_cockpit_adminmenu_App_2ILjava_lang_Object_2(lcA1, lcI2, lcA3);
return;

};
c['setValue__VLjava_lang_Object_2ILjava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_adminmenu_App$1_2 = function(lcA1) {
  var  lcA0 = this;
c.constructor.cons__V.call(lcA0);
return;

};
    m.access = 4096;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_adminmenu_App$Html4JavaTypefillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_adminmenu_App$Html4JavaType', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_adminmenu_App$Html4JavaTypefillInstOf });
    io_cloudoffice_platform_cockpit_adminmenu_App$Html4JavaTypefillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/adminmenu/App$Html4JavaType';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_adminmenu_App;
    var refs_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$AppsModel;
    var refs_org_netbeans_html_json_spi_Proto$Type;
    var refs_java_lang_String;
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
vm.io_cloudoffice_platform_cockpit_adminmenu_App$Html4JavaType = io_cloudoffice_platform_cockpit_adminmenu_App$Html4JavaType;

vm.java_lang_String = link('java/lang/String', function(f) { vm.java_lang_String =  f; });
vm.org_netbeans_html_json_spi_Proto$Type = link('org/netbeans/html/json/spi/Proto$Type', function(f) { vm.org_netbeans_html_json_spi_Proto$Type =  f; });
vm.net_java_html_BrwsrCtx = link('net/java/html/BrwsrCtx', function(f) { vm.net_java_html_BrwsrCtx =  f; });
vm.java_lang_Boolean = link('java/lang/Boolean', function(f) { vm.java_lang_Boolean =  f; });

function io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$AppsModel() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$AppsModel;
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
    function io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$AppsModelfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$AppsModel', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$AppsModelfillInstOf });
    io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$AppsModelfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/adminmenu/AdminMenuComponent$AppsModel';
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
vm.io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$AppsModel = registerClass(exports,'io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$AppsModel',io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$AppsModel);

vm.io_cloudoffice_platform_cockpit_api_MapBuilder = link('io/cloudoffice/platform/cockpit/api/MapBuilder', function(f) { vm.io_cloudoffice_platform_cockpit_api_MapBuilder =  f; });
vm.io_cloudoffice_platform_cockpit_api_UtilValidate = link('io/cloudoffice/platform/cockpit/api/UtilValidate', function(f) { vm.io_cloudoffice_platform_cockpit_api_UtilValidate =  f; });
vm.io_cloudoffice_platform_cockpit_js_VIEW = link('io/cloudoffice/platform/cockpit/js/VIEW', function(f) { vm.io_cloudoffice_platform_cockpit_js_VIEW =  f; });
vm.java_lang_StringBuilder = link('java/lang/StringBuilder', function(f) { vm.java_lang_StringBuilder =  f; });

function io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$2() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$2;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$view = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$2_val$view'] = v; return this['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$2_val$view']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$2_val$view'] = lcA1;
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
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$2_val$view'].getConfiguration__Lio_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration_2();
var lcA3 = stA0;
var stA0 = invoker.getJsonObject__Lorg_json_JSONObject_2Ljava_lang_String_2(lcA2,"configuration");
var lcA4 = stA0;
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_Object_2'](lcA4);
if ((stI0) == 0) { gt = 200; break IF; }
var stA0 = lcA3.getApps__Ljava_util_List_2();
var stI0 = invoker.isEmpty__Z(stA0);
if ((stI0) != 0) { gt = 50; break IF; }
var stA0 = lcA3.getApps__Ljava_util_List_2();
invoker.clear__V(stA0);
    }
    X_50: for (;;) { IF: if (gt <= 50) {

var stA0 = invoker.getJSONArray__Lorg_json_JSONArray_2Ljava_lang_String_2(lcA4,"apps");
var stA0 = invoker.toList__Ljava_util_List_2(stA0);
var lcA5 = stA0;
var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA5);
var lcA6 = stA0;
    }
    X_71: for (;;) { IF: if (gt <= 71) {

var stI0 = invoker.hasNext__Z(lcA6);
if ((stI0) == 0) { gt = 200; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA6);
var lcA7 = stA0;
if (lcA7 !== null && !lcA7['$instOf_java_util_Map']) vm.java_lang_Class(false).castEx(lcA7, 'java.util.Map');
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['query__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_util_Map_2'](lcA7);
var lcA8 = stA0;
var stA0 = new io_cloudoffice_platform_cockpit_adminmenu_App;
(refs_io_cloudoffice_platform_cockpit_adminmenu_App || (refs_io_cloudoffice_platform_cockpit_adminmenu_App = io_cloudoffice_platform_cockpit_adminmenu_App(false))).constructor.cons__V.call(stA0);
var lcA9 = stA0;
var stA0 = lcA9;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA8,"appsId");
stA0.setAppsId__VLjava_lang_String_2(stA1);
var stA0 = lcA9;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA8,"appsName");
stA0.setAppsName__VLjava_lang_String_2(stA1);
var stA0 = lcA9;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA8,"appsIcon");
stA0.setAppsIcon__VLjava_lang_String_2(stA1);
var stA0 = lcA9;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA8,"appsColor");
stA0.setAppsColor__VLjava_lang_String_2(stA1);
var stA0 = lcA9;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA8,"appsUrl");
stA0.setAppsUrl__VLjava_lang_String_2(stA1);
var stI0 = invoker.getBoolean__ZLjava_lang_String_2(lcA8,"enable");
var lcI10 = stI0;
lcA9.setEnable__VZ(lcI10);
var stA0 = lcA3.getApps__Ljava_util_List_2();
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,lcA9);
{ gt = 0; continue X_71; }
    }
    X_200: for (;;) { IF: if (gt <= 200) {
return;

    }
}}}}
};
c['handle__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$2fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$2', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_CallBack(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$2fillInstOf });
    io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$2fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/adminmenu/AdminMenuComponent$2';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_CallBack(false).constructor.$class
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_MapBuilder;
    var refs_io_cloudoffice_platform_cockpit_api_UtilValidate;
    var refs_io_cloudoffice_platform_cockpit_adminmenu_App;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$2_val$view'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$2 = io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$2;

vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration = link('io/cloudoffice/platform/cockpit/api/ComponentConfiguration', function(f) { vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration =  f; });

function io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_TYPE'] = null;
  m = c._TYPE = function (v) {  if (arguments.length == 1) CLS['fld_TYPE'] = v; return CLS['fld_TYPE']; };
  m = c._proto = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration_proto'] = v; return this['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration_proto']; };
  m = c._prop_configurationProgressLoader = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration_prop_configurationProgressLoader'] = v; return this['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration_prop_configurationProgressLoader']; };
  m = c._prop_apps = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration_prop_apps'] = v; return this['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration_prop_apps']; };
    m = c.modelFor__Ljava_lang_Class_2 = function() {
return (refs_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$AdminmenuManager || (refs_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$AdminmenuManager = io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$AdminmenuManager(false))).constructor.$class;

};
    m.access = 10;
    m.cls = CLS;
    m = c.isConfigurationProgressLoader__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration_proto'],"configurationProgressLoader");
return lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration_prop_configurationProgressLoader'];

};
c['isConfigurationProgressLoader__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setConfigurationProgressLoader__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration_prop_configurationProgressLoader']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration_prop_configurationProgressLoader'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration_proto'];var stA1 = "configurationProgressLoader";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2, stA3);
return;

    }
}}
};
c['setConfigurationProgressLoader__VZ'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getApps__Ljava_util_List_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration_proto'],"apps");
return lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration_prop_apps'];

};
c['getApps__Ljava_util_List_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.createProto__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2(c._TYPE(),lcA0, lcA1);
stA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration_proto'] = stA1;
var stA0 = lcA0;var stA1 = lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration_proto'];var stA2 = "apps";var stI3 = -1;var stA4 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, 0);
var stA1 = invoker.createList__Ljava_util_List_2Ljava_lang_String_2I_3Ljava_lang_String_2(stA1,stA2, stI3, stA4);
stA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration_prop_apps'] = stA1;
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
    m = CLS.cons__VZ_3Lio_cloudoffice_platform_cockpit_adminmenu_App_2 = function(lcI1, lcA2) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = (refs_net_java_html_BrwsrCtx || (refs_net_java_html_BrwsrCtx = vm.net_java_html_BrwsrCtx(false)))['findDefault__Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'](c.constructor.$class);
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, stA1);
lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration_prop_configurationProgressLoader'] = lcI1;
invoker.initTo__VLjava_util_Collection_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration_proto'],lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration_prop_apps'], lcA2);
return;

};
CLS['cons__VZ_3Lio_cloudoffice_platform_cockpit_adminmenu_App_2'] = m;

    m.access = 129;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 2);
var lcA3 = stA0;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration_proto'];var stA1 = lcA2;var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, 2);
Array.at(stA2, 0, "configurationProgressLoader");
Array.at(stA2, 1, "apps");
invoker.extract__VLjava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Object_2(stA0,stA1, stA2, lcA3);
var stA0 = lcA0;if (((lcA3[0] || Array.at(lcA3, 0))) !== null) { gt = 44; break IF; }
var stI1 = 0;{ gt = 56; break IF; }
    }
    X_44: for (;;) { IF: if (gt <= 44) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[0] || Array.at(lcA3, 0)));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_56: for (;;) { IF: if (gt <= 56) {
stA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration_prop_configurationProgressLoader'] = stI1;
var stA0 = c.useAsArray___3Ljava_lang_Object_2Ljava_lang_Object_2((lcA3[1] || Array.at(lcA3, 1)));
var lcA4 = stA0;
var lcI5 = (lcA4).length;
var lcI6 = 0;
    }
    X_75: for (;;) { IF: if (gt <= 75) {

if ((lcI6) >= (lcI5)) { gt = 116; break IF; }
var lcA7 = (lcA4[lcI6] || Array.at(lcA4, lcI6));
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration_prop_apps'];var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration_proto'],(refs_io_cloudoffice_platform_cockpit_adminmenu_App || (refs_io_cloudoffice_platform_cockpit_adminmenu_App = io_cloudoffice_platform_cockpit_adminmenu_App(false))).constructor.$class, lcA7);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,stA1);
lcI6++;
{ gt = 0; continue X_75; }
    }
    X_116: for (;;) { IF: if (gt <= 116) {
return;

    }
}}}}}
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
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"configurationProgressLoader");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stI2 = lcA0.isConfigurationProgressLoader__Z();
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI2);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"apps");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration_prop_apps']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(125));
var stA0 = invoker.toString__Ljava_lang_String_2(lcA1);
return stA0;

};
c['toString__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Lio_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration_proto']);
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration_2Lnet_java_html_BrwsrCtx_2.call(stA0, stA1);
return stA0;

};
c['clone__Lio_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Lio_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration_2Lnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = new io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, lcA1);
var lcA2 = stA0;
var stA0 = lcA2;var stI1 = lcA0.isConfigurationProgressLoader__Z();
stA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration_prop_configurationProgressLoader'] = stI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration_proto'];var stA1 = lcA2.getApps__Ljava_util_List_2();
invoker.cloneList__VLjava_util_Collection_2Lnet_java_html_BrwsrCtx_2Ljava_util_Collection_2(stA0,stA1, lcA1, lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration_prop_apps']);
return lcA2;

};
    m.access = 2;
    m.cls = CLS;
    m = c.applyBindings__Lio_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration_2 = function() {
  var  lcA0 = this;
invoker.applyBindings__V(lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration_proto']);
return lcA0;

};
c['applyBindings__Lio_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration_2'] = m;

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

var stI0 = lcA1 != null && lcA1['$instOf_io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration'] ? 1 : 0;
if ((stI0) != 0) { gt = 16; break IF; }
return 0;
    }
    X_16: for (;;) { IF: if (gt <= 16) {

if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.adminmenu.AdminmenuConfiguration');
var lcA2 = lcA1;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration_prop_configurationProgressLoader']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration_prop_configurationProgressLoader']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 46; break IF; }
return 0;
    }
    X_46: for (;;) { IF: if (gt <= 46) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration_prop_apps']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration_prop_apps']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 73; break IF; }
return 0;
    }
    X_73: for (;;) { IF: if (gt <= 73) {

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
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration_prop_configurationProgressLoader']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration_prop_apps']);
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
var stA0 = lcA0.clone__Lio_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration_2();
return stA0;

};
c['clone__Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.access$100__Lio_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration$Html4JavaType_2 = function() {
return c._TYPE();

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration_2 = function(lcA0) {
return lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration_proto'];

};
    m.access = 4104;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration$1_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2.call(lcA0, lcA1, lcA2);
return;

};
    m.access = 4096;
    m.cls = CLS;
    m = c.access$400__Lio_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration_2Lio_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration_2Lnet_java_html_BrwsrCtx_2 = function(lcA0, lcA1) {
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration_2Lnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
return stA0;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration$Html4JavaType;
(refs_io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration$Html4JavaType || (refs_io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration$Html4JavaType = io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration$Html4JavaType(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration$1_2.call(stA0, null);
c._TYPE(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfigurationfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration', { value : true });
      vm.java_lang_Cloneable(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfigurationfillInstOf });
    io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfigurationfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/adminmenu/AdminmenuConfiguration';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.java_lang_Cloneable(false).constructor.$class
    ]; };
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$AdminmenuManager;
    var refs_java_lang_Boolean;
    var refs_net_java_html_BrwsrCtx;
    var refs_io_cloudoffice_platform_cockpit_adminmenu_App;
    var refs_java_lang_StringBuilder;
    var refs_io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration$Html4JavaType;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration_proto'] = null;
    this['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration_prop_configurationProgressLoader'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration_prop_apps'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration = registerClass(exports,'io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration',io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration);


function io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration$Html4JavaType() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration$Html4JavaType;
  if (!CLS.$class) {
    var pp = vm.org_netbeans_html_json_spi_Proto$Type(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_org_netbeans_html_json_spi_Proto$Type || (refs_org_netbeans_html_json_spi_Proto$Type = vm.org_netbeans_html_json_spi_Proto$Type(false))).constructor['cons__VLjava_lang_Class_2Ljava_lang_Class_2II'].call(lcA0, (refs_io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration || (refs_io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration = io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration(false))).constructor.$class, (refs_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$AdminmenuManager || (refs_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$AdminmenuManager = io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$AdminmenuManager(false))).constructor.$class, 2, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"configurationProgressLoader", 0, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"apps", 1, 0, 0);
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.setValue__VLio_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0: { gt = 28; break IF; }
  case 1: { gt = 48; break IF; }
  default: { gt = 62; break IF; }
}
    }
    X_28: for (;;) { IF: if (gt <= 28) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration || (refs_io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration = io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration(false))).access$100__Lio_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setConfigurationProgressLoader__VZ(stI1);
return;
    }
    X_48: for (;;) { IF: if (gt <= 48) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration || (refs_io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration = io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration(false))).access$100__Lio_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration$Html4JavaType_2();
var stA1 = lcA1.getApps__Ljava_util_List_2();
invoker.replaceValue__VLjava_util_Collection_2Ljava_lang_Class_2Ljava_lang_Object_2(stA0,stA1, (refs_io_cloudoffice_platform_cockpit_adminmenu_App || (refs_io_cloudoffice_platform_cockpit_adminmenu_App = io_cloudoffice_platform_cockpit_adminmenu_App(false))).constructor.$class, lcA3);
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
    m = c.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration_2I = function(lcA1, lcI2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0: { gt = 28; break IF; }
  case 1: { gt = 36; break IF; }
  default: { gt = 41; break IF; }
}
    }
    X_28: for (;;) { IF: if (gt <= 28) {

var stI0 = lcA1.isConfigurationProgressLoader__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_36: for (;;) { IF: if (gt <= 36) {

var stA0 = lcA1.getApps__Ljava_util_List_2();
return stA0;
    }
    X_41: for (;;) { IF: if (gt <= 41) {
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

    }
}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.call__VLio_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.adminmenu.AdminmenuConfiguration');
var stA0 = (refs_io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration || (refs_io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration = io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration_2(lcA1);
return stA0;

};
c['protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.onChange__VLio_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLio_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
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
    m = c.read__Lio_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = new io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration;
(refs_io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration || (refs_io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration = io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration(false))).constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration$1_2.call(stA0, lcA1, lcA2, null);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.cloneTo__Lio_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration_2Lio_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = (refs_io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration || (refs_io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration = io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration(false))).access$400__Lio_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration_2Lio_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.adminmenu.AdminmenuConfiguration');
lcA0.onMessage__VLio_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration_2IILjava_lang_Object_2_3Ljava_lang_Object_2(lcA1, lcI2, lcI3, lcA4, lcA5);
return;

};
c['onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.onChange__VLjava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.adminmenu.AdminmenuConfiguration');
lcA0.onChange__VLio_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration_2I(lcA1, lcI2);
return;

};
c['onChange__VLjava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = lcA0.read__Lio_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2(lcA1, lcA2);
return stA0;

};
c['read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.adminmenu.AdminmenuConfiguration');
var stA0 = lcA0.cloneTo__Lio_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration_2Lio_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
c['cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.adminmenu.AdminmenuConfiguration');
lcA0.call__VLio_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration_2ILjava_lang_Object_2Ljava_lang_Object_2(lcA1, lcI2, lcA3, lcA4);
return;

};
c['call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Ljava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.adminmenu.AdminmenuConfiguration');
var stA0 = lcA0.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration_2I(lcA1, lcI2);
return stA0;

};
c['getValue__Ljava_lang_Object_2Ljava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.setValue__VLjava_lang_Object_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.adminmenu.AdminmenuConfiguration');
lcA0.setValue__VLio_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration_2ILjava_lang_Object_2(lcA1, lcI2, lcA3);
return;

};
c['setValue__VLjava_lang_Object_2ILjava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration$1_2 = function(lcA1) {
  var  lcA0 = this;
c.constructor.cons__V.call(lcA0);
return;

};
    m.access = 4096;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration$Html4JavaTypefillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration$Html4JavaType', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration$Html4JavaTypefillInstOf });
    io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration$Html4JavaTypefillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/adminmenu/AdminmenuConfiguration$Html4JavaType';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration;
    var refs_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$AdminmenuManager;
    var refs_org_netbeans_html_json_spi_Proto$Type;
    var refs_java_lang_Boolean;
    var refs_io_cloudoffice_platform_cockpit_adminmenu_App;
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
vm.io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration$Html4JavaType = io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration$Html4JavaType;


function io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$AdminmenuManager() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$AdminmenuManager;
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
    function io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$AdminmenuManagerfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$AdminmenuManager', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$AdminmenuManagerfillInstOf });
    io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$AdminmenuManagerfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/adminmenu/AdminMenuComponent$AdminmenuManager';
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
vm.io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$AdminmenuManager = registerClass(exports,'io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$AdminmenuManager',io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$AdminmenuManager);


function io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_TYPE'] = null;
  m = c._TYPE = function (v) {  if (arguments.length == 1) CLS['fld_TYPE'] = v; return CLS['fld_TYPE']; };
  m = c._proto = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_proto'] = v; return this['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_proto']; };
  m = c._prop_instance = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_prop_instance'] = v; return this['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_prop_instance']; };
  m = c._prop_designerMode = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_prop_designerMode'] = v; return this['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_prop_designerMode']; };
  m = c._prop_configuration = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_prop_configuration'] = v; return this['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_prop_configuration']; };
  m = c._prop_showApps = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_prop_showApps'] = v; return this['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_prop_showApps']; };
  m = c._prop_apps = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_prop_apps'] = v; return this['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_prop_apps']; };
    m = c.modelFor__Ljava_lang_Class_2 = function() {
return (refs_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent || (refs_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent = io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent(false))).constructor.$class;

};
    m.access = 10;
    m.cls = CLS;
    m = c.getInstance__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_proto'],"instance");
return lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_prop_instance'];

};
c['getInstance__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setInstance__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_prop_instance'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_prop_instance'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_proto'],"instance", lcA2, lcA1);
return;

    }
}}
};
c['setInstance__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isDesignerMode__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_proto'],"designerMode");
return lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_prop_designerMode'];

};
c['isDesignerMode__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setDesignerMode__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_prop_designerMode']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_prop_designerMode'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_proto'];var stA1 = "designerMode";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2, stA3);
return;

    }
}}
};
c['setDesignerMode__VZ'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getConfiguration__Lio_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_proto'],"configuration");
if ((lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_prop_configuration']) !== (c._TYPE())) { gt = 40; break IF; }
var stA0 = lcA0;var stA1 = new io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration;
(refs_io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration || (refs_io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration = io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration(false))).constructor.cons__V.call(stA1);
var stA2 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_proto']);
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, stA2);
stA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_prop_configuration'] = stA1;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

if (lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_prop_configuration'] !== null && !lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_prop_configuration']['$instOf_io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration']) vm.java_lang_Class(false).castEx(lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_prop_configuration'], 'io.cloudoffice.platform.cockpit.adminmenu.AdminmenuConfiguration');
return lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_prop_configuration'];

    }
}}
};
c['getConfiguration__Lio_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setConfiguration__VLio_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_prop_configuration'];
if ((lcA2) !== (lcA1)) { gt = 18; break IF; }
return;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_prop_configuration'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_proto'],"configuration", lcA2, lcA1);
return;

    }
}}
};
c['setConfiguration__VLio_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isShowApps__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_proto'],"showApps");
return lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_prop_showApps'];

};
c['isShowApps__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setShowApps__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_prop_showApps']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_prop_showApps'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_proto'];var stA1 = "showApps";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2, stA3);
return;

    }
}}
};
c['setShowApps__VZ'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getApps__Ljava_util_List_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_proto'],"apps");
return lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_prop_apps'];

};
c['getApps__Ljava_util_List_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.createProto__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2(c._TYPE(),lcA0, lcA1);
stA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_proto'] = stA1;
var stA0 = lcA0;var stA1 = lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_proto'];var stA2 = "apps";var stI3 = -1;var stA4 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, 0);
var stA1 = invoker.createList__Ljava_util_List_2Ljava_lang_String_2I_3Ljava_lang_String_2(stA1,stA2, stI3, stA4);
stA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_prop_apps'] = stA1;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = (refs_net_java_html_BrwsrCtx || (refs_net_java_html_BrwsrCtx = vm.net_java_html_BrwsrCtx(false)))['findDefault__Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'](c.constructor.$class);
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, stA1);
lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_prop_configuration'] = c._TYPE();
return;

};
CLS['cons__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLjava_lang_String_2ZLio_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration_2Z_3Lio_cloudoffice_platform_cockpit_adminmenu_App_2 = function(lcA1, lcI2, lcA3, lcI4, lcA5) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = (refs_net_java_html_BrwsrCtx || (refs_net_java_html_BrwsrCtx = vm.net_java_html_BrwsrCtx(false)))['findDefault__Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'](c.constructor.$class);
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, stA1);
lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_prop_instance'] = lcA1;
lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_prop_designerMode'] = lcI2;
lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_prop_configuration'] = lcA3;
lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_prop_showApps'] = lcI4;
invoker.initTo__VLjava_util_Collection_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_proto'],lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_prop_apps'], lcA5);
return;

};
CLS['cons__VLjava_lang_String_2ZLio_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration_2Z_3Lio_cloudoffice_platform_cockpit_adminmenu_App_2'] = m;

    m.access = 129;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 5);
var lcA3 = stA0;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_proto'];var stA1 = lcA2;var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, 5);
Array.at(stA2, 0, "instance");
Array.at(stA2, 1, "designerMode");
Array.at(stA2, 2, "configuration");
Array.at(stA2, 3, "showApps");
Array.at(stA2, 4, "apps");
invoker.extract__VLjava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Object_2(stA0,stA1, stA2, lcA3);
if ((lcA3[0] || Array.at(lcA3, 0)) !== null && !(lcA3[0] || Array.at(lcA3, 0))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[0] || Array.at(lcA3, 0)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_prop_instance'] = (lcA3[0] || Array.at(lcA3, 0));
var stA0 = lcA0;if (((lcA3[1] || Array.at(lcA3, 1))) !== null) { gt = 69; break IF; }
var stI1 = 0;{ gt = 81; break IF; }
    }
    X_69: for (;;) { IF: if (gt <= 69) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[1] || Array.at(lcA3, 1)));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_81: for (;;) { IF: if (gt <= 81) {
stA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_prop_designerMode'] = stI1;
var stA0 = lcA0;var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_proto'],(refs_io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration || (refs_io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration = io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration(false))).constructor.$class, (lcA3[2] || Array.at(lcA3, 2)));
stA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_prop_configuration'] = stA1;
var stA0 = lcA0;if (((lcA3[3] || Array.at(lcA3, 3))) !== null) { gt = 111; break IF; }
var stI1 = 0;{ gt = 123; break IF; }
    }
    X_111: for (;;) { IF: if (gt <= 111) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[3] || Array.at(lcA3, 3)));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_123: for (;;) { IF: if (gt <= 123) {
stA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_prop_showApps'] = stI1;
var stA0 = c.useAsArray___3Ljava_lang_Object_2Ljava_lang_Object_2((lcA3[4] || Array.at(lcA3, 4)));
var lcA4 = stA0;
var lcI5 = (lcA4).length;
var lcI6 = 0;
    }
    X_142: for (;;) { IF: if (gt <= 142) {

if ((lcI6) >= (lcI5)) { gt = 183; break IF; }
var lcA7 = (lcA4[lcI6] || Array.at(lcA4, lcI6));
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_prop_apps'];var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_proto'],(refs_io_cloudoffice_platform_cockpit_adminmenu_App || (refs_io_cloudoffice_platform_cockpit_adminmenu_App = io_cloudoffice_platform_cockpit_adminmenu_App(false))).constructor.$class, lcA7);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,stA1);
lcI6++;
{ gt = 0; continue X_142; }
    }
    X_183: for (;;) { IF: if (gt <= 183) {
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
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_prop_configuration']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"showApps");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stI2 = lcA0.isShowApps__Z();
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI2);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"apps");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_prop_apps']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(125));
var stA0 = invoker.toString__Ljava_lang_String_2(lcA1);
return stA0;

};
c['toString__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Lio_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_proto']);
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_2Lnet_java_html_BrwsrCtx_2.call(stA0, stA1);
return stA0;

};
c['clone__Lio_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Lio_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_2Lnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
var stA0 = new io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, lcA1);
var lcA2 = stA0;
var stA0 = lcA2;var stA1 = lcA0.getInstance__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_prop_instance'] = stA1;
var stA0 = lcA2;var stI1 = lcA0.isDesignerMode__Z();
stA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_prop_designerMode'] = stI1;
var stA0 = lcA2;if ((lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_prop_configuration']) !== null) { gt = 37; break IF; }
var stA1 = null;{ gt = 61; break IF; }
    }
    X_37: for (;;) { IF: if (gt <= 37) {

if ((lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_prop_configuration']) !== (c._TYPE())) { gt = 53; break IF; }
var stA1 = c._TYPE();{ gt = 61; break IF; }
    }
    X_53: for (;;) { IF: if (gt <= 53) {

var stA1 = lcA0.getConfiguration__Lio_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration_2();
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, lcA1);
    }
    X_61: for (;;) { IF: if (gt <= 61) {
stA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_prop_configuration'] = stA1;
var stA0 = lcA2;var stI1 = lcA0.isShowApps__Z();
stA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_prop_showApps'] = stI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_proto'];var stA1 = lcA2.getApps__Ljava_util_List_2();
invoker.cloneList__VLjava_util_Collection_2Lnet_java_html_BrwsrCtx_2Ljava_util_Collection_2(stA0,stA1, lcA1, lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_prop_apps']);
return lcA2;

    }
}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.applyBindings__Lio_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_2 = function() {
  var  lcA0 = this;
invoker.applyBindings__V(lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_proto']);
return lcA0;

};
c['applyBindings__Lio_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_2'] = m;

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

var stI0 = lcA1 != null && lcA1['$instOf_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView'] ? 1 : 0;
if ((stI0) != 0) { gt = 16; break IF; }
return 0;
    }
    X_16: for (;;) { IF: if (gt <= 16) {

if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.adminmenu.AdminMenuView');
var lcA2 = lcA1;
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_prop_instance'], lcA2['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_prop_instance']);
if ((stI0) != 0) { gt = 40; break IF; }
return 0;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_prop_designerMode']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_prop_designerMode']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 65; break IF; }
return 0;
    }
    X_65: for (;;) { IF: if (gt <= 65) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_prop_configuration']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_prop_configuration']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 92; break IF; }
return 0;
    }
    X_92: for (;;) { IF: if (gt <= 92) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_prop_showApps']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_prop_showApps']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 117; break IF; }
return 0;
    }
    X_117: for (;;) { IF: if (gt <= 117) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_prop_apps']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_prop_apps']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 144; break IF; }
return 0;
    }
    X_144: for (;;) { IF: if (gt <= 144) {

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
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_prop_instance'], lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_prop_designerMode']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_prop_configuration']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_prop_showApps']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_prop_apps']);
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
var stA0 = lcA0.clone__Lio_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_2();
return stA0;

};
c['clone__Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.access$100__Lio_cloudoffice_platform_cockpit_adminmenu_AdminMenuView$Html4JavaType_2 = function() {
return c._TYPE();

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_2 = function(lcA0) {
return lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_proto'];

};
    m.access = 4104;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_adminmenu_AdminMenuView$1_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2.call(lcA0, lcA1, lcA2);
return;

};
    m.access = 4096;
    m.cls = CLS;
    m = c.access$400__Lio_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_2Lio_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_2Lnet_java_html_BrwsrCtx_2 = function(lcA0, lcA1) {
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_2Lnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
return stA0;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView$Html4JavaType;
(refs_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView$Html4JavaType || (refs_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView$Html4JavaType = io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView$Html4JavaType(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_adminmenu_AdminMenuView$1_2.call(stA0, null);
c._TYPE(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_adminmenu_AdminMenuViewfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView', { value : true });
      vm.java_lang_Cloneable(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_adminmenu_AdminMenuViewfillInstOf });
    io_cloudoffice_platform_cockpit_adminmenu_AdminMenuViewfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/adminmenu/AdminMenuView';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.java_lang_Cloneable(false).constructor.$class
    ]; };
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent;
    var refs_java_lang_Boolean;
    var refs_io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration;
    var refs_net_java_html_json_Models;
    var refs_net_java_html_BrwsrCtx;
    var refs_io_cloudoffice_platform_cockpit_adminmenu_App;
    var refs_java_lang_StringBuilder;
    var refs_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView$Html4JavaType;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_proto'] = null;
    this['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_prop_instance'] = null;
    this['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_prop_designerMode'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_prop_configuration'] = null;
    this['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_prop_showApps'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_prop_apps'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView = registerClass(exports,'io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView',io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView);


function io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView$Html4JavaType() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView$Html4JavaType;
  if (!CLS.$class) {
    var pp = vm.org_netbeans_html_json_spi_Proto$Type(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_org_netbeans_html_json_spi_Proto$Type || (refs_org_netbeans_html_json_spi_Proto$Type = vm.org_netbeans_html_json_spi_Proto$Type(false))).constructor['cons__VLjava_lang_Class_2Ljava_lang_Class_2II'].call(lcA0, (refs_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView || (refs_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView = io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView(false))).constructor.$class, (refs_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent || (refs_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent = io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent(false))).constructor.$class, 5, (6));
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"instance", 0, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"designerMode", 1, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"configuration", 2, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"showApps", 3, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"apps", 4, 0, 0);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"toggleAdminMenu", 0);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"openConfig", 1);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"closeConfigurationPanel", 2);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"save", 3);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"resetConfiguration", 4);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"openApplication", 5);
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.setValue__VLio_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0:{ gt = 36; break IF; }
  case 1:{ gt = 53; break IF; }
  case 2:{ gt = 73; break IF; }
  case 3:{ gt = 90; break IF; }
  case 4:{ gt = 110; break IF; }
  default: { gt = 124; break IF; }
}
    }
    X_36: for (;;) { IF: if (gt <= 36) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView || (refs_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView = io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView(false))).access$100__Lio_cloudoffice_platform_cockpit_adminmenu_AdminMenuView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setInstance__VLjava_lang_String_2(stA1);
return;
    }
    X_53: for (;;) { IF: if (gt <= 53) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView || (refs_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView = io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView(false))).access$100__Lio_cloudoffice_platform_cockpit_adminmenu_AdminMenuView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setDesignerMode__VZ(stI1);
return;
    }
    X_73: for (;;) { IF: if (gt <= 73) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView || (refs_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView = io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView(false))).access$100__Lio_cloudoffice_platform_cockpit_adminmenu_AdminMenuView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration || (refs_io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration = io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.adminmenu.AdminmenuConfiguration');
stA0.setConfiguration__VLio_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration_2(stA1);
return;
    }
    X_90: for (;;) { IF: if (gt <= 90) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView || (refs_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView = io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView(false))).access$100__Lio_cloudoffice_platform_cockpit_adminmenu_AdminMenuView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setShowApps__VZ(stI1);
return;
    }
    X_110: for (;;) { IF: if (gt <= 110) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView || (refs_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView = io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView(false))).access$100__Lio_cloudoffice_platform_cockpit_adminmenu_AdminMenuView$Html4JavaType_2();
var stA1 = lcA1.getApps__Ljava_util_List_2();
invoker.replaceValue__VLjava_util_Collection_2Ljava_lang_Class_2Ljava_lang_Object_2(stA0,stA1, (refs_io_cloudoffice_platform_cockpit_adminmenu_App || (refs_io_cloudoffice_platform_cockpit_adminmenu_App = io_cloudoffice_platform_cockpit_adminmenu_App(false))).constructor.$class, lcA3);
return;
    }
    X_124: for (;;) { IF: if (gt <= 124) {
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

    }
}}}}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_2I = function(lcA1, lcI2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0:{ gt = 36; break IF; }
  case 1:{ gt = 41; break IF; }
  case 2:{ gt = 49; break IF; }
  case 3:{ gt = 54; break IF; }
  case 4:{ gt = 62; break IF; }
  default: { gt = 67; break IF; }
}
    }
    X_36: for (;;) { IF: if (gt <= 36) {

var stA0 = lcA1.getInstance__Ljava_lang_String_2();
return stA0;
    }
    X_41: for (;;) { IF: if (gt <= 41) {

var stI0 = lcA1.isDesignerMode__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_49: for (;;) { IF: if (gt <= 49) {

var stA0 = lcA1.getConfiguration__Lio_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration_2();
return stA0;
    }
    X_54: for (;;) { IF: if (gt <= 54) {

var stI0 = lcA1.isShowApps__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_62: for (;;) { IF: if (gt <= 62) {

var stA0 = lcA1.getApps__Ljava_util_List_2();
return stA0;
    }
    X_67: for (;;) { IF: if (gt <= 67) {
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

    }
}}}}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.call__VLio_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
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
  default: { gt = 83; break IF; }
}
    }
    X_40: for (;;) { IF: if (gt <= 40) {

(refs_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent || (refs_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent = io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent(false))).toggleAdminMenu__VLio_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_2(lcA1);
return;
    }
    X_45: for (;;) { IF: if (gt <= 45) {

(refs_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent || (refs_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent = io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent(false))).openConfig__VLio_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_2(lcA1);
return;
    }
    X_50: for (;;) { IF: if (gt <= 50) {

(refs_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent || (refs_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent = io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent(false))).closeConfigurationPanel__VLio_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_2(lcA1);
return;
    }
    X_55: for (;;) { IF: if (gt <= 55) {

(refs_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent || (refs_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent = io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent(false))).save__VLio_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_2(lcA1);
return;
    }
    X_60: for (;;) { IF: if (gt <= 60) {

(refs_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent || (refs_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent = io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent(false))).resetConfiguration__VLio_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_2(lcA1);
return;
    }
    X_65: for (;;) { IF: if (gt <= 65) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView || (refs_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView = io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_2(lcA1);
var stA1 = invoker.toModel__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_adminmenu_App || (refs_io_cloudoffice_platform_cockpit_adminmenu_App = io_cloudoffice_platform_cockpit_adminmenu_App(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_adminmenu_App']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.adminmenu.App');
(refs_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent || (refs_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent = io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent(false))).openApplication__VLio_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_2Lio_cloudoffice_platform_cockpit_adminmenu_App_2(stA0, stA1);
return;
    }
    X_83: for (;;) { IF: if (gt <= 83) {
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

    }
}}}}}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.adminmenu.AdminMenuView');
var stA0 = (refs_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView || (refs_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView = io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_2(lcA1);
return stA0;

};
c['protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.onChange__VLio_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLio_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
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
    m = c.read__Lio_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = new io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView;
(refs_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView || (refs_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView = io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView(false))).constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_adminmenu_AdminMenuView$1_2.call(stA0, lcA1, lcA2, null);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.cloneTo__Lio_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_2Lio_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = (refs_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView || (refs_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView = io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView(false))).access$400__Lio_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_2Lio_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.adminmenu.AdminMenuView');
lcA0.onMessage__VLio_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_2IILjava_lang_Object_2_3Ljava_lang_Object_2(lcA1, lcI2, lcI3, lcA4, lcA5);
return;

};
c['onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.onChange__VLjava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.adminmenu.AdminMenuView');
lcA0.onChange__VLio_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_2I(lcA1, lcI2);
return;

};
c['onChange__VLjava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = lcA0.read__Lio_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2(lcA1, lcA2);
return stA0;

};
c['read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.adminmenu.AdminMenuView');
var stA0 = lcA0.cloneTo__Lio_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_2Lio_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
c['cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.adminmenu.AdminMenuView');
lcA0.call__VLio_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_2ILjava_lang_Object_2Ljava_lang_Object_2(lcA1, lcI2, lcA3, lcA4);
return;

};
c['call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Ljava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.adminmenu.AdminMenuView');
var stA0 = lcA0.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_2I(lcA1, lcI2);
return stA0;

};
c['getValue__Ljava_lang_Object_2Ljava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.setValue__VLjava_lang_Object_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.adminmenu.AdminMenuView');
lcA0.setValue__VLio_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_2ILjava_lang_Object_2(lcA1, lcI2, lcA3);
return;

};
c['setValue__VLjava_lang_Object_2ILjava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_adminmenu_AdminMenuView$1_2 = function(lcA1) {
  var  lcA0 = this;
c.constructor.cons__V.call(lcA0);
return;

};
    m.access = 4096;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView$Html4JavaTypefillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView$Html4JavaType', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView$Html4JavaTypefillInstOf });
    io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView$Html4JavaTypefillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/adminmenu/AdminMenuView$Html4JavaType';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView;
    var refs_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent;
    var refs_org_netbeans_html_json_spi_Proto$Type;
    var refs_java_lang_String;
    var refs_java_lang_Boolean;
    var refs_io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration;
    var refs_io_cloudoffice_platform_cockpit_adminmenu_App;
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
vm.io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView$Html4JavaType = io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView$Html4JavaType;

vm.net_java_html_json_Models = link('net/java/html/json/Models', function(f) { vm.net_java_html_json_Models =  f; });
vm.java_lang_UnsupportedOperationException = link('java/lang/UnsupportedOperationException', function(f) { vm.java_lang_UnsupportedOperationException =  f; });

function io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$DesignModeListener() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$DesignModeListener;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._this$0 = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$DesignModeListener_this$0'] = v; return this['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$DesignModeListener_this$0']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$DesignModeListener_this$0'] = lcA1;
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
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$DesignModeListener_this$0'];var stA1 = (refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false)))['valueOf__Ljava_lang_String_2Ljava_lang_Object_2'](lcA2);
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
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent_2Lio_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$1_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
c.constructor.cons__VLio_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent_2.call(lcA0, lcA1);
return;

};
    m.access = 4096;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$DesignModeListenerfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$DesignModeListener', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_EventListener(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$DesignModeListenerfillInstOf });
    io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$DesignModeListenerfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/adminmenu/AdminMenuComponent$DesignModeListener';
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
    this['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$DesignModeListener_this$0'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$DesignModeListener = io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$DesignModeListener;

vm.io_cloudoffice_platform_cockpit_api_EventListener = link('io/cloudoffice/platform/cockpit/api/EventListener', function(f) { vm.io_cloudoffice_platform_cockpit_api_EventListener =  f; });

function io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$LoginEventListener() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$LoginEventListener;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._this$0 = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$LoginEventListener_this$0'] = v; return this['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$LoginEventListener_this$0']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$LoginEventListener_this$0'] = lcA1;
return;

};
CLS['cons__VLio_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent_2'] = m;

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
Array.at(stA0, 0, "adminmenu");
(refs_io_cloudoffice_platform_cockpit_js_VIEW || (refs_io_cloudoffice_platform_cockpit_js_VIEW = vm.io_cloudoffice_platform_cockpit_js_VIEW(false)))['render__V_3Ljava_lang_String_2'](stA0);
var stA0 = invoker.getInstanceId__Ljava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$LoginEventListener_this$0']);
var lcA2 = stA0;
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['_CONFIG']();var stA1 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['configFetchEndpoint__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2']("adminmenu", lcA2);
var stA2 = null;var stA3 = new io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$LoginEventListener$1;
(refs_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$LoginEventListener$1 || (refs_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$LoginEventListener$1 = io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$LoginEventListener$1(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$LoginEventListener_2.call(stA3, lcA0);
invoker.fetch__VLjava_lang_String_2Ljava_util_Map_2Lio_cloudoffice_platform_cockpit_api_CallBack_2(stA0,stA1, stA2, stA3);
return;

};
    m.access = 0;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$LoginEventListenerfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$LoginEventListener', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_EventListener(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$LoginEventListenerfillInstOf });
    io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$LoginEventListenerfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/adminmenu/AdminMenuComponent$LoginEventListener';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_EventListener(false).constructor.$class
    ]; };
    CLS.$class.access = 33;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_js_VIEW;
    var refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration;
    var refs_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$LoginEventListener$1;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$LoginEventListener_this$0'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$LoginEventListener = registerClass(exports,'io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$LoginEventListener',io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$LoginEventListener);


function io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$LoginEventListener$1() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$LoginEventListener$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._this$1 = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$LoginEventListener$1_this$1'] = v; return this['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$LoginEventListener$1_this$1']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$LoginEventListener_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$LoginEventListener$1_this$1'] = lcA1;
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.handle__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['query__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2'](lcA1);
var lcA2 = stA0;
var stA0 = new io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView;
(refs_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView || (refs_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView = io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView(false))).constructor.cons__V.call(stA0);
var lcA3 = stA0;
var stA0 = lcA3;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA2,"instance");
stA0.setInstance__VLjava_lang_String_2(stA1);
(refs_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent || (refs_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent = io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent(false))).access$100__VLio_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent_2Lio_cloudoffice_platform_cockpit_adminmenu_AdminMenuView_2Lio_cloudoffice_platform_cockpit_api_MapBuilder_2(lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$LoginEventListener$1_this$1']['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$LoginEventListener_this$0'], lcA3, lcA2);
invoker.setView__VLjava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$LoginEventListener$1_this$1']['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$LoginEventListener_this$0'],lcA3);
var stA0 = invoker.getDefaultViewName__Ljava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$LoginEventListener$1_this$1']['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$LoginEventListener_this$0']);
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['toRaw__Ljava_lang_Object_2Ljava_lang_Object_2'](lcA3);
(refs_io_cloudoffice_platform_cockpit_js_VIEW || (refs_io_cloudoffice_platform_cockpit_js_VIEW = vm.io_cloudoffice_platform_cockpit_js_VIEW(false)))['bind__VLjava_lang_String_2Ljava_lang_Object_2'](stA0, stA1);
return;

};
c['handle__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$LoginEventListener$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$LoginEventListener$1', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_CallBack(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$LoginEventListener$1fillInstOf });
    io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$LoginEventListener$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/adminmenu/AdminMenuComponent$LoginEventListener$1';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_CallBack(false).constructor.$class
    ]; };
    CLS.$class.access = 65568;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_MapBuilder;
    var refs_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView;
    var refs_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent;
    var refs_net_java_html_json_Models;
    var refs_io_cloudoffice_platform_cockpit_js_VIEW;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$LoginEventListener$1_this$1'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$LoginEventListener$1 = io_cloudoffice_platform_cockpit_adminmenu_AdminMenuComponent$LoginEventListener$1;

vm.io_cloudoffice_platform_cockpit_api_AbstractComponent = link('io/cloudoffice/platform/cockpit/api/AbstractComponent', function(f) { vm.io_cloudoffice_platform_cockpit_api_AbstractComponent =  f; });
vm.io_cloudoffice_platform_cockpit_api_Logger = link('io/cloudoffice/platform/cockpit/api/Logger', function(f) { vm.io_cloudoffice_platform_cockpit_api_Logger =  f; });

function io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView$1() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView$1', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView$1fillInstOf });
    io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/adminmenu/AdminMenuView$1';
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
vm.io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView$1 = io_cloudoffice_platform_cockpit_adminmenu_AdminMenuView$1;


function io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration$1() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration$1', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration$1fillInstOf });
    io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/adminmenu/AdminmenuConfiguration$1';
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
vm.io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration$1 = io_cloudoffice_platform_cockpit_adminmenu_AdminmenuConfiguration$1;


function io_cloudoffice_platform_cockpit_adminmenu_App$1() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_adminmenu_App$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_adminmenu_App$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_adminmenu_App$1', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_adminmenu_App$1fillInstOf });
    io_cloudoffice_platform_cockpit_adminmenu_App$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/adminmenu/App$1';
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
vm.io_cloudoffice_platform_cockpit_adminmenu_App$1 = io_cloudoffice_platform_cockpit_adminmenu_App$1;

  invoker.clear__V = function(target) {
    return target['clear__V']();
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
  invoker.add__ZLjava_lang_Object_2 = function(target, p1) {
    return target['add__ZLjava_lang_Object_2'](p1);
  };
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
  invoker.post__VLjava_lang_String_2Ljava_lang_String_2Lio_cloudoffice_platform_cockpit_api_CallBack_2 = function(target, p1, p2, p3) {
    return target['post__VLjava_lang_String_2Ljava_lang_String_2Lio_cloudoffice_platform_cockpit_api_CallBack_2'](p1,p2,p3);
  };
  invoker.fetch__VLjava_lang_String_2Ljava_util_Map_2Lio_cloudoffice_platform_cockpit_api_CallBack_2 = function(target, p1, p2, p3) {
    return target['fetch__VLjava_lang_String_2Ljava_util_Map_2Lio_cloudoffice_platform_cockpit_api_CallBack_2'](p1,p2,p3);
  };
  invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2 = function(target, p1) {
    return target['append__Ljava_lang_StringBuilder_2Ljava_lang_String_2'](p1);
  };
  invoker.toString__Ljava_lang_String_2 = function(target) {
    return target['toString__Ljava_lang_String_2']();
  };
  invoker.getJsonObject__Lorg_json_JSONObject_2Ljava_lang_String_2 = function(target, p1) {
    return target['getJsonObject__Lorg_json_JSONObject_2Ljava_lang_String_2'](p1);
  };
  invoker.isEmpty__Z = function(target) {
    return target['isEmpty__Z']();
  };
  invoker.getJSONArray__Lorg_json_JSONArray_2Ljava_lang_String_2 = function(target, p1) {
    return target['getJSONArray__Lorg_json_JSONArray_2Ljava_lang_String_2'](p1);
  };
  invoker.toList__Ljava_util_List_2 = function(target) {
    return target['toList__Ljava_util_List_2']();
  };
  invoker.getString__Ljava_lang_String_2Ljava_lang_String_2 = function(target, p1) {
    return target['getString__Ljava_lang_String_2Ljava_lang_String_2'](p1);
  };
  invoker.getBoolean__ZLjava_lang_String_2 = function(target, p1) {
    return target['getBoolean__ZLjava_lang_String_2'](p1);
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
  invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2 = function(target, p1) {
    return target['boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2'](p1);
  };
  invoker.booleanValue__Z = function(target) {
    return target['booleanValue__Z']();
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
  invoker.createList__Ljava_util_List_2Ljava_lang_String_2I_3Ljava_lang_String_2 = function(target, p1, p2, p3) {
    return target['createList__Ljava_util_List_2Ljava_lang_String_2I_3Ljava_lang_String_2'](p1,p2,p3);
  };
  invoker.initTo__VLjava_util_Collection_2Ljava_lang_Object_2 = function(target, p1, p2) {
    return target['initTo__VLjava_util_Collection_2Ljava_lang_Object_2'](p1,p2);
  };
  invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2 = function(target, p1, p2) {
    return target['read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2'](p1,p2);
  };
  invoker.cloneList__VLjava_util_Collection_2Lnet_java_html_BrwsrCtx_2Ljava_util_Collection_2 = function(target, p1, p2, p3) {
    return target['cloneList__VLjava_util_Collection_2Lnet_java_html_BrwsrCtx_2Ljava_util_Collection_2'](p1,p2,p3);
  };
  invoker.replaceValue__VLjava_util_Collection_2Ljava_lang_Class_2Ljava_lang_Object_2 = function(target, p1, p2, p3) {
    return target['replaceValue__VLjava_util_Collection_2Ljava_lang_Class_2Ljava_lang_Object_2'](p1,p2,p3);
  };
  invoker.registerFunction__VLjava_lang_String_2I = function(target, p1, p2) {
    return target['registerFunction__VLjava_lang_String_2I'](p1,p2);
  };
  invoker.toModel__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2 = function(target, p1, p2) {
    return target['toModel__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2'](p1,p2);
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
  invoker.getInstanceId__Ljava_lang_String_2 = function(target) {
    return target['getInstanceId__Ljava_lang_String_2']();
  };
  invoker.setView__VLjava_lang_Object_2 = function(target, p1) {
    return target['setView__VLjava_lang_Object_2'](p1);
  };
  invoker.getDefaultViewName__Ljava_lang_String_2 = function(target) {
    return target['getDefaultViewName__Ljava_lang_String_2']();
  };
  exports['registerResource']('META-INF/MANIFEST.MF', 'TWFuaWZlc3QtVmVyc2lvbjogMS4wDQpCbmQtTGFzdE1vZGlmaWVkOiAxNTk3NzY0MDQ0MzU5DQpCdWlsZC1KZGs6IDEuOC4wXzEzMQ0KQnVpbHQtQnk6IGV1c2lhDQpCdW5kbGUtTWFuaWZlc3RWZXJzaW9uOiAyDQpCdW5kbGUtTmFtZTogR2FkZ2V0IEFkbWluIE1lbnUNCkJ1bmRsZS1TeW1ib2xpY05hbWU6IGlvLmNsb3Vkb2ZmaWNlLnBsYXRmb3JtLmNvY2twaXQuYWRtaW5tZW51DQpCdW5kbGUtVmVyc2lvbjogMS4xLjANCkNyZWF0ZWQtQnk6IEFwYWNoZSBNYXZlbiBCdW5kbGUgUGx1Z2luDQpFeHBvcnQtUGFja2FnZTogaW8uY2xvdWRvZmZpY2UucGxhdGZvcm0uY29ja3BpdC5hZG1pbm1lbnU7dXNlczo9ImlvLmNsb3UNCiBkb2ZmaWNlLnBsYXRmb3JtLmNvY2twaXQuYXBpIjt2ZXJzaW9uPSIxLjEuMCINCkltcG9ydC1QYWNrYWdlOiBpby5jbG91ZG9mZmljZS5wbGF0Zm9ybS5jb2NrcGl0LmFwaTt2ZXJzaW9uPSJbMS4xLDIpIixpbw0KIC5jbG91ZG9mZmljZS5wbGF0Zm9ybS5jb2NrcGl0LmpzO3ZlcnNpb249IlsxLjEsMikiLG5ldC5qYXZhLmh0bWw7dmVyc2lvDQogbj0iWzEuNiwyKSIsbmV0LmphdmEuaHRtbC5qc29uO3ZlcnNpb249IlsxLjYsMikiLG9yZy5qc29uO3ZlcnNpb249IlsyMDENCiA4MDgxMy4wLDIwMTgwODE0KSIsb3JnLm5ldGJlYW5zLmh0bWwuanNvbi5zcGk7dmVyc2lvbj0iWzEuNiwyKSINClRvb2w6IEJuZC0yLjEuMC4yMDEzMDQyNi0xMjIyMTMNCg==');
});