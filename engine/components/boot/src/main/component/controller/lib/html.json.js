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

function net_java_html_json_ComputedProperty() {
  var m;
  var CLS = net_java_html_json_ComputedProperty;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = c.write__Ljava_lang_String_2 = function() {
  return "";
};
c['write__Ljava_lang_String_2'] = m;

    m.access = 1025;
    m.cls = CLS;
    c.constructor = CLS;
    function net_java_html_json_ComputedPropertyfillInstOf(x) {
        Object.defineProperty(x, '$instOf_net_java_html_json_ComputedProperty', { value : true });
      vm.java_lang_annotation_Annotation(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: net_java_html_json_ComputedPropertyfillInstOf });
    net_java_html_json_ComputedPropertyfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'net/java/html/json/ComputedProperty';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.java_lang_annotation_Annotation(false).constructor.$class
    ]; };
    CLS.$class.access = 9729;
    CLS.$class.cnstr = CLS;
    CLS.$class.anno = {"Ljava/lang/annotation/Retention;" : {
"value" : (refs_java_lang_annotation_RetentionPolicy || (refs_java_lang_annotation_RetentionPolicy = vm.java_lang_annotation_RetentionPolicy(false)))['valueOf__Ljava_lang_annotation_RetentionPolicy_2Ljava_lang_String_2']('SOURCE')
}
,"Ljava/lang/annotation/Target;" : {
"value" : [(refs_java_lang_annotation_ElementType || (refs_java_lang_annotation_ElementType = vm.java_lang_annotation_ElementType(false)))['valueOf__Ljava_lang_annotation_ElementType_2Ljava_lang_String_2']('METHOD')]
}

    };
    var refs_java_lang_annotation_RetentionPolicy;
    var refs_java_lang_annotation_ElementType;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.net_java_html_json_ComputedProperty = registerClass(exports,'net_java_html_json_ComputedProperty',net_java_html_json_ComputedProperty);

vm.java_lang_annotation_ElementType = link('java/lang/annotation/ElementType', function(f) { vm.java_lang_annotation_ElementType =  f; });
vm.java_lang_annotation_Target = link('java/lang/annotation/Target', function(f) { vm.java_lang_annotation_Target =  f; });
vm.java_lang_annotation_RetentionPolicy = link('java/lang/annotation/RetentionPolicy', function(f) { vm.java_lang_annotation_RetentionPolicy =  f; });
vm.java_lang_annotation_Retention = link('java/lang/annotation/Retention', function(f) { vm.java_lang_annotation_Retention =  f; });
vm.java_lang_annotation_Annotation = link('java/lang/annotation/Annotation', function(f) { vm.java_lang_annotation_Annotation =  f; });

function net_java_html_json_FakeModel$1() {
  var m;
  var CLS = net_java_html_json_FakeModel$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    c.constructor = CLS;
    function net_java_html_json_FakeModel$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_net_java_html_json_FakeModel$1', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: net_java_html_json_FakeModel$1fillInstOf });
    net_java_html_json_FakeModel$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'net/java/html/json/FakeModel$1';
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
vm.net_java_html_json_FakeModel$1 = net_java_html_json_FakeModel$1;


function net_java_html_json_FakeModel$Html4JavaType() {
  var m;
  var CLS = net_java_html_json_FakeModel$Html4JavaType;
  if (!CLS.$class) {
    var pp = org_netbeans_html_json_spi_Proto$Type(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_org_netbeans_html_json_spi_Proto$Type || (refs_org_netbeans_html_json_spi_Proto$Type = org_netbeans_html_json_spi_Proto$Type(false))).constructor.cons__VLjava_lang_Class_2Ljava_lang_Class_2II.call(lcA0, (refs_net_java_html_json_FakeModel || (refs_net_java_html_json_FakeModel = net_java_html_json_FakeModel(false))).constructor.$class, (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = net_java_html_json_Models(false))).constructor.$class, 0, 0);
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.setValue__VLnet_java_html_json_FakeModel_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Lnet_java_html_json_FakeModel_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.call__VLnet_java_html_json_FakeModel_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_net_java_html_json_FakeModel']) vm.java_lang_Class(false).castEx(lcA1, 'net.java.html.json.FakeModel');
var stA0 = (refs_net_java_html_json_FakeModel || (refs_net_java_html_json_FakeModel = net_java_html_json_FakeModel(false))).access$100__Lorg_netbeans_html_json_spi_Proto_2Lnet_java_html_json_FakeModel_2(lcA1);
return stA0;

};
c['protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.onChange__VLnet_java_html_json_FakeModel_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLnet_java_html_json_FakeModel_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.read__Lnet_java_html_json_FakeModel_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = new net_java_html_json_FakeModel;
(refs_net_java_html_json_FakeModel || (refs_net_java_html_json_FakeModel = net_java_html_json_FakeModel(false))).constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lnet_java_html_json_FakeModel$1_2.call(stA0, lcA1, lcA2, null);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.cloneTo__Lnet_java_html_json_FakeModel_2Lnet_java_html_json_FakeModel_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
return lcA1;

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_net_java_html_json_FakeModel']) vm.java_lang_Class(false).castEx(lcA1, 'net.java.html.json.FakeModel');
lcA0.onMessage__VLnet_java_html_json_FakeModel_2IILjava_lang_Object_2_3Ljava_lang_Object_2(lcA1, lcI2, lcI3, lcA4, lcA5);
return;

};
c['onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.onChange__VLjava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_net_java_html_json_FakeModel']) vm.java_lang_Class(false).castEx(lcA1, 'net.java.html.json.FakeModel');
lcA0.onChange__VLnet_java_html_json_FakeModel_2I(lcA1, lcI2);
return;

};
c['onChange__VLjava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = lcA0.read__Lnet_java_html_json_FakeModel_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2(lcA1, lcA2);
return stA0;

};
c['read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_net_java_html_json_FakeModel']) vm.java_lang_Class(false).castEx(lcA1, 'net.java.html.json.FakeModel');
var stA0 = lcA0.cloneTo__Lnet_java_html_json_FakeModel_2Lnet_java_html_json_FakeModel_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
c['cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_net_java_html_json_FakeModel']) vm.java_lang_Class(false).castEx(lcA1, 'net.java.html.json.FakeModel');
lcA0.call__VLnet_java_html_json_FakeModel_2ILjava_lang_Object_2Ljava_lang_Object_2(lcA1, lcI2, lcA3, lcA4);
return;

};
c['call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Ljava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_net_java_html_json_FakeModel']) vm.java_lang_Class(false).castEx(lcA1, 'net.java.html.json.FakeModel');
var stA0 = lcA0.getValue__Ljava_lang_Object_2Lnet_java_html_json_FakeModel_2I(lcA1, lcI2);
return stA0;

};
c['getValue__Ljava_lang_Object_2Ljava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.setValue__VLjava_lang_Object_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_net_java_html_json_FakeModel']) vm.java_lang_Class(false).castEx(lcA1, 'net.java.html.json.FakeModel');
lcA0.setValue__VLnet_java_html_json_FakeModel_2ILjava_lang_Object_2(lcA1, lcI2, lcA3);
return;

};
c['setValue__VLjava_lang_Object_2ILjava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_json_FakeModel$1_2 = function(lcA1) {
  var  lcA0 = this;
c.constructor.cons__V.call(lcA0);
return;

};
    m.access = 4096;
    m.cls = CLS;
    c.constructor = CLS;
    function net_java_html_json_FakeModel$Html4JavaTypefillInstOf(x) {
        Object.defineProperty(x, '$instOf_net_java_html_json_FakeModel$Html4JavaType', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: net_java_html_json_FakeModel$Html4JavaTypefillInstOf });
    net_java_html_json_FakeModel$Html4JavaTypefillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'net/java/html/json/FakeModel$Html4JavaType';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
    var refs_net_java_html_json_FakeModel;
    var refs_net_java_html_json_Models;
    var refs_org_netbeans_html_json_spi_Proto$Type;
    var refs_java_lang_UnsupportedOperationException;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.net_java_html_json_FakeModel$Html4JavaType = net_java_html_json_FakeModel$Html4JavaType;

vm.java_lang_UnsupportedOperationException = link('java/lang/UnsupportedOperationException', function(f) { vm.java_lang_UnsupportedOperationException =  f; });

function org_netbeans_html_json_spi_Proto$Type() {
  var m;
  var CLS = org_netbeans_html_json_spi_Proto$Type;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._clazz = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_json_spi_Proto$Type_clazz'] = v; return this['fld_org_netbeans_html_json_spi_Proto$Type_clazz']; };
  m = c._properties = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_json_spi_Proto$Type_properties'] = v; return this['fld_org_netbeans_html_json_spi_Proto$Type_properties']; };
  m = c._functions = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_json_spi_Proto$Type_functions'] = v; return this['fld_org_netbeans_html_json_spi_Proto$Type_functions']; };
  CLS['fld_$assertionsDisabled'] = 0;
  m = c._$assertionsDisabled = function (v) {  if (arguments.length == 1) CLS['fld_$assertionsDisabled'] = v; return CLS['fld_$assertionsDisabled']; };
    m = CLS.cons__VLjava_lang_Class_2Ljava_lang_Class_2II = function(lcA1, lcA2, lcI3, lcI4) {
  var  lcA0 = this;
lcA0['fld_org_netbeans_html_json_spi_Proto$Type_clazz'] = lcA1;
var stA0 = lcA0;var stA1 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lorg/netbeans/html/json/spi/Proto$PropertyInfo;', vm.org_netbeans_html_json_spi_Proto$PropertyInfo, lcI3);
var stA1 = (refs_org_netbeans_html_json_impl_SimpleList || (refs_org_netbeans_html_json_impl_SimpleList = org_netbeans_html_json_impl_SimpleList(false))).asList__Ljava_util_List_2_3Ljava_lang_Object_2(stA1);
stA0['fld_org_netbeans_html_json_spi_Proto$Type_properties'] = stA1;
var stA0 = lcA0;var stA1 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, lcI4);
var stA1 = (refs_org_netbeans_html_json_impl_SimpleList || (refs_org_netbeans_html_json_impl_SimpleList = org_netbeans_html_json_impl_SimpleList(false))).asList__Ljava_util_List_2_3Ljava_lang_Object_2(stA1);
stA0['fld_org_netbeans_html_json_spi_Proto$Type_functions'] = stA1;
(refs_org_netbeans_html_json_impl_JSON || (refs_org_netbeans_html_json_impl_JSON = org_netbeans_html_json_impl_JSON(false))).register__VLjava_lang_Class_2Lorg_netbeans_html_json_spi_Proto$Type_2(lcA1, lcA0);
return;

};
CLS['cons__VLjava_lang_Class_2Ljava_lang_Class_2II'] = m;

    m.access = 4;
    m.cls = CLS;
    m = c.registerProperty__VLjava_lang_String_2IZ = function(lcA1, lcI2, lcI3) {
  var  lcA0 = this;
lcA0.registerProperty__VLjava_lang_String_2IZZ(lcA1, lcI2, lcI3, 0);
return;

};
c['registerProperty__VLjava_lang_String_2IZ'] = m;

    m.access = 20;
    m.cls = CLS;
    m = c.registerProperty__VLjava_lang_String_2IZZ = function(lcA1, lcI2, lcI3, lcI4) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

(refs_org_netbeans_html_json_impl_SimpleList || (refs_org_netbeans_html_json_impl_SimpleList = org_netbeans_html_json_impl_SimpleList(false))).ensureSize__VLjava_util_List_2I(lcA0['fld_org_netbeans_html_json_spi_Proto$Type_properties'], (((lcI2) + (1)) | 0));
if ((c._$assertionsDisabled()) != 0) { gt = 37; break IF; }
var stA0 = invoker.get__Ljava_lang_Object_2I(lcA0['fld_org_netbeans_html_json_spi_Proto$Type_properties'],lcI2);
if ((stA0) === null) { gt = 37; break IF; }
var stA0 = new vm.java_lang_AssertionError;
(refs_java_lang_AssertionError || (refs_java_lang_AssertionError = vm.java_lang_AssertionError(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }
    }
    X_37: for (;;) { IF: if (gt <= 37) {

if ((lcI3) == 0) { gt = 45; break IF; }
var stI0 = 1;{ gt = 46; break IF; }
    }
    X_45: for (;;) { IF: if (gt <= 45) {

var stI0 = 0;    }
    X_46: for (;;) { IF: if (gt <= 46) {

if ((lcI4) == 0) { gt = 55; break IF; }
var stI1 = 2;{ gt = 56; break IF; }
    }
    X_55: for (;;) { IF: if (gt <= 55) {

var stI1 = 0;    }
    X_56: for (;;) { IF: if (gt <= 56) {

var lcI5 = ((((stI0 | stI1)) << 24) >> 24);
var stA0 = lcA0['fld_org_netbeans_html_json_spi_Proto$Type_properties'];var stI1 = lcI2;var stA2 = new org_netbeans_html_json_spi_Proto$PropertyInfo;
(refs_org_netbeans_html_json_spi_Proto$PropertyInfo || (refs_org_netbeans_html_json_spi_Proto$PropertyInfo = org_netbeans_html_json_spi_Proto$PropertyInfo(false))).constructor.cons__VLjava_lang_String_2B.call(stA2, lcA1, lcI5);
var stA0 = invoker.set__Ljava_lang_Object_2ILjava_lang_Object_2(stA0,stI1, stA2);
return;

    }
}}}}}}
};
c['registerProperty__VLjava_lang_String_2IZZ'] = m;

    m.access = 20;
    m.cls = CLS;
    m = c.registerFunction__VLjava_lang_String_2I = function(lcA1, lcI2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

(refs_org_netbeans_html_json_impl_SimpleList || (refs_org_netbeans_html_json_impl_SimpleList = org_netbeans_html_json_impl_SimpleList(false))).ensureSize__VLjava_util_List_2I(lcA0['fld_org_netbeans_html_json_spi_Proto$Type_functions'], (((lcI2) + (1)) | 0));
if ((c._$assertionsDisabled()) != 0) { gt = 37; break IF; }
var stA0 = invoker.get__Ljava_lang_Object_2I(lcA0['fld_org_netbeans_html_json_spi_Proto$Type_functions'],lcI2);
if ((stA0) === null) { gt = 37; break IF; }
var stA0 = new vm.java_lang_AssertionError;
(refs_java_lang_AssertionError || (refs_java_lang_AssertionError = vm.java_lang_AssertionError(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }
    }
    X_37: for (;;) { IF: if (gt <= 37) {

var stA0 = invoker.set__Ljava_lang_Object_2ILjava_lang_Object_2(lcA0['fld_org_netbeans_html_json_spi_Proto$Type_functions'],lcI2, lcA1);
return;

    }
}}
};
c['registerFunction__VLjava_lang_String_2I'] = m;

    m.access = 20;
    m.cls = CLS;
    m = c.createProto__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = new org_netbeans_html_json_spi_Proto;
(refs_org_netbeans_html_json_spi_Proto || (refs_org_netbeans_html_json_spi_Proto = org_netbeans_html_json_spi_Proto(false))).constructor.cons__VLjava_lang_Object_2Lorg_netbeans_html_json_spi_Proto$Type_2Lnet_java_html_BrwsrCtx_2.call(stA0, lcA1, lcA0, lcA2);
return stA0;

};
c['createProto__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setValue__VLjava_lang_Object_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
};
c['setValue__VLjava_lang_Object_2ILjava_lang_Object_2'] = m;

    m.access = 1028;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Ljava_lang_Object_2I = function(lcA1, lcI2) {
};
c['getValue__Ljava_lang_Object_2Ljava_lang_Object_2I'] = m;

    m.access = 1028;
    m.cls = CLS;
    m = c.call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
};
c['call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 1028;
    m.cls = CLS;
    m = c.cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
};
c['cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'] = m;

    m.access = 1028;
    m.cls = CLS;
    m = c.read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
};
c['read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2'] = m;

    m.access = 1028;
    m.cls = CLS;
    m = c.onChange__VLjava_lang_Object_2I = function(lcA1, lcI2) {
};
c['onChange__VLjava_lang_Object_2I'] = m;

    m.access = 1028;
    m.cls = CLS;
    m = c.protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2 = function(lcA1) {
};
c['protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2'] = m;

    m.access = 1028;
    m.cls = CLS;
    m = c.onMessage__VLjava_lang_Object_2IILjava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = lcA1;var stI2 = lcI2;var stI3 = lcI3;var stA4 = lcA4;var stA5 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 0);
invoker.onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2(stA0,stA1, stI2, stI3, stA4, stA5);
return;

};
c['onMessage__VLjava_lang_Object_2IILjava_lang_Object_2'] = m;

    m.access = 4;
    m.cls = CLS;
    m = c.onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
  var  lcA0 = this;
invoker.onMessage__VLjava_lang_Object_2IILjava_lang_Object_2(lcA0,lcA1, lcI2, lcI3, lcA4);
return;

};
c['onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2'] = m;

    m.access = 4;
    m.cls = CLS;
    m = c.copyJSON__VLnet_java_html_BrwsrCtx_2_3Ljava_lang_Object_2Ljava_lang_Class_2_3Ljava_lang_Object_2 = function(lcA1, lcA2, lcA3, lcA4) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var lcI5 = 0;
    }
    X_3: for (;;) { IF: if (gt <= 3) {

if ((lcI5) >= ((lcA2).length)) { gt = 38; break IF; }
if ((lcI5) >= ((lcA4).length)) { gt = 38; break IF; }
var stA0 = lcA4;var stI1 = lcI5;var stA2 = (refs_org_netbeans_html_json_impl_JSON || (refs_org_netbeans_html_json_impl_JSON = org_netbeans_html_json_impl_JSON(false))).read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA1, lcA3, (lcA2[lcI5] || Array.at(lcA2, lcI5)));
Array.at(stA0, stI1, stA2);
lcI5++;
{ gt = 0; continue X_3; }
    }
    X_38: for (;;) { IF: if (gt <= 38) {
return;

    }
}}}
};
c['copyJSON__VLnet_java_html_BrwsrCtx_2_3Ljava_lang_Object_2Ljava_lang_Class_2_3Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isSame__ZII = function(lcI1, lcI2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((lcI1) != (lcI2)) { gt = 9; break IF; }
var stI0 = 1;{ gt = 10; break IF; }
    }
    X_9: for (;;) { IF: if (gt <= 9) {

var stI0 = 0;    }
    X_10: for (;;) { IF: if (gt <= 10) {
return stI0;

    }
}}}
};
c['isSame__ZII'] = m;

    m.access = 17;
    m.cls = CLS;
    m = c.isSame__ZDD = function(lcD1, lcD3) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = (lcD1 == lcD3) ? 0 : ((lcD1 < lcD3) ? -1 : 1);
if ((stI0) != 0) { gt = 10; break IF; }
var stI0 = 1;{ gt = 11; break IF; }
    }
    X_10: for (;;) { IF: if (gt <= 10) {

var stI0 = 0;    }
    X_11: for (;;) { IF: if (gt <= 11) {
return stI0;

    }
}}}
};
c['isSame__ZDD'] = m;

    m.access = 17;
    m.cls = CLS;
    m = c.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((lcA1) !== (lcA2)) { gt = 7; break IF; }
return 1;
    }
    X_7: for (;;) { IF: if (gt <= 7) {

if ((lcA1) === null) { gt = 15; break IF; }
if ((lcA2) !== null) { gt = 17; break IF; }
    }
    X_15: for (;;) { IF: if (gt <= 15) {

return 0;
    }
    X_17: for (;;) { IF: if (gt <= 17) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA1,lcA2);
return stI0;

    }
}}}}
};
c['isSame__ZLjava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 17;
    m.cls = CLS;
    m = c.hashPlus__ILjava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((lcA1) !== null) { gt = 8; break IF; }
var stI0 = lcI2;{ gt = 14; break IF; }
    }
    X_8: for (;;) { IF: if (gt <= 8) {

var stI0 = lcI2;var stI1 = invoker.hashCode__I(lcA1);
var stI0 = (stI0 ^ stI1);    }
    X_14: for (;;) { IF: if (gt <= 14) {
return stI0;

    }
}}}
};
c['hashPlus__ILjava_lang_Object_2I'] = m;

    m.access = 17;
    m.cls = CLS;
    m = c.toJSON__Ljava_lang_String_2Ljava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = (refs_org_netbeans_html_json_impl_JSON || (refs_org_netbeans_html_json_impl_JSON = org_netbeans_html_json_impl_JSON(false))).toJSON__Ljava_lang_String_2Ljava_lang_Object_2(lcA1);
return stA0;

};
c['toJSON__Ljava_lang_String_2Ljava_lang_Object_2'] = m;

    m.access = 17;
    m.cls = CLS;
    m = c.stringValue__Ljava_lang_String_2Ljava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = (refs_org_netbeans_html_json_impl_JSON || (refs_org_netbeans_html_json_impl_JSON = org_netbeans_html_json_impl_JSON(false))).stringValue__Ljava_lang_String_2Ljava_lang_Object_2(lcA1);
return stA0;

};
c['stringValue__Ljava_lang_String_2Ljava_lang_Object_2'] = m;

    m.access = 17;
    m.cls = CLS;
    m = c.numberValue__Ljava_lang_Number_2Ljava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = (refs_org_netbeans_html_json_impl_JSON || (refs_org_netbeans_html_json_impl_JSON = org_netbeans_html_json_impl_JSON(false))).numberValue__Ljava_lang_Number_2Ljava_lang_Object_2(lcA1);
return stA0;

};
c['numberValue__Ljava_lang_Number_2Ljava_lang_Object_2'] = m;

    m.access = 17;
    m.cls = CLS;
    m = c.charValue__Ljava_lang_Character_2Ljava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = (refs_org_netbeans_html_json_impl_JSON || (refs_org_netbeans_html_json_impl_JSON = org_netbeans_html_json_impl_JSON(false))).charValue__Ljava_lang_Character_2Ljava_lang_Object_2(lcA1);
return stA0;

};
c['charValue__Ljava_lang_Character_2Ljava_lang_Object_2'] = m;

    m.access = 17;
    m.cls = CLS;
    m = c.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = (refs_org_netbeans_html_json_impl_JSON || (refs_org_netbeans_html_json_impl_JSON = org_netbeans_html_json_impl_JSON(false))).boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(lcA1);
return stA0;

};
c['boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2'] = m;

    m.access = 17;
    m.cls = CLS;
    m = c.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = invoker.isAssignableFrom__ZLjava_lang_Class_2((refs_java_lang_Number || (refs_java_lang_Number = vm.java_lang_Number(false))).constructor.$class,lcA1);
if ((stI0) == 0) { gt = 15; break IF; }
var stA0 = lcA0.numberValue__Ljava_lang_Number_2Ljava_lang_Object_2(lcA2);
var lcA2 = stA0;
    }
    X_15: for (;;) { IF: if (gt <= 15) {

if (((refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class) !== (lcA1)) { gt = 27; break IF; }
var stA0 = lcA0.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(lcA2);
var lcA2 = stA0;
    }
    X_27: for (;;) { IF: if (gt <= 27) {

if (((refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class) !== (lcA1)) { gt = 39; break IF; }
var stA0 = lcA0.stringValue__Ljava_lang_String_2Ljava_lang_Object_2(lcA2);
var lcA2 = stA0;
    }
    X_39: for (;;) { IF: if (gt <= 39) {

if (((refs_java_lang_Character || (refs_java_lang_Character = vm.java_lang_Character(false))).constructor.$class) !== (lcA1)) { gt = 51; break IF; }
var stA0 = lcA0.charValue__Ljava_lang_Character_2Ljava_lang_Object_2(lcA2);
var lcA2 = stA0;
    }
    X_51: for (;;) { IF: if (gt <= 51) {

if (((refs_java_lang_Integer || (refs_java_lang_Integer = vm.java_lang_Integer(false))).constructor.$class) !== (lcA1)) { gt = 79; break IF; }
var stI0 = lcA2 != null && lcA2['$instOf_java_lang_Number'] ? 1 : 0;
if ((stI0) == 0) { gt = 74; break IF; }
if (lcA2 !== null && !lcA2['$instOf_java_lang_Number']) vm.java_lang_Class(false).castEx(lcA2, 'java.lang.Number');
var stI0 = invoker.intValue__I(lcA2);
{ gt = 75; break IF; }
    }
    X_74: for (;;) { IF: if (gt <= 74) {

var stI0 = 0;    }
    X_75: for (;;) { IF: if (gt <= 75) {
var stA0 = (refs_java_lang_Integer || (refs_java_lang_Integer = vm.java_lang_Integer(false)))['valueOf__Ljava_lang_Integer_2I'](stI0);
var lcA2 = stA0;
    }
    X_79: for (;;) { IF: if (gt <= 79) {

if (((refs_java_lang_Long || (refs_java_lang_Long = vm.java_lang_Long(false))).constructor.$class) !== (lcA1)) { gt = 107; break IF; }
var stI0 = lcA2 != null && lcA2['$instOf_java_lang_Number'] ? 1 : 0;
if ((stI0) == 0) { gt = 102; break IF; }
if (lcA2 !== null && !lcA2['$instOf_java_lang_Number']) vm.java_lang_Class(false).castEx(lcA2, 'java.lang.Number');
var stL0 = invoker.longValue__J(lcA2);
{ gt = 103; break IF; }
    }
    X_102: for (;;) { IF: if (gt <= 102) {

var stL0 = (0).toLong();    }
    X_103: for (;;) { IF: if (gt <= 103) {
var stA0 = (refs_java_lang_Long || (refs_java_lang_Long = vm.java_lang_Long(false)))['valueOf__Ljava_lang_Long_2J'](stL0);
var lcA2 = stA0;
    }
    X_107: for (;;) { IF: if (gt <= 107) {

if (((refs_java_lang_Short || (refs_java_lang_Short = vm.java_lang_Short(false))).constructor.$class) !== (lcA1)) { gt = 135; break IF; }
var stI0 = lcA2 != null && lcA2['$instOf_java_lang_Number'] ? 1 : 0;
if ((stI0) == 0) { gt = 130; break IF; }
if (lcA2 !== null && !lcA2['$instOf_java_lang_Number']) vm.java_lang_Class(false).castEx(lcA2, 'java.lang.Number');
var stI0 = invoker.shortValue__S(lcA2);
{ gt = 131; break IF; }
    }
    X_130: for (;;) { IF: if (gt <= 130) {

var stI0 = 0;    }
    X_131: for (;;) { IF: if (gt <= 131) {
var stA0 = (refs_java_lang_Short || (refs_java_lang_Short = vm.java_lang_Short(false)))['valueOf__Ljava_lang_Short_2S'](stI0);
var lcA2 = stA0;
    }
    X_135: for (;;) { IF: if (gt <= 135) {

if (((refs_java_lang_Byte || (refs_java_lang_Byte = vm.java_lang_Byte(false))).constructor.$class) !== (lcA1)) { gt = 163; break IF; }
var stI0 = lcA2 != null && lcA2['$instOf_java_lang_Number'] ? 1 : 0;
if ((stI0) == 0) { gt = 158; break IF; }
if (lcA2 !== null && !lcA2['$instOf_java_lang_Number']) vm.java_lang_Class(false).castEx(lcA2, 'java.lang.Number');
var stI0 = invoker.byteValue__B(lcA2);
{ gt = 159; break IF; }
    }
    X_158: for (;;) { IF: if (gt <= 158) {

var stI0 = 0;    }
    X_159: for (;;) { IF: if (gt <= 159) {
var stA0 = (refs_java_lang_Byte || (refs_java_lang_Byte = vm.java_lang_Byte(false)))['valueOf__Ljava_lang_Byte_2B'](stI0);
var lcA2 = stA0;
    }
    X_163: for (;;) { IF: if (gt <= 163) {

if (((refs_java_lang_Double || (refs_java_lang_Double = vm.java_lang_Double(false))).constructor.$class) !== (lcA1)) { gt = 193; break IF; }
var stI0 = lcA2 != null && lcA2['$instOf_java_lang_Number'] ? 1 : 0;
if ((stI0) == 0) { gt = 186; break IF; }
if (lcA2 !== null && !lcA2['$instOf_java_lang_Number']) vm.java_lang_Class(false).castEx(lcA2, 'java.lang.Number');
var stD0 = invoker.doubleValue__D(lcA2);
{ gt = 189; break IF; }
    }
    X_186: for (;;) { IF: if (gt <= 186) {

var stD0 = NaN;    }
    X_189: for (;;) { IF: if (gt <= 189) {
var stA0 = (refs_java_lang_Double || (refs_java_lang_Double = vm.java_lang_Double(false)))['valueOf__Ljava_lang_Double_2D'](stD0);
var lcA2 = stA0;
    }
    X_193: for (;;) { IF: if (gt <= 193) {

if (((refs_java_lang_Float || (refs_java_lang_Float = vm.java_lang_Float(false))).constructor.$class) !== (lcA1)) { gt = 222; break IF; }
var stI0 = lcA2 != null && lcA2['$instOf_java_lang_Number'] ? 1 : 0;
if ((stI0) == 0) { gt = 216; break IF; }
if (lcA2 !== null && !lcA2['$instOf_java_lang_Number']) vm.java_lang_Class(false).castEx(lcA2, 'java.lang.Number');
var stF0 = invoker.floatValue__F(lcA2);
{ gt = 218; break IF; }
    }
    X_216: for (;;) { IF: if (gt <= 216) {

var stF0 = NaN;    }
    X_218: for (;;) { IF: if (gt <= 218) {
var stA0 = (refs_java_lang_Float || (refs_java_lang_Float = vm.java_lang_Float(false)))['valueOf__Ljava_lang_Float_2F'](stF0);
var lcA2 = stA0;
    }
    X_222: for (;;) { IF: if (gt <= 222) {

var stI0 = invoker.isEnum__Z(lcA1);
if ((stI0) == 0) { gt = 250; break IF; }
var stI0 = lcA2 != null && lcA2['$instOf_java_lang_String'] ? 1 : 0;
if ((stI0) == 0) { gt = 250; break IF; }
var stA0 = invoker.asSubclass__Ljava_lang_Class_2Ljava_lang_Class_2(lcA1,(refs_java_lang_Enum || (refs_java_lang_Enum = vm.java_lang_Enum(false))).constructor.$class);
if (lcA2 !== null && !lcA2['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(lcA2, 'java.lang.String');
var stA0 = (refs_java_lang_Enum || (refs_java_lang_Enum = vm.java_lang_Enum(false)))['valueOf__Ljava_lang_Enum_2Ljava_lang_Class_2Ljava_lang_String_2'](stA0, lcA2);
var lcA2 = stA0;
    }
    X_250: for (;;) { IF: if (gt <= 250) {

var stA0 = invoker.cast__Ljava_lang_Object_2Ljava_lang_Object_2(lcA1,lcA2);
return stA0;

    }
}}}}}}}}}}}}}}}}}}}}}}}}
};
c['extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2'] = m;

    m.access = 17;
    m.cls = CLS;
    m = c.replaceValue__VLjava_util_Collection_2Ljava_lang_Class_2Ljava_lang_Object_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 0);
var stA0 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = net_java_html_json_Models(false))).asList__Ljava_util_List_2_3Ljava_lang_Object_2(stA0);
var lcA4 = stA0;
var stI0 = Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](lcA3, 1, vm.java_lang_Object);
if ((stI0) == 0) { gt = 71; break IF; }
if (lcA3 !== null && !Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](lcA3, 1, vm.java_lang_Object)) vm.java_lang_Class(false).castEx(lcA3, '');
if (lcA3 !== null && !Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](lcA3, 1, vm.java_lang_Object)) vm.java_lang_Class(false).castEx(lcA3, '');
var lcA5 = lcA3;
var lcI6 = (lcA5).length;
var lcI7 = 0;
    }
    X_33: for (;;) { IF: if (gt <= 33) {

if ((lcI7) >= (lcI6)) { gt = 68; break IF; }
var lcA8 = (lcA5[lcI7] || Array.at(lcA5, lcI7));
var stA0 = lcA4;var stA1 = lcA0.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA2, lcA8);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,stA1);
lcI7++;
{ gt = 0; continue X_33; }
    }
    X_68: for (;;) { IF: if (gt <= 68) {
{ gt = 605; break IF; }
    }
    X_71: for (;;) { IF: if (gt <= 71) {

var stI0 = Array.prototype['isInstance__ZLjava_lang_Object_2Ljava_lang_String_2'](lcA3, '[B');
if ((stI0) == 0) { gt = 136; break IF; }
if (lcA3 !== null && !Array.prototype['isInstance__ZLjava_lang_Object_2Ljava_lang_String_2'](lcA3, '[B')) vm.java_lang_Class(false).castEx(lcA3, '');
if (lcA3 !== null && !Array.prototype['isInstance__ZLjava_lang_Object_2Ljava_lang_String_2'](lcA3, '[B')) vm.java_lang_Class(false).castEx(lcA3, '');
var lcA5 = lcA3;
var lcI6 = (lcA5).length;
var lcI7 = 0;
    }
    X_95: for (;;) { IF: if (gt <= 95) {

if ((lcI7) >= (lcI6)) { gt = 133; break IF; }
var stA0 = (refs_java_lang_Byte || (refs_java_lang_Byte = vm.java_lang_Byte(false)))['valueOf__Ljava_lang_Byte_2B']((lcA5[lcI7] || Array.at(lcA5, lcI7)));
var lcA8 = stA0;
var stA0 = lcA4;var stA1 = lcA0.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA2, lcA8);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,stA1);
lcI7++;
{ gt = 0; continue X_95; }
    }
    X_133: for (;;) { IF: if (gt <= 133) {
{ gt = 605; break IF; }
    }
    X_136: for (;;) { IF: if (gt <= 136) {

var stI0 = Array.prototype['isInstance__ZLjava_lang_Object_2Ljava_lang_String_2'](lcA3, '[S');
if ((stI0) == 0) { gt = 201; break IF; }
if (lcA3 !== null && !Array.prototype['isInstance__ZLjava_lang_Object_2Ljava_lang_String_2'](lcA3, '[S')) vm.java_lang_Class(false).castEx(lcA3, '');
if (lcA3 !== null && !Array.prototype['isInstance__ZLjava_lang_Object_2Ljava_lang_String_2'](lcA3, '[S')) vm.java_lang_Class(false).castEx(lcA3, '');
var lcA5 = lcA3;
var lcI6 = (lcA5).length;
var lcI7 = 0;
    }
    X_160: for (;;) { IF: if (gt <= 160) {

if ((lcI7) >= (lcI6)) { gt = 198; break IF; }
var stA0 = (refs_java_lang_Short || (refs_java_lang_Short = vm.java_lang_Short(false)))['valueOf__Ljava_lang_Short_2S']((lcA5[lcI7] || Array.at(lcA5, lcI7)));
var lcA8 = stA0;
var stA0 = lcA4;var stA1 = lcA0.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA2, lcA8);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,stA1);
lcI7++;
{ gt = 0; continue X_160; }
    }
    X_198: for (;;) { IF: if (gt <= 198) {
{ gt = 605; break IF; }
    }
    X_201: for (;;) { IF: if (gt <= 201) {

var stI0 = Array.prototype['isInstance__ZLjava_lang_Object_2Ljava_lang_String_2'](lcA3, '[I');
if ((stI0) == 0) { gt = 266; break IF; }
if (lcA3 !== null && !Array.prototype['isInstance__ZLjava_lang_Object_2Ljava_lang_String_2'](lcA3, '[I')) vm.java_lang_Class(false).castEx(lcA3, '');
if (lcA3 !== null && !Array.prototype['isInstance__ZLjava_lang_Object_2Ljava_lang_String_2'](lcA3, '[I')) vm.java_lang_Class(false).castEx(lcA3, '');
var lcA5 = lcA3;
var lcI6 = (lcA5).length;
var lcI7 = 0;
    }
    X_225: for (;;) { IF: if (gt <= 225) {

if ((lcI7) >= (lcI6)) { gt = 263; break IF; }
var stA0 = (refs_java_lang_Integer || (refs_java_lang_Integer = vm.java_lang_Integer(false)))['valueOf__Ljava_lang_Integer_2I']((lcA5[lcI7] || Array.at(lcA5, lcI7)));
var lcA8 = stA0;
var stA0 = lcA4;var stA1 = lcA0.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA2, lcA8);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,stA1);
lcI7++;
{ gt = 0; continue X_225; }
    }
    X_263: for (;;) { IF: if (gt <= 263) {
{ gt = 605; break IF; }
    }
    X_266: for (;;) { IF: if (gt <= 266) {

var stI0 = Array.prototype['isInstance__ZLjava_lang_Object_2Ljava_lang_String_2'](lcA3, '[C');
if ((stI0) == 0) { gt = 331; break IF; }
if (lcA3 !== null && !Array.prototype['isInstance__ZLjava_lang_Object_2Ljava_lang_String_2'](lcA3, '[C')) vm.java_lang_Class(false).castEx(lcA3, '');
if (lcA3 !== null && !Array.prototype['isInstance__ZLjava_lang_Object_2Ljava_lang_String_2'](lcA3, '[C')) vm.java_lang_Class(false).castEx(lcA3, '');
var lcA5 = lcA3;
var lcI6 = (lcA5).length;
var lcI7 = 0;
    }
    X_290: for (;;) { IF: if (gt <= 290) {

if ((lcI7) >= (lcI6)) { gt = 328; break IF; }
var stA0 = (refs_java_lang_Character || (refs_java_lang_Character = vm.java_lang_Character(false)))['valueOf__Ljava_lang_Character_2C']((lcA5[lcI7] || Array.at(lcA5, lcI7)));
var lcA8 = stA0;
var stA0 = lcA4;var stA1 = lcA0.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA2, lcA8);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,stA1);
lcI7++;
{ gt = 0; continue X_290; }
    }
    X_328: for (;;) { IF: if (gt <= 328) {
{ gt = 605; break IF; }
    }
    X_331: for (;;) { IF: if (gt <= 331) {

var stI0 = Array.prototype['isInstance__ZLjava_lang_Object_2Ljava_lang_String_2'](lcA3, '[J');
if ((stI0) == 0) { gt = 396; break IF; }
if (lcA3 !== null && !Array.prototype['isInstance__ZLjava_lang_Object_2Ljava_lang_String_2'](lcA3, '[J')) vm.java_lang_Class(false).castEx(lcA3, '');
if (lcA3 !== null && !Array.prototype['isInstance__ZLjava_lang_Object_2Ljava_lang_String_2'](lcA3, '[J')) vm.java_lang_Class(false).castEx(lcA3, '');
var lcA5 = lcA3;
var lcI6 = (lcA5).length;
var lcI7 = 0;
    }
    X_355: for (;;) { IF: if (gt <= 355) {

if ((lcI7) >= (lcI6)) { gt = 393; break IF; }
var stA0 = (refs_java_lang_Long || (refs_java_lang_Long = vm.java_lang_Long(false)))['valueOf__Ljava_lang_Long_2J']((lcA5[lcI7] || Array.at(lcA5, lcI7)));
var lcA8 = stA0;
var stA0 = lcA4;var stA1 = lcA0.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA2, lcA8);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,stA1);
lcI7++;
{ gt = 0; continue X_355; }
    }
    X_393: for (;;) { IF: if (gt <= 393) {
{ gt = 605; break IF; }
    }
    X_396: for (;;) { IF: if (gt <= 396) {

var stI0 = Array.prototype['isInstance__ZLjava_lang_Object_2Ljava_lang_String_2'](lcA3, '[F');
if ((stI0) == 0) { gt = 461; break IF; }
if (lcA3 !== null && !Array.prototype['isInstance__ZLjava_lang_Object_2Ljava_lang_String_2'](lcA3, '[F')) vm.java_lang_Class(false).castEx(lcA3, '');
if (lcA3 !== null && !Array.prototype['isInstance__ZLjava_lang_Object_2Ljava_lang_String_2'](lcA3, '[F')) vm.java_lang_Class(false).castEx(lcA3, '');
var lcA5 = lcA3;
var lcI6 = (lcA5).length;
var lcI7 = 0;
    }
    X_420: for (;;) { IF: if (gt <= 420) {

if ((lcI7) >= (lcI6)) { gt = 458; break IF; }
var stA0 = (refs_java_lang_Float || (refs_java_lang_Float = vm.java_lang_Float(false)))['valueOf__Ljava_lang_Float_2F']((lcA5[lcI7] || Array.at(lcA5, lcI7)));
var lcA8 = stA0;
var stA0 = lcA4;var stA1 = lcA0.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA2, lcA8);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,stA1);
lcI7++;
{ gt = 0; continue X_420; }
    }
    X_458: for (;;) { IF: if (gt <= 458) {
{ gt = 605; break IF; }
    }
    X_461: for (;;) { IF: if (gt <= 461) {

var stI0 = Array.prototype['isInstance__ZLjava_lang_Object_2Ljava_lang_String_2'](lcA3, '[D');
if ((stI0) == 0) { gt = 526; break IF; }
if (lcA3 !== null && !Array.prototype['isInstance__ZLjava_lang_Object_2Ljava_lang_String_2'](lcA3, '[D')) vm.java_lang_Class(false).castEx(lcA3, '');
if (lcA3 !== null && !Array.prototype['isInstance__ZLjava_lang_Object_2Ljava_lang_String_2'](lcA3, '[D')) vm.java_lang_Class(false).castEx(lcA3, '');
var lcA5 = lcA3;
var lcI6 = (lcA5).length;
var lcI7 = 0;
    }
    X_485: for (;;) { IF: if (gt <= 485) {

if ((lcI7) >= (lcI6)) { gt = 523; break IF; }
var stA0 = (refs_java_lang_Double || (refs_java_lang_Double = vm.java_lang_Double(false)))['valueOf__Ljava_lang_Double_2D']((lcA5[lcI7] || Array.at(lcA5, lcI7)));
var lcA8 = stA0;
var stA0 = lcA4;var stA1 = lcA0.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA2, lcA8);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,stA1);
lcI7++;
{ gt = 0; continue X_485; }
    }
    X_523: for (;;) { IF: if (gt <= 523) {
{ gt = 605; break IF; }
    }
    X_526: for (;;) { IF: if (gt <= 526) {

var stI0 = Array.prototype['isInstance__ZLjava_lang_Object_2Ljava_lang_String_2'](lcA3, '[Z');
if ((stI0) == 0) { gt = 591; break IF; }
if (lcA3 !== null && !Array.prototype['isInstance__ZLjava_lang_Object_2Ljava_lang_String_2'](lcA3, '[Z')) vm.java_lang_Class(false).castEx(lcA3, '');
if (lcA3 !== null && !Array.prototype['isInstance__ZLjava_lang_Object_2Ljava_lang_String_2'](lcA3, '[Z')) vm.java_lang_Class(false).castEx(lcA3, '');
var lcA5 = lcA3;
var lcI6 = (lcA5).length;
var lcI7 = 0;
    }
    X_550: for (;;) { IF: if (gt <= 550) {

if ((lcI7) >= (lcI6)) { gt = 588; break IF; }
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z']((lcA5[lcI7] || Array.at(lcA5, lcI7)));
var lcA8 = stA0;
var stA0 = lcA4;var stA1 = lcA0.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA2, lcA8);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,stA1);
lcI7++;
{ gt = 0; continue X_550; }
    }
    X_588: for (;;) { IF: if (gt <= 588) {
{ gt = 605; break IF; }
    }
    X_591: for (;;) { IF: if (gt <= 591) {

var stA0 = lcA4;var stA1 = lcA0.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA2, lcA3);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,stA1);
    }
    X_605: for (;;) { IF: if (gt <= 605) {

var stI0 = lcA1 != null && lcA1['$instOf_org_netbeans_html_json_impl_JSONList'] ? 1 : 0;
if ((stI0) == 0) { gt = 628; break IF; }
if (lcA1 !== null && !lcA1['$instOf_org_netbeans_html_json_impl_JSONList']) vm.java_lang_Class(false).castEx(lcA1, 'org.netbeans.html.json.impl.JSONList');
var lcA5 = lcA1;
lcA5.fastReplace__VLjava_util_Collection_2(lcA4);
{ gt = 643; break IF; }
    }
    X_628: for (;;) { IF: if (gt <= 628) {

invoker.clear__V(lcA1);
var stI0 = invoker.addAll__ZLjava_util_Collection_2(lcA1,lcA4);
    }
    X_643: for (;;) { IF: if (gt <= 643) {
return;

    }
}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}
};
c['replaceValue__VLjava_util_Collection_2Ljava_lang_Class_2Ljava_lang_Object_2'] = m;

    m.access = 17;
    m.cls = CLS;
    m = c.class__V = function() {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = invoker.desiredAssertionStatus__Z((refs_org_netbeans_html_json_spi_Proto || (refs_org_netbeans_html_json_spi_Proto = org_netbeans_html_json_spi_Proto(false))).constructor.$class);
if ((stI0) != 0) { gt = 12; break IF; }
var stI0 = 1;{ gt = 13; break IF; }
    }
    X_12: for (;;) { IF: if (gt <= 12) {

var stI0 = 0;    }
    X_13: for (;;) { IF: if (gt <= 13) {
c._$assertionsDisabled(stI0);
return;

    }
}}}
};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_json_spi_Proto$TypefillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_json_spi_Proto$Type', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_json_spi_Proto$TypefillInstOf });
    org_netbeans_html_json_spi_Proto$TypefillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/json/spi/Proto$Type';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 1057;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_org_netbeans_html_json_impl_SimpleList;
    var refs_org_netbeans_html_json_impl_JSON;
    var refs_java_lang_AssertionError;
    var refs_org_netbeans_html_json_spi_Proto$PropertyInfo;
    var refs_org_netbeans_html_json_spi_Proto;
    var refs_java_lang_Number;
    var refs_java_lang_Boolean;
    var refs_java_lang_String;
    var refs_java_lang_Character;
    var refs_java_lang_Integer;
    var refs_java_lang_Long;
    var refs_java_lang_Short;
    var refs_java_lang_Byte;
    var refs_java_lang_Double;
    var refs_java_lang_Float;
    var refs_java_lang_Enum;
    var refs_net_java_html_json_Models;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_org_netbeans_html_json_spi_Proto$Type_clazz'] = null;
    this['fld_org_netbeans_html_json_spi_Proto$Type_properties'] = null;
    this['fld_org_netbeans_html_json_spi_Proto$Type_functions'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_netbeans_html_json_spi_Proto$Type = registerClass(exports,'org_netbeans_html_json_spi_Proto$Type',org_netbeans_html_json_spi_Proto$Type);

vm.java_lang_Enum = link('java/lang/Enum', function(f) { vm.java_lang_Enum =  f; });
vm.java_lang_Float = link('java/lang/Float', function(f) { vm.java_lang_Float =  f; });
vm.java_lang_Double = link('java/lang/Double', function(f) { vm.java_lang_Double =  f; });
vm.java_lang_Byte = link('java/lang/Byte', function(f) { vm.java_lang_Byte =  f; });
vm.java_lang_Short = link('java/lang/Short', function(f) { vm.java_lang_Short =  f; });
vm.java_lang_Long = link('java/lang/Long', function(f) { vm.java_lang_Long =  f; });
vm.java_lang_Integer = link('java/lang/Integer', function(f) { vm.java_lang_Integer =  f; });
vm.java_lang_Character = link('java/lang/Character', function(f) { vm.java_lang_Character =  f; });
vm.java_lang_String = link('java/lang/String', function(f) { vm.java_lang_String =  f; });
vm.java_lang_Boolean = link('java/lang/Boolean', function(f) { vm.java_lang_Boolean =  f; });
vm.java_lang_Number = link('java/lang/Number', function(f) { vm.java_lang_Number =  f; });

function org_netbeans_html_json_spi_Proto() {
  var m;
  var CLS = org_netbeans_html_json_spi_Proto;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._obj = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_json_spi_Proto_obj'] = v; return this['fld_org_netbeans_html_json_spi_Proto_obj']; };
  m = c._type = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_json_spi_Proto_type'] = v; return this['fld_org_netbeans_html_json_spi_Proto_type']; };
  m = c._context = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_json_spi_Proto_context'] = v; return this['fld_org_netbeans_html_json_spi_Proto_context']; };
  m = c._ko = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_json_spi_Proto_ko'] = v; return this['fld_org_netbeans_html_json_spi_Proto_ko']; };
  m = c._observers = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_json_spi_Proto_observers'] = v; return this['fld_org_netbeans_html_json_spi_Proto_observers']; };
  m = c._usages = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_json_spi_Proto_usages'] = v; return this['fld_org_netbeans_html_json_spi_Proto_usages']; };
    m = CLS.cons__VLjava_lang_Object_2Lorg_netbeans_html_json_spi_Proto$Type_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
lcA0['fld_org_netbeans_html_json_spi_Proto_obj'] = lcA1;
lcA0['fld_org_netbeans_html_json_spi_Proto_type'] = lcA2;
lcA0['fld_org_netbeans_html_json_spi_Proto_context'] = lcA3;
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.getContext__Lnet_java_html_BrwsrCtx_2 = function() {
  var  lcA0 = this;
return lcA0['fld_org_netbeans_html_json_spi_Proto_context'];

};
c['getContext__Lnet_java_html_BrwsrCtx_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.acquireLock__V = function() {
  var  lcA0 = this;
lcA0.acquireLock__VLjava_lang_String_2(null);
return;

};
c['acquireLock__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.acquireLock__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = (refs_org_netbeans_html_json_spi_Observers || (refs_org_netbeans_html_json_spi_Observers = org_netbeans_html_json_spi_Observers(false))).beginComputing__Lorg_netbeans_html_json_spi_Observers$Usages_2Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_String_2Lorg_netbeans_html_json_spi_Observers$Usages_2(lcA0, lcA1, lcA0['fld_org_netbeans_html_json_spi_Proto_usages']);
stA0['fld_org_netbeans_html_json_spi_Proto_usages'] = stA1;
return;

};
c['acquireLock__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.accessProperty__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;
(refs_org_netbeans_html_json_spi_Observers || (refs_org_netbeans_html_json_spi_Observers = org_netbeans_html_json_spi_Observers(false))).accessingValue__VLorg_netbeans_html_json_spi_Proto_2Ljava_lang_String_2(lcA0, lcA1);
return;

};
c['accessProperty__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.verifyUnlocked__V = function() {
  var  lcA0 = this;
(refs_org_netbeans_html_json_spi_Observers || (refs_org_netbeans_html_json_spi_Observers = org_netbeans_html_json_spi_Observers(false))).verifyUnlocked__VLorg_netbeans_html_json_spi_Proto_2(lcA0);
return;

};
c['verifyUnlocked__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.releaseLock__V = function() {
  var  lcA0 = this;
(refs_org_netbeans_html_json_spi_Observers || (refs_org_netbeans_html_json_spi_Observers = org_netbeans_html_json_spi_Observers(false))).finishComputing__VLorg_netbeans_html_json_spi_Proto_2(lcA0);
return;

};
c['releaseLock__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.valueHasMutated__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = lcA0['fld_org_netbeans_html_json_spi_Proto_context'];var stA1 = new org_netbeans_html_json_spi_Proto$1;
(refs_org_netbeans_html_json_spi_Proto$1 || (refs_org_netbeans_html_json_spi_Proto$1 = org_netbeans_html_json_spi_Proto$1(false))).constructor.cons__VLorg_netbeans_html_json_spi_Proto_2Ljava_lang_String_2.call(stA1, lcA0, lcA1);
invoker.execute__VLjava_lang_Runnable_2(stA0,stA1);
return;

};
c['valueHasMutated__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
var stA0 = lcA0['fld_org_netbeans_html_json_spi_Proto_context'];var stA1 = new org_netbeans_html_json_spi_Proto$2;
(refs_org_netbeans_html_json_spi_Proto$2 || (refs_org_netbeans_html_json_spi_Proto$2 = org_netbeans_html_json_spi_Proto$2(false))).constructor.cons__VLorg_netbeans_html_json_spi_Proto_2Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2.call(stA1, lcA0, lcA1, lcA2, lcA3);
invoker.execute__VLjava_lang_Runnable_2(stA0,stA1);
return;

};
c['valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.applyBindings__V = function() {
  var  lcA0 = this;
var stA0 = lcA0.initBindings__Lorg_netbeans_html_json_impl_Bindings_2Ljava_lang_Object_2(null);
stA0.applyBindings__VLjava_lang_String_2(null);
return;

};
c['applyBindings__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.applyBindings__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = lcA0.initBindings__Lorg_netbeans_html_json_impl_Bindings_2Ljava_lang_Object_2(null);
stA0.applyBindings__VLjava_lang_String_2(lcA1);
return;

};
c['applyBindings__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.runInBrowser__VLjava_lang_Runnable_2 = function(lcA1) {
  var  lcA0 = this;
invoker.execute__VLjava_lang_Runnable_2(lcA0['fld_org_netbeans_html_json_spi_Proto_context'],lcA1);
return;

};
c['runInBrowser__VLjava_lang_Runnable_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.runInBrowser__VI_3Ljava_lang_Object_2 = function(lcI1, lcA2) {
  var  lcA0 = this;
var stA0 = lcA0['fld_org_netbeans_html_json_spi_Proto_context'];var stA1 = new org_netbeans_html_json_spi_Proto$3;
(refs_org_netbeans_html_json_spi_Proto$3 || (refs_org_netbeans_html_json_spi_Proto$3 = org_netbeans_html_json_spi_Proto$3(false))).constructor.cons__VLorg_netbeans_html_json_spi_Proto_2I_3Ljava_lang_Object_2.call(stA1, lcA0, lcI1, lcA2);
invoker.execute__VLjava_lang_Runnable_2(stA0,stA1);
return;

};
c['runInBrowser__VI_3Ljava_lang_Object_2'] = m;

    m.access = 129;
    m.cls = CLS;
    m = c.initTo__VLjava_util_Collection_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((lcA0['fld_org_netbeans_html_json_spi_Proto_ko']) === null) { gt = 15; break IF; }
var stA0 = new vm.java_lang_IllegalStateException;
(refs_java_lang_IllegalStateException || (refs_java_lang_IllegalStateException = vm.java_lang_IllegalStateException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }
    }
    X_15: for (;;) { IF: if (gt <= 15) {

var stI0 = lcA1 != null && lcA1['$instOf_org_netbeans_html_json_impl_JSONList'] ? 1 : 0;
if ((stI0) == 0) { gt = 33; break IF; }
if (lcA1 !== null && !lcA1['$instOf_org_netbeans_html_json_impl_JSONList']) vm.java_lang_Class(false).castEx(lcA1, 'org.netbeans.html.json.impl.JSONList');
lcA1.init__VLjava_lang_Object_2(lcA2);
{ gt = 38; break IF; }
    }
    X_33: for (;;) { IF: if (gt <= 33) {

(refs_org_netbeans_html_json_impl_JSONList || (refs_org_netbeans_html_json_impl_JSONList = org_netbeans_html_json_impl_JSONList(false))).init__VLjava_util_Collection_2Ljava_lang_Object_2(lcA1, lcA2);
    }
    X_38: for (;;) { IF: if (gt <= 38) {
return;

    }
}}}}
};
c['initTo__VLjava_util_Collection_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.extract__VLjava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Object_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
(refs_org_netbeans_html_json_impl_JSON || (refs_org_netbeans_html_json_impl_JSON = org_netbeans_html_json_impl_JSON(false))).extract__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Object_2(lcA0['fld_org_netbeans_html_json_spi_Proto_context'], lcA1, lcA2, lcA3);
return;

};
c['extract__VLjava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = (refs_org_netbeans_html_json_impl_JSON || (refs_org_netbeans_html_json_impl_JSON = org_netbeans_html_json_impl_JSON(false))).read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_org_netbeans_html_json_spi_Proto_context'], lcA1, lcA2);
return stA0;

};
c['read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.loadJSON__VILjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2 = function(lcI1, lcA2, lcA3, lcA4, lcA5) {
  var  lcA0 = this;
var stA0 = lcA0;var stI1 = lcI1;var stA2 = lcA2;var stA3 = lcA3;var stA4 = lcA4;var stA5 = lcA5;var stA6 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 0);
stA0.loadJSON__VILjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2_3Ljava_lang_Object_2(stI1, stA2, stA3, stA4, stA5, stA6);
return;

};
c['loadJSON__VILjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.loadJSON__VILjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2_3Ljava_lang_Object_2 = function(lcI1, lcA2, lcA3, lcA4, lcA5, lcA6) {
  var  lcA0 = this;
lcA0.loadJSONWithHeaders__VILjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2_3Ljava_lang_Object_2(lcI1, null, lcA2, lcA3, lcA4, lcA5, lcA6);
return;

};
c['loadJSON__VILjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2_3Ljava_lang_Object_2'] = m;

    m.access = 129;
    m.cls = CLS;
    m = c.loadJSONWithHeaders__VILjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2_3Ljava_lang_Object_2 = function(lcI1, lcA2, lcA3, lcA4, lcA5, lcA6, lcA7) {
  var  lcA0 = this;
var stA0 = lcA0['fld_org_netbeans_html_json_spi_Proto_context'];var stA1 = new org_netbeans_html_json_spi_Proto$1Rcvr;
(refs_org_netbeans_html_json_spi_Proto$1Rcvr || (refs_org_netbeans_html_json_spi_Proto$1Rcvr = org_netbeans_html_json_spi_Proto$1Rcvr(false))).constructor.cons__VLorg_netbeans_html_json_spi_Proto_2I_3Ljava_lang_Object_2.call(stA1, lcA0, lcI1, lcA7);
var stA0 = (refs_org_netbeans_html_json_impl_PropertyBindingAccessor || (refs_org_netbeans_html_json_impl_PropertyBindingAccessor = org_netbeans_html_json_impl_PropertyBindingAccessor(false))).createCall__Lorg_netbeans_html_json_spi_JSONCall_2Lnet_java_html_BrwsrCtx_2Lorg_netbeans_html_json_impl_RcvrJSON_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2(stA0, stA1, lcA2, lcA3, lcA4, lcA5, lcA6);
var lcA8 = stA0;
var stA0 = (refs_org_netbeans_html_json_impl_JSON || (refs_org_netbeans_html_json_impl_JSON = org_netbeans_html_json_impl_JSON(false))).findTransfer__Lorg_netbeans_html_json_spi_Transfer_2Lnet_java_html_BrwsrCtx_2(lcA0['fld_org_netbeans_html_json_spi_Proto_context']);
var lcA9 = stA0;
invoker.loadJSON__VLorg_netbeans_html_json_spi_JSONCall_2(lcA9,lcA8);
return;

};
c['loadJSONWithHeaders__VILjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2_3Ljava_lang_Object_2'] = m;

    m.access = 129;
    m.cls = CLS;
    m = c.wsOpen__Ljava_lang_Object_2ILjava_lang_String_2Ljava_lang_Object_2 = function(lcI1, lcA2, lcA3) {
  var  lcA0 = this;
var stA0 = (refs_org_netbeans_html_json_impl_JSON || (refs_org_netbeans_html_json_impl_JSON = org_netbeans_html_json_impl_JSON(false))).findWSTransfer__Lorg_netbeans_html_json_spi_WSTransfer_2Lnet_java_html_BrwsrCtx_2(lcA0['fld_org_netbeans_html_json_spi_Proto_context']);
var stA1 = new org_netbeans_html_json_spi_Proto$1WSrcvr;
(refs_org_netbeans_html_json_spi_Proto$1WSrcvr || (refs_org_netbeans_html_json_spi_Proto$1WSrcvr = org_netbeans_html_json_spi_Proto$1WSrcvr(false))).constructor.cons__VLorg_netbeans_html_json_spi_Proto_2I.call(stA1, lcA0, lcI1);
var stA0 = (refs_org_netbeans_html_json_impl_JSON$WS || (refs_org_netbeans_html_json_impl_JSON$WS = org_netbeans_html_json_impl_JSON$WS(false))).create__Lorg_netbeans_html_json_impl_JSON$WS_2Lorg_netbeans_html_json_spi_WSTransfer_2Lorg_netbeans_html_json_impl_RcvrJSON_2(stA0, stA1);
var lcA4 = stA0;
lcA4.send__VLnet_java_html_BrwsrCtx_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2(lcA0['fld_org_netbeans_html_json_spi_Proto_context'], null, lcA2, lcA3);
return lcA4;

};
c['wsOpen__Ljava_lang_Object_2ILjava_lang_String_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.wsSend__VLjava_lang_Object_2Ljava_lang_String_2Ljava_lang_Object_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_org_netbeans_html_json_impl_JSON$WS']) vm.java_lang_Class(false).castEx(lcA1, 'org.netbeans.html.json.impl.JSON$WS');
lcA1.send__VLnet_java_html_BrwsrCtx_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2(lcA0['fld_org_netbeans_html_json_spi_Proto_context'], null, lcA2, lcA3);
return;

};
c['wsSend__VLjava_lang_Object_2Ljava_lang_String_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.toString__Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_String_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = (refs_org_netbeans_html_json_impl_JSON || (refs_org_netbeans_html_json_impl_JSON = org_netbeans_html_json_impl_JSON(false))).toString__Ljava_lang_String_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Ljava_lang_String_2(lcA0['fld_org_netbeans_html_json_spi_Proto_context'], lcA1, lcA2);
return stA0;

};
c['toString__Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.toNumber__Ljava_lang_Number_2Ljava_lang_Object_2Ljava_lang_String_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = (refs_org_netbeans_html_json_impl_JSON || (refs_org_netbeans_html_json_impl_JSON = org_netbeans_html_json_impl_JSON(false))).toNumber__Ljava_lang_Number_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Ljava_lang_String_2(lcA0['fld_org_netbeans_html_json_spi_Proto_context'], lcA1, lcA2);
return stA0;

};
c['toNumber__Ljava_lang_Number_2Ljava_lang_Object_2Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.toModel__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = (refs_org_netbeans_html_json_impl_JSON || (refs_org_netbeans_html_json_impl_JSON = org_netbeans_html_json_impl_JSON(false))).toModel__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_org_netbeans_html_json_spi_Proto_context'], lcA1, lcA2, null);
return stA0;

};
c['toModel__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.createList__Ljava_util_List_2Ljava_lang_String_2I_3Ljava_lang_String_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;
var stA0 = new org_netbeans_html_json_impl_JSONList;
(refs_org_netbeans_html_json_impl_JSONList || (refs_org_netbeans_html_json_impl_JSONList = org_netbeans_html_json_impl_JSONList(false))).constructor.cons__VLorg_netbeans_html_json_spi_Proto_2Ljava_lang_String_2I_3Ljava_lang_String_2.call(stA0, lcA0, lcA1, lcI2, lcA3);
return stA0;

};
c['createList__Ljava_util_List_2Ljava_lang_String_2I_3Ljava_lang_String_2'] = m;

    m.access = 129;
    m.cls = CLS;
    m = c.cloneList__VLjava_util_Collection_2Lnet_java_html_BrwsrCtx_2Ljava_util_Collection_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var lcA4 = null;
var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA3);
var lcA5 = stA0;
    }
    X_11: for (;;) { IF: if (gt <= 11) {

var stI0 = invoker.hasNext__Z(lcA5);
if ((stI0) == 0) { gt = 84; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA5);
var lcA6 = stA0;
if ((lcA4) !== null) { gt = 48; break IF; }
var stA0 = invoker.getClass__Ljava_lang_Class_2(lcA6);
var stI0 = (refs_org_netbeans_html_json_impl_JSON || (refs_org_netbeans_html_json_impl_JSON = org_netbeans_html_json_impl_JSON(false))).isModel__ZLjava_lang_Class_2(stA0);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
var lcA4 = stA0;
    }
    X_48: for (;;) { IF: if (gt <= 48) {

var stI0 = invoker.booleanValue__Z(lcA4);
if ((stI0) == 0) { gt = 72; break IF; }
var stA0 = lcA1;var stA1 = (refs_org_netbeans_html_json_impl_JSON || (refs_org_netbeans_html_json_impl_JSON = org_netbeans_html_json_impl_JSON(false))).bindTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2(lcA6, lcA2);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,stA1);
{ gt = 81; break IF; }
    }
    X_72: for (;;) { IF: if (gt <= 72) {

var stI0 = invoker.add__ZLjava_lang_Object_2(lcA1,lcA6);
    }
    X_81: for (;;) { IF: if (gt <= 81) {
{ gt = 0; continue X_11; }
    }
    X_84: for (;;) { IF: if (gt <= 84) {
return;

    }
}}}}}}
};
c['cloneList__VLjava_util_Collection_2Lnet_java_html_BrwsrCtx_2Ljava_util_Collection_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.toStr__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"Proto[");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2(stA0,lcA0['fld_org_netbeans_html_json_spi_Proto_obj']);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"]@");
var stI1 = (refs_java_lang_System || (refs_java_lang_System = vm.java_lang_System(false)))['identityHashCode__ILjava_lang_Object_2'](lcA0);
var stA1 = (refs_java_lang_Integer || (refs_java_lang_Integer = vm.java_lang_Integer(false)))['toHexString__Ljava_lang_String_2I'](stI1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
return stA0;

};
    m.access = 16;
    m.cls = CLS;
    m = c.initBindings__Lorg_netbeans_html_json_impl_Bindings_2Ljava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((lcA0['fld_org_netbeans_html_json_spi_Proto_ko']) !== null) { gt = 194; break IF; }
var stA0 = (refs_org_netbeans_html_json_impl_Bindings || (refs_org_netbeans_html_json_impl_Bindings = org_netbeans_html_json_impl_Bindings(false))).apply__Lorg_netbeans_html_json_impl_Bindings_2Lnet_java_html_BrwsrCtx_2(lcA0['fld_org_netbeans_html_json_spi_Proto_context']);
var lcA2 = stA0;
var stI0 = invoker.size__I(lcA0['fld_org_netbeans_html_json_spi_Proto_type']['fld_org_netbeans_html_json_spi_Proto$Type_properties']);
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lorg/netbeans/html/json/spi/PropertyBinding;', vm.org_netbeans_html_json_spi_PropertyBinding, stI0);
var lcA3 = stA0;
var lcI4 = 0;
    }
    X_34: for (;;) { IF: if (gt <= 34) {

if ((lcI4) >= ((lcA3).length)) { gt = 99; break IF; }
var stA0 = invoker.get__Ljava_lang_Object_2I(lcA0['fld_org_netbeans_html_json_spi_Proto_type']['fld_org_netbeans_html_json_spi_Proto$Type_properties'],lcI4);
if (stA0 !== null && !stA0['$instOf_org_netbeans_html_json_spi_Proto$PropertyInfo']) vm.java_lang_Class(false).castEx(stA0, 'org.netbeans.html.json.spi.Proto$PropertyInfo');
var lcA5 = stA0;
if ((lcA5) === null) { gt = 93; break IF; }
var stA0 = lcA3;var stI1 = lcI4;var stA2 = lcA2.registerProperty__Lorg_netbeans_html_json_spi_PropertyBinding_2Ljava_lang_String_2ILjava_lang_Object_2Lorg_netbeans_html_json_spi_Proto$Type_2B(lcA5['fld_org_netbeans_html_json_spi_Proto$PropertyInfo_name'], lcI4, lcA0['fld_org_netbeans_html_json_spi_Proto_obj'], lcA0['fld_org_netbeans_html_json_spi_Proto_type'], lcA5['fld_org_netbeans_html_json_spi_Proto$PropertyInfo_type']);
Array.at(stA0, stI1, stA2);
    }
    X_93: for (;;) { IF: if (gt <= 93) {
lcI4++;
{ gt = 0; continue X_34; }
    }
    X_99: for (;;) { IF: if (gt <= 99) {

var stI0 = invoker.size__I(lcA0['fld_org_netbeans_html_json_spi_Proto_type']['fld_org_netbeans_html_json_spi_Proto$Type_functions']);
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lorg/netbeans/html/json/spi/FunctionBinding;', vm.org_netbeans_html_json_spi_FunctionBinding, stI0);
var lcA4 = stA0;
var lcI5 = 0;
    }
    X_119: for (;;) { IF: if (gt <= 119) {

if ((lcI5) >= ((lcA4).length)) { gt = 177; break IF; }
var stA0 = invoker.get__Ljava_lang_Object_2I(lcA0['fld_org_netbeans_html_json_spi_Proto_type']['fld_org_netbeans_html_json_spi_Proto$Type_functions'],lcI5);
if (stA0 !== null && !stA0['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA0, 'java.lang.String');
var lcA6 = stA0;
if ((lcA6) === null) { gt = 171; break IF; }
var stA0 = lcA4;var stI1 = lcI5;var stA2 = (refs_org_netbeans_html_json_spi_FunctionBinding || (refs_org_netbeans_html_json_spi_FunctionBinding = org_netbeans_html_json_spi_FunctionBinding(false))).registerFunction__Lorg_netbeans_html_json_spi_FunctionBinding_2Ljava_lang_String_2ILjava_lang_Object_2Lorg_netbeans_html_json_spi_Proto$Type_2(lcA6, lcI5, lcA0['fld_org_netbeans_html_json_spi_Proto_obj'], lcA0['fld_org_netbeans_html_json_spi_Proto_type']);
Array.at(stA0, stI1, stA2);
    }
    X_171: for (;;) { IF: if (gt <= 171) {
lcI5++;
{ gt = 0; continue X_119; }
    }
    X_177: for (;;) { IF: if (gt <= 177) {

lcA0['fld_org_netbeans_html_json_spi_Proto_ko'] = lcA2;
lcA2.finish__VLjava_lang_Object_2Ljava_lang_Object_2_3Lorg_netbeans_html_json_spi_PropertyBinding_2_3Lorg_netbeans_html_json_spi_FunctionBinding_2(lcA0['fld_org_netbeans_html_json_spi_Proto_obj'], lcA1, lcA3, lcA4);
    }
    X_194: for (;;) { IF: if (gt <= 194) {

return lcA0['fld_org_netbeans_html_json_spi_Proto_ko'];

    }
}}}}}}}}
};
    m.access = 16;
    m.cls = CLS;
    m = c.getBindings__Lorg_netbeans_html_json_impl_Bindings_2 = function() {
  var  lcA0 = this;
return lcA0['fld_org_netbeans_html_json_spi_Proto_ko'];

};
    m.access = 16;
    m.cls = CLS;
    m = c.onChange__VI = function(lcI1) {
  var  lcA0 = this;
invoker.onChange__VLjava_lang_Object_2I(lcA0['fld_org_netbeans_html_json_spi_Proto_type'],lcA0['fld_org_netbeans_html_json_spi_Proto_obj'], lcI1);
return;

};
    m.access = 16;
    m.cls = CLS;
    m = c.observers__Lorg_netbeans_html_json_spi_Observers_2Z = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((lcI1) == 0) { gt = 22; break IF; }
if ((lcA0['fld_org_netbeans_html_json_spi_Proto_observers']) !== null) { gt = 22; break IF; }
var stA0 = lcA0;var stA1 = new org_netbeans_html_json_spi_Observers;
(refs_org_netbeans_html_json_spi_Observers || (refs_org_netbeans_html_json_spi_Observers = org_netbeans_html_json_spi_Observers(false))).constructor.cons__V.call(stA1);
stA0['fld_org_netbeans_html_json_spi_Proto_observers'] = stA1;
    }
    X_22: for (;;) { IF: if (gt <= 22) {

return lcA0['fld_org_netbeans_html_json_spi_Proto_observers'];

    }
}}
};
    m.access = 16;
    m.cls = CLS;
    m = c.access$000__Lorg_netbeans_html_json_impl_Bindings_2Lorg_netbeans_html_json_spi_Proto_2 = function(lcA0) {
return lcA0['fld_org_netbeans_html_json_spi_Proto_ko'];

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$100__Ljava_lang_Object_2Lorg_netbeans_html_json_spi_Proto_2 = function(lcA0) {
return lcA0['fld_org_netbeans_html_json_spi_Proto_obj'];

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$200__Lorg_netbeans_html_json_spi_Proto$Type_2Lorg_netbeans_html_json_spi_Proto_2 = function(lcA0) {
return lcA0['fld_org_netbeans_html_json_spi_Proto_type'];

};
    m.access = 4104;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_json_spi_ProtofillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_json_spi_Proto', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_json_spi_ProtofillInstOf });
    org_netbeans_html_json_spi_ProtofillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/json/spi/Proto';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    var refs_org_netbeans_html_json_spi_Observers;
    var refs_org_netbeans_html_json_spi_Proto$1;
    var refs_org_netbeans_html_json_spi_Proto$2;
    var refs_org_netbeans_html_json_spi_Proto$3;
    var refs_java_lang_IllegalStateException;
    var refs_org_netbeans_html_json_impl_JSONList;
    var refs_org_netbeans_html_json_impl_JSON;
    var refs_org_netbeans_html_json_spi_Proto$1Rcvr;
    var refs_org_netbeans_html_json_impl_PropertyBindingAccessor;
    var refs_org_netbeans_html_json_spi_Proto$1WSrcvr;
    var refs_org_netbeans_html_json_impl_JSON$WS;
    var refs_java_lang_Boolean;
    var refs_java_lang_StringBuilder;
    var refs_java_lang_System;
    var refs_java_lang_Integer;
    var refs_org_netbeans_html_json_impl_Bindings;
    var refs_org_netbeans_html_json_spi_FunctionBinding;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_org_netbeans_html_json_spi_Proto_obj'] = null;
    this['fld_org_netbeans_html_json_spi_Proto_type'] = null;
    this['fld_org_netbeans_html_json_spi_Proto_context'] = null;
    this['fld_org_netbeans_html_json_spi_Proto_ko'] = null;
    this['fld_org_netbeans_html_json_spi_Proto_observers'] = null;
    this['fld_org_netbeans_html_json_spi_Proto_usages'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_netbeans_html_json_spi_Proto = registerClass(exports,'org_netbeans_html_json_spi_Proto',org_netbeans_html_json_spi_Proto);


function org_netbeans_html_json_spi_FunctionBinding() {
  var m;
  var CLS = org_netbeans_html_json_spi_FunctionBinding;
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
    m = c.getFunctionName__Ljava_lang_String_2 = function() {
};
c['getFunctionName__Ljava_lang_String_2'] = m;

    m.access = 1025;
    m.cls = CLS;
    m = c.call__VLjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
};
c['call__VLjava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 1025;
    m.cls = CLS;
    m = c.weak__Lorg_netbeans_html_json_spi_FunctionBinding_2 = function() {
};
c['weak__Lorg_netbeans_html_json_spi_FunctionBinding_2'] = m;

    m.access = 1025;
    m.cls = CLS;
    m = c.registerFunction__Lorg_netbeans_html_json_spi_FunctionBinding_2Ljava_lang_String_2ILjava_lang_Object_2Lorg_netbeans_html_json_spi_Proto$Type_2 = function(lcA0, lcI1, lcA2, lcA3) {
var stA0 = new org_netbeans_html_json_spi_FunctionBinding$Impl;
(refs_org_netbeans_html_json_spi_FunctionBinding$Impl || (refs_org_netbeans_html_json_spi_FunctionBinding$Impl = org_netbeans_html_json_spi_FunctionBinding$Impl(false))).constructor.cons__VLjava_lang_Object_2Ljava_lang_String_2ILorg_netbeans_html_json_spi_Proto$Type_2.call(stA0, lcA2, lcA0, lcI1, lcA3);
return stA0;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_json_spi_FunctionBindingfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_json_spi_FunctionBinding', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_json_spi_FunctionBindingfillInstOf });
    org_netbeans_html_json_spi_FunctionBindingfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/json/spi/FunctionBinding';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 1057;
    CLS.$class.cnstr = CLS;
    var refs_org_netbeans_html_json_spi_FunctionBinding$Impl;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_netbeans_html_json_spi_FunctionBinding = registerClass(exports,'org_netbeans_html_json_spi_FunctionBinding',org_netbeans_html_json_spi_FunctionBinding);


function org_netbeans_html_json_spi_FunctionBinding$Impl() {
  var m;
  var CLS = org_netbeans_html_json_spi_FunctionBinding$Impl;
  if (!CLS.$class) {
    var pp = org_netbeans_html_json_spi_FunctionBinding$AImpl(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._model = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_json_spi_FunctionBinding$Impl_model'] = v; return this['fld_org_netbeans_html_json_spi_FunctionBinding$Impl_model']; };
    m = CLS.cons__VLjava_lang_Object_2Ljava_lang_String_2ILorg_netbeans_html_json_spi_Proto$Type_2 = function(lcA1, lcA2, lcI3, lcA4) {
  var  lcA0 = this;
(refs_org_netbeans_html_json_spi_FunctionBinding$AImpl || (refs_org_netbeans_html_json_spi_FunctionBinding$AImpl = org_netbeans_html_json_spi_FunctionBinding$AImpl(false))).constructor.cons__VLjava_lang_String_2ILorg_netbeans_html_json_spi_Proto$Type_2.call(lcA0, lcA2, lcI3, lcA4);
lcA0['fld_org_netbeans_html_json_spi_FunctionBinding$Impl_model'] = lcA1;
return;

};
    m.access = 1;
    m.cls = CLS;
    m = c.model__Ljava_lang_Object_2 = function() {
  var  lcA0 = this;
return lcA0['fld_org_netbeans_html_json_spi_FunctionBinding$Impl_model'];

};
    m.access = 4;
    m.cls = CLS;
    m = c.weak__Lorg_netbeans_html_json_spi_FunctionBinding_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if (((refs_org_netbeans_html_json_spi_PropertyBinding || (refs_org_netbeans_html_json_spi_PropertyBinding = org_netbeans_html_json_spi_PropertyBinding(false)))._weakSupported()) == 0) { gt = 30; break IF; }
var stA0 = new org_netbeans_html_json_spi_FunctionBinding$Weak;
(refs_org_netbeans_html_json_spi_FunctionBinding$Weak || (refs_org_netbeans_html_json_spi_FunctionBinding$Weak = org_netbeans_html_json_spi_FunctionBinding$Weak(false))).constructor.cons__VLjava_lang_Object_2Ljava_lang_String_2ILorg_netbeans_html_json_spi_Proto$Type_2.call(stA0, lcA0['fld_org_netbeans_html_json_spi_FunctionBinding$Impl_model'], lcA0['fld_org_netbeans_html_json_spi_FunctionBinding$AImpl_name'], lcA0['fld_org_netbeans_html_json_spi_FunctionBinding$AImpl_index'], lcA0['fld_org_netbeans_html_json_spi_FunctionBinding$AImpl_access']);
return stA0;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

return lcA0;

    }
}}
};
c['weak__Lorg_netbeans_html_json_spi_FunctionBinding_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_json_spi_FunctionBinding$ImplfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_json_spi_FunctionBinding$Impl', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_json_spi_FunctionBinding$ImplfillInstOf });
    org_netbeans_html_json_spi_FunctionBinding$ImplfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/json/spi/FunctionBinding$Impl';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 48;
    CLS.$class.cnstr = CLS;
    var refs_org_netbeans_html_json_spi_FunctionBinding$AImpl;
    var refs_org_netbeans_html_json_spi_PropertyBinding;
    var refs_org_netbeans_html_json_spi_FunctionBinding$Weak;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_org_netbeans_html_json_spi_FunctionBinding$Impl_model'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_netbeans_html_json_spi_FunctionBinding$Impl = org_netbeans_html_json_spi_FunctionBinding$Impl;


function org_netbeans_html_json_spi_FunctionBinding$Weak() {
  var m;
  var CLS = org_netbeans_html_json_spi_FunctionBinding$Weak;
  if (!CLS.$class) {
    var pp = org_netbeans_html_json_spi_FunctionBinding$AImpl(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._ref = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_json_spi_FunctionBinding$Weak_ref'] = v; return this['fld_org_netbeans_html_json_spi_FunctionBinding$Weak_ref']; };
    m = CLS.cons__VLjava_lang_Object_2Ljava_lang_String_2ILorg_netbeans_html_json_spi_Proto$Type_2 = function(lcA1, lcA2, lcI3, lcA4) {
  var  lcA0 = this;
(refs_org_netbeans_html_json_spi_FunctionBinding$AImpl || (refs_org_netbeans_html_json_spi_FunctionBinding$AImpl = org_netbeans_html_json_spi_FunctionBinding$AImpl(false))).constructor.cons__VLjava_lang_String_2ILorg_netbeans_html_json_spi_Proto$Type_2.call(lcA0, lcA2, lcI3, lcA4);
var stA0 = lcA0;var stA1 = new vm.java_lang_ref_WeakReference;
(refs_java_lang_ref_WeakReference || (refs_java_lang_ref_WeakReference = vm.java_lang_ref_WeakReference(false))).constructor['cons__VLjava_lang_Object_2'].call(stA1, lcA1);
stA0['fld_org_netbeans_html_json_spi_FunctionBinding$Weak_ref'] = stA1;
return;

};
    m.access = 1;
    m.cls = CLS;
    m = c.model__Ljava_lang_Object_2 = function() {
  var  lcA0 = this;
var stA0 = invoker.get__Ljava_lang_Object_2(lcA0['fld_org_netbeans_html_json_spi_FunctionBinding$Weak_ref']);
return stA0;

};
    m.access = 4;
    m.cls = CLS;
    m = c.weak__Lorg_netbeans_html_json_spi_FunctionBinding_2 = function() {
  var  lcA0 = this;
return lcA0;

};
c['weak__Lorg_netbeans_html_json_spi_FunctionBinding_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_json_spi_FunctionBinding$WeakfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_json_spi_FunctionBinding$Weak', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_json_spi_FunctionBinding$WeakfillInstOf });
    org_netbeans_html_json_spi_FunctionBinding$WeakfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/json/spi/FunctionBinding$Weak';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 48;
    CLS.$class.cnstr = CLS;
    var refs_org_netbeans_html_json_spi_FunctionBinding$AImpl;
    var refs_java_lang_ref_WeakReference;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_org_netbeans_html_json_spi_FunctionBinding$Weak_ref'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_netbeans_html_json_spi_FunctionBinding$Weak = org_netbeans_html_json_spi_FunctionBinding$Weak;

vm.java_lang_ref_WeakReference = link('java/lang/ref/WeakReference', function(f) { vm.java_lang_ref_WeakReference =  f; });

function org_netbeans_html_json_spi_PropertyBinding() {
  var m;
  var CLS = org_netbeans_html_json_spi_PropertyBinding;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_weakSupported'] = 0;
  m = c._weakSupported = function (v) {  if (arguments.length == 1) CLS['fld_weakSupported'] = v; return CLS['fld_weakSupported']; };
    m = CLS.cons__V = function() {
  var  lcA0 = this;
return;

};
CLS['cons__V'] = m;

    m.access = 0;
    m.cls = CLS;
    m = c.getPropertyName__Ljava_lang_String_2 = function() {
};
c['getPropertyName__Ljava_lang_String_2'] = m;

    m.access = 1025;
    m.cls = CLS;
    m = c.setValue__VLjava_lang_Object_2 = function(lcA1) {
};
c['setValue__VLjava_lang_Object_2'] = m;

    m.access = 1025;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2 = function() {
};
c['getValue__Ljava_lang_Object_2'] = m;

    m.access = 1025;
    m.cls = CLS;
    m = c.isReadOnly__Z = function() {
};
c['isReadOnly__Z'] = m;

    m.access = 1025;
    m.cls = CLS;
    m = c.isConstant__Z = function() {
};
c['isConstant__Z'] = m;

    m.access = 1025;
    m.cls = CLS;
    m = c.weak__Lorg_netbeans_html_json_spi_PropertyBinding_2 = function() {
};
c['weak__Lorg_netbeans_html_json_spi_PropertyBinding_2'] = m;

    m.access = 1025;
    m.cls = CLS;
    m = c.class__V = function() {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
var stA0 = new org_netbeans_html_json_spi_PropertyBinding$1;
(refs_org_netbeans_html_json_spi_PropertyBinding$1 || (refs_org_netbeans_html_json_spi_PropertyBinding$1 = org_netbeans_html_json_spi_PropertyBinding$1(false))).constructor.cons__V.call(stA0);
try {
var stA0 = (refs_java_lang_Class || (refs_java_lang_Class = vm.java_lang_Class(false)))['forName__Ljava_lang_Class_2Ljava_lang_String_2']("java.lang.ref.WeakReference");
var lcA1 = stA0;
if ((lcA1) === null) { gt = 22; break IF; }
var stI0 = 1;{ gt = 23; break IF; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_ClassNotFoundException']) {var stA0 = e;{ gt = 27; break IF; }}
throw e;
}    }
    X_22: for (;;) { IF: if (gt <= 22) {
try {
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_ClassNotFoundException']) {var stA0 = e;{ gt = 27; break IF; }}
throw e;
}var stI0 = 0;    }
    X_23: for (;;) { IF: if (gt <= 23) {
try {var lcI0 = stI0;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_ClassNotFoundException']) {var stA0 = e;{ gt = 27; break IF; }}
throw e;
}{ gt = 30; break IF; }
    }
    X_27: for (;;) { IF: if (gt <= 27) {
var lcA1 = stA0;
var lcI0 = 0;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

c._weakSupported(lcI0);
return;

    }
}}}}}
};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_json_spi_PropertyBindingfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_json_spi_PropertyBinding', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_json_spi_PropertyBindingfillInstOf });
    org_netbeans_html_json_spi_PropertyBindingfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/json/spi/PropertyBinding';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 1057;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_org_netbeans_html_json_spi_PropertyBinding$1;
    var refs_java_lang_Class;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_netbeans_html_json_spi_PropertyBinding = registerClass(exports,'org_netbeans_html_json_spi_PropertyBinding',org_netbeans_html_json_spi_PropertyBinding);

vm.java_lang_ClassNotFoundException = link('java/lang/ClassNotFoundException', function(f) { vm.java_lang_ClassNotFoundException =  f; });

function org_netbeans_html_json_spi_PropertyBinding$1() {
  var m;
  var CLS = org_netbeans_html_json_spi_PropertyBinding$1;
  if (!CLS.$class) {
    var pp = org_netbeans_html_json_impl_PropertyBindingAccessor(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_org_netbeans_html_json_impl_PropertyBindingAccessor || (refs_org_netbeans_html_json_impl_PropertyBindingAccessor = org_netbeans_html_json_impl_PropertyBindingAccessor(false))).constructor.cons__V.call(lcA0);
return;

};
CLS['cons__V'] = m;

    m.access = 0;
    m.cls = CLS;
    m = c.newCall__Lorg_netbeans_html_json_spi_JSONCall_2Lnet_java_html_BrwsrCtx_2Lorg_netbeans_html_json_impl_RcvrJSON_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2 = function(lcA1, lcA2, lcA3, lcA4, lcA5, lcA6, lcA7) {
  var  lcA0 = this;
var stA0 = new org_netbeans_html_json_spi_JSONCall;
(refs_org_netbeans_html_json_spi_JSONCall || (refs_org_netbeans_html_json_spi_JSONCall = org_netbeans_html_json_spi_JSONCall(false))).constructor.cons__VLnet_java_html_BrwsrCtx_2Lorg_netbeans_html_json_impl_RcvrJSON_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2.call(stA0, lcA1, lcA2, lcA3, lcA4, lcA5, lcA6, lcA7);
return stA0;

};
    m.access = 4;
    m.cls = CLS;
    m = c.bindings__Lorg_netbeans_html_json_impl_Bindings_2Lorg_netbeans_html_json_spi_Proto_2ZLjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((lcI2) == 0) { gt = 12; break IF; }
var stA0 = lcA1.initBindings__Lorg_netbeans_html_json_impl_Bindings_2Ljava_lang_Object_2(lcA3);
{ gt = 16; break IF; }
    }
    X_12: for (;;) { IF: if (gt <= 12) {

var stA0 = lcA1.getBindings__Lorg_netbeans_html_json_impl_Bindings_2();
    }
    X_16: for (;;) { IF: if (gt <= 16) {
return stA0;

    }
}}}
};
    m.access = 4;
    m.cls = CLS;
    m = c.notifyChange__VLorg_netbeans_html_json_spi_Proto_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
lcA1.onChange__VI(lcI2);
return;

};
    m.access = 4;
    m.cls = CLS;
    m = c.findProto__Lorg_netbeans_html_json_spi_Proto_2Lorg_netbeans_html_json_spi_Proto$Type_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = invoker.protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2(lcA1,lcA2);
return stA0;

};
    m.access = 4;
    m.cls = CLS;
    m = c.cloneTo__Ljava_lang_Object_2Lorg_netbeans_html_json_spi_Proto$Type_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
var stA0 = invoker.cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2(lcA1,lcA2, lcA3);
return stA0;

};
    m.access = 4;
    m.cls = CLS;
    m = c.read__Ljava_lang_Object_2Lorg_netbeans_html_json_spi_Proto$Type_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
var stA0 = invoker.read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2(lcA1,lcA2, lcA3);
return stA0;

};
    m.access = 4;
    m.cls = CLS;
    m = c.newBinding__Lorg_netbeans_html_json_spi_PropertyBinding_2Lorg_netbeans_html_json_spi_Proto$Type_2Lorg_netbeans_html_json_impl_Bindings_2Ljava_lang_String_2ILjava_lang_Object_2B = function(lcA1, lcA2, lcA3, lcI4, lcA5, lcI6) {
  var  lcA0 = this;
var stA0 = new org_netbeans_html_json_spi_PropertyBinding$Impl;
(refs_org_netbeans_html_json_spi_PropertyBinding$Impl || (refs_org_netbeans_html_json_spi_PropertyBinding$Impl = org_netbeans_html_json_spi_PropertyBinding$Impl(false))).constructor.cons__VLjava_lang_Object_2Lorg_netbeans_html_json_impl_Bindings_2Ljava_lang_String_2ILorg_netbeans_html_json_spi_Proto$Type_2B.call(stA0, lcA5, lcA2, lcA3, lcI4, lcA1, lcI6);
return stA0;

};
    m.access = 4;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_json_spi_PropertyBinding$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_json_spi_PropertyBinding$1', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_json_spi_PropertyBinding$1fillInstOf });
    org_netbeans_html_json_spi_PropertyBinding$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/json/spi/PropertyBinding$1';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
    var refs_org_netbeans_html_json_impl_PropertyBindingAccessor;
    var refs_org_netbeans_html_json_spi_JSONCall;
    var refs_org_netbeans_html_json_spi_PropertyBinding$Impl;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_netbeans_html_json_spi_PropertyBinding$1 = org_netbeans_html_json_spi_PropertyBinding$1;


function org_netbeans_html_json_spi_PropertyBinding$Impl() {
  var m;
  var CLS = org_netbeans_html_json_spi_PropertyBinding$Impl;
  if (!CLS.$class) {
    var pp = org_netbeans_html_json_spi_PropertyBinding$AImpl(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._model = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_json_spi_PropertyBinding$Impl_model'] = v; return this['fld_org_netbeans_html_json_spi_PropertyBinding$Impl_model']; };
    m = CLS.cons__VLjava_lang_Object_2Lorg_netbeans_html_json_impl_Bindings_2Ljava_lang_String_2ILorg_netbeans_html_json_spi_Proto$Type_2B = function(lcA1, lcA2, lcA3, lcI4, lcA5, lcI6) {
  var  lcA0 = this;
(refs_org_netbeans_html_json_spi_PropertyBinding$AImpl || (refs_org_netbeans_html_json_spi_PropertyBinding$AImpl = org_netbeans_html_json_spi_PropertyBinding$AImpl(false))).constructor.cons__VLorg_netbeans_html_json_impl_Bindings_2Ljava_lang_String_2ILorg_netbeans_html_json_spi_Proto$Type_2B.call(lcA0, lcA2, lcA3, lcI4, lcA5, lcI6);
lcA0['fld_org_netbeans_html_json_spi_PropertyBinding$Impl_model'] = lcA1;
return;

};
    m.access = 1;
    m.cls = CLS;
    m = c.model__Ljava_lang_Object_2 = function() {
  var  lcA0 = this;
return lcA0['fld_org_netbeans_html_json_spi_PropertyBinding$Impl_model'];

};
    m.access = 4;
    m.cls = CLS;
    m = c.weak__Lorg_netbeans_html_json_spi_PropertyBinding_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((c._weakSupported()) == 0) { gt = 38; break IF; }
var stA0 = new org_netbeans_html_json_spi_PropertyBinding$Weak;
(refs_org_netbeans_html_json_spi_PropertyBinding$Weak || (refs_org_netbeans_html_json_spi_PropertyBinding$Weak = org_netbeans_html_json_spi_PropertyBinding$Weak(false))).constructor.cons__VLjava_lang_Object_2Lorg_netbeans_html_json_impl_Bindings_2Ljava_lang_String_2ILorg_netbeans_html_json_spi_Proto$Type_2B.call(stA0, lcA0['fld_org_netbeans_html_json_spi_PropertyBinding$Impl_model'], lcA0['fld_org_netbeans_html_json_spi_PropertyBinding$AImpl_bindings'], lcA0['fld_org_netbeans_html_json_spi_PropertyBinding$AImpl_name'], lcA0['fld_org_netbeans_html_json_spi_PropertyBinding$AImpl_index'], lcA0['fld_org_netbeans_html_json_spi_PropertyBinding$AImpl_access'], lcA0['fld_org_netbeans_html_json_spi_PropertyBinding$AImpl_propertyType']);
return stA0;
    }
    X_38: for (;;) { IF: if (gt <= 38) {

return lcA0;

    }
}}
};
c['weak__Lorg_netbeans_html_json_spi_PropertyBinding_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_json_spi_PropertyBinding$ImplfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_json_spi_PropertyBinding$Impl', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_json_spi_PropertyBinding$ImplfillInstOf });
    org_netbeans_html_json_spi_PropertyBinding$ImplfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/json/spi/PropertyBinding$Impl';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 48;
    CLS.$class.cnstr = CLS;
    var refs_org_netbeans_html_json_spi_PropertyBinding$AImpl;
    var refs_org_netbeans_html_json_spi_PropertyBinding$Weak;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_org_netbeans_html_json_spi_PropertyBinding$Impl_model'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_netbeans_html_json_spi_PropertyBinding$Impl = org_netbeans_html_json_spi_PropertyBinding$Impl;


function org_netbeans_html_json_spi_PropertyBinding$Weak() {
  var m;
  var CLS = org_netbeans_html_json_spi_PropertyBinding$Weak;
  if (!CLS.$class) {
    var pp = org_netbeans_html_json_spi_PropertyBinding$AImpl(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._ref = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_json_spi_PropertyBinding$Weak_ref'] = v; return this['fld_org_netbeans_html_json_spi_PropertyBinding$Weak_ref']; };
    m = CLS.cons__VLjava_lang_Object_2Lorg_netbeans_html_json_impl_Bindings_2Ljava_lang_String_2ILorg_netbeans_html_json_spi_Proto$Type_2B = function(lcA1, lcA2, lcA3, lcI4, lcA5, lcI6) {
  var  lcA0 = this;
(refs_org_netbeans_html_json_spi_PropertyBinding$AImpl || (refs_org_netbeans_html_json_spi_PropertyBinding$AImpl = org_netbeans_html_json_spi_PropertyBinding$AImpl(false))).constructor.cons__VLorg_netbeans_html_json_impl_Bindings_2Ljava_lang_String_2ILorg_netbeans_html_json_spi_Proto$Type_2B.call(lcA0, lcA2, lcA3, lcI4, lcA5, lcI6);
var stA0 = lcA0;var stA1 = new vm.java_lang_ref_WeakReference;
(refs_java_lang_ref_WeakReference || (refs_java_lang_ref_WeakReference = vm.java_lang_ref_WeakReference(false))).constructor['cons__VLjava_lang_Object_2'].call(stA1, lcA1);
stA0['fld_org_netbeans_html_json_spi_PropertyBinding$Weak_ref'] = stA1;
return;

};
    m.access = 1;
    m.cls = CLS;
    m = c.model__Ljava_lang_Object_2 = function() {
  var  lcA0 = this;
var stA0 = invoker.get__Ljava_lang_Object_2(lcA0['fld_org_netbeans_html_json_spi_PropertyBinding$Weak_ref']);
return stA0;

};
    m.access = 4;
    m.cls = CLS;
    m = c.weak__Lorg_netbeans_html_json_spi_PropertyBinding_2 = function() {
  var  lcA0 = this;
return lcA0;

};
c['weak__Lorg_netbeans_html_json_spi_PropertyBinding_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_json_spi_PropertyBinding$WeakfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_json_spi_PropertyBinding$Weak', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_json_spi_PropertyBinding$WeakfillInstOf });
    org_netbeans_html_json_spi_PropertyBinding$WeakfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/json/spi/PropertyBinding$Weak';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 48;
    CLS.$class.cnstr = CLS;
    var refs_org_netbeans_html_json_spi_PropertyBinding$AImpl;
    var refs_java_lang_ref_WeakReference;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_org_netbeans_html_json_spi_PropertyBinding$Weak_ref'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_netbeans_html_json_spi_PropertyBinding$Weak = org_netbeans_html_json_spi_PropertyBinding$Weak;


function org_netbeans_html_json_spi_PropertyBinding$AImpl() {
  var m;
  var CLS = org_netbeans_html_json_spi_PropertyBinding$AImpl;
  if (!CLS.$class) {
    var pp = org_netbeans_html_json_spi_PropertyBinding(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._name = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_json_spi_PropertyBinding$AImpl_name'] = v; return this['fld_org_netbeans_html_json_spi_PropertyBinding$AImpl_name']; };
  m = c._propertyType = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_json_spi_PropertyBinding$AImpl_propertyType'] = v; return this['fld_org_netbeans_html_json_spi_PropertyBinding$AImpl_propertyType']; };
  m = c._access = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_json_spi_PropertyBinding$AImpl_access'] = v; return this['fld_org_netbeans_html_json_spi_PropertyBinding$AImpl_access']; };
  m = c._bindings = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_json_spi_PropertyBinding$AImpl_bindings'] = v; return this['fld_org_netbeans_html_json_spi_PropertyBinding$AImpl_bindings']; };
  m = c._index = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_json_spi_PropertyBinding$AImpl_index'] = v; return this['fld_org_netbeans_html_json_spi_PropertyBinding$AImpl_index']; };
    m = CLS.cons__VLorg_netbeans_html_json_impl_Bindings_2Ljava_lang_String_2ILorg_netbeans_html_json_spi_Proto$Type_2B = function(lcA1, lcA2, lcI3, lcA4, lcI5) {
  var  lcA0 = this;
(refs_org_netbeans_html_json_spi_PropertyBinding || (refs_org_netbeans_html_json_spi_PropertyBinding = org_netbeans_html_json_spi_PropertyBinding(false))).constructor.cons__V.call(lcA0);
lcA0['fld_org_netbeans_html_json_spi_PropertyBinding$AImpl_bindings'] = lcA1;
lcA0['fld_org_netbeans_html_json_spi_PropertyBinding$AImpl_name'] = lcA2;
lcA0['fld_org_netbeans_html_json_spi_PropertyBinding$AImpl_index'] = lcI3;
lcA0['fld_org_netbeans_html_json_spi_PropertyBinding$AImpl_access'] = lcA4;
lcA0['fld_org_netbeans_html_json_spi_PropertyBinding$AImpl_propertyType'] = lcI5;
return;

};
    m.access = 1;
    m.cls = CLS;
    m = c.model__Ljava_lang_Object_2 = function() {
};
    m.access = 1028;
    m.cls = CLS;
    m = c.setValue__VLjava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = lcA0.model__Ljava_lang_Object_2();
var lcA2 = stA0;
if ((lcA2) !== null) { gt = 10; break IF; }
return;
    }
    X_10: for (;;) { IF: if (gt <= 10) {

invoker.setValue__VLjava_lang_Object_2ILjava_lang_Object_2(lcA0['fld_org_netbeans_html_json_spi_PropertyBinding$AImpl_access'],lcA2, lcA0['fld_org_netbeans_html_json_spi_PropertyBinding$AImpl_index'], lcA1);
return;

    }
}}
};
c['setValue__VLjava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = lcA0.model__Ljava_lang_Object_2();
var lcA1 = stA0;
if ((lcA1) !== null) { gt = 11; break IF; }
return null;
    }
    X_11: for (;;) { IF: if (gt <= 11) {

var stA0 = invoker.getValue__Ljava_lang_Object_2Ljava_lang_Object_2I(lcA0['fld_org_netbeans_html_json_spi_PropertyBinding$AImpl_access'],lcA1, lcA0['fld_org_netbeans_html_json_spi_PropertyBinding$AImpl_index']);
var lcA2 = stA0;
var stA0 = (refs_org_netbeans_html_json_impl_JSON || (refs_org_netbeans_html_json_impl_JSON = org_netbeans_html_json_impl_JSON(false))).find__Ljava_lang_Object_2Ljava_lang_Object_2Lorg_netbeans_html_json_impl_Bindings_2(lcA2, lcA0['fld_org_netbeans_html_json_spi_PropertyBinding$AImpl_bindings']);
var lcA3 = stA0;
if ((lcA3) !== null) { gt = 41; break IF; }
var stA0 = lcA2;{ gt = 42; break IF; }
    }
    X_41: for (;;) { IF: if (gt <= 41) {

var stA0 = lcA3;    }
    X_42: for (;;) { IF: if (gt <= 42) {
return stA0;

    }
}}}}
};
c['getValue__Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isReadOnly__Z = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if (((lcA0['fld_org_netbeans_html_json_spi_PropertyBinding$AImpl_propertyType'] & 1)) == 0) { gt = 13; break IF; }
var stI0 = 1;{ gt = 14; break IF; }
    }
    X_13: for (;;) { IF: if (gt <= 13) {

var stI0 = 0;    }
    X_14: for (;;) { IF: if (gt <= 14) {
return stI0;

    }
}}}
};
c['isReadOnly__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isConstant__Z = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if (((lcA0['fld_org_netbeans_html_json_spi_PropertyBinding$AImpl_propertyType'] & 2)) == 0) { gt = 13; break IF; }
var stI0 = 1;{ gt = 14; break IF; }
    }
    X_13: for (;;) { IF: if (gt <= 13) {

var stI0 = 0;    }
    X_14: for (;;) { IF: if (gt <= 14) {
return stI0;

    }
}}}
};
c['isConstant__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getPropertyName__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
return lcA0['fld_org_netbeans_html_json_spi_PropertyBinding$AImpl_name'];

};
c['getPropertyName__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_json_spi_PropertyBinding$AImplfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_json_spi_PropertyBinding$AImpl', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_json_spi_PropertyBinding$AImplfillInstOf });
    org_netbeans_html_json_spi_PropertyBinding$AImplfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/json/spi/PropertyBinding$AImpl';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 1056;
    CLS.$class.cnstr = CLS;
    var refs_org_netbeans_html_json_spi_PropertyBinding;
    var refs_org_netbeans_html_json_impl_JSON;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_org_netbeans_html_json_spi_PropertyBinding$AImpl_name'] = null;
    this['fld_org_netbeans_html_json_spi_PropertyBinding$AImpl_propertyType'] = 0;
    this['fld_org_netbeans_html_json_spi_PropertyBinding$AImpl_access'] = null;
    this['fld_org_netbeans_html_json_spi_PropertyBinding$AImpl_bindings'] = null;
    this['fld_org_netbeans_html_json_spi_PropertyBinding$AImpl_index'] = 0;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_netbeans_html_json_spi_PropertyBinding$AImpl = org_netbeans_html_json_spi_PropertyBinding$AImpl;


function org_netbeans_html_json_spi_JSONCall() {
  var m;
  var CLS = org_netbeans_html_json_spi_JSONCall;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._whenDone = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_json_spi_JSONCall_whenDone'] = v; return this['fld_org_netbeans_html_json_spi_JSONCall_whenDone']; };
  m = c._headers = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_json_spi_JSONCall_headers'] = v; return this['fld_org_netbeans_html_json_spi_JSONCall_headers']; };
  m = c._urlBefore = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_json_spi_JSONCall_urlBefore'] = v; return this['fld_org_netbeans_html_json_spi_JSONCall_urlBefore']; };
  m = c._urlAfter = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_json_spi_JSONCall_urlAfter'] = v; return this['fld_org_netbeans_html_json_spi_JSONCall_urlAfter']; };
  m = c._method = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_json_spi_JSONCall_method'] = v; return this['fld_org_netbeans_html_json_spi_JSONCall_method']; };
  m = c._data = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_json_spi_JSONCall_data'] = v; return this['fld_org_netbeans_html_json_spi_JSONCall_data']; };
  m = c._ctx = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_json_spi_JSONCall_ctx'] = v; return this['fld_org_netbeans_html_json_spi_JSONCall_ctx']; };
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Lorg_netbeans_html_json_impl_RcvrJSON_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2 = function(lcA1, lcA2, lcA3, lcA4, lcA5, lcA6, lcA7) {
  var  lcA0 = this;
lcA0['fld_org_netbeans_html_json_spi_JSONCall_ctx'] = lcA1;
lcA0['fld_org_netbeans_html_json_spi_JSONCall_whenDone'] = lcA2;
lcA0['fld_org_netbeans_html_json_spi_JSONCall_headers'] = lcA3;
lcA0['fld_org_netbeans_html_json_spi_JSONCall_urlBefore'] = lcA4;
lcA0['fld_org_netbeans_html_json_spi_JSONCall_urlAfter'] = lcA5;
lcA0['fld_org_netbeans_html_json_spi_JSONCall_method'] = lcA6;
lcA0['fld_org_netbeans_html_json_spi_JSONCall_data'] = lcA7;
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.isDoOutput__Z = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((lcA0['fld_org_netbeans_html_json_spi_JSONCall_data']) === null) { gt = 11; break IF; }
var stI0 = 1;{ gt = 12; break IF; }
    }
    X_11: for (;;) { IF: if (gt <= 11) {

var stI0 = 0;    }
    X_12: for (;;) { IF: if (gt <= 12) {
return stI0;

    }
}}}
};
c['isDoOutput__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.writeData__VLjava_io_OutputStream_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((lcA0['fld_org_netbeans_html_json_spi_JSONCall_data']) !== null) { gt = 17; break IF; }
var stA0 = new vm.java_io_IOException;
(refs_java_io_IOException || (refs_java_io_IOException = vm.java_io_IOException(false))).constructor['cons__VLjava_lang_String_2'].call(stA0, "No data!");
{ var stA0 = stA0; throw stA0; }
    }
    X_17: for (;;) { IF: if (gt <= 17) {

var stA0 = lcA1;var stA1 = invoker.toString__Ljava_lang_String_2(lcA0['fld_org_netbeans_html_json_spi_JSONCall_data']);
var stA1 = invoker.getBytes___3BLjava_lang_String_2(stA1,"UTF-8");
invoker.write__V_3B(stA0,stA1);
invoker.flush__V(lcA1);
return;

    }
}}
};
c['writeData__VLjava_io_OutputStream_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getHeaders__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
return lcA0['fld_org_netbeans_html_json_spi_JSONCall_headers'];

};
c['getHeaders__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getMethod__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
return lcA0['fld_org_netbeans_html_json_spi_JSONCall_method'];

};
c['getMethod__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isJSONP__Z = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((lcA0['fld_org_netbeans_html_json_spi_JSONCall_urlAfter']) === null) { gt = 11; break IF; }
var stI0 = 1;{ gt = 12; break IF; }
    }
    X_11: for (;;) { IF: if (gt <= 11) {

var stI0 = 0;    }
    X_12: for (;;) { IF: if (gt <= 12) {
return stI0;

    }
}}}
};
c['isJSONP__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.composeURL__Ljava_lang_String_2Ljava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((lcA0['fld_org_netbeans_html_json_spi_JSONCall_urlAfter']) !== null) { gt = 11; break IF; }
var stI0 = 1;{ gt = 12; break IF; }
    }
    X_11: for (;;) { IF: if (gt <= 11) {

var stI0 = 0;    }
    X_12: for (;;) { IF: if (gt <= 12) {

if ((lcA1) !== null) { gt = 20; break IF; }
var stI1 = 1;{ gt = 21; break IF; }
    }
    X_20: for (;;) { IF: if (gt <= 20) {

var stI1 = 0;    }
    X_21: for (;;) { IF: if (gt <= 21) {
if ((stI0) == (stI1)) { gt = 32; break IF; }
var stA0 = new vm.java_lang_IllegalStateException;
(refs_java_lang_IllegalStateException || (refs_java_lang_IllegalStateException = vm.java_lang_IllegalStateException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }
    }
    X_32: for (;;) { IF: if (gt <= 32) {

if ((lcA0['fld_org_netbeans_html_json_spi_JSONCall_urlAfter']) === null) { gt = 68; break IF; }
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,lcA0['fld_org_netbeans_html_json_spi_JSONCall_urlBefore']);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,lcA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,lcA0['fld_org_netbeans_html_json_spi_JSONCall_urlAfter']);
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
return stA0;
    }
    X_68: for (;;) { IF: if (gt <= 68) {

return lcA0['fld_org_netbeans_html_json_spi_JSONCall_urlBefore'];

    }
}}}}}}}
};
c['composeURL__Ljava_lang_String_2Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.notifySuccess__VLjava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((lcA1) !== null) { gt = 14; break IF; }
var stA0 = lcA0;var stA1 = (refs_org_netbeans_html_json_impl_RcvrJSON$MsgEvnt || (refs_org_netbeans_html_json_impl_RcvrJSON$MsgEvnt = org_netbeans_html_json_impl_RcvrJSON$MsgEvnt(false))).createOpen__Lorg_netbeans_html_json_impl_RcvrJSON$MsgEvnt_2();
c.dispatch__VLorg_netbeans_html_json_impl_RcvrJSON$MsgEvnt_2.call(stA0, stA1);
{ gt = 22; break IF; }
    }
    X_14: for (;;) { IF: if (gt <= 14) {

var stA0 = lcA0;var stA1 = (refs_org_netbeans_html_json_impl_RcvrJSON$MsgEvnt || (refs_org_netbeans_html_json_impl_RcvrJSON$MsgEvnt = org_netbeans_html_json_impl_RcvrJSON$MsgEvnt(false))).createMessage__Lorg_netbeans_html_json_impl_RcvrJSON$MsgEvnt_2Ljava_lang_Object_2(lcA1);
c.dispatch__VLorg_netbeans_html_json_impl_RcvrJSON$MsgEvnt_2.call(stA0, stA1);
    }
    X_22: for (;;) { IF: if (gt <= 22) {
return;

    }
}}}
};
c['notifySuccess__VLjava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.notifyError__VLjava_lang_Throwable_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((lcA1) !== null) { gt = 14; break IF; }
var stA0 = lcA0;var stA1 = (refs_org_netbeans_html_json_impl_RcvrJSON$MsgEvnt || (refs_org_netbeans_html_json_impl_RcvrJSON$MsgEvnt = org_netbeans_html_json_impl_RcvrJSON$MsgEvnt(false))).createClose__Lorg_netbeans_html_json_impl_RcvrJSON$MsgEvnt_2();
c.dispatch__VLorg_netbeans_html_json_impl_RcvrJSON$MsgEvnt_2.call(stA0, stA1);
{ gt = 22; break IF; }
    }
    X_14: for (;;) { IF: if (gt <= 14) {

var stA0 = lcA0;var stA1 = (refs_org_netbeans_html_json_impl_RcvrJSON$MsgEvnt || (refs_org_netbeans_html_json_impl_RcvrJSON$MsgEvnt = org_netbeans_html_json_impl_RcvrJSON$MsgEvnt(false))).createError__Lorg_netbeans_html_json_impl_RcvrJSON$MsgEvnt_2Ljava_lang_Throwable_2(lcA1);
c.dispatch__VLorg_netbeans_html_json_impl_RcvrJSON$MsgEvnt_2.call(stA0, stA1);
    }
    X_22: for (;;) { IF: if (gt <= 22) {
return;

    }
}}}
};
c['notifyError__VLjava_lang_Throwable_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.dispatch__VLorg_netbeans_html_json_impl_RcvrJSON$MsgEvnt_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = lcA0['fld_org_netbeans_html_json_spi_JSONCall_ctx'];var stA1 = new org_netbeans_html_json_spi_JSONCall$1;
(refs_org_netbeans_html_json_spi_JSONCall$1 || (refs_org_netbeans_html_json_spi_JSONCall$1 = org_netbeans_html_json_spi_JSONCall$1(false))).constructor.cons__VLorg_netbeans_html_json_spi_JSONCall_2Lorg_netbeans_html_json_impl_RcvrJSON$MsgEvnt_2.call(stA1, lcA0, lcA1);
invoker.execute__VLjava_lang_Runnable_2(stA0,stA1);
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.getMessage__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
var stA0 = invoker.toString__Ljava_lang_String_2(lcA0['fld_org_netbeans_html_json_spi_JSONCall_data']);
return stA0;

};
c['getMessage__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.access$000__Lorg_netbeans_html_json_impl_RcvrJSON_2Lorg_netbeans_html_json_spi_JSONCall_2 = function(lcA0) {
return lcA0['fld_org_netbeans_html_json_spi_JSONCall_whenDone'];

};
    m.access = 4104;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_json_spi_JSONCallfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_json_spi_JSONCall', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_json_spi_JSONCallfillInstOf });
    org_netbeans_html_json_spi_JSONCallfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/json/spi/JSONCall';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    var refs_java_io_IOException;
    var refs_java_lang_IllegalStateException;
    var refs_java_lang_StringBuilder;
    var refs_org_netbeans_html_json_impl_RcvrJSON$MsgEvnt;
    var refs_org_netbeans_html_json_spi_JSONCall$1;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_org_netbeans_html_json_spi_JSONCall_whenDone'] = null;
    this['fld_org_netbeans_html_json_spi_JSONCall_headers'] = null;
    this['fld_org_netbeans_html_json_spi_JSONCall_urlBefore'] = null;
    this['fld_org_netbeans_html_json_spi_JSONCall_urlAfter'] = null;
    this['fld_org_netbeans_html_json_spi_JSONCall_method'] = null;
    this['fld_org_netbeans_html_json_spi_JSONCall_data'] = null;
    this['fld_org_netbeans_html_json_spi_JSONCall_ctx'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_netbeans_html_json_spi_JSONCall = registerClass(exports,'org_netbeans_html_json_spi_JSONCall',org_netbeans_html_json_spi_JSONCall);


function org_netbeans_html_json_spi_JSONCall$1() {
  var m;
  var CLS = org_netbeans_html_json_spi_JSONCall$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$ev = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_json_spi_JSONCall$1_val$ev'] = v; return this['fld_org_netbeans_html_json_spi_JSONCall$1_val$ev']; };
  m = c._this$0 = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_json_spi_JSONCall$1_this$0'] = v; return this['fld_org_netbeans_html_json_spi_JSONCall$1_this$0']; };
    m = CLS.cons__VLorg_netbeans_html_json_spi_JSONCall_2Lorg_netbeans_html_json_impl_RcvrJSON$MsgEvnt_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
lcA0['fld_org_netbeans_html_json_spi_JSONCall$1_this$0'] = lcA1;
lcA0['fld_org_netbeans_html_json_spi_JSONCall$1_val$ev'] = lcA2;
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.run__V = function() {
  var  lcA0 = this;
var stA0 = lcA0['fld_org_netbeans_html_json_spi_JSONCall$1_val$ev'];var stA1 = (refs_org_netbeans_html_json_spi_JSONCall || (refs_org_netbeans_html_json_spi_JSONCall = org_netbeans_html_json_spi_JSONCall(false))).access$000__Lorg_netbeans_html_json_impl_RcvrJSON_2Lorg_netbeans_html_json_spi_JSONCall_2(lcA0['fld_org_netbeans_html_json_spi_JSONCall$1_this$0']);
stA0.dispatch__VLorg_netbeans_html_json_impl_RcvrJSON_2(stA1);
return;

};
c['run__V'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_json_spi_JSONCall$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_json_spi_JSONCall$1', { value : true });
      vm.java_lang_Runnable(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_json_spi_JSONCall$1fillInstOf });
    org_netbeans_html_json_spi_JSONCall$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/json/spi/JSONCall$1';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.java_lang_Runnable(false).constructor.$class
    ]; };
    CLS.$class.access = 65568;
    CLS.$class.cnstr = CLS;
    var refs_org_netbeans_html_json_spi_JSONCall;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_org_netbeans_html_json_spi_JSONCall$1_val$ev'] = null;
    this['fld_org_netbeans_html_json_spi_JSONCall$1_this$0'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_netbeans_html_json_spi_JSONCall$1 = org_netbeans_html_json_spi_JSONCall$1;

vm.java_lang_Runnable = link('java/lang/Runnable', function(f) { vm.java_lang_Runnable =  f; });

function org_netbeans_html_json_impl_RcvrJSON$MsgEvnt() {
  var m;
  var CLS = org_netbeans_html_json_impl_RcvrJSON$MsgEvnt;
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
    m = c.getError__Ljava_lang_Throwable_2 = function() {
  var  lcA0 = this;
return null;

};
    m.access = 1;
    m.cls = CLS;
    m = c.getException__Ljava_lang_Exception_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = lcA0.getError__Ljava_lang_Throwable_2();
var lcA1 = stA0;
var stI0 = lcA1 != null && lcA1['$instOf_java_lang_Exception'] ? 1 : 0;
if ((stI0) == 0) { gt = 17; break IF; }
if (lcA1 !== null && !lcA1['$instOf_java_lang_Exception']) vm.java_lang_Class(false).castEx(lcA1, 'java.lang.Exception');
return lcA1;
    }
    X_17: for (;;) { IF: if (gt <= 17) {

if ((lcA1) !== null) { gt = 23; break IF; }
return null;
    }
    X_23: for (;;) { IF: if (gt <= 23) {
var stA0 = new vm.java_lang_Exception;
(refs_java_lang_Exception || (refs_java_lang_Exception = vm.java_lang_Exception(false))).constructor['cons__VLjava_lang_Throwable_2'].call(stA0, lcA1);
return stA0;

    }
}}}
};
    m.access = 17;
    m.cls = CLS;
    m = c.getValues___3Ljava_lang_Object_2 = function() {
  var  lcA0 = this;
return null;

};
    m.access = 1;
    m.cls = CLS;
    m = c.dispatch__VLorg_netbeans_html_json_impl_RcvrJSON_2 = function(lcA1) {
};
    m.access = 1025;
    m.cls = CLS;
    m = c.createError__Lorg_netbeans_html_json_impl_RcvrJSON$MsgEvnt_2Ljava_lang_Throwable_2 = function(lcA0) {
var stA0 = new org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$1;
(refs_org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$1 || (refs_org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$1 = org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$1(false))).constructor.cons__VLjava_lang_Throwable_2.call(stA0, lcA0);
return stA0;

};
    m.access = 9;
    m.cls = CLS;
    m = c.createMessage__Lorg_netbeans_html_json_impl_RcvrJSON$MsgEvnt_2Ljava_lang_Object_2 = function(lcA0) {
var stA0 = new org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$2;
(refs_org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$2 || (refs_org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$2 = org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$2(false))).constructor.cons__VLjava_lang_Object_2.call(stA0, lcA0);
return stA0;

};
    m.access = 9;
    m.cls = CLS;
    m = c.createOpen__Lorg_netbeans_html_json_impl_RcvrJSON$MsgEvnt_2 = function() {
var stA0 = new org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$3;
(refs_org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$3 || (refs_org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$3 = org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$3(false))).constructor.cons__V.call(stA0);
return stA0;

};
    m.access = 9;
    m.cls = CLS;
    m = c.createClose__Lorg_netbeans_html_json_impl_RcvrJSON$MsgEvnt_2 = function() {
var stA0 = new org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$4;
(refs_org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$4 || (refs_org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$4 = org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$4(false))).constructor.cons__V.call(stA0);
return stA0;

};
    m.access = 9;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_json_impl_RcvrJSON$MsgEvntfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_json_impl_RcvrJSON$MsgEvnt', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_json_impl_RcvrJSON$MsgEvntfillInstOf });
    org_netbeans_html_json_impl_RcvrJSON$MsgEvntfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/json/impl/RcvrJSON$MsgEvnt';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 1057;
    CLS.$class.cnstr = CLS;
    var refs_java_lang_Exception;
    var refs_org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$1;
    var refs_org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$2;
    var refs_org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$3;
    var refs_org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$4;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_netbeans_html_json_impl_RcvrJSON$MsgEvnt = org_netbeans_html_json_impl_RcvrJSON$MsgEvnt;


function org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$4() {
  var m;
  var CLS = org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$4;
  if (!CLS.$class) {
    var pp = org_netbeans_html_json_impl_RcvrJSON$MsgEvnt(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_org_netbeans_html_json_impl_RcvrJSON$MsgEvnt || (refs_org_netbeans_html_json_impl_RcvrJSON$MsgEvnt = org_netbeans_html_json_impl_RcvrJSON$MsgEvnt(false))).constructor.cons__V.call(lcA0);
return;

};
CLS['cons__V'] = m;

    m.access = 0;
    m.cls = CLS;
    m = c.dispatch__VLorg_netbeans_html_json_impl_RcvrJSON_2 = function(lcA1) {
  var  lcA0 = this;
lcA1.onClose__VLorg_netbeans_html_json_impl_RcvrJSON$MsgEvnt_2(lcA0);
return;

};
    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$4fillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$4', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$4fillInstOf });
    org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$4fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/json/impl/RcvrJSON$MsgEvnt$4';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
    var refs_org_netbeans_html_json_impl_RcvrJSON$MsgEvnt;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$4 = org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$4;


function org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$3() {
  var m;
  var CLS = org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$3;
  if (!CLS.$class) {
    var pp = org_netbeans_html_json_impl_RcvrJSON$MsgEvnt(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_org_netbeans_html_json_impl_RcvrJSON$MsgEvnt || (refs_org_netbeans_html_json_impl_RcvrJSON$MsgEvnt = org_netbeans_html_json_impl_RcvrJSON$MsgEvnt(false))).constructor.cons__V.call(lcA0);
return;

};
CLS['cons__V'] = m;

    m.access = 0;
    m.cls = CLS;
    m = c.dispatch__VLorg_netbeans_html_json_impl_RcvrJSON_2 = function(lcA1) {
  var  lcA0 = this;
lcA1.onOpen__VLorg_netbeans_html_json_impl_RcvrJSON$MsgEvnt_2(lcA0);
return;

};
    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$3fillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$3', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$3fillInstOf });
    org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$3fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/json/impl/RcvrJSON$MsgEvnt$3';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
    var refs_org_netbeans_html_json_impl_RcvrJSON$MsgEvnt;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$3 = org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$3;


function org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$2() {
  var m;
  var CLS = org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$2;
  if (!CLS.$class) {
    var pp = org_netbeans_html_json_impl_RcvrJSON$MsgEvnt(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$2_val'] = v; return this['fld_org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$2_val']; };
  m = c._val$value = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$2_val$value'] = v; return this['fld_org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$2_val$value']; };
    m = CLS.cons__VLjava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$2_val$value'] = lcA1;
(refs_org_netbeans_html_json_impl_RcvrJSON$MsgEvnt || (refs_org_netbeans_html_json_impl_RcvrJSON$MsgEvnt = org_netbeans_html_json_impl_RcvrJSON$MsgEvnt(false))).constructor.cons__V.call(lcA0);
lcA0['fld_org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$2_val'] = lcA0['fld_org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$2_val$value'];
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.getValues___3Ljava_lang_Object_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = lcA0['fld_org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$2_val'] != null && lcA0['fld_org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$2_val']['$instOf_java_util_concurrent_Callable'] ? 1 : 0;
if ((stI0) == 0) { gt = 61; break IF; }
try {
if (lcA0['fld_org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$2_val'] !== null && !lcA0['fld_org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$2_val']['$instOf_java_util_concurrent_Callable']) vm.java_lang_Class(false).castEx(lcA0['fld_org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$2_val'], 'java.util.concurrent.Callable');
var stA0 = lcA0;var stA1 = invoker.call__Ljava_lang_Object_2(lcA0['fld_org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$2_val']);
stA0['fld_org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$2_val'] = stA1;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_Exception']) {var stA0 = e;{ gt = 29; break IF; }}
throw e;
}{ gt = 61; break IF; }
    }
    X_29: for (;;) { IF: if (gt <= 29) {
var lcA1 = stA0;
var stA0 = new vm.java_lang_IllegalStateException;
var stA1 = stA0;var stA2 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"Cannot compute ");
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2(stA2,lcA0['fld_org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$2_val']);
var stA2 = invoker.toString__Ljava_lang_String_2(stA2);
(refs_java_lang_IllegalStateException || (refs_java_lang_IllegalStateException = vm.java_lang_IllegalStateException(false))).constructor['cons__VLjava_lang_String_2Ljava_lang_Throwable_2'].call(stA1, stA2, lcA1);
{ var stA0 = stA0; throw stA0; }
    }
    X_61: for (;;) { IF: if (gt <= 61) {

var stI0 = Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](lcA0['fld_org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$2_val'], 1, vm.java_lang_Object);
if ((stI0) == 0) { gt = 84; break IF; }
if (lcA0['fld_org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$2_val'] !== null && !Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](lcA0['fld_org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$2_val'], 1, vm.java_lang_Object)) vm.java_lang_Class(false).castEx(lcA0['fld_org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$2_val'], '');
if (lcA0['fld_org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$2_val'] !== null && !Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](lcA0['fld_org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$2_val'], 1, vm.java_lang_Object)) vm.java_lang_Class(false).castEx(lcA0['fld_org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$2_val'], '');
var stA0 = lcA0['fld_org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$2_val'];{ gt = 95; break IF; }
    }
    X_84: for (;;) { IF: if (gt <= 84) {

var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 1);
Array.at(stA0, 0, lcA0['fld_org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$2_val']);
    }
    X_95: for (;;) { IF: if (gt <= 95) {
return stA0;

    }
}}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.dispatch__VLorg_netbeans_html_json_impl_RcvrJSON_2 = function(lcA1) {
  var  lcA0 = this;
lcA1.onMessage__VLorg_netbeans_html_json_impl_RcvrJSON$MsgEvnt_2(lcA0);
return;

};
    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$2fillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$2', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$2fillInstOf });
    org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$2fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/json/impl/RcvrJSON$MsgEvnt$2';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
    var refs_org_netbeans_html_json_impl_RcvrJSON$MsgEvnt;
    var refs_java_lang_StringBuilder;
    var refs_java_lang_IllegalStateException;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$2_val'] = null;
    this['fld_org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$2_val$value'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$2 = org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$2;


function org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$1() {
  var m;
  var CLS = org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$1;
  if (!CLS.$class) {
    var pp = org_netbeans_html_json_impl_RcvrJSON$MsgEvnt(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$t = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$1_val$t'] = v; return this['fld_org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$1_val$t']; };
    m = CLS.cons__VLjava_lang_Throwable_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$1_val$t'] = lcA1;
(refs_org_netbeans_html_json_impl_RcvrJSON$MsgEvnt || (refs_org_netbeans_html_json_impl_RcvrJSON$MsgEvnt = org_netbeans_html_json_impl_RcvrJSON$MsgEvnt(false))).constructor.cons__V.call(lcA0);
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.getError__Ljava_lang_Throwable_2 = function() {
  var  lcA0 = this;
return lcA0['fld_org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$1_val$t'];

};
    m.access = 1;
    m.cls = CLS;
    m = c.dispatch__VLorg_netbeans_html_json_impl_RcvrJSON_2 = function(lcA1) {
  var  lcA0 = this;
lcA1.onError__VLorg_netbeans_html_json_impl_RcvrJSON$MsgEvnt_2(lcA0);
return;

};
    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$1', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$1fillInstOf });
    org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/json/impl/RcvrJSON$MsgEvnt$1';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
    var refs_org_netbeans_html_json_impl_RcvrJSON$MsgEvnt;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$1_val$t'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$1 = org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$1;

vm.java_lang_Exception = link('java/lang/Exception', function(f) { vm.java_lang_Exception =  f; });
vm.java_io_IOException = link('java/io/IOException', function(f) { vm.java_io_IOException =  f; });

function org_netbeans_html_json_spi_FunctionBinding$AImpl() {
  var m;
  var CLS = org_netbeans_html_json_spi_FunctionBinding$AImpl;
  if (!CLS.$class) {
    var pp = org_netbeans_html_json_spi_FunctionBinding(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._name = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_json_spi_FunctionBinding$AImpl_name'] = v; return this['fld_org_netbeans_html_json_spi_FunctionBinding$AImpl_name']; };
  m = c._access = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_json_spi_FunctionBinding$AImpl_access'] = v; return this['fld_org_netbeans_html_json_spi_FunctionBinding$AImpl_access']; };
  m = c._index = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_json_spi_FunctionBinding$AImpl_index'] = v; return this['fld_org_netbeans_html_json_spi_FunctionBinding$AImpl_index']; };
    m = CLS.cons__VLjava_lang_String_2ILorg_netbeans_html_json_spi_Proto$Type_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;
(refs_org_netbeans_html_json_spi_FunctionBinding || (refs_org_netbeans_html_json_spi_FunctionBinding = org_netbeans_html_json_spi_FunctionBinding(false))).constructor.cons__V.call(lcA0);
lcA0['fld_org_netbeans_html_json_spi_FunctionBinding$AImpl_name'] = lcA1;
lcA0['fld_org_netbeans_html_json_spi_FunctionBinding$AImpl_index'] = lcI2;
lcA0['fld_org_netbeans_html_json_spi_FunctionBinding$AImpl_access'] = lcA3;
return;

};
    m.access = 1;
    m.cls = CLS;
    m = c.model__Ljava_lang_Object_2 = function() {
};
    m.access = 1028;
    m.cls = CLS;
    m = c.getFunctionName__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
return lcA0['fld_org_netbeans_html_json_spi_FunctionBinding$AImpl_name'];

};
c['getFunctionName__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.call__VLjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = lcA0.model__Ljava_lang_Object_2();
var lcA3 = stA0;
if ((lcA3) !== null) { gt = 10; break IF; }
return;
    }
    X_10: for (;;) { IF: if (gt <= 10) {

var stA0 = invoker.protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2(lcA0['fld_org_netbeans_html_json_spi_FunctionBinding$AImpl_access'],lcA3);
var stA0 = stA0.getContext__Lnet_java_html_BrwsrCtx_2();
var lcA4 = stA0;
var stA0 = lcA4;var stA1 = new org_netbeans_html_json_spi_FunctionBinding$AImpl$1Dispatch;
(refs_org_netbeans_html_json_spi_FunctionBinding$AImpl$1Dispatch || (refs_org_netbeans_html_json_spi_FunctionBinding$AImpl$1Dispatch = org_netbeans_html_json_spi_FunctionBinding$AImpl$1Dispatch(false))).constructor.cons__VLorg_netbeans_html_json_spi_FunctionBinding$AImpl_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2.call(stA1, lcA0, lcA3, lcA1, lcA2);
invoker.execute__VLjava_lang_Runnable_2(stA0,stA1);
return;

    }
}}
};
c['call__VLjava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_json_spi_FunctionBinding$AImplfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_json_spi_FunctionBinding$AImpl', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_json_spi_FunctionBinding$AImplfillInstOf });
    org_netbeans_html_json_spi_FunctionBinding$AImplfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/json/spi/FunctionBinding$AImpl';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 1056;
    CLS.$class.cnstr = CLS;
    var refs_org_netbeans_html_json_spi_FunctionBinding;
    var refs_org_netbeans_html_json_spi_FunctionBinding$AImpl$1Dispatch;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_org_netbeans_html_json_spi_FunctionBinding$AImpl_name'] = null;
    this['fld_org_netbeans_html_json_spi_FunctionBinding$AImpl_access'] = null;
    this['fld_org_netbeans_html_json_spi_FunctionBinding$AImpl_index'] = 0;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_netbeans_html_json_spi_FunctionBinding$AImpl = org_netbeans_html_json_spi_FunctionBinding$AImpl;


function org_netbeans_html_json_spi_FunctionBinding$AImpl$1Dispatch() {
  var m;
  var CLS = org_netbeans_html_json_spi_FunctionBinding$AImpl$1Dispatch;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$model = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_json_spi_FunctionBinding$AImpl$1Dispatch_val$model'] = v; return this['fld_org_netbeans_html_json_spi_FunctionBinding$AImpl$1Dispatch_val$model']; };
  m = c._val$data = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_json_spi_FunctionBinding$AImpl$1Dispatch_val$data'] = v; return this['fld_org_netbeans_html_json_spi_FunctionBinding$AImpl$1Dispatch_val$data']; };
  m = c._val$ev = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_json_spi_FunctionBinding$AImpl$1Dispatch_val$ev'] = v; return this['fld_org_netbeans_html_json_spi_FunctionBinding$AImpl$1Dispatch_val$ev']; };
  m = c._this$0 = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_json_spi_FunctionBinding$AImpl$1Dispatch_this$0'] = v; return this['fld_org_netbeans_html_json_spi_FunctionBinding$AImpl$1Dispatch_this$0']; };
    m = CLS.cons__VLorg_netbeans_html_json_spi_FunctionBinding$AImpl_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcA2, lcA3, lcA4) {
  var  lcA0 = this;
lcA0['fld_org_netbeans_html_json_spi_FunctionBinding$AImpl$1Dispatch_this$0'] = lcA1;
lcA0['fld_org_netbeans_html_json_spi_FunctionBinding$AImpl$1Dispatch_val$model'] = lcA2;
lcA0['fld_org_netbeans_html_json_spi_FunctionBinding$AImpl$1Dispatch_val$data'] = lcA3;
lcA0['fld_org_netbeans_html_json_spi_FunctionBinding$AImpl$1Dispatch_val$ev'] = lcA4;
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.run__V = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
try {
invoker.call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_org_netbeans_html_json_spi_FunctionBinding$AImpl$1Dispatch_this$0']['fld_org_netbeans_html_json_spi_FunctionBinding$AImpl_access'],lcA0['fld_org_netbeans_html_json_spi_FunctionBinding$AImpl$1Dispatch_val$model'], lcA0['fld_org_netbeans_html_json_spi_FunctionBinding$AImpl$1Dispatch_this$0']['fld_org_netbeans_html_json_spi_FunctionBinding$AImpl_index'], lcA0['fld_org_netbeans_html_json_spi_FunctionBinding$AImpl$1Dispatch_val$data'], lcA0['fld_org_netbeans_html_json_spi_FunctionBinding$AImpl$1Dispatch_val$ev']);
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_Throwable']) {var stA0 = e;{ gt = 32; break IF; }}
throw e;
}{ gt = 37; break IF; }
    }
    X_32: for (;;) { IF: if (gt <= 32) {
var lcA1 = stA0;
invoker.printStackTrace__V(lcA1);
    }
    X_37: for (;;) { IF: if (gt <= 37) {
return;

    }
}}}
};
c['run__V'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_json_spi_FunctionBinding$AImpl$1DispatchfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_json_spi_FunctionBinding$AImpl$1Dispatch', { value : true });
      vm.java_lang_Runnable(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_json_spi_FunctionBinding$AImpl$1DispatchfillInstOf });
    org_netbeans_html_json_spi_FunctionBinding$AImpl$1DispatchfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/json/spi/FunctionBinding$AImpl$1Dispatch';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.java_lang_Runnable(false).constructor.$class
    ]; };
    CLS.$class.access = 65568;
    CLS.$class.cnstr = CLS;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_org_netbeans_html_json_spi_FunctionBinding$AImpl$1Dispatch_val$model'] = null;
    this['fld_org_netbeans_html_json_spi_FunctionBinding$AImpl$1Dispatch_val$data'] = null;
    this['fld_org_netbeans_html_json_spi_FunctionBinding$AImpl$1Dispatch_val$ev'] = null;
    this['fld_org_netbeans_html_json_spi_FunctionBinding$AImpl$1Dispatch_this$0'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_netbeans_html_json_spi_FunctionBinding$AImpl$1Dispatch = org_netbeans_html_json_spi_FunctionBinding$AImpl$1Dispatch;

vm.java_lang_Throwable = link('java/lang/Throwable', function(f) { vm.java_lang_Throwable =  f; });

function org_netbeans_html_json_impl_Bindings() {
  var m;
  var CLS = org_netbeans_html_json_impl_Bindings;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._data = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_json_impl_Bindings_data'] = v; return this['fld_org_netbeans_html_json_impl_Bindings_data']; };
  m = c._bp = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_json_impl_Bindings_bp'] = v; return this['fld_org_netbeans_html_json_impl_Bindings_bp']; };
  CLS['fld_$assertionsDisabled'] = 0;
  m = c._$assertionsDisabled = function (v) {  if (arguments.length == 1) CLS['fld_$assertionsDisabled'] = v; return CLS['fld_$assertionsDisabled']; };
    m = CLS.cons__VLorg_netbeans_html_json_spi_Technology_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_org_netbeans_html_json_impl_Bindings_bp'] = lcA1;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.registerProperty__Lorg_netbeans_html_json_spi_PropertyBinding_2Ljava_lang_String_2ILjava_lang_Object_2Lorg_netbeans_html_json_spi_Proto$Type_2B = function(lcA1, lcI2, lcA3, lcA4, lcI5) {
  var  lcA0 = this;
var stA0 = (refs_org_netbeans_html_json_impl_PropertyBindingAccessor || (refs_org_netbeans_html_json_impl_PropertyBindingAccessor = org_netbeans_html_json_impl_PropertyBindingAccessor(false))).create__Lorg_netbeans_html_json_spi_PropertyBinding_2Lorg_netbeans_html_json_spi_Proto$Type_2Lorg_netbeans_html_json_impl_Bindings_2Ljava_lang_String_2ILjava_lang_Object_2B(lcA4, lcA0, lcA1, lcI2, lcA3, lcI5);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.apply__Lorg_netbeans_html_json_impl_Bindings_2Lnet_java_html_BrwsrCtx_2 = function(lcA0) {
var stA0 = (refs_org_netbeans_html_json_impl_JSON || (refs_org_netbeans_html_json_impl_JSON = org_netbeans_html_json_impl_JSON(false))).findTechnology__Lorg_netbeans_html_json_spi_Technology_2Lnet_java_html_BrwsrCtx_2(lcA0);
var lcA1 = stA0;
var stA0 = c.apply__Lorg_netbeans_html_json_impl_Bindings_2Lorg_netbeans_html_json_spi_Technology_2(lcA1);
return stA0;

};
    m.access = 9;
    m.cls = CLS;
    m = c.apply__Lorg_netbeans_html_json_impl_Bindings_2Lorg_netbeans_html_json_spi_Technology_2 = function(lcA0) {
var stA0 = new org_netbeans_html_json_impl_Bindings;
c.constructor.cons__VLorg_netbeans_html_json_spi_Technology_2.call(stA0, lcA0);
return stA0;

};
    m.access = 10;
    m.cls = CLS;
    m = c.finish__VLjava_lang_Object_2Ljava_lang_Object_2_3Lorg_netbeans_html_json_spi_PropertyBinding_2_3Lorg_netbeans_html_json_spi_FunctionBinding_2 = function(lcA1, lcA2, lcA3, lcA4) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((c._$assertionsDisabled()) != 0) { gt = 21; break IF; }
if ((lcA0['fld_org_netbeans_html_json_impl_Bindings_data']) === null) { gt = 21; break IF; }
var stA0 = new vm.java_lang_AssertionError;
(refs_java_lang_AssertionError || (refs_java_lang_AssertionError = vm.java_lang_AssertionError(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }
    }
    X_21: for (;;) { IF: if (gt <= 21) {

var stI0 = lcA0['fld_org_netbeans_html_json_impl_Bindings_bp'] != null && lcA0['fld_org_netbeans_html_json_impl_Bindings_bp']['$instOf_org_netbeans_html_json_spi_Technology$BatchCopy'] ? 1 : 0;
if ((stI0) == 0) { gt = 59; break IF; }
if (lcA0['fld_org_netbeans_html_json_impl_Bindings_bp'] !== null && !lcA0['fld_org_netbeans_html_json_impl_Bindings_bp']['$instOf_org_netbeans_html_json_spi_Technology$BatchCopy']) vm.java_lang_Class(false).castEx(lcA0['fld_org_netbeans_html_json_impl_Bindings_bp'], 'org.netbeans.html.json.spi.Technology$BatchCopy');
var lcA5 = lcA0['fld_org_netbeans_html_json_impl_Bindings_bp'];
var stA0 = lcA0;var stA1 = invoker.wrapModel__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lorg_netbeans_html_json_spi_PropertyBinding_2_3Lorg_netbeans_html_json_spi_FunctionBinding_2(lcA5,lcA1, lcA2, lcA3, lcA4);
stA0['fld_org_netbeans_html_json_impl_Bindings_data'] = stA1;
{ gt = 205; break IF; }
    }
    X_59: for (;;) { IF: if (gt <= 59) {

var stI0 = lcA0['fld_org_netbeans_html_json_impl_Bindings_bp'] != null && lcA0['fld_org_netbeans_html_json_impl_Bindings_bp']['$instOf_org_netbeans_html_json_spi_Technology$BatchInit'] ? 1 : 0;
if ((stI0) == 0) { gt = 96; break IF; }
if (lcA0['fld_org_netbeans_html_json_impl_Bindings_bp'] !== null && !lcA0['fld_org_netbeans_html_json_impl_Bindings_bp']['$instOf_org_netbeans_html_json_spi_Technology$BatchInit']) vm.java_lang_Class(false).castEx(lcA0['fld_org_netbeans_html_json_impl_Bindings_bp'], 'org.netbeans.html.json.spi.Technology$BatchInit');
var lcA5 = lcA0['fld_org_netbeans_html_json_impl_Bindings_bp'];
var stA0 = lcA0;var stA1 = invoker.wrapModel__Ljava_lang_Object_2Ljava_lang_Object_2_3Lorg_netbeans_html_json_spi_PropertyBinding_2_3Lorg_netbeans_html_json_spi_FunctionBinding_2(lcA5,lcA1, lcA3, lcA4);
stA0['fld_org_netbeans_html_json_impl_Bindings_data'] = stA1;
{ gt = 205; break IF; }
    }
    X_96: for (;;) { IF: if (gt <= 96) {

var stA0 = lcA0;var stA1 = invoker.wrapModel__Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_org_netbeans_html_json_impl_Bindings_bp'],lcA1);
stA0['fld_org_netbeans_html_json_impl_Bindings_data'] = stA1;
var lcA5 = lcA3;
var lcI6 = (lcA5).length;
var lcI7 = 0;
    }
    X_121: for (;;) { IF: if (gt <= 121) {

if ((lcI7) >= (lcI6)) { gt = 157; break IF; }
var lcA8 = (lcA5[lcI7] || Array.at(lcA5, lcI7));
invoker.bind__VLorg_netbeans_html_json_spi_PropertyBinding_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_org_netbeans_html_json_impl_Bindings_bp'],lcA8, lcA1, lcA0['fld_org_netbeans_html_json_impl_Bindings_data']);
lcI7++;
{ gt = 0; continue X_121; }
    }
    X_157: for (;;) { IF: if (gt <= 157) {

var lcA5 = lcA4;
var lcI6 = (lcA5).length;
var lcI7 = 0;
    }
    X_169: for (;;) { IF: if (gt <= 169) {

if ((lcI7) >= (lcI6)) { gt = 205; break IF; }
var lcA8 = (lcA5[lcI7] || Array.at(lcA5, lcI7));
invoker.expose__VLorg_netbeans_html_json_spi_FunctionBinding_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_org_netbeans_html_json_impl_Bindings_bp'],lcA8, lcA1, lcA0['fld_org_netbeans_html_json_impl_Bindings_data']);
lcI7++;
{ gt = 0; continue X_169; }
    }
    X_205: for (;;) { IF: if (gt <= 205) {
return;

    }
}}}}}}}}
};
    m.access = 17;
    m.cls = CLS;
    m = c.jsObj__Ljava_lang_Object_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = lcA0['fld_org_netbeans_html_json_impl_Bindings_bp'] != null && lcA0['fld_org_netbeans_html_json_impl_Bindings_bp']['$instOf_org_netbeans_html_json_spi_Technology$ToJavaScript'] ? 1 : 0;
if ((stI0) == 0) { gt = 29; break IF; }
if (lcA0['fld_org_netbeans_html_json_impl_Bindings_bp'] !== null && !lcA0['fld_org_netbeans_html_json_impl_Bindings_bp']['$instOf_org_netbeans_html_json_spi_Technology$ToJavaScript']) vm.java_lang_Class(false).castEx(lcA0['fld_org_netbeans_html_json_impl_Bindings_bp'], 'org.netbeans.html.json.spi.Technology$ToJavaScript');
var lcA1 = lcA0['fld_org_netbeans_html_json_impl_Bindings_bp'];
var stA0 = invoker.toJavaScript__Ljava_lang_Object_2Ljava_lang_Object_2(lcA1,lcA0['fld_org_netbeans_html_json_impl_Bindings_data']);
return stA0;
    }
    X_29: for (;;) { IF: if (gt <= 29) {

return lcA0['fld_org_netbeans_html_json_impl_Bindings_data'];

    }
}}
};
    m.access = 16;
    m.cls = CLS;
    m = c.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = lcA0['fld_org_netbeans_html_json_impl_Bindings_bp'] != null && lcA0['fld_org_netbeans_html_json_impl_Bindings_bp']['$instOf_org_netbeans_html_json_spi_Technology$ValueMutated'] ? 1 : 0;
if ((stI0) == 0) { gt = 52; break IF; }
if (lcA0['fld_org_netbeans_html_json_impl_Bindings_bp'] !== null && !lcA0['fld_org_netbeans_html_json_impl_Bindings_bp']['$instOf_org_netbeans_html_json_spi_Technology$ValueMutated']) vm.java_lang_Class(false).castEx(lcA0['fld_org_netbeans_html_json_impl_Bindings_bp'], 'org.netbeans.html.json.spi.Technology$ValueMutated');
var lcA4 = lcA0['fld_org_netbeans_html_json_impl_Bindings_bp'];
var stA0 = (refs_org_netbeans_html_json_impl_JSON || (refs_org_netbeans_html_json_impl_JSON = org_netbeans_html_json_impl_JSON(false))).find__Ljava_lang_Object_2Ljava_lang_Object_2Lorg_netbeans_html_json_impl_Bindings_2(lcA2, lcA0);
var lcA5 = stA0;
var stA0 = (refs_org_netbeans_html_json_impl_JSON || (refs_org_netbeans_html_json_impl_JSON = org_netbeans_html_json_impl_JSON(false))).find__Ljava_lang_Object_2Ljava_lang_Object_2Lorg_netbeans_html_json_impl_Bindings_2(lcA3, lcA0);
var lcA6 = stA0;
invoker.valueHasMutated__VLjava_lang_Object_2Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA4,lcA0['fld_org_netbeans_html_json_impl_Bindings_data'], lcA1, lcA5, lcA6);
{ gt = 66; break IF; }
    }
    X_52: for (;;) { IF: if (gt <= 52) {

invoker.valueHasMutated__VLjava_lang_Object_2Ljava_lang_String_2(lcA0['fld_org_netbeans_html_json_impl_Bindings_bp'],lcA0['fld_org_netbeans_html_json_impl_Bindings_data'], lcA1);
    }
    X_66: for (;;) { IF: if (gt <= 66) {
return;

    }
}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.applyBindings__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = lcA0['fld_org_netbeans_html_json_impl_Bindings_bp'] != null && lcA0['fld_org_netbeans_html_json_impl_Bindings_bp']['$instOf_org_netbeans_html_json_spi_Technology$ApplyId'] ? 1 : 0;
if ((stI0) == 0) { gt = 30; break IF; }
if (lcA0['fld_org_netbeans_html_json_impl_Bindings_bp'] !== null && !lcA0['fld_org_netbeans_html_json_impl_Bindings_bp']['$instOf_org_netbeans_html_json_spi_Technology$ApplyId']) vm.java_lang_Class(false).castEx(lcA0['fld_org_netbeans_html_json_impl_Bindings_bp'], 'org.netbeans.html.json.spi.Technology$ApplyId');
var lcA2 = lcA0['fld_org_netbeans_html_json_impl_Bindings_bp'];
invoker.applyBindings__VLjava_lang_String_2Ljava_lang_Object_2(lcA2,lcA1, lcA0['fld_org_netbeans_html_json_impl_Bindings_data']);
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

invoker.applyBindings__VLjava_lang_Object_2(lcA0['fld_org_netbeans_html_json_impl_Bindings_bp'],lcA0['fld_org_netbeans_html_json_impl_Bindings_data']);
return;

    }
}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.wrapArray__Ljava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = invoker.wrapArray__Ljava_lang_Object_2_3Ljava_lang_Object_2(lcA0['fld_org_netbeans_html_json_impl_Bindings_bp'],lcA1);
return stA0;

};
    m.access = 0;
    m.cls = CLS;
    m = c.class__V = function() {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = invoker.desiredAssertionStatus__Z(c.constructor.$class);
if ((stI0) != 0) { gt = 12; break IF; }
var stI0 = 1;{ gt = 13; break IF; }
    }
    X_12: for (;;) { IF: if (gt <= 12) {

var stI0 = 0;    }
    X_13: for (;;) { IF: if (gt <= 13) {
c._$assertionsDisabled(stI0);
return;

    }
}}}
};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_json_impl_BindingsfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_json_impl_Bindings', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_json_impl_BindingsfillInstOf });
    org_netbeans_html_json_impl_BindingsfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/json/impl/Bindings';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_org_netbeans_html_json_impl_PropertyBindingAccessor;
    var refs_org_netbeans_html_json_impl_JSON;
    var refs_java_lang_AssertionError;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_org_netbeans_html_json_impl_Bindings_data'] = null;
    this['fld_org_netbeans_html_json_impl_Bindings_bp'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_netbeans_html_json_impl_Bindings = org_netbeans_html_json_impl_Bindings;

vm.java_lang_System = link('java/lang/System', function(f) { vm.java_lang_System =  f; });
vm.java_lang_StringBuilder = link('java/lang/StringBuilder', function(f) { vm.java_lang_StringBuilder =  f; });

function org_netbeans_html_json_impl_JSON$WS() {
  var m;
  var CLS = org_netbeans_html_json_impl_JSON$WS;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.send__VLnet_java_html_BrwsrCtx_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2 = function(lcA1, lcA2, lcA3, lcA4) {
};
    m.access = 1025;
    m.cls = CLS;
    m = c.create__Lorg_netbeans_html_json_impl_JSON$WS_2Lorg_netbeans_html_json_spi_WSTransfer_2Lorg_netbeans_html_json_impl_RcvrJSON_2 = function(lcA0, lcA1) {
var stA0 = new org_netbeans_html_json_impl_JSON$WSImpl;
(refs_org_netbeans_html_json_impl_JSON$WSImpl || (refs_org_netbeans_html_json_impl_JSON$WSImpl = org_netbeans_html_json_impl_JSON$WSImpl(false))).constructor.cons__VLorg_netbeans_html_json_spi_WSTransfer_2Lorg_netbeans_html_json_impl_RcvrJSON_2Lorg_netbeans_html_json_impl_JSON$1_2.call(stA0, lcA0, lcA1, null);
return stA0;

};
    m.access = 9;
    m.cls = CLS;
    m = CLS.cons__VLorg_netbeans_html_json_impl_JSON$1_2 = function(lcA1) {
  var  lcA0 = this;
c.constructor.cons__V.call(lcA0);
return;

};
    m.access = 4096;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_json_impl_JSON$WSfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_json_impl_JSON$WS', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_json_impl_JSON$WSfillInstOf });
    org_netbeans_html_json_impl_JSON$WSfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/json/impl/JSON$WS';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 1057;
    CLS.$class.cnstr = CLS;
    var refs_org_netbeans_html_json_impl_JSON$WSImpl;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_netbeans_html_json_impl_JSON$WS = org_netbeans_html_json_impl_JSON$WS;


function org_netbeans_html_json_impl_JSON$WSImpl() {
  var m;
  var CLS = org_netbeans_html_json_impl_JSON$WSImpl;
  if (!CLS.$class) {
    var pp = org_netbeans_html_json_impl_JSON$WS(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._trans = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_json_impl_JSON$WSImpl_trans'] = v; return this['fld_org_netbeans_html_json_impl_JSON$WSImpl_trans']; };
  m = c._rcvr = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_json_impl_JSON$WSImpl_rcvr'] = v; return this['fld_org_netbeans_html_json_impl_JSON$WSImpl_rcvr']; };
  m = c._socket = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_json_impl_JSON$WSImpl_socket'] = v; return this['fld_org_netbeans_html_json_impl_JSON$WSImpl_socket']; };
  m = c._prevURL = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_json_impl_JSON$WSImpl_prevURL'] = v; return this['fld_org_netbeans_html_json_impl_JSON$WSImpl_prevURL']; };
    m = CLS.cons__VLorg_netbeans_html_json_spi_WSTransfer_2Lorg_netbeans_html_json_impl_RcvrJSON_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
(refs_org_netbeans_html_json_impl_JSON$WS || (refs_org_netbeans_html_json_impl_JSON$WS = org_netbeans_html_json_impl_JSON$WS(false))).constructor.cons__VLorg_netbeans_html_json_impl_JSON$1_2.call(lcA0, null);
lcA0['fld_org_netbeans_html_json_impl_JSON$WSImpl_trans'] = lcA1;
lcA0['fld_org_netbeans_html_json_impl_JSON$WSImpl_rcvr'] = lcA2;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.send__VLnet_java_html_BrwsrCtx_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2 = function(lcA1, lcA2, lcA3, lcA4) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var lcA5 = lcA0['fld_org_netbeans_html_json_impl_JSON$WSImpl_socket'];
if ((lcA5) !== null) { gt = 82; break IF; }
if ((lcA4) === null) { gt = 44; break IF; }
var stA0 = new vm.java_lang_IllegalStateException;
var stA1 = stA0;var stA2 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"WebSocket is not opened yet. Call with null data, was: ");
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2(stA2,lcA4);
var stA2 = invoker.toString__Ljava_lang_String_2(stA2);
(refs_java_lang_IllegalStateException || (refs_java_lang_IllegalStateException = vm.java_lang_IllegalStateException(false))).constructor['cons__VLjava_lang_String_2'].call(stA1, stA2);
{ var stA0 = stA0; throw stA0; }
    }
    X_44: for (;;) { IF: if (gt <= 44) {

var stA0 = (refs_org_netbeans_html_json_impl_PropertyBindingAccessor || (refs_org_netbeans_html_json_impl_PropertyBindingAccessor = org_netbeans_html_json_impl_PropertyBindingAccessor(false))).createCall__Lorg_netbeans_html_json_spi_JSONCall_2Lnet_java_html_BrwsrCtx_2Lorg_netbeans_html_json_impl_RcvrJSON_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2(lcA1, lcA0['fld_org_netbeans_html_json_impl_JSON$WSImpl_rcvr'], lcA2, lcA3, null, "WebSocket", null);
var lcA6 = stA0;
var stA0 = lcA0;var stA1 = invoker.open__Ljava_lang_Object_2Ljava_lang_String_2Lorg_netbeans_html_json_spi_JSONCall_2(lcA0['fld_org_netbeans_html_json_impl_JSON$WSImpl_trans'],lcA3, lcA6);
stA0['fld_org_netbeans_html_json_impl_JSON$WSImpl_socket'] = stA1;
lcA0['fld_org_netbeans_html_json_impl_JSON$WSImpl_prevURL'] = lcA3;
return;
    }
    X_82: for (;;) { IF: if (gt <= 82) {

if ((lcA4) !== null) { gt = 104; break IF; }
invoker.close__VLjava_lang_Object_2(lcA0['fld_org_netbeans_html_json_impl_JSON$WSImpl_trans'],lcA5);
lcA0['fld_org_netbeans_html_json_impl_JSON$WSImpl_socket'] = null;
return;
    }
    X_104: for (;;) { IF: if (gt <= 104) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA0['fld_org_netbeans_html_json_impl_JSON$WSImpl_prevURL'],lcA3);
if ((stI0) != 0) { gt = 159; break IF; }
var stA0 = new vm.java_lang_IllegalStateException;
var stA1 = stA0;var stA2 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"Can't call to different URL ");
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,lcA3);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2," was: ");
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,lcA0['fld_org_netbeans_html_json_impl_JSON$WSImpl_prevURL']);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"! Close the socket by calling it will null data first!");
var stA2 = invoker.toString__Ljava_lang_String_2(stA2);
(refs_java_lang_IllegalStateException || (refs_java_lang_IllegalStateException = vm.java_lang_IllegalStateException(false))).constructor['cons__VLjava_lang_String_2'].call(stA1, stA2);
{ var stA0 = stA0; throw stA0; }
    }
    X_159: for (;;) { IF: if (gt <= 159) {

var stA0 = (refs_org_netbeans_html_json_impl_PropertyBindingAccessor || (refs_org_netbeans_html_json_impl_PropertyBindingAccessor = org_netbeans_html_json_impl_PropertyBindingAccessor(false))).createCall__Lorg_netbeans_html_json_spi_JSONCall_2Lnet_java_html_BrwsrCtx_2Lorg_netbeans_html_json_impl_RcvrJSON_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2(lcA1, lcA0['fld_org_netbeans_html_json_impl_JSON$WSImpl_rcvr'], lcA2, lcA0['fld_org_netbeans_html_json_impl_JSON$WSImpl_prevURL'], null, "WebSocket", lcA4);
var lcA6 = stA0;
invoker.send__VLjava_lang_Object_2Lorg_netbeans_html_json_spi_JSONCall_2(lcA0['fld_org_netbeans_html_json_impl_JSON$WSImpl_trans'],lcA5, lcA6);
return;

    }
}}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLorg_netbeans_html_json_spi_WSTransfer_2Lorg_netbeans_html_json_impl_RcvrJSON_2Lorg_netbeans_html_json_impl_JSON$1_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
c.constructor.cons__VLorg_netbeans_html_json_spi_WSTransfer_2Lorg_netbeans_html_json_impl_RcvrJSON_2.call(lcA0, lcA1, lcA2);
return;

};
    m.access = 4096;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_json_impl_JSON$WSImplfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_json_impl_JSON$WSImpl', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_json_impl_JSON$WSImplfillInstOf });
    org_netbeans_html_json_impl_JSON$WSImplfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/json/impl/JSON$WSImpl';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 48;
    CLS.$class.cnstr = CLS;
    var refs_org_netbeans_html_json_impl_JSON$WS;
    var refs_java_lang_StringBuilder;
    var refs_java_lang_IllegalStateException;
    var refs_org_netbeans_html_json_impl_PropertyBindingAccessor;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_org_netbeans_html_json_impl_JSON$WSImpl_trans'] = null;
    this['fld_org_netbeans_html_json_impl_JSON$WSImpl_rcvr'] = null;
    this['fld_org_netbeans_html_json_impl_JSON$WSImpl_socket'] = null;
    this['fld_org_netbeans_html_json_impl_JSON$WSImpl_prevURL'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_netbeans_html_json_impl_JSON$WSImpl = org_netbeans_html_json_impl_JSON$WSImpl;


function org_netbeans_html_json_spi_Proto$1WSrcvr() {
  var m;
  var CLS = org_netbeans_html_json_spi_Proto$1WSrcvr;
  if (!CLS.$class) {
    var pp = org_netbeans_html_json_impl_RcvrJSON(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$index = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_json_spi_Proto$1WSrcvr_val$index'] = v; return this['fld_org_netbeans_html_json_spi_Proto$1WSrcvr_val$index']; };
  m = c._this$0 = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_json_spi_Proto$1WSrcvr_this$0'] = v; return this['fld_org_netbeans_html_json_spi_Proto$1WSrcvr_this$0']; };
    m = CLS.cons__VLorg_netbeans_html_json_spi_Proto_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
lcA0['fld_org_netbeans_html_json_spi_Proto$1WSrcvr_this$0'] = lcA1;
lcA0['fld_org_netbeans_html_json_spi_Proto$1WSrcvr_val$index'] = lcI2;
(refs_org_netbeans_html_json_impl_RcvrJSON || (refs_org_netbeans_html_json_impl_RcvrJSON = org_netbeans_html_json_impl_RcvrJSON(false))).constructor.cons__V.call(lcA0);
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.onError__VLorg_netbeans_html_json_impl_RcvrJSON$MsgEvnt_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = (refs_org_netbeans_html_json_spi_Proto || (refs_org_netbeans_html_json_spi_Proto = org_netbeans_html_json_spi_Proto(false))).access$200__Lorg_netbeans_html_json_spi_Proto$Type_2Lorg_netbeans_html_json_spi_Proto_2(lcA0['fld_org_netbeans_html_json_spi_Proto$1WSrcvr_this$0']);
var stA1 = (refs_org_netbeans_html_json_spi_Proto || (refs_org_netbeans_html_json_spi_Proto = org_netbeans_html_json_spi_Proto(false))).access$100__Ljava_lang_Object_2Lorg_netbeans_html_json_spi_Proto_2(lcA0['fld_org_netbeans_html_json_spi_Proto$1WSrcvr_this$0']);
var stI2 = lcA0['fld_org_netbeans_html_json_spi_Proto$1WSrcvr_val$index'];var stI3 = 2;var stA4 = lcA1.getException__Ljava_lang_Exception_2();
invoker.onMessage__VLjava_lang_Object_2IILjava_lang_Object_2(stA0,stA1, stI2, stI3, stA4);
return;

};
    m.access = 4;
    m.cls = CLS;
    m = c.onMessage__VLorg_netbeans_html_json_impl_RcvrJSON$MsgEvnt_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = (refs_org_netbeans_html_json_spi_Proto || (refs_org_netbeans_html_json_spi_Proto = org_netbeans_html_json_spi_Proto(false))).access$200__Lorg_netbeans_html_json_spi_Proto$Type_2Lorg_netbeans_html_json_spi_Proto_2(lcA0['fld_org_netbeans_html_json_spi_Proto$1WSrcvr_this$0']);
var stA1 = (refs_org_netbeans_html_json_spi_Proto || (refs_org_netbeans_html_json_spi_Proto = org_netbeans_html_json_spi_Proto(false))).access$100__Ljava_lang_Object_2Lorg_netbeans_html_json_spi_Proto_2(lcA0['fld_org_netbeans_html_json_spi_Proto$1WSrcvr_this$0']);
var stI2 = lcA0['fld_org_netbeans_html_json_spi_Proto$1WSrcvr_val$index'];var stI3 = 1;var stA4 = lcA1.getValues___3Ljava_lang_Object_2();
invoker.onMessage__VLjava_lang_Object_2IILjava_lang_Object_2(stA0,stA1, stI2, stI3, stA4);
return;

};
    m.access = 4;
    m.cls = CLS;
    m = c.onClose__VLorg_netbeans_html_json_impl_RcvrJSON$MsgEvnt_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = (refs_org_netbeans_html_json_spi_Proto || (refs_org_netbeans_html_json_spi_Proto = org_netbeans_html_json_spi_Proto(false))).access$200__Lorg_netbeans_html_json_spi_Proto$Type_2Lorg_netbeans_html_json_spi_Proto_2(lcA0['fld_org_netbeans_html_json_spi_Proto$1WSrcvr_this$0']);
var stA1 = (refs_org_netbeans_html_json_spi_Proto || (refs_org_netbeans_html_json_spi_Proto = org_netbeans_html_json_spi_Proto(false))).access$100__Ljava_lang_Object_2Lorg_netbeans_html_json_spi_Proto_2(lcA0['fld_org_netbeans_html_json_spi_Proto$1WSrcvr_this$0']);
invoker.onMessage__VLjava_lang_Object_2IILjava_lang_Object_2(stA0,stA1, lcA0['fld_org_netbeans_html_json_spi_Proto$1WSrcvr_val$index'], 3, null);
return;

};
    m.access = 4;
    m.cls = CLS;
    m = c.onOpen__VLorg_netbeans_html_json_impl_RcvrJSON$MsgEvnt_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = (refs_org_netbeans_html_json_spi_Proto || (refs_org_netbeans_html_json_spi_Proto = org_netbeans_html_json_spi_Proto(false))).access$200__Lorg_netbeans_html_json_spi_Proto$Type_2Lorg_netbeans_html_json_spi_Proto_2(lcA0['fld_org_netbeans_html_json_spi_Proto$1WSrcvr_this$0']);
var stA1 = (refs_org_netbeans_html_json_spi_Proto || (refs_org_netbeans_html_json_spi_Proto = org_netbeans_html_json_spi_Proto(false))).access$100__Ljava_lang_Object_2Lorg_netbeans_html_json_spi_Proto_2(lcA0['fld_org_netbeans_html_json_spi_Proto$1WSrcvr_this$0']);
invoker.onMessage__VLjava_lang_Object_2IILjava_lang_Object_2(stA0,stA1, lcA0['fld_org_netbeans_html_json_spi_Proto$1WSrcvr_val$index'], 0, null);
return;

};
    m.access = 4;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_json_spi_Proto$1WSrcvrfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_json_spi_Proto$1WSrcvr', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_json_spi_Proto$1WSrcvrfillInstOf });
    org_netbeans_html_json_spi_Proto$1WSrcvrfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/json/spi/Proto$1WSrcvr';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 65568;
    CLS.$class.cnstr = CLS;
    var refs_org_netbeans_html_json_impl_RcvrJSON;
    var refs_org_netbeans_html_json_spi_Proto;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_org_netbeans_html_json_spi_Proto$1WSrcvr_val$index'] = 0;
    this['fld_org_netbeans_html_json_spi_Proto$1WSrcvr_this$0'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_netbeans_html_json_spi_Proto$1WSrcvr = org_netbeans_html_json_spi_Proto$1WSrcvr;


function org_netbeans_html_json_impl_RcvrJSON() {
  var m;
  var CLS = org_netbeans_html_json_impl_RcvrJSON;
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
    m = c.onOpen__VLorg_netbeans_html_json_impl_RcvrJSON$MsgEvnt_2 = function(lcA1) {
  var  lcA0 = this;
return;

};
    m.access = 4;
    m.cls = CLS;
    m = c.onMessage__VLorg_netbeans_html_json_impl_RcvrJSON$MsgEvnt_2 = function(lcA1) {
};
    m.access = 1028;
    m.cls = CLS;
    m = c.onClose__VLorg_netbeans_html_json_impl_RcvrJSON$MsgEvnt_2 = function(lcA1) {
  var  lcA0 = this;
return;

};
    m.access = 4;
    m.cls = CLS;
    m = c.onError__VLorg_netbeans_html_json_impl_RcvrJSON$MsgEvnt_2 = function(lcA1) {
};
    m.access = 1028;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_json_impl_RcvrJSONfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_json_impl_RcvrJSON', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_json_impl_RcvrJSONfillInstOf });
    org_netbeans_html_json_impl_RcvrJSONfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/json/impl/RcvrJSON';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 1057;
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
vm.org_netbeans_html_json_impl_RcvrJSON = org_netbeans_html_json_impl_RcvrJSON;


function org_netbeans_html_json_impl_PropertyBindingAccessor() {
  var m;
  var CLS = org_netbeans_html_json_impl_PropertyBindingAccessor;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_DEFAULT'] = null;
  m = c._DEFAULT = function (v) {  if (arguments.length == 1) CLS['fld_DEFAULT'] = v; return CLS['fld_DEFAULT']; };
    m = CLS.cons__V = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((c._DEFAULT()) === null) { gt = 18; break IF; }
var stA0 = new vm.java_lang_IllegalStateException;
(refs_java_lang_IllegalStateException || (refs_java_lang_IllegalStateException = vm.java_lang_IllegalStateException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }
    }
    X_18: for (;;) { IF: if (gt <= 18) {

c._DEFAULT(lcA0);
return;

    }
}}
};
CLS['cons__V'] = m;

    m.access = 4;
    m.cls = CLS;
    m = c.newBinding__Lorg_netbeans_html_json_spi_PropertyBinding_2Lorg_netbeans_html_json_spi_Proto$Type_2Lorg_netbeans_html_json_impl_Bindings_2Ljava_lang_String_2ILjava_lang_Object_2B = function(lcA1, lcA2, lcA3, lcI4, lcA5, lcI6) {
};
    m.access = 1028;
    m.cls = CLS;
    m = c.newCall__Lorg_netbeans_html_json_spi_JSONCall_2Lnet_java_html_BrwsrCtx_2Lorg_netbeans_html_json_impl_RcvrJSON_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2 = function(lcA1, lcA2, lcA3, lcA4, lcA5, lcA6, lcA7) {
};
    m.access = 1028;
    m.cls = CLS;
    m = c.bindings__Lorg_netbeans_html_json_impl_Bindings_2Lorg_netbeans_html_json_spi_Proto_2ZLjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
};
    m.access = 1028;
    m.cls = CLS;
    m = c.notifyChange__VLorg_netbeans_html_json_spi_Proto_2I = function(lcA1, lcI2) {
};
    m.access = 1028;
    m.cls = CLS;
    m = c.findProto__Lorg_netbeans_html_json_spi_Proto_2Lorg_netbeans_html_json_spi_Proto$Type_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
};
    m.access = 1028;
    m.cls = CLS;
    m = c.cloneTo__Ljava_lang_Object_2Lorg_netbeans_html_json_spi_Proto$Type_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2, lcA3) {
};
    m.access = 1028;
    m.cls = CLS;
    m = c.read__Ljava_lang_Object_2Lorg_netbeans_html_json_spi_Proto$Type_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2, lcA3) {
};
    m.access = 1028;
    m.cls = CLS;
    m = c.getBindings__Lorg_netbeans_html_json_impl_Bindings_2Lorg_netbeans_html_json_spi_Proto_2ZLjava_lang_Object_2 = function(lcA0, lcI1, lcA2) {
var stA0 = c._DEFAULT().bindings__Lorg_netbeans_html_json_impl_Bindings_2Lorg_netbeans_html_json_spi_Proto_2ZLjava_lang_Object_2(lcA0, lcI1, lcA2);
return stA0;

};
    m.access = 8;
    m.cls = CLS;
    m = c.notifyProtoChange__VLorg_netbeans_html_json_spi_Proto_2I = function(lcA0, lcI1) {
c._DEFAULT().notifyChange__VLorg_netbeans_html_json_spi_Proto_2I(lcA0, lcI1);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.create__Lorg_netbeans_html_json_spi_PropertyBinding_2Lorg_netbeans_html_json_spi_Proto$Type_2Lorg_netbeans_html_json_impl_Bindings_2Ljava_lang_String_2ILjava_lang_Object_2B = function(lcA0, lcA1, lcA2, lcI3, lcA4, lcI5) {
var stA0 = c._DEFAULT().newBinding__Lorg_netbeans_html_json_spi_PropertyBinding_2Lorg_netbeans_html_json_spi_Proto$Type_2Lorg_netbeans_html_json_impl_Bindings_2Ljava_lang_String_2ILjava_lang_Object_2B(lcA0, lcA1, lcA2, lcI3, lcA4, lcI5);
return stA0;

};
    m.access = 8;
    m.cls = CLS;
    m = c.createCall__Lorg_netbeans_html_json_spi_JSONCall_2Lnet_java_html_BrwsrCtx_2Lorg_netbeans_html_json_impl_RcvrJSON_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2 = function(lcA0, lcA1, lcA2, lcA3, lcA4, lcA5, lcA6) {
var stA0 = c._DEFAULT().newCall__Lorg_netbeans_html_json_spi_JSONCall_2Lnet_java_html_BrwsrCtx_2Lorg_netbeans_html_json_impl_RcvrJSON_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2(lcA0, lcA1, lcA2, lcA3, lcA4, lcA5, lcA6);
return stA0;

};
    m.access = 9;
    m.cls = CLS;
    m = c.protoFor__Lorg_netbeans_html_json_spi_Proto_2Lorg_netbeans_html_json_spi_Proto$Type_2Ljava_lang_Object_2 = function(lcA0, lcA1) {
var stA0 = c._DEFAULT().findProto__Lorg_netbeans_html_json_spi_Proto_2Lorg_netbeans_html_json_spi_Proto$Type_2Ljava_lang_Object_2(lcA0, lcA1);
return stA0;

};
    m.access = 8;
    m.cls = CLS;
    m = c.clone__Ljava_lang_Object_2Lorg_netbeans_html_json_spi_Proto$Type_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2 = function(lcA0, lcA1, lcA2) {
var stA0 = c._DEFAULT().cloneTo__Ljava_lang_Object_2Lorg_netbeans_html_json_spi_Proto$Type_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2(lcA0, lcA1, lcA2);
return stA0;

};
    m.access = 8;
    m.cls = CLS;
    m = c.readFrom__Ljava_lang_Object_2Lorg_netbeans_html_json_spi_Proto$Type_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA0, lcA1, lcA2) {
var stA0 = c._DEFAULT().read__Ljava_lang_Object_2Lorg_netbeans_html_json_spi_Proto$Type_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2(lcA0, lcA1, lcA2);
return stA0;

};
    m.access = 8;
    m.cls = CLS;
    m = c.class__V = function() {
(refs_org_netbeans_html_json_impl_JSON || (refs_org_netbeans_html_json_impl_JSON = org_netbeans_html_json_impl_JSON(false))).initClass__VLjava_lang_Class_2((refs_org_netbeans_html_json_spi_PropertyBinding || (refs_org_netbeans_html_json_spi_PropertyBinding = org_netbeans_html_json_spi_PropertyBinding(false))).constructor.$class);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_json_impl_PropertyBindingAccessorfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_json_impl_PropertyBindingAccessor', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_json_impl_PropertyBindingAccessorfillInstOf });
    org_netbeans_html_json_impl_PropertyBindingAccessorfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/json/impl/PropertyBindingAccessor';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 1057;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_java_lang_IllegalStateException;
    var refs_org_netbeans_html_json_spi_PropertyBinding;
    var refs_org_netbeans_html_json_impl_JSON;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_netbeans_html_json_impl_PropertyBindingAccessor = org_netbeans_html_json_impl_PropertyBindingAccessor;


function org_netbeans_html_json_spi_Proto$1Rcvr() {
  var m;
  var CLS = org_netbeans_html_json_spi_Proto$1Rcvr;
  if (!CLS.$class) {
    var pp = org_netbeans_html_json_impl_RcvrJSON(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$index = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_json_spi_Proto$1Rcvr_val$index'] = v; return this['fld_org_netbeans_html_json_spi_Proto$1Rcvr_val$index']; };
  m = c._val$params = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_json_spi_Proto$1Rcvr_val$params'] = v; return this['fld_org_netbeans_html_json_spi_Proto$1Rcvr_val$params']; };
  m = c._this$0 = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_json_spi_Proto$1Rcvr_this$0'] = v; return this['fld_org_netbeans_html_json_spi_Proto$1Rcvr_this$0']; };
    m = CLS.cons__VLorg_netbeans_html_json_spi_Proto_2I_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;
lcA0['fld_org_netbeans_html_json_spi_Proto$1Rcvr_this$0'] = lcA1;
lcA0['fld_org_netbeans_html_json_spi_Proto$1Rcvr_val$index'] = lcI2;
lcA0['fld_org_netbeans_html_json_spi_Proto$1Rcvr_val$params'] = lcA3;
(refs_org_netbeans_html_json_impl_RcvrJSON || (refs_org_netbeans_html_json_impl_RcvrJSON = org_netbeans_html_json_impl_RcvrJSON(false))).constructor.cons__V.call(lcA0);
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.onMessage__VLorg_netbeans_html_json_impl_RcvrJSON$MsgEvnt_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = (refs_org_netbeans_html_json_spi_Proto || (refs_org_netbeans_html_json_spi_Proto = org_netbeans_html_json_spi_Proto(false))).access$200__Lorg_netbeans_html_json_spi_Proto$Type_2Lorg_netbeans_html_json_spi_Proto_2(lcA0['fld_org_netbeans_html_json_spi_Proto$1Rcvr_this$0']);
var stA1 = (refs_org_netbeans_html_json_spi_Proto || (refs_org_netbeans_html_json_spi_Proto = org_netbeans_html_json_spi_Proto(false))).access$100__Ljava_lang_Object_2Lorg_netbeans_html_json_spi_Proto_2(lcA0['fld_org_netbeans_html_json_spi_Proto$1Rcvr_this$0']);
var stI2 = lcA0['fld_org_netbeans_html_json_spi_Proto$1Rcvr_val$index'];var stI3 = 1;var stA4 = lcA1.getValues___3Ljava_lang_Object_2();
invoker.onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2(stA0,stA1, stI2, stI3, stA4, lcA0['fld_org_netbeans_html_json_spi_Proto$1Rcvr_val$params']);
return;

};
    m.access = 4;
    m.cls = CLS;
    m = c.onError__VLorg_netbeans_html_json_impl_RcvrJSON$MsgEvnt_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = (refs_org_netbeans_html_json_spi_Proto || (refs_org_netbeans_html_json_spi_Proto = org_netbeans_html_json_spi_Proto(false))).access$200__Lorg_netbeans_html_json_spi_Proto$Type_2Lorg_netbeans_html_json_spi_Proto_2(lcA0['fld_org_netbeans_html_json_spi_Proto$1Rcvr_this$0']);
var stA1 = (refs_org_netbeans_html_json_spi_Proto || (refs_org_netbeans_html_json_spi_Proto = org_netbeans_html_json_spi_Proto(false))).access$100__Ljava_lang_Object_2Lorg_netbeans_html_json_spi_Proto_2(lcA0['fld_org_netbeans_html_json_spi_Proto$1Rcvr_this$0']);
var stI2 = lcA0['fld_org_netbeans_html_json_spi_Proto$1Rcvr_val$index'];var stI3 = 2;var stA4 = lcA1.getException__Ljava_lang_Exception_2();
invoker.onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2(stA0,stA1, stI2, stI3, stA4, lcA0['fld_org_netbeans_html_json_spi_Proto$1Rcvr_val$params']);
return;

};
    m.access = 4;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_json_spi_Proto$1RcvrfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_json_spi_Proto$1Rcvr', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_json_spi_Proto$1RcvrfillInstOf });
    org_netbeans_html_json_spi_Proto$1RcvrfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/json/spi/Proto$1Rcvr';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 65568;
    CLS.$class.cnstr = CLS;
    var refs_org_netbeans_html_json_impl_RcvrJSON;
    var refs_org_netbeans_html_json_spi_Proto;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_org_netbeans_html_json_spi_Proto$1Rcvr_val$index'] = 0;
    this['fld_org_netbeans_html_json_spi_Proto$1Rcvr_val$params'] = null;
    this['fld_org_netbeans_html_json_spi_Proto$1Rcvr_this$0'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_netbeans_html_json_spi_Proto$1Rcvr = org_netbeans_html_json_spi_Proto$1Rcvr;


function org_netbeans_html_json_impl_JSONList() {
  var m;
  var CLS = org_netbeans_html_json_impl_JSONList;
  if (!CLS.$class) {
    var pp = org_netbeans_html_json_impl_SimpleList(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._proto = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_json_impl_JSONList_proto'] = v; return this['fld_org_netbeans_html_json_impl_JSONList_proto']; };
  m = c._name = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_json_impl_JSONList_name'] = v; return this['fld_org_netbeans_html_json_impl_JSONList_name']; };
  m = c._deps = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_json_impl_JSONList_deps'] = v; return this['fld_org_netbeans_html_json_impl_JSONList_deps']; };
  m = c._index = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_json_impl_JSONList_index'] = v; return this['fld_org_netbeans_html_json_impl_JSONList_index']; };
    m = CLS.cons__VLorg_netbeans_html_json_spi_Proto_2Ljava_lang_String_2I_3Ljava_lang_String_2 = function(lcA1, lcA2, lcI3, lcA4) {
  var  lcA0 = this;
(refs_org_netbeans_html_json_impl_SimpleList || (refs_org_netbeans_html_json_impl_SimpleList = org_netbeans_html_json_impl_SimpleList(false))).constructor.cons__V.call(lcA0);
lcA0['fld_org_netbeans_html_json_impl_JSONList_proto'] = lcA1;
lcA0['fld_org_netbeans_html_json_impl_JSONList_name'] = lcA2;
lcA0['fld_org_netbeans_html_json_impl_JSONList_deps'] = lcA4;
lcA0['fld_org_netbeans_html_json_impl_JSONList_index'] = lcI3;
return;

};
    m.access = 129;
    m.cls = CLS;
    m = c.init__VLjava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((lcA1) === null) { gt = 13; break IF; }
var stI0 = (refs_java_lang_reflect_Array || (refs_java_lang_reflect_Array = vm.java_lang_reflect_Array(false)))['getLength__ILjava_lang_Object_2'](lcA1);
var stI1 = stI0;
var lcI2 = stI1;
if ((stI0) != 0) { gt = 14; break IF; }
    }
    X_13: for (;;) { IF: if (gt <= 13) {
return;
    }
    X_14: for (;;) { IF: if (gt <= 14) {

var lcI3 = 0;
    }
    X_16: for (;;) { IF: if (gt <= 16) {

if ((lcI3) >= (lcI2)) { gt = 41; break IF; }
var stA0 = (refs_java_lang_reflect_Array || (refs_java_lang_reflect_Array = vm.java_lang_reflect_Array(false)))['get__Ljava_lang_Object_2Ljava_lang_Object_2I'](lcA1, lcI3);
var lcA4 = stA0;
var stI0 = (refs_org_netbeans_html_json_impl_SimpleList || (refs_org_netbeans_html_json_impl_SimpleList = org_netbeans_html_json_impl_SimpleList(false))).add__ZLjava_lang_Object_2.call(lcA0, lcA4);
lcI3++;
{ gt = 0; continue X_16; }
    }
    X_41: for (;;) { IF: if (gt <= 41) {
return;

    }
}}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.init__VLjava_util_Collection_2Ljava_lang_Object_2 = function(lcA0, lcA1) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((lcA1) === null) { gt = 13; break IF; }
var stI0 = (refs_java_lang_reflect_Array || (refs_java_lang_reflect_Array = vm.java_lang_reflect_Array(false)))['getLength__ILjava_lang_Object_2'](lcA1);
var stI1 = stI0;
var lcI2 = stI1;
if ((stI0) != 0) { gt = 14; break IF; }
    }
    X_13: for (;;) { IF: if (gt <= 13) {
return;
    }
    X_14: for (;;) { IF: if (gt <= 14) {

var lcI3 = 0;
    }
    X_16: for (;;) { IF: if (gt <= 16) {

if ((lcI3) >= (lcI2)) { gt = 43; break IF; }
var stA0 = (refs_java_lang_reflect_Array || (refs_java_lang_reflect_Array = vm.java_lang_reflect_Array(false)))['get__Ljava_lang_Object_2Ljava_lang_Object_2I'](lcA1, lcI3);
var lcA4 = stA0;
var stI0 = invoker.add__ZLjava_lang_Object_2(lcA0,lcA4);
lcI3++;
{ gt = 0; continue X_16; }
    }
    X_43: for (;;) { IF: if (gt <= 43) {
return;

    }
}}}}}
};
    m.access = 9;
    m.cls = CLS;
    m = c.add__ZLjava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
c.prepareChange__V.call(lcA0);
var stI0 = (refs_org_netbeans_html_json_impl_SimpleList || (refs_org_netbeans_html_json_impl_SimpleList = org_netbeans_html_json_impl_SimpleList(false))).add__ZLjava_lang_Object_2.call(lcA0, lcA1);
var lcI2 = stI0;
c.notifyChange__V.call(lcA0);
return lcI2;

};
c['add__ZLjava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.addAll__ZLjava_util_Collection_2 = function(lcA1) {
  var  lcA0 = this;
c.prepareChange__V.call(lcA0);
var stI0 = (refs_org_netbeans_html_json_impl_SimpleList || (refs_org_netbeans_html_json_impl_SimpleList = org_netbeans_html_json_impl_SimpleList(false))).addAll__ZLjava_util_Collection_2.call(lcA0, lcA1);
var lcI2 = stI0;
c.notifyChange__V.call(lcA0);
return lcI2;

};
c['addAll__ZLjava_util_Collection_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.addAll__ZILjava_util_Collection_2 = function(lcI1, lcA2) {
  var  lcA0 = this;
c.prepareChange__V.call(lcA0);
var stI0 = (refs_org_netbeans_html_json_impl_SimpleList || (refs_org_netbeans_html_json_impl_SimpleList = org_netbeans_html_json_impl_SimpleList(false))).addAll__ZILjava_util_Collection_2.call(lcA0, lcI1, lcA2);
var lcI3 = stI0;
c.notifyChange__V.call(lcA0);
return lcI3;

};
c['addAll__ZILjava_util_Collection_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.fastReplace__VLjava_util_Collection_2 = function(lcA1) {
  var  lcA0 = this;
c.prepareChange__V.call(lcA0);
(refs_org_netbeans_html_json_impl_SimpleList || (refs_org_netbeans_html_json_impl_SimpleList = org_netbeans_html_json_impl_SimpleList(false))).clear__V.call(lcA0);
var stI0 = (refs_org_netbeans_html_json_impl_SimpleList || (refs_org_netbeans_html_json_impl_SimpleList = org_netbeans_html_json_impl_SimpleList(false))).addAll__ZLjava_util_Collection_2.call(lcA0, lcA1);
c.notifyChange__V.call(lcA0);
return;

};
    m.access = 1;
    m.cls = CLS;
    m = c.remove__ZLjava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
c.prepareChange__V.call(lcA0);
var stI0 = (refs_org_netbeans_html_json_impl_SimpleList || (refs_org_netbeans_html_json_impl_SimpleList = org_netbeans_html_json_impl_SimpleList(false))).remove__ZLjava_lang_Object_2.call(lcA0, lcA1);
var lcI2 = stI0;
c.notifyChange__V.call(lcA0);
return lcI2;

};
c['remove__ZLjava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clear__V = function() {
  var  lcA0 = this;
c.prepareChange__V.call(lcA0);
(refs_org_netbeans_html_json_impl_SimpleList || (refs_org_netbeans_html_json_impl_SimpleList = org_netbeans_html_json_impl_SimpleList(false))).clear__V.call(lcA0);
c.notifyChange__V.call(lcA0);
return;

};
c['clear__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.removeAll__ZLjava_util_Collection_2 = function(lcA1) {
  var  lcA0 = this;
c.prepareChange__V.call(lcA0);
var stI0 = (refs_org_netbeans_html_json_impl_SimpleList || (refs_org_netbeans_html_json_impl_SimpleList = org_netbeans_html_json_impl_SimpleList(false))).removeAll__ZLjava_util_Collection_2.call(lcA0, lcA1);
var lcI2 = stI0;
c.notifyChange__V.call(lcA0);
return lcI2;

};
c['removeAll__ZLjava_util_Collection_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.sort__VLjava_util_Comparator_2 = function(lcA1) {
  var  lcA0 = this;
(refs_org_netbeans_html_json_impl_SimpleList || (refs_org_netbeans_html_json_impl_SimpleList = org_netbeans_html_json_impl_SimpleList(false))).sort__VLjava_util_Comparator_2.call(lcA0, lcA1);
c.notifyChange__V.call(lcA0);
return;

};
    m.access = 1;
    m.cls = CLS;
    m = c.retainAll__ZLjava_util_Collection_2 = function(lcA1) {
  var  lcA0 = this;
c.prepareChange__V.call(lcA0);
var stI0 = (refs_org_netbeans_html_json_impl_SimpleList || (refs_org_netbeans_html_json_impl_SimpleList = org_netbeans_html_json_impl_SimpleList(false))).retainAll__ZLjava_util_Collection_2.call(lcA0, lcA1);
var lcI2 = stI0;
c.notifyChange__V.call(lcA0);
return lcI2;

};
c['retainAll__ZLjava_util_Collection_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.set__Ljava_lang_Object_2ILjava_lang_Object_2 = function(lcI1, lcA2) {
  var  lcA0 = this;
c.prepareChange__V.call(lcA0);
var stA0 = (refs_org_netbeans_html_json_impl_SimpleList || (refs_org_netbeans_html_json_impl_SimpleList = org_netbeans_html_json_impl_SimpleList(false))).set__Ljava_lang_Object_2ILjava_lang_Object_2.call(lcA0, lcI1, lcA2);
var lcA3 = stA0;
c.notifyChange__V.call(lcA0);
return lcA3;

};
c['set__Ljava_lang_Object_2ILjava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.add__VILjava_lang_Object_2 = function(lcI1, lcA2) {
  var  lcA0 = this;
c.prepareChange__V.call(lcA0);
(refs_org_netbeans_html_json_impl_SimpleList || (refs_org_netbeans_html_json_impl_SimpleList = org_netbeans_html_json_impl_SimpleList(false))).add__VILjava_lang_Object_2.call(lcA0, lcI1, lcA2);
c.notifyChange__V.call(lcA0);
return;

};
c['add__VILjava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.remove__Ljava_lang_Object_2I = function(lcI1) {
  var  lcA0 = this;
c.prepareChange__V.call(lcA0);
var stA0 = (refs_org_netbeans_html_json_impl_SimpleList || (refs_org_netbeans_html_json_impl_SimpleList = org_netbeans_html_json_impl_SimpleList(false))).remove__Ljava_lang_Object_2I.call(lcA0, lcI1);
var lcA2 = stA0;
c.notifyChange__V.call(lcA0);
return lcA2;

};
c['remove__Ljava_lang_Object_2I'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clearImpl__VII = function(lcI1, lcI2) {
  var  lcA0 = this;
(refs_org_netbeans_html_json_impl_SimpleList || (refs_org_netbeans_html_json_impl_SimpleList = org_netbeans_html_json_impl_SimpleList(false))).clearImpl__VII.call(lcA0, lcI1, lcI2);
c.notifyChange__V.call(lcA0);
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.toString__Ljava_lang_String_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = lcA0.iterator__Ljava_util_Iterator_2();
var lcA1 = stA0;
var stI0 = invoker.hasNext__Z(lcA1);
if ((stI0) != 0) { gt = 17; break IF; }
return "[]";
    }
    X_17: for (;;) { IF: if (gt <= 17) {

var lcA2 = "";
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var lcA3 = stA0;
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA3,(91));
    }
    X_35: for (;;) { IF: if (gt <= 35) {

var stI0 = invoker.hasNext__Z(lcA1);
if ((stI0) == 0) { gt = 74; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA1);
var lcA4 = stA0;
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA3,lcA2);
var stA0 = lcA3;var stA1 = (refs_org_netbeans_html_json_impl_JSON || (refs_org_netbeans_html_json_impl_JSON = org_netbeans_html_json_impl_JSON(false))).toJSON__Ljava_lang_String_2Ljava_lang_Object_2(lcA4);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var lcA2 = ",";
{ gt = 0; continue X_35; }
    }
    X_74: for (;;) { IF: if (gt <= 74) {

var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA3,(93));
var stA0 = invoker.toString__Ljava_lang_String_2(lcA3);
return stA0;

    }
}}}}
};
c['toString__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.prepareChange__V = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((lcA0['fld_org_netbeans_html_json_impl_JSONList_index']) != (-2147483648)) { gt = 30; break IF; }
try {
lcA0['fld_org_netbeans_html_json_impl_JSONList_proto'].initTo__VLjava_util_Collection_2Ljava_lang_Object_2(null, null);
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_IllegalStateException']) {var stA0 = e;{ gt = 21; break IF; }}
throw e;
}{ gt = 30; break IF; }
    }
    X_21: for (;;) { IF: if (gt <= 21) {
var lcA1 = stA0;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }
    }
    X_30: for (;;) { IF: if (gt <= 30) {
return;

    }
}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.notifyChange__V = function() {
  var  lcA0 = this;
var stA0 = lcA0['fld_org_netbeans_html_json_impl_JSONList_proto'].getContext__Lnet_java_html_BrwsrCtx_2();
var stA1 = new org_netbeans_html_json_impl_JSONList$1;
(refs_org_netbeans_html_json_impl_JSONList$1 || (refs_org_netbeans_html_json_impl_JSONList$1 = org_netbeans_html_json_impl_JSONList$1(false))).constructor.cons__VLorg_netbeans_html_json_impl_JSONList_2.call(stA1, lcA0);
invoker.execute__VLjava_lang_Runnable_2(stA0,stA1);
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.clone__Lorg_netbeans_html_json_impl_JSONList_2 = function() {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.koData__Ljava_lang_Object_2Ljava_util_Collection_2Lorg_netbeans_html_json_impl_Bindings_2 = function(lcA0, lcA1) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = lcA0;var stI1 = invoker.size__I(lcA0);
var stA1 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, stI1);
var stA0 = invoker.toArray___3Ljava_lang_Object_2_3Ljava_lang_Object_2(stA0,stA1);
var lcA2 = stA0;
var lcI3 = 0;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

if ((lcI3) >= ((lcA2).length)) { gt = 49; break IF; }
var stA0 = (refs_org_netbeans_html_json_impl_JSON || (refs_org_netbeans_html_json_impl_JSON = org_netbeans_html_json_impl_JSON(false))).find__Ljava_lang_Object_2Ljava_lang_Object_2Lorg_netbeans_html_json_impl_Bindings_2((lcA2[lcI3] || Array.at(lcA2, lcI3)), lcA1);
var lcA4 = stA0;
if ((lcA4) === null) { gt = 43; break IF; }
Array.at(lcA2, lcI3, lcA4);
    }
    X_43: for (;;) { IF: if (gt <= 43) {
lcI3++;
{ gt = 0; continue X_18; }
    }
    X_49: for (;;) { IF: if (gt <= 49) {

var stA0 = lcA1.wrapArray__Ljava_lang_Object_2_3Ljava_lang_Object_2(lcA2);
return stA0;

    }
}}}}
};
    m.access = 24;
    m.cls = CLS;
    m = c.koData__Ljava_lang_Object_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = (refs_org_netbeans_html_json_impl_PropertyBindingAccessor || (refs_org_netbeans_html_json_impl_PropertyBindingAccessor = org_netbeans_html_json_impl_PropertyBindingAccessor(false))).getBindings__Lorg_netbeans_html_json_impl_Bindings_2Lorg_netbeans_html_json_spi_Proto_2ZLjava_lang_Object_2(lcA0['fld_org_netbeans_html_json_impl_JSONList_proto'], 1, null);
var stA0 = c.koData__Ljava_lang_Object_2Ljava_util_Collection_2Lorg_netbeans_html_json_impl_Bindings_2(stA0, stA1);
return stA0;

};
    m.access = 16;
    m.cls = CLS;
    m = c.clone__Ljava_lang_Object_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0.clone__Lorg_netbeans_html_json_impl_JSONList_2();
return stA0;

};
c['clone__Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.access$000__Ljava_lang_String_2Lorg_netbeans_html_json_impl_JSONList_2 = function(lcA0) {
return lcA0['fld_org_netbeans_html_json_impl_JSONList_name'];

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$100__Lorg_netbeans_html_json_spi_Proto_2Lorg_netbeans_html_json_impl_JSONList_2 = function(lcA0) {
return lcA0['fld_org_netbeans_html_json_impl_JSONList_proto'];

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$200___3Ljava_lang_String_2Lorg_netbeans_html_json_impl_JSONList_2 = function(lcA0) {
return lcA0['fld_org_netbeans_html_json_impl_JSONList_deps'];

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$300__ILorg_netbeans_html_json_impl_JSONList_2 = function(lcA0) {
return lcA0['fld_org_netbeans_html_json_impl_JSONList_index'];

};
    m.access = 4104;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_json_impl_JSONListfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_json_impl_JSONList', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_json_impl_JSONListfillInstOf });
    org_netbeans_html_json_impl_JSONListfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/json/impl/JSONList';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    var refs_org_netbeans_html_json_impl_SimpleList;
    var refs_java_lang_reflect_Array;
    var refs_java_lang_StringBuilder;
    var refs_org_netbeans_html_json_impl_JSON;
    var refs_java_lang_UnsupportedOperationException;
    var refs_org_netbeans_html_json_impl_JSONList$1;
    var refs_org_netbeans_html_json_impl_PropertyBindingAccessor;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_org_netbeans_html_json_impl_JSONList_proto'] = null;
    this['fld_org_netbeans_html_json_impl_JSONList_name'] = null;
    this['fld_org_netbeans_html_json_impl_JSONList_deps'] = null;
    this['fld_org_netbeans_html_json_impl_JSONList_index'] = 0;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_netbeans_html_json_impl_JSONList = org_netbeans_html_json_impl_JSONList;


function org_netbeans_html_json_impl_JSONList$1() {
  var m;
  var CLS = org_netbeans_html_json_impl_JSONList$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._this$0 = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_json_impl_JSONList$1_this$0'] = v; return this['fld_org_netbeans_html_json_impl_JSONList$1_this$0']; };
    m = CLS.cons__VLorg_netbeans_html_json_impl_JSONList_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_org_netbeans_html_json_impl_JSONList$1_this$0'] = lcA1;
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.run__V = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = (refs_org_netbeans_html_json_impl_JSONList || (refs_org_netbeans_html_json_impl_JSONList = org_netbeans_html_json_impl_JSONList(false))).access$100__Lorg_netbeans_html_json_spi_Proto_2Lorg_netbeans_html_json_impl_JSONList_2(lcA0['fld_org_netbeans_html_json_impl_JSONList$1_this$0']);
var stA1 = (refs_org_netbeans_html_json_impl_JSONList || (refs_org_netbeans_html_json_impl_JSONList = org_netbeans_html_json_impl_JSONList(false))).access$000__Ljava_lang_String_2Lorg_netbeans_html_json_impl_JSONList_2(lcA0['fld_org_netbeans_html_json_impl_JSONList$1_this$0']);
stA0.valueHasMutated__VLjava_lang_String_2(stA1);
var stA0 = (refs_org_netbeans_html_json_impl_JSONList || (refs_org_netbeans_html_json_impl_JSONList = org_netbeans_html_json_impl_JSONList(false))).access$100__Lorg_netbeans_html_json_spi_Proto_2Lorg_netbeans_html_json_impl_JSONList_2(lcA0['fld_org_netbeans_html_json_impl_JSONList$1_this$0']);
var stA0 = (refs_org_netbeans_html_json_impl_PropertyBindingAccessor || (refs_org_netbeans_html_json_impl_PropertyBindingAccessor = org_netbeans_html_json_impl_PropertyBindingAccessor(false))).getBindings__Lorg_netbeans_html_json_impl_Bindings_2Lorg_netbeans_html_json_spi_Proto_2ZLjava_lang_Object_2(stA0, 0, null);
var lcA1 = stA0;
if ((lcA1) === null) { gt = 101; break IF; }
var stA0 = (refs_org_netbeans_html_json_impl_JSONList || (refs_org_netbeans_html_json_impl_JSONList = org_netbeans_html_json_impl_JSONList(false))).access$200___3Ljava_lang_String_2Lorg_netbeans_html_json_impl_JSONList_2(lcA0['fld_org_netbeans_html_json_impl_JSONList$1_this$0']);
var lcA2 = stA0;
var lcI3 = (lcA2).length;
var lcI4 = 0;
    }
    X_48: for (;;) { IF: if (gt <= 48) {

if ((lcI4) >= (lcI3)) { gt = 74; break IF; }
var lcA5 = (lcA2[lcI4] || Array.at(lcA2, lcI4));
lcA1.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA5, null, null);
lcI4++;
{ gt = 0; continue X_48; }
    }
    X_74: for (;;) { IF: if (gt <= 74) {

var stI0 = (refs_org_netbeans_html_json_impl_JSONList || (refs_org_netbeans_html_json_impl_JSONList = org_netbeans_html_json_impl_JSONList(false))).access$300__ILorg_netbeans_html_json_impl_JSONList_2(lcA0['fld_org_netbeans_html_json_impl_JSONList$1_this$0']);
if ((stI0) < 0) { gt = 101; break IF; }
var stA0 = (refs_org_netbeans_html_json_impl_JSONList || (refs_org_netbeans_html_json_impl_JSONList = org_netbeans_html_json_impl_JSONList(false))).access$100__Lorg_netbeans_html_json_spi_Proto_2Lorg_netbeans_html_json_impl_JSONList_2(lcA0['fld_org_netbeans_html_json_impl_JSONList$1_this$0']);
var stI1 = (refs_org_netbeans_html_json_impl_JSONList || (refs_org_netbeans_html_json_impl_JSONList = org_netbeans_html_json_impl_JSONList(false))).access$300__ILorg_netbeans_html_json_impl_JSONList_2(lcA0['fld_org_netbeans_html_json_impl_JSONList$1_this$0']);
(refs_org_netbeans_html_json_impl_PropertyBindingAccessor || (refs_org_netbeans_html_json_impl_PropertyBindingAccessor = org_netbeans_html_json_impl_PropertyBindingAccessor(false))).notifyProtoChange__VLorg_netbeans_html_json_spi_Proto_2I(stA0, stI1);
    }
    X_101: for (;;) { IF: if (gt <= 101) {
return;

    }
}}}}
};
c['run__V'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_json_impl_JSONList$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_json_impl_JSONList$1', { value : true });
      vm.java_lang_Runnable(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_json_impl_JSONList$1fillInstOf });
    org_netbeans_html_json_impl_JSONList$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/json/impl/JSONList$1';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.java_lang_Runnable(false).constructor.$class
    ]; };
    CLS.$class.access = 65568;
    CLS.$class.cnstr = CLS;
    var refs_org_netbeans_html_json_impl_JSONList;
    var refs_org_netbeans_html_json_impl_PropertyBindingAccessor;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_org_netbeans_html_json_impl_JSONList$1_this$0'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_netbeans_html_json_impl_JSONList$1 = org_netbeans_html_json_impl_JSONList$1;

vm.java_lang_reflect_Array = link('java/lang/reflect/Array', function(f) { vm.java_lang_reflect_Array =  f; });
vm.java_lang_IllegalStateException = link('java/lang/IllegalStateException', function(f) { vm.java_lang_IllegalStateException =  f; });

function org_netbeans_html_json_spi_Proto$3() {
  var m;
  var CLS = org_netbeans_html_json_spi_Proto$3;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$index = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_json_spi_Proto$3_val$index'] = v; return this['fld_org_netbeans_html_json_spi_Proto$3_val$index']; };
  m = c._val$args = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_json_spi_Proto$3_val$args'] = v; return this['fld_org_netbeans_html_json_spi_Proto$3_val$args']; };
  m = c._this$0 = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_json_spi_Proto$3_this$0'] = v; return this['fld_org_netbeans_html_json_spi_Proto$3_this$0']; };
    m = CLS.cons__VLorg_netbeans_html_json_spi_Proto_2I_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;
lcA0['fld_org_netbeans_html_json_spi_Proto$3_this$0'] = lcA1;
lcA0['fld_org_netbeans_html_json_spi_Proto$3_val$index'] = lcI2;
lcA0['fld_org_netbeans_html_json_spi_Proto$3_val$args'] = lcA3;
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.run__V = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
try {
var stA0 = (refs_org_netbeans_html_json_spi_Proto || (refs_org_netbeans_html_json_spi_Proto = org_netbeans_html_json_spi_Proto(false))).access$200__Lorg_netbeans_html_json_spi_Proto$Type_2Lorg_netbeans_html_json_spi_Proto_2(lcA0['fld_org_netbeans_html_json_spi_Proto$3_this$0']);
var stA1 = (refs_org_netbeans_html_json_spi_Proto || (refs_org_netbeans_html_json_spi_Proto = org_netbeans_html_json_spi_Proto(false))).access$100__Ljava_lang_Object_2Lorg_netbeans_html_json_spi_Proto_2(lcA0['fld_org_netbeans_html_json_spi_Proto$3_this$0']);
invoker.call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, lcA0['fld_org_netbeans_html_json_spi_Proto$3_val$index'], lcA0['fld_org_netbeans_html_json_spi_Proto$3_val$args'], null);
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_Exception']) {var stA0 = e;{ gt = 29; break IF; }}
throw e;
}{ gt = 34; break IF; }
    }
    X_29: for (;;) { IF: if (gt <= 29) {
var lcA1 = stA0;
invoker.printStackTrace__V(lcA1);
    }
    X_34: for (;;) { IF: if (gt <= 34) {
return;

    }
}}}
};
c['run__V'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_json_spi_Proto$3fillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_json_spi_Proto$3', { value : true });
      vm.java_lang_Runnable(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_json_spi_Proto$3fillInstOf });
    org_netbeans_html_json_spi_Proto$3fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/json/spi/Proto$3';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.java_lang_Runnable(false).constructor.$class
    ]; };
    CLS.$class.access = 65568;
    CLS.$class.cnstr = CLS;
    var refs_org_netbeans_html_json_spi_Proto;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_org_netbeans_html_json_spi_Proto$3_val$index'] = 0;
    this['fld_org_netbeans_html_json_spi_Proto$3_val$args'] = null;
    this['fld_org_netbeans_html_json_spi_Proto$3_this$0'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_netbeans_html_json_spi_Proto$3 = org_netbeans_html_json_spi_Proto$3;


function org_netbeans_html_json_spi_Proto$2() {
  var m;
  var CLS = org_netbeans_html_json_spi_Proto$2;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$propName = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_json_spi_Proto$2_val$propName'] = v; return this['fld_org_netbeans_html_json_spi_Proto$2_val$propName']; };
  m = c._val$oldValue = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_json_spi_Proto$2_val$oldValue'] = v; return this['fld_org_netbeans_html_json_spi_Proto$2_val$oldValue']; };
  m = c._val$newValue = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_json_spi_Proto$2_val$newValue'] = v; return this['fld_org_netbeans_html_json_spi_Proto$2_val$newValue']; };
  m = c._this$0 = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_json_spi_Proto$2_this$0'] = v; return this['fld_org_netbeans_html_json_spi_Proto$2_this$0']; };
    m = CLS.cons__VLorg_netbeans_html_json_spi_Proto_2Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcA2, lcA3, lcA4) {
  var  lcA0 = this;
lcA0['fld_org_netbeans_html_json_spi_Proto$2_this$0'] = lcA1;
lcA0['fld_org_netbeans_html_json_spi_Proto$2_val$propName'] = lcA2;
lcA0['fld_org_netbeans_html_json_spi_Proto$2_val$oldValue'] = lcA3;
lcA0['fld_org_netbeans_html_json_spi_Proto$2_val$newValue'] = lcA4;
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.run__V = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = (refs_org_netbeans_html_json_spi_Proto || (refs_org_netbeans_html_json_spi_Proto = org_netbeans_html_json_spi_Proto(false))).access$000__Lorg_netbeans_html_json_impl_Bindings_2Lorg_netbeans_html_json_spi_Proto_2(lcA0['fld_org_netbeans_html_json_spi_Proto$2_this$0']);
if ((stA0) === null) { gt = 32; break IF; }
var stA0 = (refs_org_netbeans_html_json_spi_Proto || (refs_org_netbeans_html_json_spi_Proto = org_netbeans_html_json_spi_Proto(false))).access$000__Lorg_netbeans_html_json_impl_Bindings_2Lorg_netbeans_html_json_spi_Proto_2(lcA0['fld_org_netbeans_html_json_spi_Proto$2_this$0']);
stA0.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_org_netbeans_html_json_spi_Proto$2_val$propName'], lcA0['fld_org_netbeans_html_json_spi_Proto$2_val$oldValue'], lcA0['fld_org_netbeans_html_json_spi_Proto$2_val$newValue']);
    }
    X_32: for (;;) { IF: if (gt <= 32) {

(refs_org_netbeans_html_json_spi_Observers || (refs_org_netbeans_html_json_spi_Observers = org_netbeans_html_json_spi_Observers(false))).valueHasMutated__VLorg_netbeans_html_json_spi_Proto_2Ljava_lang_String_2(lcA0['fld_org_netbeans_html_json_spi_Proto$2_this$0'], lcA0['fld_org_netbeans_html_json_spi_Proto$2_val$propName']);
return;

    }
}}
};
c['run__V'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_json_spi_Proto$2fillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_json_spi_Proto$2', { value : true });
      vm.java_lang_Runnable(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_json_spi_Proto$2fillInstOf });
    org_netbeans_html_json_spi_Proto$2fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/json/spi/Proto$2';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.java_lang_Runnable(false).constructor.$class
    ]; };
    CLS.$class.access = 65568;
    CLS.$class.cnstr = CLS;
    var refs_org_netbeans_html_json_spi_Proto;
    var refs_org_netbeans_html_json_spi_Observers;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_org_netbeans_html_json_spi_Proto$2_val$propName'] = null;
    this['fld_org_netbeans_html_json_spi_Proto$2_val$oldValue'] = null;
    this['fld_org_netbeans_html_json_spi_Proto$2_val$newValue'] = null;
    this['fld_org_netbeans_html_json_spi_Proto$2_this$0'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_netbeans_html_json_spi_Proto$2 = org_netbeans_html_json_spi_Proto$2;


function org_netbeans_html_json_spi_Proto$1() {
  var m;
  var CLS = org_netbeans_html_json_spi_Proto$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$propName = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_json_spi_Proto$1_val$propName'] = v; return this['fld_org_netbeans_html_json_spi_Proto$1_val$propName']; };
  m = c._this$0 = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_json_spi_Proto$1_this$0'] = v; return this['fld_org_netbeans_html_json_spi_Proto$1_this$0']; };
    m = CLS.cons__VLorg_netbeans_html_json_spi_Proto_2Ljava_lang_String_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
lcA0['fld_org_netbeans_html_json_spi_Proto$1_this$0'] = lcA1;
lcA0['fld_org_netbeans_html_json_spi_Proto$1_val$propName'] = lcA2;
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.run__V = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = (refs_org_netbeans_html_json_spi_Proto || (refs_org_netbeans_html_json_spi_Proto = org_netbeans_html_json_spi_Proto(false))).access$000__Lorg_netbeans_html_json_impl_Bindings_2Lorg_netbeans_html_json_spi_Proto_2(lcA0['fld_org_netbeans_html_json_spi_Proto$1_this$0']);
if ((stA0) === null) { gt = 26; break IF; }
var stA0 = (refs_org_netbeans_html_json_spi_Proto || (refs_org_netbeans_html_json_spi_Proto = org_netbeans_html_json_spi_Proto(false))).access$000__Lorg_netbeans_html_json_impl_Bindings_2Lorg_netbeans_html_json_spi_Proto_2(lcA0['fld_org_netbeans_html_json_spi_Proto$1_this$0']);
stA0.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_org_netbeans_html_json_spi_Proto$1_val$propName'], null, null);
    }
    X_26: for (;;) { IF: if (gt <= 26) {

(refs_org_netbeans_html_json_spi_Observers || (refs_org_netbeans_html_json_spi_Observers = org_netbeans_html_json_spi_Observers(false))).valueHasMutated__VLorg_netbeans_html_json_spi_Proto_2Ljava_lang_String_2(lcA0['fld_org_netbeans_html_json_spi_Proto$1_this$0'], lcA0['fld_org_netbeans_html_json_spi_Proto$1_val$propName']);
return;

    }
}}
};
c['run__V'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_json_spi_Proto$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_json_spi_Proto$1', { value : true });
      vm.java_lang_Runnable(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_json_spi_Proto$1fillInstOf });
    org_netbeans_html_json_spi_Proto$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/json/spi/Proto$1';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.java_lang_Runnable(false).constructor.$class
    ]; };
    CLS.$class.access = 65568;
    CLS.$class.cnstr = CLS;
    var refs_org_netbeans_html_json_spi_Proto;
    var refs_org_netbeans_html_json_spi_Observers;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_org_netbeans_html_json_spi_Proto$1_val$propName'] = null;
    this['fld_org_netbeans_html_json_spi_Proto$1_this$0'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_netbeans_html_json_spi_Proto$1 = org_netbeans_html_json_spi_Proto$1;


function org_netbeans_html_json_spi_Observers() {
  var m;
  var CLS = org_netbeans_html_json_spi_Observers;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_GLOBAL'] = null;
  m = c._GLOBAL = function (v) {  if (arguments.length == 1) CLS['fld_GLOBAL'] = v; return CLS['fld_GLOBAL']; };
  m = c._watchers = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_json_spi_Observers_watchers'] = v; return this['fld_org_netbeans_html_json_spi_Observers_watchers']; };
  m = c._observers = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_json_spi_Observers_observers'] = v; return this['fld_org_netbeans_html_json_spi_Observers_observers']; };
  CLS['fld_$assertionsDisabled'] = 0;
  m = c._$assertionsDisabled = function (v) {  if (arguments.length == 1) CLS['fld_$assertionsDisabled'] = v; return CLS['fld_$assertionsDisabled']; };
    m = CLS.cons__V = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = lcA0;var stA1 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lorg/netbeans/html/json/spi/Observers$Watcher;', vm.org_netbeans_html_json_spi_Observers$Watcher, 0);
var stA1 = (refs_org_netbeans_html_json_impl_SimpleList || (refs_org_netbeans_html_json_impl_SimpleList = org_netbeans_html_json_impl_SimpleList(false))).asList__Ljava_util_List_2_3Ljava_lang_Object_2(stA1);
stA0['fld_org_netbeans_html_json_spi_Observers_watchers'] = stA1;
var stA0 = lcA0;var stA1 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lorg/netbeans/html/json/spi/Observers$Ref;', vm.org_netbeans_html_json_spi_Observers$Ref, 0);
var stA1 = (refs_org_netbeans_html_json_impl_SimpleList || (refs_org_netbeans_html_json_impl_SimpleList = org_netbeans_html_json_impl_SimpleList(false))).asList__Ljava_util_List_2_3Ljava_lang_Object_2(stA1);
stA0['fld_org_netbeans_html_json_spi_Observers_observers'] = stA1;
if ((c._$assertionsDisabled()) != 0) { gt = 49; break IF; }
var stI0 = (refs_java_lang_Thread || (refs_java_lang_Thread = vm.java_lang_Thread(false)))['holdsLock__ZLjava_lang_Object_2'](c._GLOBAL());
if ((stI0) != 0) { gt = 49; break IF; }
var stA0 = new vm.java_lang_AssertionError;
(refs_java_lang_AssertionError || (refs_java_lang_AssertionError = vm.java_lang_AssertionError(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }
    }
    X_49: for (;;) { IF: if (gt <= 49) {
return;

    }
}}
};
CLS['cons__V'] = m;

    m.access = 0;
    m.cls = CLS;
    m = c.beginComputing__Lorg_netbeans_html_json_spi_Observers$Usages_2Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_String_2Lorg_netbeans_html_json_spi_Observers$Usages_2 = function(lcA0, lcA1, lcA2) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = c._GLOBAL();var stA1 = stA0;
var lcA3 = stA1;
try {var stA0 = new org_netbeans_html_json_spi_Observers$Watcher;
(refs_org_netbeans_html_json_spi_Observers$Watcher || (refs_org_netbeans_html_json_spi_Observers$Watcher = org_netbeans_html_json_spi_Observers$Watcher(false))).constructor.cons__VLorg_netbeans_html_json_spi_Proto_2Ljava_lang_String_2.call(stA0, lcA0, lcA1);
var lcA4 = stA0;
var stI0 = invoker.add__ZLjava_lang_Object_2(c._GLOBAL(),lcA4);
var stA0 = (refs_org_netbeans_html_json_spi_Observers$Usages || (refs_org_netbeans_html_json_spi_Observers$Usages = org_netbeans_html_json_spi_Observers$Usages(false))).register__Lorg_netbeans_html_json_spi_Observers$Usages_2Ljava_lang_String_2Lorg_netbeans_html_json_spi_Observers$Watcher_2Lorg_netbeans_html_json_spi_Observers$Usages_2(lcA1, lcA4, lcA2);
} catch (e) {
var stA0 = e;{ gt = 38; break IF; }
}return stA0;
    }
    X_38: for (;;) { IF: if (gt <= 38) {
try {var lcA5 = stA0;
} catch (e) {
var stA0 = e;{ gt = 0; continue X_38; }
}
{ var stA0 = lcA5; throw lcA5; }

    }
}}
};
    m.access = 8;
    m.cls = CLS;
    m = c.verifyUnlocked__VLorg_netbeans_html_json_spi_Proto_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = c._GLOBAL();var stA1 = stA0;
var lcA1 = stA1;
try {
var stA0 = invoker.iterator__Ljava_util_Iterator_2(c._GLOBAL());
var lcA2 = stA0;
} catch (e) {
var stA0 = e;{ gt = 90; break IF; }
}    }
    X_15: for (;;) { IF: if (gt <= 15) {
try {
var stI0 = invoker.hasNext__Z(lcA2);
if ((stI0) == 0) { gt = 85; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA2);
if (stA0 !== null && !stA0['$instOf_org_netbeans_html_json_spi_Observers$Watcher']) vm.java_lang_Class(false).castEx(stA0, 'org.netbeans.html.json.spi.Observers$Watcher');
var lcA3 = stA0;
if ((lcA3['fld_org_netbeans_html_json_spi_Observers$Watcher_proto']) !== (lcA0)) { gt = 82; break IF; }
var stA0 = lcA3['fld_org_netbeans_html_json_spi_Observers$Watcher_owner'];var stA1 = (refs_java_lang_Thread || (refs_java_lang_Thread = vm.java_lang_Thread(false)))['currentThread__Ljava_lang_Thread_2']();
if ((stA0) !== (stA1)) { gt = 82; break IF; }
var stA0 = new vm.java_lang_IllegalStateException;
var stA1 = stA0;var stA2 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"Re-entrant attempt to access ");
var stA3 = lcA0.toStr__Ljava_lang_String_2();
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,stA3);
var stA2 = invoker.toString__Ljava_lang_String_2(stA2);
(refs_java_lang_IllegalStateException || (refs_java_lang_IllegalStateException = vm.java_lang_IllegalStateException(false))).constructor['cons__VLjava_lang_String_2'].call(stA1, stA2);
{ var stA0 = stA0; throw stA0; }
} catch (e) {
var stA0 = e;{ gt = 90; break IF; }
}    }
    X_82: for (;;) { IF: if (gt <= 82) {
try {{ gt = 0; continue X_15; }
} catch (e) {
var stA0 = e;{ gt = 90; break IF; }
}    }
    X_85: for (;;) { IF: if (gt <= 85) {
try {
} catch (e) {
var stA0 = e;{ gt = 90; break IF; }
}{ gt = 97; break IF; }
    }
    X_90: for (;;) { IF: if (gt <= 90) {
try {var lcA4 = stA0;
} catch (e) {
var stA0 = e;{ gt = 0; continue X_90; }
}
{ var stA0 = lcA4; throw lcA4; }
    }
    X_97: for (;;) { IF: if (gt <= 97) {
return;

    }
}}}}}}
};
    m.access = 8;
    m.cls = CLS;
    m = c.accessingValue__VLorg_netbeans_html_json_spi_Proto_2Ljava_lang_String_2 = function(lcA0, lcA1) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = c._GLOBAL();var stA1 = stA0;
var lcA2 = stA1;
try {
var stA0 = invoker.iterator__Ljava_util_Iterator_2(c._GLOBAL());
var lcA3 = stA0;
} catch (e) {
var stA0 = e;{ gt = 67; break IF; }
}    }
    X_15: for (;;) { IF: if (gt <= 15) {
try {
var stI0 = invoker.hasNext__Z(lcA3);
if ((stI0) == 0) { gt = 62; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA3);
if (stA0 !== null && !stA0['$instOf_org_netbeans_html_json_spi_Observers$Watcher']) vm.java_lang_Class(false).castEx(stA0, 'org.netbeans.html.json.spi.Observers$Watcher');
var lcA4 = stA0;
var stA0 = lcA0.observers__Lorg_netbeans_html_json_spi_Observers_2Z(1);
var lcA5 = stA0;
var stA0 = lcA5;var stA1 = lcA4;var stA2 = new org_netbeans_html_json_spi_Observers$Ref;
(refs_org_netbeans_html_json_spi_Observers$Ref || (refs_org_netbeans_html_json_spi_Observers$Ref = org_netbeans_html_json_spi_Observers$Ref(false))).constructor.cons__VLorg_netbeans_html_json_spi_Observers$Watcher_2Ljava_lang_String_2.call(stA2, lcA4, lcA1);
stA0.add__VLorg_netbeans_html_json_spi_Observers$Watcher_2Lorg_netbeans_html_json_spi_Observers$Ref_2(stA1, stA2);
{ gt = 0; continue X_15; }
} catch (e) {
var stA0 = e;{ gt = 67; break IF; }
}    }
    X_62: for (;;) { IF: if (gt <= 62) {
try {
} catch (e) {
var stA0 = e;{ gt = 67; break IF; }
}{ gt = 74; break IF; }
    }
    X_67: for (;;) { IF: if (gt <= 67) {
try {var lcA6 = stA0;
} catch (e) {
var stA0 = e;{ gt = 0; continue X_67; }
}
{ var stA0 = lcA6; throw lcA6; }
    }
    X_74: for (;;) { IF: if (gt <= 74) {
return;

    }
}}}}}
};
    m.access = 8;
    m.cls = CLS;
    m = c.finishComputing__VLorg_netbeans_html_json_spi_Proto_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = c._GLOBAL();var stA1 = stA0;
var lcA1 = stA1;
try {
var lcI2 = 0;
var stA0 = c._GLOBAL();var stI1 = invoker.size__I(c._GLOBAL());
var stA0 = invoker.listIterator__Ljava_util_ListIterator_2I(stA0,stI1);
var lcA3 = stA0;
} catch (e) {
var stA0 = e;{ gt = 148; break IF; }
}    }
    X_25: for (;;) { IF: if (gt <= 25) {
try {
var stI0 = invoker.hasPrevious__Z(lcA3);
if ((stI0) == 0) { gt = 101; break IF; }
var stA0 = invoker.previous__Ljava_lang_Object_2(lcA3);
if (stA0 !== null && !stA0['$instOf_org_netbeans_html_json_spi_Observers$Watcher']) vm.java_lang_Class(false).castEx(stA0, 'org.netbeans.html.json.spi.Observers$Watcher');
var lcA4 = stA0;
if ((lcA4['fld_org_netbeans_html_json_spi_Observers$Watcher_proto']) !== (lcA0)) { gt = 98; break IF; }
var stA0 = lcA4['fld_org_netbeans_html_json_spi_Observers$Watcher_owner'];var stA1 = (refs_java_lang_Thread || (refs_java_lang_Thread = vm.java_lang_Thread(false)))['currentThread__Ljava_lang_Thread_2']();
if ((stA0) !== (stA1)) { gt = 98; break IF; }
if ((lcA4['fld_org_netbeans_html_json_spi_Observers$Watcher_prop']) === null) { gt = 87; break IF; }
var stA0 = lcA0.observers__Lorg_netbeans_html_json_spi_Observers_2Z(1);
var lcA5 = stA0;
lcA5.add__VLorg_netbeans_html_json_spi_Observers$Watcher_2(lcA4);
} catch (e) {
var stA0 = e;{ gt = 148; break IF; }
}    }
    X_87: for (;;) { IF: if (gt <= 87) {
try {
var lcI2 = 1;
invoker.remove__V(lcA3);
{ gt = 101; break IF; }
} catch (e) {
var stA0 = e;{ gt = 148; break IF; }
}    }
    X_98: for (;;) { IF: if (gt <= 98) {
try {{ gt = 0; continue X_25; }
} catch (e) {
var stA0 = e;{ gt = 148; break IF; }
}    }
    X_101: for (;;) { IF: if (gt <= 101) {
try {
if ((lcI2) != 0) { gt = 143; break IF; }
var stA0 = new vm.java_lang_IllegalStateException;
var stA1 = stA0;var stA2 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"Cannot find ");
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2(stA2,lcA0);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2," in ");
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2(stA2,c._GLOBAL());
var stA2 = invoker.toString__Ljava_lang_String_2(stA2);
(refs_java_lang_IllegalStateException || (refs_java_lang_IllegalStateException = vm.java_lang_IllegalStateException(false))).constructor['cons__VLjava_lang_String_2'].call(stA1, stA2);
{ var stA0 = stA0; throw stA0; }
} catch (e) {
var stA0 = e;{ gt = 148; break IF; }
}    }
    X_143: for (;;) { IF: if (gt <= 143) {
try {
} catch (e) {
var stA0 = e;{ gt = 148; break IF; }
}{ gt = 155; break IF; }
    }
    X_148: for (;;) { IF: if (gt <= 148) {
try {var lcA6 = stA0;
} catch (e) {
var stA0 = e;{ gt = 0; continue X_148; }
}
{ var stA0 = lcA6; throw lcA6; }
    }
    X_155: for (;;) { IF: if (gt <= 155) {
return;

    }
}}}}}}}}
};
    m.access = 8;
    m.cls = CLS;
    m = c.find__Lorg_netbeans_html_json_spi_Observers$Watcher_2Ljava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((lcA1) !== null) { gt = 6; break IF; }
return null;
    }
    X_6: for (;;) { IF: if (gt <= 6) {

var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA0['fld_org_netbeans_html_json_spi_Observers_watchers']);
var lcA2 = stA0;
    }
    X_16: for (;;) { IF: if (gt <= 16) {

var stI0 = invoker.hasNext__Z(lcA2);
if ((stI0) == 0) { gt = 51; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA2);
if (stA0 !== null && !stA0['$instOf_org_netbeans_html_json_spi_Observers$Watcher']) vm.java_lang_Class(false).castEx(stA0, 'org.netbeans.html.json.spi.Observers$Watcher');
var lcA3 = stA0;
var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA1,lcA3['fld_org_netbeans_html_json_spi_Observers$Watcher_prop']);
if ((stI0) == 0) { gt = 48; break IF; }
return lcA3;
    }
    X_48: for (;;) { IF: if (gt <= 48) {
{ gt = 0; continue X_16; }
    }
    X_51: for (;;) { IF: if (gt <= 51) {

return null;

    }
}}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.add__VLorg_netbeans_html_json_spi_Observers$Watcher_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var lcI2 = 0;
    }
    X_2: for (;;) { IF: if (gt <= 2) {

var stI0 = lcI2;var stI1 = invoker.size__I(lcA0['fld_org_netbeans_html_json_spi_Observers_watchers']);
if ((stI0) >= (stI1)) { gt = 89; break IF; }
var stA0 = invoker.get__Ljava_lang_Object_2I(lcA0['fld_org_netbeans_html_json_spi_Observers_watchers'],lcI2);
if (stA0 !== null && !stA0['$instOf_org_netbeans_html_json_spi_Observers$Watcher']) vm.java_lang_Class(false).castEx(stA0, 'org.netbeans.html.json.spi.Observers$Watcher');
var lcA3 = stA0;
if ((lcA1['fld_org_netbeans_html_json_spi_Observers$Watcher_prop']) !== null) { gt = 56; break IF; }
if ((lcA3['fld_org_netbeans_html_json_spi_Observers$Watcher_prop']) !== null) { gt = 83; break IF; }
var stA0 = invoker.set__Ljava_lang_Object_2ILjava_lang_Object_2(lcA0['fld_org_netbeans_html_json_spi_Observers_watchers'],lcI2, lcA1);
return;
    }
    X_56: for (;;) { IF: if (gt <= 56) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA1['fld_org_netbeans_html_json_spi_Observers$Watcher_prop'],lcA3['fld_org_netbeans_html_json_spi_Observers$Watcher_prop']);
if ((stI0) == 0) { gt = 83; break IF; }
var stA0 = invoker.set__Ljava_lang_Object_2ILjava_lang_Object_2(lcA0['fld_org_netbeans_html_json_spi_Observers_watchers'],lcI2, lcA1);
return;
    }
    X_83: for (;;) { IF: if (gt <= 83) {
lcI2++;
{ gt = 0; continue X_2; }
    }
    X_89: for (;;) { IF: if (gt <= 89) {

var stI0 = invoker.add__ZLjava_lang_Object_2(lcA0['fld_org_netbeans_html_json_spi_Observers_watchers'],lcA1);
return;

    }
}}}}}
};
    m.access = 16;
    m.cls = CLS;
    m = c.valueHasMutated__VLorg_netbeans_html_json_spi_Proto_2Ljava_lang_String_2 = function(lcA0, lcA1) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lorg/netbeans/html/json/spi/Observers$Watcher;', vm.org_netbeans_html_json_spi_Observers$Watcher, 0);
var stA0 = (refs_org_netbeans_html_json_impl_SimpleList || (refs_org_netbeans_html_json_impl_SimpleList = org_netbeans_html_json_impl_SimpleList(false))).asList__Ljava_util_List_2_3Ljava_lang_Object_2(stA0);
var lcA2 = stA0;
var stA0 = c._GLOBAL();var stA1 = stA0;
var lcA3 = stA1;
try {
var stA0 = lcA0.observers__Lorg_netbeans_html_json_spi_Observers_2Z(0);
var lcA4 = stA0;
if ((lcA4) !== null) { gt = 29; break IF; }
} catch (e) {
var stA0 = e;{ gt = 122; break IF; }
}return;
    }
    X_29: for (;;) { IF: if (gt <= 29) {
try {
var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA4['fld_org_netbeans_html_json_spi_Observers_observers']);
var lcA5 = stA0;
} catch (e) {
var stA0 = e;{ gt = 122; break IF; }
}    }
    X_41: for (;;) { IF: if (gt <= 41) {
try {
var stI0 = invoker.hasNext__Z(lcA5);
if ((stI0) == 0) { gt = 117; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA5);
if (stA0 !== null && !stA0['$instOf_org_netbeans_html_json_spi_Observers$Ref']) vm.java_lang_Class(false).castEx(stA0, 'org.netbeans.html.json.spi.Observers$Ref');
var lcA6 = stA0;
var stA0 = lcA6.watcher__Lorg_netbeans_html_json_spi_Observers$Watcher_2();
var lcA7 = stA0;
if ((lcA7) === null) { gt = 83; break IF; }
if ((lcA7['fld_org_netbeans_html_json_spi_Observers$Watcher_proto']) !== null) { gt = 93; break IF; }
} catch (e) {
var stA0 = e;{ gt = 122; break IF; }
}    }
    X_83: for (;;) { IF: if (gt <= 83) {
try {
invoker.remove__V(lcA5);
{ gt = 0; continue X_41; }
} catch (e) {
var stA0 = e;{ gt = 122; break IF; }
}    }
    X_93: for (;;) { IF: if (gt <= 93) {
try {
var stA0 = (refs_org_netbeans_html_json_spi_Observers$Ref || (refs_org_netbeans_html_json_spi_Observers$Ref = org_netbeans_html_json_spi_Observers$Ref(false))).access$100__Ljava_lang_String_2Lorg_netbeans_html_json_spi_Observers$Ref_2(lcA6);
var stI0 = invoker.equals__ZLjava_lang_Object_2(stA0,lcA1);
if ((stI0) == 0) { gt = 114; break IF; }
var stI0 = invoker.add__ZLjava_lang_Object_2(lcA2,lcA7);
} catch (e) {
var stA0 = e;{ gt = 122; break IF; }
}    }
    X_114: for (;;) { IF: if (gt <= 114) {
try {{ gt = 0; continue X_41; }
} catch (e) {
var stA0 = e;{ gt = 122; break IF; }
}    }
    X_117: for (;;) { IF: if (gt <= 117) {
try {
} catch (e) {
var stA0 = e;{ gt = 122; break IF; }
}{ gt = 129; break IF; }
    }
    X_122: for (;;) { IF: if (gt <= 122) {
try {var lcA8 = stA0;
} catch (e) {
var stA0 = e;{ gt = 0; continue X_122; }
}
{ var stA0 = lcA8; throw lcA8; }
    }
    X_129: for (;;) { IF: if (gt <= 129) {

var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA2);
var lcA3 = stA0;
    }
    X_136: for (;;) { IF: if (gt <= 136) {

var stI0 = invoker.hasNext__Z(lcA3);
if ((stI0) == 0) { gt = 164; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA3);
if (stA0 !== null && !stA0['$instOf_org_netbeans_html_json_spi_Observers$Watcher']) vm.java_lang_Class(false).castEx(stA0, 'org.netbeans.html.json.spi.Observers$Watcher');
var lcA4 = stA0;
lcA4.valueHasMutated__V();
{ gt = 0; continue X_136; }
    }
    X_164: for (;;) { IF: if (gt <= 164) {
return;

    }
}}}}}}}}}}}
};
    m.access = 24;
    m.cls = CLS;
    m = c.add__VLorg_netbeans_html_json_spi_Observers$Watcher_2Lorg_netbeans_html_json_spi_Observers$Ref_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = (refs_java_lang_Thread || (refs_java_lang_Thread = vm.java_lang_Thread(false)))['holdsLock__ZLjava_lang_Object_2'](c._GLOBAL());
if ((lcA1) !== null) { gt = 12; break IF; }
return;
    }
    X_12: for (;;) { IF: if (gt <= 12) {

var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA0['fld_org_netbeans_html_json_spi_Observers_observers']);
var lcA3 = stA0;
    }
    X_22: for (;;) { IF: if (gt <= 22) {

var stI0 = invoker.hasNext__Z(lcA3);
if ((stI0) == 0) { gt = 95; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA3);
if (stA0 !== null && !stA0['$instOf_org_netbeans_html_json_spi_Observers$Ref']) vm.java_lang_Class(false).castEx(stA0, 'org.netbeans.html.json.spi.Observers$Ref');
var lcA4 = stA0;
if ((lcA2) !== (lcA4)) { gt = 49; break IF; }
return;
    }
    X_49: for (;;) { IF: if (gt <= 49) {

var stA0 = lcA4.get__Lorg_netbeans_html_json_spi_Observers$Watcher_2();
var lcA5 = stA0;
if ((lcA5) !== null) { gt = 70; break IF; }
invoker.remove__V(lcA3);
{ gt = 0; continue X_22; }
    }
    X_70: for (;;) { IF: if (gt <= 70) {

if ((lcA5) !== (lcA1)) { gt = 92; break IF; }
var stA0 = (refs_org_netbeans_html_json_spi_Observers$Ref || (refs_org_netbeans_html_json_spi_Observers$Ref = org_netbeans_html_json_spi_Observers$Ref(false))).access$100__Ljava_lang_String_2Lorg_netbeans_html_json_spi_Observers$Ref_2(lcA4);
var stA1 = (refs_org_netbeans_html_json_spi_Observers$Ref || (refs_org_netbeans_html_json_spi_Observers$Ref = org_netbeans_html_json_spi_Observers$Ref(false))).access$100__Ljava_lang_String_2Lorg_netbeans_html_json_spi_Observers$Ref_2(lcA2);
var stI0 = invoker.equals__ZLjava_lang_Object_2(stA0,stA1);
if ((stI0) == 0) { gt = 92; break IF; }
return;
    }
    X_92: for (;;) { IF: if (gt <= 92) {
{ gt = 0; continue X_22; }
    }
    X_95: for (;;) { IF: if (gt <= 95) {

var stI0 = invoker.add__ZLjava_lang_Object_2(lcA0['fld_org_netbeans_html_json_spi_Observers_observers'],lcA2);
return;

    }
}}}}}}}
};
    m.access = 0;
    m.cls = CLS;
    m = c.access$000__Lorg_netbeans_html_json_spi_Observers$Watcher_2Lorg_netbeans_html_json_spi_Observers_2Ljava_lang_String_2 = function(lcA0, lcA1) {
var stA0 = c.find__Lorg_netbeans_html_json_spi_Observers$Watcher_2Ljava_lang_String_2.call(lcA0, lcA1);
return stA0;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.class__V = function() {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = invoker.desiredAssertionStatus__Z(c.constructor.$class);
if ((stI0) != 0) { gt = 12; break IF; }
var stI0 = 1;{ gt = 13; break IF; }
    }
    X_12: for (;;) { IF: if (gt <= 12) {

var stI0 = 0;    }
    X_13: for (;;) { IF: if (gt <= 13) {
c._$assertionsDisabled(stI0);
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lorg/netbeans/html/json/spi/Observers$Watcher;', vm.org_netbeans_html_json_spi_Observers$Watcher, 0);
var stA0 = (refs_org_netbeans_html_json_impl_SimpleList || (refs_org_netbeans_html_json_impl_SimpleList = org_netbeans_html_json_impl_SimpleList(false))).asList__Ljava_util_List_2_3Ljava_lang_Object_2(stA0);
c._GLOBAL(stA0);
return;

    }
}}}
};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_json_spi_ObserversfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_json_spi_Observers', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_json_spi_ObserversfillInstOf });
    org_netbeans_html_json_spi_ObserversfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/json/spi/Observers';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 48;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_org_netbeans_html_json_impl_SimpleList;
    var refs_java_lang_Thread;
    var refs_java_lang_AssertionError;
    var refs_org_netbeans_html_json_spi_Observers$Watcher;
    var refs_org_netbeans_html_json_spi_Observers$Usages;
    var refs_java_lang_StringBuilder;
    var refs_java_lang_IllegalStateException;
    var refs_org_netbeans_html_json_spi_Observers$Ref;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_org_netbeans_html_json_spi_Observers_watchers'] = null;
    this['fld_org_netbeans_html_json_spi_Observers_observers'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_netbeans_html_json_spi_Observers = org_netbeans_html_json_spi_Observers;


function org_netbeans_html_json_spi_Observers$Ref() {
  var m;
  var CLS = org_netbeans_html_json_spi_Observers$Ref;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._ref = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_json_spi_Observers$Ref_ref'] = v; return this['fld_org_netbeans_html_json_spi_Observers$Ref_ref']; };
  m = c._prop = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_json_spi_Observers$Ref_prop'] = v; return this['fld_org_netbeans_html_json_spi_Observers$Ref_prop']; };
    m = CLS.cons__VLorg_netbeans_html_json_spi_Observers$Watcher_2Ljava_lang_String_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
lcA0['fld_org_netbeans_html_json_spi_Observers$Ref_ref'] = lcA1;
lcA0['fld_org_netbeans_html_json_spi_Observers$Ref_prop'] = lcA2;
return;

};
    m.access = 1;
    m.cls = CLS;
    m = c.watcher__Lorg_netbeans_html_json_spi_Observers$Watcher_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = lcA0.get__Lorg_netbeans_html_json_spi_Observers$Watcher_2();
var lcA1 = stA0;
if ((lcA1) !== null) { gt = 11; break IF; }
return null;
    }
    X_11: for (;;) { IF: if (gt <= 11) {

var stA0 = lcA1['fld_org_netbeans_html_json_spi_Observers$Watcher_proto'].observers__Lorg_netbeans_html_json_spi_Observers_2Z(0);
var lcA2 = stA0;
if ((lcA2) !== null) { gt = 26; break IF; }
return null;
    }
    X_26: for (;;) { IF: if (gt <= 26) {

var stA0 = (refs_org_netbeans_html_json_spi_Observers || (refs_org_netbeans_html_json_spi_Observers = org_netbeans_html_json_spi_Observers(false))).access$000__Lorg_netbeans_html_json_spi_Observers$Watcher_2Lorg_netbeans_html_json_spi_Observers_2Ljava_lang_String_2(lcA2, lcA1['fld_org_netbeans_html_json_spi_Observers$Watcher_prop']);
if ((stA0) !== (lcA1)) { gt = 40; break IF; }
return lcA1;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

return null;

    }
}}}}
};
    m.access = 16;
    m.cls = CLS;
    m = c.get__Lorg_netbeans_html_json_spi_Observers$Watcher_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((lcA0['fld_org_netbeans_html_json_spi_Observers$Ref_ref']['fld_org_netbeans_html_json_spi_Observers$Watcher_proto']) !== null) { gt = 14; break IF; }
var stA0 = null;{ gt = 18; break IF; }
    }
    X_14: for (;;) { IF: if (gt <= 14) {

var stA0 = lcA0['fld_org_netbeans_html_json_spi_Observers$Ref_ref'];    }
    X_18: for (;;) { IF: if (gt <= 18) {
return stA0;

    }
}}}
};
    m.access = 0;
    m.cls = CLS;
    m = c.access$100__Ljava_lang_String_2Lorg_netbeans_html_json_spi_Observers$Ref_2 = function(lcA0) {
return lcA0['fld_org_netbeans_html_json_spi_Observers$Ref_prop'];

};
    m.access = 4104;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_json_spi_Observers$ReffillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_json_spi_Observers$Ref', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_json_spi_Observers$ReffillInstOf });
    org_netbeans_html_json_spi_Observers$ReffillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/json/spi/Observers$Ref';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 48;
    CLS.$class.cnstr = CLS;
    var refs_org_netbeans_html_json_spi_Observers;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_org_netbeans_html_json_spi_Observers$Ref_ref'] = null;
    this['fld_org_netbeans_html_json_spi_Observers$Ref_prop'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_netbeans_html_json_spi_Observers$Ref = org_netbeans_html_json_spi_Observers$Ref;


function org_netbeans_html_json_spi_Observers$Usages() {
  var m;
  var CLS = org_netbeans_html_json_spi_Observers$Usages;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._names = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_json_spi_Observers$Usages_names'] = v; return this['fld_org_netbeans_html_json_spi_Observers$Usages_names']; };
  m = c._watchers = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_json_spi_Observers$Usages_watchers'] = v; return this['fld_org_netbeans_html_json_spi_Observers$Usages_watchers']; };
    m = CLS.cons__V = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, 0);
var stA1 = (refs_org_netbeans_html_json_impl_SimpleList || (refs_org_netbeans_html_json_impl_SimpleList = org_netbeans_html_json_impl_SimpleList(false))).asList__Ljava_util_List_2_3Ljava_lang_Object_2(stA1);
stA0['fld_org_netbeans_html_json_spi_Observers$Usages_names'] = stA1;
var stA0 = lcA0;var stA1 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lorg/netbeans/html/json/spi/Observers$Watcher;', vm.org_netbeans_html_json_spi_Observers$Watcher, 0);
var stA1 = (refs_org_netbeans_html_json_impl_SimpleList || (refs_org_netbeans_html_json_impl_SimpleList = org_netbeans_html_json_impl_SimpleList(false))).asList__Ljava_util_List_2_3Ljava_lang_Object_2(stA1);
stA0['fld_org_netbeans_html_json_spi_Observers$Usages_watchers'] = stA1;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.register__Lorg_netbeans_html_json_spi_Observers$Usages_2Ljava_lang_String_2Lorg_netbeans_html_json_spi_Observers$Watcher_2Lorg_netbeans_html_json_spi_Observers$Usages_2 = function(lcA0, lcA1, lcA2) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((lcA0) === null) { gt = 89; break IF; }
if ((lcA2) !== null) { gt = 16; break IF; }
var stA0 = new org_netbeans_html_json_spi_Observers$Usages;
c.constructor.cons__V.call(stA0);
var lcA2 = stA0;
    }
    X_16: for (;;) { IF: if (gt <= 16) {

var stI0 = invoker.indexOf__ILjava_lang_Object_2(lcA2['fld_org_netbeans_html_json_spi_Observers$Usages_names'],lcA0);
var lcI3 = stI0;
if ((lcI3) != (-1)) { gt = 57; break IF; }
var stI0 = invoker.add__ZLjava_lang_Object_2(lcA2['fld_org_netbeans_html_json_spi_Observers$Usages_names'],lcA0);
var stI0 = invoker.add__ZLjava_lang_Object_2(lcA2['fld_org_netbeans_html_json_spi_Observers$Usages_watchers'],lcA1);
{ gt = 89; break IF; }
    }
    X_57: for (;;) { IF: if (gt <= 57) {

var stA0 = invoker.get__Ljava_lang_Object_2I(lcA2['fld_org_netbeans_html_json_spi_Observers$Usages_watchers'],lcI3);
if (stA0 !== null && !stA0['$instOf_org_netbeans_html_json_spi_Observers$Watcher']) vm.java_lang_Class(false).castEx(stA0, 'org.netbeans.html.json.spi.Observers$Watcher');
var lcA4 = stA0;
lcA4.destroy__V();
var stA0 = invoker.set__Ljava_lang_Object_2ILjava_lang_Object_2(lcA2['fld_org_netbeans_html_json_spi_Observers$Usages_watchers'],lcI3, lcA1);
    }
    X_89: for (;;) { IF: if (gt <= 89) {

return lcA2;

    }
}}}}
};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_json_spi_Observers$UsagesfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_json_spi_Observers$Usages', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_json_spi_Observers$UsagesfillInstOf });
    org_netbeans_html_json_spi_Observers$UsagesfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/json/spi/Observers$Usages';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 48;
    CLS.$class.cnstr = CLS;
    var refs_org_netbeans_html_json_impl_SimpleList;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_org_netbeans_html_json_spi_Observers$Usages_names'] = null;
    this['fld_org_netbeans_html_json_spi_Observers$Usages_watchers'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_netbeans_html_json_spi_Observers$Usages = org_netbeans_html_json_spi_Observers$Usages;


function org_netbeans_html_json_spi_Observers$Watcher() {
  var m;
  var CLS = org_netbeans_html_json_spi_Observers$Watcher;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._proto = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_json_spi_Observers$Watcher_proto'] = v; return this['fld_org_netbeans_html_json_spi_Observers$Watcher_proto']; };
  m = c._owner = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_json_spi_Observers$Watcher_owner'] = v; return this['fld_org_netbeans_html_json_spi_Observers$Watcher_owner']; };
  m = c._prop = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_json_spi_Observers$Watcher_prop'] = v; return this['fld_org_netbeans_html_json_spi_Observers$Watcher_prop']; };
    m = CLS.cons__VLorg_netbeans_html_json_spi_Proto_2Ljava_lang_String_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = (refs_java_lang_Thread || (refs_java_lang_Thread = vm.java_lang_Thread(false)))['currentThread__Ljava_lang_Thread_2']();
stA0['fld_org_netbeans_html_json_spi_Observers$Watcher_owner'] = stA1;
lcA0['fld_org_netbeans_html_json_spi_Observers$Watcher_proto'] = lcA1;
lcA0['fld_org_netbeans_html_json_spi_Observers$Watcher_prop'] = lcA2;
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.toString__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"Watcher: ");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2(stA0,lcA0['fld_org_netbeans_html_json_spi_Observers$Watcher_proto']);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,", ");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,lcA0['fld_org_netbeans_html_json_spi_Observers$Watcher_prop']);
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
return stA0;

};
c['toString__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.destroy__V = function() {
  var  lcA0 = this;
lcA0['fld_org_netbeans_html_json_spi_Observers$Watcher_proto'] = null;
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.valueHasMutated__V = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var lcA1 = lcA0['fld_org_netbeans_html_json_spi_Observers$Watcher_proto'];
if ((lcA1) === null) { gt = 17; break IF; }
lcA1.valueHasMutated__VLjava_lang_String_2(lcA0['fld_org_netbeans_html_json_spi_Observers$Watcher_prop']);
    }
    X_17: for (;;) { IF: if (gt <= 17) {
return;

    }
}}
};
    m.access = 0;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_json_spi_Observers$WatcherfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_json_spi_Observers$Watcher', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_json_spi_Observers$WatcherfillInstOf });
    org_netbeans_html_json_spi_Observers$WatcherfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/json/spi/Observers$Watcher';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 48;
    CLS.$class.cnstr = CLS;
    var refs_java_lang_Thread;
    var refs_java_lang_StringBuilder;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_org_netbeans_html_json_spi_Observers$Watcher_proto'] = null;
    this['fld_org_netbeans_html_json_spi_Observers$Watcher_owner'] = null;
    this['fld_org_netbeans_html_json_spi_Observers$Watcher_prop'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_netbeans_html_json_spi_Observers$Watcher = org_netbeans_html_json_spi_Observers$Watcher;

vm.java_lang_Thread = link('java/lang/Thread', function(f) { vm.java_lang_Thread =  f; });

function org_netbeans_html_json_spi_Proto$PropertyInfo() {
  var m;
  var CLS = org_netbeans_html_json_spi_Proto$PropertyInfo;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._name = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_json_spi_Proto$PropertyInfo_name'] = v; return this['fld_org_netbeans_html_json_spi_Proto$PropertyInfo_name']; };
  m = c._type = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_json_spi_Proto$PropertyInfo_type'] = v; return this['fld_org_netbeans_html_json_spi_Proto$PropertyInfo_type']; };
    m = CLS.cons__VLjava_lang_String_2B = function(lcA1, lcI2) {
  var  lcA0 = this;
lcA0['fld_org_netbeans_html_json_spi_Proto$PropertyInfo_name'] = lcA1;
lcA0['fld_org_netbeans_html_json_spi_Proto$PropertyInfo_type'] = lcI2;
return;

};
    m.access = 0;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_json_spi_Proto$PropertyInfofillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_json_spi_Proto$PropertyInfo', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_json_spi_Proto$PropertyInfofillInstOf });
    org_netbeans_html_json_spi_Proto$PropertyInfofillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/json/spi/Proto$PropertyInfo';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_org_netbeans_html_json_spi_Proto$PropertyInfo_name'] = null;
    this['fld_org_netbeans_html_json_spi_Proto$PropertyInfo_type'] = 0;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_netbeans_html_json_spi_Proto$PropertyInfo = org_netbeans_html_json_spi_Proto$PropertyInfo;

vm.java_lang_AssertionError = link('java/lang/AssertionError', function(f) { vm.java_lang_AssertionError =  f; });

function org_netbeans_html_json_impl_JSON() {
  var m;
  var CLS = org_netbeans_html_json_impl_JSON;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.findTechnology__Lorg_netbeans_html_json_spi_Technology_2Lnet_java_html_BrwsrCtx_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = (refs_org_netbeans_html_context_spi_Contexts || (refs_org_netbeans_html_context_spi_Contexts = vm.org_netbeans_html_context_spi_Contexts(false)))['find__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'](lcA0, (refs_org_netbeans_html_json_spi_Technology || (refs_org_netbeans_html_json_spi_Technology = org_netbeans_html_json_spi_Technology(false))).constructor.$class);
if (stA0 !== null && !stA0['$instOf_org_netbeans_html_json_spi_Technology']) vm.java_lang_Class(false).castEx(stA0, 'org.netbeans.html.json.spi.Technology');
var lcA1 = stA0;
if ((lcA1) !== null) { gt = 20; break IF; }
var stA0 = (refs_org_netbeans_html_json_impl_JSON$EmptyTech || (refs_org_netbeans_html_json_impl_JSON$EmptyTech = org_netbeans_html_json_impl_JSON$EmptyTech(false))).access$000__Lorg_netbeans_html_json_impl_JSON$EmptyTech_2();
{ gt = 21; break IF; }
    }
    X_20: for (;;) { IF: if (gt <= 20) {

var stA0 = lcA1;    }
    X_21: for (;;) { IF: if (gt <= 21) {
return stA0;

    }
}}}
};
    m.access = 8;
    m.cls = CLS;
    m = c.findTransfer__Lorg_netbeans_html_json_spi_Transfer_2Lnet_java_html_BrwsrCtx_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = (refs_org_netbeans_html_context_spi_Contexts || (refs_org_netbeans_html_context_spi_Contexts = vm.org_netbeans_html_context_spi_Contexts(false)))['find__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'](lcA0, (refs_org_netbeans_html_json_spi_Transfer || (refs_org_netbeans_html_json_spi_Transfer = org_netbeans_html_json_spi_Transfer(false))).constructor.$class);
if (stA0 !== null && !stA0['$instOf_org_netbeans_html_json_spi_Transfer']) vm.java_lang_Class(false).castEx(stA0, 'org.netbeans.html.json.spi.Transfer');
var lcA1 = stA0;
if ((lcA1) !== null) { gt = 20; break IF; }
var stA0 = (refs_org_netbeans_html_json_impl_JSON$EmptyTech || (refs_org_netbeans_html_json_impl_JSON$EmptyTech = org_netbeans_html_json_impl_JSON$EmptyTech(false))).access$000__Lorg_netbeans_html_json_impl_JSON$EmptyTech_2();
{ gt = 21; break IF; }
    }
    X_20: for (;;) { IF: if (gt <= 20) {

var stA0 = lcA1;    }
    X_21: for (;;) { IF: if (gt <= 21) {
return stA0;

    }
}}}
};
    m.access = 9;
    m.cls = CLS;
    m = c.findWSTransfer__Lorg_netbeans_html_json_spi_WSTransfer_2Lnet_java_html_BrwsrCtx_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = (refs_org_netbeans_html_context_spi_Contexts || (refs_org_netbeans_html_context_spi_Contexts = vm.org_netbeans_html_context_spi_Contexts(false)))['find__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'](lcA0, (refs_org_netbeans_html_json_spi_WSTransfer || (refs_org_netbeans_html_json_spi_WSTransfer = org_netbeans_html_json_spi_WSTransfer(false))).constructor.$class);
if (stA0 !== null && !stA0['$instOf_org_netbeans_html_json_spi_WSTransfer']) vm.java_lang_Class(false).castEx(stA0, 'org.netbeans.html.json.spi.WSTransfer');
var lcA1 = stA0;
if ((lcA1) !== null) { gt = 20; break IF; }
var stA0 = (refs_org_netbeans_html_json_impl_JSON$EmptyTech || (refs_org_netbeans_html_json_impl_JSON$EmptyTech = org_netbeans_html_json_impl_JSON$EmptyTech(false))).access$000__Lorg_netbeans_html_json_impl_JSON$EmptyTech_2();
{ gt = 21; break IF; }
    }
    X_20: for (;;) { IF: if (gt <= 20) {

var stA0 = lcA1;    }
    X_21: for (;;) { IF: if (gt <= 21) {
return stA0;

    }
}}}
};
    m.access = 9;
    m.cls = CLS;
    m = c.readBindings__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Ljava_lang_Object_2 = function(lcA0, lcA1, lcA2) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = c.findTechnology__Lorg_netbeans_html_json_spi_Technology_2Lnet_java_html_BrwsrCtx_2(lcA0);
var lcA3 = stA0;
var stI0 = lcA3 != null && lcA3['$instOf_org_netbeans_html_json_spi_Technology$BatchCopy'] ? 1 : 0;
if ((stI0) == 0) { gt = 26; break IF; }
var stA0 = c.findProto__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2(lcA1);
var lcA4 = stA0;
var stA0 = (refs_org_netbeans_html_json_impl_PropertyBindingAccessor || (refs_org_netbeans_html_json_impl_PropertyBindingAccessor = org_netbeans_html_json_impl_PropertyBindingAccessor(false))).getBindings__Lorg_netbeans_html_json_impl_Bindings_2Lorg_netbeans_html_json_spi_Proto_2ZLjava_lang_Object_2(lcA4, 1, lcA2);
    }
    X_26: for (;;) { IF: if (gt <= 26) {
return;

    }
}}
};
    m.access = 9;
    m.cls = CLS;
    m = c.extract__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Object_2 = function(lcA0, lcA1, lcA2, lcA3) {
var stA0 = c.findTransfer__Lorg_netbeans_html_json_spi_Transfer_2Lnet_java_html_BrwsrCtx_2(lcA0);
var lcA4 = stA0;
invoker.extract__VLjava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Object_2(lcA4,lcA1, lcA2, lcA3);
return;

};
    m.access = 9;
    m.cls = CLS;
    m = c.getProperty__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Ljava_lang_String_2 = function(lcA0, lcA1, lcA2) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((lcA2) !== null) { gt = 6; break IF; }
return lcA1;
    }
    X_6: for (;;) { IF: if (gt <= 6) {

var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, 1);
Array.at(stA0, 0, lcA2);
var lcA3 = stA0;
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 1);
Array.at(stA0, 0, null);
var lcA4 = stA0;
c.extract__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Object_2(lcA0, lcA1, lcA3, lcA4);
return (lcA4[0] || Array.at(lcA4, 0));

    }
}}
};
    m.access = 10;
    m.cls = CLS;
    m = c.toJSON__Ljava_lang_String_2Ljava_lang_Object_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((lcA0) !== null) { gt = 7; break IF; }
return "null";
    }
    X_7: for (;;) { IF: if (gt <= 7) {

var stI0 = lcA0 != null && lcA0['$instOf_java_lang_Enum'] ? 1 : 0;
if ((stI0) == 0) { gt = 19; break IF; }
var stA0 = invoker.toString__Ljava_lang_String_2(lcA0);
var lcA0 = stA0;
    }
    X_19: for (;;) { IF: if (gt <= 19) {

var stI0 = lcA0 != null && lcA0['$instOf_java_lang_Character'] ? 1 : 0;
if ((stI0) == 0) { gt = 37; break IF; }
if (lcA0 !== null && !lcA0['$instOf_java_lang_Character']) vm.java_lang_Class(false).castEx(lcA0, 'java.lang.Character');
var stI0 = invoker.charValue__C(lcA0);
var stA0 = (refs_java_lang_Character || (refs_java_lang_Character = vm.java_lang_Character(false)))['toString__Ljava_lang_String_2C'](stI0);
var lcA0 = stA0;
    }
    X_37: for (;;) { IF: if (gt <= 37) {

var stI0 = lcA0 != null && lcA0['$instOf_java_lang_String'] ? 1 : 0;
if ((stI0) == 0) { gt = 219; break IF; }
if (lcA0 !== null && !lcA0['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(lcA0, 'java.lang.String');
var lcA1 = lcA0;
var stI0 = invoker.length__I(lcA1);
var lcI2 = stI0;
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__VI'].call(stA0, (((lcI2) + ((10))) | 0));
var lcA3 = stA0;
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA3,(34));
var lcI4 = 0;
    }
    X_76: for (;;) { IF: if (gt <= 76) {

if ((lcI4) >= (lcI2)) { gt = 207; break IF; }
var stI0 = invoker.charAt__CI(lcA1,lcI4);
var lcI5 = stI0;
switch (lcI5) {
  case 9: { gt = 174; break IF; }
  case 10: { gt = 154; break IF; }
  case 13: { gt = 164; break IF; }
  case 34: { gt = 144; break IF; }
  case 92: { gt = 184; break IF; }
  default: { gt = 194; break IF; }
}
    }
    X_144: for (;;) { IF: if (gt <= 144) {

var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA3,"\\\"");
{ gt = 201; break IF; }
    }
    X_154: for (;;) { IF: if (gt <= 154) {

var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA3,"\\n");
{ gt = 201; break IF; }
    }
    X_164: for (;;) { IF: if (gt <= 164) {

var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA3,"\\r");
{ gt = 201; break IF; }
    }
    X_174: for (;;) { IF: if (gt <= 174) {

var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA3,"\\t");
{ gt = 201; break IF; }
    }
    X_184: for (;;) { IF: if (gt <= 184) {

var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA3,"\\\\");
{ gt = 201; break IF; }
    }
    X_194: for (;;) { IF: if (gt <= 194) {

var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA3,lcI5);
    }
    X_201: for (;;) { IF: if (gt <= 201) {
lcI4++;
{ gt = 0; continue X_76; }
    }
    X_207: for (;;) { IF: if (gt <= 207) {

var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA3,(34));
var stA0 = invoker.toString__Ljava_lang_String_2(lcA3);
return stA0;
    }
    X_219: for (;;) { IF: if (gt <= 219) {

var stA0 = invoker.toString__Ljava_lang_String_2(lcA0);
return stA0;

    }
}}}}}}}}}}}}}}
};
    m.access = 9;
    m.cls = CLS;
    m = c.toString__Ljava_lang_String_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Ljava_lang_String_2 = function(lcA0, lcA1, lcA2) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = c.getProperty__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Ljava_lang_String_2(lcA0, lcA1, lcA2);
var lcA1 = stA0;
if ((lcA1) !== null) { gt = 15; break IF; }
var stA0 = null;{ gt = 19; break IF; }
    }
    X_15: for (;;) { IF: if (gt <= 15) {

var stA0 = invoker.toString__Ljava_lang_String_2(lcA1);
    }
    X_19: for (;;) { IF: if (gt <= 19) {
return stA0;

    }
}}}
};
    m.access = 9;
    m.cls = CLS;
    m = c.toNumber__Ljava_lang_Number_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Ljava_lang_String_2 = function(lcA0, lcA1, lcA2) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = c.getProperty__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Ljava_lang_String_2(lcA0, lcA1, lcA2);
var lcA1 = stA0;
var stI0 = lcA1 != null && lcA1['$instOf_java_lang_Character'] ? 1 : 0;
if ((stI0) == 0) { gt = 25; break IF; }
if (lcA1 !== null && !lcA1['$instOf_java_lang_Character']) vm.java_lang_Class(false).castEx(lcA1, 'java.lang.Character');
var stI0 = invoker.charValue__C(lcA1);
var stA0 = (refs_java_lang_Integer || (refs_java_lang_Integer = vm.java_lang_Integer(false)))['valueOf__Ljava_lang_Integer_2I'](stI0);
var lcA1 = stA0;
    }
    X_25: for (;;) { IF: if (gt <= 25) {

var stI0 = lcA1 != null && lcA1['$instOf_java_lang_Number'] ? 1 : 0;
if ((stI0) != 0) { gt = 39; break IF; }
var stA0 = (refs_java_lang_Double || (refs_java_lang_Double = vm.java_lang_Double(false)))['valueOf__Ljava_lang_Double_2D'](NaN);
var lcA1 = stA0;
    }
    X_39: for (;;) { IF: if (gt <= 39) {

if (lcA1 !== null && !lcA1['$instOf_java_lang_Number']) vm.java_lang_Class(false).castEx(lcA1, 'java.lang.Number');
return lcA1;

    }
}}}
};
    m.access = 9;
    m.cls = CLS;
    m = c.toModel__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2Ljava_lang_Object_2Ljava_lang_Object_2 = function(lcA0, lcA1, lcA2, lcA3) {
var stA0 = c.findTechnology__Lorg_netbeans_html_json_spi_Technology_2Lnet_java_html_BrwsrCtx_2(lcA0);
var lcA4 = stA0;
var stA0 = invoker.toModel__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA4,lcA1, lcA2);
var lcA5 = stA0;
var stA0 = invoker.cast__Ljava_lang_Object_2Ljava_lang_Object_2(lcA1,lcA5);
return stA0;

};
    m.access = 9;
    m.cls = CLS;
    m = c.isSame__ZII = function(lcI0, lcI1) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((lcI0) != (lcI1)) { gt = 9; break IF; }
var stI0 = 1;{ gt = 10; break IF; }
    }
    X_9: for (;;) { IF: if (gt <= 9) {

var stI0 = 0;    }
    X_10: for (;;) { IF: if (gt <= 10) {
return stI0;

    }
}}}
};
    m.access = 9;
    m.cls = CLS;
    m = c.isSame__ZDD = function(lcD0, lcD2) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = (lcD0 == lcD2) ? 0 : ((lcD0 < lcD2) ? -1 : 1);
if ((stI0) != 0) { gt = 10; break IF; }
var stI0 = 1;{ gt = 11; break IF; }
    }
    X_10: for (;;) { IF: if (gt <= 10) {

var stI0 = 0;    }
    X_11: for (;;) { IF: if (gt <= 11) {
return stI0;

    }
}}}
};
    m.access = 9;
    m.cls = CLS;
    m = c.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2 = function(lcA0, lcA1) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((lcA0) !== (lcA1)) { gt = 7; break IF; }
return 1;
    }
    X_7: for (;;) { IF: if (gt <= 7) {

if ((lcA0) === null) { gt = 15; break IF; }
if ((lcA1) !== null) { gt = 17; break IF; }
    }
    X_15: for (;;) { IF: if (gt <= 15) {

return 0;
    }
    X_17: for (;;) { IF: if (gt <= 17) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA0,lcA1);
return stI0;

    }
}}}}
};
    m.access = 9;
    m.cls = CLS;
    m = c.hashPlus__ILjava_lang_Object_2I = function(lcA0, lcI1) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((lcA0) !== null) { gt = 8; break IF; }
var stI0 = lcI1;{ gt = 14; break IF; }
    }
    X_8: for (;;) { IF: if (gt <= 8) {

var stI0 = lcI1;var stI1 = invoker.hashCode__I(lcA0);
var stI0 = (stI0 ^ stI1);    }
    X_14: for (;;) { IF: if (gt <= 14) {
return stI0;

    }
}}}
};
    m.access = 9;
    m.cls = CLS;
    m = c.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2 = function(lcA0, lcA1) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = invoker.isAssignableFrom__ZLjava_lang_Class_2((refs_java_lang_Number || (refs_java_lang_Number = vm.java_lang_Number(false))).constructor.$class,lcA0);
if ((stI0) == 0) { gt = 14; break IF; }
var stA0 = c.numberValue__Ljava_lang_Number_2Ljava_lang_Object_2(lcA1);
var lcA1 = stA0;
    }
    X_14: for (;;) { IF: if (gt <= 14) {

if (((refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class) !== (lcA0)) { gt = 25; break IF; }
var stA0 = c.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(lcA1);
var lcA1 = stA0;
    }
    X_25: for (;;) { IF: if (gt <= 25) {

if (((refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class) !== (lcA0)) { gt = 36; break IF; }
var stA0 = c.stringValue__Ljava_lang_String_2Ljava_lang_Object_2(lcA1);
var lcA1 = stA0;
    }
    X_36: for (;;) { IF: if (gt <= 36) {

if (((refs_java_lang_Character || (refs_java_lang_Character = vm.java_lang_Character(false))).constructor.$class) !== (lcA0)) { gt = 47; break IF; }
var stA0 = c.charValue__Ljava_lang_Character_2Ljava_lang_Object_2(lcA1);
var lcA1 = stA0;
    }
    X_47: for (;;) { IF: if (gt <= 47) {

if (((refs_java_lang_Integer || (refs_java_lang_Integer = vm.java_lang_Integer(false))).constructor.$class) !== (lcA0)) { gt = 75; break IF; }
var stI0 = lcA1 != null && lcA1['$instOf_java_lang_Number'] ? 1 : 0;
if ((stI0) == 0) { gt = 70; break IF; }
if (lcA1 !== null && !lcA1['$instOf_java_lang_Number']) vm.java_lang_Class(false).castEx(lcA1, 'java.lang.Number');
var stI0 = invoker.intValue__I(lcA1);
{ gt = 71; break IF; }
    }
    X_70: for (;;) { IF: if (gt <= 70) {

var stI0 = 0;    }
    X_71: for (;;) { IF: if (gt <= 71) {
var stA0 = (refs_java_lang_Integer || (refs_java_lang_Integer = vm.java_lang_Integer(false)))['valueOf__Ljava_lang_Integer_2I'](stI0);
var lcA1 = stA0;
    }
    X_75: for (;;) { IF: if (gt <= 75) {

if (((refs_java_lang_Long || (refs_java_lang_Long = vm.java_lang_Long(false))).constructor.$class) !== (lcA0)) { gt = 103; break IF; }
var stI0 = lcA1 != null && lcA1['$instOf_java_lang_Number'] ? 1 : 0;
if ((stI0) == 0) { gt = 98; break IF; }
if (lcA1 !== null && !lcA1['$instOf_java_lang_Number']) vm.java_lang_Class(false).castEx(lcA1, 'java.lang.Number');
var stL0 = invoker.longValue__J(lcA1);
{ gt = 99; break IF; }
    }
    X_98: for (;;) { IF: if (gt <= 98) {

var stL0 = (0).toLong();    }
    X_99: for (;;) { IF: if (gt <= 99) {
var stA0 = (refs_java_lang_Long || (refs_java_lang_Long = vm.java_lang_Long(false)))['valueOf__Ljava_lang_Long_2J'](stL0);
var lcA1 = stA0;
    }
    X_103: for (;;) { IF: if (gt <= 103) {

if (((refs_java_lang_Short || (refs_java_lang_Short = vm.java_lang_Short(false))).constructor.$class) !== (lcA0)) { gt = 131; break IF; }
var stI0 = lcA1 != null && lcA1['$instOf_java_lang_Number'] ? 1 : 0;
if ((stI0) == 0) { gt = 126; break IF; }
if (lcA1 !== null && !lcA1['$instOf_java_lang_Number']) vm.java_lang_Class(false).castEx(lcA1, 'java.lang.Number');
var stI0 = invoker.shortValue__S(lcA1);
{ gt = 127; break IF; }
    }
    X_126: for (;;) { IF: if (gt <= 126) {

var stI0 = 0;    }
    X_127: for (;;) { IF: if (gt <= 127) {
var stA0 = (refs_java_lang_Short || (refs_java_lang_Short = vm.java_lang_Short(false)))['valueOf__Ljava_lang_Short_2S'](stI0);
var lcA1 = stA0;
    }
    X_131: for (;;) { IF: if (gt <= 131) {

if (((refs_java_lang_Byte || (refs_java_lang_Byte = vm.java_lang_Byte(false))).constructor.$class) !== (lcA0)) { gt = 159; break IF; }
var stI0 = lcA1 != null && lcA1['$instOf_java_lang_Number'] ? 1 : 0;
if ((stI0) == 0) { gt = 154; break IF; }
if (lcA1 !== null && !lcA1['$instOf_java_lang_Number']) vm.java_lang_Class(false).castEx(lcA1, 'java.lang.Number');
var stI0 = invoker.byteValue__B(lcA1);
{ gt = 155; break IF; }
    }
    X_154: for (;;) { IF: if (gt <= 154) {

var stI0 = 0;    }
    X_155: for (;;) { IF: if (gt <= 155) {
var stA0 = (refs_java_lang_Byte || (refs_java_lang_Byte = vm.java_lang_Byte(false)))['valueOf__Ljava_lang_Byte_2B'](stI0);
var lcA1 = stA0;
    }
    X_159: for (;;) { IF: if (gt <= 159) {

if (((refs_java_lang_Double || (refs_java_lang_Double = vm.java_lang_Double(false))).constructor.$class) !== (lcA0)) { gt = 189; break IF; }
var stI0 = lcA1 != null && lcA1['$instOf_java_lang_Number'] ? 1 : 0;
if ((stI0) == 0) { gt = 182; break IF; }
if (lcA1 !== null && !lcA1['$instOf_java_lang_Number']) vm.java_lang_Class(false).castEx(lcA1, 'java.lang.Number');
var stD0 = invoker.doubleValue__D(lcA1);
{ gt = 185; break IF; }
    }
    X_182: for (;;) { IF: if (gt <= 182) {

var stD0 = NaN;    }
    X_185: for (;;) { IF: if (gt <= 185) {
var stA0 = (refs_java_lang_Double || (refs_java_lang_Double = vm.java_lang_Double(false)))['valueOf__Ljava_lang_Double_2D'](stD0);
var lcA1 = stA0;
    }
    X_189: for (;;) { IF: if (gt <= 189) {

if (((refs_java_lang_Float || (refs_java_lang_Float = vm.java_lang_Float(false))).constructor.$class) !== (lcA0)) { gt = 218; break IF; }
var stI0 = lcA1 != null && lcA1['$instOf_java_lang_Number'] ? 1 : 0;
if ((stI0) == 0) { gt = 212; break IF; }
if (lcA1 !== null && !lcA1['$instOf_java_lang_Number']) vm.java_lang_Class(false).castEx(lcA1, 'java.lang.Number');
var stF0 = invoker.floatValue__F(lcA1);
{ gt = 214; break IF; }
    }
    X_212: for (;;) { IF: if (gt <= 212) {

var stF0 = NaN;    }
    X_214: for (;;) { IF: if (gt <= 214) {
var stA0 = (refs_java_lang_Float || (refs_java_lang_Float = vm.java_lang_Float(false)))['valueOf__Ljava_lang_Float_2F'](stF0);
var lcA1 = stA0;
    }
    X_218: for (;;) { IF: if (gt <= 218) {

var stA0 = invoker.cast__Ljava_lang_Object_2Ljava_lang_Object_2(lcA0,lcA1);
return stA0;

    }
}}}}}}}}}}}}}}}}}}}}}}}
};
    m.access = 9;
    m.cls = CLS;
    m = c.isNumeric__ZLjava_lang_Object_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = lcA0 != null && lcA0['$instOf_java_lang_Integer'] ? 1 : 0;
if ((stI0) != 0) { gt = 28; break IF; }
var stI0 = lcA0 != null && lcA0['$instOf_java_lang_Long'] ? 1 : 0;
if ((stI0) != 0) { gt = 28; break IF; }
var stI0 = lcA0 != null && lcA0['$instOf_java_lang_Short'] ? 1 : 0;
if ((stI0) != 0) { gt = 28; break IF; }
var stI0 = lcA0 != null && lcA0['$instOf_java_lang_Byte'] ? 1 : 0;
if ((stI0) == 0) { gt = 32; break IF; }
    }
    X_28: for (;;) { IF: if (gt <= 28) {

var stI0 = 1;{ gt = 33; break IF; }
    }
    X_32: for (;;) { IF: if (gt <= 32) {

var stI0 = 0;    }
    X_33: for (;;) { IF: if (gt <= 33) {
return stI0;

    }
}}}}
};
    m.access = 8;
    m.cls = CLS;
    m = c.stringValue__Ljava_lang_String_2Ljava_lang_Object_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = lcA0 != null && lcA0['$instOf_java_lang_Boolean'] ? 1 : 0;
if ((stI0) == 0) { gt = 25; break IF; }
if (lcA0 !== null && !lcA0['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(lcA0, 'java.lang.Boolean');
var stI0 = invoker.booleanValue__Z(lcA0);
if ((stI0) == 0) { gt = 22; break IF; }
var stA0 = "true";{ gt = 24; break IF; }
    }
    X_22: for (;;) { IF: if (gt <= 22) {

var stA0 = "false";    }
    X_24: for (;;) { IF: if (gt <= 24) {
return stA0;
    }
    X_25: for (;;) { IF: if (gt <= 25) {

var stI0 = c.isNumeric__ZLjava_lang_Object_2(lcA0);
if ((stI0) == 0) { gt = 43; break IF; }
if (lcA0 !== null && !lcA0['$instOf_java_lang_Number']) vm.java_lang_Class(false).castEx(lcA0, 'java.lang.Number');
var stL0 = invoker.longValue__J(lcA0);
var stA0 = (refs_java_lang_Long || (refs_java_lang_Long = vm.java_lang_Long(false)))['toString__Ljava_lang_String_2J'](stL0);
return stA0;
    }
    X_43: for (;;) { IF: if (gt <= 43) {

var stI0 = lcA0 != null && lcA0['$instOf_java_lang_Float'] ? 1 : 0;
if ((stI0) == 0) { gt = 61; break IF; }
if (lcA0 !== null && !lcA0['$instOf_java_lang_Float']) vm.java_lang_Class(false).castEx(lcA0, 'java.lang.Float');
var stF0 = invoker.floatValue__F(lcA0);
var stA0 = (refs_java_lang_Float || (refs_java_lang_Float = vm.java_lang_Float(false)))['toString__Ljava_lang_String_2F'](stF0);
return stA0;
    }
    X_61: for (;;) { IF: if (gt <= 61) {

var stI0 = lcA0 != null && lcA0['$instOf_java_lang_Double'] ? 1 : 0;
if ((stI0) == 0) { gt = 79; break IF; }
if (lcA0 !== null && !lcA0['$instOf_java_lang_Double']) vm.java_lang_Class(false).castEx(lcA0, 'java.lang.Double');
var stD0 = invoker.doubleValue__D(lcA0);
var stA0 = (refs_java_lang_Double || (refs_java_lang_Double = vm.java_lang_Double(false)))['toString__Ljava_lang_String_2D'](stD0);
return stA0;
    }
    X_79: for (;;) { IF: if (gt <= 79) {

if (lcA0 !== null && !lcA0['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(lcA0, 'java.lang.String');
return lcA0;

    }
}}}}}}}
};
    m.access = 9;
    m.cls = CLS;
    m = c.numberValue__Ljava_lang_Number_2Ljava_lang_Object_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = lcA0 != null && lcA0['$instOf_java_lang_String'] ? 1 : 0;
if ((stI0) == 0) { gt = 23; break IF; }
try {
if (lcA0 !== null && !lcA0['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(lcA0, 'java.lang.String');
var stA0 = (refs_java_lang_Double || (refs_java_lang_Double = vm.java_lang_Double(false)))['valueOf__Ljava_lang_Double_2Ljava_lang_String_2'](lcA0);
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_NumberFormatException']) {var stA0 = e;{ gt = 15; break IF; }}
throw e;
}return stA0;
    }
    X_15: for (;;) { IF: if (gt <= 15) {
var lcA1 = stA0;
var stA0 = (refs_java_lang_Double || (refs_java_lang_Double = vm.java_lang_Double(false)))['valueOf__Ljava_lang_Double_2D'](NaN);
return stA0;
    }
    X_23: for (;;) { IF: if (gt <= 23) {

var stI0 = lcA0 != null && lcA0['$instOf_java_lang_Boolean'] ? 1 : 0;
if ((stI0) == 0) { gt = 49; break IF; }
if (lcA0 !== null && !lcA0['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(lcA0, 'java.lang.Boolean');
var stI0 = invoker.booleanValue__Z(lcA0);
if ((stI0) == 0) { gt = 44; break IF; }
var stI0 = 1;{ gt = 45; break IF; }
    }
    X_44: for (;;) { IF: if (gt <= 44) {

var stI0 = 0;    }
    X_45: for (;;) { IF: if (gt <= 45) {
var stA0 = (refs_java_lang_Integer || (refs_java_lang_Integer = vm.java_lang_Integer(false)))['valueOf__Ljava_lang_Integer_2I'](stI0);
return stA0;
    }
    X_49: for (;;) { IF: if (gt <= 49) {

if (lcA0 !== null && !lcA0['$instOf_java_lang_Number']) vm.java_lang_Class(false).castEx(lcA0, 'java.lang.Number');
return lcA0;

    }
}}}}}}
};
    m.access = 9;
    m.cls = CLS;
    m = c.charValue__Ljava_lang_Character_2Ljava_lang_Object_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = lcA0 != null && lcA0['$instOf_java_lang_Number'] ? 1 : 0;
if ((stI0) == 0) { gt = 23; break IF; }
var stA0 = c.numberValue__Ljava_lang_Number_2Ljava_lang_Object_2(lcA0);
var stI0 = invoker.intValue__I(stA0);
var stA0 = (refs_java_lang_Character || (refs_java_lang_Character = vm.java_lang_Character(false)))['toChars___3CI'](stI0);
var stA0 = (refs_java_lang_Character || (refs_java_lang_Character = vm.java_lang_Character(false)))['valueOf__Ljava_lang_Character_2C']((stA0[0] || Array.at(stA0, 0)));
return stA0;
    }
    X_23: for (;;) { IF: if (gt <= 23) {

var stI0 = lcA0 != null && lcA0['$instOf_java_lang_Boolean'] ? 1 : 0;
if ((stI0) == 0) { gt = 49; break IF; }
if (lcA0 !== null && !lcA0['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(lcA0, 'java.lang.Boolean');
var stI0 = invoker.booleanValue__Z(lcA0);
if ((stI0) == 0) { gt = 44; break IF; }
var stI0 = 1;{ gt = 45; break IF; }
    }
    X_44: for (;;) { IF: if (gt <= 44) {

var stI0 = 0;    }
    X_45: for (;;) { IF: if (gt <= 45) {
var stA0 = (refs_java_lang_Character || (refs_java_lang_Character = vm.java_lang_Character(false)))['valueOf__Ljava_lang_Character_2C'](stI0);
return stA0;
    }
    X_49: for (;;) { IF: if (gt <= 49) {

var stI0 = lcA0 != null && lcA0['$instOf_java_lang_String'] ? 1 : 0;
if ((stI0) == 0) { gt = 81; break IF; }
if (lcA0 !== null && !lcA0['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(lcA0, 'java.lang.String');
var lcA1 = lcA0;
var stI0 = invoker.isEmpty__Z(lcA1);
if ((stI0) == 0) { gt = 72; break IF; }
var stI0 = 0;{ gt = 77; break IF; }
    }
    X_72: for (;;) { IF: if (gt <= 72) {

var stI0 = invoker.charAt__CI(lcA1,0);
    }
    X_77: for (;;) { IF: if (gt <= 77) {
var stA0 = (refs_java_lang_Character || (refs_java_lang_Character = vm.java_lang_Character(false)))['valueOf__Ljava_lang_Character_2C'](stI0);
return stA0;
    }
    X_81: for (;;) { IF: if (gt <= 81) {

if (lcA0 !== null && !lcA0['$instOf_java_lang_Character']) vm.java_lang_Class(false).castEx(lcA0, 'java.lang.Character');
return lcA0;

    }
}}}}}}}}
};
    m.access = 9;
    m.cls = CLS;
    m = c.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = lcA0 != null && lcA0['$instOf_java_lang_String'] ? 1 : 0;
if ((stI0) == 0) { gt = 18; break IF; }
if (lcA0 !== null && !lcA0['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(lcA0, 'java.lang.String');
var stI0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['parseBoolean__ZLjava_lang_String_2'](lcA0);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

var stI0 = lcA0 != null && lcA0['$instOf_java_lang_Number'] ? 1 : 0;
if ((stI0) == 0) { gt = 46; break IF; }
var stA0 = c.numberValue__Ljava_lang_Number_2Ljava_lang_Object_2(lcA0);
var stD0 = invoker.doubleValue__D(stA0);
var stI0 = (stD0 == 0) ? 0 : ((stD0 < 0) ? -1 : 1);
if ((stI0) == 0) { gt = 41; break IF; }
var stI0 = 1;{ gt = 42; break IF; }
    }
    X_41: for (;;) { IF: if (gt <= 41) {

var stI0 = 0;    }
    X_42: for (;;) { IF: if (gt <= 42) {
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_46: for (;;) { IF: if (gt <= 46) {

var stI0 = invoker.equals__ZLjava_lang_Object_2((refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['_TRUE'](),lcA0);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;

    }
}}}}}
};
    m.access = 9;
    m.cls = CLS;
    m = c.find__Ljava_lang_Object_2Ljava_lang_Object_2Lorg_netbeans_html_json_impl_Bindings_2 = function(lcA0, lcA1) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((lcA0) !== null) { gt = 6; break IF; }
return null;
    }
    X_6: for (;;) { IF: if (gt <= 6) {

var stI0 = lcA0 != null && lcA0['$instOf_org_netbeans_html_json_impl_JSONList'] ? 1 : 0;
if ((stI0) == 0) { gt = 21; break IF; }
if (lcA0 !== null && !lcA0['$instOf_org_netbeans_html_json_impl_JSONList']) vm.java_lang_Class(false).castEx(lcA0, 'org.netbeans.html.json.impl.JSONList');
var stA0 = lcA0.koData__Ljava_lang_Object_2();
return stA0;
    }
    X_21: for (;;) { IF: if (gt <= 21) {

var stI0 = lcA0 != null && lcA0['$instOf_java_util_Collection'] ? 1 : 0;
if ((stI0) == 0) { gt = 37; break IF; }
if (lcA0 !== null && !lcA0['$instOf_java_util_Collection']) vm.java_lang_Class(false).castEx(lcA0, 'java.util.Collection');
var stA0 = (refs_org_netbeans_html_json_impl_JSONList || (refs_org_netbeans_html_json_impl_JSONList = org_netbeans_html_json_impl_JSONList(false))).koData__Ljava_lang_Object_2Ljava_util_Collection_2Lorg_netbeans_html_json_impl_Bindings_2(lcA0, lcA1);
return stA0;
    }
    X_37: for (;;) { IF: if (gt <= 37) {

var stI0 = lcA0 != null && lcA0['$instOf_java_lang_String'] ? 1 : 0;
if ((stI0) != 0) { gt = 72; break IF; }
var stI0 = lcA0 != null && lcA0['$instOf_java_lang_Boolean'] ? 1 : 0;
if ((stI0) != 0) { gt = 72; break IF; }
var stI0 = lcA0 != null && lcA0['$instOf_java_lang_Number'] ? 1 : 0;
if ((stI0) != 0) { gt = 72; break IF; }
var stI0 = lcA0 != null && lcA0['$instOf_java_lang_Character'] ? 1 : 0;
if ((stI0) != 0) { gt = 72; break IF; }
var stI0 = lcA0 != null && lcA0['$instOf_java_lang_Enum'] ? 1 : 0;
if ((stI0) == 0) { gt = 74; break IF; }
    }
    X_72: for (;;) { IF: if (gt <= 72) {

return lcA0;
    }
    X_74: for (;;) { IF: if (gt <= 74) {

var stA0 = c.findProto__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2(lcA0);
var lcA2 = stA0;
if ((lcA2) !== null) { gt = 85; break IF; }
return null;
    }
    X_85: for (;;) { IF: if (gt <= 85) {

var stA0 = (refs_org_netbeans_html_json_impl_PropertyBindingAccessor || (refs_org_netbeans_html_json_impl_PropertyBindingAccessor = org_netbeans_html_json_impl_PropertyBindingAccessor(false))).getBindings__Lorg_netbeans_html_json_impl_Bindings_2Lorg_netbeans_html_json_spi_Proto_2ZLjava_lang_Object_2(lcA2, 1, null);
var lcA3 = stA0;
if ((lcA3) !== null) { gt = 100; break IF; }
var stA0 = null;{ gt = 104; break IF; }
    }
    X_100: for (;;) { IF: if (gt <= 100) {

var stA0 = lcA3.jsObj__Ljava_lang_Object_2();
    }
    X_104: for (;;) { IF: if (gt <= 104) {
return stA0;

    }
}}}}}}}}}
};
    m.access = 9;
    m.cls = CLS;
    m = c.findProto__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = invoker.getClass__Ljava_lang_Class_2(lcA0);
var stA0 = c.findType__Lorg_netbeans_html_json_spi_Proto$Type_2Ljava_lang_Class_2(stA0);
var lcA1 = stA0;
if ((lcA1) !== null) { gt = 14; break IF; }
return null;
    }
    X_14: for (;;) { IF: if (gt <= 14) {

var stA0 = (refs_org_netbeans_html_json_impl_PropertyBindingAccessor || (refs_org_netbeans_html_json_impl_PropertyBindingAccessor = org_netbeans_html_json_impl_PropertyBindingAccessor(false))).protoFor__Lorg_netbeans_html_json_spi_Proto_2Lorg_netbeans_html_json_spi_Proto$Type_2Ljava_lang_Object_2(lcA1, lcA0);
var lcA2 = stA0;
return lcA2;

    }
}}
};
    m.access = 10;
    m.cls = CLS;
    m = c.find__Ljava_lang_Object_2Ljava_lang_Object_2 = function(lcA0) {
var stA0 = c.find__Ljava_lang_Object_2Ljava_lang_Object_2Lorg_netbeans_html_json_impl_Bindings_2(lcA0, null);
return stA0;

};
    m.access = 9;
    m.cls = CLS;
    m = c.applyBindings__VLjava_lang_Object_2Ljava_lang_String_2 = function(lcA0, lcA1) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = c.findProto__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2(lcA0);
var lcA2 = stA0;
if ((lcA2) !== null) { gt = 39; break IF; }
var stA0 = new vm.java_lang_IllegalArgumentException;
var stA1 = stA0;var stA2 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"Not a model: ");
var stA3 = invoker.getClass__Ljava_lang_Class_2(lcA0);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2(stA2,stA3);
var stA2 = invoker.toString__Ljava_lang_String_2(stA2);
(refs_java_lang_IllegalArgumentException || (refs_java_lang_IllegalArgumentException = vm.java_lang_IllegalArgumentException(false))).constructor['cons__VLjava_lang_String_2'].call(stA1, stA2);
{ var stA0 = stA0; throw stA0; }
    }
    X_39: for (;;) { IF: if (gt <= 39) {

lcA2.applyBindings__VLjava_lang_String_2(lcA1);
return;

    }
}}
};
    m.access = 9;
    m.cls = CLS;
    m = c.initModelTypes__Lorg_netbeans_html_json_impl_ModelTypes_2Ljava_lang_String_2Ljava_lang_String_2 = function(lcA0, lcA1) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var lcA2 = null;
try {
var stA0 = (refs_java_lang_Class || (refs_java_lang_Class = vm.java_lang_Class(false)))['forName__Ljava_lang_Class_2Ljava_lang_String_2'](lcA0);
var stA0 = (refs_java_lang_Class || (refs_java_lang_Class = vm.java_lang_Class(false)))['forName__Ljava_lang_Class_2Ljava_lang_String_2'](lcA1);
var lcA3 = stA0;
var stA0 = invoker.newInstance__Ljava_lang_Object_2(lcA3);
if (stA0 !== null && !stA0['$instOf_org_netbeans_html_json_impl_ModelTypes']) vm.java_lang_Class(false).castEx(stA0, 'org.netbeans.html.json.impl.ModelTypes');
var lcA2 = stA0;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_ClassNotFoundException']) {var stA0 = e;{ gt = 35; break IF; }}
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_NoClassDefFoundError']) {var stA0 = e;{ gt = 51; break IF; }}
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_Throwable']) {var stA0 = e;{ gt = 67; break IF; }}
var stA0 = e;{ gt = 87; break IF; }
}
if ((lcA2) !== null) { gt = 104; break IF; }
var stA0 = new org_netbeans_html_json_impl_LinkedListTypes;
(refs_org_netbeans_html_json_impl_LinkedListTypes || (refs_org_netbeans_html_json_impl_LinkedListTypes = org_netbeans_html_json_impl_LinkedListTypes(false))).constructor.cons__V.call(stA0);
var lcA2 = stA0;
{ gt = 104; break IF; }
    }
    X_35: for (;;) { IF: if (gt <= 35) {
var lcA3 = stA0;
if ((lcA2) !== null) { gt = 104; break IF; }
var stA0 = new org_netbeans_html_json_impl_LinkedListTypes;
(refs_org_netbeans_html_json_impl_LinkedListTypes || (refs_org_netbeans_html_json_impl_LinkedListTypes = org_netbeans_html_json_impl_LinkedListTypes(false))).constructor.cons__V.call(stA0);
var lcA2 = stA0;
{ gt = 104; break IF; }
    }
    X_51: for (;;) { IF: if (gt <= 51) {
var lcA3 = stA0;
if ((lcA2) !== null) { gt = 104; break IF; }
var stA0 = new org_netbeans_html_json_impl_LinkedListTypes;
(refs_org_netbeans_html_json_impl_LinkedListTypes || (refs_org_netbeans_html_json_impl_LinkedListTypes = org_netbeans_html_json_impl_LinkedListTypes(false))).constructor.cons__V.call(stA0);
var lcA2 = stA0;
{ gt = 104; break IF; }
    }
    X_67: for (;;) { IF: if (gt <= 67) {
try {var lcA3 = stA0;
invoker.printStackTrace__V(lcA3);
} catch (e) {
var stA0 = e;{ gt = 87; break IF; }
}
if ((lcA2) !== null) { gt = 104; break IF; }
var stA0 = new org_netbeans_html_json_impl_LinkedListTypes;
(refs_org_netbeans_html_json_impl_LinkedListTypes || (refs_org_netbeans_html_json_impl_LinkedListTypes = org_netbeans_html_json_impl_LinkedListTypes(false))).constructor.cons__V.call(stA0);
var lcA2 = stA0;
{ gt = 104; break IF; }
    }
    X_87: for (;;) { IF: if (gt <= 87) {
try {var lcA4 = stA0;
} catch (e) {
var stA0 = e;{ gt = 0; continue X_87; }
}
if ((lcA2) !== null) { gt = 101; break IF; }
var stA0 = new org_netbeans_html_json_impl_LinkedListTypes;
(refs_org_netbeans_html_json_impl_LinkedListTypes || (refs_org_netbeans_html_json_impl_LinkedListTypes = org_netbeans_html_json_impl_LinkedListTypes(false))).constructor.cons__V.call(stA0);
var lcA2 = stA0;
    }
    X_101: for (;;) { IF: if (gt <= 101) {

{ var stA0 = lcA4; throw lcA4; }
    }
    X_104: for (;;) { IF: if (gt <= 104) {

return lcA2;

    }
}}}}}}}
};
    m.access = 8;
    m.cls = CLS;
    m = c.register__VLjava_lang_Class_2Lorg_netbeans_html_json_spi_Proto$Type_2 = function(lcA0, lcA1) {
var stA0 = (refs_org_netbeans_html_json_impl_ModelTypes || (refs_org_netbeans_html_json_impl_ModelTypes = org_netbeans_html_json_impl_ModelTypes(false)))._MODELS().find___3Lorg_netbeans_html_json_spi_Proto$Type_2Ljava_lang_Class_2(lcA0);
Array.at(stA0, 0, lcA1);
return;

};
    m.access = 9;
    m.cls = CLS;
    m = c.isModel__ZLjava_lang_Class_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = c.findType__Lorg_netbeans_html_json_spi_Proto$Type_2Ljava_lang_Class_2(lcA0);
if ((stA0) === null) { gt = 11; break IF; }
var stI0 = 1;{ gt = 12; break IF; }
    }
    X_11: for (;;) { IF: if (gt <= 11) {

var stI0 = 0;    }
    X_12: for (;;) { IF: if (gt <= 12) {
return stI0;

    }
}}}
};
    m.access = 9;
    m.cls = CLS;
    m = c.findType__Lorg_netbeans_html_json_spi_Proto$Type_2Ljava_lang_Class_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var lcI1 = 0;
    }
    X_2: for (;;) { IF: if (gt <= 2) {

if ((lcI1) >= (2)) { gt = 38; break IF; }
var stA0 = (refs_org_netbeans_html_json_impl_ModelTypes || (refs_org_netbeans_html_json_impl_ModelTypes = org_netbeans_html_json_impl_ModelTypes(false)))._MODELS().find___3Lorg_netbeans_html_json_spi_Proto$Type_2Ljava_lang_Class_2(lcA0);
var lcA2 = (stA0[0] || Array.at(stA0, 0));
if ((lcA2) !== null) { gt = 30; break IF; }
c.initClass__VLjava_lang_Class_2(lcA0);
{ gt = 32; break IF; }
    }
    X_30: for (;;) { IF: if (gt <= 30) {

return lcA2;
    }
    X_32: for (;;) { IF: if (gt <= 32) {
lcI1++;
{ gt = 0; continue X_2; }
    }
    X_38: for (;;) { IF: if (gt <= 38) {

return null;

    }
}}}}}
};
    m.access = 8;
    m.cls = CLS;
    m = c.bindTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2 = function(lcA0, lcA1) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = invoker.getClass__Ljava_lang_Class_2(lcA0);
var stA0 = c.findType__Lorg_netbeans_html_json_spi_Proto$Type_2Ljava_lang_Class_2(stA0);
var lcA2 = stA0;
if ((lcA2) !== null) { gt = 20; break IF; }
var stA0 = new vm.java_lang_IllegalArgumentException;
(refs_java_lang_IllegalArgumentException || (refs_java_lang_IllegalArgumentException = vm.java_lang_IllegalArgumentException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }
    }
    X_20: for (;;) { IF: if (gt <= 20) {

var stA0 = (refs_org_netbeans_html_json_impl_PropertyBindingAccessor || (refs_org_netbeans_html_json_impl_PropertyBindingAccessor = org_netbeans_html_json_impl_PropertyBindingAccessor(false))).clone__Ljava_lang_Object_2Lorg_netbeans_html_json_spi_Proto$Type_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2(lcA2, lcA0, lcA1);
return stA0;

    }
}}
};
    m.access = 9;
    m.cls = CLS;
    m = c.readStream__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2Ljava_io_InputStream_2Ljava_util_Collection_2 = function(lcA0, lcA1, lcA2, lcA3) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = c.findTransfer__Lorg_netbeans_html_json_spi_Transfer_2Lnet_java_html_BrwsrCtx_2(lcA0);
var lcA4 = stA0;
var stA0 = invoker.toJSON__Ljava_lang_Object_2Ljava_io_InputStream_2(lcA4,lcA2);
var lcA5 = stA0;
var stI0 = Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](lcA5, 1, vm.java_lang_Object);
if ((stI0) == 0) { gt = 96; break IF; }
if (lcA5 !== null && !Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](lcA5, 1, vm.java_lang_Object)) vm.java_lang_Class(false).castEx(lcA5, '');
if (lcA5 !== null && !Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](lcA5, 1, vm.java_lang_Object)) vm.java_lang_Class(false).castEx(lcA5, '');
var lcA6 = lcA5;
if ((lcA3) === null) { gt = 74; break IF; }
var lcI7 = 0;
    }
    X_41: for (;;) { IF: if (gt <= 41) {

if ((lcI7) >= ((lcA6).length)) { gt = 72; break IF; }
var stA0 = lcA3;var stA1 = c.read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0, lcA1, (lcA6[lcI7] || Array.at(lcA6, lcI7)));
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,stA1);
lcI7++;
{ gt = 0; continue X_41; }
    }
    X_72: for (;;) { IF: if (gt <= 72) {

return null;
    }
    X_74: for (;;) { IF: if (gt <= 74) {

if (((lcA6).length) != 0) { gt = 90; break IF; }
var stA0 = new vm.java_io_EOFException;
(refs_java_io_EOFException || (refs_java_io_EOFException = vm.java_io_EOFException(false))).constructor['cons__VLjava_lang_String_2'].call(stA0, "Recieved an empty array");
{ var stA0 = stA0; throw stA0; }
    }
    X_90: for (;;) { IF: if (gt <= 90) {

var lcA5 = (lcA6[0] || Array.at(lcA6, 0));
    }
    X_96: for (;;) { IF: if (gt <= 96) {

var stA0 = c.read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0, lcA1, lcA5);
var lcA6 = stA0;
if ((lcA3) === null) { gt = 118; break IF; }
var stI0 = invoker.add__ZLjava_lang_Object_2(lcA3,lcA6);
    }
    X_118: for (;;) { IF: if (gt <= 118) {

return lcA6;

    }
}}}}}}}
};
    m.access = 9;
    m.cls = CLS;
    m = c.read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2Ljava_lang_Object_2 = function(lcA0, lcA1, lcA2) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((lcA2) !== null) { gt = 6; break IF; }
return null;
    }
    X_6: for (;;) { IF: if (gt <= 6) {

if ((lcA1) !== ((refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class)) { gt = 21; break IF; }
var stA0 = lcA1;var stA1 = invoker.toString__Ljava_lang_String_2(lcA2);
var stA0 = invoker.cast__Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1);
return stA0;
    }
    X_21: for (;;) { IF: if (gt <= 21) {

var lcI3 = 0;
    }
    X_23: for (;;) { IF: if (gt <= 23) {

if ((lcI3) >= (2)) { gt = 71; break IF; }
var stA0 = (refs_org_netbeans_html_json_impl_ModelTypes || (refs_org_netbeans_html_json_impl_ModelTypes = org_netbeans_html_json_impl_ModelTypes(false)))._MODELS().find___3Lorg_netbeans_html_json_spi_Proto$Type_2Ljava_lang_Class_2(lcA1);
var lcA4 = (stA0[0] || Array.at(stA0, 0));
if ((lcA4) !== null) { gt = 53; break IF; }
c.initClass__VLjava_lang_Class_2(lcA1);
{ gt = 65; break IF; }
    }
    X_53: for (;;) { IF: if (gt <= 53) {

var stA0 = lcA1;var stA1 = (refs_org_netbeans_html_json_impl_PropertyBindingAccessor || (refs_org_netbeans_html_json_impl_PropertyBindingAccessor = org_netbeans_html_json_impl_PropertyBindingAccessor(false))).readFrom__Ljava_lang_Object_2Lorg_netbeans_html_json_spi_Proto$Type_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2(lcA4, lcA0, lcA2);
var stA0 = invoker.cast__Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1);
return stA0;
    }
    X_65: for (;;) { IF: if (gt <= 65) {
lcI3++;
{ gt = 0; continue X_23; }
    }
    X_71: for (;;) { IF: if (gt <= 71) {
var stA0 = new vm.java_lang_NullPointerException;
(refs_java_lang_NullPointerException || (refs_java_lang_NullPointerException = vm.java_lang_NullPointerException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

    }
}}}}}}}
};
    m.access = 9;
    m.cls = CLS;
    m = c.initClass__VLjava_lang_Class_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
try {
var stA0 = invoker.getClassLoader__Ljava_lang_ClassLoader_2(lcA0);
var lcA1 = stA0;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_SecurityException']) {var stA0 = e;{ gt = 8; break IF; }}
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_Exception']) {var stA0 = e;{ gt = 33; break IF; }}
throw e;
}try {{ gt = 11; break IF; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_Exception']) {var stA0 = e;{ gt = 33; break IF; }}
throw e;
}    }
    X_8: for (;;) { IF: if (gt <= 8) {
try {var lcA2 = stA0;
var lcA1 = null;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_Exception']) {var stA0 = e;{ gt = 33; break IF; }}
throw e;
}    }
    X_11: for (;;) { IF: if (gt <= 11) {
try {
if ((lcA1) === null) { gt = 25; break IF; }
var stA0 = invoker.getName__Ljava_lang_String_2(lcA0);
var stA0 = (refs_java_lang_Class || (refs_java_lang_Class = vm.java_lang_Class(false)))['forName__Ljava_lang_Class_2Ljava_lang_String_2ZLjava_lang_ClassLoader_2'](stA0, 1, lcA1);
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_Exception']) {var stA0 = e;{ gt = 33; break IF; }}
throw e;
}    }
    X_25: for (;;) { IF: if (gt <= 25) {
try {
var stA0 = invoker.newInstance__Ljava_lang_Object_2(lcA0);
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_Exception']) {var stA0 = e;{ gt = 33; break IF; }}
throw e;
}{ gt = 34; break IF; }
    }
    X_33: for (;;) { IF: if (gt <= 33) {
var lcA1 = stA0;
    }
    X_34: for (;;) { IF: if (gt <= 34) {
return;

    }
}}}}}}
};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_json_impl_JSONfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_json_impl_JSON', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_json_impl_JSONfillInstOf });
    org_netbeans_html_json_impl_JSONfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/json/impl/JSON';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    var refs_org_netbeans_html_json_spi_Technology;
    var refs_org_netbeans_html_context_spi_Contexts;
    var refs_org_netbeans_html_json_impl_JSON$EmptyTech;
    var refs_org_netbeans_html_json_spi_Transfer;
    var refs_org_netbeans_html_json_spi_WSTransfer;
    var refs_org_netbeans_html_json_impl_PropertyBindingAccessor;
    var refs_java_lang_Character;
    var refs_java_lang_StringBuilder;
    var refs_java_lang_Integer;
    var refs_java_lang_Double;
    var refs_java_lang_Number;
    var refs_java_lang_Boolean;
    var refs_java_lang_String;
    var refs_java_lang_Long;
    var refs_java_lang_Short;
    var refs_java_lang_Byte;
    var refs_java_lang_Float;
    var refs_org_netbeans_html_json_impl_JSONList;
    var refs_java_lang_IllegalArgumentException;
    var refs_java_lang_Class;
    var refs_org_netbeans_html_json_impl_LinkedListTypes;
    var refs_org_netbeans_html_json_impl_ModelTypes;
    var refs_java_io_EOFException;
    var refs_java_lang_NullPointerException;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_netbeans_html_json_impl_JSON = org_netbeans_html_json_impl_JSON;

vm.java_lang_SecurityException = link('java/lang/SecurityException', function(f) { vm.java_lang_SecurityException =  f; });
vm.java_lang_NullPointerException = link('java/lang/NullPointerException', function(f) { vm.java_lang_NullPointerException =  f; });
vm.java_io_EOFException = link('java/io/EOFException', function(f) { vm.java_io_EOFException =  f; });

function org_netbeans_html_json_impl_ModelTypes() {
  var m;
  var CLS = org_netbeans_html_json_impl_ModelTypes;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_MODELS'] = null;
  m = c._MODELS = function (v) {  if (arguments.length == 1) CLS['fld_MODELS'] = v; return CLS['fld_MODELS']; };
    m = c.find___3Lorg_netbeans_html_json_spi_Proto$Type_2Ljava_lang_Class_2 = function(lcA1) {
};
    m.access = 1025;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = (refs_org_netbeans_html_json_impl_JSON || (refs_org_netbeans_html_json_impl_JSON = org_netbeans_html_json_impl_JSON(false))).initModelTypes__Lorg_netbeans_html_json_impl_ModelTypes_2Ljava_lang_String_2Ljava_lang_String_2("java.lang.ClassValue", "org.netbeans.html.json.impl.ClassValueTypes");
c._MODELS(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_json_impl_ModelTypesfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_json_impl_ModelTypes', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_json_impl_ModelTypesfillInstOf });
    org_netbeans_html_json_impl_ModelTypesfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/json/impl/ModelTypes';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 1536;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_org_netbeans_html_json_impl_JSON;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_netbeans_html_json_impl_ModelTypes = org_netbeans_html_json_impl_ModelTypes;


function org_netbeans_html_json_impl_LinkedListTypes() {
  var m;
  var CLS = org_netbeans_html_json_impl_LinkedListTypes;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._items = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_json_impl_LinkedListTypes_items'] = v; return this['fld_org_netbeans_html_json_impl_LinkedListTypes_items']; };
    m = CLS.cons__V = function() {
  var  lcA0 = this;
return;

};
CLS['cons__V'] = m;

    m.access = 0;
    m.cls = CLS;
    m = c.find___3Lorg_netbeans_html_json_spi_Proto$Type_2Ljava_lang_Class_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var lcA2 = lcA0['fld_org_netbeans_html_json_impl_LinkedListTypes_items'];
    }
    X_5: for (;;) { IF: if (gt <= 5) {

if ((lcA2) === null) { gt = 30; break IF; }
if ((lcA2['fld_org_netbeans_html_json_impl_LinkedListTypes$Item_clazz']) !== (lcA1)) { gt = 22; break IF; }
return lcA2['fld_org_netbeans_html_json_impl_LinkedListTypes$Item_type'];
    }
    X_22: for (;;) { IF: if (gt <= 22) {

var lcA2 = lcA2['fld_org_netbeans_html_json_impl_LinkedListTypes$Item_next'];
{ gt = 0; continue X_5; }
    }
    X_30: for (;;) { IF: if (gt <= 30) {
var stA0 = new org_netbeans_html_json_impl_LinkedListTypes$Item;
(refs_org_netbeans_html_json_impl_LinkedListTypes$Item || (refs_org_netbeans_html_json_impl_LinkedListTypes$Item = org_netbeans_html_json_impl_LinkedListTypes$Item(false))).constructor.cons__VLorg_netbeans_html_json_impl_LinkedListTypes$Item_2Ljava_lang_Class_2.call(stA0, lcA0['fld_org_netbeans_html_json_impl_LinkedListTypes_items'], lcA1);
var lcA2 = stA0;
lcA0['fld_org_netbeans_html_json_impl_LinkedListTypes_items'] = lcA2;
return lcA2['fld_org_netbeans_html_json_impl_LinkedListTypes$Item_type'];

    }
}}}}
};
    m.access = 33;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_json_impl_LinkedListTypesfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_json_impl_LinkedListTypes', { value : true });
      vm.org_netbeans_html_json_impl_ModelTypes(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_json_impl_LinkedListTypesfillInstOf });
    org_netbeans_html_json_impl_LinkedListTypesfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/json/impl/LinkedListTypes';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        org_netbeans_html_json_impl_ModelTypes(false).constructor.$class
    ]; };
    CLS.$class.access = 48;
    CLS.$class.cnstr = CLS;
    var refs_org_netbeans_html_json_impl_LinkedListTypes$Item;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_org_netbeans_html_json_impl_LinkedListTypes_items'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_netbeans_html_json_impl_LinkedListTypes = org_netbeans_html_json_impl_LinkedListTypes;


function org_netbeans_html_json_impl_LinkedListTypes$Item() {
  var m;
  var CLS = org_netbeans_html_json_impl_LinkedListTypes$Item;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._next = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_json_impl_LinkedListTypes$Item_next'] = v; return this['fld_org_netbeans_html_json_impl_LinkedListTypes$Item_next']; };
  m = c._clazz = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_json_impl_LinkedListTypes$Item_clazz'] = v; return this['fld_org_netbeans_html_json_impl_LinkedListTypes$Item_clazz']; };
  m = c._type = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_json_impl_LinkedListTypes$Item_type'] = v; return this['fld_org_netbeans_html_json_impl_LinkedListTypes$Item_type']; };
    m = CLS.cons__VLorg_netbeans_html_json_impl_LinkedListTypes$Item_2Ljava_lang_Class_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lorg/netbeans/html/json/spi/Proto$Type;', vm.org_netbeans_html_json_spi_Proto$Type, 1);
Array.at(stA1, 0, null);
stA0['fld_org_netbeans_html_json_impl_LinkedListTypes$Item_type'] = stA1;
lcA0['fld_org_netbeans_html_json_impl_LinkedListTypes$Item_next'] = lcA1;
lcA0['fld_org_netbeans_html_json_impl_LinkedListTypes$Item_clazz'] = lcA2;
return;

};
    m.access = 0;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_json_impl_LinkedListTypes$ItemfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_json_impl_LinkedListTypes$Item', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_json_impl_LinkedListTypes$ItemfillInstOf });
    org_netbeans_html_json_impl_LinkedListTypes$ItemfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/json/impl/LinkedListTypes$Item';
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
    this['fld_org_netbeans_html_json_impl_LinkedListTypes$Item_next'] = null;
    this['fld_org_netbeans_html_json_impl_LinkedListTypes$Item_clazz'] = null;
    this['fld_org_netbeans_html_json_impl_LinkedListTypes$Item_type'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_netbeans_html_json_impl_LinkedListTypes$Item = org_netbeans_html_json_impl_LinkedListTypes$Item;

vm.java_lang_NoClassDefFoundError = link('java/lang/NoClassDefFoundError', function(f) { vm.java_lang_NoClassDefFoundError =  f; });
vm.java_lang_IllegalArgumentException = link('java/lang/IllegalArgumentException', function(f) { vm.java_lang_IllegalArgumentException =  f; });
vm.java_lang_NumberFormatException = link('java/lang/NumberFormatException', function(f) { vm.java_lang_NumberFormatException =  f; });

function org_netbeans_html_json_spi_WSTransfer() {
  var m;
  var CLS = org_netbeans_html_json_spi_WSTransfer;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = c.open__Ljava_lang_Object_2Ljava_lang_String_2Lorg_netbeans_html_json_spi_JSONCall_2 = function(lcA1, lcA2) {
};
c['open__Ljava_lang_Object_2Ljava_lang_String_2Lorg_netbeans_html_json_spi_JSONCall_2'] = m;

    m.access = 1025;
    m.cls = CLS;
    m = c.send__VLjava_lang_Object_2Lorg_netbeans_html_json_spi_JSONCall_2 = function(lcA1, lcA2) {
};
c['send__VLjava_lang_Object_2Lorg_netbeans_html_json_spi_JSONCall_2'] = m;

    m.access = 1025;
    m.cls = CLS;
    m = c.close__VLjava_lang_Object_2 = function(lcA1) {
};
c['close__VLjava_lang_Object_2'] = m;

    m.access = 1025;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_json_spi_WSTransferfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_json_spi_WSTransfer', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_json_spi_WSTransferfillInstOf });
    org_netbeans_html_json_spi_WSTransferfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/json/spi/WSTransfer';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 1537;
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
vm.org_netbeans_html_json_spi_WSTransfer = registerClass(exports,'org_netbeans_html_json_spi_WSTransfer',org_netbeans_html_json_spi_WSTransfer);


function org_netbeans_html_json_spi_Transfer() {
  var m;
  var CLS = org_netbeans_html_json_spi_Transfer;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = c.extract__VLjava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Object_2 = function(lcA1, lcA2, lcA3) {
};
c['extract__VLjava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Object_2'] = m;

    m.access = 1025;
    m.cls = CLS;
    m = c.toJSON__Ljava_lang_Object_2Ljava_io_InputStream_2 = function(lcA1) {
};
c['toJSON__Ljava_lang_Object_2Ljava_io_InputStream_2'] = m;

    m.access = 1025;
    m.cls = CLS;
    m = c.loadJSON__VLorg_netbeans_html_json_spi_JSONCall_2 = function(lcA1) {
};
c['loadJSON__VLorg_netbeans_html_json_spi_JSONCall_2'] = m;

    m.access = 1025;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_json_spi_TransferfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_json_spi_Transfer', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_json_spi_TransferfillInstOf });
    org_netbeans_html_json_spi_TransferfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/json/spi/Transfer';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 1537;
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
vm.org_netbeans_html_json_spi_Transfer = registerClass(exports,'org_netbeans_html_json_spi_Transfer',org_netbeans_html_json_spi_Transfer);


function org_netbeans_html_json_impl_JSON$EmptyTech() {
  var m;
  var CLS = org_netbeans_html_json_impl_JSON$EmptyTech;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_EMPTY'] = null;
  m = c._EMPTY = function (v) {  if (arguments.length == 1) CLS['fld_EMPTY'] = v; return CLS['fld_EMPTY']; };
    m = CLS.cons__V = function() {
  var  lcA0 = this;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.wrapModel__Ljava_lang_Object_2Ljava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
return lcA1;

};
c['wrapModel__Ljava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.valueHasMutated__VLjava_lang_Object_2Ljava_lang_String_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
return;

};
c['valueHasMutated__VLjava_lang_Object_2Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.bind__VLorg_netbeans_html_json_spi_PropertyBinding_2Ljava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
return;

};
c['bind__VLorg_netbeans_html_json_spi_PropertyBinding_2Ljava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.expose__VLorg_netbeans_html_json_spi_FunctionBinding_2Ljava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
return;

};
c['expose__VLorg_netbeans_html_json_spi_FunctionBinding_2Ljava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.applyBindings__VLjava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
return;

};
c['applyBindings__VLjava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.wrapArray__Ljava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
return lcA1;

};
c['wrapArray__Ljava_lang_Object_2_3Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.extract__VLjava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Object_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var lcI4 = 0;
    }
    X_3: for (;;) { IF: if (gt <= 3) {

if ((lcI4) >= ((lcA3).length)) { gt = 21; break IF; }
Array.at(lcA3, lcI4, null);
lcI4++;
{ gt = 0; continue X_3; }
    }
    X_21: for (;;) { IF: if (gt <= 21) {
return;

    }
}}}
};
c['extract__VLjava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.loadJSON__VLorg_netbeans_html_json_spi_JSONCall_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = lcA1;var stA1 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA1);
stA0.notifyError__VLjava_lang_Throwable_2(stA1);
return;

};
c['loadJSON__VLorg_netbeans_html_json_spi_JSONCall_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.toModel__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = invoker.cast__Ljava_lang_Object_2Ljava_lang_Object_2(lcA1,lcA2);
return stA0;

};
c['toModel__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.toJSON__Ljava_lang_Object_2Ljava_io_InputStream_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = new vm.java_io_IOException;
(refs_java_io_IOException || (refs_java_io_IOException = vm.java_io_IOException(false))).constructor['cons__VLjava_lang_String_2'].call(stA0, "Not supported");
{ var stA0 = stA0; throw stA0; }

};
c['toJSON__Ljava_lang_Object_2Ljava_io_InputStream_2'] = m;

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
    m = c.open__Ljava_lang_Void_2Ljava_lang_String_2Lorg_netbeans_html_json_spi_JSONCall_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = lcA2;var stA1 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__VLjava_lang_String_2'].call(stA1, "WebSockets not supported!");
stA0.notifyError__VLjava_lang_Throwable_2(stA1);
return null;

};
    m.access = 1;
    m.cls = CLS;
    m = c.send__VLjava_lang_Void_2Lorg_netbeans_html_json_spi_JSONCall_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
return;

};
    m.access = 1;
    m.cls = CLS;
    m = c.close__VLjava_lang_Void_2 = function(lcA1) {
  var  lcA0 = this;
return;

};
    m.access = 1;
    m.cls = CLS;
    m = c.close__VLjava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_java_lang_Void']) vm.java_lang_Class(false).castEx(lcA1, 'java.lang.Void');
lcA0.close__VLjava_lang_Void_2(lcA1);
return;

};
c['close__VLjava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.send__VLjava_lang_Object_2Lorg_netbeans_html_json_spi_JSONCall_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_java_lang_Void']) vm.java_lang_Class(false).castEx(lcA1, 'java.lang.Void');
lcA0.send__VLjava_lang_Void_2Lorg_netbeans_html_json_spi_JSONCall_2(lcA1, lcA2);
return;

};
c['send__VLjava_lang_Object_2Lorg_netbeans_html_json_spi_JSONCall_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.open__Ljava_lang_Object_2Ljava_lang_String_2Lorg_netbeans_html_json_spi_JSONCall_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = lcA0.open__Ljava_lang_Void_2Ljava_lang_String_2Lorg_netbeans_html_json_spi_JSONCall_2(lcA1, lcA2);
return stA0;

};
c['open__Ljava_lang_Object_2Ljava_lang_String_2Lorg_netbeans_html_json_spi_JSONCall_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.access$000__Lorg_netbeans_html_json_impl_JSON$EmptyTech_2 = function() {
return c._EMPTY();

};
    m.access = 4104;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new org_netbeans_html_json_impl_JSON$EmptyTech;
c.constructor.cons__V.call(stA0);
c._EMPTY(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_json_impl_JSON$EmptyTechfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_json_impl_JSON$EmptyTech', { value : true });
      vm.org_netbeans_html_json_spi_Technology(false)['fillInstOf'](x);
      vm.org_netbeans_html_json_spi_Transfer(false)['fillInstOf'](x);
      vm.org_netbeans_html_json_spi_WSTransfer(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_json_impl_JSON$EmptyTechfillInstOf });
    org_netbeans_html_json_impl_JSON$EmptyTechfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/json/impl/JSON$EmptyTech';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        org_netbeans_html_json_spi_Technology(false).constructor.$class,
        org_netbeans_html_json_spi_Transfer(false).constructor.$class,
        org_netbeans_html_json_spi_WSTransfer(false).constructor.$class
    ]; };
    CLS.$class.access = 48;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_java_lang_UnsupportedOperationException;
    var refs_java_io_IOException;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_netbeans_html_json_impl_JSON$EmptyTech = org_netbeans_html_json_impl_JSON$EmptyTech;

vm.org_netbeans_html_context_spi_Contexts = link('org/netbeans/html/context/spi/Contexts', function(f) { vm.org_netbeans_html_context_spi_Contexts =  f; });

function org_netbeans_html_json_spi_Technology() {
  var m;
  var CLS = org_netbeans_html_json_spi_Technology;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = c.wrapModel__Ljava_lang_Object_2Ljava_lang_Object_2 = function(lcA1) {
};
c['wrapModel__Ljava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 1025;
    m.cls = CLS;
    m = c.toModel__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
};
c['toModel__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2'] = m;

    m.access = 1025;
    m.cls = CLS;
    m = c.bind__VLorg_netbeans_html_json_spi_PropertyBinding_2Ljava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcA2, lcA3) {
};
c['bind__VLorg_netbeans_html_json_spi_PropertyBinding_2Ljava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 1025;
    m.cls = CLS;
    m = c.valueHasMutated__VLjava_lang_Object_2Ljava_lang_String_2 = function(lcA1, lcA2) {
};
c['valueHasMutated__VLjava_lang_Object_2Ljava_lang_String_2'] = m;

    m.access = 1025;
    m.cls = CLS;
    m = c.expose__VLorg_netbeans_html_json_spi_FunctionBinding_2Ljava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcA2, lcA3) {
};
c['expose__VLorg_netbeans_html_json_spi_FunctionBinding_2Ljava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 1025;
    m.cls = CLS;
    m = c.applyBindings__VLjava_lang_Object_2 = function(lcA1) {
};
c['applyBindings__VLjava_lang_Object_2'] = m;

    m.access = 1025;
    m.cls = CLS;
    m = c.wrapArray__Ljava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1) {
};
c['wrapArray__Ljava_lang_Object_2_3Ljava_lang_Object_2'] = m;

    m.access = 1025;
    m.cls = CLS;
    m = c.runSafe__VLjava_lang_Runnable_2 = function(lcA1) {
};
c['runSafe__VLjava_lang_Runnable_2'] = m;

    m.anno = {"Ljava/lang/Deprecated;" : {

}

    };
    m.access = 1025;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_json_spi_TechnologyfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_json_spi_Technology', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_json_spi_TechnologyfillInstOf });
    org_netbeans_html_json_spi_TechnologyfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/json/spi/Technology';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 1537;
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
vm.org_netbeans_html_json_spi_Technology = registerClass(exports,'org_netbeans_html_json_spi_Technology',org_netbeans_html_json_spi_Technology);

vm.java_lang_Deprecated = link('java/lang/Deprecated', function(f) { vm.java_lang_Deprecated =  f; });

function org_netbeans_html_json_impl_SimpleList() {
  var m;
  var CLS = org_netbeans_html_json_impl_SimpleList;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._arr = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_json_impl_SimpleList_arr'] = v; return this['fld_org_netbeans_html_json_impl_SimpleList_arr']; };
  m = c._size = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_json_impl_SimpleList_size'] = v; return this['fld_org_netbeans_html_json_impl_SimpleList_size']; };
    m = CLS.cons__V = function() {
  var  lcA0 = this;
return;

};
CLS['cons__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__V_3Ljava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.clone__Ljava_lang_Object_2(lcA1);
if (stA1 !== null && !Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](stA1, 1, vm.java_lang_Object)) vm.java_lang_Class(false).castEx(stA1, '');
stA0['fld_org_netbeans_html_json_impl_SimpleList_arr'] = stA1;
lcA0['fld_org_netbeans_html_json_impl_SimpleList_size'] = (lcA1).length;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.asList__Ljava_util_List_2_3Ljava_lang_Object_2 = function(lcA0) {
var stA0 = new org_netbeans_html_json_impl_SimpleList;
c.constructor.cons__V_3Ljava_lang_Object_2.call(stA0, lcA0);
return stA0;

};
    m.access = 137;
    m.cls = CLS;
    m = c.size__I = function() {
  var  lcA0 = this;
return lcA0['fld_org_netbeans_html_json_impl_SimpleList_size'];

};
c['size__I'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isEmpty__Z = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((lcA0['fld_org_netbeans_html_json_impl_SimpleList_size']) != 0) { gt = 11; break IF; }
var stI0 = 1;{ gt = 12; break IF; }
    }
    X_11: for (;;) { IF: if (gt <= 11) {

var stI0 = 0;    }
    X_12: for (;;) { IF: if (gt <= 12) {
return stI0;

    }
}}}
};
c['isEmpty__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.contains__ZLjava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
var stI0 = lcA0.containsImpl__ZLjava_lang_Object_2II(lcA1, 0, lcA0['fld_org_netbeans_html_json_impl_SimpleList_size']);
return stI0;

};
c['contains__ZLjava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.containsImpl__ZLjava_lang_Object_2II = function(lcA1, lcI2, lcI3) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var lcI4 = lcI2;
    }
    X_3: for (;;) { IF: if (gt <= 3) {

if ((lcI4) >= (lcI3)) { gt = 31; break IF; }
var stI0 = c.equals__ZLjava_lang_Object_2Ljava_lang_Object_2(lcA1, (lcA0['fld_org_netbeans_html_json_impl_SimpleList_arr'][lcI4] || Array.at(lcA0['fld_org_netbeans_html_json_impl_SimpleList_arr'], lcI4)));
if ((stI0) == 0) { gt = 25; break IF; }
return 1;
    }
    X_25: for (;;) { IF: if (gt <= 25) {
lcI4++;
{ gt = 0; continue X_3; }
    }
    X_31: for (;;) { IF: if (gt <= 31) {

return 0;

    }
}}}}
};
    m.access = 16;
    m.cls = CLS;
    m = c.iterator__Ljava_util_Iterator_2 = function() {
  var  lcA0 = this;
var stA0 = new org_netbeans_html_json_impl_SimpleList$LI;
(refs_org_netbeans_html_json_impl_SimpleList$LI || (refs_org_netbeans_html_json_impl_SimpleList$LI = org_netbeans_html_json_impl_SimpleList$LI(false))).constructor.cons__VLorg_netbeans_html_json_impl_SimpleList_2II.call(stA0, lcA0, 0, lcA0['fld_org_netbeans_html_json_impl_SimpleList_size']);
return stA0;

};
c['iterator__Ljava_util_Iterator_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.toArray___3Ljava_lang_Object_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0.toArrayImpl___3Ljava_lang_Object_2II(0, lcA0['fld_org_netbeans_html_json_impl_SimpleList_size']);
return stA0;

};
c['toArray___3Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.toArrayImpl___3Ljava_lang_Object_2II = function(lcI1, lcI2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, (((lcI2) - (lcI1)) | 0));
var lcA3 = stA0;
var lcI4 = 0;
    }
    X_10: for (;;) { IF: if (gt <= 10) {

if ((lcI4) >= ((lcA3).length)) { gt = 36; break IF; }
Array.at(lcA3, lcI4, (lcA0['fld_org_netbeans_html_json_impl_SimpleList_arr'][(((lcI4) + (lcI1)) | 0)] || Array.at(lcA0['fld_org_netbeans_html_json_impl_SimpleList_arr'], (((lcI4) + (lcI1)) | 0))));
lcI4++;
{ gt = 0; continue X_10; }
    }
    X_36: for (;;) { IF: if (gt <= 36) {

return lcA3;

    }
}}}
};
    m.access = 16;
    m.cls = CLS;
    m = c.toArray___3Ljava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = lcA0.toArrayImpl___3Ljava_lang_Object_2_3Ljava_lang_Object_2II(lcA1, 0, lcA0['fld_org_netbeans_html_json_impl_SimpleList_size']);
return stA0;

};
c['toArray___3Ljava_lang_Object_2_3Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.toArrayImpl___3Ljava_lang_Object_2_3Ljava_lang_Object_2II = function(lcA1, lcI2, lcI3) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if (((lcA1).length) >= ((((lcI3) - (lcI2)) | 0))) { gt = 16; break IF; }
var stA0 = c.newArr___3Ljava_lang_Object_2_3Ljava_lang_Object_2I(lcA1, (((lcI3) - (lcI2)) | 0));
var lcA1 = stA0;
    }
    X_16: for (;;) { IF: if (gt <= 16) {

var lcI4 = lcI2;
    }
    X_19: for (;;) { IF: if (gt <= 19) {

if ((lcI4) >= (lcI3)) { gt = 44; break IF; }
Array.at(lcA1, (((lcI4) - (lcI2)) | 0), (lcA0['fld_org_netbeans_html_json_impl_SimpleList_arr'][lcI4] || Array.at(lcA0['fld_org_netbeans_html_json_impl_SimpleList_arr'], lcI4)));
lcI4++;
{ gt = 0; continue X_19; }
    }
    X_44: for (;;) { IF: if (gt <= 44) {

return lcA1;

    }
}}}}
};
    m.access = 16;
    m.cls = CLS;
    m = c.add__ZLjava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
var stI0 = c.addImpl__ZLjava_lang_Object_2.call(lcA0, lcA1);
return stI0;

};
c['add__ZLjava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.addImpl__ZLjava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
var stI0 = c.ensureAccess__II.call(lcA0, (((lcA0['fld_org_netbeans_html_json_impl_SimpleList_size']) + (1)) | 0));
var stA0 = lcA0['fld_org_netbeans_html_json_impl_SimpleList_arr'];var stA1 = lcA0;var stA2 = stA1;
var stI2 = stA2['fld_org_netbeans_html_json_impl_SimpleList_size'];var stI3 = stI2, stA2 = stA1, stI1 = stI3;
stA2['fld_org_netbeans_html_json_impl_SimpleList_size'] = (((stI3) + (1)) | 0);
Array.at(stA0, stI1, lcA1);
return 1;

};
    m.access = 2;
    m.cls = CLS;
    m = c.remove__ZLjava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
var stI0 = c.removeImpl__ZLjava_lang_Object_2II.call(lcA0, lcA1, 0, lcA0['fld_org_netbeans_html_json_impl_SimpleList_size']);
return stI0;

};
c['remove__ZLjava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.removeImpl__ZLjava_lang_Object_2II = function(lcA1, lcI2, lcI3) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var lcI4 = 0;
var lcI5 = lcI2;
    }
    X_6: for (;;) { IF: if (gt <= 6) {

if ((lcI5) >= (lcI3)) { gt = 59; break IF; }
if ((lcI4) == 0) { gt = 36; break IF; }
Array.at(lcA0['fld_org_netbeans_html_json_impl_SimpleList_arr'], (((lcI5) - (1)) | 0), (lcA0['fld_org_netbeans_html_json_impl_SimpleList_arr'][lcI5] || Array.at(lcA0['fld_org_netbeans_html_json_impl_SimpleList_arr'], lcI5)));
{ gt = 53; break IF; }
    }
    X_36: for (;;) { IF: if (gt <= 36) {

var stI0 = c.equals__ZLjava_lang_Object_2Ljava_lang_Object_2(lcA1, (lcA0['fld_org_netbeans_html_json_impl_SimpleList_arr'][lcI5] || Array.at(lcA0['fld_org_netbeans_html_json_impl_SimpleList_arr'], lcI5)));
if ((stI0) == 0) { gt = 53; break IF; }
var lcI4 = 1;
    }
    X_53: for (;;) { IF: if (gt <= 53) {
lcI5++;
{ gt = 0; continue X_6; }
    }
    X_59: for (;;) { IF: if (gt <= 59) {

if ((lcI4) == 0) { gt = 81; break IF; }
var stA0 = lcA0['fld_org_netbeans_html_json_impl_SimpleList_arr'];var stA1 = lcA0;var stA2 = stA1;
var stI2 = (((stA2['fld_org_netbeans_html_json_impl_SimpleList_size']) - (1)) | 0);var stI3 = stI2, stA2 = stA1, stI1 = stI3;
stA2['fld_org_netbeans_html_json_impl_SimpleList_size'] = stI3;
Array.at(stA0, stI1, null);
    }
    X_81: for (;;) { IF: if (gt <= 81) {

return lcI4;

    }
}}}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.containsAll__ZLjava_util_Collection_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA1);
var lcA2 = stA0;
    }
    X_7: for (;;) { IF: if (gt <= 7) {

var stI0 = invoker.hasNext__Z(lcA2);
if ((stI0) == 0) { gt = 36; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA2);
var lcA3 = stA0;
var stI0 = invoker.contains__ZLjava_lang_Object_2(lcA0,lcA3);
if ((stI0) != 0) { gt = 33; break IF; }
return 0;
    }
    X_33: for (;;) { IF: if (gt <= 33) {
{ gt = 0; continue X_7; }
    }
    X_36: for (;;) { IF: if (gt <= 36) {

return 1;

    }
}}}}
};
c['containsAll__ZLjava_util_Collection_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.addAll__ZLjava_util_Collection_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = lcA0;var stI1 = lcA0['fld_org_netbeans_html_json_impl_SimpleList_size'];var stI2 = invoker.size__I(lcA1);
var stI0 = c.ensureAccess__II.call(stA0, (((stI1) + (stI2)) | 0));
var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA1);
var lcA2 = stA0;
    }
    X_23: for (;;) { IF: if (gt <= 23) {

var stI0 = invoker.hasNext__Z(lcA2);
if ((stI0) == 0) { gt = 48; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA2);
var lcA3 = stA0;
var stI0 = c.addImpl__ZLjava_lang_Object_2.call(lcA0, lcA3);
{ gt = 0; continue X_23; }
    }
    X_48: for (;;) { IF: if (gt <= 48) {

var stI0 = invoker.isEmpty__Z(lcA1);
if ((stI0) != 0) { gt = 61; break IF; }
var stI0 = 1;{ gt = 62; break IF; }
    }
    X_61: for (;;) { IF: if (gt <= 61) {

var stI0 = 0;    }
    X_62: for (;;) { IF: if (gt <= 62) {
return stI0;

    }
}}}}}
};
c['addAll__ZLjava_util_Collection_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.addAll__ZILjava_util_Collection_2 = function(lcI1, lcA2) {
  var  lcA0 = this;
var stI0 = c.addImpl__ZILjava_util_Collection_2.call(lcA0, lcI1, lcA2);
return stI0;

};
c['addAll__ZILjava_util_Collection_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.addImpl__ZILjava_util_Collection_2 = function(lcI1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = invoker.size__I(lcA2);
var lcI3 = stI0;
if ((lcI3) != 0) { gt = 13; break IF; }
return 0;
    }
    X_13: for (;;) { IF: if (gt <= 13) {

var lcI4 = lcA0['fld_org_netbeans_html_json_impl_SimpleList_size'];
var stI0 = c.ensureAccess__II.call(lcA0, (((lcI4) + (lcI3)) | 0));
var lcI5 = (((lcI4) - (1)) | 0);
    }
    X_34: for (;;) { IF: if (gt <= 34) {

if ((lcI5) < (lcI1)) { gt = 62; break IF; }
Array.at(lcA0['fld_org_netbeans_html_json_impl_SimpleList_arr'], (((lcI5) + (lcI3)) | 0), (lcA0['fld_org_netbeans_html_json_impl_SimpleList_arr'][lcI5] || Array.at(lcA0['fld_org_netbeans_html_json_impl_SimpleList_arr'], lcI5)));
lcI5 += -1;
{ gt = 0; continue X_34; }
    }
    X_62: for (;;) { IF: if (gt <= 62) {

var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA2);
var lcA5 = stA0;
    }
    X_70: for (;;) { IF: if (gt <= 70) {

var stI0 = invoker.hasNext__Z(lcA5);
if ((stI0) == 0) { gt = 103; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA5);
var lcA6 = stA0;
var stA0 = lcA0['fld_org_netbeans_html_json_impl_SimpleList_arr'];var stI1 = lcI1;lcI1++;
Array.at(stA0, stI1, lcA6);
{ gt = 0; continue X_70; }
    }
    X_103: for (;;) { IF: if (gt <= 103) {

var stA0 = lcA0;var stA1 = stA0;
stA0['fld_org_netbeans_html_json_impl_SimpleList_size'] = (((stA1['fld_org_netbeans_html_json_impl_SimpleList_size']) + (lcI3)) | 0);
return 1;

    }
}}}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.removeAll__ZLjava_util_Collection_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var lcI2 = lcA0['fld_org_netbeans_html_json_impl_SimpleList_size'];
var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA1);
var lcA3 = stA0;
    }
    X_12: for (;;) { IF: if (gt <= 12) {

var stI0 = invoker.hasNext__Z(lcA3);
if ((stI0) == 0) { gt = 39; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA3);
var lcA4 = stA0;
var stI0 = invoker.remove__ZLjava_lang_Object_2(lcA0,lcA4);
{ gt = 0; continue X_12; }
    }
    X_39: for (;;) { IF: if (gt <= 39) {

if ((lcI2) == (lcA0['fld_org_netbeans_html_json_impl_SimpleList_size'])) { gt = 51; break IF; }
var stI0 = 1;{ gt = 52; break IF; }
    }
    X_51: for (;;) { IF: if (gt <= 51) {

var stI0 = 0;    }
    X_52: for (;;) { IF: if (gt <= 52) {
return stI0;

    }
}}}}}
};
c['removeAll__ZLjava_util_Collection_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.retainAll__ZLjava_util_Collection_2 = function(lcA1) {
  var  lcA0 = this;
var stI0 = lcA0.retainImpl__ZLjava_util_Collection_2Ljava_util_Collection_2(lcA0, lcA1);
return stI0;

};
c['retainAll__ZLjava_util_Collection_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.sort__VLjava_util_Comparator_2 = function(lcA1) {
  var  lcA0 = this;
lcA0.sortImpl__VLjava_util_Comparator_2II(lcA1, 0, lcA0['fld_org_netbeans_html_json_impl_SimpleList_size']);
return;

};
    m.access = 1;
    m.cls = CLS;
    m = c.sortImpl__VLjava_util_Comparator_2II = function(lcA1, lcI2, lcI3) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var lcI4 = lcI2;
    }
    X_3: for (;;) { IF: if (gt <= 3) {

if ((lcI4) >= (lcI3)) { gt = 137; break IF; }
var lcA5 = (lcA0['fld_org_netbeans_html_json_impl_SimpleList_arr'][lcI4] || Array.at(lcA0['fld_org_netbeans_html_json_impl_SimpleList_arr'], lcI4));
var lcI6 = lcI4;
var lcI7 = (((lcI4) + (1)) | 0);
    }
    X_28: for (;;) { IF: if (gt <= 28) {

if ((lcI7) >= (lcI3)) { gt = 101; break IF; }
if ((lcA1) !== null) { gt = 60; break IF; }
if (lcA5 !== null && !lcA5['$instOf_java_lang_Comparable']) vm.java_lang_Class(false).castEx(lcA5, 'java.lang.Comparable');
var stI0 = invoker.compareTo__ILjava_lang_Object_2(lcA5,(lcA0['fld_org_netbeans_html_json_impl_SimpleList_arr'][lcI7] || Array.at(lcA0['fld_org_netbeans_html_json_impl_SimpleList_arr'], lcI7)));
var lcI8 = stI0;
{ gt = 77; break IF; }
    }
    X_60: for (;;) { IF: if (gt <= 60) {

var stI0 = invoker.compare__ILjava_lang_Object_2Ljava_lang_Object_2(lcA1,lcA5, (lcA0['fld_org_netbeans_html_json_impl_SimpleList_arr'][lcI7] || Array.at(lcA0['fld_org_netbeans_html_json_impl_SimpleList_arr'], lcI7)));
var lcI8 = stI0;
    }
    X_77: for (;;) { IF: if (gt <= 77) {

if ((lcI8) <= 0) { gt = 95; break IF; }
var lcA5 = (lcA0['fld_org_netbeans_html_json_impl_SimpleList_arr'][lcI7] || Array.at(lcA0['fld_org_netbeans_html_json_impl_SimpleList_arr'], lcI7));
var lcI6 = lcI7;
    }
    X_95: for (;;) { IF: if (gt <= 95) {
lcI7++;
{ gt = 0; continue X_28; }
    }
    X_101: for (;;) { IF: if (gt <= 101) {

if ((lcI4) == (lcI6)) { gt = 131; break IF; }
Array.at(lcA0['fld_org_netbeans_html_json_impl_SimpleList_arr'], lcI6, (lcA0['fld_org_netbeans_html_json_impl_SimpleList_arr'][lcI4] || Array.at(lcA0['fld_org_netbeans_html_json_impl_SimpleList_arr'], lcI4)));
Array.at(lcA0['fld_org_netbeans_html_json_impl_SimpleList_arr'], lcI4, lcA5);
    }
    X_131: for (;;) { IF: if (gt <= 131) {
lcI4++;
{ gt = 0; continue X_3; }
    }
    X_137: for (;;) { IF: if (gt <= 137) {
return;

    }
}}}}}}}}}
};
    m.access = 16;
    m.cls = CLS;
    m = c.clear__V = function() {
  var  lcA0 = this;
lcA0['fld_org_netbeans_html_json_impl_SimpleList_size'] = 0;
return;

};
c['clear__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clearImpl__VII = function(lcI1, lcI2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var lcI3 = 0;
    }
    X_2: for (;;) { IF: if (gt <= 2) {

if (((((lcI3) + (lcI1)) | 0)) >= (lcA0['fld_org_netbeans_html_json_impl_SimpleList_size'])) { gt = 34; break IF; }
Array.at(lcA0['fld_org_netbeans_html_json_impl_SimpleList_arr'], (((lcI1) + (lcI3)) | 0), (lcA0['fld_org_netbeans_html_json_impl_SimpleList_arr'][(((lcI2) + (lcI3)) | 0)] || Array.at(lcA0['fld_org_netbeans_html_json_impl_SimpleList_arr'], (((lcI2) + (lcI3)) | 0))));
lcI3++;
{ gt = 0; continue X_2; }
    }
    X_34: for (;;) { IF: if (gt <= 34) {

var stA0 = lcA0;var stA1 = stA0;
stA0['fld_org_netbeans_html_json_impl_SimpleList_size'] = (((stA1['fld_org_netbeans_html_json_impl_SimpleList_size']) + (lcI1)) | 0);
var stA0 = lcA0;var stA1 = stA0;
stA0['fld_org_netbeans_html_json_impl_SimpleList_size'] = (((stA1['fld_org_netbeans_html_json_impl_SimpleList_size']) - (lcI2)) | 0);
return;

    }
}}}
};
    m.access = 0;
    m.cls = CLS;
    m = c.get__Ljava_lang_Object_2I = function(lcI1) {
  var  lcA0 = this;
c.checkAccess__VI.call(lcA0, lcI1);
return (lcA0['fld_org_netbeans_html_json_impl_SimpleList_arr'][lcI1] || Array.at(lcA0['fld_org_netbeans_html_json_impl_SimpleList_arr'], lcI1));

};
c['get__Ljava_lang_Object_2I'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.checkAccess__VI = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((lcI1) < 0) { gt = 12; break IF; }
if ((lcI1) < (lcA0['fld_org_netbeans_html_json_impl_SimpleList_size'])) { gt = 20; break IF; }
    }
    X_12: for (;;) { IF: if (gt <= 12) {
var stA0 = new vm.java_lang_ArrayIndexOutOfBoundsException;
(refs_java_lang_ArrayIndexOutOfBoundsException || (refs_java_lang_ArrayIndexOutOfBoundsException = vm.java_lang_ArrayIndexOutOfBoundsException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }
    }
    X_20: for (;;) { IF: if (gt <= 20) {
return;

    }
}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.ensureAccess__II = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((lcI1) >= (lcA0['fld_org_netbeans_html_json_impl_SimpleList_size'])) { gt = 13; break IF; }
return lcA0['fld_org_netbeans_html_json_impl_SimpleList_size'];
    }
    X_13: for (;;) { IF: if (gt <= 13) {

if ((lcA0['fld_org_netbeans_html_json_impl_SimpleList_arr']) !== null) { gt = 24; break IF; }
var stI0 = 0;{ gt = 29; break IF; }
    }
    X_24: for (;;) { IF: if (gt <= 24) {

var stI0 = (lcA0['fld_org_netbeans_html_json_impl_SimpleList_arr']).length;    }
    X_29: for (;;) { IF: if (gt <= 29) {
var lcI2 = stI0;
if ((lcI2) >= (4)) { gt = 37; break IF; }
var lcI2 = 4;
    }
    X_37: for (;;) { IF: if (gt <= 37) {

if ((lcI2) >= (lcI1)) { gt = 49; break IF; }
var lcI2 = __mul32(lcI2,2);
{ gt = 0; continue X_37; }
    }
    X_49: for (;;) { IF: if (gt <= 49) {

var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, lcI2);
var lcA3 = stA0;
var lcI4 = 0;
    }
    X_57: for (;;) { IF: if (gt <= 57) {

if ((lcI4) >= (lcA0['fld_org_netbeans_html_json_impl_SimpleList_size'])) { gt = 83; break IF; }
Array.at(lcA3, lcI4, (lcA0['fld_org_netbeans_html_json_impl_SimpleList_arr'][lcI4] || Array.at(lcA0['fld_org_netbeans_html_json_impl_SimpleList_arr'], lcI4)));
lcI4++;
{ gt = 0; continue X_57; }
    }
    X_83: for (;;) { IF: if (gt <= 83) {

lcA0['fld_org_netbeans_html_json_impl_SimpleList_arr'] = lcA3;
return lcI1;

    }
}}}}}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.ensureSize__VI = function(lcI1) {
  var  lcA0 = this;
var stA0 = lcA0;var stI1 = c.ensureAccess__II.call(lcA0, lcI1);
stA0['fld_org_netbeans_html_json_impl_SimpleList_size'] = stI1;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.set__Ljava_lang_Object_2ILjava_lang_Object_2 = function(lcI1, lcA2) {
  var  lcA0 = this;
c.checkAccess__VI.call(lcA0, lcI1);
var lcA3 = (lcA0['fld_org_netbeans_html_json_impl_SimpleList_arr'][lcI1] || Array.at(lcA0['fld_org_netbeans_html_json_impl_SimpleList_arr'], lcI1));
Array.at(lcA0['fld_org_netbeans_html_json_impl_SimpleList_arr'], lcI1, lcA2);
return lcA3;

};
c['set__Ljava_lang_Object_2ILjava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.add__VILjava_lang_Object_2 = function(lcI1, lcA2) {
  var  lcA0 = this;
var stA0 = lcA0;var stI1 = lcI1;var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 1);
Array.at(stA2, 0, lcA2);
var stA2 = c.asList__Ljava_util_List_2_3Ljava_lang_Object_2(stA2);
var stI0 = c.addImpl__ZILjava_util_Collection_2.call(stA0, stI1, stA2);
return;

};
c['add__VILjava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.remove__Ljava_lang_Object_2I = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

c.checkAccess__VI.call(lcA0, lcI1);
var lcA2 = (lcA0['fld_org_netbeans_html_json_impl_SimpleList_arr'][lcI1] || Array.at(lcA0['fld_org_netbeans_html_json_impl_SimpleList_arr'], lcI1));
var lcI3 = (((lcI1) + (1)) | 0);
    }
    X_16: for (;;) { IF: if (gt <= 16) {

if ((lcI3) >= (lcA0['fld_org_netbeans_html_json_impl_SimpleList_size'])) { gt = 44; break IF; }
Array.at(lcA0['fld_org_netbeans_html_json_impl_SimpleList_arr'], (((lcI3) - (1)) | 0), (lcA0['fld_org_netbeans_html_json_impl_SimpleList_arr'][lcI3] || Array.at(lcA0['fld_org_netbeans_html_json_impl_SimpleList_arr'], lcI3)));
lcI3++;
{ gt = 0; continue X_16; }
    }
    X_44: for (;;) { IF: if (gt <= 44) {

var stA0 = lcA0['fld_org_netbeans_html_json_impl_SimpleList_arr'];var stA1 = lcA0;var stA2 = stA1;
var stI2 = (((stA2['fld_org_netbeans_html_json_impl_SimpleList_size']) - (1)) | 0);var stI3 = stI2, stA2 = stA1, stI1 = stI3;
stA2['fld_org_netbeans_html_json_impl_SimpleList_size'] = stI3;
Array.at(stA0, stI1, null);
return lcA2;

    }
}}}
};
c['remove__Ljava_lang_Object_2I'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.indexOf__ILjava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
var stI0 = lcA0.indexOfImpl__ILjava_lang_Object_2II(lcA1, 0, lcA0['fld_org_netbeans_html_json_impl_SimpleList_size']);
return stI0;

};
c['indexOf__ILjava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.indexOfImpl__ILjava_lang_Object_2II = function(lcA1, lcI2, lcI3) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var lcI4 = lcI2;
    }
    X_3: for (;;) { IF: if (gt <= 3) {

if ((lcI4) >= (lcI3)) { gt = 34; break IF; }
var stI0 = c.equals__ZLjava_lang_Object_2Ljava_lang_Object_2(lcA1, (lcA0['fld_org_netbeans_html_json_impl_SimpleList_arr'][lcI4] || Array.at(lcA0['fld_org_netbeans_html_json_impl_SimpleList_arr'], lcI4)));
if ((stI0) == 0) { gt = 28; break IF; }
return (((lcI4) - (lcI2)) | 0);
    }
    X_28: for (;;) { IF: if (gt <= 28) {
lcI4++;
{ gt = 0; continue X_3; }
    }
    X_34: for (;;) { IF: if (gt <= 34) {

return -1;

    }
}}}}
};
    m.access = 16;
    m.cls = CLS;
    m = c.lastIndexOf__ILjava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
var stI0 = lcA0.lastIndexOfImpl__ILjava_lang_Object_2II(lcA1, 0, lcA0['fld_org_netbeans_html_json_impl_SimpleList_size']);
return stI0;

};
c['lastIndexOf__ILjava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.lastIndexOfImpl__ILjava_lang_Object_2II = function(lcA1, lcI2, lcI3) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var lcI4 = (((lcI3) - (1)) | 0);
    }
    X_5: for (;;) { IF: if (gt <= 5) {

if ((lcI4) < (lcI2)) { gt = 36; break IF; }
var stI0 = c.equals__ZLjava_lang_Object_2Ljava_lang_Object_2(lcA1, (lcA0['fld_org_netbeans_html_json_impl_SimpleList_arr'][lcI4] || Array.at(lcA0['fld_org_netbeans_html_json_impl_SimpleList_arr'], lcI4)));
if ((stI0) == 0) { gt = 30; break IF; }
return (((lcI4) - (lcI2)) | 0);
    }
    X_30: for (;;) { IF: if (gt <= 30) {
lcI4 += -1;
{ gt = 0; continue X_5; }
    }
    X_36: for (;;) { IF: if (gt <= 36) {

return -1;

    }
}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.listIterator__Ljava_util_ListIterator_2 = function() {
  var  lcA0 = this;
var stA0 = new org_netbeans_html_json_impl_SimpleList$LI;
(refs_org_netbeans_html_json_impl_SimpleList$LI || (refs_org_netbeans_html_json_impl_SimpleList$LI = org_netbeans_html_json_impl_SimpleList$LI(false))).constructor.cons__VLorg_netbeans_html_json_impl_SimpleList_2II.call(stA0, lcA0, 0, lcA0['fld_org_netbeans_html_json_impl_SimpleList_size']);
return stA0;

};
c['listIterator__Ljava_util_ListIterator_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.listIterator__Ljava_util_ListIterator_2I = function(lcI1) {
  var  lcA0 = this;
var stA0 = new org_netbeans_html_json_impl_SimpleList$LI;
(refs_org_netbeans_html_json_impl_SimpleList$LI || (refs_org_netbeans_html_json_impl_SimpleList$LI = org_netbeans_html_json_impl_SimpleList$LI(false))).constructor.cons__VLorg_netbeans_html_json_impl_SimpleList_2III.call(stA0, lcA0, lcI1, 0, lcA0['fld_org_netbeans_html_json_impl_SimpleList_size']);
return stA0;

};
c['listIterator__Ljava_util_ListIterator_2I'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.subList__Ljava_util_List_2II = function(lcI1, lcI2) {
  var  lcA0 = this;
var stA0 = new org_netbeans_html_json_impl_SimpleList$Sub;
(refs_org_netbeans_html_json_impl_SimpleList$Sub || (refs_org_netbeans_html_json_impl_SimpleList$Sub = org_netbeans_html_json_impl_SimpleList$Sub(false))).constructor.cons__VLorg_netbeans_html_json_impl_SimpleList_2II.call(stA0, lcA0, lcI1, lcI2);
return stA0;

};
c['subList__Ljava_util_List_2II'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.equals__ZLjava_lang_Object_2Ljava_lang_Object_2 = function(lcA0, lcA1) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((lcA0) !== null) { gt = 14; break IF; }
if ((lcA1) !== null) { gt = 12; break IF; }
var stI0 = 1;{ gt = 13; break IF; }
    }
    X_12: for (;;) { IF: if (gt <= 12) {

var stI0 = 0;    }
    X_13: for (;;) { IF: if (gt <= 13) {
return stI0;
    }
    X_14: for (;;) { IF: if (gt <= 14) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA0,lcA1);
return stI0;

    }
}}}}
};
    m.access = 10;
    m.cls = CLS;
    m = c.newArr___3Ljava_lang_Object_2_3Ljava_lang_Object_2I = function(lcA0, lcI1) {
var stA0 = invoker.getClass__Ljava_lang_Class_2(lcA0);
var stA0 = invoker.getComponentType__Ljava_lang_Class_2(stA0);
var stA0 = (refs_java_lang_reflect_Array || (refs_java_lang_reflect_Array = vm.java_lang_reflect_Array(false)))['newInstance__Ljava_lang_Object_2Ljava_lang_Class_2I'](stA0, lcI1);
if (stA0 !== null && !Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](stA0, 1, vm.java_lang_Object)) vm.java_lang_Class(false).castEx(stA0, '');
if (stA0 !== null && !Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](stA0, 1, vm.java_lang_Object)) vm.java_lang_Class(false).castEx(stA0, '');
return stA0;

};
    m.access = 10;
    m.cls = CLS;
    m = c.equals__ZLjava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
var stI0 = c.equalsList__ZLjava_util_List_2Ljava_lang_Object_2(lcA0, lcA1);
return stI0;

};
c['equals__ZLjava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.hashCode__I = function() {
  var  lcA0 = this;
var stI0 = c.hashList__ILjava_util_List_2(lcA0);
return stI0;

};
c['hashCode__I'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.toString__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
var stA0 = c.toStringList__Ljava_lang_String_2Ljava_util_List_2(lcA0);
return stA0;

};
c['toString__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.retainImpl__ZLjava_util_Collection_2Ljava_util_Collection_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var lcI3 = 0;
var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA1);
var lcA4 = stA0;
    }
    X_10: for (;;) { IF: if (gt <= 10) {

var stI0 = invoker.hasNext__Z(lcA4);
if ((stI0) == 0) { gt = 52; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA4);
var lcA5 = stA0;
var stI0 = invoker.contains__ZLjava_lang_Object_2(lcA2,lcA5);
if ((stI0) != 0) { gt = 49; break IF; }
invoker.remove__V(lcA4);
var lcI3 = 1;
    }
    X_49: for (;;) { IF: if (gt <= 49) {
{ gt = 0; continue X_10; }
    }
    X_52: for (;;) { IF: if (gt <= 52) {

return lcI3;

    }
}}}}
};
    m.access = 0;
    m.cls = CLS;
    m = c.equalsList__ZLjava_util_List_2Ljava_lang_Object_2 = function(lcA0, lcA1) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((lcA1) !== (lcA0)) { gt = 7; break IF; }
return 1;
    }
    X_7: for (;;) { IF: if (gt <= 7) {

var stI0 = lcA1 != null && lcA1['$instOf_java_util_List'] ? 1 : 0;
if ((stI0) == 0) { gt = 78; break IF; }
if (lcA1 !== null && !lcA1['$instOf_java_util_List']) vm.java_lang_Class(false).castEx(lcA1, 'java.util.List');
var lcA2 = lcA1;
var stI0 = invoker.size__I(lcA0);
var stI1 = invoker.size__I(lcA2);
if ((stI0) == (stI1)) { gt = 36; break IF; }
return 0;
    }
    X_36: for (;;) { IF: if (gt <= 36) {

var lcI3 = 0;
    }
    X_38: for (;;) { IF: if (gt <= 38) {

var stI0 = lcI3;var stI1 = invoker.size__I(lcA0);
if ((stI0) >= (stI1)) { gt = 76; break IF; }
var stA0 = invoker.get__Ljava_lang_Object_2I(lcA0,lcI3);
var stA1 = invoker.get__Ljava_lang_Object_2I(lcA2,lcI3);
var stI0 = c.equals__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0, stA1);
if ((stI0) != 0) { gt = 70; break IF; }
return 0;
    }
    X_70: for (;;) { IF: if (gt <= 70) {
lcI3++;
{ gt = 0; continue X_38; }
    }
    X_76: for (;;) { IF: if (gt <= 76) {

return 1;
    }
    X_78: for (;;) { IF: if (gt <= 78) {

return 0;

    }
}}}}}}}
};
    m.access = 8;
    m.cls = CLS;
    m = c.hashList__ILjava_util_List_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var lcI1 = 1;
var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA0);
var lcA2 = stA0;
    }
    X_9: for (;;) { IF: if (gt <= 9) {

var stI0 = invoker.hasNext__Z(lcA2);
if ((stI0) == 0) { gt = 46; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA2);
var lcA3 = stA0;
var stI0 = __mul32((31),lcI1);if ((lcA3) !== null) { gt = 37; break IF; }
var stI1 = 0;{ gt = 41; break IF; }
    }
    X_37: for (;;) { IF: if (gt <= 37) {

var stI1 = invoker.hashCode__I(lcA3);
    }
    X_41: for (;;) { IF: if (gt <= 41) {

var lcI1 = (((stI0) + (stI1)) | 0);
{ gt = 0; continue X_9; }
    }
    X_46: for (;;) { IF: if (gt <= 46) {

return lcI1;

    }
}}}}}
};
    m.access = 8;
    m.cls = CLS;
    m = c.toStringList__Ljava_lang_String_2Ljava_util_List_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var lcA1 = stA0;
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(91));
var lcA2 = "";
var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA0);
var lcA3 = stA0;
    }
    X_25: for (;;) { IF: if (gt <= 25) {

var stI0 = invoker.hasNext__Z(lcA3);
if ((stI0) == 0) { gt = 61; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA3);
var lcA4 = stA0;
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA1,lcA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2(lcA1,lcA4);
var lcA2 = ", ";
{ gt = 0; continue X_25; }
    }
    X_61: for (;;) { IF: if (gt <= 61) {

var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(93));
var stA0 = invoker.toString__Ljava_lang_String_2(lcA1);
return stA0;

    }
}}}
};
    m.access = 8;
    m.cls = CLS;
    m = c.ensureSize__VLjava_util_List_2I = function(lcA0, lcI1) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = lcA0 != null && lcA0['$instOf_org_netbeans_html_json_impl_SimpleList'] ? 1 : 0;
if ((stI0) == 0) { gt = 16; break IF; }
if (lcA0 !== null && !lcA0['$instOf_org_netbeans_html_json_impl_SimpleList']) vm.java_lang_Class(false).castEx(lcA0, 'org.netbeans.html.json.impl.SimpleList');
c.ensureSize__VI.call(lcA0, lcI1);
return;
    }
    X_16: for (;;) { IF: if (gt <= 16) {

var stI0 = invoker.size__I(lcA0);
if ((stI0) >= (lcI1)) { gt = 37; break IF; }
var stI0 = invoker.add__ZLjava_lang_Object_2(lcA0,null);
{ gt = 0; continue X_16; }
    }
    X_37: for (;;) { IF: if (gt <= 37) {
return;

    }
}}}
};
    m.access = 9;
    m.cls = CLS;
    m = c.access$000__ZLorg_netbeans_html_json_impl_SimpleList_2Ljava_lang_Object_2II = function(lcA0, lcA1, lcI2, lcI3) {
var stI0 = c.removeImpl__ZLjava_lang_Object_2II.call(lcA0, lcA1, lcI2, lcI3);
return stI0;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$200___3Ljava_lang_Object_2Lorg_netbeans_html_json_impl_SimpleList_2 = function(lcA0) {
return lcA0['fld_org_netbeans_html_json_impl_SimpleList_arr'];

};
    m.access = 4104;
    m.cls = CLS;    __mul32 = function(x, y) {
        return (((x * (y >> 16)) << 16) + x * (y & 0xFFFF)) | 0;
    };

    c.constructor = CLS;
    function org_netbeans_html_json_impl_SimpleListfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_json_impl_SimpleList', { value : true });
      vm.java_util_List(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_json_impl_SimpleListfillInstOf });
    org_netbeans_html_json_impl_SimpleListfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/json/impl/SimpleList';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.java_util_List(false).constructor.$class
    ]; };
    CLS.$class.access = 33;
    CLS.$class.cnstr = CLS;
    var refs_org_netbeans_html_json_impl_SimpleList$LI;
    var refs_java_lang_ArrayIndexOutOfBoundsException;
    var refs_org_netbeans_html_json_impl_SimpleList$Sub;
    var refs_java_lang_reflect_Array;
    var refs_java_lang_StringBuilder;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_org_netbeans_html_json_impl_SimpleList_arr'] = null;
    this['fld_org_netbeans_html_json_impl_SimpleList_size'] = 0;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_netbeans_html_json_impl_SimpleList = org_netbeans_html_json_impl_SimpleList;

vm.java_util_List = link('java/util/List', function(f) { vm.java_util_List =  f; });

function org_netbeans_html_json_impl_SimpleList$Sub() {
  var m;
  var CLS = org_netbeans_html_json_impl_SimpleList$Sub;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._from = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_json_impl_SimpleList$Sub_from'] = v; return this['fld_org_netbeans_html_json_impl_SimpleList$Sub_from']; };
  m = c._to = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_json_impl_SimpleList$Sub_to'] = v; return this['fld_org_netbeans_html_json_impl_SimpleList$Sub_to']; };
  m = c._this$0 = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_json_impl_SimpleList$Sub_this$0'] = v; return this['fld_org_netbeans_html_json_impl_SimpleList$Sub_this$0']; };
    m = CLS.cons__VLorg_netbeans_html_json_impl_SimpleList_2II = function(lcA1, lcI2, lcI3) {
  var  lcA0 = this;
lcA0['fld_org_netbeans_html_json_impl_SimpleList$Sub_this$0'] = lcA1;
lcA0['fld_org_netbeans_html_json_impl_SimpleList$Sub_from'] = lcI2;
lcA0['fld_org_netbeans_html_json_impl_SimpleList$Sub_to'] = lcI3;
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.size__I = function() {
  var  lcA0 = this;
return (((lcA0['fld_org_netbeans_html_json_impl_SimpleList$Sub_to']) - (lcA0['fld_org_netbeans_html_json_impl_SimpleList$Sub_from'])) | 0);

};
c['size__I'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isEmpty__Z = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((lcA0['fld_org_netbeans_html_json_impl_SimpleList$Sub_to']) > (lcA0['fld_org_netbeans_html_json_impl_SimpleList$Sub_from'])) { gt = 15; break IF; }
var stI0 = 1;{ gt = 16; break IF; }
    }
    X_15: for (;;) { IF: if (gt <= 15) {

var stI0 = 0;    }
    X_16: for (;;) { IF: if (gt <= 16) {
return stI0;

    }
}}}
};
c['isEmpty__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.contains__ZLjava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
var stI0 = lcA0['fld_org_netbeans_html_json_impl_SimpleList$Sub_this$0'].containsImpl__ZLjava_lang_Object_2II(lcA1, lcA0['fld_org_netbeans_html_json_impl_SimpleList$Sub_from'], lcA0['fld_org_netbeans_html_json_impl_SimpleList$Sub_to']);
return stI0;

};
c['contains__ZLjava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.toArray___3Ljava_lang_Object_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0['fld_org_netbeans_html_json_impl_SimpleList$Sub_this$0'].toArrayImpl___3Ljava_lang_Object_2II(lcA0['fld_org_netbeans_html_json_impl_SimpleList$Sub_from'], lcA0['fld_org_netbeans_html_json_impl_SimpleList$Sub_to']);
return stA0;

};
c['toArray___3Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.toArray___3Ljava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = lcA0['fld_org_netbeans_html_json_impl_SimpleList$Sub_this$0'].toArrayImpl___3Ljava_lang_Object_2_3Ljava_lang_Object_2II(lcA1, lcA0['fld_org_netbeans_html_json_impl_SimpleList$Sub_from'], lcA0['fld_org_netbeans_html_json_impl_SimpleList$Sub_to']);
return stA0;

};
c['toArray___3Ljava_lang_Object_2_3Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.add__ZLjava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = lcA0['fld_org_netbeans_html_json_impl_SimpleList$Sub_this$0'];var stA1 = lcA0;var stA2 = stA1;
var stI2 = stA2['fld_org_netbeans_html_json_impl_SimpleList$Sub_to'];var stI3 = stI2, stA2 = stA1, stI1 = stI3;
stA2['fld_org_netbeans_html_json_impl_SimpleList$Sub_to'] = (((stI3) + (1)) | 0);
invoker.add__VILjava_lang_Object_2(stA0,stI1, lcA1);
return 1;

};
c['add__ZLjava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.remove__ZLjava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = (refs_org_netbeans_html_json_impl_SimpleList || (refs_org_netbeans_html_json_impl_SimpleList = org_netbeans_html_json_impl_SimpleList(false))).access$000__ZLorg_netbeans_html_json_impl_SimpleList_2Ljava_lang_Object_2II(lcA0['fld_org_netbeans_html_json_impl_SimpleList$Sub_this$0'], lcA1, lcA0['fld_org_netbeans_html_json_impl_SimpleList$Sub_from'], lcA0['fld_org_netbeans_html_json_impl_SimpleList$Sub_to']);
if ((stI0) == 0) { gt = 31; break IF; }
var stA0 = lcA0;var stA1 = stA0;
stA0['fld_org_netbeans_html_json_impl_SimpleList$Sub_to'] = (((stA1['fld_org_netbeans_html_json_impl_SimpleList$Sub_to']) - (1)) | 0);
return 1;
    }
    X_31: for (;;) { IF: if (gt <= 31) {

return 0;

    }
}}
};
c['remove__ZLjava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.containsAll__ZLjava_util_Collection_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA1);
var lcA2 = stA0;
    }
    X_7: for (;;) { IF: if (gt <= 7) {

var stI0 = invoker.hasNext__Z(lcA2);
if ((stI0) == 0) { gt = 36; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA2);
var lcA3 = stA0;
var stI0 = lcA0.contains__ZLjava_lang_Object_2(lcA3);
if ((stI0) != 0) { gt = 33; break IF; }
return 0;
    }
    X_33: for (;;) { IF: if (gt <= 33) {
{ gt = 0; continue X_7; }
    }
    X_36: for (;;) { IF: if (gt <= 36) {

return 1;

    }
}}}}
};
c['containsAll__ZLjava_util_Collection_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.addAll__ZLjava_util_Collection_2 = function(lcA1) {
  var  lcA0 = this;
var stI0 = invoker.addAll__ZILjava_util_Collection_2(lcA0['fld_org_netbeans_html_json_impl_SimpleList$Sub_this$0'],lcA0['fld_org_netbeans_html_json_impl_SimpleList$Sub_to'], lcA1);
var stA0 = lcA0;var stA1 = stA0;
var stI1 = stA1['fld_org_netbeans_html_json_impl_SimpleList$Sub_to'];var stI2 = invoker.size__I(lcA1);
stA0['fld_org_netbeans_html_json_impl_SimpleList$Sub_to'] = (((stI1) + (stI2)) | 0);
return 1;

};
c['addAll__ZLjava_util_Collection_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.addAll__ZILjava_util_Collection_2 = function(lcI1, lcA2) {
  var  lcA0 = this;
var stI0 = invoker.addAll__ZILjava_util_Collection_2(lcA0['fld_org_netbeans_html_json_impl_SimpleList$Sub_this$0'],(((lcA0['fld_org_netbeans_html_json_impl_SimpleList$Sub_from']) + (lcI1)) | 0), lcA2);
var stA0 = lcA0;var stA1 = stA0;
var stI1 = stA1['fld_org_netbeans_html_json_impl_SimpleList$Sub_to'];var stI2 = invoker.size__I(lcA2);
stA0['fld_org_netbeans_html_json_impl_SimpleList$Sub_to'] = (((stI1) + (stI2)) | 0);
return 1;

};
c['addAll__ZILjava_util_Collection_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.removeAll__ZLjava_util_Collection_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = lcA0.size__I();
var lcI2 = stI0;
var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA1);
var lcA3 = stA0;
    }
    X_12: for (;;) { IF: if (gt <= 12) {

var stI0 = invoker.hasNext__Z(lcA3);
if ((stI0) == 0) { gt = 39; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA3);
var lcA4 = stA0;
var stI0 = lcA0.remove__ZLjava_lang_Object_2(lcA4);
{ gt = 0; continue X_12; }
    }
    X_39: for (;;) { IF: if (gt <= 39) {

var stI0 = lcI2;var stI1 = lcA0.size__I();
if ((stI0) == (stI1)) { gt = 51; break IF; }
var stI0 = 1;{ gt = 52; break IF; }
    }
    X_51: for (;;) { IF: if (gt <= 51) {

var stI0 = 0;    }
    X_52: for (;;) { IF: if (gt <= 52) {
return stI0;

    }
}}}}}
};
c['removeAll__ZLjava_util_Collection_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.retainAll__ZLjava_util_Collection_2 = function(lcA1) {
  var  lcA0 = this;
var stI0 = lcA0['fld_org_netbeans_html_json_impl_SimpleList$Sub_this$0'].retainImpl__ZLjava_util_Collection_2Ljava_util_Collection_2(lcA0, lcA1);
return stI0;

};
c['retainAll__ZLjava_util_Collection_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.sort__VLjava_util_Comparator_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_org_netbeans_html_json_impl_SimpleList$Sub_this$0'].sortImpl__VLjava_util_Comparator_2II(lcA1, lcA0['fld_org_netbeans_html_json_impl_SimpleList$Sub_from'], lcA0['fld_org_netbeans_html_json_impl_SimpleList$Sub_to']);
return;

};
    m.access = 1;
    m.cls = CLS;
    m = c.clear__V = function() {
  var  lcA0 = this;
lcA0['fld_org_netbeans_html_json_impl_SimpleList$Sub_this$0'].clearImpl__VII(lcA0['fld_org_netbeans_html_json_impl_SimpleList$Sub_from'], lcA0['fld_org_netbeans_html_json_impl_SimpleList$Sub_to']);
lcA0['fld_org_netbeans_html_json_impl_SimpleList$Sub_to'] = lcA0['fld_org_netbeans_html_json_impl_SimpleList$Sub_from'];
return;

};
c['clear__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.get__Ljava_lang_Object_2I = function(lcI1) {
  var  lcA0 = this;
var stA0 = invoker.get__Ljava_lang_Object_2I(lcA0['fld_org_netbeans_html_json_impl_SimpleList$Sub_this$0'],(((lcA0['fld_org_netbeans_html_json_impl_SimpleList$Sub_from']) + (lcI1)) | 0));
return stA0;

};
c['get__Ljava_lang_Object_2I'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.set__Ljava_lang_Object_2ILjava_lang_Object_2 = function(lcI1, lcA2) {
  var  lcA0 = this;
var stA0 = invoker.set__Ljava_lang_Object_2ILjava_lang_Object_2(lcA0['fld_org_netbeans_html_json_impl_SimpleList$Sub_this$0'],(((lcA0['fld_org_netbeans_html_json_impl_SimpleList$Sub_from']) + (lcI1)) | 0), lcA2);
return stA0;

};
c['set__Ljava_lang_Object_2ILjava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.add__VILjava_lang_Object_2 = function(lcI1, lcA2) {
  var  lcA0 = this;
invoker.add__VILjava_lang_Object_2(lcA0['fld_org_netbeans_html_json_impl_SimpleList$Sub_this$0'],(((lcI1) + (lcA0['fld_org_netbeans_html_json_impl_SimpleList$Sub_from'])) | 0), lcA2);
var stA0 = lcA0;var stA1 = stA0;
stA0['fld_org_netbeans_html_json_impl_SimpleList$Sub_to'] = (((stA1['fld_org_netbeans_html_json_impl_SimpleList$Sub_to']) + (1)) | 0);
return;

};
c['add__VILjava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.remove__Ljava_lang_Object_2I = function(lcI1) {
  var  lcA0 = this;
var stA0 = invoker.remove__Ljava_lang_Object_2I(lcA0['fld_org_netbeans_html_json_impl_SimpleList$Sub_this$0'],(((lcI1) + (lcA0['fld_org_netbeans_html_json_impl_SimpleList$Sub_from'])) | 0));
var lcA2 = stA0;
var stA0 = lcA0;var stA1 = stA0;
stA0['fld_org_netbeans_html_json_impl_SimpleList$Sub_to'] = (((stA1['fld_org_netbeans_html_json_impl_SimpleList$Sub_to']) - (1)) | 0);
return lcA2;

};
c['remove__Ljava_lang_Object_2I'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.indexOf__ILjava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
var stI0 = lcA0['fld_org_netbeans_html_json_impl_SimpleList$Sub_this$0'].indexOfImpl__ILjava_lang_Object_2II(lcA1, lcA0['fld_org_netbeans_html_json_impl_SimpleList$Sub_from'], lcA0['fld_org_netbeans_html_json_impl_SimpleList$Sub_to']);
return stI0;

};
c['indexOf__ILjava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.lastIndexOf__ILjava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
var stI0 = lcA0['fld_org_netbeans_html_json_impl_SimpleList$Sub_this$0'].lastIndexOfImpl__ILjava_lang_Object_2II(lcA1, lcA0['fld_org_netbeans_html_json_impl_SimpleList$Sub_from'], lcA0['fld_org_netbeans_html_json_impl_SimpleList$Sub_to']);
return stI0;

};
c['lastIndexOf__ILjava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.iterator__Ljava_util_Iterator_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0.listIterator__Ljava_util_ListIterator_2I(0);
return stA0;

};
c['iterator__Ljava_util_Iterator_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.listIterator__Ljava_util_ListIterator_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0.listIterator__Ljava_util_ListIterator_2I(0);
return stA0;

};
c['listIterator__Ljava_util_ListIterator_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.listIterator__Ljava_util_ListIterator_2I = function(lcI1) {
  var  lcA0 = this;
var stA0 = new org_netbeans_html_json_impl_SimpleList$Sub$1;
(refs_org_netbeans_html_json_impl_SimpleList$Sub$1 || (refs_org_netbeans_html_json_impl_SimpleList$Sub$1 = org_netbeans_html_json_impl_SimpleList$Sub$1(false))).constructor.cons__VLorg_netbeans_html_json_impl_SimpleList$Sub_2III.call(stA0, lcA0, (((lcA0['fld_org_netbeans_html_json_impl_SimpleList$Sub_from']) + (lcI1)) | 0), lcA0['fld_org_netbeans_html_json_impl_SimpleList$Sub_from'], lcA0['fld_org_netbeans_html_json_impl_SimpleList$Sub_to']);
return stA0;

};
c['listIterator__Ljava_util_ListIterator_2I'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.subList__Ljava_util_List_2II = function(lcI1, lcI2) {
  var  lcA0 = this;
var stA0 = new org_netbeans_html_json_impl_SimpleList$Sub;
c.constructor.cons__VLorg_netbeans_html_json_impl_SimpleList_2II.call(stA0, lcA0['fld_org_netbeans_html_json_impl_SimpleList$Sub_this$0'], (((lcA0['fld_org_netbeans_html_json_impl_SimpleList$Sub_from']) + (lcI1)) | 0), (((lcA0['fld_org_netbeans_html_json_impl_SimpleList$Sub_from']) + (lcI2)) | 0));
return stA0;

};
c['subList__Ljava_util_List_2II'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.equals__ZLjava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
var stI0 = (refs_org_netbeans_html_json_impl_SimpleList || (refs_org_netbeans_html_json_impl_SimpleList = org_netbeans_html_json_impl_SimpleList(false))).equalsList__ZLjava_util_List_2Ljava_lang_Object_2(lcA0, lcA1);
return stI0;

};
c['equals__ZLjava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.hashCode__I = function() {
  var  lcA0 = this;
var stI0 = (refs_org_netbeans_html_json_impl_SimpleList || (refs_org_netbeans_html_json_impl_SimpleList = org_netbeans_html_json_impl_SimpleList(false))).hashList__ILjava_util_List_2(lcA0);
return stI0;

};
c['hashCode__I'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.toString__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
var stA0 = (refs_org_netbeans_html_json_impl_SimpleList || (refs_org_netbeans_html_json_impl_SimpleList = org_netbeans_html_json_impl_SimpleList(false))).toStringList__Ljava_lang_String_2Ljava_util_List_2(lcA0);
return stA0;

};
c['toString__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.access$110__ILorg_netbeans_html_json_impl_SimpleList$Sub_2 = function(lcA0) {
var stA0 = lcA0;var stA1 = stA0;
var stI1 = stA1['fld_org_netbeans_html_json_impl_SimpleList$Sub_to'];var stI2 = stI1, stA1 = stA0, stI0 = stI2;
stA1['fld_org_netbeans_html_json_impl_SimpleList$Sub_to'] = (((stI2) - (1)) | 0);
return stI0;

};
    m.access = 4104;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_json_impl_SimpleList$SubfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_json_impl_SimpleList$Sub', { value : true });
      vm.java_util_List(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_json_impl_SimpleList$SubfillInstOf });
    org_netbeans_html_json_impl_SimpleList$SubfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/json/impl/SimpleList$Sub';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.java_util_List(false).constructor.$class
    ]; };
    CLS.$class.access = 48;
    CLS.$class.cnstr = CLS;
    var refs_org_netbeans_html_json_impl_SimpleList;
    var refs_org_netbeans_html_json_impl_SimpleList$Sub$1;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_org_netbeans_html_json_impl_SimpleList$Sub_from'] = 0;
    this['fld_org_netbeans_html_json_impl_SimpleList$Sub_to'] = 0;
    this['fld_org_netbeans_html_json_impl_SimpleList$Sub_this$0'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_netbeans_html_json_impl_SimpleList$Sub = org_netbeans_html_json_impl_SimpleList$Sub;


function org_netbeans_html_json_impl_SimpleList$Sub$1() {
  var m;
  var CLS = org_netbeans_html_json_impl_SimpleList$Sub$1;
  if (!CLS.$class) {
    var pp = org_netbeans_html_json_impl_SimpleList$LI(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._this$1 = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_json_impl_SimpleList$Sub$1_this$1'] = v; return this['fld_org_netbeans_html_json_impl_SimpleList$Sub$1_this$1']; };
    m = CLS.cons__VLorg_netbeans_html_json_impl_SimpleList$Sub_2III = function(lcA1, lcI2, lcI3, lcI4) {
  var  lcA0 = this;
lcA0['fld_org_netbeans_html_json_impl_SimpleList$Sub$1_this$1'] = lcA1;
(refs_org_netbeans_html_json_impl_SimpleList$LI || (refs_org_netbeans_html_json_impl_SimpleList$LI = org_netbeans_html_json_impl_SimpleList$LI(false))).constructor.cons__VLorg_netbeans_html_json_impl_SimpleList_2III.call(lcA0, lcA1['fld_org_netbeans_html_json_impl_SimpleList$Sub_this$0'], lcI2, lcI3, lcI4);
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.remove__V = function() {
  var  lcA0 = this;
(refs_org_netbeans_html_json_impl_SimpleList$LI || (refs_org_netbeans_html_json_impl_SimpleList$LI = org_netbeans_html_json_impl_SimpleList$LI(false))).remove__V.call(lcA0);
var stI0 = (refs_org_netbeans_html_json_impl_SimpleList$Sub || (refs_org_netbeans_html_json_impl_SimpleList$Sub = org_netbeans_html_json_impl_SimpleList$Sub(false))).access$110__ILorg_netbeans_html_json_impl_SimpleList$Sub_2(lcA0['fld_org_netbeans_html_json_impl_SimpleList$Sub$1_this$1']);
return;

};
c['remove__V'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_json_impl_SimpleList$Sub$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_json_impl_SimpleList$Sub$1', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_json_impl_SimpleList$Sub$1fillInstOf });
    org_netbeans_html_json_impl_SimpleList$Sub$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/json/impl/SimpleList$Sub$1';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 65568;
    CLS.$class.cnstr = CLS;
    var refs_org_netbeans_html_json_impl_SimpleList$LI;
    var refs_org_netbeans_html_json_impl_SimpleList$Sub;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_org_netbeans_html_json_impl_SimpleList$Sub$1_this$1'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_netbeans_html_json_impl_SimpleList$Sub$1 = org_netbeans_html_json_impl_SimpleList$Sub$1;

vm.java_lang_ArrayIndexOutOfBoundsException = link('java/lang/ArrayIndexOutOfBoundsException', function(f) { vm.java_lang_ArrayIndexOutOfBoundsException =  f; });

function org_netbeans_html_json_impl_SimpleList$LI() {
  var m;
  var CLS = org_netbeans_html_json_impl_SimpleList$LI;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._prev = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_json_impl_SimpleList$LI_prev'] = v; return this['fld_org_netbeans_html_json_impl_SimpleList$LI_prev']; };
  m = c._at = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_json_impl_SimpleList$LI_at'] = v; return this['fld_org_netbeans_html_json_impl_SimpleList$LI_at']; };
  m = c._min = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_json_impl_SimpleList$LI_min'] = v; return this['fld_org_netbeans_html_json_impl_SimpleList$LI_min']; };
  m = c._max = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_json_impl_SimpleList$LI_max'] = v; return this['fld_org_netbeans_html_json_impl_SimpleList$LI_max']; };
  m = c._add = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_json_impl_SimpleList$LI_add'] = v; return this['fld_org_netbeans_html_json_impl_SimpleList$LI_add']; };
  m = c._this$0 = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_json_impl_SimpleList$LI_this$0'] = v; return this['fld_org_netbeans_html_json_impl_SimpleList$LI_this$0']; };
    m = CLS.cons__VLorg_netbeans_html_json_impl_SimpleList_2III = function(lcA1, lcI2, lcI3, lcI4) {
  var  lcA0 = this;
lcA0['fld_org_netbeans_html_json_impl_SimpleList$LI_this$0'] = lcA1;
lcA0['fld_org_netbeans_html_json_impl_SimpleList$LI_prev'] = -1;
lcA0['fld_org_netbeans_html_json_impl_SimpleList$LI_at'] = lcI2;
lcA0['fld_org_netbeans_html_json_impl_SimpleList$LI_min'] = lcI3;
lcA0['fld_org_netbeans_html_json_impl_SimpleList$LI_max'] = lcI4;
return;

};
    m.access = 0;
    m.cls = CLS;
    m = CLS.cons__VLorg_netbeans_html_json_impl_SimpleList_2II = function(lcA1, lcI2, lcI3) {
  var  lcA0 = this;
c.constructor.cons__VLorg_netbeans_html_json_impl_SimpleList_2III.call(lcA0, lcA1, lcI2, lcI2, lcI3);
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.hasNext__Z = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((lcA0['fld_org_netbeans_html_json_impl_SimpleList$LI_at']) >= ((((lcA0['fld_org_netbeans_html_json_impl_SimpleList$LI_max']) + (lcA0['fld_org_netbeans_html_json_impl_SimpleList$LI_add'])) | 0))) { gt = 20; break IF; }
var stI0 = 1;{ gt = 21; break IF; }
    }
    X_20: for (;;) { IF: if (gt <= 20) {

var stI0 = 0;    }
    X_21: for (;;) { IF: if (gt <= 21) {
return stI0;

    }
}}}
};
c['hasNext__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.next__Ljava_lang_Object_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((lcA0['fld_org_netbeans_html_json_impl_SimpleList$LI_at']) != ((((lcA0['fld_org_netbeans_html_json_impl_SimpleList$LI_max']) + (lcA0['fld_org_netbeans_html_json_impl_SimpleList$LI_add'])) | 0))) { gt = 24; break IF; }
var stA0 = new vm.java_util_NoSuchElementException;
(refs_java_util_NoSuchElementException || (refs_java_util_NoSuchElementException = vm.java_util_NoSuchElementException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_org_netbeans_html_json_impl_SimpleList$LI_prev'] = lcA0['fld_org_netbeans_html_json_impl_SimpleList$LI_at'];
var stA0 = (refs_org_netbeans_html_json_impl_SimpleList || (refs_org_netbeans_html_json_impl_SimpleList = org_netbeans_html_json_impl_SimpleList(false))).access$200___3Ljava_lang_Object_2Lorg_netbeans_html_json_impl_SimpleList_2(lcA0['fld_org_netbeans_html_json_impl_SimpleList$LI_this$0']);
var stA1 = lcA0;var stA2 = stA1;
var stI2 = stA2['fld_org_netbeans_html_json_impl_SimpleList$LI_at'];var stI3 = stI2, stA2 = stA1, stI1 = stI3;
stA2['fld_org_netbeans_html_json_impl_SimpleList$LI_at'] = (((stI3) + (1)) | 0);
return (stA0[stI1] || Array.at(stA0, stI1));

    }
}}
};
c['next__Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.hasPrevious__Z = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((lcA0['fld_org_netbeans_html_json_impl_SimpleList$LI_at']) <= (lcA0['fld_org_netbeans_html_json_impl_SimpleList$LI_min'])) { gt = 15; break IF; }
var stI0 = 1;{ gt = 16; break IF; }
    }
    X_15: for (;;) { IF: if (gt <= 15) {

var stI0 = 0;    }
    X_16: for (;;) { IF: if (gt <= 16) {
return stI0;

    }
}}}
};
c['hasPrevious__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.previous__Ljava_lang_Object_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((lcA0['fld_org_netbeans_html_json_impl_SimpleList$LI_at']) != (lcA0['fld_org_netbeans_html_json_impl_SimpleList$LI_min'])) { gt = 19; break IF; }
var stA0 = new vm.java_util_NoSuchElementException;
(refs_java_util_NoSuchElementException || (refs_java_util_NoSuchElementException = vm.java_util_NoSuchElementException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }
    }
    X_19: for (;;) { IF: if (gt <= 19) {

var stA0 = lcA0;var stA1 = lcA0;var stA2 = stA1;
var stI2 = (((stA2['fld_org_netbeans_html_json_impl_SimpleList$LI_at']) - (1)) | 0);var stI3 = stI2, stA2 = stA1, stI1 = stI3;
stA2['fld_org_netbeans_html_json_impl_SimpleList$LI_at'] = stI3;
stA0['fld_org_netbeans_html_json_impl_SimpleList$LI_prev'] = stI1;
var stA0 = (refs_org_netbeans_html_json_impl_SimpleList || (refs_org_netbeans_html_json_impl_SimpleList = org_netbeans_html_json_impl_SimpleList(false))).access$200___3Ljava_lang_Object_2Lorg_netbeans_html_json_impl_SimpleList_2(lcA0['fld_org_netbeans_html_json_impl_SimpleList$LI_this$0']);
return (stA0[lcA0['fld_org_netbeans_html_json_impl_SimpleList$LI_prev']] || Array.at(stA0, lcA0['fld_org_netbeans_html_json_impl_SimpleList$LI_prev']));

    }
}}
};
c['previous__Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.nextIndex__I = function() {
  var  lcA0 = this;
return (((lcA0['fld_org_netbeans_html_json_impl_SimpleList$LI_at']) - (lcA0['fld_org_netbeans_html_json_impl_SimpleList$LI_min'])) | 0);

};
c['nextIndex__I'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.previousIndex__I = function() {
  var  lcA0 = this;
return ((((((lcA0['fld_org_netbeans_html_json_impl_SimpleList$LI_at']) - (1)) | 0)) - (lcA0['fld_org_netbeans_html_json_impl_SimpleList$LI_min'])) | 0);

};
c['previousIndex__I'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.remove__V = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((lcA0['fld_org_netbeans_html_json_impl_SimpleList$LI_prev']) != (-1)) { gt = 16; break IF; }
var stA0 = new vm.java_lang_IllegalStateException;
(refs_java_lang_IllegalStateException || (refs_java_lang_IllegalStateException = vm.java_lang_IllegalStateException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }
    }
    X_16: for (;;) { IF: if (gt <= 16) {

var stA0 = invoker.remove__Ljava_lang_Object_2I(lcA0['fld_org_netbeans_html_json_impl_SimpleList$LI_this$0'],lcA0['fld_org_netbeans_html_json_impl_SimpleList$LI_prev']);
lcA0['fld_org_netbeans_html_json_impl_SimpleList$LI_at'] = lcA0['fld_org_netbeans_html_json_impl_SimpleList$LI_prev'];
lcA0['fld_org_netbeans_html_json_impl_SimpleList$LI_prev'] = -1;
var stA0 = lcA0;var stA1 = stA0;
stA0['fld_org_netbeans_html_json_impl_SimpleList$LI_add'] = (((stA1['fld_org_netbeans_html_json_impl_SimpleList$LI_add']) - (1)) | 0);
return;

    }
}}
};
c['remove__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.set__VLjava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = invoker.set__Ljava_lang_Object_2ILjava_lang_Object_2(lcA0['fld_org_netbeans_html_json_impl_SimpleList$LI_this$0'],(((lcA0['fld_org_netbeans_html_json_impl_SimpleList$LI_min']) + (lcA0['fld_org_netbeans_html_json_impl_SimpleList$LI_prev'])) | 0), lcA1);
return;

};
c['set__VLjava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.add__VLjava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
invoker.add__VILjava_lang_Object_2(lcA0['fld_org_netbeans_html_json_impl_SimpleList$LI_this$0'],(((lcA0['fld_org_netbeans_html_json_impl_SimpleList$LI_min']) + (lcA0['fld_org_netbeans_html_json_impl_SimpleList$LI_at'])) | 0), lcA1);
var stA0 = lcA0;var stA1 = stA0;
stA0['fld_org_netbeans_html_json_impl_SimpleList$LI_add'] = (((stA1['fld_org_netbeans_html_json_impl_SimpleList$LI_add']) + (1)) | 0);
return;

};
c['add__VLjava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_json_impl_SimpleList$LIfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_json_impl_SimpleList$LI', { value : true });
      vm.java_util_ListIterator(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_json_impl_SimpleList$LIfillInstOf });
    org_netbeans_html_json_impl_SimpleList$LIfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/json/impl/SimpleList$LI';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.java_util_ListIterator(false).constructor.$class
    ]; };
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
    var refs_java_util_NoSuchElementException;
    var refs_org_netbeans_html_json_impl_SimpleList;
    var refs_java_lang_IllegalStateException;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_org_netbeans_html_json_impl_SimpleList$LI_prev'] = 0;
    this['fld_org_netbeans_html_json_impl_SimpleList$LI_at'] = 0;
    this['fld_org_netbeans_html_json_impl_SimpleList$LI_min'] = 0;
    this['fld_org_netbeans_html_json_impl_SimpleList$LI_max'] = 0;
    this['fld_org_netbeans_html_json_impl_SimpleList$LI_add'] = 0;
    this['fld_org_netbeans_html_json_impl_SimpleList$LI_this$0'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_netbeans_html_json_impl_SimpleList$LI = org_netbeans_html_json_impl_SimpleList$LI;

vm.java_util_ListIterator = link('java/util/ListIterator', function(f) { vm.java_util_ListIterator =  f; });
vm.java_util_NoSuchElementException = link('java/util/NoSuchElementException', function(f) { vm.java_util_NoSuchElementException =  f; });

function net_java_html_json_Models() {
  var m;
  var CLS = net_java_html_json_Models;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.isModel__ZLjava_lang_Class_2 = function(lcA0) {
var stI0 = (refs_org_netbeans_html_json_impl_JSON || (refs_org_netbeans_html_json_impl_JSON = org_netbeans_html_json_impl_JSON(false))).isModel__ZLjava_lang_Class_2(lcA0);
return stI0;

};
c['isModel__ZLjava_lang_Class_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2 = function(lcA0, lcA1) {
var stA0 = (refs_org_netbeans_html_json_impl_JSON || (refs_org_netbeans_html_json_impl_JSON = org_netbeans_html_json_impl_JSON(false))).bindTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2(lcA0, lcA1);
return stA0;

};
c['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.parse__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2Ljava_io_InputStream_2 = function(lcA0, lcA1, lcA2) {
var stA0 = (refs_org_netbeans_html_json_impl_JSON || (refs_org_netbeans_html_json_impl_JSON = org_netbeans_html_json_impl_JSON(false))).readStream__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2Ljava_io_InputStream_2Ljava_util_Collection_2(lcA0, lcA1, lcA2, null);
return stA0;

};
c['parse__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2Ljava_io_InputStream_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.parse__VLnet_java_html_BrwsrCtx_2Ljava_lang_Class_2Ljava_io_InputStream_2Ljava_util_Collection_2 = function(lcA0, lcA1, lcA2, lcA3) {
var stA0 = invoker.getClass__Ljava_lang_Class_2(lcA3);
var stA0 = (refs_org_netbeans_html_json_impl_JSON || (refs_org_netbeans_html_json_impl_JSON = org_netbeans_html_json_impl_JSON(false))).readStream__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2Ljava_io_InputStream_2Ljava_util_Collection_2(lcA0, lcA1, lcA2, lcA3);
return;

};
c['parse__VLnet_java_html_BrwsrCtx_2Ljava_lang_Class_2Ljava_io_InputStream_2Ljava_util_Collection_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.fromRaw__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2Ljava_lang_Object_2 = function(lcA0, lcA1, lcA2) {
var stA0 = (refs_org_netbeans_html_json_impl_JSON || (refs_org_netbeans_html_json_impl_JSON = org_netbeans_html_json_impl_JSON(false))).read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0, lcA1, lcA2);
var lcA3 = stA0;
(refs_org_netbeans_html_json_impl_JSON || (refs_org_netbeans_html_json_impl_JSON = org_netbeans_html_json_impl_JSON(false))).readBindings__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0, lcA3, lcA2);
return lcA3;

};
c['fromRaw__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2Ljava_lang_Object_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.toRaw__Ljava_lang_Object_2Ljava_lang_Object_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((lcA0) !== null) { gt = 13; break IF; }
var stA0 = (refs_net_java_html_json_FakeModel || (refs_net_java_html_json_FakeModel = net_java_html_json_FakeModel(false))).create__Ljava_lang_Object_2();
var stA0 = c.toRaw__Ljava_lang_Object_2Ljava_lang_Object_2(stA0);
return null;
    }
    X_13: for (;;) { IF: if (gt <= 13) {

var stA0 = invoker.getClass__Ljava_lang_Class_2(lcA0);
var lcA1 = stA0;
var stI0 = c.isModel__ZLjava_lang_Class_2(lcA1);
if ((stI0) != 0) { gt = 52; break IF; }
var stA0 = new vm.java_lang_IllegalStateException;
var stA1 = stA0;var stA2 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"Not a model ");
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2(stA2,lcA1);
var stA2 = invoker.toString__Ljava_lang_String_2(stA2);
(refs_java_lang_IllegalStateException || (refs_java_lang_IllegalStateException = vm.java_lang_IllegalStateException(false))).constructor['cons__VLjava_lang_String_2'].call(stA1, stA2);
{ var stA0 = stA0; throw stA0; }
    }
    X_52: for (;;) { IF: if (gt <= 52) {

var stA0 = (refs_org_netbeans_html_json_impl_JSON || (refs_org_netbeans_html_json_impl_JSON = org_netbeans_html_json_impl_JSON(false))).find__Ljava_lang_Object_2Ljava_lang_Object_2(lcA0);
return stA0;

    }
}}}
};
c['toRaw__Ljava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.applyBindings__VLjava_lang_Object_2 = function(lcA0) {
(refs_org_netbeans_html_json_impl_JSON || (refs_org_netbeans_html_json_impl_JSON = org_netbeans_html_json_impl_JSON(false))).applyBindings__VLjava_lang_Object_2Ljava_lang_String_2(lcA0, null);
return;

};
c['applyBindings__VLjava_lang_Object_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.applyBindings__VLjava_lang_Object_2Ljava_lang_String_2 = function(lcA0, lcA1) {
(refs_org_netbeans_html_json_impl_JSON || (refs_org_netbeans_html_json_impl_JSON = org_netbeans_html_json_impl_JSON(false))).applyBindings__VLjava_lang_Object_2Ljava_lang_String_2(lcA0, lcA1);
return;

};
c['applyBindings__VLjava_lang_Object_2Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.asList__Ljava_util_List_2_3Ljava_lang_Object_2 = function(lcA0) {
var stA0 = (refs_org_netbeans_html_json_impl_SimpleList || (refs_org_netbeans_html_json_impl_SimpleList = org_netbeans_html_json_impl_SimpleList(false))).asList__Ljava_util_List_2_3Ljava_lang_Object_2(lcA0);
return stA0;

};
c['asList__Ljava_util_List_2_3Ljava_lang_Object_2'] = m;

    m.access = 137;
    m.cls = CLS;
    c.constructor = CLS;
    function net_java_html_json_ModelsfillInstOf(x) {
        Object.defineProperty(x, '$instOf_net_java_html_json_Models', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: net_java_html_json_ModelsfillInstOf });
    net_java_html_json_ModelsfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'net/java/html/json/Models';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    var refs_org_netbeans_html_json_impl_JSON;
    var refs_net_java_html_json_FakeModel;
    var refs_java_lang_StringBuilder;
    var refs_java_lang_IllegalStateException;
    var refs_org_netbeans_html_json_impl_SimpleList;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.net_java_html_json_Models = registerClass(exports,'net_java_html_json_Models',net_java_html_json_Models);


function net_java_html_json_FakeModel() {
  var m;
  var CLS = net_java_html_json_FakeModel;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_TYPE'] = null;
  m = c._TYPE = function (v) {  if (arguments.length == 1) CLS['fld_TYPE'] = v; return CLS['fld_TYPE']; };
  m = c._proto = function (v) {  if (arguments.length == 1) this['fld_net_java_html_json_FakeModel_proto'] = v; return this['fld_net_java_html_json_FakeModel_proto']; };
    m = c.modelFor__Ljava_lang_Class_2 = function() {
return (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = net_java_html_json_Models(false))).constructor.$class;

};
    m.access = 10;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.createProto__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2(c._TYPE(),lcA0, lcA1);
stA0['fld_net_java_html_json_FakeModel_proto'] = stA1;
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
    m.access = 2;
    m.cls = CLS;
    m = c.create__Ljava_lang_Object_2 = function() {
var stA0 = new net_java_html_json_FakeModel;
c.constructor.cons__V.call(stA0);
return stA0;

};
    m.access = 9;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 0);
var lcA3 = stA0;
var stA0 = lcA0['fld_net_java_html_json_FakeModel_proto'];var stA1 = lcA2;var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, 0);
stA0.extract__VLjava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Object_2(stA1, stA2, lcA3);
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.access$100__Lorg_netbeans_html_json_spi_Proto_2Lnet_java_html_json_FakeModel_2 = function(lcA0) {
return lcA0['fld_net_java_html_json_FakeModel_proto'];

};
    m.access = 4104;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lnet_java_html_json_FakeModel$1_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2.call(lcA0, lcA1, lcA2);
return;

};
    m.access = 4096;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new net_java_html_json_FakeModel$Html4JavaType;
(refs_net_java_html_json_FakeModel$Html4JavaType || (refs_net_java_html_json_FakeModel$Html4JavaType = net_java_html_json_FakeModel$Html4JavaType(false))).constructor.cons__VLnet_java_html_json_FakeModel$1_2.call(stA0, null);
c._TYPE(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function net_java_html_json_FakeModelfillInstOf(x) {
        Object.defineProperty(x, '$instOf_net_java_html_json_FakeModel', { value : true });
      vm.java_lang_Cloneable(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: net_java_html_json_FakeModelfillInstOf });
    net_java_html_json_FakeModelfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'net/java/html/json/FakeModel';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.java_lang_Cloneable(false).constructor.$class
    ]; };
    CLS.$class.access = 48;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_net_java_html_json_Models;
    var refs_net_java_html_BrwsrCtx;
    var refs_net_java_html_json_FakeModel$Html4JavaType;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_net_java_html_json_FakeModel_proto'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.net_java_html_json_FakeModel = net_java_html_json_FakeModel;

vm.java_lang_Cloneable = link('java/lang/Cloneable', function(f) { vm.java_lang_Cloneable =  f; });
vm.net_java_html_BrwsrCtx = link('net/java/html/BrwsrCtx', function(f) { vm.net_java_html_BrwsrCtx =  f; });

function net_java_html_json_Function() {
  var m;
  var CLS = net_java_html_json_Function;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    c.constructor = CLS;
    function net_java_html_json_FunctionfillInstOf(x) {
        Object.defineProperty(x, '$instOf_net_java_html_json_Function', { value : true });
      vm.java_lang_annotation_Annotation(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: net_java_html_json_FunctionfillInstOf });
    net_java_html_json_FunctionfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'net/java/html/json/Function';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.java_lang_annotation_Annotation(false).constructor.$class
    ]; };
    CLS.$class.access = 9729;
    CLS.$class.cnstr = CLS;
    CLS.$class.anno = {"Ljava/lang/annotation/Target;" : {
"value" : [(refs_java_lang_annotation_ElementType || (refs_java_lang_annotation_ElementType = vm.java_lang_annotation_ElementType(false)))['valueOf__Ljava_lang_annotation_ElementType_2Ljava_lang_String_2']('METHOD')]
}
,"Ljava/lang/annotation/Retention;" : {
"value" : (refs_java_lang_annotation_RetentionPolicy || (refs_java_lang_annotation_RetentionPolicy = vm.java_lang_annotation_RetentionPolicy(false)))['valueOf__Ljava_lang_annotation_RetentionPolicy_2Ljava_lang_String_2']('SOURCE')
}

    };
    var refs_java_lang_annotation_ElementType;
    var refs_java_lang_annotation_RetentionPolicy;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.net_java_html_json_Function = registerClass(exports,'net_java_html_json_Function',net_java_html_json_Function);


function net_java_html_json_Model() {
  var m;
  var CLS = net_java_html_json_Model;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = c.className__Ljava_lang_String_2 = function() {
};
c['className__Ljava_lang_String_2'] = m;

    m.access = 1025;
    m.cls = CLS;
    m = c.properties___3Lnet_java_html_json_Property_2 = function() {
};
c['properties___3Lnet_java_html_json_Property_2'] = m;

    m.access = 1025;
    m.cls = CLS;
    m = c.targetId__Ljava_lang_String_2 = function() {
  return "";
};
c['targetId__Ljava_lang_String_2'] = m;

    m.access = 1025;
    m.cls = CLS;
    m = c.builder__Ljava_lang_String_2 = function() {
  return "";
};
c['builder__Ljava_lang_String_2'] = m;

    m.access = 1025;
    m.cls = CLS;
    m = c.instance__Z = function() {
  return 0;
};
c['instance__Z'] = m;

    m.access = 1025;
    m.cls = CLS;
    c.constructor = CLS;
    function net_java_html_json_ModelfillInstOf(x) {
        Object.defineProperty(x, '$instOf_net_java_html_json_Model', { value : true });
      vm.java_lang_annotation_Annotation(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: net_java_html_json_ModelfillInstOf });
    net_java_html_json_ModelfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'net/java/html/json/Model';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.java_lang_annotation_Annotation(false).constructor.$class
    ]; };
    CLS.$class.access = 9729;
    CLS.$class.cnstr = CLS;
    CLS.$class.anno = {"Ljava/lang/annotation/Retention;" : {
"value" : (refs_java_lang_annotation_RetentionPolicy || (refs_java_lang_annotation_RetentionPolicy = vm.java_lang_annotation_RetentionPolicy(false)))['valueOf__Ljava_lang_annotation_RetentionPolicy_2Ljava_lang_String_2']('SOURCE')
}
,"Ljava/lang/annotation/Target;" : {
"value" : [(refs_java_lang_annotation_ElementType || (refs_java_lang_annotation_ElementType = vm.java_lang_annotation_ElementType(false)))['valueOf__Ljava_lang_annotation_ElementType_2Ljava_lang_String_2']('TYPE')]
}

    };
    var refs_java_lang_annotation_RetentionPolicy;
    var refs_java_lang_annotation_ElementType;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.net_java_html_json_Model = registerClass(exports,'net_java_html_json_Model',net_java_html_json_Model);


function net_java_html_json_ModelOperation() {
  var m;
  var CLS = net_java_html_json_ModelOperation;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    c.constructor = CLS;
    function net_java_html_json_ModelOperationfillInstOf(x) {
        Object.defineProperty(x, '$instOf_net_java_html_json_ModelOperation', { value : true });
      vm.java_lang_annotation_Annotation(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: net_java_html_json_ModelOperationfillInstOf });
    net_java_html_json_ModelOperationfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'net/java/html/json/ModelOperation';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.java_lang_annotation_Annotation(false).constructor.$class
    ]; };
    CLS.$class.access = 9729;
    CLS.$class.cnstr = CLS;
    CLS.$class.anno = {"Ljava/lang/annotation/Target;" : {
"value" : [(refs_java_lang_annotation_ElementType || (refs_java_lang_annotation_ElementType = vm.java_lang_annotation_ElementType(false)))['valueOf__Ljava_lang_annotation_ElementType_2Ljava_lang_String_2']('METHOD')]
}
,"Ljava/lang/annotation/Retention;" : {
"value" : (refs_java_lang_annotation_RetentionPolicy || (refs_java_lang_annotation_RetentionPolicy = vm.java_lang_annotation_RetentionPolicy(false)))['valueOf__Ljava_lang_annotation_RetentionPolicy_2Ljava_lang_String_2']('SOURCE')
}

    };
    var refs_java_lang_annotation_ElementType;
    var refs_java_lang_annotation_RetentionPolicy;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.net_java_html_json_ModelOperation = registerClass(exports,'net_java_html_json_ModelOperation',net_java_html_json_ModelOperation);


function net_java_html_json_OnPropertyChange() {
  var m;
  var CLS = net_java_html_json_OnPropertyChange;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = c.value___3Ljava_lang_String_2 = function() {
};
c['value___3Ljava_lang_String_2'] = m;

    m.access = 1025;
    m.cls = CLS;
    c.constructor = CLS;
    function net_java_html_json_OnPropertyChangefillInstOf(x) {
        Object.defineProperty(x, '$instOf_net_java_html_json_OnPropertyChange', { value : true });
      vm.java_lang_annotation_Annotation(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: net_java_html_json_OnPropertyChangefillInstOf });
    net_java_html_json_OnPropertyChangefillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'net/java/html/json/OnPropertyChange';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.java_lang_annotation_Annotation(false).constructor.$class
    ]; };
    CLS.$class.access = 9729;
    CLS.$class.cnstr = CLS;
    CLS.$class.anno = {"Ljava/lang/annotation/Retention;" : {
"value" : (refs_java_lang_annotation_RetentionPolicy || (refs_java_lang_annotation_RetentionPolicy = vm.java_lang_annotation_RetentionPolicy(false)))['valueOf__Ljava_lang_annotation_RetentionPolicy_2Ljava_lang_String_2']('SOURCE')
}
,"Ljava/lang/annotation/Target;" : {
"value" : [(refs_java_lang_annotation_ElementType || (refs_java_lang_annotation_ElementType = vm.java_lang_annotation_ElementType(false)))['valueOf__Ljava_lang_annotation_ElementType_2Ljava_lang_String_2']('METHOD')]
}

    };
    var refs_java_lang_annotation_RetentionPolicy;
    var refs_java_lang_annotation_ElementType;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.net_java_html_json_OnPropertyChange = registerClass(exports,'net_java_html_json_OnPropertyChange',net_java_html_json_OnPropertyChange);


function net_java_html_json_OnReceive() {
  var m;
  var CLS = net_java_html_json_OnReceive;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = c.url__Ljava_lang_String_2 = function() {
};
c['url__Ljava_lang_String_2'] = m;

    m.access = 1025;
    m.cls = CLS;
    m = c.headers___3Ljava_lang_String_2 = function() {
  return [];
};
c['headers___3Ljava_lang_String_2'] = m;

    m.access = 1025;
    m.cls = CLS;
    m = c.jsonp__Ljava_lang_String_2 = function() {
  return "";
};
c['jsonp__Ljava_lang_String_2'] = m;

    m.access = 1025;
    m.cls = CLS;
    m = c.data__Ljava_lang_Class_2 = function() {
  return (refs_java_lang_Object || (refs_java_lang_Object = vm.java_lang_Object(false))).constructor.$class;
};
c['data__Ljava_lang_Class_2'] = m;

    m.access = 1025;
    m.cls = CLS;
    m = c.method__Ljava_lang_String_2 = function() {
  return "GET";
};
c['method__Ljava_lang_String_2'] = m;

    m.access = 1025;
    m.cls = CLS;
    m = c.onError__Ljava_lang_String_2 = function() {
  return "";
};
c['onError__Ljava_lang_String_2'] = m;

    m.access = 1025;
    m.cls = CLS;
    c.constructor = CLS;
    function net_java_html_json_OnReceivefillInstOf(x) {
        Object.defineProperty(x, '$instOf_net_java_html_json_OnReceive', { value : true });
      vm.java_lang_annotation_Annotation(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: net_java_html_json_OnReceivefillInstOf });
    net_java_html_json_OnReceivefillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'net/java/html/json/OnReceive';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.java_lang_annotation_Annotation(false).constructor.$class
    ]; };
    CLS.$class.access = 9729;
    CLS.$class.cnstr = CLS;
    CLS.$class.anno = {"Ljava/lang/annotation/Retention;" : {
"value" : (refs_java_lang_annotation_RetentionPolicy || (refs_java_lang_annotation_RetentionPolicy = vm.java_lang_annotation_RetentionPolicy(false)))['valueOf__Ljava_lang_annotation_RetentionPolicy_2Ljava_lang_String_2']('SOURCE')
}
,"Ljava/lang/annotation/Target;" : {
"value" : [(refs_java_lang_annotation_ElementType || (refs_java_lang_annotation_ElementType = vm.java_lang_annotation_ElementType(false)))['valueOf__Ljava_lang_annotation_ElementType_2Ljava_lang_String_2']('METHOD')]
}

    };
    var refs_java_lang_Object;
    var refs_java_lang_annotation_RetentionPolicy;
    var refs_java_lang_annotation_ElementType;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.net_java_html_json_OnReceive = registerClass(exports,'net_java_html_json_OnReceive',net_java_html_json_OnReceive);


function net_java_html_json_Property() {
  var m;
  var CLS = net_java_html_json_Property;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = c.name__Ljava_lang_String_2 = function() {
};
c['name__Ljava_lang_String_2'] = m;

    m.access = 1025;
    m.cls = CLS;
    m = c.type__Ljava_lang_Class_2 = function() {
};
c['type__Ljava_lang_Class_2'] = m;

    m.access = 1025;
    m.cls = CLS;
    m = c.array__Z = function() {
  return 0;
};
c['array__Z'] = m;

    m.access = 1025;
    m.cls = CLS;
    m = c.mutable__Z = function() {
  return 1;
};
c['mutable__Z'] = m;

    m.access = 1025;
    m.cls = CLS;
    c.constructor = CLS;
    function net_java_html_json_PropertyfillInstOf(x) {
        Object.defineProperty(x, '$instOf_net_java_html_json_Property', { value : true });
      vm.java_lang_annotation_Annotation(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: net_java_html_json_PropertyfillInstOf });
    net_java_html_json_PropertyfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'net/java/html/json/Property';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.java_lang_annotation_Annotation(false).constructor.$class
    ]; };
    CLS.$class.access = 9729;
    CLS.$class.cnstr = CLS;
    CLS.$class.anno = {"Ljava/lang/annotation/Retention;" : {
"value" : (refs_java_lang_annotation_RetentionPolicy || (refs_java_lang_annotation_RetentionPolicy = vm.java_lang_annotation_RetentionPolicy(false)))['valueOf__Ljava_lang_annotation_RetentionPolicy_2Ljava_lang_String_2']('SOURCE')
}
,"Ljava/lang/annotation/Target;" : {
"value" : []
}

    };
    var refs_java_lang_annotation_RetentionPolicy;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.net_java_html_json_Property = registerClass(exports,'net_java_html_json_Property',net_java_html_json_Property);


function org_netbeans_html_json_impl_ClassValueTypes() {
  var m;
  var CLS = org_netbeans_html_json_impl_ClassValueTypes;
  if (!CLS.$class) {
    var pp = vm.java_lang_ClassValue(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_java_lang_ClassValue || (refs_java_lang_ClassValue = vm.java_lang_ClassValue(false))).constructor['cons__V'].call(lcA0);
return;

};
CLS['cons__V'] = m;

    m.access = 0;
    m.cls = CLS;
    m = c.computeValue___3Lorg_netbeans_html_json_spi_Proto$Type_2Ljava_lang_Class_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lorg/netbeans/html/json/spi/Proto$Type;', vm.org_netbeans_html_json_spi_Proto$Type, 1);
return stA0;

};
    m.access = 4;
    m.cls = CLS;
    m = c.find___3Lorg_netbeans_html_json_spi_Proto$Type_2Ljava_lang_Class_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = invoker.get__Ljava_lang_Object_2Ljava_lang_Class_2(lcA0,lcA1);
if (stA0 !== null && !Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](stA0, 1, vm.org_netbeans_html_json_spi_Proto$Type)) vm.java_lang_Class(false).castEx(stA0, '');
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.computeValue__Ljava_lang_Object_2Ljava_lang_Class_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = lcA0.computeValue___3Lorg_netbeans_html_json_spi_Proto$Type_2Ljava_lang_Class_2(lcA1);
return stA0;

};
c['computeValue__Ljava_lang_Object_2Ljava_lang_Class_2'] = m;

    m.access = 4164;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_json_impl_ClassValueTypesfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_json_impl_ClassValueTypes', { value : true });
      vm.org_netbeans_html_json_impl_ModelTypes(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_json_impl_ClassValueTypesfillInstOf });
    org_netbeans_html_json_impl_ClassValueTypesfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/json/impl/ClassValueTypes';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        org_netbeans_html_json_impl_ModelTypes(false).constructor.$class
    ]; };
    CLS.$class.access = 48;
    CLS.$class.cnstr = CLS;
    var refs_java_lang_ClassValue;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_netbeans_html_json_impl_ClassValueTypes = org_netbeans_html_json_impl_ClassValueTypes;

vm.java_lang_ClassValue = link('java/lang/ClassValue', function(f) { vm.java_lang_ClassValue =  f; });

function org_netbeans_html_json_impl_JSON$1() {
  var m;
  var CLS = org_netbeans_html_json_impl_JSON$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    c.constructor = CLS;
    function org_netbeans_html_json_impl_JSON$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_json_impl_JSON$1', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_json_impl_JSON$1fillInstOf });
    org_netbeans_html_json_impl_JSON$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/json/impl/JSON$1';
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
vm.org_netbeans_html_json_impl_JSON$1 = org_netbeans_html_json_impl_JSON$1;


function org_netbeans_html_json_impl_ModelProcessor$GetSet() {
  var m;
  var CLS = org_netbeans_html_json_impl_ModelProcessor$GetSet;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._name = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_json_impl_ModelProcessor$GetSet_name'] = v; return this['fld_org_netbeans_html_json_impl_ModelProcessor$GetSet_name']; };
  m = c._getter = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_json_impl_ModelProcessor$GetSet_getter'] = v; return this['fld_org_netbeans_html_json_impl_ModelProcessor$GetSet_getter']; };
  m = c._setter = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_json_impl_ModelProcessor$GetSet_setter'] = v; return this['fld_org_netbeans_html_json_impl_ModelProcessor$GetSet_setter']; };
  m = c._type = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_json_impl_ModelProcessor$GetSet_type'] = v; return this['fld_org_netbeans_html_json_impl_ModelProcessor$GetSet_type']; };
  m = c._readOnly = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_json_impl_ModelProcessor$GetSet_readOnly'] = v; return this['fld_org_netbeans_html_json_impl_ModelProcessor$GetSet_readOnly']; };
  m = c._constant = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_json_impl_ModelProcessor$GetSet_constant'] = v; return this['fld_org_netbeans_html_json_impl_ModelProcessor$GetSet_constant']; };
    m = CLS.cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2ZZ = function(lcA1, lcA2, lcA3, lcA4, lcI5, lcI6) {
  var  lcA0 = this;
lcA0['fld_org_netbeans_html_json_impl_ModelProcessor$GetSet_name'] = lcA1;
lcA0['fld_org_netbeans_html_json_impl_ModelProcessor$GetSet_getter'] = lcA2;
lcA0['fld_org_netbeans_html_json_impl_ModelProcessor$GetSet_setter'] = lcA3;
lcA0['fld_org_netbeans_html_json_impl_ModelProcessor$GetSet_type'] = lcA4;
lcA0['fld_org_netbeans_html_json_impl_ModelProcessor$GetSet_readOnly'] = lcI5;
lcA0['fld_org_netbeans_html_json_impl_ModelProcessor$GetSet_constant'] = lcI6;
return;

};
    m.access = 0;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_json_impl_ModelProcessor$GetSetfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_json_impl_ModelProcessor$GetSet', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_json_impl_ModelProcessor$GetSetfillInstOf });
    org_netbeans_html_json_impl_ModelProcessor$GetSetfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/json/impl/ModelProcessor$GetSet';
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
    this['fld_org_netbeans_html_json_impl_ModelProcessor$GetSet_name'] = null;
    this['fld_org_netbeans_html_json_impl_ModelProcessor$GetSet_getter'] = null;
    this['fld_org_netbeans_html_json_impl_ModelProcessor$GetSet_setter'] = null;
    this['fld_org_netbeans_html_json_impl_ModelProcessor$GetSet_type'] = null;
    this['fld_org_netbeans_html_json_impl_ModelProcessor$GetSet_readOnly'] = 0;
    this['fld_org_netbeans_html_json_impl_ModelProcessor$GetSet_constant'] = 0;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_netbeans_html_json_impl_ModelProcessor$GetSet = org_netbeans_html_json_impl_ModelProcessor$GetSet;


function org_netbeans_html_json_impl_ModelProcessor$Prprt() {
  var m;
  var CLS = org_netbeans_html_json_impl_ModelProcessor$Prprt;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._e = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_json_impl_ModelProcessor$Prprt_e'] = v; return this['fld_org_netbeans_html_json_impl_ModelProcessor$Prprt_e']; };
  m = c._tm = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_json_impl_ModelProcessor$Prprt_tm'] = v; return this['fld_org_netbeans_html_json_impl_ModelProcessor$Prprt_tm']; };
  m = c._p = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_json_impl_ModelProcessor$Prprt_p'] = v; return this['fld_org_netbeans_html_json_impl_ModelProcessor$Prprt_p']; };
    m = CLS.cons__VLjavax_lang_model_element_Element_2Ljavax_lang_model_element_AnnotationMirror_2Lnet_java_html_json_Property_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
lcA0['fld_org_netbeans_html_json_impl_ModelProcessor$Prprt_e'] = lcA1;
lcA0['fld_org_netbeans_html_json_impl_ModelProcessor$Prprt_tm'] = lcA2;
lcA0['fld_org_netbeans_html_json_impl_ModelProcessor$Prprt_p'] = lcA3;
return;

};
    m.access = 1;
    m.cls = CLS;
    m = c.name__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
var stA0 = invoker.name__Ljava_lang_String_2(lcA0['fld_org_netbeans_html_json_impl_ModelProcessor$Prprt_p']);
return stA0;

};
    m.access = 0;
    m.cls = CLS;
    m = c.array__Z = function() {
  var  lcA0 = this;
var stI0 = invoker.array__Z(lcA0['fld_org_netbeans_html_json_impl_ModelProcessor$Prprt_p']);
return stI0;

};
    m.access = 0;
    m.cls = CLS;
    m = c.mutable__Z = function() {
  var  lcA0 = this;
var stI0 = invoker.mutable__Z(lcA0['fld_org_netbeans_html_json_impl_ModelProcessor$Prprt_p']);
return stI0;

};
    m.access = 0;
    m.cls = CLS;
    m = c.typeName__Ljava_lang_String_2Ljavax_annotation_processing_ProcessingEnvironment_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
try {
var stA0 = invoker.type__Ljava_lang_Class_2(lcA0['fld_org_netbeans_html_json_impl_ModelProcessor$Prprt_p']);
var stA0 = invoker.getName__Ljava_lang_String_2(stA0);
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_annotation_IncompleteAnnotationException']) {var stA0 = e;{ gt = 13; break IF; }}
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_annotation_AnnotationTypeMismatchException']) {var stA0 = e;{ gt = 19; break IF; }}
throw e;
}return stA0;
    }
    X_13: for (;;) { IF: if (gt <= 13) {
var lcA3 = stA0;
var lcA2 = lcA3;
{ gt = 22; break IF; }
    }
    X_19: for (;;) { IF: if (gt <= 19) {
var lcA3 = stA0;
var lcA2 = lcA3;
    }
    X_22: for (;;) { IF: if (gt <= 22) {

var stA0 = (refs_org_netbeans_html_json_impl_ModelProcessor || (refs_org_netbeans_html_json_impl_ModelProcessor = org_netbeans_html_json_impl_ModelProcessor(false))).getAnnoValues__Ljava_util_List_2Ljavax_annotation_processing_ProcessingEnvironment_2Ljavax_lang_model_element_Element_2Ljavax_lang_model_element_AnnotationMirror_2(lcA1, lcA0['fld_org_netbeans_html_json_impl_ModelProcessor$Prprt_e'], lcA0['fld_org_netbeans_html_json_impl_ModelProcessor$Prprt_tm']);
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA3 = stA0;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

var stI0 = invoker.hasNext__Z(lcA3);
if ((stI0) == 0) { gt = 109; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA3);
var lcA4 = stA0;
var stA0 = invoker.toString__Ljava_lang_String_2(lcA4);
var stA0 = invoker.replace__Ljava_lang_String_2Ljava_lang_CharSequence_2Ljava_lang_CharSequence_2(stA0," ", "");
var lcA5 = stA0;
var stI0 = invoker.startsWith__ZLjava_lang_String_2(lcA5,"type=");
if ((stI0) == 0) { gt = 106; break IF; }
var stI0 = invoker.endsWith__ZLjava_lang_String_2(lcA5,".class");
if ((stI0) == 0) { gt = 106; break IF; }
var stA0 = lcA5;var stI1 = 5;var stI2 = invoker.length__I(lcA5);
var stA0 = invoker.substring__Ljava_lang_String_2II(stA0,stI1, (((stI2) - ((6))) | 0));
return stA0;
    }
    X_106: for (;;) { IF: if (gt <= 106) {
{ gt = 0; continue X_40; }
    }
    X_109: for (;;) { IF: if (gt <= 109) {

{ var stA0 = lcA2; throw lcA2; }

    }
}}}}}}}
};
    m.access = 0;
    m.cls = CLS;
    m = c.wrap___3Lorg_netbeans_html_json_impl_ModelProcessor$Prprt_2Ljavax_annotation_processing_ProcessingEnvironment_2Ljavax_lang_model_element_Element_2_3Lnet_java_html_json_Property_2 = function(lcA0, lcA1, lcA2) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if (((lcA2).length) != 0) { gt = 10; break IF; }
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lorg/netbeans/html/json/impl/ModelProcessor$Prprt;', vm.org_netbeans_html_json_impl_ModelProcessor$Prprt, 0);
return stA0;
    }
    X_10: for (;;) { IF: if (gt <= 10) {

var stA0 = invoker.getKind__Ljavax_lang_model_element_ElementKind_2(lcA1);
var stI0 = invoker.isClass__Z(stA0);
if ((stI0) != 0) { gt = 54; break IF; }
var stA0 = new vm.java_lang_IllegalStateException;
var stA1 = stA0;var stA2 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"");
var stA3 = invoker.getKind__Ljavax_lang_model_element_ElementKind_2(lcA1);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2(stA2,stA3);
var stA2 = invoker.toString__Ljava_lang_String_2(stA2);
(refs_java_lang_IllegalStateException || (refs_java_lang_IllegalStateException = vm.java_lang_IllegalStateException(false))).constructor['cons__VLjava_lang_String_2'].call(stA1, stA2);
{ var stA0 = stA0; throw stA0; }
    }
    X_54: for (;;) { IF: if (gt <= 54) {

if (lcA1 !== null && !lcA1['$instOf_javax_lang_model_element_TypeElement']) vm.java_lang_Class(false).castEx(lcA1, 'javax.lang.model.element.TypeElement');
var lcA3 = lcA1;
var lcA4 = null;
var stA0 = invoker.getAnnotationMirrors__Ljava_util_List_2(lcA3);
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA5 = stA0;
    }
    X_75: for (;;) { IF: if (gt <= 75) {

var stI0 = invoker.hasNext__Z(lcA5);
if ((stI0) == 0) { gt = 192; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA5);
if (stA0 !== null && !stA0['$instOf_javax_lang_model_element_AnnotationMirror']) vm.java_lang_Class(false).castEx(stA0, 'javax.lang.model.element.AnnotationMirror');
var lcA6 = stA0;
var stA0 = invoker.getElementValues__Ljava_util_Map_2(lcA6);
var stA0 = invoker.entrySet__Ljava_util_Set_2(stA0);
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA7 = stA0;
    }
    X_116: for (;;) { IF: if (gt <= 116) {

var stI0 = invoker.hasNext__Z(lcA7);
if ((stI0) == 0) { gt = 189; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA7);
if (stA0 !== null && !stA0['$instOf_java_util_Map$Entry']) vm.java_lang_Class(false).castEx(stA0, 'java.util.Map$Entry');
var lcA8 = stA0;
var stA0 = invoker.getKey__Ljava_lang_Object_2(lcA8);
if (stA0 !== null && !stA0['$instOf_javax_lang_model_element_ExecutableElement']) vm.java_lang_Class(false).castEx(stA0, 'javax.lang.model.element.ExecutableElement');
var stA0 = invoker.getSimpleName__Ljavax_lang_model_element_Name_2(stA0);
var stI0 = invoker.contentEquals__ZLjava_lang_CharSequence_2(stA0,"properties");
if ((stI0) == 0) { gt = 186; break IF; }
var stA0 = invoker.getValue__Ljava_lang_Object_2(lcA8);
if (stA0 !== null && !stA0['$instOf_javax_lang_model_element_AnnotationValue']) vm.java_lang_Class(false).castEx(stA0, 'javax.lang.model.element.AnnotationValue');
var stA0 = invoker.getValue__Ljava_lang_Object_2(stA0);
if (stA0 !== null && !stA0['$instOf_java_util_List']) vm.java_lang_Class(false).castEx(stA0, 'java.util.List');
var lcA4 = stA0;
{ gt = 189; break IF; }
    }
    X_186: for (;;) { IF: if (gt <= 186) {
{ gt = 0; continue X_116; }
    }
    X_189: for (;;) { IF: if (gt <= 189) {
{ gt = 0; continue X_75; }
    }
    X_192: for (;;) { IF: if (gt <= 192) {

if ((lcA4) === null) { gt = 209; break IF; }
var stI0 = invoker.size__I(lcA4);
if ((stI0) == ((lcA2).length)) { gt = 249; break IF; }
    }
    X_209: for (;;) { IF: if (gt <= 209) {

var stA0 = invoker.getMessager__Ljavax_annotation_processing_Messager_2(lcA0);
var stA1 = (refs_javax_tools_Diagnostic$Kind || (refs_javax_tools_Diagnostic$Kind = vm.javax_tools_Diagnostic$Kind(false)))['_ERROR']();var stA2 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"");
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2(stA2,lcA4);
var stA2 = invoker.toString__Ljava_lang_String_2(stA2);
invoker.printMessage__VLjavax_tools_Diagnostic$Kind_2Ljava_lang_CharSequence_2Ljavax_lang_model_element_Element_2(stA0,stA1, stA2, lcA1);
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lorg/netbeans/html/json/impl/ModelProcessor$Prprt;', vm.org_netbeans_html_json_impl_ModelProcessor$Prprt, 0);
return stA0;
    }
    X_249: for (;;) { IF: if (gt <= 249) {

var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lorg/netbeans/html/json/impl/ModelProcessor$Prprt;', vm.org_netbeans_html_json_impl_ModelProcessor$Prprt, (lcA2).length);
var lcA5 = stA0;
var lcI6 = 0;
    }
    X_259: for (;;) { IF: if (gt <= 259) {

if ((lcI6) >= ((lcA5).length)) { gt = 314; break IF; }
var stA0 = invoker.get__Ljava_lang_Object_2I(lcA4,lcI6);
if (stA0 !== null && !stA0['$instOf_javax_lang_model_element_AnnotationValue']) vm.java_lang_Class(false).castEx(stA0, 'javax.lang.model.element.AnnotationValue');
var stA0 = invoker.getValue__Ljava_lang_Object_2(stA0);
if (stA0 !== null && !stA0['$instOf_javax_lang_model_element_AnnotationMirror']) vm.java_lang_Class(false).castEx(stA0, 'javax.lang.model.element.AnnotationMirror');
var lcA7 = stA0;
var stA0 = lcA5;var stI1 = lcI6;var stA2 = new org_netbeans_html_json_impl_ModelProcessor$Prprt;
c.constructor.cons__VLjavax_lang_model_element_Element_2Ljavax_lang_model_element_AnnotationMirror_2Lnet_java_html_json_Property_2.call(stA2, lcA1, lcA7, (lcA2[lcI6] || Array.at(lcA2, lcI6)));
Array.at(stA0, stI1, stA2);
lcI6++;
{ gt = 0; continue X_259; }
    }
    X_314: for (;;) { IF: if (gt <= 314) {

return lcA5;

    }
}}}}}}}}}}}}
};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_json_impl_ModelProcessor$PrprtfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_json_impl_ModelProcessor$Prprt', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_json_impl_ModelProcessor$PrprtfillInstOf });
    org_netbeans_html_json_impl_ModelProcessor$PrprtfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/json/impl/ModelProcessor$Prprt';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
    var refs_org_netbeans_html_json_impl_ModelProcessor;
    var refs_java_lang_StringBuilder;
    var refs_java_lang_IllegalStateException;
    var refs_javax_tools_Diagnostic$Kind;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_org_netbeans_html_json_impl_ModelProcessor$Prprt_e'] = null;
    this['fld_org_netbeans_html_json_impl_ModelProcessor$Prprt_tm'] = null;
    this['fld_org_netbeans_html_json_impl_ModelProcessor$Prprt_p'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_netbeans_html_json_impl_ModelProcessor$Prprt = org_netbeans_html_json_impl_ModelProcessor$Prprt;

vm.javax_tools_Diagnostic$Kind = link('javax/tools/Diagnostic$Kind', function(f) { vm.javax_tools_Diagnostic$Kind =  f; });

function org_netbeans_html_json_impl_ModelProcessor() {
  var m;
  var CLS = org_netbeans_html_json_impl_ModelProcessor;
  if (!CLS.$class) {
    var pp = vm.javax_annotation_processing_AbstractProcessor(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_LOG'] = null;
  m = c._LOG = function (v) {  if (arguments.length == 1) CLS['fld_LOG'] = v; return CLS['fld_LOG']; };
  m = c._models = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_json_impl_ModelProcessor_models'] = v; return this['fld_org_netbeans_html_json_impl_ModelProcessor_models']; };
  m = c._verify = function (v) {  if (arguments.length == 1) this['fld_org_netbeans_html_json_impl_ModelProcessor_verify'] = v; return this['fld_org_netbeans_html_json_impl_ModelProcessor_verify']; };
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_javax_annotation_processing_AbstractProcessor || (refs_javax_annotation_processing_AbstractProcessor = vm.javax_annotation_processing_AbstractProcessor(false))).constructor['cons__V'].call(lcA0);
var stA0 = lcA0;var stA1 = new vm.java_util_WeakHashMap;
(refs_java_util_WeakHashMap || (refs_java_util_WeakHashMap = vm.java_util_WeakHashMap(false))).constructor['cons__V'].call(stA1);
stA0['fld_org_netbeans_html_json_impl_ModelProcessor_models'] = stA1;
var stA0 = lcA0;var stA1 = new vm.java_util_WeakHashMap;
(refs_java_util_WeakHashMap || (refs_java_util_WeakHashMap = vm.java_util_WeakHashMap(false))).constructor['cons__V'].call(stA1);
stA0['fld_org_netbeans_html_json_impl_ModelProcessor_verify'] = stA1;
return;

};
CLS['cons__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.process__ZLjava_util_Set_2Ljavax_annotation_processing_RoundEnvironment_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var lcI3 = 1;
var stA0 = invoker.getElementsAnnotatedWith__Ljava_util_Set_2Ljava_lang_Class_2(lcA2,(refs_net_java_html_json_Model || (refs_net_java_html_json_Model = net_java_html_json_Model(false))).constructor.$class);
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA4 = stA0;
    }
    X_17: for (;;) { IF: if (gt <= 17) {

var stI0 = invoker.hasNext__Z(lcA4);
if ((stI0) == 0) { gt = 53; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA4);
if (stA0 !== null && !stA0['$instOf_javax_lang_model_element_Element']) vm.java_lang_Class(false).castEx(stA0, 'javax.lang.model.element.Element');
var lcA5 = stA0;
var stI0 = c.processModel__ZLjavax_lang_model_element_Element_2.call(lcA0, lcA5);
if ((stI0) != 0) { gt = 50; break IF; }
var lcI3 = 0;
    }
    X_50: for (;;) { IF: if (gt <= 50) {
{ gt = 0; continue X_17; }
    }
    X_53: for (;;) { IF: if (gt <= 53) {

var stI0 = invoker.processingOver__Z(lcA2);
if ((stI0) == 0) { gt = 366; break IF; }
invoker.clear__V(lcA0['fld_org_netbeans_html_json_impl_ModelProcessor_models']);
var stA0 = invoker.entrySet__Ljava_util_Set_2(lcA0['fld_org_netbeans_html_json_impl_ModelProcessor_verify']);
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA4 = stA0;
    }
    X_87: for (;;) { IF: if (gt <= 87) {

var stI0 = invoker.hasNext__Z(lcA4);
if ((stI0) == 0) { gt = 357; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA4);
if (stA0 !== null && !stA0['$instOf_java_util_Map$Entry']) vm.java_lang_Class(false).castEx(stA0, 'java.util.Map$Entry');
var lcA5 = stA0;
var stA0 = invoker.getKey__Ljava_lang_Object_2(lcA5);
if (stA0 !== null && !stA0['$instOf_javax_lang_model_element_TypeElement']) vm.java_lang_Class(false).castEx(stA0, 'javax.lang.model.element.TypeElement');
var lcA6 = stA0;
var stA0 = invoker.getQualifiedName__Ljavax_lang_model_element_Name_2(lcA6);
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
var lcA7 = stA0;
var stA0 = invoker.getElementUtils__Ljavax_lang_model_util_Elements_2(c['_processingEnv'].call(lcA0));
var stA0 = invoker.getTypeElement__Ljavax_lang_model_element_TypeElement_2Ljava_lang_CharSequence_2(stA0,lcA7);
var lcA8 = stA0;
if ((lcA8) !== null) { gt = 159; break IF; }
{ gt = 0; continue X_87; }
    }
    X_159: for (;;) { IF: if (gt <= 159) {

var stA0 = invoker.getAnnotation__Ljava_lang_annotation_Annotation_2Ljava_lang_Class_2(lcA8,(refs_net_java_html_json_Model || (refs_net_java_html_json_Model = net_java_html_json_Model(false))).constructor.$class);
if (stA0 !== null && !stA0['$instOf_net_java_html_json_Model']) vm.java_lang_Class(false).castEx(stA0, 'net.java.html.json.Model');
var lcA10 = stA0;
if ((lcA10) !== null) { gt = 181; break IF; }
{ gt = 0; continue X_87; }
    }
    X_181: for (;;) { IF: if (gt <= 181) {

var stA0 = c['_processingEnv'].call(lcA0);var stA1 = lcA8;var stA2 = invoker.properties___3Lnet_java_html_json_Property_2(lcA10);
var stA0 = (refs_org_netbeans_html_json_impl_ModelProcessor$Prprt || (refs_org_netbeans_html_json_impl_ModelProcessor$Prprt = org_netbeans_html_json_impl_ModelProcessor$Prprt(false))).wrap___3Lorg_netbeans_html_json_impl_ModelProcessor$Prprt_2Ljavax_annotation_processing_ProcessingEnvironment_2Ljavax_lang_model_element_Element_2_3Lnet_java_html_json_Property_2(stA0, stA1, stA2);
var lcA9 = stA0;
var lcA11 = lcA9;
var lcI12 = (lcA11).length;
var lcI13 = 0;
    }
    X_211: for (;;) { IF: if (gt <= 211) {

if ((lcI13) >= (lcI12)) { gt = 354; break IF; }
var lcA14 = (lcA11[lcI13] || Array.at(lcA11, lcI13));
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](true, '[Z', null, 1);
Array.at(stA0, 0, 0);
var lcA15 = stA0;
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](true, '[Z', null, 1);
Array.at(stA0, 0, 0);
var lcA16 = stA0;
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](true, '[Z', null, 1);
Array.at(stA0, 0, 0);
var lcA17 = stA0;
var stA0 = c.checkType__Ljava_lang_String_2Lorg_netbeans_html_json_impl_ModelProcessor$Prprt_2_3Z_3Z_3Z.call(lcA0, lcA14, lcA15, lcA16, lcA17);
var lcA18 = stA0;
if (((lcA16[0] || Array.at(lcA16, 0))) == 0) { gt = 276; break IF; }
{ gt = 348; break IF; }
    }
    X_276: for (;;) { IF: if (gt <= 276) {

if (((lcA17[0] || Array.at(lcA17, 0))) == 0) { gt = 286; break IF; }
{ gt = 348; break IF; }
    }
    X_286: for (;;) { IF: if (gt <= 286) {

if (((lcA15[0] || Array.at(lcA15, 0))) == 0) { gt = 296; break IF; }
{ gt = 348; break IF; }
    }
    X_296: for (;;) { IF: if (gt <= 296) {

var stI0 = invoker.equals__ZLjava_lang_Object_2("java.lang.String",lcA18);
if ((stI0) == 0) { gt = 309; break IF; }
{ gt = 348; break IF; }
    }
    X_309: for (;;) { IF: if (gt <= 309) {

var stA0 = lcA0;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"The type ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA18);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1," should be defined by @Model annotation");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA2 = invoker.getKey__Ljava_lang_Object_2(lcA5);
if (stA2 !== null && !stA2['$instOf_javax_lang_model_element_Element']) vm.java_lang_Class(false).castEx(stA2, 'javax.lang.model.element.Element');
c.error__VLjava_lang_String_2Ljavax_lang_model_element_Element_2.call(stA0, stA1, stA2);
    }
    X_348: for (;;) { IF: if (gt <= 348) {
lcI13++;
{ gt = 0; continue X_211; }
    }
    X_354: for (;;) { IF: if (gt <= 354) {
{ gt = 0; continue X_87; }
    }
    X_357: for (;;) { IF: if (gt <= 357) {

invoker.clear__V(lcA0['fld_org_netbeans_html_json_impl_ModelProcessor_verify']);
    }
    X_366: for (;;) { IF: if (gt <= 366) {

return lcI3;

    }
}}}}}}}}}}}}}}}}
};
c['process__ZLjava_util_Set_2Ljavax_annotation_processing_RoundEnvironment_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.error__VLjava_lang_String_2Ljavax_lang_model_element_Element_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = invoker.getMessager__Ljavax_annotation_processing_Messager_2(c['_processingEnv'].call(lcA0));
invoker.printMessage__VLjavax_tools_Diagnostic$Kind_2Ljava_lang_CharSequence_2Ljavax_lang_model_element_Element_2(stA0,(refs_javax_tools_Diagnostic$Kind || (refs_javax_tools_Diagnostic$Kind = vm.javax_tools_Diagnostic$Kind(false)))['_ERROR'](), lcA1, lcA2);
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.processModel__ZLjavax_lang_model_element_Element_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var lcI2 = 1;
var stA0 = invoker.getAnnotation__Ljava_lang_annotation_Annotation_2Ljava_lang_Class_2(lcA1,(refs_net_java_html_json_Model || (refs_net_java_html_json_Model = net_java_html_json_Model(false))).constructor.$class);
if (stA0 !== null && !stA0['$instOf_net_java_html_json_Model']) vm.java_lang_Class(false).castEx(stA0, 'net.java.html.json.Model');
var lcA3 = stA0;
if ((lcA3) !== null) { gt = 20; break IF; }
return 1;
    }
    X_20: for (;;) { IF: if (gt <= 20) {

var stA0 = c.findPkgName__Ljava_lang_String_2Ljavax_lang_model_element_Element_2(lcA1);
var lcA4 = stA0;
var stA0 = invoker.className__Ljava_lang_String_2(lcA3);
var lcA6 = stA0;
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_org_netbeans_html_json_impl_ModelProcessor_models'],lcA1, lcA6);
try {var stA0 = new vm.java_io_StringWriter;
(refs_java_io_StringWriter || (refs_java_io_StringWriter = vm.java_io_StringWriter(false))).constructor['cons__V'].call(stA0);
var lcA7 = stA0;
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var lcA8 = stA0;
var stA0 = new vm.java_util_ArrayList;
(refs_java_util_ArrayList || (refs_java_util_ArrayList = vm.java_util_ArrayList(false))).constructor['cons__V'].call(stA0);
var lcA9 = stA0;
var stA0 = new vm.java_util_ArrayList;
(refs_java_util_ArrayList || (refs_java_util_ArrayList = vm.java_util_ArrayList(false))).constructor['cons__V'].call(stA0);
var lcA10 = stA0;
var stA0 = new vm.java_util_HashMap;
(refs_java_util_HashMap || (refs_java_util_HashMap = vm.java_util_HashMap(false))).constructor['cons__V'].call(stA0);
var lcA11 = stA0;
var stA0 = new vm.java_util_HashMap;
(refs_java_util_HashMap || (refs_java_util_HashMap = vm.java_util_HashMap(false))).constructor['cons__V'].call(stA0);
var lcA12 = stA0;
var stA0 = lcA0;var stA1 = lcA1;var stA2 = invoker.properties___3Lnet_java_html_json_Property_2(lcA3);
var stA0 = c.createProps___3Lorg_netbeans_html_json_impl_ModelProcessor$Prprt_2Ljavax_lang_model_element_Element_2_3Lnet_java_html_json_Property_2.call(stA0, stA1, stA2);
var lcA13 = stA0;
var stA0 = c.findBuilderPrefix__Ljava_lang_String_2Ljavax_lang_model_element_Element_2Lnet_java_html_json_Model_2(lcA1, lcA3);
var lcA14 = stA0;
var stA0 = lcA0;var stA1 = lcA6;var stA2 = lcA7;var stA3 = lcA13;var stA4 = invoker.getEnclosedElements__Ljava_util_List_2(lcA1);
var stI0 = c.generateComputedProperties__ZLjava_lang_String_2Ljava_io_Writer_2_3Lorg_netbeans_html_json_impl_ModelProcessor$Prprt_2Ljava_util_Collection_2Ljava_util_Collection_2Ljava_util_Map_2.call(stA0, stA1, stA2, stA3, stA4, lcA9, lcA11);
if ((stI0) != 0) { gt = 146; break IF; }
var lcI2 = 0;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4900; break IF; }}
throw e;
}    }
    X_146: for (;;) { IF: if (gt <= 146) {
try {
var stI0 = c.generateOnChange__ZLjavax_lang_model_element_Element_2Ljava_util_Map_2_3Lorg_netbeans_html_json_impl_ModelProcessor$Prprt_2Ljava_lang_String_2Ljava_util_Map_2.call(lcA0, lcA1, lcA11, lcA13, lcA6, lcA12);
if ((stI0) != 0) { gt = 164; break IF; }
var lcI2 = 0;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4900; break IF; }}
throw e;
}    }
    X_164: for (;;) { IF: if (gt <= 164) {
try {
var stI0 = c.generateProperties__ZLjavax_lang_model_element_Element_2Ljava_lang_String_2Ljava_io_Writer_2Ljava_lang_String_2_3Lorg_netbeans_html_json_impl_ModelProcessor$Prprt_2Ljava_util_List_2Ljava_util_Map_2Ljava_util_Map_2.call(lcA0, lcA1, lcA14, lcA7, lcA6, lcA13, lcA9, lcA11, lcA12);
if ((stI0) != 0) { gt = 188; break IF; }
var lcI2 = 0;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4900; break IF; }}
throw e;
}    }
    X_188: for (;;) { IF: if (gt <= 188) {
try {
var stA0 = lcA0;var stA1 = lcA1;var stA2 = lcA7;var stA3 = lcA6;var stA4 = invoker.getEnclosedElements__Ljava_util_List_2(lcA1);
var stI0 = c.generateFunctions__ZLjavax_lang_model_element_Element_2Ljava_io_StringWriter_2Ljava_lang_String_2Ljava_util_List_2Ljava_util_List_2.call(stA0, stA1, stA2, stA3, stA4, lcA10);
if ((stI0) != 0) { gt = 210; break IF; }
var lcI2 = 0;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4900; break IF; }}
throw e;
}    }
    X_210: for (;;) { IF: if (gt <= 210) {
try {
var stI0 = invoker.size__I(lcA10);
var lcI15 = __div32(stI0,2);
var lcI16 = 0;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4900; break IF; }}
throw e;
}    }
    X_224: for (;;) { IF: if (gt <= 224) {
try {
var stI0 = lcI16;var stI1 = invoker.size__I(lcA10);
if ((stI0) >= (stI1)) { gt = 303; break IF; }
var lcA17 = lcA13;
var lcI18 = (lcA17).length;
var lcI19 = 0;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4900; break IF; }}
throw e;
}    }
    X_248: for (;;) { IF: if (gt <= 248) {
try {
if ((lcI19) >= (lcI18)) { gt = 297; break IF; }
var lcA20 = (lcA17[lcI19] || Array.at(lcA17, lcI19));
var stA0 = lcA20.name__Ljava_lang_String_2();
var stA1 = invoker.get__Ljava_lang_Object_2I(lcA10,lcI16);
var stI0 = invoker.equals__ZLjava_lang_Object_2(stA0,stA1);
if ((stI0) == 0) { gt = 291; break IF; }
c.error__VLjava_lang_String_2Ljavax_lang_model_element_Element_2.call(lcA0, "Function cannot have the name of an existing property", lcA1);
var lcI2 = 0;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4900; break IF; }}
throw e;
}    }
    X_291: for (;;) { IF: if (gt <= 291) {
try {lcI19++;
{ gt = 0; continue X_248; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4900; break IF; }}
throw e;
}    }
    X_297: for (;;) { IF: if (gt <= 297) {
try {lcI16 += 2;
{ gt = 0; continue X_224; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4900; break IF; }}
throw e;
}    }
    X_303: for (;;) { IF: if (gt <= 303) {
try {
var stA0 = lcA0;var stA1 = lcA1;var stA2 = lcA7;var stA3 = lcA6;var stA4 = invoker.getEnclosedElements__Ljava_util_List_2(lcA1);
var stI0 = c.generateReceive__ZLjavax_lang_model_element_Element_2Ljava_io_StringWriter_2Ljava_lang_String_2Ljava_util_List_2Ljava_lang_StringBuilder_2.call(stA0, stA1, stA2, stA3, stA4, lcA8);
if ((stI0) != 0) { gt = 325; break IF; }
var lcI2 = 0;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4900; break IF; }}
throw e;
}    }
    X_325: for (;;) { IF: if (gt <= 325) {
try {
var stA0 = lcA0;var stA1 = lcA1;var stA2 = lcA7;var stA3 = lcA6;var stA4 = invoker.getEnclosedElements__Ljava_util_List_2(lcA1);
var stI0 = c.generateOperation__ZLjavax_lang_model_element_Element_2Ljava_io_StringWriter_2Ljava_lang_String_2Ljava_util_List_2Ljava_util_List_2.call(stA0, stA1, stA2, stA3, stA4, lcA10);
if ((stI0) != 0) { gt = 347; break IF; }
var lcI2 = 0;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4900; break IF; }}
throw e;
}    }
    X_347: for (;;) { IF: if (gt <= 347) {
try {
var stA0 = invoker.getFiler__Ljavax_annotation_processing_Filer_2(c['_processingEnv'].call(lcA0));
var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA4);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2C(stA1,(46));
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA6);
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljavax/lang/model/element/Element;', vm.javax_lang_model_element_Element, 1);
Array.at(stA2, 0, lcA1);
var stA0 = invoker.createSourceFile__Ljavax_tools_JavaFileObject_2Ljava_lang_CharSequence_2_3Ljavax_lang_model_element_Element_2(stA0,stA1, stA2);
var lcA16 = stA0;
var stA0 = new vm.java_io_OutputStreamWriter;
var stA1 = stA0;var stA2 = invoker.openOutputStream__Ljava_io_OutputStream_2(lcA16);
(refs_java_io_OutputStreamWriter || (refs_java_io_OutputStreamWriter = vm.java_io_OutputStreamWriter(false))).constructor['cons__VLjava_io_OutputStream_2'].call(stA1, stA2);
var lcA5 = stA0;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4900; break IF; }}
throw e;
}try {
var stA0 = lcA5;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"package ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA4);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,";\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,stA1);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"import net.java.html.json.*;\n");
var stA0 = c.inPckName__Ljava_lang_String_2Ljavax_lang_model_element_Element_2Z.call(lcA0, lcA1, 0);
var lcA17 = stA0;
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"/** Generated for {@link ");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,lcA17);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,"}*/\n");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"public final class ");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,lcA6);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0," implements Cloneable {\n");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"  private static Class<");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,lcA17);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,"> modelFor() { return ");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,lcA17);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,".class; }\n");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"  private static final Html4JavaType TYPE = new Html4JavaType();\n");
var stI0 = invoker.instance__Z(lcA3);
if ((stI0) == 0) { gt = 712; break IF; }
var lcI18 = 0;
var stA0 = invoker.getEnclosedElements__Ljava_util_List_2(lcA1);
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA19 = stA0;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4900; break IF; }}
var stA0 = e;{ gt = 4887; break IF; }
}    }
    X_556: for (;;) { IF: if (gt <= 556) {
try {
var stI0 = invoker.hasNext__Z(lcA19);
if ((stI0) == 0) { gt = 649; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA19);
if (stA0 !== null && !stA0['$instOf_javax_lang_model_element_Element']) vm.java_lang_Class(false).castEx(stA0, 'javax.lang.model.element.Element');
var lcA20 = stA0;
var stA0 = invoker.getKind__Ljavax_lang_model_element_ElementKind_2(lcA20);
if ((stA0) === ((refs_javax_lang_model_element_ElementKind || (refs_javax_lang_model_element_ElementKind = vm.javax_lang_model_element_ElementKind(false)))['_CONSTRUCTOR']())) { gt = 594; break IF; }
{ gt = 0; continue X_556; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4900; break IF; }}
var stA0 = e;{ gt = 4887; break IF; }
}    }
    X_594: for (;;) { IF: if (gt <= 594) {
try {lcI18++;
if (lcA20 !== null && !lcA20['$instOf_javax_lang_model_element_ExecutableElement']) vm.java_lang_Class(false).castEx(lcA20, 'javax.lang.model.element.ExecutableElement');
var lcA21 = lcA20;
var stA0 = invoker.getParameters__Ljava_util_List_2(lcA21);
var stI0 = invoker.size__I(stA0);
if ((stI0) <= 0) { gt = 622; break IF; }
{ gt = 0; continue X_556; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4900; break IF; }}
var stA0 = e;{ gt = 4887; break IF; }
}    }
    X_622: for (;;) { IF: if (gt <= 622) {
try {
var stA0 = invoker.getModifiers__Ljava_util_Set_2(lcA21);
var stI0 = invoker.contains__ZLjava_lang_Object_2(stA0,(refs_javax_lang_model_element_Modifier || (refs_javax_lang_model_element_Modifier = vm.javax_lang_model_element_Modifier(false)))['_PRIVATE']());
if ((stI0) == 0) { gt = 643; break IF; }
{ gt = 0; continue X_556; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4900; break IF; }}
var stA0 = e;{ gt = 4887; break IF; }
}    }
    X_643: for (;;) { IF: if (gt <= 643) {
try {
var lcI18 = 0;
{ gt = 649; break IF; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4900; break IF; }}
var stA0 = e;{ gt = 4887; break IF; }
}    }
    X_649: for (;;) { IF: if (gt <= 649) {
try {
if ((lcI18) <= 0) { gt = 684; break IF; }
var lcI2 = 0;
c.error__VLjava_lang_String_2Ljavax_lang_model_element_Element_2.call(lcA0, "Needs non-private default constructor when instance=true", lcA1);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"  private final ");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,lcA17);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0," instance = null;\n");
{ gt = 712; break IF; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4900; break IF; }}
var stA0 = e;{ gt = 4887; break IF; }
}    }
    X_684: for (;;) { IF: if (gt <= 684) {
try {
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"  private final ");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,lcA17);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0," instance = new ");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,lcA17);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,"();\n");
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4900; break IF; }}
var stA0 = e;{ gt = 4887; break IF; }
}    }
    X_712: for (;;) { IF: if (gt <= 712) {
try {
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"  private final org.netbeans.html.json.spi.Proto proto;\n");
var stA0 = lcA5;var stA1 = invoker.toString__Ljava_lang_String_2(lcA7);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,stA1);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"  private ");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,lcA6);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,"(net.java.html.BrwsrCtx context) {\n");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"    this.proto = TYPE.createProto(this, context);\n");
var lcA18 = lcA13;
var lcI19 = (lcA18).length;
var lcI20 = 0;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4900; break IF; }}
var stA0 = e;{ gt = 4887; break IF; }
}    }
    X_769: for (;;) { IF: if (gt <= 769) {
try {
if ((lcI20) >= (lcI19)) { gt = 1063; break IF; }
var lcA21 = (lcA18[lcI20] || Array.at(lcA18, lcI20));
var stI0 = lcA21.array__Z();
if ((stI0) == 0) { gt = 1057; break IF; }
var stA0 = c.typeName__Ljava_lang_String_2Lorg_netbeans_html_json_impl_ModelProcessor$Prprt_2.call(lcA0, lcA21);
var lcA22 = stA0;
var stA0 = lcA21.name__Ljava_lang_String_2();
var stA1 = lcA22;var stI2 = lcA21.array__Z();
var stA0 = c.toGetSet___3Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Z(stA0, stA1, stI2);
var lcA23 = stA0;
var stA0 = lcA5;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"    this.prop_");
var stA2 = lcA21.name__Ljava_lang_String_2();
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,stA2);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1," = proto.createList(\"");
var stA2 = lcA21.name__Ljava_lang_String_2();
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,stA2);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"\"");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
invoker.write__VLjava_lang_String_2(stA0,stA1);
var stI0 = lcA21.mutable__Z();
if ((stI0) == 0) { gt = 950; break IF; }
var stA0 = lcA12;var stA1 = lcA21.name__Ljava_lang_String_2();
var stI0 = invoker.containsKey__ZLjava_lang_Object_2(stA0,stA1);
if ((stI0) == 0) { gt = 940; break IF; }
var stA0 = invoker.keySet__Ljava_util_Set_2(lcA12);
var stA0 = invoker.toArray___3Ljava_lang_Object_2(stA0);
var stA0 = (refs_java_util_Arrays || (refs_java_util_Arrays = vm.java_util_Arrays(false)))['asList__Ljava_util_List_2_3Ljava_lang_Object_2'](stA0);
var stA1 = lcA21.name__Ljava_lang_String_2();
var stI0 = invoker.indexOf__ILjava_lang_Object_2(stA0,stA1);
var lcI24 = stI0;
var stA0 = lcA5;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,", ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2I(stA1,lcI24);
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
invoker.write__VLjava_lang_String_2(stA0,stA1);
{ gt = 957; break IF; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4900; break IF; }}
var stA0 = e;{ gt = 4887; break IF; }
}    }
    X_940: for (;;) { IF: if (gt <= 940) {
try {
invoker.write__VLjava_lang_String_2(lcA5,", -1");
{ gt = 957; break IF; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4900; break IF; }}
var stA0 = e;{ gt = 4887; break IF; }
}    }
    X_950: for (;;) { IF: if (gt <= 950) {
try {
invoker.write__VLjava_lang_String_2(lcA5,", java.lang.Integer.MIN_VALUE");
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4900; break IF; }}
var stA0 = e;{ gt = 4887; break IF; }
}    }
    X_957: for (;;) { IF: if (gt <= 957) {
try {
var stA0 = lcA11;var stA1 = lcA21.name__Ljava_lang_String_2();
var stA0 = invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1);
if (stA0 !== null && !stA0['$instOf_java_util_Collection']) vm.java_lang_Class(false).castEx(stA0, 'java.util.Collection');
var lcA24 = stA0;
if ((lcA24) === null) { gt = 1043; break IF; }
var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA24);
var lcA25 = stA0;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4900; break IF; }}
var stA0 = e;{ gt = 4887; break IF; }
}    }
    X_988: for (;;) { IF: if (gt <= 988) {
try {
var stI0 = invoker.hasNext__Z(lcA25);
if ((stI0) == 0) { gt = 1043; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA25);
if (stA0 !== null && !Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](stA0, 1, vm.java_lang_String)) vm.java_lang_Class(false).castEx(stA0, '');
var lcA26 = stA0;
invoker.write__VLjava_lang_String_2(lcA5,", ");
invoker.write__VI(lcA5,(34));
invoker.write__VLjava_lang_String_2(lcA5,(lcA26[0] || Array.at(lcA26, 0)));
invoker.write__VI(lcA5,(34));
{ gt = 0; continue X_988; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4900; break IF; }}
var stA0 = e;{ gt = 4887; break IF; }
}    }
    X_1043: for (;;) { IF: if (gt <= 1043) {
try {
invoker.write__VLjava_lang_String_2(lcA5,")");
invoker.write__VLjava_lang_String_2(lcA5,";\n");
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4900; break IF; }}
var stA0 = e;{ gt = 4887; break IF; }
}    }
    X_1057: for (;;) { IF: if (gt <= 1057) {
try {lcI20++;
{ gt = 0; continue X_769; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4900; break IF; }}
var stA0 = e;{ gt = 4887; break IF; }
}    }
    X_1063: for (;;) { IF: if (gt <= 1063) {
try {
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"  };\n");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"  public ");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,lcA6);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,"() {\n");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"    this(net.java.html.BrwsrCtx.findDefault(");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,lcA6);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,".class));\n");
var lcA18 = lcA13;
var lcI19 = (lcA18).length;
var lcI20 = 0;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4900; break IF; }}
var stA0 = e;{ gt = 4887; break IF; }
}    }
    X_1119: for (;;) { IF: if (gt <= 1119) {
try {
if ((lcI20) >= (lcI19)) { gt = 1228; break IF; }
var lcA21 = (lcA18[lcI20] || Array.at(lcA18, lcI20));
var stI0 = lcA21.array__Z();
if ((stI0) != 0) { gt = 1222; break IF; }
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](true, '[Z', null, 1);
Array.at(stA0, 0, 0);
var lcA22 = stA0;
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](true, '[Z', null, 1);
Array.at(stA0, 0, 0);
var lcA23 = stA0;
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](true, '[Z', null, 1);
Array.at(stA0, 0, 0);
var lcA24 = stA0;
var stA0 = c.checkType__Ljava_lang_String_2Lorg_netbeans_html_json_impl_ModelProcessor$Prprt_2_3Z_3Z_3Z.call(lcA0, lcA21, lcA22, lcA23, lcA24);
var lcA25 = stA0;
if (((lcA22[0] || Array.at(lcA22, 0))) == 0) { gt = 1222; break IF; }
var stA0 = lcA5;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"    prop_");
var stA2 = lcA21.name__Ljava_lang_String_2();
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,stA2);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1," = TYPE; /* uninitialized */\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
invoker.write__VLjava_lang_String_2(stA0,stA1);
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4900; break IF; }}
var stA0 = e;{ gt = 4887; break IF; }
}    }
    X_1222: for (;;) { IF: if (gt <= 1222) {
try {lcI20++;
{ gt = 0; continue X_1119; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4900; break IF; }}
var stA0 = e;{ gt = 4887; break IF; }
}    }
    X_1228: for (;;) { IF: if (gt <= 1228) {
try {
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"  };\n");
if (((lcA13).length) <= 0) { gt = 1704; break IF; }
if ((lcA14) !== null) { gt = 1704; break IF; }
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var lcA18 = stA0;
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA18,"  public ");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,lcA6);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"(");
var lcA19 = null;
var lcA20 = "";
var lcI21 = 0;
var lcA22 = lcA13;
var lcI23 = (lcA22).length;
var lcI24 = 0;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4900; break IF; }}
var stA0 = e;{ gt = 4887; break IF; }
}    }
    X_1296: for (;;) { IF: if (gt <= 1296) {
try {
if ((lcI24) >= (lcI23)) { gt = 1395; break IF; }
var lcA25 = (lcA22[lcI24] || Array.at(lcA22, lcI24));
var stI0 = lcA25.array__Z();
if ((stI0) == 0) { gt = 1330; break IF; }
if ((lcA19) !== null) { gt = 1389; break IF; }
var lcA19 = lcA25;
{ gt = 1389; break IF; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4900; break IF; }}
var stA0 = e;{ gt = 4887; break IF; }
}    }
    X_1330: for (;;) { IF: if (gt <= 1330) {
try {
var stA0 = c.typeName__Ljava_lang_String_2Lorg_netbeans_html_json_impl_ModelProcessor$Prprt_2.call(lcA0, lcA25);
var lcA26 = stA0;
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA18,lcA20);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA18,lcA26);
var stA0 = lcA25.name__Ljava_lang_String_2();
var stA0 = c.toGetSet___3Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Z(stA0, lcA26, 0);
var lcA27 = stA0;
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA18," ");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,(lcA27[2] || Array.at(lcA27, 2)));
var lcA20 = ", ";
lcI21++;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4900; break IF; }}
var stA0 = e;{ gt = 4887; break IF; }
}    }
    X_1389: for (;;) { IF: if (gt <= 1389) {
try {lcI24++;
{ gt = 0; continue X_1296; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4900; break IF; }}
var stA0 = e;{ gt = 4887; break IF; }
}    }
    X_1395: for (;;) { IF: if (gt <= 1395) {
try {
if ((lcA19) === null) { gt = 1488; break IF; }
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](true, '[Z', null, 1);
Array.at(stA0, 0, 0);
var lcA23 = stA0;
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](true, '[Z', null, 1);
Array.at(stA0, 0, 0);
var lcA24 = stA0;
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](true, '[Z', null, 1);
Array.at(stA0, 0, 0);
var lcA25 = stA0;
var stA0 = c.checkType__Ljava_lang_String_2Lorg_netbeans_html_json_impl_ModelProcessor$Prprt_2_3Z_3Z_3Z.call(lcA0, lcA19, lcA23, lcA24, lcA25);
var lcA22 = stA0;
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA18,lcA20);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA18,lcA22);
var stA0 = lcA19.name__Ljava_lang_String_2();
var stA0 = c.toGetSet___3Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Z(stA0, lcA22, 1);
var lcA26 = stA0;
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA18,"... ");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,(lcA26[2] || Array.at(lcA26, 2)));
lcI21++;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4900; break IF; }}
var stA0 = e;{ gt = 4887; break IF; }
}    }
    X_1488: for (;;) { IF: if (gt <= 1488) {
try {
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA18,") {\n");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA18,"    this(net.java.html.BrwsrCtx.findDefault(");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,lcA6);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,".class));\n");
var lcA22 = lcA13;
var lcI23 = (lcA22).length;
var lcI24 = 0;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4900; break IF; }}
var stA0 = e;{ gt = 4887; break IF; }
}    }
    X_1526: for (;;) { IF: if (gt <= 1526) {
try {
if ((lcI24) >= (lcI23)) { gt = 1615; break IF; }
var lcA25 = (lcA22[lcI24] || Array.at(lcA22, lcI24));
var stI0 = lcA25.array__Z();
if ((stI0) == 0) { gt = 1551; break IF; }
{ gt = 1609; break IF; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4900; break IF; }}
var stA0 = e;{ gt = 4887; break IF; }
}    }
    X_1551: for (;;) { IF: if (gt <= 1551) {
try {
var stA0 = lcA25.name__Ljava_lang_String_2();
var stA0 = c.toGetSet___3Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Z(stA0, null, 0);
var lcA26 = stA0;
var stA0 = lcA18;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"    this.prop_");
var stA2 = lcA25.name__Ljava_lang_String_2();
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,stA2);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1," = ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,(lcA26[2] || Array.at(lcA26, 2)));
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,";\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4900; break IF; }}
var stA0 = e;{ gt = 4887; break IF; }
}    }
    X_1609: for (;;) { IF: if (gt <= 1609) {
try {lcI24++;
{ gt = 0; continue X_1526; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4900; break IF; }}
var stA0 = e;{ gt = 4887; break IF; }
}    }
    X_1615: for (;;) { IF: if (gt <= 1615) {
try {
if ((lcA19) === null) { gt = 1678; break IF; }
var stA0 = lcA19.name__Ljava_lang_String_2();
var stA0 = c.toGetSet___3Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Z(stA0, null, 1);
var lcA22 = stA0;
var stA0 = lcA18;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"    proto.initTo(this.prop_");
var stA2 = lcA19.name__Ljava_lang_String_2();
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,stA2);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,", ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,(lcA22[2] || Array.at(lcA22, 2)));
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,");\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4900; break IF; }}
var stA0 = e;{ gt = 4887; break IF; }
}    }
    X_1678: for (;;) { IF: if (gt <= 1678) {
try {
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA18,"  };\n");
if ((lcI21) >= ((255))) { gt = 1704; break IF; }
var stA0 = lcA5;var stA1 = invoker.toString__Ljava_lang_String_2(lcA18);
invoker.write__VLjava_lang_String_2(stA0,stA1);
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4900; break IF; }}
var stA0 = e;{ gt = 4887; break IF; }
}    }
    X_1704: for (;;) { IF: if (gt <= 1704) {
try {
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"  private static class Html4JavaType extends org.netbeans.html.json.spi.Proto.Type<");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,lcA6);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,"> {\n");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"    private Html4JavaType() {\n      super(");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,lcA6);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,".class, ");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,lcA17);
var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,".class, ");
var stI2 = invoker.size__I(lcA9);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2I(stA1,stI2);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,", ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2I(stA1,lcI15);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,");\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,stA1);
var lcI18 = 0;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4900; break IF; }}
var stA0 = e;{ gt = 4887; break IF; }
}    }
    X_1791: for (;;) { IF: if (gt <= 1791) {
try {
var stI0 = lcI18;var stI1 = invoker.size__I(lcA9);
if ((stI0) >= (stI1)) { gt = 1912; break IF; }
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"      registerProperty(\"");
var stA1 = invoker.get__Ljava_lang_Object_2I(lcA9,lcI18);
if (stA1 !== null && !stA1['$instOf_org_netbeans_html_json_impl_ModelProcessor$GetSet']) vm.java_lang_Class(false).castEx(stA1, 'org.netbeans.html.json.impl.ModelProcessor$GetSet');
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,stA1['fld_org_netbeans_html_json_impl_ModelProcessor$GetSet_name']);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,"\", ");
var stA0 = lcA5;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2I(stA1,lcI18);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,", ");
var stA2 = invoker.get__Ljava_lang_Object_2I(lcA9,lcI18);
if (stA2 !== null && !stA2['$instOf_org_netbeans_html_json_impl_ModelProcessor$GetSet']) vm.java_lang_Class(false).castEx(stA2, 'org.netbeans.html.json.impl.ModelProcessor$GetSet');
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Z(stA1,stA2['fld_org_netbeans_html_json_impl_ModelProcessor$GetSet_readOnly']);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,", ");
var stA2 = invoker.get__Ljava_lang_Object_2I(lcA9,lcI18);
if (stA2 !== null && !stA2['$instOf_org_netbeans_html_json_impl_ModelProcessor$GetSet']) vm.java_lang_Class(false).castEx(stA2, 'org.netbeans.html.json.impl.ModelProcessor$GetSet');
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Z(stA1,stA2['fld_org_netbeans_html_json_impl_ModelProcessor$GetSet_constant']);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,");\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,stA1);
lcI18++;
{ gt = 0; continue X_1791; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4900; break IF; }}
var stA0 = e;{ gt = 4887; break IF; }
}    }
    X_1912: for (;;) { IF: if (gt <= 1912) {
try {
var lcI18 = 0;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4900; break IF; }}
var stA0 = e;{ gt = 4887; break IF; }
}    }
    X_1915: for (;;) { IF: if (gt <= 1915) {
try {
if ((lcI18) >= (lcI15)) { gt = 1984; break IF; }
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"      registerFunction(\"");
var stA1 = invoker.get__Ljava_lang_Object_2I(lcA10,__mul32(lcI18,2));
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,stA1);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,"\", ");
var stA0 = lcA5;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2I(stA1,lcI18);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,");\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,stA1);
lcI18++;
{ gt = 0; continue X_1915; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4900; break IF; }}
var stA0 = e;{ gt = 4887; break IF; }
}    }
    X_1984: for (;;) { IF: if (gt <= 1984) {
try {
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"    }\n");
var stA0 = lcA5;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"    @Override public void setValue(");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA6);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1," data, int type, Object value) {\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,stA1);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"      switch (type) {\n");
var lcI18 = 0;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4900; break IF; }}
var stA0 = e;{ gt = 4887; break IF; }
}    }
    X_2034: for (;;) { IF: if (gt <= 2034) {
try {
var stI0 = lcI18;var stI1 = invoker.size__I(lcA9);
if ((stI0) >= (stI1)) { gt = 2237; break IF; }
var stA0 = invoker.get__Ljava_lang_Object_2I(lcA9,lcI18);
if (stA0 !== null && !stA0['$instOf_org_netbeans_html_json_impl_ModelProcessor$GetSet']) vm.java_lang_Class(false).castEx(stA0, 'org.netbeans.html.json.impl.ModelProcessor$GetSet');
var lcA19 = stA0;
if ((lcA19['fld_org_netbeans_html_json_impl_ModelProcessor$GetSet_readOnly']) == 0) { gt = 2071; break IF; }
{ gt = 2231; break IF; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4900; break IF; }}
var stA0 = e;{ gt = 4887; break IF; }
}    }
    X_2071: for (;;) { IF: if (gt <= 2071) {
try {
var lcA20 = lcA19['fld_org_netbeans_html_json_impl_ModelProcessor$GetSet_setter'];
var lcA21 = lcA19['fld_org_netbeans_html_json_impl_ModelProcessor$GetSet_type'];
var stA0 = c.findBoxedType__Ljava_lang_String_2Ljava_lang_String_2(lcA21);
var lcA22 = stA0;
if ((lcA22) === null) { gt = 2101; break IF; }
var lcA21 = lcA22;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4900; break IF; }}
var stA0 = e;{ gt = 4887; break IF; }
}    }
    X_2101: for (;;) { IF: if (gt <= 2101) {
try {
var stA0 = lcA5;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"        case ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2I(stA1,lcI18);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,": ");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,stA1);
if ((lcA19['fld_org_netbeans_html_json_impl_ModelProcessor$GetSet_setter']) === null) { gt = 2187; break IF; }
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"data.");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,lcA19['fld_org_netbeans_html_json_impl_ModelProcessor$GetSet_setter']);
var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"(TYPE.extractValue(");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA21);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,".class, value)); return;\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,stA1);
{ gt = 2231; break IF; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4900; break IF; }}
var stA0 = e;{ gt = 4887; break IF; }
}    }
    X_2187: for (;;) { IF: if (gt <= 2187) {
try {
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"TYPE.replaceValue(data.");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,lcA19['fld_org_netbeans_html_json_impl_ModelProcessor$GetSet_getter']);
var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"(), ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA21);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,".class, value); return;\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,stA1);
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4900; break IF; }}
var stA0 = e;{ gt = 4887; break IF; }
}    }
    X_2231: for (;;) { IF: if (gt <= 2231) {
try {lcI18++;
{ gt = 0; continue X_2034; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4900; break IF; }}
var stA0 = e;{ gt = 4887; break IF; }
}    }
    X_2237: for (;;) { IF: if (gt <= 2237) {
try {
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"      }\n");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"      throw new UnsupportedOperationException();\n");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"    }\n");
var stA0 = lcA5;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"    @Override public Object getValue(");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA6);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1," data, int type) {\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,stA1);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"      switch (type) {\n");
var lcI18 = 0;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4900; break IF; }}
var stA0 = e;{ gt = 4887; break IF; }
}    }
    X_2303: for (;;) { IF: if (gt <= 2303) {
try {
var stI0 = lcI18;var stI1 = invoker.size__I(lcA9);
if ((stI0) >= (stI1)) { gt = 2384; break IF; }
var stA0 = invoker.get__Ljava_lang_Object_2I(lcA9,lcI18);
if (stA0 !== null && !stA0['$instOf_org_netbeans_html_json_impl_ModelProcessor$GetSet']) vm.java_lang_Class(false).castEx(stA0, 'org.netbeans.html.json.impl.ModelProcessor$GetSet');
var lcA19 = stA0['fld_org_netbeans_html_json_impl_ModelProcessor$GetSet_getter'];
if ((lcA19) === null) { gt = 2378; break IF; }
var stA0 = lcA5;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"        case ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2I(stA1,lcI18);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,": return data.");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA19);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"();\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,stA1);
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4900; break IF; }}
var stA0 = e;{ gt = 4887; break IF; }
}    }
    X_2378: for (;;) { IF: if (gt <= 2378) {
try {lcI18++;
{ gt = 0; continue X_2303; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4900; break IF; }}
var stA0 = e;{ gt = 4887; break IF; }
}    }
    X_2384: for (;;) { IF: if (gt <= 2384) {
try {
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"      }\n");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"      throw new UnsupportedOperationException();\n");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"    }\n");
var stA0 = lcA5;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"    @Override public void call(");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA6);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1," model, int type, Object data, Object ev) throws Exception {\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,stA1);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"      switch (type) {\n");
var lcI18 = 0;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4900; break IF; }}
var stA0 = e;{ gt = 4887; break IF; }
}    }
    X_2450: for (;;) { IF: if (gt <= 2450) {
try {
var stI0 = lcI18;var stI1 = invoker.size__I(lcA10);
if ((stI0) >= (stI1)) { gt = 2710; break IF; }
var stA0 = invoker.get__Ljava_lang_Object_2I(lcA10,lcI18);
if (stA0 !== null && !stA0['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA0, 'java.lang.String');
var lcA19 = stA0;
var stA0 = invoker.get__Ljava_lang_Object_2I(lcA10,(((lcI18) + (1)) | 0));
var lcA20 = stA0;
var stI0 = lcA20 != null && lcA20['$instOf_javax_lang_model_element_ExecutableElement'] ? 1 : 0;
if ((stI0) == 0) { gt = 2638; break IF; }
if (lcA20 !== null && !lcA20['$instOf_javax_lang_model_element_ExecutableElement']) vm.java_lang_Class(false).castEx(lcA20, 'javax.lang.model.element.ExecutableElement');
var lcA21 = lcA20;
var stA0 = lcA5;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"        case ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2I(stA1,__div32(lcI18,2));
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,":\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,stA1);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"          ");
var stI0 = invoker.instance__Z(lcA3);
if ((stI0) == 0) { gt = 2565; break IF; }
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"model.instance");
{ gt = 2580; break IF; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4900; break IF; }}
var stA0 = e;{ gt = 4887; break IF; }
}    }
    X_2565: for (;;) { IF: if (gt <= 2565) {
try {
if (lcA1 !== null && !lcA1['$instOf_javax_lang_model_element_TypeElement']) vm.java_lang_Class(false).castEx(lcA1, 'javax.lang.model.element.TypeElement');
var stA0 = lcA5;var stA1 = invoker.getQualifiedName__Ljavax_lang_model_element_Name_2(lcA1);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,stA1);
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4900; break IF; }}
var stA0 = e;{ gt = 4887; break IF; }
}    }
    X_2580: for (;;) { IF: if (gt <= 2580) {
try {
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,".");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,lcA19);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,"(");
var stA0 = lcA5;var stA1 = c.wrapParams__Ljava_lang_CharSequence_2Ljavax_lang_model_element_ExecutableElement_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2.call(lcA0, lcA21, null, lcA6, "model", "ev", "data");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,stA1);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,");\n");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"          return;\n");
{ gt = 2704; break IF; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4900; break IF; }}
var stA0 = e;{ gt = 4887; break IF; }
}    }
    X_2638: for (;;) { IF: if (gt <= 2638) {
try {
if (lcA20 !== null && !lcA20['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(lcA20, 'java.lang.String');
var lcA21 = lcA20;
var stA0 = lcA5;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"        case ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2I(stA1,__div32(lcI18,2));
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,":\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,stA1);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"          ");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,lcA21);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,"\n");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"          return;\n");
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4900; break IF; }}
var stA0 = e;{ gt = 4887; break IF; }
}    }
    X_2704: for (;;) { IF: if (gt <= 2704) {
try {lcI18 += 2;
{ gt = 0; continue X_2450; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4900; break IF; }}
var stA0 = e;{ gt = 4887; break IF; }
}    }
    X_2710: for (;;) { IF: if (gt <= 2710) {
try {
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"      }\n");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"      throw new UnsupportedOperationException();\n");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"    }\n");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"    @Override public org.netbeans.html.json.spi.Proto protoFor(Object obj) {\n");
var stA0 = lcA5;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"      return ((");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA6);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,")obj).proto;");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,stA1);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"    }\n");
var stA0 = lcA5;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"    @Override public void onChange(");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA6);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1," model, int type) {\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,stA1);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"      switch (type) {\n");
var stA0 = invoker.keySet__Ljava_util_Set_2(lcA12);
var stA1 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, 0);
var stA0 = invoker.toArray___3Ljava_lang_Object_2_3Ljava_lang_Object_2(stA0,stA1);
if (stA0 !== null && !Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](stA0, 1, vm.java_lang_String)) vm.java_lang_Class(false).castEx(stA0, '');
var lcA18 = stA0;
var lcI19 = 0;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4900; break IF; }}
var stA0 = e;{ gt = 4887; break IF; }
}    }
    X_2844: for (;;) { IF: if (gt <= 2844) {
try {
if ((lcI19) >= ((lcA18).length)) { gt = 2970; break IF; }
var stA0 = invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2(lcA12,(lcA18[lcI19] || Array.at(lcA18, lcI19)));
if (stA0 !== null && !stA0['$instOf_java_util_Collection']) vm.java_lang_Class(false).castEx(stA0, 'java.util.Collection');
var lcA20 = stA0;
if ((lcA20) === null) { gt = 2964; break IF; }
var stA0 = lcA5;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"      case ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2I(stA1,lcI19);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,":\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,stA1);
var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA20);
var lcA21 = stA0;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4900; break IF; }}
var stA0 = e;{ gt = 4887; break IF; }
}    }
    X_2914: for (;;) { IF: if (gt <= 2914) {
try {
var stI0 = invoker.hasNext__Z(lcA21);
if ((stI0) == 0) { gt = 2957; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA21);
if (stA0 !== null && !stA0['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA0, 'java.lang.String');
var lcA22 = stA0;
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"      ");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,lcA22);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,"\n");
{ gt = 0; continue X_2914; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4900; break IF; }}
var stA0 = e;{ gt = 4887; break IF; }
}    }
    X_2957: for (;;) { IF: if (gt <= 2957) {
try {
invoker.write__VLjava_lang_String_2(lcA5,"      return;\n");
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4900; break IF; }}
var stA0 = e;{ gt = 4887; break IF; }
}    }
    X_2964: for (;;) { IF: if (gt <= 2964) {
try {lcI19++;
{ gt = 0; continue X_2844; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4900; break IF; }}
var stA0 = e;{ gt = 4887; break IF; }
}    }
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
    X_2970: for (;;) { IF: if (gt <= 2970) {
try {
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"    }\n");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"      throw new UnsupportedOperationException();\n");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"    }\n");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,lcA8);
var stA0 = lcA5;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"    @Override public ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA6);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1," read(net.java.html.BrwsrCtx c, Object json) { return new ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA6);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"(c, json); }\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,stA1);
var stA0 = lcA5;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"    @Override public ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA6);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1," cloneTo(");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA6);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1," o, net.java.html.BrwsrCtx c) { return o.clone(c); }\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,stA1);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"  }\n");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"  private ");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,lcA6);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,"(net.java.html.BrwsrCtx c, Object json) {\n");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"    this(c);\n");
var lcI18 = 0;
var lcI19 = 0;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4900; break IF; }}
var stA0 = e;{ gt = 4887; break IF; }
}    }
    X_3124: for (;;) { IF: if (gt <= 3124) {
try {
var stI0 = lcI19;var stI1 = invoker.size__I(lcA9);
if ((stI0) >= (stI1)) { gt = 3175; break IF; }
var stA0 = lcA13;var stA1 = invoker.get__Ljava_lang_Object_2I(lcA9,lcI19);
if (stA1 !== null && !stA1['$instOf_org_netbeans_html_json_impl_ModelProcessor$GetSet']) vm.java_lang_Class(false).castEx(stA1, 'org.netbeans.html.json.impl.ModelProcessor$GetSet');
var stA0 = c.findPrprt__Lorg_netbeans_html_json_impl_ModelProcessor$Prprt_2_3Lorg_netbeans_html_json_impl_ModelProcessor$Prprt_2Ljava_lang_String_2(stA0, stA1['fld_org_netbeans_html_json_impl_ModelProcessor$GetSet_name']);
var lcA20 = stA0;
if ((lcA20) !== null) { gt = 3166; break IF; }
{ gt = 3169; break IF; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4900; break IF; }}
var stA0 = e;{ gt = 4887; break IF; }
}    }
    X_3166: for (;;) { IF: if (gt <= 3166) {
try {lcI18++;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4900; break IF; }}
var stA0 = e;{ gt = 4887; break IF; }
}    }
    X_3169: for (;;) { IF: if (gt <= 3169) {
try {lcI19++;
{ gt = 0; continue X_3124; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4900; break IF; }}
var stA0 = e;{ gt = 4887; break IF; }
}    }
    X_3175: for (;;) { IF: if (gt <= 3175) {
try {
var stA0 = lcA5;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"    Object[] ret = new Object[");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2I(stA1,lcI18);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"];\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,stA1);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"    proto.extract(json, new String[] {\n");
var lcI19 = 0;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4900; break IF; }}
var stA0 = e;{ gt = 4887; break IF; }
}    }
    X_3217: for (;;) { IF: if (gt <= 3217) {
try {
var stI0 = lcI19;var stI1 = invoker.size__I(lcA9);
if ((stI0) >= (stI1)) { gt = 3296; break IF; }
var stA0 = lcA13;var stA1 = invoker.get__Ljava_lang_Object_2I(lcA9,lcI19);
if (stA1 !== null && !stA1['$instOf_org_netbeans_html_json_impl_ModelProcessor$GetSet']) vm.java_lang_Class(false).castEx(stA1, 'org.netbeans.html.json.impl.ModelProcessor$GetSet');
var stA0 = c.findPrprt__Lorg_netbeans_html_json_impl_ModelProcessor$Prprt_2_3Lorg_netbeans_html_json_impl_ModelProcessor$Prprt_2Ljava_lang_String_2(stA0, stA1['fld_org_netbeans_html_json_impl_ModelProcessor$GetSet_name']);
var lcA20 = stA0;
if ((lcA20) !== null) { gt = 3259; break IF; }
{ gt = 3290; break IF; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4900; break IF; }}
var stA0 = e;{ gt = 4887; break IF; }
}    }
    X_3259: for (;;) { IF: if (gt <= 3259) {
try {
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"      \"");
var stA1 = invoker.get__Ljava_lang_Object_2I(lcA9,lcI19);
if (stA1 !== null && !stA1['$instOf_org_netbeans_html_json_impl_ModelProcessor$GetSet']) vm.java_lang_Class(false).castEx(stA1, 'org.netbeans.html.json.impl.ModelProcessor$GetSet');
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,stA1['fld_org_netbeans_html_json_impl_ModelProcessor$GetSet_name']);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,"\",\n");
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4900; break IF; }}
var stA0 = e;{ gt = 4887; break IF; }
}    }
    X_3290: for (;;) { IF: if (gt <= 3290) {
try {lcI19++;
{ gt = 0; continue X_3217; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4900; break IF; }}
var stA0 = e;{ gt = 4887; break IF; }
}    }
    X_3296: for (;;) { IF: if (gt <= 3296) {
try {
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"    }, ret);\n");
var lcI19 = 0;
var lcI20 = 0;
var lcI21 = 0;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4900; break IF; }}
var stA0 = e;{ gt = 4887; break IF; }
}    }
    X_3313: for (;;) { IF: if (gt <= 3313) {
try {
var stI0 = lcI19;var stI1 = invoker.size__I(lcA9);
if ((stI0) >= (stI1)) { gt = 4136; break IF; }
var stA0 = invoker.get__Ljava_lang_Object_2I(lcA9,lcI19);
if (stA0 !== null && !stA0['$instOf_org_netbeans_html_json_impl_ModelProcessor$GetSet']) vm.java_lang_Class(false).castEx(stA0, 'org.netbeans.html.json.impl.ModelProcessor$GetSet');
var lcA22 = stA0['fld_org_netbeans_html_json_impl_ModelProcessor$GetSet_name'];
var stA0 = c.findPrprt__Lorg_netbeans_html_json_impl_ModelProcessor$Prprt_2_3Lorg_netbeans_html_json_impl_ModelProcessor$Prprt_2Ljava_lang_String_2(lcA13, lcA22);
var lcA23 = stA0;
if ((lcA23) === null) { gt = 4130; break IF; }
if ((lcI21) < ((lcA13).length)) { gt = 3367; break IF; }
{ gt = 4130; break IF; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4900; break IF; }}
var stA0 = e;{ gt = 4887; break IF; }
}    }
    X_3367: for (;;) { IF: if (gt <= 3367) {
try {
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](true, '[Z', null, 1);
Array.at(stA0, 0, 0);
var lcA24 = stA0;
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](true, '[Z', null, 1);
Array.at(stA0, 0, 0);
var lcA25 = stA0;
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](true, '[Z', null, 1);
Array.at(stA0, 0, 0);
var lcA26 = stA0;
var stA0 = lcA0;var stA1 = lcA13;var stI2 = lcI21;lcI21++;
var stA0 = c.checkType__Ljava_lang_String_2Lorg_netbeans_html_json_impl_ModelProcessor$Prprt_2_3Z_3Z_3Z.call(stA0, (stA1[stI2] || Array.at(stA1, stI2)), lcA24, lcA25, lcA26);
var lcA27 = stA0;
var stI0 = lcA23.array__Z();
if ((stI0) == 0) { gt = 3703; break IF; }
var stA0 = lcA5;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"    for (Object e : useAsArray(ret[");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2I(stA1,lcI20);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"])) {\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,stA1);
if (((lcA24[0] || Array.at(lcA24, 0))) == 0) { gt = 3512; break IF; }
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"      this.prop_");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,lcA22);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,".add(proto.read");
var stA0 = lcA5;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"(");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA27);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,".class, e));\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,stA1);
{ gt = 3692; break IF; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4900; break IF; }}
var stA0 = e;{ gt = 4887; break IF; }
}    }
    X_3512: for (;;) { IF: if (gt <= 3512) {
try {
if (((lcA25[0] || Array.at(lcA25, 0))) == 0) { gt = 3556; break IF; }
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"        this.prop_");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,lcA22);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,".add(e == null ? null : ");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,lcA27);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,".valueOf(TYPE.stringValue(e)));\n");
{ gt = 3692; break IF; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4900; break IF; }}
var stA0 = e;{ gt = 4887; break IF; }
}    }
    X_3556: for (;;) { IF: if (gt <= 3556) {
try {
var stI0 = c.isPrimitive__ZLjava_lang_String_2.call(lcA0, lcA27);
if ((stI0) == 0) { gt = 3661; break IF; }
var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA27,"char");
if ((stI0) == 0) { gt = 3596; break IF; }
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"        this.prop_");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,lcA22);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,".add(TYPE.charValue(e));\n");
{ gt = 3692; break IF; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4900; break IF; }}
var stA0 = e;{ gt = 4887; break IF; }
}    }
    X_3596: for (;;) { IF: if (gt <= 3596) {
try {
var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA27,"boolean");
if ((stI0) == 0) { gt = 3627; break IF; }
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"        this.prop_");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,lcA22);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,".add(TYPE.boolValue(e));\n");
{ gt = 3692; break IF; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4900; break IF; }}
var stA0 = e;{ gt = 4887; break IF; }
}    }
    X_3627: for (;;) { IF: if (gt <= 3627) {
try {
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"        this.prop_");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,lcA22);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,".add(TYPE.numberValue(e).");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,lcA27);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,"Value());\n");
{ gt = 3692; break IF; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4900; break IF; }}
var stA0 = e;{ gt = 4887; break IF; }
}    }
    X_3661: for (;;) { IF: if (gt <= 3661) {
try {
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"        this.prop_");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,lcA22);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,".add((");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,lcA27);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,")e);\n");
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4900; break IF; }}
var stA0 = e;{ gt = 4887; break IF; }
}    }
    X_3692: for (;;) { IF: if (gt <= 3692) {
try {
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"    }\n");
{ gt = 4127; break IF; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4900; break IF; }}
var stA0 = e;{ gt = 4887; break IF; }
}    }
    X_3703: for (;;) { IF: if (gt <= 3703) {
try {
if (((lcA25[0] || Array.at(lcA25, 0))) == 0) { gt = 3825; break IF; }
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"    try {\n");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"    this.prop_");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,lcA22);
var stA0 = lcA5;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1," = ret[");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2I(stA1,lcI20);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"] == null ? null : ");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,stA1);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,lcA27);
var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,".valueOf(TYPE.stringValue(ret[");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2I(stA1,lcI20);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"]));\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,stA1);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"    } catch (IllegalArgumentException ex) {\n");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"      ex.printStackTrace();\n");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"    }\n");
{ gt = 4127; break IF; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4900; break IF; }}
var stA0 = e;{ gt = 4887; break IF; }
}    }
    X_3825: for (;;) { IF: if (gt <= 3825) {
try {
var stI0 = c.isPrimitive__ZLjava_lang_String_2.call(lcA0, lcA27);
if ((stI0) == 0) { gt = 3975; break IF; }
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"    this.prop_");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,lcA22);
var stA0 = lcA5;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1," = ret[");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2I(stA1,lcI20);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"] == null ? ");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,stA1);
var stI0 = invoker.equals__ZLjava_lang_Object_2("char",lcA27);
if ((stI0) == 0) { gt = 3899; break IF; }
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"0 : (TYPE.charValue(");
{ gt = 3928; break IF; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4900; break IF; }}
var stA0 = e;{ gt = 4887; break IF; }
}    }
    X_3899: for (;;) { IF: if (gt <= 3899) {
try {
var stI0 = invoker.equals__ZLjava_lang_Object_2("boolean",lcA27);
if ((stI0) == 0) { gt = 3920; break IF; }
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"false : (TYPE.boolValue(");
{ gt = 3928; break IF; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4900; break IF; }}
var stA0 = e;{ gt = 4887; break IF; }
}    }
    X_3920: for (;;) { IF: if (gt <= 3920) {
try {
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"0 : (TYPE.numberValue(");
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4900; break IF; }}
var stA0 = e;{ gt = 4887; break IF; }
}    }
    X_3928: for (;;) { IF: if (gt <= 3928) {
try {
var stA0 = lcA5;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"ret[");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2I(stA1,lcI20);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"])).");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,stA1);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,lcA27);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,"Value();\n");
{ gt = 4127; break IF; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4900; break IF; }}
var stA0 = e;{ gt = 4887; break IF; }
}    }
    X_3975: for (;;) { IF: if (gt <= 3975) {
try {
if (((lcA24[0] || Array.at(lcA24, 0))) == 0) { gt = 4065; break IF; }
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"    this.prop_");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,lcA22);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0," = proto.read");
var stA0 = lcA5;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"(");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA27);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,".class, ");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,stA1);
var stA0 = lcA5;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"ret[");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2I(stA1,lcI20);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"]);\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,stA1);
{ gt = 4127; break IF; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4900; break IF; }}
var stA0 = e;{ gt = 4887; break IF; }
}    }
    X_4065: for (;;) { IF: if (gt <= 4065) {
try {
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"    this.prop_");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,lcA22);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5," = (");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,lcA27);
var stA0 = invoker.append__Ljava_io_Writer_2C(stA0,(41));
var stA0 = lcA5;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"ret[");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2I(stA1,lcI20);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"];\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,stA1);
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4900; break IF; }}
var stA0 = e;{ gt = 4887; break IF; }
}    }
    X_4127: for (;;) { IF: if (gt <= 4127) {
try {lcI20++;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4900; break IF; }}
var stA0 = e;{ gt = 4887; break IF; }
}    }
    X_4130: for (;;) { IF: if (gt <= 4130) {
try {lcI19++;
{ gt = 0; continue X_3313; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4900; break IF; }}
var stA0 = e;{ gt = 4887; break IF; }
}    }
    X_4136: for (;;) { IF: if (gt <= 4136) {
try {
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"  }\n");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"  private static Object[] useAsArray(Object o) {\n");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"    return o instanceof Object[] ? ((Object[])o) : o == null ? new Object[0] : new Object[] { o };\n");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"  }\n");
c.writeToString__V_3Lorg_netbeans_html_json_impl_ModelProcessor$Prprt_2Ljava_io_Writer_2.call(lcA0, lcA13, lcA5);
c.writeClone__VLjava_lang_String_2_3Lorg_netbeans_html_json_impl_ModelProcessor$Prprt_2Ljava_io_Writer_2.call(lcA0, lcA6, lcA13, lcA5);
var stA0 = c.findTargetId__Ljava_lang_String_2Ljavax_lang_model_element_Element_2(lcA1);
var lcA19 = stA0;
if ((lcA19) === null) { gt = 4300; break IF; }
invoker.write__VLjava_lang_String_2(lcA5,"  /** Activates this model instance in the current {@link \nnet.java.html.json.Models#bind(java.lang.Object, net.java.html.BrwsrCtx) browser context}. \nIn case of using Knockout technology, this means to \nbind JSON like data in this model instance with Knockout tags in \nthe surrounding HTML page.\n");
if ((lcA19) === null) { gt = 4239; break IF; }
var stA0 = lcA5;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"This method binds to element '");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA19);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"' on the page\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
invoker.write__VLjava_lang_String_2(stA0,stA1);
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4900; break IF; }}
var stA0 = e;{ gt = 4887; break IF; }
}    }
    X_4239: for (;;) { IF: if (gt <= 4239) {
try {
invoker.write__VLjava_lang_String_2(lcA5,"@return <code>this</code> object\n*/\n");
var stA0 = lcA5;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"  public ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA6);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1," applyBindings() {\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
invoker.write__VLjava_lang_String_2(stA0,stA1);
invoker.write__VLjava_lang_String_2(lcA5,"    proto.applyBindings();\n");
invoker.write__VLjava_lang_String_2(lcA5,"    return this;\n");
invoker.write__VLjava_lang_String_2(lcA5,"  }\n");
{ gt = 4344; break IF; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4900; break IF; }}
var stA0 = e;{ gt = 4887; break IF; }
}    }
    X_4300: for (;;) { IF: if (gt <= 4300) {
try {
var stA0 = lcA5;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"  private ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA6);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1," applyBindings() {\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
invoker.write__VLjava_lang_String_2(stA0,stA1);
invoker.write__VLjava_lang_String_2(lcA5,"    throw new IllegalStateException(\"Please specify targetId=\\\"\\\" in your @Model annotation\");\n");
invoker.write__VLjava_lang_String_2(lcA5,"  }\n");
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4900; break IF; }}
var stA0 = e;{ gt = 4887; break IF; }
}    }
    X_4344: for (;;) { IF: if (gt <= 4344) {
try {
invoker.write__VLjava_lang_String_2(lcA5,"  public boolean equals(Object o) {\n");
invoker.write__VLjava_lang_String_2(lcA5,"    if (o == this) return true;\n");
var stA0 = lcA5;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"    if (!(o instanceof ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA6);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,")) return false;\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
invoker.write__VLjava_lang_String_2(stA0,stA1);
var stA0 = lcA5;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"    ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA6);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1," p = (");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA6);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,")o;\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
invoker.write__VLjava_lang_String_2(stA0,stA1);
var lcI20 = 0;
var lcA21 = lcA13;
var lcI22 = (lcA21).length;
var lcI23 = 0;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4900; break IF; }}
var stA0 = e;{ gt = 4887; break IF; }
}    }
    X_4450: for (;;) { IF: if (gt <= 4450) {
try {
if ((lcI23) >= (lcI22)) { gt = 4621; break IF; }
var lcA24 = (lcA21[lcI23] || Array.at(lcA21, lcI23));
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](true, '[Z', null, 1);
Array.at(stA0, 0, 0);
var lcA25 = stA0;
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](true, '[Z', null, 1);
Array.at(stA0, 0, 0);
var lcA26 = stA0;
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](true, '[Z', null, 1);
Array.at(stA0, 0, 0);
var lcA27 = stA0;
var stA0 = c.checkType__Ljava_lang_String_2Lorg_netbeans_html_json_impl_ModelProcessor$Prprt_2_3Z_3Z_3Z.call(lcA0, lcA24, lcA25, lcA26, lcA27);
if (((lcA25[0] || Array.at(lcA25, 0))) == 0) { gt = 4566; break IF; }
var stA0 = lcA5;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"    if (!TYPE.isSame(thisToNull(prop_");
var stA2 = lcA24.name__Ljava_lang_String_2();
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,stA2);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"), p.thisToNull(p.prop_");
var stA2 = lcA24.name__Ljava_lang_String_2();
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,stA2);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"))) return false;\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
invoker.write__VLjava_lang_String_2(stA0,stA1);
var lcI20 = 1;
{ gt = 4615; break IF; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4900; break IF; }}
var stA0 = e;{ gt = 4887; break IF; }
}    }
    X_4566: for (;;) { IF: if (gt <= 4566) {
try {
var stA0 = lcA5;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"    if (!TYPE.isSame(prop_");
var stA2 = lcA24.name__Ljava_lang_String_2();
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,stA2);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,", p.prop_");
var stA2 = lcA24.name__Ljava_lang_String_2();
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,stA2);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,")) return false;\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
invoker.write__VLjava_lang_String_2(stA0,stA1);
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4900; break IF; }}
var stA0 = e;{ gt = 4887; break IF; }
}    }
    X_4615: for (;;) { IF: if (gt <= 4615) {
try {lcI23++;
{ gt = 0; continue X_4450; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4900; break IF; }}
var stA0 = e;{ gt = 4887; break IF; }
}    }
    X_4621: for (;;) { IF: if (gt <= 4621) {
try {
invoker.write__VLjava_lang_String_2(lcA5,"    return true;\n");
invoker.write__VLjava_lang_String_2(lcA5,"  }\n");
invoker.write__VLjava_lang_String_2(lcA5,"  public int hashCode() {\n");
var stA0 = lcA5;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"    int h = ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA6);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,".class.getName().hashCode();\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
invoker.write__VLjava_lang_String_2(stA0,stA1);
var lcA21 = lcA13;
var lcI22 = (lcA21).length;
var lcI23 = 0;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4900; break IF; }}
var stA0 = e;{ gt = 4887; break IF; }
}    }
    X_4688: for (;;) { IF: if (gt <= 4688) {
try {
if ((lcI23) >= (lcI22)) { gt = 4828; break IF; }
var lcA24 = (lcA21[lcI23] || Array.at(lcA21, lcI23));
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](true, '[Z', null, 1);
Array.at(stA0, 0, 0);
var lcA25 = stA0;
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](true, '[Z', null, 1);
Array.at(stA0, 0, 0);
var lcA26 = stA0;
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](true, '[Z', null, 1);
Array.at(stA0, 0, 0);
var lcA27 = stA0;
var stA0 = c.checkType__Ljava_lang_String_2Lorg_netbeans_html_json_impl_ModelProcessor$Prprt_2_3Z_3Z_3Z.call(lcA0, lcA24, lcA25, lcA26, lcA27);
if (((lcA25[0] || Array.at(lcA25, 0))) == 0) { gt = 4787; break IF; }
var stA0 = lcA5;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"    h = TYPE.hashPlus(thisToNull(prop_");
var stA2 = lcA24.name__Ljava_lang_String_2();
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,stA2);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"), h);\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
invoker.write__VLjava_lang_String_2(stA0,stA1);
{ gt = 4822; break IF; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4900; break IF; }}
var stA0 = e;{ gt = 4887; break IF; }
}    }
    X_4787: for (;;) { IF: if (gt <= 4787) {
try {
var stA0 = lcA5;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"    h = TYPE.hashPlus(prop_");
var stA2 = lcA24.name__Ljava_lang_String_2();
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,stA2);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,", h);\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
invoker.write__VLjava_lang_String_2(stA0,stA1);
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4900; break IF; }}
var stA0 = e;{ gt = 4887; break IF; }
}    }
    X_4822: for (;;) { IF: if (gt <= 4822) {
try {lcI23++;
{ gt = 0; continue X_4688; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4900; break IF; }}
var stA0 = e;{ gt = 4887; break IF; }
}    }
    X_4828: for (;;) { IF: if (gt <= 4828) {
try {
invoker.write__VLjava_lang_String_2(lcA5,"    return h;\n");
invoker.write__VLjava_lang_String_2(lcA5,"  }\n");
if ((lcI20) == 0) { gt = 4871; break IF; }
invoker.write__VLjava_lang_String_2(lcA5,"  private Object thisToNull(Object value) {\n");
invoker.write__VLjava_lang_String_2(lcA5,"    return value == this || value == TYPE ? null : value;\n");
invoker.write__VLjava_lang_String_2(lcA5,"  }\n");
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4900; break IF; }}
var stA0 = e;{ gt = 4887; break IF; }
}    }
    X_4871: for (;;) { IF: if (gt <= 4871) {
try {
invoker.write__VLjava_lang_String_2(lcA5,"}\n");
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4900; break IF; }}
var stA0 = e;{ gt = 4887; break IF; }
}try {
invoker.close__V(lcA5);
{ gt = 4897; break IF; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4900; break IF; }}
throw e;
}    }
    X_4887: for (;;) { IF: if (gt <= 4887) {
try {var lcA28 = stA0;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4900; break IF; }}
var stA0 = e;{ gt = 0; continue X_4887; }
}try {
invoker.close__V(lcA5);
{ var stA0 = lcA28; throw lcA28; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4900; break IF; }}
throw e;
}    }
    X_4897: for (;;) { IF: if (gt <= 4897) {
{ gt = 4936; break IF; }
    }
    X_4900: for (;;) { IF: if (gt <= 4900) {
var lcA7 = stA0;
var stA0 = lcA0;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"Can't create ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA6);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,".java");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
c.error__VLjava_lang_String_2Ljavax_lang_model_element_Element_2.call(stA0, stA1, lcA1);
return 0;
    }
    X_4936: for (;;) { IF: if (gt <= 4936) {

return lcI2;

    }
}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.findBuilderPrefix__Ljava_lang_String_2Ljavax_lang_model_element_Element_2Lnet_java_html_json_Model_2 = function(lcA0, lcA1) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = invoker.builder__Ljava_lang_String_2(lcA1);
var stI0 = invoker.isEmpty__Z(stA0);
if ((stI0) != 0) { gt = 19; break IF; }
var stA0 = invoker.builder__Ljava_lang_String_2(lcA1);
return stA0;
    }
    X_19: for (;;) { IF: if (gt <= 19) {

var stA0 = invoker.getAnnotationMirrors__Ljava_util_List_2(lcA0);
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA2 = stA0;
    }
    X_31: for (;;) { IF: if (gt <= 31) {

var stI0 = invoker.hasNext__Z(lcA2);
if ((stI0) == 0) { gt = 118; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA2);
if (stA0 !== null && !stA0['$instOf_javax_lang_model_element_AnnotationMirror']) vm.java_lang_Class(false).castEx(stA0, 'javax.lang.model.element.AnnotationMirror');
var lcA3 = stA0;
var stA0 = invoker.getElementValues__Ljava_util_Map_2(lcA3);
var stA0 = invoker.entrySet__Ljava_util_Set_2(stA0);
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA4 = stA0;
    }
    X_68: for (;;) { IF: if (gt <= 68) {

var stI0 = invoker.hasNext__Z(lcA4);
if ((stI0) == 0) { gt = 115; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA4);
if (stA0 !== null && !stA0['$instOf_java_util_Map$Entry']) vm.java_lang_Class(false).castEx(stA0, 'java.util.Map$Entry');
var lcA5 = stA0;
var stA0 = "builder()";var stA1 = invoker.getKey__Ljava_lang_Object_2(lcA5);
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stI0 = invoker.equals__ZLjava_lang_Object_2(stA0,stA1);
if ((stI0) == 0) { gt = 112; break IF; }
return "";
    }
    X_112: for (;;) { IF: if (gt <= 112) {
{ gt = 0; continue X_68; }
    }
    X_115: for (;;) { IF: if (gt <= 115) {
{ gt = 0; continue X_31; }
    }
    X_118: for (;;) { IF: if (gt <= 118) {

return null;

    }
}}}}}}}
};
    m.access = 10;
    m.cls = CLS;
    m = c.builderMethod__Ljava_lang_String_2Ljava_lang_String_2Lorg_netbeans_html_json_impl_ModelProcessor$Prprt_2 = function(lcA0, lcA1) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = invoker.isEmpty__Z(lcA0);
if ((stI0) == 0) { gt = 12; break IF; }
var stA0 = lcA1.name__Ljava_lang_String_2();
return stA0;
    }
    X_12: for (;;) { IF: if (gt <= 12) {
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,lcA0);
var stA1 = lcA1.name__Ljava_lang_String_2();
var stI1 = invoker.charAt__CI(stA1,0);
var stI1 = (refs_java_lang_Character || (refs_java_lang_Character = vm.java_lang_Character(false)))['toUpperCase__CC'](stI1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,stI1);
var stA1 = lcA1.name__Ljava_lang_String_2();
var stA1 = invoker.substring__Ljava_lang_String_2I(stA1,1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
return stA0;

    }
}}
};
    m.access = 10;
    m.cls = CLS;
    m = c.generateProperties__ZLjavax_lang_model_element_Element_2Ljava_lang_String_2Ljava_io_Writer_2Ljava_lang_String_2_3Lorg_netbeans_html_json_impl_ModelProcessor$Prprt_2Ljava_util_List_2Ljava_util_Map_2Ljava_util_Map_2 = function(lcA1, lcA2, lcA3, lcA4, lcA5, lcA6, lcA7, lcA8) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var lcI9 = 1;
var lcA10 = lcA5;
var lcI11 = (lcA10).length;
var lcI12 = 0;
    }
    X_15: for (;;) { IF: if (gt <= 15) {

if ((lcI12) >= (lcI11)) { gt = 1440; break IF; }
var lcA13 = (lcA10[lcI12] || Array.at(lcA10, lcI12));
var stA0 = c.typeName__Ljava_lang_String_2Lorg_netbeans_html_json_impl_ModelProcessor$Prprt_2.call(lcA0, lcA13);
var lcA14 = stA0;
var stA0 = lcA13.name__Ljava_lang_String_2();
var stA1 = lcA14;var stI2 = lcA13.array__Z();
var stA0 = c.toGetSet___3Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Z(stA0, stA1, stI2);
var lcA15 = stA0;
var stI0 = lcA13.array__Z();
if ((stI0) == 0) { gt = 420; break IF; }
var stA0 = lcA3;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"  private final java.util.List<");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA14);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"> prop_");
var stA2 = lcA13.name__Ljava_lang_String_2();
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,stA2);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,";\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
invoker.write__VLjava_lang_String_2(stA0,stA1);
var lcA16 = "java.util.List";
var stA0 = lcA3;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"  public java.util.List<");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA14);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"> ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,(lcA15[0] || Array.at(lcA15, 0)));
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"() {\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
invoker.write__VLjava_lang_String_2(stA0,stA1);
var stA0 = lcA3;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"    proto.accessProperty(\"");
var stA2 = lcA13.name__Ljava_lang_String_2();
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,stA2);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"\");\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
invoker.write__VLjava_lang_String_2(stA0,stA1);
var stA0 = lcA3;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"    return prop_");
var stA2 = lcA13.name__Ljava_lang_String_2();
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,stA2);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,";\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
invoker.write__VLjava_lang_String_2(stA0,stA1);
invoker.write__VLjava_lang_String_2(lcA3,"  }\n");
if ((lcA2) === null) { gt = 1286; break IF; }
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](true, '[Z', null, 1);
Array.at(stA0, 0, 0);
var lcA17 = stA0;
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](true, '[Z', null, 1);
Array.at(stA0, 0, 0);
var lcA18 = stA0;
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](true, '[Z', null, 1);
Array.at(stA0, 0, 0);
var lcA19 = stA0;
var stA0 = c.checkType__Ljava_lang_String_2Lorg_netbeans_html_json_impl_ModelProcessor$Prprt_2_3Z_3Z_3Z.call(lcA0, lcA13, lcA17, lcA18, lcA19);
var lcA20 = stA0;
var stA0 = lcA3;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"  public ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA4);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1," ");
var stA2 = c.builderMethod__Ljava_lang_String_2Ljava_lang_String_2Lorg_netbeans_html_json_impl_ModelProcessor$Prprt_2(lcA2, lcA13);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,stA2);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"(");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA20);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"... v) {\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
invoker.write__VLjava_lang_String_2(stA0,stA1);
var stA0 = lcA3;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"    proto.accessProperty(\"");
var stA2 = lcA13.name__Ljava_lang_String_2();
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,stA2);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"\");\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
invoker.write__VLjava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA3,"   TYPE.replaceValue(prop_");
var stA1 = lcA13.name__Ljava_lang_String_2();
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,stA1);
var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,", ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA14);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,".class, v);\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,stA1);
invoker.write__VLjava_lang_String_2(lcA3,"    return this;\n");
invoker.write__VLjava_lang_String_2(lcA3,"  }\n");
{ gt = 1286; break IF; }
    }
    X_420: for (;;) { IF: if (gt <= 420) {

var lcA16 = lcA14;
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](true, '[Z', null, 1);
Array.at(stA0, 0, 0);
var lcA17 = stA0;
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](true, '[Z', null, 1);
Array.at(stA0, 0, 0);
var lcA18 = stA0;
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](true, '[Z', null, 1);
Array.at(stA0, 0, 0);
var lcA19 = stA0;
var stA0 = c.checkType__Ljava_lang_String_2Lorg_netbeans_html_json_impl_ModelProcessor$Prprt_2_3Z_3Z_3Z.call(lcA0, lcA13, lcA17, lcA18, lcA19);
if (((lcA17[0] || Array.at(lcA17, 0))) == 0) { gt = 518; break IF; }
var stA0 = lcA3;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"  private /*");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA14);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"*/Object prop_");
var stA2 = lcA13.name__Ljava_lang_String_2();
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,stA2);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,";\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
invoker.write__VLjava_lang_String_2(stA0,stA1);
{ gt = 561; break IF; }
    }
    X_518: for (;;) { IF: if (gt <= 518) {

var stA0 = lcA3;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"  private ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA14);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1," prop_");
var stA2 = lcA13.name__Ljava_lang_String_2();
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,stA2);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,";\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
invoker.write__VLjava_lang_String_2(stA0,stA1);
    }
    X_561: for (;;) { IF: if (gt <= 561) {

var stA0 = lcA3;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"  public ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA14);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1," ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,(lcA15[0] || Array.at(lcA15, 0)));
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"() {\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
invoker.write__VLjava_lang_String_2(stA0,stA1);
var stA0 = lcA3;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"    proto.accessProperty(\"");
var stA2 = lcA13.name__Ljava_lang_String_2();
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,stA2);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"\");\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
invoker.write__VLjava_lang_String_2(stA0,stA1);
if (((lcA17[0] || Array.at(lcA17, 0))) == 0) { gt = 702; break IF; }
var stA0 = lcA3;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"    if (prop_");
var stA2 = lcA13.name__Ljava_lang_String_2();
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,stA2);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1," == TYPE) prop_");
var stA2 = lcA13.name__Ljava_lang_String_2();
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,stA2);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1," = net.java.html.json.Models.bind(new ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA14);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"(), proto.getContext());\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
invoker.write__VLjava_lang_String_2(stA0,stA1);
    }
    X_702: for (;;) { IF: if (gt <= 702) {

var stA0 = lcA3;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"    return (");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA14);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,")prop_");
var stA2 = lcA13.name__Ljava_lang_String_2();
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,stA2);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,";\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
invoker.write__VLjava_lang_String_2(stA0,stA1);
invoker.write__VLjava_lang_String_2(lcA3,"  }\n");
var stA0 = lcA3;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"  public void ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,(lcA15[1] || Array.at(lcA15, 1)));
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"(");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA14);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1," v) {\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
invoker.write__VLjava_lang_String_2(stA0,stA1);
var stI0 = lcA13.mutable__Z();
if ((stI0) != 0) { gt = 810; break IF; }
invoker.write__VLjava_lang_String_2(lcA3,"    proto.initTo(null, null);\n");
    }
    X_810: for (;;) { IF: if (gt <= 810) {

invoker.write__VLjava_lang_String_2(lcA3,"    proto.verifyUnlocked();\n");
var stA0 = lcA3;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"    Object o = prop_");
var stA2 = lcA13.name__Ljava_lang_String_2();
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,stA2);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,";\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
invoker.write__VLjava_lang_String_2(stA0,stA1);
if (((lcA17[0] || Array.at(lcA17, 0))) == 0) { gt = 900; break IF; }
invoker.write__VLjava_lang_String_2(lcA3,"    if (o == v) return;\n");
var stA0 = lcA3;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"    prop_");
var stA2 = lcA13.name__Ljava_lang_String_2();
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,stA2);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1," = v;\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
invoker.write__VLjava_lang_String_2(stA0,stA1);
{ gt = 940; break IF; }
    }
    X_900: for (;;) { IF: if (gt <= 900) {

invoker.write__VLjava_lang_String_2(lcA3,"    if (TYPE.isSame(o , v)) return;\n");
var stA0 = lcA3;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"    prop_");
var stA2 = lcA13.name__Ljava_lang_String_2();
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,stA2);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1," = v;\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
invoker.write__VLjava_lang_String_2(stA0,stA1);
    }
    X_940: for (;;) { IF: if (gt <= 940) {

var stA0 = lcA3;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"    proto.valueHasMutated(\"");
var stA2 = lcA13.name__Ljava_lang_String_2();
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,stA2);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"\", o, v);\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
invoker.write__VLjava_lang_String_2(stA0,stA1);
var stA0 = lcA7;var stA1 = lcA13.name__Ljava_lang_String_2();
var stA0 = invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1);
if (stA0 !== null && !stA0['$instOf_java_util_Collection']) vm.java_lang_Class(false).castEx(stA0, 'java.util.Collection');
var lcA20 = stA0;
if ((lcA20) === null) { gt = 1076; break IF; }
var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA20);
var lcA21 = stA0;
    }
    X_1005: for (;;) { IF: if (gt <= 1005) {

var stI0 = invoker.hasNext__Z(lcA21);
if ((stI0) == 0) { gt = 1076; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA21);
if (stA0 !== null && !Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](stA0, 1, vm.java_lang_String)) vm.java_lang_Class(false).castEx(stA0, '');
var lcA22 = stA0;
var stA0 = lcA3;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"    proto.valueHasMutated(\"");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,(lcA22[0] || Array.at(lcA22, 0)));
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"\", null, ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,(lcA22[1] || Array.at(lcA22, 1)));
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"());\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
invoker.write__VLjava_lang_String_2(stA0,stA1);
{ gt = 0; continue X_1005; }
    }
    X_1076: for (;;) { IF: if (gt <= 1076) {

var stA0 = lcA8;var stA1 = lcA13.name__Ljava_lang_String_2();
var stA0 = invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1);
if (stA0 !== null && !stA0['$instOf_java_util_Collection']) vm.java_lang_Class(false).castEx(stA0, 'java.util.Collection');
var lcA20 = stA0;
if ((lcA20) === null) { gt = 1177; break IF; }
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA3,"    ");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA3,lcA4);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0," model = ");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,lcA4);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,".this;\n");
var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA20);
var lcA21 = stA0;
    }
    X_1139: for (;;) { IF: if (gt <= 1139) {

var stI0 = invoker.hasNext__Z(lcA21);
if ((stI0) == 0) { gt = 1177; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA21);
if (stA0 !== null && !stA0['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA0, 'java.lang.String');
var lcA22 = stA0;
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA3,"  ");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,lcA22);
{ gt = 0; continue X_1139; }
    }
    X_1177: for (;;) { IF: if (gt <= 1177) {

invoker.write__VLjava_lang_String_2(lcA3,"  }\n");
if ((lcA2) === null) { gt = 1286; break IF; }
var stA0 = lcA3;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"  public ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA4);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1," ");
var stA2 = c.builderMethod__Ljava_lang_String_2Ljava_lang_String_2Lorg_netbeans_html_json_impl_ModelProcessor$Prprt_2(lcA2, lcA13);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,stA2);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"(");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA14);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1," v) {\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
invoker.write__VLjava_lang_String_2(stA0,stA1);
var stA0 = lcA3;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"    ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,(lcA15[1] || Array.at(lcA15, 1)));
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"(v);\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
invoker.write__VLjava_lang_String_2(stA0,stA1);
invoker.write__VLjava_lang_String_2(lcA3,"    return this;\n");
invoker.write__VLjava_lang_String_2(lcA3,"  }\n");
    }
    X_1286: for (;;) { IF: if (gt <= 1286) {

var lcI17 = 0;
    }
    X_1289: for (;;) { IF: if (gt <= 1289) {

var stI0 = lcI17;var stI1 = invoker.size__I(lcA6);
if ((stI0) >= (stI1)) { gt = 1371; break IF; }
var stA0 = invoker.get__Ljava_lang_Object_2I(lcA6,lcI17);
if (stA0 !== null && !stA0['$instOf_org_netbeans_html_json_impl_ModelProcessor$GetSet']) vm.java_lang_Class(false).castEx(stA0, 'org.netbeans.html.json.impl.ModelProcessor$GetSet');
var stA0 = stA0['fld_org_netbeans_html_json_impl_ModelProcessor$GetSet_name'];var stA1 = lcA13.name__Ljava_lang_String_2();
var stI0 = invoker.equals__ZLjava_lang_Object_2(stA0,stA1);
if ((stI0) == 0) { gt = 1365; break IF; }
var stA0 = lcA0;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"Cannot have the property ");
var stA2 = lcA13.name__Ljava_lang_String_2();
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,stA2);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1," defined twice");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
c.error__VLjava_lang_String_2Ljavax_lang_model_element_Element_2.call(stA0, stA1, lcA1);
var lcI9 = 0;
    }
    X_1365: for (;;) { IF: if (gt <= 1365) {
lcI17++;
{ gt = 0; continue X_1289; }
    }
    X_1371: for (;;) { IF: if (gt <= 1371) {

var stA0 = lcA6;var stA1 = new org_netbeans_html_json_impl_ModelProcessor$GetSet;
var stA2 = stA1;var stA3 = lcA13.name__Ljava_lang_String_2();
var stA4 = (lcA15[0] || Array.at(lcA15, 0));var stA5 = (lcA15[1] || Array.at(lcA15, 1));var stA6 = lcA14;if (((lcA15[3] || Array.at(lcA15, 3))) !== null) { gt = 1411; break IF; }
var stI7 = lcA13.array__Z();
if ((stI7) != 0) { gt = 1411; break IF; }
var stI7 = 1;{ gt = 1412; break IF; }
    }
    X_1411: for (;;) { IF: if (gt <= 1411) {

var stI7 = 0;    }
    X_1412: for (;;) { IF: if (gt <= 1412) {

var stI8 = lcA13.mutable__Z();
if ((stI8) != 0) { gt = 1424; break IF; }
var stI8 = 1;{ gt = 1425; break IF; }
    }
    X_1424: for (;;) { IF: if (gt <= 1424) {

var stI8 = 0;    }
    X_1425: for (;;) { IF: if (gt <= 1425) {
(refs_org_netbeans_html_json_impl_ModelProcessor$GetSet || (refs_org_netbeans_html_json_impl_ModelProcessor$GetSet = org_netbeans_html_json_impl_ModelProcessor$GetSet(false))).constructor.cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2ZZ.call(stA2, stA3, stA4, stA5, stA6, stI7, stI8);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,stA1);
lcI12++;
{ gt = 0; continue X_15; }
    }
    X_1440: for (;;) { IF: if (gt <= 1440) {

return lcI9;

    }
}}}}}}}}}}}}}}}}}}}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.generateComputedProperties__ZLjava_lang_String_2Ljava_io_Writer_2_3Lorg_netbeans_html_json_impl_ModelProcessor$Prprt_2Ljava_util_Collection_2Ljava_util_Collection_2Ljava_util_Map_2 = function(lcA1, lcA2, lcA3, lcA4, lcA5, lcA6) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var lcI7 = 1;
var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA4);
var lcA8 = stA0;
    }
    X_12: for (;;) { IF: if (gt <= 12) {

var stI0 = invoker.hasNext__Z(lcA8);
if ((stI0) == 0) { gt = 1627; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA8);
if (stA0 !== null && !stA0['$instOf_javax_lang_model_element_Element']) vm.java_lang_Class(false).castEx(stA0, 'javax.lang.model.element.Element');
var lcA9 = stA0;
var stA0 = invoker.getKind__Ljavax_lang_model_element_ElementKind_2(lcA9);
if ((stA0) === ((refs_javax_lang_model_element_ElementKind || (refs_javax_lang_model_element_ElementKind = vm.javax_lang_model_element_ElementKind(false)))['_METHOD']())) { gt = 50; break IF; }
{ gt = 0; continue X_12; }
    }
    X_50: for (;;) { IF: if (gt <= 50) {

var stA0 = invoker.getAnnotation__Ljava_lang_annotation_Annotation_2Ljava_lang_Class_2(lcA9,(refs_net_java_html_json_ComputedProperty || (refs_net_java_html_json_ComputedProperty = net_java_html_json_ComputedProperty(false))).constructor.$class);
if (stA0 !== null && !stA0['$instOf_net_java_html_json_ComputedProperty']) vm.java_lang_Class(false).castEx(stA0, 'net.java.html.json.ComputedProperty');
var lcA10 = stA0;
var stA0 = invoker.getAnnotation__Ljava_lang_annotation_Annotation_2Ljava_lang_Class_2(lcA9,(refs_org_netbeans_html_json_impl_Transitive || (refs_org_netbeans_html_json_impl_Transitive = org_netbeans_html_json_impl_Transitive(false))).constructor.$class);
if (stA0 !== null && !stA0['$instOf_org_netbeans_html_json_impl_Transitive']) vm.java_lang_Class(false).castEx(stA0, 'org.netbeans.html.json.impl.Transitive');
var lcA11 = stA0;
if ((lcA10) !== null) { gt = 88; break IF; }
{ gt = 0; continue X_12; }
    }
    X_88: for (;;) { IF: if (gt <= 88) {

var stA0 = invoker.getModifiers__Ljava_util_Set_2(lcA9);
var stI0 = invoker.contains__ZLjava_lang_Object_2(stA0,(refs_javax_lang_model_element_Modifier || (refs_javax_lang_model_element_Modifier = vm.javax_lang_model_element_Modifier(false)))['_STATIC']());
if ((stI0) != 0) { gt = 150; break IF; }
var stA0 = lcA0;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"Method ");
var stA2 = invoker.getSimpleName__Ljavax_lang_model_element_Name_2(lcA9);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2(stA1,stA2);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1," has to be static when annotated by @ComputedProperty");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
c.error__VLjava_lang_String_2Ljavax_lang_model_element_Element_2.call(stA0, stA1, lcA9);
var lcI7 = 0;
{ gt = 0; continue X_12; }
    }
    X_150: for (;;) { IF: if (gt <= 150) {

if (lcA9 !== null && !lcA9['$instOf_javax_lang_model_element_ExecutableElement']) vm.java_lang_Class(false).castEx(lcA9, 'javax.lang.model.element.ExecutableElement');
var lcA12 = lcA9;
var lcA13 = null;
var stA0 = invoker.write__Ljava_lang_String_2(lcA10);
var stI0 = invoker.isEmpty__Z(stA0);
if ((stI0) != 0) { gt = 211; break IF; }
var stA0 = lcA0;var stA1 = lcA12;var stA2 = invoker.getEnclosingElement__Ljavax_lang_model_element_Element_2(lcA9);
if (stA2 !== null && !stA2['$instOf_javax_lang_model_element_TypeElement']) vm.java_lang_Class(false).castEx(stA2, 'javax.lang.model.element.TypeElement');
var stA3 = invoker.write__Ljava_lang_String_2(lcA10);
var stA0 = c.findWrite__Ljavax_lang_model_element_ExecutableElement_2Ljavax_lang_model_element_ExecutableElement_2Ljavax_lang_model_element_TypeElement_2Ljava_lang_String_2Ljava_lang_String_2.call(stA0, stA1, stA2, stA3, lcA1);
var lcA13 = stA0;
if ((lcA13) === null) { gt = 208; break IF; }
var stI0 = 1;{ gt = 209; break IF; }
    }
    X_208: for (;;) { IF: if (gt <= 208) {

var stI0 = 0;    }
    X_209: for (;;) { IF: if (gt <= 209) {
var lcI7 = stI0;
    }
    X_211: for (;;) { IF: if (gt <= 211) {

var stA0 = invoker.getReturnType__Ljavax_lang_model_type_TypeMirror_2(lcA12);
var lcA14 = stA0;
var stA0 = invoker.getTypeUtils__Ljavax_lang_model_util_Types_2(c['_processingEnv'].call(lcA0));
var lcA15 = stA0;
var stA0 = invoker.erasure__Ljavax_lang_model_type_TypeMirror_2Ljavax_lang_model_type_TypeMirror_2(lcA15,lcA14);
var lcA16 = stA0;
var stA0 = c.fqn__Ljava_lang_String_2Ljavax_lang_model_type_TypeMirror_2Ljavax_lang_model_element_Element_2.call(lcA0, lcA16, lcA12);
var lcA17 = stA0;
var lcI18 = 0;
var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA17,"java.util.List");
if ((stI0) == 0) { gt = 293; break IF; }
var lcI18 = 1;
if (lcA14 !== null && !lcA14['$instOf_javax_lang_model_type_DeclaredType']) vm.java_lang_Class(false).castEx(lcA14, 'javax.lang.model.type.DeclaredType');
var stA0 = invoker.getTypeArguments__Ljava_util_List_2(lcA14);
var stA0 = invoker.get__Ljava_lang_Object_2I(stA0,0);
if (stA0 !== null && !stA0['$instOf_javax_lang_model_type_TypeMirror']) vm.java_lang_Class(false).castEx(stA0, 'javax.lang.model.type.TypeMirror');
var lcA19 = stA0;
{ gt = 297; break IF; }
    }
    X_293: for (;;) { IF: if (gt <= 293) {

var lcA19 = lcA14;
    }
    X_297: for (;;) { IF: if (gt <= 297) {

var stA0 = invoker.getSimpleName__Ljavax_lang_model_element_Name_2(lcA12);
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
var lcA20 = stA0;
var stA0 = invoker.getKind__Ljavax_lang_model_type_TypeKind_2(lcA19);
var stI0 = invoker.isPrimitive__Z(stA0);
if ((stI0) == 0) { gt = 325; break IF; }
{ gt = 482; break IF; }
    }
    X_325: for (;;) { IF: if (gt <= 325) {

var stA0 = invoker.getElementUtils__Ljavax_lang_model_util_Elements_2(c['_processingEnv'].call(lcA0));
var stA0 = invoker.getTypeElement__Ljavax_lang_model_element_TypeElement_2Ljava_lang_CharSequence_2(stA0,"java.lang.String");
var stA0 = invoker.asType__Ljavax_lang_model_type_TypeMirror_2(stA0);
var lcA21 = stA0;
var stA0 = invoker.getElementUtils__Ljavax_lang_model_util_Elements_2(c['_processingEnv'].call(lcA0));
var stA0 = invoker.getTypeElement__Ljavax_lang_model_element_TypeElement_2Ljava_lang_CharSequence_2(stA0,"java.lang.Enum");
var stA0 = invoker.asType__Ljavax_lang_model_type_TypeMirror_2(stA0);
var lcA22 = stA0;
var stI0 = invoker.isSubtype__ZLjavax_lang_model_type_TypeMirror_2Ljavax_lang_model_type_TypeMirror_2(lcA15,lcA19, lcA21);
if ((stI0) == 0) { gt = 389; break IF; }
{ gt = 482; break IF; }
    }
    X_389: for (;;) { IF: if (gt <= 389) {

var stA0 = lcA15;var stA1 = invoker.erasure__Ljavax_lang_model_type_TypeMirror_2Ljavax_lang_model_type_TypeMirror_2(lcA15,lcA19);
var stA2 = invoker.erasure__Ljavax_lang_model_type_TypeMirror_2Ljavax_lang_model_type_TypeMirror_2(lcA15,lcA22);
var stI0 = invoker.isSubtype__ZLjavax_lang_model_type_TypeMirror_2Ljavax_lang_model_type_TypeMirror_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 420; break IF; }
{ gt = 482; break IF; }
    }
    X_420: for (;;) { IF: if (gt <= 420) {

var stI0 = c.isModel__ZLjavax_lang_model_type_TypeMirror_2.call(lcA0, lcA19);
if ((stI0) == 0) { gt = 432; break IF; }
{ gt = 482; break IF; }
    }
    X_432: for (;;) { IF: if (gt <= 432) {
try {
var stA0 = invoker.unboxedType__Ljavax_lang_model_type_PrimitiveType_2Ljavax_lang_model_type_TypeMirror_2(lcA15,lcA19);
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_IllegalArgumentException']) {var stA0 = e;{ gt = 445; break IF; }}
throw e;
}{ gt = 482; break IF; }
    }
    X_445: for (;;) { IF: if (gt <= 445) {
var lcA23 = stA0;
var lcI7 = 0;
var stA0 = lcA0;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA20);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1," cannot return ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2(stA1,lcA19);
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
c.error__VLjava_lang_String_2Ljavax_lang_model_element_Element_2.call(stA0, stA1, lcA9);
    }
    X_482: for (;;) { IF: if (gt <= 482) {

var stA0 = invoker.getSimpleName__Ljavax_lang_model_element_Name_2(lcA9);
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
var lcA21 = stA0;
var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA5);
var lcA22 = stA0;
    }
    X_503: for (;;) { IF: if (gt <= 503) {

var stI0 = invoker.hasNext__Z(lcA22);
if ((stI0) == 0) { gt = 580; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA22);
if (stA0 !== null && !stA0['$instOf_org_netbeans_html_json_impl_ModelProcessor$GetSet']) vm.java_lang_Class(false).castEx(stA0, 'org.netbeans.html.json.impl.ModelProcessor$GetSet');
var lcA23 = stA0;
var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA21,lcA23['fld_org_netbeans_html_json_impl_ModelProcessor$GetSet_name']);
if ((stI0) == 0) { gt = 577; break IF; }
var stA0 = lcA0;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"Cannot have the property ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA21);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1," defined twice");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
c.error__VLjava_lang_String_2Ljavax_lang_model_element_Element_2.call(stA0, stA1, lcA9);
var lcI7 = 0;
{ gt = 0; continue X_12; }
    }
    X_577: for (;;) { IF: if (gt <= 577) {
{ gt = 0; continue X_503; }
    }
    X_580: for (;;) { IF: if (gt <= 580) {

var stA0 = c.toGetSet___3Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Z(lcA20, lcA17, lcI18);
var lcA22 = stA0;
var stA0 = lcA2;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"  public ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA17);
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
invoker.write__VLjava_lang_String_2(stA0,stA1);
if ((lcI18) == 0) { gt = 651; break IF; }
var stA0 = lcA2;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"<");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2(stA1,lcA19);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,">");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
invoker.write__VLjava_lang_String_2(stA0,stA1);
    }
    X_651: for (;;) { IF: if (gt <= 651) {

var stA0 = lcA2;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1," ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,(lcA22[0] || Array.at(lcA22, 0)));
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"() {\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
invoker.write__VLjava_lang_String_2(stA0,stA1);
var lcI23 = 0;
var lcI24 = 0;
var stA0 = invoker.getParameters__Ljava_util_List_2(lcA12);
var lcA25 = stA0;
var stI0 = invoker.size__I(lcA25);
if ((stI0) == (1)) { gt = 712; break IF; }
var stA0 = null;{ gt = 728; break IF; }
    }
    X_712: for (;;) { IF: if (gt <= 712) {

var stA0 = lcA0;var stA1 = invoker.get__Ljava_lang_Object_2I(lcA25,0);
if (stA1 !== null && !stA1['$instOf_javax_lang_model_element_Element']) vm.java_lang_Class(false).castEx(stA1, 'javax.lang.model.element.Element');
var stA0 = c.verifyPropName__Ljava_lang_String_2Ljavax_lang_model_element_Element_2_3Lorg_netbeans_html_json_impl_ModelProcessor$Prprt_2.call(stA0, stA1, lcA3);
    }
    X_728: for (;;) { IF: if (gt <= 728) {
var lcA26 = stA0;
if ((lcA26) !== null) { gt = 1047; break IF; }
var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA25);
var lcA27 = stA0;
    }
    X_744: for (;;) { IF: if (gt <= 744) {

var stI0 = invoker.hasNext__Z(lcA27);
if ((stI0) == 0) { gt = 1044; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA27);
if (stA0 !== null && !stA0['$instOf_javax_lang_model_element_VariableElement']) vm.java_lang_Class(false).castEx(stA0, 'javax.lang.model.element.VariableElement');
var lcA28 = stA0;
var stA0 = invoker.getSimpleName__Ljavax_lang_model_element_Name_2(lcA28);
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
var lcA29 = stA0;
var stA0 = c.verifyPropName__Ljava_lang_String_2Ljavax_lang_model_element_Element_2_3Lorg_netbeans_html_json_impl_ModelProcessor$Prprt_2.call(lcA0, lcA28, lcA3);
var lcA30 = stA0;
if ((lcA30) === null) { gt = 803; break IF; }
c.error__VLjava_lang_String_2Ljavax_lang_model_element_Element_2.call(lcA0, lcA30, lcA9);
var lcI7 = 0;
    }
    X_803: for (;;) { IF: if (gt <= 803) {

var stA0 = invoker.asType__Ljavax_lang_model_type_TypeMirror_2(lcA28);
var lcA31 = stA0;
var stI0 = c.isModel__ZLjavax_lang_model_type_TypeMirror_2.call(lcA0, lcA31);
if ((stI0) == 0) { gt = 824; break IF; }
var lcI24 = 1;
    }
    X_824: for (;;) { IF: if (gt <= 824) {

var stA0 = c.fqn__Ljava_lang_String_2Ljavax_lang_model_type_TypeMirror_2Ljavax_lang_model_element_Element_2.call(lcA0, lcA31, lcA12);
var lcA32 = stA0;
var stI0 = invoker.startsWith__ZLjava_lang_String_2(lcA32,"java.util.List");
if ((stI0) == 0) { gt = 897; break IF; }
var stI0 = lcA31 != null && lcA31['$instOf_javax_lang_model_type_DeclaredType'] ? 1 : 0;
if ((stI0) == 0) { gt = 897; break IF; }
if (lcA31 !== null && !lcA31['$instOf_javax_lang_model_type_DeclaredType']) vm.java_lang_Class(false).castEx(lcA31, 'javax.lang.model.type.DeclaredType');
var stA0 = invoker.getTypeArguments__Ljava_util_List_2(lcA31);
var lcA33 = stA0;
var stI0 = invoker.size__I(lcA33);
if ((stI0) != (1)) { gt = 897; break IF; }
var stA0 = lcA0;var stA1 = invoker.get__Ljava_lang_Object_2I(lcA33,0);
if (stA1 !== null && !stA1['$instOf_javax_lang_model_type_TypeMirror']) vm.java_lang_Class(false).castEx(stA1, 'javax.lang.model.type.TypeMirror');
var stI0 = c.isModel__ZLjavax_lang_model_type_TypeMirror_2.call(stA0, stA1);
if ((stI0) == 0) { gt = 897; break IF; }
var lcI24 = 1;
    }
    X_897: for (;;) { IF: if (gt <= 897) {

var stA0 = c.toGetSet___3Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Z(lcA29, lcA32, 0);
var lcA33 = stA0;
var stA0 = lcA2;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"    ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA32);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1," arg");
lcI23++;
var stA1 = invoker.append__Ljava_lang_StringBuilder_2I(stA1,lcI23);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1," = ");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
invoker.write__VLjava_lang_String_2(stA0,stA1);
var stA0 = lcA2;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,(lcA33[0] || Array.at(lcA33, 0)));
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"();\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
invoker.write__VLjava_lang_String_2(stA0,stA1);
var stA0 = invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2(lcA6,lcA29);
if (stA0 !== null && !stA0['$instOf_java_util_Collection']) vm.java_lang_Class(false).castEx(stA0, 'java.util.Collection');
var lcA34 = stA0;
if ((lcA34) !== null) { gt = 1017; break IF; }
var stA0 = new vm.java_util_LinkedHashSet;
(refs_java_util_LinkedHashSet || (refs_java_util_LinkedHashSet = vm.java_util_LinkedHashSet(false))).constructor['cons__V'].call(stA0);
var lcA34 = stA0;
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA6,lcA29, lcA34);
    }
    X_1017: for (;;) { IF: if (gt <= 1017) {

var stA0 = lcA34;var stA1 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, 2);
Array.at(stA1, 0, lcA20);
Array.at(stA1, 1, (lcA22[0] || Array.at(lcA22, 0)));
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,stA1);
{ gt = 0; continue X_744; }
    }
    X_1044: for (;;) { IF: if (gt <= 1044) {
{ gt = 1216; break IF; }
    }
    X_1047: for (;;) { IF: if (gt <= 1047) {

var stA0 = invoker.get__Ljava_lang_Object_2I(lcA25,0);
if (stA0 !== null && !stA0['$instOf_javax_lang_model_element_VariableElement']) vm.java_lang_Class(false).castEx(stA0, 'javax.lang.model.element.VariableElement');
var lcA27 = stA0;
var stA0 = invoker.asType__Ljavax_lang_model_type_TypeMirror_2(lcA27);
var lcA28 = stA0;
var stA0 = invoker.getKind__Ljavax_lang_model_type_TypeKind_2(lcA28);
if ((stA0) !== ((refs_javax_lang_model_type_TypeKind || (refs_javax_lang_model_type_TypeKind = vm.javax_lang_model_type_TypeKind(false)))['_DECLARED']())) { gt = 1102; break IF; }
if (lcA28 !== null && !lcA28['$instOf_javax_lang_model_type_DeclaredType']) vm.java_lang_Class(false).castEx(lcA28, 'javax.lang.model.type.DeclaredType');
var stA0 = invoker.asElement__Ljavax_lang_model_element_Element_2(lcA28);
var stA0 = invoker.getSimpleName__Ljavax_lang_model_element_Name_2(stA0);
var lcA29 = stA0;
{ gt = 1111; break IF; }
    }
    X_1102: for (;;) { IF: if (gt <= 1102) {

var stA0 = invoker.toString__Ljava_lang_String_2(lcA28);
var lcA29 = stA0;
    }
    X_1111: for (;;) { IF: if (gt <= 1111) {

var stA0 = invoker.toString__Ljava_lang_String_2(lcA29);
var stI0 = invoker.equals__ZLjava_lang_Object_2(stA0,lcA1);
if ((stI0) == 0) { gt = 1128; break IF; }
{ gt = 1171; break IF; }
    }
    X_1128: for (;;) { IF: if (gt <= 1128) {

var stA0 = lcA0;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"Single parameter needs to be of type ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1," or ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA26);
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
c.error__VLjava_lang_String_2Ljavax_lang_model_element_Element_2.call(stA0, stA1, lcA9);
var lcI7 = 0;
{ gt = 0; continue X_12; }
    }
    X_1171: for (;;) { IF: if (gt <= 1171) {

var stA0 = lcA2;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"    ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2(stA1,lcA29);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1," arg");
lcI23++;
var stA1 = invoker.append__Ljava_lang_StringBuilder_2I(stA1,lcI23);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1," = this;\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
invoker.write__VLjava_lang_String_2(stA0,stA1);
    }
    X_1216: for (;;) { IF: if (gt <= 1216) {

invoker.write__VLjava_lang_String_2(lcA2,"    try {\n");
if ((lcA11) === null) { gt = 1236; break IF; }
var stI0 = lcA11.deep__Z();
var lcI24 = stI0;
    }
    X_1236: for (;;) { IF: if (gt <= 1236) {

if ((lcI24) == 0) { gt = 1275; break IF; }
var stA0 = lcA2;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"      proto.acquireLock(\"");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA20);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"\");\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
invoker.write__VLjava_lang_String_2(stA0,stA1);
{ gt = 1282; break IF; }
    }
    X_1275: for (;;) { IF: if (gt <= 1275) {

invoker.write__VLjava_lang_String_2(lcA2,"      proto.acquireLock();\n");
    }
    X_1282: for (;;) { IF: if (gt <= 1282) {

var stA0 = lcA2;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"      return ");
var stA2 = lcA0;var stA3 = invoker.getEnclosingElement__Ljavax_lang_model_element_Element_2(lcA12);
var stA3 = invoker.asType__Ljavax_lang_model_type_TypeMirror_2(stA3);
var stA2 = c.fqn__Ljava_lang_String_2Ljavax_lang_model_type_TypeMirror_2Ljavax_lang_model_element_Element_2.call(stA2, stA3, lcA12);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,stA2);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2C(stA1,(46));
var stA2 = invoker.getSimpleName__Ljavax_lang_model_element_Name_2(lcA9);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2(stA1,stA2);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"(");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
invoker.write__VLjava_lang_String_2(stA0,stA1);
var lcA27 = "";
var lcI28 = 1;
    }
    X_1350: for (;;) { IF: if (gt <= 1350) {

if ((lcI28) > (lcI23)) { gt = 1398; break IF; }
invoker.write__VLjava_lang_String_2(lcA2,lcA27);
var stA0 = lcA2;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"arg");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2I(stA1,lcI28);
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
invoker.write__VLjava_lang_String_2(stA0,stA1);
var lcA27 = ", ";
lcI28++;
{ gt = 0; continue X_1350; }
    }
    X_1398: for (;;) { IF: if (gt <= 1398) {

invoker.write__VLjava_lang_String_2(lcA2,");\n");
invoker.write__VLjava_lang_String_2(lcA2,"    } finally {\n");
invoker.write__VLjava_lang_String_2(lcA2,"      proto.releaseLock();\n");
invoker.write__VLjava_lang_String_2(lcA2,"    }\n");
invoker.write__VLjava_lang_String_2(lcA2,"  }\n");
if ((lcA13) !== null) { gt = 1464; break IF; }
var stA0 = lcA5;var stA1 = new org_netbeans_html_json_impl_ModelProcessor$GetSet;
(refs_org_netbeans_html_json_impl_ModelProcessor$GetSet || (refs_org_netbeans_html_json_impl_ModelProcessor$GetSet = org_netbeans_html_json_impl_ModelProcessor$GetSet(false))).constructor.cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2ZZ.call(stA1, lcA21, (lcA22[0] || Array.at(lcA22, 0)), null, lcA17, 1, 0);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,stA1);
{ gt = 1624; break IF; }
    }
    X_1464: for (;;) { IF: if (gt <= 1464) {

var stA0 = lcA2;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"  public void ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,(lcA22[4] || Array.at(lcA22, 4)));
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"(");
var stA2 = invoker.getParameters__Ljava_util_List_2(lcA13);
var stA2 = invoker.get__Ljava_lang_Object_2I(stA2,1);
if (stA2 !== null && !stA2['$instOf_javax_lang_model_element_VariableElement']) vm.java_lang_Class(false).castEx(stA2, 'javax.lang.model.element.VariableElement');
var stA2 = invoker.asType__Ljavax_lang_model_type_TypeMirror_2(stA2);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2(stA1,stA2);
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
invoker.write__VLjava_lang_String_2(stA0,stA1);
invoker.write__VLjava_lang_String_2(lcA2," value) {\n");
var stA0 = lcA2;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"    ");
var stA2 = lcA0;var stA3 = invoker.getEnclosingElement__Ljavax_lang_model_element_Element_2(lcA12);
var stA3 = invoker.asType__Ljavax_lang_model_type_TypeMirror_2(stA3);
var stA2 = c.fqn__Ljava_lang_String_2Ljavax_lang_model_type_TypeMirror_2Ljavax_lang_model_element_Element_2.call(stA2, stA3, lcA12);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,stA2);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2C(stA1,(46));
var stA2 = invoker.getSimpleName__Ljavax_lang_model_element_Name_2(lcA13);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2(stA1,stA2);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"(this, value);\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
invoker.write__VLjava_lang_String_2(stA0,stA1);
invoker.write__VLjava_lang_String_2(lcA2,"  }\n");
var stA0 = lcA5;var stA1 = new org_netbeans_html_json_impl_ModelProcessor$GetSet;
(refs_org_netbeans_html_json_impl_ModelProcessor$GetSet || (refs_org_netbeans_html_json_impl_ModelProcessor$GetSet = org_netbeans_html_json_impl_ModelProcessor$GetSet(false))).constructor.cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2ZZ.call(stA1, lcA21, (lcA22[0] || Array.at(lcA22, 0)), (lcA22[4] || Array.at(lcA22, 4)), lcA17, 0, 0);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,stA1);
    }
    X_1624: for (;;) { IF: if (gt <= 1624) {
{ gt = 0; continue X_12; }
    }
    X_1627: for (;;) { IF: if (gt <= 1627) {

return lcI7;

    }
}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.toGetSet___3Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Z = function(lcA0, lcA1, lcI2) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var stI1 = invoker.charAt__CI(lcA0,0);
var stI1 = (refs_java_lang_Character || (refs_java_lang_Character = vm.java_lang_Character(false)))['toUpperCase__CC'](stI1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,stI1);
var stA1 = invoker.substring__Ljava_lang_String_2I(lcA0,1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
var lcA3 = stA0;
var stI0 = invoker.equals__ZLjava_lang_Object_2("class",lcA0);
var lcI4 = stI0;
if ((lcI4) == 0) { gt = 50; break IF; }
var stA0 = "access";{ gt = 53; break IF; }
    }
    X_50: for (;;) { IF: if (gt <= 50) {

var stA0 = "get";    }
    X_53: for (;;) { IF: if (gt <= 53) {
var lcA5 = stA0;
var stI0 = invoker.equals__ZLjava_lang_Object_2("boolean",lcA1);
if ((stI0) == 0) { gt = 73; break IF; }
if ((lcI2) != 0) { gt = 73; break IF; }
var lcA5 = "is";
    }
    X_73: for (;;) { IF: if (gt <= 73) {

if ((lcI2) == 0) { gt = 158; break IF; }
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, 5);
var stA1 = stA0;var stI2 = 0;var stA3 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA3);
var stA3 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA3,lcA5);
var stA3 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA3,lcA3);
var stA3 = invoker.toString__Ljava_lang_String_2(stA3);
Array.at(stA1, stI2, stA3);
Array.at(stA0, 1, null);
var stA1 = stA0;var stI2 = 2;var stA3 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA3);
var stA3 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA3,"a");
var stA3 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA3,lcA3);
var stA3 = invoker.toString__Ljava_lang_String_2(stA3);
Array.at(stA1, stI2, stA3);
Array.at(stA0, 3, null);
var stA1 = stA0;var stI2 = 4;var stA3 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA3);
var stA3 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA3,"set");
var stA3 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA3,lcA3);
var stA3 = invoker.toString__Ljava_lang_String_2(stA3);
Array.at(stA1, stI2, stA3);
return stA0;
    }
    X_158: for (;;) { IF: if (gt <= 158) {

var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, 5);
var stA1 = stA0;var stI2 = 0;var stA3 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA3);
var stA3 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA3,lcA5);
var stA3 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA3,lcA3);
var stA3 = invoker.toString__Ljava_lang_String_2(stA3);
Array.at(stA1, stI2, stA3);
var stA1 = stA0;var stI2 = 1;var stA3 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA3);
var stA3 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA3,"set");
var stA3 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA3,lcA3);
var stA3 = invoker.toString__Ljava_lang_String_2(stA3);
Array.at(stA1, stI2, stA3);
var stA1 = stA0;var stI2 = 2;var stA3 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA3);
var stA3 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA3,"a");
var stA3 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA3,lcA3);
var stA3 = invoker.toString__Ljava_lang_String_2(stA3);
Array.at(stA1, stI2, stA3);
Array.at(stA0, 3, "");
var stA1 = stA0;var stI2 = 4;var stA3 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA3);
var stA3 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA3,"set");
var stA3 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA3,lcA3);
var stA3 = invoker.toString__Ljava_lang_String_2(stA3);
Array.at(stA1, stI2, stA3);
return stA0;

    }
}}}}}
};
    m.access = 10;
    m.cls = CLS;
    m = c.typeName__Ljava_lang_String_2Lorg_netbeans_html_json_impl_ModelProcessor$Prprt_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](true, '[Z', null, 1);
Array.at(stA0, 0, 0);
var lcA3 = stA0;
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](true, '[Z', null, 1);
Array.at(stA0, 0, 0);
var lcA4 = stA0;
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](true, '[Z', null, 1);
Array.at(stA0, 0, 0);
var lcA5 = stA0;
var stA0 = c.checkType__Ljava_lang_String_2Lorg_netbeans_html_json_impl_ModelProcessor$Prprt_2_3Z_3Z_3Z.call(lcA0, lcA1, lcA3, lcA4, lcA5);
var lcA2 = stA0;
var stI0 = lcA1.array__Z();
if ((stI0) == 0) { gt = 58; break IF; }
var stA0 = c.findBoxedType__Ljava_lang_String_2Ljava_lang_String_2(lcA2);
var lcA6 = stA0;
if ((lcA6) === null) { gt = 58; break IF; }
return lcA6;
    }
    X_58: for (;;) { IF: if (gt <= 58) {

return lcA2;

    }
}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.findBoxedType__Ljava_lang_String_2Ljava_lang_String_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA0,"boolean");
if ((stI0) == 0) { gt = 16; break IF; }
var stA0 = invoker.getName__Ljava_lang_String_2((refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class);
return stA0;
    }
    X_16: for (;;) { IF: if (gt <= 16) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA0,"byte");
if ((stI0) == 0) { gt = 33; break IF; }
var stA0 = invoker.getName__Ljava_lang_String_2((refs_java_lang_Byte || (refs_java_lang_Byte = vm.java_lang_Byte(false))).constructor.$class);
return stA0;
    }
    X_33: for (;;) { IF: if (gt <= 33) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA0,"short");
if ((stI0) == 0) { gt = 50; break IF; }
var stA0 = invoker.getName__Ljava_lang_String_2((refs_java_lang_Short || (refs_java_lang_Short = vm.java_lang_Short(false))).constructor.$class);
return stA0;
    }
    X_50: for (;;) { IF: if (gt <= 50) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA0,"char");
if ((stI0) == 0) { gt = 66; break IF; }
var stA0 = invoker.getName__Ljava_lang_String_2((refs_java_lang_Character || (refs_java_lang_Character = vm.java_lang_Character(false))).constructor.$class);
return stA0;
    }
    X_66: for (;;) { IF: if (gt <= 66) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA0,"int");
if ((stI0) == 0) { gt = 83; break IF; }
var stA0 = invoker.getName__Ljava_lang_String_2((refs_java_lang_Integer || (refs_java_lang_Integer = vm.java_lang_Integer(false))).constructor.$class);
return stA0;
    }
    X_83: for (;;) { IF: if (gt <= 83) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA0,"long");
if ((stI0) == 0) { gt = 100; break IF; }
var stA0 = invoker.getName__Ljava_lang_String_2((refs_java_lang_Long || (refs_java_lang_Long = vm.java_lang_Long(false))).constructor.$class);
return stA0;
    }
    X_100: for (;;) { IF: if (gt <= 100) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA0,"float");
if ((stI0) == 0) { gt = 117; break IF; }
var stA0 = invoker.getName__Ljava_lang_String_2((refs_java_lang_Float || (refs_java_lang_Float = vm.java_lang_Float(false))).constructor.$class);
return stA0;
    }
    X_117: for (;;) { IF: if (gt <= 117) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA0,"double");
if ((stI0) == 0) { gt = 134; break IF; }
var stA0 = invoker.getName__Ljava_lang_String_2((refs_java_lang_Double || (refs_java_lang_Double = vm.java_lang_Double(false))).constructor.$class);
return stA0;
    }
    X_134: for (;;) { IF: if (gt <= 134) {

return null;

    }
}}}}}}}}}
};
    m.access = 10;
    m.cls = CLS;
    m = c.verifyPropName__Ljava_lang_String_2Ljavax_lang_model_element_Element_2_3Lorg_netbeans_html_json_impl_ModelProcessor$Prprt_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = invoker.getSimpleName__Ljavax_lang_model_element_Name_2(lcA1);
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
var lcA3 = stA0;
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var lcA4 = stA0;
var lcA5 = "";
var lcA6 = lcA2;
var lcI7 = (lcA6).length;
var lcI8 = 0;
    }
    X_34: for (;;) { IF: if (gt <= 34) {

if ((lcI8) >= (lcI7)) { gt = 107; break IF; }
var lcA9 = (lcA6[lcI8] || Array.at(lcA6, lcI8));
var stA0 = lcA9.name__Ljava_lang_String_2();
var stI0 = invoker.equals__ZLjava_lang_Object_2(stA0,lcA3);
if ((stI0) == 0) { gt = 62; break IF; }
return null;
    }
    X_62: for (;;) { IF: if (gt <= 62) {

var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA4,lcA5);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA4,(34));
var stA0 = lcA4;var stA1 = lcA9.name__Ljava_lang_String_2();
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA4,(34));
var lcA5 = ", ";
lcI8++;
{ gt = 0; continue X_34; }
    }
    X_107: for (;;) { IF: if (gt <= 107) {
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,lcA3);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0," has to be one of known properties: ");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2(stA0,lcA4);
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
return stA0;

    }
}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.findPkgName__Ljava_lang_String_2Ljavax_lang_model_element_Element_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = invoker.getKind__Ljavax_lang_model_element_ElementKind_2(lcA0);
if ((stA0) !== ((refs_javax_lang_model_element_ElementKind || (refs_javax_lang_model_element_ElementKind = vm.javax_lang_model_element_ElementKind(false)))['_PACKAGE']())) { gt = 25; break IF; }
if (lcA0 !== null && !lcA0['$instOf_javax_lang_model_element_PackageElement']) vm.java_lang_Class(false).castEx(lcA0, 'javax.lang.model.element.PackageElement');
var stA0 = invoker.getQualifiedName__Ljavax_lang_model_element_Name_2(lcA0);
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
return stA0;
    }
    X_25: for (;;) { IF: if (gt <= 25) {

var stA0 = invoker.getEnclosingElement__Ljavax_lang_model_element_Element_2(lcA0);
var lcA0 = stA0;
{ gt = 0; continue X_0; }

    }
}}
};
    m.access = 10;
    m.cls = CLS;
    m = c.generateFunctions__ZLjavax_lang_model_element_Element_2Ljava_io_StringWriter_2Ljava_lang_String_2Ljava_util_List_2Ljava_util_List_2 = function(lcA1, lcA2, lcA3, lcA4, lcA5) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = invoker.getAnnotation__Ljava_lang_annotation_Annotation_2Ljava_lang_Class_2(lcA1,(refs_net_java_html_json_Model || (refs_net_java_html_json_Model = net_java_html_json_Model(false))).constructor.$class);
if (stA0 !== null && !stA0['$instOf_net_java_html_json_Model']) vm.java_lang_Class(false).castEx(stA0, 'net.java.html.json.Model');
var stI0 = invoker.instance__Z(stA0);
var lcI6 = stI0;
var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA4);
var lcA7 = stA0;
    }
    X_27: for (;;) { IF: if (gt <= 27) {

var stI0 = invoker.hasNext__Z(lcA7);
if ((stI0) == 0) { gt = 222; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA7);
if (stA0 !== null && !stA0['$instOf_javax_lang_model_element_Element']) vm.java_lang_Class(false).castEx(stA0, 'javax.lang.model.element.Element');
var lcA8 = stA0;
var stA0 = invoker.getKind__Ljavax_lang_model_element_ElementKind_2(lcA8);
if ((stA0) === ((refs_javax_lang_model_element_ElementKind || (refs_javax_lang_model_element_ElementKind = vm.javax_lang_model_element_ElementKind(false)))['_METHOD']())) { gt = 65; break IF; }
{ gt = 0; continue X_27; }
    }
    X_65: for (;;) { IF: if (gt <= 65) {

if (lcA8 !== null && !lcA8['$instOf_javax_lang_model_element_ExecutableElement']) vm.java_lang_Class(false).castEx(lcA8, 'javax.lang.model.element.ExecutableElement');
var lcA9 = lcA8;
var stA0 = invoker.getAnnotation__Ljava_lang_annotation_Annotation_2Ljava_lang_Class_2(lcA9,(refs_net_java_html_json_Function || (refs_net_java_html_json_Function = net_java_html_json_Function(false))).constructor.$class);
if (stA0 !== null && !stA0['$instOf_net_java_html_json_Function']) vm.java_lang_Class(false).castEx(stA0, 'net.java.html.json.Function');
var lcA10 = stA0;
if ((lcA10) !== null) { gt = 95; break IF; }
{ gt = 0; continue X_27; }
    }
    X_95: for (;;) { IF: if (gt <= 95) {

if ((lcI6) != 0) { gt = 129; break IF; }
var stA0 = invoker.getModifiers__Ljava_util_Set_2(lcA9);
var stI0 = invoker.contains__ZLjava_lang_Object_2(stA0,(refs_javax_lang_model_element_Modifier || (refs_javax_lang_model_element_Modifier = vm.javax_lang_model_element_Modifier(false)))['_STATIC']());
if ((stI0) != 0) { gt = 129; break IF; }
c.error__VLjava_lang_String_2Ljavax_lang_model_element_Element_2.call(lcA0, "@OnFunction method needs to be static", lcA9);
return 0;
    }
    X_129: for (;;) { IF: if (gt <= 129) {

var stA0 = invoker.getModifiers__Ljava_util_Set_2(lcA9);
var stI0 = invoker.contains__ZLjava_lang_Object_2(stA0,(refs_javax_lang_model_element_Modifier || (refs_javax_lang_model_element_Modifier = vm.javax_lang_model_element_Modifier(false)))['_PRIVATE']());
if ((stI0) == 0) { gt = 158; break IF; }
c.error__VLjava_lang_String_2Ljavax_lang_model_element_Element_2.call(lcA0, "@OnFunction method cannot be private", lcA9);
return 0;
    }
    X_158: for (;;) { IF: if (gt <= 158) {

var stA0 = invoker.getReturnType__Ljavax_lang_model_type_TypeMirror_2(lcA9);
var stA0 = invoker.getKind__Ljavax_lang_model_type_TypeKind_2(stA0);
if ((stA0) === ((refs_javax_lang_model_type_TypeKind || (refs_javax_lang_model_type_TypeKind = vm.javax_lang_model_type_TypeKind(false)))['_VOID']())) { gt = 187; break IF; }
c.error__VLjava_lang_String_2Ljavax_lang_model_element_Element_2.call(lcA0, "@OnFunction method should return void", lcA9);
return 0;
    }
    X_187: for (;;) { IF: if (gt <= 187) {

var stA0 = invoker.getSimpleName__Ljavax_lang_model_element_Name_2(lcA9);
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
var lcA11 = stA0;
var stI0 = invoker.add__ZLjava_lang_Object_2(lcA5,lcA11);
var stI0 = invoker.add__ZLjava_lang_Object_2(lcA5,lcA9);
{ gt = 0; continue X_27; }
    }
    X_222: for (;;) { IF: if (gt <= 222) {

return 1;

    }
}}}}}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.generateOnChange__ZLjavax_lang_model_element_Element_2Ljava_util_Map_2_3Lorg_netbeans_html_json_impl_ModelProcessor$Prprt_2Ljava_lang_String_2Ljava_util_Map_2 = function(lcA1, lcA2, lcA3, lcA4, lcA5) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = invoker.getAnnotation__Ljava_lang_annotation_Annotation_2Ljava_lang_Class_2(lcA1,(refs_net_java_html_json_Model || (refs_net_java_html_json_Model = net_java_html_json_Model(false))).constructor.$class);
if (stA0 !== null && !stA0['$instOf_net_java_html_json_Model']) vm.java_lang_Class(false).castEx(stA0, 'net.java.html.json.Model');
var stI0 = invoker.instance__Z(stA0);
var lcI6 = stI0;
var stA0 = invoker.getEnclosedElements__Ljava_util_List_2(lcA1);
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA7 = stA0;
    }
    X_31: for (;;) { IF: if (gt <= 31) {

var stI0 = invoker.hasNext__Z(lcA7);
if ((stI0) == 0) { gt = 551; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA7);
if (stA0 !== null && !stA0['$instOf_javax_lang_model_element_Element']) vm.java_lang_Class(false).castEx(stA0, 'javax.lang.model.element.Element');
var lcA8 = stA0;
var stA0 = invoker.getKind__Ljavax_lang_model_element_ElementKind_2(lcA8);
if ((stA0) === ((refs_javax_lang_model_element_ElementKind || (refs_javax_lang_model_element_ElementKind = vm.javax_lang_model_element_ElementKind(false)))['_METHOD']())) { gt = 69; break IF; }
{ gt = 0; continue X_31; }
    }
    X_69: for (;;) { IF: if (gt <= 69) {

if (lcA8 !== null && !lcA8['$instOf_javax_lang_model_element_ExecutableElement']) vm.java_lang_Class(false).castEx(lcA8, 'javax.lang.model.element.ExecutableElement');
var lcA9 = lcA8;
var stA0 = invoker.getAnnotation__Ljava_lang_annotation_Annotation_2Ljava_lang_Class_2(lcA9,(refs_net_java_html_json_OnPropertyChange || (refs_net_java_html_json_OnPropertyChange = net_java_html_json_OnPropertyChange(false))).constructor.$class);
if (stA0 !== null && !stA0['$instOf_net_java_html_json_OnPropertyChange']) vm.java_lang_Class(false).castEx(stA0, 'net.java.html.json.OnPropertyChange');
var lcA10 = stA0;
if ((lcA10) !== null) { gt = 99; break IF; }
{ gt = 0; continue X_31; }
    }
    X_99: for (;;) { IF: if (gt <= 99) {

var stA0 = invoker.value___3Ljava_lang_String_2(lcA10);
var lcA11 = stA0;
var lcI12 = (lcA11).length;
var lcI13 = 0;
    }
    X_116: for (;;) { IF: if (gt <= 116) {

if ((lcI13) >= (lcI12)) { gt = 193; break IF; }
var lcA14 = (lcA11[lcI13] || Array.at(lcA11, lcI13));
var stA0 = c.findPrprt__Lorg_netbeans_html_json_impl_ModelProcessor$Prprt_2_3Lorg_netbeans_html_json_impl_ModelProcessor$Prprt_2Ljava_lang_String_2(lcA3, lcA14);
if ((stA0) !== null) { gt = 187; break IF; }
var stA0 = c.findDerivedFrom__Ljava_util_Collection_2Ljava_util_Map_2Ljava_lang_String_2(lcA2, lcA14);
var stI0 = invoker.isEmpty__Z(stA0);
if ((stI0) == 0) { gt = 187; break IF; }
var stA0 = lcA0;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"No Prprt named '");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA14);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"' in the model");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
c.error__VLjava_lang_String_2Ljavax_lang_model_element_Element_2.call(stA0, stA1, lcA1);
return 0;
    }
    X_187: for (;;) { IF: if (gt <= 187) {
lcI13++;
{ gt = 0; continue X_116; }
    }
    X_193: for (;;) { IF: if (gt <= 193) {

if ((lcI6) != 0) { gt = 227; break IF; }
var stA0 = invoker.getModifiers__Ljava_util_Set_2(lcA9);
var stI0 = invoker.contains__ZLjava_lang_Object_2(stA0,(refs_javax_lang_model_element_Modifier || (refs_javax_lang_model_element_Modifier = vm.javax_lang_model_element_Modifier(false)))['_STATIC']());
if ((stI0) != 0) { gt = 227; break IF; }
c.error__VLjava_lang_String_2Ljavax_lang_model_element_Element_2.call(lcA0, "@OnPrprtChange method needs to be static", lcA9);
return 0;
    }
    X_227: for (;;) { IF: if (gt <= 227) {

var stA0 = invoker.getModifiers__Ljava_util_Set_2(lcA9);
var stI0 = invoker.contains__ZLjava_lang_Object_2(stA0,(refs_javax_lang_model_element_Modifier || (refs_javax_lang_model_element_Modifier = vm.javax_lang_model_element_Modifier(false)))['_PRIVATE']());
if ((stI0) == 0) { gt = 256; break IF; }
c.error__VLjava_lang_String_2Ljavax_lang_model_element_Element_2.call(lcA0, "@OnPrprtChange method cannot be private", lcA9);
return 0;
    }
    X_256: for (;;) { IF: if (gt <= 256) {

var stA0 = invoker.getReturnType__Ljavax_lang_model_type_TypeMirror_2(lcA9);
var stA0 = invoker.getKind__Ljavax_lang_model_type_TypeKind_2(stA0);
if ((stA0) === ((refs_javax_lang_model_type_TypeKind || (refs_javax_lang_model_type_TypeKind = vm.javax_lang_model_type_TypeKind(false)))['_VOID']())) { gt = 285; break IF; }
c.error__VLjava_lang_String_2Ljavax_lang_model_element_Element_2.call(lcA0, "@OnPrprtChange method should return void", lcA9);
return 0;
    }
    X_285: for (;;) { IF: if (gt <= 285) {

var stA0 = invoker.getSimpleName__Ljavax_lang_model_element_Name_2(lcA9);
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
var lcA11 = stA0;
var stA0 = invoker.value___3Ljava_lang_String_2(lcA10);
var lcA12 = stA0;
var lcI13 = (lcA12).length;
var lcI14 = 0;
    }
    X_314: for (;;) { IF: if (gt <= 314) {

if ((lcI14) >= (lcI13)) { gt = 548; break IF; }
var lcA15 = (lcA12[lcI14] || Array.at(lcA12, lcI14));
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var lcA16 = stA0;
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA16,"  ");
var stA1 = c.inPckName__Ljava_lang_String_2Ljavax_lang_model_element_Element_2Z.call(lcA0, lcA1, lcI6);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,".");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,lcA11);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"(");
var stA0 = lcA16;var stA1 = c.wrapPropName__Ljava_lang_CharSequence_2Ljavax_lang_model_element_ExecutableElement_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2.call(lcA0, lcA9, lcA4, "name", lcA15);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_CharSequence_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA16,");\n");
var stA0 = invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2(lcA5,lcA15);
if (stA0 !== null && !stA0['$instOf_java_util_Collection']) vm.java_lang_Class(false).castEx(stA0, 'java.util.Collection');
var lcA17 = stA0;
if ((lcA17) !== null) { gt = 438; break IF; }
var stA0 = new vm.java_util_ArrayList;
(refs_java_util_ArrayList || (refs_java_util_ArrayList = vm.java_util_ArrayList(false))).constructor['cons__V'].call(stA0);
var lcA17 = stA0;
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA5,lcA15, lcA17);
    }
    X_438: for (;;) { IF: if (gt <= 438) {

var stA0 = lcA17;var stA1 = invoker.toString__Ljava_lang_String_2(lcA16);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,stA1);
var stA0 = c.findDerivedFrom__Ljava_util_Collection_2Ljava_util_Map_2Ljava_lang_String_2(lcA2, lcA15);
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA18 = stA0;
    }
    X_464: for (;;) { IF: if (gt <= 464) {

var stI0 = invoker.hasNext__Z(lcA18);
if ((stI0) == 0) { gt = 542; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA18);
if (stA0 !== null && !stA0['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA0, 'java.lang.String');
var lcA19 = stA0;
var stA0 = invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2(lcA5,lcA19);
if (stA0 !== null && !stA0['$instOf_java_util_Collection']) vm.java_lang_Class(false).castEx(stA0, 'java.util.Collection');
var lcA17 = stA0;
if ((lcA17) !== null) { gt = 526; break IF; }
var stA0 = new vm.java_util_ArrayList;
(refs_java_util_ArrayList || (refs_java_util_ArrayList = vm.java_util_ArrayList(false))).constructor['cons__V'].call(stA0);
var lcA17 = stA0;
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA5,lcA19, lcA17);
    }
    X_526: for (;;) { IF: if (gt <= 526) {

var stA0 = lcA17;var stA1 = invoker.toString__Ljava_lang_String_2(lcA16);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,stA1);
{ gt = 0; continue X_464; }
    }
    X_542: for (;;) { IF: if (gt <= 542) {
lcI14++;
{ gt = 0; continue X_314; }
    }
    X_548: for (;;) { IF: if (gt <= 548) {
{ gt = 0; continue X_31; }
    }
    X_551: for (;;) { IF: if (gt <= 551) {

return 1;

    }
}}}}}}}}}}}}}}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.generateOperation__ZLjavax_lang_model_element_Element_2Ljava_io_StringWriter_2Ljava_lang_String_2Ljava_util_List_2Ljava_util_List_2 = function(lcA1, lcA2, lcA3, lcA4, lcA5) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = invoker.getTypeUtils__Ljavax_lang_model_util_Types_2(c['_processingEnv'].call(lcA0));
var lcA6 = stA0;
var stA0 = invoker.getAnnotation__Ljava_lang_annotation_Annotation_2Ljava_lang_Class_2(lcA1,(refs_net_java_html_json_Model || (refs_net_java_html_json_Model = net_java_html_json_Model(false))).constructor.$class);
if (stA0 !== null && !stA0['$instOf_net_java_html_json_Model']) vm.java_lang_Class(false).castEx(stA0, 'net.java.html.json.Model');
var stI0 = invoker.instance__Z(stA0);
var lcI7 = stI0;
var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA4);
var lcA8 = stA0;
    }
    X_38: for (;;) { IF: if (gt <= 38) {

var stI0 = invoker.hasNext__Z(lcA8);
if ((stI0) == 0) { gt = 887; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA8);
if (stA0 !== null && !stA0['$instOf_javax_lang_model_element_Element']) vm.java_lang_Class(false).castEx(stA0, 'javax.lang.model.element.Element');
var lcA9 = stA0;
var stA0 = invoker.getKind__Ljavax_lang_model_element_ElementKind_2(lcA9);
if ((stA0) === ((refs_javax_lang_model_element_ElementKind || (refs_javax_lang_model_element_ElementKind = vm.javax_lang_model_element_ElementKind(false)))['_METHOD']())) { gt = 76; break IF; }
{ gt = 0; continue X_38; }
    }
    X_76: for (;;) { IF: if (gt <= 76) {

if (lcA9 !== null && !lcA9['$instOf_javax_lang_model_element_ExecutableElement']) vm.java_lang_Class(false).castEx(lcA9, 'javax.lang.model.element.ExecutableElement');
var lcA10 = lcA9;
var stA0 = invoker.getAnnotation__Ljava_lang_annotation_Annotation_2Ljava_lang_Class_2(lcA10,(refs_net_java_html_json_ModelOperation || (refs_net_java_html_json_ModelOperation = net_java_html_json_ModelOperation(false))).constructor.$class);
if (stA0 !== null && !stA0['$instOf_net_java_html_json_ModelOperation']) vm.java_lang_Class(false).castEx(stA0, 'net.java.html.json.ModelOperation');
var lcA11 = stA0;
if ((lcA11) !== null) { gt = 106; break IF; }
{ gt = 0; continue X_38; }
    }
    X_106: for (;;) { IF: if (gt <= 106) {

if ((lcI7) != 0) { gt = 140; break IF; }
var stA0 = invoker.getModifiers__Ljava_util_Set_2(lcA10);
var stI0 = invoker.contains__ZLjava_lang_Object_2(stA0,(refs_javax_lang_model_element_Modifier || (refs_javax_lang_model_element_Modifier = vm.javax_lang_model_element_Modifier(false)))['_STATIC']());
if ((stI0) != 0) { gt = 140; break IF; }
c.error__VLjava_lang_String_2Ljavax_lang_model_element_Element_2.call(lcA0, "@ModelOperation method needs to be static", lcA10);
return 0;
    }
    X_140: for (;;) { IF: if (gt <= 140) {

var stA0 = invoker.getModifiers__Ljava_util_Set_2(lcA10);
var stI0 = invoker.contains__ZLjava_lang_Object_2(stA0,(refs_javax_lang_model_element_Modifier || (refs_javax_lang_model_element_Modifier = vm.javax_lang_model_element_Modifier(false)))['_PRIVATE']());
if ((stI0) == 0) { gt = 169; break IF; }
c.error__VLjava_lang_String_2Ljavax_lang_model_element_Element_2.call(lcA0, "@ModelOperation method cannot be private", lcA10);
return 0;
    }
    X_169: for (;;) { IF: if (gt <= 169) {

var stA0 = invoker.getReturnType__Ljavax_lang_model_type_TypeMirror_2(lcA10);
var stA0 = invoker.getKind__Ljavax_lang_model_type_TypeKind_2(stA0);
if ((stA0) === ((refs_javax_lang_model_type_TypeKind || (refs_javax_lang_model_type_TypeKind = vm.javax_lang_model_type_TypeKind(false)))['_VOID']())) { gt = 198; break IF; }
c.error__VLjava_lang_String_2Ljavax_lang_model_element_Element_2.call(lcA0, "@ModelOperation method should return void", lcA10);
return 0;
    }
    X_198: for (;;) { IF: if (gt <= 198) {
var stA0 = new vm.java_util_ArrayList;
(refs_java_util_ArrayList || (refs_java_util_ArrayList = vm.java_util_ArrayList(false))).constructor['cons__V'].call(stA0);
var lcA12 = stA0;
var stA0 = lcA2;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"  /** @see ");
var stA2 = invoker.getSimpleName__Ljavax_lang_model_element_Name_2(lcA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2(stA1,stA2);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"#");
var stA2 = invoker.getSimpleName__Ljavax_lang_model_element_Name_2(lcA9);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2(stA1,stA2);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1," */\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(stA0,stA1);
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(lcA2,"  public void ");
var stA1 = invoker.getSimpleName__Ljavax_lang_model_element_Name_2(lcA9);
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(stA0,stA1);
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(stA0,"(");
var lcA13 = "";
var lcI14 = 1;
var stA0 = invoker.getParameters__Ljava_util_List_2(lcA10);
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA15 = stA0;
    }
    X_303: for (;;) { IF: if (gt <= 303) {

var stI0 = invoker.hasNext__Z(lcA15);
if ((stI0) == 0) { gt = 562; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA15);
if (stA0 !== null && !stA0['$instOf_javax_lang_model_element_VariableElement']) vm.java_lang_Class(false).castEx(stA0, 'javax.lang.model.element.VariableElement');
var lcA16 = stA0;
var stA0 = invoker.asType__Ljavax_lang_model_type_TypeMirror_2(lcA16);
var lcA17 = stA0;
var stA0 = invoker.getKind__Ljavax_lang_model_type_TypeKind_2(lcA17);
if ((stA0) !== ((refs_javax_lang_model_type_TypeKind || (refs_javax_lang_model_type_TypeKind = vm.javax_lang_model_type_TypeKind(false)))['_DECLARED']())) { gt = 367; break IF; }
if (lcA17 !== null && !lcA17['$instOf_javax_lang_model_type_DeclaredType']) vm.java_lang_Class(false).castEx(lcA17, 'javax.lang.model.type.DeclaredType');
var stA0 = invoker.asElement__Ljavax_lang_model_element_Element_2(lcA17);
var stA0 = invoker.getSimpleName__Ljavax_lang_model_element_Name_2(stA0);
var lcA18 = stA0;
{ gt = 376; break IF; }
    }
    X_367: for (;;) { IF: if (gt <= 367) {

var stA0 = invoker.toString__Ljava_lang_String_2(lcA17);
var lcA18 = stA0;
    }
    X_376: for (;;) { IF: if (gt <= 376) {

if ((lcI14) == 0) { gt = 401; break IF; }
var stA0 = invoker.toString__Ljava_lang_String_2(lcA18);
var stI0 = invoker.equals__ZLjava_lang_Object_2(stA0,lcA3);
if ((stI0) == 0) { gt = 401; break IF; }
var lcI14 = 0;
{ gt = 559; break IF; }
    }
    X_401: for (;;) { IF: if (gt <= 401) {

if ((lcI14) == 0) { gt = 434; break IF; }
var stA0 = lcA0;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"First parameter of @ModelOperation method must be ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA3);
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
c.error__VLjava_lang_String_2Ljavax_lang_model_element_Element_2.call(stA0, stA1, lcA9);
return 0;
    }
    X_434: for (;;) { IF: if (gt <= 434) {

var stA0 = invoker.asType__Ljavax_lang_model_type_TypeMirror_2(lcA16);
var stA0 = invoker.getKind__Ljavax_lang_model_type_TypeKind_2(stA0);
if ((stA0) !== ((refs_javax_lang_model_type_TypeKind || (refs_javax_lang_model_type_TypeKind = vm.javax_lang_model_type_TypeKind(false)))['_ARRAY']())) { gt = 492; break IF; }
var stA0 = lcA12;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"(Object) ");
var stA2 = invoker.getSimpleName__Ljavax_lang_model_element_Name_2(lcA16);
var stA2 = invoker.toString__Ljava_lang_String_2(stA2);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,stA2);
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,stA1);
{ gt = 510; break IF; }
    }
    X_492: for (;;) { IF: if (gt <= 492) {

var stA0 = lcA12;var stA1 = invoker.getSimpleName__Ljavax_lang_model_element_Name_2(lcA16);
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,stA1);
    }
    X_510: for (;;) { IF: if (gt <= 510) {

var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(lcA2,lcA13);
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(stA0,"final ");
var stA0 = lcA2;var stA1 = invoker.asType__Ljavax_lang_model_type_TypeMirror_2(lcA16);
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(stA0,stA1);
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(stA0," ");
var stA0 = lcA2;var stA1 = invoker.toString__Ljava_lang_String_2(lcA16);
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(stA0,stA1);
var lcA13 = ", ";
    }
    X_559: for (;;) { IF: if (gt <= 559) {
{ gt = 0; continue X_303; }
    }
    X_562: for (;;) { IF: if (gt <= 562) {

var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(lcA2,") {\n");
var stI0 = invoker.size__I(lcA5);
var lcI15 = __div32(stI0,2);
var stA0 = lcA5;var stA1 = invoker.getSimpleName__Ljavax_lang_model_element_Name_2(lcA9);
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,stA1);
var stA0 = lcA2;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"    proto.runInBrowser(");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2I(stA1,lcI15);
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(stA0,stA1);
var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA12);
var lcA16 = stA0;
    }
    X_633: for (;;) { IF: if (gt <= 633) {

var stI0 = invoker.hasNext__Z(lcA16);
if ((stI0) == 0) { gt = 670; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA16);
if (stA0 !== null && !stA0['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA0, 'java.lang.String');
var lcA17 = stA0;
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(lcA2,", ");
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(stA0,lcA17);
{ gt = 0; continue X_633; }
    }
    X_670: for (;;) { IF: if (gt <= 670) {

var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(lcA2,");\n");
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(lcA2,"  }\n");
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var lcA16 = stA0;
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA16,"{ Object[] arr = (Object[])data; ");
var stA0 = lcA16;var stA1 = c.inPckName__Ljava_lang_String_2Ljavax_lang_model_element_Element_2Z.call(lcA0, lcA1, 1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,".");
var stA1 = invoker.getSimpleName__Ljavax_lang_model_element_Name_2(lcA9);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_CharSequence_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"(");
var lcI17 = 0;
var stA0 = invoker.getParameters__Ljava_util_List_2(lcA10);
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA18 = stA0;
    }
    X_751: for (;;) { IF: if (gt <= 751) {

var stI0 = invoker.hasNext__Z(lcA18);
if ((stI0) == 0) { gt = 862; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA18);
if (stA0 !== null && !stA0['$instOf_javax_lang_model_element_VariableElement']) vm.java_lang_Class(false).castEx(stA0, 'javax.lang.model.element.VariableElement');
var lcA19 = stA0;
var stI0 = lcI17;lcI17++;
if ((stI0) != 0) { gt = 792; break IF; }
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA16,"model");
{ gt = 0; continue X_751; }
    }
    X_792: for (;;) { IF: if (gt <= 792) {

var stA0 = invoker.asType__Ljavax_lang_model_type_TypeMirror_2(lcA19);
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
var lcA20 = stA0;
var stA0 = c.findBoxedType__Ljava_lang_String_2Ljava_lang_String_2(lcA20);
var lcA21 = stA0;
if ((lcA21) === null) { gt = 822; break IF; }
var lcA20 = lcA21;
    }
    X_822: for (;;) { IF: if (gt <= 822) {

var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA16,", ");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"(");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,lcA20);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,")arr[");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2I(stA0,(((lcI17) - (2)) | 0));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"]");
{ gt = 0; continue X_751; }
    }
    X_862: for (;;) { IF: if (gt <= 862) {

var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA16,"); }");
var stA0 = lcA5;var stA1 = invoker.toString__Ljava_lang_String_2(lcA16);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,stA1);
{ gt = 0; continue X_38; }
    }
    X_887: for (;;) { IF: if (gt <= 887) {

return 1;

    }
}}}}}}}}}}}}}}}}}}}}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.generateReceive__ZLjavax_lang_model_element_Element_2Ljava_io_StringWriter_2Ljava_lang_String_2Ljava_util_List_2Ljava_lang_StringBuilder_2 = function(lcA1, lcA2, lcA3, lcA4, lcA5) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = c.generateReceiveImpl__ZLjavax_lang_model_element_Element_2Ljava_io_StringWriter_2Ljava_lang_String_2Ljava_util_List_2Ljava_lang_StringBuilder_2.call(lcA0, lcA1, lcA2, lcA3, lcA4, lcA5);
var lcI6 = stI0;
if ((lcI6) != 0) { gt = 24; break IF; }
invoker.setLength__VI(lcA5,0);
    }
    X_24: for (;;) { IF: if (gt <= 24) {

return lcI6;

    }
}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.generateReceiveImpl__ZLjavax_lang_model_element_Element_2Ljava_io_StringWriter_2Ljava_lang_String_2Ljava_util_List_2Ljava_lang_StringBuilder_2 = function(lcA1, lcA2, lcA3, lcA4, lcA5) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA5,"  @Override public void onMessage(");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,lcA3);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0," model, int index, int type, Object data, Object[] params) {\n");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA5,"    switch (index) {\n");
var lcI6 = 0;
var lcI7 = 1;
var stA0 = invoker.getAnnotation__Ljava_lang_annotation_Annotation_2Ljava_lang_Class_2(lcA1,(refs_net_java_html_json_Model || (refs_net_java_html_json_Model = net_java_html_json_Model(false))).constructor.$class);
if (stA0 !== null && !stA0['$instOf_net_java_html_json_Model']) vm.java_lang_Class(false).castEx(stA0, 'net.java.html.json.Model');
var stI0 = invoker.instance__Z(stA0);
var lcI8 = stI0;
var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA4);
var lcA9 = stA0;
    }
    X_61: for (;;) { IF: if (gt <= 61) {

var stI0 = invoker.hasNext__Z(lcA9);
if ((stI0) == 0) { gt = 1713; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA9);
if (stA0 !== null && !stA0['$instOf_javax_lang_model_element_Element']) vm.java_lang_Class(false).castEx(stA0, 'javax.lang.model.element.Element');
var lcA10 = stA0;
var stA0 = invoker.getKind__Ljavax_lang_model_element_ElementKind_2(lcA10);
if ((stA0) === ((refs_javax_lang_model_element_ElementKind || (refs_javax_lang_model_element_ElementKind = vm.javax_lang_model_element_ElementKind(false)))['_METHOD']())) { gt = 99; break IF; }
{ gt = 0; continue X_61; }
    }
    X_99: for (;;) { IF: if (gt <= 99) {

if (lcA10 !== null && !lcA10['$instOf_javax_lang_model_element_ExecutableElement']) vm.java_lang_Class(false).castEx(lcA10, 'javax.lang.model.element.ExecutableElement');
var lcA11 = lcA10;
var stA0 = invoker.getAnnotation__Ljava_lang_annotation_Annotation_2Ljava_lang_Class_2(lcA11,(refs_net_java_html_json_OnReceive || (refs_net_java_html_json_OnReceive = net_java_html_json_OnReceive(false))).constructor.$class);
if (stA0 !== null && !stA0['$instOf_net_java_html_json_OnReceive']) vm.java_lang_Class(false).castEx(stA0, 'net.java.html.json.OnReceive');
var lcA12 = stA0;
if ((lcA12) !== null) { gt = 129; break IF; }
{ gt = 0; continue X_61; }
    }
    X_129: for (;;) { IF: if (gt <= 129) {

if ((lcI8) != 0) { gt = 163; break IF; }
var stA0 = invoker.getModifiers__Ljava_util_Set_2(lcA11);
var stI0 = invoker.contains__ZLjava_lang_Object_2(stA0,(refs_javax_lang_model_element_Modifier || (refs_javax_lang_model_element_Modifier = vm.javax_lang_model_element_Modifier(false)))['_STATIC']());
if ((stI0) != 0) { gt = 163; break IF; }
c.error__VLjava_lang_String_2Ljavax_lang_model_element_Element_2.call(lcA0, "@OnReceive method needs to be static", lcA11);
return 0;
    }
    X_163: for (;;) { IF: if (gt <= 163) {

var stA0 = invoker.getModifiers__Ljava_util_Set_2(lcA11);
var stI0 = invoker.contains__ZLjava_lang_Object_2(stA0,(refs_javax_lang_model_element_Modifier || (refs_javax_lang_model_element_Modifier = vm.javax_lang_model_element_Modifier(false)))['_PRIVATE']());
if ((stI0) == 0) { gt = 192; break IF; }
c.error__VLjava_lang_String_2Ljavax_lang_model_element_Element_2.call(lcA0, "@OnReceive method cannot be private", lcA11);
return 0;
    }
    X_192: for (;;) { IF: if (gt <= 192) {

var stA0 = invoker.getReturnType__Ljavax_lang_model_type_TypeMirror_2(lcA11);
var stA0 = invoker.getKind__Ljavax_lang_model_type_TypeKind_2(stA0);
if ((stA0) === ((refs_javax_lang_model_type_TypeKind || (refs_javax_lang_model_type_TypeKind = vm.javax_lang_model_type_TypeKind(false)))['_VOID']())) { gt = 221; break IF; }
c.error__VLjava_lang_String_2Ljavax_lang_model_element_Element_2.call(lcA0, "@OnReceive method should return void", lcA11);
return 0;
    }
    X_221: for (;;) { IF: if (gt <= 221) {

var stA0 = invoker.jsonp__Ljava_lang_String_2(lcA12);
var stI0 = invoker.isEmpty__Z(stA0);
if ((stI0) != 0) { gt = 259; break IF; }
var stA0 = "GET";var stA1 = invoker.method__Ljava_lang_String_2(lcA12);
var stI0 = invoker.equals__ZLjava_lang_Object_2(stA0,stA1);
if ((stI0) != 0) { gt = 259; break IF; }
c.error__VLjava_lang_String_2Ljavax_lang_model_element_Element_2.call(lcA0, "JSONP works only with GET transport method", lcA11);
    }
    X_259: for (;;) { IF: if (gt <= 259) {

var stA0 = c.findDataSpecified__Ljava_lang_String_2Ljavax_lang_model_element_ExecutableElement_2Lnet_java_html_json_OnReceive_2.call(lcA0, lcA11, lcA12);
var lcA13 = stA0;
var stA0 = "PUT";var stA1 = invoker.method__Ljava_lang_String_2(lcA12);
var stI0 = invoker.equals__ZLjava_lang_Object_2(stA0,stA1);
if ((stI0) == 0) { gt = 301; break IF; }
if ((lcA13) !== null) { gt = 301; break IF; }
c.error__VLjava_lang_String_2Ljavax_lang_model_element_Element_2.call(lcA0, "PUT method needs to specify a data() class", lcA11);
return 0;
    }
    X_301: for (;;) { IF: if (gt <= 301) {

var stA0 = "POST";var stA1 = invoker.method__Ljava_lang_String_2(lcA12);
var stI0 = invoker.equals__ZLjava_lang_Object_2(stA0,stA1);
if ((stI0) == 0) { gt = 333; break IF; }
if ((lcA13) !== null) { gt = 333; break IF; }
c.error__VLjava_lang_String_2Ljavax_lang_model_element_Element_2.call(lcA0, "POST method needs to specify a data() class", lcA11);
return 0;
    }
    X_333: for (;;) { IF: if (gt <= 333) {

var stA0 = invoker.getParameters__Ljava_util_List_2(lcA11);
var stI0 = invoker.size__I(stA0);
if ((stI0) >= (2)) { gt = 358; break IF; }
c.error__VLjava_lang_String_2Ljavax_lang_model_element_Element_2.call(lcA0, "@OnReceive method needs at least two parameters", lcA11);
    }
    X_358: for (;;) { IF: if (gt <= 358) {

var stA0 = "WebSocket";var stA1 = invoker.method__Ljava_lang_String_2(lcA12);
var stI0 = invoker.equals__ZLjava_lang_Object_2(stA0,stA1);
var lcI14 = stI0;
if ((lcI14) == 0) { gt = 392; break IF; }
if ((lcA13) !== null) { gt = 392; break IF; }
c.error__VLjava_lang_String_2Ljavax_lang_model_element_Element_2.call(lcA0, "WebSocket method needs to specify a data() class", lcA11);
    }
    X_392: for (;;) { IF: if (gt <= 392) {

var lcI15 = 0;
var stA0 = new vm.java_util_ArrayList;
(refs_java_util_ArrayList || (refs_java_util_ArrayList = vm.java_util_ArrayList(false))).constructor['cons__V'].call(stA0);
var lcA16 = stA0;
var stA0 = new vm.java_util_ArrayList;
(refs_java_util_ArrayList || (refs_java_util_ArrayList = vm.java_util_ArrayList(false))).constructor['cons__V'].call(stA0);
var lcA17 = stA0;
var stA0 = invoker.getParameters__Ljava_util_List_2(lcA11);
var stA0 = invoker.get__Ljava_lang_Object_2I(stA0,0);
if (stA0 !== null && !stA0['$instOf_javax_lang_model_element_VariableElement']) vm.java_lang_Class(false).castEx(stA0, 'javax.lang.model.element.VariableElement');
var stA0 = invoker.asType__Ljavax_lang_model_type_TypeMirror_2(stA0);
var lcA18 = stA0;
var stA0 = invoker.getKind__Ljavax_lang_model_type_TypeKind_2(lcA18);
if ((stA0) !== ((refs_javax_lang_model_type_TypeKind || (refs_javax_lang_model_type_TypeKind = vm.javax_lang_model_type_TypeKind(false)))['_DECLARED']())) { gt = 469; break IF; }
if (lcA18 !== null && !lcA18['$instOf_javax_lang_model_type_DeclaredType']) vm.java_lang_Class(false).castEx(lcA18, 'javax.lang.model.type.DeclaredType');
var stA0 = invoker.asElement__Ljavax_lang_model_element_Element_2(lcA18);
var stA0 = invoker.getSimpleName__Ljavax_lang_model_element_Name_2(stA0);
var lcA19 = stA0;
{ gt = 478; break IF; }
    }
    X_469: for (;;) { IF: if (gt <= 469) {

var stA0 = invoker.toString__Ljava_lang_String_2(lcA18);
var lcA19 = stA0;
    }
    X_478: for (;;) { IF: if (gt <= 478) {

var stA0 = invoker.toString__Ljava_lang_String_2(lcA19);
var stI0 = invoker.equals__ZLjava_lang_Object_2(stA0,lcA3);
if ((stI0) == 0) { gt = 505; break IF; }
var stI0 = invoker.add__ZLjava_lang_Object_2(lcA16,"model");
{ gt = 533; break IF; }
    }
    X_505: for (;;) { IF: if (gt <= 505) {

var stA0 = lcA0;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"First parameter needs to be ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA3);
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
c.error__VLjava_lang_String_2Ljavax_lang_model_element_Element_2.call(stA0, stA1, lcA11);
return 0;
    }
    X_533: for (;;) { IF: if (gt <= 533) {

var stA0 = invoker.getTypeUtils__Ljavax_lang_model_util_Types_2(c['_processingEnv'].call(lcA0));
var lcA19 = stA0;
var stA0 = invoker.getParameters__Ljava_util_List_2(lcA11);
var stA0 = invoker.get__Ljava_lang_Object_2I(stA0,1);
if (stA0 !== null && !stA0['$instOf_javax_lang_model_element_VariableElement']) vm.java_lang_Class(false).castEx(stA0, 'javax.lang.model.element.VariableElement');
var stA0 = invoker.asType__Ljavax_lang_model_type_TypeMirror_2(stA0);
var lcA20 = stA0;
var lcA21 = null;
var stA0 = invoker.erasure__Ljavax_lang_model_type_TypeMirror_2Ljavax_lang_model_type_TypeMirror_2(lcA19,lcA20);
var lcA22 = stA0;
var stI0 = c.isModel__ZLjavax_lang_model_type_TypeMirror_2.call(lcA0, lcA20);
if ((stI0) == 0) { gt = 597; break IF; }
var lcA21 = lcA20;
{ gt = 706; break IF; }
    }
    X_597: for (;;) { IF: if (gt <= 597) {

var stA0 = invoker.getKind__Ljavax_lang_model_type_TypeKind_2(lcA20);
if ((stA0) !== ((refs_javax_lang_model_type_TypeKind || (refs_javax_lang_model_type_TypeKind = vm.javax_lang_model_type_TypeKind(false)))['_ARRAY']())) { gt = 628; break IF; }
if (lcA20 !== null && !lcA20['$instOf_javax_lang_model_type_ArrayType']) vm.java_lang_Class(false).castEx(lcA20, 'javax.lang.model.type.ArrayType');
var stA0 = invoker.getComponentType__Ljavax_lang_model_type_TypeMirror_2(lcA20);
var lcA21 = stA0;
var lcI15 = 1;
{ gt = 706; break IF; }
    }
    X_628: for (;;) { IF: if (gt <= 628) {

var stA0 = "java.util.List";var stA1 = c.fqn__Ljava_lang_String_2Ljavax_lang_model_type_TypeMirror_2Ljavax_lang_model_element_Element_2.call(lcA0, lcA22, lcA11);
var stI0 = invoker.equals__ZLjava_lang_Object_2(stA0,stA1);
if ((stI0) == 0) { gt = 687; break IF; }
if (lcA20 !== null && !lcA20['$instOf_javax_lang_model_type_DeclaredType']) vm.java_lang_Class(false).castEx(lcA20, 'javax.lang.model.type.DeclaredType');
var stA0 = invoker.getTypeArguments__Ljava_util_List_2(lcA20);
var lcA23 = stA0;
var stI0 = invoker.size__I(lcA23);
if ((stI0) != (1)) { gt = 684; break IF; }
var stA0 = invoker.get__Ljava_lang_Object_2I(lcA23,0);
if (stA0 !== null && !stA0['$instOf_javax_lang_model_type_TypeMirror']) vm.java_lang_Class(false).castEx(stA0, 'javax.lang.model.type.TypeMirror');
var lcA21 = stA0;
var lcI15 = 2;
    }
    X_684: for (;;) { IF: if (gt <= 684) {
{ gt = 706; break IF; }
    }
    X_687: for (;;) { IF: if (gt <= 687) {

var stA0 = invoker.toString__Ljava_lang_String_2(lcA20);
var stI0 = invoker.equals__ZLjava_lang_Object_2(stA0,"java.lang.String");
if ((stI0) == 0) { gt = 706; break IF; }
var lcA21 = lcA20;
    }
    X_706: for (;;) { IF: if (gt <= 706) {

if ((lcA21) !== null) { gt = 722; break IF; }
c.error__VLjava_lang_String_2Ljavax_lang_model_element_Element_2.call(lcA0, "Second arguments needs to be a model, String or array or List of models", lcA11);
return 0;
    }
    X_722: for (;;) { IF: if (gt <= 722) {

var stA0 = invoker.toString__Ljava_lang_String_2(lcA21);
var lcA18 = stA0;
if ((lcI15) != (1)) { gt = 751; break IF; }
var stI0 = invoker.add__ZLjava_lang_Object_2(lcA16,"arr");
{ gt = 782; break IF; }
    }
    X_751: for (;;) { IF: if (gt <= 751) {

if ((lcI15) != (2)) { gt = 771; break IF; }
var stI0 = invoker.add__ZLjava_lang_Object_2(lcA16,"net.java.html.json.Models.asList(arr)");
{ gt = 782; break IF; }
    }
    X_771: for (;;) { IF: if (gt <= 771) {

var stI0 = invoker.add__ZLjava_lang_Object_2(lcA16,"arr[0]");
    }
    X_782: for (;;) { IF: if (gt <= 782) {

var stA0 = invoker.getSimpleName__Ljavax_lang_model_element_Name_2(lcA11);
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
var lcA19 = stA0;
var stA0 = c.inPckName__Ljava_lang_String_2Ljavax_lang_model_element_Element_2Z.call(lcA0, lcA1, 0);
var lcA20 = stA0;
if ((lcI14) == 0) { gt = 894; break IF; }
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(lcA2,"  /** Performs WebSocket communication and then calls {@link ");
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(lcA2,lcA20);
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(stA0,"#");
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(stA0,lcA19);
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(stA0,"}.\n");
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(lcA2,"  * Call with <code>null</code> data parameter\n");
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(lcA2,"  * to open the connection (even if not required). Call with non-null data to\n");
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(lcA2,"  * send messages to server. Call again with <code>null</code> data to close the socket.\n");
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(lcA2,"  */\n");
var stA0 = invoker.headers___3Ljava_lang_String_2(lcA12);
if (((stA0).length) <= 0) { gt = 934; break IF; }
c.error__VLjava_lang_String_2Ljavax_lang_model_element_Element_2.call(lcA0, "WebSocket spec does not support headers", lcA11);
{ gt = 934; break IF; }
    }
    X_894: for (;;) { IF: if (gt <= 894) {

var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(lcA2,"  /** Performs network communication and then calls {@link ");
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(lcA2,lcA20);
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(stA0,"#");
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(stA0,lcA19);
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(stA0,"}.\n");
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(lcA2,"  */\n");
    }
    X_934: for (;;) { IF: if (gt <= 934) {

var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(lcA2,"  public void ");
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(stA0,lcA19);
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(stA0,"(");
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var lcA21 = stA0;
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var lcA22 = stA0;
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var lcA23 = stA0;
var lcA24 = null;
var lcA25 = "";
var stA0 = invoker.jsonp__Ljava_lang_String_2(lcA12);
var stI0 = invoker.isEmpty__Z(stA0);
var lcI26 = stI0;
var stA0 = new vm.java_util_LinkedHashSet;
(refs_java_util_LinkedHashSet || (refs_java_util_LinkedHashSet = vm.java_util_LinkedHashSet(false))).constructor['cons__V'].call(stA0);
var lcA27 = stA0;
var stA0 = lcA0;var stA1 = lcA27;var stA2 = lcA11;var stA3 = invoker.url__Ljava_lang_String_2(lcA12);
var stA4 = invoker.jsonp__Ljava_lang_String_2(lcA12);
var stA5 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/StringBuilder;', vm.java_lang_StringBuilder, 2);
Array.at(stA5, 0, lcA21);
Array.at(stA5, 1, lcA22);
c.findParamNames__VLjava_util_Set_2Ljavax_lang_model_element_Element_2Ljava_lang_String_2Ljava_lang_String_2_3Ljava_lang_StringBuilder_2.call(stA0, stA1, stA2, stA3, stA4, stA5);
var stA0 = invoker.headers___3Ljava_lang_String_2(lcA12);
var lcA28 = stA0;
var lcI29 = (lcA28).length;
var lcI30 = 0;
    }
    X_1060: for (;;) { IF: if (gt <= 1060) {

if ((lcI30) >= (lcI29)) { gt = 1139; break IF; }
var lcA31 = (lcA28[lcI30] || Array.at(lcA28, lcI30));
var stI0 = invoker.contains__ZLjava_lang_CharSequence_2(lcA31,"\r");
if ((stI0) != 0) { gt = 1095; break IF; }
var stI0 = invoker.contains__ZLjava_lang_CharSequence_2(lcA31,"\n");
if ((stI0) == 0) { gt = 1104; break IF; }
    }
    X_1095: for (;;) { IF: if (gt <= 1095) {

c.error__VLjava_lang_String_2Ljavax_lang_model_element_Element_2.call(lcA0, "Header line cannot contain line separator", lcA11);
    }
    X_1104: for (;;) { IF: if (gt <= 1104) {

var stA0 = lcA0;var stA1 = lcA27;var stA2 = lcA11;var stA3 = lcA31;var stA4 = null;var stA5 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/StringBuilder;', vm.java_lang_StringBuilder, 1);
Array.at(stA5, 0, lcA23);
c.findParamNames__VLjava_util_Set_2Ljavax_lang_model_element_Element_2Ljava_lang_String_2Ljava_lang_String_2_3Ljava_lang_StringBuilder_2.call(stA0, stA1, stA2, stA3, stA4, stA5);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA23,"+ \"\\r\\n\" +\n");
lcI30++;
{ gt = 0; continue X_1060; }
    }
    X_1139: for (;;) { IF: if (gt <= 1139) {

var stI0 = invoker.length__I(lcA23);
if ((stI0) <= 0) { gt = 1156; break IF; }
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA23,"\"\"");
    }
    X_1156: for (;;) { IF: if (gt <= 1156) {

var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA27);
var lcA28 = stA0;
    }
    X_1165: for (;;) { IF: if (gt <= 1165) {

var stI0 = invoker.hasNext__Z(lcA28);
if ((stI0) == 0) { gt = 1244; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA28);
if (stA0 !== null && !stA0['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA0, 'java.lang.String');
var lcA29 = stA0;
if ((lcI26) != 0) { gt = 1217; break IF; }
var stA0 = lcA29;var stA1 = invoker.jsonp__Ljava_lang_String_2(lcA12);
var stI0 = invoker.equals__ZLjava_lang_Object_2(stA0,stA1);
if ((stI0) == 0) { gt = 1217; break IF; }
var lcI26 = 1;
var lcA24 = lcA29;
{ gt = 0; continue X_1165; }
    }
    X_1217: for (;;) { IF: if (gt <= 1217) {

var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(lcA2,lcA25);
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(lcA2,"String ");
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(stA0,lcA29);
var lcA25 = ", ";
{ gt = 0; continue X_1165; }
    }
    X_1244: for (;;) { IF: if (gt <= 1244) {

if ((lcI26) != 0) { gt = 1303; break IF; }
var stA0 = lcA0;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"Name of jsonp attribute ('");
var stA2 = invoker.jsonp__Ljava_lang_String_2(lcA12);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,stA2);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"') is not used in url attribute '");
var stA2 = invoker.url__Ljava_lang_String_2(lcA12);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,stA2);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"'");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
c.error__VLjava_lang_String_2Ljavax_lang_model_element_Element_2.call(stA0, stA1, lcA11);
    }
    X_1303: for (;;) { IF: if (gt <= 1303) {

if ((lcA13) === null) { gt = 1329; break IF; }
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(lcA2,lcA25);
var stA1 = invoker.toString__Ljava_lang_String_2(lcA13);
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(stA0,stA1);
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(stA0," data");
    }
    X_1329: for (;;) { IF: if (gt <= 1329) {

var lcI28 = 2;
    }
    X_1332: for (;;) { IF: if (gt <= 1332) {

var stI0 = lcI28;var stA1 = invoker.getParameters__Ljava_util_List_2(lcA11);
var stI1 = invoker.size__I(stA1);
if ((stI0) >= (stI1)) { gt = 1527; break IF; }
if ((lcI14) == 0) { gt = 1366; break IF; }
c.error__VLjava_lang_String_2Ljavax_lang_model_element_Element_2.call(lcA0, "@OnReceive(method=\"WebSocket\") can only have two arguments", lcA11);
var lcI7 = 0;
    }
    X_1366: for (;;) { IF: if (gt <= 1366) {

var stA0 = invoker.getParameters__Ljava_util_List_2(lcA11);
var stA0 = invoker.get__Ljava_lang_Object_2I(stA0,lcI28);
if (stA0 !== null && !stA0['$instOf_javax_lang_model_element_VariableElement']) vm.java_lang_Class(false).castEx(stA0, 'javax.lang.model.element.VariableElement');
var lcA29 = stA0;
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(lcA2,lcA25);
var stA1 = invoker.asType__Ljavax_lang_model_type_TypeMirror_2(lcA29);
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(stA0,stA1);
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(stA0," ");
var stA1 = invoker.getSimpleName__Ljavax_lang_model_element_Name_2(lcA29);
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(stA0,stA1);
var stA0 = invoker.asType__Ljavax_lang_model_type_TypeMirror_2(lcA29);
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
var lcA30 = stA0;
var stA0 = c.findBoxedType__Ljava_lang_String_2Ljava_lang_String_2(lcA30);
var lcA31 = stA0;
if ((lcA31) !== null) { gt = 1452; break IF; }
var lcA31 = lcA30;
    }
    X_1452: for (;;) { IF: if (gt <= 1452) {

var stA0 = lcA16;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"(");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA31);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,")params[");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2I(stA1,(((lcI28) - (2)) | 0));
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"]");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,stA1);
var stA0 = lcA17;var stA1 = invoker.getSimpleName__Ljavax_lang_model_element_Name_2(lcA29);
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,stA1);
var lcA25 = ", ";
lcI28++;
{ gt = 0; continue X_1332; }
    }
    X_1527: for (;;) { IF: if (gt <= 1527) {

var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(lcA2,") {\n");
var stA0 = invoker.method__Ljava_lang_String_2(lcA12);
var stI0 = invoker.equals__ZLjava_lang_Object_2(stA0,"WebSocket");
var lcI25 = stI0;
if ((lcI25) == 0) { gt = 1651; break IF; }
var stA0 = lcA0;var stI1 = lcI6;lcI6++;
var stA2 = lcA2;var stA3 = lcA5;var stA4 = lcA12;var stA5 = lcA11;var stA6 = lcA1;var stA7 = lcA3;if ((lcI15) == 0) { gt = 1578; break IF; }
var stI8 = 1;{ gt = 1579; break IF; }
    }
    X_1578: for (;;) { IF: if (gt <= 1578) {

var stI8 = 0;    }
    X_1579: for (;;) { IF: if (gt <= 1579) {

var stI0 = c.generateWSReceiveBody__ZILjava_io_StringWriter_2Ljava_lang_StringBuilder_2Lnet_java_html_json_OnReceive_2Ljavax_lang_model_element_ExecutableElement_2Ljavax_lang_model_element_Element_2Ljava_lang_String_2ZLjava_lang_String_2Ljava_lang_String_2Ljava_util_List_2Ljava_util_List_2Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2.call(stA0, stI1, stA2, stA3, stA4, stA5, stA6, stA7, stI8, lcA18, lcA19, lcA16, lcA17, lcA21, lcA24, lcA22, lcA13, lcA23);
if ((stI0) == 0) { gt = 1605; break IF; }
return 0;
    }
    X_1605: for (;;) { IF: if (gt <= 1605) {

var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(lcA2,"  }\n");
var stA0 = lcA2;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"  private Object ws_");
var stA2 = invoker.getSimpleName__Ljavax_lang_model_element_Name_2(lcA11);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2(stA1,stA2);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,";\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(stA0,stA1);
{ gt = 1710; break IF; }
    }
    X_1651: for (;;) { IF: if (gt <= 1651) {

var stA0 = lcA0;var stI1 = lcI6;lcI6++;
var stA2 = lcA2;var stA3 = lcA5;var stA4 = lcA12;var stA5 = lcA11;var stA6 = lcA1;var stA7 = lcA3;if ((lcI15) == 0) { gt = 1675; break IF; }
var stI8 = 1;{ gt = 1676; break IF; }
    }
    X_1675: for (;;) { IF: if (gt <= 1675) {

var stI8 = 0;    }
    X_1676: for (;;) { IF: if (gt <= 1676) {

var stI0 = c.generateJSONReceiveBody__ZILjava_io_StringWriter_2Ljava_lang_StringBuilder_2Lnet_java_html_json_OnReceive_2Ljavax_lang_model_element_ExecutableElement_2Ljavax_lang_model_element_Element_2Ljava_lang_String_2ZLjava_lang_String_2Ljava_lang_String_2Ljava_util_List_2Ljava_util_List_2Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2.call(stA0, stI1, stA2, stA3, stA4, stA5, stA6, stA7, stI8, lcA18, lcA19, lcA16, lcA17, lcA21, lcA24, lcA22, lcA13, lcA23);
if ((stI0) == 0) { gt = 1703; break IF; }
var lcI7 = 0;
    }
    X_1703: for (;;) { IF: if (gt <= 1703) {

var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(lcA2,"  }\n");
    }
    X_1710: for (;;) { IF: if (gt <= 1710) {
{ gt = 0; continue X_61; }
    }
    X_1713: for (;;) { IF: if (gt <= 1713) {

var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA5,"    }\n");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA5,"    throw new UnsupportedOperationException(\"index: \" + index + \" type: \" + type);\n");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA5,"  }\n");
return lcI7;

    }
}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.generateJSONReceiveBody__ZILjava_io_StringWriter_2Ljava_lang_StringBuilder_2Lnet_java_html_json_OnReceive_2Ljavax_lang_model_element_ExecutableElement_2Ljavax_lang_model_element_Element_2Ljava_lang_String_2ZLjava_lang_String_2Ljava_lang_String_2Ljava_util_List_2Ljava_util_List_2Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2 = function(lcI1, lcA2, lcA3, lcA4, lcA5, lcA6, lcA7, lcI8, lcA9, lcA10, lcA11, lcA12, lcA13, lcA14, lcA15, lcA16, lcA17) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var lcI18 = 0;
var stA0 = lcA3;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"    case ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2I(stA1,lcI1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,": {\n      if (type == 2) { /* on error */\n        Exception ex = (Exception)data;\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.onError__Ljava_lang_String_2(lcA4);
var stI0 = invoker.isEmpty__Z(stA0);
if ((stI0) == 0) { gt = 58; break IF; }
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA3,"        ex.printStackTrace();\n");
{ gt = 222; break IF; }
    }
    X_58: for (;;) { IF: if (gt <= 58) {

if (lcA6 !== null && !lcA6['$instOf_javax_lang_model_element_TypeElement']) vm.java_lang_Class(false).castEx(lcA6, 'javax.lang.model.element.TypeElement');
var stA0 = lcA0;var stA1 = lcA5;var stA2 = lcA6;var stA3 = invoker.onError__Ljava_lang_String_2(lcA4);
var stI0 = c.findOnError__ILjavax_lang_model_element_ExecutableElement_2Ljavax_lang_model_element_TypeElement_2Ljava_lang_String_2Ljava_lang_String_2.call(stA0, stA1, stA2, stA3, lcA7);
var lcI19 = stI0;
if ((lcI19) >= 0) { gt = 89; break IF; }
var stI0 = 1;{ gt = 90; break IF; }
    }
    X_89: for (;;) { IF: if (gt <= 89) {

var stI0 = 0;    }
    X_90: for (;;) { IF: if (gt <= 90) {
var lcI18 = stI0;
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA3,"        ");
var stA1 = invoker.getSimpleName__Ljavax_lang_model_element_Name_2(lcA6);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_CharSequence_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,".");
var stA1 = invoker.onError__Ljava_lang_String_2(lcA4);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"(");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA3,"model, ex");
var lcI20 = 2;
    }
    X_141: for (;;) { IF: if (gt <= 141) {

if ((lcI20) >= (lcI19)) { gt = 215; break IF; }
var stA0 = invoker.get__Ljava_lang_Object_2I(lcA11,lcI20);
if (stA0 !== null && !stA0['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA0, 'java.lang.String');
var lcA21 = stA0;
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA3,", ");
var stI0 = invoker.startsWith__ZLjava_lang_String_2(lcA21,"arr");
if ((stI0) != 0) { gt = 191; break IF; }
var stI0 = invoker.startsWith__ZLjava_lang_String_2(lcA21,"java.util.Array");
if ((stI0) == 0) { gt = 202; break IF; }
    }
    X_191: for (;;) { IF: if (gt <= 191) {

var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA3,"null");
{ gt = 209; break IF; }
    }
    X_202: for (;;) { IF: if (gt <= 202) {

var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA3,lcA21);
    }
    X_209: for (;;) { IF: if (gt <= 209) {
lcI20++;
{ gt = 0; continue X_141; }
    }
    X_215: for (;;) { IF: if (gt <= 215) {

var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA3,");\n");
    }
    X_222: for (;;) { IF: if (gt <= 222) {

var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA3,"        return;\n      } else if (type == 1) {\n        Object[] ev = (Object[])data;\n");
if ((lcI8) == 0) { gt = 281; break IF; }
var stA0 = lcA3;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"        ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA9);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"[] arr = new ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA9);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"[ev.length];\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
{ gt = 313; break IF; }
    }
    X_281: for (;;) { IF: if (gt <= 281) {

var stA0 = lcA3;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"        ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA9);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"[] arr = { null };\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
    }
    X_313: for (;;) { IF: if (gt <= 313) {

var stA0 = lcA3;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"        TYPE.copyJSON(model.proto.getContext(), ev, ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA9);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,".class, arr);\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA3,"        ");
var stA1 = invoker.getSimpleName__Ljavax_lang_model_element_Name_2(lcA6);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_CharSequence_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,".");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,lcA10);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"(");
var lcA19 = "";
var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA11);
var lcA20 = stA0;
    }
    X_391: for (;;) { IF: if (gt <= 391) {

var stI0 = invoker.hasNext__Z(lcA20);
if ((stI0) == 0) { gt = 434; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA20);
if (stA0 !== null && !stA0['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA0, 'java.lang.String');
var lcA21 = stA0;
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA3,lcA19);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA3,lcA21);
var lcA19 = ", ";
{ gt = 0; continue X_391; }
    }
    X_434: for (;;) { IF: if (gt <= 434) {

var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA3,");\n");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA3,"        return;\n      }\n    }\n");
var stA0 = lcA2;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"    proto.loadJSONWithHeaders(");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2I(stA1,lcI1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,",\n        ");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(stA0,stA1);
var stA0 = lcA2;var stI1 = invoker.length__I(lcA17);
if ((stI1) != 0) { gt = 495; break IF; }
var stA1 = "null";{ gt = 497; break IF; }
    }
    X_495: for (;;) { IF: if (gt <= 495) {

var stA1 = lcA17;    }
    X_497: for (;;) { IF: if (gt <= 497) {
if (stA1 !== null && !stA1['$instOf_java_lang_CharSequence']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.CharSequence');
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(stA0,stA1);
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(stA0,",\n        ");
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(lcA2,lcA13);
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(stA0,", ");
if ((lcA14) === null) { gt = 537; break IF; }
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(lcA2,lcA15);
{ gt = 545; break IF; }
    }
    X_537: for (;;) { IF: if (gt <= 537) {

var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(lcA2,"null");
    }
    X_545: for (;;) { IF: if (gt <= 545) {

var stA0 = "GET";var stA1 = invoker.method__Ljava_lang_String_2(lcA4);
var stI0 = invoker.equals__ZLjava_lang_Object_2(stA0,stA1);
if ((stI0) == 0) { gt = 566; break IF; }
if ((lcA16) === null) { gt = 616; break IF; }
    }
    X_566: for (;;) { IF: if (gt <= 566) {

var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(lcA2,", \"");
var stA1 = invoker.method__Ljava_lang_String_2(lcA4);
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(stA0,stA1);
var stA0 = invoker.append__Ljava_io_StringWriter_2C(stA0,(34));
if ((lcA16) === null) { gt = 605; break IF; }
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(lcA2,", data");
{ gt = 624; break IF; }
    }
    X_605: for (;;) { IF: if (gt <= 605) {

var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(lcA2,", null");
{ gt = 624; break IF; }
    }
    X_616: for (;;) { IF: if (gt <= 616) {

var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(lcA2,", null, null");
    }
    X_624: for (;;) { IF: if (gt <= 624) {

var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA12);
var lcA19 = stA0;
    }
    X_633: for (;;) { IF: if (gt <= 633) {

var stI0 = invoker.hasNext__Z(lcA19);
if ((stI0) == 0) { gt = 670; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA19);
if (stA0 !== null && !stA0['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA0, 'java.lang.String');
var lcA20 = stA0;
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(lcA2,", ");
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(stA0,lcA20);
{ gt = 0; continue X_633; }
    }
    X_670: for (;;) { IF: if (gt <= 670) {

var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(lcA2,");\n");
return lcI18;

    }
}}}}}}}}}}}}}}}}}}}}}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.generateWSReceiveBody__ZILjava_io_StringWriter_2Ljava_lang_StringBuilder_2Lnet_java_html_json_OnReceive_2Ljavax_lang_model_element_ExecutableElement_2Ljavax_lang_model_element_Element_2Ljava_lang_String_2ZLjava_lang_String_2Ljava_lang_String_2Ljava_util_List_2Ljava_util_List_2Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2 = function(lcI1, lcA2, lcA3, lcA4, lcA5, lcA6, lcA7, lcI8, lcA9, lcA10, lcA11, lcA12, lcA13, lcA14, lcA15, lcA16, lcA17) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = lcA3;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"    case ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2I(stA1,lcI1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,": {\n      if (type == 0) { /* on open */\n        ");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA1 = c.inPckName__Ljava_lang_String_2Ljavax_lang_model_element_Element_2Z.call(lcA0, lcA6, 1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,".");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,lcA10);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"(");
var lcA18 = "";
var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA11);
var lcA19 = stA0;
    }
    X_69: for (;;) { IF: if (gt <= 69) {

var stI0 = invoker.hasNext__Z(lcA19);
if ((stI0) == 0) { gt = 145; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA19);
if (stA0 !== null && !stA0['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA0, 'java.lang.String');
var lcA20 = stA0;
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA3,lcA18);
var stI0 = invoker.startsWith__ZLjava_lang_String_2(lcA20,"arr");
if ((stI0) != 0) { gt = 120; break IF; }
var stI0 = invoker.startsWith__ZLjava_lang_String_2(lcA20,"net.java.html.json.Models.asList");
if ((stI0) == 0) { gt = 131; break IF; }
    }
    X_120: for (;;) { IF: if (gt <= 120) {

var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA3,"null");
{ gt = 138; break IF; }
    }
    X_131: for (;;) { IF: if (gt <= 131) {

var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA3,lcA20);
    }
    X_138: for (;;) { IF: if (gt <= 138) {

var lcA18 = ", ";
{ gt = 0; continue X_69; }
    }
    X_145: for (;;) { IF: if (gt <= 145) {

var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA3,");\n");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA3,"        return;\n      } else if (type == 2) { /* on error */\n        Exception value = (Exception)data;\n");
var stA0 = invoker.onError__Ljava_lang_String_2(lcA4);
var stI0 = invoker.isEmpty__Z(stA0);
if ((stI0) == 0) { gt = 184; break IF; }
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA3,"        value.printStackTrace();\n");
{ gt = 343; break IF; }
    }
    X_184: for (;;) { IF: if (gt <= 184) {

if (lcA6 !== null && !lcA6['$instOf_javax_lang_model_element_TypeElement']) vm.java_lang_Class(false).castEx(lcA6, 'javax.lang.model.element.TypeElement');
var stA0 = lcA0;var stA1 = lcA5;var stA2 = lcA6;var stA3 = invoker.onError__Ljava_lang_String_2(lcA4);
var stI0 = c.findOnError__ILjavax_lang_model_element_ExecutableElement_2Ljavax_lang_model_element_TypeElement_2Ljava_lang_String_2Ljava_lang_String_2.call(stA0, stA1, stA2, stA3, lcA7);
var lcI18 = stI0;
if ((lcI18) >= 0) { gt = 213; break IF; }
return 1;
    }
    X_213: for (;;) { IF: if (gt <= 213) {

var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA3,"        ");
var stA1 = c.inPckName__Ljava_lang_String_2Ljavax_lang_model_element_Element_2Z.call(lcA0, lcA6, 1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,".");
var stA1 = invoker.onError__Ljava_lang_String_2(lcA4);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"(");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA3,"model, value");
var lcI19 = 2;
    }
    X_262: for (;;) { IF: if (gt <= 262) {

if ((lcI19) >= (lcI18)) { gt = 336; break IF; }
var stA0 = invoker.get__Ljava_lang_Object_2I(lcA11,lcI19);
if (stA0 !== null && !stA0['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA0, 'java.lang.String');
var lcA20 = stA0;
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA3,", ");
var stI0 = invoker.startsWith__ZLjava_lang_String_2(lcA20,"arr");
if ((stI0) != 0) { gt = 312; break IF; }
var stI0 = invoker.startsWith__ZLjava_lang_String_2(lcA20,"java.util.Array");
if ((stI0) == 0) { gt = 323; break IF; }
    }
    X_312: for (;;) { IF: if (gt <= 312) {

var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA3,"null");
{ gt = 330; break IF; }
    }
    X_323: for (;;) { IF: if (gt <= 323) {

var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA3,lcA20);
    }
    X_330: for (;;) { IF: if (gt <= 330) {
lcI19++;
{ gt = 0; continue X_262; }
    }
    X_336: for (;;) { IF: if (gt <= 336) {

var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA3,");\n");
    }
    X_343: for (;;) { IF: if (gt <= 343) {

var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA3,"        return;\n      } else if (type == 1) {\n        Object[] ev = (Object[])data;\n");
if ((lcI8) == 0) { gt = 402; break IF; }
var stA0 = lcA3;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"        ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA9);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"[] arr = new ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA9);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"[ev.length];\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
{ gt = 434; break IF; }
    }
    X_402: for (;;) { IF: if (gt <= 402) {

var stA0 = lcA3;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"        ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA9);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"[] arr = { null };\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
    }
    X_434: for (;;) { IF: if (gt <= 434) {

var stA0 = lcA3;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"        TYPE.copyJSON(model.proto.getContext(), ev, ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA9);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,".class, arr);\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA3,"        ");
var stA1 = c.inPckName__Ljava_lang_String_2Ljavax_lang_model_element_Element_2Z.call(lcA0, lcA6, 1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,".");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,lcA10);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"(");
var lcA18 = "";
var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA11);
var lcA19 = stA0;
    }
    X_512: for (;;) { IF: if (gt <= 512) {

var stI0 = invoker.hasNext__Z(lcA19);
if ((stI0) == 0) { gt = 555; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA19);
if (stA0 !== null && !stA0['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA0, 'java.lang.String');
var lcA20 = stA0;
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA3,lcA18);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA3,lcA20);
var lcA18 = ", ";
{ gt = 0; continue X_512; }
    }
    X_555: for (;;) { IF: if (gt <= 555) {

var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA3,");\n");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA3,"        return;\n      }");
var stA0 = invoker.onError__Ljava_lang_String_2(lcA4);
var stI0 = invoker.isEmpty__Z(stA0);
if ((stI0) != 0) { gt = 645; break IF; }
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA3," else if (type == 3) { /* on close */\n");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA3,"        ");
var stA1 = c.inPckName__Ljava_lang_String_2Ljavax_lang_model_element_Element_2Z.call(lcA0, lcA6, 1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,".");
var stA1 = invoker.onError__Ljava_lang_String_2(lcA4);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"(");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA3,"model, null);\n");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA3,"        return;      }");
    }
    X_645: for (;;) { IF: if (gt <= 645) {

var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA3,"\n");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA3,"    }\n");
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(lcA2,"    if (this.ws_");
var stA1 = invoker.getSimpleName__Ljavax_lang_model_element_Name_2(lcA5);
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(stA0,stA1);
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(stA0," == null) {\n");
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(lcA2,"      this.ws_");
var stA1 = invoker.getSimpleName__Ljavax_lang_model_element_Name_2(lcA5);
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(stA0,stA1);
var stA0 = lcA2;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"= proto.wsOpen(");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2I(stA1,lcI1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,", ");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(stA0,stA1);
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(lcA2,lcA13);
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(stA0,", data);\n");
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(lcA2,"    } else {\n");
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(lcA2,"      proto.wsSend(this.ws_");
var stA1 = invoker.getSimpleName__Ljavax_lang_model_element_Name_2(lcA5);
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(stA0,stA1);
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(stA0,", ");
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(stA0,lcA13);
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(stA0,", data");
var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA12);
var lcA18 = stA0;
    }
    X_795: for (;;) { IF: if (gt <= 795) {

var stI0 = invoker.hasNext__Z(lcA18);
if ((stI0) == 0) { gt = 832; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA18);
if (stA0 !== null && !stA0['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA0, 'java.lang.String');
var lcA19 = stA0;
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(lcA2,", ");
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(stA0,lcA19);
{ gt = 0; continue X_795; }
    }
    X_832: for (;;) { IF: if (gt <= 832) {

var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(lcA2,");\n");
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(lcA2,"    }\n");
return 0;

    }
}}}}}}}}}}}}}}}}}}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.wrapParams__Ljava_lang_CharSequence_2Ljavax_lang_model_element_ExecutableElement_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2 = function(lcA1, lcA2, lcA3, lcA4, lcA5, lcA6) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = invoker.getElementUtils__Ljavax_lang_model_util_Elements_2(c['_processingEnv'].call(lcA0));
var stA0 = invoker.getTypeElement__Ljavax_lang_model_element_TypeElement_2Ljava_lang_CharSequence_2(stA0,"java.lang.String");
var stA0 = invoker.asType__Ljavax_lang_model_type_TypeMirror_2(stA0);
var lcA7 = stA0;
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var lcA8 = stA0;
var lcI9 = 1;
var stA0 = invoker.getParameters__Ljava_util_List_2(lcA1);
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA10 = stA0;
    }
    X_48: for (;;) { IF: if (gt <= 48) {

var stI0 = invoker.hasNext__Z(lcA10);
if ((stI0) == 0) { gt = 955; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA10);
if (stA0 !== null && !stA0['$instOf_javax_lang_model_element_VariableElement']) vm.java_lang_Class(false).castEx(stA0, 'javax.lang.model.element.VariableElement');
var lcA11 = stA0;
if ((lcI9) != 0) { gt = 83; break IF; }
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA8,", ");
    }
    X_83: for (;;) { IF: if (gt <= 83) {

var lcI9 = 0;
var lcA12 = null;
var lcA13 = null;
var lcI14 = 1;
var stA0 = invoker.asType__Ljavax_lang_model_type_TypeMirror_2(lcA11);
if ((stA0) !== (lcA7)) { gt = 168; break IF; }
var stA0 = invoker.getSimpleName__Ljavax_lang_model_element_Name_2(lcA11);
var stI0 = invoker.contentEquals__ZLjava_lang_CharSequence_2(stA0,"id");
if ((stI0) == 0) { gt = 145; break IF; }
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA8,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,lcA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
{ gt = 0; continue X_48; }
    }
    X_145: for (;;) { IF: if (gt <= 145) {
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,lcA4);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,".proto.toString(");
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
var lcA12 = stA0;
    }
    X_168: for (;;) { IF: if (gt <= 168) {

var stA0 = invoker.asType__Ljavax_lang_model_type_TypeMirror_2(lcA11);
var stA0 = invoker.getKind__Ljavax_lang_model_type_TypeKind_2(stA0);
if ((stA0) !== ((refs_javax_lang_model_type_TypeKind || (refs_javax_lang_model_type_TypeKind = vm.javax_lang_model_type_TypeKind(false)))['_DOUBLE']())) { gt = 214; break IF; }
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,lcA4);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,".proto.toNumber(");
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
var lcA12 = stA0;
var lcA13 = ".doubleValue()";
    }
    X_214: for (;;) { IF: if (gt <= 214) {

var stA0 = invoker.asType__Ljavax_lang_model_type_TypeMirror_2(lcA11);
var stA0 = invoker.getKind__Ljavax_lang_model_type_TypeKind_2(stA0);
if ((stA0) !== ((refs_javax_lang_model_type_TypeKind || (refs_javax_lang_model_type_TypeKind = vm.javax_lang_model_type_TypeKind(false)))['_FLOAT']())) { gt = 260; break IF; }
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,lcA4);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,".proto.toNumber(");
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
var lcA12 = stA0;
var lcA13 = ".floatValue()";
    }
    X_260: for (;;) { IF: if (gt <= 260) {

var stA0 = invoker.asType__Ljavax_lang_model_type_TypeMirror_2(lcA11);
var stA0 = invoker.getKind__Ljavax_lang_model_type_TypeKind_2(stA0);
if ((stA0) !== ((refs_javax_lang_model_type_TypeKind || (refs_javax_lang_model_type_TypeKind = vm.javax_lang_model_type_TypeKind(false)))['_INT']())) { gt = 306; break IF; }
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,lcA4);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,".proto.toNumber(");
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
var lcA12 = stA0;
var lcA13 = ".intValue()";
    }
    X_306: for (;;) { IF: if (gt <= 306) {

var stA0 = invoker.asType__Ljavax_lang_model_type_TypeMirror_2(lcA11);
var stA0 = invoker.getKind__Ljavax_lang_model_type_TypeKind_2(stA0);
if ((stA0) !== ((refs_javax_lang_model_type_TypeKind || (refs_javax_lang_model_type_TypeKind = vm.javax_lang_model_type_TypeKind(false)))['_BYTE']())) { gt = 352; break IF; }
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,lcA4);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,".proto.toNumber(");
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
var lcA12 = stA0;
var lcA13 = ".byteValue()";
    }
    X_352: for (;;) { IF: if (gt <= 352) {

var stA0 = invoker.asType__Ljavax_lang_model_type_TypeMirror_2(lcA11);
var stA0 = invoker.getKind__Ljavax_lang_model_type_TypeKind_2(stA0);
if ((stA0) !== ((refs_javax_lang_model_type_TypeKind || (refs_javax_lang_model_type_TypeKind = vm.javax_lang_model_type_TypeKind(false)))['_SHORT']())) { gt = 398; break IF; }
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,lcA4);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,".proto.toNumber(");
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
var lcA12 = stA0;
var lcA13 = ".shortValue()";
    }
    X_398: for (;;) { IF: if (gt <= 398) {

var stA0 = invoker.asType__Ljavax_lang_model_type_TypeMirror_2(lcA11);
var stA0 = invoker.getKind__Ljavax_lang_model_type_TypeKind_2(stA0);
if ((stA0) !== ((refs_javax_lang_model_type_TypeKind || (refs_javax_lang_model_type_TypeKind = vm.javax_lang_model_type_TypeKind(false)))['_LONG']())) { gt = 444; break IF; }
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,lcA4);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,".proto.toNumber(");
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
var lcA12 = stA0;
var lcA13 = ".longValue()";
    }
    X_444: for (;;) { IF: if (gt <= 444) {

var stA0 = invoker.asType__Ljavax_lang_model_type_TypeMirror_2(lcA11);
var stA0 = invoker.getKind__Ljavax_lang_model_type_TypeKind_2(stA0);
if ((stA0) !== ((refs_javax_lang_model_type_TypeKind || (refs_javax_lang_model_type_TypeKind = vm.javax_lang_model_type_TypeKind(false)))['_BOOLEAN']())) { gt = 495; break IF; }
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"\"true\".equals(");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,lcA4);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,".proto.toString(");
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
var lcA12 = stA0;
var lcA13 = ")";
    }
    X_495: for (;;) { IF: if (gt <= 495) {

var stA0 = invoker.asType__Ljavax_lang_model_type_TypeMirror_2(lcA11);
var stA0 = invoker.getKind__Ljavax_lang_model_type_TypeKind_2(stA0);
if ((stA0) !== ((refs_javax_lang_model_type_TypeKind || (refs_javax_lang_model_type_TypeKind = vm.javax_lang_model_type_TypeKind(false)))['_CHAR']())) { gt = 547; break IF; }
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"(char)");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,lcA4);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,".proto.toNumber(");
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
var lcA12 = stA0;
var lcA13 = ".intValue()";
    }
    X_547: for (;;) { IF: if (gt <= 547) {

if ((lcA6) === null) { gt = 624; break IF; }
var stA0 = invoker.getSimpleName__Ljavax_lang_model_element_Name_2(lcA11);
var stI0 = invoker.contentEquals__ZLjava_lang_CharSequence_2(stA0,lcA6);
if ((stI0) == 0) { gt = 624; break IF; }
var stA0 = lcA0;var stA1 = invoker.asType__Ljavax_lang_model_type_TypeMirror_2(lcA11);
var stI0 = c.isModel__ZLjavax_lang_model_type_TypeMirror_2.call(stA0, stA1);
if ((stI0) == 0) { gt = 624; break IF; }
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,lcA4);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,".proto.toModel(");
var stA1 = invoker.asType__Ljavax_lang_model_type_TypeMirror_2(lcA11);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,".class, ");
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
var lcA12 = stA0;
var lcI14 = 0;
    }
    X_624: for (;;) { IF: if (gt <= 624) {

if ((lcA12) === null) { gt = 806; break IF; }
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA8,lcA12);
if ((lcA6) === null) { gt = 684; break IF; }
var stA0 = invoker.getSimpleName__Ljavax_lang_model_element_Name_2(lcA11);
var stI0 = invoker.contentEquals__ZLjava_lang_CharSequence_2(stA0,lcA6);
if ((stI0) == 0) { gt = 684; break IF; }
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA8,lcA6);
if ((lcI14) == 0) { gt = 782; break IF; }
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA8,", null");
{ gt = 782; break IF; }
    }
    X_684: for (;;) { IF: if (gt <= 684) {

if ((lcA5) !== null) { gt = 741; break IF; }
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var lcA15 = stA0;
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA15,"Unexpected string parameter name.");
if ((lcA6) === null) { gt = 731; break IF; }
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA15," Try \"");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,lcA6);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"\"");
    }
    X_731: for (;;) { IF: if (gt <= 731) {

var stA0 = lcA0;var stA1 = invoker.toString__Ljava_lang_String_2(lcA15);
c.error__VLjava_lang_String_2Ljavax_lang_model_element_Element_2.call(stA0, stA1, lcA1);
    }
    X_741: for (;;) { IF: if (gt <= 741) {

var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA8,lcA5);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA8,", \"");
var stA0 = lcA8;var stA1 = invoker.getSimpleName__Ljavax_lang_model_element_Name_2(lcA11);
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA8,"\"");
    }
    X_782: for (;;) { IF: if (gt <= 782) {

var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA8,")");
if ((lcA13) === null) { gt = 0; continue X_48; }
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA8,lcA13);
{ gt = 0; continue X_48; }
    }
    X_806: for (;;) { IF: if (gt <= 806) {

var stA0 = lcA0;var stA1 = invoker.asType__Ljavax_lang_model_type_TypeMirror_2(lcA11);
var stA0 = c.fqn__Ljava_lang_String_2Ljavax_lang_model_type_TypeMirror_2Ljavax_lang_model_element_Element_2.call(stA0, stA1, lcA1);
var lcA15 = stA0;
var stI0 = invoker.lastIndexOf__II(lcA15,(46));
var lcI16 = stI0;
if ((lcI16) < 0) { gt = 845; break IF; }
var stA0 = invoker.substring__Ljava_lang_String_2I(lcA15,(((lcI16) + (1)) | 0));
var lcA15 = stA0;
    }
    X_845: for (;;) { IF: if (gt <= 845) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA15,lcA3);
if ((stI0) == 0) { gt = 865; break IF; }
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA8,lcA4);
{ gt = 0; continue X_48; }
    }
    X_865: for (;;) { IF: if (gt <= 865) {
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var lcA17 = stA0;
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA17,"Argument ");
var stA1 = invoker.getSimpleName__Ljavax_lang_model_element_Name_2(lcA11);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_CharSequence_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0," is not valid. The annotated method can only accept ");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,lcA3);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0," argument");
if ((lcA6) === null) { gt = 934; break IF; }
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA17," or argument named '");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,lcA6);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"'");
    }
    X_934: for (;;) { IF: if (gt <= 934) {

var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA17,".");
var stA0 = lcA0;var stA1 = invoker.toString__Ljava_lang_String_2(lcA17);
c.error__VLjava_lang_String_2Ljavax_lang_model_element_Element_2.call(stA0, stA1, lcA1);
{ gt = 0; continue X_48; }
    }
    X_955: for (;;) { IF: if (gt <= 955) {

return lcA8;

    }
}}}}}}}}}}}}}}}}}}}}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.wrapPropName__Ljava_lang_CharSequence_2Ljavax_lang_model_element_ExecutableElement_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2 = function(lcA1, lcA2, lcA3, lcA4) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = invoker.getElementUtils__Ljavax_lang_model_util_Elements_2(c['_processingEnv'].call(lcA0));
var stA0 = invoker.getTypeElement__Ljavax_lang_model_element_TypeElement_2Ljava_lang_CharSequence_2(stA0,"java.lang.String");
var stA0 = invoker.asType__Ljavax_lang_model_type_TypeMirror_2(stA0);
var lcA5 = stA0;
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var lcA6 = stA0;
var lcI7 = 1;
var stA0 = invoker.getParameters__Ljava_util_List_2(lcA1);
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA8 = stA0;
    }
    X_48: for (;;) { IF: if (gt <= 48) {

var stI0 = invoker.hasNext__Z(lcA8);
if ((stI0) == 0) { gt = 266; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA8);
if (stA0 !== null && !stA0['$instOf_javax_lang_model_element_VariableElement']) vm.java_lang_Class(false).castEx(stA0, 'javax.lang.model.element.VariableElement');
var lcA9 = stA0;
if ((lcI7) != 0) { gt = 83; break IF; }
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA6,", ");
    }
    X_83: for (;;) { IF: if (gt <= 83) {

var lcI7 = 0;
var stA0 = invoker.asType__Ljavax_lang_model_type_TypeMirror_2(lcA9);
if ((stA0) !== (lcA5)) { gt = 173; break IF; }
if ((lcA3) === null) { gt = 139; break IF; }
var stA0 = invoker.getSimpleName__Ljavax_lang_model_element_Name_2(lcA9);
var stI0 = invoker.contentEquals__ZLjava_lang_CharSequence_2(stA0,lcA3);
if ((stI0) == 0) { gt = 139; break IF; }
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA6,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,lcA4);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
{ gt = 0; continue X_48; }
    }
    X_139: for (;;) { IF: if (gt <= 139) {

var stA0 = lcA0;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"Unexpected string parameter name. Try \"");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA3);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"\".");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
c.error__VLjava_lang_String_2Ljavax_lang_model_element_Element_2.call(stA0, stA1, lcA1);
{ gt = 0; continue X_48; }
    }
    X_173: for (;;) { IF: if (gt <= 173) {

var stA0 = lcA0;var stA1 = invoker.asType__Ljavax_lang_model_type_TypeMirror_2(lcA9);
var stA0 = c.fqn__Ljava_lang_String_2Ljavax_lang_model_type_TypeMirror_2Ljavax_lang_model_element_Element_2.call(stA0, stA1, lcA1);
var lcA10 = stA0;
var stI0 = invoker.lastIndexOf__II(lcA10,(46));
var lcI11 = stI0;
if ((lcI11) < 0) { gt = 212; break IF; }
var stA0 = invoker.substring__Ljava_lang_String_2I(lcA10,(((lcI11) + (1)) | 0));
var lcA10 = stA0;
    }
    X_212: for (;;) { IF: if (gt <= 212) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA10,lcA2);
if ((stI0) == 0) { gt = 232; break IF; }
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA6,"model");
{ gt = 0; continue X_48; }
    }
    X_232: for (;;) { IF: if (gt <= 232) {

var stA0 = lcA0;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"@OnPrprtChange method can only accept String or ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA2);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1," arguments");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
c.error__VLjava_lang_String_2Ljavax_lang_model_element_Element_2.call(stA0, stA1, lcA1);
{ gt = 0; continue X_48; }
    }
    X_266: for (;;) { IF: if (gt <= 266) {

return lcA6;

    }
}}}}}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.isModel__ZLjavax_lang_model_type_TypeMirror_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = invoker.getKind__Ljavax_lang_model_type_TypeKind_2(lcA1);
if ((stA0) !== ((refs_javax_lang_model_type_TypeKind || (refs_javax_lang_model_type_TypeKind = vm.javax_lang_model_type_TypeKind(false)))['_ERROR']())) { gt = 14; break IF; }
return 1;
    }
    X_14: for (;;) { IF: if (gt <= 14) {

var stA0 = invoker.getTypeUtils__Ljavax_lang_model_util_Types_2(c['_processingEnv'].call(lcA0));
var stA0 = invoker.asElement__Ljavax_lang_model_element_Element_2Ljavax_lang_model_type_TypeMirror_2(stA0,lcA1);
var lcA2 = stA0;
if ((lcA2) !== null) { gt = 36; break IF; }
return 0;
    }
    X_36: for (;;) { IF: if (gt <= 36) {

var stA0 = invoker.getEnclosedElements__Ljava_util_List_2(lcA2);
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA3 = stA0;
    }
    X_48: for (;;) { IF: if (gt <= 48) {

var stI0 = invoker.hasNext__Z(lcA3);
if ((stI0) == 0) { gt = 126; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA3);
if (stA0 !== null && !stA0['$instOf_javax_lang_model_element_Element']) vm.java_lang_Class(false).castEx(stA0, 'javax.lang.model.element.Element');
var lcA4 = stA0;
var stA0 = invoker.getKind__Ljavax_lang_model_element_ElementKind_2(lcA4);
if ((stA0) !== ((refs_javax_lang_model_element_ElementKind || (refs_javax_lang_model_element_ElementKind = vm.javax_lang_model_element_ElementKind(false)))['_METHOD']())) { gt = 123; break IF; }
if (lcA4 !== null && !lcA4['$instOf_javax_lang_model_element_ExecutableElement']) vm.java_lang_Class(false).castEx(lcA4, 'javax.lang.model.element.ExecutableElement');
var lcA5 = lcA4;
var stA0 = invoker.getParameters__Ljava_util_List_2(lcA5);
var stI0 = invoker.isEmpty__Z(stA0);
if ((stI0) == 0) { gt = 123; break IF; }
var stA0 = invoker.getSimpleName__Ljavax_lang_model_element_Name_2(lcA5);
var stI0 = invoker.contentEquals__ZLjava_lang_CharSequence_2(stA0,"modelFor");
if ((stI0) == 0) { gt = 123; break IF; }
return 1;
    }
    X_123: for (;;) { IF: if (gt <= 123) {
{ gt = 0; continue X_48; }
    }
    X_126: for (;;) { IF: if (gt <= 126) {

var stA0 = invoker.values__Ljava_util_Collection_2(lcA0['fld_org_netbeans_html_json_impl_ModelProcessor_models']);
var stA1 = invoker.getSimpleName__Ljavax_lang_model_element_Name_2(lcA2);
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stI0 = invoker.contains__ZLjava_lang_Object_2(stA0,stA1);
return stI0;

    }
}}}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.writeToString__V_3Lorg_netbeans_html_json_impl_ModelProcessor$Prprt_2Ljava_io_Writer_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.write__VLjava_lang_String_2(lcA2,"  public String toString() {\n");
invoker.write__VLjava_lang_String_2(lcA2,"    StringBuilder sb = new StringBuilder();\n");
invoker.write__VLjava_lang_String_2(lcA2,"    sb.append('{');\n");
var lcA3 = "";
var lcA4 = lcA1;
var lcI5 = (lcA4).length;
var lcI6 = 0;
    }
    X_35: for (;;) { IF: if (gt <= 35) {

if ((lcI6) >= (lcI5)) { gt = 229; break IF; }
var lcA7 = (lcA4[lcI6] || Array.at(lcA4, lcI6));
invoker.write__VLjava_lang_String_2(lcA2,lcA3);
var stA0 = lcA2;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"    sb.append('\"').append(\"");
var stA2 = lcA7.name__Ljava_lang_String_2();
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,stA2);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"\")");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,stA1);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA2,".append('\"').append(\":\");\n");
var stA0 = c.typeName__Ljava_lang_String_2Lorg_netbeans_html_json_impl_ModelProcessor$Prprt_2.call(lcA0, lcA7);
var lcA8 = stA0;
var stA0 = lcA7.name__Ljava_lang_String_2();
var stA1 = lcA8;var stI2 = lcA7.array__Z();
var stA0 = c.toGetSet___3Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Z(stA0, stA1, stI2);
var lcA9 = stA0;
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](true, '[Z', null, 1);
Array.at(stA0, 0, 0);
var lcA10 = stA0;
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](true, '[Z', null, 1);
Array.at(stA0, 0, 0);
var lcA11 = stA0;
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](true, '[Z', null, 1);
Array.at(stA0, 0, 0);
var lcA12 = stA0;
var stA0 = c.checkType__Ljava_lang_String_2Lorg_netbeans_html_json_impl_ModelProcessor$Prprt_2_3Z_3Z_3Z.call(lcA0, lcA7, lcA10, lcA11, lcA12);
if (((lcA10[0] || Array.at(lcA10, 0))) == 0) { gt = 196; break IF; }
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA2,"    sb.append(TYPE.toJSON(thisToNull(this.prop_");
var stA0 = lcA2;var stA1 = lcA7.name__Ljava_lang_String_2();
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,stA1);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,")));\n");
{ gt = 219; break IF; }
    }
    X_196: for (;;) { IF: if (gt <= 196) {

var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA2,"    sb.append(TYPE.toJSON(");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA2,(lcA9[0] || Array.at(lcA9, 0)));
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,"()));\n");
    }
    X_219: for (;;) { IF: if (gt <= 219) {

var lcA3 = "    sb.append(',');\n";
lcI6++;
{ gt = 0; continue X_35; }
    }
    X_229: for (;;) { IF: if (gt <= 229) {

invoker.write__VLjava_lang_String_2(lcA2,"    sb.append('}');\n");
invoker.write__VLjava_lang_String_2(lcA2,"    return sb.toString();\n");
invoker.write__VLjava_lang_String_2(lcA2,"  }\n");
return;

    }
}}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.writeClone__VLjava_lang_String_2_3Lorg_netbeans_html_json_impl_ModelProcessor$Prprt_2Ljava_io_Writer_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = lcA3;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"  public ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1," clone() {\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
invoker.write__VLjava_lang_String_2(stA0,stA1);
invoker.write__VLjava_lang_String_2(lcA3,"    return clone(proto.getContext());\n");
invoker.write__VLjava_lang_String_2(lcA3,"  }\n");
var stA0 = lcA3;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"  private ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1," clone(net.java.html.BrwsrCtx ctx) {\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
invoker.write__VLjava_lang_String_2(stA0,stA1);
var stA0 = lcA3;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"    ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1," ret = new ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"(ctx);\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
invoker.write__VLjava_lang_String_2(stA0,stA1);
var lcA4 = lcA2;
var lcI5 = (lcA4).length;
var lcI6 = 0;
    }
    X_122: for (;;) { IF: if (gt <= 122) {

if ((lcI6) >= (lcI5)) { gt = 394; break IF; }
var lcA7 = (lcA4[lcI6] || Array.at(lcA4, lcI6));
var stA0 = c.typeName__Ljava_lang_String_2Lorg_netbeans_html_json_impl_ModelProcessor$Prprt_2.call(lcA0, lcA7);
var lcA8 = stA0;
var stA0 = lcA7.name__Ljava_lang_String_2();
var stA1 = lcA8;var stI2 = lcA7.array__Z();
var stA0 = c.toGetSet___3Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Z(stA0, stA1, stI2);
var lcA9 = stA0;
var stI0 = lcA7.array__Z();
if ((stI0) != 0) { gt = 342; break IF; }
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](true, '[Z', null, 1);
Array.at(stA0, 0, 0);
var lcA10 = stA0;
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](true, '[Z', null, 1);
Array.at(stA0, 0, 0);
var lcA11 = stA0;
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](true, '[Z', null, 1);
Array.at(stA0, 0, 0);
var lcA12 = stA0;
var stA0 = c.checkType__Ljava_lang_String_2Lorg_netbeans_html_json_impl_ModelProcessor$Prprt_2_3Z_3Z_3Z.call(lcA0, lcA7, lcA10, lcA11, lcA12);
if (((lcA10[0] || Array.at(lcA10, 0))) != 0) { gt = 264; break IF; }
var stA0 = lcA3;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"    ret.prop_");
var stA2 = lcA7.name__Ljava_lang_String_2();
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,stA2);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1," = ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,(lcA9[0] || Array.at(lcA9, 0)));
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"();\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
invoker.write__VLjava_lang_String_2(stA0,stA1);
{ gt = 388; break IF; }
    }
    X_264: for (;;) { IF: if (gt <= 264) {

var stA0 = lcA3;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"    ret.prop_");
var stA2 = lcA7.name__Ljava_lang_String_2();
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,stA2);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1," =  prop_");
var stA2 = lcA7.name__Ljava_lang_String_2();
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,stA2);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1," == null ? null : prop_");
var stA2 = lcA7.name__Ljava_lang_String_2();
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,stA2);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1," == TYPE ? TYPE : net.java.html.json.Models.bind(");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,(lcA9[0] || Array.at(lcA9, 0)));
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"(), ctx);\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
invoker.write__VLjava_lang_String_2(stA0,stA1);
{ gt = 388; break IF; }
    }
    X_342: for (;;) { IF: if (gt <= 342) {

var stA0 = lcA3;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"    proto.cloneList(ret.");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,(lcA9[0] || Array.at(lcA9, 0)));
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"(), ctx, prop_");
var stA2 = lcA7.name__Ljava_lang_String_2();
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,stA2);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,");\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
invoker.write__VLjava_lang_String_2(stA0,stA1);
    }
    X_388: for (;;) { IF: if (gt <= 388) {
lcI6++;
{ gt = 0; continue X_122; }
    }
    X_394: for (;;) { IF: if (gt <= 394) {

invoker.write__VLjava_lang_String_2(lcA3,"    return ret;\n");
invoker.write__VLjava_lang_String_2(lcA3,"  }\n");
return;

    }
}}}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.inPckName__Ljava_lang_String_2Ljavax_lang_model_element_Element_2Z = function(lcA1, lcI2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((lcI2) == 0) { gt = 26; break IF; }
var stA0 = invoker.getAnnotation__Ljava_lang_annotation_Annotation_2Ljava_lang_Class_2(lcA1,(refs_net_java_html_json_Model || (refs_net_java_html_json_Model = net_java_html_json_Model(false))).constructor.$class);
if (stA0 !== null && !stA0['$instOf_net_java_html_json_Model']) vm.java_lang_Class(false).castEx(stA0, 'net.java.html.json.Model');
var stI0 = invoker.instance__Z(stA0);
if ((stI0) == 0) { gt = 26; break IF; }
return "model.instance";
    }
    X_26: for (;;) { IF: if (gt <= 26) {
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var lcA3 = stA0;
    }
    X_34: for (;;) { IF: if (gt <= 34) {

var stA0 = invoker.getKind__Ljavax_lang_model_element_ElementKind_2(lcA1);
if ((stA0) === ((refs_javax_lang_model_element_ElementKind || (refs_javax_lang_model_element_ElementKind = vm.javax_lang_model_element_ElementKind(false)))['_PACKAGE']())) { gt = 97; break IF; }
var stI0 = invoker.length__I(lcA3);
if ((stI0) != 0) { gt = 67; break IF; }
var stA0 = lcA3;var stA1 = invoker.getSimpleName__Ljavax_lang_model_element_Name_2(lcA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_CharSequence_2(stA0,stA1);
{ gt = 87; break IF; }
    }
    X_67: for (;;) { IF: if (gt <= 67) {

var stA0 = invoker.insert__Ljava_lang_StringBuilder_2IC(lcA3,0, (46));
var stA0 = lcA3;var stI1 = 0;var stA2 = invoker.getSimpleName__Ljavax_lang_model_element_Name_2(lcA1);
var stA0 = invoker.insert__Ljava_lang_StringBuilder_2ILjava_lang_CharSequence_2(stA0,stI1, stA2);
    }
    X_87: for (;;) { IF: if (gt <= 87) {

var stA0 = invoker.getEnclosingElement__Ljavax_lang_model_element_Element_2(lcA1);
var lcA1 = stA0;
{ gt = 0; continue X_34; }
    }
    X_97: for (;;) { IF: if (gt <= 97) {

var stA0 = invoker.toString__Ljava_lang_String_2(lcA3);
return stA0;

    }
}}}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.fqn__Ljava_lang_String_2Ljavax_lang_model_type_TypeMirror_2Ljavax_lang_model_element_Element_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = invoker.getKind__Ljavax_lang_model_type_TypeKind_2(lcA1);
if ((stA0) !== ((refs_javax_lang_model_type_TypeKind || (refs_javax_lang_model_type_TypeKind = vm.javax_lang_model_type_TypeKind(false)))['_ERROR']())) { gt = 66; break IF; }
var stA0 = invoker.getElementUtils__Ljavax_lang_model_util_Elements_2(c['_processingEnv'].call(lcA0));
var lcA3 = stA0;
var stA0 = invoker.getPackageOf__Ljavax_lang_model_element_PackageElement_2Ljavax_lang_model_element_Element_2(lcA3,lcA2);
var lcA4 = stA0;
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var stA1 = invoker.getQualifiedName__Ljavax_lang_model_element_Name_2(lcA4);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,".");
var stA1 = invoker.toString__Ljava_lang_String_2(lcA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
return stA0;
    }
    X_66: for (;;) { IF: if (gt <= 66) {

var stA0 = invoker.toString__Ljava_lang_String_2(lcA1);
return stA0;

    }
}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.checkType__Ljava_lang_String_2Lorg_netbeans_html_json_impl_ModelProcessor$Prprt_2_3Z_3Z_3Z = function(lcA1, lcA2, lcA3, lcA4) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
try {
var stA0 = lcA1.typeName__Ljava_lang_String_2Ljavax_annotation_processing_ProcessingEnvironment_2(c['_processingEnv'].call(lcA0));
var lcA6 = stA0;
var stA0 = invoker.getElementUtils__Ljavax_lang_model_util_Elements_2(c['_processingEnv'].call(lcA0));
var stA0 = invoker.getTypeElement__Ljavax_lang_model_element_TypeElement_2Ljava_lang_CharSequence_2(stA0,lcA6);
var lcA7 = stA0;
if ((lcA7) !== null) { gt = 49; break IF; }
Array.at(lcA2, 0, 1);
Array.at(lcA3, 0, 0);
Array.at(lcA4, 0, 0);
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_javax_lang_model_type_MirroredTypeException']) {var stA0 = e;{ gt = 61; break IF; }}
throw e;
}return lcA6;
    }
    X_49: for (;;) { IF: if (gt <= 49) {
try {
var stA0 = invoker.asType__Ljavax_lang_model_type_TypeMirror_2(lcA7);
var lcA5 = stA0;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_javax_lang_model_type_MirroredTypeException']) {var stA0 = e;{ gt = 61; break IF; }}
throw e;
}{ gt = 70; break IF; }
    }
    X_61: for (;;) { IF: if (gt <= 61) {
var lcA6 = stA0;
var stA0 = invoker.getTypeMirror__Ljavax_lang_model_type_TypeMirror_2(lcA6);
var lcA5 = stA0;
    }
    X_70: for (;;) { IF: if (gt <= 70) {

var stA0 = invoker.getTypeUtils__Ljavax_lang_model_util_Types_2(c['_processingEnv'].call(lcA0));
var stA0 = invoker.erasure__Ljavax_lang_model_type_TypeMirror_2Ljavax_lang_model_type_TypeMirror_2(stA0,lcA5);
var lcA5 = stA0;
var stA0 = lcA4;var stI1 = 0;var stA2 = invoker.getKind__Ljavax_lang_model_type_TypeKind_2(lcA5);
var stI2 = invoker.isPrimitive__Z(stA2);
var stI3 = stI2, stI2 = stI1, stA1 = stA0, stI0 = stI3;
Array.at(stA1, stI2, stI3);
if ((stI0) == 0) { gt = 122; break IF; }
Array.at(lcA3, 0, 0);
Array.at(lcA2, 0, 0);
var stA0 = invoker.toString__Ljava_lang_String_2(lcA5);
return stA0;
    }
    X_122: for (;;) { IF: if (gt <= 122) {

var stA0 = invoker.getTypeUtils__Ljavax_lang_model_util_Types_2(c['_processingEnv'].call(lcA0));
var stA0 = invoker.asElement__Ljavax_lang_model_element_Element_2Ljavax_lang_model_type_TypeMirror_2(stA0,lcA5);
var lcA6 = stA0;
var stA0 = invoker.getKind__Ljavax_lang_model_element_ElementKind_2(lcA6);
if ((stA0) !== ((refs_javax_lang_model_element_ElementKind || (refs_javax_lang_model_element_ElementKind = vm.javax_lang_model_element_ElementKind(false)))['_CLASS']())) { gt = 185; break IF; }
var stA0 = invoker.getKind__Ljavax_lang_model_type_TypeKind_2(lcA5);
if ((stA0) !== ((refs_javax_lang_model_type_TypeKind || (refs_javax_lang_model_type_TypeKind = vm.javax_lang_model_type_TypeKind(false)))['_ERROR']())) { gt = 185; break IF; }
Array.at(lcA2, 0, 1);
Array.at(lcA3, 0, 0);
var stA0 = invoker.getSimpleName__Ljavax_lang_model_element_Name_2(lcA6);
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
return stA0;
    }
    X_185: for (;;) { IF: if (gt <= 185) {

var stA0 = invoker.getElementUtils__Ljavax_lang_model_util_Elements_2(c['_processingEnv'].call(lcA0));
var stA0 = invoker.getTypeElement__Ljavax_lang_model_element_TypeElement_2Ljava_lang_CharSequence_2(stA0,"java.lang.Enum");
var stA0 = invoker.asType__Ljavax_lang_model_type_TypeMirror_2(stA0);
var lcA7 = stA0;
var stA0 = invoker.getTypeUtils__Ljavax_lang_model_util_Types_2(c['_processingEnv'].call(lcA0));
var stA0 = invoker.erasure__Ljavax_lang_model_type_TypeMirror_2Ljavax_lang_model_type_TypeMirror_2(stA0,lcA7);
var lcA7 = stA0;
var stA0 = lcA3;var stI1 = 0;var stA2 = invoker.getTypeUtils__Ljavax_lang_model_util_Types_2(c['_processingEnv'].call(lcA0));
var stI2 = invoker.isSubtype__ZLjavax_lang_model_type_TypeMirror_2Ljavax_lang_model_type_TypeMirror_2(stA2,lcA5, lcA7);
Array.at(stA0, stI1, stI2);
if (((lcA3[0] || Array.at(lcA3, 0))) != 0) { gt = 385; break IF; }
if ((lcA6) !== null) { gt = 263; break IF; }
var stA0 = null;{ gt = 275; break IF; }
    }
    X_263: for (;;) { IF: if (gt <= 263) {

var stA0 = invoker.getAnnotation__Ljava_lang_annotation_Annotation_2Ljava_lang_Class_2(lcA6,(refs_net_java_html_json_Model || (refs_net_java_html_json_Model = net_java_html_json_Model(false))).constructor.$class);
if (stA0 !== null && !stA0['$instOf_net_java_html_json_Model']) vm.java_lang_Class(false).castEx(stA0, 'net.java.html.json.Model');
    }
    X_275: for (;;) { IF: if (gt <= 275) {
var lcA9 = stA0;
if ((lcA9) === null) { gt = 343; break IF; }
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var stA1 = c.findPkgName__Ljava_lang_String_2Ljavax_lang_model_element_Element_2(lcA6);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(46));
var stA1 = invoker.className__Ljava_lang_String_2(lcA9);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
var lcA8 = stA0;
Array.at(lcA2, 0, 1);
var stA0 = lcA0['fld_org_netbeans_html_json_impl_ModelProcessor_models'];var stA1 = lcA6;var stA2 = invoker.className__Ljava_lang_String_2(lcA9);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
{ gt = 382; break IF; }
    }
    X_343: for (;;) { IF: if (gt <= 343) {

var stI0 = c.findModelForMthd__ZLjavax_lang_model_element_Element_2(lcA6);
if ((stI0) == 0) { gt = 373; break IF; }
if (lcA6 !== null && !lcA6['$instOf_javax_lang_model_element_TypeElement']) vm.java_lang_Class(false).castEx(lcA6, 'javax.lang.model.element.TypeElement');
var stA0 = invoker.getQualifiedName__Ljavax_lang_model_element_Name_2(lcA6);
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
var lcA8 = stA0;
Array.at(lcA2, 0, 1);
{ gt = 382; break IF; }
    }
    X_373: for (;;) { IF: if (gt <= 373) {

var stA0 = invoker.toString__Ljava_lang_String_2(lcA5);
var lcA8 = stA0;
    }
    X_382: for (;;) { IF: if (gt <= 382) {
{ gt = 394; break IF; }
    }
    X_385: for (;;) { IF: if (gt <= 385) {

var stA0 = invoker.toString__Ljava_lang_String_2(lcA5);
var lcA8 = stA0;
    }
    X_394: for (;;) { IF: if (gt <= 394) {

return lcA8;

    }
}}}}}}}}}}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.findModelForMthd__ZLjavax_lang_model_element_Element_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((lcA0) !== null) { gt = 6; break IF; }
return 0;
    }
    X_6: for (;;) { IF: if (gt <= 6) {

var stA0 = invoker.getEnclosedElements__Ljava_util_List_2(lcA0);
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA1 = stA0;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

var stI0 = invoker.hasNext__Z(lcA1);
if ((stI0) == 0) { gt = 90; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA1);
if (stA0 !== null && !stA0['$instOf_javax_lang_model_element_Element']) vm.java_lang_Class(false).castEx(stA0, 'javax.lang.model.element.Element');
var lcA2 = stA0;
var stA0 = invoker.getKind__Ljavax_lang_model_element_ElementKind_2(lcA2);
if ((stA0) !== ((refs_javax_lang_model_element_ElementKind || (refs_javax_lang_model_element_ElementKind = vm.javax_lang_model_element_ElementKind(false)))['_METHOD']())) { gt = 87; break IF; }
if (lcA2 !== null && !lcA2['$instOf_javax_lang_model_element_ExecutableElement']) vm.java_lang_Class(false).castEx(lcA2, 'javax.lang.model.element.ExecutableElement');
var lcA3 = lcA2;
var stA0 = invoker.getSimpleName__Ljavax_lang_model_element_Name_2(lcA3);
var stI0 = invoker.contentEquals__ZLjava_lang_CharSequence_2(stA0,"modelFor");
if ((stI0) == 0) { gt = 87; break IF; }
var stA0 = invoker.getParameters__Ljava_util_List_2(lcA3);
var stI0 = invoker.isEmpty__Z(stA0);
if ((stI0) == 0) { gt = 87; break IF; }
return 1;
    }
    X_87: for (;;) { IF: if (gt <= 87) {
{ gt = 0; continue X_18; }
    }
    X_90: for (;;) { IF: if (gt <= 90) {

return 0;

    }
}}}}}
};
    m.access = 10;
    m.cls = CLS;
    m = c.findParamNames__VLjava_util_Set_2Ljavax_lang_model_element_Element_2Ljava_lang_String_2Ljava_lang_String_2_3Ljava_lang_StringBuilder_2 = function(lcA1, lcA2, lcA3, lcA4, lcA5) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var lcI6 = 0;
var lcI7 = 0;
    }
    X_6: for (;;) { IF: if (gt <= 6) {

var stI0 = invoker.indexOf__III(lcA3,(123), lcI7);
var lcI8 = stI0;
if ((lcI8) != (-1)) { gt = 56; break IF; }
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C((lcA5[lcI6] || Array.at(lcA5, lcI6)),(34));
var stA1 = invoker.substring__Ljava_lang_String_2I(lcA3,lcI7);
var stA1 = invoker.replace__Ljava_lang_String_2Ljava_lang_CharSequence_2Ljava_lang_CharSequence_2(stA1,"\"", "\\\"");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
return;
    }
    X_56: for (;;) { IF: if (gt <= 56) {

var stI0 = invoker.indexOf__III(lcA3,(125), lcI8);
var lcI9 = stI0;
if ((lcI9) != (-1)) { gt = 98; break IF; }
var stA0 = lcA0;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"Unbalanced '{' and '}' in ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA3);
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
c.error__VLjava_lang_String_2Ljavax_lang_model_element_Element_2.call(stA0, stA1, lcA2);
return;
    }
    X_98: for (;;) { IF: if (gt <= 98) {

var stA0 = invoker.substring__Ljava_lang_String_2II(lcA3,(((lcI8) + (1)) | 0), lcI9);
var lcA10 = stA0;
var stI0 = invoker.add__ZLjava_lang_Object_2(lcA1,lcA10);
var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA10,lcA4);
if ((stI0) == 0) { gt = 178; break IF; }
var stI0 = invoker.isEmpty__Z(lcA4);
if ((stI0) != 0) { gt = 178; break IF; }
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C((lcA5[lcI6] || Array.at(lcA5, lcI6)),(34));
var stA1 = invoker.substring__Ljava_lang_String_2II(lcA3,lcI7, lcI8);
var stA1 = invoker.replace__Ljava_lang_String_2Ljava_lang_CharSequence_2Ljava_lang_CharSequence_2(stA1,"\"", "\\\"");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var lcI6 = 1;
{ gt = 225; break IF; }
    }
    X_178: for (;;) { IF: if (gt <= 178) {

var stA0 = invoker.append__Ljava_lang_StringBuilder_2C((lcA5[lcI6] || Array.at(lcA5, lcI6)),(34));
var stA1 = invoker.substring__Ljava_lang_String_2II(lcA3,lcI7, lcI8);
var stA1 = invoker.replace__Ljava_lang_String_2Ljava_lang_CharSequence_2Ljava_lang_CharSequence_2(stA1,"\"", "\\\"");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"\" + ");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,lcA10);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0," + ");
    }
    X_225: for (;;) { IF: if (gt <= 225) {

var lcI7 = (((lcI9) + (1)) | 0);
{ gt = 0; continue X_6; }

    }
}}}}}}
};
    m.access = 130;
    m.cls = CLS;
    m = c.findPrprt__Lorg_netbeans_html_json_impl_ModelProcessor$Prprt_2_3Lorg_netbeans_html_json_impl_ModelProcessor$Prprt_2Ljava_lang_String_2 = function(lcA0, lcA1) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var lcA2 = lcA0;
var lcI3 = (lcA2).length;
var lcI4 = 0;
    }
    X_8: for (;;) { IF: if (gt <= 8) {

if ((lcI4) >= (lcI3)) { gt = 41; break IF; }
var lcA5 = (lcA2[lcI4] || Array.at(lcA2, lcI4));
var stA0 = lcA1;var stA1 = lcA5.name__Ljava_lang_String_2();
var stI0 = invoker.equals__ZLjava_lang_Object_2(stA0,stA1);
if ((stI0) == 0) { gt = 35; break IF; }
return lcA5;
    }
    X_35: for (;;) { IF: if (gt <= 35) {
lcI4++;
{ gt = 0; continue X_8; }
    }
    X_41: for (;;) { IF: if (gt <= 41) {

return null;

    }
}}}}
};
    m.access = 10;
    m.cls = CLS;
    m = c.isPrimitive__ZLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = invoker.equals__ZLjava_lang_Object_2("int",lcA1);
if ((stI0) != 0) { gt = 78; break IF; }
var stI0 = invoker.equals__ZLjava_lang_Object_2("double",lcA1);
if ((stI0) != 0) { gt = 78; break IF; }
var stI0 = invoker.equals__ZLjava_lang_Object_2("long",lcA1);
if ((stI0) != 0) { gt = 78; break IF; }
var stI0 = invoker.equals__ZLjava_lang_Object_2("short",lcA1);
if ((stI0) != 0) { gt = 78; break IF; }
var stI0 = invoker.equals__ZLjava_lang_Object_2("byte",lcA1);
if ((stI0) != 0) { gt = 78; break IF; }
var stI0 = invoker.equals__ZLjava_lang_Object_2("char",lcA1);
if ((stI0) != 0) { gt = 78; break IF; }
var stI0 = invoker.equals__ZLjava_lang_Object_2("boolean",lcA1);
if ((stI0) != 0) { gt = 78; break IF; }
var stI0 = invoker.equals__ZLjava_lang_Object_2("float",lcA1);
if ((stI0) == 0) { gt = 82; break IF; }
    }
    X_78: for (;;) { IF: if (gt <= 78) {

var stI0 = 1;{ gt = 83; break IF; }
    }
    X_82: for (;;) { IF: if (gt <= 82) {

var stI0 = 0;    }
    X_83: for (;;) { IF: if (gt <= 83) {
return stI0;

    }
}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.findDerivedFrom__Ljava_util_Collection_2Ljava_util_Map_2Ljava_lang_String_2 = function(lcA0, lcA1) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
var stA0 = new vm.java_util_HashSet;
(refs_java_util_HashSet || (refs_java_util_HashSet = vm.java_util_HashSet(false))).constructor['cons__V'].call(stA0);
var lcA2 = stA0;
var stA0 = invoker.entrySet__Ljava_util_Set_2(lcA0);
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA3 = stA0;
    }
    X_20: for (;;) { IF: if (gt <= 20) {

var stI0 = invoker.hasNext__Z(lcA3);
if ((stI0) == 0) { gt = 113; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA3);
if (stA0 !== null && !stA0['$instOf_java_util_Map$Entry']) vm.java_lang_Class(false).castEx(stA0, 'java.util.Map$Entry');
var lcA4 = stA0;
var stA0 = invoker.getValue__Ljava_lang_Object_2(lcA4);
if (stA0 !== null && !stA0['$instOf_java_util_Collection']) vm.java_lang_Class(false).castEx(stA0, 'java.util.Collection');
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA5 = stA0;
    }
    X_57: for (;;) { IF: if (gt <= 57) {

var stI0 = invoker.hasNext__Z(lcA5);
if ((stI0) == 0) { gt = 110; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA5);
if (stA0 !== null && !Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](stA0, 1, vm.java_lang_String)) vm.java_lang_Class(false).castEx(stA0, '');
var lcA6 = stA0;
var stI0 = invoker.equals__ZLjava_lang_Object_2((lcA6[0] || Array.at(lcA6, 0)),lcA1);
if ((stI0) == 0) { gt = 107; break IF; }
var stA0 = lcA2;var stA1 = invoker.getKey__Ljava_lang_Object_2(lcA4);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,stA1);
{ gt = 110; break IF; }
    }
    X_107: for (;;) { IF: if (gt <= 107) {
{ gt = 0; continue X_57; }
    }
    X_110: for (;;) { IF: if (gt <= 110) {
{ gt = 0; continue X_20; }
    }
    X_113: for (;;) { IF: if (gt <= 113) {

return lcA2;

    }
}}}}}}
};
    m.access = 10;
    m.cls = CLS;
    m = c.createProps___3Lorg_netbeans_html_json_impl_ModelProcessor$Prprt_2Ljavax_lang_model_element_Element_2_3Lnet_java_html_json_Property_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = (refs_org_netbeans_html_json_impl_ModelProcessor$Prprt || (refs_org_netbeans_html_json_impl_ModelProcessor$Prprt = org_netbeans_html_json_impl_ModelProcessor$Prprt(false))).wrap___3Lorg_netbeans_html_json_impl_ModelProcessor$Prprt_2Ljavax_annotation_processing_ProcessingEnvironment_2Ljavax_lang_model_element_Element_2_3Lnet_java_html_json_Property_2(c['_processingEnv'].call(lcA0), lcA1, lcA2);
var lcA3 = stA0;
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_org_netbeans_html_json_impl_ModelProcessor_verify'],lcA1, lcA3);
if (stA0 !== null && !Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](stA0, 1, vm.org_netbeans_html_json_impl_ModelProcessor$Prprt)) vm.java_lang_Class(false).castEx(stA0, '');
var lcA4 = stA0;
if ((lcA4) === null) { gt = 39; break IF; }
c.error__VLjava_lang_String_2Ljavax_lang_model_element_Element_2.call(lcA0, "Two sets of properties for ", lcA1);
    }
    X_39: for (;;) { IF: if (gt <= 39) {

return lcA3;

    }
}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.findDataSpecified__Ljava_lang_String_2Ljavax_lang_model_element_ExecutableElement_2Lnet_java_html_json_OnReceive_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
try {
var stA0 = invoker.data__Ljava_lang_Class_2(lcA2);
var stA0 = invoker.getName__Ljava_lang_String_2(stA0);
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_javax_lang_model_type_MirroredTypeException']) {var stA0 = e;{ gt = 10; break IF; }}
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_Exception']) {var stA0 = e;{ gt = 103; break IF; }}
throw e;
}return stA0;
    }
    X_10: for (;;) { IF: if (gt <= 10) {
var lcA3 = stA0;
var stA0 = invoker.getTypeMirror__Ljavax_lang_model_type_TypeMirror_2(lcA3);
var lcA4 = stA0;
var stA0 = invoker.getTypeUtils__Ljavax_lang_model_util_Types_2(c['_processingEnv'].call(lcA0));
var stA0 = invoker.asElement__Ljavax_lang_model_element_Element_2Ljavax_lang_model_type_TypeMirror_2(stA0,lcA4);
var lcA6 = stA0;
var stA0 = invoker.getKind__Ljavax_lang_model_element_ElementKind_2(lcA6);
if ((stA0) !== ((refs_javax_lang_model_element_ElementKind || (refs_javax_lang_model_element_ElementKind = vm.javax_lang_model_element_ElementKind(false)))['_CLASS']())) { gt = 76; break IF; }
var stA0 = invoker.getKind__Ljavax_lang_model_type_TypeKind_2(lcA4);
if ((stA0) !== ((refs_javax_lang_model_type_TypeKind || (refs_javax_lang_model_type_TypeKind = vm.javax_lang_model_type_TypeKind(false)))['_ERROR']())) { gt = 76; break IF; }
var stA0 = invoker.getSimpleName__Ljavax_lang_model_element_Name_2(lcA6);
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
var lcA5 = stA0;
{ gt = 85; break IF; }
    }
    X_76: for (;;) { IF: if (gt <= 76) {

var stA0 = invoker.toString__Ljava_lang_String_2(lcA4);
var lcA5 = stA0;
    }
    X_85: for (;;) { IF: if (gt <= 85) {

var stI0 = invoker.equals__ZLjava_lang_Object_2("java.lang.Object",lcA5);
if ((stI0) == 0) { gt = 100; break IF; }
var stA0 = null;{ gt = 102; break IF; }
    }
    X_100: for (;;) { IF: if (gt <= 100) {

var stA0 = lcA5;    }
    X_102: for (;;) { IF: if (gt <= 102) {
return stA0;
    }
    X_103: for (;;) { IF: if (gt <= 103) {
var lcA3 = stA0;
var lcA3 = null;
var stA0 = invoker.getAnnotationMirrors__Ljava_util_List_2(lcA1);
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA4 = stA0;
    }
    X_119: for (;;) { IF: if (gt <= 119) {

var stI0 = invoker.hasNext__Z(lcA4);
if ((stI0) == 0) { gt = 169; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA4);
if (stA0 !== null && !stA0['$instOf_javax_lang_model_element_AnnotationMirror']) vm.java_lang_Class(false).castEx(stA0, 'javax.lang.model.element.AnnotationMirror');
var lcA5 = stA0;
var stA0 = invoker.getAnnotationType__Ljavax_lang_model_type_DeclaredType_2(lcA5);
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
var stA1 = invoker.getName__Ljava_lang_String_2((refs_net_java_html_json_OnReceive || (refs_net_java_html_json_OnReceive = net_java_html_json_OnReceive(false))).constructor.$class);
var stI0 = invoker.equals__ZLjava_lang_Object_2(stA0,stA1);
if ((stI0) == 0) { gt = 166; break IF; }
var lcA3 = lcA5;
    }
    X_166: for (;;) { IF: if (gt <= 166) {
{ gt = 0; continue X_119; }
    }
    X_169: for (;;) { IF: if (gt <= 169) {

if ((lcA3) !== null) { gt = 175; break IF; }
return null;
    }
    X_175: for (;;) { IF: if (gt <= 175) {

var stA0 = invoker.getElementValues__Ljava_util_Map_2(lcA3);
var stA0 = invoker.entrySet__Ljava_util_Set_2(stA0);
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA4 = stA0;
    }
    X_193: for (;;) { IF: if (gt <= 193) {

var stI0 = invoker.hasNext__Z(lcA4);
if ((stI0) == 0) { gt = 350; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA4);
if (stA0 !== null && !stA0['$instOf_java_util_Map$Entry']) vm.java_lang_Class(false).castEx(stA0, 'java.util.Map$Entry');
var lcA5 = stA0;
var stA0 = invoker.getKey__Ljava_lang_Object_2(lcA5);
if (stA0 !== null && !stA0['$instOf_javax_lang_model_element_ExecutableElement']) vm.java_lang_Class(false).castEx(stA0, 'javax.lang.model.element.ExecutableElement');
var lcA6 = stA0;
var stA0 = invoker.getValue__Ljava_lang_Object_2(lcA5);
if (stA0 !== null && !stA0['$instOf_javax_lang_model_element_AnnotationValue']) vm.java_lang_Class(false).castEx(stA0, 'javax.lang.model.element.AnnotationValue');
var lcA7 = stA0;
var stA0 = invoker.getSimpleName__Ljavax_lang_model_element_Name_2(lcA6);
var stI0 = invoker.contentEquals__ZLjava_lang_CharSequence_2(stA0,"data");
if ((stI0) == 0) { gt = 347; break IF; }
var stA0 = c.getAnnoValues__Ljava_util_List_2Ljavax_annotation_processing_ProcessingEnvironment_2Ljavax_lang_model_element_Element_2Ljavax_lang_model_element_AnnotationMirror_2(c['_processingEnv'].call(lcA0), lcA1, lcA3);
var lcA8 = stA0;
var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA8);
var lcA9 = stA0;
    }
    X_276: for (;;) { IF: if (gt <= 276) {

var stI0 = invoker.hasNext__Z(lcA9);
if ((stI0) == 0) { gt = 343; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA9);
var lcA10 = stA0;
var stA0 = invoker.toString__Ljava_lang_String_2(lcA10);
var lcA11 = stA0;
var stI0 = invoker.startsWith__ZLjava_lang_String_2(lcA11,"data = ");
if ((stI0) == 0) { gt = 340; break IF; }
var stI0 = invoker.endsWith__ZLjava_lang_String_2(lcA11,".class");
if ((stI0) == 0) { gt = 340; break IF; }
var stA0 = lcA11;var stI1 = (7);var stI2 = invoker.length__I(lcA11);
var stA0 = invoker.substring__Ljava_lang_String_2II(stA0,stI1, (((stI2) - ((6))) | 0));
return stA0;
    }
    X_340: for (;;) { IF: if (gt <= 340) {
{ gt = 0; continue X_276; }
    }
    X_343: for (;;) { IF: if (gt <= 343) {

return "error";
    }
    X_347: for (;;) { IF: if (gt <= 347) {
{ gt = 0; continue X_193; }
    }
    X_350: for (;;) { IF: if (gt <= 350) {

return null;

    }
}}}}}}}}}}}}}}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.getAnnoValues__Ljava_util_List_2Ljavax_annotation_processing_ProcessingEnvironment_2Ljavax_lang_model_element_Element_2Ljavax_lang_model_element_AnnotationMirror_2 = function(lcA0, lcA1, lcA2) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
try {
var stA0 = (refs_java_lang_Class || (refs_java_lang_Class = vm.java_lang_Class(false)))['forName__Ljava_lang_Class_2Ljava_lang_String_2']("com.sun.tools.javac.api.JavacTrees");
var lcA3 = stA0;
var stA0 = lcA3;var stA1 = "instance";var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Class;', vm.java_lang_Class, 1);
Array.at(stA2, 0, (refs_javax_annotation_processing_ProcessingEnvironment || (refs_javax_annotation_processing_ProcessingEnvironment = vm.javax_annotation_processing_ProcessingEnvironment(false))).constructor.$class);
var stA0 = invoker.getMethod__Ljava_lang_reflect_Method_2Ljava_lang_String_2_3Ljava_lang_Class_2(stA0,stA1, stA2);
var lcA4 = stA0;
var stA0 = lcA4;var stA1 = null;var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 1);
Array.at(stA2, 0, lcA0);
var stA0 = invoker.invoke__Ljava_lang_Object_2Ljava_lang_Object_2_3Ljava_lang_Object_2(stA0,stA1, stA2);
var lcA5 = stA0;
var stA0 = invoker.getClass__Ljava_lang_Class_2(lcA5);
var stA1 = "getPath";var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Class;', vm.java_lang_Class, 2);
Array.at(stA2, 0, (refs_javax_lang_model_element_Element || (refs_javax_lang_model_element_Element = vm.javax_lang_model_element_Element(false))).constructor.$class);
Array.at(stA2, 1, (refs_javax_lang_model_element_AnnotationMirror || (refs_javax_lang_model_element_AnnotationMirror = vm.javax_lang_model_element_AnnotationMirror(false))).constructor.$class);
var stA0 = invoker.getMethod__Ljava_lang_reflect_Method_2Ljava_lang_String_2_3Ljava_lang_Class_2(stA0,stA1, stA2);
var lcA4 = stA0;
var stA0 = lcA4;var stA1 = lcA5;var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 2);
Array.at(stA2, 0, lcA1);
Array.at(stA2, 1, lcA2);
var stA0 = invoker.invoke__Ljava_lang_Object_2Ljava_lang_Object_2_3Ljava_lang_Object_2(stA0,stA1, stA2);
var lcA6 = stA0;
var stA0 = invoker.getClass__Ljava_lang_Class_2(lcA6);
var stA1 = "getLeaf";var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Class;', vm.java_lang_Class, 0);
var stA0 = invoker.getMethod__Ljava_lang_reflect_Method_2Ljava_lang_String_2_3Ljava_lang_Class_2(stA0,stA1, stA2);
var lcA4 = stA0;
var stA0 = lcA4;var stA1 = lcA6;var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 0);
var stA0 = invoker.invoke__Ljava_lang_Object_2Ljava_lang_Object_2_3Ljava_lang_Object_2(stA0,stA1, stA2);
var lcA7 = stA0;
var stA0 = invoker.getClass__Ljava_lang_Class_2(lcA7);
var stA1 = "getArguments";var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Class;', vm.java_lang_Class, 0);
var stA0 = invoker.getMethod__Ljava_lang_reflect_Method_2Ljava_lang_String_2_3Ljava_lang_Class_2(stA0,stA1, stA2);
var lcA4 = stA0;
var stA0 = lcA4;var stA1 = lcA7;var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 0);
var stA0 = invoker.invoke__Ljava_lang_Object_2Ljava_lang_Object_2_3Ljava_lang_Object_2(stA0,stA1, stA2);
if (stA0 !== null && !stA0['$instOf_java_util_List']) vm.java_lang_Class(false).castEx(stA0, 'java.util.List');
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_Exception']) {var stA0 = e;{ gt = 153; break IF; }}
throw e;
}return stA0;
    }
    X_153: for (;;) { IF: if (gt <= 153) {
var lcA3 = stA0;
var stA0 = (refs_java_util_Collections || (refs_java_util_Collections = vm.java_util_Collections(false)))['emptyList__Ljava_util_List_2']();
return stA0;

    }
}}
};
    m.access = 8;
    m.cls = CLS;
    m = c.findTargetId__Ljava_lang_String_2Ljavax_lang_model_element_Element_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = invoker.getAnnotationMirrors__Ljava_util_List_2(lcA0);
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA1 = stA0;
    }
    X_12: for (;;) { IF: if (gt <= 12) {

var stI0 = invoker.hasNext__Z(lcA1);
if ((stI0) == 0) { gt = 140; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA1);
if (stA0 !== null && !stA0['$instOf_javax_lang_model_element_AnnotationMirror']) vm.java_lang_Class(false).castEx(stA0, 'javax.lang.model.element.AnnotationMirror');
var lcA2 = stA0;
var stA0 = invoker.getAnnotationType__Ljavax_lang_model_type_DeclaredType_2(lcA2);
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
var stA1 = invoker.getName__Ljava_lang_String_2((refs_net_java_html_json_Model || (refs_net_java_html_json_Model = net_java_html_json_Model(false))).constructor.$class);
var stI0 = invoker.equals__ZLjava_lang_Object_2(stA0,stA1);
if ((stI0) == 0) { gt = 137; break IF; }
var stA0 = invoker.getElementValues__Ljava_util_Map_2(lcA2);
var stA0 = invoker.entrySet__Ljava_util_Set_2(stA0);
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA3 = stA0;
    }
    X_68: for (;;) { IF: if (gt <= 68) {

var stI0 = invoker.hasNext__Z(lcA3);
if ((stI0) == 0) { gt = 137; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA3);
if (stA0 !== null && !stA0['$instOf_java_util_Map$Entry']) vm.java_lang_Class(false).castEx(stA0, 'java.util.Map$Entry');
var lcA4 = stA0;
var stA0 = invoker.getKey__Ljava_lang_Object_2(lcA4);
if (stA0 !== null && !stA0['$instOf_javax_lang_model_element_ExecutableElement']) vm.java_lang_Class(false).castEx(stA0, 'javax.lang.model.element.ExecutableElement');
var lcA5 = stA0;
var stA0 = invoker.getValue__Ljava_lang_Object_2(lcA4);
if (stA0 !== null && !stA0['$instOf_javax_lang_model_element_AnnotationValue']) vm.java_lang_Class(false).castEx(stA0, 'javax.lang.model.element.AnnotationValue');
var lcA6 = stA0;
var stA0 = "targetId()";var stA1 = invoker.toString__Ljava_lang_String_2(lcA5);
var stI0 = invoker.equals__ZLjava_lang_Object_2(stA0,stA1);
if ((stI0) == 0) { gt = 134; break IF; }
var stA0 = invoker.toString__Ljava_lang_String_2(lcA6);
return stA0;
    }
    X_134: for (;;) { IF: if (gt <= 134) {
{ gt = 0; continue X_68; }
    }
    X_137: for (;;) { IF: if (gt <= 137) {
{ gt = 0; continue X_12; }
    }
    X_140: for (;;) { IF: if (gt <= 140) {

return null;

    }
}}}}}}
};
    m.access = 10;
    m.cls = CLS;
    m = c.getCompletions__Ljava_lang_Iterable_2Ljavax_lang_model_element_Element_2Ljavax_lang_model_element_AnnotationMirror_2Ljavax_lang_model_element_ExecutableElement_2Ljava_lang_String_2 = function(lcA1, lcA2, lcA3, lcA4) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var lcA5 = (refs_java_util_logging_Level || (refs_java_util_logging_Level = vm.java_util_logging_Level(false)))['_FINE']();
invoker.log__VLjava_util_logging_Level_2Ljava_lang_String_2Ljava_lang_Object_2(c._LOG(),lcA5, " element: {0}", lcA1);
invoker.log__VLjava_util_logging_Level_2Ljava_lang_String_2Ljava_lang_Object_2(c._LOG(),lcA5, " annotation: {0}", lcA2);
invoker.log__VLjava_util_logging_Level_2Ljava_lang_String_2Ljava_lang_Object_2(c._LOG(),lcA5, " member: {0}", lcA3);
invoker.log__VLjava_util_logging_Level_2Ljava_lang_String_2Ljava_lang_Object_2(c._LOG(),lcA5, " userText: {0}", lcA4);
var stA0 = c._LOG();var stA1 = lcA5;var stA2 = "str: {0}";var stA3 = invoker.getAnnotationType__Ljavax_lang_model_type_DeclaredType_2(lcA2);
var stA3 = invoker.toString__Ljava_lang_String_2(stA3);
invoker.log__VLjava_util_logging_Level_2Ljava_lang_String_2Ljava_lang_Object_2(stA0,stA1, stA2, stA3);
var stA0 = invoker.getAnnotationType__Ljavax_lang_model_type_DeclaredType_2(lcA2);
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
var stA1 = invoker.getName__Ljava_lang_String_2((refs_net_java_html_json_OnReceive || (refs_net_java_html_json_OnReceive = net_java_html_json_OnReceive(false))).constructor.$class);
var stI0 = invoker.equals__ZLjava_lang_Object_2(stA0,stA1);
if ((stI0) == 0) { gt = 175; break IF; }
var stA0 = invoker.getSimpleName__Ljavax_lang_model_element_Name_2(lcA3);
var stI0 = invoker.contentEquals__ZLjava_lang_CharSequence_2(stA0,"method");
if ((stI0) == 0) { gt = 175; break IF; }
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljavax/annotation/processing/Completion;', vm.javax_annotation_processing_Completion, (6));
var stA1 = stA0;var stI2 = 0;var stA3 = c.methodOf__Ljavax_annotation_processing_Completion_2Ljava_lang_String_2("GET");
Array.at(stA1, stI2, stA3);
var stA1 = stA0;var stI2 = 1;var stA3 = c.methodOf__Ljavax_annotation_processing_Completion_2Ljava_lang_String_2("POST");
Array.at(stA1, stI2, stA3);
var stA1 = stA0;var stI2 = 2;var stA3 = c.methodOf__Ljavax_annotation_processing_Completion_2Ljava_lang_String_2("PUT");
Array.at(stA1, stI2, stA3);
var stA1 = stA0;var stI2 = 3;var stA3 = c.methodOf__Ljavax_annotation_processing_Completion_2Ljava_lang_String_2("DELETE");
Array.at(stA1, stI2, stA3);
var stA1 = stA0;var stI2 = 4;var stA3 = c.methodOf__Ljavax_annotation_processing_Completion_2Ljava_lang_String_2("HEAD");
Array.at(stA1, stI2, stA3);
var stA1 = stA0;var stI2 = 5;var stA3 = c.methodOf__Ljavax_annotation_processing_Completion_2Ljava_lang_String_2("WebSocket");
Array.at(stA1, stI2, stA3);
var stA0 = (refs_java_util_Arrays || (refs_java_util_Arrays = vm.java_util_Arrays(false)))['asList__Ljava_util_List_2_3Ljava_lang_Object_2'](stA0);
return stA0;
    }
    X_175: for (;;) { IF: if (gt <= 175) {

var stA0 = (refs_javax_annotation_processing_AbstractProcessor || (refs_javax_annotation_processing_AbstractProcessor = vm.javax_annotation_processing_AbstractProcessor(false)))['getCompletions__Ljava_lang_Iterable_2Ljavax_lang_model_element_Element_2Ljavax_lang_model_element_AnnotationMirror_2Ljavax_lang_model_element_ExecutableElement_2Ljava_lang_String_2'].call(lcA0, lcA1, lcA2, lcA3, lcA4);
return stA0;

    }
}}
};
c['getCompletions__Ljava_lang_Iterable_2Ljavax_lang_model_element_Element_2Ljavax_lang_model_element_AnnotationMirror_2Ljavax_lang_model_element_ExecutableElement_2Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.methodOf__Ljavax_annotation_processing_Completion_2Ljava_lang_String_2 = function(lcA0) {
var stA0 = (refs_java_util_ResourceBundle || (refs_java_util_ResourceBundle = vm.java_util_ResourceBundle(false)))['getBundle__Ljava_util_ResourceBundle_2Ljava_lang_String_2']("org.netbeans.html.json.impl.Bundle");
var lcA1 = stA0;
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,lcA0);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
var stA1 = lcA1;var stA2 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"MSG_Completion_");
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,lcA0);
var stA2 = invoker.toString__Ljava_lang_String_2(stA2);
var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(stA1,stA2);
var stA0 = (refs_javax_annotation_processing_Completions || (refs_javax_annotation_processing_Completions = vm.javax_annotation_processing_Completions(false)))['of__Ljavax_annotation_processing_Completion_2Ljava_lang_String_2Ljava_lang_String_2'](stA0, stA1);
return stA0;

};
    m.access = 26;
    m.cls = CLS;
    m = c.findOnError__ILjavax_lang_model_element_ExecutableElement_2Ljavax_lang_model_element_TypeElement_2Ljava_lang_String_2Ljava_lang_String_2 = function(lcA1, lcA2, lcA3, lcA4) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var lcA5 = null;
var stA0 = invoker.getEnclosedElements__Ljava_util_List_2(lcA2);
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA6 = stA0;
    }
    X_16: for (;;) { IF: if (gt <= 16) {

var stI0 = invoker.hasNext__Z(lcA6);
if ((stI0) == 0) { gt = 478; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA6);
if (stA0 !== null && !stA0['$instOf_javax_lang_model_element_Element']) vm.java_lang_Class(false).castEx(stA0, 'javax.lang.model.element.Element');
var lcA7 = stA0;
var stA0 = invoker.getKind__Ljavax_lang_model_element_ElementKind_2(lcA7);
if ((stA0) === ((refs_javax_lang_model_element_ElementKind || (refs_javax_lang_model_element_ElementKind = vm.javax_lang_model_element_ElementKind(false)))['_METHOD']())) { gt = 54; break IF; }
{ gt = 0; continue X_16; }
    }
    X_54: for (;;) { IF: if (gt <= 54) {

var stA0 = invoker.getSimpleName__Ljavax_lang_model_element_Name_2(lcA7);
var stI0 = invoker.contentEquals__ZLjava_lang_CharSequence_2(stA0,lcA3);
if ((stI0) != 0) { gt = 73; break IF; }
{ gt = 0; continue X_16; }
    }
    X_73: for (;;) { IF: if (gt <= 73) {

var stA0 = invoker.getModifiers__Ljava_util_Set_2(lcA7);
var stI0 = invoker.contains__ZLjava_lang_Object_2(stA0,(refs_javax_lang_model_element_Modifier || (refs_javax_lang_model_element_Modifier = vm.javax_lang_model_element_Modifier(false)))['_STATIC']());
if ((stI0) != 0) { gt = 105; break IF; }
if (lcA7 !== null && !lcA7['$instOf_javax_lang_model_element_ExecutableElement']) vm.java_lang_Class(false).castEx(lcA7, 'javax.lang.model.element.ExecutableElement');
var lcA1 = lcA7;
var lcA5 = "Would have to be static";
{ gt = 0; continue X_16; }
    }
    X_105: for (;;) { IF: if (gt <= 105) {

if (lcA7 !== null && !lcA7['$instOf_javax_lang_model_element_ExecutableElement']) vm.java_lang_Class(false).castEx(lcA7, 'javax.lang.model.element.ExecutableElement');
var lcA8 = lcA7;
var stA0 = invoker.getElementUtils__Ljavax_lang_model_util_Elements_2(c['_processingEnv'].call(lcA0));
var stA1 = invoker.getName__Ljava_lang_String_2((refs_java_lang_Exception || (refs_java_lang_Exception = vm.java_lang_Exception(false))).constructor.$class);
var stA0 = invoker.getTypeElement__Ljavax_lang_model_element_TypeElement_2Ljava_lang_CharSequence_2(stA0,stA1);
var stA0 = invoker.asType__Ljavax_lang_model_type_TypeMirror_2(stA0);
var lcA9 = stA0;
var stA0 = invoker.getParameters__Ljava_util_List_2(lcA8);
var lcA10 = stA0;
var lcI11 = 0;
var stI0 = invoker.size__I(lcA10);
if ((stI0) < (2)) { gt = 183; break IF; }
var stI0 = invoker.size__I(lcA10);
var stA1 = invoker.getParameters__Ljava_util_List_2(lcA1);
var stI1 = invoker.size__I(stA1);
if ((stI0) <= (stI1)) { gt = 189; break IF; }
    }
    X_183: for (;;) { IF: if (gt <= 183) {

var lcI11 = 1;
{ gt = 422; break IF; }
    }
    X_189: for (;;) { IF: if (gt <= 189) {

var stA0 = invoker.get__Ljava_lang_Object_2I(lcA10,0);
if (stA0 !== null && !stA0['$instOf_javax_lang_model_element_VariableElement']) vm.java_lang_Class(false).castEx(stA0, 'javax.lang.model.element.VariableElement');
var stA0 = invoker.asType__Ljavax_lang_model_type_TypeMirror_2(stA0);
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
var lcA12 = stA0;
var stI0 = invoker.lastIndexOf__II(lcA12,(46));
var lcI13 = stI0;
if ((lcI13) == (-1)) { gt = 238; break IF; }
var stA0 = invoker.substring__Ljava_lang_String_2I(lcA12,(((lcI13) + (1)) | 0));
var lcA12 = stA0;
    }
    X_238: for (;;) { IF: if (gt <= 238) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA12,lcA4);
if ((stI0) != 0) { gt = 251; break IF; }
var lcI11 = 1;
    }
    X_251: for (;;) { IF: if (gt <= 251) {

var stA0 = invoker.getTypeUtils__Ljavax_lang_model_util_Types_2(c['_processingEnv'].call(lcA0));
var stA1 = lcA9;var stA2 = invoker.get__Ljava_lang_Object_2I(lcA10,1);
if (stA2 !== null && !stA2['$instOf_javax_lang_model_element_VariableElement']) vm.java_lang_Class(false).castEx(stA2, 'javax.lang.model.element.VariableElement');
var stA2 = invoker.asType__Ljavax_lang_model_type_TypeMirror_2(stA2);
var stI0 = invoker.isAssignable__ZLjavax_lang_model_type_TypeMirror_2Ljavax_lang_model_type_TypeMirror_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 289; break IF; }
var lcI11 = 1;
    }
    X_289: for (;;) { IF: if (gt <= 289) {

var lcI14 = 2;
    }
    X_292: for (;;) { IF: if (gt <= 292) {

var stI0 = lcI14;var stI1 = invoker.size__I(lcA10);
if ((stI0) >= (stI1)) { gt = 422; break IF; }
var stA0 = invoker.getParameters__Ljava_util_List_2(lcA1);
var stA0 = invoker.get__Ljava_lang_Object_2I(stA0,lcI14);
if (stA0 !== null && !stA0['$instOf_javax_lang_model_element_VariableElement']) vm.java_lang_Class(false).castEx(stA0, 'javax.lang.model.element.VariableElement');
var lcA15 = stA0;
var stA0 = invoker.getTypeUtils__Ljavax_lang_model_util_Types_2(c['_processingEnv'].call(lcA0));
var stA1 = invoker.get__Ljava_lang_Object_2I(lcA10,lcI14);
if (stA1 !== null && !stA1['$instOf_javax_lang_model_element_VariableElement']) vm.java_lang_Class(false).castEx(stA1, 'javax.lang.model.element.VariableElement');
var stA1 = invoker.asType__Ljavax_lang_model_type_TypeMirror_2(stA1);
var stA2 = invoker.getParameters__Ljava_util_List_2(lcA1);
var stA2 = invoker.get__Ljava_lang_Object_2I(stA2,lcI14);
if (stA2 !== null && !stA2['$instOf_javax_lang_model_element_VariableElement']) vm.java_lang_Class(false).castEx(stA2, 'javax.lang.model.element.VariableElement');
var stA2 = invoker.asType__Ljavax_lang_model_type_TypeMirror_2(stA2);
var stI0 = invoker.isSameType__ZLjavax_lang_model_type_TypeMirror_2Ljavax_lang_model_type_TypeMirror_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 416; break IF; }
var lcI11 = 1;
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"Parameter #");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2I(stA0,(((lcI14) + (1)) | 0));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0," should be of type ");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2(stA0,lcA15);
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
var lcA5 = stA0;
    }
    X_416: for (;;) { IF: if (gt <= 416) {
lcI14++;
{ gt = 0; continue X_292; }
    }
    X_422: for (;;) { IF: if (gt <= 422) {

if ((lcI11) == 0) { gt = 470; break IF; }
if (lcA7 !== null && !lcA7['$instOf_javax_lang_model_element_ExecutableElement']) vm.java_lang_Class(false).castEx(lcA7, 'javax.lang.model.element.ExecutableElement');
var lcA1 = lcA7;
if ((lcA5) !== null) { gt = 0; continue X_16; }
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"Error method first argument needs to be ");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,lcA4);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0," and second Exception");
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
var lcA5 = stA0;
{ gt = 0; continue X_16; }
    }
    X_470: for (;;) { IF: if (gt <= 470) {

var stI0 = invoker.size__I(lcA10);
return stI0;
    }
    X_478: for (;;) { IF: if (gt <= 478) {

if ((lcA5) !== null) { gt = 521; break IF; }
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"Cannot find ");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,lcA3);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"(");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,lcA4);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,", Exception) method in this class");
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
var lcA5 = stA0;
    }
    X_521: for (;;) { IF: if (gt <= 521) {

c.error__VLjava_lang_String_2Ljavax_lang_model_element_Element_2.call(lcA0, lcA5, lcA1);
return -1;

    }
}}}}}}}}}}}}}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.findWrite__Ljavax_lang_model_element_ExecutableElement_2Ljavax_lang_model_element_ExecutableElement_2Ljavax_lang_model_element_TypeElement_2Ljava_lang_String_2Ljava_lang_String_2 = function(lcA1, lcA2, lcA3, lcA4) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var lcA5 = null;
var stA0 = invoker.getEnclosedElements__Ljava_util_List_2(lcA2);
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA6 = stA0;
    }
    X_16: for (;;) { IF: if (gt <= 16) {

var stI0 = invoker.hasNext__Z(lcA6);
if ((stI0) == 0) { gt = 352; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA6);
if (stA0 !== null && !stA0['$instOf_javax_lang_model_element_Element']) vm.java_lang_Class(false).castEx(stA0, 'javax.lang.model.element.Element');
var lcA7 = stA0;
var stA0 = invoker.getKind__Ljavax_lang_model_element_ElementKind_2(lcA7);
if ((stA0) === ((refs_javax_lang_model_element_ElementKind || (refs_javax_lang_model_element_ElementKind = vm.javax_lang_model_element_ElementKind(false)))['_METHOD']())) { gt = 54; break IF; }
{ gt = 0; continue X_16; }
    }
    X_54: for (;;) { IF: if (gt <= 54) {

var stA0 = invoker.getSimpleName__Ljavax_lang_model_element_Name_2(lcA7);
var stI0 = invoker.contentEquals__ZLjava_lang_CharSequence_2(stA0,lcA3);
if ((stI0) != 0) { gt = 73; break IF; }
{ gt = 0; continue X_16; }
    }
    X_73: for (;;) { IF: if (gt <= 73) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA7,lcA1);
if ((stI0) == 0) { gt = 87; break IF; }
{ gt = 0; continue X_16; }
    }
    X_87: for (;;) { IF: if (gt <= 87) {

var stA0 = invoker.getModifiers__Ljava_util_Set_2(lcA7);
var stI0 = invoker.contains__ZLjava_lang_Object_2(stA0,(refs_javax_lang_model_element_Modifier || (refs_javax_lang_model_element_Modifier = vm.javax_lang_model_element_Modifier(false)))['_STATIC']());
if ((stI0) != 0) { gt = 119; break IF; }
if (lcA7 !== null && !lcA7['$instOf_javax_lang_model_element_ExecutableElement']) vm.java_lang_Class(false).castEx(lcA7, 'javax.lang.model.element.ExecutableElement');
var lcA1 = lcA7;
var lcA5 = "Would have to be static";
{ gt = 0; continue X_16; }
    }
    X_119: for (;;) { IF: if (gt <= 119) {

if (lcA7 !== null && !lcA7['$instOf_javax_lang_model_element_ExecutableElement']) vm.java_lang_Class(false).castEx(lcA7, 'javax.lang.model.element.ExecutableElement');
var lcA8 = lcA7;
var stA0 = invoker.getReturnType__Ljavax_lang_model_type_TypeMirror_2(lcA8);
var stA0 = invoker.getKind__Ljavax_lang_model_type_TypeKind_2(stA0);
if ((stA0) === ((refs_javax_lang_model_type_TypeKind || (refs_javax_lang_model_type_TypeKind = vm.javax_lang_model_type_TypeKind(false)))['_VOID']())) { gt = 158; break IF; }
if (lcA7 !== null && !lcA7['$instOf_javax_lang_model_element_ExecutableElement']) vm.java_lang_Class(false).castEx(lcA7, 'javax.lang.model.element.ExecutableElement');
var lcA1 = lcA7;
var lcA5 = "Write method has to return void";
{ gt = 0; continue X_16; }
    }
    X_158: for (;;) { IF: if (gt <= 158) {

var stA0 = invoker.getReturnType__Ljavax_lang_model_type_TypeMirror_2(lcA1);
var lcA9 = stA0;
var stA0 = invoker.getParameters__Ljava_util_List_2(lcA8);
var lcA10 = stA0;
var lcI11 = 0;
var stI0 = invoker.size__I(lcA10);
if ((stI0) == (2)) { gt = 195; break IF; }
var lcI11 = 1;
{ gt = 295; break IF; }
    }
    X_195: for (;;) { IF: if (gt <= 195) {

var stA0 = invoker.get__Ljava_lang_Object_2I(lcA10,0);
if (stA0 !== null && !stA0['$instOf_javax_lang_model_element_VariableElement']) vm.java_lang_Class(false).castEx(stA0, 'javax.lang.model.element.VariableElement');
var stA0 = invoker.asType__Ljavax_lang_model_type_TypeMirror_2(stA0);
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
var lcA12 = stA0;
var stI0 = invoker.lastIndexOf__II(lcA12,(46));
var lcI13 = stI0;
if ((lcI13) == (-1)) { gt = 244; break IF; }
var stA0 = invoker.substring__Ljava_lang_String_2I(lcA12,(((lcI13) + (1)) | 0));
var lcA12 = stA0;
    }
    X_244: for (;;) { IF: if (gt <= 244) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA12,lcA4);
if ((stI0) != 0) { gt = 257; break IF; }
var lcI11 = 1;
    }
    X_257: for (;;) { IF: if (gt <= 257) {

var stA0 = invoker.getTypeUtils__Ljavax_lang_model_util_Types_2(c['_processingEnv'].call(lcA0));
var stA1 = lcA9;var stA2 = invoker.get__Ljava_lang_Object_2I(lcA10,1);
if (stA2 !== null && !stA2['$instOf_javax_lang_model_element_VariableElement']) vm.java_lang_Class(false).castEx(stA2, 'javax.lang.model.element.VariableElement');
var stA2 = invoker.asType__Ljavax_lang_model_type_TypeMirror_2(stA2);
var stI0 = invoker.isAssignable__ZLjavax_lang_model_type_TypeMirror_2Ljavax_lang_model_type_TypeMirror_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 295; break IF; }
var lcI11 = 1;
    }
    X_295: for (;;) { IF: if (gt <= 295) {

if ((lcI11) == 0) { gt = 349; break IF; }
if (lcA7 !== null && !lcA7['$instOf_javax_lang_model_element_ExecutableElement']) vm.java_lang_Class(false).castEx(lcA7, 'javax.lang.model.element.ExecutableElement');
var lcA1 = lcA7;
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"Write method first argument needs to be ");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,lcA4);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0," and second ");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2(stA0,lcA9);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0," or Object");
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
var lcA5 = stA0;
{ gt = 0; continue X_16; }
    }
    X_349: for (;;) { IF: if (gt <= 349) {

return lcA8;
    }
    X_352: for (;;) { IF: if (gt <= 352) {

if ((lcA5) !== null) { gt = 395; break IF; }
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"Cannot find ");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,lcA3);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"(");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,lcA4);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,", value) method in this class");
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
var lcA5 = stA0;
    }
    X_395: for (;;) { IF: if (gt <= 395) {

c.error__VLjava_lang_String_2Ljavax_lang_model_element_Element_2.call(lcA0, lcA5, lcA1);
return null;

    }
}}}}}}}}}}}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = invoker.getName__Ljava_lang_String_2(c.constructor.$class);
var stA0 = (refs_java_util_logging_Logger || (refs_java_util_logging_Logger = vm.java_util_logging_Logger(false)))['getLogger__Ljava_util_logging_Logger_2Ljava_lang_String_2'](stA0);
c._LOG(stA0);
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
    function __div32(x, y) {
        if (y === 0) __handleDivByZero();
        return (x / y) | 0;
    }

    c.constructor = CLS;
    function org_netbeans_html_json_impl_ModelProcessorfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_json_impl_ModelProcessor', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_json_impl_ModelProcessorfillInstOf });
    org_netbeans_html_json_impl_ModelProcessorfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/json/impl/ModelProcessor';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    CLS.$class.anno = {"Ljavax/annotation/processing/SupportedSourceVersion;" : {
"value" : (refs_javax_lang_model_SourceVersion || (refs_javax_lang_model_SourceVersion = vm.javax_lang_model_SourceVersion(false)))['valueOf__Ljavax_lang_model_SourceVersion_2Ljava_lang_String_2']('RELEASE_6')
}
,"Ljavax/annotation/processing/SupportedAnnotationTypes;" : {
"value" : ["net.java.html.json.Model",
"net.java.html.json.ModelOperation",
"net.java.html.json.Function",
"net.java.html.json.OnReceive",
"net.java.html.json.OnPropertyChange",
"net.java.html.json.ComputedProperty",
"net.java.html.json.Property"]
}

    };
    c.class__V();
    var refs_javax_annotation_processing_AbstractProcessor;
    var refs_java_util_WeakHashMap;
    var refs_net_java_html_json_Model;
    var refs_org_netbeans_html_json_impl_ModelProcessor$Prprt;
    var refs_java_lang_StringBuilder;
    var refs_javax_tools_Diagnostic$Kind;
    var refs_java_io_StringWriter;
    var refs_java_util_ArrayList;
    var refs_java_util_HashMap;
    var refs_java_io_OutputStreamWriter;
    var refs_javax_lang_model_element_ElementKind;
    var refs_javax_lang_model_element_Modifier;
    var refs_java_util_Arrays;
    var refs_java_lang_Character;
    var refs_org_netbeans_html_json_impl_ModelProcessor$GetSet;
    var refs_net_java_html_json_ComputedProperty;
    var refs_org_netbeans_html_json_impl_Transitive;
    var refs_java_util_LinkedHashSet;
    var refs_javax_lang_model_type_TypeKind;
    var refs_java_lang_Boolean;
    var refs_java_lang_Byte;
    var refs_java_lang_Short;
    var refs_java_lang_Integer;
    var refs_java_lang_Long;
    var refs_java_lang_Float;
    var refs_java_lang_Double;
    var refs_net_java_html_json_Function;
    var refs_net_java_html_json_OnPropertyChange;
    var refs_net_java_html_json_ModelOperation;
    var refs_net_java_html_json_OnReceive;
    var refs_java_util_HashSet;
    var refs_java_lang_Class;
    var refs_javax_annotation_processing_ProcessingEnvironment;
    var refs_javax_lang_model_element_Element;
    var refs_javax_lang_model_element_AnnotationMirror;
    var refs_java_util_Collections;
    var refs_java_util_logging_Level;
    var refs_java_util_ResourceBundle;
    var refs_javax_annotation_processing_Completions;
    var refs_java_lang_Exception;
    var refs_java_util_logging_Logger;
    var refs_javax_lang_model_SourceVersion;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_org_netbeans_html_json_impl_ModelProcessor_models'] = null;
    this['fld_org_netbeans_html_json_impl_ModelProcessor_verify'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_netbeans_html_json_impl_ModelProcessor = registerClass(exports,'org_netbeans_html_json_impl_ModelProcessor',org_netbeans_html_json_impl_ModelProcessor);

vm.javax_annotation_processing_SupportedAnnotationTypes = link('javax/annotation/processing/SupportedAnnotationTypes', function(f) { vm.javax_annotation_processing_SupportedAnnotationTypes =  f; });
vm.javax_lang_model_SourceVersion = link('javax/lang/model/SourceVersion', function(f) { vm.javax_lang_model_SourceVersion =  f; });
vm.javax_annotation_processing_SupportedSourceVersion = link('javax/annotation/processing/SupportedSourceVersion', function(f) { vm.javax_annotation_processing_SupportedSourceVersion =  f; });
vm.java_util_logging_Logger = link('java/util/logging/Logger', function(f) { vm.java_util_logging_Logger =  f; });
vm.javax_annotation_processing_Completions = link('javax/annotation/processing/Completions', function(f) { vm.javax_annotation_processing_Completions =  f; });
vm.java_util_ResourceBundle = link('java/util/ResourceBundle', function(f) { vm.java_util_ResourceBundle =  f; });
vm.java_util_logging_Level = link('java/util/logging/Level', function(f) { vm.java_util_logging_Level =  f; });
vm.java_util_Collections = link('java/util/Collections', function(f) { vm.java_util_Collections =  f; });
vm.javax_lang_model_element_AnnotationMirror = link('javax/lang/model/element/AnnotationMirror', function(f) { vm.javax_lang_model_element_AnnotationMirror =  f; });
vm.javax_lang_model_element_Element = link('javax/lang/model/element/Element', function(f) { vm.javax_lang_model_element_Element =  f; });
vm.javax_annotation_processing_ProcessingEnvironment = link('javax/annotation/processing/ProcessingEnvironment', function(f) { vm.javax_annotation_processing_ProcessingEnvironment =  f; });
vm.java_util_HashSet = link('java/util/HashSet', function(f) { vm.java_util_HashSet =  f; });
vm.javax_lang_model_type_MirroredTypeException = link('javax/lang/model/type/MirroredTypeException', function(f) { vm.javax_lang_model_type_MirroredTypeException =  f; });
vm.javax_lang_model_type_TypeKind = link('javax/lang/model/type/TypeKind', function(f) { vm.javax_lang_model_type_TypeKind =  f; });
vm.java_util_LinkedHashSet = link('java/util/LinkedHashSet', function(f) { vm.java_util_LinkedHashSet =  f; });

function org_netbeans_html_json_impl_Transitive() {
  var m;
  var CLS = org_netbeans_html_json_impl_Transitive;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = c.deep__Z = function() {
  return 0;
};
    m.access = 1025;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_json_impl_TransitivefillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_json_impl_Transitive', { value : true });
      vm.java_lang_annotation_Annotation(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_json_impl_TransitivefillInstOf });
    org_netbeans_html_json_impl_TransitivefillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/json/impl/Transitive';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.java_lang_annotation_Annotation(false).constructor.$class
    ]; };
    CLS.$class.access = 9728;
    CLS.$class.cnstr = CLS;
    CLS.$class.anno = {"Ljava/lang/annotation/Retention;" : {
"value" : (refs_java_lang_annotation_RetentionPolicy || (refs_java_lang_annotation_RetentionPolicy = vm.java_lang_annotation_RetentionPolicy(false)))['valueOf__Ljava_lang_annotation_RetentionPolicy_2Ljava_lang_String_2']('SOURCE')
}
,"Ljava/lang/annotation/Target;" : {
"value" : [(refs_java_lang_annotation_ElementType || (refs_java_lang_annotation_ElementType = vm.java_lang_annotation_ElementType(false)))['valueOf__Ljava_lang_annotation_ElementType_2Ljava_lang_String_2']('METHOD')]
}

    };
    var refs_java_lang_annotation_RetentionPolicy;
    var refs_java_lang_annotation_ElementType;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_netbeans_html_json_impl_Transitive = org_netbeans_html_json_impl_Transitive;

vm.java_util_Arrays = link('java/util/Arrays', function(f) { vm.java_util_Arrays =  f; });
vm.javax_lang_model_element_Modifier = link('javax/lang/model/element/Modifier', function(f) { vm.javax_lang_model_element_Modifier =  f; });
vm.javax_lang_model_element_ElementKind = link('javax/lang/model/element/ElementKind', function(f) { vm.javax_lang_model_element_ElementKind =  f; });
vm.java_io_OutputStreamWriter = link('java/io/OutputStreamWriter', function(f) { vm.java_io_OutputStreamWriter =  f; });
vm.java_util_HashMap = link('java/util/HashMap', function(f) { vm.java_util_HashMap =  f; });
vm.java_util_ArrayList = link('java/util/ArrayList', function(f) { vm.java_util_ArrayList =  f; });
vm.java_io_StringWriter = link('java/io/StringWriter', function(f) { vm.java_io_StringWriter =  f; });
vm.java_util_WeakHashMap = link('java/util/WeakHashMap', function(f) { vm.java_util_WeakHashMap =  f; });
vm.javax_annotation_processing_AbstractProcessor = link('javax/annotation/processing/AbstractProcessor', function(f) { vm.javax_annotation_processing_AbstractProcessor =  f; });
vm.java_lang_annotation_AnnotationTypeMismatchException = link('java/lang/annotation/AnnotationTypeMismatchException', function(f) { vm.java_lang_annotation_AnnotationTypeMismatchException =  f; });
vm.java_lang_annotation_IncompleteAnnotationException = link('java/lang/annotation/IncompleteAnnotationException', function(f) { vm.java_lang_annotation_IncompleteAnnotationException =  f; });

function org_netbeans_html_json_spi_Technology$ApplyId() {
  var m;
  var CLS = org_netbeans_html_json_spi_Technology$ApplyId;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = c.applyBindings__VLjava_lang_String_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
};
c['applyBindings__VLjava_lang_String_2Ljava_lang_Object_2'] = m;

    m.access = 1025;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_json_spi_Technology$ApplyIdfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_json_spi_Technology$ApplyId', { value : true });
      vm.org_netbeans_html_json_spi_Technology(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_json_spi_Technology$ApplyIdfillInstOf });
    org_netbeans_html_json_spi_Technology$ApplyIdfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/json/spi/Technology$ApplyId';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        org_netbeans_html_json_spi_Technology(false).constructor.$class
    ]; };
    CLS.$class.access = 1537;
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
vm.org_netbeans_html_json_spi_Technology$ApplyId = registerClass(exports,'org_netbeans_html_json_spi_Technology$ApplyId',org_netbeans_html_json_spi_Technology$ApplyId);


function org_netbeans_html_json_spi_Technology$BatchCopy() {
  var m;
  var CLS = org_netbeans_html_json_spi_Technology$BatchCopy;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = c.wrapModel__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lorg_netbeans_html_json_spi_PropertyBinding_2_3Lorg_netbeans_html_json_spi_FunctionBinding_2 = function(lcA1, lcA2, lcA3, lcA4) {
};
c['wrapModel__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lorg_netbeans_html_json_spi_PropertyBinding_2_3Lorg_netbeans_html_json_spi_FunctionBinding_2'] = m;

    m.access = 1025;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_json_spi_Technology$BatchCopyfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_json_spi_Technology$BatchCopy', { value : true });
      vm.org_netbeans_html_json_spi_Technology(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_json_spi_Technology$BatchCopyfillInstOf });
    org_netbeans_html_json_spi_Technology$BatchCopyfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/json/spi/Technology$BatchCopy';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        org_netbeans_html_json_spi_Technology(false).constructor.$class
    ]; };
    CLS.$class.access = 1537;
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
vm.org_netbeans_html_json_spi_Technology$BatchCopy = registerClass(exports,'org_netbeans_html_json_spi_Technology$BatchCopy',org_netbeans_html_json_spi_Technology$BatchCopy);


function org_netbeans_html_json_spi_Technology$BatchInit() {
  var m;
  var CLS = org_netbeans_html_json_spi_Technology$BatchInit;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = c.wrapModel__Ljava_lang_Object_2Ljava_lang_Object_2_3Lorg_netbeans_html_json_spi_PropertyBinding_2_3Lorg_netbeans_html_json_spi_FunctionBinding_2 = function(lcA1, lcA2, lcA3) {
};
c['wrapModel__Ljava_lang_Object_2Ljava_lang_Object_2_3Lorg_netbeans_html_json_spi_PropertyBinding_2_3Lorg_netbeans_html_json_spi_FunctionBinding_2'] = m;

    m.access = 1025;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_json_spi_Technology$BatchInitfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_json_spi_Technology$BatchInit', { value : true });
      vm.org_netbeans_html_json_spi_Technology(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_json_spi_Technology$BatchInitfillInstOf });
    org_netbeans_html_json_spi_Technology$BatchInitfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/json/spi/Technology$BatchInit';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        org_netbeans_html_json_spi_Technology(false).constructor.$class
    ]; };
    CLS.$class.access = 1537;
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
vm.org_netbeans_html_json_spi_Technology$BatchInit = registerClass(exports,'org_netbeans_html_json_spi_Technology$BatchInit',org_netbeans_html_json_spi_Technology$BatchInit);


function org_netbeans_html_json_spi_Technology$ToJavaScript() {
  var m;
  var CLS = org_netbeans_html_json_spi_Technology$ToJavaScript;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = c.toJavaScript__Ljava_lang_Object_2Ljava_lang_Object_2 = function(lcA1) {
};
c['toJavaScript__Ljava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 1025;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_json_spi_Technology$ToJavaScriptfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_json_spi_Technology$ToJavaScript', { value : true });
      vm.org_netbeans_html_json_spi_Technology(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_json_spi_Technology$ToJavaScriptfillInstOf });
    org_netbeans_html_json_spi_Technology$ToJavaScriptfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/json/spi/Technology$ToJavaScript';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        org_netbeans_html_json_spi_Technology(false).constructor.$class
    ]; };
    CLS.$class.access = 1537;
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
vm.org_netbeans_html_json_spi_Technology$ToJavaScript = registerClass(exports,'org_netbeans_html_json_spi_Technology$ToJavaScript',org_netbeans_html_json_spi_Technology$ToJavaScript);


function org_netbeans_html_json_spi_Technology$ValueMutated() {
  var m;
  var CLS = org_netbeans_html_json_spi_Technology$ValueMutated;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = c.valueHasMutated__VLjava_lang_Object_2Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcA2, lcA3, lcA4) {
};
c['valueHasMutated__VLjava_lang_Object_2Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 1025;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_json_spi_Technology$ValueMutatedfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_json_spi_Technology$ValueMutated', { value : true });
      vm.org_netbeans_html_json_spi_Technology(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_json_spi_Technology$ValueMutatedfillInstOf });
    org_netbeans_html_json_spi_Technology$ValueMutatedfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/json/spi/Technology$ValueMutated';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        org_netbeans_html_json_spi_Technology(false).constructor.$class
    ]; };
    CLS.$class.access = 1537;
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
vm.org_netbeans_html_json_spi_Technology$ValueMutated = registerClass(exports,'org_netbeans_html_json_spi_Technology$ValueMutated',org_netbeans_html_json_spi_Technology$ValueMutated);

  invoker.get__Ljava_lang_Object_2I = function(target, p1) {
    return target['get__Ljava_lang_Object_2I'](p1);
  };
  invoker.set__Ljava_lang_Object_2ILjava_lang_Object_2 = function(target, p1, p2) {
    return target['set__Ljava_lang_Object_2ILjava_lang_Object_2'](p1,p2);
  };
  invoker.onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(target, p1, p2, p3, p4, p5) {
    return target['onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2'](p1,p2,p3,p4,p5);
  };
  invoker.onMessage__VLjava_lang_Object_2IILjava_lang_Object_2 = function(target, p1, p2, p3, p4) {
    return target['onMessage__VLjava_lang_Object_2IILjava_lang_Object_2'](p1,p2,p3,p4);
  };
  invoker.equals__ZLjava_lang_Object_2 = function(target, p1) {
    return target['equals__ZLjava_lang_Object_2'](p1);
  };
  invoker.hashCode__I = function(target) {
    return target['hashCode__I']();
  };
  invoker.isAssignableFrom__ZLjava_lang_Class_2 = function(target, p1) {
    return target['isAssignableFrom__ZLjava_lang_Class_2'](p1);
  };
  invoker.intValue__I = function(target) {
    return target['intValue__I']();
  };
  invoker.longValue__J = function(target) {
    return target['longValue__J']();
  };
  invoker.shortValue__S = function(target) {
    return target['shortValue__S']();
  };
  invoker.byteValue__B = function(target) {
    return target['byteValue__B']();
  };
  invoker.doubleValue__D = function(target) {
    return target['doubleValue__D']();
  };
  invoker.floatValue__F = function(target) {
    return target['floatValue__F']();
  };
  invoker.isEnum__Z = function(target) {
    return target['isEnum__Z']();
  };
  invoker.asSubclass__Ljava_lang_Class_2Ljava_lang_Class_2 = function(target, p1) {
    return target['asSubclass__Ljava_lang_Class_2Ljava_lang_Class_2'](p1);
  };
  invoker.cast__Ljava_lang_Object_2Ljava_lang_Object_2 = function(target, p1) {
    return target['cast__Ljava_lang_Object_2Ljava_lang_Object_2'](p1);
  };
  invoker.add__ZLjava_lang_Object_2 = function(target, p1) {
    return target['add__ZLjava_lang_Object_2'](p1);
  };
  invoker.clear__V = function(target) {
    return target['clear__V']();
  };
  invoker.addAll__ZLjava_util_Collection_2 = function(target, p1) {
    return target['addAll__ZLjava_util_Collection_2'](p1);
  };
  invoker.desiredAssertionStatus__Z = function(target) {
    return target['desiredAssertionStatus__Z']();
  };
  invoker.execute__VLjava_lang_Runnable_2 = function(target, p1) {
    return target['execute__VLjava_lang_Runnable_2'](p1);
  };
  invoker.loadJSON__VLorg_netbeans_html_json_spi_JSONCall_2 = function(target, p1) {
    return target['loadJSON__VLorg_netbeans_html_json_spi_JSONCall_2'](p1);
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
  invoker.getClass__Ljava_lang_Class_2 = function(target) {
    return target['getClass__Ljava_lang_Class_2']();
  };
  invoker.booleanValue__Z = function(target) {
    return target['booleanValue__Z']();
  };
  invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2 = function(target, p1) {
    return target['append__Ljava_lang_StringBuilder_2Ljava_lang_String_2'](p1);
  };
  invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2 = function(target, p1) {
    return target['append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2'](p1);
  };
  invoker.toString__Ljava_lang_String_2 = function(target) {
    return target['toString__Ljava_lang_String_2']();
  };
  invoker.size__I = function(target) {
    return target['size__I']();
  };
  invoker.onChange__VLjava_lang_Object_2I = function(target, p1, p2) {
    return target['onChange__VLjava_lang_Object_2I'](p1,p2);
  };
  invoker.get__Ljava_lang_Object_2 = function(target) {
    return target['get__Ljava_lang_Object_2']();
  };
  invoker.protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2 = function(target, p1) {
    return target['protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2'](p1);
  };
  invoker.cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2 = function(target, p1, p2) {
    return target['cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](p1,p2);
  };
  invoker.read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(target, p1, p2) {
    return target['read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2'](p1,p2);
  };
  invoker.setValue__VLjava_lang_Object_2ILjava_lang_Object_2 = function(target, p1, p2, p3) {
    return target['setValue__VLjava_lang_Object_2ILjava_lang_Object_2'](p1,p2,p3);
  };
  invoker.getValue__Ljava_lang_Object_2Ljava_lang_Object_2I = function(target, p1, p2) {
    return target['getValue__Ljava_lang_Object_2Ljava_lang_Object_2I'](p1,p2);
  };
  invoker.getBytes___3BLjava_lang_String_2 = function(target, p1) {
    return target['getBytes___3BLjava_lang_String_2'](p1);
  };
  invoker.write__V_3B = function(target, p1) {
    return target['write__V_3B'](p1);
  };
  invoker.flush__V = function(target) {
    return target['flush__V']();
  };
  invoker.call__Ljava_lang_Object_2 = function(target) {
    return target['call__Ljava_lang_Object_2']();
  };
  invoker.call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(target, p1, p2, p3, p4) {
    return target['call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2'](p1,p2,p3,p4);
  };
  invoker.printStackTrace__V = function(target) {
    return target['printStackTrace__V']();
  };
  invoker.wrapModel__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lorg_netbeans_html_json_spi_PropertyBinding_2_3Lorg_netbeans_html_json_spi_FunctionBinding_2 = function(target, p1, p2, p3, p4) {
    return target['wrapModel__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2_3Lorg_netbeans_html_json_spi_PropertyBinding_2_3Lorg_netbeans_html_json_spi_FunctionBinding_2'](p1,p2,p3,p4);
  };
  invoker.wrapModel__Ljava_lang_Object_2Ljava_lang_Object_2_3Lorg_netbeans_html_json_spi_PropertyBinding_2_3Lorg_netbeans_html_json_spi_FunctionBinding_2 = function(target, p1, p2, p3) {
    return target['wrapModel__Ljava_lang_Object_2Ljava_lang_Object_2_3Lorg_netbeans_html_json_spi_PropertyBinding_2_3Lorg_netbeans_html_json_spi_FunctionBinding_2'](p1,p2,p3);
  };
  invoker.wrapModel__Ljava_lang_Object_2Ljava_lang_Object_2 = function(target, p1) {
    return target['wrapModel__Ljava_lang_Object_2Ljava_lang_Object_2'](p1);
  };
  invoker.bind__VLorg_netbeans_html_json_spi_PropertyBinding_2Ljava_lang_Object_2Ljava_lang_Object_2 = function(target, p1, p2, p3) {
    return target['bind__VLorg_netbeans_html_json_spi_PropertyBinding_2Ljava_lang_Object_2Ljava_lang_Object_2'](p1,p2,p3);
  };
  invoker.expose__VLorg_netbeans_html_json_spi_FunctionBinding_2Ljava_lang_Object_2Ljava_lang_Object_2 = function(target, p1, p2, p3) {
    return target['expose__VLorg_netbeans_html_json_spi_FunctionBinding_2Ljava_lang_Object_2Ljava_lang_Object_2'](p1,p2,p3);
  };
  invoker.toJavaScript__Ljava_lang_Object_2Ljava_lang_Object_2 = function(target, p1) {
    return target['toJavaScript__Ljava_lang_Object_2Ljava_lang_Object_2'](p1);
  };
  invoker.valueHasMutated__VLjava_lang_Object_2Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2 = function(target, p1, p2, p3, p4) {
    return target['valueHasMutated__VLjava_lang_Object_2Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2'](p1,p2,p3,p4);
  };
  invoker.valueHasMutated__VLjava_lang_Object_2Ljava_lang_String_2 = function(target, p1, p2) {
    return target['valueHasMutated__VLjava_lang_Object_2Ljava_lang_String_2'](p1,p2);
  };
  invoker.applyBindings__VLjava_lang_String_2Ljava_lang_Object_2 = function(target, p1, p2) {
    return target['applyBindings__VLjava_lang_String_2Ljava_lang_Object_2'](p1,p2);
  };
  invoker.applyBindings__VLjava_lang_Object_2 = function(target, p1) {
    return target['applyBindings__VLjava_lang_Object_2'](p1);
  };
  invoker.wrapArray__Ljava_lang_Object_2_3Ljava_lang_Object_2 = function(target, p1) {
    return target['wrapArray__Ljava_lang_Object_2_3Ljava_lang_Object_2'](p1);
  };
  invoker.open__Ljava_lang_Object_2Ljava_lang_String_2Lorg_netbeans_html_json_spi_JSONCall_2 = function(target, p1, p2) {
    return target['open__Ljava_lang_Object_2Ljava_lang_String_2Lorg_netbeans_html_json_spi_JSONCall_2'](p1,p2);
  };
  invoker.close__VLjava_lang_Object_2 = function(target, p1) {
    return target['close__VLjava_lang_Object_2'](p1);
  };
  invoker.send__VLjava_lang_Object_2Lorg_netbeans_html_json_spi_JSONCall_2 = function(target, p1, p2) {
    return target['send__VLjava_lang_Object_2Lorg_netbeans_html_json_spi_JSONCall_2'](p1,p2);
  };
  invoker.append__Ljava_lang_StringBuilder_2C = function(target, p1) {
    return target['append__Ljava_lang_StringBuilder_2C'](p1);
  };
  invoker.toArray___3Ljava_lang_Object_2_3Ljava_lang_Object_2 = function(target, p1) {
    return target['toArray___3Ljava_lang_Object_2_3Ljava_lang_Object_2'](p1);
  };
  invoker.listIterator__Ljava_util_ListIterator_2I = function(target, p1) {
    return target['listIterator__Ljava_util_ListIterator_2I'](p1);
  };
  invoker.hasPrevious__Z = function(target) {
    return target['hasPrevious__Z']();
  };
  invoker.previous__Ljava_lang_Object_2 = function(target) {
    return target['previous__Ljava_lang_Object_2']();
  };
  invoker.remove__V = function(target) {
    return target['remove__V']();
  };
  invoker.indexOf__ILjava_lang_Object_2 = function(target, p1) {
    return target['indexOf__ILjava_lang_Object_2'](p1);
  };
  invoker.extract__VLjava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Object_2 = function(target, p1, p2, p3) {
    return target['extract__VLjava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Object_2'](p1,p2,p3);
  };
  invoker.charValue__C = function(target) {
    return target['charValue__C']();
  };
  invoker.length__I = function(target) {
    return target['length__I']();
  };
  invoker.charAt__CI = function(target, p1) {
    return target['charAt__CI'](p1);
  };
  invoker.toModel__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2 = function(target, p1, p2) {
    return target['toModel__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2'](p1,p2);
  };
  invoker.isEmpty__Z = function(target) {
    return target['isEmpty__Z']();
  };
  invoker.newInstance__Ljava_lang_Object_2 = function(target) {
    return target['newInstance__Ljava_lang_Object_2']();
  };
  invoker.toJSON__Ljava_lang_Object_2Ljava_io_InputStream_2 = function(target, p1) {
    return target['toJSON__Ljava_lang_Object_2Ljava_io_InputStream_2'](p1);
  };
  invoker.getClassLoader__Ljava_lang_ClassLoader_2 = function(target) {
    return target['getClassLoader__Ljava_lang_ClassLoader_2']();
  };
  invoker.getName__Ljava_lang_String_2 = function(target) {
    return target['getName__Ljava_lang_String_2']();
  };
  invoker.run__V = function(target) {
    return target['run__V']();
  };
  invoker.clone__Ljava_lang_Object_2 = function(target) {
    return target['clone__Ljava_lang_Object_2']();
  };
  invoker.contains__ZLjava_lang_Object_2 = function(target, p1) {
    return target['contains__ZLjava_lang_Object_2'](p1);
  };
  invoker.remove__ZLjava_lang_Object_2 = function(target, p1) {
    return target['remove__ZLjava_lang_Object_2'](p1);
  };
  invoker.compareTo__ILjava_lang_Object_2 = function(target, p1) {
    return target['compareTo__ILjava_lang_Object_2'](p1);
  };
  invoker.compare__ILjava_lang_Object_2Ljava_lang_Object_2 = function(target, p1, p2) {
    return target['compare__ILjava_lang_Object_2Ljava_lang_Object_2'](p1,p2);
  };
  invoker.getComponentType__Ljava_lang_Class_2 = function(target) {
    return target['getComponentType__Ljava_lang_Class_2']();
  };
  invoker.add__VILjava_lang_Object_2 = function(target, p1, p2) {
    return target['add__VILjava_lang_Object_2'](p1,p2);
  };
  invoker.addAll__ZILjava_util_Collection_2 = function(target, p1, p2) {
    return target['addAll__ZILjava_util_Collection_2'](p1,p2);
  };
  invoker.remove__Ljava_lang_Object_2I = function(target, p1) {
    return target['remove__Ljava_lang_Object_2I'](p1);
  };
  invoker.createProto__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2 = function(target, p1, p2) {
    return target['createProto__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](p1,p2);
  };
  invoker.get__Ljava_lang_Object_2Ljava_lang_Class_2 = function(target, p1) {
    return target['get__Ljava_lang_Object_2Ljava_lang_Class_2'](p1);
  };
  invoker.name__Ljava_lang_String_2 = function(target) {
    return target['name__Ljava_lang_String_2']();
  };
  invoker.array__Z = function(target) {
    return target['array__Z']();
  };
  invoker.mutable__Z = function(target) {
    return target['mutable__Z']();
  };
  invoker.type__Ljava_lang_Class_2 = function(target) {
    return target['type__Ljava_lang_Class_2']();
  };
  invoker.replace__Ljava_lang_String_2Ljava_lang_CharSequence_2Ljava_lang_CharSequence_2 = function(target, p1, p2) {
    return target['replace__Ljava_lang_String_2Ljava_lang_CharSequence_2Ljava_lang_CharSequence_2'](p1,p2);
  };
  invoker.startsWith__ZLjava_lang_String_2 = function(target, p1) {
    return target['startsWith__ZLjava_lang_String_2'](p1);
  };
  invoker.endsWith__ZLjava_lang_String_2 = function(target, p1) {
    return target['endsWith__ZLjava_lang_String_2'](p1);
  };
  invoker.substring__Ljava_lang_String_2II = function(target, p1, p2) {
    return target['substring__Ljava_lang_String_2II'](p1,p2);
  };
  invoker.getKind__Ljavax_lang_model_element_ElementKind_2 = function(target) {
    return target['getKind__Ljavax_lang_model_element_ElementKind_2']();
  };
  invoker.isClass__Z = function(target) {
    return target['isClass__Z']();
  };
  invoker.getAnnotationMirrors__Ljava_util_List_2 = function(target) {
    return target['getAnnotationMirrors__Ljava_util_List_2']();
  };
  invoker.getElementValues__Ljava_util_Map_2 = function(target) {
    return target['getElementValues__Ljava_util_Map_2']();
  };
  invoker.entrySet__Ljava_util_Set_2 = function(target) {
    return target['entrySet__Ljava_util_Set_2']();
  };
  invoker.getKey__Ljava_lang_Object_2 = function(target) {
    return target['getKey__Ljava_lang_Object_2']();
  };
  invoker.getSimpleName__Ljavax_lang_model_element_Name_2 = function(target) {
    return target['getSimpleName__Ljavax_lang_model_element_Name_2']();
  };
  invoker.contentEquals__ZLjava_lang_CharSequence_2 = function(target, p1) {
    return target['contentEquals__ZLjava_lang_CharSequence_2'](p1);
  };
  invoker.getValue__Ljava_lang_Object_2 = function(target) {
    return target['getValue__Ljava_lang_Object_2']();
  };
  invoker.getMessager__Ljavax_annotation_processing_Messager_2 = function(target) {
    return target['getMessager__Ljavax_annotation_processing_Messager_2']();
  };
  invoker.printMessage__VLjavax_tools_Diagnostic$Kind_2Ljava_lang_CharSequence_2Ljavax_lang_model_element_Element_2 = function(target, p1, p2, p3) {
    return target['printMessage__VLjavax_tools_Diagnostic$Kind_2Ljava_lang_CharSequence_2Ljavax_lang_model_element_Element_2'](p1,p2,p3);
  };
  invoker.getElementsAnnotatedWith__Ljava_util_Set_2Ljava_lang_Class_2 = function(target, p1) {
    return target['getElementsAnnotatedWith__Ljava_util_Set_2Ljava_lang_Class_2'](p1);
  };
  invoker.processingOver__Z = function(target) {
    return target['processingOver__Z']();
  };
  invoker.getQualifiedName__Ljavax_lang_model_element_Name_2 = function(target) {
    return target['getQualifiedName__Ljavax_lang_model_element_Name_2']();
  };
  invoker.getElementUtils__Ljavax_lang_model_util_Elements_2 = function(target) {
    return target['getElementUtils__Ljavax_lang_model_util_Elements_2']();
  };
  invoker.getTypeElement__Ljavax_lang_model_element_TypeElement_2Ljava_lang_CharSequence_2 = function(target, p1) {
    return target['getTypeElement__Ljavax_lang_model_element_TypeElement_2Ljava_lang_CharSequence_2'](p1);
  };
  invoker.getAnnotation__Ljava_lang_annotation_Annotation_2Ljava_lang_Class_2 = function(target, p1) {
    return target['getAnnotation__Ljava_lang_annotation_Annotation_2Ljava_lang_Class_2'](p1);
  };
  invoker.properties___3Lnet_java_html_json_Property_2 = function(target) {
    return target['properties___3Lnet_java_html_json_Property_2']();
  };
  invoker.className__Ljava_lang_String_2 = function(target) {
    return target['className__Ljava_lang_String_2']();
  };
  invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2 = function(target, p1, p2) {
    return target['put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2'](p1,p2);
  };
  invoker.getEnclosedElements__Ljava_util_List_2 = function(target) {
    return target['getEnclosedElements__Ljava_util_List_2']();
  };
  invoker.getFiler__Ljavax_annotation_processing_Filer_2 = function(target) {
    return target['getFiler__Ljavax_annotation_processing_Filer_2']();
  };
  invoker.createSourceFile__Ljavax_tools_JavaFileObject_2Ljava_lang_CharSequence_2_3Ljavax_lang_model_element_Element_2 = function(target, p1, p2) {
    return target['createSourceFile__Ljavax_tools_JavaFileObject_2Ljava_lang_CharSequence_2_3Ljavax_lang_model_element_Element_2'](p1,p2);
  };
  invoker.openOutputStream__Ljava_io_OutputStream_2 = function(target) {
    return target['openOutputStream__Ljava_io_OutputStream_2']();
  };
  invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2 = function(target, p1) {
    return target['append__Ljava_io_Writer_2Ljava_lang_CharSequence_2'](p1);
  };
  invoker.instance__Z = function(target) {
    return target['instance__Z']();
  };
  invoker.getParameters__Ljava_util_List_2 = function(target) {
    return target['getParameters__Ljava_util_List_2']();
  };
  invoker.getModifiers__Ljava_util_Set_2 = function(target) {
    return target['getModifiers__Ljava_util_Set_2']();
  };
  invoker.write__VLjava_lang_String_2 = function(target, p1) {
    return target['write__VLjava_lang_String_2'](p1);
  };
  invoker.containsKey__ZLjava_lang_Object_2 = function(target, p1) {
    return target['containsKey__ZLjava_lang_Object_2'](p1);
  };
  invoker.keySet__Ljava_util_Set_2 = function(target) {
    return target['keySet__Ljava_util_Set_2']();
  };
  invoker.toArray___3Ljava_lang_Object_2 = function(target) {
    return target['toArray___3Ljava_lang_Object_2']();
  };
  invoker.append__Ljava_lang_StringBuilder_2I = function(target, p1) {
    return target['append__Ljava_lang_StringBuilder_2I'](p1);
  };
  invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2 = function(target, p1) {
    return target['get__Ljava_lang_Object_2Ljava_lang_Object_2'](p1);
  };
  invoker.write__VI = function(target, p1) {
    return target['write__VI'](p1);
  };
  invoker.append__Ljava_lang_StringBuilder_2Z = function(target, p1) {
    return target['append__Ljava_lang_StringBuilder_2Z'](p1);
  };
  invoker.append__Ljava_io_Writer_2C = function(target, p1) {
    return target['append__Ljava_io_Writer_2C'](p1);
  };
  invoker.close__V = function(target) {
    return target['close__V']();
  };
  invoker.builder__Ljava_lang_String_2 = function(target) {
    return target['builder__Ljava_lang_String_2']();
  };
  invoker.substring__Ljava_lang_String_2I = function(target, p1) {
    return target['substring__Ljava_lang_String_2I'](p1);
  };
  invoker.write__Ljava_lang_String_2 = function(target) {
    return target['write__Ljava_lang_String_2']();
  };
  invoker.getEnclosingElement__Ljavax_lang_model_element_Element_2 = function(target) {
    return target['getEnclosingElement__Ljavax_lang_model_element_Element_2']();
  };
  invoker.getReturnType__Ljavax_lang_model_type_TypeMirror_2 = function(target) {
    return target['getReturnType__Ljavax_lang_model_type_TypeMirror_2']();
  };
  invoker.getTypeUtils__Ljavax_lang_model_util_Types_2 = function(target) {
    return target['getTypeUtils__Ljavax_lang_model_util_Types_2']();
  };
  invoker.erasure__Ljavax_lang_model_type_TypeMirror_2Ljavax_lang_model_type_TypeMirror_2 = function(target, p1) {
    return target['erasure__Ljavax_lang_model_type_TypeMirror_2Ljavax_lang_model_type_TypeMirror_2'](p1);
  };
  invoker.getTypeArguments__Ljava_util_List_2 = function(target) {
    return target['getTypeArguments__Ljava_util_List_2']();
  };
  invoker.getKind__Ljavax_lang_model_type_TypeKind_2 = function(target) {
    return target['getKind__Ljavax_lang_model_type_TypeKind_2']();
  };
  invoker.isPrimitive__Z = function(target) {
    return target['isPrimitive__Z']();
  };
  invoker.asType__Ljavax_lang_model_type_TypeMirror_2 = function(target) {
    return target['asType__Ljavax_lang_model_type_TypeMirror_2']();
  };
  invoker.isSubtype__ZLjavax_lang_model_type_TypeMirror_2Ljavax_lang_model_type_TypeMirror_2 = function(target, p1, p2) {
    return target['isSubtype__ZLjavax_lang_model_type_TypeMirror_2Ljavax_lang_model_type_TypeMirror_2'](p1,p2);
  };
  invoker.unboxedType__Ljavax_lang_model_type_PrimitiveType_2Ljavax_lang_model_type_TypeMirror_2 = function(target, p1) {
    return target['unboxedType__Ljavax_lang_model_type_PrimitiveType_2Ljavax_lang_model_type_TypeMirror_2'](p1);
  };
  invoker.asElement__Ljavax_lang_model_element_Element_2 = function(target) {
    return target['asElement__Ljavax_lang_model_element_Element_2']();
  };
  invoker.value___3Ljava_lang_String_2 = function(target) {
    return target['value___3Ljava_lang_String_2']();
  };
  invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_CharSequence_2 = function(target, p1) {
    return target['append__Ljava_lang_StringBuilder_2Ljava_lang_CharSequence_2'](p1);
  };
  invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2 = function(target, p1) {
    return target['append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2'](p1);
  };
  invoker.setLength__VI = function(target, p1) {
    return target['setLength__VI'](p1);
  };
  invoker.jsonp__Ljava_lang_String_2 = function(target) {
    return target['jsonp__Ljava_lang_String_2']();
  };
  invoker.method__Ljava_lang_String_2 = function(target) {
    return target['method__Ljava_lang_String_2']();
  };
  invoker.getComponentType__Ljavax_lang_model_type_TypeMirror_2 = function(target) {
    return target['getComponentType__Ljavax_lang_model_type_TypeMirror_2']();
  };
  invoker.headers___3Ljava_lang_String_2 = function(target) {
    return target['headers___3Ljava_lang_String_2']();
  };
  invoker.url__Ljava_lang_String_2 = function(target) {
    return target['url__Ljava_lang_String_2']();
  };
  invoker.contains__ZLjava_lang_CharSequence_2 = function(target, p1) {
    return target['contains__ZLjava_lang_CharSequence_2'](p1);
  };
  invoker.onError__Ljava_lang_String_2 = function(target) {
    return target['onError__Ljava_lang_String_2']();
  };
  invoker.append__Ljava_io_StringWriter_2C = function(target, p1) {
    return target['append__Ljava_io_StringWriter_2C'](p1);
  };
  invoker.lastIndexOf__II = function(target, p1) {
    return target['lastIndexOf__II'](p1);
  };
  invoker.asElement__Ljavax_lang_model_element_Element_2Ljavax_lang_model_type_TypeMirror_2 = function(target, p1) {
    return target['asElement__Ljavax_lang_model_element_Element_2Ljavax_lang_model_type_TypeMirror_2'](p1);
  };
  invoker.values__Ljava_util_Collection_2 = function(target) {
    return target['values__Ljava_util_Collection_2']();
  };
  invoker.insert__Ljava_lang_StringBuilder_2IC = function(target, p1, p2) {
    return target['insert__Ljava_lang_StringBuilder_2IC'](p1,p2);
  };
  invoker.insert__Ljava_lang_StringBuilder_2ILjava_lang_CharSequence_2 = function(target, p1, p2) {
    return target['insert__Ljava_lang_StringBuilder_2ILjava_lang_CharSequence_2'](p1,p2);
  };
  invoker.getPackageOf__Ljavax_lang_model_element_PackageElement_2Ljavax_lang_model_element_Element_2 = function(target, p1) {
    return target['getPackageOf__Ljavax_lang_model_element_PackageElement_2Ljavax_lang_model_element_Element_2'](p1);
  };
  invoker.getTypeMirror__Ljavax_lang_model_type_TypeMirror_2 = function(target) {
    return target['getTypeMirror__Ljavax_lang_model_type_TypeMirror_2']();
  };
  invoker.indexOf__III = function(target, p1, p2) {
    return target['indexOf__III'](p1,p2);
  };
  invoker.data__Ljava_lang_Class_2 = function(target) {
    return target['data__Ljava_lang_Class_2']();
  };
  invoker.getAnnotationType__Ljavax_lang_model_type_DeclaredType_2 = function(target) {
    return target['getAnnotationType__Ljavax_lang_model_type_DeclaredType_2']();
  };
  invoker.getMethod__Ljava_lang_reflect_Method_2Ljava_lang_String_2_3Ljava_lang_Class_2 = function(target, p1, p2) {
    return target['getMethod__Ljava_lang_reflect_Method_2Ljava_lang_String_2_3Ljava_lang_Class_2'](p1,p2);
  };
  invoker.invoke__Ljava_lang_Object_2Ljava_lang_Object_2_3Ljava_lang_Object_2 = function(target, p1, p2) {
    return target['invoke__Ljava_lang_Object_2Ljava_lang_Object_2_3Ljava_lang_Object_2'](p1,p2);
  };
  invoker.log__VLjava_util_logging_Level_2Ljava_lang_String_2Ljava_lang_Object_2 = function(target, p1, p2, p3) {
    return target['log__VLjava_util_logging_Level_2Ljava_lang_String_2Ljava_lang_Object_2'](p1,p2,p3);
  };
  invoker.getString__Ljava_lang_String_2Ljava_lang_String_2 = function(target, p1) {
    return target['getString__Ljava_lang_String_2Ljava_lang_String_2'](p1);
  };
  invoker.isAssignable__ZLjavax_lang_model_type_TypeMirror_2Ljavax_lang_model_type_TypeMirror_2 = function(target, p1, p2) {
    return target['isAssignable__ZLjavax_lang_model_type_TypeMirror_2Ljavax_lang_model_type_TypeMirror_2'](p1,p2);
  };
  invoker.isSameType__ZLjavax_lang_model_type_TypeMirror_2Ljavax_lang_model_type_TypeMirror_2 = function(target, p1, p2) {
    return target['isSameType__ZLjavax_lang_model_type_TypeMirror_2Ljavax_lang_model_type_TypeMirror_2'](p1,p2);
  };
  exports['registerResource']('META-INF/MANIFEST.MF', 'TWFuaWZlc3QtVmVyc2lvbjogMS4wDQpCbmQtTGFzdE1vZGlmaWVkOiAxNTU3MDM1ODk0MzYzDQpCdWlsZC1KZGs6IDEuOC4wXzEyMg0KQnVpbHQtQnk6IGRldmVsDQpCdW5kbGUtRGVzY3JpcHRpb246IEFQSSBmb3Igc21vb3RoIHJlcHJlc2VudGF0aW9uIG9mIEpTT04gb2JqZWN0cyBpbiBKYXYNCiBhLiBXcml0ZSB5b3VyYXBwbGljYXRpb24gaW4gSmF2YSBhbmRwcmVzZW50IGl0IHVzaW5nIG1vZGVybiBIVE1MIHJlbmRlcg0KIGluZyB0ZWNobm9sb2dpZXMgbGlrZSBLbm9ja291dC4NCkJ1bmRsZS1Eb2NVUkw6IGh0dHA6Ly9hcGFjaGUub3JnDQpCdW5kbGUtTGljZW5zZTogaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMC50eHQNCkJ1bmRsZS1NYW5pZmVzdFZlcnNpb246IDINCkJ1bmRsZS1OYW1lOiBKU09OIE1vZGVsIGluIEphdmENCkJ1bmRsZS1TeW1ib2xpY05hbWU6IG5ldC5qYXZhLmh0bWwuanNvbg0KQnVuZGxlLVZlbmRvcjogVGhlIEFwYWNoZSBTb2Z0d2FyZSBGb3VuZGF0aW9uDQpCdW5kbGUtVmVyc2lvbjogMS42LjENCkNyZWF0ZWQtQnk6IEFwYWNoZSBNYXZlbiBCdW5kbGUgUGx1Z2luDQpFeHBvcnQtUGFja2FnZTogbmV0LmphdmEuaHRtbC5qc29uO3VzZXM6PSJuZXQuamF2YS5odG1sIjt2ZXJzaW9uPSIxLjYuMSINCiAsb3JnLm5ldGJlYW5zLmh0bWwuanNvbi5zcGk7dXNlczo9Im5ldC5qYXZhLmh0bWwiO3ZlcnNpb249IjEuNi4xIg0KSW1wb3J0LVBhY2thZ2U6IGphdmF4LmFubm90YXRpb24ucHJvY2Vzc2luZyxqYXZheC5sYW5nLm1vZGVsLGphdmF4LmxhbmcuDQogbW9kZWwuZWxlbWVudCxqYXZheC5sYW5nLm1vZGVsLnR5cGUsamF2YXgubGFuZy5tb2RlbC51dGlsLGphdmF4LnRvb2xzLG4NCiBldC5qYXZhLmh0bWw7dmVyc2lvbj0iWzEuNiwyKSIsb3JnLm5ldGJlYW5zLmh0bWwuY29udGV4dC5zcGk7dmVyc2lvbj0iWw0KIDEuNiwyKSINClRvb2w6IEJuZC0yLjEuMC4yMDEzMDQyNi0xMjIyMTMNCg==');
  exports['registerResource']('META-INF/DEPENDENCIES', 'Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tCi8vIFRyYW5zaXRpdmUgZGVwZW5kZW5jaWVzIG9mIHRoaXMgcHJvamVjdCBkZXRlcm1pbmVkIGZyb20gdGhlCi8vIG1hdmVuIHBvbSBvcmdhbml6ZWQgYnkgb3JnYW5pemF0aW9uLgovLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0KCkpTT04gTW9kZWwgaW4gSmF2YQoKCgoKCg==');
  exports['registerResource']('META-INF/LICENSE', 'CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwYWNoZSBMaWNlbnNlCiAgICAgICAgICAgICAgICAgICAgICAgICAgIFZlcnNpb24gMi4wLCBKYW51YXJ5IDIwMDQKICAgICAgICAgICAgICAgICAgICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzLwoKICAgVEVSTVMgQU5EIENPTkRJVElPTlMgRk9SIFVTRSwgUkVQUk9EVUNUSU9OLCBBTkQgRElTVFJJQlVUSU9OCgogICAxLiBEZWZpbml0aW9ucy4KCiAgICAgICJMaWNlbnNlIiBzaGFsbCBtZWFuIHRoZSB0ZXJtcyBhbmQgY29uZGl0aW9ucyBmb3IgdXNlLCByZXByb2R1Y3Rpb24sCiAgICAgIGFuZCBkaXN0cmlidXRpb24gYXMgZGVmaW5lZCBieSBTZWN0aW9ucyAxIHRocm91Z2ggOSBvZiB0aGlzIGRvY3VtZW50LgoKICAgICAgIkxpY2Vuc29yIiBzaGFsbCBtZWFuIHRoZSBjb3B5cmlnaHQgb3duZXIgb3IgZW50aXR5IGF1dGhvcml6ZWQgYnkKICAgICAgdGhlIGNvcHlyaWdodCBvd25lciB0aGF0IGlzIGdyYW50aW5nIHRoZSBMaWNlbnNlLgoKICAgICAgIkxlZ2FsIEVudGl0eSIgc2hhbGwgbWVhbiB0aGUgdW5pb24gb2YgdGhlIGFjdGluZyBlbnRpdHkgYW5kIGFsbAogICAgICBvdGhlciBlbnRpdGllcyB0aGF0IGNvbnRyb2wsIGFyZSBjb250cm9sbGVkIGJ5LCBvciBhcmUgdW5kZXIgY29tbW9uCiAgICAgIGNvbnRyb2wgd2l0aCB0aGF0IGVudGl0eS4gRm9yIHRoZSBwdXJwb3NlcyBvZiB0aGlzIGRlZmluaXRpb24sCiAgICAgICJjb250cm9sIiBtZWFucyAoaSkgdGhlIHBvd2VyLCBkaXJlY3Qgb3IgaW5kaXJlY3QsIHRvIGNhdXNlIHRoZQogICAgICBkaXJlY3Rpb24gb3IgbWFuYWdlbWVudCBvZiBzdWNoIGVudGl0eSwgd2hldGhlciBieSBjb250cmFjdCBvcgogICAgICBvdGhlcndpc2UsIG9yIChpaSkgb3duZXJzaGlwIG9mIGZpZnR5IHBlcmNlbnQgKDUwJSkgb3IgbW9yZSBvZiB0aGUKICAgICAgb3V0c3RhbmRpbmcgc2hhcmVzLCBvciAoaWlpKSBiZW5lZmljaWFsIG93bmVyc2hpcCBvZiBzdWNoIGVudGl0eS4KCiAgICAgICJZb3UiIChvciAiWW91ciIpIHNoYWxsIG1lYW4gYW4gaW5kaXZpZHVhbCBvciBMZWdhbCBFbnRpdHkKICAgICAgZXhlcmNpc2luZyBwZXJtaXNzaW9ucyBncmFudGVkIGJ5IHRoaXMgTGljZW5zZS4KCiAgICAgICJTb3VyY2UiIGZvcm0gc2hhbGwgbWVhbiB0aGUgcHJlZmVycmVkIGZvcm0gZm9yIG1ha2luZyBtb2RpZmljYXRpb25zLAogICAgICBpbmNsdWRpbmcgYnV0IG5vdCBsaW1pdGVkIHRvIHNvZnR3YXJlIHNvdXJjZSBjb2RlLCBkb2N1bWVudGF0aW9uCiAgICAgIHNvdXJjZSwgYW5kIGNvbmZpZ3VyYXRpb24gZmlsZXMuCgogICAgICAiT2JqZWN0IiBmb3JtIHNoYWxsIG1lYW4gYW55IGZvcm0gcmVzdWx0aW5nIGZyb20gbWVjaGFuaWNhbAogICAgICB0cmFuc2Zvcm1hdGlvbiBvciB0cmFuc2xhdGlvbiBvZiBhIFNvdXJjZSBmb3JtLCBpbmNsdWRpbmcgYnV0CiAgICAgIG5vdCBsaW1pdGVkIHRvIGNvbXBpbGVkIG9iamVjdCBjb2RlLCBnZW5lcmF0ZWQgZG9jdW1lbnRhdGlvbiwKICAgICAgYW5kIGNvbnZlcnNpb25zIHRvIG90aGVyIG1lZGlhIHR5cGVzLgoKICAgICAgIldvcmsiIHNoYWxsIG1lYW4gdGhlIHdvcmsgb2YgYXV0aG9yc2hpcCwgd2hldGhlciBpbiBTb3VyY2Ugb3IKICAgICAgT2JqZWN0IGZvcm0sIG1hZGUgYXZhaWxhYmxlIHVuZGVyIHRoZSBMaWNlbnNlLCBhcyBpbmRpY2F0ZWQgYnkgYQogICAgICBjb3B5cmlnaHQgbm90aWNlIHRoYXQgaXMgaW5jbHVkZWQgaW4gb3IgYXR0YWNoZWQgdG8gdGhlIHdvcmsKICAgICAgKGFuIGV4YW1wbGUgaXMgcHJvdmlkZWQgaW4gdGhlIEFwcGVuZGl4IGJlbG93KS4KCiAgICAgICJEZXJpdmF0aXZlIFdvcmtzIiBzaGFsbCBtZWFuIGFueSB3b3JrLCB3aGV0aGVyIGluIFNvdXJjZSBvciBPYmplY3QKICAgICAgZm9ybSwgdGhhdCBpcyBiYXNlZCBvbiAob3IgZGVyaXZlZCBmcm9tKSB0aGUgV29yayBhbmQgZm9yIHdoaWNoIHRoZQogICAgICBlZGl0b3JpYWwgcmV2aXNpb25zLCBhbm5vdGF0aW9ucywgZWxhYm9yYXRpb25zLCBvciBvdGhlciBtb2RpZmljYXRpb25zCiAgICAgIHJlcHJlc2VudCwgYXMgYSB3aG9sZSwgYW4gb3JpZ2luYWwgd29yayBvZiBhdXRob3JzaGlwLiBGb3IgdGhlIHB1cnBvc2VzCiAgICAgIG9mIHRoaXMgTGljZW5zZSwgRGVyaXZhdGl2ZSBXb3JrcyBzaGFsbCBub3QgaW5jbHVkZSB3b3JrcyB0aGF0IHJlbWFpbgogICAgICBzZXBhcmFibGUgZnJvbSwgb3IgbWVyZWx5IGxpbmsgKG9yIGJpbmQgYnkgbmFtZSkgdG8gdGhlIGludGVyZmFjZXMgb2YsCiAgICAgIHRoZSBXb3JrIGFuZCBEZXJpdmF0aXZlIFdvcmtzIHRoZXJlb2YuCgogICAgICAiQ29udHJpYnV0aW9uIiBzaGFsbCBtZWFuIGFueSB3b3JrIG9mIGF1dGhvcnNoaXAsIGluY2x1ZGluZwogICAgICB0aGUgb3JpZ2luYWwgdmVyc2lvbiBvZiB0aGUgV29yayBhbmQgYW55IG1vZGlmaWNhdGlvbnMgb3IgYWRkaXRpb25zCiAgICAgIHRvIHRoYXQgV29yayBvciBEZXJpdmF0aXZlIFdvcmtzIHRoZXJlb2YsIHRoYXQgaXMgaW50ZW50aW9uYWxseQogICAgICBzdWJtaXR0ZWQgdG8gTGljZW5zb3IgZm9yIGluY2x1c2lvbiBpbiB0aGUgV29yayBieSB0aGUgY29weXJpZ2h0IG93bmVyCiAgICAgIG9yIGJ5IGFuIGluZGl2aWR1YWwgb3IgTGVnYWwgRW50aXR5IGF1dGhvcml6ZWQgdG8gc3VibWl0IG9uIGJlaGFsZiBvZgogICAgICB0aGUgY29weXJpZ2h0IG93bmVyLiBGb3IgdGhlIHB1cnBvc2VzIG9mIHRoaXMgZGVmaW5pdGlvbiwgInN1Ym1pdHRlZCIKICAgICAgbWVhbnMgYW55IGZvcm0gb2YgZWxlY3Ryb25pYywgdmVyYmFsLCBvciB3cml0dGVuIGNvbW11bmljYXRpb24gc2VudAogICAgICB0byB0aGUgTGljZW5zb3Igb3IgaXRzIHJlcHJlc2VudGF0aXZlcywgaW5jbHVkaW5nIGJ1dCBub3QgbGltaXRlZCB0bwogICAgICBjb21tdW5pY2F0aW9uIG9uIGVsZWN0cm9uaWMgbWFpbGluZyBsaXN0cywgc291cmNlIGNvZGUgY29udHJvbCBzeXN0ZW1zLAogICAgICBhbmQgaXNzdWUgdHJhY2tpbmcgc3lzdGVtcyB0aGF0IGFyZSBtYW5hZ2VkIGJ5LCBvciBvbiBiZWhhbGYgb2YsIHRoZQogICAgICBMaWNlbnNvciBmb3IgdGhlIHB1cnBvc2Ugb2YgZGlzY3Vzc2luZyBhbmQgaW1wcm92aW5nIHRoZSBXb3JrLCBidXQKICAgICAgZXhjbHVkaW5nIGNvbW11bmljYXRpb24gdGhhdCBpcyBjb25zcGljdW91c2x5IG1hcmtlZCBvciBvdGhlcndpc2UKICAgICAgZGVzaWduYXRlZCBpbiB3cml0aW5nIGJ5IHRoZSBjb3B5cmlnaHQgb3duZXIgYXMgIk5vdCBhIENvbnRyaWJ1dGlvbi4iCgogICAgICAiQ29udHJpYnV0b3IiIHNoYWxsIG1lYW4gTGljZW5zb3IgYW5kIGFueSBpbmRpdmlkdWFsIG9yIExlZ2FsIEVudGl0eQogICAgICBvbiBiZWhhbGYgb2Ygd2hvbSBhIENvbnRyaWJ1dGlvbiBoYXMgYmVlbiByZWNlaXZlZCBieSBMaWNlbnNvciBhbmQKICAgICAgc3Vic2VxdWVudGx5IGluY29ycG9yYXRlZCB3aXRoaW4gdGhlIFdvcmsuCgogICAyLiBHcmFudCBvZiBDb3B5cmlnaHQgTGljZW5zZS4gU3ViamVjdCB0byB0aGUgdGVybXMgYW5kIGNvbmRpdGlvbnMgb2YKICAgICAgdGhpcyBMaWNlbnNlLCBlYWNoIENvbnRyaWJ1dG9yIGhlcmVieSBncmFudHMgdG8gWW91IGEgcGVycGV0dWFsLAogICAgICB3b3JsZHdpZGUsIG5vbi1leGNsdXNpdmUsIG5vLWNoYXJnZSwgcm95YWx0eS1mcmVlLCBpcnJldm9jYWJsZQogICAgICBjb3B5cmlnaHQgbGljZW5zZSB0byByZXByb2R1Y2UsIHByZXBhcmUgRGVyaXZhdGl2ZSBXb3JrcyBvZiwKICAgICAgcHVibGljbHkgZGlzcGxheSwgcHVibGljbHkgcGVyZm9ybSwgc3VibGljZW5zZSwgYW5kIGRpc3RyaWJ1dGUgdGhlCiAgICAgIFdvcmsgYW5kIHN1Y2ggRGVyaXZhdGl2ZSBXb3JrcyBpbiBTb3VyY2Ugb3IgT2JqZWN0IGZvcm0uCgogICAzLiBHcmFudCBvZiBQYXRlbnQgTGljZW5zZS4gU3ViamVjdCB0byB0aGUgdGVybXMgYW5kIGNvbmRpdGlvbnMgb2YKICAgICAgdGhpcyBMaWNlbnNlLCBlYWNoIENvbnRyaWJ1dG9yIGhlcmVieSBncmFudHMgdG8gWW91IGEgcGVycGV0dWFsLAogICAgICB3b3JsZHdpZGUsIG5vbi1leGNsdXNpdmUsIG5vLWNoYXJnZSwgcm95YWx0eS1mcmVlLCBpcnJldm9jYWJsZQogICAgICAoZXhjZXB0IGFzIHN0YXRlZCBpbiB0aGlzIHNlY3Rpb24pIHBhdGVudCBsaWNlbnNlIHRvIG1ha2UsIGhhdmUgbWFkZSwKICAgICAgdXNlLCBvZmZlciB0byBzZWxsLCBzZWxsLCBpbXBvcnQsIGFuZCBvdGhlcndpc2UgdHJhbnNmZXIgdGhlIFdvcmssCiAgICAgIHdoZXJlIHN1Y2ggbGljZW5zZSBhcHBsaWVzIG9ubHkgdG8gdGhvc2UgcGF0ZW50IGNsYWltcyBsaWNlbnNhYmxlCiAgICAgIGJ5IHN1Y2ggQ29udHJpYnV0b3IgdGhhdCBhcmUgbmVjZXNzYXJpbHkgaW5mcmluZ2VkIGJ5IHRoZWlyCiAgICAgIENvbnRyaWJ1dGlvbihzKSBhbG9uZSBvciBieSBjb21iaW5hdGlvbiBvZiB0aGVpciBDb250cmlidXRpb24ocykKICAgICAgd2l0aCB0aGUgV29yayB0byB3aGljaCBzdWNoIENvbnRyaWJ1dGlvbihzKSB3YXMgc3VibWl0dGVkLiBJZiBZb3UKICAgICAgaW5zdGl0dXRlIHBhdGVudCBsaXRpZ2F0aW9uIGFnYWluc3QgYW55IGVudGl0eSAoaW5jbHVkaW5nIGEKICAgICAgY3Jvc3MtY2xhaW0gb3IgY291bnRlcmNsYWltIGluIGEgbGF3c3VpdCkgYWxsZWdpbmcgdGhhdCB0aGUgV29yawogICAgICBvciBhIENvbnRyaWJ1dGlvbiBpbmNvcnBvcmF0ZWQgd2l0aGluIHRoZSBXb3JrIGNvbnN0aXR1dGVzIGRpcmVjdAogICAgICBvciBjb250cmlidXRvcnkgcGF0ZW50IGluZnJpbmdlbWVudCwgdGhlbiBhbnkgcGF0ZW50IGxpY2Vuc2VzCiAgICAgIGdyYW50ZWQgdG8gWW91IHVuZGVyIHRoaXMgTGljZW5zZSBmb3IgdGhhdCBXb3JrIHNoYWxsIHRlcm1pbmF0ZQogICAgICBhcyBvZiB0aGUgZGF0ZSBzdWNoIGxpdGlnYXRpb24gaXMgZmlsZWQuCgogICA0LiBSZWRpc3RyaWJ1dGlvbi4gWW91IG1heSByZXByb2R1Y2UgYW5kIGRpc3RyaWJ1dGUgY29waWVzIG9mIHRoZQogICAgICBXb3JrIG9yIERlcml2YXRpdmUgV29ya3MgdGhlcmVvZiBpbiBhbnkgbWVkaXVtLCB3aXRoIG9yIHdpdGhvdXQKICAgICAgbW9kaWZpY2F0aW9ucywgYW5kIGluIFNvdXJjZSBvciBPYmplY3QgZm9ybSwgcHJvdmlkZWQgdGhhdCBZb3UKICAgICAgbWVldCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6CgogICAgICAoYSkgWW91IG11c3QgZ2l2ZSBhbnkgb3RoZXIgcmVjaXBpZW50cyBvZiB0aGUgV29yayBvcgogICAgICAgICAgRGVyaXZhdGl2ZSBXb3JrcyBhIGNvcHkgb2YgdGhpcyBMaWNlbnNlOyBhbmQKCiAgICAgIChiKSBZb3UgbXVzdCBjYXVzZSBhbnkgbW9kaWZpZWQgZmlsZXMgdG8gY2FycnkgcHJvbWluZW50IG5vdGljZXMKICAgICAgICAgIHN0YXRpbmcgdGhhdCBZb3UgY2hhbmdlZCB0aGUgZmlsZXM7IGFuZAoKICAgICAgKGMpIFlvdSBtdXN0IHJldGFpbiwgaW4gdGhlIFNvdXJjZSBmb3JtIG9mIGFueSBEZXJpdmF0aXZlIFdvcmtzCiAgICAgICAgICB0aGF0IFlvdSBkaXN0cmlidXRlLCBhbGwgY29weXJpZ2h0LCBwYXRlbnQsIHRyYWRlbWFyaywgYW5kCiAgICAgICAgICBhdHRyaWJ1dGlvbiBub3RpY2VzIGZyb20gdGhlIFNvdXJjZSBmb3JtIG9mIHRoZSBXb3JrLAogICAgICAgICAgZXhjbHVkaW5nIHRob3NlIG5vdGljZXMgdGhhdCBkbyBub3QgcGVydGFpbiB0byBhbnkgcGFydCBvZgogICAgICAgICAgdGhlIERlcml2YXRpdmUgV29ya3M7IGFuZAoKICAgICAgKGQpIElmIHRoZSBXb3JrIGluY2x1ZGVzIGEgIk5PVElDRSIgdGV4dCBmaWxlIGFzIHBhcnQgb2YgaXRzCiAgICAgICAgICBkaXN0cmlidXRpb24sIHRoZW4gYW55IERlcml2YXRpdmUgV29ya3MgdGhhdCBZb3UgZGlzdHJpYnV0ZSBtdXN0CiAgICAgICAgICBpbmNsdWRlIGEgcmVhZGFibGUgY29weSBvZiB0aGUgYXR0cmlidXRpb24gbm90aWNlcyBjb250YWluZWQKICAgICAgICAgIHdpdGhpbiBzdWNoIE5PVElDRSBmaWxlLCBleGNsdWRpbmcgdGhvc2Ugbm90aWNlcyB0aGF0IGRvIG5vdAogICAgICAgICAgcGVydGFpbiB0byBhbnkgcGFydCBvZiB0aGUgRGVyaXZhdGl2ZSBXb3JrcywgaW4gYXQgbGVhc3Qgb25lCiAgICAgICAgICBvZiB0aGUgZm9sbG93aW5nIHBsYWNlczogd2l0aGluIGEgTk9USUNFIHRleHQgZmlsZSBkaXN0cmlidXRlZAogICAgICAgICAgYXMgcGFydCBvZiB0aGUgRGVyaXZhdGl2ZSBXb3Jrczsgd2l0aGluIHRoZSBTb3VyY2UgZm9ybSBvcgogICAgICAgICAgZG9jdW1lbnRhdGlvbiwgaWYgcHJvdmlkZWQgYWxvbmcgd2l0aCB0aGUgRGVyaXZhdGl2ZSBXb3Jrczsgb3IsCiAgICAgICAgICB3aXRoaW4gYSBkaXNwbGF5IGdlbmVyYXRlZCBieSB0aGUgRGVyaXZhdGl2ZSBXb3JrcywgaWYgYW5kCiAgICAgICAgICB3aGVyZXZlciBzdWNoIHRoaXJkLXBhcnR5IG5vdGljZXMgbm9ybWFsbHkgYXBwZWFyLiBUaGUgY29udGVudHMKICAgICAgICAgIG9mIHRoZSBOT1RJQ0UgZmlsZSBhcmUgZm9yIGluZm9ybWF0aW9uYWwgcHVycG9zZXMgb25seSBhbmQKICAgICAgICAgIGRvIG5vdCBtb2RpZnkgdGhlIExpY2Vuc2UuIFlvdSBtYXkgYWRkIFlvdXIgb3duIGF0dHJpYnV0aW9uCiAgICAgICAgICBub3RpY2VzIHdpdGhpbiBEZXJpdmF0aXZlIFdvcmtzIHRoYXQgWW91IGRpc3RyaWJ1dGUsIGFsb25nc2lkZQogICAgICAgICAgb3IgYXMgYW4gYWRkZW5kdW0gdG8gdGhlIE5PVElDRSB0ZXh0IGZyb20gdGhlIFdvcmssIHByb3ZpZGVkCiAgICAgICAgICB0aGF0IHN1Y2ggYWRkaXRpb25hbCBhdHRyaWJ1dGlvbiBub3RpY2VzIGNhbm5vdCBiZSBjb25zdHJ1ZWQKICAgICAgICAgIGFzIG1vZGlmeWluZyB0aGUgTGljZW5zZS4KCiAgICAgIFlvdSBtYXkgYWRkIFlvdXIgb3duIGNvcHlyaWdodCBzdGF0ZW1lbnQgdG8gWW91ciBtb2RpZmljYXRpb25zIGFuZAogICAgICBtYXkgcHJvdmlkZSBhZGRpdGlvbmFsIG9yIGRpZmZlcmVudCBsaWNlbnNlIHRlcm1zIGFuZCBjb25kaXRpb25zCiAgICAgIGZvciB1c2UsIHJlcHJvZHVjdGlvbiwgb3IgZGlzdHJpYnV0aW9uIG9mIFlvdXIgbW9kaWZpY2F0aW9ucywgb3IKICAgICAgZm9yIGFueSBzdWNoIERlcml2YXRpdmUgV29ya3MgYXMgYSB3aG9sZSwgcHJvdmlkZWQgWW91ciB1c2UsCiAgICAgIHJlcHJvZHVjdGlvbiwgYW5kIGRpc3RyaWJ1dGlvbiBvZiB0aGUgV29yayBvdGhlcndpc2UgY29tcGxpZXMgd2l0aAogICAgICB0aGUgY29uZGl0aW9ucyBzdGF0ZWQgaW4gdGhpcyBMaWNlbnNlLgoKICAgNS4gU3VibWlzc2lvbiBvZiBDb250cmlidXRpb25zLiBVbmxlc3MgWW91IGV4cGxpY2l0bHkgc3RhdGUgb3RoZXJ3aXNlLAogICAgICBhbnkgQ29udHJpYnV0aW9uIGludGVudGlvbmFsbHkgc3VibWl0dGVkIGZvciBpbmNsdXNpb24gaW4gdGhlIFdvcmsKICAgICAgYnkgWW91IHRvIHRoZSBMaWNlbnNvciBzaGFsbCBiZSB1bmRlciB0aGUgdGVybXMgYW5kIGNvbmRpdGlvbnMgb2YKICAgICAgdGhpcyBMaWNlbnNlLCB3aXRob3V0IGFueSBhZGRpdGlvbmFsIHRlcm1zIG9yIGNvbmRpdGlvbnMuCiAgICAgIE5vdHdpdGhzdGFuZGluZyB0aGUgYWJvdmUsIG5vdGhpbmcgaGVyZWluIHNoYWxsIHN1cGVyc2VkZSBvciBtb2RpZnkKICAgICAgdGhlIHRlcm1zIG9mIGFueSBzZXBhcmF0ZSBsaWNlbnNlIGFncmVlbWVudCB5b3UgbWF5IGhhdmUgZXhlY3V0ZWQKICAgICAgd2l0aCBMaWNlbnNvciByZWdhcmRpbmcgc3VjaCBDb250cmlidXRpb25zLgoKICAgNi4gVHJhZGVtYXJrcy4gVGhpcyBMaWNlbnNlIGRvZXMgbm90IGdyYW50IHBlcm1pc3Npb24gdG8gdXNlIHRoZSB0cmFkZQogICAgICBuYW1lcywgdHJhZGVtYXJrcywgc2VydmljZSBtYXJrcywgb3IgcHJvZHVjdCBuYW1lcyBvZiB0aGUgTGljZW5zb3IsCiAgICAgIGV4Y2VwdCBhcyByZXF1aXJlZCBmb3IgcmVhc29uYWJsZSBhbmQgY3VzdG9tYXJ5IHVzZSBpbiBkZXNjcmliaW5nIHRoZQogICAgICBvcmlnaW4gb2YgdGhlIFdvcmsgYW5kIHJlcHJvZHVjaW5nIHRoZSBjb250ZW50IG9mIHRoZSBOT1RJQ0UgZmlsZS4KCiAgIDcuIERpc2NsYWltZXIgb2YgV2FycmFudHkuIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvcgogICAgICBhZ3JlZWQgdG8gaW4gd3JpdGluZywgTGljZW5zb3IgcHJvdmlkZXMgdGhlIFdvcmsgKGFuZCBlYWNoCiAgICAgIENvbnRyaWJ1dG9yIHByb3ZpZGVzIGl0cyBDb250cmlidXRpb25zKSBvbiBhbiAiQVMgSVMiIEJBU0lTLAogICAgICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IKICAgICAgaW1wbGllZCwgaW5jbHVkaW5nLCB3aXRob3V0IGxpbWl0YXRpb24sIGFueSB3YXJyYW50aWVzIG9yIGNvbmRpdGlvbnMKICAgICAgb2YgVElUTEUsIE5PTi1JTkZSSU5HRU1FTlQsIE1FUkNIQU5UQUJJTElUWSwgb3IgRklUTkVTUyBGT1IgQQogICAgICBQQVJUSUNVTEFSIFBVUlBPU0UuIFlvdSBhcmUgc29sZWx5IHJlc3BvbnNpYmxlIGZvciBkZXRlcm1pbmluZyB0aGUKICAgICAgYXBwcm9wcmlhdGVuZXNzIG9mIHVzaW5nIG9yIHJlZGlzdHJpYnV0aW5nIHRoZSBXb3JrIGFuZCBhc3N1bWUgYW55CiAgICAgIHJpc2tzIGFzc29jaWF0ZWQgd2l0aCBZb3VyIGV4ZXJjaXNlIG9mIHBlcm1pc3Npb25zIHVuZGVyIHRoaXMgTGljZW5zZS4KCiAgIDguIExpbWl0YXRpb24gb2YgTGlhYmlsaXR5LiBJbiBubyBldmVudCBhbmQgdW5kZXIgbm8gbGVnYWwgdGhlb3J5LAogICAgICB3aGV0aGVyIGluIHRvcnQgKGluY2x1ZGluZyBuZWdsaWdlbmNlKSwgY29udHJhY3QsIG9yIG90aGVyd2lzZSwKICAgICAgdW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IChzdWNoIGFzIGRlbGliZXJhdGUgYW5kIGdyb3NzbHkKICAgICAgbmVnbGlnZW50IGFjdHMpIG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzaGFsbCBhbnkgQ29udHJpYnV0b3IgYmUKICAgICAgbGlhYmxlIHRvIFlvdSBmb3IgZGFtYWdlcywgaW5jbHVkaW5nIGFueSBkaXJlY3QsIGluZGlyZWN0LCBzcGVjaWFsLAogICAgICBpbmNpZGVudGFsLCBvciBjb25zZXF1ZW50aWFsIGRhbWFnZXMgb2YgYW55IGNoYXJhY3RlciBhcmlzaW5nIGFzIGEKICAgICAgcmVzdWx0IG9mIHRoaXMgTGljZW5zZSBvciBvdXQgb2YgdGhlIHVzZSBvciBpbmFiaWxpdHkgdG8gdXNlIHRoZQogICAgICBXb3JrIChpbmNsdWRpbmcgYnV0IG5vdCBsaW1pdGVkIHRvIGRhbWFnZXMgZm9yIGxvc3Mgb2YgZ29vZHdpbGwsCiAgICAgIHdvcmsgc3RvcHBhZ2UsIGNvbXB1dGVyIGZhaWx1cmUgb3IgbWFsZnVuY3Rpb24sIG9yIGFueSBhbmQgYWxsCiAgICAgIG90aGVyIGNvbW1lcmNpYWwgZGFtYWdlcyBvciBsb3NzZXMpLCBldmVuIGlmIHN1Y2ggQ29udHJpYnV0b3IKICAgICAgaGFzIGJlZW4gYWR2aXNlZCBvZiB0aGUgcG9zc2liaWxpdHkgb2Ygc3VjaCBkYW1hZ2VzLgoKICAgOS4gQWNjZXB0aW5nIFdhcnJhbnR5IG9yIEFkZGl0aW9uYWwgTGlhYmlsaXR5LiBXaGlsZSByZWRpc3RyaWJ1dGluZwogICAgICB0aGUgV29yayBvciBEZXJpdmF0aXZlIFdvcmtzIHRoZXJlb2YsIFlvdSBtYXkgY2hvb3NlIHRvIG9mZmVyLAogICAgICBhbmQgY2hhcmdlIGEgZmVlIGZvciwgYWNjZXB0YW5jZSBvZiBzdXBwb3J0LCB3YXJyYW50eSwgaW5kZW1uaXR5LAogICAgICBvciBvdGhlciBsaWFiaWxpdHkgb2JsaWdhdGlvbnMgYW5kL29yIHJpZ2h0cyBjb25zaXN0ZW50IHdpdGggdGhpcwogICAgICBMaWNlbnNlLiBIb3dldmVyLCBpbiBhY2NlcHRpbmcgc3VjaCBvYmxpZ2F0aW9ucywgWW91IG1heSBhY3Qgb25seQogICAgICBvbiBZb3VyIG93biBiZWhhbGYgYW5kIG9uIFlvdXIgc29sZSByZXNwb25zaWJpbGl0eSwgbm90IG9uIGJlaGFsZgogICAgICBvZiBhbnkgb3RoZXIgQ29udHJpYnV0b3IsIGFuZCBvbmx5IGlmIFlvdSBhZ3JlZSB0byBpbmRlbW5pZnksCiAgICAgIGRlZmVuZCwgYW5kIGhvbGQgZWFjaCBDb250cmlidXRvciBoYXJtbGVzcyBmb3IgYW55IGxpYWJpbGl0eQogICAgICBpbmN1cnJlZCBieSwgb3IgY2xhaW1zIGFzc2VydGVkIGFnYWluc3QsIHN1Y2ggQ29udHJpYnV0b3IgYnkgcmVhc29uCiAgICAgIG9mIHlvdXIgYWNjZXB0aW5nIGFueSBzdWNoIHdhcnJhbnR5IG9yIGFkZGl0aW9uYWwgbGlhYmlsaXR5LgoKICAgRU5EIE9GIFRFUk1TIEFORCBDT05ESVRJT05TCgogICBBUFBFTkRJWDogSG93IHRvIGFwcGx5IHRoZSBBcGFjaGUgTGljZW5zZSB0byB5b3VyIHdvcmsuCgogICAgICBUbyBhcHBseSB0aGUgQXBhY2hlIExpY2Vuc2UgdG8geW91ciB3b3JrLCBhdHRhY2ggdGhlIGZvbGxvd2luZwogICAgICBib2lsZXJwbGF0ZSBub3RpY2UsIHdpdGggdGhlIGZpZWxkcyBlbmNsb3NlZCBieSBicmFja2V0cyAiW10iCiAgICAgIHJlcGxhY2VkIHdpdGggeW91ciBvd24gaWRlbnRpZnlpbmcgaW5mb3JtYXRpb24uIChEb24ndCBpbmNsdWRlCiAgICAgIHRoZSBicmFja2V0cyEpICBUaGUgdGV4dCBzaG91bGQgYmUgZW5jbG9zZWQgaW4gdGhlIGFwcHJvcHJpYXRlCiAgICAgIGNvbW1lbnQgc3ludGF4IGZvciB0aGUgZmlsZSBmb3JtYXQuIFdlIGFsc28gcmVjb21tZW5kIHRoYXQgYQogICAgICBmaWxlIG9yIGNsYXNzIG5hbWUgYW5kIGRlc2NyaXB0aW9uIG9mIHB1cnBvc2UgYmUgaW5jbHVkZWQgb24gdGhlCiAgICAgIHNhbWUgInByaW50ZWQgcGFnZSIgYXMgdGhlIGNvcHlyaWdodCBub3RpY2UgZm9yIGVhc2llcgogICAgICBpZGVudGlmaWNhdGlvbiB3aXRoaW4gdGhpcmQtcGFydHkgYXJjaGl2ZXMuCgogICBDb3B5cmlnaHQgW3l5eXldIFtuYW1lIG9mIGNvcHlyaWdodCBvd25lcl0KCiAgIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSAiTGljZW5zZSIpOwogICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuCiAgIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdAoKICAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMAoKICAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZQogICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiAiQVMgSVMiIEJBU0lTLAogICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4KICAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZAogICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS4K');
  exports['registerResource']('META-INF/NOTICE', 'CkpTT04gTW9kZWwgaW4gSmF2YQpDb3B5cmlnaHQgMjAxOSBUaGUgQXBhY2hlIFNvZnR3YXJlIEZvdW5kYXRpb24KClRoaXMgcHJvZHVjdCBpbmNsdWRlcyBzb2Z0d2FyZSBkZXZlbG9wZWQgYXQKVGhlIEFwYWNoZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIChodHRwOi8vd3d3LmFwYWNoZS5vcmcvKS4KCgo=');
  exports['registerResource']('META-INF/services/javax.annotation.processing.Processor', 'b3JnLm5ldGJlYW5zLmh0bWwuanNvbi5pbXBsLk1vZGVsUHJvY2Vzc29yCg==');
  exports['registerResource']('org/netbeans/html/json/impl/Bundle.properties', 'IwojIExpY2Vuc2VkIHRvIHRoZSBBcGFjaGUgU29mdHdhcmUgRm91bmRhdGlvbiAoQVNGKSB1bmRlciBvbmUKIyBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gIFNlZSB0aGUgTk9USUNFIGZpbGUKIyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbgojIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLiAgVGhlIEFTRiBsaWNlbnNlcyB0aGlzIGZpbGUKIyB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlCiMgIkxpY2Vuc2UiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZQojIHdpdGggdGhlIExpY2Vuc2UuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQKIwojICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wCiMKIyBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsCiMgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4KIyAiQVMgSVMiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkKIyBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUKIyBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zCiMgdW5kZXIgdGhlIExpY2Vuc2UuCiMKCk1TR19Db21wbGV0aW9uX0dFVD1UaGUgR0VUIG1ldGhvZCBtZWFucyByZXRyaWV2ZSB3aGF0ZXZlciBpbmZvcm1hdGlvbiBcCiAoaW4gdGhlIGZvcm0gb2YgYW4gZW50aXR5KSBpcyBpZGVudGlmaWVkIGJ5IHRoZSBSZXF1ZXN0LVVSSS4gXAogSWYgdGhlIFJlcXVlc3QtVVJJIHJlZmVycyB0byBhIGRhdGEtcHJvZHVjaW5nIHByb2Nlc3MsIFwKIGl0IGlzIHRoZSBwcm9kdWNlZCBkYXRhIHdoaWNoIHNoYWxsIGJlIHJldHVybmVkIGFzIHRoZSBlbnRpdHkgaW4gXAogdGhlIHJlc3BvbnNlIGFuZCBub3QgdGhlIHNvdXJjZSB0ZXh0IG9mIHRoZSBwcm9jZXNzLCBcCiB1bmxlc3MgdGhhdCB0ZXh0IGhhcHBlbnMgdG8gYmUgdGhlIG91dHB1dCBvZiB0aGUgcHJvY2Vzcy4KCk1TR19Db21wbGV0aW9uX0hFQUQ9VGhlIEhFQUQgbWV0aG9kIGlzIGlkZW50aWNhbCB0byBHRVQgZXhjZXB0IHRoYXQgdGhlIHNlcnZlciBcCiBNVVNUIE5PVCByZXR1cm4gYSBtZXNzYWdlLWJvZHkgaW4gdGhlIHJlc3BvbnNlLiBUaGUgbWV0YWluZm9ybWF0aW9uIFwKIGNvbnRhaW5lZCBpbiB0aGUgSFRUUCBoZWFkZXJzIGluIHJlc3BvbnNlIHRvIGEgSEVBRCByZXF1ZXN0IFNIT1VMRCBiZSBcCiBpZGVudGljYWwgdG8gdGhlIGluZm9ybWF0aW9uIHNlbnQgaW4gcmVzcG9uc2UgdG8gYSBHRVQgcmVxdWVzdC4gXAogVGhpcyBtZXRob2QgY2FuIGJlIHVzZWQgZm9yIG9idGFpbmluZyBtZXRhaW5mb3JtYXRpb24gYWJvdXQgdGhlIGVudGl0eSBpbXBsaWVkIFwKIGJ5IHRoZSByZXF1ZXN0IHdpdGhvdXQgdHJhbnNmZXJyaW5nIHRoZSBlbnRpdHktYm9keSBpdHNlbGYuIFwKIFRoaXMgbWV0aG9kIGlzIG9mdGVuIHVzZWQgZm9yIHRlc3RpbmcgaHlwZXJ0ZXh0IGxpbmtzIGZvciB2YWxpZGl0eSwgXAogYWNjZXNzaWJpbGl0eSwgYW5kIHJlY2VudCBtb2RpZmljYXRpb24uCgpNU0dfQ29tcGxldGlvbl9QT1NUPVRoZSBQT1NUIG1ldGhvZCBpcyB1c2VkIHRvIHJlcXVlc3QgdGhhdCB0aGUgb3JpZ2luIHNlcnZlciBcCiBhY2NlcHQgdGhlIGVudGl0eSBlbmNsb3NlZCBpbiB0aGUgcmVxdWVzdCBhcyBhIG5ldyBzdWJvcmRpbmF0ZSBvZiB0aGUgcmVzb3VyY2UgXAogaWRlbnRpZmllZCBieSB0aGUgUmVxdWVzdC1VUkkgaW4gdGhlIFJlcXVlc3QtTGluZS4gUE9TVCBpcyBkZXNpZ25lZCB0byBhbGxvdyBcCiBhIHVuaWZvcm0gbWV0aG9kIHRvIGNvdmVyIGFubm90YXRpb24gb2YgZXhpc3RpbmcgcmVzb3VyY2VzLFwgCiBwb3N0aW5nIGEgbWVzc2FnZSB0byBhIGJ1bGxldGluIGJvYXJkLCBuZXdzZ3JvdXAsIG1haWxpbmcgbGlzdCwgb3Igc2ltaWxhciBcCiBncm91cCBvZiBhcnRpY2xlcywgcHJvdmlkaW5nIGEgYmxvY2sgb2YgZGF0YSwgc3VjaCBhcyB0aGUgcmVzdWx0IG9mIHN1Ym1pdHRpbmcgYSBcCiBmb3JtLCB0byBhIGRhdGEtaGFuZGxpbmcgcHJvY2VzcyBvciBleHRlbmRpbmcgYSBkYXRhYmFzZSB0aHJvdWdoIGFuIGFwcGVuZCBvcGVyYXRpb24uIFwKIFRoZSBhY3R1YWwgZnVuY3Rpb24gcGVyZm9ybWVkIGJ5IHRoZSBQT1NUIG1ldGhvZCBpcyBkZXRlcm1pbmVkIGJ5IHRoZSBzZXJ2ZXIgXAogYW5kIGlzIHVzdWFsbHkgZGVwZW5kZW50IG9uIHRoZSBSZXF1ZXN0LVVSSS4gVGhlIHBvc3RlZCBlbnRpdHkgaXMgc3Vib3JkaW5hdGUgXAogdG8gdGhhdCBVUkkgaW4gdGhlIHNhbWUgd2F5IHRoYXQgYSBmaWxlIGlzIHN1Ym9yZGluYXRlIHRvIGEgZGlyZWN0b3J5IGNvbnRhaW5pbmcgaXQsIFwKIGEgbmV3cyBhcnRpY2xlIGlzIHN1Ym9yZGluYXRlIHRvIGEgbmV3c2dyb3VwIHRvIHdoaWNoIGl0IGlzIHBvc3RlZCwgXAogb3IgYSByZWNvcmQgaXMgc3Vib3JkaW5hdGUgdG8gYSBkYXRhYmFzZS4KCk1TR19Db21wbGV0aW9uX1BVVD1UaGUgUFVUIG1ldGhvZCByZXF1ZXN0cyB0aGF0IHRoZSBlbmNsb3NlZCBlbnRpdHkgYmUgc3RvcmVkIFwKIHVuZGVyIHRoZSBzdXBwbGllZCBSZXF1ZXN0LVVSSS4gSWYgdGhlIFJlcXVlc3QtVVJJIHJlZmVycyB0byBhbiBhbHJlYWR5IFwKIGV4aXN0aW5nIHJlc291cmNlLCB0aGUgZW5jbG9zZWQgZW50aXR5IFNIT1VMRCBiZSBjb25zaWRlcmVkIGFzIGEgbW9kaWZpZWQgXAogdmVyc2lvbiBvZiB0aGUgb25lIHJlc2lkaW5nIG9uIHRoZSBvcmlnaW4gc2VydmVyLiBJZiB0aGUgUmVxdWVzdC1VUkkgZG9lcyBcCiBub3QgcG9pbnQgdG8gYW4gZXhpc3RpbmcgcmVzb3VyY2UsIGFuZCB0aGF0IFVSSSBpcyBjYXBhYmxlIG9mIGJlaW5nIGRlZmluZWQgXAogYXMgYSBuZXcgcmVzb3VyY2UgYnkgdGhlIHJlcXVlc3RpbmcgdXNlciBhZ2VudCwgdGhlIG9yaWdpbiBzZXJ2ZXIgY2FuIFwKIGNyZWF0ZSB0aGUgcmVzb3VyY2Ugd2l0aCB0aGF0IFVSSS4gSWYgYSBuZXcgcmVzb3VyY2UgaXMgY3JlYXRlZCwgdGhlIG9yaWdpbiBcCiBzZXJ2ZXIgTVVTVCBpbmZvcm0gdGhlIHVzZXIgYWdlbnQgdmlhIHRoZSAyMDEgKENyZWF0ZWQpIHJlc3BvbnNlLiBcCiBJZiBhbiBleGlzdGluZyByZXNvdXJjZSBpcyBtb2RpZmllZCwgZWl0aGVyIHRoZSAyMDAgKE9LKSBvciAyMDQgKE5vIENvbnRlbnQpIFwKIHJlc3BvbnNlIGNvZGVzIFNIT1VMRCBiZSBzZW50IHRvIGluZGljYXRlIHN1Y2Nlc3NmdWwgY29tcGxldGlvbiBvZiB0aGUgcmVxdWVzdC4gXAogSWYgdGhlIHJlc291cmNlIGNvdWxkIG5vdCBiZSBjcmVhdGVkIG9yIG1vZGlmaWVkIHdpdGggdGhlIFJlcXVlc3QtVVJJLCBhbiBcCiBhcHByb3ByaWF0ZSBlcnJvciByZXNwb25zZSBTSE9VTEQgYmUgZ2l2ZW4gdGhhdCByZWZsZWN0cyB0aGUgbmF0dXJlIG9mIHRoZSBwcm9ibGVtLiBcCiBUaGUgcmVjaXBpZW50IG9mIHRoZSBlbnRpdHkgTVVTVCBOT1QgaWdub3JlIGFueSBDb250ZW50LSogKGUuZy4gQ29udGVudC1SYW5nZSkgXAogaGVhZGVycyB0aGF0IGl0IGRvZXMgbm90IHVuZGVyc3RhbmQgb3IgaW1wbGVtZW50IGFuZCBNVVNUIHJldHVybiBcCiBhIDUwMSAoTm90IEltcGxlbWVudGVkKSByZXNwb25zZSBpbiBzdWNoIGNhc2VzLgoKTVNHX0NvbXBsZXRpb25fREVMRVRFPVRoZSBERUxFVEUgbWV0aG9kIHJlcXVlc3RzIHRoYXQgdGhlIG9yaWdpbiBzZXJ2ZXIgZGVsZXRlIFwKIHRoZSByZXNvdXJjZSBpZGVudGlmaWVkIGJ5IHRoZSBSZXF1ZXN0LVVSSS4gVGhpcyBtZXRob2QgTUFZIGJlIG92ZXJyaWRkZW4gXAogYnkgaHVtYW4gaW50ZXJ2ZW50aW9uIChvciBvdGhlciBtZWFucykgb24gdGhlIG9yaWdpbiBzZXJ2ZXIuIFRoZSBjbGllbnQgXAogY2Fubm90IGJlIGd1YXJhbnRlZWQgdGhhdCB0aGUgb3BlcmF0aW9uIGhhcyBiZWVuIGNhcnJpZWQgb3V0LCBldmVuIGlmIFwKIHRoZSBzdGF0dXMgY29kZSByZXR1cm5lZCBmcm9tIHRoZSBvcmlnaW4gc2VydmVyIGluZGljYXRlcyB0aGF0IHRoZSBhY3Rpb24gXAogaGFzIGJlZW4gY29tcGxldGVkIHN1Y2Nlc3NmdWxseS4gSG93ZXZlciwgdGhlIHNlcnZlciBTSE9VTEQgTk9UIGluZGljYXRlIFwKIHN1Y2Nlc3MgdW5sZXNzLCBhdCB0aGUgdGltZSB0aGUgcmVzcG9uc2UgaXMgZ2l2ZW4sIGl0IGludGVuZHMgdG8gZGVsZXRlIFwKIHRoZSByZXNvdXJjZSBvciBtb3ZlIGl0IHRvIGFuIGluYWNjZXNzaWJsZSBsb2NhdGlvbi4KCg==');
});