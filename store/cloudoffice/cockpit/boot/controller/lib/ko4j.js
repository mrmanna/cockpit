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

function org_netbeans_html_ko4j_$JsCallbacks$() {
  var m;
  var CLS = org_netbeans_html_ko4j_$JsCallbacks$;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_VM'] = null;
  m = c._VM = function (v) {  if (arguments.length == 1) CLS['fld_VM'] = v; return CLS['fld_VM']; };
  m = c._ref = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_ko4j_$JsCallbacks$_ref'] = v; return this['fld_org_netbeans_html_ko4j_$JsCallbacks$_ref']; };
  m = c._next = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_ko4j_$JsCallbacks$_next'] = v; return this['fld_org_netbeans_html_ko4j_$JsCallbacks$_next']; };
    m = CLS.cons__VLorg_netbeans_html_boot_spi_Fn$Presenter_2 = function(lcA1) {
  var  lcA0 = this;
  if (lcA0 === undefined) lcA0 = null;
  if (lcA1 === undefined) lcA1 = null;

};
    m.access = 2;
    m.cls = CLS;
    m = c.current__Lorg_netbeans_html_ko4j_$JsCallbacks$_2 = function() {
  var  lcA0 = this;
  if (lcA0 === undefined) lcA0 = null;
return c.constructor.cons__VLorg_netbeans_html_boot_spi_Fn$Presenter_2.call(stA1, lcA1);
};
    m.access = 48;
    m.cls = CLS;
    m = c.org_1netbeans_1html_1json_1spi_1JSONCall$notifySuccess$Ljava_1lang_1Object_12__Ljava_lang_Object_2Lorg_netbeans_html_json_spi_JSONCall_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
  if (lcA0 === undefined) lcA0 = null;
  if (lcA1 === undefined) lcA1 = null;
  if (lcA2 === undefined) lcA2 = null;
return invoker.notifySuccess__VLjava_lang_Object_2(lcA1,lcA2);
};
c['org_1netbeans_1html_1json_1spi_1JSONCall$notifySuccess$Ljava_1lang_1Object_12__Ljava_lang_Object_2Lorg_netbeans_html_json_spi_JSONCall_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.raw$org_1netbeans_1html_1json_1spi_1JSONCall$notifySuccess$Ljava_1lang_1Object_12__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
  if (lcA0 === undefined) lcA0 = null;
  if (lcA1 === undefined) lcA1 = null;
  if (lcA2 === undefined) lcA2 = null;
return invoker.notifySuccess__VLjava_lang_Object_2(lcA1,lcA2);
};
c['raw$org_1netbeans_1html_1json_1spi_1JSONCall$notifySuccess$Ljava_1lang_1Object_12__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.org_1netbeans_1html_1ko4j_1KOTransfer$notifyError$Ljava_1lang_1Object_12Ljava_1lang_1Object_12__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
  if (lcA0 === undefined) lcA0 = null;
  if (lcA1 === undefined) lcA1 = null;
  if (lcA2 === undefined) lcA2 = null;
return (refs_org_netbeans_html_ko4j_KOTransfer || (refs_org_netbeans_html_ko4j_KOTransfer = org_netbeans_html_ko4j_KOTransfer(false))).notifyError__VLjava_lang_Object_2Ljava_lang_Object_2(lcA1, lcA2);
};
c['org_1netbeans_1html_1ko4j_1KOTransfer$notifyError$Ljava_1lang_1Object_12Ljava_1lang_1Object_12__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.org_1netbeans_1html_1ko4j_1KOTransfer$notifySuccess$Ljava_1lang_1Object_12Ljava_1lang_1Object_12Ljava_1lang_1Object_12__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
  if (lcA0 === undefined) lcA0 = null;
  if (lcA1 === undefined) lcA1 = null;
  if (lcA2 === undefined) lcA2 = null;
  if (lcA3 === undefined) lcA3 = null;
return (refs_org_netbeans_html_ko4j_KOTransfer || (refs_org_netbeans_html_ko4j_KOTransfer = org_netbeans_html_ko4j_KOTransfer(false))).notifySuccess__VLjava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA1, lcA2, lcA3);
};
c['org_1netbeans_1html_1ko4j_1KOTransfer$notifySuccess$Ljava_1lang_1Object_12Ljava_1lang_1Object_12Ljava_1lang_1Object_12__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.org_1netbeans_1html_1ko4j_1Knockout$call$ILjava_1lang_1Object_12Ljava_1lang_1Object_12__Ljava_lang_Object_2Lorg_netbeans_html_ko4j_Knockout_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;
  if (lcA0 === undefined) lcA0 = null;
  if (lcA1 === undefined) lcA1 = null;
  if (lcI2 === undefined) lcI2 = null;
  if (lcA3 === undefined) lcA3 = null;
  if (lcA4 === undefined) lcA4 = null;
return lcA1.call__VILjava_lang_Object_2Ljava_lang_Object_2(lcI2, lcA3, lcA4);
};
c['org_1netbeans_1html_1ko4j_1Knockout$call$ILjava_1lang_1Object_12Ljava_1lang_1Object_12__Ljava_lang_Object_2Lorg_netbeans_html_ko4j_Knockout_2ILjava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.raw$org_1netbeans_1html_1ko4j_1Knockout$call$ILjava_1lang_1Object_12Ljava_1lang_1Object_12__Ljava_lang_Object_2Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;
  if (lcA0 === undefined) lcA0 = null;
  if (lcA1 === undefined) lcA1 = null;
  if (lcI2 === undefined) lcI2 = null;
  if (lcA3 === undefined) lcA3 = null;
  if (lcA4 === undefined) lcA4 = null;
return lcA1.call__VILjava_lang_Object_2Ljava_lang_Object_2(lcI2, lcA3, lcA4);
};
c['raw$org_1netbeans_1html_1ko4j_1Knockout$call$ILjava_1lang_1Object_12Ljava_1lang_1Object_12__Ljava_lang_Object_2Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.org_1netbeans_1html_1ko4j_1Knockout$getValue$I__Ljava_lang_Object_2Lorg_netbeans_html_ko4j_Knockout_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
  if (lcA0 === undefined) lcA0 = null;
  if (lcA1 === undefined) lcA1 = null;
  if (lcI2 === undefined) lcI2 = null;
return lcA1.getValue__Ljava_lang_Object_2I(lcI2);
};
c['org_1netbeans_1html_1ko4j_1Knockout$getValue$I__Ljava_lang_Object_2Lorg_netbeans_html_ko4j_Knockout_2I'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.raw$org_1netbeans_1html_1ko4j_1Knockout$getValue$I__Ljava_lang_Object_2Ljava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
  if (lcA0 === undefined) lcA0 = null;
  if (lcA1 === undefined) lcA1 = null;
  if (lcI2 === undefined) lcI2 = null;
return lcA1.getValue__Ljava_lang_Object_2I(lcI2);
};
c['raw$org_1netbeans_1html_1ko4j_1Knockout$getValue$I__Ljava_lang_Object_2Ljava_lang_Object_2I'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.org_1netbeans_1html_1ko4j_1Knockout$setValue$ILjava_1lang_1Object_12__Ljava_lang_Object_2Lorg_netbeans_html_ko4j_Knockout_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;
  if (lcA0 === undefined) lcA0 = null;
  if (lcA1 === undefined) lcA1 = null;
  if (lcI2 === undefined) lcI2 = null;
  if (lcA3 === undefined) lcA3 = null;
return lcA1.setValue__VILjava_lang_Object_2(lcI2, lcA3);
};
c['org_1netbeans_1html_1ko4j_1Knockout$setValue$ILjava_1lang_1Object_12__Ljava_lang_Object_2Lorg_netbeans_html_ko4j_Knockout_2ILjava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.raw$org_1netbeans_1html_1ko4j_1Knockout$setValue$ILjava_1lang_1Object_12__Ljava_lang_Object_2Ljava_lang_Object_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;
  if (lcA0 === undefined) lcA0 = null;
  if (lcA1 === undefined) lcA1 = null;
  if (lcI2 === undefined) lcI2 = null;
  if (lcA3 === undefined) lcA3 = null;
return lcA1.setValue__VILjava_lang_Object_2(lcI2, lcA3);
};
c['raw$org_1netbeans_1html_1ko4j_1Knockout$setValue$ILjava_1lang_1Object_12__Ljava_lang_Object_2Ljava_lang_Object_2ILjava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.org_1netbeans_1html_1ko4j_1LoadWS$onClose$ZILjava_1lang_1String_12__Ljava_lang_Object_2Lorg_netbeans_html_ko4j_LoadWS_2ZILjava_lang_String_2 = function(lcA1, lcI2, lcI3, lcA4) {
  var  lcA0 = this;
  if (lcA0 === undefined) lcA0 = null;
  if (lcA1 === undefined) lcA1 = null;
  if (lcI2 === undefined) lcI2 = null;
  if (lcI3 === undefined) lcI3 = null;
  if (lcA4 === undefined) lcA4 = null;
return lcA1.onClose__VZILjava_lang_String_2(lcI2, lcI3, lcA4);
};
c['org_1netbeans_1html_1ko4j_1LoadWS$onClose$ZILjava_1lang_1String_12__Ljava_lang_Object_2Lorg_netbeans_html_ko4j_LoadWS_2ZILjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.raw$org_1netbeans_1html_1ko4j_1LoadWS$onClose$ZILjava_1lang_1String_12__Ljava_lang_Object_2Ljava_lang_Object_2ZILjava_lang_String_2 = function(lcA1, lcI2, lcI3, lcA4) {
  var  lcA0 = this;
  if (lcA0 === undefined) lcA0 = null;
  if (lcA1 === undefined) lcA1 = null;
  if (lcI2 === undefined) lcI2 = null;
  if (lcI3 === undefined) lcI3 = null;
  if (lcA4 === undefined) lcA4 = null;
return lcA1.onClose__VZILjava_lang_String_2(lcI2, lcI3, lcA4);
};
c['raw$org_1netbeans_1html_1ko4j_1LoadWS$onClose$ZILjava_1lang_1String_12__Ljava_lang_Object_2Ljava_lang_Object_2ZILjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.org_1netbeans_1html_1ko4j_1LoadWS$onError$Ljava_1lang_1Object_12__Ljava_lang_Object_2Lorg_netbeans_html_ko4j_LoadWS_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
  if (lcA0 === undefined) lcA0 = null;
  if (lcA1 === undefined) lcA1 = null;
  if (lcA2 === undefined) lcA2 = null;
return lcA1.onError__VLjava_lang_Object_2(lcA2);
};
c['org_1netbeans_1html_1ko4j_1LoadWS$onError$Ljava_1lang_1Object_12__Ljava_lang_Object_2Lorg_netbeans_html_ko4j_LoadWS_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.raw$org_1netbeans_1html_1ko4j_1LoadWS$onError$Ljava_1lang_1Object_12__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
  if (lcA0 === undefined) lcA0 = null;
  if (lcA1 === undefined) lcA1 = null;
  if (lcA2 === undefined) lcA2 = null;
return lcA1.onError__VLjava_lang_Object_2(lcA2);
};
c['raw$org_1netbeans_1html_1ko4j_1LoadWS$onError$Ljava_1lang_1Object_12__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.org_1netbeans_1html_1ko4j_1LoadWS$onMessage$Ljava_1lang_1Object_12Ljava_1lang_1String_12__Ljava_lang_Object_2Lorg_netbeans_html_ko4j_LoadWS_2Ljava_lang_Object_2Ljava_lang_String_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
  if (lcA0 === undefined) lcA0 = null;
  if (lcA1 === undefined) lcA1 = null;
  if (lcA2 === undefined) lcA2 = null;
  if (lcA3 === undefined) lcA3 = null;
return lcA1.onMessage__VLjava_lang_Object_2Ljava_lang_String_2(lcA2, lcA3);
};
c['org_1netbeans_1html_1ko4j_1LoadWS$onMessage$Ljava_1lang_1Object_12Ljava_1lang_1String_12__Ljava_lang_Object_2Lorg_netbeans_html_ko4j_LoadWS_2Ljava_lang_Object_2Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.raw$org_1netbeans_1html_1ko4j_1LoadWS$onMessage$Ljava_1lang_1Object_12Ljava_1lang_1String_12__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_String_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
  if (lcA0 === undefined) lcA0 = null;
  if (lcA1 === undefined) lcA1 = null;
  if (lcA2 === undefined) lcA2 = null;
  if (lcA3 === undefined) lcA3 = null;
return lcA1.onMessage__VLjava_lang_Object_2Ljava_lang_String_2(lcA2, lcA3);
};
c['raw$org_1netbeans_1html_1ko4j_1LoadWS$onMessage$Ljava_1lang_1Object_12Ljava_1lang_1String_12__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.org_1netbeans_1html_1ko4j_1LoadWS$onOpen$Ljava_1lang_1Object_12__Ljava_lang_Object_2Lorg_netbeans_html_ko4j_LoadWS_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
  if (lcA0 === undefined) lcA0 = null;
  if (lcA1 === undefined) lcA1 = null;
  if (lcA2 === undefined) lcA2 = null;
return lcA1.onOpen__VLjava_lang_Object_2(lcA2);
};
c['org_1netbeans_1html_1ko4j_1LoadWS$onOpen$Ljava_1lang_1Object_12__Ljava_lang_Object_2Lorg_netbeans_html_ko4j_LoadWS_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.raw$org_1netbeans_1html_1ko4j_1LoadWS$onOpen$Ljava_1lang_1Object_12__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
  if (lcA0 === undefined) lcA0 = null;
  if (lcA1 === undefined) lcA1 = null;
  if (lcA2 === undefined) lcA2 = null;
return lcA1.onOpen__VLjava_lang_Object_2(lcA2);
};
c['raw$org_1netbeans_1html_1ko4j_1LoadWS$onOpen$Ljava_1lang_1Object_12__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new org_netbeans_html_ko4j_$JsCallbacks$;
c.constructor.cons__VLorg_netbeans_html_boot_spi_Fn$Presenter_2.call(stA0, null);
c._VM(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_ko4j_$JsCallbacks$fillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_ko4j_$JsCallbacks$', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_ko4j_$JsCallbacks$fillInstOf });
    org_netbeans_html_ko4j_$JsCallbacks$fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/ko4j/$JsCallbacks$';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_org_netbeans_html_boot_spi_Fn;
    var refs_org_netbeans_html_ko4j_KOTransfer;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_org_netbeans_html_ko4j_$JsCallbacks$_ref'] = null;
    this['fld_org_netbeans_html_ko4j_$JsCallbacks$_next'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_netbeans_html_ko4j_$JsCallbacks$ = registerClass(exports,'org_netbeans_html_ko4j_$JsCallbacks$',org_netbeans_html_ko4j_$JsCallbacks$);


function org_netbeans_html_ko4j_KOTransfer() {
  var m;
  var CLS = org_netbeans_html_ko4j_KOTransfer;
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

    m.access = 0;
    m.cls = CLS;
    m = c.extract__VLjava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Object_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = lcA1 != null && lcA1['$instOf_org_netbeans_html_ko4j_KOTransfer$JSObjToStr'] ? 1 : 0;
if ((stI0) == 0) { gt = 15; break IF; }
if (lcA1 !== null && !lcA1['$instOf_org_netbeans_html_ko4j_KOTransfer$JSObjToStr']) vm.java_lang_Class(false).castEx(lcA1, 'org.netbeans.html.ko4j.KOTransfer$JSObjToStr');
var lcA1 = lcA1['fld_org_netbeans_html_ko4j_KOTransfer$JSObjToStr_obj'];
    }
    X_15: for (;;) { IF: if (gt <= 15) {

(refs_org_netbeans_html_ko4j_LoadJSON || (refs_org_netbeans_html_ko4j_LoadJSON = org_netbeans_html_ko4j_LoadJSON(false))).extractJSON__VLjava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Object_2(lcA1, lcA2, lcA3);
return;

    }
}}
};
c['extract__VLjava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.loadJSON__VLorg_netbeans_html_json_spi_JSONCall_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = invoker.isJSONP__Z(lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
var stA0 = (refs_org_netbeans_html_ko4j_LoadJSON || (refs_org_netbeans_html_ko4j_LoadJSON = org_netbeans_html_ko4j_LoadJSON(false))).createJSONP__Ljava_lang_String_2Lorg_netbeans_html_json_spi_JSONCall_2(lcA1);
var lcA2 = stA0;
var stA0 = invoker.composeURL__Ljava_lang_String_2Ljava_lang_String_2(lcA1,lcA2);
(refs_org_netbeans_html_ko4j_LoadJSON || (refs_org_netbeans_html_ko4j_LoadJSON = org_netbeans_html_ko4j_LoadJSON(false))).loadJSONP__VLjava_lang_String_2Ljava_lang_String_2(stA0, lcA2);
{ gt = 246; break IF; }
    }
    X_24: for (;;) { IF: if (gt <= 24) {

var lcA2 = null;
var stI0 = invoker.isDoOutput__Z(lcA1);
if ((stI0) == 0) { gt = 69; break IF; }
try {var stA0 = new vm.java_io_ByteArrayOutputStream;
(refs_java_io_ByteArrayOutputStream || (refs_java_io_ByteArrayOutputStream = vm.java_io_ByteArrayOutputStream(false))).constructor['cons__V'].call(stA0);
var lcA3 = stA0;
invoker.writeData__VLjava_io_OutputStream_2(lcA1,lcA3);
var stA0 = new vm.java_lang_String;
var stA1 = stA0;var stA2 = invoker.toByteArray___3B(lcA3);
(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor['cons__V_3BLjava_lang_String_2'].call(stA1, stA2, "UTF-8");
var lcA2 = stA0;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 63; break IF; }}
throw e;
}{ gt = 69; break IF; }
    }
    X_63: for (;;) { IF: if (gt <= 63) {
var lcA3 = stA0;
invoker.notifyError__VLjava_lang_Throwable_2(lcA1,lcA3);
    }
    X_69: for (;;) { IF: if (gt <= 69) {

var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, 0);
var stA0 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['asList__Ljava_util_List_2_3Ljava_lang_Object_2'](stA0);
var lcA3 = stA0;
var stA0 = invoker.getHeaders__Ljava_lang_String_2(lcA1);
var lcA4 = stA0;
if ((lcA4) === null) { gt = 226; break IF; }
var lcI5 = 0;
    }
    X_91: for (;;) { IF: if (gt <= 91) {

var stI0 = lcI5;var stI1 = invoker.length__I(lcA4);
if ((stI0) >= (stI1)) { gt = 226; break IF; }
var stI0 = invoker.indexOf__III(lcA4,(58), lcI5);
var lcI6 = stI0;
if ((lcI6) != (-1)) { gt = 121; break IF; }
{ gt = 226; break IF; }
    }
    X_121: for (;;) { IF: if (gt <= 121) {

var stI0 = invoker.indexOf__III(lcA4,(13), lcI6);
var lcI7 = stI0;
var stI0 = invoker.indexOf__III(lcA4,(10), lcI6);
var lcI8 = stI0;
if ((lcI7) != (-1)) { gt = 156; break IF; }
var stI0 = invoker.length__I(lcA4);
var lcI7 = stI0;
    }
    X_156: for (;;) { IF: if (gt <= 156) {

if ((lcI8) != (-1)) { gt = 169; break IF; }
var stI0 = invoker.length__I(lcA4);
var lcI8 = stI0;
    }
    X_169: for (;;) { IF: if (gt <= 169) {

var stA0 = lcA3;var stA1 = invoker.substring__Ljava_lang_String_2II(lcA4,lcI5, lcI6);
var stA1 = invoker.trim__Ljava_lang_String_2(stA1);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,stA1);
var stA0 = lcA3;var stA1 = lcA4;var stI2 = (((lcI6) + (1)) | 0);var stI3 = (refs_java_lang_Math || (refs_java_lang_Math = vm.java_lang_Math(false)))['min__III'](lcI7, lcI8);
var stA1 = invoker.substring__Ljava_lang_String_2II(stA1,stI2, stI3);
var stA1 = invoker.trim__Ljava_lang_String_2(stA1);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,stA1);
var stI0 = (refs_java_lang_Math || (refs_java_lang_Math = vm.java_lang_Math(false)))['max__III'](lcI7, lcI8);
var lcI5 = stI0;
{ gt = 0; continue X_91; }
    }
    X_226: for (;;) { IF: if (gt <= 226) {

var stA0 = invoker.composeURL__Ljava_lang_String_2Ljava_lang_String_2(lcA1,null);
var stA1 = lcA1;var stA2 = invoker.getMethod__Ljava_lang_String_2(lcA1);
var stA3 = lcA2;var stA4 = invoker.toArray___3Ljava_lang_Object_2(lcA3);
(refs_org_netbeans_html_ko4j_LoadJSON || (refs_org_netbeans_html_ko4j_LoadJSON = org_netbeans_html_ko4j_LoadJSON(false))).loadJSON__VLjava_lang_String_2Lorg_netbeans_html_json_spi_JSONCall_2Ljava_lang_String_2Ljava_lang_String_2_3Ljava_lang_Object_2(stA0, stA1, stA2, stA3, stA4);
    }
    X_246: for (;;) { IF: if (gt <= 246) {
return;

    }
}}}}}}}}}}
};
c['loadJSON__VLorg_netbeans_html_json_spi_JSONCall_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.toJSON__Ljava_lang_Object_2Ljava_io_InputStream_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var lcA2 = stA0;
var stA0 = new vm.java_io_InputStreamReader;
(refs_java_io_InputStreamReader || (refs_java_io_InputStreamReader = vm.java_io_InputStreamReader(false))).constructor['cons__VLjava_io_InputStream_2Ljava_lang_String_2'].call(stA0, lcA1, "UTF-8");
var lcA3 = stA0;
    }
    X_19: for (;;) { IF: if (gt <= 19) {

var stI0 = invoker.read__I(lcA3);
var lcI4 = stI0;
if ((lcI4) != (-1)) { gt = 34; break IF; }
{ gt = 45; break IF; }
    }
    X_34: for (;;) { IF: if (gt <= 34) {

var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA2,(((lcI4) << 16) >> 16));
{ gt = 0; continue X_19; }
    }
    X_45: for (;;) { IF: if (gt <= 45) {

var stA0 = invoker.toString__Ljava_lang_String_2(lcA2);
var stA0 = (refs_org_netbeans_html_ko4j_LoadJSON || (refs_org_netbeans_html_ko4j_LoadJSON = org_netbeans_html_ko4j_LoadJSON(false))).parse__Ljava_lang_Object_2Ljava_lang_String_2(stA0);
return stA0;

    }
}}}}
};
c['toJSON__Ljava_lang_Object_2Ljava_io_InputStream_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.notifySuccess__VLjava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2 = function(lcA0, lcA1, lcA2) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](lcA2, 1, vm.java_lang_Object);
if ((stI0) == 0) { gt = 57; break IF; }
if (lcA2 !== null && !Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](lcA2, 1, vm.java_lang_Object)) vm.java_lang_Class(false).castEx(lcA2, '');
if (lcA2 !== null && !Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](lcA2, 1, vm.java_lang_Object)) vm.java_lang_Class(false).castEx(lcA2, '');
var lcA4 = lcA2;
var lcI5 = 0;
    }
    X_19: for (;;) { IF: if (gt <= 19) {

if ((lcI5) >= ((lcA4).length)) { gt = 51; break IF; }
var stA0 = lcA4;var stI1 = lcI5;var stA2 = new org_netbeans_html_ko4j_KOTransfer$JSObjToStr;
(refs_org_netbeans_html_ko4j_KOTransfer$JSObjToStr || (refs_org_netbeans_html_ko4j_KOTransfer$JSObjToStr = org_netbeans_html_ko4j_KOTransfer$JSObjToStr(false))).constructor.cons__VLjava_lang_Object_2Ljava_lang_Object_2.call(stA2, lcA1, (lcA4[lcI5] || Array.at(lcA4, lcI5)));
Array.at(stA0, stI1, stA2);
lcI5++;
{ gt = 0; continue X_19; }
    }
    X_51: for (;;) { IF: if (gt <= 51) {

var lcA3 = lcA4;
{ gt = 67; break IF; }
    }
    X_57: for (;;) { IF: if (gt <= 57) {
var stA0 = new org_netbeans_html_ko4j_KOTransfer$JSObjToStr;
(refs_org_netbeans_html_ko4j_KOTransfer$JSObjToStr || (refs_org_netbeans_html_ko4j_KOTransfer$JSObjToStr = org_netbeans_html_ko4j_KOTransfer$JSObjToStr(false))).constructor.cons__VLjava_lang_Object_2Ljava_lang_Object_2.call(stA0, lcA1, lcA2);
var lcA3 = stA0;
    }
    X_67: for (;;) { IF: if (gt <= 67) {

if (lcA0 !== null && !lcA0['$instOf_org_netbeans_html_json_spi_JSONCall']) vm.java_lang_Class(false).castEx(lcA0, 'org.netbeans.html.json.spi.JSONCall');
invoker.notifySuccess__VLjava_lang_Object_2(lcA0,lcA3);
return;

    }
}}}}}
};
    m.access = 8;
    m.cls = CLS;
    m = c.notifyError__VLjava_lang_Object_2Ljava_lang_Object_2 = function(lcA0, lcA1) {
if (lcA0 !== null && !lcA0['$instOf_org_netbeans_html_json_spi_JSONCall']) vm.java_lang_Class(false).castEx(lcA0, 'org.netbeans.html.json.spi.JSONCall');
var stA0 = lcA0;var stA1 = new vm.java_lang_Exception;
var stA2 = stA1;var stA3 = invoker.toString__Ljava_lang_String_2(lcA1);
(refs_java_lang_Exception || (refs_java_lang_Exception = vm.java_lang_Exception(false))).constructor['cons__VLjava_lang_String_2'].call(stA2, stA3);
invoker.notifyError__VLjava_lang_Throwable_2(stA0,stA1);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_ko4j_KOTransferfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_ko4j_KOTransfer', { value : true });
      vm.org_netbeans_html_json_spi_Transfer(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_ko4j_KOTransferfillInstOf });
    org_netbeans_html_ko4j_KOTransferfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/ko4j/KOTransfer';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.org_netbeans_html_json_spi_Transfer(false).constructor.$class
    ]; };
    CLS.$class.access = 48;
    CLS.$class.cnstr = CLS;
    CLS.$class.anno = {"Lorg/netbeans/html/context/spi/Contexts$Id;" : {
"value" : ["xhr"]
}

    };
    var refs_org_netbeans_html_ko4j_LoadJSON;
    var refs_java_io_ByteArrayOutputStream;
    var refs_java_lang_String;
    var refs_net_java_html_json_Models;
    var refs_java_lang_Math;
    var refs_java_lang_StringBuilder;
    var refs_java_io_InputStreamReader;
    var refs_org_netbeans_html_ko4j_KOTransfer$JSObjToStr;
    var refs_java_lang_Exception;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_netbeans_html_ko4j_KOTransfer = org_netbeans_html_ko4j_KOTransfer;

vm.org_netbeans_html_context_spi_Contexts$Id = link('org/netbeans/html/context/spi/Contexts$Id', function(f) { vm.org_netbeans_html_context_spi_Contexts$Id =  f; });
vm.org_netbeans_html_json_spi_Transfer = link('org/netbeans/html/json/spi/Transfer', function(f) { vm.org_netbeans_html_json_spi_Transfer =  f; });
vm.java_lang_Exception = link('java/lang/Exception', function(f) { vm.java_lang_Exception =  f; });
vm.java_io_InputStreamReader = link('java/io/InputStreamReader', function(f) { vm.java_io_InputStreamReader =  f; });
vm.java_lang_StringBuilder = link('java/lang/StringBuilder', function(f) { vm.java_lang_StringBuilder =  f; });
vm.java_lang_Math = link('java/lang/Math', function(f) { vm.java_lang_Math =  f; });
vm.net_java_html_json_Models = link('net/java/html/json/Models', function(f) { vm.net_java_html_json_Models =  f; });
vm.java_io_IOException = link('java/io/IOException', function(f) { vm.java_io_IOException =  f; });
vm.java_lang_String = link('java/lang/String', function(f) { vm.java_lang_String =  f; });
vm.java_io_ByteArrayOutputStream = link('java/io/ByteArrayOutputStream', function(f) { vm.java_io_ByteArrayOutputStream =  f; });

function org_netbeans_html_ko4j_LoadJSON() {
  var m;
  var CLS = org_netbeans_html_ko4j_LoadJSON;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_$$fn$$defineIfUnused_1'] = null;
  m = c._$$fn$$defineIfUnused_1 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$defineIfUnused_1'] = v; return CLS['fld_$$fn$$defineIfUnused_1']; };
  CLS['fld_$$fn$$parse_2'] = null;
  m = c._$$fn$$parse_2 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$parse_2'] = v; return CLS['fld_$$fn$$parse_2']; };
  CLS['fld_$$fn$$loadJSON_3'] = null;
  m = c._$$fn$$loadJSON_3 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$loadJSON_3'] = v; return CLS['fld_$$fn$$loadJSON_3']; };
  CLS['fld_$$fn$$loadJSONP_4'] = null;
  m = c._$$fn$$loadJSONP_4 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$loadJSONP_4'] = v; return CLS['fld_$$fn$$loadJSONP_4']; };
    m = CLS.cons__V = function() {
  var  lcA0 = this;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.createJSONP__Ljava_lang_String_2Lorg_netbeans_html_json_spi_JSONCall_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = invoker.hashCode__I(lcA0);
var lcI1 = stI0;
    }
    X_5: for (;;) { IF: if (gt <= 5) {
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"jsonp");
var stA1 = (refs_java_lang_Integer || (refs_java_lang_Integer = vm.java_lang_Integer(false)))['toHexString__Ljava_lang_String_2I'](lcI1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
var lcA2 = stA0;
var stI0 = c.defineIfUnused__ZLjava_lang_String_2Lorg_netbeans_html_json_spi_JSONCall_2(lcA2, lcA0);
if ((stI0) == 0) { gt = 38; break IF; }
return lcA2;
    }
    X_38: for (;;) { IF: if (gt <= 38) {
lcI1++;
{ gt = 0; continue X_5; }

    }
}}}
};
    m.access = 8;
    m.cls = CLS;
    m = c.defineIfUnused__ZLjava_lang_String_2Lorg_netbeans_html_json_spi_JSONCall_2 = function() {
  var r = (function(name,done) {

  name = vm.java_lang_Class(false).toJS(name);
  done = vm.java_lang_Class(false).toJS(done);if (window[name]) return false;
 window[name] = function(data) {
   delete window[name];
  var el = window.document.getElementById(name);
  el.parentNode.removeChild(el);
  vm.java_lang_Class(false).toJS(vm.org_netbeans_html_ko4j_$JsCallbacks$(false)._VM().org_1netbeans_1html_1json_1spi_1JSONCall$notifySuccess$Ljava_1lang_1Object_12__Ljava_lang_Object_2Lorg_netbeans_html_json_spi_JSONCall_2Ljava_lang_Object_2(done,data));
};
return true;

}).apply(this, arguments);
  return r === undefined ? null : r;

}

    m.access = 10;
    m.cls = CLS;
    m = c.parse__Ljava_lang_Object_2Ljava_lang_String_2 = function() {
  var r = (function(s) {

  s = vm.java_lang_Class(false).toJS(s);return eval('(' + s + ')');
}).apply(this, arguments);
  return r === undefined ? null : r;

}

    m.access = 8;
    m.cls = CLS;
    m = c.loadJSON__VLjava_lang_String_2Lorg_netbeans_html_json_spi_JSONCall_2Ljava_lang_String_2Ljava_lang_String_2_3Ljava_lang_Object_2 = function() {
  var r = (function(url,done,method,data,hp) {

  url = vm.java_lang_Class(false).toJS(url);
  done = vm.java_lang_Class(false).toJS(done);
  method = vm.java_lang_Class(false).toJS(method);
  data = vm.java_lang_Class(false).toJS(data);
  hp = vm.java_lang_Class(false).toJS(hp);var request = new XMLHttpRequest();
if (!method) method = 'GET';
request.open(method, url, true);
request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
for (var i = 0; i < hp.length; i += 2) {
  var h = hp[i];
  var v = hp[i + 1];
  request.setRequestHeader(h, v);
}
request.onreadystatechange = function() {
  if (request.readyState !== 4) return;
  var r = request.response || request.responseText;
  try {
    var str = r;
    if (request.status !== 0)
      if (request.status < 100 || request.status >= 400) throw request.status + ': ' + request.statusText;    try { r = eval('(' + r + ')'); } catch (ignore) { }    vm.java_lang_Class(false).toJS(vm.org_netbeans_html_ko4j_$JsCallbacks$(false)._VM().org_1netbeans_1html_1ko4j_1KOTransfer$notifySuccess$Ljava_1lang_1Object_12Ljava_1lang_1Object_12Ljava_1lang_1Object_12__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(done, str, r));
  } catch (error) {;
    vm.java_lang_Class(false).toJS(vm.org_netbeans_html_ko4j_$JsCallbacks$(false)._VM().org_1netbeans_1html_1ko4j_1KOTransfer$notifyError$Ljava_1lang_1Object_12Ljava_1lang_1Object_12__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(done, error));
  }
};
request.onerror = function (e) {
  vm.java_lang_Class(false).toJS(vm.org_netbeans_html_ko4j_$JsCallbacks$(false)._VM().org_1netbeans_1html_1ko4j_1KOTransfer$notifyError$Ljava_1lang_1Object_12Ljava_1lang_1Object_12__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(done, e.type + ' status ' + request.status));
};
if (data) request.send(data);
else request.send();

}).apply(this, arguments);
  return r === undefined ? null : r;

}

    m.access = 8;
    m.cls = CLS;
    m = c.loadJSONP__VLjava_lang_String_2Ljava_lang_String_2 = function() {
  var r = (function(url,jsonp) {

  url = vm.java_lang_Class(false).toJS(url);
  jsonp = vm.java_lang_Class(false).toJS(jsonp);var scrpt = window.document.createElement('script');
 scrpt.setAttribute('src', url);
 scrpt.setAttribute('id', jsonp);
 scrpt.setAttribute('type', 'text/javascript');
 var body = document.getElementsByTagName('body')[0];
 body.appendChild(scrpt);

}).apply(this, arguments);
  return r === undefined ? null : r;

}

    m.access = 8;
    m.cls = CLS;
    m = c.extractJSON__VLjava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Object_2 = function(lcA0, lcA1, lcA2) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var lcI3 = 0;
    }
    X_2: for (;;) { IF: if (gt <= 2) {

if ((lcI3) >= ((lcA1).length)) { gt = 24; break IF; }
var stA0 = lcA2;var stI1 = lcI3;var stA2 = (refs_org_netbeans_html_ko4j_Knockout || (refs_org_netbeans_html_ko4j_Knockout = org_netbeans_html_ko4j_Knockout(false))).getProperty__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_String_2(lcA0, (lcA1[lcI3] || Array.at(lcA1, lcI3)));
Array.at(stA0, stI1, stA2);
lcI3++;
{ gt = 0; continue X_2; }
    }
    X_24: for (;;) { IF: if (gt <= 24) {
return;

    }
}}}
};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_ko4j_LoadJSONfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_ko4j_LoadJSON', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_ko4j_LoadJSONfillInstOf });
    org_netbeans_html_ko4j_LoadJSONfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/ko4j/LoadJSON';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 48;
    CLS.$class.cnstr = CLS;
    var refs_java_lang_StringBuilder;
    var refs_java_lang_Integer;
    var refs_org_netbeans_html_ko4j_Knockout;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_netbeans_html_ko4j_LoadJSON = org_netbeans_html_ko4j_LoadJSON;


function org_netbeans_html_ko4j_Knockout() {
  var m;
  var CLS = org_netbeans_html_ko4j_Knockout;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._props = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_ko4j_Knockout_props'] = v; return this['fld_org_netbeans_html_ko4j_Knockout_props']; };
  m = c._funcs = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_ko4j_Knockout_funcs'] = v; return this['fld_org_netbeans_html_ko4j_Knockout_funcs']; };
  m = c._objs = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_ko4j_Knockout_objs'] = v; return this['fld_org_netbeans_html_ko4j_Knockout_objs']; };
  m = c._copyFrom = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_ko4j_Knockout_copyFrom'] = v; return this['fld_org_netbeans_html_ko4j_Knockout_copyFrom']; };
  m = c._strong = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_ko4j_Knockout_strong'] = v; return this['fld_org_netbeans_html_ko4j_Knockout_strong']; };
  CLS['fld_$$fn$$getProperty_1'] = null;
  m = c._$$fn$$getProperty_1 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$getProperty_1'] = v; return CLS['fld_$$fn$$getProperty_1']; };
  CLS['fld_$$fn$$valueHasMutated_2'] = null;
  m = c._$$fn$$valueHasMutated_2 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$valueHasMutated_2'] = v; return CLS['fld_$$fn$$valueHasMutated_2']; };
  CLS['fld_$$fn$$applyBindings_3'] = null;
  m = c._$$fn$$applyBindings_3 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$applyBindings_3'] = v; return CLS['fld_$$fn$$applyBindings_3']; };
  CLS['fld_$$fn$$allocJS_4'] = null;
  m = c._$$fn$$allocJS_4 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$allocJS_4'] = v; return CLS['fld_$$fn$$allocJS_4']; };
  CLS['fld_$$fn$$wrapModel_5'] = null;
  m = c._$$fn$$wrapModel_5 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$wrapModel_5'] = v; return CLS['fld_$$fn$$wrapModel_5']; };
  CLS['fld_$$fn$$clean_6'] = null;
  m = c._$$fn$$clean_6 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$clean_6'] = v; return CLS['fld_$$fn$$clean_6']; };
  CLS['fld_$$fn$$toModelImpl_7'] = null;
  m = c._$$fn$$toModelImpl_7 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$toModelImpl_7'] = v; return CLS['fld_$$fn$$toModelImpl_7']; };
    m = c.getProperty__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_String_2 = function() {
  var r = (function(object,property) {

  object = vm.java_lang_Class(false).toJS(object);
  property = vm.java_lang_Class(false).toJS(property);var ret;
if (property === null) ret = object;
else if (object === null) ret = null;
else ret = object[property];
if (typeof ret !== 'undefined' && ret !== null) {
  if (typeof ko !== 'undefined' && ko['utils'] && ko['utils']['unwrapObservable']) {
    return ko['utils']['unwrapObservable'](ret);
  }
  return ret;
}
return null;

}).apply(this, arguments);
  return r === undefined ? null : r;

}

    m.access = 8;
    m.cls = CLS;
    m = CLS.cons__VLjava_lang_Object_2Ljava_lang_Object_2_3Lorg_netbeans_html_json_spi_PropertyBinding_2_3Lorg_netbeans_html_json_spi_FunctionBinding_2 = function(lcA1, lcA2, lcA3, lcA4) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

lcA0['fld_org_netbeans_html_ko4j_Knockout_strong'] = lcA1;
var stA0 = lcA0;var stA1 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lorg/netbeans/html/json/spi/PropertyBinding;', vm.org_netbeans_html_json_spi_PropertyBinding, (lcA3).length);
stA0['fld_org_netbeans_html_ko4j_Knockout_props'] = stA1;
var lcI5 = 0;
    }
    X_21: for (;;) { IF: if (gt <= 21) {

if ((lcI5) >= ((lcA3).length)) { gt = 48; break IF; }
var stA0 = lcA0['fld_org_netbeans_html_ko4j_Knockout_props'];var stI1 = lcI5;var stA2 = invoker.weak__Lorg_netbeans_html_json_spi_PropertyBinding_2((lcA3[lcI5] || Array.at(lcA3, lcI5)));
Array.at(stA0, stI1, stA2);
lcI5++;
{ gt = 0; continue X_21; }
    }
    X_48: for (;;) { IF: if (gt <= 48) {

var stA0 = lcA0;var stA1 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lorg/netbeans/html/json/spi/FunctionBinding;', vm.org_netbeans_html_json_spi_FunctionBinding, (lcA4).length);
stA0['fld_org_netbeans_html_ko4j_Knockout_funcs'] = stA1;
var lcI5 = 0;
    }
    X_61: for (;;) { IF: if (gt <= 61) {

if ((lcI5) >= ((lcA4).length)) { gt = 90; break IF; }
var stA0 = lcA0['fld_org_netbeans_html_ko4j_Knockout_funcs'];var stI1 = lcI5;var stA2 = invoker.weak__Lorg_netbeans_html_json_spi_FunctionBinding_2((lcA4[lcI5] || Array.at(lcA4, lcI5)));
Array.at(stA0, stI1, stA2);
lcI5++;
{ gt = 0; continue X_61; }
    }
    X_90: for (;;) { IF: if (gt <= 90) {

lcA0['fld_org_netbeans_html_ko4j_Knockout_copyFrom'] = lcA2;
return;

    }
}}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.js__Ljava_lang_Object_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
var stA0 = (refs_org_netbeans_html_boot_spi_Fn || (refs_org_netbeans_html_boot_spi_Fn = vm.org_netbeans_html_boot_spi_Fn(false)))['activePresenter__Lorg_netbeans_html_boot_spi_Fn$Presenter_2']();
var lcA1 = stA0;
var stA0 = (refs_org_netbeans_html_ko4j_MapObjs || (refs_org_netbeans_html_ko4j_MapObjs = org_netbeans_html_ko4j_MapObjs(false))).get__Ljava_lang_Object_2Ljava_lang_Object_2Lorg_netbeans_html_boot_spi_Fn$Presenter_2(lcA0['fld_org_netbeans_html_ko4j_Knockout_objs'], lcA1);
var lcA2 = stA0;
if ((lcA2) !== null) { gt = 40; break IF; }
var stA0 = c.initObjs__Ljava_lang_Object_2Lorg_netbeans_html_boot_spi_Fn$Presenter_2Ljava_lang_Object_2.call(lcA0, lcA1, lcA0['fld_org_netbeans_html_ko4j_Knockout_copyFrom']);
var lcA2 = stA0;
var stA0 = lcA0;var stA1 = (refs_org_netbeans_html_ko4j_MapObjs || (refs_org_netbeans_html_ko4j_MapObjs = org_netbeans_html_ko4j_MapObjs(false))).put__Ljava_lang_Object_2Ljava_lang_Object_2Lorg_netbeans_html_boot_spi_Fn$Presenter_2Ljava_lang_Object_2(lcA0['fld_org_netbeans_html_ko4j_Knockout_objs'], lcA1, lcA2);
stA0['fld_org_netbeans_html_ko4j_Knockout_objs'] = stA1;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

return lcA2;

    }
}}
};
    m.access = 16;
    m.cls = CLS;
    m = c.initObjs__Ljava_lang_Object_2Lorg_netbeans_html_boot_spi_Fn$Presenter_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, (lcA0['fld_org_netbeans_html_ko4j_Knockout_props']).length);
var lcA3 = stA0;
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Number;', vm.java_lang_Number, (lcA0['fld_org_netbeans_html_ko4j_Knockout_props']).length);
var lcA4 = stA0;
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, (lcA0['fld_org_netbeans_html_ko4j_Knockout_props']).length);
var lcA5 = stA0;
var lcI6 = 0;
    }
    X_32: for (;;) { IF: if (gt <= 32) {

if ((lcI6) >= ((lcA3).length)) { gt = 142; break IF; }
var stA0 = lcA3;var stI1 = lcI6;var stA2 = invoker.getPropertyName__Ljava_lang_String_2((lcA0['fld_org_netbeans_html_ko4j_Knockout_props'][lcI6] || Array.at(lcA0['fld_org_netbeans_html_ko4j_Knockout_props'], lcI6)));
Array.at(stA0, stI1, stA2);
var stI0 = invoker.isReadOnly__Z((lcA0['fld_org_netbeans_html_ko4j_Knockout_props'][lcI6] || Array.at(lcA0['fld_org_netbeans_html_ko4j_Knockout_props'], lcI6)));
if ((stI0) == 0) { gt = 70; break IF; }
var stI0 = 1;{ gt = 71; break IF; }
    }
    X_70: for (;;) { IF: if (gt <= 70) {

var stI0 = 0;    }
    X_71: for (;;) { IF: if (gt <= 71) {

var stI1 = invoker.isConstant__Z((lcA0['fld_org_netbeans_html_ko4j_Knockout_props'][lcI6] || Array.at(lcA0['fld_org_netbeans_html_ko4j_Knockout_props'], lcI6)));
if ((stI1) == 0) { gt = 88; break IF; }
var stI1 = 2;{ gt = 89; break IF; }
    }
    X_88: for (;;) { IF: if (gt <= 88) {

var stI1 = 0;    }
    X_89: for (;;) { IF: if (gt <= 89) {

var lcI7 = (((stI0) + (stI1)) | 0);
var stA0 = lcA4;var stI1 = lcI6;var stA2 = (refs_java_lang_Integer || (refs_java_lang_Integer = vm.java_lang_Integer(false)))['valueOf__Ljava_lang_Integer_2I'](lcI7);
Array.at(stA0, stI1, stA2);
var stA0 = invoker.getValue__Ljava_lang_Object_2((lcA0['fld_org_netbeans_html_ko4j_Knockout_props'][lcI6] || Array.at(lcA0['fld_org_netbeans_html_ko4j_Knockout_props'], lcI6)));
var lcA8 = stA0;
var stI0 = lcA8 != null && lcA8['$instOf_java_lang_Enum'] ? 1 : 0;
if ((stI0) == 0) { gt = 129; break IF; }
var stA0 = invoker.toString__Ljava_lang_String_2(lcA8);
var lcA8 = stA0;
    }
    X_129: for (;;) { IF: if (gt <= 129) {

Array.at(lcA5, lcI6, lcA8);
lcI6++;
{ gt = 0; continue X_32; }
    }
    X_142: for (;;) { IF: if (gt <= 142) {

var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, (lcA0['fld_org_netbeans_html_ko4j_Knockout_funcs']).length);
var lcA6 = stA0;
var lcI7 = 0;
    }
    X_155: for (;;) { IF: if (gt <= 155) {

if ((lcI7) >= ((lcA6).length)) { gt = 184; break IF; }
var stA0 = lcA6;var stI1 = lcI7;var stA2 = invoker.getFunctionName__Ljava_lang_String_2((lcA0['fld_org_netbeans_html_ko4j_Knockout_funcs'][lcI7] || Array.at(lcA0['fld_org_netbeans_html_ko4j_Knockout_funcs'], lcI7)));
Array.at(stA0, stI1, stA2);
lcI7++;
{ gt = 0; continue X_155; }
    }
    X_184: for (;;) { IF: if (gt <= 184) {

var stA0 = (refs_org_netbeans_html_ko4j_CacheObjs || (refs_org_netbeans_html_ko4j_CacheObjs = org_netbeans_html_ko4j_CacheObjs(false))).find__Lorg_netbeans_html_ko4j_CacheObjs_2Lorg_netbeans_html_boot_spi_Fn$Presenter_2(lcA1);
var stA0 = stA0.getJSObject__Ljava_lang_Object_2();
var lcA7 = stA0;
c.wrapModel__VLorg_netbeans_html_ko4j_Knockout_2Ljava_lang_Object_2Ljava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Number_2Ljava_lang_Object_2_3Ljava_lang_String_2(lcA0, lcA7, lcA2, lcA3, lcA4, lcA5, lcA6);
return lcA7;

    }
}}}}}}}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.cleanUp__V = function() {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var lcA0 = null;
if ((lcA0) !== null) { gt = 7; break IF; }
return;
    }
    X_7: for (;;) { IF: if (gt <= 7) {

var stA0 = lcA0['fld_org_netbeans_html_ko4j_Knockout_objs'];var stA1 = (refs_org_netbeans_html_boot_spi_Fn || (refs_org_netbeans_html_boot_spi_Fn = vm.org_netbeans_html_boot_spi_Fn(false)))['activePresenter__Lorg_netbeans_html_boot_spi_Fn$Presenter_2']();
var stA0 = (refs_org_netbeans_html_ko4j_MapObjs || (refs_org_netbeans_html_ko4j_MapObjs = org_netbeans_html_ko4j_MapObjs(false))).remove___3Ljava_lang_Object_2Ljava_lang_Object_2Lorg_netbeans_html_boot_spi_Fn$Presenter_2(stA0, stA1);
var lcA1 = stA0;
var lcA2 = (lcA1[0] || Array.at(lcA1, 0));
lcA0['fld_org_netbeans_html_ko4j_Knockout_objs'] = (lcA1[1] || Array.at(lcA1, 1));
c.clean__VLjava_lang_Object_2(lcA2);
lcA0['fld_org_netbeans_html_ko4j_Knockout_props'] = null;
lcA0['fld_org_netbeans_html_ko4j_Knockout_funcs'] = null;
{ gt = 0; continue X_0; }

    }
}}
};
    m.access = 8;
    m.cls = CLS;
    m = c.hold__V = function() {
  var  lcA0 = this;
return;

};
    m.access = 16;
    m.cls = CLS;
    m = c.get__Ljava_lang_Object_2 = function() {
  var  lcA0 = this;
return lcA0['fld_org_netbeans_html_ko4j_Knockout_strong'];

};
    m.access = 16;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2I = function(lcI1) {
  var  lcA0 = this;
var stA0 = invoker.getValue__Ljava_lang_Object_2((lcA0['fld_org_netbeans_html_ko4j_Knockout_props'][lcI1] || Array.at(lcA0['fld_org_netbeans_html_ko4j_Knockout_props'], lcI1)));
return stA0;

};
    m.access = 16;
    m.cls = CLS;
    m = c.setValue__VILjava_lang_Object_2 = function(lcI1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = lcA2 != null && lcA2['$instOf_org_netbeans_html_ko4j_Knockout'] ? 1 : 0;
if ((stI0) == 0) { gt = 15; break IF; }
if (lcA2 !== null && !lcA2['$instOf_org_netbeans_html_ko4j_Knockout']) vm.java_lang_Class(false).castEx(lcA2, 'org.netbeans.html.ko4j.Knockout');
var stA0 = lcA2.get__Ljava_lang_Object_2();
var lcA2 = stA0;
    }
    X_15: for (;;) { IF: if (gt <= 15) {

invoker.setValue__VLjava_lang_Object_2((lcA0['fld_org_netbeans_html_ko4j_Knockout_props'][lcI1] || Array.at(lcA0['fld_org_netbeans_html_ko4j_Knockout_props'], lcI1)),lcA2);
return;

    }
}}
};
    m.access = 16;
    m.cls = CLS;
    m = c.call__VILjava_lang_Object_2Ljava_lang_Object_2 = function(lcI1, lcA2, lcA3) {
  var  lcA0 = this;
invoker.call__VLjava_lang_Object_2Ljava_lang_Object_2((lcA0['fld_org_netbeans_html_ko4j_Knockout_funcs'][lcI1] || Array.at(lcA0['fld_org_netbeans_html_ko4j_Knockout_funcs'], lcI1)),lcA2, lcA3);
return;

};
    m.access = 16;
    m.cls = CLS;
    m = c.getPresenter__Lorg_netbeans_html_boot_spi_Fn$Presenter_2Ljava_lang_Object_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = lcA0 != null && lcA0['$instOf_org_netbeans_html_boot_spi_Fn$Presenter'] ? 1 : 0;
if ((stI0) == 0) { gt = 12; break IF; }
if (lcA0 !== null && !lcA0['$instOf_org_netbeans_html_boot_spi_Fn$Presenter']) vm.java_lang_Class(false).castEx(lcA0, 'org.netbeans.html.boot.spi.Fn$Presenter');
return lcA0;
    }
    X_12: for (;;) { IF: if (gt <= 12) {

if ((lcA0) !== null) { gt = 18; break IF; }
return null;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

if (lcA0 !== null && !lcA0['$instOf_org_netbeans_html_boot_spi_Fn$Ref']) vm.java_lang_Class(false).castEx(lcA0, 'org.netbeans.html.boot.spi.Fn$Ref');
var stA0 = invoker.presenter__Lorg_netbeans_html_boot_spi_Fn$Presenter_2(lcA0);
return stA0;

    }
}}}
};
    m.access = 10;
    m.cls = CLS;
    m = c.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = (refs_org_netbeans_html_ko4j_MapObjs || (refs_org_netbeans_html_ko4j_MapObjs = org_netbeans_html_ko4j_MapObjs(false))).toArray___3Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_org_netbeans_html_ko4j_Knockout_objs']);
var lcA4 = stA0;
var lcI5 = 0;
    }
    X_12: for (;;) { IF: if (gt <= 12) {

if ((lcI5) >= ((lcA4).length)) { gt = 132; break IF; }
var stA0 = c.getPresenter__Lorg_netbeans_html_boot_spi_Fn$Presenter_2Ljava_lang_Object_2((lcA4[lcI5] || Array.at(lcA4, lcI5)));
var lcA6 = stA0;
var lcA7 = (lcA4[(((lcI5) + (1)) | 0)] || Array.at(lcA4, (((lcI5) + (1)) | 0)));
var stA0 = lcA6;var stA1 = (refs_org_netbeans_html_boot_spi_Fn || (refs_org_netbeans_html_boot_spi_Fn = vm.org_netbeans_html_boot_spi_Fn(false)))['activePresenter__Lorg_netbeans_html_boot_spi_Fn$Presenter_2']();
if ((stA0) === (stA1)) { gt = 126; break IF; }
var stI0 = lcA6 != null && lcA6['$instOf_java_util_concurrent_Executor'] ? 1 : 0;
if ((stI0) == 0) { gt = 79; break IF; }
if (lcA6 !== null && !lcA6['$instOf_java_util_concurrent_Executor']) vm.java_lang_Class(false).castEx(lcA6, 'java.util.concurrent.Executor');
var stA0 = lcA6;var stA1 = new org_netbeans_html_ko4j_Knockout$1;
(refs_org_netbeans_html_ko4j_Knockout$1 || (refs_org_netbeans_html_ko4j_Knockout$1 = org_netbeans_html_ko4j_Knockout$1(false))).constructor.cons__VLorg_netbeans_html_ko4j_Knockout_2Ljava_lang_Object_2Ljava_lang_String_2.call(stA1, lcA0, lcA7, lcA1);
invoker.execute__VLjava_lang_Runnable_2(stA0,stA1);
{ gt = 126; break IF; }
    }
    X_79: for (;;) { IF: if (gt <= 79) {

var stA0 = (refs_org_netbeans_html_boot_spi_Fn || (refs_org_netbeans_html_boot_spi_Fn = vm.org_netbeans_html_boot_spi_Fn(false)))['activate__Ljava_io_Closeable_2Lorg_netbeans_html_boot_spi_Fn$Presenter_2'](lcA6);
var lcA8 = stA0;
try {
c.valueHasMutated__VLjava_lang_Object_2Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA7, lcA1, null, null);
} catch (e) {
var stA0 = e;{ gt = 109; break IF; }
}try {
invoker.close__V(lcA8);
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 104; break IF; }}
throw e;
}{ gt = 126; break IF; }
    }
    X_104: for (;;) { IF: if (gt <= 104) {
var lcA9 = stA0;
{ gt = 126; break IF; }
    }
    X_109: for (;;) { IF: if (gt <= 109) {
try {var lcA10 = stA0;
} catch (e) {
var stA0 = e;{ gt = 0; continue X_109; }
}try {
invoker.close__V(lcA8);
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 121; break IF; }}
throw e;
}{ gt = 123; break IF; }
    }
    X_121: for (;;) { IF: if (gt <= 121) {
var lcA11 = stA0;
    }
    X_123: for (;;) { IF: if (gt <= 123) {

{ var stA0 = lcA10; throw lcA10; }
    }
    X_126: for (;;) { IF: if (gt <= 126) {
lcI5 += 2;
{ gt = 0; continue X_12; }
    }
    X_132: for (;;) { IF: if (gt <= 132) {

var stA0 = lcA0.js__Ljava_lang_Object_2();
c.valueHasMutated__VLjava_lang_Object_2Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0, lcA1, lcA2, lcA3);
return;

    }
}}}}}}}}}
};
    m.access = 16;
    m.cls = CLS;
    m = c.valueHasMutated__VLjava_lang_Object_2Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2 = function() {
  var r = (function(model,prop,oldValue,newValue) {

  model = vm.java_lang_Class(false).toJS(model);
  prop = vm.java_lang_Class(false).toJS(prop);
  oldValue = vm.java_lang_Class(false).toJS(oldValue);
  newValue = vm.java_lang_Class(false).toJS(newValue);if (model) {
  var koProp = model[prop];
  if (koProp) {
    var koFire = koProp['valueHasMutated'];
    if (koFire) {
      if (oldValue !== null || newValue !== null) {
        koFire(newValue);
      } else {
        koFire();
      }
    }
  }
}

}).apply(this, arguments);
  return r === undefined ? null : r;

}

    m.access = 10;
    m.cls = CLS;
    m = c.applyBindings__Ljava_lang_Object_2Ljava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = lcA1;var stA1 = lcA0.js__Ljava_lang_Object_2();
var stA0 = c.applyBindings__Ljava_lang_Object_2Ljava_lang_String_2Ljava_lang_Object_2(stA0, stA1);
return stA0;

};
    m.access = 16;
    m.cls = CLS;
    m = c.applyBindings__Ljava_lang_Object_2Ljava_lang_String_2Ljava_lang_Object_2 = function() {
  var r = (function(id,bindings) {

  id = vm.java_lang_Class(false).toJS(id);
  bindings = vm.java_lang_Class(false).toJS(bindings);var d = window['document'];
var e = id ? d['getElementById'](id) : d['body'];
ko['cleanNode'](e);
ko['applyBindings'](bindings, e);
return bindings['ko4j'];

}).apply(this, arguments);
  return r === undefined ? null : r;

}

    m.access = 10;
    m.cls = CLS;
    m = c.allocJS___3Ljava_lang_Object_2I = function() {
  var r = (function(cnt) {

  cnt = vm.java_lang_Class(false).toJS(cnt);var arr = new Array(cnt);
for (var i = 0; i < cnt; i++) arr[i] = new Object();
return arr;

}).apply(this, arguments);
  return r === undefined ? null : r;

}

    m.access = 8;
    m.cls = CLS;
    m = c.wrapModel__VLorg_netbeans_html_ko4j_Knockout_2Ljava_lang_Object_2Ljava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Number_2Ljava_lang_Object_2_3Ljava_lang_String_2 = function() {
  var r = (function(thiz,ret,copyFrom,propNames,propInfo,propValues,funcNames) {

  thiz = vm.java_lang_Class(false).toJS(thiz);
  ret = vm.java_lang_Class(false).toJS(ret);
  copyFrom = vm.java_lang_Class(false).toJS(copyFrom);
  propNames = vm.java_lang_Class(false).toJS(propNames);
  propInfo = vm.java_lang_Class(false).toJS(propInfo);
  propValues = vm.java_lang_Class(false).toJS(propValues);
  funcNames = vm.java_lang_Class(false).toJS(funcNames);Object.defineProperty(ret, 'ko4j', { value : thiz });
function normalValue(r) {
  if (r) try { var br = r.valueOf(); } catch (err) {}
  return br === undefined ? r: br;
}
function koComputed(index, name, readOnly, value) {
  var orig = copyFrom ? copyFrom[name] : null;
  if (!ko['isObservable'](orig)) {
    orig = null;
    var trigger = ko['observable']()['extend']({'notify':'always'});
  } else {
    var trigger = orig;
  }
  function realGetter() {
    var self = ret['ko4j'];
    try {
      var v = self ? vm.java_lang_Class(false).toJS(vm.org_netbeans_html_ko4j_$JsCallbacks$(false)._VM().org_1netbeans_1html_1ko4j_1Knockout$getValue$I__Ljava_lang_Object_2Lorg_netbeans_html_ko4j_Knockout_2I(self,index)) : null;
      return v;
    } catch (e) {
      alert("Cannot call getValue on " + self + " prop: " + name + " error: " + e);
    }
  }
  var activeGetter = orig ? orig : function() { return value; };
  var bnd = {
    'read': function() {
      trigger();
      if (orig) {
        var r = orig();
      } else {
        var r = activeGetter();
        activeGetter = realGetter;
      }
      return normalValue(r);;
    },
    'owner': ret
  };
  if (!readOnly) {
    function write(val) {
      if (orig) orig(val);
      var self = ret['ko4j'];
      if (!self) return;
      var model = val ? val['ko4j'] : null;
      vm.java_lang_Class(false).toJS(vm.org_netbeans_html_ko4j_$JsCallbacks$(false)._VM().org_1netbeans_1html_1ko4j_1Knockout$setValue$ILjava_1lang_1Object_12__Ljava_lang_Object_2Lorg_netbeans_html_ko4j_Knockout_2ILjava_lang_Object_2(self,index, model ? model : val));
    };
    bnd['write'] = write;
    if (orig) {
      write(orig());
      orig.subscribe(write);
    }
  };
  var cmpt = ko['computed'](bnd);
  cmpt['valueHasMutated'] = function(val) {
    if (arguments.length === 1) activeGetter = function() { return val; };
    trigger(val);
  };
  ret[name] = cmpt;
}
for (var i = 0; i < propNames.length; i++) {
  if ((propInfo[i] & 2) !== 0) {
    ret[propNames[i]] = normalValue(propValues[i]);
  } else {
    koComputed(i, propNames[i], (propInfo[i] & 1) !== 0, propValues[i]);
  }
}
function koExpose(index, name) {
  ret[name] = function(data, ev) {
    var self = ret['ko4j'];
    if (!self) return;
    vm.java_lang_Class(false).toJS(vm.org_netbeans_html_ko4j_$JsCallbacks$(false)._VM().org_1netbeans_1html_1ko4j_1Knockout$call$ILjava_1lang_1Object_12Ljava_1lang_1Object_12__Ljava_lang_Object_2Lorg_netbeans_html_ko4j_Knockout_2ILjava_lang_Object_2Ljava_lang_Object_2(self,index, data, ev));
  };
}
for (var i = 0; i < funcNames.length; i++) {
  koExpose(i, funcNames[i]);
}

}).apply(this, arguments);
  return r === undefined ? null : r;

}

    m.access = 10;
    m.cls = CLS;
    m = c.clean__VLjava_lang_Object_2 = function() {
  var r = (function(js) {

  js = vm.java_lang_Class(false).toJS(js);delete js['ko4j'];
for (var p in js) {
  delete js[p];
};


}).apply(this, arguments);
  return r === undefined ? null : r;

}

    m.access = 10;
    m.cls = CLS;
    m = c.toModelImpl__Ljava_lang_Object_2Ljava_lang_Object_2 = function() {
  var r = (function(o) {

  o = vm.java_lang_Class(false).toJS(o);return o['ko4j'] ? o['ko4j'] : o;
}).apply(this, arguments);
  return r === undefined ? null : r;

}

    m.access = 10;
    m.cls = CLS;
    m = c.toModel__Ljava_lang_Object_2Ljava_lang_Object_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = c.toModelImpl__Ljava_lang_Object_2Ljava_lang_Object_2(lcA0);
var lcA1 = stA0;
var stI0 = lcA1 != null && lcA1['$instOf_org_netbeans_html_ko4j_Knockout'] ? 1 : 0;
if ((stI0) == 0) { gt = 20; break IF; }
if (lcA1 !== null && !lcA1['$instOf_org_netbeans_html_ko4j_Knockout']) vm.java_lang_Class(false).castEx(lcA1, 'org.netbeans.html.ko4j.Knockout');
var stA0 = lcA1.get__Ljava_lang_Object_2();
return stA0;
    }
    X_20: for (;;) { IF: if (gt <= 20) {

return lcA1;

    }
}}
};
    m.access = 8;
    m.cls = CLS;
    m = c.access$000__VLjava_lang_Object_2Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2 = function(lcA0, lcA1, lcA2, lcA3) {
c.valueHasMutated__VLjava_lang_Object_2Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0, lcA1, lcA2, lcA3);
return;

};
    m.access = 4104;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_ko4j_KnockoutfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_ko4j_Knockout', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_ko4j_KnockoutfillInstOf });
    org_netbeans_html_ko4j_KnockoutfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/ko4j/Knockout';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 48;
    CLS.$class.cnstr = CLS;
    var refs_org_netbeans_html_boot_spi_Fn;
    var refs_org_netbeans_html_ko4j_MapObjs;
    var refs_java_lang_Integer;
    var refs_org_netbeans_html_ko4j_CacheObjs;
    var refs_org_netbeans_html_ko4j_Knockout$1;
// resource from org/netbeans/html/ko4j/knockout-3.5.0.js

(0 || eval)("/*!\n"
 + " * Knockout JavaScript library v3.5.0\n"
 + " * (c) The Knockout.js team - http://knockoutjs.com/\n"
 + " * License: MIT (http://www.opensource.org/licenses/mit-license.php)\n"
 + " */\n"
 + "\n"
 + "(function() {(function(p){var z=this||(0,eval)(\"this\"),w=z.document,R=z.navigator,v=z.jQuery,H=z.JSON;v||\"undefined\"===typeof jQuery||(v=jQuery);(function(p){\"function\"===typeof define&&define.amd?define([\"exports\",\"require\"],p):\"object\"===typeof exports&&\"object\"===typeof module?p(module.exports||exports):p(z.ko={})})(function(S,T){function K(a,c){return null===a||typeof a in W?a===c:!1}function X(b,c){var d;return function(){d||(d=a.a.setTimeout(function(){d=p;b()},c))}}function Y(b,c){var d;return function(){clearTimeout(d);\n"
 + "d=a.a.setTimeout(b,c)}}function Z(a,c){c&&\"change\"!==c?\"beforeChange\"===c?this.oc(a):this.bb(a,c):this.pc(a)}function aa(a,c){null!==c&&c.s&&c.s()}function ba(a,c){var d=this.pd,e=d[t];e.qa||(this.Pb&&this.kb[c]?(d.tc(c,a,this.kb[c]),this.kb[c]=null,--this.Pb):e.F[c]||d.tc(c,a,e.G?{da:a}:d.Zc(a)),a.Ka&&a.fd())}var a=\"undefined\"!==typeof S?S:{};a.b=function(b,c){for(var d=b.split(\".\"),e=a,f=0;f<d.length-1;f++)e=e[d[f]];e[d[d.length-1]]=c};a.J=function(a,c,d){a[c]=d};a.version=\"3.5.0\";a.b(\"version\",\n"
 + "a.version);a.options={deferUpdates:!1,useOnlyNativeEvents:!1,foreachHidesDestroyed:!1};a.a=function(){function b(a,b){for(var c in a)f.call(a,c)&&b(c,a[c])}function c(a,b){if(b)for(var c in b)f.call(b,c)&&(a[c]=b[c]);return a}function d(a,b){a.__proto__=b;return a}function e(b,c,d,e){var k=b[c].match(n)||[];a.a.C(d.match(n),function(b){a.a.Oa(k,b,e)});b[c]=k.join(\" \")}var f=Object.prototype.hasOwnProperty,g={__proto__:[]}instanceof Array,h=\"function\"===typeof Symbol,m={},l={};m[R&&/Firefox\\/2/i.test(R.userAgent)?\n"
 + "\"KeyboardEvent\":\"UIEvents\"]=[\"keyup\",\"keydown\",\"keypress\"];m.MouseEvents=\"click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave\".split(\" \");b(m,function(a,b){if(b.length)for(var c=0,d=b.length;c<d;c++)l[b[c]]=a});var k={propertychange:!0},q=w&&function(){for(var a=3,b=w.createElement(\"div\"),c=b.getElementsByTagName(\"i\");b.innerHTML=\"\\x3c!--[if gt IE \"+ ++a+\"]><i></i><![endif]--\\x3e\",c[0];);return 4<a?a:p}(),n=/\\S+/g,r;return{Ic:[\"authenticity_token\",/^__RequestVerificationToken(_.*)?$/],\n"
 + "C:function(a,b,c){for(var d=0,e=a.length;d<e;d++)b.call(c,a[d],d,a)},A:\"function\"==typeof Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b)}:function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},Lb:function(a,b,c){for(var d=0,e=a.length;d<e;d++)if(b.call(c,a[d],d,a))return a[d];return p},hb:function(b,c){var d=a.a.A(b,c);0<d?b.splice(d,1):0===d&&b.shift()},vc:function(b){var c=[];b&&a.a.C(b,function(b){0>a.a.A(c,b)&&c.push(b)});return c},Mb:function(a,\n"
 + "b,c){var d=[];if(a)for(var e=0,k=a.length;e<k;e++)d.push(b.call(c,a[e],e));return d},fb:function(a,b,c){var d=[];if(a)for(var e=0,k=a.length;e<k;e++)b.call(c,a[e],e)&&d.push(a[e]);return d},gb:function(a,b){if(b instanceof Array)a.push.apply(a,b);else for(var c=0,d=b.length;c<d;c++)a.push(b[c]);return a},Oa:function(b,c,d){var e=a.a.A(a.a.$b(b),c);0>e?d&&b.push(c):d||b.splice(e,1)},Ba:g,extend:c,setPrototypeOf:d,zb:g?d:c,O:b,Ha:function(a,b,c){if(!a)return a;var d={},e;for(e in a)f.call(a,e)&&(d[e]=\n"
 + "b.call(c,a[e],e,a));return d},Sb:function(b){for(;b.firstChild;)a.removeNode(b.firstChild)},Xb:function(b){b=a.a.la(b);for(var c=(b[0]&&b[0].ownerDocument||w).createElement(\"div\"),d=0,e=b.length;d<e;d++)c.appendChild(a.na(b[d]));return c},Ca:function(b,c){for(var d=0,e=b.length,k=[];d<e;d++){var f=b[d].cloneNode(!0);k.push(c?a.na(f):f)}return k},ua:function(b,c){a.a.Sb(b);if(c)for(var d=0,e=c.length;d<e;d++)b.appendChild(c[d])},Wc:function(b,c){var d=b.nodeType?[b]:b;if(0<d.length){for(var e=d[0],\n"
 + "k=e.parentNode,f=0,l=c.length;f<l;f++)k.insertBefore(c[f],e);f=0;for(l=d.length;f<l;f++)a.removeNode(d[f])}},Ua:function(a,b){if(a.length){for(b=8===b.nodeType&&b.parentNode||b;a.length&&a[0].parentNode!==b;)a.splice(0,1);for(;1<a.length&&a[a.length-1].parentNode!==b;)a.length--;if(1<a.length){var c=a[0],d=a[a.length-1];for(a.length=0;c!==d;)a.push(c),c=c.nextSibling;a.push(d)}}return a},Yc:function(a,b){7>q?a.setAttribute(\"selected\",b):a.selected=b},Cb:function(a){return null===a||a===p?\"\":a.trim?\n"
 + "a.trim():a.toString().replace(/^[\\s\\xa0]+|[\\s\\xa0]+$/g,\"\")},Td:function(a,b){a=a||\"\";return b.length>a.length?!1:a.substring(0,b.length)===b},ud:function(a,b){if(a===b)return!0;if(11===a.nodeType)return!1;if(b.contains)return b.contains(1!==a.nodeType?a.parentNode:a);if(b.compareDocumentPosition)return 16==(b.compareDocumentPosition(a)&16);for(;a&&a!=b;)a=a.parentNode;return!!a},Rb:function(b){return a.a.ud(b,b.ownerDocument.documentElement)},jd:function(b){return!!a.a.Lb(b,a.a.Rb)},P:function(a){return a&&\n"
 + "a.tagName&&a.tagName.toLowerCase()},zc:function(b){return a.onError?function(){try{return b.apply(this,arguments)}catch(c){throw a.onError&&a.onError(c),c;}}:b},setTimeout:function(b,c){return setTimeout(a.a.zc(b),c)},Fc:function(b){setTimeout(function(){a.onError&&a.onError(b);throw b;},0)},H:function(b,c,d){var e=a.a.zc(d);d=k[c];if(a.options.useOnlyNativeEvents||d||!v)if(d||\"function\"!=typeof b.addEventListener)if(\"undefined\"!=typeof b.attachEvent){var f=function(a){e.call(b,a)},l=\"on\"+c;b.attachEvent(l,\n"
 + "f);a.a.I.za(b,function(){b.detachEvent(l,f)})}else throw Error(\"Browser doesn't support addEventListener or attachEvent\");else b.addEventListener(c,e,!1);else r||(r=\"function\"==typeof v(b).on?\"on\":\"bind\"),v(b)[r](c,e)},Fb:function(b,c){if(!b||!b.nodeType)throw Error(\"element must be a DOM node when calling triggerEvent\");var d;\"input\"===a.a.P(b)&&b.type&&\"click\"==c.toLowerCase()?(d=b.type,d=\"checkbox\"==d||\"radio\"==d):d=!1;if(a.options.useOnlyNativeEvents||!v||d)if(\"function\"==typeof w.createEvent)if(\"function\"==\n"
 + "typeof b.dispatchEvent)d=w.createEvent(l[c]||\"HTMLEvents\"),d.initEvent(c,!0,!0,z,0,0,0,0,0,!1,!1,!1,!1,0,b),b.dispatchEvent(d);else throw Error(\"The supplied element doesn't support dispatchEvent\");else if(d&&b.click)b.click();else if(\"undefined\"!=typeof b.fireEvent)b.fireEvent(\"on\"+c);else throw Error(\"Browser doesn't support triggering events\");else v(b).trigger(c)},c:function(b){return a.N(b)?b():b},$b:function(b){return a.N(b)?b.w():b},Eb:function(b,c,d){var k;c&&(\"object\"===typeof b.classList?\n"
 + "(k=b.classList[d?\"add\":\"remove\"],a.a.C(c.match(n),function(a){k.call(b.classList,a)})):\"string\"===typeof b.className.baseVal?e(b.className,\"baseVal\",c,d):e(b,\"className\",c,d))},Ab:function(b,c){var d=a.a.c(c);if(null===d||d===p)d=\"\";var e=a.h.firstChild(b);!e||3!=e.nodeType||a.h.nextSibling(e)?a.h.ua(b,[b.ownerDocument.createTextNode(d)]):e.data=d;a.a.zd(b)},Xc:function(a,b){a.name=b;if(7>=q)try{var c=a.name.replace(/[&<>'\"]/g,function(a){return\"&#\"+a.charCodeAt(0)+\";\"});a.mergeAttributes(w.createElement(\"<input name='\"+\n"
 + "c+\"'/>\"),!1)}catch(d){}},zd:function(a){9<=q&&(a=1==a.nodeType?a:a.parentNode,a.style&&(a.style.zoom=a.style.zoom))},vd:function(a){if(q){var b=a.style.width;a.style.width=0;a.style.width=b}},Od:function(b,c){b=a.a.c(b);c=a.a.c(c);for(var d=[],e=b;e<=c;e++)d.push(e);return d},la:function(a){for(var b=[],c=0,d=a.length;c<d;c++)b.push(a[c]);return b},Da:function(a){return h?Symbol(a):a},Xd:6===q,Yd:7===q,W:q,Kc:function(b,c){for(var d=a.a.la(b.getElementsByTagName(\"input\")).concat(a.a.la(b.getElementsByTagName(\"textarea\"))),\n"
 + "e=\"string\"==typeof c?function(a){return a.name===c}:function(a){return c.test(a.name)},k=[],f=d.length-1;0<=f;f--)e(d[f])&&k.push(d[f]);return k},Md:function(b){return\"string\"==typeof b&&(b=a.a.Cb(b))?H&&H.parse?H.parse(b):(new Function(\"return \"+b))():null},fc:function(b,c,d){if(!H||!H.stringify)throw Error(\"Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js\");\n"
 + "return H.stringify(a.a.c(b),c,d)},Nd:function(c,d,e){e=e||{};var k=e.params||{},f=e.includeFields||this.Ic,l=c;if(\"object\"==typeof c&&\"form\"===a.a.P(c))for(var l=c.action,h=f.length-1;0<=h;h--)for(var g=a.a.Kc(c,f[h]),m=g.length-1;0<=m;m--)k[g[m].name]=g[m].value;d=a.a.c(d);var n=w.createElement(\"form\");n.style.display=\"none\";n.action=l;n.method=\"post\";for(var q in d)c=w.createElement(\"input\"),c.type=\"hidden\",c.name=q,c.value=a.a.fc(a.a.c(d[q])),n.appendChild(c);b(k,function(a,b){var c=w.createElement(\"input\");\n"
 + "c.type=\"hidden\";c.name=a;c.value=b;n.appendChild(c)});w.body.appendChild(n);e.submitter?e.submitter(n):n.submit();setTimeout(function(){n.parentNode.removeChild(n)},0)}}}();a.b(\"utils\",a.a);a.b(\"utils.arrayForEach\",a.a.C);a.b(\"utils.arrayFirst\",a.a.Lb);a.b(\"utils.arrayFilter\",a.a.fb);a.b(\"utils.arrayGetDistinctValues\",a.a.vc);a.b(\"utils.arrayIndexOf\",a.a.A);a.b(\"utils.arrayMap\",a.a.Mb);a.b(\"utils.arrayPushAll\",a.a.gb);a.b(\"utils.arrayRemoveItem\",a.a.hb);a.b(\"utils.cloneNodes\",a.a.Ca);a.b(\"utils.createSymbolOrString\",\n"
 + "a.a.Da);a.b(\"utils.extend\",a.a.extend);a.b(\"utils.fieldsIncludedWithJsonPost\",a.a.Ic);a.b(\"utils.getFormFields\",a.a.Kc);a.b(\"utils.objectMap\",a.a.Ha);a.b(\"utils.peekObservable\",a.a.$b);a.b(\"utils.postJson\",a.a.Nd);a.b(\"utils.parseJson\",a.a.Md);a.b(\"utils.registerEventHandler\",a.a.H);a.b(\"utils.stringifyJson\",a.a.fc);a.b(\"utils.range\",a.a.Od);a.b(\"utils.toggleDomNodeCssClass\",a.a.Eb);a.b(\"utils.triggerEvent\",a.a.Fb);a.b(\"utils.unwrapObservable\",a.a.c);a.b(\"utils.objectForEach\",a.a.O);a.b(\"utils.addOrRemoveItem\",\n"
 + "a.a.Oa);a.b(\"utils.setTextContent\",a.a.Ab);a.b(\"unwrap\",a.a.c);Function.prototype.bind||(Function.prototype.bind=function(a){var c=this;if(1===arguments.length)return function(){return c.apply(a,arguments)};var d=Array.prototype.slice.call(arguments,1);return function(){var e=d.slice(0);e.push.apply(e,arguments);return c.apply(a,e)}});a.a.g=new function(){var b=0,c=\"__ko__\"+(new Date).getTime(),d={},e,f;a.a.W?(e=function(a,e){var f=a[c];if(!f||\"null\"===f||!d[f]){if(!e)return p;f=a[c]=\"ko\"+b++;d[f]=\n"
 + "{}}return d[f]},f=function(a){var b=a[c];return b?(delete d[b],a[c]=null,!0):!1}):(e=function(a,b){var d=a[c];!d&&b&&(d=a[c]={});return d},f=function(a){return a[c]?(delete a[c],!0):!1});return{get:function(a,b){var c=e(a,!1);return c&&c[b]},set:function(a,b,c){(a=e(a,c!==p))&&(a[b]=c)},Tb:function(a,b,c){a=e(a,!0);return a[b]||(a[b]=c)},clear:f,Z:function(){return b++ +c}}};a.b(\"utils.domData\",a.a.g);a.b(\"utils.domData.clear\",a.a.g.clear);a.a.I=new function(){function b(b,c){var d=a.a.g.get(b,e);\n"
 + "d===p&&c&&(d=[],a.a.g.set(b,e,d));return d}function c(c){var e=b(c,!1);if(e)for(var e=e.slice(0),f=0;f<e.length;f++)e[f](c);a.a.g.clear(c);a.a.I.cleanExternalData(c);g[c.nodeType]&&d(c.childNodes,!0)}function d(b,d){for(var e=[],k,f=0;f<b.length;f++)if(!d||8===b[f].nodeType)if(c(e[e.length]=k=b[f]),b[f]!==k)for(;f--&&-1==a.a.A(e,b[f]););}var e=a.a.g.Z(),f={1:!0,8:!0,9:!0},g={1:!0,9:!0};return{za:function(a,c){if(\"function\"!=typeof c)throw Error(\"Callback must be a function\");b(a,!0).push(c)},xb:function(c,\n"
 + "d){var f=b(c,!1);f&&(a.a.hb(f,d),0==f.length&&a.a.g.set(c,e,p))},na:function(a){f[a.nodeType]&&(c(a),g[a.nodeType]&&d(a.getElementsByTagName(\"*\")));return a},removeNode:function(b){a.na(b);b.parentNode&&b.parentNode.removeChild(b)},cleanExternalData:function(a){v&&\"function\"==typeof v.cleanData&&v.cleanData([a])}}};a.na=a.a.I.na;a.removeNode=a.a.I.removeNode;a.b(\"cleanNode\",a.na);a.b(\"removeNode\",a.removeNode);a.b(\"utils.domNodeDisposal\",a.a.I);a.b(\"utils.domNodeDisposal.addDisposeCallback\",a.a.I.za);\n"
 + "a.b(\"utils.domNodeDisposal.removeDisposeCallback\",a.a.I.xb);(function(){var b=[0,\"\",\"\"],c=[1,\"<table>\",\"</table>\"],d=[3,\"<table><tbody><tr>\",\"</tr></tbody></table>\"],e=[1,\"<select multiple='multiple'>\",\"</select>\"],f={thead:c,tbody:c,tfoot:c,tr:[2,\"<table><tbody>\",\"</tbody></table>\"],td:d,th:d,option:e,optgroup:e},g=8>=a.a.W;a.a.ta=function(c,d){var e;if(v)if(v.parseHTML)e=v.parseHTML(c,d)||[];else{if((e=v.clean([c],d))&&e[0]){for(var k=e[0];k.parentNode&&11!==k.parentNode.nodeType;)k=k.parentNode;\n"
 + "k.parentNode&&k.parentNode.removeChild(k)}}else{(e=d)||(e=w);var k=e.parentWindow||e.defaultView||z,q=a.a.Cb(c).toLowerCase(),n=e.createElement(\"div\"),r;r=(q=q.match(/^(?:\\x3c!--.*?--\\x3e\\s*?)*?<([a-z]+)[\\s>]/))&&f[q[1]]||b;q=r[0];r=\"ignored<div>\"+r[1]+c+r[2]+\"</div>\";\"function\"==typeof k.innerShiv?n.appendChild(k.innerShiv(r)):(g&&e.body.appendChild(n),n.innerHTML=r,g&&n.parentNode.removeChild(n));for(;q--;)n=n.lastChild;e=a.a.la(n.lastChild.childNodes)}return e};a.a.Ld=function(b,c){var d=a.a.ta(b,\n"
 + "c);return d.length&&d[0].parentElement||a.a.Xb(d)};a.a.dc=function(b,c){a.a.Sb(b);c=a.a.c(c);if(null!==c&&c!==p)if(\"string\"!=typeof c&&(c=c.toString()),v)v(b).html(c);else for(var d=a.a.ta(c,b.ownerDocument),e=0;e<d.length;e++)b.appendChild(d[e])}})();a.b(\"utils.parseHtmlFragment\",a.a.ta);a.b(\"utils.setHtml\",a.a.dc);a.aa=function(){function b(c,e){if(c)if(8==c.nodeType){var f=a.aa.Tc(c.nodeValue);null!=f&&e.push({sd:c,Jd:f})}else if(1==c.nodeType)for(var f=0,g=c.childNodes,h=g.length;f<h;f++)b(g[f],\n"
 + "e)}var c={};return{Wb:function(a){if(\"function\"!=typeof a)throw Error(\"You can only pass a function to ko.memoization.memoize()\");var b=(4294967296*(1+Math.random())|0).toString(16).substring(1)+(4294967296*(1+Math.random())|0).toString(16).substring(1);c[b]=a;return\"\\x3c!--[ko_memo:\"+b+\"]--\\x3e\"},ad:function(a,b){var f=c[a];if(f===p)throw Error(\"Couldn't find any memo with ID \"+a+\". Perhaps it's already been unmemoized.\");try{return f.apply(null,b||[]),!0}finally{delete c[a]}},bd:function(c,e){var f=\n"
 + "[];b(c,f);for(var g=0,h=f.length;g<h;g++){var m=f[g].sd,l=[m];e&&a.a.gb(l,e);a.aa.ad(f[g].Jd,l);m.nodeValue=\"\";m.parentNode&&m.parentNode.removeChild(m)}},Tc:function(a){return(a=a.match(/^\\[ko_memo\\:(.*?)\\]$/))?a[1]:null}}}();a.b(\"memoization\",a.aa);a.b(\"memoization.memoize\",a.aa.Wb);a.b(\"memoization.unmemoize\",a.aa.ad);a.b(\"memoization.parseMemoText\",a.aa.Tc);a.b(\"memoization.unmemoizeDomNodeAndDescendants\",a.aa.bd);a.ma=function(){function b(){if(f)for(var b=f,c=0,d;h<f;)if(d=e[h++]){if(h>b){if(5E3<=\n"
 + "++c){h=f;a.a.Fc(Error(\"'Too much recursion' after processing \"+c+\" task groups.\"));break}b=f}try{d()}catch(g){a.a.Fc(g)}}}function c(){b();h=f=e.length=0}var d,e=[],f=0,g=1,h=0;z.MutationObserver?d=function(a){var b=w.createElement(\"div\");(new MutationObserver(a)).observe(b,{attributes:!0});return function(){b.classList.toggle(\"foo\")}}(c):d=w&&\"onreadystatechange\"in w.createElement(\"script\")?function(a){var b=w.createElement(\"script\");b.onreadystatechange=function(){b.onreadystatechange=null;w.documentElement.removeChild(b);\n"
 + "b=null;a()};w.documentElement.appendChild(b)}:function(a){setTimeout(a,0)};return{scheduler:d,yb:function(b){f||a.ma.scheduler(c);e[f++]=b;return g++},cancel:function(a){a=a-(g-f);a>=h&&a<f&&(e[a]=null)},resetForTesting:function(){var a=f-h;h=f=e.length=0;return a},Rd:b}}();a.b(\"tasks\",a.ma);a.b(\"tasks.schedule\",a.ma.yb);a.b(\"tasks.runEarly\",a.ma.Rd);a.Ta={throttle:function(b,c){b.throttleEvaluation=c;var d=null;return a.$({read:b,write:function(e){clearTimeout(d);d=a.a.setTimeout(function(){b(e)},\n"
 + "c)}})},rateLimit:function(a,c){var d,e,f;\"number\"==typeof c?d=c:(d=c.timeout,e=c.method);a.Hb=!1;f=\"function\"==typeof e?e:\"notifyWhenChangesStop\"==e?Y:X;a.tb(function(a){return f(a,d,c)})},deferred:function(b,c){if(!0!==c)throw Error(\"The 'deferred' extender only accepts the value 'true', because it is not supported to turn deferral off once enabled.\");b.Hb||(b.Hb=!0,b.tb(function(c){var e,f=!1;return function(){if(!f){a.ma.cancel(e);e=a.ma.yb(c);try{f=!0,b.notifySubscribers(p,\"dirty\")}finally{f=\n"
 + "!1}}}}))},notify:function(a,c){a.equalityComparer=\"always\"==c?null:K}};var W={undefined:1,\"boolean\":1,number:1,string:1};a.b(\"extenders\",a.Ta);a.gc=function(b,c,d){this.da=b;this.kc=c;this.lc=d;this.Ib=!1;this.ab=this.Jb=null;a.J(this,\"dispose\",this.s);a.J(this,\"disposeWhenNodeIsRemoved\",this.l)};a.gc.prototype.s=function(){this.Ib||(this.ab&&a.a.I.xb(this.Jb,this.ab),this.Ib=!0,this.lc(),this.da=this.kc=this.lc=this.Jb=this.ab=null)};a.gc.prototype.l=function(b){this.Jb=b;a.a.I.za(b,this.ab=this.s.bind(this))};\n"
 + "a.R=function(){a.a.zb(this,D);D.ob(this)};var D={ob:function(a){a.S={change:[]};a.rc=1},subscribe:function(b,c,d){var e=this;d=d||\"change\";var f=new a.gc(e,c?b.bind(c):b,function(){a.a.hb(e.S[d],f);e.cb&&e.cb(d)});e.Qa&&e.Qa(d);e.S[d]||(e.S[d]=[]);e.S[d].push(f);return f},notifySubscribers:function(b,c){c=c||\"change\";\"change\"===c&&this.Gb();if(this.Wa(c)){var d=\"change\"===c&&this.dd||this.S[c].slice(0);try{a.v.wc();for(var e=0,f;f=d[e];++e)f.Ib||f.kc(b)}finally{a.v.end()}}},mb:function(){return this.rc},\n"
 + "Cd:function(a){return this.mb()!==a},Gb:function(){++this.rc},tb:function(b){var c=this,d=a.N(c),e,f,g,h,m;c.bb||(c.bb=c.notifySubscribers,c.notifySubscribers=Z);var l=b(function(){c.Ka=!1;d&&h===c&&(h=c.mc?c.mc():c());var a=f||m&&c.qb(g,h);m=f=e=!1;a&&c.bb(g=h)});c.pc=function(a,b){b&&c.Ka||(m=!b);c.dd=c.S.change.slice(0);c.Ka=e=!0;h=a;l()};c.oc=function(a){e||(g=a,c.bb(a,\"beforeChange\"))};c.qc=function(){m=!0};c.fd=function(){c.qb(g,c.w(!0))&&(f=!0)}},Wa:function(a){return this.S[a]&&this.S[a].length},\n"
 + "Ad:function(b){if(b)return this.S[b]&&this.S[b].length||0;var c=0;a.a.O(this.S,function(a,b){\"dirty\"!==a&&(c+=b.length)});return c},qb:function(a,c){return!this.equalityComparer||!this.equalityComparer(a,c)},toString:function(){return\"[object Object]\"},extend:function(b){var c=this;b&&a.a.O(b,function(b,e){var f=a.Ta[b];\"function\"==typeof f&&(c=f(c,e)||c)});return c}};a.J(D,\"init\",D.ob);a.J(D,\"subscribe\",D.subscribe);a.J(D,\"extend\",D.extend);a.J(D,\"getSubscriptionsCount\",D.Ad);a.a.Ba&&a.a.setPrototypeOf(D,\n"
 + "Function.prototype);a.R.fn=D;a.Pc=function(a){return null!=a&&\"function\"==typeof a.subscribe&&\"function\"==typeof a.notifySubscribers};a.b(\"subscribable\",a.R);a.b(\"isSubscribable\",a.Pc);a.U=a.v=function(){function b(a){d.push(e);e=a}function c(){e=d.pop()}var d=[],e,f=0;return{wc:b,end:c,ac:function(b){if(e){if(!a.Pc(b))throw Error(\"Only subscribable things can act as dependencies\");e.nd.call(e.od,b,b.ed||(b.ed=++f))}},K:function(a,d,e){try{return b(),a.apply(d,e||[])}finally{c()}},pa:function(){if(e)return e.o.pa()},\n"
 + "Va:function(){if(e)return e.o.Va()},rb:function(){if(e)return e.rb},o:function(){if(e)return e.o}}}();a.b(\"computedContext\",a.U);a.b(\"computedContext.getDependenciesCount\",a.U.pa);a.b(\"computedContext.getDependencies\",a.U.Va);a.b(\"computedContext.isInitial\",a.U.rb);a.b(\"computedContext.registerDependency\",a.U.ac);a.b(\"ignoreDependencies\",a.Wd=a.v.K);var I=a.a.Da(\"_latestValue\");a.sa=function(b){function c(){if(0<arguments.length)return c.qb(c[I],arguments[0])&&(c.xa(),c[I]=arguments[0],c.wa()),this;\n"
 + "a.v.ac(c);return c[I]}c[I]=b;a.a.Ba||a.a.extend(c,a.R.fn);a.R.fn.ob(c);a.a.zb(c,F);a.options.deferUpdates&&a.Ta.deferred(c,!0);return c};var F={equalityComparer:K,w:function(){return this[I]},wa:function(){this.notifySubscribers(this[I],\"spectate\");this.notifySubscribers(this[I])},xa:function(){this.notifySubscribers(this[I],\"beforeChange\")}};a.a.Ba&&a.a.setPrototypeOf(F,a.R.fn);var G=a.sa.Na=\"__ko_proto__\";F[G]=a.sa;a.N=function(b){if((b=\"function\"==typeof b&&b[G])&&b!==F[G]&&b!==a.o.fn[G])throw Error(\"Invalid object that looks like an observable; possibly from another Knockout instance\");\n"
 + "return!!b};a.Ya=function(b){return\"function\"==typeof b&&(b[G]===F[G]||b[G]===a.o.fn[G]&&b.Mc)};a.b(\"observable\",a.sa);a.b(\"isObservable\",a.N);a.b(\"isWriteableObservable\",a.Ya);a.b(\"isWritableObservable\",a.Ya);a.b(\"observable.fn\",F);a.J(F,\"peek\",F.w);a.J(F,\"valueHasMutated\",F.wa);a.J(F,\"valueWillMutate\",F.xa);a.Ia=function(b){b=b||[];if(\"object\"!=typeof b||!(\"length\"in b))throw Error(\"The argument passed when initializing an observable array must be an array, or null, or undefined.\");b=a.sa(b);a.a.zb(b,\n"
 + "a.Ia.fn);return b.extend({trackArrayChanges:!0})};a.Ia.fn={remove:function(b){for(var c=this.w(),d=[],e=\"function\"!=typeof b||a.N(b)?function(a){return a===b}:b,f=0;f<c.length;f++){var g=c[f];if(e(g)){0===d.length&&this.xa();if(c[f]!==g)throw Error(\"Array modified during remove; cannot remove item\");d.push(g);c.splice(f,1);f--}}d.length&&this.wa();return d},removeAll:function(b){if(b===p){var c=this.w(),d=c.slice(0);this.xa();c.splice(0,c.length);this.wa();return d}return b?this.remove(function(c){return 0<=\n"
 + "a.a.A(b,c)}):[]},destroy:function(b){var c=this.w(),d=\"function\"!=typeof b||a.N(b)?function(a){return a===b}:b;this.xa();for(var e=c.length-1;0<=e;e--){var f=c[e];d(f)&&(f._destroy=!0)}this.wa()},destroyAll:function(b){return b===p?this.destroy(function(){return!0}):b?this.destroy(function(c){return 0<=a.a.A(b,c)}):[]},indexOf:function(b){var c=this();return a.a.A(c,b)},replace:function(a,c){var d=this.indexOf(a);0<=d&&(this.xa(),this.w()[d]=c,this.wa())},sorted:function(a){var c=this().slice(0);\n"
 + "return a?c.sort(a):c.sort()},reversed:function(){return this().slice(0).reverse()}};a.a.Ba&&a.a.setPrototypeOf(a.Ia.fn,a.sa.fn);a.a.C(\"pop push reverse shift sort splice unshift\".split(\" \"),function(b){a.Ia.fn[b]=function(){var a=this.w();this.xa();this.yc(a,b,arguments);var d=a[b].apply(a,arguments);this.wa();return d===a?this:d}});a.a.C([\"slice\"],function(b){a.Ia.fn[b]=function(){var a=this();return a[b].apply(a,arguments)}});a.Oc=function(b){return a.N(b)&&\"function\"==typeof b.remove&&\"function\"==\n"
 + "typeof b.push};a.b(\"observableArray\",a.Ia);a.b(\"isObservableArray\",a.Oc);a.Ta.trackArrayChanges=function(b,c){function d(){function c(){if(h){var d=[].concat(b.w()||[]);if(b.Wa(\"arrayChange\")){var e;if(!f||1<h)f=a.a.Ob(m,d,b.Nb);e=f}m=d;f=null;h=0;e&&e.length&&b.notifySubscribers(e,\"arrayChange\")}}e?c():(e=!0,l=b.notifySubscribers,b.notifySubscribers=function(a,b){b&&\"change\"!==b||++h;return l.apply(this,arguments)},m=[].concat(b.w()||[]),f=null,g=b.subscribe(c))}b.Nb={};c&&\"object\"==typeof c&&a.a.extend(b.Nb,\n"
 + "c);b.Nb.sparse=!0;if(!b.yc){var e=!1,f=null,g,h=0,m,l,k=b.Qa,q=b.cb;b.Qa=function(a){k&&k.call(b,a);\"arrayChange\"===a&&d()};b.cb=function(a){q&&q.call(b,a);\"arrayChange\"!==a||b.Wa(\"arrayChange\")||(l&&(b.notifySubscribers=l,l=p),g&&g.s(),g=null,e=!1,m=p)};b.yc=function(b,c,d){function k(a,b,c){return l[l.length]={status:a,value:b,index:c}}if(e&&!h){var l=[],g=b.length,q=d.length,m=0;switch(c){case \"push\":m=g;case \"unshift\":for(c=0;c<q;c++)k(\"added\",d[c],m+c);break;case \"pop\":m=g-1;case \"shift\":g&&\n"
 + "k(\"deleted\",b[m],m);break;case \"splice\":c=Math.min(Math.max(0,0>d[0]?g+d[0]:d[0]),g);for(var g=1===q?g:Math.min(c+(d[1]||0),g),q=c+q-2,m=Math.max(g,q),U=[],L=[],p=2;c<m;++c,++p)c<g&&L.push(k(\"deleted\",b[c],c)),c<q&&U.push(k(\"added\",d[p],c));a.a.Jc(L,U);break;default:return}f=l}}}};var t=a.a.Da(\"_state\");a.o=a.$=function(b,c,d){function e(){if(0<arguments.length){if(\"function\"===typeof f)f.apply(g.lb,arguments);else throw Error(\"Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.\");\n"
 + "return this}g.qa||a.v.ac(e);(g.ka||g.G&&e.Xa())&&e.ha();return g.X}\"object\"===typeof b?d=b:(d=d||{},b&&(d.read=b));if(\"function\"!=typeof d.read)throw Error(\"Pass a function that returns the value of the ko.computed\");var f=d.write,g={X:p,ra:!0,ka:!0,pb:!1,hc:!1,qa:!1,vb:!1,G:!1,Vc:d.read,lb:c||d.owner,l:d.disposeWhenNodeIsRemoved||d.l||null,Sa:d.disposeWhen||d.Sa,Qb:null,F:{},V:0,Hc:null};e[t]=g;e.Mc=\"function\"===typeof f;a.a.Ba||a.a.extend(e,a.R.fn);a.R.fn.ob(e);a.a.zb(e,C);d.pure?(g.vb=!0,g.G=!0,\n"
 + "a.a.extend(e,da)):d.deferEvaluation&&a.a.extend(e,ea);a.options.deferUpdates&&a.Ta.deferred(e,!0);g.l&&(g.hc=!0,g.l.nodeType||(g.l=null));g.G||d.deferEvaluation||e.ha();g.l&&e.ja()&&a.a.I.za(g.l,g.Qb=function(){e.s()});return e};var C={equalityComparer:K,pa:function(){return this[t].V},Va:function(){var b=[];a.a.O(this[t].F,function(a,d){b[d.La]=d.da});return b},Ub:function(b){if(!this[t].V)return!1;var c=this.Va();return-1!==a.a.A(c,b)?!0:!!a.a.Lb(c,function(a){return a.Ub&&a.Ub(b)})},tc:function(a,\n"
 + "c,d){if(this[t].vb&&c===this)throw Error(\"A 'pure' computed must not be called recursively\");this[t].F[a]=d;d.La=this[t].V++;d.Ma=c.mb()},Xa:function(){var a,c,d=this[t].F;for(a in d)if(Object.prototype.hasOwnProperty.call(d,a)&&(c=d[a],this.Ja&&c.da.Ka||c.da.Cd(c.Ma)))return!0},Id:function(){this.Ja&&!this[t].pb&&this.Ja(!1)},ja:function(){var a=this[t];return a.ka||0<a.V},Qd:function(){this.Ka?this[t].ka&&(this[t].ra=!0):this.Gc()},Zc:function(a){if(a.Hb){var c=a.subscribe(this.Id,this,\"dirty\"),\n"
 + "d=a.subscribe(this.Qd,this);return{da:a,s:function(){c.s();d.s()}}}return a.subscribe(this.Gc,this)},Gc:function(){var b=this,c=b.throttleEvaluation;c&&0<=c?(clearTimeout(this[t].Hc),this[t].Hc=a.a.setTimeout(function(){b.ha(!0)},c)):b.Ja?b.Ja(!0):b.ha(!0)},ha:function(b){var c=this[t],d=c.Sa,e=!1;if(!c.pb&&!c.qa){if(c.l&&!a.a.Rb(c.l)||d&&d()){if(!c.hc){this.s();return}}else c.hc=!1;c.pb=!0;try{e=this.yd(b)}finally{c.pb=!1}return e}},yd:function(b){var c=this[t],d=!1,e=c.vb?p:!c.V,d={pd:this,kb:c.F,\n"
 + "Pb:c.V};a.v.wc({od:d,nd:ba,o:this,rb:e});c.F={};c.V=0;var f=this.xd(c,d);c.V?d=this.qb(c.X,f):(this.s(),d=!0);d&&(c.G?this.Gb():this.notifySubscribers(c.X,\"beforeChange\"),c.X=f,this.notifySubscribers(c.X,\"spectate\"),!c.G&&b&&this.notifySubscribers(c.X),this.qc&&this.qc());e&&this.notifySubscribers(c.X,\"awake\");return d},xd:function(b,c){try{var d=b.Vc;return b.lb?d.call(b.lb):d()}finally{a.v.end(),c.Pb&&!b.G&&a.a.O(c.kb,aa),b.ra=b.ka=!1}},w:function(a){var c=this[t];(c.ka&&(a||!c.V)||c.G&&this.Xa())&&\n"
 + "this.ha();return c.X},tb:function(b){a.R.fn.tb.call(this,b);this.mc=function(){this[t].G||(this[t].ra?this.ha():this[t].ka=!1);return this[t].X};this.Ja=function(a){this.oc(this[t].X);this[t].ka=!0;a&&(this[t].ra=!0);this.pc(this,!a)}},s:function(){var b=this[t];!b.G&&b.F&&a.a.O(b.F,function(a,b){b.s&&b.s()});b.l&&b.Qb&&a.a.I.xb(b.l,b.Qb);b.F=p;b.V=0;b.qa=!0;b.ra=!1;b.ka=!1;b.G=!1;b.l=p;b.Sa=p;b.Vc=p;this.Mc||(b.lb=p)}},da={Qa:function(b){var c=this,d=c[t];if(!d.qa&&d.G&&\"change\"==b){d.G=!1;if(d.ra||\n"
 + "c.Xa())d.F=null,d.V=0,c.ha()&&c.Gb();else{var e=[];a.a.O(d.F,function(a,b){e[b.La]=a});a.a.C(e,function(a,b){var e=d.F[a],m=c.Zc(e.da);m.La=b;m.Ma=e.Ma;d.F[a]=m});c.Xa()&&c.ha()&&c.Gb()}d.qa||c.notifySubscribers(d.X,\"awake\")}},cb:function(b){var c=this[t];c.qa||\"change\"!=b||this.Wa(\"change\")||(a.a.O(c.F,function(a,b){b.s&&(c.F[a]={da:b.da,La:b.La,Ma:b.Ma},b.s())}),c.G=!0,this.notifySubscribers(p,\"asleep\"))},mb:function(){var b=this[t];b.G&&(b.ra||this.Xa())&&this.ha();return a.R.fn.mb.call(this)}},\n"
 + "ea={Qa:function(a){\"change\"!=a&&\"beforeChange\"!=a||this.w()}};a.a.Ba&&a.a.setPrototypeOf(C,a.R.fn);var N=a.sa.Na;C[N]=a.o;a.Nc=function(a){return\"function\"==typeof a&&a[N]===C[N]};a.Ed=function(b){return a.Nc(b)&&b[t]&&b[t].vb};a.b(\"computed\",a.o);a.b(\"dependentObservable\",a.o);a.b(\"isComputed\",a.Nc);a.b(\"isPureComputed\",a.Ed);a.b(\"computed.fn\",C);a.J(C,\"peek\",C.w);a.J(C,\"dispose\",C.s);a.J(C,\"isActive\",C.ja);a.J(C,\"getDependenciesCount\",C.pa);a.J(C,\"getDependencies\",C.Va);a.wb=function(b,c){if(\"function\"===\n"
 + "typeof b)return a.o(b,c,{pure:!0});b=a.a.extend({},b);b.pure=!0;return a.o(b,c)};a.b(\"pureComputed\",a.wb);(function(){function b(a,f,g){g=g||new d;a=f(a);if(\"object\"!=typeof a||null===a||a===p||a instanceof RegExp||a instanceof Date||a instanceof String||a instanceof Number||a instanceof Boolean)return a;var h=a instanceof Array?[]:{};g.save(a,h);c(a,function(c){var d=f(a[c]);switch(typeof d){case \"boolean\":case \"number\":case \"string\":case \"function\":h[c]=d;break;case \"object\":case \"undefined\":var k=\n"
 + "g.get(d);h[c]=k!==p?k:b(d,f,g)}});return h}function c(a,b){if(a instanceof Array){for(var c=0;c<a.length;c++)b(c);\"function\"==typeof a.toJSON&&b(\"toJSON\")}else for(c in a)b(c)}function d(){this.keys=[];this.values=[]}a.$c=function(c){if(0==arguments.length)throw Error(\"When calling ko.toJS, pass the object you want to convert.\");return b(c,function(b){for(var c=0;a.N(b)&&10>c;c++)b=b();return b})};a.toJSON=function(b,c,d){b=a.$c(b);return a.a.fc(b,c,d)};d.prototype={constructor:d,save:function(b,\n"
 + "c){var d=a.a.A(this.keys,b);0<=d?this.values[d]=c:(this.keys.push(b),this.values.push(c))},get:function(b){b=a.a.A(this.keys,b);return 0<=b?this.values[b]:p}}})();a.b(\"toJS\",a.$c);a.b(\"toJSON\",a.toJSON);a.Vd=function(b,c,d){function e(c){var e=a.wb(b,d).extend({Ga:\"always\"}),h=e.subscribe(function(a){a&&(h.s(),c(a))});e.notifySubscribers(e.w());return h}return\"function\"!==typeof Promise||c?e(c.bind(d)):new Promise(e)};a.b(\"when\",a.Vd);(function(){a.u={L:function(b){switch(a.a.P(b)){case \"option\":return!0===\n"
 + "b.__ko__hasDomDataOptionValue__?a.a.g.get(b,a.f.options.Yb):7>=a.a.W?b.getAttributeNode(\"value\")&&b.getAttributeNode(\"value\").specified?b.value:b.text:b.value;case \"select\":return 0<=b.selectedIndex?a.u.L(b.options[b.selectedIndex]):p;default:return b.value}},ya:function(b,c,d){switch(a.a.P(b)){case \"option\":\"string\"===typeof c?(a.a.g.set(b,a.f.options.Yb,p),\"__ko__hasDomDataOptionValue__\"in b&&delete b.__ko__hasDomDataOptionValue__,b.value=c):(a.a.g.set(b,a.f.options.Yb,c),b.__ko__hasDomDataOptionValue__=\n"
 + "!0,b.value=\"number\"===typeof c?c:\"\");break;case \"select\":if(\"\"===c||null===c)c=p;for(var e=-1,f=0,g=b.options.length,h;f<g;++f)if(h=a.u.L(b.options[f]),h==c||\"\"===h&&c===p){e=f;break}if(d||0<=e||c===p&&1<b.size)b.selectedIndex=e,6===a.a.W&&a.a.setTimeout(function(){b.selectedIndex=e},0);break;default:if(null===c||c===p)c=\"\";b.value=c}}}})();a.b(\"selectExtensions\",a.u);a.b(\"selectExtensions.readValue\",a.u.L);a.b(\"selectExtensions.writeValue\",a.u.ya);a.m=function(){function b(b){b=a.a.Cb(b);123===b.charCodeAt(0)&&\n"
 + "(b=b.slice(1,-1));b+=\"\\n,\";var c=[],d=b.match(e),q,n=[],h=0;if(1<d.length){for(var y=0,A;A=d[y];++y){var u=A.charCodeAt(0);if(44===u){if(0>=h){c.push(q&&n.length?{key:q,value:n.join(\"\")}:{unknown:q||n.join(\"\")});q=h=0;n=[];continue}}else if(58===u){if(!h&&!q&&1===n.length){q=n.pop();continue}}else if(47===u&&1<A.length&&(47===A.charCodeAt(1)||42===A.charCodeAt(1)))continue;else 47===u&&y&&1<A.length?(u=d[y-1].match(f))&&!g[u[0]]&&(b=b.substr(b.indexOf(A)+1),d=b.match(e),y=-1,A=\"/\"):40===u||123===\n"
 + "u||91===u?++h:41===u||125===u||93===u?--h:q||n.length||34!==u&&39!==u||(A=A.slice(1,-1));n.push(A)}if(0<h)throw Error(\"Unbalanced parentheses, braces, or brackets\");}return c}var c=[\"true\",\"false\",\"null\",\"undefined\"],d=/^(?:[$_a-z][$\\w]*|(.+)(\\.\\s*[$_a-z][$\\w]*|\\[.+\\]))$/i,e=RegExp(\"\\\"(?:\\\\\\\\.|[^\\\"])*\\\"|'(?:\\\\\\\\.|[^'])*'|`(?:\\\\\\\\.|[^`])*`|/\\\\*(?:[^*]|\\\\*+[^*/])*\\\\*+/|//.*\\n|/(?:\\\\\\\\.|[^/])+/w*|[^\\\\s:,/][^,\\\"'`{}()/:[\\\\]]*[^\\\\s,\\\"'`{}()/:[\\\\]]|[^\\\\s]\",\"g\"),f=/[\\])\"'A-Za-z0-9_$]+$/,g={\"in\":1,\"return\":1,\n"
 + "\"typeof\":1},h={};return{Ra:[],va:h,Zb:b,ub:function(e,f){function k(b,e){var f;if(!y){var l=a.getBindingHandler(b);if(l&&l.preprocess&&!(e=l.preprocess(e,b,k)))return;if(l=h[b])f=e,0<=a.a.A(c,f)?f=!1:(l=f.match(d),f=null===l?!1:l[1]?\"Object(\"+l[1]+\")\"+l[2]:f),l=f;l&&n.push(\"'\"+(\"string\"==typeof h[b]?h[b]:b)+\"':function(_z){\"+f+\"=_z}\")}g&&(e=\"function(){return \"+e+\" }\");q.push(\"'\"+b+\"':\"+e)}f=f||{};var q=[],n=[],g=f.valueAccessors,y=f.bindingParams,A=\"string\"===typeof e?b(e):e;a.a.C(A,function(a){k(a.key||\n"
 + "a.unknown,a.value)});n.length&&k(\"_ko_property_writers\",\"{\"+n.join(\",\")+\" }\");return q.join(\",\")},Hd:function(a,b){for(var c=0;c<a.length;c++)if(a[c].key==b)return!0;return!1},$a:function(b,c,d,e,f){if(b&&a.N(b))!a.Ya(b)||f&&b.w()===e||b(e);else if((b=c.get(\"_ko_property_writers\"))&&b[d])b[d](e)}}}();a.b(\"expressionRewriting\",a.m);a.b(\"expressionRewriting.bindingRewriteValidators\",a.m.Ra);a.b(\"expressionRewriting.parseObjectLiteral\",a.m.Zb);a.b(\"expressionRewriting.preProcessBindings\",a.m.ub);a.b(\"expressionRewriting._twoWayBindings\",\n"
 + "a.m.va);a.b(\"jsonExpressionRewriting\",a.m);a.b(\"jsonExpressionRewriting.insertPropertyAccessorsIntoJson\",a.m.ub);(function(){function b(a){return 8==a.nodeType&&g.test(f?a.text:a.nodeValue)}function c(a){return 8==a.nodeType&&h.test(f?a.text:a.nodeValue)}function d(d,e){for(var f=d,g=1,h=[];f=f.nextSibling;){if(c(f)&&(a.a.g.set(f,l,!0),g--,0===g))return h;h.push(f);b(f)&&g++}if(!e)throw Error(\"Cannot find closing comment tag to match: \"+d.nodeValue);return null}function e(a,b){var c=d(a,b);return c?\n"
 + "0<c.length?c[c.length-1].nextSibling:a.nextSibling:null}var f=w&&\"\\x3c!--test--\\x3e\"===w.createComment(\"test\").text,g=f?/^\\x3c!--\\s*ko(?:\\s+([\\s\\S]+))?\\s*--\\x3e$/:/^\\s*ko(?:\\s+([\\s\\S]+))?\\s*$/,h=f?/^\\x3c!--\\s*\\/ko\\s*--\\x3e$/:/^\\s*\\/ko\\s*$/,m={ul:!0,ol:!0},l=\"__ko_matchedEndComment__\";a.h={ea:{},childNodes:function(a){return b(a)?d(a):a.childNodes},Ea:function(c){if(b(c)){c=a.h.childNodes(c);for(var d=0,e=c.length;d<e;d++)a.removeNode(c[d])}else a.a.Sb(c)},ua:function(c,d){if(b(c)){a.h.Ea(c);for(var e=\n"
 + "c.nextSibling,f=0,l=d.length;f<l;f++)e.parentNode.insertBefore(d[f],e)}else a.a.ua(c,d)},Uc:function(a,c){b(a)?a.parentNode.insertBefore(c,a.nextSibling):a.firstChild?a.insertBefore(c,a.firstChild):a.appendChild(c)},Vb:function(c,d,e){e?b(c)?c.parentNode.insertBefore(d,e.nextSibling):e.nextSibling?c.insertBefore(d,e.nextSibling):c.appendChild(d):a.h.Uc(c,d)},firstChild:function(a){if(b(a))return!a.nextSibling||c(a.nextSibling)?null:a.nextSibling;if(a.firstChild&&c(a.firstChild))throw Error(\"Found invalid end comment, as the first child of \"+\n"
 + "a);return a.firstChild},nextSibling:function(d){b(d)&&(d=e(d));if(d.nextSibling&&c(d.nextSibling)){var f=d.nextSibling;if(c(f)&&!a.a.g.get(f,l))throw Error(\"Found end comment without a matching opening comment, as child of \"+d);return null}return d.nextSibling},Bd:b,Ud:function(a){return(a=(f?a.text:a.nodeValue).match(g))?a[1]:null},Rc:function(d){if(m[a.a.P(d)]){var f=d.firstChild;if(f){do if(1===f.nodeType){var l;l=f.firstChild;var g=null;if(l){do if(g)g.push(l);else if(b(l)){var h=e(l,!0);h?l=\n"
 + "h:g=[l]}else c(l)&&(g=[l]);while(l=l.nextSibling)}if(l=g)for(g=f.nextSibling,h=0;h<l.length;h++)g?d.insertBefore(l[h],g):d.appendChild(l[h])}while(f=f.nextSibling)}}}}})();a.b(\"virtualElements\",a.h);a.b(\"virtualElements.allowedBindings\",a.h.ea);a.b(\"virtualElements.emptyNode\",a.h.Ea);a.b(\"virtualElements.insertAfter\",a.h.Vb);a.b(\"virtualElements.prepend\",a.h.Uc);a.b(\"virtualElements.setDomNodeChildren\",a.h.ua);(function(){a.ga=function(){this.md={}};a.a.extend(a.ga.prototype,{nodeHasBindings:function(b){switch(b.nodeType){case 1:return null!=\n"
 + "b.getAttribute(\"data-bind\")||a.i.getComponentNameForNode(b);case 8:return a.h.Bd(b);default:return!1}},getBindings:function(b,c){var d=this.getBindingsString(b,c),d=d?this.parseBindingsString(d,c,b):null;return a.i.sc(d,b,c,!1)},getBindingAccessors:function(b,c){var d=this.getBindingsString(b,c),d=d?this.parseBindingsString(d,c,b,{valueAccessors:!0}):null;return a.i.sc(d,b,c,!0)},getBindingsString:function(b){switch(b.nodeType){case 1:return b.getAttribute(\"data-bind\");case 8:return a.h.Ud(b);default:return null}},\n"
 + "parseBindingsString:function(b,c,d,e){try{var f=this.md,g=b+(e&&e.valueAccessors||\"\"),h;if(!(h=f[g])){var m,l=\"with($context){with($data||{}){return{\"+a.m.ub(b,e)+\"}}}\";m=new Function(\"$context\",\"$element\",l);h=f[g]=m}return h(c,d)}catch(k){throw k.message=\"Unable to parse bindings.\\nBindings value: \"+b+\"\\nMessage: \"+k.message,k;}}});a.ga.instance=new a.ga})();a.b(\"bindingProvider\",a.ga);(function(){function b(b){var c=(b=a.a.g.get(b,B))&&b.M;c&&(b.M=null,c.Sc())}function c(c,d,e){this.node=c;this.xc=\n"
 + "d;this.ib=[];this.T=!1;d.M||a.a.I.za(c,b);e&&e.M&&(e.M.ib.push(c),this.Kb=e)}function d(a){return function(){return a}}function e(a){return a()}function f(b){return a.a.Ha(a.v.K(b),function(a,c){return function(){return b()[c]}})}function g(b,c,e){return\"function\"===typeof b?f(b.bind(null,c,e)):a.a.Ha(b,d)}function h(a,b){return f(this.getBindings.bind(this,a,b))}function m(b,c){var d=a.h.firstChild(c);if(d){var e,f=a.ga.instance,k=f.preprocessNode;if(k){for(;e=d;)d=a.h.nextSibling(e),k.call(f,e);\n"
 + "d=a.h.firstChild(c)}for(;e=d;)d=a.h.nextSibling(e),l(b,e)}a.j.Ga(c,a.j.T)}function l(b,c){var d=b,e=1===c.nodeType;e&&a.h.Rc(c);if(e||a.ga.instance.nodeHasBindings(c))d=q(c,null,b).bindingContextForDescendants;d&&!u[a.a.P(c)]&&m(d,c)}function k(b){var c=[],d={},e=[];a.a.O(b,function ca(f){if(!d[f]){var l=a.getBindingHandler(f);l&&(l.after&&(e.push(f),a.a.C(l.after,function(c){if(b[c]){if(-1!==a.a.A(e,c))throw Error(\"Cannot combine the following bindings, because they have a cyclic dependency: \"+e.join(\", \"));\n"
 + "ca(c)}}),e.length--),c.push({key:f,Lc:l}));d[f]=!0}});return c}function q(b,c,d){var f=a.a.g.Tb(b,B,{}),l=f.gd;if(!c){if(l)throw Error(\"You cannot apply bindings multiple times to the same element.\");f.gd=!0}l||(f.context=d);var g;if(c&&\"function\"!==typeof c)g=c;else{var q=a.ga.instance,n=q.getBindingAccessors||h,m=a.$(function(){if(g=c?c(d,b):n.call(q,b,d)){if(d[r])d[r]();if(d[A])d[A]()}return g},null,{l:b});g&&m.ja()||(m=null)}var y=d,u;if(g){var J=function(){return a.a.Ha(m?m():g,e)},t=m?function(a){return function(){return e(m()[a])}}:\n"
 + "function(a){return g[a]};J.get=function(a){return g[a]&&e(t(a))};J.has=function(a){return a in g};a.j.T in g&&a.j.subscribe(b,a.j.T,function(){var c=(0,g[a.j.T])();if(c){var d=a.h.childNodes(b);d.length&&c(d,a.Dc(d[0]))}});a.j.oa in g&&(y=a.j.Bb(b,d),a.j.subscribe(b,a.j.oa,function(){var c=(0,g[a.j.oa])();c&&a.h.firstChild(b)&&c(b)}));f=k(g);a.a.C(f,function(c){var d=c.Lc.init,e=c.Lc.update,f=c.key;if(8===b.nodeType&&!a.h.ea[f])throw Error(\"The binding '\"+f+\"' cannot be used with virtual elements\");\n"
 + "try{\"function\"==typeof d&&a.v.K(function(){var a=d(b,t(f),J,y.$data,y);if(a&&a.controlsDescendantBindings){if(u!==p)throw Error(\"Multiple bindings (\"+u+\" and \"+f+\") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.\");u=f}}),\"function\"==typeof e&&a.$(function(){e(b,t(f),J,y.$data,y)},null,{l:b})}catch(l){throw l.message='Unable to process binding \"'+f+\": \"+g[f]+'\"\\nMessage: '+l.message,l;}})}f=u===p;return{shouldBindDescendants:f,\n"
 + "bindingContextForDescendants:f&&y}}function n(b,c){return b&&b instanceof a.fa?b:new a.fa(b,p,p,c)}var r=a.a.Da(\"_subscribable\"),y=a.a.Da(\"_ancestorBindingInfo\"),A=a.a.Da(\"_dataDependency\");a.f={};var u={script:!0,textarea:!0,template:!0};a.getBindingHandler=function(b){return a.f[b]};var J={};a.fa=function(b,c,d,e,f){function l(){var b=q?h():h,f=a.a.c(b);c?(a.a.extend(k,c),y in c&&(k[y]=c[y])):(k.$parents=[],k.$root=f,k.ko=a);k[r]=n;g?f=k.$data:(k.$rawData=b,k.$data=f);d&&(k[d]=f);e&&e(k,c,f);if(c&&\n"
 + "c[r]&&!a.U.o().Ub(c[r]))c[r]();m&&(k[A]=m);return k.$data}var k=this,g=b===J,h=g?p:b,q=\"function\"==typeof h&&!a.N(h),n,m=f&&f.dataDependency;f&&f.exportDependencies?l():(n=a.wb(l),n.w(),n.ja()?n.equalityComparer=null:k[r]=p)};a.fa.prototype.createChildContext=function(b,c,d,e){!e&&c&&\"object\"==typeof c&&(e=c,c=e.as,d=e.extend);if(c&&e&&e.noChildContext){var f=\"function\"==typeof b&&!a.N(b);return new a.fa(J,this,null,function(a){d&&d(a);a[c]=f?b():b},e)}return new a.fa(b,this,c,function(a,b){a.$parentContext=\n"
 + "b;a.$parent=b.$data;a.$parents=(b.$parents||[]).slice(0);a.$parents.unshift(a.$parent);d&&d(a)},e)};a.fa.prototype.extend=function(b,c){return new a.fa(J,this,null,function(c){a.a.extend(c,\"function\"==typeof b?b(c):b)},c)};var B=a.a.g.Z();c.prototype.Sc=function(){this.Kb&&this.Kb.M&&this.Kb.M.rd(this.node)};c.prototype.rd=function(b){a.a.hb(this.ib,b);!this.ib.length&&this.T&&this.Bc()};c.prototype.Bc=function(){this.T=!0;this.xc.M&&!this.ib.length&&(this.xc.M=null,a.a.I.xb(this.node,b),a.j.Ga(this.node,\n"
 + "a.j.oa),this.Sc())};a.j={T:\"childrenComplete\",oa:\"descendantsComplete\",subscribe:function(b,c,d,e){b=a.a.g.Tb(b,B,{});b.Fa||(b.Fa=new a.R);return b.Fa.subscribe(d,e,c)},Ga:function(b,c){var d=a.a.g.get(b,B);if(d&&(d.Fa&&d.Fa.notifySubscribers(b,c),c==a.j.T))if(d.M)d.M.Bc();else if(d.M===p&&d.Fa&&d.Fa.Wa(a.j.oa))throw Error(\"descendantsComplete event not supported for bindings on this node\");},Bb:function(b,d){var e=a.a.g.Tb(b,B,{});e.M||(e.M=new c(b,e,d[y]));return d[y]==e?d:d.extend(function(a){a[y]=\n"
 + "e})}};a.Sd=function(b){return(b=a.a.g.get(b,B))&&b.context};a.eb=function(b,c,d){1===b.nodeType&&a.h.Rc(b);return q(b,c,n(d))};a.kd=function(b,c,d){d=n(d);return a.eb(b,g(c,d,b),d)};a.Pa=function(a,b){1!==b.nodeType&&8!==b.nodeType||m(n(a),b)};a.uc=function(a,b,c){!v&&z.jQuery&&(v=z.jQuery);if(2>arguments.length){if(b=w.body,!b)throw Error(\"ko.applyBindings: could not find document.body; has the document been loaded?\");}else if(!b||1!==b.nodeType&&8!==b.nodeType)throw Error(\"ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node\");\n"
 + "l(n(a,c),b)};a.Cc=function(b){return!b||1!==b.nodeType&&8!==b.nodeType?p:a.Sd(b)};a.Dc=function(b){return(b=a.Cc(b))?b.$data:p};a.b(\"bindingHandlers\",a.f);a.b(\"bindingEvent\",a.j);a.b(\"bindingEvent.subscribe\",a.j.subscribe);a.b(\"bindingEvent.startPossiblyAsyncContentBinding\",a.j.Bb);a.b(\"applyBindings\",a.uc);a.b(\"applyBindingsToDescendants\",a.Pa);a.b(\"applyBindingAccessorsToNode\",a.eb);a.b(\"applyBindingsToNode\",a.kd);a.b(\"contextFor\",a.Cc);a.b(\"dataFor\",a.Dc)})();(function(b){function c(c,e){var l=\n"
 + "Object.prototype.hasOwnProperty.call(f,c)?f[c]:b,k;l?l.subscribe(e):(l=f[c]=new a.R,l.subscribe(e),d(c,function(b,d){var e=!(!d||!d.synchronous);g[c]={definition:b,Fd:e};delete f[c];k||e?l.notifySubscribers(b):a.ma.yb(function(){l.notifySubscribers(b)})}),k=!0)}function d(a,b){e(\"getConfig\",[a],function(c){c?e(\"loadComponent\",[a,c],function(a){b(a,c)}):b(null,null)})}function e(c,d,f,k){k||(k=a.i.loaders.slice(0));var g=k.shift();if(g){var n=g[c];if(n){var r=!1;if(n.apply(g,d.concat(function(a){r?\n"
 + "f(null):null!==a?f(a):e(c,d,f,k)}))!==b&&(r=!0,!g.suppressLoaderExceptions))throw Error(\"Component loaders must supply values by invoking the callback, not by returning values synchronously.\");}else e(c,d,f,k)}else f(null)}var f={},g={};a.i={get:function(d,e){var f=Object.prototype.hasOwnProperty.call(g,d)?g[d]:b;f?f.Fd?a.v.K(function(){e(f.definition)}):a.ma.yb(function(){e(f.definition)}):c(d,e)},Ac:function(a){delete g[a]},nc:e};a.i.loaders=[];a.b(\"components\",a.i);a.b(\"components.get\",a.i.get);\n"
 + "a.b(\"components.clearCachedDefinition\",a.i.Ac)})();(function(){function b(b,c,d,e){function g(){0===--A&&e(h)}var h={},A=2,u=d.template;d=d.viewModel;u?f(c,u,function(c){a.i.nc(\"loadTemplate\",[b,c],function(a){h.template=a;g()})}):g();d?f(c,d,function(c){a.i.nc(\"loadViewModel\",[b,c],function(a){h[m]=a;g()})}):g()}function c(a,b,d){if(\"function\"===typeof b)d(function(a){return new b(a)});else if(\"function\"===typeof b[m])d(b[m]);else if(\"instance\"in b){var e=b.instance;d(function(){return e})}else\"viewModel\"in\n"
 + "b?c(a,b.viewModel,d):a(\"Unknown viewModel value: \"+b)}function d(b){switch(a.a.P(b)){case \"script\":return a.a.ta(b.text);case \"textarea\":return a.a.ta(b.value);case \"template\":if(e(b.content))return a.a.Ca(b.content.childNodes)}return a.a.Ca(b.childNodes)}function e(a){return z.DocumentFragment?a instanceof DocumentFragment:a&&11===a.nodeType}function f(a,b,c){\"string\"===typeof b.require?T||z.require?(T||z.require)([b.require],c):a(\"Uses require, but no AMD loader is present\"):c(b)}function g(a){return function(b){throw Error(\"Component '\"+\n"
 + "a+\"': \"+b);}}var h={};a.i.register=function(b,c){if(!c)throw Error(\"Invalid configuration for \"+b);if(a.i.sb(b))throw Error(\"Component \"+b+\" is already registered\");h[b]=c};a.i.sb=function(a){return Object.prototype.hasOwnProperty.call(h,a)};a.i.unregister=function(b){delete h[b];a.i.Ac(b)};a.i.Ec={getConfig:function(b,c){c(a.i.sb(b)?h[b]:null)},loadComponent:function(a,c,d){var e=g(a);f(e,c,function(c){b(a,e,c,d)})},loadTemplate:function(b,c,f){b=g(b);if(\"string\"===typeof c)f(a.a.ta(c));else if(c instanceof\n"
 + "Array)f(c);else if(e(c))f(a.a.la(c.childNodes));else if(c.element)if(c=c.element,z.HTMLElement?c instanceof HTMLElement:c&&c.tagName&&1===c.nodeType)f(d(c));else if(\"string\"===typeof c){var h=w.getElementById(c);h?f(d(h)):b(\"Cannot find element with ID \"+c)}else b(\"Unknown element type: \"+c);else b(\"Unknown template value: \"+c)},loadViewModel:function(a,b,d){c(g(a),b,d)}};var m=\"createViewModel\";a.b(\"components.register\",a.i.register);a.b(\"components.isRegistered\",a.i.sb);a.b(\"components.unregister\",\n"
 + "a.i.unregister);a.b(\"components.defaultLoader\",a.i.Ec);a.i.loaders.push(a.i.Ec);a.i.cd=h})();(function(){function b(b,e){var f=b.getAttribute(\"params\");if(f){var f=c.parseBindingsString(f,e,b,{valueAccessors:!0,bindingParams:!0}),f=a.a.Ha(f,function(c){return a.o(c,null,{l:b})}),g=a.a.Ha(f,function(c){var e=c.w();return c.ja()?a.o({read:function(){return a.a.c(c())},write:a.Ya(e)&&function(a){c()(a)},l:b}):e});Object.prototype.hasOwnProperty.call(g,\"$raw\")||(g.$raw=f);return g}return{$raw:{}}}a.i.getComponentNameForNode=\n"
 + "function(b){var c=a.a.P(b);if(a.i.sb(c)&&(-1!=c.indexOf(\"-\")||\"[object HTMLUnknownElement]\"==\"\"+b||8>=a.a.W&&b.tagName===c))return c};a.i.sc=function(c,e,f,g){if(1===e.nodeType){var h=a.i.getComponentNameForNode(e);if(h){c=c||{};if(c.component)throw Error('Cannot use the \"component\" binding on a custom element matching a component');var m={name:h,params:b(e,f)};c.component=g?function(){return m}:m}}return c};var c=new a.ga;9>a.a.W&&(a.i.register=function(a){return function(b){return a.apply(this,\n"
 + "arguments)}}(a.i.register),w.createDocumentFragment=function(b){return function(){var c=b(),f=a.i.cd,g;for(g in f);return c}}(w.createDocumentFragment))})();(function(){function b(b,c,d){c=c.template;if(!c)throw Error(\"Component '\"+b+\"' has no template\");b=a.a.Ca(c);a.h.ua(d,b)}function c(a,b,c){var d=a.createViewModel;return d?d.call(a,b,c):b}var d=0;a.f.component={init:function(e,f,g,h,m){function l(){var a=k&&k.dispose;\"function\"===typeof a&&a.call(k);n&&n.s();q=k=n=null}var k,q,n,r=a.a.la(a.h.childNodes(e));\n"
 + "a.h.Ea(e);a.a.I.za(e,l);a.o(function(){var g=a.a.c(f()),h,u;\"string\"===typeof g?h=g:(h=a.a.c(g.name),u=a.a.c(g.params));if(!h)throw Error(\"No component name specified\");var p=a.j.Bb(e,m),B=q=++d;a.i.get(h,function(d){if(q===B){l();if(!d)throw Error(\"Unknown component '\"+h+\"'\");b(h,d,e);var f=c(d,u,{element:e,templateNodes:r});d=p.createChildContext(f,{extend:function(a){a.$component=f;a.$componentTemplateNodes=r}});f&&f.koDescendantsComplete&&(n=a.j.subscribe(e,a.j.oa,f.koDescendantsComplete,f));\n"
 + "k=f;a.Pa(d,e)}})},null,{l:e});return{controlsDescendantBindings:!0}}};a.h.ea.component=!0})();var V={\"class\":\"className\",\"for\":\"htmlFor\"};a.f.attr={update:function(b,c){var d=a.a.c(c())||{};a.a.O(d,function(c,d){d=a.a.c(d);var g=c.indexOf(\":\"),g=\"lookupNamespaceURI\"in b&&0<g&&b.lookupNamespaceURI(c.substr(0,g)),h=!1===d||null===d||d===p;h?g?b.removeAttributeNS(g,c):b.removeAttribute(c):d=d.toString();8>=a.a.W&&c in V?(c=V[c],h?b.removeAttribute(c):b[c]=d):h||(g?b.setAttributeNS(g,c,d):b.setAttribute(c,\n"
 + "d));\"name\"===c&&a.a.Xc(b,h?\"\":d)})}};(function(){a.f.checked={after:[\"value\",\"attr\"],init:function(b,c,d){function e(){var e=b.checked,f=g();if(!a.U.rb()&&(e||!m&&!a.U.pa())){var l=a.v.K(c);if(k){var n=q?l.w():l,B=r;r=f;B!==f?e&&(a.a.Oa(n,f,!0),a.a.Oa(n,B,!1)):a.a.Oa(n,f,e);q&&a.Ya(l)&&l(n)}else h&&(f===p?f=e:e||(f=p)),a.m.$a(l,d,\"checked\",f,!0)}}function f(){var d=a.a.c(c()),e=g();k?(b.checked=0<=a.a.A(d,e),r=e):b.checked=h&&e===p?!!d:g()===d}var g=a.wb(function(){if(d.has(\"checkedValue\"))return a.a.c(d.get(\"checkedValue\"));\n"
 + "if(n)return d.has(\"value\")?a.a.c(d.get(\"value\")):b.value}),h=\"checkbox\"==b.type,m=\"radio\"==b.type;if(h||m){var l=c(),k=h&&a.a.c(l)instanceof Array,q=!(k&&l.push&&l.splice),n=m||k,r=k?g():p;m&&!b.name&&a.f.uniqueName.init(b,function(){return!0});a.o(e,null,{l:b});a.a.H(b,\"click\",e);a.o(f,null,{l:b});l=p}}};a.m.va.checked=!0;a.f.checkedValue={update:function(b,c){b.value=a.a.c(c())}}})();a.f[\"class\"]={update:function(b,c){var d=a.a.Cb(a.a.c(c()));a.a.Eb(b,b.__ko__cssValue,!1);b.__ko__cssValue=d;a.a.Eb(b,\n"
 + "d,!0)}};a.f.css={update:function(b,c){var d=a.a.c(c());null!==d&&\"object\"==typeof d?a.a.O(d,function(c,d){d=a.a.c(d);a.a.Eb(b,c,d)}):a.f[\"class\"].update(b,c)}};a.f.enable={update:function(b,c){var d=a.a.c(c());d&&b.disabled?b.removeAttribute(\"disabled\"):d||b.disabled||(b.disabled=!0)}};a.f.disable={update:function(b,c){a.f.enable.update(b,function(){return!a.a.c(c())})}};a.f.event={init:function(b,c,d,e,f){var g=c()||{};a.a.O(g,function(g){\"string\"==typeof g&&a.a.H(b,g,function(b){var l,k=c()[g];\n"
 + "if(k){try{var q=a.a.la(arguments);e=f.$data;q.unshift(e);l=k.apply(e,q)}finally{!0!==l&&(b.preventDefault?b.preventDefault():b.returnValue=!1)}!1===d.get(g+\"Bubble\")&&(b.cancelBubble=!0,b.stopPropagation&&b.stopPropagation())}})})}};a.f.foreach={Qc:function(b){return function(){var c=b(),d=a.a.$b(c);if(!d||\"number\"==typeof d.length)return{foreach:c,templateEngine:a.ba.Na};a.a.c(c);return{foreach:d.data,as:d.as,noChildContext:d.noChildContext,includeDestroyed:d.includeDestroyed,afterAdd:d.afterAdd,\n"
 + "beforeRemove:d.beforeRemove,afterRender:d.afterRender,beforeMove:d.beforeMove,afterMove:d.afterMove,templateEngine:a.ba.Na}}},init:function(b,c){return a.f.template.init(b,a.f.foreach.Qc(c))},update:function(b,c,d,e,f){return a.f.template.update(b,a.f.foreach.Qc(c),d,e,f)}};a.m.Ra.foreach=!1;a.h.ea.foreach=!0;a.f.hasfocus={init:function(b,c,d){function e(e){b.__ko_hasfocusUpdating=!0;var f=b.ownerDocument;if(\"activeElement\"in f){var g;try{g=f.activeElement}catch(k){g=f.body}e=g===b}f=c();a.m.$a(f,\n"
 + "d,\"hasfocus\",e,!0);b.__ko_hasfocusLastValue=e;b.__ko_hasfocusUpdating=!1}var f=e.bind(null,!0),g=e.bind(null,!1);a.a.H(b,\"focus\",f);a.a.H(b,\"focusin\",f);a.a.H(b,\"blur\",g);a.a.H(b,\"focusout\",g);b.__ko_hasfocusLastValue=!1},update:function(b,c){var d=!!a.a.c(c());b.__ko_hasfocusUpdating||b.__ko_hasfocusLastValue===d||(d?b.focus():b.blur(),!d&&b.__ko_hasfocusLastValue&&b.ownerDocument.body.focus(),a.v.K(a.a.Fb,null,[b,d?\"focusin\":\"focusout\"]))}};a.m.va.hasfocus=!0;a.f.hasFocus=a.f.hasfocus;a.m.va.hasFocus=\n"
 + "\"hasfocus\";a.f.html={init:function(){return{controlsDescendantBindings:!0}},update:function(b,c){a.a.dc(b,c())}};(function(){function b(b,d,e){a.f[b]={init:function(b,c,h,m,l){var k,q,n={},r,p,A;if(d){m=h.get(\"as\");var u=h.get(\"noChildContext\");A=!(m&&u);n={as:m,noChildContext:u,exportDependencies:A}}p=(r=\"render\"==h.get(\"completeOn\"))||h.has(a.j.oa);a.o(function(){var h=a.a.c(c()),m=!e!==!h,u=!q,t;if(A||m!==k){p&&(l=a.j.Bb(b,l));if(m){if(!d||A)n.dataDependency=a.U.o();t=d?l.createChildContext(\"function\"==\n"
 + "typeof h?h:c,n):a.U.pa()?l.extend(null,n):l}u&&a.U.pa()&&(q=a.a.Ca(a.h.childNodes(b),!0));m?(u||a.h.ua(b,a.a.Ca(q)),a.Pa(t,b)):(a.h.Ea(b),r||a.j.Ga(b,a.j.T));k=m}},null,{l:b});return{controlsDescendantBindings:!0}}};a.m.Ra[b]=!1;a.h.ea[b]=!0}b(\"if\");b(\"ifnot\",!1,!0);b(\"with\",!0)})();a.f.let={init:function(b,c,d,e,f){c=f.extend(c);a.Pa(c,b);return{controlsDescendantBindings:!0}}};a.h.ea.let=!0;var Q={};a.f.options={init:function(b){if(\"select\"!==a.a.P(b))throw Error(\"options binding applies only to SELECT elements\");\n"
 + "for(;0<b.length;)b.remove(0);return{controlsDescendantBindings:!0}},update:function(b,c,d){function e(){return a.a.fb(b.options,function(a){return a.selected})}function f(a,b,c){var d=typeof b;return\"function\"==d?b(a):\"string\"==d?a[b]:c}function g(c,e){if(y&&k)a.u.ya(b,a.a.c(d.get(\"value\")),!0);else if(r.length){var f=0<=a.a.A(r,a.u.L(e[0]));a.a.Yc(e[0],f);y&&!f&&a.v.K(a.a.Fb,null,[b,\"change\"])}}var h=b.multiple,m=0!=b.length&&h?b.scrollTop:null,l=a.a.c(c()),k=d.get(\"valueAllowUnset\")&&d.has(\"value\"),\n"
 + "q=d.get(\"optionsIncludeDestroyed\");c={};var n,r=[];k||(h?r=a.a.Mb(e(),a.u.L):0<=b.selectedIndex&&r.push(a.u.L(b.options[b.selectedIndex])));l&&(\"undefined\"==typeof l.length&&(l=[l]),n=a.a.fb(l,function(b){return q||b===p||null===b||!a.a.c(b._destroy)}),d.has(\"optionsCaption\")&&(l=a.a.c(d.get(\"optionsCaption\")),null!==l&&l!==p&&n.unshift(Q)));var y=!1;c.beforeRemove=function(a){b.removeChild(a)};l=g;d.has(\"optionsAfterRender\")&&\"function\"==typeof d.get(\"optionsAfterRender\")&&(l=function(b,c){g(0,c);\n"
 + "a.v.K(d.get(\"optionsAfterRender\"),null,[c[0],b!==Q?b:p])});a.a.cc(b,n,function(c,e,g){g.length&&(r=!k&&g[0].selected?[a.u.L(g[0])]:[],y=!0);e=b.ownerDocument.createElement(\"option\");c===Q?(a.a.Ab(e,d.get(\"optionsCaption\")),a.u.ya(e,p)):(g=f(c,d.get(\"optionsValue\"),c),a.u.ya(e,a.a.c(g)),c=f(c,d.get(\"optionsText\"),g),a.a.Ab(e,c));return[e]},c,l);a.v.K(function(){if(k)a.u.ya(b,a.a.c(d.get(\"value\")),!0);else{var c;h?c=r.length&&e().length<r.length:c=r.length&&0<=b.selectedIndex?a.u.L(b.options[b.selectedIndex])!==\n"
 + "r[0]:r.length||0<=b.selectedIndex;c&&a.a.Fb(b,\"change\")}});a.a.vd(b);m&&20<Math.abs(m-b.scrollTop)&&(b.scrollTop=m)}};a.f.options.Yb=a.a.g.Z();a.f.selectedOptions={after:[\"options\",\"foreach\"],init:function(b,c,d){a.a.H(b,\"change\",function(){var e=c(),f=[];a.a.C(b.getElementsByTagName(\"option\"),function(b){b.selected&&f.push(a.u.L(b))});a.m.$a(e,d,\"selectedOptions\",f)})},update:function(b,c){if(\"select\"!=a.a.P(b))throw Error(\"values binding applies only to SELECT elements\");var d=a.a.c(c()),e=b.scrollTop;\n"
 + "d&&\"number\"==typeof d.length&&a.a.C(b.getElementsByTagName(\"option\"),function(b){var c=0<=a.a.A(d,a.u.L(b));b.selected!=c&&a.a.Yc(b,c)});b.scrollTop=e}};a.m.va.selectedOptions=!0;a.f.style={update:function(b,c){var d=a.a.c(c()||{});a.a.O(d,function(c,d){d=a.a.c(d);if(null===d||d===p||!1===d)d=\"\";if(v)v(b).css(c,d);else if(/^--/.test(c))b.style.setProperty(c,d);else{c=c.replace(/-(\\w)/g,function(a,b){return b.toUpperCase()});var g=b.style[c];b.style[c]=d;d===g||b.style[c]!=g||isNaN(d)||(b.style[c]=\n"
 + "d+\"px\")}})}};a.f.submit={init:function(b,c,d,e,f){if(\"function\"!=typeof c())throw Error(\"The value for a submit binding must be a function\");a.a.H(b,\"submit\",function(a){var d,e=c();try{d=e.call(f.$data,b)}finally{!0!==d&&(a.preventDefault?a.preventDefault():a.returnValue=!1)}})}};a.f.text={init:function(){return{controlsDescendantBindings:!0}},update:function(b,c){a.a.Ab(b,c())}};a.h.ea.text=!0;(function(){if(z&&z.navigator){var b=function(a){if(a)return parseFloat(a[1])},c=z.navigator.userAgent,\n"
 + "d,e,f,g,h;(d=z.opera&&z.opera.version&&parseInt(z.opera.version()))||(h=b(c.match(/Edge\\/([^ ]+)$/)))||b(c.match(/Chrome\\/([^ ]+)/))||(e=b(c.match(/Version\\/([^ ]+) Safari/)))||(f=b(c.match(/Firefox\\/([^ ]+)/)))||(g=a.a.W||b(c.match(/MSIE ([^ ]+)/)))||(g=b(c.match(/rv:([^ )]+)/)))}if(8<=g&&10>g)var m=a.a.g.Z(),l=a.a.g.Z(),k=function(b){var c=this.activeElement;(c=c&&a.a.g.get(c,l))&&c(b)},q=function(b,c){var d=b.ownerDocument;a.a.g.get(d,m)||(a.a.g.set(d,m,!0),a.a.H(d,\"selectionchange\",k));a.a.g.set(b,\n"
 + "l,c)};a.f.textInput={init:function(b,c,l){function k(c,d){a.a.H(b,c,d)}function m(){var d=a.a.c(c());if(null===d||d===p)d=\"\";L!==p&&d===L?a.a.setTimeout(m,4):b.value!==d&&(x=!0,b.value=d,x=!1,v=b.value)}function t(){w||(L=b.value,w=a.a.setTimeout(B,4))}function B(){clearTimeout(w);L=w=p;var d=b.value;v!==d&&(v=d,a.m.$a(c(),l,\"textInput\",d))}var v=b.value,w,L,z=9==a.a.W?t:B,x=!1;g&&k(\"keypress\",B);11>g&&k(\"propertychange\",function(a){x||\"value\"!==a.propertyName||z(a)});8==g&&(k(\"keyup\",B),k(\"keydown\",\n"
 + "B));q&&(q(b,z),k(\"dragend\",t));(!g||9<=g)&&k(\"input\",z);5>e&&\"textarea\"===a.a.P(b)?(k(\"keydown\",t),k(\"paste\",t),k(\"cut\",t)):11>d?k(\"keydown\",t):4>f?(k(\"DOMAutoComplete\",B),k(\"dragdrop\",B),k(\"drop\",B)):h&&\"number\"===b.type&&k(\"keydown\",t);k(\"change\",B);k(\"blur\",B);a.o(m,null,{l:b})}};a.m.va.textInput=!0;a.f.textinput={preprocess:function(a,b,c){c(\"textInput\",a)}}})();a.f.uniqueName={init:function(b,c){if(c()){var d=\"ko_unique_\"+ ++a.f.uniqueName.qd;a.a.Xc(b,d)}}};a.f.uniqueName.qd=0;a.f.using={init:function(b,\n"
 + "c,d,e,f){var g;d.has(\"as\")&&(g={as:d.get(\"as\"),noChildContext:d.get(\"noChildContext\")});c=f.createChildContext(c,g);a.Pa(c,b);return{controlsDescendantBindings:!0}}};a.h.ea.using=!0;a.f.value={after:[\"options\",\"foreach\"],init:function(b,c,d){var e=a.a.P(b),f=\"input\"==e;if(!f||\"checkbox\"!=b.type&&\"radio\"!=b.type){var g=[\"change\"],h=d.get(\"valueUpdate\"),m=!1,l=null;h&&(\"string\"==typeof h&&(h=[h]),a.a.gb(g,h),g=a.a.vc(g));var k=function(){l=null;m=!1;var e=c(),f=a.u.L(b);a.m.$a(e,d,\"value\",f)};!a.a.W||\n"
 + "!f||\"text\"!=b.type||\"off\"==b.autocomplete||b.form&&\"off\"==b.form.autocomplete||-1!=a.a.A(g,\"propertychange\")||(a.a.H(b,\"propertychange\",function(){m=!0}),a.a.H(b,\"focus\",function(){m=!1}),a.a.H(b,\"blur\",function(){m&&k()}));a.a.C(g,function(c){var d=k;a.a.Td(c,\"after\")&&(d=function(){l=a.u.L(b);a.a.setTimeout(k,0)},c=c.substring(5));a.a.H(b,c,d)});var q;q=f&&\"file\"==b.type?function(){var d=a.a.c(c());null===d||d===p||\"\"===d?b.value=\"\":a.v.K(k)}:function(){var f=a.a.c(c()),g=a.u.L(b);if(null!==l&&\n"
 + "f===l)a.a.setTimeout(q,0);else if(f!==g||g===p)\"select\"===e?(g=d.get(\"valueAllowUnset\"),a.u.ya(b,f,g),g||f===a.u.L(b)||a.v.K(k)):a.u.ya(b,f)};a.o(q,null,{l:b})}else a.eb(b,{checkedValue:c})},update:function(){}};a.m.va.value=!0;a.f.visible={update:function(b,c){var d=a.a.c(c()),e=\"none\"!=b.style.display;d&&!e?b.style.display=\"\":!d&&e&&(b.style.display=\"none\")}};a.f.hidden={update:function(b,c){a.f.visible.update(b,function(){return!a.a.c(c())})}};(function(b){a.f[b]={init:function(c,d,e,f,g){return a.f.event.init.call(this,\n"
 + "c,function(){var a={};a[b]=d();return a},e,f,g)}}})(\"click\");a.ca=function(){};a.ca.prototype.renderTemplateSource=function(){throw Error(\"Override renderTemplateSource\");};a.ca.prototype.createJavaScriptEvaluatorBlock=function(){throw Error(\"Override createJavaScriptEvaluatorBlock\");};a.ca.prototype.makeTemplateSource=function(b,c){if(\"string\"==typeof b){c=c||w;var d=c.getElementById(b);if(!d)throw Error(\"Cannot find template with ID \"+b);return new a.B.D(d)}if(1==b.nodeType||8==b.nodeType)return new a.B.ia(b);\n"
 + "throw Error(\"Unknown template type: \"+b);};a.ca.prototype.renderTemplate=function(a,c,d,e){a=this.makeTemplateSource(a,e);return this.renderTemplateSource(a,c,d,e)};a.ca.prototype.isTemplateRewritten=function(a,c){return!1===this.allowTemplateRewriting?!0:this.makeTemplateSource(a,c).data(\"isRewritten\")};a.ca.prototype.rewriteTemplate=function(a,c,d){a=this.makeTemplateSource(a,d);c=c(a.text());a.text(c);a.data(\"isRewritten\",!0)};a.b(\"templateEngine\",a.ca);a.ic=function(){function b(b,c,d,h){b=a.m.Zb(b);\n"
 + "for(var m=a.m.Ra,l=0;l<b.length;l++){var k=b[l].key;if(Object.prototype.hasOwnProperty.call(m,k)){var q=m[k];if(\"function\"===typeof q){if(k=q(b[l].value))throw Error(k);}else if(!q)throw Error(\"This template engine does not support the '\"+k+\"' binding within its templates\");}}d=\"ko.__tr_ambtns(function($context,$element){return(function(){return{ \"+a.m.ub(b,{valueAccessors:!0})+\" } })()},'\"+d.toLowerCase()+\"')\";return h.createJavaScriptEvaluatorBlock(d)+c}var c=/(<([a-z]+\\d*)(?:\\s+(?!data-bind\\s*=\\s*)[a-z0-9\\-]+(?:=(?:\\\"[^\\\"]*\\\"|\\'[^\\']*\\'|[^>]*))?)*\\s+)data-bind\\s*=\\s*([\"'])([\\s\\S]*?)\\3/gi,\n"
 + "d=/\\x3c!--\\s*ko\\b\\s*([\\s\\S]*?)\\s*--\\x3e/g;return{wd:function(b,c,d){c.isTemplateRewritten(b,d)||c.rewriteTemplate(b,function(b){return a.ic.Kd(b,c)},d)},Kd:function(a,f){return a.replace(c,function(a,c,d,e,k){return b(k,c,d,f)}).replace(d,function(a,c){return b(c,\"\\x3c!-- ko --\\x3e\",\"#comment\",f)})},ld:function(b,c){return a.aa.Wb(function(d,h){var m=d.nextSibling;m&&m.nodeName.toLowerCase()===c&&a.eb(m,b,h)})}}}();a.b(\"__tr_ambtns\",a.ic.ld);(function(){a.B={};a.B.D=function(b){if(this.D=b){var c=\n"
 + "a.a.P(b);this.Db=\"script\"===c?1:\"textarea\"===c?2:\"template\"==c&&b.content&&11===b.content.nodeType?3:4}};a.B.D.prototype.text=function(){var b=1===this.Db?\"text\":2===this.Db?\"value\":\"innerHTML\";if(0==arguments.length)return this.D[b];var c=arguments[0];\"innerHTML\"===b?a.a.dc(this.D,c):this.D[b]=c};var b=a.a.g.Z()+\"_\";a.B.D.prototype.data=function(c){if(1===arguments.length)return a.a.g.get(this.D,b+c);a.a.g.set(this.D,b+c,arguments[1])};var c=a.a.g.Z();a.B.D.prototype.nodes=function(){var b=this.D;\n"
 + "if(0==arguments.length){var e=a.a.g.get(b,c)||{},f=e.jb||(3===this.Db?b.content:4===this.Db?b:p);if(!f||e.hd)if(e=this.text())f=a.a.Ld(e,b.ownerDocument),this.text(\"\"),a.a.g.set(b,c,{jb:f,hd:!0});return f}a.a.g.set(b,c,{jb:arguments[0]})};a.B.ia=function(a){this.D=a};a.B.ia.prototype=new a.B.D;a.B.ia.prototype.constructor=a.B.ia;a.B.ia.prototype.text=function(){if(0==arguments.length){var b=a.a.g.get(this.D,c)||{};b.jc===p&&b.jb&&(b.jc=b.jb.innerHTML);return b.jc}a.a.g.set(this.D,c,{jc:arguments[0]})};\n"
 + "a.b(\"templateSources\",a.B);a.b(\"templateSources.domElement\",a.B.D);a.b(\"templateSources.anonymousTemplate\",a.B.ia)})();(function(){function b(b,c,d){var e;for(c=a.h.nextSibling(c);b&&(e=b)!==c;)b=a.h.nextSibling(e),d(e,b)}function c(c,d){if(c.length){var e=c[0],f=c[c.length-1],g=e.parentNode,h=a.ga.instance,m=h.preprocessNode;if(m){b(e,f,function(a,b){var c=a.previousSibling,d=m.call(h,a);d&&(a===e&&(e=d[0]||b),a===f&&(f=d[d.length-1]||c))});c.length=0;if(!e)return;e===f?c.push(e):(c.push(e,f),a.a.Ua(c,\n"
 + "g))}b(e,f,function(b){1!==b.nodeType&&8!==b.nodeType||a.uc(d,b)});b(e,f,function(b){1!==b.nodeType&&8!==b.nodeType||a.aa.bd(b,[d])});a.a.Ua(c,g)}}function d(a){return a.nodeType?a:0<a.length?a[0]:null}function e(b,e,f,h,m){m=m||{};var p=(b&&d(b)||f||{}).ownerDocument,A=m.templateEngine||g;a.ic.wd(f,A,p);f=A.renderTemplate(f,h,m,p);if(\"number\"!=typeof f.length||0<f.length&&\"number\"!=typeof f[0].nodeType)throw Error(\"Template engine must return an array of DOM nodes\");p=!1;switch(e){case \"replaceChildren\":a.h.ua(b,\n"
 + "f);p=!0;break;case \"replaceNode\":a.a.Wc(b,f);p=!0;break;case \"ignoreTargetNode\":break;default:throw Error(\"Unknown renderMode: \"+e);}p&&(c(f,h),m.afterRender&&a.v.K(m.afterRender,null,[f,h[m.as||\"$data\"]]),\"replaceChildren\"==e&&a.j.Ga(b,a.j.T));return f}function f(b,c,d){return a.N(b)?b():\"function\"===typeof b?b(c,d):b}var g;a.ec=function(b){if(b!=p&&!(b instanceof a.ca))throw Error(\"templateEngine must inherit from ko.templateEngine\");g=b};a.bc=function(b,c,h,m,r){h=h||{};if((h.templateEngine||g)==\n"
 + "p)throw Error(\"Set a template engine before calling renderTemplate\");r=r||\"replaceChildren\";if(m){var y=d(m);return a.$(function(){var g=c&&c instanceof a.fa?c:new a.fa(c,null,null,null,{exportDependencies:!0}),p=f(b,g.$data,g),g=e(m,r,p,g,h);\"replaceNode\"==r&&(m=g,y=d(m))},null,{Sa:function(){return!y||!a.a.Rb(y)},l:y&&\"replaceNode\"==r?y.parentNode:y})}return a.aa.Wb(function(d){a.bc(b,c,h,d,\"replaceNode\")})};a.Pd=function(b,d,g,h,m){function y(b,c){a.v.K(a.a.cc,null,[h,b,u,g,t,c]);a.j.Ga(h,a.j.T)}\n"
 + "function t(a,b){c(b,v);g.afterRender&&g.afterRender(b,a);v=null}function u(a,c){v=m.createChildContext(a,{as:B,noChildContext:g.noChildContext,extend:function(a){a.$index=c;B&&(a[B+\"Index\"]=c)}});var d=f(b,a,v);return e(h,\"ignoreTargetNode\",d,v,g)}var v,B=g.as,w=!1===g.includeDestroyed||a.options.foreachHidesDestroyed&&!g.includeDestroyed;if(w||g.beforeRemove||!a.Oc(d))return a.$(function(){var b=a.a.c(d)||[];\"undefined\"==typeof b.length&&(b=[b]);w&&(b=a.a.fb(b,function(b){return b===p||null===b||\n"
 + "!a.a.c(b._destroy)}));y(b)},null,{l:h});y(d.w());var z=d.subscribe(function(a){y(d(),a)},null,\"arrayChange\");z.l(h);return z};var h=a.a.g.Z(),m=a.a.g.Z();a.f.template={init:function(b,c){var d=a.a.c(c());if(\"string\"==typeof d||d.name)a.h.Ea(b);else if(\"nodes\"in d){d=d.nodes||[];if(a.N(d))throw Error('The \"nodes\" option must be a plain, non-observable array.');var e=d[0]&&d[0].parentNode;e&&a.a.g.get(e,m)||(e=a.a.Xb(d),a.a.g.set(e,m,!0));(new a.B.ia(b)).nodes(e)}else if(d=a.h.childNodes(b),0<d.length)e=\n"
 + "a.a.Xb(d),(new a.B.ia(b)).nodes(e);else throw Error(\"Anonymous template defined, but no template content was provided\");return{controlsDescendantBindings:!0}},update:function(b,c,d,e,f){var g=c();c=a.a.c(g);d=!0;e=null;\"string\"==typeof c?c={}:(g=c.name,\"if\"in c&&(d=a.a.c(c[\"if\"])),d&&\"ifnot\"in c&&(d=!a.a.c(c.ifnot)));\"foreach\"in c?e=a.Pd(g||b,d&&c.foreach||[],c,b,f):d?(d=f,\"data\"in c&&(d=f.createChildContext(c.data,{as:c.as,noChildContext:c.noChildContext,exportDependencies:!0})),e=a.bc(g||b,d,c,\n"
 + "b)):a.h.Ea(b);f=e;(c=a.a.g.get(b,h))&&\"function\"==typeof c.s&&c.s();a.a.g.set(b,h,!f||f.ja&&!f.ja()?p:f)}};a.m.Ra.template=function(b){b=a.m.Zb(b);return 1==b.length&&b[0].unknown||a.m.Hd(b,\"name\")?null:\"This template engine does not support anonymous templates nested within its templates\"};a.h.ea.template=!0})();a.b(\"setTemplateEngine\",a.ec);a.b(\"renderTemplate\",a.bc);a.a.Jc=function(a,c,d){if(a.length&&c.length){var e,f,g,h,m;for(e=f=0;(!d||e<d)&&(h=a[f]);++f){for(g=0;m=c[g];++g)if(h.value===m.value){h.moved=\n"
 + "m.index;m.moved=h.index;c.splice(g,1);e=g=0;break}e+=g}}};a.a.Ob=function(){function b(b,d,e,f,g){var h=Math.min,m=Math.max,l=[],k,p=b.length,n,r=d.length,t=r-p||1,A=p+r+1,u,v,w;for(k=0;k<=p;k++)for(v=u,l.push(u=[]),w=h(r,k+t),n=m(0,k-1);n<=w;n++)u[n]=n?k?b[k-1]===d[n-1]?v[n-1]:h(v[n]||A,u[n-1]||A)+1:n+1:k+1;h=[];m=[];t=[];k=p;for(n=r;k||n;)r=l[k][n]-1,n&&r===l[k][n-1]?m.push(h[h.length]={status:e,value:d[--n],index:n}):k&&r===l[k-1][n]?t.push(h[h.length]={status:f,value:b[--k],index:k}):(--n,--k,\n"
 + "g.sparse||h.push({status:\"retained\",value:d[n]}));a.a.Jc(t,m,!g.dontLimitMoves&&10*p);return h.reverse()}return function(a,d,e){e=\"boolean\"===typeof e?{dontLimitMoves:e}:e||{};a=a||[];d=d||[];return a.length<d.length?b(a,d,\"added\",\"deleted\",e):b(d,a,\"deleted\",\"added\",e)}}();a.b(\"utils.compareArrays\",a.a.Ob);(function(){function b(b,c,d,h,m){var l=[],k=a.$(function(){var k=c(d,m,a.a.Ua(l,b))||[];0<l.length&&(a.a.Wc(l,k),h&&a.v.K(h,null,[d,k,m]));l.length=0;a.a.gb(l,k)},null,{l:b,Sa:function(){return!a.a.jd(l)}});\n"
 + "return{Y:l,$:k.ja()?k:p}}var c=a.a.g.Z(),d=a.a.g.Z();a.a.cc=function(e,f,g,h,m,l){function k(b){x={Aa:b,nb:a.sa(w++)};v.push(x);t||F.push(x)}function q(b){x=r[b];w!==x.nb.w()&&D.push(x);x.nb(w++);a.a.Ua(x.Y,e);v.push(x)}function n(b,c){if(b)for(var d=0,e=c.length;d<e;d++)a.a.C(c[d].Y,function(a){b(a,d,c[d].Aa)})}f=f||[];\"undefined\"==typeof f.length&&(f=[f]);h=h||{};var r=a.a.g.get(e,c),t=!r,v=[],u=0,w=0,B=[],z=[],C=[],D=[],F=[],x,I=0;if(t)a.a.C(f,k);else{if(!l||r&&r._countWaitingForRemove){var E=\n"
 + "a.a.Mb(r,function(a){return a.Aa});l=a.a.Ob(E,f,{dontLimitMoves:h.dontLimitMoves,sparse:!0})}for(var E=0,G,H,K;G=l[E];E++)switch(H=G.moved,K=G.index,G.status){case \"deleted\":for(;u<K;)q(u++);H===p&&(x=r[u],x.$&&(x.$.s(),x.$=p),a.a.Ua(x.Y,e).length&&(h.beforeRemove&&(v.push(x),I++,x.Aa===d?x=null:C.push(x)),x&&B.push.apply(B,x.Y)));u++;break;case \"added\":for(;w<K;)q(u++);H!==p?(z.push(v.length),q(H)):k(G.value)}for(;w<f.length;)q(u++);v._countWaitingForRemove=I}a.a.g.set(e,c,v);n(h.beforeMove,D);a.a.C(B,\n"
 + "h.beforeRemove?a.na:a.removeNode);var M,O,P;try{P=e.ownerDocument.activeElement}catch(N){}if(z.length)for(;(E=z.shift())!=p;){x=v[E];for(M=p;E;)if((O=v[--E].Y)&&O.length){M=O[O.length-1];break}for(f=0;u=x.Y[f];M=u,f++)a.h.Vb(e,u,M)}E=0;for(z=a.h.firstChild(e);x=v[E];E++){x.Y||a.a.extend(x,b(e,g,x.Aa,m,x.nb));for(f=0;u=x.Y[f];z=u.nextSibling,M=u,f++)u!==z&&a.h.Vb(e,u,M);!x.Dd&&m&&(m(x.Aa,x.Y,x.nb),x.Dd=!0,M=x.Y[x.Y.length-1])}P&&e.ownerDocument.activeElement!=P&&P.focus();n(h.beforeRemove,C);for(E=\n"
 + "0;E<C.length;++E)C[E].Aa=d;n(h.afterMove,D);n(h.afterAdd,F)}})();a.b(\"utils.setDomNodeChildrenFromArrayMapping\",a.a.cc);a.ba=function(){this.allowTemplateRewriting=!1};a.ba.prototype=new a.ca;a.ba.prototype.constructor=a.ba;a.ba.prototype.renderTemplateSource=function(b,c,d,e){if(c=(9>a.a.W?0:b.nodes)?b.nodes():null)return a.a.la(c.cloneNode(!0).childNodes);b=b.text();return a.a.ta(b,e)};a.ba.Na=new a.ba;a.ec(a.ba.Na);a.b(\"nativeTemplateEngine\",a.ba);(function(){a.Za=function(){var a=this.Gd=function(){if(!v||\n"
 + "!v.tmpl)return 0;try{if(0<=v.tmpl.tag.tmpl.open.toString().indexOf(\"__\"))return 2}catch(a){}return 1}();this.renderTemplateSource=function(b,e,f,g){g=g||w;f=f||{};if(2>a)throw Error(\"Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later.\");var h=b.data(\"precompiled\");h||(h=b.text()||\"\",h=v.template(null,\"{{ko_with $item.koBindingContext}}\"+h+\"{{/ko_with}}\"),b.data(\"precompiled\",h));b=[e.$data];e=v.extend({koBindingContext:e},f.templateOptions);e=v.tmpl(h,b,e);e.appendTo(g.createElement(\"div\"));\n"
 + "v.fragments={};return e};this.createJavaScriptEvaluatorBlock=function(a){return\"{{ko_code ((function() { return \"+a+\" })()) }}\"};this.addTemplate=function(a,b){w.write(\"<script type='text/html' id='\"+a+\"'>\"+b+\"\\x3c/script>\")};0<a&&(v.tmpl.tag.ko_code={open:\"__.push($1 || '');\"},v.tmpl.tag.ko_with={open:\"with($1) {\",close:\"} \"})};a.Za.prototype=new a.ca;a.Za.prototype.constructor=a.Za;var b=new a.Za;0<b.Gd&&a.ec(b);a.b(\"jqueryTmplTemplateEngine\",a.Za)})()})})();})();\n"
 + "");

  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_org_netbeans_html_ko4j_Knockout_props'] = null;
    this['fld_org_netbeans_html_ko4j_Knockout_funcs'] = null;
    this['fld_org_netbeans_html_ko4j_Knockout_objs'] = null;
    this['fld_org_netbeans_html_ko4j_Knockout_copyFrom'] = null;
    this['fld_org_netbeans_html_ko4j_Knockout_strong'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_netbeans_html_ko4j_Knockout = org_netbeans_html_ko4j_Knockout;


function org_netbeans_html_ko4j_Knockout$1() {
  var m;
  var CLS = org_netbeans_html_ko4j_Knockout$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$o = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_ko4j_Knockout$1_val$o'] = v; return this['fld_org_netbeans_html_ko4j_Knockout$1_val$o']; };
  m = c._val$propertyName = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_ko4j_Knockout$1_val$propertyName'] = v; return this['fld_org_netbeans_html_ko4j_Knockout$1_val$propertyName']; };
  m = c._this$0 = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_ko4j_Knockout$1_this$0'] = v; return this['fld_org_netbeans_html_ko4j_Knockout$1_this$0']; };
    m = CLS.cons__VLorg_netbeans_html_ko4j_Knockout_2Ljava_lang_Object_2Ljava_lang_String_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
lcA0['fld_org_netbeans_html_ko4j_Knockout$1_this$0'] = lcA1;
lcA0['fld_org_netbeans_html_ko4j_Knockout$1_val$o'] = lcA2;
lcA0['fld_org_netbeans_html_ko4j_Knockout$1_val$propertyName'] = lcA3;
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.run__V = function() {
  var  lcA0 = this;
(refs_org_netbeans_html_ko4j_Knockout || (refs_org_netbeans_html_ko4j_Knockout = org_netbeans_html_ko4j_Knockout(false))).access$000__VLjava_lang_Object_2Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_org_netbeans_html_ko4j_Knockout$1_val$o'], lcA0['fld_org_netbeans_html_ko4j_Knockout$1_val$propertyName'], null, null);
return;

};
c['run__V'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_ko4j_Knockout$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_ko4j_Knockout$1', { value : true });
      vm.java_lang_Runnable(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_ko4j_Knockout$1fillInstOf });
    org_netbeans_html_ko4j_Knockout$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/ko4j/Knockout$1';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.java_lang_Runnable(false).constructor.$class
    ]; };
    CLS.$class.access = 65568;
    CLS.$class.cnstr = CLS;
    var refs_org_netbeans_html_ko4j_Knockout;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_org_netbeans_html_ko4j_Knockout$1_val$o'] = null;
    this['fld_org_netbeans_html_ko4j_Knockout$1_val$propertyName'] = null;
    this['fld_org_netbeans_html_ko4j_Knockout$1_this$0'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_netbeans_html_ko4j_Knockout$1 = org_netbeans_html_ko4j_Knockout$1;

vm.java_lang_Runnable = link('java/lang/Runnable', function(f) { vm.java_lang_Runnable =  f; });

function org_netbeans_html_ko4j_CacheObjs() {
  var m;
  var CLS = org_netbeans_html_ko4j_CacheObjs;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_list'] = null;
  m = c._list = function (v) {  if (arguments.length == 1) CLS['fld_list'] = v; return CLS['fld_list']; };
  CLS['fld_listAt'] = 0;
  m = c._listAt = function (v) {  if (arguments.length == 1) CLS['fld_listAt'] = v; return CLS['fld_listAt']; };
  m = c._ref = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_ko4j_CacheObjs_ref'] = v; return this['fld_org_netbeans_html_ko4j_CacheObjs_ref']; };
  m = c._jsObjects = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_ko4j_CacheObjs_jsObjects'] = v; return this['fld_org_netbeans_html_ko4j_CacheObjs_jsObjects']; };
  m = c._jsIndex = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_ko4j_CacheObjs_jsIndex'] = v; return this['fld_org_netbeans_html_ko4j_CacheObjs_jsIndex']; };
    m = CLS.cons__VLorg_netbeans_html_boot_spi_Fn$Presenter_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = (refs_org_netbeans_html_boot_spi_Fn || (refs_org_netbeans_html_boot_spi_Fn = vm.org_netbeans_html_boot_spi_Fn(false)))['ref__Lorg_netbeans_html_boot_spi_Fn$Ref_2Lorg_netbeans_html_boot_spi_Fn$Presenter_2'](lcA1);
stA0['fld_org_netbeans_html_ko4j_CacheObjs_ref'] = stA1;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.get__Lorg_netbeans_html_boot_spi_Fn$Presenter_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((lcA0['fld_org_netbeans_html_ko4j_CacheObjs_ref']) !== null) { gt = 11; break IF; }
var stA0 = null;{ gt = 20; break IF; }
    }
    X_11: for (;;) { IF: if (gt <= 11) {

var stA0 = invoker.presenter__Lorg_netbeans_html_boot_spi_Fn$Presenter_2(lcA0['fld_org_netbeans_html_ko4j_CacheObjs_ref']);
    }
    X_20: for (;;) { IF: if (gt <= 20) {
return stA0;

    }
}}}
};
    m.access = 0;
    m.cls = CLS;
    m = c.find__Lorg_netbeans_html_ko4j_CacheObjs_2Lorg_netbeans_html_boot_spi_Fn$Presenter_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var lcI1 = 0;
    }
    X_2: for (;;) { IF: if (gt <= 2) {

if ((lcI1) >= ((c._list()).length)) { gt = 42; break IF; }
if (((c._list()[lcI1] || Array.at(c._list(), lcI1))) === null) { gt = 36; break IF; }
var stA0 = (c._list()[lcI1] || Array.at(c._list(), lcI1)).get__Lorg_netbeans_html_boot_spi_Fn$Presenter_2();
if ((stA0) !== (lcA0)) { gt = 36; break IF; }
return (c._list()[lcI1] || Array.at(c._list(), lcI1));
    }
    X_36: for (;;) { IF: if (gt <= 36) {
lcI1++;
{ gt = 0; continue X_2; }
    }
    X_42: for (;;) { IF: if (gt <= 42) {
var stA0 = new org_netbeans_html_ko4j_CacheObjs;
c.constructor.cons__VLorg_netbeans_html_boot_spi_Fn$Presenter_2.call(stA0, lcA0);
var lcA1 = stA0;
Array.at(c._list(), c._listAt(), lcA1);
c._listAt(__mod32((((c._listAt()) + (1)) | 0),(c._list()).length));
return lcA1;

    }
}}}}
};
    m.access = 40;
    m.cls = CLS;
    m = c.getJSObject__Ljava_lang_Object_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var lcI1 = (64);
if ((lcA0['fld_org_netbeans_html_ko4j_CacheObjs_jsObjects']) === null) { gt = 56; break IF; }
var stI0 = lcA0['fld_org_netbeans_html_ko4j_CacheObjs_jsIndex'];var stI1 = (lcA0['fld_org_netbeans_html_ko4j_CacheObjs_jsObjects']).length;var stI2 = stI1;
var lcI1 = stI2;
if ((stI0) >= (stI1)) { gt = 56; break IF; }
var lcA2 = (lcA0['fld_org_netbeans_html_ko4j_CacheObjs_jsObjects'][lcA0['fld_org_netbeans_html_ko4j_CacheObjs_jsIndex']] || Array.at(lcA0['fld_org_netbeans_html_ko4j_CacheObjs_jsObjects'], lcA0['fld_org_netbeans_html_ko4j_CacheObjs_jsIndex']));
Array.at(lcA0['fld_org_netbeans_html_ko4j_CacheObjs_jsObjects'], lcA0['fld_org_netbeans_html_ko4j_CacheObjs_jsIndex'], null);
var stA0 = lcA0;var stA1 = stA0;
stA0['fld_org_netbeans_html_ko4j_CacheObjs_jsIndex'] = (((stA1['fld_org_netbeans_html_ko4j_CacheObjs_jsIndex']) + (1)) | 0);
return lcA2;
    }
    X_56: for (;;) { IF: if (gt <= 56) {

var stA0 = lcA0;var stA1 = (refs_org_netbeans_html_ko4j_Knockout || (refs_org_netbeans_html_ko4j_Knockout = org_netbeans_html_ko4j_Knockout(false))).allocJS___3Ljava_lang_Object_2I(__mul32(lcI1,2));
stA0['fld_org_netbeans_html_ko4j_CacheObjs_jsObjects'] = stA1;
lcA0['fld_org_netbeans_html_ko4j_CacheObjs_jsIndex'] = 1;
var lcA2 = (lcA0['fld_org_netbeans_html_ko4j_CacheObjs_jsObjects'][0] || Array.at(lcA0['fld_org_netbeans_html_ko4j_CacheObjs_jsObjects'], 0));
Array.at(lcA0['fld_org_netbeans_html_ko4j_CacheObjs_jsObjects'], 0, null);
return lcA2;

    }
}}
};
    m.access = 0;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lorg/netbeans/html/ko4j/CacheObjs;', vm.org_netbeans_html_ko4j_CacheObjs, (16));
c._list(stA0);
c._listAt(0);
return;

};
    m.access = 8;
    m.cls = CLS;    __mul32 = function(x, y) {
        return (((x * (y >> 16)) << 16) + x * (y & 0xFFFF)) | 0;
    };
    function __handleDivByZero() {
        var exception = new vm.java_lang_ArithmeticException;
        vm.java_lang_ArithmeticException(false).constructor
          .cons__VLjava_lang_String_2.call(exception, "/ by zero");

        throw exception;
    }
    function __mod32(x, y) {
        if (y === 0) __handleDivByZero();
        return (x % y) | 0;
    }

    c.constructor = CLS;
    function org_netbeans_html_ko4j_CacheObjsfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_ko4j_CacheObjs', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_ko4j_CacheObjsfillInstOf });
    org_netbeans_html_ko4j_CacheObjsfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/ko4j/CacheObjs';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 48;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_org_netbeans_html_boot_spi_Fn;
    var refs_org_netbeans_html_ko4j_Knockout;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_org_netbeans_html_ko4j_CacheObjs_ref'] = null;
    this['fld_org_netbeans_html_ko4j_CacheObjs_jsObjects'] = null;
    this['fld_org_netbeans_html_ko4j_CacheObjs_jsIndex'] = 0;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_netbeans_html_ko4j_CacheObjs = org_netbeans_html_ko4j_CacheObjs;


function org_netbeans_html_ko4j_MapObjs() {
  var m;
  var CLS = org_netbeans_html_ko4j_MapObjs;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_onlyPresenter'] = null;
  m = c._onlyPresenter = function (v) {  if (arguments.length == 1) CLS['fld_onlyPresenter'] = v; return CLS['fld_onlyPresenter']; };
  CLS['fld_usePresenter'] = 0;
  m = c._usePresenter = function (v) {  if (arguments.length == 1) CLS['fld_usePresenter'] = v; return CLS['fld_usePresenter']; };
  m = c._all = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_ko4j_MapObjs_all'] = v; return this['fld_org_netbeans_html_ko4j_MapObjs_all']; };
    m = c.reset__V = function() {
c._onlyPresenter(null);
c._usePresenter(1);
return;

};
    m.access = 40;
    m.cls = CLS;
    m = CLS.cons__VLorg_netbeans_html_boot_spi_Fn$Ref_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 2);
Array.at(stA1, 0, lcA1);
Array.at(stA1, 1, lcA2);
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['asList__Ljava_util_List_2_3Ljava_lang_Object_2'](stA1);
stA0['fld_org_netbeans_html_ko4j_MapObjs_all'] = stA1;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = CLS.cons__VLorg_netbeans_html_boot_spi_Fn$Ref_2Ljava_lang_Object_2Lorg_netbeans_html_boot_spi_Fn$Ref_2Ljava_lang_Object_2 = function(lcA1, lcA2, lcA3, lcA4) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 4);
Array.at(stA1, 0, lcA1);
Array.at(stA1, 1, lcA2);
Array.at(stA1, 2, lcA3);
Array.at(stA1, 3, lcA4);
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['asList__Ljava_util_List_2_3Ljava_lang_Object_2'](stA1);
stA0['fld_org_netbeans_html_ko4j_MapObjs_all'] = stA1;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.put__Ljava_lang_Object_2Ljava_lang_Object_2Lorg_netbeans_html_boot_spi_Fn$Presenter_2Ljava_lang_Object_2 = function(lcA0, lcA1, lcA2) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = lcA0 != null && lcA0['$instOf_org_netbeans_html_ko4j_MapObjs'] ? 1 : 0;
if ((stI0) == 0) { gt = 17; break IF; }
if (lcA0 !== null && !lcA0['$instOf_org_netbeans_html_ko4j_MapObjs']) vm.java_lang_Class(false).castEx(lcA0, 'org.netbeans.html.ko4j.MapObjs');
var stA0 = c.put__Ljava_lang_Object_2Lorg_netbeans_html_boot_spi_Fn$Presenter_2Ljava_lang_Object_2.call(lcA0, lcA1, lcA2);
return stA0;
    }
    X_17: for (;;) { IF: if (gt <= 17) {

if ((c._usePresenter()) == 0) { gt = 48; break IF; }
var stA0 = c.getOnlyPresenter__Lorg_netbeans_html_boot_spi_Fn$Presenter_2();
if ((stA0) !== null) { gt = 35; break IF; }
c.setOnlyPresenter__VLorg_netbeans_html_boot_spi_Fn$Presenter_2(lcA1);
return lcA2;
    }
    X_35: for (;;) { IF: if (gt <= 35) {
var stA0 = c.getOnlyPresenter__Lorg_netbeans_html_boot_spi_Fn$Presenter_2();
if ((stA0) !== (lcA1)) { gt = 44; break IF; }
return lcA2;
    }
    X_44: for (;;) { IF: if (gt <= 44) {

c._usePresenter(0);
    }
    X_48: for (;;) { IF: if (gt <= 48) {

if ((lcA0) !== null) { gt = 65; break IF; }
var stA0 = new org_netbeans_html_ko4j_MapObjs;
var stA1 = stA0;var stA2 = (refs_org_netbeans_html_boot_spi_Fn || (refs_org_netbeans_html_boot_spi_Fn = vm.org_netbeans_html_boot_spi_Fn(false)))['ref__Lorg_netbeans_html_boot_spi_Fn$Ref_2Lorg_netbeans_html_boot_spi_Fn$Presenter_2'](lcA1);
c.constructor.cons__VLorg_netbeans_html_boot_spi_Fn$Ref_2Ljava_lang_Object_2.call(stA1, stA2, lcA2);
return stA0;
    }
    X_65: for (;;) { IF: if (gt <= 65) {
var stA0 = new org_netbeans_html_ko4j_MapObjs;
var stA1 = stA0;var stA2 = c._onlyPresenter();var stA3 = lcA0;var stA4 = (refs_org_netbeans_html_boot_spi_Fn || (refs_org_netbeans_html_boot_spi_Fn = vm.org_netbeans_html_boot_spi_Fn(false)))['ref__Lorg_netbeans_html_boot_spi_Fn$Ref_2Lorg_netbeans_html_boot_spi_Fn$Presenter_2'](lcA1);
c.constructor.cons__VLorg_netbeans_html_boot_spi_Fn$Ref_2Ljava_lang_Object_2Lorg_netbeans_html_boot_spi_Fn$Ref_2Ljava_lang_Object_2.call(stA1, stA2, stA3, stA4, lcA2);
return stA0;

    }
}}}}}}
};
    m.access = 40;
    m.cls = CLS;
    m = c.get__Ljava_lang_Object_2Ljava_lang_Object_2Lorg_netbeans_html_boot_spi_Fn$Presenter_2 = function(lcA0, lcA1) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = lcA0 != null && lcA0['$instOf_org_netbeans_html_ko4j_MapObjs'] ? 1 : 0;
if ((stI0) == 0) { gt = 16; break IF; }
if (lcA0 !== null && !lcA0['$instOf_org_netbeans_html_ko4j_MapObjs']) vm.java_lang_Class(false).castEx(lcA0, 'org.netbeans.html.ko4j.MapObjs');
var stA0 = c.get__Ljava_lang_Object_2Lorg_netbeans_html_boot_spi_Fn$Presenter_2.call(lcA0, lcA1);
return stA0;
    }
    X_16: for (;;) { IF: if (gt <= 16) {

var stA0 = lcA1;var stA1 = c.getOnlyPresenter__Lorg_netbeans_html_boot_spi_Fn$Presenter_2();
if ((stA0) !== (stA1)) { gt = 27; break IF; }
var stA0 = lcA0;{ gt = 28; break IF; }
    }
    X_27: for (;;) { IF: if (gt <= 27) {

var stA0 = null;    }
    X_28: for (;;) { IF: if (gt <= 28) {
return stA0;

    }
}}}}
};
    m.access = 40;
    m.cls = CLS;
    m = c.remove___3Ljava_lang_Object_2Ljava_lang_Object_2Lorg_netbeans_html_boot_spi_Fn$Presenter_2 = function(lcA0, lcA1) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = lcA0 != null && lcA0['$instOf_org_netbeans_html_ko4j_MapObjs'] ? 1 : 0;
if ((stI0) == 0) { gt = 16; break IF; }
if (lcA0 !== null && !lcA0['$instOf_org_netbeans_html_ko4j_MapObjs']) vm.java_lang_Class(false).castEx(lcA0, 'org.netbeans.html.ko4j.MapObjs');
var stA0 = c.remove___3Ljava_lang_Object_2Lorg_netbeans_html_boot_spi_Fn$Presenter_2.call(lcA0, lcA1);
return stA0;
    }
    X_16: for (;;) { IF: if (gt <= 16) {

var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 2);
Array.at(stA0, 0, lcA0);
Array.at(stA0, 1, null);
return stA0;

    }
}}
};
    m.access = 40;
    m.cls = CLS;
    m = c.toArray___3Ljava_lang_Object_2Ljava_lang_Object_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = lcA0 != null && lcA0['$instOf_org_netbeans_html_ko4j_MapObjs'] ? 1 : 0;
if ((stI0) == 0) { gt = 20; break IF; }
if (lcA0 !== null && !lcA0['$instOf_org_netbeans_html_ko4j_MapObjs']) vm.java_lang_Class(false).castEx(lcA0, 'org.netbeans.html.ko4j.MapObjs');
var stA0 = invoker.toArray___3Ljava_lang_Object_2(lcA0['fld_org_netbeans_html_ko4j_MapObjs_all']);
return stA0;
    }
    X_20: for (;;) { IF: if (gt <= 20) {
var stA0 = c.getOnlyPresenter__Lorg_netbeans_html_boot_spi_Fn$Presenter_2();
var lcA1 = stA0;
if ((lcA1) !== null) { gt = 33; break IF; }
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 0);
return stA0;
    }
    X_33: for (;;) { IF: if (gt <= 33) {

var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 2);
Array.at(stA0, 0, lcA1);
Array.at(stA0, 1, lcA0);
return stA0;

    }
}}}
};
    m.access = 40;
    m.cls = CLS;
    m = c.put__Ljava_lang_Object_2Lorg_netbeans_html_boot_spi_Fn$Presenter_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var lcI3 = 0;
    }
    X_2: for (;;) { IF: if (gt <= 2) {

var stI0 = lcI3;var stI1 = invoker.size__I(lcA0['fld_org_netbeans_html_ko4j_MapObjs_all']);
if ((stI0) >= (stI1)) { gt = 46; break IF; }
var stI0 = lcA0.isSameKey__ZILorg_netbeans_html_boot_spi_Fn$Presenter_2(lcI3, lcA1);
if ((stI0) == 0) { gt = 40; break IF; }
var stA0 = invoker.set__Ljava_lang_Object_2ILjava_lang_Object_2(lcA0['fld_org_netbeans_html_ko4j_MapObjs_all'],(((lcI3) + (1)) | 0), lcA2);
return lcA0;
    }
    X_40: for (;;) { IF: if (gt <= 40) {
lcI3 += 2;
{ gt = 0; continue X_2; }
    }
    X_46: for (;;) { IF: if (gt <= 46) {

var stA0 = lcA0['fld_org_netbeans_html_ko4j_MapObjs_all'];var stA1 = (refs_org_netbeans_html_boot_spi_Fn || (refs_org_netbeans_html_boot_spi_Fn = vm.org_netbeans_html_boot_spi_Fn(false)))['ref__Lorg_netbeans_html_boot_spi_Fn$Ref_2Lorg_netbeans_html_boot_spi_Fn$Presenter_2'](lcA1);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,stA1);
var stI0 = invoker.add__ZLjava_lang_Object_2(lcA0['fld_org_netbeans_html_ko4j_MapObjs_all'],lcA2);
return lcA0;

    }
}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.isSameKey__ZILorg_netbeans_html_boot_spi_Fn$Presenter_2 = function(lcI1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = invoker.get__Ljava_lang_Object_2I(lcA0['fld_org_netbeans_html_ko4j_MapObjs_all'],lcI1);
var lcA3 = stA0;
var stI0 = lcA3 != null && lcA3['$instOf_org_netbeans_html_boot_spi_Fn$Ref'] ? 1 : 0;
if ((stI0) == 0) { gt = 28; break IF; }
if (lcA3 !== null && !lcA3['$instOf_org_netbeans_html_boot_spi_Fn$Ref']) vm.java_lang_Class(false).castEx(lcA3, 'org.netbeans.html.boot.spi.Fn$Ref');
var stA0 = invoker.presenter__Lorg_netbeans_html_boot_spi_Fn$Presenter_2(lcA3);
var lcA3 = stA0;
    }
    X_28: for (;;) { IF: if (gt <= 28) {

if ((lcA3) !== (lcA2)) { gt = 37; break IF; }
var stI0 = 1;{ gt = 38; break IF; }
    }
    X_37: for (;;) { IF: if (gt <= 37) {

var stI0 = 0;    }
    X_38: for (;;) { IF: if (gt <= 38) {
return stI0;

    }
}}}}
};
    m.access = 0;
    m.cls = CLS;
    m = c.get__Ljava_lang_Object_2Lorg_netbeans_html_boot_spi_Fn$Presenter_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var lcI2 = 0;
    }
    X_2: for (;;) { IF: if (gt <= 2) {

var stI0 = lcI2;var stI1 = invoker.size__I(lcA0['fld_org_netbeans_html_ko4j_MapObjs_all']);
if ((stI0) >= (stI1)) { gt = 43; break IF; }
var stI0 = lcA0.isSameKey__ZILorg_netbeans_html_boot_spi_Fn$Presenter_2(lcI2, lcA1);
if ((stI0) == 0) { gt = 37; break IF; }
var stA0 = invoker.get__Ljava_lang_Object_2I(lcA0['fld_org_netbeans_html_ko4j_MapObjs_all'],(((lcI2) + (1)) | 0));
return stA0;
    }
    X_37: for (;;) { IF: if (gt <= 37) {
lcI2 += 2;
{ gt = 0; continue X_2; }
    }
    X_43: for (;;) { IF: if (gt <= 43) {

return null;

    }
}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.remove___3Ljava_lang_Object_2Lorg_netbeans_html_boot_spi_Fn$Presenter_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var lcI2 = 0;
    }
    X_2: for (;;) { IF: if (gt <= 2) {

var stI0 = lcI2;var stI1 = invoker.size__I(lcA0['fld_org_netbeans_html_ko4j_MapObjs_all']);
if ((stI0) >= (stI1)) { gt = 54; break IF; }
var stI0 = lcA0.isSameKey__ZILorg_netbeans_html_boot_spi_Fn$Presenter_2(lcI2, lcA1);
if ((stI0) == 0) { gt = 48; break IF; }
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 2);
var stA1 = stA0;var stI2 = 0;var stA3 = invoker.get__Ljava_lang_Object_2I(lcA0['fld_org_netbeans_html_ko4j_MapObjs_all'],(((lcI2) + (1)) | 0));
Array.at(stA1, stI2, stA3);
Array.at(stA0, 1, lcA0);
return stA0;
    }
    X_48: for (;;) { IF: if (gt <= 48) {
lcI2 += 2;
{ gt = 0; continue X_2; }
    }
    X_54: for (;;) { IF: if (gt <= 54) {

var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 2);
Array.at(stA0, 0, null);
Array.at(stA0, 1, lcA0);
return stA0;

    }
}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.getOnlyPresenter__Lorg_netbeans_html_boot_spi_Fn$Presenter_2 = function() {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((c._onlyPresenter()) !== null) { gt = 10; break IF; }
var stA0 = null;{ gt = 18; break IF; }
    }
    X_10: for (;;) { IF: if (gt <= 10) {

var stA0 = invoker.presenter__Lorg_netbeans_html_boot_spi_Fn$Presenter_2(c._onlyPresenter());
    }
    X_18: for (;;) { IF: if (gt <= 18) {
var lcA0 = stA0;
return lcA0;

    }
}}}
};
    m.access = 10;
    m.cls = CLS;
    m = c.setOnlyPresenter__VLorg_netbeans_html_boot_spi_Fn$Presenter_2 = function(lcA0) {
var stA0 = (refs_org_netbeans_html_boot_spi_Fn || (refs_org_netbeans_html_boot_spi_Fn = vm.org_netbeans_html_boot_spi_Fn(false)))['ref__Lorg_netbeans_html_boot_spi_Fn$Ref_2Lorg_netbeans_html_boot_spi_Fn$Presenter_2'](lcA0);
c._onlyPresenter(stA0);
return;

};
    m.access = 10;
    m.cls = CLS;
    m = c.class__V = function() {
c.reset__V();
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_ko4j_MapObjsfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_ko4j_MapObjs', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_ko4j_MapObjsfillInstOf });
    org_netbeans_html_ko4j_MapObjsfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/ko4j/MapObjs';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 48;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_net_java_html_json_Models;
    var refs_org_netbeans_html_boot_spi_Fn;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_org_netbeans_html_ko4j_MapObjs_all'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_netbeans_html_ko4j_MapObjs = org_netbeans_html_ko4j_MapObjs;

vm.java_lang_Integer = link('java/lang/Integer', function(f) { vm.java_lang_Integer =  f; });

function org_netbeans_html_ko4j_KOTransfer$JSObjToStr() {
  var m;
  var CLS = org_netbeans_html_ko4j_KOTransfer$JSObjToStr;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._str = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_ko4j_KOTransfer$JSObjToStr_str'] = v; return this['fld_org_netbeans_html_ko4j_KOTransfer$JSObjToStr_str']; };
  m = c._obj = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_ko4j_KOTransfer$JSObjToStr_obj'] = v; return this['fld_org_netbeans_html_ko4j_KOTransfer$JSObjToStr_obj']; };
    m = CLS.cons__VLjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = lcA0;if ((lcA1) !== null) { gt = 14; break IF; }
var stA1 = "";{ gt = 18; break IF; }
    }
    X_14: for (;;) { IF: if (gt <= 14) {

var stA1 = invoker.toString__Ljava_lang_String_2(lcA1);
    }
    X_18: for (;;) { IF: if (gt <= 18) {
stA0['fld_org_netbeans_html_ko4j_KOTransfer$JSObjToStr_str'] = stA1;
lcA0['fld_org_netbeans_html_ko4j_KOTransfer$JSObjToStr_obj'] = lcA2;
return;

    }
}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.toString__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
return lcA0['fld_org_netbeans_html_ko4j_KOTransfer$JSObjToStr_str'];

};
c['toString__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_ko4j_KOTransfer$JSObjToStrfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_ko4j_KOTransfer$JSObjToStr', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_ko4j_KOTransfer$JSObjToStrfillInstOf });
    org_netbeans_html_ko4j_KOTransfer$JSObjToStrfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/ko4j/KOTransfer$JSObjToStr';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 48;
    CLS.$class.cnstr = CLS;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_org_netbeans_html_ko4j_KOTransfer$JSObjToStr_str'] = null;
    this['fld_org_netbeans_html_ko4j_KOTransfer$JSObjToStr_obj'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_netbeans_html_ko4j_KOTransfer$JSObjToStr = org_netbeans_html_ko4j_KOTransfer$JSObjToStr;

vm.org_netbeans_html_boot_spi_Fn = link('org/netbeans/html/boot/spi/Fn', function(f) { vm.org_netbeans_html_boot_spi_Fn =  f; });

function org_netbeans_html_ko4j_KO4J() {
  var m;
  var CLS = org_netbeans_html_ko4j_KO4J;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._ko4j = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_ko4j_KO4J_ko4j'] = v; return this['fld_org_netbeans_html_ko4j_KO4J_ko4j']; };
  m = c._trans = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_ko4j_KO4J_trans'] = v; return this['fld_org_netbeans_html_ko4j_KO4J_trans']; };
  m = c._socks = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_ko4j_KO4J_socks'] = v; return this['fld_org_netbeans_html_ko4j_KO4J_socks']; };
    m = CLS.cons__V = function() {
  var  lcA0 = this;
c.constructor.cons__VLorg_netbeans_html_boot_spi_Fn$Presenter_2.call(lcA0, null);
return;

};
CLS['cons__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLorg_netbeans_html_boot_spi_Fn$Presenter_2 = function(lcA1) {
  var  lcA0 = this;
return;

};
CLS['cons__VLorg_netbeans_html_boot_spi_Fn$Presenter_2'] = m;

    m.anno = {"Ljava/lang/Deprecated;" : {

}

    };
    m.access = 1;
    m.cls = CLS;
    m = c.knockout__Lorg_netbeans_html_json_spi_Technology_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((lcA0['fld_org_netbeans_html_ko4j_KO4J_ko4j']) !== null) { gt = 18; break IF; }
var stA0 = lcA0;var stA1 = new org_netbeans_html_ko4j_KOTech;
(refs_org_netbeans_html_ko4j_KOTech || (refs_org_netbeans_html_ko4j_KOTech = org_netbeans_html_ko4j_KOTech(false))).constructor.cons__V.call(stA1);
stA0['fld_org_netbeans_html_ko4j_KO4J_ko4j'] = stA1;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

return lcA0['fld_org_netbeans_html_ko4j_KO4J_ko4j'];

    }
}}
};
c['knockout__Lorg_netbeans_html_json_spi_Technology_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.transfer__Lorg_netbeans_html_json_spi_Transfer_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((lcA0['fld_org_netbeans_html_ko4j_KO4J_trans']) !== null) { gt = 18; break IF; }
var stA0 = lcA0;var stA1 = new org_netbeans_html_ko4j_KOTransfer;
(refs_org_netbeans_html_ko4j_KOTransfer || (refs_org_netbeans_html_ko4j_KOTransfer = org_netbeans_html_ko4j_KOTransfer(false))).constructor.cons__V.call(stA1);
stA0['fld_org_netbeans_html_ko4j_KO4J_trans'] = stA1;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

return lcA0['fld_org_netbeans_html_ko4j_KO4J_trans'];

    }
}}
};
c['transfer__Lorg_netbeans_html_json_spi_Transfer_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.websockets__Lorg_netbeans_html_json_spi_WSTransfer_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
var stI0 = (refs_org_netbeans_html_ko4j_KOSockets || (refs_org_netbeans_html_ko4j_KOSockets = org_netbeans_html_ko4j_KOSockets(false))).areWebSocketsSupported__Z();
if ((stI0) != 0) { gt = 8; break IF; }
return null;
    }
    X_8: for (;;) { IF: if (gt <= 8) {

if ((lcA0['fld_org_netbeans_html_ko4j_KO4J_socks']) !== null) { gt = 26; break IF; }
var stA0 = lcA0;var stA1 = new org_netbeans_html_ko4j_KOSockets;
(refs_org_netbeans_html_ko4j_KOSockets || (refs_org_netbeans_html_ko4j_KOSockets = org_netbeans_html_ko4j_KOSockets(false))).constructor.cons__V.call(stA1);
stA0['fld_org_netbeans_html_ko4j_KO4J_socks'] = stA1;
    }
    X_26: for (;;) { IF: if (gt <= 26) {

return lcA0['fld_org_netbeans_html_ko4j_KO4J_socks'];

    }
}}}
};
c['websockets__Lorg_netbeans_html_json_spi_WSTransfer_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.fillContext__VLorg_netbeans_html_context_spi_Contexts$Builder_2Ljava_lang_Class_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = lcA1;var stA1 = (refs_org_netbeans_html_json_spi_Technology || (refs_org_netbeans_html_json_spi_Technology = vm.org_netbeans_html_json_spi_Technology(false))).constructor.$class;var stA2 = lcA0.knockout__Lorg_netbeans_html_json_spi_Technology_2();
var stA0 = invoker.register__Lorg_netbeans_html_context_spi_Contexts$Builder_2Ljava_lang_Class_2Ljava_lang_Object_2I(stA0,stA1, stA2, (100));
var stA0 = lcA1;var stA1 = (refs_org_netbeans_html_json_spi_Transfer || (refs_org_netbeans_html_json_spi_Transfer = vm.org_netbeans_html_json_spi_Transfer(false))).constructor.$class;var stA2 = lcA0.transfer__Lorg_netbeans_html_json_spi_Transfer_2();
var stA0 = invoker.register__Lorg_netbeans_html_context_spi_Contexts$Builder_2Ljava_lang_Class_2Ljava_lang_Object_2I(stA0,stA1, stA2, (100));
var stA0 = lcA1;var stA1 = (refs_org_netbeans_html_json_spi_WSTransfer || (refs_org_netbeans_html_json_spi_WSTransfer = vm.org_netbeans_html_json_spi_WSTransfer(false))).constructor.$class;var stA2 = lcA0.websockets__Lorg_netbeans_html_json_spi_WSTransfer_2();
var stA0 = invoker.register__Lorg_netbeans_html_context_spi_Contexts$Builder_2Ljava_lang_Class_2Ljava_lang_Object_2I(stA0,stA1, stA2, (100));
return;

};
c['fillContext__VLorg_netbeans_html_context_spi_Contexts$Builder_2Ljava_lang_Class_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_ko4j_KO4JfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_ko4j_KO4J', { value : true });
      vm.org_netbeans_html_context_spi_Contexts$Provider(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_ko4j_KO4JfillInstOf });
    org_netbeans_html_ko4j_KO4JfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/ko4j/KO4J';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.org_netbeans_html_context_spi_Contexts$Provider(false).constructor.$class
    ]; };
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    var refs_org_netbeans_html_ko4j_KOTech;
    var refs_org_netbeans_html_ko4j_KOTransfer;
    var refs_org_netbeans_html_ko4j_KOSockets;
    var refs_org_netbeans_html_json_spi_Technology;
    var refs_org_netbeans_html_json_spi_Transfer;
    var refs_org_netbeans_html_json_spi_WSTransfer;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_org_netbeans_html_ko4j_KO4J_ko4j'] = null;
    this['fld_org_netbeans_html_ko4j_KO4J_trans'] = null;
    this['fld_org_netbeans_html_ko4j_KO4J_socks'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_netbeans_html_ko4j_KO4J = registerClass(exports,'org_netbeans_html_ko4j_KO4J',org_netbeans_html_ko4j_KO4J);

vm.org_netbeans_html_context_spi_Contexts$Provider = link('org/netbeans/html/context/spi/Contexts$Provider', function(f) { vm.org_netbeans_html_context_spi_Contexts$Provider =  f; });
vm.org_netbeans_html_json_spi_WSTransfer = link('org/netbeans/html/json/spi/WSTransfer', function(f) { vm.org_netbeans_html_json_spi_WSTransfer =  f; });
vm.org_netbeans_html_json_spi_Technology = link('org/netbeans/html/json/spi/Technology', function(f) { vm.org_netbeans_html_json_spi_Technology =  f; });

function org_netbeans_html_ko4j_KOSockets() {
  var m;
  var CLS = org_netbeans_html_ko4j_KOSockets;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_$$fn$$areWebSocketsSupported_1'] = null;
  m = c._$$fn$$areWebSocketsSupported_1 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$areWebSocketsSupported_1'] = v; return CLS['fld_$$fn$$areWebSocketsSupported_1']; };
    m = CLS.cons__V = function() {
  var  lcA0 = this;
return;

};
CLS['cons__V'] = m;

    m.access = 0;
    m.cls = CLS;
    m = c.open__Lorg_netbeans_html_ko4j_LoadWS_2Ljava_lang_String_2Lorg_netbeans_html_json_spi_JSONCall_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = new org_netbeans_html_ko4j_LoadWS;
(refs_org_netbeans_html_ko4j_LoadWS || (refs_org_netbeans_html_ko4j_LoadWS = org_netbeans_html_ko4j_LoadWS(false))).constructor.cons__VLorg_netbeans_html_json_spi_JSONCall_2Ljava_lang_String_2.call(stA0, lcA2, lcA1);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.send__VLorg_netbeans_html_ko4j_LoadWS_2Lorg_netbeans_html_json_spi_JSONCall_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
lcA1.send__VLorg_netbeans_html_json_spi_JSONCall_2(lcA2);
return;

};
    m.access = 1;
    m.cls = CLS;
    m = c.close__VLorg_netbeans_html_ko4j_LoadWS_2 = function(lcA1) {
  var  lcA0 = this;
lcA1.close__V();
return;

};
    m.access = 1;
    m.cls = CLS;
    m = c.areWebSocketsSupported__Z = function() {
  var r = (function() {
if (window['WebSocket']) return true; else return false;
}).apply(this, arguments);
  return r === undefined ? null : r;

}

    m.access = 24;
    m.cls = CLS;
    m = c.close__VLjava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_org_netbeans_html_ko4j_LoadWS']) vm.java_lang_Class(false).castEx(lcA1, 'org.netbeans.html.ko4j.LoadWS');
lcA0.close__VLorg_netbeans_html_ko4j_LoadWS_2(lcA1);
return;

};
c['close__VLjava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.send__VLjava_lang_Object_2Lorg_netbeans_html_json_spi_JSONCall_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_org_netbeans_html_ko4j_LoadWS']) vm.java_lang_Class(false).castEx(lcA1, 'org.netbeans.html.ko4j.LoadWS');
lcA0.send__VLorg_netbeans_html_ko4j_LoadWS_2Lorg_netbeans_html_json_spi_JSONCall_2(lcA1, lcA2);
return;

};
c['send__VLjava_lang_Object_2Lorg_netbeans_html_json_spi_JSONCall_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.open__Ljava_lang_Object_2Ljava_lang_String_2Lorg_netbeans_html_json_spi_JSONCall_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = lcA0.open__Lorg_netbeans_html_ko4j_LoadWS_2Ljava_lang_String_2Lorg_netbeans_html_json_spi_JSONCall_2(lcA1, lcA2);
return stA0;

};
c['open__Ljava_lang_Object_2Ljava_lang_String_2Lorg_netbeans_html_json_spi_JSONCall_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_ko4j_KOSocketsfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_ko4j_KOSockets', { value : true });
      vm.org_netbeans_html_json_spi_WSTransfer(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_ko4j_KOSocketsfillInstOf });
    org_netbeans_html_ko4j_KOSocketsfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/ko4j/KOSockets';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.org_netbeans_html_json_spi_WSTransfer(false).constructor.$class
    ]; };
    CLS.$class.access = 48;
    CLS.$class.cnstr = CLS;
    CLS.$class.anno = {"Lorg/netbeans/html/context/spi/Contexts$Id;" : {
"value" : ["websocket"]
}

    };
    var refs_org_netbeans_html_ko4j_LoadWS;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_netbeans_html_ko4j_KOSockets = org_netbeans_html_ko4j_KOSockets;


function org_netbeans_html_ko4j_LoadWS() {
  var m;
  var CLS = org_netbeans_html_ko4j_LoadWS;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._ws = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_ko4j_LoadWS_ws'] = v; return this['fld_org_netbeans_html_ko4j_LoadWS_ws']; };
  m = c._call = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_ko4j_LoadWS_call'] = v; return this['fld_org_netbeans_html_ko4j_LoadWS_call']; };
  CLS['fld_$$fn$$toJSON_1'] = null;
  m = c._$$fn$$toJSON_1 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$toJSON_1'] = v; return CLS['fld_$$fn$$toJSON_1']; };
  CLS['fld_$$fn$$initWebSocket_2'] = null;
  m = c._$$fn$$initWebSocket_2 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$initWebSocket_2'] = v; return CLS['fld_$$fn$$initWebSocket_2']; };
  CLS['fld_$$fn$$send_3'] = null;
  m = c._$$fn$$send_3 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$send_3'] = v; return CLS['fld_$$fn$$send_3']; };
  CLS['fld_$$fn$$close_4'] = null;
  m = c._$$fn$$close_4 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$close_4'] = v; return CLS['fld_$$fn$$close_4']; };
    m = CLS.cons__VLorg_netbeans_html_json_spi_JSONCall_2Ljava_lang_String_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

lcA0['fld_org_netbeans_html_ko4j_LoadWS_call'] = lcA1;
var stA0 = lcA0;var stA1 = c.initWebSocket__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_String_2(lcA0, lcA2);
stA0['fld_org_netbeans_html_ko4j_LoadWS_ws'] = stA1;
if ((lcA0['fld_org_netbeans_html_ko4j_LoadWS_ws']) !== null) { gt = 55; break IF; }
var stA0 = lcA1;var stA1 = new vm.java_lang_IllegalArgumentException;
var stA2 = stA1;var stA3 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA3);
var stA3 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA3,"Wrong URL: ");
var stA3 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA3,lcA2);
var stA3 = invoker.toString__Ljava_lang_String_2(stA3);
(refs_java_lang_IllegalArgumentException || (refs_java_lang_IllegalArgumentException = vm.java_lang_IllegalArgumentException(false))).constructor['cons__VLjava_lang_String_2'].call(stA2, stA3);
invoker.notifyError__VLjava_lang_Throwable_2(stA0,stA1);
    }
    X_55: for (;;) { IF: if (gt <= 55) {
return;

    }
}}
};
    m.access = 0;
    m.cls = CLS;
    m = c.send__VLorg_netbeans_html_json_spi_JSONCall_2 = function(lcA1) {
  var  lcA0 = this;
c.push__VLorg_netbeans_html_json_spi_JSONCall_2.call(lcA0, lcA1);
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.push__VLorg_netbeans_html_json_spi_JSONCall_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = lcA0['fld_org_netbeans_html_ko4j_LoadWS_ws'];var stA2 = invoker.getMessage__Ljava_lang_String_2(lcA1);
c.send__VLjava_lang_Object_2Ljava_lang_String_2.call(stA0, stA1, stA2);
return;

};
    m.access = 34;
    m.cls = CLS;
    m = c.onOpen__VLjava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = invoker.isDoOutput__Z(lcA0['fld_org_netbeans_html_ko4j_LoadWS_call']);
if ((stI0) != 0) { gt = 18; break IF; }
invoker.notifySuccess__VLjava_lang_Object_2(lcA0['fld_org_netbeans_html_ko4j_LoadWS_call'],null);
    }
    X_18: for (;;) { IF: if (gt <= 18) {
return;

    }
}}
};
    m.access = 0;
    m.cls = CLS;
    m = c.toJSON__Ljava_lang_Object_2Ljava_lang_String_2 = function() {
  var r = (function(data) {

  data = vm.java_lang_Class(false).toJS(data);try {
    return eval('(' + data + ')');
  } catch (error) {;
    return data;
  }

}).apply(this, arguments);
  return r === undefined ? null : r;

}

    m.access = 10;
    m.cls = CLS;
    m = c.onMessage__VLjava_lang_Object_2Ljava_lang_String_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = c.toJSON__Ljava_lang_Object_2Ljava_lang_String_2(lcA2);
var lcA3 = stA0;
invoker.notifySuccess__VLjava_lang_Object_2(lcA0['fld_org_netbeans_html_ko4j_LoadWS_call'],lcA3);
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.onError__VLjava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = lcA0['fld_org_netbeans_html_ko4j_LoadWS_call'];var stA1 = new vm.java_lang_Exception;
var stA2 = stA1;var stA3 = invoker.toString__Ljava_lang_String_2(lcA1);
(refs_java_lang_Exception || (refs_java_lang_Exception = vm.java_lang_Exception(false))).constructor['cons__VLjava_lang_String_2'].call(stA2, stA3);
invoker.notifyError__VLjava_lang_Throwable_2(stA0,stA1);
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.onClose__VZILjava_lang_String_2 = function(lcI1, lcI2, lcA3) {
  var  lcA0 = this;
invoker.notifyError__VLjava_lang_Throwable_2(lcA0['fld_org_netbeans_html_ko4j_LoadWS_call'],null);
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.initWebSocket__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_String_2 = function() {
  var r = (function(back,url) {

  back = vm.java_lang_Class(false).toJS(back);
  url = vm.java_lang_Class(false).toJS(url);if (window.WebSocket) {
  try {
    var ws = new window.WebSocket(url);
    ws.onopen = function(ev) {
      vm.java_lang_Class(false).toJS(vm.org_netbeans_html_ko4j_$JsCallbacks$(false)._VM().org_1netbeans_1html_1ko4j_1LoadWS$onOpen$Ljava_1lang_1Object_12__Ljava_lang_Object_2Lorg_netbeans_html_ko4j_LoadWS_2Ljava_lang_Object_2(back,ev));
    };
    ws.onmessage = function(ev) {
      vm.java_lang_Class(false).toJS(vm.org_netbeans_html_ko4j_$JsCallbacks$(false)._VM().org_1netbeans_1html_1ko4j_1LoadWS$onMessage$Ljava_1lang_1Object_12Ljava_1lang_1String_12__Ljava_lang_Object_2Lorg_netbeans_html_ko4j_LoadWS_2Ljava_lang_Object_2Ljava_lang_String_2(back,ev, ev.data));
    };
    ws.onerror = function(ev) {
      vm.java_lang_Class(false).toJS(vm.org_netbeans_html_ko4j_$JsCallbacks$(false)._VM().org_1netbeans_1html_1ko4j_1LoadWS$onError$Ljava_1lang_1Object_12__Ljava_lang_Object_2Lorg_netbeans_html_ko4j_LoadWS_2Ljava_lang_Object_2(back,ev));
    };
    ws.onclose = function(ev) {
      vm.java_lang_Class(false).toJS(vm.org_netbeans_html_ko4j_$JsCallbacks$(false)._VM().org_1netbeans_1html_1ko4j_1LoadWS$onClose$ZILjava_1lang_1String_12__Ljava_lang_Object_2Lorg_netbeans_html_ko4j_LoadWS_2ZILjava_lang_String_2(back,ev.wasClean, ev.code, ev.reason));
    };
    return ws;
  } catch (ex) {
    return null;
  }
} else {
  return null;
}

}).apply(this, arguments);
  return r === undefined ? null : r;

}

    m.access = 10;
    m.cls = CLS;
    m = c.send__VLjava_lang_Object_2Ljava_lang_String_2 = function() {
  var r = (function(ws,msg) {

  ws = vm.java_lang_Class(false).toJS(ws);
  msg = vm.java_lang_Class(false).toJS(msg);ws.send(msg);
}).apply(this, arguments);
  return r === undefined ? null : r;

}

    m.access = 2;
    m.cls = CLS;
    m = c.close__VLjava_lang_Object_2 = function() {
  var r = (function(ws) {

  ws = vm.java_lang_Class(false).toJS(ws);ws.close();
}).apply(this, arguments);
  return r === undefined ? null : r;

}

    m.access = 10;
    m.cls = CLS;
    m = c.close__V = function() {
  var  lcA0 = this;
c.close__VLjava_lang_Object_2(lcA0['fld_org_netbeans_html_ko4j_LoadWS_ws']);
return;

};
    m.access = 0;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_ko4j_LoadWSfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_ko4j_LoadWS', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_ko4j_LoadWSfillInstOf });
    org_netbeans_html_ko4j_LoadWSfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/ko4j/LoadWS';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 48;
    CLS.$class.cnstr = CLS;
    var refs_java_lang_StringBuilder;
    var refs_java_lang_IllegalArgumentException;
    var refs_java_lang_Exception;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_org_netbeans_html_ko4j_LoadWS_ws'] = null;
    this['fld_org_netbeans_html_ko4j_LoadWS_call'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_netbeans_html_ko4j_LoadWS = org_netbeans_html_ko4j_LoadWS;

vm.java_lang_IllegalArgumentException = link('java/lang/IllegalArgumentException', function(f) { vm.java_lang_IllegalArgumentException =  f; });

function org_netbeans_html_ko4j_KOTech() {
  var m;
  var CLS = org_netbeans_html_ko4j_KOTech;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_applied'] = null;
  m = c._applied = function (v) {  if (arguments.length == 1) CLS['fld_applied'] = v; return CLS['fld_applied']; };
    m = CLS.cons__V = function() {
  var  lcA0 = this;
return;

};
CLS['cons__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.wrapModel__Lorg_netbeans_html_ko4j_Knockout_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lorg_netbeans_html_json_spi_PropertyBinding_2_3Lorg_netbeans_html_json_spi_FunctionBinding_2 = function(lcA1, lcA2, lcA3, lcA4) {
  var  lcA0 = this;
var stA0 = lcA0.createKO__Lorg_netbeans_html_ko4j_Knockout_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lorg_netbeans_html_json_spi_PropertyBinding_2_3Lorg_netbeans_html_json_spi_FunctionBinding_2_3Lorg_netbeans_html_ko4j_Knockout_2(lcA1, lcA2, lcA3, lcA4, null);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.createKO__Lorg_netbeans_html_ko4j_Knockout_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lorg_netbeans_html_json_spi_PropertyBinding_2_3Lorg_netbeans_html_json_spi_FunctionBinding_2_3Lorg_netbeans_html_ko4j_Knockout_2 = function(lcA1, lcA2, lcA3, lcA4, lcA5) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
var stA0 = new org_netbeans_html_ko4j_Knockout;
(refs_org_netbeans_html_ko4j_Knockout || (refs_org_netbeans_html_ko4j_Knockout = org_netbeans_html_ko4j_Knockout(false))).constructor.cons__VLjava_lang_Object_2Ljava_lang_Object_2_3Lorg_netbeans_html_json_spi_PropertyBinding_2_3Lorg_netbeans_html_json_spi_FunctionBinding_2.call(stA0, lcA1, lcA2, lcA3, lcA4);
var lcA6 = stA0;
if ((lcA5) === null) { gt = 25; break IF; }
Array.at(lcA5, 0, lcA6);
    }
    X_25: for (;;) { IF: if (gt <= 25) {

return lcA6;

    }
}}
};
    m.access = 16;
    m.cls = CLS;
    m = c.wrapModel__Lorg_netbeans_html_ko4j_Knockout_2Ljava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.bind__VLorg_netbeans_html_json_spi_PropertyBinding_2Ljava_lang_Object_2Lorg_netbeans_html_ko4j_Knockout_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.valueHasMutated__VLorg_netbeans_html_ko4j_Knockout_2Ljava_lang_String_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
lcA0.valueHasMutated__VLorg_netbeans_html_ko4j_Knockout_2Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA1, lcA2, null, null);
return;

};
    m.access = 1;
    m.cls = CLS;
    m = c.valueHasMutated__VLorg_netbeans_html_ko4j_Knockout_2Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcA2, lcA3, lcA4) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
(refs_org_netbeans_html_ko4j_Knockout || (refs_org_netbeans_html_ko4j_Knockout = org_netbeans_html_ko4j_Knockout(false))).cleanUp__V();
if ((lcA1) === null) { gt = 30; break IF; }
var stI0 = lcA4 != null && lcA4['$instOf_java_lang_Enum'] ? 1 : 0;
if ((stI0) == 0) { gt = 22; break IF; }
var stA0 = invoker.toString__Ljava_lang_String_2(lcA4);
var lcA4 = stA0;
    }
    X_22: for (;;) { IF: if (gt <= 22) {

lcA1.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA2, lcA3, lcA4);
    }
    X_30: for (;;) { IF: if (gt <= 30) {
return;

    }
}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.expose__VLorg_netbeans_html_json_spi_FunctionBinding_2Ljava_lang_Object_2Lorg_netbeans_html_ko4j_Knockout_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.applyBindings__VLorg_netbeans_html_ko4j_Knockout_2 = function(lcA1) {
  var  lcA0 = this;
lcA0.applyBindings__VLjava_lang_String_2Lorg_netbeans_html_ko4j_Knockout_2(null, lcA1);
return;

};
    m.access = 1;
    m.cls = CLS;
    m = c.applyBindings__VLjava_lang_String_2Lorg_netbeans_html_ko4j_Knockout_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = lcA2.applyBindings__Ljava_lang_Object_2Ljava_lang_String_2(lcA1);
var lcA3 = stA0;
var stI0 = lcA3 != null && lcA3['$instOf_org_netbeans_html_ko4j_Knockout'] ? 1 : 0;
if ((stI0) == 0) { gt = 33; break IF; }
if (lcA3 !== null && !lcA3['$instOf_org_netbeans_html_ko4j_Knockout']) vm.java_lang_Class(false).castEx(lcA3, 'org.netbeans.html.ko4j.Knockout');
lcA3.hold__V();
if (lcA3 !== null && !lcA3['$instOf_org_netbeans_html_ko4j_Knockout']) vm.java_lang_Class(false).castEx(lcA3, 'org.netbeans.html.ko4j.Knockout');
var stI0 = invoker.add__ZLjava_lang_Object_2(c._applied(),lcA3);
    }
    X_33: for (;;) { IF: if (gt <= 33) {
return;

    }
}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.wrapArray__Ljava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
return lcA1;

};
c['wrapArray__Ljava_lang_Object_2_3Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.runSafe__VLjava_lang_Runnable_2 = function(lcA1) {
  var  lcA0 = this;
invoker.run__V(lcA1);
return;

};
c['runSafe__VLjava_lang_Runnable_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.toModel__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = lcA1;var stA1 = (refs_org_netbeans_html_ko4j_Knockout || (refs_org_netbeans_html_ko4j_Knockout = org_netbeans_html_ko4j_Knockout(false))).toModel__Ljava_lang_Object_2Ljava_lang_Object_2(lcA2);
var stA0 = invoker.cast__Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1);
return stA0;

};
c['toModel__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.toJavaScript__Ljava_lang_Object_2Lorg_netbeans_html_ko4j_Knockout_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = lcA1.js__Ljava_lang_Object_2();
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.wrapModel__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lorg_netbeans_html_json_spi_PropertyBinding_2_3Lorg_netbeans_html_json_spi_FunctionBinding_2 = function(lcA1, lcA2, lcA3, lcA4) {
  var  lcA0 = this;
var stA0 = lcA0.wrapModel__Lorg_netbeans_html_ko4j_Knockout_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lorg_netbeans_html_json_spi_PropertyBinding_2_3Lorg_netbeans_html_json_spi_FunctionBinding_2(lcA1, lcA2, lcA3, lcA4);
return stA0;

};
c['wrapModel__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lorg_netbeans_html_json_spi_PropertyBinding_2_3Lorg_netbeans_html_json_spi_FunctionBinding_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.applyBindings__VLjava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_org_netbeans_html_ko4j_Knockout']) vm.java_lang_Class(false).castEx(lcA1, 'org.netbeans.html.ko4j.Knockout');
lcA0.applyBindings__VLorg_netbeans_html_ko4j_Knockout_2(lcA1);
return;

};
c['applyBindings__VLjava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.expose__VLorg_netbeans_html_json_spi_FunctionBinding_2Ljava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
if (lcA3 !== null && !lcA3['$instOf_org_netbeans_html_ko4j_Knockout']) vm.java_lang_Class(false).castEx(lcA3, 'org.netbeans.html.ko4j.Knockout');
lcA0.expose__VLorg_netbeans_html_json_spi_FunctionBinding_2Ljava_lang_Object_2Lorg_netbeans_html_ko4j_Knockout_2(lcA1, lcA2, lcA3);
return;

};
c['expose__VLorg_netbeans_html_json_spi_FunctionBinding_2Ljava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.valueHasMutated__VLjava_lang_Object_2Ljava_lang_String_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_org_netbeans_html_ko4j_Knockout']) vm.java_lang_Class(false).castEx(lcA1, 'org.netbeans.html.ko4j.Knockout');
lcA0.valueHasMutated__VLorg_netbeans_html_ko4j_Knockout_2Ljava_lang_String_2(lcA1, lcA2);
return;

};
c['valueHasMutated__VLjava_lang_Object_2Ljava_lang_String_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.bind__VLorg_netbeans_html_json_spi_PropertyBinding_2Ljava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
if (lcA3 !== null && !lcA3['$instOf_org_netbeans_html_ko4j_Knockout']) vm.java_lang_Class(false).castEx(lcA3, 'org.netbeans.html.ko4j.Knockout');
lcA0.bind__VLorg_netbeans_html_json_spi_PropertyBinding_2Ljava_lang_Object_2Lorg_netbeans_html_ko4j_Knockout_2(lcA1, lcA2, lcA3);
return;

};
c['bind__VLorg_netbeans_html_json_spi_PropertyBinding_2Ljava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.wrapModel__Ljava_lang_Object_2Ljava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = lcA0.wrapModel__Lorg_netbeans_html_ko4j_Knockout_2Ljava_lang_Object_2(lcA1);
return stA0;

};
c['wrapModel__Ljava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.valueHasMutated__VLjava_lang_Object_2Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcA2, lcA3, lcA4) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_org_netbeans_html_ko4j_Knockout']) vm.java_lang_Class(false).castEx(lcA1, 'org.netbeans.html.ko4j.Knockout');
lcA0.valueHasMutated__VLorg_netbeans_html_ko4j_Knockout_2Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA1, lcA2, lcA3, lcA4);
return;

};
c['valueHasMutated__VLjava_lang_Object_2Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.applyBindings__VLjava_lang_String_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
if (lcA2 !== null && !lcA2['$instOf_org_netbeans_html_ko4j_Knockout']) vm.java_lang_Class(false).castEx(lcA2, 'org.netbeans.html.ko4j.Knockout');
lcA0.applyBindings__VLjava_lang_String_2Lorg_netbeans_html_ko4j_Knockout_2(lcA1, lcA2);
return;

};
c['applyBindings__VLjava_lang_String_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.toJavaScript__Ljava_lang_Object_2Ljava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_org_netbeans_html_ko4j_Knockout']) vm.java_lang_Class(false).castEx(lcA1, 'org.netbeans.html.ko4j.Knockout');
var stA0 = lcA0.toJavaScript__Ljava_lang_Object_2Lorg_netbeans_html_ko4j_Knockout_2(lcA1);
return stA0;

};
c['toJavaScript__Ljava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lorg/netbeans/html/ko4j/Knockout;', vm.org_netbeans_html_ko4j_Knockout, 0);
var stA0 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['asList__Ljava_util_List_2_3Ljava_lang_Object_2'](stA0);
c._applied(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_ko4j_KOTechfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_ko4j_KOTech', { value : true });
      vm.org_netbeans_html_json_spi_Technology$BatchCopy(false)['fillInstOf'](x);
      vm.org_netbeans_html_json_spi_Technology$ValueMutated(false)['fillInstOf'](x);
      vm.org_netbeans_html_json_spi_Technology$ApplyId(false)['fillInstOf'](x);
      vm.org_netbeans_html_json_spi_Technology$ToJavaScript(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_ko4j_KOTechfillInstOf });
    org_netbeans_html_ko4j_KOTechfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/ko4j/KOTech';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.org_netbeans_html_json_spi_Technology$BatchCopy(false).constructor.$class,
        vm.org_netbeans_html_json_spi_Technology$ValueMutated(false).constructor.$class,
        vm.org_netbeans_html_json_spi_Technology$ApplyId(false).constructor.$class,
        vm.org_netbeans_html_json_spi_Technology$ToJavaScript(false).constructor.$class
    ]; };
    CLS.$class.access = 48;
    CLS.$class.cnstr = CLS;
    CLS.$class.anno = {"Lorg/netbeans/html/context/spi/Contexts$Id;" : {
"value" : ["ko4j"]
}

    };
    c.class__V();
    var refs_org_netbeans_html_ko4j_Knockout;
    var refs_java_lang_UnsupportedOperationException;
    var refs_net_java_html_json_Models;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_netbeans_html_ko4j_KOTech = org_netbeans_html_ko4j_KOTech;

vm.org_netbeans_html_json_spi_Technology$ToJavaScript = link('org/netbeans/html/json/spi/Technology$ToJavaScript', function(f) { vm.org_netbeans_html_json_spi_Technology$ToJavaScript =  f; });
vm.org_netbeans_html_json_spi_Technology$ApplyId = link('org/netbeans/html/json/spi/Technology$ApplyId', function(f) { vm.org_netbeans_html_json_spi_Technology$ApplyId =  f; });
vm.org_netbeans_html_json_spi_Technology$ValueMutated = link('org/netbeans/html/json/spi/Technology$ValueMutated', function(f) { vm.org_netbeans_html_json_spi_Technology$ValueMutated =  f; });
vm.org_netbeans_html_json_spi_Technology$BatchCopy = link('org/netbeans/html/json/spi/Technology$BatchCopy', function(f) { vm.org_netbeans_html_json_spi_Technology$BatchCopy =  f; });
vm.java_lang_UnsupportedOperationException = link('java/lang/UnsupportedOperationException', function(f) { vm.java_lang_UnsupportedOperationException =  f; });
vm.java_lang_Deprecated = link('java/lang/Deprecated', function(f) { vm.java_lang_Deprecated =  f; });
  invoker.presenter__Lorg_netbeans_html_boot_spi_Fn$Presenter_2 = function(target) {
    return target['presenter__Lorg_netbeans_html_boot_spi_Fn$Presenter_2']();
  };
  invoker.toJava__Ljava_lang_Object_2Ljava_lang_Object_2 = function(target, p1) {
    return target['toJava__Ljava_lang_Object_2Ljava_lang_Object_2'](p1);
  };
  invoker.notifySuccess__VLjava_lang_Object_2 = function(target, p1) {
    return target['notifySuccess__VLjava_lang_Object_2'](p1);
  };
  invoker.close__V = function(target) {
    return target['close__V']();
  };
  invoker.toJavaScript__Ljava_lang_Object_2Ljava_lang_Object_2 = function(target, p1) {
    return target['toJavaScript__Ljava_lang_Object_2Ljava_lang_Object_2'](p1);
  };
  invoker.isJSONP__Z = function(target) {
    return target['isJSONP__Z']();
  };
  invoker.composeURL__Ljava_lang_String_2Ljava_lang_String_2 = function(target, p1) {
    return target['composeURL__Ljava_lang_String_2Ljava_lang_String_2'](p1);
  };
  invoker.isDoOutput__Z = function(target) {
    return target['isDoOutput__Z']();
  };
  invoker.writeData__VLjava_io_OutputStream_2 = function(target, p1) {
    return target['writeData__VLjava_io_OutputStream_2'](p1);
  };
  invoker.toByteArray___3B = function(target) {
    return target['toByteArray___3B']();
  };
  invoker.notifyError__VLjava_lang_Throwable_2 = function(target, p1) {
    return target['notifyError__VLjava_lang_Throwable_2'](p1);
  };
  invoker.getHeaders__Ljava_lang_String_2 = function(target) {
    return target['getHeaders__Ljava_lang_String_2']();
  };
  invoker.length__I = function(target) {
    return target['length__I']();
  };
  invoker.indexOf__III = function(target, p1, p2) {
    return target['indexOf__III'](p1,p2);
  };
  invoker.substring__Ljava_lang_String_2II = function(target, p1, p2) {
    return target['substring__Ljava_lang_String_2II'](p1,p2);
  };
  invoker.trim__Ljava_lang_String_2 = function(target) {
    return target['trim__Ljava_lang_String_2']();
  };
  invoker.add__ZLjava_lang_Object_2 = function(target, p1) {
    return target['add__ZLjava_lang_Object_2'](p1);
  };
  invoker.getMethod__Ljava_lang_String_2 = function(target) {
    return target['getMethod__Ljava_lang_String_2']();
  };
  invoker.toArray___3Ljava_lang_Object_2 = function(target) {
    return target['toArray___3Ljava_lang_Object_2']();
  };
  invoker.read__I = function(target) {
    return target['read__I']();
  };
  invoker.append__Ljava_lang_StringBuilder_2C = function(target, p1) {
    return target['append__Ljava_lang_StringBuilder_2C'](p1);
  };
  invoker.toString__Ljava_lang_String_2 = function(target) {
    return target['toString__Ljava_lang_String_2']();
  };
  invoker.hashCode__I = function(target) {
    return target['hashCode__I']();
  };
  invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2 = function(target, p1) {
    return target['append__Ljava_lang_StringBuilder_2Ljava_lang_String_2'](p1);
  };
  invoker.weak__Lorg_netbeans_html_json_spi_PropertyBinding_2 = function(target) {
    return target['weak__Lorg_netbeans_html_json_spi_PropertyBinding_2']();
  };
  invoker.weak__Lorg_netbeans_html_json_spi_FunctionBinding_2 = function(target) {
    return target['weak__Lorg_netbeans_html_json_spi_FunctionBinding_2']();
  };
  invoker.getPropertyName__Ljava_lang_String_2 = function(target) {
    return target['getPropertyName__Ljava_lang_String_2']();
  };
  invoker.isReadOnly__Z = function(target) {
    return target['isReadOnly__Z']();
  };
  invoker.isConstant__Z = function(target) {
    return target['isConstant__Z']();
  };
  invoker.getValue__Ljava_lang_Object_2 = function(target) {
    return target['getValue__Ljava_lang_Object_2']();
  };
  invoker.getFunctionName__Ljava_lang_String_2 = function(target) {
    return target['getFunctionName__Ljava_lang_String_2']();
  };
  invoker.setValue__VLjava_lang_Object_2 = function(target, p1) {
    return target['setValue__VLjava_lang_Object_2'](p1);
  };
  invoker.call__VLjava_lang_Object_2Ljava_lang_Object_2 = function(target, p1, p2) {
    return target['call__VLjava_lang_Object_2Ljava_lang_Object_2'](p1,p2);
  };
  invoker.execute__VLjava_lang_Runnable_2 = function(target, p1) {
    return target['execute__VLjava_lang_Runnable_2'](p1);
  };
  invoker.size__I = function(target) {
    return target['size__I']();
  };
  invoker.set__Ljava_lang_Object_2ILjava_lang_Object_2 = function(target, p1, p2) {
    return target['set__Ljava_lang_Object_2ILjava_lang_Object_2'](p1,p2);
  };
  invoker.get__Ljava_lang_Object_2I = function(target, p1) {
    return target['get__Ljava_lang_Object_2I'](p1);
  };
  invoker.register__Lorg_netbeans_html_context_spi_Contexts$Builder_2Ljava_lang_Class_2Ljava_lang_Object_2I = function(target, p1, p2, p3) {
    return target['register__Lorg_netbeans_html_context_spi_Contexts$Builder_2Ljava_lang_Class_2Ljava_lang_Object_2I'](p1,p2,p3);
  };
  invoker.getMessage__Ljava_lang_String_2 = function(target) {
    return target['getMessage__Ljava_lang_String_2']();
  };
  invoker.run__V = function(target) {
    return target['run__V']();
  };
  invoker.cast__Ljava_lang_Object_2Ljava_lang_Object_2 = function(target, p1) {
    return target['cast__Ljava_lang_Object_2Ljava_lang_Object_2'](p1);
  };
  exports['registerResource']('META-INF/MANIFEST.MF', 'TWFuaWZlc3QtVmVyc2lvbjogMS4wDQpCbmQtTGFzdE1vZGlmaWVkOiAxNTU3MDM2MDcxMzY3DQpCdWlsZC1KZGs6IDEuOC4wXzEyMg0KQnVpbHQtQnk6IGRldmVsDQpCdW5kbGUtRGVzY3JpcHRpb246IEJpbmRzIG5ldC5qYXZhLmh0bWwuanNvbiBBUElzIHRvZ2V0aGVyIHdpdGgga25vY2tvdXQNCiAuanMNCkJ1bmRsZS1Eb2NVUkw6IGh0dHA6Ly9hcGFjaGUub3JnDQpCdW5kbGUtTGljZW5zZTogaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMC50eHQNCkJ1bmRsZS1NYW5pZmVzdFZlcnNpb246IDINCkJ1bmRsZS1OYW1lOiBLbm9ja291dC5qcyBmb3IgSmF2YQ0KQnVuZGxlLVN5bWJvbGljTmFtZTogb3JnLm5ldGJlYW5zLmh0bWwua280ag0KQnVuZGxlLVZlbmRvcjogVGhlIEFwYWNoZSBTb2Z0d2FyZSBGb3VuZGF0aW9uDQpCdW5kbGUtVmVyc2lvbjogMS42LjENCkNyZWF0ZWQtQnk6IEFwYWNoZSBNYXZlbiBCdW5kbGUgUGx1Z2luDQpJbXBvcnQtUGFja2FnZTogbmV0LmphdmEuaHRtbC5qc29uO3ZlcnNpb249IlsxLjYsMikiLG9yZy5uZXRiZWFucy5odG1sLmINCiBvb3Quc3BpO3ZlcnNpb249IlsxLjYsMikiLG9yZy5uZXRiZWFucy5odG1sLmNvbnRleHQuc3BpO3ZlcnNpb249IlsxLjYsMg0KICkiLG9yZy5uZXRiZWFucy5odG1sLmpzb24uc3BpO3ZlcnNpb249IlsxLjYsMikiDQpQcm92aWRlLUNhcGFiaWxpdHk6IG9zZ2kuc2VydmljZWxvYWRlcjtvc2dpLnNlcnZpY2Vsb2FkZXI9b3JnLm5ldGJlYW5zLmgNCiB0bWwuY29udGV4dC5zcGkuQ29udGV4dHMkUHJvdmlkZXINClJlcXVpcmUtQ2FwYWJpbGl0eTogb3NnaS5leHRlbmRlcjtyZXNvbHV0aW9uOj1vcHRpb25hbDtmaWx0ZXI6PSIob3NnaS5leA0KIHRlbmRlcj1vc2dpLnNlcnZpY2Vsb2FkZXIucmVnaXN0cmFyKSINClRvb2w6IEJuZC0yLjEuMC4yMDEzMDQyNi0xMjIyMTMNCg==');
  exports['registerResource']('META-INF/DEPENDENCIES', 'Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tCi8vIFRyYW5zaXRpdmUgZGVwZW5kZW5jaWVzIG9mIHRoaXMgcHJvamVjdCBkZXRlcm1pbmVkIGZyb20gdGhlCi8vIG1hdmVuIHBvbSBvcmdhbml6ZWQgYnkgb3JnYW5pemF0aW9uLgovLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0KCktub2Nrb3V0LmpzIGZvciBKYXZhCgoKCgoKRnJvbTogJ0tub2Nrb3V0LmpzIHRlYW0nIChodHRwOi8va25vY2tvdXRqcy5jb20vKQogIC0gS25vY2tvdXQgSmF2YVNjcmlwdCBsaWJyYXJ5IHYzLjUuMAogICAgTGljZW5zZTogTUlUIChodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocCkK');
  exports['registerResource']('META-INF/LICENSE', 'CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwYWNoZSBMaWNlbnNlCiAgICAgICAgICAgICAgICAgICAgICAgICAgIFZlcnNpb24gMi4wLCBKYW51YXJ5IDIwMDQKICAgICAgICAgICAgICAgICAgICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzLwoKICAgVEVSTVMgQU5EIENPTkRJVElPTlMgRk9SIFVTRSwgUkVQUk9EVUNUSU9OLCBBTkQgRElTVFJJQlVUSU9OCgogICAxLiBEZWZpbml0aW9ucy4KCiAgICAgICJMaWNlbnNlIiBzaGFsbCBtZWFuIHRoZSB0ZXJtcyBhbmQgY29uZGl0aW9ucyBmb3IgdXNlLCByZXByb2R1Y3Rpb24sCiAgICAgIGFuZCBkaXN0cmlidXRpb24gYXMgZGVmaW5lZCBieSBTZWN0aW9ucyAxIHRocm91Z2ggOSBvZiB0aGlzIGRvY3VtZW50LgoKICAgICAgIkxpY2Vuc29yIiBzaGFsbCBtZWFuIHRoZSBjb3B5cmlnaHQgb3duZXIgb3IgZW50aXR5IGF1dGhvcml6ZWQgYnkKICAgICAgdGhlIGNvcHlyaWdodCBvd25lciB0aGF0IGlzIGdyYW50aW5nIHRoZSBMaWNlbnNlLgoKICAgICAgIkxlZ2FsIEVudGl0eSIgc2hhbGwgbWVhbiB0aGUgdW5pb24gb2YgdGhlIGFjdGluZyBlbnRpdHkgYW5kIGFsbAogICAgICBvdGhlciBlbnRpdGllcyB0aGF0IGNvbnRyb2wsIGFyZSBjb250cm9sbGVkIGJ5LCBvciBhcmUgdW5kZXIgY29tbW9uCiAgICAgIGNvbnRyb2wgd2l0aCB0aGF0IGVudGl0eS4gRm9yIHRoZSBwdXJwb3NlcyBvZiB0aGlzIGRlZmluaXRpb24sCiAgICAgICJjb250cm9sIiBtZWFucyAoaSkgdGhlIHBvd2VyLCBkaXJlY3Qgb3IgaW5kaXJlY3QsIHRvIGNhdXNlIHRoZQogICAgICBkaXJlY3Rpb24gb3IgbWFuYWdlbWVudCBvZiBzdWNoIGVudGl0eSwgd2hldGhlciBieSBjb250cmFjdCBvcgogICAgICBvdGhlcndpc2UsIG9yIChpaSkgb3duZXJzaGlwIG9mIGZpZnR5IHBlcmNlbnQgKDUwJSkgb3IgbW9yZSBvZiB0aGUKICAgICAgb3V0c3RhbmRpbmcgc2hhcmVzLCBvciAoaWlpKSBiZW5lZmljaWFsIG93bmVyc2hpcCBvZiBzdWNoIGVudGl0eS4KCiAgICAgICJZb3UiIChvciAiWW91ciIpIHNoYWxsIG1lYW4gYW4gaW5kaXZpZHVhbCBvciBMZWdhbCBFbnRpdHkKICAgICAgZXhlcmNpc2luZyBwZXJtaXNzaW9ucyBncmFudGVkIGJ5IHRoaXMgTGljZW5zZS4KCiAgICAgICJTb3VyY2UiIGZvcm0gc2hhbGwgbWVhbiB0aGUgcHJlZmVycmVkIGZvcm0gZm9yIG1ha2luZyBtb2RpZmljYXRpb25zLAogICAgICBpbmNsdWRpbmcgYnV0IG5vdCBsaW1pdGVkIHRvIHNvZnR3YXJlIHNvdXJjZSBjb2RlLCBkb2N1bWVudGF0aW9uCiAgICAgIHNvdXJjZSwgYW5kIGNvbmZpZ3VyYXRpb24gZmlsZXMuCgogICAgICAiT2JqZWN0IiBmb3JtIHNoYWxsIG1lYW4gYW55IGZvcm0gcmVzdWx0aW5nIGZyb20gbWVjaGFuaWNhbAogICAgICB0cmFuc2Zvcm1hdGlvbiBvciB0cmFuc2xhdGlvbiBvZiBhIFNvdXJjZSBmb3JtLCBpbmNsdWRpbmcgYnV0CiAgICAgIG5vdCBsaW1pdGVkIHRvIGNvbXBpbGVkIG9iamVjdCBjb2RlLCBnZW5lcmF0ZWQgZG9jdW1lbnRhdGlvbiwKICAgICAgYW5kIGNvbnZlcnNpb25zIHRvIG90aGVyIG1lZGlhIHR5cGVzLgoKICAgICAgIldvcmsiIHNoYWxsIG1lYW4gdGhlIHdvcmsgb2YgYXV0aG9yc2hpcCwgd2hldGhlciBpbiBTb3VyY2Ugb3IKICAgICAgT2JqZWN0IGZvcm0sIG1hZGUgYXZhaWxhYmxlIHVuZGVyIHRoZSBMaWNlbnNlLCBhcyBpbmRpY2F0ZWQgYnkgYQogICAgICBjb3B5cmlnaHQgbm90aWNlIHRoYXQgaXMgaW5jbHVkZWQgaW4gb3IgYXR0YWNoZWQgdG8gdGhlIHdvcmsKICAgICAgKGFuIGV4YW1wbGUgaXMgcHJvdmlkZWQgaW4gdGhlIEFwcGVuZGl4IGJlbG93KS4KCiAgICAgICJEZXJpdmF0aXZlIFdvcmtzIiBzaGFsbCBtZWFuIGFueSB3b3JrLCB3aGV0aGVyIGluIFNvdXJjZSBvciBPYmplY3QKICAgICAgZm9ybSwgdGhhdCBpcyBiYXNlZCBvbiAob3IgZGVyaXZlZCBmcm9tKSB0aGUgV29yayBhbmQgZm9yIHdoaWNoIHRoZQogICAgICBlZGl0b3JpYWwgcmV2aXNpb25zLCBhbm5vdGF0aW9ucywgZWxhYm9yYXRpb25zLCBvciBvdGhlciBtb2RpZmljYXRpb25zCiAgICAgIHJlcHJlc2VudCwgYXMgYSB3aG9sZSwgYW4gb3JpZ2luYWwgd29yayBvZiBhdXRob3JzaGlwLiBGb3IgdGhlIHB1cnBvc2VzCiAgICAgIG9mIHRoaXMgTGljZW5zZSwgRGVyaXZhdGl2ZSBXb3JrcyBzaGFsbCBub3QgaW5jbHVkZSB3b3JrcyB0aGF0IHJlbWFpbgogICAgICBzZXBhcmFibGUgZnJvbSwgb3IgbWVyZWx5IGxpbmsgKG9yIGJpbmQgYnkgbmFtZSkgdG8gdGhlIGludGVyZmFjZXMgb2YsCiAgICAgIHRoZSBXb3JrIGFuZCBEZXJpdmF0aXZlIFdvcmtzIHRoZXJlb2YuCgogICAgICAiQ29udHJpYnV0aW9uIiBzaGFsbCBtZWFuIGFueSB3b3JrIG9mIGF1dGhvcnNoaXAsIGluY2x1ZGluZwogICAgICB0aGUgb3JpZ2luYWwgdmVyc2lvbiBvZiB0aGUgV29yayBhbmQgYW55IG1vZGlmaWNhdGlvbnMgb3IgYWRkaXRpb25zCiAgICAgIHRvIHRoYXQgV29yayBvciBEZXJpdmF0aXZlIFdvcmtzIHRoZXJlb2YsIHRoYXQgaXMgaW50ZW50aW9uYWxseQogICAgICBzdWJtaXR0ZWQgdG8gTGljZW5zb3IgZm9yIGluY2x1c2lvbiBpbiB0aGUgV29yayBieSB0aGUgY29weXJpZ2h0IG93bmVyCiAgICAgIG9yIGJ5IGFuIGluZGl2aWR1YWwgb3IgTGVnYWwgRW50aXR5IGF1dGhvcml6ZWQgdG8gc3VibWl0IG9uIGJlaGFsZiBvZgogICAgICB0aGUgY29weXJpZ2h0IG93bmVyLiBGb3IgdGhlIHB1cnBvc2VzIG9mIHRoaXMgZGVmaW5pdGlvbiwgInN1Ym1pdHRlZCIKICAgICAgbWVhbnMgYW55IGZvcm0gb2YgZWxlY3Ryb25pYywgdmVyYmFsLCBvciB3cml0dGVuIGNvbW11bmljYXRpb24gc2VudAogICAgICB0byB0aGUgTGljZW5zb3Igb3IgaXRzIHJlcHJlc2VudGF0aXZlcywgaW5jbHVkaW5nIGJ1dCBub3QgbGltaXRlZCB0bwogICAgICBjb21tdW5pY2F0aW9uIG9uIGVsZWN0cm9uaWMgbWFpbGluZyBsaXN0cywgc291cmNlIGNvZGUgY29udHJvbCBzeXN0ZW1zLAogICAgICBhbmQgaXNzdWUgdHJhY2tpbmcgc3lzdGVtcyB0aGF0IGFyZSBtYW5hZ2VkIGJ5LCBvciBvbiBiZWhhbGYgb2YsIHRoZQogICAgICBMaWNlbnNvciBmb3IgdGhlIHB1cnBvc2Ugb2YgZGlzY3Vzc2luZyBhbmQgaW1wcm92aW5nIHRoZSBXb3JrLCBidXQKICAgICAgZXhjbHVkaW5nIGNvbW11bmljYXRpb24gdGhhdCBpcyBjb25zcGljdW91c2x5IG1hcmtlZCBvciBvdGhlcndpc2UKICAgICAgZGVzaWduYXRlZCBpbiB3cml0aW5nIGJ5IHRoZSBjb3B5cmlnaHQgb3duZXIgYXMgIk5vdCBhIENvbnRyaWJ1dGlvbi4iCgogICAgICAiQ29udHJpYnV0b3IiIHNoYWxsIG1lYW4gTGljZW5zb3IgYW5kIGFueSBpbmRpdmlkdWFsIG9yIExlZ2FsIEVudGl0eQogICAgICBvbiBiZWhhbGYgb2Ygd2hvbSBhIENvbnRyaWJ1dGlvbiBoYXMgYmVlbiByZWNlaXZlZCBieSBMaWNlbnNvciBhbmQKICAgICAgc3Vic2VxdWVudGx5IGluY29ycG9yYXRlZCB3aXRoaW4gdGhlIFdvcmsuCgogICAyLiBHcmFudCBvZiBDb3B5cmlnaHQgTGljZW5zZS4gU3ViamVjdCB0byB0aGUgdGVybXMgYW5kIGNvbmRpdGlvbnMgb2YKICAgICAgdGhpcyBMaWNlbnNlLCBlYWNoIENvbnRyaWJ1dG9yIGhlcmVieSBncmFudHMgdG8gWW91IGEgcGVycGV0dWFsLAogICAgICB3b3JsZHdpZGUsIG5vbi1leGNsdXNpdmUsIG5vLWNoYXJnZSwgcm95YWx0eS1mcmVlLCBpcnJldm9jYWJsZQogICAgICBjb3B5cmlnaHQgbGljZW5zZSB0byByZXByb2R1Y2UsIHByZXBhcmUgRGVyaXZhdGl2ZSBXb3JrcyBvZiwKICAgICAgcHVibGljbHkgZGlzcGxheSwgcHVibGljbHkgcGVyZm9ybSwgc3VibGljZW5zZSwgYW5kIGRpc3RyaWJ1dGUgdGhlCiAgICAgIFdvcmsgYW5kIHN1Y2ggRGVyaXZhdGl2ZSBXb3JrcyBpbiBTb3VyY2Ugb3IgT2JqZWN0IGZvcm0uCgogICAzLiBHcmFudCBvZiBQYXRlbnQgTGljZW5zZS4gU3ViamVjdCB0byB0aGUgdGVybXMgYW5kIGNvbmRpdGlvbnMgb2YKICAgICAgdGhpcyBMaWNlbnNlLCBlYWNoIENvbnRyaWJ1dG9yIGhlcmVieSBncmFudHMgdG8gWW91IGEgcGVycGV0dWFsLAogICAgICB3b3JsZHdpZGUsIG5vbi1leGNsdXNpdmUsIG5vLWNoYXJnZSwgcm95YWx0eS1mcmVlLCBpcnJldm9jYWJsZQogICAgICAoZXhjZXB0IGFzIHN0YXRlZCBpbiB0aGlzIHNlY3Rpb24pIHBhdGVudCBsaWNlbnNlIHRvIG1ha2UsIGhhdmUgbWFkZSwKICAgICAgdXNlLCBvZmZlciB0byBzZWxsLCBzZWxsLCBpbXBvcnQsIGFuZCBvdGhlcndpc2UgdHJhbnNmZXIgdGhlIFdvcmssCiAgICAgIHdoZXJlIHN1Y2ggbGljZW5zZSBhcHBsaWVzIG9ubHkgdG8gdGhvc2UgcGF0ZW50IGNsYWltcyBsaWNlbnNhYmxlCiAgICAgIGJ5IHN1Y2ggQ29udHJpYnV0b3IgdGhhdCBhcmUgbmVjZXNzYXJpbHkgaW5mcmluZ2VkIGJ5IHRoZWlyCiAgICAgIENvbnRyaWJ1dGlvbihzKSBhbG9uZSBvciBieSBjb21iaW5hdGlvbiBvZiB0aGVpciBDb250cmlidXRpb24ocykKICAgICAgd2l0aCB0aGUgV29yayB0byB3aGljaCBzdWNoIENvbnRyaWJ1dGlvbihzKSB3YXMgc3VibWl0dGVkLiBJZiBZb3UKICAgICAgaW5zdGl0dXRlIHBhdGVudCBsaXRpZ2F0aW9uIGFnYWluc3QgYW55IGVudGl0eSAoaW5jbHVkaW5nIGEKICAgICAgY3Jvc3MtY2xhaW0gb3IgY291bnRlcmNsYWltIGluIGEgbGF3c3VpdCkgYWxsZWdpbmcgdGhhdCB0aGUgV29yawogICAgICBvciBhIENvbnRyaWJ1dGlvbiBpbmNvcnBvcmF0ZWQgd2l0aGluIHRoZSBXb3JrIGNvbnN0aXR1dGVzIGRpcmVjdAogICAgICBvciBjb250cmlidXRvcnkgcGF0ZW50IGluZnJpbmdlbWVudCwgdGhlbiBhbnkgcGF0ZW50IGxpY2Vuc2VzCiAgICAgIGdyYW50ZWQgdG8gWW91IHVuZGVyIHRoaXMgTGljZW5zZSBmb3IgdGhhdCBXb3JrIHNoYWxsIHRlcm1pbmF0ZQogICAgICBhcyBvZiB0aGUgZGF0ZSBzdWNoIGxpdGlnYXRpb24gaXMgZmlsZWQuCgogICA0LiBSZWRpc3RyaWJ1dGlvbi4gWW91IG1heSByZXByb2R1Y2UgYW5kIGRpc3RyaWJ1dGUgY29waWVzIG9mIHRoZQogICAgICBXb3JrIG9yIERlcml2YXRpdmUgV29ya3MgdGhlcmVvZiBpbiBhbnkgbWVkaXVtLCB3aXRoIG9yIHdpdGhvdXQKICAgICAgbW9kaWZpY2F0aW9ucywgYW5kIGluIFNvdXJjZSBvciBPYmplY3QgZm9ybSwgcHJvdmlkZWQgdGhhdCBZb3UKICAgICAgbWVldCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6CgogICAgICAoYSkgWW91IG11c3QgZ2l2ZSBhbnkgb3RoZXIgcmVjaXBpZW50cyBvZiB0aGUgV29yayBvcgogICAgICAgICAgRGVyaXZhdGl2ZSBXb3JrcyBhIGNvcHkgb2YgdGhpcyBMaWNlbnNlOyBhbmQKCiAgICAgIChiKSBZb3UgbXVzdCBjYXVzZSBhbnkgbW9kaWZpZWQgZmlsZXMgdG8gY2FycnkgcHJvbWluZW50IG5vdGljZXMKICAgICAgICAgIHN0YXRpbmcgdGhhdCBZb3UgY2hhbmdlZCB0aGUgZmlsZXM7IGFuZAoKICAgICAgKGMpIFlvdSBtdXN0IHJldGFpbiwgaW4gdGhlIFNvdXJjZSBmb3JtIG9mIGFueSBEZXJpdmF0aXZlIFdvcmtzCiAgICAgICAgICB0aGF0IFlvdSBkaXN0cmlidXRlLCBhbGwgY29weXJpZ2h0LCBwYXRlbnQsIHRyYWRlbWFyaywgYW5kCiAgICAgICAgICBhdHRyaWJ1dGlvbiBub3RpY2VzIGZyb20gdGhlIFNvdXJjZSBmb3JtIG9mIHRoZSBXb3JrLAogICAgICAgICAgZXhjbHVkaW5nIHRob3NlIG5vdGljZXMgdGhhdCBkbyBub3QgcGVydGFpbiB0byBhbnkgcGFydCBvZgogICAgICAgICAgdGhlIERlcml2YXRpdmUgV29ya3M7IGFuZAoKICAgICAgKGQpIElmIHRoZSBXb3JrIGluY2x1ZGVzIGEgIk5PVElDRSIgdGV4dCBmaWxlIGFzIHBhcnQgb2YgaXRzCiAgICAgICAgICBkaXN0cmlidXRpb24sIHRoZW4gYW55IERlcml2YXRpdmUgV29ya3MgdGhhdCBZb3UgZGlzdHJpYnV0ZSBtdXN0CiAgICAgICAgICBpbmNsdWRlIGEgcmVhZGFibGUgY29weSBvZiB0aGUgYXR0cmlidXRpb24gbm90aWNlcyBjb250YWluZWQKICAgICAgICAgIHdpdGhpbiBzdWNoIE5PVElDRSBmaWxlLCBleGNsdWRpbmcgdGhvc2Ugbm90aWNlcyB0aGF0IGRvIG5vdAogICAgICAgICAgcGVydGFpbiB0byBhbnkgcGFydCBvZiB0aGUgRGVyaXZhdGl2ZSBXb3JrcywgaW4gYXQgbGVhc3Qgb25lCiAgICAgICAgICBvZiB0aGUgZm9sbG93aW5nIHBsYWNlczogd2l0aGluIGEgTk9USUNFIHRleHQgZmlsZSBkaXN0cmlidXRlZAogICAgICAgICAgYXMgcGFydCBvZiB0aGUgRGVyaXZhdGl2ZSBXb3Jrczsgd2l0aGluIHRoZSBTb3VyY2UgZm9ybSBvcgogICAgICAgICAgZG9jdW1lbnRhdGlvbiwgaWYgcHJvdmlkZWQgYWxvbmcgd2l0aCB0aGUgRGVyaXZhdGl2ZSBXb3Jrczsgb3IsCiAgICAgICAgICB3aXRoaW4gYSBkaXNwbGF5IGdlbmVyYXRlZCBieSB0aGUgRGVyaXZhdGl2ZSBXb3JrcywgaWYgYW5kCiAgICAgICAgICB3aGVyZXZlciBzdWNoIHRoaXJkLXBhcnR5IG5vdGljZXMgbm9ybWFsbHkgYXBwZWFyLiBUaGUgY29udGVudHMKICAgICAgICAgIG9mIHRoZSBOT1RJQ0UgZmlsZSBhcmUgZm9yIGluZm9ybWF0aW9uYWwgcHVycG9zZXMgb25seSBhbmQKICAgICAgICAgIGRvIG5vdCBtb2RpZnkgdGhlIExpY2Vuc2UuIFlvdSBtYXkgYWRkIFlvdXIgb3duIGF0dHJpYnV0aW9uCiAgICAgICAgICBub3RpY2VzIHdpdGhpbiBEZXJpdmF0aXZlIFdvcmtzIHRoYXQgWW91IGRpc3RyaWJ1dGUsIGFsb25nc2lkZQogICAgICAgICAgb3IgYXMgYW4gYWRkZW5kdW0gdG8gdGhlIE5PVElDRSB0ZXh0IGZyb20gdGhlIFdvcmssIHByb3ZpZGVkCiAgICAgICAgICB0aGF0IHN1Y2ggYWRkaXRpb25hbCBhdHRyaWJ1dGlvbiBub3RpY2VzIGNhbm5vdCBiZSBjb25zdHJ1ZWQKICAgICAgICAgIGFzIG1vZGlmeWluZyB0aGUgTGljZW5zZS4KCiAgICAgIFlvdSBtYXkgYWRkIFlvdXIgb3duIGNvcHlyaWdodCBzdGF0ZW1lbnQgdG8gWW91ciBtb2RpZmljYXRpb25zIGFuZAogICAgICBtYXkgcHJvdmlkZSBhZGRpdGlvbmFsIG9yIGRpZmZlcmVudCBsaWNlbnNlIHRlcm1zIGFuZCBjb25kaXRpb25zCiAgICAgIGZvciB1c2UsIHJlcHJvZHVjdGlvbiwgb3IgZGlzdHJpYnV0aW9uIG9mIFlvdXIgbW9kaWZpY2F0aW9ucywgb3IKICAgICAgZm9yIGFueSBzdWNoIERlcml2YXRpdmUgV29ya3MgYXMgYSB3aG9sZSwgcHJvdmlkZWQgWW91ciB1c2UsCiAgICAgIHJlcHJvZHVjdGlvbiwgYW5kIGRpc3RyaWJ1dGlvbiBvZiB0aGUgV29yayBvdGhlcndpc2UgY29tcGxpZXMgd2l0aAogICAgICB0aGUgY29uZGl0aW9ucyBzdGF0ZWQgaW4gdGhpcyBMaWNlbnNlLgoKICAgNS4gU3VibWlzc2lvbiBvZiBDb250cmlidXRpb25zLiBVbmxlc3MgWW91IGV4cGxpY2l0bHkgc3RhdGUgb3RoZXJ3aXNlLAogICAgICBhbnkgQ29udHJpYnV0aW9uIGludGVudGlvbmFsbHkgc3VibWl0dGVkIGZvciBpbmNsdXNpb24gaW4gdGhlIFdvcmsKICAgICAgYnkgWW91IHRvIHRoZSBMaWNlbnNvciBzaGFsbCBiZSB1bmRlciB0aGUgdGVybXMgYW5kIGNvbmRpdGlvbnMgb2YKICAgICAgdGhpcyBMaWNlbnNlLCB3aXRob3V0IGFueSBhZGRpdGlvbmFsIHRlcm1zIG9yIGNvbmRpdGlvbnMuCiAgICAgIE5vdHdpdGhzdGFuZGluZyB0aGUgYWJvdmUsIG5vdGhpbmcgaGVyZWluIHNoYWxsIHN1cGVyc2VkZSBvciBtb2RpZnkKICAgICAgdGhlIHRlcm1zIG9mIGFueSBzZXBhcmF0ZSBsaWNlbnNlIGFncmVlbWVudCB5b3UgbWF5IGhhdmUgZXhlY3V0ZWQKICAgICAgd2l0aCBMaWNlbnNvciByZWdhcmRpbmcgc3VjaCBDb250cmlidXRpb25zLgoKICAgNi4gVHJhZGVtYXJrcy4gVGhpcyBMaWNlbnNlIGRvZXMgbm90IGdyYW50IHBlcm1pc3Npb24gdG8gdXNlIHRoZSB0cmFkZQogICAgICBuYW1lcywgdHJhZGVtYXJrcywgc2VydmljZSBtYXJrcywgb3IgcHJvZHVjdCBuYW1lcyBvZiB0aGUgTGljZW5zb3IsCiAgICAgIGV4Y2VwdCBhcyByZXF1aXJlZCBmb3IgcmVhc29uYWJsZSBhbmQgY3VzdG9tYXJ5IHVzZSBpbiBkZXNjcmliaW5nIHRoZQogICAgICBvcmlnaW4gb2YgdGhlIFdvcmsgYW5kIHJlcHJvZHVjaW5nIHRoZSBjb250ZW50IG9mIHRoZSBOT1RJQ0UgZmlsZS4KCiAgIDcuIERpc2NsYWltZXIgb2YgV2FycmFudHkuIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvcgogICAgICBhZ3JlZWQgdG8gaW4gd3JpdGluZywgTGljZW5zb3IgcHJvdmlkZXMgdGhlIFdvcmsgKGFuZCBlYWNoCiAgICAgIENvbnRyaWJ1dG9yIHByb3ZpZGVzIGl0cyBDb250cmlidXRpb25zKSBvbiBhbiAiQVMgSVMiIEJBU0lTLAogICAgICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IKICAgICAgaW1wbGllZCwgaW5jbHVkaW5nLCB3aXRob3V0IGxpbWl0YXRpb24sIGFueSB3YXJyYW50aWVzIG9yIGNvbmRpdGlvbnMKICAgICAgb2YgVElUTEUsIE5PTi1JTkZSSU5HRU1FTlQsIE1FUkNIQU5UQUJJTElUWSwgb3IgRklUTkVTUyBGT1IgQQogICAgICBQQVJUSUNVTEFSIFBVUlBPU0UuIFlvdSBhcmUgc29sZWx5IHJlc3BvbnNpYmxlIGZvciBkZXRlcm1pbmluZyB0aGUKICAgICAgYXBwcm9wcmlhdGVuZXNzIG9mIHVzaW5nIG9yIHJlZGlzdHJpYnV0aW5nIHRoZSBXb3JrIGFuZCBhc3N1bWUgYW55CiAgICAgIHJpc2tzIGFzc29jaWF0ZWQgd2l0aCBZb3VyIGV4ZXJjaXNlIG9mIHBlcm1pc3Npb25zIHVuZGVyIHRoaXMgTGljZW5zZS4KCiAgIDguIExpbWl0YXRpb24gb2YgTGlhYmlsaXR5LiBJbiBubyBldmVudCBhbmQgdW5kZXIgbm8gbGVnYWwgdGhlb3J5LAogICAgICB3aGV0aGVyIGluIHRvcnQgKGluY2x1ZGluZyBuZWdsaWdlbmNlKSwgY29udHJhY3QsIG9yIG90aGVyd2lzZSwKICAgICAgdW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IChzdWNoIGFzIGRlbGliZXJhdGUgYW5kIGdyb3NzbHkKICAgICAgbmVnbGlnZW50IGFjdHMpIG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzaGFsbCBhbnkgQ29udHJpYnV0b3IgYmUKICAgICAgbGlhYmxlIHRvIFlvdSBmb3IgZGFtYWdlcywgaW5jbHVkaW5nIGFueSBkaXJlY3QsIGluZGlyZWN0LCBzcGVjaWFsLAogICAgICBpbmNpZGVudGFsLCBvciBjb25zZXF1ZW50aWFsIGRhbWFnZXMgb2YgYW55IGNoYXJhY3RlciBhcmlzaW5nIGFzIGEKICAgICAgcmVzdWx0IG9mIHRoaXMgTGljZW5zZSBvciBvdXQgb2YgdGhlIHVzZSBvciBpbmFiaWxpdHkgdG8gdXNlIHRoZQogICAgICBXb3JrIChpbmNsdWRpbmcgYnV0IG5vdCBsaW1pdGVkIHRvIGRhbWFnZXMgZm9yIGxvc3Mgb2YgZ29vZHdpbGwsCiAgICAgIHdvcmsgc3RvcHBhZ2UsIGNvbXB1dGVyIGZhaWx1cmUgb3IgbWFsZnVuY3Rpb24sIG9yIGFueSBhbmQgYWxsCiAgICAgIG90aGVyIGNvbW1lcmNpYWwgZGFtYWdlcyBvciBsb3NzZXMpLCBldmVuIGlmIHN1Y2ggQ29udHJpYnV0b3IKICAgICAgaGFzIGJlZW4gYWR2aXNlZCBvZiB0aGUgcG9zc2liaWxpdHkgb2Ygc3VjaCBkYW1hZ2VzLgoKICAgOS4gQWNjZXB0aW5nIFdhcnJhbnR5IG9yIEFkZGl0aW9uYWwgTGlhYmlsaXR5LiBXaGlsZSByZWRpc3RyaWJ1dGluZwogICAgICB0aGUgV29yayBvciBEZXJpdmF0aXZlIFdvcmtzIHRoZXJlb2YsIFlvdSBtYXkgY2hvb3NlIHRvIG9mZmVyLAogICAgICBhbmQgY2hhcmdlIGEgZmVlIGZvciwgYWNjZXB0YW5jZSBvZiBzdXBwb3J0LCB3YXJyYW50eSwgaW5kZW1uaXR5LAogICAgICBvciBvdGhlciBsaWFiaWxpdHkgb2JsaWdhdGlvbnMgYW5kL29yIHJpZ2h0cyBjb25zaXN0ZW50IHdpdGggdGhpcwogICAgICBMaWNlbnNlLiBIb3dldmVyLCBpbiBhY2NlcHRpbmcgc3VjaCBvYmxpZ2F0aW9ucywgWW91IG1heSBhY3Qgb25seQogICAgICBvbiBZb3VyIG93biBiZWhhbGYgYW5kIG9uIFlvdXIgc29sZSByZXNwb25zaWJpbGl0eSwgbm90IG9uIGJlaGFsZgogICAgICBvZiBhbnkgb3RoZXIgQ29udHJpYnV0b3IsIGFuZCBvbmx5IGlmIFlvdSBhZ3JlZSB0byBpbmRlbW5pZnksCiAgICAgIGRlZmVuZCwgYW5kIGhvbGQgZWFjaCBDb250cmlidXRvciBoYXJtbGVzcyBmb3IgYW55IGxpYWJpbGl0eQogICAgICBpbmN1cnJlZCBieSwgb3IgY2xhaW1zIGFzc2VydGVkIGFnYWluc3QsIHN1Y2ggQ29udHJpYnV0b3IgYnkgcmVhc29uCiAgICAgIG9mIHlvdXIgYWNjZXB0aW5nIGFueSBzdWNoIHdhcnJhbnR5IG9yIGFkZGl0aW9uYWwgbGlhYmlsaXR5LgoKICAgRU5EIE9GIFRFUk1TIEFORCBDT05ESVRJT05TCgogICBBUFBFTkRJWDogSG93IHRvIGFwcGx5IHRoZSBBcGFjaGUgTGljZW5zZSB0byB5b3VyIHdvcmsuCgogICAgICBUbyBhcHBseSB0aGUgQXBhY2hlIExpY2Vuc2UgdG8geW91ciB3b3JrLCBhdHRhY2ggdGhlIGZvbGxvd2luZwogICAgICBib2lsZXJwbGF0ZSBub3RpY2UsIHdpdGggdGhlIGZpZWxkcyBlbmNsb3NlZCBieSBicmFja2V0cyAiW10iCiAgICAgIHJlcGxhY2VkIHdpdGggeW91ciBvd24gaWRlbnRpZnlpbmcgaW5mb3JtYXRpb24uIChEb24ndCBpbmNsdWRlCiAgICAgIHRoZSBicmFja2V0cyEpICBUaGUgdGV4dCBzaG91bGQgYmUgZW5jbG9zZWQgaW4gdGhlIGFwcHJvcHJpYXRlCiAgICAgIGNvbW1lbnQgc3ludGF4IGZvciB0aGUgZmlsZSBmb3JtYXQuIFdlIGFsc28gcmVjb21tZW5kIHRoYXQgYQogICAgICBmaWxlIG9yIGNsYXNzIG5hbWUgYW5kIGRlc2NyaXB0aW9uIG9mIHB1cnBvc2UgYmUgaW5jbHVkZWQgb24gdGhlCiAgICAgIHNhbWUgInByaW50ZWQgcGFnZSIgYXMgdGhlIGNvcHlyaWdodCBub3RpY2UgZm9yIGVhc2llcgogICAgICBpZGVudGlmaWNhdGlvbiB3aXRoaW4gdGhpcmQtcGFydHkgYXJjaGl2ZXMuCgogICBDb3B5cmlnaHQgW3l5eXldIFtuYW1lIG9mIGNvcHlyaWdodCBvd25lcl0KCiAgIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSAiTGljZW5zZSIpOwogICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuCiAgIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdAoKICAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMAoKICAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZQogICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiAiQVMgSVMiIEJBU0lTLAogICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4KICAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZAogICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS4KCgpUaGlzIHByb2R1Y3QgYnVuZGxlcyBLbm9ja291dCBKYXZhU2NyaXB0IGxpYnJhcnkgdjMuNS4wLAp3aGljaCBpcyBhdmFpbGFibGUgdW5kZXIgYSBNSVQgbGljZW5zZToKClRoZSBNSVQgTGljZW5zZSAoTUlUKSAtIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwCgpDb3B5cmlnaHQgKGMpIFN0ZXZlbiBTYW5kZXJzb24sIHRoZSBLbm9ja291dC5qcyB0ZWFtLCBhbmQgb3RoZXIgY29udHJpYnV0b3JzCmh0dHA6Ly9rbm9ja291dGpzLmNvbS8KClBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkKb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgIlNvZnR3YXJlIiksIHRvIGRlYWwKaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cwp0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsCmNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcwpmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOgoKVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4KYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuCgpUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgIkFTIElTIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUgpJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwKRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFCkFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIKTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwKT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTgpUSEUgU09GVFdBUkUuCg==');
  exports['registerResource']('META-INF/NOTICE', 'Cktub2Nrb3V0LmpzIGZvciBKYXZhCkNvcHlyaWdodCAyMDE5IFRoZSBBcGFjaGUgU29mdHdhcmUgRm91bmRhdGlvbgoKVGhpcyBwcm9kdWN0IGluY2x1ZGVzIHNvZnR3YXJlIGRldmVsb3BlZCBhdApUaGUgQXBhY2hlIFNvZnR3YXJlIEZvdW5kYXRpb24gKGh0dHA6Ly93d3cuYXBhY2hlLm9yZy8pLgoKCg==');
  exports['registerResource']('META-INF/services/org.netbeans.html.context.spi.Contexts$Provider', 'b3JnLm5ldGJlYW5zLmh0bWwua280ai5LTzRKCg==');
});