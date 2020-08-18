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

function io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$1() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$1', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$1fillInstOf });
    io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/profilemenu/ProfileMenuComponent$1';
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
vm.io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$1 = io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$1;


function io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$DesignModeListener() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$DesignModeListener;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._this$0 = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$DesignModeListener_this$0'] = v; return this['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$DesignModeListener_this$0']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$DesignModeListener_this$0'] = lcA1;
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
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$DesignModeListener_this$0'];var stA1 = (refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false)))['valueOf__Ljava_lang_String_2Ljava_lang_Object_2'](lcA2);
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
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent_2Lio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$1_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
c.constructor.cons__VLio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent_2.call(lcA0, lcA1);
return;

};
    m.access = 4096;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$DesignModeListenerfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$DesignModeListener', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_EventListener(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$DesignModeListenerfillInstOf });
    io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$DesignModeListenerfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/profilemenu/ProfileMenuComponent$DesignModeListener';
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
    this['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$DesignModeListener_this$0'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$DesignModeListener = io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$DesignModeListener;

vm.io_cloudoffice_platform_cockpit_api_EventListener = link('io/cloudoffice/platform/cockpit/api/EventListener', function(f) { vm.io_cloudoffice_platform_cockpit_api_EventListener =  f; });
vm.java_lang_String = link('java/lang/String', function(f) { vm.java_lang_String =  f; });

function io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$LoadInitialDataListener() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$LoadInitialDataListener;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._this$0 = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$LoadInitialDataListener_this$0'] = v; return this['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$LoadInitialDataListener_this$0']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$LoadInitialDataListener_this$0'] = lcA1;
return;

};
CLS['cons__VLio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.onReceive__VLio_cloudoffice_platform_cockpit_api_Signal_2 = function(lcA1) {
  var  lcA0 = this;
invoker.invoke__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$LoadInitialDataListener_this$0'],"processLoggedInUserInfo");
return;

};
c['onReceive__VLio_cloudoffice_platform_cockpit_api_Signal_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$LoadInitialDataListenerfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$LoadInitialDataListener', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_EventListener(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$LoadInitialDataListenerfillInstOf });
    io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$LoadInitialDataListenerfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/profilemenu/ProfileMenuComponent$LoadInitialDataListener';
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
    this['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$LoadInitialDataListener_this$0'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$LoadInitialDataListener = registerClass(exports,'io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$LoadInitialDataListener',io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$LoadInitialDataListener);


function io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$LoginEventListener$1() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$LoginEventListener$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._this$1 = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$LoginEventListener$1_this$1'] = v; return this['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$LoginEventListener$1_this$1']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$LoginEventListener_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$LoginEventListener$1_this$1'] = lcA1;
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.handle__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['query__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2'](lcA1);
var lcA2 = stA0;
var stA0 = new io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView;
(refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView || (refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView = io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView(false))).constructor.cons__V.call(stA0);
var lcA3 = stA0;
var stA0 = lcA3;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA2,"instance");
stA0.setInstance__VLjava_lang_String_2(stA1);
c.loadConfiguration__VLio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_2Lio_cloudoffice_platform_cockpit_api_MapBuilder_2.call(lcA0, lcA3, lcA2);
invoker.setView__VLjava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$LoginEventListener$1_this$1']['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$LoginEventListener_this$0'],lcA3);
var stA0 = invoker.getDefaultViewName__Ljava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$LoginEventListener$1_this$1']['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$LoginEventListener_this$0']);
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['toRaw__Ljava_lang_Object_2Ljava_lang_Object_2'](lcA3);
(refs_io_cloudoffice_platform_cockpit_js_VIEW || (refs_io_cloudoffice_platform_cockpit_js_VIEW = vm.io_cloudoffice_platform_cockpit_js_VIEW(false)))['bind__VLjava_lang_String_2Ljava_lang_Object_2'](stA0, stA1);
return;

};
c['handle__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.loadConfiguration__VLio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_2Lio_cloudoffice_platform_cockpit_api_MapBuilder_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = invoker.getJsonObject__Lorg_json_JSONObject_2Ljava_lang_String_2(lcA2,"configuration");
var lcA3 = stA0;
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_Object_2'](lcA3);
if ((stI0) == 0) { gt = 20; break IF; }
c.plugComponents__VLio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_2Lorg_json_JSONObject_2.call(lcA0, lcA1, lcA3);
    }
    X_20: for (;;) { IF: if (gt <= 20) {
return;

    }
}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.plugComponents__VLio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_2Lorg_json_JSONObject_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = lcA1.getConfiguration__Lio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration_2();
var stA1 = lcA0;var stA2 = invoker.getJSONObject__Lorg_json_JSONObject_2Ljava_lang_String_2(lcA2,"signinComponentDefinition");
var stA1 = c.componentDef__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2Lorg_json_JSONObject_2.call(stA1, stA2);
stA0.setSigninComponentDefinition__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2(stA1);
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.componentDef__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2Lorg_json_JSONObject_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_ComponentDef;
(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor['cons__V'].call(stA0);
var lcA2 = stA0;
var stA0 = lcA2;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA1,"instanceId");
invoker.setInstanceId__VLjava_lang_String_2(stA0,stA1);
var stA0 = lcA2;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA1,"component");
invoker.setComponent__VLjava_lang_String_2(stA0,stA1);
return lcA2;

};
    m.access = 2;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$LoginEventListener$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$LoginEventListener$1', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_CallBack(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$LoginEventListener$1fillInstOf });
    io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$LoginEventListener$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/profilemenu/ProfileMenuComponent$LoginEventListener$1';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_CallBack(false).constructor.$class
    ]; };
    CLS.$class.access = 65568;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_MapBuilder;
    var refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView;
    var refs_net_java_html_json_Models;
    var refs_io_cloudoffice_platform_cockpit_js_VIEW;
    var refs_io_cloudoffice_platform_cockpit_api_UtilValidate;
    var refs_io_cloudoffice_platform_cockpit_api_ComponentDef;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$LoginEventListener$1_this$1'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$LoginEventListener$1 = io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$LoginEventListener$1;

vm.io_cloudoffice_platform_cockpit_api_CallBack = link('io/cloudoffice/platform/cockpit/api/CallBack', function(f) { vm.io_cloudoffice_platform_cockpit_api_CallBack =  f; });
vm.io_cloudoffice_platform_cockpit_api_ComponentDef = link('io/cloudoffice/platform/cockpit/api/ComponentDef', function(f) { vm.io_cloudoffice_platform_cockpit_api_ComponentDef =  f; });
vm.io_cloudoffice_platform_cockpit_api_UtilValidate = link('io/cloudoffice/platform/cockpit/api/UtilValidate', function(f) { vm.io_cloudoffice_platform_cockpit_api_UtilValidate =  f; });
vm.io_cloudoffice_platform_cockpit_js_VIEW = link('io/cloudoffice/platform/cockpit/js/VIEW', function(f) { vm.io_cloudoffice_platform_cockpit_js_VIEW =  f; });
vm.net_java_html_json_Models = link('net/java/html/json/Models', function(f) { vm.net_java_html_json_Models =  f; });

function io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$LoginEventListener() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$LoginEventListener;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._this$0 = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$LoginEventListener_this$0'] = v; return this['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$LoginEventListener_this$0']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$LoginEventListener_this$0'] = lcA1;
return;

};
CLS['cons__VLio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent_2'] = m;

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
Array.at(stA0, 0, "profilemenu");
(refs_io_cloudoffice_platform_cockpit_js_VIEW || (refs_io_cloudoffice_platform_cockpit_js_VIEW = vm.io_cloudoffice_platform_cockpit_js_VIEW(false)))['render__V_3Ljava_lang_String_2'](stA0);
var stA0 = invoker.getInstanceId__Ljava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$LoginEventListener_this$0']);
var lcA2 = stA0;
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['_CONFIG']();var stA1 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['configFetchEndpoint__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2']("profilemenu", lcA2);
var stA2 = null;var stA3 = new io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$LoginEventListener$1;
(refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$LoginEventListener$1 || (refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$LoginEventListener$1 = io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$LoginEventListener$1(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$LoginEventListener_2.call(stA3, lcA0);
invoker.fetch__VLjava_lang_String_2Ljava_util_Map_2Lio_cloudoffice_platform_cockpit_api_CallBack_2(stA0,stA1, stA2, stA3);
return;

};
    m.access = 0;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$LoginEventListenerfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$LoginEventListener', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_EventListener(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$LoginEventListenerfillInstOf });
    io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$LoginEventListenerfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/profilemenu/ProfileMenuComponent$LoginEventListener';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_EventListener(false).constructor.$class
    ]; };
    CLS.$class.access = 33;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_js_VIEW;
    var refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration;
    var refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$LoginEventListener$1;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$LoginEventListener_this$0'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$LoginEventListener = registerClass(exports,'io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$LoginEventListener',io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$LoginEventListener);

vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration = link('io/cloudoffice/platform/cockpit/api/ComponentConfiguration', function(f) { vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration =  f; });

function io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_TYPE'] = null;
  m = c._TYPE = function (v) {  if (arguments.length == 1) CLS['fld_TYPE'] = v; return CLS['fld_TYPE']; };
  m = c._proto = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_proto'] = v; return this['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_proto']; };
  m = c._prop_instance = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_prop_instance'] = v; return this['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_prop_instance']; };
  m = c._prop_designerMode = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_prop_designerMode'] = v; return this['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_prop_designerMode']; };
  m = c._prop_configuration = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_prop_configuration'] = v; return this['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_prop_configuration']; };
  m = c._prop_showdrop = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_prop_showdrop'] = v; return this['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_prop_showdrop']; };
  m = c._prop_inputField = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_prop_inputField'] = v; return this['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_prop_inputField']; };
  m = c._prop_email = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_prop_email'] = v; return this['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_prop_email']; };
  m = c._prop_potrait = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_prop_potrait'] = v; return this['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_prop_potrait']; };
  m = c._prop_newVersionAvailable = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_prop_newVersionAvailable'] = v; return this['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_prop_newVersionAvailable']; };
    m = c.modelFor__Ljava_lang_Class_2 = function() {
return (refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent || (refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent = io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent(false))).constructor.$class;

};
    m.access = 10;
    m.cls = CLS;
    m = c.getInstance__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_proto'],"instance");
return lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_prop_instance'];

};
c['getInstance__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setInstance__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_prop_instance'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_prop_instance'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_proto'],"instance", lcA2, lcA1);
return;

    }
}}
};
c['setInstance__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isDesignerMode__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_proto'],"designerMode");
return lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_prop_designerMode'];

};
c['isDesignerMode__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setDesignerMode__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_prop_designerMode']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_prop_designerMode'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_proto'];var stA1 = "designerMode";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2, stA3);
return;

    }
}}
};
c['setDesignerMode__VZ'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getConfiguration__Lio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_proto'],"configuration");
if ((lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_prop_configuration']) !== (c._TYPE())) { gt = 40; break IF; }
var stA0 = lcA0;var stA1 = new io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration;
(refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration || (refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration = io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration(false))).constructor.cons__V.call(stA1);
var stA2 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_proto']);
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, stA2);
stA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_prop_configuration'] = stA1;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

if (lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_prop_configuration'] !== null && !lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_prop_configuration']['$instOf_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration']) vm.java_lang_Class(false).castEx(lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_prop_configuration'], 'io.cloudoffice.platform.cockpit.profilemenu.ProfileMenuConfiguration');
return lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_prop_configuration'];

    }
}}
};
c['getConfiguration__Lio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setConfiguration__VLio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_prop_configuration'];
if ((lcA2) !== (lcA1)) { gt = 18; break IF; }
return;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_prop_configuration'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_proto'],"configuration", lcA2, lcA1);
return;

    }
}}
};
c['setConfiguration__VLio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isShowdrop__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_proto'],"showdrop");
return lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_prop_showdrop'];

};
c['isShowdrop__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setShowdrop__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_prop_showdrop']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_prop_showdrop'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_proto'];var stA1 = "showdrop";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2, stA3);
return;

    }
}}
};
c['setShowdrop__VZ'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getInputField__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_proto'],"inputField");
return lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_prop_inputField'];

};
c['getInputField__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setInputField__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_prop_inputField'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_prop_inputField'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_proto'],"inputField", lcA2, lcA1);
return;

    }
}}
};
c['setInputField__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getEmail__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_proto'],"email");
return lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_prop_email'];

};
c['getEmail__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setEmail__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_prop_email'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_prop_email'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_proto'],"email", lcA2, lcA1);
return;

    }
}}
};
c['setEmail__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getPotrait__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_proto'],"potrait");
return lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_prop_potrait'];

};
c['getPotrait__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setPotrait__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_prop_potrait'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_prop_potrait'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_proto'],"potrait", lcA2, lcA1);
return;

    }
}}
};
c['setPotrait__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isNewVersionAvailable__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_proto'],"newVersionAvailable");
return lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_prop_newVersionAvailable'];

};
c['isNewVersionAvailable__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setNewVersionAvailable__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_prop_newVersionAvailable']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_prop_newVersionAvailable'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_proto'];var stA1 = "newVersionAvailable";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2, stA3);
return;

    }
}}
};
c['setNewVersionAvailable__VZ'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.signoutServerCall__VLjava_lang_String_2Ljava_lang_String_2Lio_cloudoffice_platform_cockpit_api_captain_Duty_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_proto'];var stI1 = 0;var stA2 = null;var stA3 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA3);
var stA3 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA3,"");
var stA3 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA3,lcA1);
var stA3 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA3,"");
var stA3 = invoker.toString__Ljava_lang_String_2(stA3);
var stA4 = null;var stA5 = "POST";var stA6 = lcA2;var stA7 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 1);
Array.at(stA7, 0, lcA3);
invoker.loadJSONWithHeaders__VILjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2_3Ljava_lang_Object_2(stA0,stI1, stA2, stA3, stA4, stA5, stA6, stA7);
return;

};
c['signoutServerCall__VLjava_lang_String_2Ljava_lang_String_2Lio_cloudoffice_platform_cockpit_api_captain_Duty_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setMyProfileAsSearchBoxFilter__V = function() {
  var  lcA0 = this;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_proto'];var stI1 = (9);var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 0);
invoker.runInBrowser__VI_3Ljava_lang_Object_2(stA0,stI1, stA2);
return;

};
c['setMyProfileAsSearchBoxFilter__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.createProto__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2(c._TYPE(),lcA0, lcA1);
stA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_proto'] = stA1;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = (refs_net_java_html_BrwsrCtx || (refs_net_java_html_BrwsrCtx = vm.net_java_html_BrwsrCtx(false)))['findDefault__Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'](c.constructor.$class);
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, stA1);
lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_prop_configuration'] = c._TYPE();
return;

};
CLS['cons__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLjava_lang_String_2ZLio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration_2ZLjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Z = function(lcA1, lcI2, lcA3, lcI4, lcA5, lcA6, lcA7, lcI8) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = (refs_net_java_html_BrwsrCtx || (refs_net_java_html_BrwsrCtx = vm.net_java_html_BrwsrCtx(false)))['findDefault__Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'](c.constructor.$class);
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, stA1);
lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_prop_instance'] = lcA1;
lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_prop_designerMode'] = lcI2;
lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_prop_configuration'] = lcA3;
lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_prop_showdrop'] = lcI4;
lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_prop_inputField'] = lcA5;
lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_prop_email'] = lcA6;
lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_prop_potrait'] = lcA7;
lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_prop_newVersionAvailable'] = lcI8;
return;

};
CLS['cons__VLjava_lang_String_2ZLio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration_2ZLjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, (8));
var lcA3 = stA0;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_proto'];var stA1 = lcA2;var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, (8));
Array.at(stA2, 0, "instance");
Array.at(stA2, 1, "designerMode");
Array.at(stA2, 2, "configuration");
Array.at(stA2, 3, "showdrop");
Array.at(stA2, 4, "inputField");
Array.at(stA2, 5, "email");
Array.at(stA2, (6), "potrait");
Array.at(stA2, (7), "newVersionAvailable");
invoker.extract__VLjava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Object_2(stA0,stA1, stA2, lcA3);
if ((lcA3[0] || Array.at(lcA3, 0)) !== null && !(lcA3[0] || Array.at(lcA3, 0))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[0] || Array.at(lcA3, 0)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_prop_instance'] = (lcA3[0] || Array.at(lcA3, 0));
var stA0 = lcA0;if (((lcA3[1] || Array.at(lcA3, 1))) !== null) { gt = 88; break IF; }
var stI1 = 0;{ gt = 100; break IF; }
    }
    X_88: for (;;) { IF: if (gt <= 88) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[1] || Array.at(lcA3, 1)));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_100: for (;;) { IF: if (gt <= 100) {
stA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_prop_designerMode'] = stI1;
var stA0 = lcA0;var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_proto'],(refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration || (refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration = io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration(false))).constructor.$class, (lcA3[2] || Array.at(lcA3, 2)));
stA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_prop_configuration'] = stA1;
var stA0 = lcA0;if (((lcA3[3] || Array.at(lcA3, 3))) !== null) { gt = 130; break IF; }
var stI1 = 0;{ gt = 142; break IF; }
    }
    X_130: for (;;) { IF: if (gt <= 130) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[3] || Array.at(lcA3, 3)));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_142: for (;;) { IF: if (gt <= 142) {
stA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_prop_showdrop'] = stI1;
if ((lcA3[4] || Array.at(lcA3, 4)) !== null && !(lcA3[4] || Array.at(lcA3, 4))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[4] || Array.at(lcA3, 4)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_prop_inputField'] = (lcA3[4] || Array.at(lcA3, 4));
if ((lcA3[5] || Array.at(lcA3, 5)) !== null && !(lcA3[5] || Array.at(lcA3, 5))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[5] || Array.at(lcA3, 5)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_prop_email'] = (lcA3[5] || Array.at(lcA3, 5));
if ((lcA3[(6)] || Array.at(lcA3, (6))) !== null && !(lcA3[(6)] || Array.at(lcA3, (6)))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[(6)] || Array.at(lcA3, (6))), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_prop_potrait'] = (lcA3[(6)] || Array.at(lcA3, (6)));
var stA0 = lcA0;if (((lcA3[(7)] || Array.at(lcA3, (7)))) !== null) { gt = 188; break IF; }
var stI1 = 0;{ gt = 201; break IF; }
    }
    X_188: for (;;) { IF: if (gt <= 188) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[(7)] || Array.at(lcA3, (7))));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_201: for (;;) { IF: if (gt <= 201) {
stA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_prop_newVersionAvailable'] = stI1;
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
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_prop_configuration']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"showdrop");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stI2 = lcA0.isShowdrop__Z();
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI2);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"inputField");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getInputField__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"email");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getEmail__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"potrait");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getPotrait__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"newVersionAvailable");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stI2 = lcA0.isNewVersionAvailable__Z();
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
    m = c.clone__Lio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_proto']);
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_2Lnet_java_html_BrwsrCtx_2.call(stA0, stA1);
return stA0;

};
c['clone__Lio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Lio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_2Lnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
var stA0 = new io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, lcA1);
var lcA2 = stA0;
var stA0 = lcA2;var stA1 = lcA0.getInstance__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_prop_instance'] = stA1;
var stA0 = lcA2;var stI1 = lcA0.isDesignerMode__Z();
stA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_prop_designerMode'] = stI1;
var stA0 = lcA2;if ((lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_prop_configuration']) !== null) { gt = 37; break IF; }
var stA1 = null;{ gt = 61; break IF; }
    }
    X_37: for (;;) { IF: if (gt <= 37) {

if ((lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_prop_configuration']) !== (c._TYPE())) { gt = 53; break IF; }
var stA1 = c._TYPE();{ gt = 61; break IF; }
    }
    X_53: for (;;) { IF: if (gt <= 53) {

var stA1 = lcA0.getConfiguration__Lio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration_2();
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, lcA1);
    }
    X_61: for (;;) { IF: if (gt <= 61) {
stA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_prop_configuration'] = stA1;
var stA0 = lcA2;var stI1 = lcA0.isShowdrop__Z();
stA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_prop_showdrop'] = stI1;
var stA0 = lcA2;var stA1 = lcA0.getInputField__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_prop_inputField'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getEmail__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_prop_email'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getPotrait__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_prop_potrait'] = stA1;
var stA0 = lcA2;var stI1 = lcA0.isNewVersionAvailable__Z();
stA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_prop_newVersionAvailable'] = stI1;
return lcA2;

    }
}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.applyBindings__Lio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_2 = function() {
  var  lcA0 = this;
invoker.applyBindings__V(lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_proto']);
return lcA0;

};
c['applyBindings__Lio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_2'] = m;

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

var stI0 = lcA1 != null && lcA1['$instOf_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView'] ? 1 : 0;
if ((stI0) != 0) { gt = 16; break IF; }
return 0;
    }
    X_16: for (;;) { IF: if (gt <= 16) {

if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.profilemenu.ProfileMenuView');
var lcA2 = lcA1;
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_prop_instance'], lcA2['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_prop_instance']);
if ((stI0) != 0) { gt = 40; break IF; }
return 0;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_prop_designerMode']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_prop_designerMode']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 65; break IF; }
return 0;
    }
    X_65: for (;;) { IF: if (gt <= 65) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_prop_configuration']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_prop_configuration']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 92; break IF; }
return 0;
    }
    X_92: for (;;) { IF: if (gt <= 92) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_prop_showdrop']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_prop_showdrop']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 117; break IF; }
return 0;
    }
    X_117: for (;;) { IF: if (gt <= 117) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_prop_inputField'], lcA2['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_prop_inputField']);
if ((stI0) != 0) { gt = 136; break IF; }
return 0;
    }
    X_136: for (;;) { IF: if (gt <= 136) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_prop_email'], lcA2['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_prop_email']);
if ((stI0) != 0) { gt = 155; break IF; }
return 0;
    }
    X_155: for (;;) { IF: if (gt <= 155) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_prop_potrait'], lcA2['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_prop_potrait']);
if ((stI0) != 0) { gt = 174; break IF; }
return 0;
    }
    X_174: for (;;) { IF: if (gt <= 174) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_prop_newVersionAvailable']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_prop_newVersionAvailable']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 199; break IF; }
return 0;
    }
    X_199: for (;;) { IF: if (gt <= 199) {

return 1;

    }
}}}}}}}}}}}
};
c['equals__ZLjava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.hashCode__I = function() {
  var  lcA0 = this;
var stA0 = invoker.getName__Ljava_lang_String_2(c.constructor.$class);
var stI0 = invoker.hashCode__I(stA0);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_prop_instance'], lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_prop_designerMode']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_prop_configuration']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_prop_showdrop']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_prop_inputField'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_prop_email'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_prop_potrait'], lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_prop_newVersionAvailable']);
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
var stA0 = lcA0.clone__Lio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_2();
return stA0;

};
c['clone__Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.access$100__Lio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView$Html4JavaType_2 = function() {
return c._TYPE();

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_2 = function(lcA0) {
return lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_proto'];

};
    m.access = 4104;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView$1_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2.call(lcA0, lcA1, lcA2);
return;

};
    m.access = 4096;
    m.cls = CLS;
    m = c.access$400__Lio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_2Lio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_2Lnet_java_html_BrwsrCtx_2 = function(lcA0, lcA1) {
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_2Lnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
return stA0;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView$Html4JavaType;
(refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView$Html4JavaType || (refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView$Html4JavaType = io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView$Html4JavaType(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView$1_2.call(stA0, null);
c._TYPE(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuViewfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView', { value : true });
      vm.java_lang_Cloneable(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuViewfillInstOf });
    io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuViewfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/profilemenu/ProfileMenuView';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.java_lang_Cloneable(false).constructor.$class
    ]; };
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent;
    var refs_java_lang_Boolean;
    var refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration;
    var refs_net_java_html_json_Models;
    var refs_java_lang_StringBuilder;
    var refs_net_java_html_BrwsrCtx;
    var refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView$Html4JavaType;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_proto'] = null;
    this['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_prop_instance'] = null;
    this['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_prop_designerMode'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_prop_configuration'] = null;
    this['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_prop_showdrop'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_prop_inputField'] = null;
    this['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_prop_email'] = null;
    this['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_prop_potrait'] = null;
    this['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_prop_newVersionAvailable'] = 0;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView = registerClass(exports,'io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView',io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView);

vm.java_lang_Cloneable = link('java/lang/Cloneable', function(f) { vm.java_lang_Cloneable =  f; });

function io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView$Html4JavaType() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView$Html4JavaType;
  if (!CLS.$class) {
    var pp = vm.org_netbeans_html_json_spi_Proto$Type(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_org_netbeans_html_json_spi_Proto$Type || (refs_org_netbeans_html_json_spi_Proto$Type = vm.org_netbeans_html_json_spi_Proto$Type(false))).constructor['cons__VLjava_lang_Class_2Ljava_lang_Class_2II'].call(lcA0, (refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView || (refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView = io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView(false))).constructor.$class, (refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent || (refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent = io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent(false))).constructor.$class, (8), (9));
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"instance", 0, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"designerMode", 1, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"configuration", 2, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"showdrop", 3, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"inputField", 4, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"email", 5, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"potrait", (6), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"newVersionAvailable", (7), 0, 0);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"toggle", 0);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"logout", 1);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"showMyProfile", 2);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"syncCache", 3);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"syncOfflineData", 4);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"enableDesignMode", 5);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"processLoggedInUserInfo", (6));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"openConfig", (7));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"closeConfigurationPanel", (8));
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.setValue__VLio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0:{ gt = 48; break IF; }
  case 1:{ gt = 65; break IF; }
  case 2:{ gt = 85; break IF; }
  case 3:{ gt = 102; break IF; }
  case 4:{ gt = 122; break IF; }
  case 5:{ gt = 139; break IF; }
  case 6:{ gt = 156; break IF; }
  case 7:{ gt = 173; break IF; }
  default: { gt = 193; break IF; }
}
    }
    X_48: for (;;) { IF: if (gt <= 48) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView || (refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView = io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView(false))).access$100__Lio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setInstance__VLjava_lang_String_2(stA1);
return;
    }
    X_65: for (;;) { IF: if (gt <= 65) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView || (refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView = io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView(false))).access$100__Lio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setDesignerMode__VZ(stI1);
return;
    }
    X_85: for (;;) { IF: if (gt <= 85) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView || (refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView = io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView(false))).access$100__Lio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration || (refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration = io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.profilemenu.ProfileMenuConfiguration');
stA0.setConfiguration__VLio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration_2(stA1);
return;
    }
    X_102: for (;;) { IF: if (gt <= 102) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView || (refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView = io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView(false))).access$100__Lio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setShowdrop__VZ(stI1);
return;
    }
    X_122: for (;;) { IF: if (gt <= 122) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView || (refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView = io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView(false))).access$100__Lio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setInputField__VLjava_lang_String_2(stA1);
return;
    }
    X_139: for (;;) { IF: if (gt <= 139) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView || (refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView = io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView(false))).access$100__Lio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setEmail__VLjava_lang_String_2(stA1);
return;
    }
    X_156: for (;;) { IF: if (gt <= 156) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView || (refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView = io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView(false))).access$100__Lio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setPotrait__VLjava_lang_String_2(stA1);
return;
    }
    X_173: for (;;) { IF: if (gt <= 173) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView || (refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView = io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView(false))).access$100__Lio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setNewVersionAvailable__VZ(stI1);
return;
    }
    X_193: for (;;) { IF: if (gt <= 193) {
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

    }
}}}}}}}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_2I = function(lcA1, lcI2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0:{ gt = 48; break IF; }
  case 1:{ gt = 53; break IF; }
  case 2:{ gt = 61; break IF; }
  case 3:{ gt = 66; break IF; }
  case 4:{ gt = 74; break IF; }
  case 5:{ gt = 79; break IF; }
  case 6:{ gt = 84; break IF; }
  case 7:{ gt = 89; break IF; }
  default: { gt = 97; break IF; }
}
    }
    X_48: for (;;) { IF: if (gt <= 48) {

var stA0 = lcA1.getInstance__Ljava_lang_String_2();
return stA0;
    }
    X_53: for (;;) { IF: if (gt <= 53) {

var stI0 = lcA1.isDesignerMode__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_61: for (;;) { IF: if (gt <= 61) {

var stA0 = lcA1.getConfiguration__Lio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration_2();
return stA0;
    }
    X_66: for (;;) { IF: if (gt <= 66) {

var stI0 = lcA1.isShowdrop__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_74: for (;;) { IF: if (gt <= 74) {

var stA0 = lcA1.getInputField__Ljava_lang_String_2();
return stA0;
    }
    X_79: for (;;) { IF: if (gt <= 79) {

var stA0 = lcA1.getEmail__Ljava_lang_String_2();
return stA0;
    }
    X_84: for (;;) { IF: if (gt <= 84) {

var stA0 = lcA1.getPotrait__Ljava_lang_String_2();
return stA0;
    }
    X_89: for (;;) { IF: if (gt <= 89) {

var stI0 = lcA1.isNewVersionAvailable__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_97: for (;;) { IF: if (gt <= 97) {
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

    }
}}}}}}}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.call__VLio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0:{ gt = 56; break IF; }
  case 1:{ gt = 61; break IF; }
  case 2:{ gt = 66; break IF; }
  case 3:{ gt = 71; break IF; }
  case 4:{ gt = 76; break IF; }
  case 5:{ gt = 81; break IF; }
  case 6:{ gt = 86; break IF; }
  case 7:{ gt = 91; break IF; }
  case 8:{ gt = 96; break IF; }
  case 9:{ gt = 101; break IF; }
  default: { gt = 115; break IF; }
}
    }
    X_56: for (;;) { IF: if (gt <= 56) {

(refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent || (refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent = io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent(false))).toggle__VLio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_2(lcA1);
return;
    }
    X_61: for (;;) { IF: if (gt <= 61) {

(refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent || (refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent = io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent(false))).logout__VLio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_2(lcA1);
return;
    }
    X_66: for (;;) { IF: if (gt <= 66) {

(refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent || (refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent = io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent(false))).showMyProfile__VLio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_2(lcA1);
return;
    }
    X_71: for (;;) { IF: if (gt <= 71) {

(refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent || (refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent = io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent(false))).syncCache__VLio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_2(lcA1);
return;
    }
    X_76: for (;;) { IF: if (gt <= 76) {

(refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent || (refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent = io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent(false))).syncOfflineData__VLio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_2(lcA1);
return;
    }
    X_81: for (;;) { IF: if (gt <= 81) {

(refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent || (refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent = io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent(false))).enableDesignMode__VLio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_2(lcA1);
return;
    }
    X_86: for (;;) { IF: if (gt <= 86) {

(refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent || (refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent = io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent(false))).processLoggedInUserInfo__VLio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_2(lcA1);
return;
    }
    X_91: for (;;) { IF: if (gt <= 91) {

(refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent || (refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent = io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent(false))).openConfig__VLio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_2(lcA1);
return;
    }
    X_96: for (;;) { IF: if (gt <= 96) {

(refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent || (refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent = io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent(false))).closeConfigurationPanel__VLio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_2(lcA1);
return;
    }
    X_101: for (;;) { IF: if (gt <= 101) {

if (lcA3 !== null && !Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](lcA3, 1, vm.java_lang_Object)) vm.java_lang_Class(false).castEx(lcA3, '');
if (lcA3 !== null && !Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](lcA3, 1, vm.java_lang_Object)) vm.java_lang_Class(false).castEx(lcA3, '');
var lcA5 = lcA3;
(refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent || (refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent = io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent(false))).setMyProfileAsSearchBoxFilter__VLio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_2(lcA1);
return;
    }
    X_115: for (;;) { IF: if (gt <= 115) {
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

    }
}}}}}}}}}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.profilemenu.ProfileMenuView');
var stA0 = (refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView || (refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView = io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_2(lcA1);
return stA0;

};
c['protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.onChange__VLio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0: { gt = 20; break IF; }
  default: { gt = 98; break IF; }
}
    }
    X_20: for (;;) { IF: if (gt <= 20) {

if ((lcI3) != (2)) { gt = 38; break IF; }
if (lcA4 !== null && !lcA4['$instOf_java_lang_Exception']) vm.java_lang_Class(false).castEx(lcA4, 'java.lang.Exception');
var lcA6 = lcA4;
invoker.printStackTrace__V(lcA6);
return;
    }
    X_38: for (;;) { IF: if (gt <= 38) {

if ((lcI3) != (1)) { gt = 98; break IF; }
if (lcA4 !== null && !Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](lcA4, 1, vm.java_lang_Object)) vm.java_lang_Class(false).castEx(lcA4, '');
if (lcA4 !== null && !Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](lcA4, 1, vm.java_lang_Object)) vm.java_lang_Class(false).castEx(lcA4, '');
var lcA6 = lcA4;
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, 1);
Array.at(stA0, 0, null);
var lcA7 = stA0;
var stA0 = (refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView || (refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView = io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView(false))).access$100__Lio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView$Html4JavaType_2();
var stA1 = (refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView || (refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView = io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_2(lcA1);
var stA1 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(stA1);
invoker.copyJSON__VLnet_java_html_BrwsrCtx_2_3Ljava_lang_Object_2Ljava_lang_Class_2_3Ljava_lang_Object_2(stA0,stA1, lcA6, (refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA7);
if ((lcA5[0] || Array.at(lcA5, 0)) !== null && !(lcA5[0] || Array.at(lcA5, 0))['$instOf_io_cloudoffice_platform_cockpit_api_captain_Duty']) vm.java_lang_Class(false).castEx((lcA5[0] || Array.at(lcA5, 0)), 'io.cloudoffice.platform.cockpit.api.captain.Duty');
(refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent || (refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent = io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent(false))).signoutServerCall__VLio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_2Ljava_lang_String_2Lio_cloudoffice_platform_cockpit_api_captain_Duty_2(lcA1, (lcA7[0] || Array.at(lcA7, 0)), (lcA5[0] || Array.at(lcA5, 0)));
return;
    }
    X_98: for (;;) { IF: if (gt <= 98) {
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

    }
}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.read__Lio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = new io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView;
(refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView || (refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView = io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView(false))).constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView$1_2.call(stA0, lcA1, lcA2, null);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.cloneTo__Lio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_2Lio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = (refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView || (refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView = io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView(false))).access$400__Lio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_2Lio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.profilemenu.ProfileMenuView');
lcA0.onMessage__VLio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_2IILjava_lang_Object_2_3Ljava_lang_Object_2(lcA1, lcI2, lcI3, lcA4, lcA5);
return;

};
c['onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.onChange__VLjava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.profilemenu.ProfileMenuView');
lcA0.onChange__VLio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_2I(lcA1, lcI2);
return;

};
c['onChange__VLjava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = lcA0.read__Lio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2(lcA1, lcA2);
return stA0;

};
c['read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.profilemenu.ProfileMenuView');
var stA0 = lcA0.cloneTo__Lio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_2Lio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
c['cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.profilemenu.ProfileMenuView');
lcA0.call__VLio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_2ILjava_lang_Object_2Ljava_lang_Object_2(lcA1, lcI2, lcA3, lcA4);
return;

};
c['call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Ljava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.profilemenu.ProfileMenuView');
var stA0 = lcA0.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_2I(lcA1, lcI2);
return stA0;

};
c['getValue__Ljava_lang_Object_2Ljava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.setValue__VLjava_lang_Object_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.profilemenu.ProfileMenuView');
lcA0.setValue__VLio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_2ILjava_lang_Object_2(lcA1, lcI2, lcA3);
return;

};
c['setValue__VLjava_lang_Object_2ILjava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView$1_2 = function(lcA1) {
  var  lcA0 = this;
c.constructor.cons__V.call(lcA0);
return;

};
    m.access = 4096;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView$Html4JavaTypefillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView$Html4JavaType', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView$Html4JavaTypefillInstOf });
    io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView$Html4JavaTypefillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/profilemenu/ProfileMenuView$Html4JavaType';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView;
    var refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent;
    var refs_org_netbeans_html_json_spi_Proto$Type;
    var refs_java_lang_String;
    var refs_java_lang_Boolean;
    var refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration;
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
vm.io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView$Html4JavaType = io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView$Html4JavaType;

vm.java_lang_UnsupportedOperationException = link('java/lang/UnsupportedOperationException', function(f) { vm.java_lang_UnsupportedOperationException =  f; });
vm.org_netbeans_html_json_spi_Proto$Type = link('org/netbeans/html/json/spi/Proto$Type', function(f) { vm.org_netbeans_html_json_spi_Proto$Type =  f; });
vm.net_java_html_BrwsrCtx = link('net/java/html/BrwsrCtx', function(f) { vm.net_java_html_BrwsrCtx =  f; });
vm.java_lang_StringBuilder = link('java/lang/StringBuilder', function(f) { vm.java_lang_StringBuilder =  f; });

function io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_TYPE'] = null;
  m = c._TYPE = function (v) {  if (arguments.length == 1) CLS['fld_TYPE'] = v; return CLS['fld_TYPE']; };
  m = c._proto = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration_proto'] = v; return this['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration_proto']; };
  m = c._prop_signinComponentDefinition = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration_prop_signinComponentDefinition'] = v; return this['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration_prop_signinComponentDefinition']; };
    m = c.modelFor__Ljava_lang_Class_2 = function() {
return (refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$ProfileMenuConfigurationModel || (refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$ProfileMenuConfigurationModel = io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$ProfileMenuConfigurationModel(false))).constructor.$class;

};
    m.access = 10;
    m.cls = CLS;
    m = c.getSigninComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration_proto'],"signinComponentDefinition");
if ((lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration_prop_signinComponentDefinition']) !== (c._TYPE())) { gt = 40; break IF; }
var stA0 = lcA0;var stA1 = new vm.io_cloudoffice_platform_cockpit_api_ComponentDef;
(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor['cons__V'].call(stA1);
var stA2 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration_proto']);
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, stA2);
stA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration_prop_signinComponentDefinition'] = stA1;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

if (lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration_prop_signinComponentDefinition'] !== null && !lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration_prop_signinComponentDefinition']['$instOf_io_cloudoffice_platform_cockpit_api_ComponentDef']) vm.java_lang_Class(false).castEx(lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration_prop_signinComponentDefinition'], 'io.cloudoffice.platform.cockpit.api.ComponentDef');
return lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration_prop_signinComponentDefinition'];

    }
}}
};
c['getSigninComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setSigninComponentDefinition__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration_prop_signinComponentDefinition'];
if ((lcA2) !== (lcA1)) { gt = 18; break IF; }
return;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration_prop_signinComponentDefinition'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration_proto'],"signinComponentDefinition", lcA2, lcA1);
return;

    }
}}
};
c['setSigninComponentDefinition__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.createProto__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2(c._TYPE(),lcA0, lcA1);
stA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration_proto'] = stA1;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = (refs_net_java_html_BrwsrCtx || (refs_net_java_html_BrwsrCtx = vm.net_java_html_BrwsrCtx(false)))['findDefault__Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'](c.constructor.$class);
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, stA1);
lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration_prop_signinComponentDefinition'] = c._TYPE();
return;

};
CLS['cons__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = (refs_net_java_html_BrwsrCtx || (refs_net_java_html_BrwsrCtx = vm.net_java_html_BrwsrCtx(false)))['findDefault__Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'](c.constructor.$class);
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, stA1);
lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration_prop_signinComponentDefinition'] = lcA1;
return;

};
CLS['cons__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 1);
var lcA3 = stA0;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration_proto'];var stA1 = lcA2;var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, 1);
Array.at(stA2, 0, "signinComponentDefinition");
invoker.extract__VLjava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Object_2(stA0,stA1, stA2, lcA3);
var stA0 = lcA0;var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration_proto'],(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor.$class, (lcA3[0] || Array.at(lcA3, 0)));
stA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration_prop_signinComponentDefinition'] = stA1;
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
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"signinComponentDefinition");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration_prop_signinComponentDefinition']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(125));
var stA0 = invoker.toString__Ljava_lang_String_2(lcA1);
return stA0;

};
c['toString__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Lio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration_proto']);
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration_2Lnet_java_html_BrwsrCtx_2.call(stA0, stA1);
return stA0;

};
c['clone__Lio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Lio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration_2Lnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
var stA0 = new io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, lcA1);
var lcA2 = stA0;
var stA0 = lcA2;if ((lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration_prop_signinComponentDefinition']) !== null) { gt = 21; break IF; }
var stA1 = null;{ gt = 45; break IF; }
    }
    X_21: for (;;) { IF: if (gt <= 21) {

if ((lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration_prop_signinComponentDefinition']) !== (c._TYPE())) { gt = 37; break IF; }
var stA1 = c._TYPE();{ gt = 45; break IF; }
    }
    X_37: for (;;) { IF: if (gt <= 37) {

var stA1 = lcA0.getSigninComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, lcA1);
    }
    X_45: for (;;) { IF: if (gt <= 45) {
stA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration_prop_signinComponentDefinition'] = stA1;
return lcA2;

    }
}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.applyBindings__Lio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration_2 = function() {
  var  lcA0 = this;
invoker.applyBindings__V(lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration_proto']);
return lcA0;

};
c['applyBindings__Lio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration_2'] = m;

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

var stI0 = lcA1 != null && lcA1['$instOf_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration'] ? 1 : 0;
if ((stI0) != 0) { gt = 16; break IF; }
return 0;
    }
    X_16: for (;;) { IF: if (gt <= 16) {

if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.profilemenu.ProfileMenuConfiguration');
var lcA2 = lcA1;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration_prop_signinComponentDefinition']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration_prop_signinComponentDefinition']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 48; break IF; }
return 0;
    }
    X_48: for (;;) { IF: if (gt <= 48) {

return 1;

    }
}}}}
};
c['equals__ZLjava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.hashCode__I = function() {
  var  lcA0 = this;
var stA0 = invoker.getName__Ljava_lang_String_2(c.constructor.$class);
var stI0 = invoker.hashCode__I(stA0);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration_prop_signinComponentDefinition']);
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
var stA0 = lcA0.clone__Lio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration_2();
return stA0;

};
c['clone__Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.access$100__Lio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration$Html4JavaType_2 = function() {
return c._TYPE();

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration_2 = function(lcA0) {
return lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration_proto'];

};
    m.access = 4104;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration$1_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2.call(lcA0, lcA1, lcA2);
return;

};
    m.access = 4096;
    m.cls = CLS;
    m = c.access$400__Lio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration_2Lio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration_2Lnet_java_html_BrwsrCtx_2 = function(lcA0, lcA1) {
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration_2Lnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
return stA0;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration$Html4JavaType;
(refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration$Html4JavaType || (refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration$Html4JavaType = io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration$Html4JavaType(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration$1_2.call(stA0, null);
c._TYPE(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfigurationfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration', { value : true });
      vm.java_lang_Cloneable(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfigurationfillInstOf });
    io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfigurationfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/profilemenu/ProfileMenuConfiguration';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.java_lang_Cloneable(false).constructor.$class
    ]; };
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$ProfileMenuConfigurationModel;
    var refs_io_cloudoffice_platform_cockpit_api_ComponentDef;
    var refs_net_java_html_json_Models;
    var refs_net_java_html_BrwsrCtx;
    var refs_java_lang_StringBuilder;
    var refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration$Html4JavaType;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration_proto'] = null;
    this['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration_prop_signinComponentDefinition'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration = registerClass(exports,'io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration',io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration);


function io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration$Html4JavaType() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration$Html4JavaType;
  if (!CLS.$class) {
    var pp = vm.org_netbeans_html_json_spi_Proto$Type(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_org_netbeans_html_json_spi_Proto$Type || (refs_org_netbeans_html_json_spi_Proto$Type = vm.org_netbeans_html_json_spi_Proto$Type(false))).constructor['cons__VLjava_lang_Class_2Ljava_lang_Class_2II'].call(lcA0, (refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration || (refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration = io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration(false))).constructor.$class, (refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$ProfileMenuConfigurationModel || (refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$ProfileMenuConfigurationModel = io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$ProfileMenuConfigurationModel(false))).constructor.$class, 1, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"signinComponentDefinition", 0, 0, 0);
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.setValue__VLio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0: { gt = 20; break IF; }
  default: { gt = 37; break IF; }
}
    }
    X_20: for (;;) { IF: if (gt <= 20) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration || (refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration = io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration(false))).access$100__Lio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_api_ComponentDef']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.api.ComponentDef');
stA0.setSigninComponentDefinition__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2(stA1);
return;
    }
    X_37: for (;;) { IF: if (gt <= 37) {
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

    }
}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration_2I = function(lcA1, lcI2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0: { gt = 20; break IF; }
  default: { gt = 25; break IF; }
}
    }
    X_20: for (;;) { IF: if (gt <= 20) {

var stA0 = lcA1.getSigninComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
return stA0;
    }
    X_25: for (;;) { IF: if (gt <= 25) {
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

    }
}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.call__VLio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.profilemenu.ProfileMenuConfiguration');
var stA0 = (refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration || (refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration = io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration_2(lcA1);
return stA0;

};
c['protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.onChange__VLio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
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
    m = c.read__Lio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = new io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration;
(refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration || (refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration = io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration(false))).constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration$1_2.call(stA0, lcA1, lcA2, null);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.cloneTo__Lio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration_2Lio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = (refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration || (refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration = io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration(false))).access$400__Lio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration_2Lio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.profilemenu.ProfileMenuConfiguration');
lcA0.onMessage__VLio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration_2IILjava_lang_Object_2_3Ljava_lang_Object_2(lcA1, lcI2, lcI3, lcA4, lcA5);
return;

};
c['onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.onChange__VLjava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.profilemenu.ProfileMenuConfiguration');
lcA0.onChange__VLio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration_2I(lcA1, lcI2);
return;

};
c['onChange__VLjava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = lcA0.read__Lio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2(lcA1, lcA2);
return stA0;

};
c['read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.profilemenu.ProfileMenuConfiguration');
var stA0 = lcA0.cloneTo__Lio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration_2Lio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
c['cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.profilemenu.ProfileMenuConfiguration');
lcA0.call__VLio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration_2ILjava_lang_Object_2Ljava_lang_Object_2(lcA1, lcI2, lcA3, lcA4);
return;

};
c['call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Ljava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.profilemenu.ProfileMenuConfiguration');
var stA0 = lcA0.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration_2I(lcA1, lcI2);
return stA0;

};
c['getValue__Ljava_lang_Object_2Ljava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.setValue__VLjava_lang_Object_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.profilemenu.ProfileMenuConfiguration');
lcA0.setValue__VLio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration_2ILjava_lang_Object_2(lcA1, lcI2, lcA3);
return;

};
c['setValue__VLjava_lang_Object_2ILjava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration$1_2 = function(lcA1) {
  var  lcA0 = this;
c.constructor.cons__V.call(lcA0);
return;

};
    m.access = 4096;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration$Html4JavaTypefillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration$Html4JavaType', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration$Html4JavaTypefillInstOf });
    io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration$Html4JavaTypefillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/profilemenu/ProfileMenuConfiguration$Html4JavaType';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration;
    var refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$ProfileMenuConfigurationModel;
    var refs_org_netbeans_html_json_spi_Proto$Type;
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
vm.io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration$Html4JavaType = io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration$Html4JavaType;


function io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$ProfileMenuConfigurationModel() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$ProfileMenuConfigurationModel;
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
    function io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$ProfileMenuConfigurationModelfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$ProfileMenuConfigurationModel', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$ProfileMenuConfigurationModelfillInstOf });
    io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$ProfileMenuConfigurationModelfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/profilemenu/ProfileMenuComponent$ProfileMenuConfigurationModel';
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
vm.io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$ProfileMenuConfigurationModel = registerClass(exports,'io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$ProfileMenuConfigurationModel',io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$ProfileMenuConfigurationModel);

vm.java_lang_Boolean = link('java/lang/Boolean', function(f) { vm.java_lang_Boolean =  f; });

function io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent;
  if (!CLS.$class) {
    var pp = vm.io_cloudoffice_platform_cockpit_api_AbstractComponent(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_INVALID_SESSION'] = null;
  m = c._INVALID_SESSION = function (v) {  if (arguments.length == 1) CLS['fld_INVALID_SESSION'] = v; return CLS['fld_INVALID_SESSION']; };
c['_INVALID_SESSION'] = m;

    m = c.getInstance__Lio_cloudoffice_platform_cockpit_api_Component_2Ljava_lang_String_2 = function(lcA0) {
var stA0 = new io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent;
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
var stA0 = lcA0;var stA1 = "loginsuccess";var stA2 = new io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$LoginEventListener;
(refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$LoginEventListener || (refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$LoginEventListener = io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$LoginEventListener(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent_2.call(stA2, lcA0);
invoker.attachListener__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_EventListener_2(stA0,stA1, stA2);
var stA0 = lcA0;var stA1 = "loadintialdata";var stA2 = new io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$LoadInitialDataListener;
(refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$LoadInitialDataListener || (refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$LoadInitialDataListener = io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$LoadInitialDataListener(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent_2.call(stA2, lcA0);
invoker.attachListener__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_EventListener_2(stA0,stA1, stA2);
var stA0 = lcA0;var stA1 = "designermode";var stA2 = new io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$DesignModeListener;
(refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$DesignModeListener || (refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$DesignModeListener = io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$DesignModeListener(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent_2Lio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$1_2.call(stA2, lcA0, null);
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
    m = c.toggle__VLio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = lcA0;var stI1 = lcA0.isShowdrop__Z();
if ((stI1) != 0) { gt = 12; break IF; }
var stI1 = 1;{ gt = 13; break IF; }
    }
    X_12: for (;;) { IF: if (gt <= 12) {

var stI1 = 0;    }
    X_13: for (;;) { IF: if (gt <= 13) {
stA0.setShowdrop__VZ(stI1);
return;

    }
}}}
};
c['toggle__VLio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.signoutServerCall__VLio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_2Ljava_lang_String_2Lio_cloudoffice_platform_cockpit_api_captain_Duty_2 = function(lcA0, lcA1, lcA2) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = invoker.captain__Lio_cloudoffice_platform_cockpit_api_captain_Captain_2(lcA2);
var stA0 = invoker.bag__Ljava_util_Map_2(stA0);
var stA1 = "result";var stA2 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['query__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2'](lcA1);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = lcA2;if ((lcA1) === null) { gt = 35; break IF; }
var stI1 = invoker.isEmpty__Z(lcA1);
if ((stI1) != 0) { gt = 35; break IF; }
var stI1 = 1;{ gt = 36; break IF; }
    }
    X_35: for (;;) { IF: if (gt <= 35) {

var stI1 = 0;    }
    X_36: for (;;) { IF: if (gt <= 36) {
invoker.asExpected__VZ(stA0,stI1);
return;

    }
}}}
};
c['signoutServerCall__VLio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_2Ljava_lang_String_2Lio_cloudoffice_platform_cockpit_api_captain_Duty_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.logout__VLio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_2 = function(lcA0) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_captain_Captain || (refs_io_cloudoffice_platform_cockpit_api_captain_Captain = vm.io_cloudoffice_platform_cockpit_api_captain_Captain(false)))['plan__Lio_cloudoffice_platform_cockpit_api_captain_Captain_2']();
var stA1 = (refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$$Lambda$1 || (refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$$Lambda$1 = io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$$Lambda$1(false))).lambdaFactory$__Lio_cloudoffice_platform_cockpit_api_captain_Execution_2();
var stA0 = invoker.begin__Lio_cloudoffice_platform_cockpit_api_captain_Captain_2Lio_cloudoffice_platform_cockpit_api_captain_Execution_2(stA0,stA1);
var stA1 = (refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$$Lambda$2 || (refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$$Lambda$2 = io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$$Lambda$2(false))).lambdaFactory$__Lio_cloudoffice_platform_cockpit_api_captain_Execution_2();
var stA0 = invoker.whenUnexpected__Lio_cloudoffice_platform_cockpit_api_captain_Captain_2Lio_cloudoffice_platform_cockpit_api_captain_Execution_2(stA0,stA1);
var stA1 = (refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$$Lambda$3 || (refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$$Lambda$3 = io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$$Lambda$3(false))).lambdaFactory$__Lio_cloudoffice_platform_cockpit_api_captain_Execution_2();
var stA0 = invoker.then__Lio_cloudoffice_platform_cockpit_api_captain_Captain_2Lio_cloudoffice_platform_cockpit_api_captain_Execution_2(stA0,stA1);
var stA1 = (refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$$Lambda$4 || (refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$$Lambda$4 = io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$$Lambda$4(false))).lambdaFactory$__Lio_cloudoffice_platform_cockpit_api_captain_Execution_2();
var stA0 = invoker.whenUnexpected__Lio_cloudoffice_platform_cockpit_api_captain_Captain_2Lio_cloudoffice_platform_cockpit_api_captain_Execution_2(stA0,stA1);
var stA1 = (refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$$Lambda$5 || (refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$$Lambda$5 = io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$$Lambda$5(false))).lambdaFactory$__Lio_cloudoffice_platform_cockpit_api_captain_Execution_2();
var stA0 = invoker.then__Lio_cloudoffice_platform_cockpit_api_captain_Captain_2Lio_cloudoffice_platform_cockpit_api_captain_Execution_2(stA0,stA1);
invoker.perform__V(stA0);
return;

};
c['logout__VLio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.showMyProfile__VLio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_2 = function(lcA0) {
lcA0.setShowdrop__VZ(0);
c.setMyProfileAsSearchBoxFilter__VLio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_2(lcA0);
return;

};
c['showMyProfile__VLio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.setMyProfileAsSearchBoxFilter__VLio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_2 = function(lcA0) {
return;

};
c['setMyProfileAsSearchBoxFilter__VLio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.syncCache__VLio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_2 = function(lcA0) {
(refs_io_cloudoffice_platform_cockpit_js_VIEW || (refs_io_cloudoffice_platform_cockpit_js_VIEW = vm.io_cloudoffice_platform_cockpit_js_VIEW(false)))['invokeJSFunction__VLjava_lang_String_2']("ProfileManager.syncCache()");
return;

};
c['syncCache__VLio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.syncOfflineData__VLio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_2 = function(lcA0) {
return;

};
c['syncOfflineData__VLio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.enableDesignMode__VLio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_2 = function(lcA0) {
lcA0.setShowdrop__VZ(0);
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_Components || (refs_io_cloudoffice_platform_cockpit_api_Components = vm.io_cloudoffice_platform_cockpit_api_Components(false)))['_LAYOUT']();var stA1 = new vm.io_cloudoffice_platform_cockpit_api_Event;
var stA2 = stA1;var stA3 = "designermode";var stA4 = "designermode";var stA5 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['builder__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2']();
var stA5 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Z(stA5,"on", 1);
(refs_io_cloudoffice_platform_cockpit_api_Event || (refs_io_cloudoffice_platform_cockpit_api_Event = vm.io_cloudoffice_platform_cockpit_api_Event(false))).constructor['cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2'].call(stA2, stA3, stA4, stA5);
invoker.listen__VLio_cloudoffice_platform_cockpit_api_Signal_2(stA0,stA1);
return;

};
c['enableDesignMode__VLio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.setComponentName__V = function() {
  var  lcA0 = this;
c['_componentName'].call(lcA0, "profilemenu-component");
return;

};
c['setComponentName__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.bindViewNames__V = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.getName__Ljava_lang_String_2((refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView || (refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView = io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView(false))).constructor.$class);
invoker.setDefaultViewName__VLjava_lang_String_2(stA0,stA1);
return;

};
c['bindViewNames__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.processLoggedInUserInfo__VLio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_2 = function(lcA0) {
var stA0 = lcA0;var stA1 = (refs_io_cloudoffice_platform_cockpit_api_Session || (refs_io_cloudoffice_platform_cockpit_api_Session = vm.io_cloudoffice_platform_cockpit_api_Session(false)))['getUser__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2']();
var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(stA1,"emailAddress");
stA0.setEmail__VLjava_lang_String_2(stA1);
var stA0 = lcA0;var stA1 = (refs_io_cloudoffice_platform_cockpit_api_Session || (refs_io_cloudoffice_platform_cockpit_api_Session = vm.io_cloudoffice_platform_cockpit_api_Session(false)))['getUser__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2']();
var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(stA1,"fullName");
stA0.setInputField__VLjava_lang_String_2(stA1);
var stA0 = lcA0;var stA1 = (refs_io_cloudoffice_platform_cockpit_api_Session || (refs_io_cloudoffice_platform_cockpit_api_Session = vm.io_cloudoffice_platform_cockpit_api_Session(false)))['getUser__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2']();
var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(stA1,"profileImage");
stA0.setPotrait__VLjava_lang_String_2(stA1);
return;

};
c['processLoggedInUserInfo__VLio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.openConfig__VLio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_2 = function(lcA0) {
lcA0.setDesignerMode__VZ(1);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.closeConfigurationPanel__VLio_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView_2 = function(lcA0) {
lcA0.setDesignerMode__VZ(0);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.lambda$logout$6__VLio_cloudoffice_platform_cockpit_api_captain_Duty_2 = function(lcA0) {
invoker.comment__VLjava_lang_String_2(lcA0,"SERVER SENT EXPECTED DATA");
var stA0 = invoker.captain__Lio_cloudoffice_platform_cockpit_api_captain_Captain_2(lcA0);
var stA0 = invoker.bag__Ljava_util_Map_2(stA0);
var stA0 = invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2(stA0,"result");
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_api_MapBuilder']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.api.MapBuilder');
var lcA1 = stA0;
(refs_io_cloudoffice_platform_cockpit_js_LocalStorage || (refs_io_cloudoffice_platform_cockpit_js_LocalStorage = vm.io_cloudoffice_platform_cockpit_js_LocalStorage(false)))['remove__VLjava_lang_String_2']("user");
var stA0 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA1,"path");
var stA0 = (refs_io_cloudoffice_platform_cockpit_js_JSUIUtils || (refs_io_cloudoffice_platform_cockpit_js_JSUIUtils = vm.io_cloudoffice_platform_cockpit_js_JSUIUtils(false)))['setPath__Ljava_lang_String_2Ljava_lang_String_2'](stA0);
var stA0 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA1,"layout");
(refs_io_cloudoffice_platform_cockpit_js_JSUIUtils || (refs_io_cloudoffice_platform_cockpit_js_JSUIUtils = vm.io_cloudoffice_platform_cockpit_js_JSUIUtils(false)))['setLayout__VLjava_lang_String_2'](stA0);
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_Components || (refs_io_cloudoffice_platform_cockpit_api_Components = vm.io_cloudoffice_platform_cockpit_api_Components(false)))['_BOOT']();var stA1 = new vm.io_cloudoffice_platform_cockpit_api_Event;
(refs_io_cloudoffice_platform_cockpit_api_Event || (refs_io_cloudoffice_platform_cockpit_api_Event = vm.io_cloudoffice_platform_cockpit_api_Event(false))).constructor['cons__VLjava_lang_String_2Ljava_lang_String_2'].call(stA1, "boot", "boot");
invoker.listen__VLio_cloudoffice_platform_cockpit_api_Signal_2(stA0,stA1);
return;

};
    m.access = 4106;
    m.cls = CLS;
    m = c.lambda$logout$5__VLio_cloudoffice_platform_cockpit_api_captain_Duty_2 = function(lcA0) {
invoker.comment__VLjava_lang_String_2(lcA0,"WHEN SERVER SENT ERROR CODE");
var stA0 = invoker.captain__Lio_cloudoffice_platform_cockpit_api_captain_Captain_2(lcA0);
invoker.deliverAndCloseAssignment__V(stA0);
return;

};
    m.access = 4106;
    m.cls = CLS;
    m = c.lambda$logout$4__VLio_cloudoffice_platform_cockpit_api_captain_Duty_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.comment__VLjava_lang_String_2(lcA0,"CHECK SERVER SENT ERROR CODE");
var stA0 = invoker.captain__Lio_cloudoffice_platform_cockpit_api_captain_Captain_2(lcA0);
var stA0 = invoker.bag__Ljava_util_Map_2(stA0);
var stA0 = invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2(stA0,"result");
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_api_MapBuilder']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.api.MapBuilder');
var lcA1 = stA0;
var stA0 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA1,"error");
var lcA2 = stA0;
var stA0 = lcA0;if ((null) === (lcA2)) { gt = 46; break IF; }
var stI1 = invoker.isEmpty__Z(lcA2);
if ((stI1) == 0) { gt = 50; break IF; }
    }
    X_46: for (;;) { IF: if (gt <= 46) {

var stI1 = 1;{ gt = 51; break IF; }
    }
    X_50: for (;;) { IF: if (gt <= 50) {

var stI1 = 0;    }
    X_51: for (;;) { IF: if (gt <= 51) {
invoker.asExpected__VZ(stA0,stI1);
return;

    }
}}}}
};
    m.access = 4106;
    m.cls = CLS;
    m = c.lambda$logout$3__VLio_cloudoffice_platform_cockpit_api_captain_Duty_2 = function(lcA0) {
invoker.comment__VLjava_lang_String_2(lcA0,"WHEN SERVER CALL WENT UNEXPECTED");
var stA0 = invoker.captain__Lio_cloudoffice_platform_cockpit_api_captain_Captain_2(lcA0);
invoker.deliverAndCloseAssignment__V(stA0);
return;

};
    m.access = 4106;
    m.cls = CLS;
    m = c.lambda$logout$2__VLio_cloudoffice_platform_cockpit_api_captain_Duty_2 = function(lcA0) {
invoker.comment__VLjava_lang_String_2(lcA0,"DO SERVER CALL AND RECEIVE DATA");
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"https://");
var stA1 = (refs_io_cloudoffice_platform_cockpit_js_JSUIUtils || (refs_io_cloudoffice_platform_cockpit_js_JSUIUtils = vm.io_cloudoffice_platform_cockpit_js_JSUIUtils(false)))['getHost__Ljava_lang_String_2']();
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"/o/signout");
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
var stA1 = (refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$$Lambda$6 || (refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$$Lambda$6 = io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$$Lambda$6(false))).lambdaFactory$__Lio_cloudoffice_platform_cockpit_api_connect_Mapper_2();
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_connect_Connect || (refs_io_cloudoffice_platform_cockpit_api_connect_Connect = vm.io_cloudoffice_platform_cockpit_api_connect_Connect(false)))['send__Lio_cloudoffice_platform_cockpit_api_connect_Connect_2Ljava_lang_String_2Lio_cloudoffice_platform_cockpit_api_connect_Mapper_2'](stA0, stA1);
var stA1 = (refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$$Lambda$7 || (refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$$Lambda$7 = io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$$Lambda$7(false))).lambdaFactory$__Lio_cloudoffice_platform_cockpit_api_connect_Mapper_2Lio_cloudoffice_platform_cockpit_api_captain_Duty_2(lcA0);
invoker.receive__VLio_cloudoffice_platform_cockpit_api_connect_Mapper_2(stA0,stA1);
return;

};
    m.access = 4106;
    m.cls = CLS;
    m = c.lambda$null$1__VLio_cloudoffice_platform_cockpit_api_captain_Duty_2Lio_cloudoffice_platform_cockpit_api_connect_Connect_2 = function(lcA0, lcA1) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = invoker.captain__Lio_cloudoffice_platform_cockpit_api_captain_Captain_2(lcA0);
var stA0 = invoker.bag__Ljava_util_Map_2(stA0);
var stA1 = "result";var stA2 = invoker.result__Ljava_lang_String_2(lcA1);
var stA2 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['query__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2'](stA2);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = lcA0;var stA1 = invoker.result__Ljava_lang_String_2(lcA1);
if ((stA1) === null) { gt = 44; break IF; }
var stA1 = invoker.result__Ljava_lang_String_2(lcA1);
var stI1 = invoker.isEmpty__Z(stA1);
if ((stI1) != 0) { gt = 44; break IF; }
var stI1 = 1;{ gt = 45; break IF; }
    }
    X_44: for (;;) { IF: if (gt <= 44) {

var stI1 = 0;    }
    X_45: for (;;) { IF: if (gt <= 45) {
invoker.asExpected__VZ(stA0,stI1);
return;

    }
}}}
};
    m.access = 4106;
    m.cls = CLS;
    m = c.lambda$null$0__VLio_cloudoffice_platform_cockpit_api_connect_Connect_2 = function(lcA0) {
var stA0 = lcA0;var stA1 = new vm.java_util_HashMap;
(refs_java_util_HashMap || (refs_java_util_HashMap = vm.java_util_HashMap(false))).constructor['cons__V'].call(stA1);
invoker.data__VLjava_lang_Object_2(stA0,stA1);
return;

};
    m.access = 4106;
    m.cls = CLS;
    m = c.class__V = function() {
c._INVALID_SESSION("C0010001");
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.access$lambda$0__VLio_cloudoffice_platform_cockpit_api_captain_Duty_2 = function(lcA0) {
c.lambda$logout$2__VLio_cloudoffice_platform_cockpit_api_captain_Duty_2(lcA0);
return;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$lambda$1__VLio_cloudoffice_platform_cockpit_api_captain_Duty_2 = function(lcA0) {
c.lambda$logout$3__VLio_cloudoffice_platform_cockpit_api_captain_Duty_2(lcA0);
return;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$lambda$2__VLio_cloudoffice_platform_cockpit_api_captain_Duty_2 = function(lcA0) {
c.lambda$logout$4__VLio_cloudoffice_platform_cockpit_api_captain_Duty_2(lcA0);
return;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$lambda$3__VLio_cloudoffice_platform_cockpit_api_captain_Duty_2 = function(lcA0) {
c.lambda$logout$5__VLio_cloudoffice_platform_cockpit_api_captain_Duty_2(lcA0);
return;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$lambda$4__VLio_cloudoffice_platform_cockpit_api_captain_Duty_2 = function(lcA0) {
c.lambda$logout$6__VLio_cloudoffice_platform_cockpit_api_captain_Duty_2(lcA0);
return;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$lambda$5__VLio_cloudoffice_platform_cockpit_api_connect_Connect_2 = function(lcA0) {
c.lambda$null$0__VLio_cloudoffice_platform_cockpit_api_connect_Connect_2(lcA0);
return;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$lambda$6__VLio_cloudoffice_platform_cockpit_api_captain_Duty_2Lio_cloudoffice_platform_cockpit_api_connect_Connect_2 = function(lcA0, lcA1) {
c.lambda$null$1__VLio_cloudoffice_platform_cockpit_api_captain_Duty_2Lio_cloudoffice_platform_cockpit_api_connect_Connect_2(lcA0, lcA1);
return;

};
    m.access = 4104;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponentfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponentfillInstOf });
    io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponentfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/profilemenu/ProfileMenuComponent';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 33;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_io_cloudoffice_platform_cockpit_api_AbstractComponent;
    var refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$LoginEventListener;
    var refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$LoadInitialDataListener;
    var refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$DesignModeListener;
    var refs_java_lang_UnsupportedOperationException;
    var refs_io_cloudoffice_platform_cockpit_api_MapBuilder;
    var refs_io_cloudoffice_platform_cockpit_api_captain_Captain;
    var refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$$Lambda$1;
    var refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$$Lambda$2;
    var refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$$Lambda$3;
    var refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$$Lambda$4;
    var refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$$Lambda$5;
    var refs_io_cloudoffice_platform_cockpit_js_VIEW;
    var refs_io_cloudoffice_platform_cockpit_api_Components;
    var refs_io_cloudoffice_platform_cockpit_api_Event;
    var refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView;
    var refs_io_cloudoffice_platform_cockpit_api_Session;
    var refs_io_cloudoffice_platform_cockpit_js_LocalStorage;
    var refs_io_cloudoffice_platform_cockpit_js_JSUIUtils;
    var refs_java_lang_StringBuilder;
    var refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$$Lambda$6;
    var refs_io_cloudoffice_platform_cockpit_api_connect_Connect;
    var refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$$Lambda$7;
    var refs_java_util_HashMap;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent = registerClass(exports,'io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent',io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent);

vm.java_util_HashMap = link('java/util/HashMap', function(f) { vm.java_util_HashMap =  f; });

function io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$$Lambda$7() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$$Lambda$7;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._arg$1 = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$$Lambda$7_arg$1'] = v; return this['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$$Lambda$7_arg$1']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_api_captain_Duty_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$$Lambda$7_arg$1'] = lcA1;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.get$Lambda__Lio_cloudoffice_platform_cockpit_api_connect_Mapper_2Lio_cloudoffice_platform_cockpit_api_captain_Duty_2 = function(lcA0) {
var stA0 = new io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$$Lambda$7;
c.constructor.cons__VLio_cloudoffice_platform_cockpit_api_captain_Duty_2.call(stA0, lcA0);
return stA0;

};
    m.access = 10;
    m.cls = CLS;
    m = c.data__VLio_cloudoffice_platform_cockpit_api_connect_Connect_2 = function(lcA1) {
  var  lcA0 = this;
(refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent || (refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent = io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent(false))).access$lambda$6__VLio_cloudoffice_platform_cockpit_api_captain_Duty_2Lio_cloudoffice_platform_cockpit_api_connect_Connect_2(lcA0['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$$Lambda$7_arg$1'], lcA1);
return;

};
c['data__VLio_cloudoffice_platform_cockpit_api_connect_Connect_2'] = m;

    m.anno = {"Ljava/lang/invoke/LambdaForm$Hidden;" : {

}

    };
    m.access = 1;
    m.cls = CLS;
    m = c.lambdaFactory$__Lio_cloudoffice_platform_cockpit_api_connect_Mapper_2Lio_cloudoffice_platform_cockpit_api_captain_Duty_2 = function(lcA0) {
var stA0 = new io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$$Lambda$7;
c.constructor.cons__VLio_cloudoffice_platform_cockpit_api_captain_Duty_2.call(stA0, lcA0);
return stA0;

};
    m.access = 9;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$$Lambda$7fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$$Lambda$7', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_connect_Mapper(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$$Lambda$7fillInstOf });
    io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$$Lambda$7fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/profilemenu/ProfileMenuComponent$$Lambda$7';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_connect_Mapper(false).constructor.$class
    ]; };
    CLS.$class.access = 4144;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$$Lambda$7_arg$1'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$$Lambda$7 = io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$$Lambda$7;

vm.io_cloudoffice_platform_cockpit_api_connect_Mapper = link('io/cloudoffice/platform/cockpit/api/connect/Mapper', function(f) { vm.io_cloudoffice_platform_cockpit_api_connect_Mapper =  f; });
vm.java_lang_invoke_LambdaForm$Hidden = function() {
  var instance = arguments.length == 0 || arguments[0] === true;
  delete vm.java_lang_invoke_LambdaForm$Hidden;
  return link('java/lang/invoke/LambdaForm$Hidden', function(f) { vm.java_lang_invoke_LambdaForm$Hidden = f;})(instance);
}
vm.io_cloudoffice_platform_cockpit_api_connect_Connect = link('io/cloudoffice/platform/cockpit/api/connect/Connect', function(f) { vm.io_cloudoffice_platform_cockpit_api_connect_Connect =  f; });

function io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$$Lambda$6() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$$Lambda$6;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_instance'] = null;
  m = c._instance = function (v) {  if (arguments.length == 1) CLS['fld_instance'] = v; return CLS['fld_instance']; };
    m = CLS.cons__V = function() {
  var  lcA0 = this;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.data__VLio_cloudoffice_platform_cockpit_api_connect_Connect_2 = function(lcA1) {
  var  lcA0 = this;
(refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent || (refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent = io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent(false))).access$lambda$5__VLio_cloudoffice_platform_cockpit_api_connect_Connect_2(lcA1);
return;

};
c['data__VLio_cloudoffice_platform_cockpit_api_connect_Connect_2'] = m;

    m.anno = {"Ljava/lang/invoke/LambdaForm$Hidden;" : {

}

    };
    m.access = 1;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$$Lambda$6;
c.constructor.cons__V.call(stA0);
c._instance(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.lambdaFactory$__Lio_cloudoffice_platform_cockpit_api_connect_Mapper_2 = function() {
return c._instance();

};
    m.access = 9;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$$Lambda$6fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$$Lambda$6', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_connect_Mapper(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$$Lambda$6fillInstOf });
    io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$$Lambda$6fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/profilemenu/ProfileMenuComponent$$Lambda$6';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_connect_Mapper(false).constructor.$class
    ]; };
    CLS.$class.access = 4144;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$$Lambda$6 = io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$$Lambda$6;

vm.io_cloudoffice_platform_cockpit_js_JSUIUtils = link('io/cloudoffice/platform/cockpit/js/JSUIUtils', function(f) { vm.io_cloudoffice_platform_cockpit_js_JSUIUtils =  f; });
vm.io_cloudoffice_platform_cockpit_js_LocalStorage = link('io/cloudoffice/platform/cockpit/js/LocalStorage', function(f) { vm.io_cloudoffice_platform_cockpit_js_LocalStorage =  f; });
vm.io_cloudoffice_platform_cockpit_api_Session = link('io/cloudoffice/platform/cockpit/api/Session', function(f) { vm.io_cloudoffice_platform_cockpit_api_Session =  f; });
vm.io_cloudoffice_platform_cockpit_api_Event = link('io/cloudoffice/platform/cockpit/api/Event', function(f) { vm.io_cloudoffice_platform_cockpit_api_Event =  f; });
vm.io_cloudoffice_platform_cockpit_api_Components = link('io/cloudoffice/platform/cockpit/api/Components', function(f) { vm.io_cloudoffice_platform_cockpit_api_Components =  f; });

function io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$$Lambda$5() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$$Lambda$5;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_instance'] = null;
  m = c._instance = function (v) {  if (arguments.length == 1) CLS['fld_instance'] = v; return CLS['fld_instance']; };
    m = CLS.cons__V = function() {
  var  lcA0 = this;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.execute__VLio_cloudoffice_platform_cockpit_api_captain_Duty_2 = function(lcA1) {
  var  lcA0 = this;
(refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent || (refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent = io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent(false))).access$lambda$4__VLio_cloudoffice_platform_cockpit_api_captain_Duty_2(lcA1);
return;

};
c['execute__VLio_cloudoffice_platform_cockpit_api_captain_Duty_2'] = m;

    m.anno = {"Ljava/lang/invoke/LambdaForm$Hidden;" : {

}

    };
    m.access = 1;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$$Lambda$5;
c.constructor.cons__V.call(stA0);
c._instance(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.lambdaFactory$__Lio_cloudoffice_platform_cockpit_api_captain_Execution_2 = function() {
return c._instance();

};
    m.access = 9;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$$Lambda$5fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$$Lambda$5', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_captain_Execution(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$$Lambda$5fillInstOf });
    io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$$Lambda$5fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/profilemenu/ProfileMenuComponent$$Lambda$5';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_captain_Execution(false).constructor.$class
    ]; };
    CLS.$class.access = 4144;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$$Lambda$5 = io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$$Lambda$5;

vm.io_cloudoffice_platform_cockpit_api_captain_Execution = link('io/cloudoffice/platform/cockpit/api/captain/Execution', function(f) { vm.io_cloudoffice_platform_cockpit_api_captain_Execution =  f; });

function io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$$Lambda$4() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$$Lambda$4;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_instance'] = null;
  m = c._instance = function (v) {  if (arguments.length == 1) CLS['fld_instance'] = v; return CLS['fld_instance']; };
    m = CLS.cons__V = function() {
  var  lcA0 = this;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.execute__VLio_cloudoffice_platform_cockpit_api_captain_Duty_2 = function(lcA1) {
  var  lcA0 = this;
(refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent || (refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent = io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent(false))).access$lambda$3__VLio_cloudoffice_platform_cockpit_api_captain_Duty_2(lcA1);
return;

};
c['execute__VLio_cloudoffice_platform_cockpit_api_captain_Duty_2'] = m;

    m.anno = {"Ljava/lang/invoke/LambdaForm$Hidden;" : {

}

    };
    m.access = 1;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$$Lambda$4;
c.constructor.cons__V.call(stA0);
c._instance(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.lambdaFactory$__Lio_cloudoffice_platform_cockpit_api_captain_Execution_2 = function() {
return c._instance();

};
    m.access = 9;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$$Lambda$4fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$$Lambda$4', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_captain_Execution(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$$Lambda$4fillInstOf });
    io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$$Lambda$4fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/profilemenu/ProfileMenuComponent$$Lambda$4';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_captain_Execution(false).constructor.$class
    ]; };
    CLS.$class.access = 4144;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$$Lambda$4 = io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$$Lambda$4;


function io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$$Lambda$3() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$$Lambda$3;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_instance'] = null;
  m = c._instance = function (v) {  if (arguments.length == 1) CLS['fld_instance'] = v; return CLS['fld_instance']; };
    m = CLS.cons__V = function() {
  var  lcA0 = this;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.execute__VLio_cloudoffice_platform_cockpit_api_captain_Duty_2 = function(lcA1) {
  var  lcA0 = this;
(refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent || (refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent = io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent(false))).access$lambda$2__VLio_cloudoffice_platform_cockpit_api_captain_Duty_2(lcA1);
return;

};
c['execute__VLio_cloudoffice_platform_cockpit_api_captain_Duty_2'] = m;

    m.anno = {"Ljava/lang/invoke/LambdaForm$Hidden;" : {

}

    };
    m.access = 1;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$$Lambda$3;
c.constructor.cons__V.call(stA0);
c._instance(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.lambdaFactory$__Lio_cloudoffice_platform_cockpit_api_captain_Execution_2 = function() {
return c._instance();

};
    m.access = 9;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$$Lambda$3fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$$Lambda$3', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_captain_Execution(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$$Lambda$3fillInstOf });
    io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$$Lambda$3fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/profilemenu/ProfileMenuComponent$$Lambda$3';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_captain_Execution(false).constructor.$class
    ]; };
    CLS.$class.access = 4144;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$$Lambda$3 = io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$$Lambda$3;


function io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$$Lambda$2() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$$Lambda$2;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_instance'] = null;
  m = c._instance = function (v) {  if (arguments.length == 1) CLS['fld_instance'] = v; return CLS['fld_instance']; };
    m = CLS.cons__V = function() {
  var  lcA0 = this;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.execute__VLio_cloudoffice_platform_cockpit_api_captain_Duty_2 = function(lcA1) {
  var  lcA0 = this;
(refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent || (refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent = io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent(false))).access$lambda$1__VLio_cloudoffice_platform_cockpit_api_captain_Duty_2(lcA1);
return;

};
c['execute__VLio_cloudoffice_platform_cockpit_api_captain_Duty_2'] = m;

    m.anno = {"Ljava/lang/invoke/LambdaForm$Hidden;" : {

}

    };
    m.access = 1;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$$Lambda$2;
c.constructor.cons__V.call(stA0);
c._instance(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.lambdaFactory$__Lio_cloudoffice_platform_cockpit_api_captain_Execution_2 = function() {
return c._instance();

};
    m.access = 9;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$$Lambda$2fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$$Lambda$2', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_captain_Execution(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$$Lambda$2fillInstOf });
    io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$$Lambda$2fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/profilemenu/ProfileMenuComponent$$Lambda$2';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_captain_Execution(false).constructor.$class
    ]; };
    CLS.$class.access = 4144;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$$Lambda$2 = io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$$Lambda$2;


function io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$$Lambda$1() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$$Lambda$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_instance'] = null;
  m = c._instance = function (v) {  if (arguments.length == 1) CLS['fld_instance'] = v; return CLS['fld_instance']; };
    m = CLS.cons__V = function() {
  var  lcA0 = this;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.execute__VLio_cloudoffice_platform_cockpit_api_captain_Duty_2 = function(lcA1) {
  var  lcA0 = this;
(refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent || (refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent = io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent(false))).access$lambda$0__VLio_cloudoffice_platform_cockpit_api_captain_Duty_2(lcA1);
return;

};
c['execute__VLio_cloudoffice_platform_cockpit_api_captain_Duty_2'] = m;

    m.anno = {"Ljava/lang/invoke/LambdaForm$Hidden;" : {

}

    };
    m.access = 1;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$$Lambda$1;
c.constructor.cons__V.call(stA0);
c._instance(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.lambdaFactory$__Lio_cloudoffice_platform_cockpit_api_captain_Execution_2 = function() {
return c._instance();

};
    m.access = 9;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$$Lambda$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$$Lambda$1', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_captain_Execution(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$$Lambda$1fillInstOf });
    io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$$Lambda$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/profilemenu/ProfileMenuComponent$$Lambda$1';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_captain_Execution(false).constructor.$class
    ]; };
    CLS.$class.access = 4144;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$$Lambda$1 = io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuComponent$$Lambda$1;

vm.io_cloudoffice_platform_cockpit_api_captain_Captain = link('io/cloudoffice/platform/cockpit/api/captain/Captain', function(f) { vm.io_cloudoffice_platform_cockpit_api_captain_Captain =  f; });
vm.io_cloudoffice_platform_cockpit_api_AbstractComponent = link('io/cloudoffice/platform/cockpit/api/AbstractComponent', function(f) { vm.io_cloudoffice_platform_cockpit_api_AbstractComponent =  f; });
vm.io_cloudoffice_platform_cockpit_api_MapBuilder = link('io/cloudoffice/platform/cockpit/api/MapBuilder', function(f) { vm.io_cloudoffice_platform_cockpit_api_MapBuilder =  f; });

function io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration$1() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration$1', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration$1fillInstOf });
    io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/profilemenu/ProfileMenuConfiguration$1';
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
vm.io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration$1 = io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuConfiguration$1;


function io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView$1() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView$1', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView$1fillInstOf });
    io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/profilemenu/ProfileMenuView$1';
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
vm.io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView$1 = io_cloudoffice_platform_cockpit_profilemenu_ProfileMenuView$1;

  invoker.getPackets__Ljava_util_List_2 = function(target) {
    return target['getPackets__Ljava_util_List_2']();
  };
  invoker.get__Ljava_lang_Object_2I = function(target, p1) {
    return target['get__Ljava_lang_Object_2I'](p1);
  };
  invoker.invoke__VLjava_lang_String_2 = function(target, p1) {
    return target['invoke__VLjava_lang_String_2'](p1);
  };
  invoker.getString__Ljava_lang_String_2Ljava_lang_String_2 = function(target, p1) {
    return target['getString__Ljava_lang_String_2Ljava_lang_String_2'](p1);
  };
  invoker.setView__VLjava_lang_Object_2 = function(target, p1) {
    return target['setView__VLjava_lang_Object_2'](p1);
  };
  invoker.getDefaultViewName__Ljava_lang_String_2 = function(target) {
    return target['getDefaultViewName__Ljava_lang_String_2']();
  };
  invoker.getJsonObject__Lorg_json_JSONObject_2Ljava_lang_String_2 = function(target, p1) {
    return target['getJsonObject__Lorg_json_JSONObject_2Ljava_lang_String_2'](p1);
  };
  invoker.getJSONObject__Lorg_json_JSONObject_2Ljava_lang_String_2 = function(target, p1) {
    return target['getJSONObject__Lorg_json_JSONObject_2Ljava_lang_String_2'](p1);
  };
  invoker.setInstanceId__VLjava_lang_String_2 = function(target, p1) {
    return target['setInstanceId__VLjava_lang_String_2'](p1);
  };
  invoker.setComponent__VLjava_lang_String_2 = function(target, p1) {
    return target['setComponent__VLjava_lang_String_2'](p1);
  };
  invoker.getInstanceId__Ljava_lang_String_2 = function(target) {
    return target['getInstanceId__Ljava_lang_String_2']();
  };
  invoker.fetch__VLjava_lang_String_2Ljava_util_Map_2Lio_cloudoffice_platform_cockpit_api_CallBack_2 = function(target, p1, p2, p3) {
    return target['fetch__VLjava_lang_String_2Ljava_util_Map_2Lio_cloudoffice_platform_cockpit_api_CallBack_2'](p1,p2,p3);
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
  invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2 = function(target, p1) {
    return target['append__Ljava_lang_StringBuilder_2Ljava_lang_String_2'](p1);
  };
  invoker.toString__Ljava_lang_String_2 = function(target) {
    return target['toString__Ljava_lang_String_2']();
  };
  invoker.loadJSONWithHeaders__VILjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2_3Ljava_lang_Object_2 = function(target, p1, p2, p3, p4, p5, p6, p7) {
    return target['loadJSONWithHeaders__VILjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2_3Ljava_lang_Object_2'](p1,p2,p3,p4,p5,p6,p7);
  };
  invoker.runInBrowser__VI_3Ljava_lang_Object_2 = function(target, p1, p2) {
    return target['runInBrowser__VI_3Ljava_lang_Object_2'](p1,p2);
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
  invoker.getName__Ljava_lang_String_2 = function(target) {
    return target['getName__Ljava_lang_String_2']();
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
  invoker.registerFunction__VLjava_lang_String_2I = function(target, p1, p2) {
    return target['registerFunction__VLjava_lang_String_2I'](p1,p2);
  };
  invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2 = function(target, p1, p2) {
    return target['extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2'](p1,p2);
  };
  invoker.printStackTrace__V = function(target) {
    return target['printStackTrace__V']();
  };
  invoker.copyJSON__VLnet_java_html_BrwsrCtx_2_3Ljava_lang_Object_2Ljava_lang_Class_2_3Ljava_lang_Object_2 = function(target, p1, p2, p3, p4) {
    return target['copyJSON__VLnet_java_html_BrwsrCtx_2_3Ljava_lang_Object_2Ljava_lang_Class_2_3Ljava_lang_Object_2'](p1,p2,p3,p4);
  };
  invoker.append__Ljava_lang_StringBuilder_2I = function(target, p1) {
    return target['append__Ljava_lang_StringBuilder_2I'](p1);
  };
  invoker.attachListener__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_EventListener_2 = function(target, p1, p2) {
    return target['attachListener__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_EventListener_2'](p1,p2);
  };
  invoker.captain__Lio_cloudoffice_platform_cockpit_api_captain_Captain_2 = function(target) {
    return target['captain__Lio_cloudoffice_platform_cockpit_api_captain_Captain_2']();
  };
  invoker.bag__Ljava_util_Map_2 = function(target) {
    return target['bag__Ljava_util_Map_2']();
  };
  invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2 = function(target, p1, p2) {
    return target['put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2'](p1,p2);
  };
  invoker.isEmpty__Z = function(target) {
    return target['isEmpty__Z']();
  };
  invoker.asExpected__VZ = function(target, p1) {
    return target['asExpected__VZ'](p1);
  };
  invoker.begin__Lio_cloudoffice_platform_cockpit_api_captain_Captain_2Lio_cloudoffice_platform_cockpit_api_captain_Execution_2 = function(target, p1) {
    return target['begin__Lio_cloudoffice_platform_cockpit_api_captain_Captain_2Lio_cloudoffice_platform_cockpit_api_captain_Execution_2'](p1);
  };
  invoker.whenUnexpected__Lio_cloudoffice_platform_cockpit_api_captain_Captain_2Lio_cloudoffice_platform_cockpit_api_captain_Execution_2 = function(target, p1) {
    return target['whenUnexpected__Lio_cloudoffice_platform_cockpit_api_captain_Captain_2Lio_cloudoffice_platform_cockpit_api_captain_Execution_2'](p1);
  };
  invoker.then__Lio_cloudoffice_platform_cockpit_api_captain_Captain_2Lio_cloudoffice_platform_cockpit_api_captain_Execution_2 = function(target, p1) {
    return target['then__Lio_cloudoffice_platform_cockpit_api_captain_Captain_2Lio_cloudoffice_platform_cockpit_api_captain_Execution_2'](p1);
  };
  invoker.perform__V = function(target) {
    return target['perform__V']();
  };
  invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Z = function(target, p1, p2) {
    return target['addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Z'](p1,p2);
  };
  invoker.listen__VLio_cloudoffice_platform_cockpit_api_Signal_2 = function(target, p1) {
    return target['listen__VLio_cloudoffice_platform_cockpit_api_Signal_2'](p1);
  };
  invoker.setDefaultViewName__VLjava_lang_String_2 = function(target, p1) {
    return target['setDefaultViewName__VLjava_lang_String_2'](p1);
  };
  invoker.comment__VLjava_lang_String_2 = function(target, p1) {
    return target['comment__VLjava_lang_String_2'](p1);
  };
  invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2 = function(target, p1) {
    return target['get__Ljava_lang_Object_2Ljava_lang_Object_2'](p1);
  };
  invoker.deliverAndCloseAssignment__V = function(target) {
    return target['deliverAndCloseAssignment__V']();
  };
  invoker.receive__VLio_cloudoffice_platform_cockpit_api_connect_Mapper_2 = function(target, p1) {
    return target['receive__VLio_cloudoffice_platform_cockpit_api_connect_Mapper_2'](p1);
  };
  invoker.result__Ljava_lang_String_2 = function(target) {
    return target['result__Ljava_lang_String_2']();
  };
  invoker.data__VLjava_lang_Object_2 = function(target, p1) {
    return target['data__VLjava_lang_Object_2'](p1);
  };
  exports['registerResource']('META-INF/MANIFEST.MF', 'TWFuaWZlc3QtVmVyc2lvbjogMS4wDQpCbmQtTGFzdE1vZGlmaWVkOiAxNTk3NzY0MDQ4MjQ5DQpCdWlsZC1KZGs6IDEuOC4wXzEzMQ0KQnVpbHQtQnk6IGV1c2lhDQpCdW5kbGUtTWFuaWZlc3RWZXJzaW9uOiAyDQpCdW5kbGUtTmFtZTogR2FkZ2V0IFByb2ZpbGUgTWVudQ0KQnVuZGxlLVN5bWJvbGljTmFtZTogaW8uY2xvdWRvZmZpY2UucGxhdGZvcm0uY29ja3BpdC5wcm9maWxlbWVudQ0KQnVuZGxlLVZlcnNpb246IDEuMS4wDQpDcmVhdGVkLUJ5OiBBcGFjaGUgTWF2ZW4gQnVuZGxlIFBsdWdpbg0KRXhwb3J0LVBhY2thZ2U6IGlvLmNsb3Vkb2ZmaWNlLnBsYXRmb3JtLmNvY2twaXQucHJvZmlsZW1lbnU7dXNlczo9ImlvLmNsDQogb3Vkb2ZmaWNlLnBsYXRmb3JtLmNvY2twaXQuYXBpLGlvLmNsb3Vkb2ZmaWNlLnBsYXRmb3JtLmNvY2twaXQuYXBpLmNhcHQNCiBhaW4iO3ZlcnNpb249IjEuMS4wIg0KSW1wb3J0LVBhY2thZ2U6IGlvLmNsb3Vkb2ZmaWNlLnBsYXRmb3JtLmNvY2twaXQuYXBpO3ZlcnNpb249IlsxLjEsMikiLGlvDQogLmNsb3Vkb2ZmaWNlLnBsYXRmb3JtLmNvY2twaXQuYXBpLmNhcHRhaW47dmVyc2lvbj0iWzEuMSwyKSIsaW8uY2xvdWRvZmYNCiBpY2UucGxhdGZvcm0uY29ja3BpdC5hcGkuY29ubmVjdDt2ZXJzaW9uPSJbMS4xLDIpIixpby5jbG91ZG9mZmljZS5wbGF0Zg0KIG9ybS5jb2NrcGl0LmpzO3ZlcnNpb249IlsxLjEsMikiLG5ldC5qYXZhLmh0bWw7dmVyc2lvbj0iWzEuNiwyKSIsbmV0LmphDQogdmEuaHRtbC5qc29uO3ZlcnNpb249IlsxLjYsMikiLG9yZy5qc29uO3ZlcnNpb249IlsyMDE4MDgxMy4wLDIwMTgwODE0KSINCiAsb3JnLm5ldGJlYW5zLmh0bWwuanNvbi5zcGk7dmVyc2lvbj0iWzEuNiwyKSINClRvb2w6IEJuZC0yLjEuMC4yMDEzMDQyNi0xMjIyMTMNCg==');
});