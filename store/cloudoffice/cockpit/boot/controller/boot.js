bck2brwsr.register({
  'magic' : 'kafčo'
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

function io_cloudoffice_platform_cockpit_boot_BootComponent$1() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_boot_BootComponent$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_boot_BootComponent$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_boot_BootComponent$1', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_boot_BootComponent$1fillInstOf });
    io_cloudoffice_platform_cockpit_boot_BootComponent$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/boot/BootComponent$1';
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
vm.io_cloudoffice_platform_cockpit_boot_BootComponent$1 = io_cloudoffice_platform_cockpit_boot_BootComponent$1;


function io_cloudoffice_platform_cockpit_boot_BootComponent$BootListener() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_boot_BootComponent$BootListener;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._this$0 = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_boot_BootComponent$BootListener_this$0'] = v; return this['fld_io_cloudoffice_platform_cockpit_boot_BootComponent$BootListener_this$0']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_boot_BootComponent_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_boot_BootComponent$BootListener_this$0'] = lcA1;
(refs_java_lang_Object || (refs_java_lang_Object = vm.java_lang_Object(false))).constructor['cons__V'].call(lcA0);
return;

};
CLS['cons__VLio_cloudoffice_platform_cockpit_boot_BootComponent_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.onReceive__VLio_cloudoffice_platform_cockpit_api_Signal_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = invoker.getFlags__Ljava_util_Map_2((refs_io_cloudoffice_platform_cockpit_api_Components || (refs_io_cloudoffice_platform_cockpit_api_Components = vm.io_cloudoffice_platform_cockpit_api_Components(false)))['_BOOT']());
var stI0 = invoker.containsKey__ZLjava_lang_Object_2(stA0,"start");
if ((stI0) == 0) { gt = 79; break IF; }
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_HistoryTracker;
(refs_io_cloudoffice_platform_cockpit_api_HistoryTracker || (refs_io_cloudoffice_platform_cockpit_api_HistoryTracker = vm.io_cloudoffice_platform_cockpit_api_HistoryTracker(false))).constructor['cons__V'].call(stA0);
var lcA2 = stA0;
var stA0 = lcA2;var stA1 = (refs_io_cloudoffice_platform_cockpit_api_Application || (refs_io_cloudoffice_platform_cockpit_api_Application = vm.io_cloudoffice_platform_cockpit_api_Application(false)))['getBrowserContext__Lnet_java_html_BrwsrCtx_2']();
var stA0 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA0, stA1);
var stA0 = invoker.getName__Ljava_lang_String_2((refs_io_cloudoffice_platform_cockpit_api_HistoryTracker || (refs_io_cloudoffice_platform_cockpit_api_HistoryTracker = vm.io_cloudoffice_platform_cockpit_api_HistoryTracker(false))).constructor.$class);
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['toRaw__Ljava_lang_Object_2Ljava_lang_Object_2'](lcA2);
(refs_io_cloudoffice_platform_cockpit_js_VIEW || (refs_io_cloudoffice_platform_cockpit_js_VIEW = vm.io_cloudoffice_platform_cockpit_js_VIEW(false)))['bind__VLjava_lang_String_2Ljava_lang_Object_2'](stA0, stA1);
var stA0 = invoker.getName__Ljava_lang_String_2((refs_io_cloudoffice_platform_cockpit_api_HistoryTracker || (refs_io_cloudoffice_platform_cockpit_api_HistoryTracker = vm.io_cloudoffice_platform_cockpit_api_HistoryTracker(false))).constructor.$class);
(refs_io_cloudoffice_platform_cockpit_js_History || (refs_io_cloudoffice_platform_cockpit_js_History = vm.io_cloudoffice_platform_cockpit_js_History(false)))['installTracker__VLjava_lang_String_2Ljava_lang_String_2'](stA0, "track");
(refs_io_cloudoffice_platform_cockpit_boot_BootComponent || (refs_io_cloudoffice_platform_cockpit_boot_BootComponent = io_cloudoffice_platform_cockpit_boot_BootComponent(false))).access$100__VLio_cloudoffice_platform_cockpit_boot_BootComponent_2(lcA0['fld_io_cloudoffice_platform_cockpit_boot_BootComponent$BootListener_this$0']);
var stA0 = invoker.getFlags__Ljava_util_Map_2((refs_io_cloudoffice_platform_cockpit_api_Components || (refs_io_cloudoffice_platform_cockpit_api_Components = vm.io_cloudoffice_platform_cockpit_api_Components(false)))['_BOOT']());
var stA0 = invoker.remove__Ljava_lang_Object_2Ljava_lang_Object_2(stA0,"start");
    }
    X_79: for (;;) { IF: if (gt <= 79) {
(refs_io_cloudoffice_platform_cockpit_api_Session$HistoryManager || (refs_io_cloudoffice_platform_cockpit_api_Session$HistoryManager = vm.io_cloudoffice_platform_cockpit_api_Session$HistoryManager(false)))['replace__V']();
var stA0 = invoker.getAction__Ljava_lang_String_2(lcA1);
var stI0 = invoker.equalsIgnoreCase__ZLjava_lang_String_2(stA0,"reboot");
if ((stI0) == 0) { gt = 106; break IF; }
var stA0 = (refs_io_cloudoffice_platform_cockpit_js_VIEW || (refs_io_cloudoffice_platform_cockpit_js_VIEW = vm.io_cloudoffice_platform_cockpit_js_VIEW(false)))['clear__Ljava_lang_Object_2']();
(refs_io_cloudoffice_platform_cockpit_js_VIEW || (refs_io_cloudoffice_platform_cockpit_js_VIEW = vm.io_cloudoffice_platform_cockpit_js_VIEW(false)))['windowReload__V']();
{ gt = 186; break IF; }
    }
    X_106: for (;;) { IF: if (gt <= 106) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_js_JSUIUtils || (refs_io_cloudoffice_platform_cockpit_js_JSUIUtils = vm.io_cloudoffice_platform_cockpit_js_JSUIUtils(false)))['getCompany__Ljava_lang_String_2']();
var lcA2 = stA0;
var stA0 = (refs_io_cloudoffice_platform_cockpit_js_JSUIUtils || (refs_io_cloudoffice_platform_cockpit_js_JSUIUtils = vm.io_cloudoffice_platform_cockpit_js_JSUIUtils(false)))['getSite__Ljava_lang_String_2']();
var lcA3 = stA0;
var stA0 = (refs_io_cloudoffice_platform_cockpit_js_JSUIUtils || (refs_io_cloudoffice_platform_cockpit_js_JSUIUtils = vm.io_cloudoffice_platform_cockpit_js_JSUIUtils(false)))['getLayout__Ljava_lang_String_2']();
var lcA4 = stA0;
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['builder__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2']();
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2(stA0,"company", lcA2);
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2(stA0,"site", lcA3);
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2(stA0,"layout", lcA4);
var lcA5 = stA0;
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"BOOTING:");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,lcA2);
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
(refs_io_cloudoffice_platform_cockpit_api_Logger || (refs_io_cloudoffice_platform_cockpit_api_Logger = vm.io_cloudoffice_platform_cockpit_api_Logger(false)))['log__VLjava_lang_String_2'](stA0);
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_Components || (refs_io_cloudoffice_platform_cockpit_api_Components = vm.io_cloudoffice_platform_cockpit_api_Components(false)))['_LAYOUT']();var stA1 = new vm.io_cloudoffice_platform_cockpit_api_Event;
(refs_io_cloudoffice_platform_cockpit_api_Event || (refs_io_cloudoffice_platform_cockpit_api_Event = vm.io_cloudoffice_platform_cockpit_api_Event(false))).constructor['cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2'].call(stA1, "loginsuccess", "loginsuccess", lcA5);
invoker.listen__VLio_cloudoffice_platform_cockpit_api_Signal_2(stA0,stA1);
    }
    X_186: for (;;) { IF: if (gt <= 186) {
return;

    }
}}}}
};
c['onReceive__VLio_cloudoffice_platform_cockpit_api_Signal_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_boot_BootComponent$BootListenerfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_boot_BootComponent$BootListener', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_EventListener(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_boot_BootComponent$BootListenerfillInstOf });
    io_cloudoffice_platform_cockpit_boot_BootComponent$BootListenerfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/boot/BootComponent$BootListener';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_EventListener(false).constructor.$class
    ]; };
    CLS.$class.access = 33;
    CLS.$class.cnstr = CLS;
    var refs_java_lang_Object;
    var refs_io_cloudoffice_platform_cockpit_api_Components;
    var refs_io_cloudoffice_platform_cockpit_api_HistoryTracker;
    var refs_io_cloudoffice_platform_cockpit_api_Application;
    var refs_net_java_html_json_Models;
    var refs_io_cloudoffice_platform_cockpit_js_VIEW;
    var refs_io_cloudoffice_platform_cockpit_js_History;
    var refs_io_cloudoffice_platform_cockpit_boot_BootComponent;
    var refs_io_cloudoffice_platform_cockpit_api_Session$HistoryManager;
    var refs_io_cloudoffice_platform_cockpit_js_JSUIUtils;
    var refs_io_cloudoffice_platform_cockpit_api_MapBuilder;
    var refs_java_lang_StringBuilder;
    var refs_io_cloudoffice_platform_cockpit_api_Logger;
    var refs_io_cloudoffice_platform_cockpit_api_Event;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_boot_BootComponent$BootListener_this$0'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_boot_BootComponent$BootListener = registerClass(exports,'io_cloudoffice_platform_cockpit_boot_BootComponent$BootListener',io_cloudoffice_platform_cockpit_boot_BootComponent$BootListener);

vm.io_cloudoffice_platform_cockpit_api_EventListener = link('io/cloudoffice/platform/cockpit/api/EventListener', function(f) { vm.io_cloudoffice_platform_cockpit_api_EventListener =  f; });
vm.io_cloudoffice_platform_cockpit_api_Event = link('io/cloudoffice/platform/cockpit/api/Event', function(f) { vm.io_cloudoffice_platform_cockpit_api_Event =  f; });
vm.io_cloudoffice_platform_cockpit_api_Logger = link('io/cloudoffice/platform/cockpit/api/Logger', function(f) { vm.io_cloudoffice_platform_cockpit_api_Logger =  f; });
vm.java_lang_StringBuilder = link('java/lang/StringBuilder', function(f) { vm.java_lang_StringBuilder =  f; });
vm.io_cloudoffice_platform_cockpit_api_MapBuilder = link('io/cloudoffice/platform/cockpit/api/MapBuilder', function(f) { vm.io_cloudoffice_platform_cockpit_api_MapBuilder =  f; });
vm.io_cloudoffice_platform_cockpit_js_JSUIUtils = link('io/cloudoffice/platform/cockpit/js/JSUIUtils', function(f) { vm.io_cloudoffice_platform_cockpit_js_JSUIUtils =  f; });
vm.io_cloudoffice_platform_cockpit_api_Session$HistoryManager = link('io/cloudoffice/platform/cockpit/api/Session$HistoryManager', function(f) { vm.io_cloudoffice_platform_cockpit_api_Session$HistoryManager =  f; });

function io_cloudoffice_platform_cockpit_boot_BootComponent() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_boot_BootComponent;
  if (!CLS.$class) {
    var pp = vm.io_cloudoffice_platform_cockpit_api_AbstractComponent(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_boot_BootContext_2 = function(lcA1) {
  var  lcA0 = this;
(refs_io_cloudoffice_platform_cockpit_api_AbstractComponent || (refs_io_cloudoffice_platform_cockpit_api_AbstractComponent = vm.io_cloudoffice_platform_cockpit_api_AbstractComponent(false))).constructor['cons__V'].call(lcA0);
invoker.setView__VLjava_lang_Object_2(lcA0,lcA1);
return;

};
CLS['cons__VLio_cloudoffice_platform_cockpit_boot_BootContext_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.bindEventListeners__V = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = "indexviewchange";var stA2 = new io_cloudoffice_platform_cockpit_boot_BootComponent$IndexViewChangeListener;
(refs_io_cloudoffice_platform_cockpit_boot_BootComponent$IndexViewChangeListener || (refs_io_cloudoffice_platform_cockpit_boot_BootComponent$IndexViewChangeListener = io_cloudoffice_platform_cockpit_boot_BootComponent$IndexViewChangeListener(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_boot_BootComponent_2.call(stA2, lcA0);
invoker.attachListener__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_EventListener_2(stA0,stA1, stA2);
var stA0 = lcA0;var stA1 = "boot";var stA2 = new io_cloudoffice_platform_cockpit_boot_BootComponent$BootListener;
(refs_io_cloudoffice_platform_cockpit_boot_BootComponent$BootListener || (refs_io_cloudoffice_platform_cockpit_boot_BootComponent$BootListener = io_cloudoffice_platform_cockpit_boot_BootComponent$BootListener(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_boot_BootComponent_2.call(stA2, lcA0);
invoker.attachListener__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_EventListener_2(stA0,stA1, stA2);
var stA0 = lcA0;var stA1 = "wsconnect";var stA2 = new io_cloudoffice_platform_cockpit_boot_BootComponent$WSConnectionListener;
(refs_io_cloudoffice_platform_cockpit_boot_BootComponent$WSConnectionListener || (refs_io_cloudoffice_platform_cockpit_boot_BootComponent$WSConnectionListener = io_cloudoffice_platform_cockpit_boot_BootComponent$WSConnectionListener(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_boot_BootComponent$1_2.call(stA2, null);
invoker.attachListener__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_EventListener_2(stA0,stA1, stA2);
return;

};
c['bindEventListeners__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.onError__VLio_cloudoffice_platform_cockpit_api_Error_2Lio_cloudoffice_platform_cockpit_api_Source_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = invoker.getView__Ljava_lang_Object_2(lcA0);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_boot_BootContext']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.boot.BootContext');
var stA0 = stA0.getMessagebar__Lio_cloudoffice_platform_cockpit_api_HelperItemView_2();
invoker.setActive__VZ(stA0,1);
var stA0 = invoker.getView__Ljava_lang_Object_2(lcA0);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_boot_BootContext']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.boot.BootContext');
var stA0 = stA0.getMessagebar__Lio_cloudoffice_platform_cockpit_api_HelperItemView_2();
var stA1 = invoker.getException__Ljava_lang_Exception_2(lcA1);
var stA1 = invoker.getMessage__Ljava_lang_String_2(stA1);
invoker.setInfo__VLjava_lang_String_2(stA0,stA1);
return;

};
c['onError__VLio_cloudoffice_platform_cockpit_api_Error_2Lio_cloudoffice_platform_cockpit_api_Source_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.bindViewNames__V = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.getName__Ljava_lang_String_2((refs_io_cloudoffice_platform_cockpit_boot_BootContext || (refs_io_cloudoffice_platform_cockpit_boot_BootContext = io_cloudoffice_platform_cockpit_boot_BootContext(false))).constructor.$class);
invoker.setDefaultViewName__VLjava_lang_String_2(stA0,stA1);
return;

};
c['bindViewNames__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setComponentName__V = function() {
  var  lcA0 = this;
return;

};
c['setComponentName__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.initLayoutComponent__V = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
try {
var stA0 = (refs_java_lang_Class || (refs_java_lang_Class = vm.java_lang_Class(false)))['forName__Ljava_lang_Class_2Ljava_lang_String_2']("io.cloudoffice.platform.cockpit.layout.LayoutComponent");
var lcA1 = stA0;
var stA0 = lcA1;var stA1 = "getDefaultInstance";var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Class;', vm.java_lang_Class, 0);
var stA0 = invoker.getMethod__Ljava_lang_reflect_Method_2Ljava_lang_String_2_3Ljava_lang_Class_2(stA0,stA1, stA2);
var lcA2 = stA0;
var stA0 = lcA2;var stA1 = null;var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 0);
var stA0 = invoker.invoke__Ljava_lang_Object_2Ljava_lang_Object_2_3Ljava_lang_Object_2(stA0,stA1, stA2);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_api_Component']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.api.Component');
(refs_io_cloudoffice_platform_cockpit_api_Components || (refs_io_cloudoffice_platform_cockpit_api_Components = vm.io_cloudoffice_platform_cockpit_api_Components(false)))._LAYOUT(stA0);
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_ClassNotFoundException']) {var stA0 = e;{ gt = 35; break IF; }}
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_IllegalAccessException']) {var stA0 = e;{ gt = 69; break IF; }}
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_NoSuchMethodException']) {var stA0 = e;{ gt = 103; break IF; }}
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_SecurityException']) {var stA0 = e;{ gt = 137; break IF; }}
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_IllegalArgumentException']) {var stA0 = e;{ gt = 171; break IF; }}
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_reflect_InvocationTargetException']) {var stA0 = e;{ gt = 205; break IF; }}
throw e;
}{ gt = 236; break IF; }
    }
    X_35: for (;;) { IF: if (gt <= 35) {
var lcA1 = stA0;
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var stA1 = invoker.getName__Ljava_lang_String_2(c.constructor.$class);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"::initLayoutComponent::");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2(stA0,lcA1);
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
(refs_io_cloudoffice_platform_cockpit_api_Logger || (refs_io_cloudoffice_platform_cockpit_api_Logger = vm.io_cloudoffice_platform_cockpit_api_Logger(false)))['log__VLjava_lang_String_2'](stA0);
{ gt = 236; break IF; }
    }
    X_69: for (;;) { IF: if (gt <= 69) {
var lcA1 = stA0;
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var stA1 = invoker.getName__Ljava_lang_String_2(c.constructor.$class);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"::initLayoutComponent::");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2(stA0,lcA1);
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
(refs_io_cloudoffice_platform_cockpit_api_Logger || (refs_io_cloudoffice_platform_cockpit_api_Logger = vm.io_cloudoffice_platform_cockpit_api_Logger(false)))['log__VLjava_lang_String_2'](stA0);
{ gt = 236; break IF; }
    }
    X_103: for (;;) { IF: if (gt <= 103) {
var lcA1 = stA0;
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var stA1 = invoker.getName__Ljava_lang_String_2(c.constructor.$class);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"::initLayoutComponent::");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2(stA0,lcA1);
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
(refs_io_cloudoffice_platform_cockpit_api_Logger || (refs_io_cloudoffice_platform_cockpit_api_Logger = vm.io_cloudoffice_platform_cockpit_api_Logger(false)))['log__VLjava_lang_String_2'](stA0);
{ gt = 236; break IF; }
    }
    X_137: for (;;) { IF: if (gt <= 137) {
var lcA1 = stA0;
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var stA1 = invoker.getName__Ljava_lang_String_2(c.constructor.$class);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"::initLayoutComponent::");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2(stA0,lcA1);
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
(refs_io_cloudoffice_platform_cockpit_api_Logger || (refs_io_cloudoffice_platform_cockpit_api_Logger = vm.io_cloudoffice_platform_cockpit_api_Logger(false)))['log__VLjava_lang_String_2'](stA0);
{ gt = 236; break IF; }
    }
    X_171: for (;;) { IF: if (gt <= 171) {
var lcA1 = stA0;
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var stA1 = invoker.getName__Ljava_lang_String_2(c.constructor.$class);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"::initLayoutComponent::");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2(stA0,lcA1);
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
(refs_io_cloudoffice_platform_cockpit_api_Logger || (refs_io_cloudoffice_platform_cockpit_api_Logger = vm.io_cloudoffice_platform_cockpit_api_Logger(false)))['log__VLjava_lang_String_2'](stA0);
{ gt = 236; break IF; }
    }
    X_205: for (;;) { IF: if (gt <= 205) {
var lcA1 = stA0;
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var stA1 = invoker.getName__Ljava_lang_String_2(c.constructor.$class);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"::initLayoutComponent::");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2(stA0,lcA1);
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
(refs_io_cloudoffice_platform_cockpit_api_Logger || (refs_io_cloudoffice_platform_cockpit_api_Logger = vm.io_cloudoffice_platform_cockpit_api_Logger(false)))['log__VLjava_lang_String_2'](stA0);
    }
    X_236: for (;;) { IF: if (gt <= 236) {
return;

    }
}}}}}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.initWSConnection__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2 = function(lcA0, lcA1, lcA2, lcA3) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_WSMessageHandler;
(refs_io_cloudoffice_platform_cockpit_api_WSMessageHandler || (refs_io_cloudoffice_platform_cockpit_api_WSMessageHandler = vm.io_cloudoffice_platform_cockpit_api_WSMessageHandler(false))).constructor['cons__V'].call(stA0);
var lcA4 = stA0;
var lcA5 = null;
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_Application || (refs_io_cloudoffice_platform_cockpit_api_Application = vm.io_cloudoffice_platform_cockpit_api_Application(false)))['getApplicationContext__Lio_cloudoffice_platform_cockpit_api_ApplicationContext_2']();
var stA0 = invoker.getDevice__Ljava_lang_String_2(stA0);
var stI0 = invoker.equalsIgnoreCase__ZLjava_lang_String_2(stA0,(refs_io_cloudoffice_platform_cockpit_api_Application || (refs_io_cloudoffice_platform_cockpit_api_Application = vm.io_cloudoffice_platform_cockpit_api_Application(false)))['_WEB']());
if ((stI0) == 0) { gt = 47; break IF; }
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_WebWSConnectionManager;
(refs_io_cloudoffice_platform_cockpit_api_WebWSConnectionManager || (refs_io_cloudoffice_platform_cockpit_api_WebWSConnectionManager = vm.io_cloudoffice_platform_cockpit_api_WebWSConnectionManager(false))).constructor['cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Lio_cloudoffice_platform_cockpit_api_WSMessageHandler_2'].call(stA0, lcA0, lcA1, lcA2, lcA3, lcA4);
var lcA5 = stA0;
(refs_io_cloudoffice_platform_cockpit_api_Application || (refs_io_cloudoffice_platform_cockpit_api_Application = vm.io_cloudoffice_platform_cockpit_api_Application(false)))['setWsConnectionManager__VLio_cloudoffice_platform_cockpit_api_ConnectionManager_2'](lcA5);
    }
    X_47: for (;;) { IF: if (gt <= 47) {

if ((null) === (lcA5)) { gt = 60; break IF; }
invoker.connect__V(lcA5);
    }
    X_60: for (;;) { IF: if (gt <= 60) {
return;

    }
}}}
};
c['initWSConnection__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.access$100__VLio_cloudoffice_platform_cockpit_boot_BootComponent_2 = function(lcA0) {
c.initLayoutComponent__V.call(lcA0);
return;

};
    m.access = 4104;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_boot_BootComponentfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_boot_BootComponent', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_boot_BootComponentfillInstOf });
    io_cloudoffice_platform_cockpit_boot_BootComponentfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/boot/BootComponent';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 33;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_AbstractComponent;
    var refs_io_cloudoffice_platform_cockpit_boot_BootComponent$IndexViewChangeListener;
    var refs_io_cloudoffice_platform_cockpit_boot_BootComponent$BootListener;
    var refs_io_cloudoffice_platform_cockpit_boot_BootComponent$WSConnectionListener;
    var refs_io_cloudoffice_platform_cockpit_boot_BootContext;
    var refs_java_lang_Class;
    var refs_io_cloudoffice_platform_cockpit_api_Components;
    var refs_java_lang_StringBuilder;
    var refs_io_cloudoffice_platform_cockpit_api_Logger;
    var refs_io_cloudoffice_platform_cockpit_api_WSMessageHandler;
    var refs_io_cloudoffice_platform_cockpit_api_Application;
    var refs_io_cloudoffice_platform_cockpit_api_WebWSConnectionManager;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_boot_BootComponent = registerClass(exports,'io_cloudoffice_platform_cockpit_boot_BootComponent',io_cloudoffice_platform_cockpit_boot_BootComponent);

vm.io_cloudoffice_platform_cockpit_api_WebWSConnectionManager = link('io/cloudoffice/platform/cockpit/api/WebWSConnectionManager', function(f) { vm.io_cloudoffice_platform_cockpit_api_WebWSConnectionManager =  f; });
vm.io_cloudoffice_platform_cockpit_api_WSMessageHandler = link('io/cloudoffice/platform/cockpit/api/WSMessageHandler', function(f) { vm.io_cloudoffice_platform_cockpit_api_WSMessageHandler =  f; });
vm.java_lang_reflect_InvocationTargetException = link('java/lang/reflect/InvocationTargetException', function(f) { vm.java_lang_reflect_InvocationTargetException =  f; });
vm.java_lang_IllegalArgumentException = link('java/lang/IllegalArgumentException', function(f) { vm.java_lang_IllegalArgumentException =  f; });
vm.java_lang_SecurityException = link('java/lang/SecurityException', function(f) { vm.java_lang_SecurityException =  f; });
vm.java_lang_NoSuchMethodException = link('java/lang/NoSuchMethodException', function(f) { vm.java_lang_NoSuchMethodException =  f; });
vm.java_lang_IllegalAccessException = link('java/lang/IllegalAccessException', function(f) { vm.java_lang_IllegalAccessException =  f; });
vm.java_lang_ClassNotFoundException = link('java/lang/ClassNotFoundException', function(f) { vm.java_lang_ClassNotFoundException =  f; });

function io_cloudoffice_platform_cockpit_boot_BootContext() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_boot_BootContext;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_TYPE'] = null;
  m = c._TYPE = function (v) {  if (arguments.length == 1) CLS['fld_TYPE'] = v; return CLS['fld_TYPE']; };
  m = c._proto = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_boot_BootContext_proto'] = v; return this['fld_io_cloudoffice_platform_cockpit_boot_BootContext_proto']; };
  m = c._prop_view = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_boot_BootContext_prop_view'] = v; return this['fld_io_cloudoffice_platform_cockpit_boot_BootContext_prop_view']; };
  m = c._prop_messagebar = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_boot_BootContext_prop_messagebar'] = v; return this['fld_io_cloudoffice_platform_cockpit_boot_BootContext_prop_messagebar']; };
  m = c._prop_url = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_boot_BootContext_prop_url'] = v; return this['fld_io_cloudoffice_platform_cockpit_boot_BootContext_prop_url']; };
    m = c.modelFor__Ljava_lang_Class_2 = function() {
return (refs_io_cloudoffice_platform_cockpit_boot_BootComponent || (refs_io_cloudoffice_platform_cockpit_boot_BootComponent = io_cloudoffice_platform_cockpit_boot_BootComponent(false))).constructor.$class;

};
    m.access = 10;
    m.cls = CLS;
    m = c.getView__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_boot_BootContext_proto'],"view");
if ((lcA0['fld_io_cloudoffice_platform_cockpit_boot_BootContext_prop_view']) !== (c._TYPE())) { gt = 40; break IF; }
var stA0 = lcA0;var stA1 = new vm.io_cloudoffice_platform_cockpit_api_ComponentDef;
(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor['cons__V'].call(stA1);
var stA2 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_boot_BootContext_proto']);
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, stA2);
stA0['fld_io_cloudoffice_platform_cockpit_boot_BootContext_prop_view'] = stA1;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

if (lcA0['fld_io_cloudoffice_platform_cockpit_boot_BootContext_prop_view'] !== null && !lcA0['fld_io_cloudoffice_platform_cockpit_boot_BootContext_prop_view']['$instOf_io_cloudoffice_platform_cockpit_api_ComponentDef']) vm.java_lang_Class(false).castEx(lcA0['fld_io_cloudoffice_platform_cockpit_boot_BootContext_prop_view'], 'io.cloudoffice.platform.cockpit.api.ComponentDef');
return lcA0['fld_io_cloudoffice_platform_cockpit_boot_BootContext_prop_view'];

    }
}}
};
c['getView__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setView__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_boot_BootContext_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_boot_BootContext_prop_view'];
if ((lcA2) !== (lcA1)) { gt = 18; break IF; }
return;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

lcA0['fld_io_cloudoffice_platform_cockpit_boot_BootContext_prop_view'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_boot_BootContext_proto'],"view", lcA2, lcA1);
return;

    }
}}
};
c['setView__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getMessagebar__Lio_cloudoffice_platform_cockpit_api_HelperItemView_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_boot_BootContext_proto'],"messagebar");
if ((lcA0['fld_io_cloudoffice_platform_cockpit_boot_BootContext_prop_messagebar']) !== (c._TYPE())) { gt = 40; break IF; }
var stA0 = lcA0;var stA1 = new vm.io_cloudoffice_platform_cockpit_api_HelperItemView;
(refs_io_cloudoffice_platform_cockpit_api_HelperItemView || (refs_io_cloudoffice_platform_cockpit_api_HelperItemView = vm.io_cloudoffice_platform_cockpit_api_HelperItemView(false))).constructor['cons__V'].call(stA1);
var stA2 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_boot_BootContext_proto']);
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, stA2);
stA0['fld_io_cloudoffice_platform_cockpit_boot_BootContext_prop_messagebar'] = stA1;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

if (lcA0['fld_io_cloudoffice_platform_cockpit_boot_BootContext_prop_messagebar'] !== null && !lcA0['fld_io_cloudoffice_platform_cockpit_boot_BootContext_prop_messagebar']['$instOf_io_cloudoffice_platform_cockpit_api_HelperItemView']) vm.java_lang_Class(false).castEx(lcA0['fld_io_cloudoffice_platform_cockpit_boot_BootContext_prop_messagebar'], 'io.cloudoffice.platform.cockpit.api.HelperItemView');
return lcA0['fld_io_cloudoffice_platform_cockpit_boot_BootContext_prop_messagebar'];

    }
}}
};
c['getMessagebar__Lio_cloudoffice_platform_cockpit_api_HelperItemView_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setMessagebar__VLio_cloudoffice_platform_cockpit_api_HelperItemView_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_boot_BootContext_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_boot_BootContext_prop_messagebar'];
if ((lcA2) !== (lcA1)) { gt = 18; break IF; }
return;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

lcA0['fld_io_cloudoffice_platform_cockpit_boot_BootContext_prop_messagebar'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_boot_BootContext_proto'],"messagebar", lcA2, lcA1);
return;

    }
}}
};
c['setMessagebar__VLio_cloudoffice_platform_cockpit_api_HelperItemView_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getUrl__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_boot_BootContext_proto'],"url");
return lcA0['fld_io_cloudoffice_platform_cockpit_boot_BootContext_prop_url'];

};
c['getUrl__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setUrl__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_boot_BootContext_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_boot_BootContext_prop_url'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_boot_BootContext_prop_url'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_boot_BootContext_proto'],"url", lcA2, lcA1);
return;

    }
}}
};
c['setUrl__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;
(refs_java_lang_Object || (refs_java_lang_Object = vm.java_lang_Object(false))).constructor['cons__V'].call(lcA0);
var stA0 = lcA0;var stA1 = invoker.createProto__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2(c._TYPE(),lcA0, lcA1);
stA0['fld_io_cloudoffice_platform_cockpit_boot_BootContext_proto'] = stA1;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = (refs_net_java_html_BrwsrCtx || (refs_net_java_html_BrwsrCtx = vm.net_java_html_BrwsrCtx(false)))['findDefault__Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'](c.constructor.$class);
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, stA1);
lcA0['fld_io_cloudoffice_platform_cockpit_boot_BootContext_prop_view'] = c._TYPE();
lcA0['fld_io_cloudoffice_platform_cockpit_boot_BootContext_prop_messagebar'] = c._TYPE();
return;

};
CLS['cons__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2Lio_cloudoffice_platform_cockpit_api_HelperItemView_2Ljava_lang_String_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = (refs_net_java_html_BrwsrCtx || (refs_net_java_html_BrwsrCtx = vm.net_java_html_BrwsrCtx(false)))['findDefault__Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'](c.constructor.$class);
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, stA1);
lcA0['fld_io_cloudoffice_platform_cockpit_boot_BootContext_prop_view'] = lcA1;
lcA0['fld_io_cloudoffice_platform_cockpit_boot_BootContext_prop_messagebar'] = lcA2;
lcA0['fld_io_cloudoffice_platform_cockpit_boot_BootContext_prop_url'] = lcA3;
return;

};
CLS['cons__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2Lio_cloudoffice_platform_cockpit_api_HelperItemView_2Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 3);
var lcA3 = stA0;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_boot_BootContext_proto'];var stA1 = lcA2;var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, 3);
Array.at(stA2, 0, "view");
Array.at(stA2, 1, "messagebar");
Array.at(stA2, 2, "url");
invoker.extract__VLjava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Object_2(stA0,stA1, stA2, lcA3);
var stA0 = lcA0;var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_boot_BootContext_proto'],(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor.$class, (lcA3[0] || Array.at(lcA3, 0)));
stA0['fld_io_cloudoffice_platform_cockpit_boot_BootContext_prop_view'] = stA1;
var stA0 = lcA0;var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_boot_BootContext_proto'],(refs_io_cloudoffice_platform_cockpit_api_HelperItemView || (refs_io_cloudoffice_platform_cockpit_api_HelperItemView = vm.io_cloudoffice_platform_cockpit_api_HelperItemView(false))).constructor.$class, (lcA3[1] || Array.at(lcA3, 1)));
stA0['fld_io_cloudoffice_platform_cockpit_boot_BootContext_prop_messagebar'] = stA1;
if ((lcA3[2] || Array.at(lcA3, 2)) !== null && !(lcA3[2] || Array.at(lcA3, 2))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[2] || Array.at(lcA3, 2)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_boot_BootContext_prop_url'] = (lcA3[2] || Array.at(lcA3, 2));
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
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"view");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_boot_BootContext_prop_view']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"messagebar");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_boot_BootContext_prop_messagebar']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"url");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getUrl__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(125));
var stA0 = invoker.toString__Ljava_lang_String_2(lcA1);
return stA0;

};
c['toString__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Lio_cloudoffice_platform_cockpit_boot_BootContext_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_boot_BootContext_proto']);
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_boot_BootContext_2Lnet_java_html_BrwsrCtx_2.call(stA0, stA1);
return stA0;

};
c['clone__Lio_cloudoffice_platform_cockpit_boot_BootContext_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Lio_cloudoffice_platform_cockpit_boot_BootContext_2Lnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
var stA0 = new io_cloudoffice_platform_cockpit_boot_BootContext;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, lcA1);
var lcA2 = stA0;
var stA0 = lcA2;if ((lcA0['fld_io_cloudoffice_platform_cockpit_boot_BootContext_prop_view']) !== null) { gt = 21; break IF; }
var stA1 = null;{ gt = 45; break IF; }
    }
    X_21: for (;;) { IF: if (gt <= 21) {

if ((lcA0['fld_io_cloudoffice_platform_cockpit_boot_BootContext_prop_view']) !== (c._TYPE())) { gt = 37; break IF; }
var stA1 = c._TYPE();{ gt = 45; break IF; }
    }
    X_37: for (;;) { IF: if (gt <= 37) {

var stA1 = lcA0.getView__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, lcA1);
    }
    X_45: for (;;) { IF: if (gt <= 45) {
stA0['fld_io_cloudoffice_platform_cockpit_boot_BootContext_prop_view'] = stA1;
var stA0 = lcA2;if ((lcA0['fld_io_cloudoffice_platform_cockpit_boot_BootContext_prop_messagebar']) !== null) { gt = 60; break IF; }
var stA1 = null;{ gt = 84; break IF; }
    }
    X_60: for (;;) { IF: if (gt <= 60) {

if ((lcA0['fld_io_cloudoffice_platform_cockpit_boot_BootContext_prop_messagebar']) !== (c._TYPE())) { gt = 76; break IF; }
var stA1 = c._TYPE();{ gt = 84; break IF; }
    }
    X_76: for (;;) { IF: if (gt <= 76) {

var stA1 = lcA0.getMessagebar__Lio_cloudoffice_platform_cockpit_api_HelperItemView_2();
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, lcA1);
    }
    X_84: for (;;) { IF: if (gt <= 84) {
stA0['fld_io_cloudoffice_platform_cockpit_boot_BootContext_prop_messagebar'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getUrl__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_boot_BootContext_prop_url'] = stA1;
return lcA2;

    }
}}}}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.applyBindings__Lio_cloudoffice_platform_cockpit_boot_BootContext_2 = function() {
  var  lcA0 = this;
invoker.applyBindings__V(lcA0['fld_io_cloudoffice_platform_cockpit_boot_BootContext_proto']);
return lcA0;

};
c['applyBindings__Lio_cloudoffice_platform_cockpit_boot_BootContext_2'] = m;

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

var stI0 = lcA1 != null && lcA1['$instOf_io_cloudoffice_platform_cockpit_boot_BootContext'] ? 1 : 0;
if ((stI0) != 0) { gt = 16; break IF; }
return 0;
    }
    X_16: for (;;) { IF: if (gt <= 16) {

if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_boot_BootContext']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.boot.BootContext');
var lcA2 = lcA1;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_boot_BootContext_prop_view']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_boot_BootContext_prop_view']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 48; break IF; }
return 0;
    }
    X_48: for (;;) { IF: if (gt <= 48) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_boot_BootContext_prop_messagebar']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_boot_BootContext_prop_messagebar']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 75; break IF; }
return 0;
    }
    X_75: for (;;) { IF: if (gt <= 75) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_boot_BootContext_prop_url'], lcA2['fld_io_cloudoffice_platform_cockpit_boot_BootContext_prop_url']);
if ((stI0) != 0) { gt = 94; break IF; }
return 0;
    }
    X_94: for (;;) { IF: if (gt <= 94) {

return 1;

    }
}}}}}}
};
c['equals__ZLjava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.hashCode__I = function() {
  var  lcA0 = this;
var stA0 = invoker.getName__Ljava_lang_String_2(c.constructor.$class);
var stI0 = invoker.hashCode__I(stA0);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_boot_BootContext_prop_view']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_boot_BootContext_prop_messagebar']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_boot_BootContext_prop_url'], lcI1);
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
var stA0 = lcA0.clone__Lio_cloudoffice_platform_cockpit_boot_BootContext_2();
return stA0;

};
c['clone__Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.access$100__Lio_cloudoffice_platform_cockpit_boot_BootContext$Html4JavaType_2 = function() {
return c._TYPE();

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_boot_BootContext_2 = function(lcA0) {
return lcA0['fld_io_cloudoffice_platform_cockpit_boot_BootContext_proto'];

};
    m.access = 4104;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_boot_BootContext$1_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2.call(lcA0, lcA1, lcA2);
return;

};
    m.access = 4096;
    m.cls = CLS;
    m = c.access$400__Lio_cloudoffice_platform_cockpit_boot_BootContext_2Lio_cloudoffice_platform_cockpit_boot_BootContext_2Lnet_java_html_BrwsrCtx_2 = function(lcA0, lcA1) {
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_boot_BootContext_2Lnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
return stA0;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new io_cloudoffice_platform_cockpit_boot_BootContext$Html4JavaType;
(refs_io_cloudoffice_platform_cockpit_boot_BootContext$Html4JavaType || (refs_io_cloudoffice_platform_cockpit_boot_BootContext$Html4JavaType = io_cloudoffice_platform_cockpit_boot_BootContext$Html4JavaType(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_boot_BootContext$1_2.call(stA0, null);
c._TYPE(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_boot_BootContextfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_boot_BootContext', { value : true });
      vm.java_lang_Cloneable(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_boot_BootContextfillInstOf });
    io_cloudoffice_platform_cockpit_boot_BootContextfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/boot/BootContext';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.java_lang_Cloneable(false).constructor.$class
    ]; };
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_io_cloudoffice_platform_cockpit_boot_BootComponent;
    var refs_io_cloudoffice_platform_cockpit_api_ComponentDef;
    var refs_net_java_html_json_Models;
    var refs_io_cloudoffice_platform_cockpit_api_HelperItemView;
    var refs_java_lang_Object;
    var refs_net_java_html_BrwsrCtx;
    var refs_java_lang_StringBuilder;
    var refs_io_cloudoffice_platform_cockpit_boot_BootContext$Html4JavaType;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_boot_BootContext_proto'] = null;
    this['fld_io_cloudoffice_platform_cockpit_boot_BootContext_prop_view'] = null;
    this['fld_io_cloudoffice_platform_cockpit_boot_BootContext_prop_messagebar'] = null;
    this['fld_io_cloudoffice_platform_cockpit_boot_BootContext_prop_url'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_boot_BootContext = registerClass(exports,'io_cloudoffice_platform_cockpit_boot_BootContext',io_cloudoffice_platform_cockpit_boot_BootContext);

vm.java_lang_Cloneable = link('java/lang/Cloneable', function(f) { vm.java_lang_Cloneable =  f; });

function io_cloudoffice_platform_cockpit_boot_BootContext$Html4JavaType() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_boot_BootContext$Html4JavaType;
  if (!CLS.$class) {
    var pp = vm.org_netbeans_html_json_spi_Proto$Type(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_org_netbeans_html_json_spi_Proto$Type || (refs_org_netbeans_html_json_spi_Proto$Type = vm.org_netbeans_html_json_spi_Proto$Type(false))).constructor['cons__VLjava_lang_Class_2Ljava_lang_Class_2II'].call(lcA0, (refs_io_cloudoffice_platform_cockpit_boot_BootContext || (refs_io_cloudoffice_platform_cockpit_boot_BootContext = io_cloudoffice_platform_cockpit_boot_BootContext(false))).constructor.$class, (refs_io_cloudoffice_platform_cockpit_boot_BootComponent || (refs_io_cloudoffice_platform_cockpit_boot_BootComponent = io_cloudoffice_platform_cockpit_boot_BootComponent(false))).constructor.$class, 3, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"view", 0, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"messagebar", 1, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"url", 2, 0, 0);
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.setValue__VLio_cloudoffice_platform_cockpit_boot_BootContext_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0:{ gt = 28; break IF; }
  case 1:{ gt = 45; break IF; }
  case 2:{ gt = 62; break IF; }
  default: { gt = 79; break IF; }
}
    }
    X_28: for (;;) { IF: if (gt <= 28) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_boot_BootContext || (refs_io_cloudoffice_platform_cockpit_boot_BootContext = io_cloudoffice_platform_cockpit_boot_BootContext(false))).access$100__Lio_cloudoffice_platform_cockpit_boot_BootContext$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_api_ComponentDef']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.api.ComponentDef');
stA0.setView__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2(stA1);
return;
    }
    X_45: for (;;) { IF: if (gt <= 45) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_boot_BootContext || (refs_io_cloudoffice_platform_cockpit_boot_BootContext = io_cloudoffice_platform_cockpit_boot_BootContext(false))).access$100__Lio_cloudoffice_platform_cockpit_boot_BootContext$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_api_HelperItemView || (refs_io_cloudoffice_platform_cockpit_api_HelperItemView = vm.io_cloudoffice_platform_cockpit_api_HelperItemView(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_api_HelperItemView']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.api.HelperItemView');
stA0.setMessagebar__VLio_cloudoffice_platform_cockpit_api_HelperItemView_2(stA1);
return;
    }
    X_62: for (;;) { IF: if (gt <= 62) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_boot_BootContext || (refs_io_cloudoffice_platform_cockpit_boot_BootContext = io_cloudoffice_platform_cockpit_boot_BootContext(false))).access$100__Lio_cloudoffice_platform_cockpit_boot_BootContext$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setUrl__VLjava_lang_String_2(stA1);
return;
    }
    X_79: for (;;) { IF: if (gt <= 79) {
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

    }
}}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_boot_BootContext_2I = function(lcA1, lcI2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0:{ gt = 28; break IF; }
  case 1:{ gt = 33; break IF; }
  case 2:{ gt = 38; break IF; }
  default: { gt = 43; break IF; }
}
    }
    X_28: for (;;) { IF: if (gt <= 28) {

var stA0 = lcA1.getView__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
return stA0;
    }
    X_33: for (;;) { IF: if (gt <= 33) {

var stA0 = lcA1.getMessagebar__Lio_cloudoffice_platform_cockpit_api_HelperItemView_2();
return stA0;
    }
    X_38: for (;;) { IF: if (gt <= 38) {

var stA0 = lcA1.getUrl__Ljava_lang_String_2();
return stA0;
    }
    X_43: for (;;) { IF: if (gt <= 43) {
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

    }
}}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.call__VLio_cloudoffice_platform_cockpit_boot_BootContext_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_boot_BootContext']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.boot.BootContext');
var stA0 = (refs_io_cloudoffice_platform_cockpit_boot_BootContext || (refs_io_cloudoffice_platform_cockpit_boot_BootContext = io_cloudoffice_platform_cockpit_boot_BootContext(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_boot_BootContext_2(lcA1);
return stA0;

};
c['protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.onChange__VLio_cloudoffice_platform_cockpit_boot_BootContext_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLio_cloudoffice_platform_cockpit_boot_BootContext_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
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
    m = c.read__Lio_cloudoffice_platform_cockpit_boot_BootContext_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = new io_cloudoffice_platform_cockpit_boot_BootContext;
(refs_io_cloudoffice_platform_cockpit_boot_BootContext || (refs_io_cloudoffice_platform_cockpit_boot_BootContext = io_cloudoffice_platform_cockpit_boot_BootContext(false))).constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_boot_BootContext$1_2.call(stA0, lcA1, lcA2, null);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.cloneTo__Lio_cloudoffice_platform_cockpit_boot_BootContext_2Lio_cloudoffice_platform_cockpit_boot_BootContext_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = (refs_io_cloudoffice_platform_cockpit_boot_BootContext || (refs_io_cloudoffice_platform_cockpit_boot_BootContext = io_cloudoffice_platform_cockpit_boot_BootContext(false))).access$400__Lio_cloudoffice_platform_cockpit_boot_BootContext_2Lio_cloudoffice_platform_cockpit_boot_BootContext_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_boot_BootContext']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.boot.BootContext');
lcA0.onMessage__VLio_cloudoffice_platform_cockpit_boot_BootContext_2IILjava_lang_Object_2_3Ljava_lang_Object_2(lcA1, lcI2, lcI3, lcA4, lcA5);
return;

};
c['onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.onChange__VLjava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_boot_BootContext']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.boot.BootContext');
lcA0.onChange__VLio_cloudoffice_platform_cockpit_boot_BootContext_2I(lcA1, lcI2);
return;

};
c['onChange__VLjava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = lcA0.read__Lio_cloudoffice_platform_cockpit_boot_BootContext_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2(lcA1, lcA2);
return stA0;

};
c['read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_boot_BootContext']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.boot.BootContext');
var stA0 = lcA0.cloneTo__Lio_cloudoffice_platform_cockpit_boot_BootContext_2Lio_cloudoffice_platform_cockpit_boot_BootContext_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
c['cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_boot_BootContext']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.boot.BootContext');
lcA0.call__VLio_cloudoffice_platform_cockpit_boot_BootContext_2ILjava_lang_Object_2Ljava_lang_Object_2(lcA1, lcI2, lcA3, lcA4);
return;

};
c['call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Ljava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_boot_BootContext']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.boot.BootContext');
var stA0 = lcA0.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_boot_BootContext_2I(lcA1, lcI2);
return stA0;

};
c['getValue__Ljava_lang_Object_2Ljava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.setValue__VLjava_lang_Object_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_boot_BootContext']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.boot.BootContext');
lcA0.setValue__VLio_cloudoffice_platform_cockpit_boot_BootContext_2ILjava_lang_Object_2(lcA1, lcI2, lcA3);
return;

};
c['setValue__VLjava_lang_Object_2ILjava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_boot_BootContext$1_2 = function(lcA1) {
  var  lcA0 = this;
c.constructor.cons__V.call(lcA0);
return;

};
    m.access = 4096;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_boot_BootContext$Html4JavaTypefillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_boot_BootContext$Html4JavaType', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_boot_BootContext$Html4JavaTypefillInstOf });
    io_cloudoffice_platform_cockpit_boot_BootContext$Html4JavaTypefillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/boot/BootContext$Html4JavaType';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_boot_BootContext;
    var refs_io_cloudoffice_platform_cockpit_boot_BootComponent;
    var refs_org_netbeans_html_json_spi_Proto$Type;
    var refs_io_cloudoffice_platform_cockpit_api_ComponentDef;
    var refs_io_cloudoffice_platform_cockpit_api_HelperItemView;
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
vm.io_cloudoffice_platform_cockpit_boot_BootContext$Html4JavaType = io_cloudoffice_platform_cockpit_boot_BootContext$Html4JavaType;

vm.java_lang_UnsupportedOperationException = link('java/lang/UnsupportedOperationException', function(f) { vm.java_lang_UnsupportedOperationException =  f; });
vm.java_lang_String = link('java/lang/String', function(f) { vm.java_lang_String =  f; });
vm.org_netbeans_html_json_spi_Proto$Type = link('org/netbeans/html/json/spi/Proto$Type', function(f) { vm.org_netbeans_html_json_spi_Proto$Type =  f; });
vm.net_java_html_BrwsrCtx = link('net/java/html/BrwsrCtx', function(f) { vm.net_java_html_BrwsrCtx =  f; });
vm.io_cloudoffice_platform_cockpit_api_HelperItemView = link('io/cloudoffice/platform/cockpit/api/HelperItemView', function(f) { vm.io_cloudoffice_platform_cockpit_api_HelperItemView =  f; });
vm.io_cloudoffice_platform_cockpit_api_ComponentDef = link('io/cloudoffice/platform/cockpit/api/ComponentDef', function(f) { vm.io_cloudoffice_platform_cockpit_api_ComponentDef =  f; });

function io_cloudoffice_platform_cockpit_boot_BootComponent$WSConnectionListener() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_boot_BootComponent$WSConnectionListener;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_java_lang_Object || (refs_java_lang_Object = vm.java_lang_Object(false))).constructor['cons__V'].call(lcA0);
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.onReceive__VLio_cloudoffice_platform_cockpit_api_Signal_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = invoker.getAction__Ljava_lang_String_2(lcA1);
var stI0 = invoker.equalsIgnoreCase__ZLjava_lang_String_2(stA0,"wsconnect");
if ((stI0) == 0) { gt = 55; break IF; }
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_Session || (refs_io_cloudoffice_platform_cockpit_api_Session = vm.io_cloudoffice_platform_cockpit_api_Session(false)))['hasValidSession__Z']();
if ((stI0) == 0) { gt = 55; break IF; }
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_Session || (refs_io_cloudoffice_platform_cockpit_api_Session = vm.io_cloudoffice_platform_cockpit_api_Session(false)))['getUser__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2']();
var lcA2 = stA0;
var stA0 = null;var stA1 = (refs_io_cloudoffice_platform_cockpit_api_Application || (refs_io_cloudoffice_platform_cockpit_api_Application = vm.io_cloudoffice_platform_cockpit_api_Application(false)))['getWsConnectionManager__Lio_cloudoffice_platform_cockpit_api_ConnectionManager_2']();
if ((stA0) !== (stA1)) { gt = 55; break IF; }
var stA0 = (refs_io_cloudoffice_platform_cockpit_js_JSUIUtils || (refs_io_cloudoffice_platform_cockpit_js_JSUIUtils = vm.io_cloudoffice_platform_cockpit_js_JSUIUtils(false)))['getWsUrl__Ljava_lang_String_2']();
var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA2,"mqDestination");
var stA2 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA2,"mqUserName");
var stA3 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA2,"mqPassword");
(refs_io_cloudoffice_platform_cockpit_boot_BootComponent || (refs_io_cloudoffice_platform_cockpit_boot_BootComponent = io_cloudoffice_platform_cockpit_boot_BootComponent(false))).initWSConnection__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2(stA0, stA1, stA2, stA3);
    }
    X_55: for (;;) { IF: if (gt <= 55) {
return;

    }
}}
};
c['onReceive__VLio_cloudoffice_platform_cockpit_api_Signal_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_boot_BootComponent$1_2 = function(lcA1) {
  var  lcA0 = this;
c.constructor.cons__V.call(lcA0);
return;

};
    m.access = 4096;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_boot_BootComponent$WSConnectionListenerfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_boot_BootComponent$WSConnectionListener', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_EventListener(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_boot_BootComponent$WSConnectionListenerfillInstOf });
    io_cloudoffice_platform_cockpit_boot_BootComponent$WSConnectionListenerfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/boot/BootComponent$WSConnectionListener';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_EventListener(false).constructor.$class
    ]; };
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
    var refs_java_lang_Object;
    var refs_io_cloudoffice_platform_cockpit_api_Session;
    var refs_io_cloudoffice_platform_cockpit_api_Application;
    var refs_io_cloudoffice_platform_cockpit_js_JSUIUtils;
    var refs_io_cloudoffice_platform_cockpit_boot_BootComponent;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_boot_BootComponent$WSConnectionListener = io_cloudoffice_platform_cockpit_boot_BootComponent$WSConnectionListener;

vm.io_cloudoffice_platform_cockpit_api_Session = link('io/cloudoffice/platform/cockpit/api/Session', function(f) { vm.io_cloudoffice_platform_cockpit_api_Session =  f; });

function io_cloudoffice_platform_cockpit_boot_BootComponent$IndexViewChangeListener() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_boot_BootComponent$IndexViewChangeListener;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._this$0 = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_boot_BootComponent$IndexViewChangeListener_this$0'] = v; return this['fld_io_cloudoffice_platform_cockpit_boot_BootComponent$IndexViewChangeListener_this$0']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_boot_BootComponent_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_boot_BootComponent$IndexViewChangeListener_this$0'] = lcA1;
(refs_java_lang_Object || (refs_java_lang_Object = vm.java_lang_Object(false))).constructor['cons__V'].call(lcA0);
return;

};
CLS['cons__VLio_cloudoffice_platform_cockpit_boot_BootComponent_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.onReceive__VLio_cloudoffice_platform_cockpit_api_Signal_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = invoker.getPackets__Ljava_util_List_2(lcA1);
var stA0 = invoker.get__Ljava_lang_Object_2I(stA0,0);
if (stA0 !== null && !stA0['$instOf_java_util_Map']) vm.java_lang_Class(false).castEx(stA0, 'java.util.Map');
var lcA2 = stA0;
var stA0 = invoker.getView__Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_boot_BootComponent$IndexViewChangeListener_this$0']);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_boot_BootContext']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.boot.BootContext');
var stA0 = stA0.getMessagebar__Lio_cloudoffice_platform_cockpit_api_HelperItemView_2();
invoker.setActive__VZ(stA0,0);
var stA0 = invoker.getView__Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_boot_BootComponent$IndexViewChangeListener_this$0']);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_boot_BootContext']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.boot.BootContext');
var stA0 = stA0.getView__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA1 = invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2(lcA2,"name");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
invoker.setName__VLjava_lang_String_2(stA0,stA1);
var stA0 = invoker.getView__Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_boot_BootComponent$IndexViewChangeListener_this$0']);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_boot_BootContext']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.boot.BootContext');
var stA0 = stA0.getView__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA1 = invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2(lcA2,"model");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
invoker.setModel__VLjava_lang_String_2(stA0,stA1);
var stA0 = invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2(lcA2,"applyBindings");
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
var stI0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['parseBoolean__ZLjava_lang_String_2'](stA0);
if ((stI0) == 0) { gt = 155; break IF; }
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"BOOT APPLY BINDING DATA:");
var stA1 = invoker.getView__Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_boot_BootComponent$IndexViewChangeListener_this$0']);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_boot_BootContext']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.boot.BootContext');
var stA1 = stA1.getView__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA1 = invoker.getName__Ljava_lang_String_2(stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
(refs_io_cloudoffice_platform_cockpit_api_Logger || (refs_io_cloudoffice_platform_cockpit_api_Logger = vm.io_cloudoffice_platform_cockpit_api_Logger(false)))['log__VLjava_lang_String_2'](stA0);
var stA0 = invoker.getView__Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_boot_BootComponent$IndexViewChangeListener_this$0']);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_boot_BootContext']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.boot.BootContext');
var stA0 = stA0.applyBindings__Lio_cloudoffice_platform_cockpit_boot_BootContext_2();
    }
    X_155: for (;;) { IF: if (gt <= 155) {
return;

    }
}}
};
c['onReceive__VLio_cloudoffice_platform_cockpit_api_Signal_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_boot_BootComponent$IndexViewChangeListenerfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_boot_BootComponent$IndexViewChangeListener', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_EventListener(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_boot_BootComponent$IndexViewChangeListenerfillInstOf });
    io_cloudoffice_platform_cockpit_boot_BootComponent$IndexViewChangeListenerfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/boot/BootComponent$IndexViewChangeListener';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_EventListener(false).constructor.$class
    ]; };
    CLS.$class.access = 33;
    CLS.$class.cnstr = CLS;
    var refs_java_lang_Object;
    var refs_java_lang_Boolean;
    var refs_java_lang_StringBuilder;
    var refs_io_cloudoffice_platform_cockpit_api_Logger;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_boot_BootComponent$IndexViewChangeListener_this$0'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_boot_BootComponent$IndexViewChangeListener = registerClass(exports,'io_cloudoffice_platform_cockpit_boot_BootComponent$IndexViewChangeListener',io_cloudoffice_platform_cockpit_boot_BootComponent$IndexViewChangeListener);

vm.java_lang_Boolean = link('java/lang/Boolean', function(f) { vm.java_lang_Boolean =  f; });
vm.io_cloudoffice_platform_cockpit_api_AbstractComponent = link('io/cloudoffice/platform/cockpit/api/AbstractComponent', function(f) { vm.io_cloudoffice_platform_cockpit_api_AbstractComponent =  f; });
vm.io_cloudoffice_platform_cockpit_js_History = link('io/cloudoffice/platform/cockpit/js/History', function(f) { vm.io_cloudoffice_platform_cockpit_js_History =  f; });
vm.io_cloudoffice_platform_cockpit_js_VIEW = link('io/cloudoffice/platform/cockpit/js/VIEW', function(f) { vm.io_cloudoffice_platform_cockpit_js_VIEW =  f; });
vm.net_java_html_json_Models = link('net/java/html/json/Models', function(f) { vm.net_java_html_json_Models =  f; });
vm.io_cloudoffice_platform_cockpit_api_Application = link('io/cloudoffice/platform/cockpit/api/Application', function(f) { vm.io_cloudoffice_platform_cockpit_api_Application =  f; });
vm.io_cloudoffice_platform_cockpit_api_HistoryTracker = link('io/cloudoffice/platform/cockpit/api/HistoryTracker', function(f) { vm.io_cloudoffice_platform_cockpit_api_HistoryTracker =  f; });
vm.io_cloudoffice_platform_cockpit_api_Components = link('io/cloudoffice/platform/cockpit/api/Components', function(f) { vm.io_cloudoffice_platform_cockpit_api_Components =  f; });

function io_cloudoffice_platform_cockpit_boot_BootContext$1() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_boot_BootContext$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_boot_BootContext$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_boot_BootContext$1', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_boot_BootContext$1fillInstOf });
    io_cloudoffice_platform_cockpit_boot_BootContext$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/boot/BootContext$1';
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
vm.io_cloudoffice_platform_cockpit_boot_BootContext$1 = io_cloudoffice_platform_cockpit_boot_BootContext$1;


function io_cloudoffice_platform_cockpit_boot_Startup$DEVICE() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_boot_Startup$DEVICE;
  if (!CLS.$class) {
    var pp = vm.java_lang_Enum(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_DESKTOP'] = null;
  m = c._DESKTOP = function (v) {  if (arguments.length == 1) CLS['fld_DESKTOP'] = v; return CLS['fld_DESKTOP']; };
  CLS['fld_WEB'] = null;
  m = c._WEB = function (v) {  if (arguments.length == 1) CLS['fld_WEB'] = v; return CLS['fld_WEB']; };
  CLS['fld_ANDROID'] = null;
  m = c._ANDROID = function (v) {  if (arguments.length == 1) CLS['fld_ANDROID'] = v; return CLS['fld_ANDROID']; };
  CLS['fld_IOS'] = null;
  m = c._IOS = function (v) {  if (arguments.length == 1) CLS['fld_IOS'] = v; return CLS['fld_IOS']; };
  m = c._value = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_boot_Startup$DEVICE_value'] = v; return this['fld_io_cloudoffice_platform_cockpit_boot_Startup$DEVICE_value']; };
  CLS['fld_$VALUES'] = null;
  m = c._$VALUES = function (v) {  if (arguments.length == 1) CLS['fld_$VALUES'] = v; return CLS['fld_$VALUES']; };
c['_$VALUES'] = m;

    m = c.values___3Lio_cloudoffice_platform_cockpit_boot_Startup$DEVICE_2 = function() {
var stA0 = invoker.clone__Ljava_lang_Object_2(c._$VALUES());
if (stA0 !== null && !Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](stA0, 1, vm.io_cloudoffice_platform_cockpit_boot_Startup$DEVICE)) vm.java_lang_Class(false).castEx(stA0, '');
return stA0;

};
    m.access = 9;
    m.cls = CLS;
    m = c.valueOf__Lio_cloudoffice_platform_cockpit_boot_Startup$DEVICE_2Ljava_lang_String_2 = function(lcA0) {
var stA0 = (refs_java_lang_Enum || (refs_java_lang_Enum = vm.java_lang_Enum(false)))['valueOf__Ljava_lang_Enum_2Ljava_lang_Class_2Ljava_lang_String_2'](c.constructor.$class, lcA0);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_boot_Startup$DEVICE']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.boot.Startup$DEVICE');
return stA0;

};
    m.access = 9;
    m.cls = CLS;
    m = CLS.cons__VLjava_lang_String_2ILjava_lang_String_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;
(refs_java_lang_Enum || (refs_java_lang_Enum = vm.java_lang_Enum(false))).constructor['cons__VLjava_lang_String_2I'].call(lcA0, lcA1, lcI2);
lcA0['fld_io_cloudoffice_platform_cockpit_boot_Startup$DEVICE_value'] = lcA3;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
return lcA0['fld_io_cloudoffice_platform_cockpit_boot_Startup$DEVICE_value'];

};
    m.access = 1;
    m.cls = CLS;
    m = c.store__V = function() {
  var  lcA0 = this;
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_Application || (refs_io_cloudoffice_platform_cockpit_api_Application = vm.io_cloudoffice_platform_cockpit_api_Application(false)))['getApplicationContext__Lio_cloudoffice_platform_cockpit_api_ApplicationContext_2']();
var stA1 = (refs_io_cloudoffice_platform_cockpit_boot_Startup || (refs_io_cloudoffice_platform_cockpit_boot_Startup = io_cloudoffice_platform_cockpit_boot_Startup(false)))._device().getValue__Ljava_lang_String_2();
invoker.setDevice__VLjava_lang_String_2(stA0,stA1);
(refs_io_cloudoffice_platform_cockpit_api_Application || (refs_io_cloudoffice_platform_cockpit_api_Application = vm.io_cloudoffice_platform_cockpit_api_Application(false)))['store__V']();
return;

};
    m.access = 1;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new io_cloudoffice_platform_cockpit_boot_Startup$DEVICE;
c.constructor.cons__VLjava_lang_String_2ILjava_lang_String_2.call(stA0, "DESKTOP", 0, (refs_io_cloudoffice_platform_cockpit_api_Application || (refs_io_cloudoffice_platform_cockpit_api_Application = vm.io_cloudoffice_platform_cockpit_api_Application(false)))['_DESKTOP']());
c._DESKTOP(stA0);
var stA0 = new io_cloudoffice_platform_cockpit_boot_Startup$DEVICE;
c.constructor.cons__VLjava_lang_String_2ILjava_lang_String_2.call(stA0, "WEB", 1, (refs_io_cloudoffice_platform_cockpit_api_Application || (refs_io_cloudoffice_platform_cockpit_api_Application = vm.io_cloudoffice_platform_cockpit_api_Application(false)))['_WEB']());
c._WEB(stA0);
var stA0 = new io_cloudoffice_platform_cockpit_boot_Startup$DEVICE;
c.constructor.cons__VLjava_lang_String_2ILjava_lang_String_2.call(stA0, "ANDROID", 2, (refs_io_cloudoffice_platform_cockpit_api_Application || (refs_io_cloudoffice_platform_cockpit_api_Application = vm.io_cloudoffice_platform_cockpit_api_Application(false)))['_ANDROID']());
c._ANDROID(stA0);
var stA0 = new io_cloudoffice_platform_cockpit_boot_Startup$DEVICE;
c.constructor.cons__VLjava_lang_String_2ILjava_lang_String_2.call(stA0, "IOS", 3, (refs_io_cloudoffice_platform_cockpit_api_Application || (refs_io_cloudoffice_platform_cockpit_api_Application = vm.io_cloudoffice_platform_cockpit_api_Application(false)))['_IOS']());
c._IOS(stA0);
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lio/cloudoffice/platform/cockpit/boot/Startup$DEVICE;', vm.io_cloudoffice_platform_cockpit_boot_Startup$DEVICE, 4);
Array.at(stA0, 0, c._DESKTOP());
Array.at(stA0, 1, c._WEB());
Array.at(stA0, 2, c._ANDROID());
Array.at(stA0, 3, c._IOS());
c._$VALUES(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_boot_Startup$DEVICEfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_boot_Startup$DEVICE', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_boot_Startup$DEVICEfillInstOf });
    io_cloudoffice_platform_cockpit_boot_Startup$DEVICEfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/boot/Startup$DEVICE';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 16432;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_java_lang_Enum;
    var refs_io_cloudoffice_platform_cockpit_api_Application;
    var refs_io_cloudoffice_platform_cockpit_boot_Startup;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_boot_Startup$DEVICE_value'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_boot_Startup$DEVICE = io_cloudoffice_platform_cockpit_boot_Startup$DEVICE;


function io_cloudoffice_platform_cockpit_boot_Startup() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_boot_Startup;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_bootContext'] = null;
  m = c._bootContext = function (v) {  if (arguments.length == 1) CLS['fld_bootContext'] = v; return CLS['fld_bootContext']; };
  CLS['fld_device'] = null;
  m = c._device = function (v) {  if (arguments.length == 1) CLS['fld_device'] = v; return CLS['fld_device']; };
c['_device'] = m;

    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_java_lang_Object || (refs_java_lang_Object = vm.java_lang_Object(false))).constructor['cons__V'].call(lcA0);
return;

};
CLS['cons__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getBootContext__Lio_cloudoffice_platform_cockpit_boot_BootContext_2 = function() {
return c._bootContext();

};
c['getBootContext__Lio_cloudoffice_platform_cockpit_boot_BootContext_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.fromWeb__V = function() {
c.setDevice__VLio_cloudoffice_platform_cockpit_boot_Startup$DEVICE_2((refs_io_cloudoffice_platform_cockpit_boot_Startup$DEVICE || (refs_io_cloudoffice_platform_cockpit_boot_Startup$DEVICE = io_cloudoffice_platform_cockpit_boot_Startup$DEVICE(false)))._WEB());
c.onPageLoad__V();
return;

};
c['fromWeb__V'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.fromDesktop__V = function() {
c.setDevice__VLio_cloudoffice_platform_cockpit_boot_Startup$DEVICE_2((refs_io_cloudoffice_platform_cockpit_boot_Startup$DEVICE || (refs_io_cloudoffice_platform_cockpit_boot_Startup$DEVICE = io_cloudoffice_platform_cockpit_boot_Startup$DEVICE(false)))._DESKTOP());
c.onPageLoad__V();
return;

};
c['fromDesktop__V'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.onPageLoad__V = function() {
c.initKOContext__V();
var stA0 = (refs_net_java_html_BrwsrCtx || (refs_net_java_html_BrwsrCtx = vm.net_java_html_BrwsrCtx(false)))['findDefault__Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2']((refs_io_cloudoffice_platform_cockpit_boot_BootContext || (refs_io_cloudoffice_platform_cockpit_boot_BootContext = io_cloudoffice_platform_cockpit_boot_BootContext(false))).constructor.$class);
var lcA0 = stA0;
c.initJavaContext__VLnet_java_html_BrwsrCtx_2(lcA0);
c.loadInitialComponents__VLnet_java_html_BrwsrCtx_2(lcA0);
var stA0 = invoker.getFlags__Ljava_util_Map_2((refs_io_cloudoffice_platform_cockpit_api_Components || (refs_io_cloudoffice_platform_cockpit_api_Components = vm.io_cloudoffice_platform_cockpit_api_Components(false)))['_BOOT']());
var stA1 = "start";var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](1);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_Components || (refs_io_cloudoffice_platform_cockpit_api_Components = vm.io_cloudoffice_platform_cockpit_api_Components(false)))['_BOOT']();var stA1 = new vm.io_cloudoffice_platform_cockpit_api_Event;
(refs_io_cloudoffice_platform_cockpit_api_Event || (refs_io_cloudoffice_platform_cockpit_api_Event = vm.io_cloudoffice_platform_cockpit_api_Event(false))).constructor['cons__VLjava_lang_String_2Ljava_lang_String_2'].call(stA1, "boot", "boot");
invoker.listen__VLio_cloudoffice_platform_cockpit_api_Signal_2(stA0,stA1);
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_AsyncRequestProcessor || (refs_io_cloudoffice_platform_cockpit_api_AsyncRequestProcessor = vm.io_cloudoffice_platform_cockpit_api_AsyncRequestProcessor(false)))['currentProcessor__Lio_cloudoffice_platform_cockpit_api_AsyncRequestProcessor_2']();
invoker.start__V(stA0);
return;

};
c['onPageLoad__V'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.initKOContext__V = function() {
var stA0 = new io_cloudoffice_platform_cockpit_boot_BootContext;
(refs_io_cloudoffice_platform_cockpit_boot_BootContext || (refs_io_cloudoffice_platform_cockpit_boot_BootContext = io_cloudoffice_platform_cockpit_boot_BootContext(false))).constructor.cons__V.call(stA0);
c._bootContext(stA0);
var stA0 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['toRaw__Ljava_lang_Object_2Ljava_lang_Object_2'](c._bootContext());
(refs_io_cloudoffice_platform_cockpit_js_JQuery || (refs_io_cloudoffice_platform_cockpit_js_JQuery = vm.io_cloudoffice_platform_cockpit_js_JQuery(false)))['init__V']();
(refs_io_cloudoffice_platform_cockpit_js_JSUIUtils || (refs_io_cloudoffice_platform_cockpit_js_JSUIUtils = vm.io_cloudoffice_platform_cockpit_js_JSUIUtils(false)))['init__V']();
(refs_io_cloudoffice_platform_cockpit_js_History || (refs_io_cloudoffice_platform_cockpit_js_History = vm.io_cloudoffice_platform_cockpit_js_History(false)))['init__V']();
(refs_io_cloudoffice_platform_cockpit_js_VIEW || (refs_io_cloudoffice_platform_cockpit_js_VIEW = vm.io_cloudoffice_platform_cockpit_js_VIEW(false)))['registerComponent__V']();
(refs_io_cloudoffice_platform_cockpit_js_VIEW || (refs_io_cloudoffice_platform_cockpit_js_VIEW = vm.io_cloudoffice_platform_cockpit_js_VIEW(false)))['globalComponentsValue__V']();
return;

};
    m.access = 10;
    m.cls = CLS;
    m = c.loadInitialComponents__VLnet_java_html_BrwsrCtx_2 = function(lcA0) {
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, 3);
Array.at(stA0, 0, "messagebar");
Array.at(stA0, 1, "mini-loader");
Array.at(stA0, 2, "blank");
(refs_io_cloudoffice_platform_cockpit_js_VIEW || (refs_io_cloudoffice_platform_cockpit_js_VIEW = vm.io_cloudoffice_platform_cockpit_js_VIEW(false)))['render__V_3Ljava_lang_String_2'](stA0);
return;

};
c['loadInitialComponents__VLnet_java_html_BrwsrCtx_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.initJavaContext__VLnet_java_html_BrwsrCtx_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = c._device().getValue__Ljava_lang_String_2();
var stI0 = invoker.equalsIgnoreCase__ZLjava_lang_String_2(stA0,(refs_io_cloudoffice_platform_cockpit_api_Application || (refs_io_cloudoffice_platform_cockpit_api_Application = vm.io_cloudoffice_platform_cockpit_api_Application(false)))['_DESKTOP']());
if ((stI0) == 0) { gt = 21; break IF; }
var stA0 = (refs_io_cloudoffice_platform_cockpit_js_JSUIUtils || (refs_io_cloudoffice_platform_cockpit_js_JSUIUtils = vm.io_cloudoffice_platform_cockpit_js_JSUIUtils(false)))['getDHost__Ljava_lang_String_2']();
{ gt = 24; break IF; }
    }
    X_21: for (;;) { IF: if (gt <= 21) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_js_JSUIUtils || (refs_io_cloudoffice_platform_cockpit_js_JSUIUtils = vm.io_cloudoffice_platform_cockpit_js_JSUIUtils(false)))['getHost__Ljava_lang_String_2']();
    }
    X_24: for (;;) { IF: if (gt <= 24) {
var lcA1 = stA0;
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"https://");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,lcA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"/api/jsonws/invoke");
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
(refs_io_cloudoffice_platform_cockpit_api_Application || (refs_io_cloudoffice_platform_cockpit_api_Application = vm.io_cloudoffice_platform_cockpit_api_Application(false)))['createApplicationContext__VLjava_lang_String_2Lnet_java_html_BrwsrCtx_2'](stA0, lcA0);
c._device().store__V();
var stA0 = new io_cloudoffice_platform_cockpit_boot_BootComponent;
var stA1 = stA0;var stA2 = c.getBootContext__Lio_cloudoffice_platform_cockpit_boot_BootContext_2();
(refs_io_cloudoffice_platform_cockpit_boot_BootComponent || (refs_io_cloudoffice_platform_cockpit_boot_BootComponent = io_cloudoffice_platform_cockpit_boot_BootComponent(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_boot_BootContext_2.call(stA1, stA2);
(refs_io_cloudoffice_platform_cockpit_api_Components || (refs_io_cloudoffice_platform_cockpit_api_Components = vm.io_cloudoffice_platform_cockpit_api_Components(false)))._BOOT(stA0);
var stA0 = "ws";var stA1 = new vm.io_cloudoffice_platform_cockpit_api_WebSocketConnection;
(refs_io_cloudoffice_platform_cockpit_api_WebSocketConnection || (refs_io_cloudoffice_platform_cockpit_api_WebSocketConnection = vm.io_cloudoffice_platform_cockpit_api_WebSocketConnection(false))).constructor['cons__V'].call(stA1);
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['toRaw__Ljava_lang_Object_2Ljava_lang_Object_2'](stA1);
(refs_io_cloudoffice_platform_cockpit_js_VIEW || (refs_io_cloudoffice_platform_cockpit_js_VIEW = vm.io_cloudoffice_platform_cockpit_js_VIEW(false)))['bind__VLjava_lang_String_2Ljava_lang_Object_2'](stA0, stA1);
var stA0 = invoker.getName__Ljava_lang_String_2((refs_io_cloudoffice_platform_cockpit_api_HelperItemView || (refs_io_cloudoffice_platform_cockpit_api_HelperItemView = vm.io_cloudoffice_platform_cockpit_api_HelperItemView(false))).constructor.$class);
var stA1 = c.getBootContext__Lio_cloudoffice_platform_cockpit_boot_BootContext_2();
var stA1 = stA1.getMessagebar__Lio_cloudoffice_platform_cockpit_api_HelperItemView_2();
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['toRaw__Ljava_lang_Object_2Ljava_lang_Object_2'](stA1);
(refs_io_cloudoffice_platform_cockpit_js_VIEW || (refs_io_cloudoffice_platform_cockpit_js_VIEW = vm.io_cloudoffice_platform_cockpit_js_VIEW(false)))['bind__VLjava_lang_String_2Ljava_lang_Object_2'](stA0, stA1);
(refs_io_cloudoffice_platform_cockpit_js_FileUpload || (refs_io_cloudoffice_platform_cockpit_js_FileUpload = vm.io_cloudoffice_platform_cockpit_js_FileUpload(false)))['registerComponent__V']();
return;

    }
}}}
};
c['initJavaContext__VLnet_java_html_BrwsrCtx_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.setDevice__VLio_cloudoffice_platform_cockpit_boot_Startup$DEVICE_2 = function(lcA0) {
c._device(lcA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_boot_StartupfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_boot_Startup', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_boot_StartupfillInstOf });
    io_cloudoffice_platform_cockpit_boot_StartupfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/boot/Startup';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 33;
    CLS.$class.cnstr = CLS;
    var refs_java_lang_Object;
    var refs_io_cloudoffice_platform_cockpit_boot_Startup$DEVICE;
    var refs_io_cloudoffice_platform_cockpit_boot_BootContext;
    var refs_net_java_html_BrwsrCtx;
    var refs_io_cloudoffice_platform_cockpit_api_Components;
    var refs_java_lang_Boolean;
    var refs_io_cloudoffice_platform_cockpit_api_Event;
    var refs_io_cloudoffice_platform_cockpit_api_AsyncRequestProcessor;
    var refs_net_java_html_json_Models;
    var refs_io_cloudoffice_platform_cockpit_js_JQuery;
    var refs_io_cloudoffice_platform_cockpit_js_JSUIUtils;
    var refs_io_cloudoffice_platform_cockpit_js_History;
    var refs_io_cloudoffice_platform_cockpit_js_VIEW;
    var refs_io_cloudoffice_platform_cockpit_api_Application;
    var refs_java_lang_StringBuilder;
    var refs_io_cloudoffice_platform_cockpit_boot_BootComponent;
    var refs_io_cloudoffice_platform_cockpit_api_WebSocketConnection;
    var refs_io_cloudoffice_platform_cockpit_api_HelperItemView;
    var refs_io_cloudoffice_platform_cockpit_js_FileUpload;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_boot_Startup = registerClass(exports,'io_cloudoffice_platform_cockpit_boot_Startup',io_cloudoffice_platform_cockpit_boot_Startup);

vm.io_cloudoffice_platform_cockpit_js_FileUpload = link('io/cloudoffice/platform/cockpit/js/FileUpload', function(f) { vm.io_cloudoffice_platform_cockpit_js_FileUpload =  f; });
vm.io_cloudoffice_platform_cockpit_api_WebSocketConnection = link('io/cloudoffice/platform/cockpit/api/WebSocketConnection', function(f) { vm.io_cloudoffice_platform_cockpit_api_WebSocketConnection =  f; });
vm.io_cloudoffice_platform_cockpit_js_JQuery = link('io/cloudoffice/platform/cockpit/js/JQuery', function(f) { vm.io_cloudoffice_platform_cockpit_js_JQuery =  f; });
vm.io_cloudoffice_platform_cockpit_api_AsyncRequestProcessor = link('io/cloudoffice/platform/cockpit/api/AsyncRequestProcessor', function(f) { vm.io_cloudoffice_platform_cockpit_api_AsyncRequestProcessor =  f; });
vm.java_lang_Enum = link('java/lang/Enum', function(f) { vm.java_lang_Enum =  f; });
  invoker.getFlags__Ljava_util_Map_2 = function(target) {
    return target['getFlags__Ljava_util_Map_2']();
  };
  invoker.containsKey__ZLjava_lang_Object_2 = function(target, p1) {
    return target['containsKey__ZLjava_lang_Object_2'](p1);
  };
  invoker.getName__Ljava_lang_String_2 = function(target) {
    return target['getName__Ljava_lang_String_2']();
  };
  invoker.remove__Ljava_lang_Object_2Ljava_lang_Object_2 = function(target, p1) {
    return target['remove__Ljava_lang_Object_2Ljava_lang_Object_2'](p1);
  };
  invoker.getAction__Ljava_lang_String_2 = function(target) {
    return target['getAction__Ljava_lang_String_2']();
  };
  invoker.equalsIgnoreCase__ZLjava_lang_String_2 = function(target, p1) {
    return target['equalsIgnoreCase__ZLjava_lang_String_2'](p1);
  };
  invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2 = function(target, p1, p2) {
    return target['addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2'](p1,p2);
  };
  invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2 = function(target, p1) {
    return target['append__Ljava_lang_StringBuilder_2Ljava_lang_String_2'](p1);
  };
  invoker.toString__Ljava_lang_String_2 = function(target) {
    return target['toString__Ljava_lang_String_2']();
  };
  invoker.listen__VLio_cloudoffice_platform_cockpit_api_Signal_2 = function(target, p1) {
    return target['listen__VLio_cloudoffice_platform_cockpit_api_Signal_2'](p1);
  };
  invoker.setView__VLjava_lang_Object_2 = function(target, p1) {
    return target['setView__VLjava_lang_Object_2'](p1);
  };
  invoker.attachListener__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_EventListener_2 = function(target, p1, p2) {
    return target['attachListener__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_EventListener_2'](p1,p2);
  };
  invoker.getView__Ljava_lang_Object_2 = function(target) {
    return target['getView__Ljava_lang_Object_2']();
  };
  invoker.setActive__VZ = function(target, p1) {
    return target['setActive__VZ'](p1);
  };
  invoker.getException__Ljava_lang_Exception_2 = function(target) {
    return target['getException__Ljava_lang_Exception_2']();
  };
  invoker.getMessage__Ljava_lang_String_2 = function(target) {
    return target['getMessage__Ljava_lang_String_2']();
  };
  invoker.setInfo__VLjava_lang_String_2 = function(target, p1) {
    return target['setInfo__VLjava_lang_String_2'](p1);
  };
  invoker.setDefaultViewName__VLjava_lang_String_2 = function(target, p1) {
    return target['setDefaultViewName__VLjava_lang_String_2'](p1);
  };
  invoker.getMethod__Ljava_lang_reflect_Method_2Ljava_lang_String_2_3Ljava_lang_Class_2 = function(target, p1, p2) {
    return target['getMethod__Ljava_lang_reflect_Method_2Ljava_lang_String_2_3Ljava_lang_Class_2'](p1,p2);
  };
  invoker.invoke__Ljava_lang_Object_2Ljava_lang_Object_2_3Ljava_lang_Object_2 = function(target, p1, p2) {
    return target['invoke__Ljava_lang_Object_2Ljava_lang_Object_2_3Ljava_lang_Object_2'](p1,p2);
  };
  invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2 = function(target, p1) {
    return target['append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2'](p1);
  };
  invoker.getDevice__Ljava_lang_String_2 = function(target) {
    return target['getDevice__Ljava_lang_String_2']();
  };
  invoker.connect__V = function(target) {
    return target['connect__V']();
  };
  invoker.accessProperty__VLjava_lang_String_2 = function(target, p1) {
    return target['accessProperty__VLjava_lang_String_2'](p1);
  };
  invoker.getContext__Lnet_java_html_BrwsrCtx_2 = function(target) {
    return target['getContext__Lnet_java_html_BrwsrCtx_2']();
  };
  invoker.verifyUnlocked__V = function(target) {
    return target['verifyUnlocked__V']();
  };
  invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2 = function(target, p1, p2, p3) {
    return target['valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2'](p1,p2,p3);
  };
  invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2 = function(target, p1, p2) {
    return target['isSame__ZLjava_lang_Object_2Ljava_lang_Object_2'](p1,p2);
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
  invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2 = function(target, p1) {
    return target['toJSON__Ljava_lang_String_2Ljava_lang_Object_2'](p1);
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
  invoker.getString__Ljava_lang_String_2Ljava_lang_String_2 = function(target, p1) {
    return target['getString__Ljava_lang_String_2Ljava_lang_String_2'](p1);
  };
  invoker.getPackets__Ljava_util_List_2 = function(target) {
    return target['getPackets__Ljava_util_List_2']();
  };
  invoker.get__Ljava_lang_Object_2I = function(target, p1) {
    return target['get__Ljava_lang_Object_2I'](p1);
  };
  invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2 = function(target, p1) {
    return target['get__Ljava_lang_Object_2Ljava_lang_Object_2'](p1);
  };
  invoker.setName__VLjava_lang_String_2 = function(target, p1) {
    return target['setName__VLjava_lang_String_2'](p1);
  };
  invoker.setModel__VLjava_lang_String_2 = function(target, p1) {
    return target['setModel__VLjava_lang_String_2'](p1);
  };
  invoker.clone__Ljava_lang_Object_2 = function(target) {
    return target['clone__Ljava_lang_Object_2']();
  };
  invoker.setDevice__VLjava_lang_String_2 = function(target, p1) {
    return target['setDevice__VLjava_lang_String_2'](p1);
  };
  invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2 = function(target, p1, p2) {
    return target['put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2'](p1,p2);
  };
  invoker.start__V = function(target) {
    return target['start__V']();
  };
  exports['registerResource']('META-INF/MANIFEST.MF', 'TWFuaWZlc3QtVmVyc2lvbjogMS4wDQpCbmQtTGFzdE1vZGlmaWVkOiAxNTk3Nzc1MzE1ODkyDQpCdWlsZC1KZGs6IDEuOC4wXzEzMQ0KQnVpbHQtQnk6IGV1c2lhDQpCdW5kbGUtTWFuaWZlc3RWZXJzaW9uOiAyDQpCdW5kbGUtTmFtZTogRW5naW5lIENvbXBvbmVudHMgQm9vdA0KQnVuZGxlLVN5bWJvbGljTmFtZTogaW8uY2xvdWRvZmZpY2UucGxhdGZvcm0uY29ja3BpdA0KQnVuZGxlLVZlcnNpb246IDEuMS4wDQpDcmVhdGVkLUJ5OiBBcGFjaGUgTWF2ZW4gQnVuZGxlIFBsdWdpbg0KRXhwb3J0LVBhY2thZ2U6IGlvLmNsb3Vkb2ZmaWNlLnBsYXRmb3JtLmNvY2twaXQuYm9vdDt1c2VzOj0iaW8uY2xvdWRvZmZpDQogY2UucGxhdGZvcm0uY29ja3BpdC5hcGksbmV0LmphdmEuaHRtbCI7dmVyc2lvbj0iMS4xLjAiDQpJbXBvcnQtUGFja2FnZTogaW8uY2xvdWRvZmZpY2UucGxhdGZvcm0uY29ja3BpdC5hcGk7dmVyc2lvbj0iWzEuMSwyKSIsaW8NCiAuY2xvdWRvZmZpY2UucGxhdGZvcm0uY29ja3BpdC5qczt2ZXJzaW9uPSJbMS4xLDIpIixuZXQuamF2YS5odG1sO3ZlcnNpbw0KIG49IlsxLjYsMikiLG5ldC5qYXZhLmh0bWwuanNvbjt2ZXJzaW9uPSJbMS42LDIpIixvcmcubmV0YmVhbnMuaHRtbC5qc29uDQogLnNwaTt2ZXJzaW9uPSJbMS42LDIpIg0KVG9vbDogQm5kLTIuMS4wLjIwMTMwNDI2LTEyMjIxMw0K');
});