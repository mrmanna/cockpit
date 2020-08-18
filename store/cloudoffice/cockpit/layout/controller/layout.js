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
vm.java_lang_Object = function() {
  var instance = arguments.length == 0 || arguments[0] === true;
  delete vm.java_lang_Object;
  return link('java/lang/Object', function(f) { vm.java_lang_Object = f;})(instance);
}
vm.java_lang_Class = function() {
  var instance = arguments.length == 0 || arguments[0] === true;
  delete vm.java_lang_Class;
  return link('java/lang/Class', function(f) { vm.java_lang_Class = f;})(instance);
}
vm.java_lang_ArithmeticException = function() {
  var instance = arguments.length == 0 || arguments[0] === true;
  delete vm.java_lang_ArithmeticException;
  return link('java/lang/ArithmeticException', function(f) { vm.java_lang_ArithmeticException = f;})(instance);
}

function io_cloudoffice_platform_cockpit_layout_Column$1() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_layout_Column$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_layout_Column$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_layout_Column$1', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_layout_Column$1fillInstOf });
    io_cloudoffice_platform_cockpit_layout_Column$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/layout/Column$1';
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
vm.io_cloudoffice_platform_cockpit_layout_Column$1 = io_cloudoffice_platform_cockpit_layout_Column$1;


function io_cloudoffice_platform_cockpit_layout_Column$Html4JavaType() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_layout_Column$Html4JavaType;
  if (!CLS.$class) {
    var pp = vm.org_netbeans_html_json_spi_Proto$Type(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_org_netbeans_html_json_spi_Proto$Type || (refs_org_netbeans_html_json_spi_Proto$Type = vm.org_netbeans_html_json_spi_Proto$Type(false))).constructor['cons__VLjava_lang_Class_2Ljava_lang_Class_2II'].call(lcA0, (refs_io_cloudoffice_platform_cockpit_layout_Column || (refs_io_cloudoffice_platform_cockpit_layout_Column = io_cloudoffice_platform_cockpit_layout_Column(false))).constructor.$class, (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$ColumnComponent || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$ColumnComponent = io_cloudoffice_platform_cockpit_layout_LayoutComponent$ColumnComponent(false))).constructor.$class, (7), (7));
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"id", 0, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"name", 1, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"hasLayout", 2, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"layout", 3, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"components", 4, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"editable", 5, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"inputfieldvalue", (6), 0, 0);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"enableColumnEdit", 0);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"disableColumnEdit", 1);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"updateColumnName", 2);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"showSassVariables", 3);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"hoverComponent", 4);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"deleteCoumn", 5);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"showComponentList", (6));
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.setValue__VLio_cloudoffice_platform_cockpit_layout_Column_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0:{ gt = 44; break IF; }
  case 1:{ gt = 61; break IF; }
  case 2:{ gt = 78; break IF; }
  case 3:{ gt = 98; break IF; }
  case 4:{ gt = 115; break IF; }
  case 5:{ gt = 129; break IF; }
  case 6:{ gt = 149; break IF; }
  default: { gt = 166; break IF; }
}
    }
    X_44: for (;;) { IF: if (gt <= 44) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_layout_Column || (refs_io_cloudoffice_platform_cockpit_layout_Column = io_cloudoffice_platform_cockpit_layout_Column(false))).access$100__Lio_cloudoffice_platform_cockpit_layout_Column$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setId__VLjava_lang_String_2(stA1);
return;
    }
    X_61: for (;;) { IF: if (gt <= 61) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_layout_Column || (refs_io_cloudoffice_platform_cockpit_layout_Column = io_cloudoffice_platform_cockpit_layout_Column(false))).access$100__Lio_cloudoffice_platform_cockpit_layout_Column$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setName__VLjava_lang_String_2(stA1);
return;
    }
    X_78: for (;;) { IF: if (gt <= 78) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_layout_Column || (refs_io_cloudoffice_platform_cockpit_layout_Column = io_cloudoffice_platform_cockpit_layout_Column(false))).access$100__Lio_cloudoffice_platform_cockpit_layout_Column$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setHasLayout__VZ(stI1);
return;
    }
    X_98: for (;;) { IF: if (gt <= 98) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_layout_Column || (refs_io_cloudoffice_platform_cockpit_layout_Column = io_cloudoffice_platform_cockpit_layout_Column(false))).access$100__Lio_cloudoffice_platform_cockpit_layout_Column$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_layout_Layout || (refs_io_cloudoffice_platform_cockpit_layout_Layout = io_cloudoffice_platform_cockpit_layout_Layout(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_layout_Layout']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.layout.Layout');
stA0.setLayout__VLio_cloudoffice_platform_cockpit_layout_Layout_2(stA1);
return;
    }
    X_115: for (;;) { IF: if (gt <= 115) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_layout_Column || (refs_io_cloudoffice_platform_cockpit_layout_Column = io_cloudoffice_platform_cockpit_layout_Column(false))).access$100__Lio_cloudoffice_platform_cockpit_layout_Column$Html4JavaType_2();
var stA1 = lcA1.getComponents__Ljava_util_List_2();
invoker.replaceValue__VLjava_util_Collection_2Ljava_lang_Class_2Ljava_lang_Object_2(stA0,stA1, (refs_io_cloudoffice_platform_cockpit_layout_ComponentDef || (refs_io_cloudoffice_platform_cockpit_layout_ComponentDef = io_cloudoffice_platform_cockpit_layout_ComponentDef(false))).constructor.$class, lcA3);
return;
    }
    X_129: for (;;) { IF: if (gt <= 129) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_layout_Column || (refs_io_cloudoffice_platform_cockpit_layout_Column = io_cloudoffice_platform_cockpit_layout_Column(false))).access$100__Lio_cloudoffice_platform_cockpit_layout_Column$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setEditable__VZ(stI1);
return;
    }
    X_149: for (;;) { IF: if (gt <= 149) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_layout_Column || (refs_io_cloudoffice_platform_cockpit_layout_Column = io_cloudoffice_platform_cockpit_layout_Column(false))).access$100__Lio_cloudoffice_platform_cockpit_layout_Column$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setInputfieldvalue__VLjava_lang_String_2(stA1);
return;
    }
    X_166: for (;;) { IF: if (gt <= 166) {
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

    }
}}}}}}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_layout_Column_2I = function(lcA1, lcI2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0:{ gt = 44; break IF; }
  case 1:{ gt = 49; break IF; }
  case 2:{ gt = 54; break IF; }
  case 3:{ gt = 62; break IF; }
  case 4:{ gt = 67; break IF; }
  case 5:{ gt = 72; break IF; }
  case 6:{ gt = 80; break IF; }
  default: { gt = 85; break IF; }
}
    }
    X_44: for (;;) { IF: if (gt <= 44) {

var stA0 = lcA1.getId__Ljava_lang_String_2();
return stA0;
    }
    X_49: for (;;) { IF: if (gt <= 49) {

var stA0 = lcA1.getName__Ljava_lang_String_2();
return stA0;
    }
    X_54: for (;;) { IF: if (gt <= 54) {

var stI0 = lcA1.isHasLayout__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_62: for (;;) { IF: if (gt <= 62) {

var stA0 = lcA1.getLayout__Lio_cloudoffice_platform_cockpit_layout_Layout_2();
return stA0;
    }
    X_67: for (;;) { IF: if (gt <= 67) {

var stA0 = lcA1.getComponents__Ljava_util_List_2();
return stA0;
    }
    X_72: for (;;) { IF: if (gt <= 72) {

var stI0 = lcA1.isEditable__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_80: for (;;) { IF: if (gt <= 80) {

var stA0 = lcA1.getInputfieldvalue__Ljava_lang_String_2();
return stA0;
    }
    X_85: for (;;) { IF: if (gt <= 85) {
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

    }
}}}}}}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.call__VLio_cloudoffice_platform_cockpit_layout_Column_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0:{ gt = 44; break IF; }
  case 1:{ gt = 49; break IF; }
  case 2:{ gt = 54; break IF; }
  case 3:{ gt = 59; break IF; }
  case 4:{ gt = 64; break IF; }
  case 5:{ gt = 69; break IF; }
  case 6:{ gt = 74; break IF; }
  default: { gt = 79; break IF; }
}
    }
    X_44: for (;;) { IF: if (gt <= 44) {

(refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$ColumnComponent || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$ColumnComponent = io_cloudoffice_platform_cockpit_layout_LayoutComponent$ColumnComponent(false))).enableColumnEdit__VLio_cloudoffice_platform_cockpit_layout_Column_2(lcA1);
return;
    }
    X_49: for (;;) { IF: if (gt <= 49) {

(refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$ColumnComponent || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$ColumnComponent = io_cloudoffice_platform_cockpit_layout_LayoutComponent$ColumnComponent(false))).disableColumnEdit__VLio_cloudoffice_platform_cockpit_layout_Column_2(lcA1);
return;
    }
    X_54: for (;;) { IF: if (gt <= 54) {

(refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$ColumnComponent || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$ColumnComponent = io_cloudoffice_platform_cockpit_layout_LayoutComponent$ColumnComponent(false))).updateColumnName__VLio_cloudoffice_platform_cockpit_layout_Column_2(lcA1);
return;
    }
    X_59: for (;;) { IF: if (gt <= 59) {

(refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$ColumnComponent || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$ColumnComponent = io_cloudoffice_platform_cockpit_layout_LayoutComponent$ColumnComponent(false))).showSassVariables__VLio_cloudoffice_platform_cockpit_layout_Column_2(lcA1);
return;
    }
    X_64: for (;;) { IF: if (gt <= 64) {

(refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$ColumnComponent || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$ColumnComponent = io_cloudoffice_platform_cockpit_layout_LayoutComponent$ColumnComponent(false))).hoverComponent__VLio_cloudoffice_platform_cockpit_layout_Column_2(lcA1);
return;
    }
    X_69: for (;;) { IF: if (gt <= 69) {

(refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$ColumnComponent || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$ColumnComponent = io_cloudoffice_platform_cockpit_layout_LayoutComponent$ColumnComponent(false))).deleteCoumn__VLio_cloudoffice_platform_cockpit_layout_Column_2(lcA1);
return;
    }
    X_74: for (;;) { IF: if (gt <= 74) {

(refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$ColumnComponent || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$ColumnComponent = io_cloudoffice_platform_cockpit_layout_LayoutComponent$ColumnComponent(false))).showComponentList__VLio_cloudoffice_platform_cockpit_layout_Column_2(lcA1);
return;
    }
    X_79: for (;;) { IF: if (gt <= 79) {
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

    }
}}}}}}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_layout_Column']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.layout.Column');
var stA0 = (refs_io_cloudoffice_platform_cockpit_layout_Column || (refs_io_cloudoffice_platform_cockpit_layout_Column = io_cloudoffice_platform_cockpit_layout_Column(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_layout_Column_2(lcA1);
return stA0;

};
c['protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.onChange__VLio_cloudoffice_platform_cockpit_layout_Column_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLio_cloudoffice_platform_cockpit_layout_Column_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
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
    m = c.read__Lio_cloudoffice_platform_cockpit_layout_Column_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = new io_cloudoffice_platform_cockpit_layout_Column;
(refs_io_cloudoffice_platform_cockpit_layout_Column || (refs_io_cloudoffice_platform_cockpit_layout_Column = io_cloudoffice_platform_cockpit_layout_Column(false))).constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_layout_Column$1_2.call(stA0, lcA1, lcA2, null);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.cloneTo__Lio_cloudoffice_platform_cockpit_layout_Column_2Lio_cloudoffice_platform_cockpit_layout_Column_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = (refs_io_cloudoffice_platform_cockpit_layout_Column || (refs_io_cloudoffice_platform_cockpit_layout_Column = io_cloudoffice_platform_cockpit_layout_Column(false))).access$400__Lio_cloudoffice_platform_cockpit_layout_Column_2Lio_cloudoffice_platform_cockpit_layout_Column_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_layout_Column']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.layout.Column');
lcA0.onMessage__VLio_cloudoffice_platform_cockpit_layout_Column_2IILjava_lang_Object_2_3Ljava_lang_Object_2(lcA1, lcI2, lcI3, lcA4, lcA5);
return;

};
c['onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.onChange__VLjava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_layout_Column']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.layout.Column');
lcA0.onChange__VLio_cloudoffice_platform_cockpit_layout_Column_2I(lcA1, lcI2);
return;

};
c['onChange__VLjava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = lcA0.read__Lio_cloudoffice_platform_cockpit_layout_Column_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2(lcA1, lcA2);
return stA0;

};
c['read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_layout_Column']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.layout.Column');
var stA0 = lcA0.cloneTo__Lio_cloudoffice_platform_cockpit_layout_Column_2Lio_cloudoffice_platform_cockpit_layout_Column_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
c['cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_layout_Column']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.layout.Column');
lcA0.call__VLio_cloudoffice_platform_cockpit_layout_Column_2ILjava_lang_Object_2Ljava_lang_Object_2(lcA1, lcI2, lcA3, lcA4);
return;

};
c['call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Ljava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_layout_Column']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.layout.Column');
var stA0 = lcA0.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_layout_Column_2I(lcA1, lcI2);
return stA0;

};
c['getValue__Ljava_lang_Object_2Ljava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.setValue__VLjava_lang_Object_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_layout_Column']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.layout.Column');
lcA0.setValue__VLio_cloudoffice_platform_cockpit_layout_Column_2ILjava_lang_Object_2(lcA1, lcI2, lcA3);
return;

};
c['setValue__VLjava_lang_Object_2ILjava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_layout_Column$1_2 = function(lcA1) {
  var  lcA0 = this;
c.constructor.cons__V.call(lcA0);
return;

};
    m.access = 4096;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_layout_Column$Html4JavaTypefillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_layout_Column$Html4JavaType', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_layout_Column$Html4JavaTypefillInstOf });
    io_cloudoffice_platform_cockpit_layout_Column$Html4JavaTypefillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/layout/Column$Html4JavaType';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_layout_Column;
    var refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$ColumnComponent;
    var refs_org_netbeans_html_json_spi_Proto$Type;
    var refs_java_lang_String;
    var refs_java_lang_Boolean;
    var refs_io_cloudoffice_platform_cockpit_layout_Layout;
    var refs_io_cloudoffice_platform_cockpit_layout_ComponentDef;
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
vm.io_cloudoffice_platform_cockpit_layout_Column$Html4JavaType = io_cloudoffice_platform_cockpit_layout_Column$Html4JavaType;

vm.java_lang_StringBuilder = function() {
  var instance = arguments.length == 0 || arguments[0] === true;
  delete vm.java_lang_StringBuilder;
  return link('java/lang/StringBuilder', function(f) { vm.java_lang_StringBuilder = f;})(instance);
}
vm.java_lang_UnsupportedOperationException = function() {
  var instance = arguments.length == 0 || arguments[0] === true;
  delete vm.java_lang_UnsupportedOperationException;
  return link('java/lang/UnsupportedOperationException', function(f) { vm.java_lang_UnsupportedOperationException = f;})(instance);
}

function io_cloudoffice_platform_cockpit_layout_ComponentDef() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_layout_ComponentDef;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_TYPE'] = null;
  m = c._TYPE = function (v) {  if (arguments.length == 1) CLS['fld_TYPE'] = v; return CLS['fld_TYPE']; };
  m = c._proto = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_proto'] = v; return this['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_proto']; };
  m = c._prop_name = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_prop_name'] = v; return this['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_prop_name']; };
  m = c._prop_model = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_prop_model'] = v; return this['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_prop_model']; };
  m = c._prop_component = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_prop_component'] = v; return this['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_prop_component']; };
  m = c._prop_instance = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_prop_instance'] = v; return this['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_prop_instance']; };
  m = c._prop_instanceName = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_prop_instanceName'] = v; return this['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_prop_instanceName']; };
  m = c._prop_instanceId = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_prop_instanceId'] = v; return this['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_prop_instanceId']; };
  m = c._prop_icon = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_prop_icon'] = v; return this['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_prop_icon']; };
  m = c._prop_color = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_prop_color'] = v; return this['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_prop_color']; };
  m = c._prop_cPanel = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_prop_cPanel'] = v; return this['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_prop_cPanel']; };
    m = c.modelFor__Ljava_lang_Class_2 = function() {
return (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$ComponentDefComponent || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$ComponentDefComponent = io_cloudoffice_platform_cockpit_layout_LayoutComponent$ComponentDefComponent(false))).constructor.$class;

};
    m.access = 10;
    m.cls = CLS;
    m = c.getName__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_proto'],"name");
return lcA0['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_prop_name'];

};
c['getName__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setName__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_prop_name'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_prop_name'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_proto'],"name", lcA2, lcA1);
return;

    }
}}
};
c['setName__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getModel__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_proto'],"model");
return lcA0['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_prop_model'];

};
c['getModel__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setModel__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_prop_model'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_prop_model'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_proto'],"model", lcA2, lcA1);
return;

    }
}}
};
c['setModel__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getComponent__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_proto'],"component");
return lcA0['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_prop_component'];

};
c['getComponent__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setComponent__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_prop_component'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_prop_component'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_proto'],"component", lcA2, lcA1);
return;

    }
}}
};
c['setComponent__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isInstance__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_proto'],"instance");
return lcA0['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_prop_instance'];

};
c['isInstance__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setInstance__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_prop_instance']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_prop_instance'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_proto'];var stA1 = "instance";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2, stA3);
return;

    }
}}
};
c['setInstance__VZ'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getInstanceName__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_proto'],"instanceName");
return lcA0['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_prop_instanceName'];

};
c['getInstanceName__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setInstanceName__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_prop_instanceName'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_prop_instanceName'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_proto'],"instanceName", lcA2, lcA1);
return;

    }
}}
};
c['setInstanceName__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getInstanceId__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_proto'],"instanceId");
return lcA0['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_prop_instanceId'];

};
c['getInstanceId__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setInstanceId__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_prop_instanceId'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_prop_instanceId'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_proto'],"instanceId", lcA2, lcA1);
return;

    }
}}
};
c['setInstanceId__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getIcon__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_proto'],"icon");
return lcA0['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_prop_icon'];

};
c['getIcon__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setIcon__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_prop_icon'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_prop_icon'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_proto'],"icon", lcA2, lcA1);
return;

    }
}}
};
c['setIcon__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getColor__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_proto'],"color");
return lcA0['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_prop_color'];

};
c['getColor__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setColor__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_prop_color'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_prop_color'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_proto'],"color", lcA2, lcA1);
return;

    }
}}
};
c['setColor__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isCPanel__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_proto'],"cPanel");
return lcA0['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_prop_cPanel'];

};
c['isCPanel__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setCPanel__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_prop_cPanel']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_prop_cPanel'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_proto'];var stA1 = "cPanel";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2, stA3);
return;

    }
}}
};
c['setCPanel__VZ'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;
(refs_java_lang_Object || (refs_java_lang_Object = vm.java_lang_Object(false))).constructor['cons__V'].call(lcA0);
var stA0 = lcA0;var stA1 = invoker.createProto__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2(c._TYPE(),lcA0, lcA1);
stA0['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_proto'] = stA1;
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
    m = CLS.cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2ZLjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Z = function(lcA1, lcA2, lcA3, lcI4, lcA5, lcA6, lcA7, lcA8, lcI9) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = (refs_net_java_html_BrwsrCtx || (refs_net_java_html_BrwsrCtx = vm.net_java_html_BrwsrCtx(false)))['findDefault__Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'](c.constructor.$class);
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, stA1);
lcA0['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_prop_name'] = lcA1;
lcA0['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_prop_model'] = lcA2;
lcA0['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_prop_component'] = lcA3;
lcA0['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_prop_instance'] = lcI4;
lcA0['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_prop_instanceName'] = lcA5;
lcA0['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_prop_instanceId'] = lcA6;
lcA0['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_prop_icon'] = lcA7;
lcA0['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_prop_color'] = lcA8;
lcA0['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_prop_cPanel'] = lcI9;
return;

};
CLS['cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2ZLjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, (9));
var lcA3 = stA0;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_proto'];var stA1 = lcA2;var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, (9));
Array.at(stA2, 0, "name");
Array.at(stA2, 1, "model");
Array.at(stA2, 2, "component");
Array.at(stA2, 3, "instance");
Array.at(stA2, 4, "instanceName");
Array.at(stA2, 5, "instanceId");
Array.at(stA2, (6), "icon");
Array.at(stA2, (7), "color");
Array.at(stA2, (8), "cPanel");
invoker.extract__VLjava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Object_2(stA0,stA1, stA2, lcA3);
if ((lcA3[0] || Array.at(lcA3, 0)) !== null && !(lcA3[0] || Array.at(lcA3, 0))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[0] || Array.at(lcA3, 0)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_prop_name'] = (lcA3[0] || Array.at(lcA3, 0));
if ((lcA3[1] || Array.at(lcA3, 1)) !== null && !(lcA3[1] || Array.at(lcA3, 1))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[1] || Array.at(lcA3, 1)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_prop_model'] = (lcA3[1] || Array.at(lcA3, 1));
if ((lcA3[2] || Array.at(lcA3, 2)) !== null && !(lcA3[2] || Array.at(lcA3, 2))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[2] || Array.at(lcA3, 2)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_prop_component'] = (lcA3[2] || Array.at(lcA3, 2));
var stA0 = lcA0;if (((lcA3[3] || Array.at(lcA3, 3))) !== null) { gt = 114; break IF; }
var stI1 = 0;{ gt = 126; break IF; }
    }
    X_114: for (;;) { IF: if (gt <= 114) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[3] || Array.at(lcA3, 3)));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_126: for (;;) { IF: if (gt <= 126) {
stA0['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_prop_instance'] = stI1;
if ((lcA3[4] || Array.at(lcA3, 4)) !== null && !(lcA3[4] || Array.at(lcA3, 4))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[4] || Array.at(lcA3, 4)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_prop_instanceName'] = (lcA3[4] || Array.at(lcA3, 4));
if ((lcA3[5] || Array.at(lcA3, 5)) !== null && !(lcA3[5] || Array.at(lcA3, 5))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[5] || Array.at(lcA3, 5)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_prop_instanceId'] = (lcA3[5] || Array.at(lcA3, 5));
if ((lcA3[(6)] || Array.at(lcA3, (6))) !== null && !(lcA3[(6)] || Array.at(lcA3, (6)))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[(6)] || Array.at(lcA3, (6))), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_prop_icon'] = (lcA3[(6)] || Array.at(lcA3, (6)));
if ((lcA3[(7)] || Array.at(lcA3, (7))) !== null && !(lcA3[(7)] || Array.at(lcA3, (7)))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[(7)] || Array.at(lcA3, (7))), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_prop_color'] = (lcA3[(7)] || Array.at(lcA3, (7)));
var stA0 = lcA0;if (((lcA3[(8)] || Array.at(lcA3, (8)))) !== null) { gt = 183; break IF; }
var stI1 = 0;{ gt = 196; break IF; }
    }
    X_183: for (;;) { IF: if (gt <= 183) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[(8)] || Array.at(lcA3, (8))));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_196: for (;;) { IF: if (gt <= 196) {
stA0['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_prop_cPanel'] = stI1;
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
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"name");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getName__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"model");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getModel__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"component");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getComponent__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"instance");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stI2 = lcA0.isInstance__Z();
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI2);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"instanceName");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getInstanceName__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"instanceId");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getInstanceId__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"icon");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getIcon__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"color");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getColor__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"cPanel");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stI2 = lcA0.isCPanel__Z();
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
    m = c.clone__Lio_cloudoffice_platform_cockpit_layout_ComponentDef_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_proto']);
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_layout_ComponentDef_2Lnet_java_html_BrwsrCtx_2.call(stA0, stA1);
return stA0;

};
c['clone__Lio_cloudoffice_platform_cockpit_layout_ComponentDef_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Lio_cloudoffice_platform_cockpit_layout_ComponentDef_2Lnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = new io_cloudoffice_platform_cockpit_layout_ComponentDef;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, lcA1);
var lcA2 = stA0;
var stA0 = lcA2;var stA1 = lcA0.getName__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_prop_name'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getModel__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_prop_model'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getComponent__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_prop_component'] = stA1;
var stA0 = lcA2;var stI1 = lcA0.isInstance__Z();
stA0['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_prop_instance'] = stI1;
var stA0 = lcA2;var stA1 = lcA0.getInstanceName__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_prop_instanceName'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getInstanceId__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_prop_instanceId'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getIcon__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_prop_icon'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getColor__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_prop_color'] = stA1;
var stA0 = lcA2;var stI1 = lcA0.isCPanel__Z();
stA0['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_prop_cPanel'] = stI1;
return lcA2;

};
    m.access = 2;
    m.cls = CLS;
    m = c.applyBindings__Lio_cloudoffice_platform_cockpit_layout_ComponentDef_2 = function() {
  var  lcA0 = this;
invoker.applyBindings__V(lcA0['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_proto']);
return lcA0;

};
c['applyBindings__Lio_cloudoffice_platform_cockpit_layout_ComponentDef_2'] = m;

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

var stI0 = lcA1 != null && lcA1['$instOf_io_cloudoffice_platform_cockpit_layout_ComponentDef'] ? 1 : 0;
if ((stI0) != 0) { gt = 16; break IF; }
return 0;
    }
    X_16: for (;;) { IF: if (gt <= 16) {

if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_layout_ComponentDef']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.layout.ComponentDef');
var lcA2 = lcA1;
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_prop_name'], lcA2['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_prop_name']);
if ((stI0) != 0) { gt = 40; break IF; }
return 0;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_prop_model'], lcA2['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_prop_model']);
if ((stI0) != 0) { gt = 59; break IF; }
return 0;
    }
    X_59: for (;;) { IF: if (gt <= 59) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_prop_component'], lcA2['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_prop_component']);
if ((stI0) != 0) { gt = 78; break IF; }
return 0;
    }
    X_78: for (;;) { IF: if (gt <= 78) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_prop_instance']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_prop_instance']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 103; break IF; }
return 0;
    }
    X_103: for (;;) { IF: if (gt <= 103) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_prop_instanceName'], lcA2['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_prop_instanceName']);
if ((stI0) != 0) { gt = 122; break IF; }
return 0;
    }
    X_122: for (;;) { IF: if (gt <= 122) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_prop_instanceId'], lcA2['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_prop_instanceId']);
if ((stI0) != 0) { gt = 141; break IF; }
return 0;
    }
    X_141: for (;;) { IF: if (gt <= 141) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_prop_icon'], lcA2['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_prop_icon']);
if ((stI0) != 0) { gt = 160; break IF; }
return 0;
    }
    X_160: for (;;) { IF: if (gt <= 160) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_prop_color'], lcA2['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_prop_color']);
if ((stI0) != 0) { gt = 179; break IF; }
return 0;
    }
    X_179: for (;;) { IF: if (gt <= 179) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_prop_cPanel']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_prop_cPanel']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 204; break IF; }
return 0;
    }
    X_204: for (;;) { IF: if (gt <= 204) {

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
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_prop_name'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_prop_model'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_prop_component'], lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_prop_instance']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_prop_instanceName'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_prop_instanceId'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_prop_icon'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_prop_color'], lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_prop_cPanel']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
return lcI1;

};
c['hashCode__I'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Ljava_lang_Object_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0.clone__Lio_cloudoffice_platform_cockpit_layout_ComponentDef_2();
return stA0;

};
c['clone__Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.access$100__Lio_cloudoffice_platform_cockpit_layout_ComponentDef$Html4JavaType_2 = function() {
return c._TYPE();

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_layout_ComponentDef_2 = function(lcA0) {
return lcA0['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_proto'];

};
    m.access = 4104;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_layout_ComponentDef$1_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2.call(lcA0, lcA1, lcA2);
return;

};
    m.access = 4096;
    m.cls = CLS;
    m = c.access$400__Lio_cloudoffice_platform_cockpit_layout_ComponentDef_2Lio_cloudoffice_platform_cockpit_layout_ComponentDef_2Lnet_java_html_BrwsrCtx_2 = function(lcA0, lcA1) {
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_layout_ComponentDef_2Lnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
return stA0;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new io_cloudoffice_platform_cockpit_layout_ComponentDef$Html4JavaType;
(refs_io_cloudoffice_platform_cockpit_layout_ComponentDef$Html4JavaType || (refs_io_cloudoffice_platform_cockpit_layout_ComponentDef$Html4JavaType = io_cloudoffice_platform_cockpit_layout_ComponentDef$Html4JavaType(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_layout_ComponentDef$1_2.call(stA0, null);
c._TYPE(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_layout_ComponentDeffillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_layout_ComponentDef', { value : true });
      vm.java_lang_Cloneable(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_layout_ComponentDeffillInstOf });
    io_cloudoffice_platform_cockpit_layout_ComponentDeffillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/layout/ComponentDef';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.java_lang_Cloneable(false).constructor.$class
    ]; };
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$ComponentDefComponent;
    var refs_java_lang_Boolean;
    var refs_java_lang_Object;
    var refs_net_java_html_BrwsrCtx;
    var refs_java_lang_StringBuilder;
    var refs_io_cloudoffice_platform_cockpit_layout_ComponentDef$Html4JavaType;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_proto'] = null;
    this['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_prop_name'] = null;
    this['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_prop_model'] = null;
    this['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_prop_component'] = null;
    this['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_prop_instance'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_prop_instanceName'] = null;
    this['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_prop_instanceId'] = null;
    this['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_prop_icon'] = null;
    this['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_prop_color'] = null;
    this['fld_io_cloudoffice_platform_cockpit_layout_ComponentDef_prop_cPanel'] = 0;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_layout_ComponentDef = registerClass(exports,'io_cloudoffice_platform_cockpit_layout_ComponentDef',io_cloudoffice_platform_cockpit_layout_ComponentDef);

vm.java_lang_Cloneable = function() {
  var instance = arguments.length == 0 || arguments[0] === true;
  delete vm.java_lang_Cloneable;
  return link('java/lang/Cloneable', function(f) { vm.java_lang_Cloneable = f;})(instance);
}

function io_cloudoffice_platform_cockpit_layout_ComponentDef$Html4JavaType() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_layout_ComponentDef$Html4JavaType;
  if (!CLS.$class) {
    var pp = vm.org_netbeans_html_json_spi_Proto$Type(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_org_netbeans_html_json_spi_Proto$Type || (refs_org_netbeans_html_json_spi_Proto$Type = vm.org_netbeans_html_json_spi_Proto$Type(false))).constructor['cons__VLjava_lang_Class_2Ljava_lang_Class_2II'].call(lcA0, (refs_io_cloudoffice_platform_cockpit_layout_ComponentDef || (refs_io_cloudoffice_platform_cockpit_layout_ComponentDef = io_cloudoffice_platform_cockpit_layout_ComponentDef(false))).constructor.$class, (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$ComponentDefComponent || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$ComponentDefComponent = io_cloudoffice_platform_cockpit_layout_LayoutComponent$ComponentDefComponent(false))).constructor.$class, (9), (6));
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"name", 0, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"model", 1, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"component", 2, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"instance", 3, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"instanceName", 4, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"instanceId", 5, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"icon", (6), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"color", (7), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"cPanel", (8), 0, 0);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"showConfiguration", 0);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"enableConfigurationPanel", 1);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"disableConfigurationPanel", 2);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"showConfig", 3);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"showStyle", 4);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"removeComponent", 5);
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.setValue__VLio_cloudoffice_platform_cockpit_layout_ComponentDef_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0:{ gt = 52; break IF; }
  case 1:{ gt = 69; break IF; }
  case 2:{ gt = 86; break IF; }
  case 3:{ gt = 103; break IF; }
  case 4:{ gt = 123; break IF; }
  case 5:{ gt = 140; break IF; }
  case 6:{ gt = 157; break IF; }
  case 7:{ gt = 174; break IF; }
  case 8:{ gt = 191; break IF; }
  default: { gt = 211; break IF; }
}
    }
    X_52: for (;;) { IF: if (gt <= 52) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_layout_ComponentDef || (refs_io_cloudoffice_platform_cockpit_layout_ComponentDef = io_cloudoffice_platform_cockpit_layout_ComponentDef(false))).access$100__Lio_cloudoffice_platform_cockpit_layout_ComponentDef$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setName__VLjava_lang_String_2(stA1);
return;
    }
    X_69: for (;;) { IF: if (gt <= 69) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_layout_ComponentDef || (refs_io_cloudoffice_platform_cockpit_layout_ComponentDef = io_cloudoffice_platform_cockpit_layout_ComponentDef(false))).access$100__Lio_cloudoffice_platform_cockpit_layout_ComponentDef$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setModel__VLjava_lang_String_2(stA1);
return;
    }
    X_86: for (;;) { IF: if (gt <= 86) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_layout_ComponentDef || (refs_io_cloudoffice_platform_cockpit_layout_ComponentDef = io_cloudoffice_platform_cockpit_layout_ComponentDef(false))).access$100__Lio_cloudoffice_platform_cockpit_layout_ComponentDef$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setComponent__VLjava_lang_String_2(stA1);
return;
    }
    X_103: for (;;) { IF: if (gt <= 103) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_layout_ComponentDef || (refs_io_cloudoffice_platform_cockpit_layout_ComponentDef = io_cloudoffice_platform_cockpit_layout_ComponentDef(false))).access$100__Lio_cloudoffice_platform_cockpit_layout_ComponentDef$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setInstance__VZ(stI1);
return;
    }
    X_123: for (;;) { IF: if (gt <= 123) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_layout_ComponentDef || (refs_io_cloudoffice_platform_cockpit_layout_ComponentDef = io_cloudoffice_platform_cockpit_layout_ComponentDef(false))).access$100__Lio_cloudoffice_platform_cockpit_layout_ComponentDef$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setInstanceName__VLjava_lang_String_2(stA1);
return;
    }
    X_140: for (;;) { IF: if (gt <= 140) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_layout_ComponentDef || (refs_io_cloudoffice_platform_cockpit_layout_ComponentDef = io_cloudoffice_platform_cockpit_layout_ComponentDef(false))).access$100__Lio_cloudoffice_platform_cockpit_layout_ComponentDef$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setInstanceId__VLjava_lang_String_2(stA1);
return;
    }
    X_157: for (;;) { IF: if (gt <= 157) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_layout_ComponentDef || (refs_io_cloudoffice_platform_cockpit_layout_ComponentDef = io_cloudoffice_platform_cockpit_layout_ComponentDef(false))).access$100__Lio_cloudoffice_platform_cockpit_layout_ComponentDef$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setIcon__VLjava_lang_String_2(stA1);
return;
    }
    X_174: for (;;) { IF: if (gt <= 174) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_layout_ComponentDef || (refs_io_cloudoffice_platform_cockpit_layout_ComponentDef = io_cloudoffice_platform_cockpit_layout_ComponentDef(false))).access$100__Lio_cloudoffice_platform_cockpit_layout_ComponentDef$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setColor__VLjava_lang_String_2(stA1);
return;
    }
    X_191: for (;;) { IF: if (gt <= 191) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_layout_ComponentDef || (refs_io_cloudoffice_platform_cockpit_layout_ComponentDef = io_cloudoffice_platform_cockpit_layout_ComponentDef(false))).access$100__Lio_cloudoffice_platform_cockpit_layout_ComponentDef$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setCPanel__VZ(stI1);
return;
    }
    X_211: for (;;) { IF: if (gt <= 211) {
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

    }
}}}}}}}}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_layout_ComponentDef_2I = function(lcA1, lcI2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0:{ gt = 52; break IF; }
  case 1:{ gt = 57; break IF; }
  case 2:{ gt = 62; break IF; }
  case 3:{ gt = 67; break IF; }
  case 4:{ gt = 75; break IF; }
  case 5:{ gt = 80; break IF; }
  case 6:{ gt = 85; break IF; }
  case 7:{ gt = 90; break IF; }
  case 8:{ gt = 95; break IF; }
  default: { gt = 103; break IF; }
}
    }
    X_52: for (;;) { IF: if (gt <= 52) {

var stA0 = lcA1.getName__Ljava_lang_String_2();
return stA0;
    }
    X_57: for (;;) { IF: if (gt <= 57) {

var stA0 = lcA1.getModel__Ljava_lang_String_2();
return stA0;
    }
    X_62: for (;;) { IF: if (gt <= 62) {

var stA0 = lcA1.getComponent__Ljava_lang_String_2();
return stA0;
    }
    X_67: for (;;) { IF: if (gt <= 67) {

var stI0 = lcA1.isInstance__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_75: for (;;) { IF: if (gt <= 75) {

var stA0 = lcA1.getInstanceName__Ljava_lang_String_2();
return stA0;
    }
    X_80: for (;;) { IF: if (gt <= 80) {

var stA0 = lcA1.getInstanceId__Ljava_lang_String_2();
return stA0;
    }
    X_85: for (;;) { IF: if (gt <= 85) {

var stA0 = lcA1.getIcon__Ljava_lang_String_2();
return stA0;
    }
    X_90: for (;;) { IF: if (gt <= 90) {

var stA0 = lcA1.getColor__Ljava_lang_String_2();
return stA0;
    }
    X_95: for (;;) { IF: if (gt <= 95) {

var stI0 = lcA1.isCPanel__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_103: for (;;) { IF: if (gt <= 103) {
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

    }
}}}}}}}}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.call__VLio_cloudoffice_platform_cockpit_layout_ComponentDef_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
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

(refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$ComponentDefComponent || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$ComponentDefComponent = io_cloudoffice_platform_cockpit_layout_LayoutComponent$ComponentDefComponent(false))).showConfiguration__VLio_cloudoffice_platform_cockpit_layout_ComponentDef_2(lcA1);
return;
    }
    X_45: for (;;) { IF: if (gt <= 45) {

(refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$ComponentDefComponent || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$ComponentDefComponent = io_cloudoffice_platform_cockpit_layout_LayoutComponent$ComponentDefComponent(false))).enableConfigurationPanel__VLio_cloudoffice_platform_cockpit_layout_ComponentDef_2(lcA1);
return;
    }
    X_50: for (;;) { IF: if (gt <= 50) {

(refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$ComponentDefComponent || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$ComponentDefComponent = io_cloudoffice_platform_cockpit_layout_LayoutComponent$ComponentDefComponent(false))).disableConfigurationPanel__VLio_cloudoffice_platform_cockpit_layout_ComponentDef_2(lcA1);
return;
    }
    X_55: for (;;) { IF: if (gt <= 55) {

(refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$ComponentDefComponent || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$ComponentDefComponent = io_cloudoffice_platform_cockpit_layout_LayoutComponent$ComponentDefComponent(false))).showConfig__VLio_cloudoffice_platform_cockpit_layout_ComponentDef_2(lcA1);
return;
    }
    X_60: for (;;) { IF: if (gt <= 60) {

(refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$ComponentDefComponent || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$ComponentDefComponent = io_cloudoffice_platform_cockpit_layout_LayoutComponent$ComponentDefComponent(false))).showStyle__VLio_cloudoffice_platform_cockpit_layout_ComponentDef_2(lcA1);
return;
    }
    X_65: for (;;) { IF: if (gt <= 65) {

(refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$ComponentDefComponent || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$ComponentDefComponent = io_cloudoffice_platform_cockpit_layout_LayoutComponent$ComponentDefComponent(false))).removeComponent__VLio_cloudoffice_platform_cockpit_layout_ComponentDef_2(lcA1);
return;
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
    m = c.protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_layout_ComponentDef']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.layout.ComponentDef');
var stA0 = (refs_io_cloudoffice_platform_cockpit_layout_ComponentDef || (refs_io_cloudoffice_platform_cockpit_layout_ComponentDef = io_cloudoffice_platform_cockpit_layout_ComponentDef(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_layout_ComponentDef_2(lcA1);
return stA0;

};
c['protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.onChange__VLio_cloudoffice_platform_cockpit_layout_ComponentDef_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLio_cloudoffice_platform_cockpit_layout_ComponentDef_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
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
    m = c.read__Lio_cloudoffice_platform_cockpit_layout_ComponentDef_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = new io_cloudoffice_platform_cockpit_layout_ComponentDef;
(refs_io_cloudoffice_platform_cockpit_layout_ComponentDef || (refs_io_cloudoffice_platform_cockpit_layout_ComponentDef = io_cloudoffice_platform_cockpit_layout_ComponentDef(false))).constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_layout_ComponentDef$1_2.call(stA0, lcA1, lcA2, null);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.cloneTo__Lio_cloudoffice_platform_cockpit_layout_ComponentDef_2Lio_cloudoffice_platform_cockpit_layout_ComponentDef_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = (refs_io_cloudoffice_platform_cockpit_layout_ComponentDef || (refs_io_cloudoffice_platform_cockpit_layout_ComponentDef = io_cloudoffice_platform_cockpit_layout_ComponentDef(false))).access$400__Lio_cloudoffice_platform_cockpit_layout_ComponentDef_2Lio_cloudoffice_platform_cockpit_layout_ComponentDef_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_layout_ComponentDef']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.layout.ComponentDef');
lcA0.onMessage__VLio_cloudoffice_platform_cockpit_layout_ComponentDef_2IILjava_lang_Object_2_3Ljava_lang_Object_2(lcA1, lcI2, lcI3, lcA4, lcA5);
return;

};
c['onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.onChange__VLjava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_layout_ComponentDef']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.layout.ComponentDef');
lcA0.onChange__VLio_cloudoffice_platform_cockpit_layout_ComponentDef_2I(lcA1, lcI2);
return;

};
c['onChange__VLjava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = lcA0.read__Lio_cloudoffice_platform_cockpit_layout_ComponentDef_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2(lcA1, lcA2);
return stA0;

};
c['read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_layout_ComponentDef']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.layout.ComponentDef');
var stA0 = lcA0.cloneTo__Lio_cloudoffice_platform_cockpit_layout_ComponentDef_2Lio_cloudoffice_platform_cockpit_layout_ComponentDef_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
c['cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_layout_ComponentDef']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.layout.ComponentDef');
lcA0.call__VLio_cloudoffice_platform_cockpit_layout_ComponentDef_2ILjava_lang_Object_2Ljava_lang_Object_2(lcA1, lcI2, lcA3, lcA4);
return;

};
c['call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Ljava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_layout_ComponentDef']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.layout.ComponentDef');
var stA0 = lcA0.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_layout_ComponentDef_2I(lcA1, lcI2);
return stA0;

};
c['getValue__Ljava_lang_Object_2Ljava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.setValue__VLjava_lang_Object_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_layout_ComponentDef']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.layout.ComponentDef');
lcA0.setValue__VLio_cloudoffice_platform_cockpit_layout_ComponentDef_2ILjava_lang_Object_2(lcA1, lcI2, lcA3);
return;

};
c['setValue__VLjava_lang_Object_2ILjava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_layout_ComponentDef$1_2 = function(lcA1) {
  var  lcA0 = this;
c.constructor.cons__V.call(lcA0);
return;

};
    m.access = 4096;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_layout_ComponentDef$Html4JavaTypefillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_layout_ComponentDef$Html4JavaType', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_layout_ComponentDef$Html4JavaTypefillInstOf });
    io_cloudoffice_platform_cockpit_layout_ComponentDef$Html4JavaTypefillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/layout/ComponentDef$Html4JavaType';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_layout_ComponentDef;
    var refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$ComponentDefComponent;
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
vm.io_cloudoffice_platform_cockpit_layout_ComponentDef$Html4JavaType = io_cloudoffice_platform_cockpit_layout_ComponentDef$Html4JavaType;

vm.net_java_html_BrwsrCtx = link('net/java/html/BrwsrCtx', function(f) { vm.net_java_html_BrwsrCtx =  f; });

function io_cloudoffice_platform_cockpit_layout_LayoutComponent$ComponentDefComponent() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_layout_LayoutComponent$ComponentDefComponent;
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
CLS['cons__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.showConfiguration__VLio_cloudoffice_platform_cockpit_layout_ComponentDef_2 = function(lcA0) {
var stA0 = lcA0.getComponent__Ljava_lang_String_2();
var stA1 = lcA0.getInstanceId__Ljava_lang_String_2();
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_Components || (refs_io_cloudoffice_platform_cockpit_api_Components = vm.io_cloudoffice_platform_cockpit_api_Components(false)))['get__Lio_cloudoffice_platform_cockpit_api_Component_2Ljava_lang_String_2Ljava_lang_String_2'](stA0, stA1);
var stA1 = new vm.io_cloudoffice_platform_cockpit_api_Event;
(refs_io_cloudoffice_platform_cockpit_api_Event || (refs_io_cloudoffice_platform_cockpit_api_Event = vm.io_cloudoffice_platform_cockpit_api_Event(false))).constructor['cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2'].call(stA1, "designermode", "designermode", "openConfig");
invoker.listen__VLio_cloudoffice_platform_cockpit_api_Signal_2(stA0,stA1);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.enableConfigurationPanel__VLio_cloudoffice_platform_cockpit_layout_ComponentDef_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = invoker.getFlags__Ljava_util_Map_2((refs_io_cloudoffice_platform_cockpit_api_Components || (refs_io_cloudoffice_platform_cockpit_api_Components = vm.io_cloudoffice_platform_cockpit_api_Components(false)))['_LAYOUT']());
var stA0 = invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2(stA0,"designMode");
var lcA1 = stA0;
if ((null) === (lcA1)) { gt = 79; break IF; }
if (lcA1 !== null && !lcA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(lcA1, 'java.lang.Boolean');
var stI0 = invoker.booleanValue__Z(lcA1);
var lcI2 = stI0;
if ((lcI2) == 0) { gt = 71; break IF; }
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"LayoutManager.showConfig(\"");
var stA1 = lcA0.getInstanceId__Ljava_lang_String_2();
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"\")");
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
(refs_io_cloudoffice_platform_cockpit_js_VIEW || (refs_io_cloudoffice_platform_cockpit_js_VIEW = vm.io_cloudoffice_platform_cockpit_js_VIEW(false)))['invokeJSFunction__VLjava_lang_String_2'](stA0);
lcA0.setCPanel__VZ(1);
{ gt = 76; break IF; }
    }
    X_71: for (;;) { IF: if (gt <= 71) {

lcA0.setCPanel__VZ(0);
    }
    X_76: for (;;) { IF: if (gt <= 76) {
{ gt = 84; break IF; }
    }
    X_79: for (;;) { IF: if (gt <= 79) {

lcA0.setCPanel__VZ(0);
    }
    X_84: for (;;) { IF: if (gt <= 84) {
return;

    }
}}}}}
};
    m.access = 8;
    m.cls = CLS;
    m = c.disableConfigurationPanel__VLio_cloudoffice_platform_cockpit_layout_ComponentDef_2 = function(lcA0) {
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"LayoutManager.removeConfig(\"");
var stA1 = lcA0.getInstanceId__Ljava_lang_String_2();
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"-conf\")");
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
(refs_io_cloudoffice_platform_cockpit_js_VIEW || (refs_io_cloudoffice_platform_cockpit_js_VIEW = vm.io_cloudoffice_platform_cockpit_js_VIEW(false)))['invokeJSFunction__VLjava_lang_String_2'](stA0);
lcA0.setCPanel__VZ(0);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.showConfig__VLio_cloudoffice_platform_cockpit_layout_ComponentDef_2 = function(lcA0) {
var stA0 = lcA0.getComponent__Ljava_lang_String_2();
var stA1 = lcA0.getInstanceId__Ljava_lang_String_2();
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_Components || (refs_io_cloudoffice_platform_cockpit_api_Components = vm.io_cloudoffice_platform_cockpit_api_Components(false)))['get__Lio_cloudoffice_platform_cockpit_api_Component_2Ljava_lang_String_2Ljava_lang_String_2'](stA0, stA1);
var stA1 = new vm.io_cloudoffice_platform_cockpit_api_Event;
(refs_io_cloudoffice_platform_cockpit_api_Event || (refs_io_cloudoffice_platform_cockpit_api_Event = vm.io_cloudoffice_platform_cockpit_api_Event(false))).constructor['cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2'].call(stA1, "designermode", "designermode", "openConfig");
invoker.listen__VLio_cloudoffice_platform_cockpit_api_Signal_2(stA0,stA1);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.showStyle__VLio_cloudoffice_platform_cockpit_layout_ComponentDef_2 = function(lcA0) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['builder__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2']();
var stA1 = "component";var stA2 = lcA0.getName__Ljava_lang_String_2();
var stI3 = 0;var stA4 = lcA0.getName__Ljava_lang_String_2();
var stI4 = invoker.indexOf__ILjava_lang_String_2(stA4,"-");
var stA2 = invoker.substring__Ljava_lang_String_2II(stA2,stI3, stI4);
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2(stA0,stA1, stA2);
var stA1 = "instance";var stA2 = lcA0.getInstanceId__Ljava_lang_String_2();
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2(stA0,stA1, stA2);
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2(stA0,"invoke", "showComponentStyle");
var lcA1 = stA0;
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_Components || (refs_io_cloudoffice_platform_cockpit_api_Components = vm.io_cloudoffice_platform_cockpit_api_Components(false)))['_LAYOUT']();var stA1 = new vm.io_cloudoffice_platform_cockpit_api_Event;
(refs_io_cloudoffice_platform_cockpit_api_Event || (refs_io_cloudoffice_platform_cockpit_api_Event = vm.io_cloudoffice_platform_cockpit_api_Event(false))).constructor['cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2'].call(stA1, "proppanelcomponent", "designermode", lcA1);
invoker.listen__VLio_cloudoffice_platform_cockpit_api_Signal_2(stA0,stA1);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.removeComponent__VLio_cloudoffice_platform_cockpit_layout_ComponentDef_2 = function(lcA0) {
var stA0 = lcA0.getName__Ljava_lang_String_2();
var stA1 = lcA0.getInstanceId__Ljava_lang_String_2();
c.removeComponentFromTheComponentPath__VLjava_lang_String_2Ljava_lang_String_2(stA0, stA1);
var stA0 = lcA0.toString__Ljava_lang_String_2();
c.removeComponentFromTheLayoutJSON__VLjava_lang_String_2(stA0);
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_Event;
(refs_io_cloudoffice_platform_cockpit_api_Event || (refs_io_cloudoffice_platform_cockpit_api_Event = vm.io_cloudoffice_platform_cockpit_api_Event(false))).constructor['cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2'].call(stA0, "invokefunction", "invokefunction", "showupdateloader");
var lcA1 = stA0;
var stA0 = (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent = io_cloudoffice_platform_cockpit_layout_LayoutComponent(false))).getDefaultInstance__Lio_cloudoffice_platform_cockpit_api_Component_2();
invoker.listen__VLio_cloudoffice_platform_cockpit_api_Signal_2(stA0,lcA1);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.removeComponentFromTheLayoutJSON__VLjava_lang_String_2 = function(lcA0) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['_CONFIG']();var stA1 = "layout";var stA2 = (refs_io_cloudoffice_platform_cockpit_js_JSUIUtils || (refs_io_cloudoffice_platform_cockpit_js_JSUIUtils = vm.io_cloudoffice_platform_cockpit_js_JSUIUtils(false)))['getLayout__Ljava_lang_String_2']();
var stA1 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['configFetchEndpoint__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2'](stA1, stA2);
var stA2 = null;var stA3 = new io_cloudoffice_platform_cockpit_layout_LayoutComponent$ComponentDefComponent$1;
(refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$ComponentDefComponent$1 || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$ComponentDefComponent$1 = io_cloudoffice_platform_cockpit_layout_LayoutComponent$ComponentDefComponent$1(false))).constructor.cons__VLjava_lang_String_2.call(stA3, lcA0);
invoker.fetch__VLjava_lang_String_2Ljava_util_Map_2Lio_cloudoffice_platform_cockpit_api_CallBack_2(stA0,stA1, stA2, stA3);
return;

};
c['removeComponentFromTheLayoutJSON__VLjava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.removeComponentFromLayout__VLio_cloudoffice_platform_cockpit_layout_Layout_2Ljava_lang_String_2 = function(lcA0, lcA1) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var lcI2 = -1;
var lcI3 = -1;
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor;
(refs_io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor || (refs_io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor = vm.io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor(false))).constructor['cons__V'].call(stA0);
var stA1 = lcA1;var stA2 = new io_cloudoffice_platform_cockpit_layout_ComponentDef;
(refs_io_cloudoffice_platform_cockpit_layout_ComponentDef || (refs_io_cloudoffice_platform_cockpit_layout_ComponentDef = io_cloudoffice_platform_cockpit_layout_ComponentDef(false))).constructor.cons__V.call(stA2);
var stA0 = invoker.getObject__Ljava_lang_Object_2Ljava_lang_String_2Ljava_lang_Object_2(stA0,stA1, stA2);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_layout_ComponentDef']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.layout.ComponentDef');
var lcA4 = stA0;
var lcI5 = 0;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

var stI0 = lcI5;var stA1 = lcA0.getRows__Ljava_util_List_2();
var stI1 = invoker.size__I(stA1);
if ((stI0) >= (stI1)) { gt = 166; break IF; }
var stA0 = lcA0.getRows__Ljava_util_List_2();
var stA0 = invoker.get__Ljava_lang_Object_2I(stA0,lcI5);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_layout_Row']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.layout.Row');
var lcA6 = stA0;
var lcI7 = 0;
    }
    X_63: for (;;) { IF: if (gt <= 63) {

var stI0 = lcI7;var stA1 = lcA6.getColumns__Ljava_util_List_2();
var stI1 = invoker.size__I(stA1);
if ((stI0) >= (stI1)) { gt = 160; break IF; }
var stA0 = lcA6.getColumns__Ljava_util_List_2();
var stA0 = invoker.get__Ljava_lang_Object_2I(stA0,lcI7);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_layout_Column']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.layout.Column');
var lcA8 = stA0;
var stA0 = lcA8.getComponents__Ljava_util_List_2();
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA9 = stA0;
    }
    X_107: for (;;) { IF: if (gt <= 107) {

var stI0 = invoker.hasNext__Z(lcA9);
if ((stI0) == 0) { gt = 154; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA9);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_layout_ComponentDef']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.layout.ComponentDef');
var lcA10 = stA0;
var stA0 = lcA10.getInstanceId__Ljava_lang_String_2();
var stA1 = lcA4.getInstanceId__Ljava_lang_String_2();
var stI0 = invoker.equalsIgnoreCase__ZLjava_lang_String_2(stA0,stA1);
if ((stI0) == 0) { gt = 151; break IF; }
var lcI2 = lcI5;
var lcI3 = lcI7;
    }
    X_151: for (;;) { IF: if (gt <= 151) {
{ gt = 0; continue X_107; }
    }
    X_154: for (;;) { IF: if (gt <= 154) {
lcI7++;
{ gt = 0; continue X_63; }
    }
    X_160: for (;;) { IF: if (gt <= 160) {
lcI5++;
{ gt = 0; continue X_30; }
    }
    X_166: for (;;) { IF: if (gt <= 166) {

if ((lcI2) <= (-1)) { gt = 236; break IF; }
if ((lcI3) <= (-1)) { gt = 236; break IF; }
var stA0 = lcA0.getRows__Ljava_util_List_2();
var stA0 = invoker.get__Ljava_lang_Object_2I(stA0,lcI2);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_layout_Row']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.layout.Row');
var stA0 = stA0.getColumns__Ljava_util_List_2();
var stA0 = invoker.get__Ljava_lang_Object_2I(stA0,lcI3);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_layout_Column']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.layout.Column');
var stA0 = stA0.getComponents__Ljava_util_List_2();
var stI0 = invoker.remove__ZLjava_lang_Object_2(stA0,lcA4);
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['_CONFIG']();var stA1 = lcA0.getId__Ljava_lang_String_2();
var stA1 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['layoutConfigPostEndpoint__Ljava_lang_String_2Ljava_lang_String_2'](stA1);
var stA2 = lcA0.toString__Ljava_lang_String_2();
var stA3 = new io_cloudoffice_platform_cockpit_layout_LayoutComponent$ComponentDefComponent$2;
(refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$ComponentDefComponent$2 || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$ComponentDefComponent$2 = io_cloudoffice_platform_cockpit_layout_LayoutComponent$ComponentDefComponent$2(false))).constructor.cons__V.call(stA3);
invoker.post__VLjava_lang_String_2Ljava_lang_String_2Lio_cloudoffice_platform_cockpit_api_CallBack_2(stA0,stA1, stA2, stA3);
    }
    X_236: for (;;) { IF: if (gt <= 236) {
return;

    }
}}}}}}}}}
};
c['removeComponentFromLayout__VLio_cloudoffice_platform_cockpit_layout_Layout_2Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.removeComponentFromTheComponentPath__VLjava_lang_String_2Ljava_lang_String_2 = function(lcA0, lcA1) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['_CONFIG']();var stA1 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['componentDirectoryDeleteEndpoint__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2'](lcA0, lcA1);
var stA2 = null;var stA3 = new io_cloudoffice_platform_cockpit_layout_LayoutComponent$ComponentDefComponent$3;
(refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$ComponentDefComponent$3 || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$ComponentDefComponent$3 = io_cloudoffice_platform_cockpit_layout_LayoutComponent$ComponentDefComponent$3(false))).constructor.cons__V.call(stA3);
invoker.fetch__VLjava_lang_String_2Ljava_util_Map_2Lio_cloudoffice_platform_cockpit_api_CallBack_2(stA0,stA1, stA2, stA3);
return;

};
c['removeComponentFromTheComponentPath__VLjava_lang_String_2Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_layout_LayoutComponent$ComponentDefComponentfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_layout_LayoutComponent$ComponentDefComponent', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_layout_LayoutComponent$ComponentDefComponentfillInstOf });
    io_cloudoffice_platform_cockpit_layout_LayoutComponent$ComponentDefComponentfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/layout/LayoutComponent$ComponentDefComponent';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 33;
    CLS.$class.cnstr = CLS;
    var refs_java_lang_Object;
    var refs_io_cloudoffice_platform_cockpit_api_Components;
    var refs_io_cloudoffice_platform_cockpit_api_Event;
    var refs_java_lang_StringBuilder;
    var refs_io_cloudoffice_platform_cockpit_js_VIEW;
    var refs_io_cloudoffice_platform_cockpit_api_MapBuilder;
    var refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent;
    var refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration;
    var refs_io_cloudoffice_platform_cockpit_js_JSUIUtils;
    var refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$ComponentDefComponent$1;
    var refs_io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor;
    var refs_io_cloudoffice_platform_cockpit_layout_ComponentDef;
    var refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$ComponentDefComponent$2;
    var refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$ComponentDefComponent$3;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_layout_LayoutComponent$ComponentDefComponent = registerClass(exports,'io_cloudoffice_platform_cockpit_layout_LayoutComponent$ComponentDefComponent',io_cloudoffice_platform_cockpit_layout_LayoutComponent$ComponentDefComponent);


function io_cloudoffice_platform_cockpit_layout_LayoutComponent$ComponentDefComponent$3() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_layout_LayoutComponent$ComponentDefComponent$3;
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
    m.access = 0;
    m.cls = CLS;
    m = c.handle__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;
(refs_io_cloudoffice_platform_cockpit_api_Logger || (refs_io_cloudoffice_platform_cockpit_api_Logger = vm.io_cloudoffice_platform_cockpit_api_Logger(false)))['log__VLjava_lang_String_2'](">>> Instance removed from the component directory.");
return;

};
c['handle__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_layout_LayoutComponent$ComponentDefComponent$3fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_layout_LayoutComponent$ComponentDefComponent$3', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_CallBack(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_layout_LayoutComponent$ComponentDefComponent$3fillInstOf });
    io_cloudoffice_platform_cockpit_layout_LayoutComponent$ComponentDefComponent$3fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/layout/LayoutComponent$ComponentDefComponent$3';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_CallBack(false).constructor.$class
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
    var refs_java_lang_Object;
    var refs_io_cloudoffice_platform_cockpit_api_Logger;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_layout_LayoutComponent$ComponentDefComponent$3 = io_cloudoffice_platform_cockpit_layout_LayoutComponent$ComponentDefComponent$3;

vm.io_cloudoffice_platform_cockpit_api_CallBack = link('io/cloudoffice/platform/cockpit/api/CallBack', function(f) { vm.io_cloudoffice_platform_cockpit_api_CallBack =  f; });
vm.io_cloudoffice_platform_cockpit_api_Logger = link('io/cloudoffice/platform/cockpit/api/Logger', function(f) { vm.io_cloudoffice_platform_cockpit_api_Logger =  f; });

function io_cloudoffice_platform_cockpit_layout_LayoutComponent$ComponentDefComponent$2() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_layout_LayoutComponent$ComponentDefComponent$2;
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
    m.access = 0;
    m.cls = CLS;
    m = c.handle__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;
(refs_io_cloudoffice_platform_cockpit_api_Logger || (refs_io_cloudoffice_platform_cockpit_api_Logger = vm.io_cloudoffice_platform_cockpit_api_Logger(false)))['log__VLjava_lang_String_2'](">>> Component removed successfully.");
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_Event;
(refs_io_cloudoffice_platform_cockpit_api_Event || (refs_io_cloudoffice_platform_cockpit_api_Event = vm.io_cloudoffice_platform_cockpit_api_Event(false))).constructor['cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2'].call(stA0, "invokefunction", "invokefunction", "updatelayout");
var lcA2 = stA0;
var stA0 = (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent = io_cloudoffice_platform_cockpit_layout_LayoutComponent(false))).getDefaultInstance__Lio_cloudoffice_platform_cockpit_api_Component_2();
invoker.listen__VLio_cloudoffice_platform_cockpit_api_Signal_2(stA0,lcA2);
return;

};
c['handle__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_layout_LayoutComponent$ComponentDefComponent$2fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_layout_LayoutComponent$ComponentDefComponent$2', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_CallBack(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_layout_LayoutComponent$ComponentDefComponent$2fillInstOf });
    io_cloudoffice_platform_cockpit_layout_LayoutComponent$ComponentDefComponent$2fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/layout/LayoutComponent$ComponentDefComponent$2';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_CallBack(false).constructor.$class
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
    var refs_java_lang_Object;
    var refs_io_cloudoffice_platform_cockpit_api_Logger;
    var refs_io_cloudoffice_platform_cockpit_api_Event;
    var refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_layout_LayoutComponent$ComponentDefComponent$2 = io_cloudoffice_platform_cockpit_layout_LayoutComponent$ComponentDefComponent$2;

vm.io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor = link('io/cloudoffice/platform/cockpit/api/JSON2ObjectConvertor', function(f) { vm.io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor =  f; });

function io_cloudoffice_platform_cockpit_layout_LayoutComponent$ComponentDefComponent$1() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_layout_LayoutComponent$ComponentDefComponent$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$componentdetails = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$ComponentDefComponent$1_val$componentdetails'] = v; return this['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$ComponentDefComponent$1_val$componentdetails']; };
    m = CLS.cons__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$ComponentDefComponent$1_val$componentdetails'] = lcA1;
(refs_java_lang_Object || (refs_java_lang_Object = vm.java_lang_Object(false))).constructor['cons__V'].call(lcA0);
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.handle__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor;
(refs_io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor || (refs_io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor = vm.io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor(false))).constructor['cons__V'].call(stA0);
var stA1 = lcA1;var stA2 = new io_cloudoffice_platform_cockpit_layout_Layout;
(refs_io_cloudoffice_platform_cockpit_layout_Layout || (refs_io_cloudoffice_platform_cockpit_layout_Layout = io_cloudoffice_platform_cockpit_layout_Layout(false))).constructor.cons__V.call(stA2);
var stA0 = invoker.getObject__Ljava_lang_Object_2Ljava_lang_String_2Ljava_lang_Object_2(stA0,stA1, stA2);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_layout_Layout']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.layout.Layout');
var lcA2 = stA0;
(refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$ComponentDefComponent || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$ComponentDefComponent = io_cloudoffice_platform_cockpit_layout_LayoutComponent$ComponentDefComponent(false))).removeComponentFromLayout__VLio_cloudoffice_platform_cockpit_layout_Layout_2Ljava_lang_String_2(lcA2, lcA0['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$ComponentDefComponent$1_val$componentdetails']);
return;

};
c['handle__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_layout_LayoutComponent$ComponentDefComponent$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_layout_LayoutComponent$ComponentDefComponent$1', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_CallBack(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_layout_LayoutComponent$ComponentDefComponent$1fillInstOf });
    io_cloudoffice_platform_cockpit_layout_LayoutComponent$ComponentDefComponent$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/layout/LayoutComponent$ComponentDefComponent$1';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_CallBack(false).constructor.$class
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
    var refs_java_lang_Object;
    var refs_io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor;
    var refs_io_cloudoffice_platform_cockpit_layout_Layout;
    var refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$ComponentDefComponent;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$ComponentDefComponent$1_val$componentdetails'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_layout_LayoutComponent$ComponentDefComponent$1 = io_cloudoffice_platform_cockpit_layout_LayoutComponent$ComponentDefComponent$1;

vm.io_cloudoffice_platform_cockpit_js_JSUIUtils = link('io/cloudoffice/platform/cockpit/js/JSUIUtils', function(f) { vm.io_cloudoffice_platform_cockpit_js_JSUIUtils =  f; });
vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration = link('io/cloudoffice/platform/cockpit/api/ComponentConfiguration', function(f) { vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration =  f; });

function io_cloudoffice_platform_cockpit_layout_LayoutComponent() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_layout_LayoutComponent;
  if (!CLS.$class) {
    var pp = vm.io_cloudoffice_platform_cockpit_api_AbstractComponent(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_defaultInstance'] = null;
  m = c._defaultInstance = function (v) {  if (arguments.length == 1) CLS['fld_defaultInstance'] = v; return CLS['fld_defaultInstance']; };
    m = c.getDefaultInstance__Lio_cloudoffice_platform_cockpit_api_Component_2 = function() {
return c._defaultInstance();

};
c['getDefaultInstance__Lio_cloudoffice_platform_cockpit_api_Component_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_io_cloudoffice_platform_cockpit_api_AbstractComponent || (refs_io_cloudoffice_platform_cockpit_api_AbstractComponent = vm.io_cloudoffice_platform_cockpit_api_AbstractComponent(false))).constructor['cons__V'].call(lcA0);
return;

};
CLS['cons__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.bindEventListeners__V = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = "loginsuccess";var stA2 = new io_cloudoffice_platform_cockpit_layout_LayoutComponent$LoadLayout;
(refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$LoadLayout || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$LoadLayout = io_cloudoffice_platform_cockpit_layout_LayoutComponent$LoadLayout(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_layout_LayoutComponent_2Lio_cloudoffice_platform_cockpit_layout_LayoutComponent$1_2.call(stA2, lcA0, null);
invoker.attachListener__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_EventListener_2(stA0,stA1, stA2);
var stA0 = lcA0;var stA1 = "designermode";var stA2 = new io_cloudoffice_platform_cockpit_layout_LayoutComponent$DesignerModeListener;
(refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$DesignerModeListener || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$DesignerModeListener = io_cloudoffice_platform_cockpit_layout_LayoutComponent$DesignerModeListener(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_layout_LayoutComponent_2Lio_cloudoffice_platform_cockpit_layout_LayoutComponent$1_2.call(stA2, lcA0, null);
invoker.attachListener__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_EventListener_2(stA0,stA1, stA2);
var stA0 = lcA0;var stA1 = "invokefunction";var stA2 = new io_cloudoffice_platform_cockpit_layout_LayoutComponent$InvokeFunctionListener;
(refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$InvokeFunctionListener || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$InvokeFunctionListener = io_cloudoffice_platform_cockpit_layout_LayoutComponent$InvokeFunctionListener(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_layout_LayoutComponent_2Lio_cloudoffice_platform_cockpit_layout_LayoutComponent$1_2.call(stA2, lcA0, null);
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
    m = c.setComponentName__V = function() {
  var  lcA0 = this;
c['_componentName'].call(lcA0, "layout-component");
return;

};
c['setComponentName__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.bindViewNames__V = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.getName__Ljava_lang_String_2((refs_io_cloudoffice_platform_cockpit_layout_Layout || (refs_io_cloudoffice_platform_cockpit_layout_Layout = io_cloudoffice_platform_cockpit_layout_Layout(false))).constructor.$class);
invoker.setDefaultViewName__VLjava_lang_String_2(stA0,stA1);
return;

};
c['bindViewNames__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.initStorage__V = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = new vm.io_cloudoffice_platform_cockpit_api_WebDB$IndexTableManager;
(refs_io_cloudoffice_platform_cockpit_api_WebDB$IndexTableManager || (refs_io_cloudoffice_platform_cockpit_api_WebDB$IndexTableManager = vm.io_cloudoffice_platform_cockpit_api_WebDB$IndexTableManager(false))).constructor['cons__VLio_cloudoffice_platform_cockpit_api_Component_2'].call(stA1, lcA0);
invoker.setOfflineIndexedStorage__VLio_cloudoffice_platform_cockpit_api_WebDB$IndexedTable_2(stA0,stA1);
var stA0 = invoker.getOfflineIndexedStorage__Lio_cloudoffice_platform_cockpit_api_WebDB$IndexedTable_2(lcA0);
invoker.createTable__V(stA0);
return;

};
c['initStorage__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getInitialPath__Lio_cloudoffice_platform_cockpit_layout_Path_2 = function() {
var stA0 = new io_cloudoffice_platform_cockpit_layout_Path;
(refs_io_cloudoffice_platform_cockpit_layout_Path || (refs_io_cloudoffice_platform_cockpit_layout_Path = io_cloudoffice_platform_cockpit_layout_Path(false))).constructor.cons__V.call(stA0);
var lcA0 = stA0;
lcA0.setPath__VLjava_lang_String_2("");
lcA0.setLayout__VLjava_lang_String_2("");
lcA0.setMlayout__VLjava_lang_String_2("");
lcA0.setIsHome__VZ(0);
lcA0.setIsSecure__VZ(0);
return lcA0;

};
c['getInitialPath__Lio_cloudoffice_platform_cockpit_layout_Path_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.showNewPathPanel__VLio_cloudoffice_platform_cockpit_layout_Layout_2 = function(lcA0) {
var stA0 = lcA0;var stA1 = c.getInitialPath__Lio_cloudoffice_platform_cockpit_layout_Path_2();
stA0.setTemppath__VLio_cloudoffice_platform_cockpit_layout_Path_2(stA1);
lcA0.setNewPathPanelDisplay__VZ(1);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.hideNewPathPanel__VLio_cloudoffice_platform_cockpit_layout_Layout_2 = function(lcA0) {
lcA0.setNewPathPanelDisplay__VZ(0);
var stA0 = lcA0;var stA1 = c.getInitialPath__Lio_cloudoffice_platform_cockpit_layout_Path_2();
stA0.setTemppath__VLio_cloudoffice_platform_cockpit_layout_Path_2(stA1);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.showPaths__VLio_cloudoffice_platform_cockpit_layout_Layout_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = lcA0;var stI1 = lcA0.isPathDrop__Z();
if ((stI1) != 0) { gt = 12; break IF; }
var stI1 = 1;{ gt = 13; break IF; }
    }
    X_12: for (;;) { IF: if (gt <= 12) {

var stI1 = 0;    }
    X_13: for (;;) { IF: if (gt <= 13) {
stA0.setPathDrop__VZ(stI1);
var stI0 = lcA0.isPathDrop__Z();
if ((stI0) == 0) { gt = 41; break IF; }
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['_CONFIG']();var stA1 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['pathsListFetchEndpoint__Ljava_lang_String_2']();
var stA2 = null;var stA3 = new io_cloudoffice_platform_cockpit_layout_LayoutComponent$1;
(refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$1 || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$1 = io_cloudoffice_platform_cockpit_layout_LayoutComponent$1(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_layout_Layout_2.call(stA3, lcA0);
invoker.fetch__VLjava_lang_String_2Ljava_util_Map_2Lio_cloudoffice_platform_cockpit_api_CallBack_2(stA0,stA1, stA2, stA3);
    }
    X_41: for (;;) { IF: if (gt <= 41) {
return;

    }
}}}}
};
    m.access = 8;
    m.cls = CLS;
    m = c.savePath__VLio_cloudoffice_platform_cockpit_layout_Layout_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = lcA0.getTemppath__Lio_cloudoffice_platform_cockpit_layout_Path_2();
var lcA1 = stA0;
var stA0 = lcA1.getPath__Ljava_lang_String_2();
var lcA2 = stA0;
var stA0 = invoker.replaceAll__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2(lcA2,"[\\s\\d(){}\\[\\]\\/\\-\\+\\\\%?'$&#@!~_,;:*^|=_<>]+", "");
var lcA2 = stA0;
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](lcA2);
if ((stI0) == 0) { gt = 68; break IF; }
var stA0 = lcA1;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"/");
var stA2 = invoker.toLowerCase__Ljava_lang_String_2(lcA2);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,stA2);
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
stA0.setPath__VLjava_lang_String_2(stA1);
lcA1.setLayout__VLjava_lang_String_2("blanklayout");
lcA1.setMlayout__VLjava_lang_String_2("blanklayout");
c.readDomainInformationAndWriteNewPath__VLio_cloudoffice_platform_cockpit_layout_Path_2(lcA1);
    }
    X_68: for (;;) { IF: if (gt <= 68) {
return;

    }
}}
};
    m.access = 8;
    m.cls = CLS;
    m = c.readDomainInformationAndWriteNewPath__VLio_cloudoffice_platform_cockpit_layout_Path_2 = function(lcA0) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['_CONFIG']();var stA1 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['pathsListFetchEndpoint__Ljava_lang_String_2']();
var stA2 = null;var stA3 = new io_cloudoffice_platform_cockpit_layout_LayoutComponent$2;
(refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$2 || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$2 = io_cloudoffice_platform_cockpit_layout_LayoutComponent$2(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_layout_Path_2.call(stA3, lcA0);
invoker.fetch__VLjava_lang_String_2Ljava_util_Map_2Lio_cloudoffice_platform_cockpit_api_CallBack_2(stA0,stA1, stA2, stA3);
return;

};
c['readDomainInformationAndWriteNewPath__VLio_cloudoffice_platform_cockpit_layout_Path_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.makeHomeStatusFalseOnEachPath__VLio_cloudoffice_platform_cockpit_layout_Domain_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = lcA0.getPaths__Ljava_util_List_2();
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA1 = stA0;
    }
    X_10: for (;;) { IF: if (gt <= 10) {

var stI0 = invoker.hasNext__Z(lcA1);
if ((stI0) == 0) { gt = 37; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA1);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_layout_Path']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.layout.Path');
var lcA2 = stA0;
lcA2.setIsHome__VZ(0);
{ gt = 0; continue X_10; }
    }
    X_37: for (;;) { IF: if (gt <= 37) {
return;

    }
}}}
};
c['makeHomeStatusFalseOnEachPath__VLio_cloudoffice_platform_cockpit_layout_Domain_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.makeitselfhomepath__VLio_cloudoffice_platform_cockpit_layout_Domain_2Ljava_lang_String_2 = function(lcA0, lcA1) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = lcA0.getPaths__Ljava_util_List_2();
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA2 = stA0;
    }
    X_10: for (;;) { IF: if (gt <= 10) {

var stI0 = invoker.hasNext__Z(lcA2);
if ((stI0) == 0) { gt = 73; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA2);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_layout_Path']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.layout.Path');
var lcA3 = stA0;
var stA0 = lcA3.getPath__Ljava_lang_String_2();
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](stA0);
if ((stI0) == 0) { gt = 65; break IF; }
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](lcA1);
if ((stI0) == 0) { gt = 65; break IF; }
var stA0 = lcA1;var stA1 = lcA3.getPath__Ljava_lang_String_2();
var stI0 = invoker.equalsIgnoreCase__ZLjava_lang_String_2(stA0,stA1);
if ((stI0) == 0) { gt = 65; break IF; }
lcA3.setIsHome__VZ(1);
{ gt = 70; break IF; }
    }
    X_65: for (;;) { IF: if (gt <= 65) {

lcA3.setIsHome__VZ(0);
    }
    X_70: for (;;) { IF: if (gt <= 70) {
{ gt = 0; continue X_10; }
    }
    X_73: for (;;) { IF: if (gt <= 73) {
return;

    }
}}}}}
};
c['makeitselfhomepath__VLio_cloudoffice_platform_cockpit_layout_Domain_2Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.pathExistOnDomainPaths__ZLio_cloudoffice_platform_cockpit_layout_Domain_2Ljava_lang_String_2 = function(lcA0, lcA1) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = lcA0.getPaths__Ljava_util_List_2();
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA2 = stA0;
    }
    X_10: for (;;) { IF: if (gt <= 10) {

var stI0 = invoker.hasNext__Z(lcA2);
if ((stI0) == 0) { gt = 62; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA2);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_layout_Path']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.layout.Path');
var lcA3 = stA0;
var stA0 = lcA3.getPath__Ljava_lang_String_2();
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](stA0);
if ((stI0) == 0) { gt = 59; break IF; }
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](lcA1);
if ((stI0) == 0) { gt = 59; break IF; }
var stA0 = lcA1;var stA1 = lcA3.getPath__Ljava_lang_String_2();
var stI0 = invoker.equalsIgnoreCase__ZLjava_lang_String_2(stA0,stA1);
if ((stI0) == 0) { gt = 59; break IF; }
return 1;
    }
    X_59: for (;;) { IF: if (gt <= 59) {
{ gt = 0; continue X_10; }
    }
    X_62: for (;;) { IF: if (gt <= 62) {

return 0;

    }
}}}}
};
c['pathExistOnDomainPaths__ZLio_cloudoffice_platform_cockpit_layout_Domain_2Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.updatedomainJSON__VLio_cloudoffice_platform_cockpit_layout_Layout_2Ljava_lang_String_2 = function(lcA0, lcA1) {
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor;
(refs_io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor || (refs_io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor = vm.io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor(false))).constructor['cons__V'].call(stA0);
var stA1 = lcA1;var stA2 = new io_cloudoffice_platform_cockpit_layout_Domain;
(refs_io_cloudoffice_platform_cockpit_layout_Domain || (refs_io_cloudoffice_platform_cockpit_layout_Domain = io_cloudoffice_platform_cockpit_layout_Domain(false))).constructor.cons__V.call(stA2);
var stA0 = invoker.getObject__Ljava_lang_Object_2Ljava_lang_String_2Ljava_lang_Object_2(stA0,stA1, stA2);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_layout_Domain']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.layout.Domain');
var lcA2 = stA0;
c.writeondomainJSON__VLio_cloudoffice_platform_cockpit_layout_Domain_2(lcA2);
return;

};
c['updatedomainJSON__VLio_cloudoffice_platform_cockpit_layout_Layout_2Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.writeondomainJSON__VLio_cloudoffice_platform_cockpit_layout_Domain_2 = function(lcA0) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['_CONFIG']();var stA1 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['domainPostEndpoint__Ljava_lang_String_2']();
var stA2 = lcA0.toString__Ljava_lang_String_2();
var stA3 = new io_cloudoffice_platform_cockpit_layout_LayoutComponent$3;
(refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$3 || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$3 = io_cloudoffice_platform_cockpit_layout_LayoutComponent$3(false))).constructor.cons__V.call(stA3);
invoker.post__VLjava_lang_String_2Ljava_lang_String_2Lio_cloudoffice_platform_cockpit_api_CallBack_2(stA0,stA1, stA2, stA3);
return;

};
c['writeondomainJSON__VLio_cloudoffice_platform_cockpit_layout_Domain_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.copyrawlayoutfromtheplatformlayoutstore__VLjava_lang_String_2 = function(lcA0) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['_CONFIG']();var stA1 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['rawlayoutcopyendpoint__Ljava_lang_String_2Ljava_lang_String_2'](lcA0);
var stA2 = null;var stA3 = new io_cloudoffice_platform_cockpit_layout_LayoutComponent$4;
(refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$4 || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$4 = io_cloudoffice_platform_cockpit_layout_LayoutComponent$4(false))).constructor.cons__V.call(stA3);
invoker.fetch__VLjava_lang_String_2Ljava_util_Map_2Lio_cloudoffice_platform_cockpit_api_CallBack_2(stA0,stA1, stA2, stA3);
return;

};
c['copyrawlayoutfromtheplatformlayoutstore__VLjava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.updatedomainpostprocess__VLio_cloudoffice_platform_cockpit_layout_Layout_2 = function(lcA0) {
lcA0.setNewPathPanelDisplay__VZ(0);
var stA0 = lcA0;var stA1 = c.getInitialPath__Lio_cloudoffice_platform_cockpit_layout_Path_2();
stA0.setTemppath__VLio_cloudoffice_platform_cockpit_layout_Path_2(stA1);
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['_CONFIG']();var stA1 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['pathsListFetchEndpoint__Ljava_lang_String_2']();
var stA2 = null;var stA3 = new io_cloudoffice_platform_cockpit_layout_LayoutComponent$5;
(refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$5 || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$5 = io_cloudoffice_platform_cockpit_layout_LayoutComponent$5(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_layout_Layout_2.call(stA3, lcA0);
invoker.fetch__VLjava_lang_String_2Ljava_util_Map_2Lio_cloudoffice_platform_cockpit_api_CallBack_2(stA0,stA1, stA2, stA3);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.showLayouts__VLio_cloudoffice_platform_cockpit_layout_Layout_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = lcA0;var stI1 = lcA0.isLayoutDrop__Z();
if ((stI1) != 0) { gt = 12; break IF; }
var stI1 = 1;{ gt = 13; break IF; }
    }
    X_12: for (;;) { IF: if (gt <= 12) {

var stI1 = 0;    }
    X_13: for (;;) { IF: if (gt <= 13) {
stA0.setLayoutDrop__VZ(stI1);
var stI0 = lcA0.isLayoutDrop__Z();
if ((stI0) == 0) { gt = 41; break IF; }
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['_CONFIG']();var stA1 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['layoutListFetchEndpoint__Ljava_lang_String_2']();
var stA2 = null;var stA3 = new io_cloudoffice_platform_cockpit_layout_LayoutComponent$6;
(refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$6 || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$6 = io_cloudoffice_platform_cockpit_layout_LayoutComponent$6(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_layout_Layout_2.call(stA3, lcA0);
invoker.fetch__VLjava_lang_String_2Ljava_util_Map_2Lio_cloudoffice_platform_cockpit_api_CallBack_2(stA0,stA1, stA2, stA3);
    }
    X_41: for (;;) { IF: if (gt <= 41) {
return;

    }
}}}}
};
    m.access = 8;
    m.cls = CLS;
    m = c.showThemes__VLio_cloudoffice_platform_cockpit_layout_Layout_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = lcA0;var stI1 = lcA0.isLayoutDrop__Z();
if ((stI1) != 0) { gt = 12; break IF; }
var stI1 = 1;{ gt = 13; break IF; }
    }
    X_12: for (;;) { IF: if (gt <= 12) {

var stI1 = 0;    }
    X_13: for (;;) { IF: if (gt <= 13) {
stA0.setLayoutDrop__VZ(stI1);
var stI0 = lcA0.isLayoutDrop__Z();
if ((stI0) == 0) { gt = 41; break IF; }
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['_CONFIG']();var stA1 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['layoutListFetchEndpoint__Ljava_lang_String_2']();
var stA2 = null;var stA3 = new io_cloudoffice_platform_cockpit_layout_LayoutComponent$7;
(refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$7 || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$7 = io_cloudoffice_platform_cockpit_layout_LayoutComponent$7(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_layout_Layout_2.call(stA3, lcA0);
invoker.fetch__VLjava_lang_String_2Ljava_util_Map_2Lio_cloudoffice_platform_cockpit_api_CallBack_2(stA0,stA1, stA2, stA3);
    }
    X_41: for (;;) { IF: if (gt <= 41) {
return;

    }
}}}}
};
    m.access = 8;
    m.cls = CLS;
    m = c.showSassVariables__VLio_cloudoffice_platform_cockpit_layout_Layout_2 = function(lcA0) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['builder__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2']();
var stA1 = "layout";var stA2 = lcA0.getId__Ljava_lang_String_2();
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2(stA0,stA1, stA2);
var stA1 = "id";var stA2 = lcA0.getId__Ljava_lang_String_2();
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2(stA0,stA1, stA2);
var lcA1 = stA0;
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_Components || (refs_io_cloudoffice_platform_cockpit_api_Components = vm.io_cloudoffice_platform_cockpit_api_Components(false)))['_LAYOUT']();var stA1 = new vm.io_cloudoffice_platform_cockpit_api_Event;
(refs_io_cloudoffice_platform_cockpit_api_Event || (refs_io_cloudoffice_platform_cockpit_api_Event = vm.io_cloudoffice_platform_cockpit_api_Event(false))).constructor['cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2'].call(stA1, "proppanel", "designermode", lcA1);
invoker.listen__VLio_cloudoffice_platform_cockpit_api_Signal_2(stA0,stA1);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.readSassVariables__VLio_cloudoffice_platform_cockpit_layout_Layout_2Ljava_lang_String_2 = function(lcA0, lcA1) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['query__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2'](lcA1);
var lcA2 = stA0;
var stA0 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA2,"id");
var lcA3 = stA0;
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['_CONFIG']();var stA1 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['layoutStyleConfigVariablesFetchEndpoint__Ljava_lang_String_2Ljava_lang_String_2'](lcA3);
var stA2 = null;var stA3 = new io_cloudoffice_platform_cockpit_layout_LayoutComponent$8;
(refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$8 || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$8 = io_cloudoffice_platform_cockpit_layout_LayoutComponent$8(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_layout_Layout_2Ljava_lang_String_2.call(stA3, lcA0, lcA3);
invoker.fetch__VLjava_lang_String_2Ljava_util_Map_2Lio_cloudoffice_platform_cockpit_api_CallBack_2(stA0,stA1, stA2, stA3);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.showComponentStyle__VLio_cloudoffice_platform_cockpit_layout_Layout_2Ljava_lang_String_2 = function(lcA0, lcA1) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['query__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2'](lcA1);
var lcA2 = stA0;
var stA0 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA2,"component");
var lcA3 = stA0;
var stA0 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA2,"instance");
var lcA4 = stA0;
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['_CONFIG']();var stA1 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['componentStyleConfigVariablesFetchEndpoint__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2'](lcA3, lcA4);
var stA2 = null;var stA3 = new io_cloudoffice_platform_cockpit_layout_LayoutComponent$9;
(refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$9 || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$9 = io_cloudoffice_platform_cockpit_layout_LayoutComponent$9(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_layout_Layout_2Ljava_lang_String_2Ljava_lang_String_2.call(stA3, lcA0, lcA3, lcA4);
invoker.fetch__VLjava_lang_String_2Ljava_util_Map_2Lio_cloudoffice_platform_cockpit_api_CallBack_2(stA0,stA1, stA2, stA3);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.showComponentConfig__VLio_cloudoffice_platform_cockpit_layout_Layout_2Ljava_lang_String_2 = function(lcA0, lcA1) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['query__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2'](lcA1);
var lcA2 = stA0;
var stA0 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA2,"component");
var lcA3 = stA0;
var stA0 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA2,"instance");
var lcA4 = stA0;
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['_CONFIG']();var stA1 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['configFetchEndpoint__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2'](lcA3, lcA4);
var stA2 = null;var stA3 = new io_cloudoffice_platform_cockpit_layout_LayoutComponent$10;
(refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$10 || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$10 = io_cloudoffice_platform_cockpit_layout_LayoutComponent$10(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_layout_Layout_2Ljava_lang_String_2Ljava_lang_String_2.call(stA3, lcA0, lcA3, lcA4);
invoker.fetch__VLjava_lang_String_2Ljava_util_Map_2Lio_cloudoffice_platform_cockpit_api_CallBack_2(stA0,stA1, stA2, stA3);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.showupdateloader__VLio_cloudoffice_platform_cockpit_layout_Layout_2 = function(lcA0) {
lcA0.setUpdateloader__VZ(1);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.hideupdateloader__VLio_cloudoffice_platform_cockpit_layout_Layout_2 = function(lcA0) {
lcA0.setUpdateloader__VZ(0);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.closePropPanel__VLio_cloudoffice_platform_cockpit_layout_Layout_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = lcA0;var stI1 = lcA0.isPropOn__Z();
if ((stI1) != 0) { gt = 12; break IF; }
var stI1 = 1;{ gt = 13; break IF; }
    }
    X_12: for (;;) { IF: if (gt <= 12) {

var stI1 = 0;    }
    X_13: for (;;) { IF: if (gt <= 13) {
stA0.setPropOn__VZ(stI1);
return;

    }
}}}
};
    m.access = 8;
    m.cls = CLS;
    m = c.saveProperties__VLio_cloudoffice_platform_cockpit_layout_Layout_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = lcA0.getPropPanel__Lio_cloudoffice_platform_cockpit_layout_Properties_2();
var stI0 = stA0.isComponent__Z();
var lcI1 = stI0;
var stA0 = lcA0.getPropPanel__Lio_cloudoffice_platform_cockpit_layout_Properties_2();
var stI0 = stA0.isConfig__Z();
var lcI2 = stI0;
if ((lcI1) != 0) { gt = 27; break IF; }
c.saveLayoutProperties__VLio_cloudoffice_platform_cockpit_layout_Layout_2(lcA0);
{ gt = 42; break IF; }
    }
    X_27: for (;;) { IF: if (gt <= 27) {

if ((lcI2) == 0) { gt = 38; break IF; }
c.saveComponentConfigProperties__VLio_cloudoffice_platform_cockpit_layout_Layout_2(lcA0);
{ gt = 42; break IF; }
    }
    X_38: for (;;) { IF: if (gt <= 38) {

c.saveComponentStyleProperties__VLio_cloudoffice_platform_cockpit_layout_Layout_2(lcA0);
    }
    X_42: for (;;) { IF: if (gt <= 42) {
return;

    }
}}}}
};
    m.access = 8;
    m.cls = CLS;
    m = c.opensubscribedcomponentlist__VLio_cloudoffice_platform_cockpit_layout_Layout_2Ljava_lang_String_2 = function(lcA0, lcA1) {
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor;
(refs_io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor || (refs_io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor = vm.io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor(false))).constructor['cons__V'].call(stA0);
var stA1 = lcA1;var stA2 = new io_cloudoffice_platform_cockpit_layout_Column;
(refs_io_cloudoffice_platform_cockpit_layout_Column || (refs_io_cloudoffice_platform_cockpit_layout_Column = io_cloudoffice_platform_cockpit_layout_Column(false))).constructor.cons__V.call(stA2);
var stA0 = invoker.getObject__Ljava_lang_Object_2Ljava_lang_String_2Ljava_lang_Object_2(stA0,stA1, stA2);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_layout_Column']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.layout.Column');
var lcA2 = stA0;
lcA0.setSubscribedComponentDropZone__VLio_cloudoffice_platform_cockpit_layout_Column_2(lcA2);
lcA0.setComponentListDisplay__VZ(1);
lcA0.setComponentListLoader__VZ(1);
c.getSubscribedComponentsFromJSON__V();
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.updateSubscribedComponentList__VLio_cloudoffice_platform_cockpit_layout_Layout_2Ljava_lang_String_2 = function(lcA0, lcA1) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['query__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2'](lcA1);
var lcA2 = stA0;
var stA0 = invoker.getJsonArray__Lorg_json_JSONArray_2Ljava_lang_String_2(lcA2,"subscribedComponents");
var lcA3 = stA0;
var stA0 = lcA0.getSubscribedComponents__Ljava_util_List_2();
invoker.clear__V(stA0);
var lcI4 = 0;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

var stI0 = lcI4;var stI1 = invoker.length__I(lcA3);
if ((stI0) >= (stI1)) { gt = 82; break IF; }
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor;
(refs_io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor || (refs_io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor = vm.io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor(false))).constructor['cons__V'].call(stA0);
var stA1 = invoker.getJSONObject__Lorg_json_JSONObject_2I(lcA3,lcI4);
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA2 = new io_cloudoffice_platform_cockpit_layout_ComponentDef;
(refs_io_cloudoffice_platform_cockpit_layout_ComponentDef || (refs_io_cloudoffice_platform_cockpit_layout_ComponentDef = io_cloudoffice_platform_cockpit_layout_ComponentDef(false))).constructor.cons__V.call(stA2);
var stA0 = invoker.getObject__Ljava_lang_Object_2Ljava_lang_String_2Ljava_lang_Object_2(stA0,stA1, stA2);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_layout_ComponentDef']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.layout.ComponentDef');
var lcA5 = stA0;
var stA0 = lcA0.getSubscribedComponents__Ljava_util_List_2();
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,lcA5);
lcI4++;
{ gt = 0; continue X_24; }
    }
    X_82: for (;;) { IF: if (gt <= 82) {

lcA0.setComponentListLoader__VZ(0);
return;

    }
}}}
};
    m.access = 8;
    m.cls = CLS;
    m = c.hideComponentList__VLio_cloudoffice_platform_cockpit_layout_Layout_2 = function(lcA0) {
lcA0.setComponentListDisplay__VZ(0);
var stA0 = lcA0.getSubscribedComponents__Ljava_util_List_2();
invoker.clear__V(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.hideStylePanel__VLio_cloudoffice_platform_cockpit_layout_Layout_2 = function(lcA0) {
lcA0.setPropOn__VZ(0);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.reloadStyle__VLio_cloudoffice_platform_cockpit_layout_Layout_2 = function(lcA0) {
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"LayoutManager.styleReload(\"");
var stA1 = lcA0.getId__Ljava_lang_String_2();
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"\")");
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
(refs_io_cloudoffice_platform_cockpit_js_VIEW || (refs_io_cloudoffice_platform_cockpit_js_VIEW = vm.io_cloudoffice_platform_cockpit_js_VIEW(false)))['invokeJSFunction__VLjava_lang_String_2'](stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.reloadComponentStyle__VLio_cloudoffice_platform_cockpit_layout_Layout_2 = function(lcA0) {
var stA0 = lcA0.getPropPanel__Lio_cloudoffice_platform_cockpit_layout_Properties_2();
var stA0 = stA0.getComponentName__Ljava_lang_String_2();
var lcA1 = stA0;
var stA0 = lcA0.getPropPanel__Lio_cloudoffice_platform_cockpit_layout_Properties_2();
var stA0 = stA0.getInstanceId__Ljava_lang_String_2();
var lcA2 = stA0;
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"LayoutManager.componentStyleReload(\"");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,lcA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"\",\"");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,lcA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"\")");
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
(refs_io_cloudoffice_platform_cockpit_js_VIEW || (refs_io_cloudoffice_platform_cockpit_js_VIEW = vm.io_cloudoffice_platform_cockpit_js_VIEW(false)))['invokeJSFunction__VLjava_lang_String_2'](stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.insertComponent__VLio_cloudoffice_platform_cockpit_layout_Layout_2Lio_cloudoffice_platform_cockpit_layout_ComponentDef_2 = function(lcA0, lcA1) {
c.showupdateloader__VLio_cloudoffice_platform_cockpit_layout_Layout_2(lcA0);
var stA0 = lcA0;var stA1 = lcA1.getName__Ljava_lang_String_2();
var stI0 = c.getNextInstanceIdNo__ILio_cloudoffice_platform_cockpit_layout_Layout_2Ljava_lang_String_2(stA0, stA1);
var lcI2 = stI0;
var stA0 = lcA1.getName__Ljava_lang_String_2();
var stA0 = invoker.split___3Ljava_lang_String_2Ljava_lang_String_2(stA0,"-");
var stA0 = (refs_java_util_Arrays || (refs_java_util_Arrays = vm.java_util_Arrays(false)))['asList__Ljava_util_List_2_3Ljava_lang_Object_2'](stA0);
var stA0 = invoker.get__Ljava_lang_Object_2I(stA0,0);
if (stA0 !== null && !stA0['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA0, 'java.lang.String');
var stA0 = invoker.concat__Ljava_lang_String_2Ljava_lang_String_2(stA0,"instance");
var stA1 = (refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false)))['valueOf__Ljava_lang_String_2I'](lcI2);
var stA0 = invoker.concat__Ljava_lang_String_2Ljava_lang_String_2(stA0,stA1);
var lcA3 = stA0;
lcA1.setInstance__VZ(1);
var stA0 = lcA1;var stA1 = lcA1.getModel__Ljava_lang_String_2();
var stA1 = invoker.concat__Ljava_lang_String_2Ljava_lang_String_2(stA1,lcA3);
stA0.setInstanceName__VLjava_lang_String_2(stA1);
lcA1.setInstanceId__VLjava_lang_String_2(lcA3);
var stA0 = lcA0.getSubscribedComponentDropZone__Lio_cloudoffice_platform_cockpit_layout_Column_2();
var lcA4 = stA0;
var stA0 = lcA1.toString__Ljava_lang_String_2();
var stA1 = lcA4.toString__Ljava_lang_String_2();
c.dropComponentToTheLayoutJSON__VLjava_lang_String_2Ljava_lang_String_2(stA0, stA1);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.createRow__VLio_cloudoffice_platform_cockpit_layout_Layout_2 = function(lcA0) {
c.showupdateloader__VLio_cloudoffice_platform_cockpit_layout_Layout_2(lcA0);
var stI0 = c.getNextRowId__ILio_cloudoffice_platform_cockpit_layout_Layout_2(lcA0);
var lcI1 = stI0;
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"row");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2I(stA0,lcI1);
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
var lcA2 = stA0;
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"Row ");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2I(stA0,lcI1);
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
var lcA3 = stA0;
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['builder__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2']();
var lcA4 = stA0;
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2(lcA4,"rowid", lcA2);
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2(lcA4,"rowname", lcA3);
c.addNewRowToTheLayoutJSON__VLio_cloudoffice_platform_cockpit_api_MapBuilder_2(lcA4);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.toggleDesignMode__VLio_cloudoffice_platform_cockpit_layout_Layout_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = lcA0;var stI1 = lcA0.isDesignerOn__Z();
if ((stI1) != 0) { gt = 12; break IF; }
var stI1 = 1;{ gt = 13; break IF; }
    }
    X_12: for (;;) { IF: if (gt <= 12) {

var stI1 = 0;    }
    X_13: for (;;) { IF: if (gt <= 13) {
stA0.setDesignerOn__VZ(stI1);
lcA0.setComponentListDisplay__VZ(0);
var stA0 = invoker.getFlags__Ljava_util_Map_2((refs_io_cloudoffice_platform_cockpit_api_Components || (refs_io_cloudoffice_platform_cockpit_api_Components = vm.io_cloudoffice_platform_cockpit_api_Components(false)))['_LAYOUT']());
var stA1 = "designMode";var stI2 = lcA0.isDesignerOn__Z();
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI2);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
return;

    }
}}}
};
    m.access = 8;
    m.cls = CLS;
    m = c.enableLayoutEdit__VLio_cloudoffice_platform_cockpit_layout_Layout_2 = function(lcA0) {
var stA0 = lcA0;var stA1 = lcA0.getName__Ljava_lang_String_2();
stA0.setInputfieldvalue__VLjava_lang_String_2(stA1);
lcA0.setEditable__VZ(1);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.disableLayoutEdit__VLio_cloudoffice_platform_cockpit_layout_Layout_2 = function(lcA0) {
lcA0.setInputfieldvalue__VLjava_lang_String_2("");
lcA0.setEditable__VZ(0);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.updateLayoutName__VLio_cloudoffice_platform_cockpit_layout_Layout_2 = function(lcA0) {
var stA0 = lcA0;var stA1 = lcA0.getInputfieldvalue__Ljava_lang_String_2();
stA0.setName__VLjava_lang_String_2(stA1);
c.disableLayoutEdit__VLio_cloudoffice_platform_cockpit_layout_Layout_2(lcA0);
c.updateName__VLio_cloudoffice_platform_cockpit_layout_Layout_2(lcA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.updatelayout__VLio_cloudoffice_platform_cockpit_layout_Layout_2 = function(lcA0) {
(refs_io_cloudoffice_platform_cockpit_api_Logger || (refs_io_cloudoffice_platform_cockpit_api_Logger = vm.io_cloudoffice_platform_cockpit_api_Logger(false)))['log__VLjava_lang_String_2'](">>> Start updating layout.");
c.updateLayoutFromJSON__V();
c.reloadStyle__VLio_cloudoffice_platform_cockpit_layout_Layout_2(lcA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.updaterenderedlayout__VLio_cloudoffice_platform_cockpit_layout_Layout_2Ljava_lang_String_2 = function(lcA0, lcA1) {
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor;
(refs_io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor || (refs_io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor = vm.io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor(false))).constructor['cons__V'].call(stA0);
var stA1 = lcA1;var stA2 = new io_cloudoffice_platform_cockpit_layout_Layout;
(refs_io_cloudoffice_platform_cockpit_layout_Layout || (refs_io_cloudoffice_platform_cockpit_layout_Layout = io_cloudoffice_platform_cockpit_layout_Layout(false))).constructor.cons__V.call(stA2);
var stA0 = invoker.getObject__Ljava_lang_Object_2Ljava_lang_String_2Ljava_lang_Object_2(stA0,stA1, stA2);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_layout_Layout']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.layout.Layout');
var lcA2 = stA0;
var stA0 = lcA0.getRows__Ljava_util_List_2();
invoker.clear__V(stA0);
var stA0 = lcA0.getRows__Ljava_util_List_2();
var stA1 = lcA2.getRows__Ljava_util_List_2();
var stI0 = invoker.addAll__ZLjava_util_Collection_2(stA0,stA1);
c.hideupdateloader__VLio_cloudoffice_platform_cockpit_layout_Layout_2(lcA0);
(refs_io_cloudoffice_platform_cockpit_api_Logger || (refs_io_cloudoffice_platform_cockpit_api_Logger = vm.io_cloudoffice_platform_cockpit_api_Logger(false)))['log__VLjava_lang_String_2'](">>> Layout updating done.");
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.getNextInstanceIdNo__ILio_cloudoffice_platform_cockpit_layout_Layout_2Ljava_lang_String_2 = function(lcA0, lcA1) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var lcI2 = 0;
var stA0 = lcA0.getRows__Ljava_util_List_2();
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA3 = stA0;
    }
    X_12: for (;;) { IF: if (gt <= 12) {

var stI0 = invoker.hasNext__Z(lcA3);
if ((stI0) == 0) { gt = 164; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA3);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_layout_Row']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.layout.Row');
var lcA4 = stA0;
var stA0 = lcA4.getColumns__Ljava_util_List_2();
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA5 = stA0;
    }
    X_44: for (;;) { IF: if (gt <= 44) {

var stI0 = invoker.hasNext__Z(lcA5);
if ((stI0) == 0) { gt = 161; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA5);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_layout_Column']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.layout.Column');
var lcA6 = stA0;
var stA0 = lcA6.getComponents__Ljava_util_List_2();
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA7 = stA0;
    }
    X_78: for (;;) { IF: if (gt <= 78) {

var stI0 = invoker.hasNext__Z(lcA7);
if ((stI0) == 0) { gt = 158; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA7);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_layout_ComponentDef']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.layout.ComponentDef');
var lcA8 = stA0;
var stA0 = lcA8.getName__Ljava_lang_String_2();
var stI0 = invoker.equalsIgnoreCase__ZLjava_lang_String_2(stA0,lcA1);
if ((stI0) == 0) { gt = 155; break IF; }
var stA0 = lcA8.getInstanceId__Ljava_lang_String_2();
var stA0 = invoker.split___3Ljava_lang_String_2Ljava_lang_String_2(stA0,"instance");
var stA0 = (refs_java_util_Arrays || (refs_java_util_Arrays = vm.java_util_Arrays(false)))['asList__Ljava_util_List_2_3Ljava_lang_Object_2'](stA0);
var lcA9 = stA0;
var stA0 = invoker.get__Ljava_lang_Object_2I(lcA9,1);
if (stA0 !== null && !stA0['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA0, 'java.lang.String');
var stA0 = (refs_java_lang_Integer || (refs_java_lang_Integer = vm.java_lang_Integer(false)))['valueOf__Ljava_lang_Integer_2Ljava_lang_String_2'](stA0);
var stI0 = invoker.intValue__I(stA0);
var lcI10 = stI0;
if ((lcI10) <= (lcI2)) { gt = 155; break IF; }
var lcI2 = lcI10;
    }
    X_155: for (;;) { IF: if (gt <= 155) {
{ gt = 0; continue X_78; }
    }
    X_158: for (;;) { IF: if (gt <= 158) {
{ gt = 0; continue X_44; }
    }
    X_161: for (;;) { IF: if (gt <= 161) {
{ gt = 0; continue X_12; }
    }
    X_164: for (;;) { IF: if (gt <= 164) {

return (((lcI2) + (1)) | 0);

    }
}}}}}}}}
};
c['getNextInstanceIdNo__ILio_cloudoffice_platform_cockpit_layout_Layout_2Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.dropComponentToTheLayoutJSON__VLjava_lang_String_2Ljava_lang_String_2 = function(lcA0, lcA1) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['_CONFIG']();var stA1 = "layout";var stA2 = (refs_io_cloudoffice_platform_cockpit_js_JSUIUtils || (refs_io_cloudoffice_platform_cockpit_js_JSUIUtils = vm.io_cloudoffice_platform_cockpit_js_JSUIUtils(false)))['getLayout__Ljava_lang_String_2']();
var stA1 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['configFetchEndpoint__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2'](stA1, stA2);
var stA2 = null;var stA3 = new io_cloudoffice_platform_cockpit_layout_LayoutComponent$11;
(refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$11 || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$11 = io_cloudoffice_platform_cockpit_layout_LayoutComponent$11(false))).constructor.cons__VLjava_lang_String_2Ljava_lang_String_2.call(stA3, lcA0, lcA1);
invoker.fetch__VLjava_lang_String_2Ljava_util_Map_2Lio_cloudoffice_platform_cockpit_api_CallBack_2(stA0,stA1, stA2, stA3);
return;

};
c['dropComponentToTheLayoutJSON__VLjava_lang_String_2Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.dropComponentOnDropZone__VLio_cloudoffice_platform_cockpit_layout_Layout_2Ljava_lang_String_2Ljava_lang_String_2 = function(lcA0, lcA1, lcA2) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor;
(refs_io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor || (refs_io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor = vm.io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor(false))).constructor['cons__V'].call(stA0);
var stA1 = lcA1;var stA2 = new io_cloudoffice_platform_cockpit_layout_ComponentDef;
(refs_io_cloudoffice_platform_cockpit_layout_ComponentDef || (refs_io_cloudoffice_platform_cockpit_layout_ComponentDef = io_cloudoffice_platform_cockpit_layout_ComponentDef(false))).constructor.cons__V.call(stA2);
var stA0 = invoker.getObject__Ljava_lang_Object_2Ljava_lang_String_2Ljava_lang_Object_2(stA0,stA1, stA2);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_layout_ComponentDef']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.layout.ComponentDef');
var lcA3 = stA0;
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor;
(refs_io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor || (refs_io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor = vm.io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor(false))).constructor['cons__V'].call(stA0);
var stA1 = lcA2;var stA2 = new io_cloudoffice_platform_cockpit_layout_Column;
(refs_io_cloudoffice_platform_cockpit_layout_Column || (refs_io_cloudoffice_platform_cockpit_layout_Column = io_cloudoffice_platform_cockpit_layout_Column(false))).constructor.cons__V.call(stA2);
var stA0 = invoker.getObject__Ljava_lang_Object_2Ljava_lang_String_2Ljava_lang_Object_2(stA0,stA1, stA2);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_layout_Column']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.layout.Column');
var lcA4 = stA0;
var stA0 = lcA0.getRows__Ljava_util_List_2();
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA5 = stA0;
    }
    X_56: for (;;) { IF: if (gt <= 56) {

var stI0 = invoker.hasNext__Z(lcA5);
if ((stI0) == 0) { gt = 146; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA5);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_layout_Row']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.layout.Row');
var lcA6 = stA0;
var stA0 = lcA6.getColumns__Ljava_util_List_2();
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA7 = stA0;
    }
    X_90: for (;;) { IF: if (gt <= 90) {

var stI0 = invoker.hasNext__Z(lcA7);
if ((stI0) == 0) { gt = 143; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA7);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_layout_Column']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.layout.Column');
var lcA8 = stA0;
var stA0 = lcA4.getId__Ljava_lang_String_2();
var stA1 = lcA8.getId__Ljava_lang_String_2();
var stI0 = invoker.equalsIgnoreCase__ZLjava_lang_String_2(stA0,stA1);
if ((stI0) == 0) { gt = 140; break IF; }
var stA0 = lcA8.getComponents__Ljava_util_List_2();
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,lcA3);
    }
    X_140: for (;;) { IF: if (gt <= 140) {
{ gt = 0; continue X_90; }
    }
    X_143: for (;;) { IF: if (gt <= 143) {
{ gt = 0; continue X_56; }
    }
    X_146: for (;;) { IF: if (gt <= 146) {

var stA0 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['_CONFIG']();var stA1 = lcA0.getId__Ljava_lang_String_2();
var stA1 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['layoutConfigPostEndpoint__Ljava_lang_String_2Ljava_lang_String_2'](stA1);
var stA2 = lcA0.toString__Ljava_lang_String_2();
var stA3 = new io_cloudoffice_platform_cockpit_layout_LayoutComponent$12;
(refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$12 || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$12 = io_cloudoffice_platform_cockpit_layout_LayoutComponent$12(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_layout_ComponentDef_2.call(stA3, lcA3);
invoker.post__VLjava_lang_String_2Ljava_lang_String_2Lio_cloudoffice_platform_cockpit_api_CallBack_2(stA0,stA1, stA2, stA3);
return;

    }
}}}}}}
};
c['dropComponentOnDropZone__VLio_cloudoffice_platform_cockpit_layout_Layout_2Ljava_lang_String_2Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.getSubscribedComponentsFromJSON__V = function() {
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['_CONFIG']();var stA1 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['layoutStaticFetchEndpoint__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2']("subscribedcomponents", "json");
var stA2 = null;var stA3 = new io_cloudoffice_platform_cockpit_layout_LayoutComponent$13;
(refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$13 || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$13 = io_cloudoffice_platform_cockpit_layout_LayoutComponent$13(false))).constructor.cons__V.call(stA3);
invoker.fetch__VLjava_lang_String_2Ljava_util_Map_2Lio_cloudoffice_platform_cockpit_api_CallBack_2(stA0,stA1, stA2, stA3);
return;

};
c['getSubscribedComponentsFromJSON__V'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.saveComponentConfigProperties__VLio_cloudoffice_platform_cockpit_layout_Layout_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = lcA0.getPropPanel__Lio_cloudoffice_platform_cockpit_layout_Properties_2();
var stA0 = stA0.getComponentName__Ljava_lang_String_2();
var lcA1 = stA0;
var stA0 = lcA0.getPropPanel__Lio_cloudoffice_platform_cockpit_layout_Properties_2();
var stA0 = stA0.getInstanceId__Ljava_lang_String_2();
var lcA2 = stA0;
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['builder__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2']();
var lcA3 = stA0;
var stA0 = lcA0.getPropPanel__Lio_cloudoffice_platform_cockpit_layout_Properties_2();
var stA0 = stA0.getProps__Ljava_util_List_2();
var lcA4 = stA0;
var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA4);
var lcA5 = stA0;
    }
    X_38: for (;;) { IF: if (gt <= 38) {

var stI0 = invoker.hasNext__Z(lcA5);
if ((stI0) == 0) { gt = 78; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA5);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_layout_Prop']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.layout.Prop');
var lcA6 = stA0;
var stA0 = lcA3;var stA1 = lcA6.getKey__Ljava_lang_String_2();
var stA2 = lcA6.getValue__Ljava_lang_String_2();
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2(stA0,stA1, stA2);
{ gt = 0; continue X_38; }
    }
    X_78: for (;;) { IF: if (gt <= 78) {

var stA0 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['_CONFIG']();var stA1 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['configPostEndpoint__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2'](lcA1, lcA2, "conf");
var stA2 = invoker.toJSON__Ljava_lang_String_2(lcA3);
var stA3 = new io_cloudoffice_platform_cockpit_layout_LayoutComponent$14;
(refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$14 || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$14 = io_cloudoffice_platform_cockpit_layout_LayoutComponent$14(false))).constructor.cons__V.call(stA3);
invoker.post__VLjava_lang_String_2Ljava_lang_String_2Lio_cloudoffice_platform_cockpit_api_CallBack_2(stA0,stA1, stA2, stA3);
return;

    }
}}}
};
    m.access = 10;
    m.cls = CLS;
    m = c.saveComponentStyleProperties__VLio_cloudoffice_platform_cockpit_layout_Layout_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = lcA0.getPropPanel__Lio_cloudoffice_platform_cockpit_layout_Properties_2();
var stA0 = stA0.getComponentName__Ljava_lang_String_2();
var lcA1 = stA0;
var stA0 = lcA0.getPropPanel__Lio_cloudoffice_platform_cockpit_layout_Properties_2();
var stA0 = stA0.getInstanceId__Ljava_lang_String_2();
var lcA2 = stA0;
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var lcA3 = stA0;
var stA0 = lcA0.getPropPanel__Lio_cloudoffice_platform_cockpit_layout_Properties_2();
var stA0 = stA0.getProps__Ljava_util_List_2();
var lcA4 = stA0;
var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA4);
var lcA5 = stA0;
    }
    X_42: for (;;) { IF: if (gt <= 42) {

var stI0 = invoker.hasNext__Z(lcA5);
if ((stI0) == 0) { gt = 95; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA5);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_layout_Prop']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.layout.Prop');
var lcA6 = stA0;
var stA0 = lcA3;var stA1 = lcA6.getKey__Ljava_lang_String_2();
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA1 = lcA6.getValue__Ljava_lang_String_2();
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,";");
{ gt = 0; continue X_42; }
    }
    X_95: for (;;) { IF: if (gt <= 95) {

var stA0 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['_CONFIG']();var stA1 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['configPostEndpoint__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2'](lcA1, lcA2, "style");
var stA2 = invoker.toString__Ljava_lang_String_2(lcA3);
var stA3 = new io_cloudoffice_platform_cockpit_layout_LayoutComponent$15;
(refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$15 || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$15 = io_cloudoffice_platform_cockpit_layout_LayoutComponent$15(false))).constructor.cons__V.call(stA3);
invoker.post__VLjava_lang_String_2Ljava_lang_String_2Lio_cloudoffice_platform_cockpit_api_CallBack_2(stA0,stA1, stA2, stA3);
return;

    }
}}}
};
    m.access = 10;
    m.cls = CLS;
    m = c.saveLayoutProperties__VLio_cloudoffice_platform_cockpit_layout_Layout_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var lcA1 = stA0;
var stA0 = lcA0.getPropPanel__Lio_cloudoffice_platform_cockpit_layout_Properties_2();
var stA0 = stA0.getProps__Ljava_util_List_2();
var lcA2 = stA0;
var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA2);
var lcA3 = stA0;
    }
    X_23: for (;;) { IF: if (gt <= 23) {

var stI0 = invoker.hasNext__Z(lcA3);
if ((stI0) == 0) { gt = 74; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA3);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_layout_Prop']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.layout.Prop');
var lcA4 = stA0;
var stA0 = lcA1;var stA1 = lcA4.getKey__Ljava_lang_String_2();
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA1 = lcA4.getValue__Ljava_lang_String_2();
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,";");
{ gt = 0; continue X_23; }
    }
    X_74: for (;;) { IF: if (gt <= 74) {

var stA0 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['_CONFIG']();var stA1 = lcA0.getPropPanel__Lio_cloudoffice_platform_cockpit_layout_Properties_2();
var stA1 = stA1.getId__Ljava_lang_String_2();
var stA1 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['layoutStyleConfigVariablesPostEndpoint__Ljava_lang_String_2Ljava_lang_String_2'](stA1);
var stA2 = invoker.toString__Ljava_lang_String_2(lcA1);
var stA3 = new io_cloudoffice_platform_cockpit_layout_LayoutComponent$16;
(refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$16 || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$16 = io_cloudoffice_platform_cockpit_layout_LayoutComponent$16(false))).constructor.cons__V.call(stA3);
invoker.post__VLjava_lang_String_2Ljava_lang_String_2Lio_cloudoffice_platform_cockpit_api_CallBack_2(stA0,stA1, stA2, stA3);
return;

    }
}}}
};
    m.access = 10;
    m.cls = CLS;
    m = c.getVariablesAsPorp__Ljava_util_List_2Ljava_lang_String_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = (refs_java_util_regex_Pattern || (refs_java_util_regex_Pattern = vm.java_util_regex_Pattern(false)))['compile__Ljava_util_regex_Pattern_2Ljava_lang_String_2']("([^\\;]+)");
var lcA1 = stA0;
var stA0 = invoker.matcher__Ljava_util_regex_Matcher_2Ljava_lang_CharSequence_2(lcA1,lcA0);
var lcA2 = stA0;
var stA0 = new vm.java_util_ArrayList;
(refs_java_util_ArrayList || (refs_java_util_ArrayList = vm.java_util_ArrayList(false))).constructor['cons__V'].call(stA0);
var lcA3 = stA0;
    }
    X_20: for (;;) { IF: if (gt <= 20) {

var stI0 = invoker.find__Z(lcA2);
if ((stI0) == 0) { gt = 41; break IF; }
var stA0 = lcA3;var stA1 = invoker.group__Ljava_lang_String_2(lcA2);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,stA1);
{ gt = 0; continue X_20; }
    }
    X_41: for (;;) { IF: if (gt <= 41) {
var stA0 = new vm.java_util_ArrayList;
(refs_java_util_ArrayList || (refs_java_util_ArrayList = vm.java_util_ArrayList(false))).constructor['cons__V'].call(stA0);
var lcA4 = stA0;
var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA3);
var lcA5 = stA0;
    }
    X_58: for (;;) { IF: if (gt <= 58) {

var stI0 = invoker.hasNext__Z(lcA5);
if ((stI0) == 0) { gt = 137; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA5);
if (stA0 !== null && !stA0['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA0, 'java.lang.String');
var lcA6 = stA0;
var stA0 = (refs_java_util_regex_Pattern || (refs_java_util_regex_Pattern = vm.java_util_regex_Pattern(false)))['compile__Ljava_util_regex_Pattern_2Ljava_lang_String_2']("([^\\:]+):([^\\;]+)");
var lcA7 = stA0;
var stA0 = invoker.matcher__Ljava_util_regex_Matcher_2Ljava_lang_CharSequence_2(lcA7,lcA6);
var lcA8 = stA0;
    }
    X_96: for (;;) { IF: if (gt <= 96) {

var stI0 = invoker.find__Z(lcA8);
if ((stI0) == 0) { gt = 134; break IF; }
var stA0 = lcA4;var stA1 = new io_cloudoffice_platform_cockpit_layout_Prop;
var stA2 = stA1;var stA3 = invoker.group__Ljava_lang_String_2I(lcA8,1);
var stA4 = invoker.group__Ljava_lang_String_2I(lcA8,2);
(refs_io_cloudoffice_platform_cockpit_layout_Prop || (refs_io_cloudoffice_platform_cockpit_layout_Prop = io_cloudoffice_platform_cockpit_layout_Prop(false))).constructor.cons__VLjava_lang_String_2Ljava_lang_String_2.call(stA2, stA3, stA4);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,stA1);
{ gt = 0; continue X_96; }
    }
    X_134: for (;;) { IF: if (gt <= 134) {
{ gt = 0; continue X_58; }
    }
    X_137: for (;;) { IF: if (gt <= 137) {

return lcA4;

    }
}}}}}}}
};
    m.access = 10;
    m.cls = CLS;
    m = c.initLayout__VLio_cloudoffice_platform_cockpit_layout_Layout_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((refs_io_cloudoffice_platform_cockpit_api_Components || (refs_io_cloudoffice_platform_cockpit_api_Components = vm.io_cloudoffice_platform_cockpit_api_Components(false)))['_LAYOUT']() !== null && !(refs_io_cloudoffice_platform_cockpit_api_Components || (refs_io_cloudoffice_platform_cockpit_api_Components = vm.io_cloudoffice_platform_cockpit_api_Components(false)))['_LAYOUT']()['$instOf_io_cloudoffice_platform_cockpit_layout_LayoutComponent']) vm.java_lang_Class(false).castEx((refs_io_cloudoffice_platform_cockpit_api_Components || (refs_io_cloudoffice_platform_cockpit_api_Components = vm.io_cloudoffice_platform_cockpit_api_Components(false)))['_LAYOUT'](), 'io.cloudoffice.platform.cockpit.layout.LayoutComponent');
var lcA1 = (refs_io_cloudoffice_platform_cockpit_api_Components || (refs_io_cloudoffice_platform_cockpit_api_Components = vm.io_cloudoffice_platform_cockpit_api_Components(false)))['_LAYOUT']();
var stA0 = lcA0;var stA1 = (refs_io_cloudoffice_platform_cockpit_js_JSUIUtils || (refs_io_cloudoffice_platform_cockpit_js_JSUIUtils = vm.io_cloudoffice_platform_cockpit_js_JSUIUtils(false)))['getPath__Ljava_lang_String_2']();
stA0.setCurrentPath__VLjava_lang_String_2(stA1);
var stA0 = null;var stA1 = (refs_io_cloudoffice_platform_cockpit_api_Session || (refs_io_cloudoffice_platform_cockpit_api_Session = vm.io_cloudoffice_platform_cockpit_api_Session(false)))['getUser__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2']();
if ((stA0) === (stA1)) { gt = 36; break IF; }
var stA0 = lcA0;var stA1 = (refs_io_cloudoffice_platform_cockpit_api_Session || (refs_io_cloudoffice_platform_cockpit_api_Session = vm.io_cloudoffice_platform_cockpit_api_Session(false)))['getUser__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2']();
var stI1 = invoker.getBoolean__ZLjava_lang_String_2(stA1,"isCompanyAdmin");
stA0.setIsLoggedInUserCompanyAdmin__VZ(stI1);
{ gt = 41; break IF; }
    }
    X_36: for (;;) { IF: if (gt <= 36) {

lcA0.setIsLoggedInUserCompanyAdmin__VZ(0);
    }
    X_41: for (;;) { IF: if (gt <= 41) {

invoker.setView__VLjava_lang_Object_2(lcA1,lcA0);
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['builder__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2']();
var stA1 = "name";var stA2 = invoker.getComponentName__Ljava_lang_String_2(lcA1);
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2(stA0,stA1, stA2);
var stA1 = "model";var stA2 = invoker.getDefaultViewName__Ljava_lang_String_2(lcA1);
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2(stA0,stA1, stA2);
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Z(stA0,"applyBindings", 1);
var stA0 = invoker.get__Ljava_util_Map_2(stA0);
var lcA2 = stA0;
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_Event;
(refs_io_cloudoffice_platform_cockpit_api_Event || (refs_io_cloudoffice_platform_cockpit_api_Event = vm.io_cloudoffice_platform_cockpit_api_Event(false))).constructor['cons__VLjava_lang_String_2Ljava_lang_String_2'].call(stA0, "loginsuccess", "loginsuccess");
var lcA3 = stA0;
var stA0 = lcA0.getRows__Ljava_util_List_2();
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA4 = stA0;
    }
    X_100: for (;;) { IF: if (gt <= 100) {

var stI0 = invoker.hasNext__Z(lcA4);
if ((stI0) == 0) { gt = 398; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA4);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_layout_Row']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.layout.Row');
var lcA5 = stA0;
var stA0 = lcA5.getColumns__Ljava_util_List_2();
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA6 = stA0;
    }
    X_134: for (;;) { IF: if (gt <= 134) {

var stI0 = invoker.hasNext__Z(lcA6);
if ((stI0) == 0) { gt = 395; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA6);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_layout_Column']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.layout.Column');
var lcA7 = stA0;
var stI0 = lcA7.isHasLayout__Z();
if ((stI0) == 0) { gt = 318; break IF; }
var stA0 = lcA7.getLayout__Lio_cloudoffice_platform_cockpit_layout_Layout_2();
var stA0 = stA0.getRows__Ljava_util_List_2();
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA8 = stA0;
    }
    X_179: for (;;) { IF: if (gt <= 179) {

var stI0 = invoker.hasNext__Z(lcA8);
if ((stI0) == 0) { gt = 315; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA8);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_layout_Row']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.layout.Row');
var lcA9 = stA0;
var stA0 = lcA9.getColumns__Ljava_util_List_2();
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA10 = stA0;
    }
    X_213: for (;;) { IF: if (gt <= 213) {

var stI0 = invoker.hasNext__Z(lcA10);
if ((stI0) == 0) { gt = 312; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA10);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_layout_Column']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.layout.Column');
var lcA11 = stA0;
var stA0 = lcA11.getComponents__Ljava_util_List_2();
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA12 = stA0;
    }
    X_247: for (;;) { IF: if (gt <= 247) {

var stI0 = invoker.hasNext__Z(lcA12);
if ((stI0) == 0) { gt = 309; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA12);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_layout_ComponentDef']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.layout.ComponentDef');
var lcA13 = stA0;
var stA0 = lcA13;var stA1 = lcA13.getModel__Ljava_lang_String_2();
var stA2 = lcA13.getInstanceId__Ljava_lang_String_2();
var stA1 = invoker.concat__Ljava_lang_String_2Ljava_lang_String_2(stA1,stA2);
stA0.setInstanceName__VLjava_lang_String_2(stA1);
var stA0 = lcA13.getComponent__Ljava_lang_String_2();
var stA1 = lcA13.getInstanceId__Ljava_lang_String_2();
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_Components || (refs_io_cloudoffice_platform_cockpit_api_Components = vm.io_cloudoffice_platform_cockpit_api_Components(false)))['get__Lio_cloudoffice_platform_cockpit_api_Component_2Ljava_lang_String_2Ljava_lang_String_2'](stA0, stA1);
invoker.listen__VLio_cloudoffice_platform_cockpit_api_Signal_2(stA0,lcA3);
{ gt = 0; continue X_247; }
    }
    X_309: for (;;) { IF: if (gt <= 309) {
{ gt = 0; continue X_213; }
    }
    X_312: for (;;) { IF: if (gt <= 312) {
{ gt = 0; continue X_179; }
    }
    X_315: for (;;) { IF: if (gt <= 315) {
{ gt = 392; break IF; }
    }
    X_318: for (;;) { IF: if (gt <= 318) {

var stA0 = lcA7.getComponents__Ljava_util_List_2();
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA8 = stA0;
    }
    X_330: for (;;) { IF: if (gt <= 330) {

var stI0 = invoker.hasNext__Z(lcA8);
if ((stI0) == 0) { gt = 392; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA8);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_layout_ComponentDef']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.layout.ComponentDef');
var lcA9 = stA0;
var stA0 = lcA9;var stA1 = lcA9.getModel__Ljava_lang_String_2();
var stA2 = lcA9.getInstanceId__Ljava_lang_String_2();
var stA1 = invoker.concat__Ljava_lang_String_2Ljava_lang_String_2(stA1,stA2);
stA0.setInstanceName__VLjava_lang_String_2(stA1);
var stA0 = lcA9.getComponent__Ljava_lang_String_2();
var stA1 = lcA9.getInstanceId__Ljava_lang_String_2();
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_Components || (refs_io_cloudoffice_platform_cockpit_api_Components = vm.io_cloudoffice_platform_cockpit_api_Components(false)))['get__Lio_cloudoffice_platform_cockpit_api_Component_2Ljava_lang_String_2Ljava_lang_String_2'](stA0, stA1);
invoker.listen__VLio_cloudoffice_platform_cockpit_api_Signal_2(stA0,lcA3);
{ gt = 0; continue X_330; }
    }
    X_392: for (;;) { IF: if (gt <= 392) {
{ gt = 0; continue X_134; }
    }
    X_395: for (;;) { IF: if (gt <= 395) {
{ gt = 0; continue X_100; }
    }
    X_398: for (;;) { IF: if (gt <= 398) {

var stA0 = null;var stA1 = invoker.getFlags__Ljava_util_Map_2(lcA1);
var stA1 = invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2(stA1,"designMode");
if ((stA0) === (stA1)) { gt = 443; break IF; }
var stA0 = invoker.getFlags__Ljava_util_Map_2(lcA1);
var stA0 = invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2(stA0,"designMode");
var stA0 = (refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false)))['valueOf__Ljava_lang_String_2Ljava_lang_Object_2'](stA0);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Ljava_lang_String_2'](stA0);
var stI0 = invoker.booleanValue__Z(stA0);
if ((stI0) == 0) { gt = 443; break IF; }
invoker.invoke__VLjava_lang_String_2(lcA1,"toggleDesignMode");
    }
    X_443: for (;;) { IF: if (gt <= 443) {

var stA0 = invoker.getDefaultViewName__Ljava_lang_String_2(lcA1);
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['toRaw__Ljava_lang_Object_2Ljava_lang_Object_2'](lcA0);
(refs_io_cloudoffice_platform_cockpit_js_VIEW || (refs_io_cloudoffice_platform_cockpit_js_VIEW = vm.io_cloudoffice_platform_cockpit_js_VIEW(false)))['bind__VLjava_lang_String_2Ljava_lang_Object_2'](stA0, stA1);
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_Event;
(refs_io_cloudoffice_platform_cockpit_api_Event || (refs_io_cloudoffice_platform_cockpit_api_Event = vm.io_cloudoffice_platform_cockpit_api_Event(false))).constructor['cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2'].call(stA0, "indexviewchange", "indexviewchange", lcA2);
var lcA4 = stA0;
invoker.listen__VLio_cloudoffice_platform_cockpit_api_Signal_2((refs_io_cloudoffice_platform_cockpit_api_Components || (refs_io_cloudoffice_platform_cockpit_api_Components = vm.io_cloudoffice_platform_cockpit_api_Components(false)))['_BOOT'](),lcA4);
var stA0 = new io_cloudoffice_platform_cockpit_layout_LayoutComponent$DelayedLoadData;
(refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$DelayedLoadData || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$DelayedLoadData = io_cloudoffice_platform_cockpit_layout_LayoutComponent$DelayedLoadData(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_layout_Layout_2Lio_cloudoffice_platform_cockpit_layout_LayoutComponent_2.call(stA0, lcA0, lcA1);
var lcA5 = stA0;
invoker.delay__VI(lcA5,(2000));
return;

    }
}}}}}}}}}}}}}}}}}
};
c['initLayout__VLio_cloudoffice_platform_cockpit_layout_Layout_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.signalDataLoad__VLio_cloudoffice_platform_cockpit_layout_Layout_2Lio_cloudoffice_platform_cockpit_layout_LayoutComponent_2 = function(lcA0, lcA1) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_Event;
(refs_io_cloudoffice_platform_cockpit_api_Event || (refs_io_cloudoffice_platform_cockpit_api_Event = vm.io_cloudoffice_platform_cockpit_api_Event(false))).constructor['cons__VLjava_lang_String_2'].call(stA0, "loadintialdata");
var lcA2 = stA0;
var stA0 = lcA0.getRows__Ljava_util_List_2();
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA3 = stA0;
    }
    X_21: for (;;) { IF: if (gt <= 21) {

var stI0 = invoker.hasNext__Z(lcA3);
if ((stI0) == 0) { gt = 317; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA3);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_layout_Row']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.layout.Row');
var lcA4 = stA0;
var stA0 = lcA4.getColumns__Ljava_util_List_2();
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA5 = stA0;
    }
    X_53: for (;;) { IF: if (gt <= 53) {

var stI0 = invoker.hasNext__Z(lcA5);
if ((stI0) == 0) { gt = 314; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA5);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_layout_Column']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.layout.Column');
var lcA6 = stA0;
var stI0 = lcA6.isHasLayout__Z();
if ((stI0) == 0) { gt = 237; break IF; }
var stA0 = lcA6.getLayout__Lio_cloudoffice_platform_cockpit_layout_Layout_2();
var stA0 = stA0.getRows__Ljava_util_List_2();
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA7 = stA0;
    }
    X_98: for (;;) { IF: if (gt <= 98) {

var stI0 = invoker.hasNext__Z(lcA7);
if ((stI0) == 0) { gt = 234; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA7);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_layout_Row']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.layout.Row');
var lcA8 = stA0;
var stA0 = lcA8.getColumns__Ljava_util_List_2();
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA9 = stA0;
    }
    X_132: for (;;) { IF: if (gt <= 132) {

var stI0 = invoker.hasNext__Z(lcA9);
if ((stI0) == 0) { gt = 231; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA9);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_layout_Column']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.layout.Column');
var lcA10 = stA0;
var stA0 = lcA10.getComponents__Ljava_util_List_2();
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA11 = stA0;
    }
    X_166: for (;;) { IF: if (gt <= 166) {

var stI0 = invoker.hasNext__Z(lcA11);
if ((stI0) == 0) { gt = 228; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA11);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_layout_ComponentDef']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.layout.ComponentDef');
var lcA12 = stA0;
var stA0 = lcA12;var stA1 = lcA12.getModel__Ljava_lang_String_2();
var stA2 = lcA12.getInstanceId__Ljava_lang_String_2();
var stA1 = invoker.concat__Ljava_lang_String_2Ljava_lang_String_2(stA1,stA2);
stA0.setInstanceName__VLjava_lang_String_2(stA1);
var stA0 = lcA12.getComponent__Ljava_lang_String_2();
var stA1 = lcA12.getInstanceId__Ljava_lang_String_2();
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_Components || (refs_io_cloudoffice_platform_cockpit_api_Components = vm.io_cloudoffice_platform_cockpit_api_Components(false)))['get__Lio_cloudoffice_platform_cockpit_api_Component_2Ljava_lang_String_2Ljava_lang_String_2'](stA0, stA1);
invoker.listen__VLio_cloudoffice_platform_cockpit_api_Signal_2(stA0,lcA2);
{ gt = 0; continue X_166; }
    }
    X_228: for (;;) { IF: if (gt <= 228) {
{ gt = 0; continue X_132; }
    }
    X_231: for (;;) { IF: if (gt <= 231) {
{ gt = 0; continue X_98; }
    }
    X_234: for (;;) { IF: if (gt <= 234) {
{ gt = 311; break IF; }
    }
    X_237: for (;;) { IF: if (gt <= 237) {

var stA0 = lcA6.getComponents__Ljava_util_List_2();
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA7 = stA0;
    }
    X_249: for (;;) { IF: if (gt <= 249) {

var stI0 = invoker.hasNext__Z(lcA7);
if ((stI0) == 0) { gt = 311; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA7);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_layout_ComponentDef']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.layout.ComponentDef');
var lcA8 = stA0;
var stA0 = lcA8;var stA1 = lcA8.getModel__Ljava_lang_String_2();
var stA2 = lcA8.getInstanceId__Ljava_lang_String_2();
var stA1 = invoker.concat__Ljava_lang_String_2Ljava_lang_String_2(stA1,stA2);
stA0.setInstanceName__VLjava_lang_String_2(stA1);
var stA0 = lcA8.getComponent__Ljava_lang_String_2();
var stA1 = lcA8.getInstanceId__Ljava_lang_String_2();
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_Components || (refs_io_cloudoffice_platform_cockpit_api_Components = vm.io_cloudoffice_platform_cockpit_api_Components(false)))['get__Lio_cloudoffice_platform_cockpit_api_Component_2Ljava_lang_String_2Ljava_lang_String_2'](stA0, stA1);
invoker.listen__VLio_cloudoffice_platform_cockpit_api_Signal_2(stA0,lcA2);
{ gt = 0; continue X_249; }
    }
    X_311: for (;;) { IF: if (gt <= 311) {
{ gt = 0; continue X_53; }
    }
    X_314: for (;;) { IF: if (gt <= 314) {
{ gt = 0; continue X_21; }
    }
    X_317: for (;;) { IF: if (gt <= 317) {
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_Event;
(refs_io_cloudoffice_platform_cockpit_api_Event || (refs_io_cloudoffice_platform_cockpit_api_Event = vm.io_cloudoffice_platform_cockpit_api_Event(false))).constructor['cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2'].call(stA0, "wsconnect", "wsconnect", null);
var lcA3 = stA0;
invoker.listen__VLio_cloudoffice_platform_cockpit_api_Signal_2((refs_io_cloudoffice_platform_cockpit_api_Components || (refs_io_cloudoffice_platform_cockpit_api_Components = vm.io_cloudoffice_platform_cockpit_api_Components(false)))['_BOOT'](),lcA3);
return;

    }
}}}}}}}}}}}}}}
};
    m.access = 10;
    m.cls = CLS;
    m = c.errorHandler__VLio_cloudoffice_platform_cockpit_layout_Layout_2Ljava_lang_Exception_2 = function(lcA0, lcA1) {
(refs_io_cloudoffice_platform_cockpit_api_Application || (refs_io_cloudoffice_platform_cockpit_api_Application = vm.io_cloudoffice_platform_cockpit_api_Application(false)))['notifyError__VLjava_lang_Exception_2Lio_cloudoffice_platform_cockpit_api_Source_2'](lcA1, null);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.getLayout__VLio_cloudoffice_platform_cockpit_api_MapBuilder_2 = function(lcA0) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['_CONFIG']();var stA1 = "layout";var stA2 = (refs_io_cloudoffice_platform_cockpit_js_JSUIUtils || (refs_io_cloudoffice_platform_cockpit_js_JSUIUtils = vm.io_cloudoffice_platform_cockpit_js_JSUIUtils(false)))['getLayout__Ljava_lang_String_2']();
var stA1 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['configFetchEndpoint__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2'](stA1, stA2);
var stA2 = null;var stA3 = new io_cloudoffice_platform_cockpit_layout_LayoutComponent$17;
(refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$17 || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$17 = io_cloudoffice_platform_cockpit_layout_LayoutComponent$17(false))).constructor.cons__V.call(stA3);
invoker.fetch__VLjava_lang_String_2Ljava_util_Map_2Lio_cloudoffice_platform_cockpit_api_CallBack_2(stA0,stA1, stA2, stA3);
return;

};
c['getLayout__VLio_cloudoffice_platform_cockpit_api_MapBuilder_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.getNextRowId__ILio_cloudoffice_platform_cockpit_layout_Layout_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var lcI1 = 0;
var stA0 = lcA0.getRows__Ljava_util_List_2();
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA2 = stA0;
    }
    X_12: for (;;) { IF: if (gt <= 12) {

var stI0 = invoker.hasNext__Z(lcA2);
if ((stI0) == 0) { gt = 59; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA2);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_layout_Row']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.layout.Row');
var lcA3 = stA0;
var stA0 = lcA3.getId__Ljava_lang_String_2();
var stA0 = invoker.split___3Ljava_lang_String_2Ljava_lang_String_2(stA0,"row");
var lcA4 = stA0;
var stA0 = invoker.trim__Ljava_lang_String_2((lcA4[1] || Array.at(lcA4, 1)));
var stA0 = (refs_java_lang_Integer || (refs_java_lang_Integer = vm.java_lang_Integer(false)))['valueOf__Ljava_lang_Integer_2Ljava_lang_String_2'](stA0);
var stI0 = invoker.intValue__I(stA0);
var lcI1 = stI0;
{ gt = 0; continue X_12; }
    }
    X_59: for (;;) { IF: if (gt <= 59) {

return (((lcI1) + (1)) | 0);

    }
}}}
};
    m.access = 8;
    m.cls = CLS;
    m = c.addNewRowToTheLayoutJSON__VLio_cloudoffice_platform_cockpit_api_MapBuilder_2 = function(lcA0) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['_CONFIG']();var stA1 = "layout";var stA2 = (refs_io_cloudoffice_platform_cockpit_js_JSUIUtils || (refs_io_cloudoffice_platform_cockpit_js_JSUIUtils = vm.io_cloudoffice_platform_cockpit_js_JSUIUtils(false)))['getLayout__Ljava_lang_String_2']();
var stA1 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['configFetchEndpoint__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2'](stA1, stA2);
var stA2 = null;var stA3 = new io_cloudoffice_platform_cockpit_layout_LayoutComponent$18;
(refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$18 || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$18 = io_cloudoffice_platform_cockpit_layout_LayoutComponent$18(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_api_MapBuilder_2.call(stA3, lcA0);
invoker.fetch__VLjava_lang_String_2Ljava_util_Map_2Lio_cloudoffice_platform_cockpit_api_CallBack_2(stA0,stA1, stA2, stA3);
return;

};
c['addNewRowToTheLayoutJSON__VLio_cloudoffice_platform_cockpit_api_MapBuilder_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.insertRow__VLio_cloudoffice_platform_cockpit_layout_Layout_2Ljava_lang_String_2 = function(lcA0, lcA1) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['query__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2'](lcA1);
var lcA2 = stA0;
var stA0 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA2,"rowid");
var lcA3 = stA0;
var stA0 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA2,"rowname");
var lcA4 = stA0;
var stA0 = new io_cloudoffice_platform_cockpit_layout_Row;
(refs_io_cloudoffice_platform_cockpit_layout_Row || (refs_io_cloudoffice_platform_cockpit_layout_Row = io_cloudoffice_platform_cockpit_layout_Row(false))).constructor.cons__V.call(stA0);
var lcA5 = stA0;
lcA5.setId__VLjava_lang_String_2(lcA3);
lcA5.setName__VLjava_lang_String_2(lcA4);
var stA0 = lcA0.getRows__Ljava_util_List_2();
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,lcA5);
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['_CONFIG']();var stA1 = lcA0.getId__Ljava_lang_String_2();
var stA1 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['layoutStylePostEndpoint__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2'](stA1, "layout", lcA3, "row", "insert");
var stA2 = lcA0.toString__Ljava_lang_String_2();
var stA3 = new io_cloudoffice_platform_cockpit_layout_LayoutComponent$19;
(refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$19 || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$19 = io_cloudoffice_platform_cockpit_layout_LayoutComponent$19(false))).constructor.cons__V.call(stA3);
invoker.post__VLjava_lang_String_2Ljava_lang_String_2Lio_cloudoffice_platform_cockpit_api_CallBack_2(stA0,stA1, stA2, stA3);
return;

};
c['insertRow__VLio_cloudoffice_platform_cockpit_layout_Layout_2Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.updateLayoutFromJSON__V = function() {
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['_CONFIG']();var stA1 = "layout";var stA2 = (refs_io_cloudoffice_platform_cockpit_js_JSUIUtils || (refs_io_cloudoffice_platform_cockpit_js_JSUIUtils = vm.io_cloudoffice_platform_cockpit_js_JSUIUtils(false)))['getLayout__Ljava_lang_String_2']();
var stA1 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['configFetchEndpoint__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2'](stA1, stA2);
var stA2 = null;var stA3 = new io_cloudoffice_platform_cockpit_layout_LayoutComponent$20;
(refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$20 || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$20 = io_cloudoffice_platform_cockpit_layout_LayoutComponent$20(false))).constructor.cons__V.call(stA3);
invoker.fetch__VLjava_lang_String_2Ljava_util_Map_2Lio_cloudoffice_platform_cockpit_api_CallBack_2(stA0,stA1, stA2, stA3);
return;

};
c['updateLayoutFromJSON__V'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.updateName__VLio_cloudoffice_platform_cockpit_layout_Layout_2 = function(lcA0) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['_CONFIG']();var stA1 = lcA0.getId__Ljava_lang_String_2();
var stA1 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['layoutConfigPostEndpoint__Ljava_lang_String_2Ljava_lang_String_2'](stA1);
var stA2 = lcA0.toString__Ljava_lang_String_2();
var stA3 = new io_cloudoffice_platform_cockpit_layout_LayoutComponent$21;
(refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$21 || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$21 = io_cloudoffice_platform_cockpit_layout_LayoutComponent$21(false))).constructor.cons__V.call(stA3);
invoker.post__VLjava_lang_String_2Ljava_lang_String_2Lio_cloudoffice_platform_cockpit_api_CallBack_2(stA0,stA1, stA2, stA3);
return;

};
c['updateName__VLio_cloudoffice_platform_cockpit_layout_Layout_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.access$300__Ljava_util_List_2Ljava_lang_String_2 = function(lcA0) {
var stA0 = c.getVariablesAsPorp__Ljava_util_List_2Ljava_lang_String_2(lcA0);
return stA0;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$400__VLio_cloudoffice_platform_cockpit_layout_Layout_2Lio_cloudoffice_platform_cockpit_layout_LayoutComponent_2 = function(lcA0, lcA1) {
c.signalDataLoad__VLio_cloudoffice_platform_cockpit_layout_Layout_2Lio_cloudoffice_platform_cockpit_layout_LayoutComponent_2(lcA0, lcA1);
return;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new io_cloudoffice_platform_cockpit_layout_LayoutComponent;
c.constructor.cons__V.call(stA0);
c._defaultInstance(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_layout_LayoutComponentfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_layout_LayoutComponent', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_layout_LayoutComponentfillInstOf });
    io_cloudoffice_platform_cockpit_layout_LayoutComponentfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/layout/LayoutComponent';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 33;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_io_cloudoffice_platform_cockpit_api_AbstractComponent;
    var refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$LoadLayout;
    var refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$DesignerModeListener;
    var refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$InvokeFunctionListener;
    var refs_java_lang_UnsupportedOperationException;
    var refs_io_cloudoffice_platform_cockpit_layout_Layout;
    var refs_io_cloudoffice_platform_cockpit_api_WebDB$IndexTableManager;
    var refs_io_cloudoffice_platform_cockpit_layout_Path;
    var refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration;
    var refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$1;
    var refs_io_cloudoffice_platform_cockpit_api_UtilValidate;
    var refs_java_lang_StringBuilder;
    var refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$2;
    var refs_io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor;
    var refs_io_cloudoffice_platform_cockpit_layout_Domain;
    var refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$3;
    var refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$4;
    var refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$5;
    var refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$6;
    var refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$7;
    var refs_io_cloudoffice_platform_cockpit_api_MapBuilder;
    var refs_io_cloudoffice_platform_cockpit_api_Components;
    var refs_io_cloudoffice_platform_cockpit_api_Event;
    var refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$8;
    var refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$9;
    var refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$10;
    var refs_io_cloudoffice_platform_cockpit_layout_Column;
    var refs_io_cloudoffice_platform_cockpit_layout_ComponentDef;
    var refs_io_cloudoffice_platform_cockpit_js_VIEW;
    var refs_java_util_Arrays;
    var refs_java_lang_String;
    var refs_java_lang_Boolean;
    var refs_io_cloudoffice_platform_cockpit_api_Logger;
    var refs_java_lang_Integer;
    var refs_io_cloudoffice_platform_cockpit_js_JSUIUtils;
    var refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$11;
    var refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$12;
    var refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$13;
    var refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$14;
    var refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$15;
    var refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$16;
    var refs_java_util_regex_Pattern;
    var refs_java_util_ArrayList;
    var refs_io_cloudoffice_platform_cockpit_layout_Prop;
    var refs_io_cloudoffice_platform_cockpit_api_Session;
    var refs_net_java_html_json_Models;
    var refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$DelayedLoadData;
    var refs_io_cloudoffice_platform_cockpit_api_Application;
    var refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$17;
    var refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$18;
    var refs_io_cloudoffice_platform_cockpit_layout_Row;
    var refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$19;
    var refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$20;
    var refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$21;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_layout_LayoutComponent = registerClass(exports,'io_cloudoffice_platform_cockpit_layout_LayoutComponent',io_cloudoffice_platform_cockpit_layout_LayoutComponent);


function io_cloudoffice_platform_cockpit_layout_LayoutComponent$21() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_layout_LayoutComponent$21;
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
    m.access = 0;
    m.cls = CLS;
    m = c.handle__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;
(refs_io_cloudoffice_platform_cockpit_api_Logger || (refs_io_cloudoffice_platform_cockpit_api_Logger = vm.io_cloudoffice_platform_cockpit_api_Logger(false)))['log__VLjava_lang_String_2'](">>> Layout name updated.");
return;

};
c['handle__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_layout_LayoutComponent$21fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_layout_LayoutComponent$21', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_CallBack(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_layout_LayoutComponent$21fillInstOf });
    io_cloudoffice_platform_cockpit_layout_LayoutComponent$21fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/layout/LayoutComponent$21';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_CallBack(false).constructor.$class
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
    var refs_java_lang_Object;
    var refs_io_cloudoffice_platform_cockpit_api_Logger;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_layout_LayoutComponent$21 = io_cloudoffice_platform_cockpit_layout_LayoutComponent$21;


function io_cloudoffice_platform_cockpit_layout_LayoutComponent$20() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_layout_LayoutComponent$20;
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
    m.access = 0;
    m.cls = CLS;
    m = c.handle__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;
(refs_io_cloudoffice_platform_cockpit_api_Logger || (refs_io_cloudoffice_platform_cockpit_api_Logger = vm.io_cloudoffice_platform_cockpit_api_Logger(false)))['log__VLjava_lang_String_2'](">>> Successfully fetch layout details from json.");
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_Event;
(refs_io_cloudoffice_platform_cockpit_api_Event || (refs_io_cloudoffice_platform_cockpit_api_Event = vm.io_cloudoffice_platform_cockpit_api_Event(false))).constructor['cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2'].call(stA0, "updaterenderedlayout", "invokefunction", lcA1);
var lcA2 = stA0;
var stA0 = (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent = io_cloudoffice_platform_cockpit_layout_LayoutComponent(false))).getDefaultInstance__Lio_cloudoffice_platform_cockpit_api_Component_2();
invoker.listen__VLio_cloudoffice_platform_cockpit_api_Signal_2(stA0,lcA2);
return;

};
c['handle__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_layout_LayoutComponent$20fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_layout_LayoutComponent$20', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_CallBack(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_layout_LayoutComponent$20fillInstOf });
    io_cloudoffice_platform_cockpit_layout_LayoutComponent$20fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/layout/LayoutComponent$20';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_CallBack(false).constructor.$class
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
    var refs_java_lang_Object;
    var refs_io_cloudoffice_platform_cockpit_api_Logger;
    var refs_io_cloudoffice_platform_cockpit_api_Event;
    var refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_layout_LayoutComponent$20 = io_cloudoffice_platform_cockpit_layout_LayoutComponent$20;


function io_cloudoffice_platform_cockpit_layout_LayoutComponent$19() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_layout_LayoutComponent$19;
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
    m.access = 0;
    m.cls = CLS;
    m = c.handle__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;
(refs_io_cloudoffice_platform_cockpit_api_Logger || (refs_io_cloudoffice_platform_cockpit_api_Logger = vm.io_cloudoffice_platform_cockpit_api_Logger(false)))['log__VLjava_lang_String_2'](">>> New row created.");
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_Event;
(refs_io_cloudoffice_platform_cockpit_api_Event || (refs_io_cloudoffice_platform_cockpit_api_Event = vm.io_cloudoffice_platform_cockpit_api_Event(false))).constructor['cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2'].call(stA0, "invokefunction", "invokefunction", "updatelayout");
var lcA2 = stA0;
var stA0 = (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent = io_cloudoffice_platform_cockpit_layout_LayoutComponent(false))).getDefaultInstance__Lio_cloudoffice_platform_cockpit_api_Component_2();
invoker.listen__VLio_cloudoffice_platform_cockpit_api_Signal_2(stA0,lcA2);
return;

};
c['handle__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_layout_LayoutComponent$19fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_layout_LayoutComponent$19', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_CallBack(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_layout_LayoutComponent$19fillInstOf });
    io_cloudoffice_platform_cockpit_layout_LayoutComponent$19fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/layout/LayoutComponent$19';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_CallBack(false).constructor.$class
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
    var refs_java_lang_Object;
    var refs_io_cloudoffice_platform_cockpit_api_Logger;
    var refs_io_cloudoffice_platform_cockpit_api_Event;
    var refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_layout_LayoutComponent$19 = io_cloudoffice_platform_cockpit_layout_LayoutComponent$19;


function io_cloudoffice_platform_cockpit_layout_Row() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_layout_Row;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_TYPE'] = null;
  m = c._TYPE = function (v) {  if (arguments.length == 1) CLS['fld_TYPE'] = v; return CLS['fld_TYPE']; };
  m = c._proto = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_layout_Row_proto'] = v; return this['fld_io_cloudoffice_platform_cockpit_layout_Row_proto']; };
  m = c._prop_id = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_layout_Row_prop_id'] = v; return this['fld_io_cloudoffice_platform_cockpit_layout_Row_prop_id']; };
  m = c._prop_name = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_layout_Row_prop_name'] = v; return this['fld_io_cloudoffice_platform_cockpit_layout_Row_prop_name']; };
  m = c._prop_columns = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_layout_Row_prop_columns'] = v; return this['fld_io_cloudoffice_platform_cockpit_layout_Row_prop_columns']; };
  m = c._prop_editable = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_layout_Row_prop_editable'] = v; return this['fld_io_cloudoffice_platform_cockpit_layout_Row_prop_editable']; };
  m = c._prop_inputfieldvalue = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_layout_Row_prop_inputfieldvalue'] = v; return this['fld_io_cloudoffice_platform_cockpit_layout_Row_prop_inputfieldvalue']; };
    m = c.modelFor__Ljava_lang_Class_2 = function() {
return (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent = io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent(false))).constructor.$class;

};
    m.access = 10;
    m.cls = CLS;
    m = c.getId__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Row_proto'],"id");
return lcA0['fld_io_cloudoffice_platform_cockpit_layout_Row_prop_id'];

};
c['getId__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setId__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Row_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_Row_prop_id'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_layout_Row_prop_id'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Row_proto'],"id", lcA2, lcA1);
return;

    }
}}
};
c['setId__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getName__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Row_proto'],"name");
return lcA0['fld_io_cloudoffice_platform_cockpit_layout_Row_prop_name'];

};
c['getName__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setName__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Row_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_Row_prop_name'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_layout_Row_prop_name'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Row_proto'],"name", lcA2, lcA1);
return;

    }
}}
};
c['setName__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getColumns__Ljava_util_List_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Row_proto'],"columns");
return lcA0['fld_io_cloudoffice_platform_cockpit_layout_Row_prop_columns'];

};
c['getColumns__Ljava_util_List_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isEditable__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Row_proto'],"editable");
return lcA0['fld_io_cloudoffice_platform_cockpit_layout_Row_prop_editable'];

};
c['isEditable__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setEditable__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Row_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_layout_Row_prop_editable']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_layout_Row_prop_editable'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_Row_proto'];var stA1 = "editable";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2, stA3);
return;

    }
}}
};
c['setEditable__VZ'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getInputfieldvalue__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Row_proto'],"inputfieldvalue");
return lcA0['fld_io_cloudoffice_platform_cockpit_layout_Row_prop_inputfieldvalue'];

};
c['getInputfieldvalue__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setInputfieldvalue__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Row_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_Row_prop_inputfieldvalue'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_layout_Row_prop_inputfieldvalue'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Row_proto'],"inputfieldvalue", lcA2, lcA1);
return;

    }
}}
};
c['setInputfieldvalue__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;
(refs_java_lang_Object || (refs_java_lang_Object = vm.java_lang_Object(false))).constructor['cons__V'].call(lcA0);
var stA0 = lcA0;var stA1 = invoker.createProto__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2(c._TYPE(),lcA0, lcA1);
stA0['fld_io_cloudoffice_platform_cockpit_layout_Row_proto'] = stA1;
var stA0 = lcA0;var stA1 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_Row_proto'];var stA2 = "columns";var stI3 = -1;var stA4 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, 0);
var stA1 = invoker.createList__Ljava_util_List_2Ljava_lang_String_2I_3Ljava_lang_String_2(stA1,stA2, stI3, stA4);
stA0['fld_io_cloudoffice_platform_cockpit_layout_Row_prop_columns'] = stA1;
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
    m = CLS.cons__VLjava_lang_String_2Ljava_lang_String_2ZLjava_lang_String_2_3Lio_cloudoffice_platform_cockpit_layout_Column_2 = function(lcA1, lcA2, lcI3, lcA4, lcA5) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = (refs_net_java_html_BrwsrCtx || (refs_net_java_html_BrwsrCtx = vm.net_java_html_BrwsrCtx(false)))['findDefault__Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'](c.constructor.$class);
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, stA1);
lcA0['fld_io_cloudoffice_platform_cockpit_layout_Row_prop_id'] = lcA1;
lcA0['fld_io_cloudoffice_platform_cockpit_layout_Row_prop_name'] = lcA2;
lcA0['fld_io_cloudoffice_platform_cockpit_layout_Row_prop_editable'] = lcI3;
lcA0['fld_io_cloudoffice_platform_cockpit_layout_Row_prop_inputfieldvalue'] = lcA4;
invoker.initTo__VLjava_util_Collection_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Row_proto'],lcA0['fld_io_cloudoffice_platform_cockpit_layout_Row_prop_columns'], lcA5);
return;

};
CLS['cons__VLjava_lang_String_2Ljava_lang_String_2ZLjava_lang_String_2_3Lio_cloudoffice_platform_cockpit_layout_Column_2'] = m;

    m.access = 129;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 5);
var lcA3 = stA0;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_Row_proto'];var stA1 = lcA2;var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, 5);
Array.at(stA2, 0, "id");
Array.at(stA2, 1, "name");
Array.at(stA2, 2, "columns");
Array.at(stA2, 3, "editable");
Array.at(stA2, 4, "inputfieldvalue");
invoker.extract__VLjava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Object_2(stA0,stA1, stA2, lcA3);
if ((lcA3[0] || Array.at(lcA3, 0)) !== null && !(lcA3[0] || Array.at(lcA3, 0))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[0] || Array.at(lcA3, 0)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_layout_Row_prop_id'] = (lcA3[0] || Array.at(lcA3, 0));
if ((lcA3[1] || Array.at(lcA3, 1)) !== null && !(lcA3[1] || Array.at(lcA3, 1))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[1] || Array.at(lcA3, 1)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_layout_Row_prop_name'] = (lcA3[1] || Array.at(lcA3, 1));
var stA0 = c.useAsArray___3Ljava_lang_Object_2Ljava_lang_Object_2((lcA3[2] || Array.at(lcA3, 2)));
var lcA4 = stA0;
var lcI5 = (lcA4).length;
var lcI6 = 0;
    }
    X_84: for (;;) { IF: if (gt <= 84) {

if ((lcI6) >= (lcI5)) { gt = 125; break IF; }
var lcA7 = (lcA4[lcI6] || Array.at(lcA4, lcI6));
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_Row_prop_columns'];var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Row_proto'],(refs_io_cloudoffice_platform_cockpit_layout_Column || (refs_io_cloudoffice_platform_cockpit_layout_Column = io_cloudoffice_platform_cockpit_layout_Column(false))).constructor.$class, lcA7);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,stA1);
lcI6++;
{ gt = 0; continue X_84; }
    }
    X_125: for (;;) { IF: if (gt <= 125) {

var stA0 = lcA0;if (((lcA3[3] || Array.at(lcA3, 3))) !== null) { gt = 136; break IF; }
var stI1 = 0;{ gt = 148; break IF; }
    }
    X_136: for (;;) { IF: if (gt <= 136) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[3] || Array.at(lcA3, 3)));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_148: for (;;) { IF: if (gt <= 148) {
stA0['fld_io_cloudoffice_platform_cockpit_layout_Row_prop_editable'] = stI1;
if ((lcA3[4] || Array.at(lcA3, 4)) !== null && !(lcA3[4] || Array.at(lcA3, 4))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[4] || Array.at(lcA3, 4)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_layout_Row_prop_inputfieldvalue'] = (lcA3[4] || Array.at(lcA3, 4));
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
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"id");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getId__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"name");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getName__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"columns");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_layout_Row_prop_columns']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"editable");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stI2 = lcA0.isEditable__Z();
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI2);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"inputfieldvalue");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getInputfieldvalue__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(125));
var stA0 = invoker.toString__Ljava_lang_String_2(lcA1);
return stA0;

};
c['toString__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Lio_cloudoffice_platform_cockpit_layout_Row_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Row_proto']);
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_layout_Row_2Lnet_java_html_BrwsrCtx_2.call(stA0, stA1);
return stA0;

};
c['clone__Lio_cloudoffice_platform_cockpit_layout_Row_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Lio_cloudoffice_platform_cockpit_layout_Row_2Lnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = new io_cloudoffice_platform_cockpit_layout_Row;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, lcA1);
var lcA2 = stA0;
var stA0 = lcA2;var stA1 = lcA0.getId__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_layout_Row_prop_id'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getName__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_layout_Row_prop_name'] = stA1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_Row_proto'];var stA1 = lcA2.getColumns__Ljava_util_List_2();
invoker.cloneList__VLjava_util_Collection_2Lnet_java_html_BrwsrCtx_2Ljava_util_Collection_2(stA0,stA1, lcA1, lcA0['fld_io_cloudoffice_platform_cockpit_layout_Row_prop_columns']);
var stA0 = lcA2;var stI1 = lcA0.isEditable__Z();
stA0['fld_io_cloudoffice_platform_cockpit_layout_Row_prop_editable'] = stI1;
var stA0 = lcA2;var stA1 = lcA0.getInputfieldvalue__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_layout_Row_prop_inputfieldvalue'] = stA1;
return lcA2;

};
    m.access = 2;
    m.cls = CLS;
    m = c.applyBindings__Lio_cloudoffice_platform_cockpit_layout_Row_2 = function() {
  var  lcA0 = this;
invoker.applyBindings__V(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Row_proto']);
return lcA0;

};
c['applyBindings__Lio_cloudoffice_platform_cockpit_layout_Row_2'] = m;

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

var stI0 = lcA1 != null && lcA1['$instOf_io_cloudoffice_platform_cockpit_layout_Row'] ? 1 : 0;
if ((stI0) != 0) { gt = 16; break IF; }
return 0;
    }
    X_16: for (;;) { IF: if (gt <= 16) {

if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_layout_Row']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.layout.Row');
var lcA2 = lcA1;
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_layout_Row_prop_id'], lcA2['fld_io_cloudoffice_platform_cockpit_layout_Row_prop_id']);
if ((stI0) != 0) { gt = 40; break IF; }
return 0;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_layout_Row_prop_name'], lcA2['fld_io_cloudoffice_platform_cockpit_layout_Row_prop_name']);
if ((stI0) != 0) { gt = 59; break IF; }
return 0;
    }
    X_59: for (;;) { IF: if (gt <= 59) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_layout_Row_prop_columns']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_layout_Row_prop_columns']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 86; break IF; }
return 0;
    }
    X_86: for (;;) { IF: if (gt <= 86) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_layout_Row_prop_editable']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_layout_Row_prop_editable']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 111; break IF; }
return 0;
    }
    X_111: for (;;) { IF: if (gt <= 111) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_layout_Row_prop_inputfieldvalue'], lcA2['fld_io_cloudoffice_platform_cockpit_layout_Row_prop_inputfieldvalue']);
if ((stI0) != 0) { gt = 130; break IF; }
return 0;
    }
    X_130: for (;;) { IF: if (gt <= 130) {

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
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_layout_Row_prop_id'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_layout_Row_prop_name'], lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_layout_Row_prop_columns']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_layout_Row_prop_editable']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_layout_Row_prop_inputfieldvalue'], lcI1);
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
var stA0 = lcA0.clone__Lio_cloudoffice_platform_cockpit_layout_Row_2();
return stA0;

};
c['clone__Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.access$100__Lio_cloudoffice_platform_cockpit_layout_Row$Html4JavaType_2 = function() {
return c._TYPE();

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_layout_Row_2 = function(lcA0) {
return lcA0['fld_io_cloudoffice_platform_cockpit_layout_Row_proto'];

};
    m.access = 4104;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_layout_Row$1_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2.call(lcA0, lcA1, lcA2);
return;

};
    m.access = 4096;
    m.cls = CLS;
    m = c.access$400__Lio_cloudoffice_platform_cockpit_layout_Row_2Lio_cloudoffice_platform_cockpit_layout_Row_2Lnet_java_html_BrwsrCtx_2 = function(lcA0, lcA1) {
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_layout_Row_2Lnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
return stA0;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new io_cloudoffice_platform_cockpit_layout_Row$Html4JavaType;
(refs_io_cloudoffice_platform_cockpit_layout_Row$Html4JavaType || (refs_io_cloudoffice_platform_cockpit_layout_Row$Html4JavaType = io_cloudoffice_platform_cockpit_layout_Row$Html4JavaType(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_layout_Row$1_2.call(stA0, null);
c._TYPE(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_layout_RowfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_layout_Row', { value : true });
      vm.java_lang_Cloneable(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_layout_RowfillInstOf });
    io_cloudoffice_platform_cockpit_layout_RowfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/layout/Row';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.java_lang_Cloneable(false).constructor.$class
    ]; };
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent;
    var refs_java_lang_Boolean;
    var refs_java_lang_Object;
    var refs_net_java_html_BrwsrCtx;
    var refs_io_cloudoffice_platform_cockpit_layout_Column;
    var refs_java_lang_StringBuilder;
    var refs_io_cloudoffice_platform_cockpit_layout_Row$Html4JavaType;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_layout_Row_proto'] = null;
    this['fld_io_cloudoffice_platform_cockpit_layout_Row_prop_id'] = null;
    this['fld_io_cloudoffice_platform_cockpit_layout_Row_prop_name'] = null;
    this['fld_io_cloudoffice_platform_cockpit_layout_Row_prop_columns'] = null;
    this['fld_io_cloudoffice_platform_cockpit_layout_Row_prop_editable'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_layout_Row_prop_inputfieldvalue'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_layout_Row = registerClass(exports,'io_cloudoffice_platform_cockpit_layout_Row',io_cloudoffice_platform_cockpit_layout_Row);


function io_cloudoffice_platform_cockpit_layout_Row$Html4JavaType() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_layout_Row$Html4JavaType;
  if (!CLS.$class) {
    var pp = vm.org_netbeans_html_json_spi_Proto$Type(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_org_netbeans_html_json_spi_Proto$Type || (refs_org_netbeans_html_json_spi_Proto$Type = vm.org_netbeans_html_json_spi_Proto$Type(false))).constructor['cons__VLjava_lang_Class_2Ljava_lang_Class_2II'].call(lcA0, (refs_io_cloudoffice_platform_cockpit_layout_Row || (refs_io_cloudoffice_platform_cockpit_layout_Row = io_cloudoffice_platform_cockpit_layout_Row(false))).constructor.$class, (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent = io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent(false))).constructor.$class, 5, (6));
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"id", 0, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"name", 1, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"columns", 2, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"editable", 3, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"inputfieldvalue", 4, 0, 0);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"enableRowEdit", 0);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"disableRowEdit", 1);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"updateRowName", 2);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"showSassVariables", 3);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"deleteRow", 4);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"createColumn", 5);
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.setValue__VLio_cloudoffice_platform_cockpit_layout_Row_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0:{ gt = 36; break IF; }
  case 1:{ gt = 53; break IF; }
  case 2:{ gt = 70; break IF; }
  case 3:{ gt = 84; break IF; }
  case 4:{ gt = 104; break IF; }
  default: { gt = 121; break IF; }
}
    }
    X_36: for (;;) { IF: if (gt <= 36) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_layout_Row || (refs_io_cloudoffice_platform_cockpit_layout_Row = io_cloudoffice_platform_cockpit_layout_Row(false))).access$100__Lio_cloudoffice_platform_cockpit_layout_Row$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setId__VLjava_lang_String_2(stA1);
return;
    }
    X_53: for (;;) { IF: if (gt <= 53) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_layout_Row || (refs_io_cloudoffice_platform_cockpit_layout_Row = io_cloudoffice_platform_cockpit_layout_Row(false))).access$100__Lio_cloudoffice_platform_cockpit_layout_Row$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setName__VLjava_lang_String_2(stA1);
return;
    }
    X_70: for (;;) { IF: if (gt <= 70) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_layout_Row || (refs_io_cloudoffice_platform_cockpit_layout_Row = io_cloudoffice_platform_cockpit_layout_Row(false))).access$100__Lio_cloudoffice_platform_cockpit_layout_Row$Html4JavaType_2();
var stA1 = lcA1.getColumns__Ljava_util_List_2();
invoker.replaceValue__VLjava_util_Collection_2Ljava_lang_Class_2Ljava_lang_Object_2(stA0,stA1, (refs_io_cloudoffice_platform_cockpit_layout_Column || (refs_io_cloudoffice_platform_cockpit_layout_Column = io_cloudoffice_platform_cockpit_layout_Column(false))).constructor.$class, lcA3);
return;
    }
    X_84: for (;;) { IF: if (gt <= 84) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_layout_Row || (refs_io_cloudoffice_platform_cockpit_layout_Row = io_cloudoffice_platform_cockpit_layout_Row(false))).access$100__Lio_cloudoffice_platform_cockpit_layout_Row$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setEditable__VZ(stI1);
return;
    }
    X_104: for (;;) { IF: if (gt <= 104) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_layout_Row || (refs_io_cloudoffice_platform_cockpit_layout_Row = io_cloudoffice_platform_cockpit_layout_Row(false))).access$100__Lio_cloudoffice_platform_cockpit_layout_Row$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setInputfieldvalue__VLjava_lang_String_2(stA1);
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
    m = c.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_layout_Row_2I = function(lcA1, lcI2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0:{ gt = 36; break IF; }
  case 1:{ gt = 41; break IF; }
  case 2:{ gt = 46; break IF; }
  case 3:{ gt = 51; break IF; }
  case 4:{ gt = 59; break IF; }
  default: { gt = 64; break IF; }
}
    }
    X_36: for (;;) { IF: if (gt <= 36) {

var stA0 = lcA1.getId__Ljava_lang_String_2();
return stA0;
    }
    X_41: for (;;) { IF: if (gt <= 41) {

var stA0 = lcA1.getName__Ljava_lang_String_2();
return stA0;
    }
    X_46: for (;;) { IF: if (gt <= 46) {

var stA0 = lcA1.getColumns__Ljava_util_List_2();
return stA0;
    }
    X_51: for (;;) { IF: if (gt <= 51) {

var stI0 = lcA1.isEditable__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_59: for (;;) { IF: if (gt <= 59) {

var stA0 = lcA1.getInputfieldvalue__Ljava_lang_String_2();
return stA0;
    }
    X_64: for (;;) { IF: if (gt <= 64) {
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

    }
}}}}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.call__VLio_cloudoffice_platform_cockpit_layout_Row_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
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

(refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent = io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent(false))).enableRowEdit__VLio_cloudoffice_platform_cockpit_layout_Row_2(lcA1);
return;
    }
    X_45: for (;;) { IF: if (gt <= 45) {

(refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent = io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent(false))).disableRowEdit__VLio_cloudoffice_platform_cockpit_layout_Row_2(lcA1);
return;
    }
    X_50: for (;;) { IF: if (gt <= 50) {

(refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent = io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent(false))).updateRowName__VLio_cloudoffice_platform_cockpit_layout_Row_2(lcA1);
return;
    }
    X_55: for (;;) { IF: if (gt <= 55) {

(refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent = io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent(false))).showSassVariables__VLio_cloudoffice_platform_cockpit_layout_Row_2(lcA1);
return;
    }
    X_60: for (;;) { IF: if (gt <= 60) {

(refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent = io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent(false))).deleteRow__VLio_cloudoffice_platform_cockpit_layout_Row_2(lcA1);
return;
    }
    X_65: for (;;) { IF: if (gt <= 65) {

(refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent = io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent(false))).createColumn__VLio_cloudoffice_platform_cockpit_layout_Row_2(lcA1);
return;
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
    m = c.protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_layout_Row']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.layout.Row');
var stA0 = (refs_io_cloudoffice_platform_cockpit_layout_Row || (refs_io_cloudoffice_platform_cockpit_layout_Row = io_cloudoffice_platform_cockpit_layout_Row(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_layout_Row_2(lcA1);
return stA0;

};
c['protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.onChange__VLio_cloudoffice_platform_cockpit_layout_Row_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLio_cloudoffice_platform_cockpit_layout_Row_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
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
    m = c.read__Lio_cloudoffice_platform_cockpit_layout_Row_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = new io_cloudoffice_platform_cockpit_layout_Row;
(refs_io_cloudoffice_platform_cockpit_layout_Row || (refs_io_cloudoffice_platform_cockpit_layout_Row = io_cloudoffice_platform_cockpit_layout_Row(false))).constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_layout_Row$1_2.call(stA0, lcA1, lcA2, null);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.cloneTo__Lio_cloudoffice_platform_cockpit_layout_Row_2Lio_cloudoffice_platform_cockpit_layout_Row_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = (refs_io_cloudoffice_platform_cockpit_layout_Row || (refs_io_cloudoffice_platform_cockpit_layout_Row = io_cloudoffice_platform_cockpit_layout_Row(false))).access$400__Lio_cloudoffice_platform_cockpit_layout_Row_2Lio_cloudoffice_platform_cockpit_layout_Row_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_layout_Row']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.layout.Row');
lcA0.onMessage__VLio_cloudoffice_platform_cockpit_layout_Row_2IILjava_lang_Object_2_3Ljava_lang_Object_2(lcA1, lcI2, lcI3, lcA4, lcA5);
return;

};
c['onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.onChange__VLjava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_layout_Row']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.layout.Row');
lcA0.onChange__VLio_cloudoffice_platform_cockpit_layout_Row_2I(lcA1, lcI2);
return;

};
c['onChange__VLjava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = lcA0.read__Lio_cloudoffice_platform_cockpit_layout_Row_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2(lcA1, lcA2);
return stA0;

};
c['read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_layout_Row']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.layout.Row');
var stA0 = lcA0.cloneTo__Lio_cloudoffice_platform_cockpit_layout_Row_2Lio_cloudoffice_platform_cockpit_layout_Row_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
c['cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_layout_Row']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.layout.Row');
lcA0.call__VLio_cloudoffice_platform_cockpit_layout_Row_2ILjava_lang_Object_2Ljava_lang_Object_2(lcA1, lcI2, lcA3, lcA4);
return;

};
c['call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Ljava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_layout_Row']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.layout.Row');
var stA0 = lcA0.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_layout_Row_2I(lcA1, lcI2);
return stA0;

};
c['getValue__Ljava_lang_Object_2Ljava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.setValue__VLjava_lang_Object_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_layout_Row']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.layout.Row');
lcA0.setValue__VLio_cloudoffice_platform_cockpit_layout_Row_2ILjava_lang_Object_2(lcA1, lcI2, lcA3);
return;

};
c['setValue__VLjava_lang_Object_2ILjava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_layout_Row$1_2 = function(lcA1) {
  var  lcA0 = this;
c.constructor.cons__V.call(lcA0);
return;

};
    m.access = 4096;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_layout_Row$Html4JavaTypefillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_layout_Row$Html4JavaType', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_layout_Row$Html4JavaTypefillInstOf });
    io_cloudoffice_platform_cockpit_layout_Row$Html4JavaTypefillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/layout/Row$Html4JavaType';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_layout_Row;
    var refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent;
    var refs_org_netbeans_html_json_spi_Proto$Type;
    var refs_java_lang_String;
    var refs_io_cloudoffice_platform_cockpit_layout_Column;
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
vm.io_cloudoffice_platform_cockpit_layout_Row$Html4JavaType = io_cloudoffice_platform_cockpit_layout_Row$Html4JavaType;


function io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent;
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
CLS['cons__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.enableRowEdit__VLio_cloudoffice_platform_cockpit_layout_Row_2 = function(lcA0) {
var stA0 = lcA0;var stA1 = lcA0.getName__Ljava_lang_String_2();
stA0.setInputfieldvalue__VLjava_lang_String_2(stA1);
lcA0.setEditable__VZ(1);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.disableRowEdit__VLio_cloudoffice_platform_cockpit_layout_Row_2 = function(lcA0) {
lcA0.setInputfieldvalue__VLjava_lang_String_2("");
lcA0.setEditable__VZ(0);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.updateRowName__VLio_cloudoffice_platform_cockpit_layout_Row_2 = function(lcA0) {
var stA0 = lcA0;var stA1 = lcA0.getInputfieldvalue__Ljava_lang_String_2();
stA0.setName__VLjava_lang_String_2(stA1);
c.disableRowEdit__VLio_cloudoffice_platform_cockpit_layout_Row_2(lcA0);
var stA0 = lcA0.toString__Ljava_lang_String_2();
c.updateRowNameOnLayoutJSON__VLjava_lang_String_2(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.showSassVariables__VLio_cloudoffice_platform_cockpit_layout_Row_2 = function(lcA0) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['builder__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2']();
var stA1 = "id";var stA2 = lcA0.getId__Ljava_lang_String_2();
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2(stA0,stA1, stA2);
var lcA1 = stA0;
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_Components || (refs_io_cloudoffice_platform_cockpit_api_Components = vm.io_cloudoffice_platform_cockpit_api_Components(false)))['_LAYOUT']();var stA1 = new vm.io_cloudoffice_platform_cockpit_api_Event;
(refs_io_cloudoffice_platform_cockpit_api_Event || (refs_io_cloudoffice_platform_cockpit_api_Event = vm.io_cloudoffice_platform_cockpit_api_Event(false))).constructor['cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2'].call(stA1, "proppanel", "designermode", lcA1);
invoker.listen__VLio_cloudoffice_platform_cockpit_api_Signal_2(stA0,stA1);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.deleteRow__VLio_cloudoffice_platform_cockpit_layout_Row_2 = function(lcA0) {
var stA0 = lcA0.toString__Ljava_lang_String_2();
c.deleteRowFromLayoutJSON__VLjava_lang_String_2(stA0);
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_Event;
(refs_io_cloudoffice_platform_cockpit_api_Event || (refs_io_cloudoffice_platform_cockpit_api_Event = vm.io_cloudoffice_platform_cockpit_api_Event(false))).constructor['cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2'].call(stA0, "invokefunction", "invokefunction", "showupdateloader");
var lcA1 = stA0;
var stA0 = (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent = io_cloudoffice_platform_cockpit_layout_LayoutComponent(false))).getDefaultInstance__Lio_cloudoffice_platform_cockpit_api_Component_2();
invoker.listen__VLio_cloudoffice_platform_cockpit_api_Signal_2(stA0,lcA1);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.createColumn__VLio_cloudoffice_platform_cockpit_layout_Row_2 = function(lcA0) {
var stI0 = c.getNextColumnId__ILio_cloudoffice_platform_cockpit_layout_Row_2(lcA0);
var lcI1 = (((stI0) + (1)) | 0);
var stA0 = lcA0.getId__Ljava_lang_String_2();
var stA0 = invoker.concat__Ljava_lang_String_2Ljava_lang_String_2(stA0,"column");
var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2I(stA1,lcI1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA0 = invoker.concat__Ljava_lang_String_2Ljava_lang_String_2(stA0,stA1);
var lcA2 = stA0;
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"Column ");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2I(stA0,lcI1);
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
var lcA3 = stA0;
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['builder__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2']();
var lcA4 = stA0;
var stA0 = lcA4;var stA1 = "rowid";var stA2 = lcA0.getId__Ljava_lang_String_2();
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2(stA0,stA1, stA2);
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2(lcA4,"columnid", lcA2);
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2(lcA4,"columnname", lcA3);
c.addNewColumnToTheLayoutJSON__VLio_cloudoffice_platform_cockpit_api_MapBuilder_2(lcA4);
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_Event;
(refs_io_cloudoffice_platform_cockpit_api_Event || (refs_io_cloudoffice_platform_cockpit_api_Event = vm.io_cloudoffice_platform_cockpit_api_Event(false))).constructor['cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2'].call(stA0, "invokefunction", "invokefunction", "showupdateloader");
var lcA5 = stA0;
var stA0 = (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent = io_cloudoffice_platform_cockpit_layout_LayoutComponent(false))).getDefaultInstance__Lio_cloudoffice_platform_cockpit_api_Component_2();
invoker.listen__VLio_cloudoffice_platform_cockpit_api_Signal_2(stA0,lcA5);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.updateRowNameOnLayoutJSON__VLjava_lang_String_2 = function(lcA0) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['_CONFIG']();var stA1 = "layout";var stA2 = (refs_io_cloudoffice_platform_cockpit_js_JSUIUtils || (refs_io_cloudoffice_platform_cockpit_js_JSUIUtils = vm.io_cloudoffice_platform_cockpit_js_JSUIUtils(false)))['getLayout__Ljava_lang_String_2']();
var stA1 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['configFetchEndpoint__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2'](stA1, stA2);
var stA2 = null;var stA3 = new io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent$1;
(refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent$1 || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent$1 = io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent$1(false))).constructor.cons__VLjava_lang_String_2.call(stA3, lcA0);
invoker.fetch__VLjava_lang_String_2Ljava_util_Map_2Lio_cloudoffice_platform_cockpit_api_CallBack_2(stA0,stA1, stA2, stA3);
return;

};
c['updateRowNameOnLayoutJSON__VLjava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.updateRowName__VLio_cloudoffice_platform_cockpit_layout_Layout_2Ljava_lang_String_2 = function(lcA0, lcA1) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor;
(refs_io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor || (refs_io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor = vm.io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor(false))).constructor['cons__V'].call(stA0);
var stA1 = lcA1;var stA2 = new io_cloudoffice_platform_cockpit_layout_Row;
(refs_io_cloudoffice_platform_cockpit_layout_Row || (refs_io_cloudoffice_platform_cockpit_layout_Row = io_cloudoffice_platform_cockpit_layout_Row(false))).constructor.cons__V.call(stA2);
var stA0 = invoker.getObject__Ljava_lang_Object_2Ljava_lang_String_2Ljava_lang_Object_2(stA0,stA1, stA2);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_layout_Row']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.layout.Row');
var lcA2 = stA0;
if ((null) === (lcA2)) { gt = 116; break IF; }
var stA0 = lcA2.getId__Ljava_lang_String_2();
var lcA3 = stA0;
var stA0 = lcA0.getRows__Ljava_util_List_2();
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA4 = stA0;
    }
    X_43: for (;;) { IF: if (gt <= 43) {

var stI0 = invoker.hasNext__Z(lcA4);
if ((stI0) == 0) { gt = 113; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA4);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_layout_Row']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.layout.Row');
var lcA5 = stA0;
var stA0 = lcA3;var stA1 = lcA5.getId__Ljava_lang_String_2();
var stI0 = invoker.equalsIgnoreCase__ZLjava_lang_String_2(stA0,stA1);
if ((stI0) == 0) { gt = 110; break IF; }
var stA0 = lcA5;var stA1 = lcA2.getName__Ljava_lang_String_2();
stA0.setName__VLjava_lang_String_2(stA1);
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['_CONFIG']();var stA1 = lcA0.getId__Ljava_lang_String_2();
var stA1 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['layoutConfigPostEndpoint__Ljava_lang_String_2Ljava_lang_String_2'](stA1);
var stA2 = lcA0.toString__Ljava_lang_String_2();
var stA3 = new io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent$2;
(refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent$2 || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent$2 = io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent$2(false))).constructor.cons__V.call(stA3);
invoker.post__VLjava_lang_String_2Ljava_lang_String_2Lio_cloudoffice_platform_cockpit_api_CallBack_2(stA0,stA1, stA2, stA3);
    }
    X_110: for (;;) { IF: if (gt <= 110) {
{ gt = 0; continue X_43; }
    }
    X_113: for (;;) { IF: if (gt <= 113) {
{ gt = 121; break IF; }
    }
    X_116: for (;;) { IF: if (gt <= 116) {

(refs_io_cloudoffice_platform_cockpit_api_Logger || (refs_io_cloudoffice_platform_cockpit_api_Logger = vm.io_cloudoffice_platform_cockpit_api_Logger(false)))['log__VLjava_lang_String_2'](">>> Row information is invalid.");
    }
    X_121: for (;;) { IF: if (gt <= 121) {
return;

    }
}}}}}}
};
c['updateRowName__VLio_cloudoffice_platform_cockpit_layout_Layout_2Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.deleteRowFromLayoutJSON__VLjava_lang_String_2 = function(lcA0) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['_CONFIG']();var stA1 = "layout";var stA2 = (refs_io_cloudoffice_platform_cockpit_js_JSUIUtils || (refs_io_cloudoffice_platform_cockpit_js_JSUIUtils = vm.io_cloudoffice_platform_cockpit_js_JSUIUtils(false)))['getLayout__Ljava_lang_String_2']();
var stA1 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['configFetchEndpoint__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2'](stA1, stA2);
var stA2 = null;var stA3 = new io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent$3;
(refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent$3 || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent$3 = io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent$3(false))).constructor.cons__VLjava_lang_String_2.call(stA3, lcA0);
invoker.fetch__VLjava_lang_String_2Ljava_util_Map_2Lio_cloudoffice_platform_cockpit_api_CallBack_2(stA0,stA1, stA2, stA3);
return;

};
c['deleteRowFromLayoutJSON__VLjava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.deleteRowFromLayout__VLio_cloudoffice_platform_cockpit_layout_Layout_2Ljava_lang_String_2 = function(lcA0, lcA1) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor;
(refs_io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor || (refs_io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor = vm.io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor(false))).constructor['cons__V'].call(stA0);
var stA1 = lcA1;var stA2 = new io_cloudoffice_platform_cockpit_layout_Row;
(refs_io_cloudoffice_platform_cockpit_layout_Row || (refs_io_cloudoffice_platform_cockpit_layout_Row = io_cloudoffice_platform_cockpit_layout_Row(false))).constructor.cons__V.call(stA2);
var stA0 = invoker.getObject__Ljava_lang_Object_2Ljava_lang_String_2Ljava_lang_Object_2(stA0,stA1, stA2);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_layout_Row']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.layout.Row');
var lcA2 = stA0;
if ((null) === (lcA2)) { gt = 75; break IF; }
var stA0 = lcA0.getRows__Ljava_util_List_2();
var stI0 = invoker.remove__ZLjava_lang_Object_2(stA0,lcA2);
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['_CONFIG']();var stA1 = lcA0.getId__Ljava_lang_String_2();
var stA2 = "layout";var stA3 = lcA2.getId__Ljava_lang_String_2();
var stA1 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['layoutStylePostEndpoint__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2'](stA1, stA2, stA3, "row", "delete");
var stA2 = lcA0.toString__Ljava_lang_String_2();
var stA3 = new io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent$4;
(refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent$4 || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent$4 = io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent$4(false))).constructor.cons__V.call(stA3);
invoker.post__VLjava_lang_String_2Ljava_lang_String_2Lio_cloudoffice_platform_cockpit_api_CallBack_2(stA0,stA1, stA2, stA3);
{ gt = 80; break IF; }
    }
    X_75: for (;;) { IF: if (gt <= 75) {

(refs_io_cloudoffice_platform_cockpit_api_Logger || (refs_io_cloudoffice_platform_cockpit_api_Logger = vm.io_cloudoffice_platform_cockpit_api_Logger(false)))['log__VLjava_lang_String_2'](">>> Row information is invalid.");
    }
    X_80: for (;;) { IF: if (gt <= 80) {
return;

    }
}}}
};
c['deleteRowFromLayout__VLio_cloudoffice_platform_cockpit_layout_Layout_2Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.getNextColumnId__ILio_cloudoffice_platform_cockpit_layout_Row_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var lcI1 = 0;
var stA0 = lcA0.getColumns__Ljava_util_List_2();
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA2 = stA0;
    }
    X_12: for (;;) { IF: if (gt <= 12) {

var stI0 = invoker.hasNext__Z(lcA2);
if ((stI0) == 0) { gt = 79; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA2);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_layout_Column']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.layout.Column');
var lcA3 = stA0;
var stA0 = lcA3.getId__Ljava_lang_String_2();
var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA2 = lcA0.getId__Ljava_lang_String_2();
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,stA2);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"column");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA0 = invoker.split___3Ljava_lang_String_2Ljava_lang_String_2(stA0,stA1);
var lcA4 = stA0;
var stA0 = invoker.trim__Ljava_lang_String_2((lcA4[1] || Array.at(lcA4, 1)));
var stA0 = (refs_java_lang_Integer || (refs_java_lang_Integer = vm.java_lang_Integer(false)))['valueOf__Ljava_lang_Integer_2Ljava_lang_String_2'](stA0);
var stI0 = invoker.intValue__I(stA0);
var lcI1 = stI0;
{ gt = 0; continue X_12; }
    }
    X_79: for (;;) { IF: if (gt <= 79) {

return lcI1;

    }
}}}
};
    m.access = 8;
    m.cls = CLS;
    m = c.addNewColumnToTheLayoutJSON__VLio_cloudoffice_platform_cockpit_api_MapBuilder_2 = function(lcA0) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['_CONFIG']();var stA1 = "layout";var stA2 = (refs_io_cloudoffice_platform_cockpit_js_JSUIUtils || (refs_io_cloudoffice_platform_cockpit_js_JSUIUtils = vm.io_cloudoffice_platform_cockpit_js_JSUIUtils(false)))['getLayout__Ljava_lang_String_2']();
var stA1 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['configFetchEndpoint__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2'](stA1, stA2);
var stA2 = null;var stA3 = new io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent$5;
(refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent$5 || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent$5 = io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent$5(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_api_MapBuilder_2.call(stA3, lcA0);
invoker.fetch__VLjava_lang_String_2Ljava_util_Map_2Lio_cloudoffice_platform_cockpit_api_CallBack_2(stA0,stA1, stA2, stA3);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.insertColumn__VLio_cloudoffice_platform_cockpit_layout_Layout_2Ljava_lang_String_2 = function(lcA0, lcA1) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['query__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2'](lcA1);
var lcA2 = stA0;
var stA0 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA2,"rowid");
var lcA3 = stA0;
var stA0 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA2,"columnid");
var lcA4 = stA0;
var stA0 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA2,"columnname");
var lcA5 = stA0;
var stA0 = new io_cloudoffice_platform_cockpit_layout_Column;
(refs_io_cloudoffice_platform_cockpit_layout_Column || (refs_io_cloudoffice_platform_cockpit_layout_Column = io_cloudoffice_platform_cockpit_layout_Column(false))).constructor.cons__V.call(stA0);
var lcA6 = stA0;
lcA6.setId__VLjava_lang_String_2(lcA4);
lcA6.setName__VLjava_lang_String_2(lcA5);
var stA0 = c.getRowByRowId__Lio_cloudoffice_platform_cockpit_layout_Row_2Lio_cloudoffice_platform_cockpit_layout_Layout_2Ljava_lang_String_2(lcA0, lcA3);
var lcA7 = stA0;
if ((null) === (lcA7)) { gt = 111; break IF; }
var stA0 = lcA7.getColumns__Ljava_util_List_2();
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,lcA6);
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['_CONFIG']();var stA1 = lcA0.getId__Ljava_lang_String_2();
var stA1 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['layoutStylePostEndpoint__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2'](stA1, lcA3, lcA4, "column", "insert");
var stA2 = lcA0.toString__Ljava_lang_String_2();
var stA3 = new io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent$6;
(refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent$6 || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent$6 = io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent$6(false))).constructor.cons__V.call(stA3);
invoker.post__VLjava_lang_String_2Ljava_lang_String_2Lio_cloudoffice_platform_cockpit_api_CallBack_2(stA0,stA1, stA2, stA3);
{ gt = 116; break IF; }
    }
    X_111: for (;;) { IF: if (gt <= 111) {

(refs_io_cloudoffice_platform_cockpit_api_Logger || (refs_io_cloudoffice_platform_cockpit_api_Logger = vm.io_cloudoffice_platform_cockpit_api_Logger(false)))['log__VLjava_lang_String_2'](">>> Invalid row.");
    }
    X_116: for (;;) { IF: if (gt <= 116) {
return;

    }
}}}
};
    m.access = 8;
    m.cls = CLS;
    m = c.getRowByRowId__Lio_cloudoffice_platform_cockpit_layout_Row_2Lio_cloudoffice_platform_cockpit_layout_Layout_2Ljava_lang_String_2 = function(lcA0, lcA1) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var lcA2 = null;
var stA0 = lcA0.getRows__Ljava_util_List_2();
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA3 = stA0;
    }
    X_12: for (;;) { IF: if (gt <= 12) {

var stI0 = invoker.hasNext__Z(lcA3);
if ((stI0) == 0) { gt = 57; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA3);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_layout_Row']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.layout.Row');
var lcA4 = stA0;
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](lcA1);
if ((stI0) == 0) { gt = 54; break IF; }
var stA0 = lcA1;var stA1 = lcA4.getId__Ljava_lang_String_2();
var stI0 = invoker.equalsIgnoreCase__ZLjava_lang_String_2(stA0,stA1);
if ((stI0) == 0) { gt = 54; break IF; }
var lcA2 = lcA4;
    }
    X_54: for (;;) { IF: if (gt <= 54) {
{ gt = 0; continue X_12; }
    }
    X_57: for (;;) { IF: if (gt <= 57) {

return lcA2;

    }
}}}}
};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponentfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponentfillInstOf });
    io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponentfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/layout/LayoutComponent$RowComponent';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 33;
    CLS.$class.cnstr = CLS;
    var refs_java_lang_Object;
    var refs_io_cloudoffice_platform_cockpit_api_MapBuilder;
    var refs_io_cloudoffice_platform_cockpit_api_Components;
    var refs_io_cloudoffice_platform_cockpit_api_Event;
    var refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent;
    var refs_java_lang_StringBuilder;
    var refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration;
    var refs_io_cloudoffice_platform_cockpit_js_JSUIUtils;
    var refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent$1;
    var refs_io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor;
    var refs_io_cloudoffice_platform_cockpit_layout_Row;
    var refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent$2;
    var refs_io_cloudoffice_platform_cockpit_api_Logger;
    var refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent$3;
    var refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent$4;
    var refs_java_lang_Integer;
    var refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent$5;
    var refs_io_cloudoffice_platform_cockpit_layout_Column;
    var refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent$6;
    var refs_io_cloudoffice_platform_cockpit_api_UtilValidate;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent = registerClass(exports,'io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent',io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent);


function io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent$6() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent$6;
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
    m.access = 0;
    m.cls = CLS;
    m = c.handle__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;
(refs_io_cloudoffice_platform_cockpit_api_Logger || (refs_io_cloudoffice_platform_cockpit_api_Logger = vm.io_cloudoffice_platform_cockpit_api_Logger(false)))['log__VLjava_lang_String_2'](">>> New column created.");
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_Event;
(refs_io_cloudoffice_platform_cockpit_api_Event || (refs_io_cloudoffice_platform_cockpit_api_Event = vm.io_cloudoffice_platform_cockpit_api_Event(false))).constructor['cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2'].call(stA0, "invokefunction", "invokefunction", "updatelayout");
var lcA2 = stA0;
var stA0 = (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent = io_cloudoffice_platform_cockpit_layout_LayoutComponent(false))).getDefaultInstance__Lio_cloudoffice_platform_cockpit_api_Component_2();
invoker.listen__VLio_cloudoffice_platform_cockpit_api_Signal_2(stA0,lcA2);
return;

};
c['handle__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent$6fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent$6', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_CallBack(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent$6fillInstOf });
    io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent$6fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/layout/LayoutComponent$RowComponent$6';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_CallBack(false).constructor.$class
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
    var refs_java_lang_Object;
    var refs_io_cloudoffice_platform_cockpit_api_Logger;
    var refs_io_cloudoffice_platform_cockpit_api_Event;
    var refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent$6 = io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent$6;


function io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent$5() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent$5;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$builder = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent$5_val$builder'] = v; return this['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent$5_val$builder']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_api_MapBuilder_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent$5_val$builder'] = lcA1;
(refs_java_lang_Object || (refs_java_lang_Object = vm.java_lang_Object(false))).constructor['cons__V'].call(lcA0);
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.handle__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor;
(refs_io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor || (refs_io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor = vm.io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor(false))).constructor['cons__V'].call(stA0);
var stA1 = lcA1;var stA2 = new io_cloudoffice_platform_cockpit_layout_Layout;
(refs_io_cloudoffice_platform_cockpit_layout_Layout || (refs_io_cloudoffice_platform_cockpit_layout_Layout = io_cloudoffice_platform_cockpit_layout_Layout(false))).constructor.cons__V.call(stA2);
var stA0 = invoker.getObject__Ljava_lang_Object_2Ljava_lang_String_2Ljava_lang_Object_2(stA0,stA1, stA2);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_layout_Layout']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.layout.Layout');
var lcA2 = stA0;
var stA0 = lcA2;var stA1 = invoker.toJSON__Ljava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent$5_val$builder']);
(refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent = io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent(false))).insertColumn__VLio_cloudoffice_platform_cockpit_layout_Layout_2Ljava_lang_String_2(stA0, stA1);
return;

};
c['handle__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent$5fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent$5', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_CallBack(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent$5fillInstOf });
    io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent$5fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/layout/LayoutComponent$RowComponent$5';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_CallBack(false).constructor.$class
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
    var refs_java_lang_Object;
    var refs_io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor;
    var refs_io_cloudoffice_platform_cockpit_layout_Layout;
    var refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent$5_val$builder'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent$5 = io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent$5;


function io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent$4() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent$4;
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
    m.access = 0;
    m.cls = CLS;
    m = c.handle__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;
(refs_io_cloudoffice_platform_cockpit_api_Logger || (refs_io_cloudoffice_platform_cockpit_api_Logger = vm.io_cloudoffice_platform_cockpit_api_Logger(false)))['log__VLjava_lang_String_2'](">>> Row deleted.");
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_Event;
(refs_io_cloudoffice_platform_cockpit_api_Event || (refs_io_cloudoffice_platform_cockpit_api_Event = vm.io_cloudoffice_platform_cockpit_api_Event(false))).constructor['cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2'].call(stA0, "invokefunction", "invokefunction", "updatelayout");
var lcA2 = stA0;
var stA0 = (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent = io_cloudoffice_platform_cockpit_layout_LayoutComponent(false))).getDefaultInstance__Lio_cloudoffice_platform_cockpit_api_Component_2();
invoker.listen__VLio_cloudoffice_platform_cockpit_api_Signal_2(stA0,lcA2);
return;

};
c['handle__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent$4fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent$4', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_CallBack(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent$4fillInstOf });
    io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent$4fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/layout/LayoutComponent$RowComponent$4';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_CallBack(false).constructor.$class
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
    var refs_java_lang_Object;
    var refs_io_cloudoffice_platform_cockpit_api_Logger;
    var refs_io_cloudoffice_platform_cockpit_api_Event;
    var refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent$4 = io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent$4;


function io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent$3() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent$3;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$rowString = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent$3_val$rowString'] = v; return this['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent$3_val$rowString']; };
    m = CLS.cons__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent$3_val$rowString'] = lcA1;
(refs_java_lang_Object || (refs_java_lang_Object = vm.java_lang_Object(false))).constructor['cons__V'].call(lcA0);
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.handle__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor;
(refs_io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor || (refs_io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor = vm.io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor(false))).constructor['cons__V'].call(stA0);
var stA1 = lcA1;var stA2 = new io_cloudoffice_platform_cockpit_layout_Layout;
(refs_io_cloudoffice_platform_cockpit_layout_Layout || (refs_io_cloudoffice_platform_cockpit_layout_Layout = io_cloudoffice_platform_cockpit_layout_Layout(false))).constructor.cons__V.call(stA2);
var stA0 = invoker.getObject__Ljava_lang_Object_2Ljava_lang_String_2Ljava_lang_Object_2(stA0,stA1, stA2);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_layout_Layout']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.layout.Layout');
var lcA2 = stA0;
(refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent = io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent(false))).deleteRowFromLayout__VLio_cloudoffice_platform_cockpit_layout_Layout_2Ljava_lang_String_2(lcA2, lcA0['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent$3_val$rowString']);
return;

};
c['handle__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent$3fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent$3', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_CallBack(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent$3fillInstOf });
    io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent$3fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/layout/LayoutComponent$RowComponent$3';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_CallBack(false).constructor.$class
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
    var refs_java_lang_Object;
    var refs_io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor;
    var refs_io_cloudoffice_platform_cockpit_layout_Layout;
    var refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent$3_val$rowString'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent$3 = io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent$3;


function io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent$2() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent$2;
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
    m.access = 0;
    m.cls = CLS;
    m = c.handle__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;
(refs_io_cloudoffice_platform_cockpit_api_Logger || (refs_io_cloudoffice_platform_cockpit_api_Logger = vm.io_cloudoffice_platform_cockpit_api_Logger(false)))['log__VLjava_lang_String_2'](">>> Row name updated.");
return;

};
c['handle__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent$2fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent$2', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_CallBack(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent$2fillInstOf });
    io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent$2fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/layout/LayoutComponent$RowComponent$2';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_CallBack(false).constructor.$class
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
    var refs_java_lang_Object;
    var refs_io_cloudoffice_platform_cockpit_api_Logger;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent$2 = io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent$2;


function io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent$1() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$rowString = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent$1_val$rowString'] = v; return this['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent$1_val$rowString']; };
    m = CLS.cons__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent$1_val$rowString'] = lcA1;
(refs_java_lang_Object || (refs_java_lang_Object = vm.java_lang_Object(false))).constructor['cons__V'].call(lcA0);
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.handle__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor;
(refs_io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor || (refs_io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor = vm.io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor(false))).constructor['cons__V'].call(stA0);
var stA1 = lcA1;var stA2 = new io_cloudoffice_platform_cockpit_layout_Layout;
(refs_io_cloudoffice_platform_cockpit_layout_Layout || (refs_io_cloudoffice_platform_cockpit_layout_Layout = io_cloudoffice_platform_cockpit_layout_Layout(false))).constructor.cons__V.call(stA2);
var stA0 = invoker.getObject__Ljava_lang_Object_2Ljava_lang_String_2Ljava_lang_Object_2(stA0,stA1, stA2);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_layout_Layout']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.layout.Layout');
var lcA2 = stA0;
(refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent = io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent(false))).updateRowName__VLio_cloudoffice_platform_cockpit_layout_Layout_2Ljava_lang_String_2(lcA2, lcA0['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent$1_val$rowString']);
return;

};
c['handle__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent$1', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_CallBack(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent$1fillInstOf });
    io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/layout/LayoutComponent$RowComponent$1';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_CallBack(false).constructor.$class
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
    var refs_java_lang_Object;
    var refs_io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor;
    var refs_io_cloudoffice_platform_cockpit_layout_Layout;
    var refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent$1_val$rowString'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent$1 = io_cloudoffice_platform_cockpit_layout_LayoutComponent$RowComponent$1;


function io_cloudoffice_platform_cockpit_layout_LayoutComponent$18() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_layout_LayoutComponent$18;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$builder = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$18_val$builder'] = v; return this['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$18_val$builder']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_api_MapBuilder_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$18_val$builder'] = lcA1;
(refs_java_lang_Object || (refs_java_lang_Object = vm.java_lang_Object(false))).constructor['cons__V'].call(lcA0);
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.handle__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor;
(refs_io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor || (refs_io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor = vm.io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor(false))).constructor['cons__V'].call(stA0);
var stA1 = lcA1;var stA2 = new io_cloudoffice_platform_cockpit_layout_Layout;
(refs_io_cloudoffice_platform_cockpit_layout_Layout || (refs_io_cloudoffice_platform_cockpit_layout_Layout = io_cloudoffice_platform_cockpit_layout_Layout(false))).constructor.cons__V.call(stA2);
var stA0 = invoker.getObject__Ljava_lang_Object_2Ljava_lang_String_2Ljava_lang_Object_2(stA0,stA1, stA2);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_layout_Layout']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.layout.Layout');
var lcA2 = stA0;
var stA0 = lcA2;var stA1 = invoker.toJSON__Ljava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$18_val$builder']);
(refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent = io_cloudoffice_platform_cockpit_layout_LayoutComponent(false))).insertRow__VLio_cloudoffice_platform_cockpit_layout_Layout_2Ljava_lang_String_2(stA0, stA1);
return;

};
c['handle__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_layout_LayoutComponent$18fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_layout_LayoutComponent$18', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_CallBack(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_layout_LayoutComponent$18fillInstOf });
    io_cloudoffice_platform_cockpit_layout_LayoutComponent$18fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/layout/LayoutComponent$18';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_CallBack(false).constructor.$class
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
    var refs_java_lang_Object;
    var refs_io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor;
    var refs_io_cloudoffice_platform_cockpit_layout_Layout;
    var refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$18_val$builder'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_layout_LayoutComponent$18 = io_cloudoffice_platform_cockpit_layout_LayoutComponent$18;


function io_cloudoffice_platform_cockpit_layout_LayoutComponent$17() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_layout_LayoutComponent$17;
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
    m.access = 0;
    m.cls = CLS;
    m = c.handle__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor;
(refs_io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor || (refs_io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor = vm.io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor(false))).constructor['cons__V'].call(stA0);
var stA1 = lcA1;var stA2 = new io_cloudoffice_platform_cockpit_layout_Layout;
(refs_io_cloudoffice_platform_cockpit_layout_Layout || (refs_io_cloudoffice_platform_cockpit_layout_Layout = io_cloudoffice_platform_cockpit_layout_Layout(false))).constructor.cons__V.call(stA2);
var stA0 = invoker.getObject__Ljava_lang_Object_2Ljava_lang_String_2Ljava_lang_Object_2(stA0,stA1, stA2);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_layout_Layout']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.layout.Layout');
var lcA2 = stA0;
(refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent = io_cloudoffice_platform_cockpit_layout_LayoutComponent(false))).initLayout__VLio_cloudoffice_platform_cockpit_layout_Layout_2(lcA2);
return;

};
c['handle__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_layout_LayoutComponent$17fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_layout_LayoutComponent$17', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_CallBack(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_layout_LayoutComponent$17fillInstOf });
    io_cloudoffice_platform_cockpit_layout_LayoutComponent$17fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/layout/LayoutComponent$17';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_CallBack(false).constructor.$class
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
    var refs_java_lang_Object;
    var refs_io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor;
    var refs_io_cloudoffice_platform_cockpit_layout_Layout;
    var refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_layout_LayoutComponent$17 = io_cloudoffice_platform_cockpit_layout_LayoutComponent$17;

vm.io_cloudoffice_platform_cockpit_api_Application = link('io/cloudoffice/platform/cockpit/api/Application', function(f) { vm.io_cloudoffice_platform_cockpit_api_Application =  f; });

function io_cloudoffice_platform_cockpit_layout_LayoutComponent$DelayedLoadData() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_layout_LayoutComponent$DelayedLoadData;
  if (!CLS.$class) {
    var pp = vm.io_cloudoffice_platform_cockpit_js_DelayCall(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._layout = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$DelayedLoadData_layout'] = v; return this['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$DelayedLoadData_layout']; };
  m = c._component = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$DelayedLoadData_component'] = v; return this['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$DelayedLoadData_component']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_layout_Layout_2Lio_cloudoffice_platform_cockpit_layout_LayoutComponent_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
(refs_io_cloudoffice_platform_cockpit_js_DelayCall || (refs_io_cloudoffice_platform_cockpit_js_DelayCall = vm.io_cloudoffice_platform_cockpit_js_DelayCall(false))).constructor['cons__V'].call(lcA0);
lcA0['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$DelayedLoadData_layout'] = lcA1;
lcA0['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$DelayedLoadData_component'] = lcA2;
return;

};
    m.access = 1;
    m.cls = CLS;
    m = c.run__V = function() {
  var  lcA0 = this;
(refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent = io_cloudoffice_platform_cockpit_layout_LayoutComponent(false))).access$400__VLio_cloudoffice_platform_cockpit_layout_Layout_2Lio_cloudoffice_platform_cockpit_layout_LayoutComponent_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$DelayedLoadData_layout'], lcA0['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$DelayedLoadData_component']);
return;

};
c['run__V'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_layout_LayoutComponent$DelayedLoadDatafillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_layout_LayoutComponent$DelayedLoadData', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_layout_LayoutComponent$DelayedLoadDatafillInstOf });
    io_cloudoffice_platform_cockpit_layout_LayoutComponent$DelayedLoadDatafillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/layout/LayoutComponent$DelayedLoadData';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_js_DelayCall;
    var refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$DelayedLoadData_layout'] = null;
    this['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$DelayedLoadData_component'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_layout_LayoutComponent$DelayedLoadData = io_cloudoffice_platform_cockpit_layout_LayoutComponent$DelayedLoadData;

vm.io_cloudoffice_platform_cockpit_js_DelayCall = link('io/cloudoffice/platform/cockpit/js/DelayCall', function(f) { vm.io_cloudoffice_platform_cockpit_js_DelayCall =  f; });
vm.net_java_html_json_Models = link('net/java/html/json/Models', function(f) { vm.net_java_html_json_Models =  f; });
vm.io_cloudoffice_platform_cockpit_api_Session = link('io/cloudoffice/platform/cockpit/api/Session', function(f) { vm.io_cloudoffice_platform_cockpit_api_Session =  f; });

function io_cloudoffice_platform_cockpit_layout_Prop() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_layout_Prop;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_TYPE'] = null;
  m = c._TYPE = function (v) {  if (arguments.length == 1) CLS['fld_TYPE'] = v; return CLS['fld_TYPE']; };
  m = c._proto = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_layout_Prop_proto'] = v; return this['fld_io_cloudoffice_platform_cockpit_layout_Prop_proto']; };
  m = c._prop_key = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_layout_Prop_prop_key'] = v; return this['fld_io_cloudoffice_platform_cockpit_layout_Prop_prop_key']; };
  m = c._prop_value = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_layout_Prop_prop_value'] = v; return this['fld_io_cloudoffice_platform_cockpit_layout_Prop_prop_value']; };
    m = c.modelFor__Ljava_lang_Class_2 = function() {
return (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$PropComponent || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$PropComponent = io_cloudoffice_platform_cockpit_layout_LayoutComponent$PropComponent(false))).constructor.$class;

};
    m.access = 10;
    m.cls = CLS;
    m = c.getKey__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Prop_proto'],"key");
return lcA0['fld_io_cloudoffice_platform_cockpit_layout_Prop_prop_key'];

};
c['getKey__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setKey__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Prop_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_Prop_prop_key'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_layout_Prop_prop_key'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Prop_proto'],"key", lcA2, lcA1);
return;

    }
}}
};
c['setKey__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Prop_proto'],"value");
return lcA0['fld_io_cloudoffice_platform_cockpit_layout_Prop_prop_value'];

};
c['getValue__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setValue__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Prop_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_Prop_prop_value'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_layout_Prop_prop_value'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Prop_proto'],"value", lcA2, lcA1);
return;

    }
}}
};
c['setValue__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;
(refs_java_lang_Object || (refs_java_lang_Object = vm.java_lang_Object(false))).constructor['cons__V'].call(lcA0);
var stA0 = lcA0;var stA1 = invoker.createProto__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2(c._TYPE(),lcA0, lcA1);
stA0['fld_io_cloudoffice_platform_cockpit_layout_Prop_proto'] = stA1;
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
lcA0['fld_io_cloudoffice_platform_cockpit_layout_Prop_prop_key'] = lcA1;
lcA0['fld_io_cloudoffice_platform_cockpit_layout_Prop_prop_value'] = lcA2;
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
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_Prop_proto'];var stA1 = lcA2;var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, 2);
Array.at(stA2, 0, "key");
Array.at(stA2, 1, "value");
invoker.extract__VLjava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Object_2(stA0,stA1, stA2, lcA3);
if ((lcA3[0] || Array.at(lcA3, 0)) !== null && !(lcA3[0] || Array.at(lcA3, 0))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[0] || Array.at(lcA3, 0)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_layout_Prop_prop_key'] = (lcA3[0] || Array.at(lcA3, 0));
if ((lcA3[1] || Array.at(lcA3, 1)) !== null && !(lcA3[1] || Array.at(lcA3, 1))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[1] || Array.at(lcA3, 1)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_layout_Prop_prop_value'] = (lcA3[1] || Array.at(lcA3, 1));
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
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"key");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getKey__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"value");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getValue__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(125));
var stA0 = invoker.toString__Ljava_lang_String_2(lcA1);
return stA0;

};
c['toString__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Lio_cloudoffice_platform_cockpit_layout_Prop_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Prop_proto']);
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_layout_Prop_2Lnet_java_html_BrwsrCtx_2.call(stA0, stA1);
return stA0;

};
c['clone__Lio_cloudoffice_platform_cockpit_layout_Prop_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Lio_cloudoffice_platform_cockpit_layout_Prop_2Lnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = new io_cloudoffice_platform_cockpit_layout_Prop;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, lcA1);
var lcA2 = stA0;
var stA0 = lcA2;var stA1 = lcA0.getKey__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_layout_Prop_prop_key'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getValue__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_layout_Prop_prop_value'] = stA1;
return lcA2;

};
    m.access = 2;
    m.cls = CLS;
    m = c.applyBindings__Lio_cloudoffice_platform_cockpit_layout_Prop_2 = function() {
  var  lcA0 = this;
invoker.applyBindings__V(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Prop_proto']);
return lcA0;

};
c['applyBindings__Lio_cloudoffice_platform_cockpit_layout_Prop_2'] = m;

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

var stI0 = lcA1 != null && lcA1['$instOf_io_cloudoffice_platform_cockpit_layout_Prop'] ? 1 : 0;
if ((stI0) != 0) { gt = 16; break IF; }
return 0;
    }
    X_16: for (;;) { IF: if (gt <= 16) {

if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_layout_Prop']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.layout.Prop');
var lcA2 = lcA1;
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_layout_Prop_prop_key'], lcA2['fld_io_cloudoffice_platform_cockpit_layout_Prop_prop_key']);
if ((stI0) != 0) { gt = 40; break IF; }
return 0;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_layout_Prop_prop_value'], lcA2['fld_io_cloudoffice_platform_cockpit_layout_Prop_prop_value']);
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
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_layout_Prop_prop_key'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_layout_Prop_prop_value'], lcI1);
var lcI1 = stI0;
return lcI1;

};
c['hashCode__I'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Ljava_lang_Object_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0.clone__Lio_cloudoffice_platform_cockpit_layout_Prop_2();
return stA0;

};
c['clone__Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.access$100__Lio_cloudoffice_platform_cockpit_layout_Prop$Html4JavaType_2 = function() {
return c._TYPE();

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_layout_Prop_2 = function(lcA0) {
return lcA0['fld_io_cloudoffice_platform_cockpit_layout_Prop_proto'];

};
    m.access = 4104;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_layout_Prop$1_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2.call(lcA0, lcA1, lcA2);
return;

};
    m.access = 4096;
    m.cls = CLS;
    m = c.access$400__Lio_cloudoffice_platform_cockpit_layout_Prop_2Lio_cloudoffice_platform_cockpit_layout_Prop_2Lnet_java_html_BrwsrCtx_2 = function(lcA0, lcA1) {
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_layout_Prop_2Lnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
return stA0;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new io_cloudoffice_platform_cockpit_layout_Prop$Html4JavaType;
(refs_io_cloudoffice_platform_cockpit_layout_Prop$Html4JavaType || (refs_io_cloudoffice_platform_cockpit_layout_Prop$Html4JavaType = io_cloudoffice_platform_cockpit_layout_Prop$Html4JavaType(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_layout_Prop$1_2.call(stA0, null);
c._TYPE(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_layout_PropfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_layout_Prop', { value : true });
      vm.java_lang_Cloneable(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_layout_PropfillInstOf });
    io_cloudoffice_platform_cockpit_layout_PropfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/layout/Prop';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.java_lang_Cloneable(false).constructor.$class
    ]; };
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$PropComponent;
    var refs_java_lang_Object;
    var refs_net_java_html_BrwsrCtx;
    var refs_java_lang_StringBuilder;
    var refs_io_cloudoffice_platform_cockpit_layout_Prop$Html4JavaType;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_layout_Prop_proto'] = null;
    this['fld_io_cloudoffice_platform_cockpit_layout_Prop_prop_key'] = null;
    this['fld_io_cloudoffice_platform_cockpit_layout_Prop_prop_value'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_layout_Prop = registerClass(exports,'io_cloudoffice_platform_cockpit_layout_Prop',io_cloudoffice_platform_cockpit_layout_Prop);


function io_cloudoffice_platform_cockpit_layout_Prop$Html4JavaType() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_layout_Prop$Html4JavaType;
  if (!CLS.$class) {
    var pp = vm.org_netbeans_html_json_spi_Proto$Type(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_org_netbeans_html_json_spi_Proto$Type || (refs_org_netbeans_html_json_spi_Proto$Type = vm.org_netbeans_html_json_spi_Proto$Type(false))).constructor['cons__VLjava_lang_Class_2Ljava_lang_Class_2II'].call(lcA0, (refs_io_cloudoffice_platform_cockpit_layout_Prop || (refs_io_cloudoffice_platform_cockpit_layout_Prop = io_cloudoffice_platform_cockpit_layout_Prop(false))).constructor.$class, (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$PropComponent || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$PropComponent = io_cloudoffice_platform_cockpit_layout_LayoutComponent$PropComponent(false))).constructor.$class, 2, 1);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"key", 0, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"value", 1, 0, 0);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"layoutAction", 0);
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.setValue__VLio_cloudoffice_platform_cockpit_layout_Prop_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
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

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_layout_Prop || (refs_io_cloudoffice_platform_cockpit_layout_Prop = io_cloudoffice_platform_cockpit_layout_Prop(false))).access$100__Lio_cloudoffice_platform_cockpit_layout_Prop$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setKey__VLjava_lang_String_2(stA1);
return;
    }
    X_45: for (;;) { IF: if (gt <= 45) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_layout_Prop || (refs_io_cloudoffice_platform_cockpit_layout_Prop = io_cloudoffice_platform_cockpit_layout_Prop(false))).access$100__Lio_cloudoffice_platform_cockpit_layout_Prop$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setValue__VLjava_lang_String_2(stA1);
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
    m = c.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_layout_Prop_2I = function(lcA1, lcI2) {
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

var stA0 = lcA1.getKey__Ljava_lang_String_2();
return stA0;
    }
    X_33: for (;;) { IF: if (gt <= 33) {

var stA0 = lcA1.getValue__Ljava_lang_String_2();
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
    m = c.call__VLio_cloudoffice_platform_cockpit_layout_Prop_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0: { gt = 20; break IF; }
  default: { gt = 25; break IF; }
}
    }
    X_20: for (;;) { IF: if (gt <= 20) {

(refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$PropComponent || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$PropComponent = io_cloudoffice_platform_cockpit_layout_LayoutComponent$PropComponent(false))).layoutAction__VLio_cloudoffice_platform_cockpit_layout_Prop_2(lcA1);
return;
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
    m = c.protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_layout_Prop']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.layout.Prop');
var stA0 = (refs_io_cloudoffice_platform_cockpit_layout_Prop || (refs_io_cloudoffice_platform_cockpit_layout_Prop = io_cloudoffice_platform_cockpit_layout_Prop(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_layout_Prop_2(lcA1);
return stA0;

};
c['protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.onChange__VLio_cloudoffice_platform_cockpit_layout_Prop_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLio_cloudoffice_platform_cockpit_layout_Prop_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
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
    m = c.read__Lio_cloudoffice_platform_cockpit_layout_Prop_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = new io_cloudoffice_platform_cockpit_layout_Prop;
(refs_io_cloudoffice_platform_cockpit_layout_Prop || (refs_io_cloudoffice_platform_cockpit_layout_Prop = io_cloudoffice_platform_cockpit_layout_Prop(false))).constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_layout_Prop$1_2.call(stA0, lcA1, lcA2, null);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.cloneTo__Lio_cloudoffice_platform_cockpit_layout_Prop_2Lio_cloudoffice_platform_cockpit_layout_Prop_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = (refs_io_cloudoffice_platform_cockpit_layout_Prop || (refs_io_cloudoffice_platform_cockpit_layout_Prop = io_cloudoffice_platform_cockpit_layout_Prop(false))).access$400__Lio_cloudoffice_platform_cockpit_layout_Prop_2Lio_cloudoffice_platform_cockpit_layout_Prop_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_layout_Prop']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.layout.Prop');
lcA0.onMessage__VLio_cloudoffice_platform_cockpit_layout_Prop_2IILjava_lang_Object_2_3Ljava_lang_Object_2(lcA1, lcI2, lcI3, lcA4, lcA5);
return;

};
c['onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.onChange__VLjava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_layout_Prop']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.layout.Prop');
lcA0.onChange__VLio_cloudoffice_platform_cockpit_layout_Prop_2I(lcA1, lcI2);
return;

};
c['onChange__VLjava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = lcA0.read__Lio_cloudoffice_platform_cockpit_layout_Prop_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2(lcA1, lcA2);
return stA0;

};
c['read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_layout_Prop']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.layout.Prop');
var stA0 = lcA0.cloneTo__Lio_cloudoffice_platform_cockpit_layout_Prop_2Lio_cloudoffice_platform_cockpit_layout_Prop_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
c['cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_layout_Prop']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.layout.Prop');
lcA0.call__VLio_cloudoffice_platform_cockpit_layout_Prop_2ILjava_lang_Object_2Ljava_lang_Object_2(lcA1, lcI2, lcA3, lcA4);
return;

};
c['call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Ljava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_layout_Prop']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.layout.Prop');
var stA0 = lcA0.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_layout_Prop_2I(lcA1, lcI2);
return stA0;

};
c['getValue__Ljava_lang_Object_2Ljava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.setValue__VLjava_lang_Object_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_layout_Prop']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.layout.Prop');
lcA0.setValue__VLio_cloudoffice_platform_cockpit_layout_Prop_2ILjava_lang_Object_2(lcA1, lcI2, lcA3);
return;

};
c['setValue__VLjava_lang_Object_2ILjava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_layout_Prop$1_2 = function(lcA1) {
  var  lcA0 = this;
c.constructor.cons__V.call(lcA0);
return;

};
    m.access = 4096;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_layout_Prop$Html4JavaTypefillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_layout_Prop$Html4JavaType', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_layout_Prop$Html4JavaTypefillInstOf });
    io_cloudoffice_platform_cockpit_layout_Prop$Html4JavaTypefillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/layout/Prop$Html4JavaType';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_layout_Prop;
    var refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$PropComponent;
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
vm.io_cloudoffice_platform_cockpit_layout_Prop$Html4JavaType = io_cloudoffice_platform_cockpit_layout_Prop$Html4JavaType;


function io_cloudoffice_platform_cockpit_layout_LayoutComponent$PropComponent() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_layout_LayoutComponent$PropComponent;
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
CLS['cons__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.layoutAction__VLio_cloudoffice_platform_cockpit_layout_Prop_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = lcA0.getKey__Ljava_lang_String_2();
var stI0 = invoker.equalsIgnoreCase__ZLjava_lang_String_2(stA0,"layout");
if ((stI0) == 0) { gt = 59; break IF; }
if ((refs_io_cloudoffice_platform_cockpit_api_Components || (refs_io_cloudoffice_platform_cockpit_api_Components = vm.io_cloudoffice_platform_cockpit_api_Components(false)))['_LAYOUT']() !== null && !(refs_io_cloudoffice_platform_cockpit_api_Components || (refs_io_cloudoffice_platform_cockpit_api_Components = vm.io_cloudoffice_platform_cockpit_api_Components(false)))['_LAYOUT']()['$instOf_io_cloudoffice_platform_cockpit_layout_LayoutComponent']) vm.java_lang_Class(false).castEx((refs_io_cloudoffice_platform_cockpit_api_Components || (refs_io_cloudoffice_platform_cockpit_api_Components = vm.io_cloudoffice_platform_cockpit_api_Components(false)))['_LAYOUT'](), 'io.cloudoffice.platform.cockpit.layout.LayoutComponent');
var stA0 = invoker.getView__Ljava_lang_Object_2((refs_io_cloudoffice_platform_cockpit_api_Components || (refs_io_cloudoffice_platform_cockpit_api_Components = vm.io_cloudoffice_platform_cockpit_api_Components(false)))['_LAYOUT']());
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_layout_Layout']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.layout.Layout');
var stA0 = stA0.getId__Ljava_lang_String_2();
var stA1 = lcA0.getValue__Ljava_lang_String_2();
var stI0 = invoker.equalsIgnoreCase__ZLjava_lang_String_2(stA0,stA1);
if ((stI0) != 0) { gt = 59; break IF; }
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['builder__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2']();
var stA1 = "layout";var stA2 = lcA0.getValue__Ljava_lang_String_2();
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2(stA0,stA1, stA2);
var lcA1 = stA0;
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_Session || (refs_io_cloudoffice_platform_cockpit_api_Session = vm.io_cloudoffice_platform_cockpit_api_Session(false)))['getCompany__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2']();
var stA0 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(stA0,"itemId");
var lcA2 = stA0;
    }
    X_59: for (;;) { IF: if (gt <= 59) {
return;

    }
}}
};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_layout_LayoutComponent$PropComponentfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_layout_LayoutComponent$PropComponent', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_layout_LayoutComponent$PropComponentfillInstOf });
    io_cloudoffice_platform_cockpit_layout_LayoutComponent$PropComponentfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/layout/LayoutComponent$PropComponent';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 33;
    CLS.$class.cnstr = CLS;
    var refs_java_lang_Object;
    var refs_io_cloudoffice_platform_cockpit_api_Components;
    var refs_io_cloudoffice_platform_cockpit_api_MapBuilder;
    var refs_io_cloudoffice_platform_cockpit_api_Session;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_layout_LayoutComponent$PropComponent = registerClass(exports,'io_cloudoffice_platform_cockpit_layout_LayoutComponent$PropComponent',io_cloudoffice_platform_cockpit_layout_LayoutComponent$PropComponent);

vm.java_util_ArrayList = function() {
  var instance = arguments.length == 0 || arguments[0] === true;
  delete vm.java_util_ArrayList;
  return link('java/util/ArrayList', function(f) { vm.java_util_ArrayList = f;})(instance);
}
vm.java_util_regex_Pattern = function() {
  var instance = arguments.length == 0 || arguments[0] === true;
  delete vm.java_util_regex_Pattern;
  return link('java/util/regex/Pattern', function(f) { vm.java_util_regex_Pattern = f;})(instance);
}

function io_cloudoffice_platform_cockpit_layout_LayoutComponent$16() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_layout_LayoutComponent$16;
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
    m.access = 0;
    m.cls = CLS;
    m = c.handle__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;
(refs_io_cloudoffice_platform_cockpit_api_Logger || (refs_io_cloudoffice_platform_cockpit_api_Logger = vm.io_cloudoffice_platform_cockpit_api_Logger(false)))['log__VLjava_lang_String_2'](">>> Layout style properties saved successfully.");
var stA0 = invoker.getFlags__Ljava_util_Map_2((refs_io_cloudoffice_platform_cockpit_api_Components || (refs_io_cloudoffice_platform_cockpit_api_Components = vm.io_cloudoffice_platform_cockpit_api_Components(false)))['_LAYOUT']());
var stA1 = "designMode";var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](1);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_Event;
(refs_io_cloudoffice_platform_cockpit_api_Event || (refs_io_cloudoffice_platform_cockpit_api_Event = vm.io_cloudoffice_platform_cockpit_api_Event(false))).constructor['cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2'].call(stA0, "invokefunction", "invokefunction", "hideStylePanel");
var lcA2 = stA0;
var stA0 = (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent = io_cloudoffice_platform_cockpit_layout_LayoutComponent(false))).getDefaultInstance__Lio_cloudoffice_platform_cockpit_api_Component_2();
invoker.listen__VLio_cloudoffice_platform_cockpit_api_Signal_2(stA0,lcA2);
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_Event;
(refs_io_cloudoffice_platform_cockpit_api_Event || (refs_io_cloudoffice_platform_cockpit_api_Event = vm.io_cloudoffice_platform_cockpit_api_Event(false))).constructor['cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2'].call(stA0, "invokefunction", "invokefunction", "reloadStyle");
var lcA3 = stA0;
var stA0 = (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent = io_cloudoffice_platform_cockpit_layout_LayoutComponent(false))).getDefaultInstance__Lio_cloudoffice_platform_cockpit_api_Component_2();
invoker.listen__VLio_cloudoffice_platform_cockpit_api_Signal_2(stA0,lcA3);
return;

};
c['handle__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_layout_LayoutComponent$16fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_layout_LayoutComponent$16', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_CallBack(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_layout_LayoutComponent$16fillInstOf });
    io_cloudoffice_platform_cockpit_layout_LayoutComponent$16fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/layout/LayoutComponent$16';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_CallBack(false).constructor.$class
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
    var refs_java_lang_Object;
    var refs_io_cloudoffice_platform_cockpit_api_Logger;
    var refs_io_cloudoffice_platform_cockpit_api_Components;
    var refs_java_lang_Boolean;
    var refs_io_cloudoffice_platform_cockpit_api_Event;
    var refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_layout_LayoutComponent$16 = io_cloudoffice_platform_cockpit_layout_LayoutComponent$16;


function io_cloudoffice_platform_cockpit_layout_LayoutComponent$15() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_layout_LayoutComponent$15;
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
    m.access = 0;
    m.cls = CLS;
    m = c.handle__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;
(refs_io_cloudoffice_platform_cockpit_api_Logger || (refs_io_cloudoffice_platform_cockpit_api_Logger = vm.io_cloudoffice_platform_cockpit_api_Logger(false)))['log__VLjava_lang_String_2'](">>> Layout component style properties saved successfully.");
var stA0 = invoker.getFlags__Ljava_util_Map_2((refs_io_cloudoffice_platform_cockpit_api_Components || (refs_io_cloudoffice_platform_cockpit_api_Components = vm.io_cloudoffice_platform_cockpit_api_Components(false)))['_LAYOUT']());
var stA1 = "designMode";var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](1);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_Event;
(refs_io_cloudoffice_platform_cockpit_api_Event || (refs_io_cloudoffice_platform_cockpit_api_Event = vm.io_cloudoffice_platform_cockpit_api_Event(false))).constructor['cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2'].call(stA0, "invokefunction", "invokefunction", "hideStylePanel");
var lcA2 = stA0;
var stA0 = (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent = io_cloudoffice_platform_cockpit_layout_LayoutComponent(false))).getDefaultInstance__Lio_cloudoffice_platform_cockpit_api_Component_2();
invoker.listen__VLio_cloudoffice_platform_cockpit_api_Signal_2(stA0,lcA2);
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_Event;
(refs_io_cloudoffice_platform_cockpit_api_Event || (refs_io_cloudoffice_platform_cockpit_api_Event = vm.io_cloudoffice_platform_cockpit_api_Event(false))).constructor['cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2'].call(stA0, "invokefunction", "invokefunction", "reloadComponentStyle");
var lcA3 = stA0;
var stA0 = (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent = io_cloudoffice_platform_cockpit_layout_LayoutComponent(false))).getDefaultInstance__Lio_cloudoffice_platform_cockpit_api_Component_2();
invoker.listen__VLio_cloudoffice_platform_cockpit_api_Signal_2(stA0,lcA3);
return;

};
c['handle__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_layout_LayoutComponent$15fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_layout_LayoutComponent$15', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_CallBack(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_layout_LayoutComponent$15fillInstOf });
    io_cloudoffice_platform_cockpit_layout_LayoutComponent$15fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/layout/LayoutComponent$15';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_CallBack(false).constructor.$class
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
    var refs_java_lang_Object;
    var refs_io_cloudoffice_platform_cockpit_api_Logger;
    var refs_io_cloudoffice_platform_cockpit_api_Components;
    var refs_java_lang_Boolean;
    var refs_io_cloudoffice_platform_cockpit_api_Event;
    var refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_layout_LayoutComponent$15 = io_cloudoffice_platform_cockpit_layout_LayoutComponent$15;


function io_cloudoffice_platform_cockpit_layout_LayoutComponent$14() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_layout_LayoutComponent$14;
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
    m.access = 0;
    m.cls = CLS;
    m = c.handle__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = invoker.getFlags__Ljava_util_Map_2((refs_io_cloudoffice_platform_cockpit_api_Components || (refs_io_cloudoffice_platform_cockpit_api_Components = vm.io_cloudoffice_platform_cockpit_api_Components(false)))['_LAYOUT']());
var stA1 = "designMode";var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](1);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_Components || (refs_io_cloudoffice_platform_cockpit_api_Components = vm.io_cloudoffice_platform_cockpit_api_Components(false)))['_BOOT']();var stA1 = new vm.io_cloudoffice_platform_cockpit_api_Event;
(refs_io_cloudoffice_platform_cockpit_api_Event || (refs_io_cloudoffice_platform_cockpit_api_Event = vm.io_cloudoffice_platform_cockpit_api_Event(false))).constructor['cons__VLjava_lang_String_2Ljava_lang_String_2'].call(stA1, "boot", "boot");
invoker.listen__VLio_cloudoffice_platform_cockpit_api_Signal_2(stA0,stA1);
return;

};
c['handle__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_layout_LayoutComponent$14fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_layout_LayoutComponent$14', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_CallBack(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_layout_LayoutComponent$14fillInstOf });
    io_cloudoffice_platform_cockpit_layout_LayoutComponent$14fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/layout/LayoutComponent$14';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_CallBack(false).constructor.$class
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
    var refs_java_lang_Object;
    var refs_io_cloudoffice_platform_cockpit_api_Components;
    var refs_java_lang_Boolean;
    var refs_io_cloudoffice_platform_cockpit_api_Event;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_layout_LayoutComponent$14 = io_cloudoffice_platform_cockpit_layout_LayoutComponent$14;


function io_cloudoffice_platform_cockpit_layout_LayoutComponent$13() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_layout_LayoutComponent$13;
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
    m.access = 0;
    m.cls = CLS;
    m = c.handle__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_Event;
(refs_io_cloudoffice_platform_cockpit_api_Event || (refs_io_cloudoffice_platform_cockpit_api_Event = vm.io_cloudoffice_platform_cockpit_api_Event(false))).constructor['cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2'].call(stA0, "updatesubscribedcomponentlist", "invokefunction", lcA1);
var lcA2 = stA0;
var stA0 = (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent = io_cloudoffice_platform_cockpit_layout_LayoutComponent(false))).getDefaultInstance__Lio_cloudoffice_platform_cockpit_api_Component_2();
invoker.listen__VLio_cloudoffice_platform_cockpit_api_Signal_2(stA0,lcA2);
return;

};
c['handle__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_layout_LayoutComponent$13fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_layout_LayoutComponent$13', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_CallBack(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_layout_LayoutComponent$13fillInstOf });
    io_cloudoffice_platform_cockpit_layout_LayoutComponent$13fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/layout/LayoutComponent$13';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_CallBack(false).constructor.$class
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
    var refs_java_lang_Object;
    var refs_io_cloudoffice_platform_cockpit_api_Event;
    var refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_layout_LayoutComponent$13 = io_cloudoffice_platform_cockpit_layout_LayoutComponent$13;


function io_cloudoffice_platform_cockpit_layout_LayoutComponent$12() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_layout_LayoutComponent$12;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$component = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$12_val$component'] = v; return this['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$12_val$component']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_layout_ComponentDef_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$12_val$component'] = lcA1;
(refs_java_lang_Object || (refs_java_lang_Object = vm.java_lang_Object(false))).constructor['cons__V'].call(lcA0);
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.handle__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;
(refs_io_cloudoffice_platform_cockpit_api_Logger || (refs_io_cloudoffice_platform_cockpit_api_Logger = vm.io_cloudoffice_platform_cockpit_api_Logger(false)))['log__VLjava_lang_String_2'](">>> Component dropped successfully.");
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_Event;
(refs_io_cloudoffice_platform_cockpit_api_Event || (refs_io_cloudoffice_platform_cockpit_api_Event = vm.io_cloudoffice_platform_cockpit_api_Event(false))).constructor['cons__VLjava_lang_String_2Ljava_lang_String_2'].call(stA0, "loginsuccess", "loginsuccess");
var lcA2 = stA0;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$12_val$component'].getComponent__Ljava_lang_String_2();
var stA1 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$12_val$component'].getInstanceId__Ljava_lang_String_2();
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_Components || (refs_io_cloudoffice_platform_cockpit_api_Components = vm.io_cloudoffice_platform_cockpit_api_Components(false)))['get__Lio_cloudoffice_platform_cockpit_api_Component_2Ljava_lang_String_2Ljava_lang_String_2'](stA0, stA1);
invoker.listen__VLio_cloudoffice_platform_cockpit_api_Signal_2(stA0,lcA2);
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_Event;
(refs_io_cloudoffice_platform_cockpit_api_Event || (refs_io_cloudoffice_platform_cockpit_api_Event = vm.io_cloudoffice_platform_cockpit_api_Event(false))).constructor['cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2'].call(stA0, "invokefunction", "invokefunction", "updatelayout");
var lcA3 = stA0;
var stA0 = (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent = io_cloudoffice_platform_cockpit_layout_LayoutComponent(false))).getDefaultInstance__Lio_cloudoffice_platform_cockpit_api_Component_2();
invoker.listen__VLio_cloudoffice_platform_cockpit_api_Signal_2(stA0,lcA3);
return;

};
c['handle__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_layout_LayoutComponent$12fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_layout_LayoutComponent$12', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_CallBack(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_layout_LayoutComponent$12fillInstOf });
    io_cloudoffice_platform_cockpit_layout_LayoutComponent$12fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/layout/LayoutComponent$12';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_CallBack(false).constructor.$class
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
    var refs_java_lang_Object;
    var refs_io_cloudoffice_platform_cockpit_api_Logger;
    var refs_io_cloudoffice_platform_cockpit_api_Event;
    var refs_io_cloudoffice_platform_cockpit_api_Components;
    var refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$12_val$component'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_layout_LayoutComponent$12 = io_cloudoffice_platform_cockpit_layout_LayoutComponent$12;


function io_cloudoffice_platform_cockpit_layout_LayoutComponent$11() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_layout_LayoutComponent$11;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$componentdetails = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$11_val$componentdetails'] = v; return this['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$11_val$componentdetails']; };
  m = c._val$dropzonedetails = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$11_val$dropzonedetails'] = v; return this['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$11_val$dropzonedetails']; };
    m = CLS.cons__VLjava_lang_String_2Ljava_lang_String_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$11_val$componentdetails'] = lcA1;
lcA0['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$11_val$dropzonedetails'] = lcA2;
(refs_java_lang_Object || (refs_java_lang_Object = vm.java_lang_Object(false))).constructor['cons__V'].call(lcA0);
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.handle__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor;
(refs_io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor || (refs_io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor = vm.io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor(false))).constructor['cons__V'].call(stA0);
var stA1 = lcA1;var stA2 = new io_cloudoffice_platform_cockpit_layout_Layout;
(refs_io_cloudoffice_platform_cockpit_layout_Layout || (refs_io_cloudoffice_platform_cockpit_layout_Layout = io_cloudoffice_platform_cockpit_layout_Layout(false))).constructor.cons__V.call(stA2);
var stA0 = invoker.getObject__Ljava_lang_Object_2Ljava_lang_String_2Ljava_lang_Object_2(stA0,stA1, stA2);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_layout_Layout']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.layout.Layout');
var lcA2 = stA0;
(refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent = io_cloudoffice_platform_cockpit_layout_LayoutComponent(false))).dropComponentOnDropZone__VLio_cloudoffice_platform_cockpit_layout_Layout_2Ljava_lang_String_2Ljava_lang_String_2(lcA2, lcA0['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$11_val$componentdetails'], lcA0['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$11_val$dropzonedetails']);
return;

};
c['handle__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_layout_LayoutComponent$11fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_layout_LayoutComponent$11', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_CallBack(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_layout_LayoutComponent$11fillInstOf });
    io_cloudoffice_platform_cockpit_layout_LayoutComponent$11fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/layout/LayoutComponent$11';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_CallBack(false).constructor.$class
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
    var refs_java_lang_Object;
    var refs_io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor;
    var refs_io_cloudoffice_platform_cockpit_layout_Layout;
    var refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$11_val$componentdetails'] = null;
    this['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$11_val$dropzonedetails'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_layout_LayoutComponent$11 = io_cloudoffice_platform_cockpit_layout_LayoutComponent$11;

vm.java_lang_Integer = function() {
  var instance = arguments.length == 0 || arguments[0] === true;
  delete vm.java_lang_Integer;
  return link('java/lang/Integer', function(f) { vm.java_lang_Integer = f;})(instance);
}
vm.java_util_Arrays = function() {
  var instance = arguments.length == 0 || arguments[0] === true;
  delete vm.java_util_Arrays;
  return link('java/util/Arrays', function(f) { vm.java_util_Arrays = f;})(instance);
}

function io_cloudoffice_platform_cockpit_layout_LayoutComponent$10() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_layout_LayoutComponent$10;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$view = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$10_val$view'] = v; return this['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$10_val$view']; };
  m = c._val$component = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$10_val$component'] = v; return this['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$10_val$component']; };
  m = c._val$instance = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$10_val$instance'] = v; return this['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$10_val$instance']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_layout_Layout_2Ljava_lang_String_2Ljava_lang_String_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$10_val$view'] = lcA1;
lcA0['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$10_val$component'] = lcA2;
lcA0['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$10_val$instance'] = lcA3;
(refs_java_lang_Object || (refs_java_lang_Object = vm.java_lang_Object(false))).constructor['cons__V'].call(lcA0);
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.handle__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent = io_cloudoffice_platform_cockpit_layout_LayoutComponent(false))).access$300__Ljava_util_List_2Ljava_lang_String_2(lcA1);
var lcA2 = stA0;
lcA0['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$10_val$view'].setPropOn__VZ(1);
var stA0 = new io_cloudoffice_platform_cockpit_layout_Properties;
(refs_io_cloudoffice_platform_cockpit_layout_Properties || (refs_io_cloudoffice_platform_cockpit_layout_Properties = io_cloudoffice_platform_cockpit_layout_Properties(false))).constructor.cons__V.call(stA0);
var lcA3 = stA0;
var stA0 = lcA3;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA0['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$10_val$component']);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1," ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA0['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$10_val$instance']);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1," Config");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
stA0.setTitle__VLjava_lang_String_2(stA1);
lcA3.setId__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$10_val$instance']);
lcA3.setComponent__VZ(1);
lcA3.setConfig__VZ(1);
lcA3.setComponentName__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$10_val$component']);
lcA3.setInstanceId__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$10_val$instance']);
lcA0['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$10_val$view'].setPropPanel__VLio_cloudoffice_platform_cockpit_layout_Properties_2(lcA3);
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$10_val$view'].getPropPanel__Lio_cloudoffice_platform_cockpit_layout_Properties_2();
var stA0 = stA0.getProps__Ljava_util_List_2();
invoker.clear__V(stA0);
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$10_val$view'].getPropPanel__Lio_cloudoffice_platform_cockpit_layout_Properties_2();
var stA0 = stA0.getProps__Ljava_util_List_2();
var stI0 = invoker.addAll__ZLjava_util_Collection_2(stA0,lcA2);
return;

};
c['handle__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_layout_LayoutComponent$10fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_layout_LayoutComponent$10', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_CallBack(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_layout_LayoutComponent$10fillInstOf });
    io_cloudoffice_platform_cockpit_layout_LayoutComponent$10fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/layout/LayoutComponent$10';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_CallBack(false).constructor.$class
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
    var refs_java_lang_Object;
    var refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent;
    var refs_io_cloudoffice_platform_cockpit_layout_Properties;
    var refs_java_lang_StringBuilder;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$10_val$view'] = null;
    this['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$10_val$component'] = null;
    this['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$10_val$instance'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_layout_LayoutComponent$10 = io_cloudoffice_platform_cockpit_layout_LayoutComponent$10;


function io_cloudoffice_platform_cockpit_layout_Properties() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_layout_Properties;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_TYPE'] = null;
  m = c._TYPE = function (v) {  if (arguments.length == 1) CLS['fld_TYPE'] = v; return CLS['fld_TYPE']; };
  m = c._proto = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_layout_Properties_proto'] = v; return this['fld_io_cloudoffice_platform_cockpit_layout_Properties_proto']; };
  m = c._prop_id = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_layout_Properties_prop_id'] = v; return this['fld_io_cloudoffice_platform_cockpit_layout_Properties_prop_id']; };
  m = c._prop_title = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_layout_Properties_prop_title'] = v; return this['fld_io_cloudoffice_platform_cockpit_layout_Properties_prop_title']; };
  m = c._prop_component = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_layout_Properties_prop_component'] = v; return this['fld_io_cloudoffice_platform_cockpit_layout_Properties_prop_component']; };
  m = c._prop_config = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_layout_Properties_prop_config'] = v; return this['fld_io_cloudoffice_platform_cockpit_layout_Properties_prop_config']; };
  m = c._prop_componentName = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_layout_Properties_prop_componentName'] = v; return this['fld_io_cloudoffice_platform_cockpit_layout_Properties_prop_componentName']; };
  m = c._prop_instanceId = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_layout_Properties_prop_instanceId'] = v; return this['fld_io_cloudoffice_platform_cockpit_layout_Properties_prop_instanceId']; };
  m = c._prop_props = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_layout_Properties_prop_props'] = v; return this['fld_io_cloudoffice_platform_cockpit_layout_Properties_prop_props']; };
    m = c.modelFor__Ljava_lang_Class_2 = function() {
return (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$PropertiesComponent || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$PropertiesComponent = io_cloudoffice_platform_cockpit_layout_LayoutComponent$PropertiesComponent(false))).constructor.$class;

};
    m.access = 10;
    m.cls = CLS;
    m = c.getId__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Properties_proto'],"id");
return lcA0['fld_io_cloudoffice_platform_cockpit_layout_Properties_prop_id'];

};
c['getId__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setId__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Properties_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_Properties_prop_id'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_layout_Properties_prop_id'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Properties_proto'],"id", lcA2, lcA1);
return;

    }
}}
};
c['setId__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getTitle__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Properties_proto'],"title");
return lcA0['fld_io_cloudoffice_platform_cockpit_layout_Properties_prop_title'];

};
c['getTitle__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setTitle__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Properties_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_Properties_prop_title'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_layout_Properties_prop_title'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Properties_proto'],"title", lcA2, lcA1);
return;

    }
}}
};
c['setTitle__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isComponent__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Properties_proto'],"component");
return lcA0['fld_io_cloudoffice_platform_cockpit_layout_Properties_prop_component'];

};
c['isComponent__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setComponent__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Properties_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_layout_Properties_prop_component']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_layout_Properties_prop_component'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_Properties_proto'];var stA1 = "component";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2, stA3);
return;

    }
}}
};
c['setComponent__VZ'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isConfig__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Properties_proto'],"config");
return lcA0['fld_io_cloudoffice_platform_cockpit_layout_Properties_prop_config'];

};
c['isConfig__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setConfig__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Properties_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_layout_Properties_prop_config']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_layout_Properties_prop_config'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_Properties_proto'];var stA1 = "config";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2, stA3);
return;

    }
}}
};
c['setConfig__VZ'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getComponentName__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Properties_proto'],"componentName");
return lcA0['fld_io_cloudoffice_platform_cockpit_layout_Properties_prop_componentName'];

};
c['getComponentName__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setComponentName__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Properties_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_Properties_prop_componentName'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_layout_Properties_prop_componentName'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Properties_proto'],"componentName", lcA2, lcA1);
return;

    }
}}
};
c['setComponentName__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getInstanceId__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Properties_proto'],"instanceId");
return lcA0['fld_io_cloudoffice_platform_cockpit_layout_Properties_prop_instanceId'];

};
c['getInstanceId__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setInstanceId__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Properties_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_Properties_prop_instanceId'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_layout_Properties_prop_instanceId'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Properties_proto'],"instanceId", lcA2, lcA1);
return;

    }
}}
};
c['setInstanceId__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getProps__Ljava_util_List_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Properties_proto'],"props");
return lcA0['fld_io_cloudoffice_platform_cockpit_layout_Properties_prop_props'];

};
c['getProps__Ljava_util_List_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;
(refs_java_lang_Object || (refs_java_lang_Object = vm.java_lang_Object(false))).constructor['cons__V'].call(lcA0);
var stA0 = lcA0;var stA1 = invoker.createProto__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2(c._TYPE(),lcA0, lcA1);
stA0['fld_io_cloudoffice_platform_cockpit_layout_Properties_proto'] = stA1;
var stA0 = lcA0;var stA1 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_Properties_proto'];var stA2 = "props";var stI3 = -1;var stA4 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, 0);
var stA1 = invoker.createList__Ljava_util_List_2Ljava_lang_String_2I_3Ljava_lang_String_2(stA1,stA2, stI3, stA4);
stA0['fld_io_cloudoffice_platform_cockpit_layout_Properties_prop_props'] = stA1;
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
    m = CLS.cons__VLjava_lang_String_2Ljava_lang_String_2ZZLjava_lang_String_2Ljava_lang_String_2_3Lio_cloudoffice_platform_cockpit_layout_Prop_2 = function(lcA1, lcA2, lcI3, lcI4, lcA5, lcA6, lcA7) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = (refs_net_java_html_BrwsrCtx || (refs_net_java_html_BrwsrCtx = vm.net_java_html_BrwsrCtx(false)))['findDefault__Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'](c.constructor.$class);
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, stA1);
lcA0['fld_io_cloudoffice_platform_cockpit_layout_Properties_prop_id'] = lcA1;
lcA0['fld_io_cloudoffice_platform_cockpit_layout_Properties_prop_title'] = lcA2;
lcA0['fld_io_cloudoffice_platform_cockpit_layout_Properties_prop_component'] = lcI3;
lcA0['fld_io_cloudoffice_platform_cockpit_layout_Properties_prop_config'] = lcI4;
lcA0['fld_io_cloudoffice_platform_cockpit_layout_Properties_prop_componentName'] = lcA5;
lcA0['fld_io_cloudoffice_platform_cockpit_layout_Properties_prop_instanceId'] = lcA6;
invoker.initTo__VLjava_util_Collection_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Properties_proto'],lcA0['fld_io_cloudoffice_platform_cockpit_layout_Properties_prop_props'], lcA7);
return;

};
CLS['cons__VLjava_lang_String_2Ljava_lang_String_2ZZLjava_lang_String_2Ljava_lang_String_2_3Lio_cloudoffice_platform_cockpit_layout_Prop_2'] = m;

    m.access = 129;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, (7));
var lcA3 = stA0;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_Properties_proto'];var stA1 = lcA2;var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, (7));
Array.at(stA2, 0, "id");
Array.at(stA2, 1, "title");
Array.at(stA2, 2, "component");
Array.at(stA2, 3, "config");
Array.at(stA2, 4, "componentName");
Array.at(stA2, 5, "instanceId");
Array.at(stA2, (6), "props");
invoker.extract__VLjava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Object_2(stA0,stA1, stA2, lcA3);
if ((lcA3[0] || Array.at(lcA3, 0)) !== null && !(lcA3[0] || Array.at(lcA3, 0))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[0] || Array.at(lcA3, 0)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_layout_Properties_prop_id'] = (lcA3[0] || Array.at(lcA3, 0));
if ((lcA3[1] || Array.at(lcA3, 1)) !== null && !(lcA3[1] || Array.at(lcA3, 1))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[1] || Array.at(lcA3, 1)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_layout_Properties_prop_title'] = (lcA3[1] || Array.at(lcA3, 1));
var stA0 = lcA0;if (((lcA3[2] || Array.at(lcA3, 2))) !== null) { gt = 92; break IF; }
var stI1 = 0;{ gt = 104; break IF; }
    }
    X_92: for (;;) { IF: if (gt <= 92) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[2] || Array.at(lcA3, 2)));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_104: for (;;) { IF: if (gt <= 104) {
stA0['fld_io_cloudoffice_platform_cockpit_layout_Properties_prop_component'] = stI1;
var stA0 = lcA0;if (((lcA3[3] || Array.at(lcA3, 3))) !== null) { gt = 118; break IF; }
var stI1 = 0;{ gt = 130; break IF; }
    }
    X_118: for (;;) { IF: if (gt <= 118) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[3] || Array.at(lcA3, 3)));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_130: for (;;) { IF: if (gt <= 130) {
stA0['fld_io_cloudoffice_platform_cockpit_layout_Properties_prop_config'] = stI1;
if ((lcA3[4] || Array.at(lcA3, 4)) !== null && !(lcA3[4] || Array.at(lcA3, 4))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[4] || Array.at(lcA3, 4)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_layout_Properties_prop_componentName'] = (lcA3[4] || Array.at(lcA3, 4));
if ((lcA3[5] || Array.at(lcA3, 5)) !== null && !(lcA3[5] || Array.at(lcA3, 5))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[5] || Array.at(lcA3, 5)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_layout_Properties_prop_instanceId'] = (lcA3[5] || Array.at(lcA3, 5));
var stA0 = c.useAsArray___3Ljava_lang_Object_2Ljava_lang_Object_2((lcA3[(6)] || Array.at(lcA3, (6))));
var lcA4 = stA0;
var lcI5 = (lcA4).length;
var lcI6 = 0;
    }
    X_170: for (;;) { IF: if (gt <= 170) {

if ((lcI6) >= (lcI5)) { gt = 211; break IF; }
var lcA7 = (lcA4[lcI6] || Array.at(lcA4, lcI6));
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_Properties_prop_props'];var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Properties_proto'],(refs_io_cloudoffice_platform_cockpit_layout_Prop || (refs_io_cloudoffice_platform_cockpit_layout_Prop = io_cloudoffice_platform_cockpit_layout_Prop(false))).constructor.$class, lcA7);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,stA1);
lcI6++;
{ gt = 0; continue X_170; }
    }
    X_211: for (;;) { IF: if (gt <= 211) {
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
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"id");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getId__Ljava_lang_String_2();
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
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"component");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stI2 = lcA0.isComponent__Z();
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI2);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"config");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stI2 = lcA0.isConfig__Z();
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI2);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"componentName");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getComponentName__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"instanceId");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getInstanceId__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"props");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_layout_Properties_prop_props']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(125));
var stA0 = invoker.toString__Ljava_lang_String_2(lcA1);
return stA0;

};
c['toString__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Lio_cloudoffice_platform_cockpit_layout_Properties_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Properties_proto']);
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_layout_Properties_2Lnet_java_html_BrwsrCtx_2.call(stA0, stA1);
return stA0;

};
c['clone__Lio_cloudoffice_platform_cockpit_layout_Properties_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Lio_cloudoffice_platform_cockpit_layout_Properties_2Lnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = new io_cloudoffice_platform_cockpit_layout_Properties;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, lcA1);
var lcA2 = stA0;
var stA0 = lcA2;var stA1 = lcA0.getId__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_layout_Properties_prop_id'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getTitle__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_layout_Properties_prop_title'] = stA1;
var stA0 = lcA2;var stI1 = lcA0.isComponent__Z();
stA0['fld_io_cloudoffice_platform_cockpit_layout_Properties_prop_component'] = stI1;
var stA0 = lcA2;var stI1 = lcA0.isConfig__Z();
stA0['fld_io_cloudoffice_platform_cockpit_layout_Properties_prop_config'] = stI1;
var stA0 = lcA2;var stA1 = lcA0.getComponentName__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_layout_Properties_prop_componentName'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getInstanceId__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_layout_Properties_prop_instanceId'] = stA1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_Properties_proto'];var stA1 = lcA2.getProps__Ljava_util_List_2();
invoker.cloneList__VLjava_util_Collection_2Lnet_java_html_BrwsrCtx_2Ljava_util_Collection_2(stA0,stA1, lcA1, lcA0['fld_io_cloudoffice_platform_cockpit_layout_Properties_prop_props']);
return lcA2;

};
    m.access = 2;
    m.cls = CLS;
    m = c.applyBindings__Lio_cloudoffice_platform_cockpit_layout_Properties_2 = function() {
  var  lcA0 = this;
invoker.applyBindings__V(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Properties_proto']);
return lcA0;

};
c['applyBindings__Lio_cloudoffice_platform_cockpit_layout_Properties_2'] = m;

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

var stI0 = lcA1 != null && lcA1['$instOf_io_cloudoffice_platform_cockpit_layout_Properties'] ? 1 : 0;
if ((stI0) != 0) { gt = 16; break IF; }
return 0;
    }
    X_16: for (;;) { IF: if (gt <= 16) {

if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_layout_Properties']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.layout.Properties');
var lcA2 = lcA1;
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_layout_Properties_prop_id'], lcA2['fld_io_cloudoffice_platform_cockpit_layout_Properties_prop_id']);
if ((stI0) != 0) { gt = 40; break IF; }
return 0;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_layout_Properties_prop_title'], lcA2['fld_io_cloudoffice_platform_cockpit_layout_Properties_prop_title']);
if ((stI0) != 0) { gt = 59; break IF; }
return 0;
    }
    X_59: for (;;) { IF: if (gt <= 59) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_layout_Properties_prop_component']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_layout_Properties_prop_component']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 84; break IF; }
return 0;
    }
    X_84: for (;;) { IF: if (gt <= 84) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_layout_Properties_prop_config']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_layout_Properties_prop_config']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 109; break IF; }
return 0;
    }
    X_109: for (;;) { IF: if (gt <= 109) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_layout_Properties_prop_componentName'], lcA2['fld_io_cloudoffice_platform_cockpit_layout_Properties_prop_componentName']);
if ((stI0) != 0) { gt = 128; break IF; }
return 0;
    }
    X_128: for (;;) { IF: if (gt <= 128) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_layout_Properties_prop_instanceId'], lcA2['fld_io_cloudoffice_platform_cockpit_layout_Properties_prop_instanceId']);
if ((stI0) != 0) { gt = 147; break IF; }
return 0;
    }
    X_147: for (;;) { IF: if (gt <= 147) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_layout_Properties_prop_props']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_layout_Properties_prop_props']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 174; break IF; }
return 0;
    }
    X_174: for (;;) { IF: if (gt <= 174) {

return 1;

    }
}}}}}}}}}}
};
c['equals__ZLjava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.hashCode__I = function() {
  var  lcA0 = this;
var stA0 = invoker.getName__Ljava_lang_String_2(c.constructor.$class);
var stI0 = invoker.hashCode__I(stA0);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_layout_Properties_prop_id'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_layout_Properties_prop_title'], lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_layout_Properties_prop_component']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_layout_Properties_prop_config']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_layout_Properties_prop_componentName'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_layout_Properties_prop_instanceId'], lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_layout_Properties_prop_props']);
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
var stA0 = lcA0.clone__Lio_cloudoffice_platform_cockpit_layout_Properties_2();
return stA0;

};
c['clone__Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.access$100__Lio_cloudoffice_platform_cockpit_layout_Properties$Html4JavaType_2 = function() {
return c._TYPE();

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_layout_Properties_2 = function(lcA0) {
return lcA0['fld_io_cloudoffice_platform_cockpit_layout_Properties_proto'];

};
    m.access = 4104;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_layout_Properties$1_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2.call(lcA0, lcA1, lcA2);
return;

};
    m.access = 4096;
    m.cls = CLS;
    m = c.access$400__Lio_cloudoffice_platform_cockpit_layout_Properties_2Lio_cloudoffice_platform_cockpit_layout_Properties_2Lnet_java_html_BrwsrCtx_2 = function(lcA0, lcA1) {
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_layout_Properties_2Lnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
return stA0;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new io_cloudoffice_platform_cockpit_layout_Properties$Html4JavaType;
(refs_io_cloudoffice_platform_cockpit_layout_Properties$Html4JavaType || (refs_io_cloudoffice_platform_cockpit_layout_Properties$Html4JavaType = io_cloudoffice_platform_cockpit_layout_Properties$Html4JavaType(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_layout_Properties$1_2.call(stA0, null);
c._TYPE(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_layout_PropertiesfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_layout_Properties', { value : true });
      vm.java_lang_Cloneable(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_layout_PropertiesfillInstOf });
    io_cloudoffice_platform_cockpit_layout_PropertiesfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/layout/Properties';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.java_lang_Cloneable(false).constructor.$class
    ]; };
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$PropertiesComponent;
    var refs_java_lang_Boolean;
    var refs_java_lang_Object;
    var refs_net_java_html_BrwsrCtx;
    var refs_io_cloudoffice_platform_cockpit_layout_Prop;
    var refs_java_lang_StringBuilder;
    var refs_io_cloudoffice_platform_cockpit_layout_Properties$Html4JavaType;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_layout_Properties_proto'] = null;
    this['fld_io_cloudoffice_platform_cockpit_layout_Properties_prop_id'] = null;
    this['fld_io_cloudoffice_platform_cockpit_layout_Properties_prop_title'] = null;
    this['fld_io_cloudoffice_platform_cockpit_layout_Properties_prop_component'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_layout_Properties_prop_config'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_layout_Properties_prop_componentName'] = null;
    this['fld_io_cloudoffice_platform_cockpit_layout_Properties_prop_instanceId'] = null;
    this['fld_io_cloudoffice_platform_cockpit_layout_Properties_prop_props'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_layout_Properties = registerClass(exports,'io_cloudoffice_platform_cockpit_layout_Properties',io_cloudoffice_platform_cockpit_layout_Properties);


function io_cloudoffice_platform_cockpit_layout_Properties$Html4JavaType() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_layout_Properties$Html4JavaType;
  if (!CLS.$class) {
    var pp = vm.org_netbeans_html_json_spi_Proto$Type(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_org_netbeans_html_json_spi_Proto$Type || (refs_org_netbeans_html_json_spi_Proto$Type = vm.org_netbeans_html_json_spi_Proto$Type(false))).constructor['cons__VLjava_lang_Class_2Ljava_lang_Class_2II'].call(lcA0, (refs_io_cloudoffice_platform_cockpit_layout_Properties || (refs_io_cloudoffice_platform_cockpit_layout_Properties = io_cloudoffice_platform_cockpit_layout_Properties(false))).constructor.$class, (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$PropertiesComponent || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$PropertiesComponent = io_cloudoffice_platform_cockpit_layout_LayoutComponent$PropertiesComponent(false))).constructor.$class, (7), 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"id", 0, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"title", 1, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"component", 2, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"config", 3, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"componentName", 4, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"instanceId", 5, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"props", (6), 0, 0);
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.setValue__VLio_cloudoffice_platform_cockpit_layout_Properties_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0:{ gt = 44; break IF; }
  case 1:{ gt = 61; break IF; }
  case 2:{ gt = 78; break IF; }
  case 3:{ gt = 98; break IF; }
  case 4:{ gt = 118; break IF; }
  case 5:{ gt = 135; break IF; }
  case 6:{ gt = 152; break IF; }
  default: { gt = 166; break IF; }
}
    }
    X_44: for (;;) { IF: if (gt <= 44) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_layout_Properties || (refs_io_cloudoffice_platform_cockpit_layout_Properties = io_cloudoffice_platform_cockpit_layout_Properties(false))).access$100__Lio_cloudoffice_platform_cockpit_layout_Properties$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setId__VLjava_lang_String_2(stA1);
return;
    }
    X_61: for (;;) { IF: if (gt <= 61) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_layout_Properties || (refs_io_cloudoffice_platform_cockpit_layout_Properties = io_cloudoffice_platform_cockpit_layout_Properties(false))).access$100__Lio_cloudoffice_platform_cockpit_layout_Properties$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setTitle__VLjava_lang_String_2(stA1);
return;
    }
    X_78: for (;;) { IF: if (gt <= 78) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_layout_Properties || (refs_io_cloudoffice_platform_cockpit_layout_Properties = io_cloudoffice_platform_cockpit_layout_Properties(false))).access$100__Lio_cloudoffice_platform_cockpit_layout_Properties$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setComponent__VZ(stI1);
return;
    }
    X_98: for (;;) { IF: if (gt <= 98) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_layout_Properties || (refs_io_cloudoffice_platform_cockpit_layout_Properties = io_cloudoffice_platform_cockpit_layout_Properties(false))).access$100__Lio_cloudoffice_platform_cockpit_layout_Properties$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setConfig__VZ(stI1);
return;
    }
    X_118: for (;;) { IF: if (gt <= 118) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_layout_Properties || (refs_io_cloudoffice_platform_cockpit_layout_Properties = io_cloudoffice_platform_cockpit_layout_Properties(false))).access$100__Lio_cloudoffice_platform_cockpit_layout_Properties$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setComponentName__VLjava_lang_String_2(stA1);
return;
    }
    X_135: for (;;) { IF: if (gt <= 135) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_layout_Properties || (refs_io_cloudoffice_platform_cockpit_layout_Properties = io_cloudoffice_platform_cockpit_layout_Properties(false))).access$100__Lio_cloudoffice_platform_cockpit_layout_Properties$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setInstanceId__VLjava_lang_String_2(stA1);
return;
    }
    X_152: for (;;) { IF: if (gt <= 152) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_layout_Properties || (refs_io_cloudoffice_platform_cockpit_layout_Properties = io_cloudoffice_platform_cockpit_layout_Properties(false))).access$100__Lio_cloudoffice_platform_cockpit_layout_Properties$Html4JavaType_2();
var stA1 = lcA1.getProps__Ljava_util_List_2();
invoker.replaceValue__VLjava_util_Collection_2Ljava_lang_Class_2Ljava_lang_Object_2(stA0,stA1, (refs_io_cloudoffice_platform_cockpit_layout_Prop || (refs_io_cloudoffice_platform_cockpit_layout_Prop = io_cloudoffice_platform_cockpit_layout_Prop(false))).constructor.$class, lcA3);
return;
    }
    X_166: for (;;) { IF: if (gt <= 166) {
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

    }
}}}}}}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_layout_Properties_2I = function(lcA1, lcI2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0:{ gt = 44; break IF; }
  case 1:{ gt = 49; break IF; }
  case 2:{ gt = 54; break IF; }
  case 3:{ gt = 62; break IF; }
  case 4:{ gt = 70; break IF; }
  case 5:{ gt = 75; break IF; }
  case 6:{ gt = 80; break IF; }
  default: { gt = 85; break IF; }
}
    }
    X_44: for (;;) { IF: if (gt <= 44) {

var stA0 = lcA1.getId__Ljava_lang_String_2();
return stA0;
    }
    X_49: for (;;) { IF: if (gt <= 49) {

var stA0 = lcA1.getTitle__Ljava_lang_String_2();
return stA0;
    }
    X_54: for (;;) { IF: if (gt <= 54) {

var stI0 = lcA1.isComponent__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_62: for (;;) { IF: if (gt <= 62) {

var stI0 = lcA1.isConfig__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_70: for (;;) { IF: if (gt <= 70) {

var stA0 = lcA1.getComponentName__Ljava_lang_String_2();
return stA0;
    }
    X_75: for (;;) { IF: if (gt <= 75) {

var stA0 = lcA1.getInstanceId__Ljava_lang_String_2();
return stA0;
    }
    X_80: for (;;) { IF: if (gt <= 80) {

var stA0 = lcA1.getProps__Ljava_util_List_2();
return stA0;
    }
    X_85: for (;;) { IF: if (gt <= 85) {
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

    }
}}}}}}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.call__VLio_cloudoffice_platform_cockpit_layout_Properties_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_layout_Properties']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.layout.Properties');
var stA0 = (refs_io_cloudoffice_platform_cockpit_layout_Properties || (refs_io_cloudoffice_platform_cockpit_layout_Properties = io_cloudoffice_platform_cockpit_layout_Properties(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_layout_Properties_2(lcA1);
return stA0;

};
c['protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.onChange__VLio_cloudoffice_platform_cockpit_layout_Properties_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLio_cloudoffice_platform_cockpit_layout_Properties_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
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
    m = c.read__Lio_cloudoffice_platform_cockpit_layout_Properties_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = new io_cloudoffice_platform_cockpit_layout_Properties;
(refs_io_cloudoffice_platform_cockpit_layout_Properties || (refs_io_cloudoffice_platform_cockpit_layout_Properties = io_cloudoffice_platform_cockpit_layout_Properties(false))).constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_layout_Properties$1_2.call(stA0, lcA1, lcA2, null);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.cloneTo__Lio_cloudoffice_platform_cockpit_layout_Properties_2Lio_cloudoffice_platform_cockpit_layout_Properties_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = (refs_io_cloudoffice_platform_cockpit_layout_Properties || (refs_io_cloudoffice_platform_cockpit_layout_Properties = io_cloudoffice_platform_cockpit_layout_Properties(false))).access$400__Lio_cloudoffice_platform_cockpit_layout_Properties_2Lio_cloudoffice_platform_cockpit_layout_Properties_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_layout_Properties']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.layout.Properties');
lcA0.onMessage__VLio_cloudoffice_platform_cockpit_layout_Properties_2IILjava_lang_Object_2_3Ljava_lang_Object_2(lcA1, lcI2, lcI3, lcA4, lcA5);
return;

};
c['onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.onChange__VLjava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_layout_Properties']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.layout.Properties');
lcA0.onChange__VLio_cloudoffice_platform_cockpit_layout_Properties_2I(lcA1, lcI2);
return;

};
c['onChange__VLjava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = lcA0.read__Lio_cloudoffice_platform_cockpit_layout_Properties_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2(lcA1, lcA2);
return stA0;

};
c['read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_layout_Properties']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.layout.Properties');
var stA0 = lcA0.cloneTo__Lio_cloudoffice_platform_cockpit_layout_Properties_2Lio_cloudoffice_platform_cockpit_layout_Properties_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
c['cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_layout_Properties']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.layout.Properties');
lcA0.call__VLio_cloudoffice_platform_cockpit_layout_Properties_2ILjava_lang_Object_2Ljava_lang_Object_2(lcA1, lcI2, lcA3, lcA4);
return;

};
c['call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Ljava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_layout_Properties']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.layout.Properties');
var stA0 = lcA0.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_layout_Properties_2I(lcA1, lcI2);
return stA0;

};
c['getValue__Ljava_lang_Object_2Ljava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.setValue__VLjava_lang_Object_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_layout_Properties']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.layout.Properties');
lcA0.setValue__VLio_cloudoffice_platform_cockpit_layout_Properties_2ILjava_lang_Object_2(lcA1, lcI2, lcA3);
return;

};
c['setValue__VLjava_lang_Object_2ILjava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_layout_Properties$1_2 = function(lcA1) {
  var  lcA0 = this;
c.constructor.cons__V.call(lcA0);
return;

};
    m.access = 4096;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_layout_Properties$Html4JavaTypefillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_layout_Properties$Html4JavaType', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_layout_Properties$Html4JavaTypefillInstOf });
    io_cloudoffice_platform_cockpit_layout_Properties$Html4JavaTypefillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/layout/Properties$Html4JavaType';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_layout_Properties;
    var refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$PropertiesComponent;
    var refs_org_netbeans_html_json_spi_Proto$Type;
    var refs_java_lang_String;
    var refs_java_lang_Boolean;
    var refs_io_cloudoffice_platform_cockpit_layout_Prop;
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
vm.io_cloudoffice_platform_cockpit_layout_Properties$Html4JavaType = io_cloudoffice_platform_cockpit_layout_Properties$Html4JavaType;


function io_cloudoffice_platform_cockpit_layout_LayoutComponent$PropertiesComponent() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_layout_LayoutComponent$PropertiesComponent;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._this$0 = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$PropertiesComponent_this$0'] = v; return this['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$PropertiesComponent_this$0']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_layout_LayoutComponent_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$PropertiesComponent_this$0'] = lcA1;
(refs_java_lang_Object || (refs_java_lang_Object = vm.java_lang_Object(false))).constructor['cons__V'].call(lcA0);
return;

};
CLS['cons__VLio_cloudoffice_platform_cockpit_layout_LayoutComponent_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_layout_LayoutComponent$PropertiesComponentfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_layout_LayoutComponent$PropertiesComponent', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_layout_LayoutComponent$PropertiesComponentfillInstOf });
    io_cloudoffice_platform_cockpit_layout_LayoutComponent$PropertiesComponentfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/layout/LayoutComponent$PropertiesComponent';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 33;
    CLS.$class.cnstr = CLS;
    var refs_java_lang_Object;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$PropertiesComponent_this$0'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_layout_LayoutComponent$PropertiesComponent = registerClass(exports,'io_cloudoffice_platform_cockpit_layout_LayoutComponent$PropertiesComponent',io_cloudoffice_platform_cockpit_layout_LayoutComponent$PropertiesComponent);


function io_cloudoffice_platform_cockpit_layout_LayoutComponent$9() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_layout_LayoutComponent$9;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$view = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$9_val$view'] = v; return this['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$9_val$view']; };
  m = c._val$component = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$9_val$component'] = v; return this['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$9_val$component']; };
  m = c._val$instance = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$9_val$instance'] = v; return this['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$9_val$instance']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_layout_Layout_2Ljava_lang_String_2Ljava_lang_String_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$9_val$view'] = lcA1;
lcA0['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$9_val$component'] = lcA2;
lcA0['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$9_val$instance'] = lcA3;
(refs_java_lang_Object || (refs_java_lang_Object = vm.java_lang_Object(false))).constructor['cons__V'].call(lcA0);
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.handle__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent = io_cloudoffice_platform_cockpit_layout_LayoutComponent(false))).access$300__Ljava_util_List_2Ljava_lang_String_2(lcA1);
var lcA2 = stA0;
lcA0['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$9_val$view'].setPropOn__VZ(1);
var stA0 = new io_cloudoffice_platform_cockpit_layout_Properties;
(refs_io_cloudoffice_platform_cockpit_layout_Properties || (refs_io_cloudoffice_platform_cockpit_layout_Properties = io_cloudoffice_platform_cockpit_layout_Properties(false))).constructor.cons__V.call(stA0);
var lcA3 = stA0;
var stA0 = lcA3;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA0['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$9_val$component']);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1," ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA0['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$9_val$instance']);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1," Style");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
stA0.setTitle__VLjava_lang_String_2(stA1);
lcA3.setId__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$9_val$instance']);
lcA3.setComponent__VZ(1);
lcA3.setComponentName__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$9_val$component']);
lcA3.setInstanceId__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$9_val$instance']);
lcA0['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$9_val$view'].setPropPanel__VLio_cloudoffice_platform_cockpit_layout_Properties_2(lcA3);
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$9_val$view'].getPropPanel__Lio_cloudoffice_platform_cockpit_layout_Properties_2();
var stA0 = stA0.getProps__Ljava_util_List_2();
invoker.clear__V(stA0);
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$9_val$view'].getPropPanel__Lio_cloudoffice_platform_cockpit_layout_Properties_2();
var stA0 = stA0.getProps__Ljava_util_List_2();
var stI0 = invoker.addAll__ZLjava_util_Collection_2(stA0,lcA2);
return;

};
c['handle__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_layout_LayoutComponent$9fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_layout_LayoutComponent$9', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_CallBack(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_layout_LayoutComponent$9fillInstOf });
    io_cloudoffice_platform_cockpit_layout_LayoutComponent$9fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/layout/LayoutComponent$9';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_CallBack(false).constructor.$class
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
    var refs_java_lang_Object;
    var refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent;
    var refs_io_cloudoffice_platform_cockpit_layout_Properties;
    var refs_java_lang_StringBuilder;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$9_val$view'] = null;
    this['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$9_val$component'] = null;
    this['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$9_val$instance'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_layout_LayoutComponent$9 = io_cloudoffice_platform_cockpit_layout_LayoutComponent$9;


function io_cloudoffice_platform_cockpit_layout_LayoutComponent$8() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_layout_LayoutComponent$8;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$view = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$8_val$view'] = v; return this['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$8_val$view']; };
  m = c._val$id = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$8_val$id'] = v; return this['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$8_val$id']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_layout_Layout_2Ljava_lang_String_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$8_val$view'] = lcA1;
lcA0['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$8_val$id'] = lcA2;
(refs_java_lang_Object || (refs_java_lang_Object = vm.java_lang_Object(false))).constructor['cons__V'].call(lcA0);
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.handle__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent = io_cloudoffice_platform_cockpit_layout_LayoutComponent(false))).access$300__Ljava_util_List_2Ljava_lang_String_2(lcA1);
var lcA2 = stA0;
lcA0['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$8_val$view'].setPropOn__VZ(1);
var stA0 = new io_cloudoffice_platform_cockpit_layout_Properties;
(refs_io_cloudoffice_platform_cockpit_layout_Properties || (refs_io_cloudoffice_platform_cockpit_layout_Properties = io_cloudoffice_platform_cockpit_layout_Properties(false))).constructor.cons__V.call(stA0);
var lcA3 = stA0;
lcA3.setId__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$8_val$id']);
lcA3.setTitle__VLjava_lang_String_2("Style Panel");
lcA0['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$8_val$view'].setPropPanel__VLio_cloudoffice_platform_cockpit_layout_Properties_2(lcA3);
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$8_val$view'].getPropPanel__Lio_cloudoffice_platform_cockpit_layout_Properties_2();
var stA0 = stA0.getProps__Ljava_util_List_2();
invoker.clear__V(stA0);
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$8_val$view'].getPropPanel__Lio_cloudoffice_platform_cockpit_layout_Properties_2();
var stA0 = stA0.getProps__Ljava_util_List_2();
var stI0 = invoker.addAll__ZLjava_util_Collection_2(stA0,lcA2);
return;

};
c['handle__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_layout_LayoutComponent$8fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_layout_LayoutComponent$8', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_CallBack(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_layout_LayoutComponent$8fillInstOf });
    io_cloudoffice_platform_cockpit_layout_LayoutComponent$8fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/layout/LayoutComponent$8';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_CallBack(false).constructor.$class
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
    var refs_java_lang_Object;
    var refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent;
    var refs_io_cloudoffice_platform_cockpit_layout_Properties;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$8_val$view'] = null;
    this['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$8_val$id'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_layout_LayoutComponent$8 = io_cloudoffice_platform_cockpit_layout_LayoutComponent$8;


function io_cloudoffice_platform_cockpit_layout_LayoutComponent$7() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_layout_LayoutComponent$7;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$layout = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$7_val$layout'] = v; return this['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$7_val$layout']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_layout_Layout_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$7_val$layout'] = lcA1;
(refs_java_lang_Object || (refs_java_lang_Object = vm.java_lang_Object(false))).constructor['cons__V'].call(lcA0);
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.handle__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$7_val$layout'].getProps__Ljava_util_List_2();
invoker.clear__V(stA0);
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['query__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2'](lcA1);
var stA0 = invoker.getArray___3Ljava_lang_Object_2Ljava_lang_String_2(stA0,"themes");
var lcA2 = stA0;
var lcA3 = lcA2;
var lcI4 = (lcA3).length;
var lcI5 = 0;
    }
    X_31: for (;;) { IF: if (gt <= 31) {

if ((lcI5) >= (lcI4)) { gt = 77; break IF; }
var lcA6 = (lcA3[lcI5] || Array.at(lcA3, lcI5));
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$7_val$layout'].getProps__Ljava_util_List_2();
var stA1 = new io_cloudoffice_platform_cockpit_layout_Prop;
var stA2 = stA1;var stA3 = "theme";var stA4 = (refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false)))['valueOf__Ljava_lang_String_2Ljava_lang_Object_2'](lcA6);
(refs_io_cloudoffice_platform_cockpit_layout_Prop || (refs_io_cloudoffice_platform_cockpit_layout_Prop = io_cloudoffice_platform_cockpit_layout_Prop(false))).constructor.cons__VLjava_lang_String_2Ljava_lang_String_2.call(stA2, stA3, stA4);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,stA1);
lcI5++;
{ gt = 0; continue X_31; }
    }
    X_77: for (;;) { IF: if (gt <= 77) {
return;

    }
}}}
};
c['handle__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_layout_LayoutComponent$7fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_layout_LayoutComponent$7', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_CallBack(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_layout_LayoutComponent$7fillInstOf });
    io_cloudoffice_platform_cockpit_layout_LayoutComponent$7fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/layout/LayoutComponent$7';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_CallBack(false).constructor.$class
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
    var refs_java_lang_Object;
    var refs_io_cloudoffice_platform_cockpit_api_MapBuilder;
    var refs_java_lang_String;
    var refs_io_cloudoffice_platform_cockpit_layout_Prop;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$7_val$layout'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_layout_LayoutComponent$7 = io_cloudoffice_platform_cockpit_layout_LayoutComponent$7;


function io_cloudoffice_platform_cockpit_layout_LayoutComponent$6() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_layout_LayoutComponent$6;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$layout = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$6_val$layout'] = v; return this['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$6_val$layout']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_layout_Layout_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$6_val$layout'] = lcA1;
(refs_java_lang_Object || (refs_java_lang_Object = vm.java_lang_Object(false))).constructor['cons__V'].call(lcA0);
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.handle__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$6_val$layout'].getProps__Ljava_util_List_2();
invoker.clear__V(stA0);
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['query__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2'](lcA1);
var stA0 = invoker.getArray___3Ljava_lang_Object_2Ljava_lang_String_2(stA0,"layouts");
var lcA2 = stA0;
var stA0 = new vm.java_util_ArrayList;
(refs_java_util_ArrayList || (refs_java_util_ArrayList = vm.java_util_ArrayList(false))).constructor['cons__V'].call(stA0);
var lcA3 = stA0;
var lcA4 = lcA2;
var lcI5 = (lcA4).length;
var lcI6 = 0;
    }
    X_41: for (;;) { IF: if (gt <= 41) {

if ((lcI6) >= (lcI5)) { gt = 82; break IF; }
var lcA7 = (lcA4[lcI6] || Array.at(lcA4, lcI6));
var stA0 = lcA3;var stA1 = new io_cloudoffice_platform_cockpit_layout_Prop;
var stA2 = stA1;var stA3 = "layout";var stA4 = (refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false)))['valueOf__Ljava_lang_String_2Ljava_lang_Object_2'](lcA7);
(refs_io_cloudoffice_platform_cockpit_layout_Prop || (refs_io_cloudoffice_platform_cockpit_layout_Prop = io_cloudoffice_platform_cockpit_layout_Prop(false))).constructor.cons__VLjava_lang_String_2Ljava_lang_String_2.call(stA2, stA3, stA4);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,stA1);
lcI6++;
{ gt = 0; continue X_41; }
    }
    X_82: for (;;) { IF: if (gt <= 82) {

var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$6_val$layout'].getProps__Ljava_util_List_2();
var stI0 = invoker.addAll__ZLjava_util_Collection_2(stA0,lcA3);
return;

    }
}}}
};
c['handle__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_layout_LayoutComponent$6fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_layout_LayoutComponent$6', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_CallBack(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_layout_LayoutComponent$6fillInstOf });
    io_cloudoffice_platform_cockpit_layout_LayoutComponent$6fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/layout/LayoutComponent$6';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_CallBack(false).constructor.$class
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
    var refs_java_lang_Object;
    var refs_io_cloudoffice_platform_cockpit_api_MapBuilder;
    var refs_java_util_ArrayList;
    var refs_java_lang_String;
    var refs_io_cloudoffice_platform_cockpit_layout_Prop;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$6_val$layout'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_layout_LayoutComponent$6 = io_cloudoffice_platform_cockpit_layout_LayoutComponent$6;


function io_cloudoffice_platform_cockpit_layout_LayoutComponent$5() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_layout_LayoutComponent$5;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$layout = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$5_val$layout'] = v; return this['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$5_val$layout']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_layout_Layout_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$5_val$layout'] = lcA1;
(refs_java_lang_Object || (refs_java_lang_Object = vm.java_lang_Object(false))).constructor['cons__V'].call(lcA0);
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.handle__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;
(refs_io_cloudoffice_platform_cockpit_api_Logger || (refs_io_cloudoffice_platform_cockpit_api_Logger = vm.io_cloudoffice_platform_cockpit_api_Logger(false)))['log__VLjava_lang_String_2'](">>> Get domain information and rerfesh the panel.");
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor;
(refs_io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor || (refs_io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor = vm.io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor(false))).constructor['cons__V'].call(stA0);
var stA1 = lcA1;var stA2 = new io_cloudoffice_platform_cockpit_layout_Domain;
(refs_io_cloudoffice_platform_cockpit_layout_Domain || (refs_io_cloudoffice_platform_cockpit_layout_Domain = io_cloudoffice_platform_cockpit_layout_Domain(false))).constructor.cons__V.call(stA2);
var stA0 = invoker.getObject__Ljava_lang_Object_2Ljava_lang_String_2Ljava_lang_Object_2(stA0,stA1, stA2);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_layout_Domain']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.layout.Domain');
var lcA2 = stA0;
lcA0['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$5_val$layout'].setDomain__VLio_cloudoffice_platform_cockpit_layout_Domain_2(lcA2);
lcA0['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$5_val$layout'].setPathDrop__VZ(1);
return;

};
c['handle__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_layout_LayoutComponent$5fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_layout_LayoutComponent$5', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_CallBack(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_layout_LayoutComponent$5fillInstOf });
    io_cloudoffice_platform_cockpit_layout_LayoutComponent$5fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/layout/LayoutComponent$5';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_CallBack(false).constructor.$class
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
    var refs_java_lang_Object;
    var refs_io_cloudoffice_platform_cockpit_api_Logger;
    var refs_io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor;
    var refs_io_cloudoffice_platform_cockpit_layout_Domain;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$5_val$layout'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_layout_LayoutComponent$5 = io_cloudoffice_platform_cockpit_layout_LayoutComponent$5;


function io_cloudoffice_platform_cockpit_layout_LayoutComponent$4() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_layout_LayoutComponent$4;
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
    m.access = 0;
    m.cls = CLS;
    m = c.handle__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;
(refs_io_cloudoffice_platform_cockpit_api_Logger || (refs_io_cloudoffice_platform_cockpit_api_Logger = vm.io_cloudoffice_platform_cockpit_api_Logger(false)))['log__VLjava_lang_String_2'](">>> Layout copied.");
return;

};
c['handle__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_layout_LayoutComponent$4fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_layout_LayoutComponent$4', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_CallBack(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_layout_LayoutComponent$4fillInstOf });
    io_cloudoffice_platform_cockpit_layout_LayoutComponent$4fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/layout/LayoutComponent$4';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_CallBack(false).constructor.$class
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
    var refs_java_lang_Object;
    var refs_io_cloudoffice_platform_cockpit_api_Logger;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_layout_LayoutComponent$4 = io_cloudoffice_platform_cockpit_layout_LayoutComponent$4;


function io_cloudoffice_platform_cockpit_layout_LayoutComponent$3() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_layout_LayoutComponent$3;
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
    m.access = 0;
    m.cls = CLS;
    m = c.handle__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;
(refs_io_cloudoffice_platform_cockpit_api_Logger || (refs_io_cloudoffice_platform_cockpit_api_Logger = vm.io_cloudoffice_platform_cockpit_api_Logger(false)))['log__VLjava_lang_String_2'](">>> Successfully written on the domain json.");
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_Event;
(refs_io_cloudoffice_platform_cockpit_api_Event || (refs_io_cloudoffice_platform_cockpit_api_Event = vm.io_cloudoffice_platform_cockpit_api_Event(false))).constructor['cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2'].call(stA0, "invokefunction", "invokefunction", "updatedomainpostprocess");
var lcA2 = stA0;
var stA0 = (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent = io_cloudoffice_platform_cockpit_layout_LayoutComponent(false))).getDefaultInstance__Lio_cloudoffice_platform_cockpit_api_Component_2();
invoker.listen__VLio_cloudoffice_platform_cockpit_api_Signal_2(stA0,lcA2);
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_Event;
(refs_io_cloudoffice_platform_cockpit_api_Event || (refs_io_cloudoffice_platform_cockpit_api_Event = vm.io_cloudoffice_platform_cockpit_api_Event(false))).constructor['cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2'].call(stA0, "invokefunction", "invokefunction", "reloadStyle");
var lcA3 = stA0;
var stA0 = (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent = io_cloudoffice_platform_cockpit_layout_LayoutComponent(false))).getDefaultInstance__Lio_cloudoffice_platform_cockpit_api_Component_2();
invoker.listen__VLio_cloudoffice_platform_cockpit_api_Signal_2(stA0,lcA3);
return;

};
c['handle__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_layout_LayoutComponent$3fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_layout_LayoutComponent$3', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_CallBack(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_layout_LayoutComponent$3fillInstOf });
    io_cloudoffice_platform_cockpit_layout_LayoutComponent$3fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/layout/LayoutComponent$3';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_CallBack(false).constructor.$class
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
    var refs_java_lang_Object;
    var refs_io_cloudoffice_platform_cockpit_api_Logger;
    var refs_io_cloudoffice_platform_cockpit_api_Event;
    var refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_layout_LayoutComponent$3 = io_cloudoffice_platform_cockpit_layout_LayoutComponent$3;


function io_cloudoffice_platform_cockpit_layout_Domain() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_layout_Domain;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_TYPE'] = null;
  m = c._TYPE = function (v) {  if (arguments.length == 1) CLS['fld_TYPE'] = v; return CLS['fld_TYPE']; };
  m = c._proto = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_layout_Domain_proto'] = v; return this['fld_io_cloudoffice_platform_cockpit_layout_Domain_proto']; };
  m = c._prop_workspace = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_layout_Domain_prop_workspace'] = v; return this['fld_io_cloudoffice_platform_cockpit_layout_Domain_prop_workspace']; };
  m = c._prop_site = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_layout_Domain_prop_site'] = v; return this['fld_io_cloudoffice_platform_cockpit_layout_Domain_prop_site']; };
  m = c._prop_paths = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_layout_Domain_prop_paths'] = v; return this['fld_io_cloudoffice_platform_cockpit_layout_Domain_prop_paths']; };
    m = c.modelFor__Ljava_lang_Class_2 = function() {
return (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$DomainModel || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$DomainModel = io_cloudoffice_platform_cockpit_layout_LayoutComponent$DomainModel(false))).constructor.$class;

};
    m.access = 10;
    m.cls = CLS;
    m = c.getWorkspace__Lio_cloudoffice_platform_cockpit_layout_Workspace_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Domain_proto'],"workspace");
if ((lcA0['fld_io_cloudoffice_platform_cockpit_layout_Domain_prop_workspace']) !== (c._TYPE())) { gt = 40; break IF; }
var stA0 = lcA0;var stA1 = new io_cloudoffice_platform_cockpit_layout_Workspace;
(refs_io_cloudoffice_platform_cockpit_layout_Workspace || (refs_io_cloudoffice_platform_cockpit_layout_Workspace = io_cloudoffice_platform_cockpit_layout_Workspace(false))).constructor.cons__V.call(stA1);
var stA2 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Domain_proto']);
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, stA2);
stA0['fld_io_cloudoffice_platform_cockpit_layout_Domain_prop_workspace'] = stA1;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

if (lcA0['fld_io_cloudoffice_platform_cockpit_layout_Domain_prop_workspace'] !== null && !lcA0['fld_io_cloudoffice_platform_cockpit_layout_Domain_prop_workspace']['$instOf_io_cloudoffice_platform_cockpit_layout_Workspace']) vm.java_lang_Class(false).castEx(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Domain_prop_workspace'], 'io.cloudoffice.platform.cockpit.layout.Workspace');
return lcA0['fld_io_cloudoffice_platform_cockpit_layout_Domain_prop_workspace'];

    }
}}
};
c['getWorkspace__Lio_cloudoffice_platform_cockpit_layout_Workspace_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setWorkspace__VLio_cloudoffice_platform_cockpit_layout_Workspace_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Domain_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_Domain_prop_workspace'];
if ((lcA2) !== (lcA1)) { gt = 18; break IF; }
return;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

lcA0['fld_io_cloudoffice_platform_cockpit_layout_Domain_prop_workspace'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Domain_proto'],"workspace", lcA2, lcA1);
return;

    }
}}
};
c['setWorkspace__VLio_cloudoffice_platform_cockpit_layout_Workspace_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getSite__Lio_cloudoffice_platform_cockpit_layout_Site_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Domain_proto'],"site");
if ((lcA0['fld_io_cloudoffice_platform_cockpit_layout_Domain_prop_site']) !== (c._TYPE())) { gt = 40; break IF; }
var stA0 = lcA0;var stA1 = new io_cloudoffice_platform_cockpit_layout_Site;
(refs_io_cloudoffice_platform_cockpit_layout_Site || (refs_io_cloudoffice_platform_cockpit_layout_Site = io_cloudoffice_platform_cockpit_layout_Site(false))).constructor.cons__V.call(stA1);
var stA2 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Domain_proto']);
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, stA2);
stA0['fld_io_cloudoffice_platform_cockpit_layout_Domain_prop_site'] = stA1;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

if (lcA0['fld_io_cloudoffice_platform_cockpit_layout_Domain_prop_site'] !== null && !lcA0['fld_io_cloudoffice_platform_cockpit_layout_Domain_prop_site']['$instOf_io_cloudoffice_platform_cockpit_layout_Site']) vm.java_lang_Class(false).castEx(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Domain_prop_site'], 'io.cloudoffice.platform.cockpit.layout.Site');
return lcA0['fld_io_cloudoffice_platform_cockpit_layout_Domain_prop_site'];

    }
}}
};
c['getSite__Lio_cloudoffice_platform_cockpit_layout_Site_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setSite__VLio_cloudoffice_platform_cockpit_layout_Site_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Domain_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_Domain_prop_site'];
if ((lcA2) !== (lcA1)) { gt = 18; break IF; }
return;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

lcA0['fld_io_cloudoffice_platform_cockpit_layout_Domain_prop_site'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Domain_proto'],"site", lcA2, lcA1);
return;

    }
}}
};
c['setSite__VLio_cloudoffice_platform_cockpit_layout_Site_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getPaths__Ljava_util_List_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Domain_proto'],"paths");
return lcA0['fld_io_cloudoffice_platform_cockpit_layout_Domain_prop_paths'];

};
c['getPaths__Ljava_util_List_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;
(refs_java_lang_Object || (refs_java_lang_Object = vm.java_lang_Object(false))).constructor['cons__V'].call(lcA0);
var stA0 = lcA0;var stA1 = invoker.createProto__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2(c._TYPE(),lcA0, lcA1);
stA0['fld_io_cloudoffice_platform_cockpit_layout_Domain_proto'] = stA1;
var stA0 = lcA0;var stA1 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_Domain_proto'];var stA2 = "paths";var stI3 = -1;var stA4 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, 0);
var stA1 = invoker.createList__Ljava_util_List_2Ljava_lang_String_2I_3Ljava_lang_String_2(stA1,stA2, stI3, stA4);
stA0['fld_io_cloudoffice_platform_cockpit_layout_Domain_prop_paths'] = stA1;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = (refs_net_java_html_BrwsrCtx || (refs_net_java_html_BrwsrCtx = vm.net_java_html_BrwsrCtx(false)))['findDefault__Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'](c.constructor.$class);
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, stA1);
lcA0['fld_io_cloudoffice_platform_cockpit_layout_Domain_prop_workspace'] = c._TYPE();
lcA0['fld_io_cloudoffice_platform_cockpit_layout_Domain_prop_site'] = c._TYPE();
return;

};
CLS['cons__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_layout_Workspace_2Lio_cloudoffice_platform_cockpit_layout_Site_2_3Lio_cloudoffice_platform_cockpit_layout_Path_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = (refs_net_java_html_BrwsrCtx || (refs_net_java_html_BrwsrCtx = vm.net_java_html_BrwsrCtx(false)))['findDefault__Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'](c.constructor.$class);
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, stA1);
lcA0['fld_io_cloudoffice_platform_cockpit_layout_Domain_prop_workspace'] = lcA1;
lcA0['fld_io_cloudoffice_platform_cockpit_layout_Domain_prop_site'] = lcA2;
invoker.initTo__VLjava_util_Collection_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Domain_proto'],lcA0['fld_io_cloudoffice_platform_cockpit_layout_Domain_prop_paths'], lcA3);
return;

};
CLS['cons__VLio_cloudoffice_platform_cockpit_layout_Workspace_2Lio_cloudoffice_platform_cockpit_layout_Site_2_3Lio_cloudoffice_platform_cockpit_layout_Path_2'] = m;

    m.access = 129;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 3);
var lcA3 = stA0;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_Domain_proto'];var stA1 = lcA2;var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, 3);
Array.at(stA2, 0, "workspace");
Array.at(stA2, 1, "site");
Array.at(stA2, 2, "paths");
invoker.extract__VLjava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Object_2(stA0,stA1, stA2, lcA3);
var stA0 = lcA0;var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Domain_proto'],(refs_io_cloudoffice_platform_cockpit_layout_Workspace || (refs_io_cloudoffice_platform_cockpit_layout_Workspace = io_cloudoffice_platform_cockpit_layout_Workspace(false))).constructor.$class, (lcA3[0] || Array.at(lcA3, 0)));
stA0['fld_io_cloudoffice_platform_cockpit_layout_Domain_prop_workspace'] = stA1;
var stA0 = lcA0;var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Domain_proto'],(refs_io_cloudoffice_platform_cockpit_layout_Site || (refs_io_cloudoffice_platform_cockpit_layout_Site = io_cloudoffice_platform_cockpit_layout_Site(false))).constructor.$class, (lcA3[1] || Array.at(lcA3, 1)));
stA0['fld_io_cloudoffice_platform_cockpit_layout_Domain_prop_site'] = stA1;
var stA0 = c.useAsArray___3Ljava_lang_Object_2Ljava_lang_Object_2((lcA3[2] || Array.at(lcA3, 2)));
var lcA4 = stA0;
var lcI5 = (lcA4).length;
var lcI6 = 0;
    }
    X_86: for (;;) { IF: if (gt <= 86) {

if ((lcI6) >= (lcI5)) { gt = 127; break IF; }
var lcA7 = (lcA4[lcI6] || Array.at(lcA4, lcI6));
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_Domain_prop_paths'];var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Domain_proto'],(refs_io_cloudoffice_platform_cockpit_layout_Path || (refs_io_cloudoffice_platform_cockpit_layout_Path = io_cloudoffice_platform_cockpit_layout_Path(false))).constructor.$class, lcA7);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,stA1);
lcI6++;
{ gt = 0; continue X_86; }
    }
    X_127: for (;;) { IF: if (gt <= 127) {
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
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"workspace");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_layout_Domain_prop_workspace']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"site");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_layout_Domain_prop_site']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"paths");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_layout_Domain_prop_paths']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(125));
var stA0 = invoker.toString__Ljava_lang_String_2(lcA1);
return stA0;

};
c['toString__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Lio_cloudoffice_platform_cockpit_layout_Domain_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Domain_proto']);
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_layout_Domain_2Lnet_java_html_BrwsrCtx_2.call(stA0, stA1);
return stA0;

};
c['clone__Lio_cloudoffice_platform_cockpit_layout_Domain_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Lio_cloudoffice_platform_cockpit_layout_Domain_2Lnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
var stA0 = new io_cloudoffice_platform_cockpit_layout_Domain;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, lcA1);
var lcA2 = stA0;
var stA0 = lcA2;if ((lcA0['fld_io_cloudoffice_platform_cockpit_layout_Domain_prop_workspace']) !== null) { gt = 21; break IF; }
var stA1 = null;{ gt = 45; break IF; }
    }
    X_21: for (;;) { IF: if (gt <= 21) {

if ((lcA0['fld_io_cloudoffice_platform_cockpit_layout_Domain_prop_workspace']) !== (c._TYPE())) { gt = 37; break IF; }
var stA1 = c._TYPE();{ gt = 45; break IF; }
    }
    X_37: for (;;) { IF: if (gt <= 37) {

var stA1 = lcA0.getWorkspace__Lio_cloudoffice_platform_cockpit_layout_Workspace_2();
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, lcA1);
    }
    X_45: for (;;) { IF: if (gt <= 45) {
stA0['fld_io_cloudoffice_platform_cockpit_layout_Domain_prop_workspace'] = stA1;
var stA0 = lcA2;if ((lcA0['fld_io_cloudoffice_platform_cockpit_layout_Domain_prop_site']) !== null) { gt = 60; break IF; }
var stA1 = null;{ gt = 84; break IF; }
    }
    X_60: for (;;) { IF: if (gt <= 60) {

if ((lcA0['fld_io_cloudoffice_platform_cockpit_layout_Domain_prop_site']) !== (c._TYPE())) { gt = 76; break IF; }
var stA1 = c._TYPE();{ gt = 84; break IF; }
    }
    X_76: for (;;) { IF: if (gt <= 76) {

var stA1 = lcA0.getSite__Lio_cloudoffice_platform_cockpit_layout_Site_2();
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, lcA1);
    }
    X_84: for (;;) { IF: if (gt <= 84) {
stA0['fld_io_cloudoffice_platform_cockpit_layout_Domain_prop_site'] = stA1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_Domain_proto'];var stA1 = lcA2.getPaths__Ljava_util_List_2();
invoker.cloneList__VLjava_util_Collection_2Lnet_java_html_BrwsrCtx_2Ljava_util_Collection_2(stA0,stA1, lcA1, lcA0['fld_io_cloudoffice_platform_cockpit_layout_Domain_prop_paths']);
return lcA2;

    }
}}}}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.applyBindings__Lio_cloudoffice_platform_cockpit_layout_Domain_2 = function() {
  var  lcA0 = this;
invoker.applyBindings__V(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Domain_proto']);
return lcA0;

};
c['applyBindings__Lio_cloudoffice_platform_cockpit_layout_Domain_2'] = m;

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

var stI0 = lcA1 != null && lcA1['$instOf_io_cloudoffice_platform_cockpit_layout_Domain'] ? 1 : 0;
if ((stI0) != 0) { gt = 16; break IF; }
return 0;
    }
    X_16: for (;;) { IF: if (gt <= 16) {

if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_layout_Domain']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.layout.Domain');
var lcA2 = lcA1;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_layout_Domain_prop_workspace']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_layout_Domain_prop_workspace']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 48; break IF; }
return 0;
    }
    X_48: for (;;) { IF: if (gt <= 48) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_layout_Domain_prop_site']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_layout_Domain_prop_site']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 75; break IF; }
return 0;
    }
    X_75: for (;;) { IF: if (gt <= 75) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_layout_Domain_prop_paths']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_layout_Domain_prop_paths']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 102; break IF; }
return 0;
    }
    X_102: for (;;) { IF: if (gt <= 102) {

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
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_layout_Domain_prop_workspace']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_layout_Domain_prop_site']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_layout_Domain_prop_paths']);
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
var stA0 = lcA0.clone__Lio_cloudoffice_platform_cockpit_layout_Domain_2();
return stA0;

};
c['clone__Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.access$100__Lio_cloudoffice_platform_cockpit_layout_Domain$Html4JavaType_2 = function() {
return c._TYPE();

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_layout_Domain_2 = function(lcA0) {
return lcA0['fld_io_cloudoffice_platform_cockpit_layout_Domain_proto'];

};
    m.access = 4104;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_layout_Domain$1_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2.call(lcA0, lcA1, lcA2);
return;

};
    m.access = 4096;
    m.cls = CLS;
    m = c.access$400__Lio_cloudoffice_platform_cockpit_layout_Domain_2Lio_cloudoffice_platform_cockpit_layout_Domain_2Lnet_java_html_BrwsrCtx_2 = function(lcA0, lcA1) {
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_layout_Domain_2Lnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
return stA0;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new io_cloudoffice_platform_cockpit_layout_Domain$Html4JavaType;
(refs_io_cloudoffice_platform_cockpit_layout_Domain$Html4JavaType || (refs_io_cloudoffice_platform_cockpit_layout_Domain$Html4JavaType = io_cloudoffice_platform_cockpit_layout_Domain$Html4JavaType(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_layout_Domain$1_2.call(stA0, null);
c._TYPE(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_layout_DomainfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_layout_Domain', { value : true });
      vm.java_lang_Cloneable(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_layout_DomainfillInstOf });
    io_cloudoffice_platform_cockpit_layout_DomainfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/layout/Domain';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.java_lang_Cloneable(false).constructor.$class
    ]; };
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$DomainModel;
    var refs_io_cloudoffice_platform_cockpit_layout_Workspace;
    var refs_net_java_html_json_Models;
    var refs_io_cloudoffice_platform_cockpit_layout_Site;
    var refs_java_lang_Object;
    var refs_net_java_html_BrwsrCtx;
    var refs_io_cloudoffice_platform_cockpit_layout_Path;
    var refs_java_lang_StringBuilder;
    var refs_io_cloudoffice_platform_cockpit_layout_Domain$Html4JavaType;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_layout_Domain_proto'] = null;
    this['fld_io_cloudoffice_platform_cockpit_layout_Domain_prop_workspace'] = null;
    this['fld_io_cloudoffice_platform_cockpit_layout_Domain_prop_site'] = null;
    this['fld_io_cloudoffice_platform_cockpit_layout_Domain_prop_paths'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_layout_Domain = registerClass(exports,'io_cloudoffice_platform_cockpit_layout_Domain',io_cloudoffice_platform_cockpit_layout_Domain);


function io_cloudoffice_platform_cockpit_layout_Domain$Html4JavaType() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_layout_Domain$Html4JavaType;
  if (!CLS.$class) {
    var pp = vm.org_netbeans_html_json_spi_Proto$Type(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_org_netbeans_html_json_spi_Proto$Type || (refs_org_netbeans_html_json_spi_Proto$Type = vm.org_netbeans_html_json_spi_Proto$Type(false))).constructor['cons__VLjava_lang_Class_2Ljava_lang_Class_2II'].call(lcA0, (refs_io_cloudoffice_platform_cockpit_layout_Domain || (refs_io_cloudoffice_platform_cockpit_layout_Domain = io_cloudoffice_platform_cockpit_layout_Domain(false))).constructor.$class, (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$DomainModel || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$DomainModel = io_cloudoffice_platform_cockpit_layout_LayoutComponent$DomainModel(false))).constructor.$class, 3, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"workspace", 0, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"site", 1, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"paths", 2, 0, 0);
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.setValue__VLio_cloudoffice_platform_cockpit_layout_Domain_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0:{ gt = 28; break IF; }
  case 1:{ gt = 45; break IF; }
  case 2:{ gt = 62; break IF; }
  default: { gt = 76; break IF; }
}
    }
    X_28: for (;;) { IF: if (gt <= 28) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_layout_Domain || (refs_io_cloudoffice_platform_cockpit_layout_Domain = io_cloudoffice_platform_cockpit_layout_Domain(false))).access$100__Lio_cloudoffice_platform_cockpit_layout_Domain$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_layout_Workspace || (refs_io_cloudoffice_platform_cockpit_layout_Workspace = io_cloudoffice_platform_cockpit_layout_Workspace(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_layout_Workspace']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.layout.Workspace');
stA0.setWorkspace__VLio_cloudoffice_platform_cockpit_layout_Workspace_2(stA1);
return;
    }
    X_45: for (;;) { IF: if (gt <= 45) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_layout_Domain || (refs_io_cloudoffice_platform_cockpit_layout_Domain = io_cloudoffice_platform_cockpit_layout_Domain(false))).access$100__Lio_cloudoffice_platform_cockpit_layout_Domain$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_layout_Site || (refs_io_cloudoffice_platform_cockpit_layout_Site = io_cloudoffice_platform_cockpit_layout_Site(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_layout_Site']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.layout.Site');
stA0.setSite__VLio_cloudoffice_platform_cockpit_layout_Site_2(stA1);
return;
    }
    X_62: for (;;) { IF: if (gt <= 62) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_layout_Domain || (refs_io_cloudoffice_platform_cockpit_layout_Domain = io_cloudoffice_platform_cockpit_layout_Domain(false))).access$100__Lio_cloudoffice_platform_cockpit_layout_Domain$Html4JavaType_2();
var stA1 = lcA1.getPaths__Ljava_util_List_2();
invoker.replaceValue__VLjava_util_Collection_2Ljava_lang_Class_2Ljava_lang_Object_2(stA0,stA1, (refs_io_cloudoffice_platform_cockpit_layout_Path || (refs_io_cloudoffice_platform_cockpit_layout_Path = io_cloudoffice_platform_cockpit_layout_Path(false))).constructor.$class, lcA3);
return;
    }
    X_76: for (;;) { IF: if (gt <= 76) {
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

    }
}}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_layout_Domain_2I = function(lcA1, lcI2) {
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

var stA0 = lcA1.getWorkspace__Lio_cloudoffice_platform_cockpit_layout_Workspace_2();
return stA0;
    }
    X_33: for (;;) { IF: if (gt <= 33) {

var stA0 = lcA1.getSite__Lio_cloudoffice_platform_cockpit_layout_Site_2();
return stA0;
    }
    X_38: for (;;) { IF: if (gt <= 38) {

var stA0 = lcA1.getPaths__Ljava_util_List_2();
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
    m = c.call__VLio_cloudoffice_platform_cockpit_layout_Domain_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_layout_Domain']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.layout.Domain');
var stA0 = (refs_io_cloudoffice_platform_cockpit_layout_Domain || (refs_io_cloudoffice_platform_cockpit_layout_Domain = io_cloudoffice_platform_cockpit_layout_Domain(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_layout_Domain_2(lcA1);
return stA0;

};
c['protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.onChange__VLio_cloudoffice_platform_cockpit_layout_Domain_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLio_cloudoffice_platform_cockpit_layout_Domain_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
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
    m = c.read__Lio_cloudoffice_platform_cockpit_layout_Domain_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = new io_cloudoffice_platform_cockpit_layout_Domain;
(refs_io_cloudoffice_platform_cockpit_layout_Domain || (refs_io_cloudoffice_platform_cockpit_layout_Domain = io_cloudoffice_platform_cockpit_layout_Domain(false))).constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_layout_Domain$1_2.call(stA0, lcA1, lcA2, null);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.cloneTo__Lio_cloudoffice_platform_cockpit_layout_Domain_2Lio_cloudoffice_platform_cockpit_layout_Domain_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = (refs_io_cloudoffice_platform_cockpit_layout_Domain || (refs_io_cloudoffice_platform_cockpit_layout_Domain = io_cloudoffice_platform_cockpit_layout_Domain(false))).access$400__Lio_cloudoffice_platform_cockpit_layout_Domain_2Lio_cloudoffice_platform_cockpit_layout_Domain_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_layout_Domain']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.layout.Domain');
lcA0.onMessage__VLio_cloudoffice_platform_cockpit_layout_Domain_2IILjava_lang_Object_2_3Ljava_lang_Object_2(lcA1, lcI2, lcI3, lcA4, lcA5);
return;

};
c['onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.onChange__VLjava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_layout_Domain']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.layout.Domain');
lcA0.onChange__VLio_cloudoffice_platform_cockpit_layout_Domain_2I(lcA1, lcI2);
return;

};
c['onChange__VLjava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = lcA0.read__Lio_cloudoffice_platform_cockpit_layout_Domain_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2(lcA1, lcA2);
return stA0;

};
c['read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_layout_Domain']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.layout.Domain');
var stA0 = lcA0.cloneTo__Lio_cloudoffice_platform_cockpit_layout_Domain_2Lio_cloudoffice_platform_cockpit_layout_Domain_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
c['cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_layout_Domain']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.layout.Domain');
lcA0.call__VLio_cloudoffice_platform_cockpit_layout_Domain_2ILjava_lang_Object_2Ljava_lang_Object_2(lcA1, lcI2, lcA3, lcA4);
return;

};
c['call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Ljava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_layout_Domain']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.layout.Domain');
var stA0 = lcA0.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_layout_Domain_2I(lcA1, lcI2);
return stA0;

};
c['getValue__Ljava_lang_Object_2Ljava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.setValue__VLjava_lang_Object_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_layout_Domain']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.layout.Domain');
lcA0.setValue__VLio_cloudoffice_platform_cockpit_layout_Domain_2ILjava_lang_Object_2(lcA1, lcI2, lcA3);
return;

};
c['setValue__VLjava_lang_Object_2ILjava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_layout_Domain$1_2 = function(lcA1) {
  var  lcA0 = this;
c.constructor.cons__V.call(lcA0);
return;

};
    m.access = 4096;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_layout_Domain$Html4JavaTypefillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_layout_Domain$Html4JavaType', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_layout_Domain$Html4JavaTypefillInstOf });
    io_cloudoffice_platform_cockpit_layout_Domain$Html4JavaTypefillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/layout/Domain$Html4JavaType';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_layout_Domain;
    var refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$DomainModel;
    var refs_org_netbeans_html_json_spi_Proto$Type;
    var refs_io_cloudoffice_platform_cockpit_layout_Workspace;
    var refs_io_cloudoffice_platform_cockpit_layout_Site;
    var refs_io_cloudoffice_platform_cockpit_layout_Path;
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
vm.io_cloudoffice_platform_cockpit_layout_Domain$Html4JavaType = io_cloudoffice_platform_cockpit_layout_Domain$Html4JavaType;


function io_cloudoffice_platform_cockpit_layout_Site() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_layout_Site;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_TYPE'] = null;
  m = c._TYPE = function (v) {  if (arguments.length == 1) CLS['fld_TYPE'] = v; return CLS['fld_TYPE']; };
  m = c._proto = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_layout_Site_proto'] = v; return this['fld_io_cloudoffice_platform_cockpit_layout_Site_proto']; };
  m = c._prop_itemId = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_layout_Site_prop_itemId'] = v; return this['fld_io_cloudoffice_platform_cockpit_layout_Site_prop_itemId']; };
  m = c._prop_itemName = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_layout_Site_prop_itemName'] = v; return this['fld_io_cloudoffice_platform_cockpit_layout_Site_prop_itemName']; };
  m = c._prop_itemType = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_layout_Site_prop_itemType'] = v; return this['fld_io_cloudoffice_platform_cockpit_layout_Site_prop_itemType']; };
  m = c._prop_authType = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_layout_Site_prop_authType'] = v; return this['fld_io_cloudoffice_platform_cockpit_layout_Site_prop_authType']; };
  m = c._prop_subscribed = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_layout_Site_prop_subscribed'] = v; return this['fld_io_cloudoffice_platform_cockpit_layout_Site_prop_subscribed']; };
    m = c.modelFor__Ljava_lang_Class_2 = function() {
return (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$SiteModel || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$SiteModel = io_cloudoffice_platform_cockpit_layout_LayoutComponent$SiteModel(false))).constructor.$class;

};
    m.access = 10;
    m.cls = CLS;
    m = c.getItemId__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Site_proto'],"itemId");
return lcA0['fld_io_cloudoffice_platform_cockpit_layout_Site_prop_itemId'];

};
c['getItemId__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setItemId__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Site_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_Site_prop_itemId'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_layout_Site_prop_itemId'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Site_proto'],"itemId", lcA2, lcA1);
return;

    }
}}
};
c['setItemId__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getItemName__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Site_proto'],"itemName");
return lcA0['fld_io_cloudoffice_platform_cockpit_layout_Site_prop_itemName'];

};
c['getItemName__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setItemName__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Site_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_Site_prop_itemName'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_layout_Site_prop_itemName'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Site_proto'],"itemName", lcA2, lcA1);
return;

    }
}}
};
c['setItemName__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getItemType__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Site_proto'],"itemType");
return lcA0['fld_io_cloudoffice_platform_cockpit_layout_Site_prop_itemType'];

};
c['getItemType__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setItemType__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Site_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_Site_prop_itemType'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_layout_Site_prop_itemType'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Site_proto'],"itemType", lcA2, lcA1);
return;

    }
}}
};
c['setItemType__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getAuthType__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Site_proto'],"authType");
return lcA0['fld_io_cloudoffice_platform_cockpit_layout_Site_prop_authType'];

};
c['getAuthType__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setAuthType__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Site_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_Site_prop_authType'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_layout_Site_prop_authType'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Site_proto'],"authType", lcA2, lcA1);
return;

    }
}}
};
c['setAuthType__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getSubscribed__Ljava_util_List_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Site_proto'],"subscribed");
return lcA0['fld_io_cloudoffice_platform_cockpit_layout_Site_prop_subscribed'];

};
c['getSubscribed__Ljava_util_List_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;
(refs_java_lang_Object || (refs_java_lang_Object = vm.java_lang_Object(false))).constructor['cons__V'].call(lcA0);
var stA0 = lcA0;var stA1 = invoker.createProto__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2(c._TYPE(),lcA0, lcA1);
stA0['fld_io_cloudoffice_platform_cockpit_layout_Site_proto'] = stA1;
var stA0 = lcA0;var stA1 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_Site_proto'];var stA2 = "subscribed";var stI3 = -1;var stA4 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, 0);
var stA1 = invoker.createList__Ljava_util_List_2Ljava_lang_String_2I_3Ljava_lang_String_2(stA1,stA2, stI3, stA4);
stA0['fld_io_cloudoffice_platform_cockpit_layout_Site_prop_subscribed'] = stA1;
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
    m = CLS.cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2_3Ljava_lang_String_2 = function(lcA1, lcA2, lcA3, lcA4, lcA5) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = (refs_net_java_html_BrwsrCtx || (refs_net_java_html_BrwsrCtx = vm.net_java_html_BrwsrCtx(false)))['findDefault__Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'](c.constructor.$class);
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, stA1);
lcA0['fld_io_cloudoffice_platform_cockpit_layout_Site_prop_itemId'] = lcA1;
lcA0['fld_io_cloudoffice_platform_cockpit_layout_Site_prop_itemName'] = lcA2;
lcA0['fld_io_cloudoffice_platform_cockpit_layout_Site_prop_itemType'] = lcA3;
lcA0['fld_io_cloudoffice_platform_cockpit_layout_Site_prop_authType'] = lcA4;
invoker.initTo__VLjava_util_Collection_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Site_proto'],lcA0['fld_io_cloudoffice_platform_cockpit_layout_Site_prop_subscribed'], lcA5);
return;

};
CLS['cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2_3Ljava_lang_String_2'] = m;

    m.access = 129;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 5);
var lcA3 = stA0;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_Site_proto'];var stA1 = lcA2;var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, 5);
Array.at(stA2, 0, "itemId");
Array.at(stA2, 1, "itemName");
Array.at(stA2, 2, "itemType");
Array.at(stA2, 3, "authType");
Array.at(stA2, 4, "subscribed");
invoker.extract__VLjava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Object_2(stA0,stA1, stA2, lcA3);
if ((lcA3[0] || Array.at(lcA3, 0)) !== null && !(lcA3[0] || Array.at(lcA3, 0))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[0] || Array.at(lcA3, 0)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_layout_Site_prop_itemId'] = (lcA3[0] || Array.at(lcA3, 0));
if ((lcA3[1] || Array.at(lcA3, 1)) !== null && !(lcA3[1] || Array.at(lcA3, 1))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[1] || Array.at(lcA3, 1)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_layout_Site_prop_itemName'] = (lcA3[1] || Array.at(lcA3, 1));
if ((lcA3[2] || Array.at(lcA3, 2)) !== null && !(lcA3[2] || Array.at(lcA3, 2))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[2] || Array.at(lcA3, 2)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_layout_Site_prop_itemType'] = (lcA3[2] || Array.at(lcA3, 2));
if ((lcA3[3] || Array.at(lcA3, 3)) !== null && !(lcA3[3] || Array.at(lcA3, 3))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[3] || Array.at(lcA3, 3)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_layout_Site_prop_authType'] = (lcA3[3] || Array.at(lcA3, 3));
var stA0 = c.useAsArray___3Ljava_lang_Object_2Ljava_lang_Object_2((lcA3[4] || Array.at(lcA3, 4)));
var lcA4 = stA0;
var lcI5 = (lcA4).length;
var lcI6 = 0;
    }
    X_104: for (;;) { IF: if (gt <= 104) {

if ((lcI6) >= (lcI5)) { gt = 139; break IF; }
var lcA7 = (lcA4[lcI6] || Array.at(lcA4, lcI6));
if (lcA7 !== null && !lcA7['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(lcA7, 'java.lang.String');
var stI0 = invoker.add__ZLjava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Site_prop_subscribed'],lcA7);
lcI6++;
{ gt = 0; continue X_104; }
    }
    X_139: for (;;) { IF: if (gt <= 139) {
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
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"authType");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getAuthType__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"subscribed");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getSubscribed__Ljava_util_List_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(125));
var stA0 = invoker.toString__Ljava_lang_String_2(lcA1);
return stA0;

};
c['toString__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Lio_cloudoffice_platform_cockpit_layout_Site_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Site_proto']);
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_layout_Site_2Lnet_java_html_BrwsrCtx_2.call(stA0, stA1);
return stA0;

};
c['clone__Lio_cloudoffice_platform_cockpit_layout_Site_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Lio_cloudoffice_platform_cockpit_layout_Site_2Lnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = new io_cloudoffice_platform_cockpit_layout_Site;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, lcA1);
var lcA2 = stA0;
var stA0 = lcA2;var stA1 = lcA0.getItemId__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_layout_Site_prop_itemId'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getItemName__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_layout_Site_prop_itemName'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getItemType__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_layout_Site_prop_itemType'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getAuthType__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_layout_Site_prop_authType'] = stA1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_Site_proto'];var stA1 = lcA2.getSubscribed__Ljava_util_List_2();
invoker.cloneList__VLjava_util_Collection_2Lnet_java_html_BrwsrCtx_2Ljava_util_Collection_2(stA0,stA1, lcA1, lcA0['fld_io_cloudoffice_platform_cockpit_layout_Site_prop_subscribed']);
return lcA2;

};
    m.access = 2;
    m.cls = CLS;
    m = c.applyBindings__Lio_cloudoffice_platform_cockpit_layout_Site_2 = function() {
  var  lcA0 = this;
invoker.applyBindings__V(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Site_proto']);
return lcA0;

};
c['applyBindings__Lio_cloudoffice_platform_cockpit_layout_Site_2'] = m;

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

var stI0 = lcA1 != null && lcA1['$instOf_io_cloudoffice_platform_cockpit_layout_Site'] ? 1 : 0;
if ((stI0) != 0) { gt = 16; break IF; }
return 0;
    }
    X_16: for (;;) { IF: if (gt <= 16) {

if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_layout_Site']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.layout.Site');
var lcA2 = lcA1;
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_layout_Site_prop_itemId'], lcA2['fld_io_cloudoffice_platform_cockpit_layout_Site_prop_itemId']);
if ((stI0) != 0) { gt = 40; break IF; }
return 0;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_layout_Site_prop_itemName'], lcA2['fld_io_cloudoffice_platform_cockpit_layout_Site_prop_itemName']);
if ((stI0) != 0) { gt = 59; break IF; }
return 0;
    }
    X_59: for (;;) { IF: if (gt <= 59) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_layout_Site_prop_itemType'], lcA2['fld_io_cloudoffice_platform_cockpit_layout_Site_prop_itemType']);
if ((stI0) != 0) { gt = 78; break IF; }
return 0;
    }
    X_78: for (;;) { IF: if (gt <= 78) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_layout_Site_prop_authType'], lcA2['fld_io_cloudoffice_platform_cockpit_layout_Site_prop_authType']);
if ((stI0) != 0) { gt = 97; break IF; }
return 0;
    }
    X_97: for (;;) { IF: if (gt <= 97) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_layout_Site_prop_subscribed'], lcA2['fld_io_cloudoffice_platform_cockpit_layout_Site_prop_subscribed']);
if ((stI0) != 0) { gt = 116; break IF; }
return 0;
    }
    X_116: for (;;) { IF: if (gt <= 116) {

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
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_layout_Site_prop_itemId'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_layout_Site_prop_itemName'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_layout_Site_prop_itemType'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_layout_Site_prop_authType'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_layout_Site_prop_subscribed'], lcI1);
var lcI1 = stI0;
return lcI1;

};
c['hashCode__I'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Ljava_lang_Object_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0.clone__Lio_cloudoffice_platform_cockpit_layout_Site_2();
return stA0;

};
c['clone__Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.access$100__Lio_cloudoffice_platform_cockpit_layout_Site$Html4JavaType_2 = function() {
return c._TYPE();

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_layout_Site_2 = function(lcA0) {
return lcA0['fld_io_cloudoffice_platform_cockpit_layout_Site_proto'];

};
    m.access = 4104;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_layout_Site$1_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2.call(lcA0, lcA1, lcA2);
return;

};
    m.access = 4096;
    m.cls = CLS;
    m = c.access$400__Lio_cloudoffice_platform_cockpit_layout_Site_2Lio_cloudoffice_platform_cockpit_layout_Site_2Lnet_java_html_BrwsrCtx_2 = function(lcA0, lcA1) {
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_layout_Site_2Lnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
return stA0;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new io_cloudoffice_platform_cockpit_layout_Site$Html4JavaType;
(refs_io_cloudoffice_platform_cockpit_layout_Site$Html4JavaType || (refs_io_cloudoffice_platform_cockpit_layout_Site$Html4JavaType = io_cloudoffice_platform_cockpit_layout_Site$Html4JavaType(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_layout_Site$1_2.call(stA0, null);
c._TYPE(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_layout_SitefillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_layout_Site', { value : true });
      vm.java_lang_Cloneable(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_layout_SitefillInstOf });
    io_cloudoffice_platform_cockpit_layout_SitefillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/layout/Site';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.java_lang_Cloneable(false).constructor.$class
    ]; };
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$SiteModel;
    var refs_java_lang_Object;
    var refs_net_java_html_BrwsrCtx;
    var refs_java_lang_StringBuilder;
    var refs_io_cloudoffice_platform_cockpit_layout_Site$Html4JavaType;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_layout_Site_proto'] = null;
    this['fld_io_cloudoffice_platform_cockpit_layout_Site_prop_itemId'] = null;
    this['fld_io_cloudoffice_platform_cockpit_layout_Site_prop_itemName'] = null;
    this['fld_io_cloudoffice_platform_cockpit_layout_Site_prop_itemType'] = null;
    this['fld_io_cloudoffice_platform_cockpit_layout_Site_prop_authType'] = null;
    this['fld_io_cloudoffice_platform_cockpit_layout_Site_prop_subscribed'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_layout_Site = registerClass(exports,'io_cloudoffice_platform_cockpit_layout_Site',io_cloudoffice_platform_cockpit_layout_Site);


function io_cloudoffice_platform_cockpit_layout_Site$Html4JavaType() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_layout_Site$Html4JavaType;
  if (!CLS.$class) {
    var pp = vm.org_netbeans_html_json_spi_Proto$Type(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_org_netbeans_html_json_spi_Proto$Type || (refs_org_netbeans_html_json_spi_Proto$Type = vm.org_netbeans_html_json_spi_Proto$Type(false))).constructor['cons__VLjava_lang_Class_2Ljava_lang_Class_2II'].call(lcA0, (refs_io_cloudoffice_platform_cockpit_layout_Site || (refs_io_cloudoffice_platform_cockpit_layout_Site = io_cloudoffice_platform_cockpit_layout_Site(false))).constructor.$class, (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$SiteModel || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$SiteModel = io_cloudoffice_platform_cockpit_layout_LayoutComponent$SiteModel(false))).constructor.$class, 5, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"itemId", 0, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"itemName", 1, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"itemType", 2, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"authType", 3, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"subscribed", 4, 0, 0);
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.setValue__VLio_cloudoffice_platform_cockpit_layout_Site_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0:{ gt = 36; break IF; }
  case 1:{ gt = 53; break IF; }
  case 2:{ gt = 70; break IF; }
  case 3:{ gt = 87; break IF; }
  case 4:{ gt = 104; break IF; }
  default: { gt = 118; break IF; }
}
    }
    X_36: for (;;) { IF: if (gt <= 36) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_layout_Site || (refs_io_cloudoffice_platform_cockpit_layout_Site = io_cloudoffice_platform_cockpit_layout_Site(false))).access$100__Lio_cloudoffice_platform_cockpit_layout_Site$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setItemId__VLjava_lang_String_2(stA1);
return;
    }
    X_53: for (;;) { IF: if (gt <= 53) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_layout_Site || (refs_io_cloudoffice_platform_cockpit_layout_Site = io_cloudoffice_platform_cockpit_layout_Site(false))).access$100__Lio_cloudoffice_platform_cockpit_layout_Site$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setItemName__VLjava_lang_String_2(stA1);
return;
    }
    X_70: for (;;) { IF: if (gt <= 70) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_layout_Site || (refs_io_cloudoffice_platform_cockpit_layout_Site = io_cloudoffice_platform_cockpit_layout_Site(false))).access$100__Lio_cloudoffice_platform_cockpit_layout_Site$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setItemType__VLjava_lang_String_2(stA1);
return;
    }
    X_87: for (;;) { IF: if (gt <= 87) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_layout_Site || (refs_io_cloudoffice_platform_cockpit_layout_Site = io_cloudoffice_platform_cockpit_layout_Site(false))).access$100__Lio_cloudoffice_platform_cockpit_layout_Site$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setAuthType__VLjava_lang_String_2(stA1);
return;
    }
    X_104: for (;;) { IF: if (gt <= 104) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_layout_Site || (refs_io_cloudoffice_platform_cockpit_layout_Site = io_cloudoffice_platform_cockpit_layout_Site(false))).access$100__Lio_cloudoffice_platform_cockpit_layout_Site$Html4JavaType_2();
var stA1 = lcA1.getSubscribed__Ljava_util_List_2();
invoker.replaceValue__VLjava_util_Collection_2Ljava_lang_Class_2Ljava_lang_Object_2(stA0,stA1, (refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
return;
    }
    X_118: for (;;) { IF: if (gt <= 118) {
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

    }
}}}}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_layout_Site_2I = function(lcA1, lcI2) {
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

var stA0 = lcA1.getItemId__Ljava_lang_String_2();
return stA0;
    }
    X_41: for (;;) { IF: if (gt <= 41) {

var stA0 = lcA1.getItemName__Ljava_lang_String_2();
return stA0;
    }
    X_46: for (;;) { IF: if (gt <= 46) {

var stA0 = lcA1.getItemType__Ljava_lang_String_2();
return stA0;
    }
    X_51: for (;;) { IF: if (gt <= 51) {

var stA0 = lcA1.getAuthType__Ljava_lang_String_2();
return stA0;
    }
    X_56: for (;;) { IF: if (gt <= 56) {

var stA0 = lcA1.getSubscribed__Ljava_util_List_2();
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
    m = c.call__VLio_cloudoffice_platform_cockpit_layout_Site_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_layout_Site']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.layout.Site');
var stA0 = (refs_io_cloudoffice_platform_cockpit_layout_Site || (refs_io_cloudoffice_platform_cockpit_layout_Site = io_cloudoffice_platform_cockpit_layout_Site(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_layout_Site_2(lcA1);
return stA0;

};
c['protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.onChange__VLio_cloudoffice_platform_cockpit_layout_Site_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLio_cloudoffice_platform_cockpit_layout_Site_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
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
    m = c.read__Lio_cloudoffice_platform_cockpit_layout_Site_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = new io_cloudoffice_platform_cockpit_layout_Site;
(refs_io_cloudoffice_platform_cockpit_layout_Site || (refs_io_cloudoffice_platform_cockpit_layout_Site = io_cloudoffice_platform_cockpit_layout_Site(false))).constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_layout_Site$1_2.call(stA0, lcA1, lcA2, null);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.cloneTo__Lio_cloudoffice_platform_cockpit_layout_Site_2Lio_cloudoffice_platform_cockpit_layout_Site_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = (refs_io_cloudoffice_platform_cockpit_layout_Site || (refs_io_cloudoffice_platform_cockpit_layout_Site = io_cloudoffice_platform_cockpit_layout_Site(false))).access$400__Lio_cloudoffice_platform_cockpit_layout_Site_2Lio_cloudoffice_platform_cockpit_layout_Site_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_layout_Site']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.layout.Site');
lcA0.onMessage__VLio_cloudoffice_platform_cockpit_layout_Site_2IILjava_lang_Object_2_3Ljava_lang_Object_2(lcA1, lcI2, lcI3, lcA4, lcA5);
return;

};
c['onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.onChange__VLjava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_layout_Site']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.layout.Site');
lcA0.onChange__VLio_cloudoffice_platform_cockpit_layout_Site_2I(lcA1, lcI2);
return;

};
c['onChange__VLjava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = lcA0.read__Lio_cloudoffice_platform_cockpit_layout_Site_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2(lcA1, lcA2);
return stA0;

};
c['read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_layout_Site']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.layout.Site');
var stA0 = lcA0.cloneTo__Lio_cloudoffice_platform_cockpit_layout_Site_2Lio_cloudoffice_platform_cockpit_layout_Site_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
c['cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_layout_Site']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.layout.Site');
lcA0.call__VLio_cloudoffice_platform_cockpit_layout_Site_2ILjava_lang_Object_2Ljava_lang_Object_2(lcA1, lcI2, lcA3, lcA4);
return;

};
c['call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Ljava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_layout_Site']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.layout.Site');
var stA0 = lcA0.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_layout_Site_2I(lcA1, lcI2);
return stA0;

};
c['getValue__Ljava_lang_Object_2Ljava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.setValue__VLjava_lang_Object_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_layout_Site']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.layout.Site');
lcA0.setValue__VLio_cloudoffice_platform_cockpit_layout_Site_2ILjava_lang_Object_2(lcA1, lcI2, lcA3);
return;

};
c['setValue__VLjava_lang_Object_2ILjava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_layout_Site$1_2 = function(lcA1) {
  var  lcA0 = this;
c.constructor.cons__V.call(lcA0);
return;

};
    m.access = 4096;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_layout_Site$Html4JavaTypefillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_layout_Site$Html4JavaType', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_layout_Site$Html4JavaTypefillInstOf });
    io_cloudoffice_platform_cockpit_layout_Site$Html4JavaTypefillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/layout/Site$Html4JavaType';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_layout_Site;
    var refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$SiteModel;
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
vm.io_cloudoffice_platform_cockpit_layout_Site$Html4JavaType = io_cloudoffice_platform_cockpit_layout_Site$Html4JavaType;


function io_cloudoffice_platform_cockpit_layout_LayoutComponent$SiteModel() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_layout_LayoutComponent$SiteModel;
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
CLS['cons__V'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_layout_LayoutComponent$SiteModelfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_layout_LayoutComponent$SiteModel', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_layout_LayoutComponent$SiteModelfillInstOf });
    io_cloudoffice_platform_cockpit_layout_LayoutComponent$SiteModelfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/layout/LayoutComponent$SiteModel';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 33;
    CLS.$class.cnstr = CLS;
    var refs_java_lang_Object;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_layout_LayoutComponent$SiteModel = registerClass(exports,'io_cloudoffice_platform_cockpit_layout_LayoutComponent$SiteModel',io_cloudoffice_platform_cockpit_layout_LayoutComponent$SiteModel);


function io_cloudoffice_platform_cockpit_layout_Workspace() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_layout_Workspace;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_TYPE'] = null;
  m = c._TYPE = function (v) {  if (arguments.length == 1) CLS['fld_TYPE'] = v; return CLS['fld_TYPE']; };
  m = c._proto = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_layout_Workspace_proto'] = v; return this['fld_io_cloudoffice_platform_cockpit_layout_Workspace_proto']; };
  m = c._prop_itemId = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_layout_Workspace_prop_itemId'] = v; return this['fld_io_cloudoffice_platform_cockpit_layout_Workspace_prop_itemId']; };
  m = c._prop_itemName = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_layout_Workspace_prop_itemName'] = v; return this['fld_io_cloudoffice_platform_cockpit_layout_Workspace_prop_itemName']; };
  m = c._prop_itemType = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_layout_Workspace_prop_itemType'] = v; return this['fld_io_cloudoffice_platform_cockpit_layout_Workspace_prop_itemType']; };
    m = c.modelFor__Ljava_lang_Class_2 = function() {
return (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$WorkspaceModel || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$WorkspaceModel = io_cloudoffice_platform_cockpit_layout_LayoutComponent$WorkspaceModel(false))).constructor.$class;

};
    m.access = 10;
    m.cls = CLS;
    m = c.getItemId__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Workspace_proto'],"itemId");
return lcA0['fld_io_cloudoffice_platform_cockpit_layout_Workspace_prop_itemId'];

};
c['getItemId__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setItemId__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Workspace_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_Workspace_prop_itemId'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_layout_Workspace_prop_itemId'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Workspace_proto'],"itemId", lcA2, lcA1);
return;

    }
}}
};
c['setItemId__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getItemName__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Workspace_proto'],"itemName");
return lcA0['fld_io_cloudoffice_platform_cockpit_layout_Workspace_prop_itemName'];

};
c['getItemName__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setItemName__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Workspace_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_Workspace_prop_itemName'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_layout_Workspace_prop_itemName'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Workspace_proto'],"itemName", lcA2, lcA1);
return;

    }
}}
};
c['setItemName__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getItemType__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Workspace_proto'],"itemType");
return lcA0['fld_io_cloudoffice_platform_cockpit_layout_Workspace_prop_itemType'];

};
c['getItemType__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setItemType__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Workspace_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_Workspace_prop_itemType'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_layout_Workspace_prop_itemType'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Workspace_proto'],"itemType", lcA2, lcA1);
return;

    }
}}
};
c['setItemType__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;
(refs_java_lang_Object || (refs_java_lang_Object = vm.java_lang_Object(false))).constructor['cons__V'].call(lcA0);
var stA0 = lcA0;var stA1 = invoker.createProto__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2(c._TYPE(),lcA0, lcA1);
stA0['fld_io_cloudoffice_platform_cockpit_layout_Workspace_proto'] = stA1;
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
    m = CLS.cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = (refs_net_java_html_BrwsrCtx || (refs_net_java_html_BrwsrCtx = vm.net_java_html_BrwsrCtx(false)))['findDefault__Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'](c.constructor.$class);
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, stA1);
lcA0['fld_io_cloudoffice_platform_cockpit_layout_Workspace_prop_itemId'] = lcA1;
lcA0['fld_io_cloudoffice_platform_cockpit_layout_Workspace_prop_itemName'] = lcA2;
lcA0['fld_io_cloudoffice_platform_cockpit_layout_Workspace_prop_itemType'] = lcA3;
return;

};
CLS['cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 3);
var lcA3 = stA0;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_Workspace_proto'];var stA1 = lcA2;var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, 3);
Array.at(stA2, 0, "itemId");
Array.at(stA2, 1, "itemName");
Array.at(stA2, 2, "itemType");
invoker.extract__VLjava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Object_2(stA0,stA1, stA2, lcA3);
if ((lcA3[0] || Array.at(lcA3, 0)) !== null && !(lcA3[0] || Array.at(lcA3, 0))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[0] || Array.at(lcA3, 0)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_layout_Workspace_prop_itemId'] = (lcA3[0] || Array.at(lcA3, 0));
if ((lcA3[1] || Array.at(lcA3, 1)) !== null && !(lcA3[1] || Array.at(lcA3, 1))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[1] || Array.at(lcA3, 1)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_layout_Workspace_prop_itemName'] = (lcA3[1] || Array.at(lcA3, 1));
if ((lcA3[2] || Array.at(lcA3, 2)) !== null && !(lcA3[2] || Array.at(lcA3, 2))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[2] || Array.at(lcA3, 2)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_layout_Workspace_prop_itemType'] = (lcA3[2] || Array.at(lcA3, 2));
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
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(125));
var stA0 = invoker.toString__Ljava_lang_String_2(lcA1);
return stA0;

};
c['toString__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Lio_cloudoffice_platform_cockpit_layout_Workspace_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Workspace_proto']);
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_layout_Workspace_2Lnet_java_html_BrwsrCtx_2.call(stA0, stA1);
return stA0;

};
c['clone__Lio_cloudoffice_platform_cockpit_layout_Workspace_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Lio_cloudoffice_platform_cockpit_layout_Workspace_2Lnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = new io_cloudoffice_platform_cockpit_layout_Workspace;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, lcA1);
var lcA2 = stA0;
var stA0 = lcA2;var stA1 = lcA0.getItemId__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_layout_Workspace_prop_itemId'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getItemName__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_layout_Workspace_prop_itemName'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getItemType__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_layout_Workspace_prop_itemType'] = stA1;
return lcA2;

};
    m.access = 2;
    m.cls = CLS;
    m = c.applyBindings__Lio_cloudoffice_platform_cockpit_layout_Workspace_2 = function() {
  var  lcA0 = this;
invoker.applyBindings__V(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Workspace_proto']);
return lcA0;

};
c['applyBindings__Lio_cloudoffice_platform_cockpit_layout_Workspace_2'] = m;

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

var stI0 = lcA1 != null && lcA1['$instOf_io_cloudoffice_platform_cockpit_layout_Workspace'] ? 1 : 0;
if ((stI0) != 0) { gt = 16; break IF; }
return 0;
    }
    X_16: for (;;) { IF: if (gt <= 16) {

if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_layout_Workspace']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.layout.Workspace');
var lcA2 = lcA1;
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_layout_Workspace_prop_itemId'], lcA2['fld_io_cloudoffice_platform_cockpit_layout_Workspace_prop_itemId']);
if ((stI0) != 0) { gt = 40; break IF; }
return 0;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_layout_Workspace_prop_itemName'], lcA2['fld_io_cloudoffice_platform_cockpit_layout_Workspace_prop_itemName']);
if ((stI0) != 0) { gt = 59; break IF; }
return 0;
    }
    X_59: for (;;) { IF: if (gt <= 59) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_layout_Workspace_prop_itemType'], lcA2['fld_io_cloudoffice_platform_cockpit_layout_Workspace_prop_itemType']);
if ((stI0) != 0) { gt = 78; break IF; }
return 0;
    }
    X_78: for (;;) { IF: if (gt <= 78) {

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
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_layout_Workspace_prop_itemId'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_layout_Workspace_prop_itemName'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_layout_Workspace_prop_itemType'], lcI1);
var lcI1 = stI0;
return lcI1;

};
c['hashCode__I'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Ljava_lang_Object_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0.clone__Lio_cloudoffice_platform_cockpit_layout_Workspace_2();
return stA0;

};
c['clone__Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.access$100__Lio_cloudoffice_platform_cockpit_layout_Workspace$Html4JavaType_2 = function() {
return c._TYPE();

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_layout_Workspace_2 = function(lcA0) {
return lcA0['fld_io_cloudoffice_platform_cockpit_layout_Workspace_proto'];

};
    m.access = 4104;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_layout_Workspace$1_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2.call(lcA0, lcA1, lcA2);
return;

};
    m.access = 4096;
    m.cls = CLS;
    m = c.access$400__Lio_cloudoffice_platform_cockpit_layout_Workspace_2Lio_cloudoffice_platform_cockpit_layout_Workspace_2Lnet_java_html_BrwsrCtx_2 = function(lcA0, lcA1) {
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_layout_Workspace_2Lnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
return stA0;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new io_cloudoffice_platform_cockpit_layout_Workspace$Html4JavaType;
(refs_io_cloudoffice_platform_cockpit_layout_Workspace$Html4JavaType || (refs_io_cloudoffice_platform_cockpit_layout_Workspace$Html4JavaType = io_cloudoffice_platform_cockpit_layout_Workspace$Html4JavaType(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_layout_Workspace$1_2.call(stA0, null);
c._TYPE(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_layout_WorkspacefillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_layout_Workspace', { value : true });
      vm.java_lang_Cloneable(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_layout_WorkspacefillInstOf });
    io_cloudoffice_platform_cockpit_layout_WorkspacefillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/layout/Workspace';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.java_lang_Cloneable(false).constructor.$class
    ]; };
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$WorkspaceModel;
    var refs_java_lang_Object;
    var refs_net_java_html_BrwsrCtx;
    var refs_java_lang_StringBuilder;
    var refs_io_cloudoffice_platform_cockpit_layout_Workspace$Html4JavaType;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_layout_Workspace_proto'] = null;
    this['fld_io_cloudoffice_platform_cockpit_layout_Workspace_prop_itemId'] = null;
    this['fld_io_cloudoffice_platform_cockpit_layout_Workspace_prop_itemName'] = null;
    this['fld_io_cloudoffice_platform_cockpit_layout_Workspace_prop_itemType'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_layout_Workspace = registerClass(exports,'io_cloudoffice_platform_cockpit_layout_Workspace',io_cloudoffice_platform_cockpit_layout_Workspace);


function io_cloudoffice_platform_cockpit_layout_Workspace$Html4JavaType() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_layout_Workspace$Html4JavaType;
  if (!CLS.$class) {
    var pp = vm.org_netbeans_html_json_spi_Proto$Type(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_org_netbeans_html_json_spi_Proto$Type || (refs_org_netbeans_html_json_spi_Proto$Type = vm.org_netbeans_html_json_spi_Proto$Type(false))).constructor['cons__VLjava_lang_Class_2Ljava_lang_Class_2II'].call(lcA0, (refs_io_cloudoffice_platform_cockpit_layout_Workspace || (refs_io_cloudoffice_platform_cockpit_layout_Workspace = io_cloudoffice_platform_cockpit_layout_Workspace(false))).constructor.$class, (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$WorkspaceModel || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$WorkspaceModel = io_cloudoffice_platform_cockpit_layout_LayoutComponent$WorkspaceModel(false))).constructor.$class, 3, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"itemId", 0, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"itemName", 1, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"itemType", 2, 0, 0);
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.setValue__VLio_cloudoffice_platform_cockpit_layout_Workspace_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
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

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_layout_Workspace || (refs_io_cloudoffice_platform_cockpit_layout_Workspace = io_cloudoffice_platform_cockpit_layout_Workspace(false))).access$100__Lio_cloudoffice_platform_cockpit_layout_Workspace$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setItemId__VLjava_lang_String_2(stA1);
return;
    }
    X_45: for (;;) { IF: if (gt <= 45) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_layout_Workspace || (refs_io_cloudoffice_platform_cockpit_layout_Workspace = io_cloudoffice_platform_cockpit_layout_Workspace(false))).access$100__Lio_cloudoffice_platform_cockpit_layout_Workspace$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setItemName__VLjava_lang_String_2(stA1);
return;
    }
    X_62: for (;;) { IF: if (gt <= 62) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_layout_Workspace || (refs_io_cloudoffice_platform_cockpit_layout_Workspace = io_cloudoffice_platform_cockpit_layout_Workspace(false))).access$100__Lio_cloudoffice_platform_cockpit_layout_Workspace$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setItemType__VLjava_lang_String_2(stA1);
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
    m = c.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_layout_Workspace_2I = function(lcA1, lcI2) {
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

var stA0 = lcA1.getItemId__Ljava_lang_String_2();
return stA0;
    }
    X_33: for (;;) { IF: if (gt <= 33) {

var stA0 = lcA1.getItemName__Ljava_lang_String_2();
return stA0;
    }
    X_38: for (;;) { IF: if (gt <= 38) {

var stA0 = lcA1.getItemType__Ljava_lang_String_2();
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
    m = c.call__VLio_cloudoffice_platform_cockpit_layout_Workspace_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_layout_Workspace']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.layout.Workspace');
var stA0 = (refs_io_cloudoffice_platform_cockpit_layout_Workspace || (refs_io_cloudoffice_platform_cockpit_layout_Workspace = io_cloudoffice_platform_cockpit_layout_Workspace(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_layout_Workspace_2(lcA1);
return stA0;

};
c['protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.onChange__VLio_cloudoffice_platform_cockpit_layout_Workspace_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLio_cloudoffice_platform_cockpit_layout_Workspace_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
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
    m = c.read__Lio_cloudoffice_platform_cockpit_layout_Workspace_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = new io_cloudoffice_platform_cockpit_layout_Workspace;
(refs_io_cloudoffice_platform_cockpit_layout_Workspace || (refs_io_cloudoffice_platform_cockpit_layout_Workspace = io_cloudoffice_platform_cockpit_layout_Workspace(false))).constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_layout_Workspace$1_2.call(stA0, lcA1, lcA2, null);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.cloneTo__Lio_cloudoffice_platform_cockpit_layout_Workspace_2Lio_cloudoffice_platform_cockpit_layout_Workspace_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = (refs_io_cloudoffice_platform_cockpit_layout_Workspace || (refs_io_cloudoffice_platform_cockpit_layout_Workspace = io_cloudoffice_platform_cockpit_layout_Workspace(false))).access$400__Lio_cloudoffice_platform_cockpit_layout_Workspace_2Lio_cloudoffice_platform_cockpit_layout_Workspace_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_layout_Workspace']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.layout.Workspace');
lcA0.onMessage__VLio_cloudoffice_platform_cockpit_layout_Workspace_2IILjava_lang_Object_2_3Ljava_lang_Object_2(lcA1, lcI2, lcI3, lcA4, lcA5);
return;

};
c['onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.onChange__VLjava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_layout_Workspace']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.layout.Workspace');
lcA0.onChange__VLio_cloudoffice_platform_cockpit_layout_Workspace_2I(lcA1, lcI2);
return;

};
c['onChange__VLjava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = lcA0.read__Lio_cloudoffice_platform_cockpit_layout_Workspace_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2(lcA1, lcA2);
return stA0;

};
c['read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_layout_Workspace']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.layout.Workspace');
var stA0 = lcA0.cloneTo__Lio_cloudoffice_platform_cockpit_layout_Workspace_2Lio_cloudoffice_platform_cockpit_layout_Workspace_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
c['cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_layout_Workspace']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.layout.Workspace');
lcA0.call__VLio_cloudoffice_platform_cockpit_layout_Workspace_2ILjava_lang_Object_2Ljava_lang_Object_2(lcA1, lcI2, lcA3, lcA4);
return;

};
c['call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Ljava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_layout_Workspace']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.layout.Workspace');
var stA0 = lcA0.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_layout_Workspace_2I(lcA1, lcI2);
return stA0;

};
c['getValue__Ljava_lang_Object_2Ljava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.setValue__VLjava_lang_Object_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_layout_Workspace']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.layout.Workspace');
lcA0.setValue__VLio_cloudoffice_platform_cockpit_layout_Workspace_2ILjava_lang_Object_2(lcA1, lcI2, lcA3);
return;

};
c['setValue__VLjava_lang_Object_2ILjava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_layout_Workspace$1_2 = function(lcA1) {
  var  lcA0 = this;
c.constructor.cons__V.call(lcA0);
return;

};
    m.access = 4096;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_layout_Workspace$Html4JavaTypefillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_layout_Workspace$Html4JavaType', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_layout_Workspace$Html4JavaTypefillInstOf });
    io_cloudoffice_platform_cockpit_layout_Workspace$Html4JavaTypefillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/layout/Workspace$Html4JavaType';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_layout_Workspace;
    var refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$WorkspaceModel;
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
vm.io_cloudoffice_platform_cockpit_layout_Workspace$Html4JavaType = io_cloudoffice_platform_cockpit_layout_Workspace$Html4JavaType;


function io_cloudoffice_platform_cockpit_layout_LayoutComponent$WorkspaceModel() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_layout_LayoutComponent$WorkspaceModel;
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
CLS['cons__V'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_layout_LayoutComponent$WorkspaceModelfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_layout_LayoutComponent$WorkspaceModel', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_layout_LayoutComponent$WorkspaceModelfillInstOf });
    io_cloudoffice_platform_cockpit_layout_LayoutComponent$WorkspaceModelfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/layout/LayoutComponent$WorkspaceModel';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 33;
    CLS.$class.cnstr = CLS;
    var refs_java_lang_Object;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_layout_LayoutComponent$WorkspaceModel = registerClass(exports,'io_cloudoffice_platform_cockpit_layout_LayoutComponent$WorkspaceModel',io_cloudoffice_platform_cockpit_layout_LayoutComponent$WorkspaceModel);


function io_cloudoffice_platform_cockpit_layout_LayoutComponent$DomainModel() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_layout_LayoutComponent$DomainModel;
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
CLS['cons__V'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_layout_LayoutComponent$DomainModelfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_layout_LayoutComponent$DomainModel', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_layout_LayoutComponent$DomainModelfillInstOf });
    io_cloudoffice_platform_cockpit_layout_LayoutComponent$DomainModelfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/layout/LayoutComponent$DomainModel';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 33;
    CLS.$class.cnstr = CLS;
    var refs_java_lang_Object;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_layout_LayoutComponent$DomainModel = registerClass(exports,'io_cloudoffice_platform_cockpit_layout_LayoutComponent$DomainModel',io_cloudoffice_platform_cockpit_layout_LayoutComponent$DomainModel);


function io_cloudoffice_platform_cockpit_layout_LayoutComponent$2() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_layout_LayoutComponent$2;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$path = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$2_val$path'] = v; return this['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$2_val$path']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_layout_Path_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$2_val$path'] = lcA1;
(refs_java_lang_Object || (refs_java_lang_Object = vm.java_lang_Object(false))).constructor['cons__V'].call(lcA0);
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.handle__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

(refs_io_cloudoffice_platform_cockpit_api_Logger || (refs_io_cloudoffice_platform_cockpit_api_Logger = vm.io_cloudoffice_platform_cockpit_api_Logger(false)))['log__VLjava_lang_String_2'](">>> Get information from the domain json.");
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor;
(refs_io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor || (refs_io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor = vm.io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor(false))).constructor['cons__V'].call(stA0);
var stA1 = lcA1;var stA2 = new io_cloudoffice_platform_cockpit_layout_Domain;
(refs_io_cloudoffice_platform_cockpit_layout_Domain || (refs_io_cloudoffice_platform_cockpit_layout_Domain = io_cloudoffice_platform_cockpit_layout_Domain(false))).constructor.cons__V.call(stA2);
var stA0 = invoker.getObject__Ljava_lang_Object_2Ljava_lang_String_2Ljava_lang_Object_2(stA0,stA1, stA2);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_layout_Domain']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.layout.Domain');
var lcA2 = stA0;
var stA0 = lcA2;var stA1 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$2_val$path'].getPath__Ljava_lang_String_2();
var stI0 = (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent = io_cloudoffice_platform_cockpit_layout_LayoutComponent(false))).pathExistOnDomainPaths__ZLio_cloudoffice_platform_cockpit_layout_Domain_2Ljava_lang_String_2(stA0, stA1);
if ((stI0) == 0) { gt = 44; break IF; }
{ gt = 86; break IF; }
    }
    X_44: for (;;) { IF: if (gt <= 44) {

var stI0 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$2_val$path'].isIsHome__Z();
if ((stI0) == 0) { gt = 58; break IF; }
(refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent = io_cloudoffice_platform_cockpit_layout_LayoutComponent(false))).makeHomeStatusFalseOnEachPath__VLio_cloudoffice_platform_cockpit_layout_Domain_2(lcA2);
    }
    X_58: for (;;) { IF: if (gt <= 58) {

var stA0 = lcA2.getPaths__Ljava_util_List_2();
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,lcA0['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$2_val$path']);
(refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent = io_cloudoffice_platform_cockpit_layout_LayoutComponent(false))).writeondomainJSON__VLio_cloudoffice_platform_cockpit_layout_Domain_2(lcA2);
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$2_val$path'].getPath__Ljava_lang_String_2();
(refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent = io_cloudoffice_platform_cockpit_layout_LayoutComponent(false))).copyrawlayoutfromtheplatformlayoutstore__VLjava_lang_String_2(stA0);
    }
    X_86: for (;;) { IF: if (gt <= 86) {
return;

    }
}}}}
};
c['handle__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_layout_LayoutComponent$2fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_layout_LayoutComponent$2', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_CallBack(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_layout_LayoutComponent$2fillInstOf });
    io_cloudoffice_platform_cockpit_layout_LayoutComponent$2fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/layout/LayoutComponent$2';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_CallBack(false).constructor.$class
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
    var refs_java_lang_Object;
    var refs_io_cloudoffice_platform_cockpit_api_Logger;
    var refs_io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor;
    var refs_io_cloudoffice_platform_cockpit_layout_Domain;
    var refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$2_val$path'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_layout_LayoutComponent$2 = io_cloudoffice_platform_cockpit_layout_LayoutComponent$2;

vm.io_cloudoffice_platform_cockpit_api_UtilValidate = link('io/cloudoffice/platform/cockpit/api/UtilValidate', function(f) { vm.io_cloudoffice_platform_cockpit_api_UtilValidate =  f; });

function io_cloudoffice_platform_cockpit_layout_LayoutComponent$1() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_layout_LayoutComponent$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$layout = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$1_val$layout'] = v; return this['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$1_val$layout']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_layout_Layout_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$1_val$layout'] = lcA1;
(refs_java_lang_Object || (refs_java_lang_Object = vm.java_lang_Object(false))).constructor['cons__V'].call(lcA0);
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.handle__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor;
(refs_io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor || (refs_io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor = vm.io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor(false))).constructor['cons__V'].call(stA0);
var stA1 = lcA1;var stA2 = new io_cloudoffice_platform_cockpit_layout_Domain;
(refs_io_cloudoffice_platform_cockpit_layout_Domain || (refs_io_cloudoffice_platform_cockpit_layout_Domain = io_cloudoffice_platform_cockpit_layout_Domain(false))).constructor.cons__V.call(stA2);
var stA0 = invoker.getObject__Ljava_lang_Object_2Ljava_lang_String_2Ljava_lang_Object_2(stA0,stA1, stA2);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_layout_Domain']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.layout.Domain');
var lcA2 = stA0;
lcA0['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$1_val$layout'].setDomain__VLio_cloudoffice_platform_cockpit_layout_Domain_2(lcA2);
return;

};
c['handle__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_layout_LayoutComponent$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_layout_LayoutComponent$1', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_CallBack(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_layout_LayoutComponent$1fillInstOf });
    io_cloudoffice_platform_cockpit_layout_LayoutComponent$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/layout/LayoutComponent$1';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_CallBack(false).constructor.$class
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
    var refs_java_lang_Object;
    var refs_io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor;
    var refs_io_cloudoffice_platform_cockpit_layout_Domain;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$1_val$layout'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_layout_LayoutComponent$1 = io_cloudoffice_platform_cockpit_layout_LayoutComponent$1;


function io_cloudoffice_platform_cockpit_layout_Path() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_layout_Path;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_TYPE'] = null;
  m = c._TYPE = function (v) {  if (arguments.length == 1) CLS['fld_TYPE'] = v; return CLS['fld_TYPE']; };
  m = c._proto = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_layout_Path_proto'] = v; return this['fld_io_cloudoffice_platform_cockpit_layout_Path_proto']; };
  m = c._prop_path = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_layout_Path_prop_path'] = v; return this['fld_io_cloudoffice_platform_cockpit_layout_Path_prop_path']; };
  m = c._prop_layout = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_layout_Path_prop_layout'] = v; return this['fld_io_cloudoffice_platform_cockpit_layout_Path_prop_layout']; };
  m = c._prop_mlayout = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_layout_Path_prop_mlayout'] = v; return this['fld_io_cloudoffice_platform_cockpit_layout_Path_prop_mlayout']; };
  m = c._prop_isHome = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_layout_Path_prop_isHome'] = v; return this['fld_io_cloudoffice_platform_cockpit_layout_Path_prop_isHome']; };
  m = c._prop_isSecure = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_layout_Path_prop_isSecure'] = v; return this['fld_io_cloudoffice_platform_cockpit_layout_Path_prop_isSecure']; };
    m = c.modelFor__Ljava_lang_Class_2 = function() {
return (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$PathModel || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$PathModel = io_cloudoffice_platform_cockpit_layout_LayoutComponent$PathModel(false))).constructor.$class;

};
    m.access = 10;
    m.cls = CLS;
    m = c.getPath__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Path_proto'],"path");
return lcA0['fld_io_cloudoffice_platform_cockpit_layout_Path_prop_path'];

};
c['getPath__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setPath__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Path_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_Path_prop_path'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_layout_Path_prop_path'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Path_proto'],"path", lcA2, lcA1);
return;

    }
}}
};
c['setPath__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getLayout__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Path_proto'],"layout");
return lcA0['fld_io_cloudoffice_platform_cockpit_layout_Path_prop_layout'];

};
c['getLayout__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setLayout__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Path_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_Path_prop_layout'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_layout_Path_prop_layout'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Path_proto'],"layout", lcA2, lcA1);
return;

    }
}}
};
c['setLayout__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getMlayout__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Path_proto'],"mlayout");
return lcA0['fld_io_cloudoffice_platform_cockpit_layout_Path_prop_mlayout'];

};
c['getMlayout__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setMlayout__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Path_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_Path_prop_mlayout'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_layout_Path_prop_mlayout'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Path_proto'],"mlayout", lcA2, lcA1);
return;

    }
}}
};
c['setMlayout__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isIsHome__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Path_proto'],"isHome");
return lcA0['fld_io_cloudoffice_platform_cockpit_layout_Path_prop_isHome'];

};
c['isIsHome__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setIsHome__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Path_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_layout_Path_prop_isHome']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_layout_Path_prop_isHome'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_Path_proto'];var stA1 = "isHome";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2, stA3);
return;

    }
}}
};
c['setIsHome__VZ'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isIsSecure__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Path_proto'],"isSecure");
return lcA0['fld_io_cloudoffice_platform_cockpit_layout_Path_prop_isSecure'];

};
c['isIsSecure__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setIsSecure__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Path_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_layout_Path_prop_isSecure']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_layout_Path_prop_isSecure'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_Path_proto'];var stA1 = "isSecure";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2, stA3);
return;

    }
}}
};
c['setIsSecure__VZ'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;
(refs_java_lang_Object || (refs_java_lang_Object = vm.java_lang_Object(false))).constructor['cons__V'].call(lcA0);
var stA0 = lcA0;var stA1 = invoker.createProto__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2(c._TYPE(),lcA0, lcA1);
stA0['fld_io_cloudoffice_platform_cockpit_layout_Path_proto'] = stA1;
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
    m = CLS.cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2ZZ = function(lcA1, lcA2, lcA3, lcI4, lcI5) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = (refs_net_java_html_BrwsrCtx || (refs_net_java_html_BrwsrCtx = vm.net_java_html_BrwsrCtx(false)))['findDefault__Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'](c.constructor.$class);
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, stA1);
lcA0['fld_io_cloudoffice_platform_cockpit_layout_Path_prop_path'] = lcA1;
lcA0['fld_io_cloudoffice_platform_cockpit_layout_Path_prop_layout'] = lcA2;
lcA0['fld_io_cloudoffice_platform_cockpit_layout_Path_prop_mlayout'] = lcA3;
lcA0['fld_io_cloudoffice_platform_cockpit_layout_Path_prop_isHome'] = lcI4;
lcA0['fld_io_cloudoffice_platform_cockpit_layout_Path_prop_isSecure'] = lcI5;
return;

};
CLS['cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2ZZ'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 5);
var lcA3 = stA0;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_Path_proto'];var stA1 = lcA2;var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, 5);
Array.at(stA2, 0, "path");
Array.at(stA2, 1, "layout");
Array.at(stA2, 2, "mlayout");
Array.at(stA2, 3, "isHome");
Array.at(stA2, 4, "isSecure");
invoker.extract__VLjava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Object_2(stA0,stA1, stA2, lcA3);
if ((lcA3[0] || Array.at(lcA3, 0)) !== null && !(lcA3[0] || Array.at(lcA3, 0))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[0] || Array.at(lcA3, 0)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_layout_Path_prop_path'] = (lcA3[0] || Array.at(lcA3, 0));
if ((lcA3[1] || Array.at(lcA3, 1)) !== null && !(lcA3[1] || Array.at(lcA3, 1))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[1] || Array.at(lcA3, 1)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_layout_Path_prop_layout'] = (lcA3[1] || Array.at(lcA3, 1));
if ((lcA3[2] || Array.at(lcA3, 2)) !== null && !(lcA3[2] || Array.at(lcA3, 2))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[2] || Array.at(lcA3, 2)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_layout_Path_prop_mlayout'] = (lcA3[2] || Array.at(lcA3, 2));
var stA0 = lcA0;if (((lcA3[3] || Array.at(lcA3, 3))) !== null) { gt = 89; break IF; }
var stI1 = 0;{ gt = 101; break IF; }
    }
    X_89: for (;;) { IF: if (gt <= 89) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[3] || Array.at(lcA3, 3)));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_101: for (;;) { IF: if (gt <= 101) {
stA0['fld_io_cloudoffice_platform_cockpit_layout_Path_prop_isHome'] = stI1;
var stA0 = lcA0;if (((lcA3[4] || Array.at(lcA3, 4))) !== null) { gt = 115; break IF; }
var stI1 = 0;{ gt = 127; break IF; }
    }
    X_115: for (;;) { IF: if (gt <= 115) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[4] || Array.at(lcA3, 4)));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_127: for (;;) { IF: if (gt <= 127) {
stA0['fld_io_cloudoffice_platform_cockpit_layout_Path_prop_isSecure'] = stI1;
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
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"path");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getPath__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"layout");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getLayout__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"mlayout");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getMlayout__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"isHome");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stI2 = lcA0.isIsHome__Z();
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI2);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"isSecure");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stI2 = lcA0.isIsSecure__Z();
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
    m = c.clone__Lio_cloudoffice_platform_cockpit_layout_Path_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Path_proto']);
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_layout_Path_2Lnet_java_html_BrwsrCtx_2.call(stA0, stA1);
return stA0;

};
c['clone__Lio_cloudoffice_platform_cockpit_layout_Path_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Lio_cloudoffice_platform_cockpit_layout_Path_2Lnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = new io_cloudoffice_platform_cockpit_layout_Path;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, lcA1);
var lcA2 = stA0;
var stA0 = lcA2;var stA1 = lcA0.getPath__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_layout_Path_prop_path'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getLayout__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_layout_Path_prop_layout'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getMlayout__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_layout_Path_prop_mlayout'] = stA1;
var stA0 = lcA2;var stI1 = lcA0.isIsHome__Z();
stA0['fld_io_cloudoffice_platform_cockpit_layout_Path_prop_isHome'] = stI1;
var stA0 = lcA2;var stI1 = lcA0.isIsSecure__Z();
stA0['fld_io_cloudoffice_platform_cockpit_layout_Path_prop_isSecure'] = stI1;
return lcA2;

};
    m.access = 2;
    m.cls = CLS;
    m = c.applyBindings__Lio_cloudoffice_platform_cockpit_layout_Path_2 = function() {
  var  lcA0 = this;
invoker.applyBindings__V(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Path_proto']);
return lcA0;

};
c['applyBindings__Lio_cloudoffice_platform_cockpit_layout_Path_2'] = m;

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

var stI0 = lcA1 != null && lcA1['$instOf_io_cloudoffice_platform_cockpit_layout_Path'] ? 1 : 0;
if ((stI0) != 0) { gt = 16; break IF; }
return 0;
    }
    X_16: for (;;) { IF: if (gt <= 16) {

if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_layout_Path']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.layout.Path');
var lcA2 = lcA1;
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_layout_Path_prop_path'], lcA2['fld_io_cloudoffice_platform_cockpit_layout_Path_prop_path']);
if ((stI0) != 0) { gt = 40; break IF; }
return 0;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_layout_Path_prop_layout'], lcA2['fld_io_cloudoffice_platform_cockpit_layout_Path_prop_layout']);
if ((stI0) != 0) { gt = 59; break IF; }
return 0;
    }
    X_59: for (;;) { IF: if (gt <= 59) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_layout_Path_prop_mlayout'], lcA2['fld_io_cloudoffice_platform_cockpit_layout_Path_prop_mlayout']);
if ((stI0) != 0) { gt = 78; break IF; }
return 0;
    }
    X_78: for (;;) { IF: if (gt <= 78) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_layout_Path_prop_isHome']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_layout_Path_prop_isHome']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 103; break IF; }
return 0;
    }
    X_103: for (;;) { IF: if (gt <= 103) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_layout_Path_prop_isSecure']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_layout_Path_prop_isSecure']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 128; break IF; }
return 0;
    }
    X_128: for (;;) { IF: if (gt <= 128) {

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
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_layout_Path_prop_path'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_layout_Path_prop_layout'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_layout_Path_prop_mlayout'], lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_layout_Path_prop_isHome']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_layout_Path_prop_isSecure']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
return lcI1;

};
c['hashCode__I'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Ljava_lang_Object_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0.clone__Lio_cloudoffice_platform_cockpit_layout_Path_2();
return stA0;

};
c['clone__Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.access$100__Lio_cloudoffice_platform_cockpit_layout_Path$Html4JavaType_2 = function() {
return c._TYPE();

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_layout_Path_2 = function(lcA0) {
return lcA0['fld_io_cloudoffice_platform_cockpit_layout_Path_proto'];

};
    m.access = 4104;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_layout_Path$1_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2.call(lcA0, lcA1, lcA2);
return;

};
    m.access = 4096;
    m.cls = CLS;
    m = c.access$400__Lio_cloudoffice_platform_cockpit_layout_Path_2Lio_cloudoffice_platform_cockpit_layout_Path_2Lnet_java_html_BrwsrCtx_2 = function(lcA0, lcA1) {
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_layout_Path_2Lnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
return stA0;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new io_cloudoffice_platform_cockpit_layout_Path$Html4JavaType;
(refs_io_cloudoffice_platform_cockpit_layout_Path$Html4JavaType || (refs_io_cloudoffice_platform_cockpit_layout_Path$Html4JavaType = io_cloudoffice_platform_cockpit_layout_Path$Html4JavaType(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_layout_Path$1_2.call(stA0, null);
c._TYPE(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_layout_PathfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_layout_Path', { value : true });
      vm.java_lang_Cloneable(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_layout_PathfillInstOf });
    io_cloudoffice_platform_cockpit_layout_PathfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/layout/Path';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.java_lang_Cloneable(false).constructor.$class
    ]; };
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$PathModel;
    var refs_java_lang_Boolean;
    var refs_java_lang_Object;
    var refs_net_java_html_BrwsrCtx;
    var refs_java_lang_StringBuilder;
    var refs_io_cloudoffice_platform_cockpit_layout_Path$Html4JavaType;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_layout_Path_proto'] = null;
    this['fld_io_cloudoffice_platform_cockpit_layout_Path_prop_path'] = null;
    this['fld_io_cloudoffice_platform_cockpit_layout_Path_prop_layout'] = null;
    this['fld_io_cloudoffice_platform_cockpit_layout_Path_prop_mlayout'] = null;
    this['fld_io_cloudoffice_platform_cockpit_layout_Path_prop_isHome'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_layout_Path_prop_isSecure'] = 0;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_layout_Path = registerClass(exports,'io_cloudoffice_platform_cockpit_layout_Path',io_cloudoffice_platform_cockpit_layout_Path);


function io_cloudoffice_platform_cockpit_layout_Path$Html4JavaType() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_layout_Path$Html4JavaType;
  if (!CLS.$class) {
    var pp = vm.org_netbeans_html_json_spi_Proto$Type(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_org_netbeans_html_json_spi_Proto$Type || (refs_org_netbeans_html_json_spi_Proto$Type = vm.org_netbeans_html_json_spi_Proto$Type(false))).constructor['cons__VLjava_lang_Class_2Ljava_lang_Class_2II'].call(lcA0, (refs_io_cloudoffice_platform_cockpit_layout_Path || (refs_io_cloudoffice_platform_cockpit_layout_Path = io_cloudoffice_platform_cockpit_layout_Path(false))).constructor.$class, (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$PathModel || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$PathModel = io_cloudoffice_platform_cockpit_layout_LayoutComponent$PathModel(false))).constructor.$class, 5, 4);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"path", 0, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"layout", 1, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"mlayout", 2, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"isHome", 3, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"isSecure", 4, 0, 0);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"togglesecuritystatus", 0);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"makepathashomepath", 1);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"removepath", 2);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"putpathoneditpanel", 3);
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.setValue__VLio_cloudoffice_platform_cockpit_layout_Path_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0:{ gt = 36; break IF; }
  case 1:{ gt = 53; break IF; }
  case 2:{ gt = 70; break IF; }
  case 3:{ gt = 87; break IF; }
  case 4:{ gt = 107; break IF; }
  default: { gt = 127; break IF; }
}
    }
    X_36: for (;;) { IF: if (gt <= 36) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_layout_Path || (refs_io_cloudoffice_platform_cockpit_layout_Path = io_cloudoffice_platform_cockpit_layout_Path(false))).access$100__Lio_cloudoffice_platform_cockpit_layout_Path$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setPath__VLjava_lang_String_2(stA1);
return;
    }
    X_53: for (;;) { IF: if (gt <= 53) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_layout_Path || (refs_io_cloudoffice_platform_cockpit_layout_Path = io_cloudoffice_platform_cockpit_layout_Path(false))).access$100__Lio_cloudoffice_platform_cockpit_layout_Path$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setLayout__VLjava_lang_String_2(stA1);
return;
    }
    X_70: for (;;) { IF: if (gt <= 70) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_layout_Path || (refs_io_cloudoffice_platform_cockpit_layout_Path = io_cloudoffice_platform_cockpit_layout_Path(false))).access$100__Lio_cloudoffice_platform_cockpit_layout_Path$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setMlayout__VLjava_lang_String_2(stA1);
return;
    }
    X_87: for (;;) { IF: if (gt <= 87) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_layout_Path || (refs_io_cloudoffice_platform_cockpit_layout_Path = io_cloudoffice_platform_cockpit_layout_Path(false))).access$100__Lio_cloudoffice_platform_cockpit_layout_Path$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setIsHome__VZ(stI1);
return;
    }
    X_107: for (;;) { IF: if (gt <= 107) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_layout_Path || (refs_io_cloudoffice_platform_cockpit_layout_Path = io_cloudoffice_platform_cockpit_layout_Path(false))).access$100__Lio_cloudoffice_platform_cockpit_layout_Path$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setIsSecure__VZ(stI1);
return;
    }
    X_127: for (;;) { IF: if (gt <= 127) {
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

    }
}}}}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_layout_Path_2I = function(lcA1, lcI2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0:{ gt = 36; break IF; }
  case 1:{ gt = 41; break IF; }
  case 2:{ gt = 46; break IF; }
  case 3:{ gt = 51; break IF; }
  case 4:{ gt = 59; break IF; }
  default: { gt = 67; break IF; }
}
    }
    X_36: for (;;) { IF: if (gt <= 36) {

var stA0 = lcA1.getPath__Ljava_lang_String_2();
return stA0;
    }
    X_41: for (;;) { IF: if (gt <= 41) {

var stA0 = lcA1.getLayout__Ljava_lang_String_2();
return stA0;
    }
    X_46: for (;;) { IF: if (gt <= 46) {

var stA0 = lcA1.getMlayout__Ljava_lang_String_2();
return stA0;
    }
    X_51: for (;;) { IF: if (gt <= 51) {

var stI0 = lcA1.isIsHome__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_59: for (;;) { IF: if (gt <= 59) {

var stI0 = lcA1.isIsSecure__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
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
    m = c.call__VLio_cloudoffice_platform_cockpit_layout_Path_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
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

(refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$PathModel || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$PathModel = io_cloudoffice_platform_cockpit_layout_LayoutComponent$PathModel(false))).togglesecuritystatus__VLio_cloudoffice_platform_cockpit_layout_Path_2(lcA1);
return;
    }
    X_37: for (;;) { IF: if (gt <= 37) {

(refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$PathModel || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$PathModel = io_cloudoffice_platform_cockpit_layout_LayoutComponent$PathModel(false))).makepathashomepath__VLio_cloudoffice_platform_cockpit_layout_Path_2(lcA1);
return;
    }
    X_42: for (;;) { IF: if (gt <= 42) {

(refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$PathModel || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$PathModel = io_cloudoffice_platform_cockpit_layout_LayoutComponent$PathModel(false))).removepath__VLio_cloudoffice_platform_cockpit_layout_Path_2(lcA1);
return;
    }
    X_47: for (;;) { IF: if (gt <= 47) {

(refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$PathModel || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$PathModel = io_cloudoffice_platform_cockpit_layout_LayoutComponent$PathModel(false))).putpathoneditpanel__VLio_cloudoffice_platform_cockpit_layout_Path_2(lcA1);
return;
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
    m = c.protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_layout_Path']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.layout.Path');
var stA0 = (refs_io_cloudoffice_platform_cockpit_layout_Path || (refs_io_cloudoffice_platform_cockpit_layout_Path = io_cloudoffice_platform_cockpit_layout_Path(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_layout_Path_2(lcA1);
return stA0;

};
c['protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.onChange__VLio_cloudoffice_platform_cockpit_layout_Path_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLio_cloudoffice_platform_cockpit_layout_Path_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
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
    m = c.read__Lio_cloudoffice_platform_cockpit_layout_Path_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = new io_cloudoffice_platform_cockpit_layout_Path;
(refs_io_cloudoffice_platform_cockpit_layout_Path || (refs_io_cloudoffice_platform_cockpit_layout_Path = io_cloudoffice_platform_cockpit_layout_Path(false))).constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_layout_Path$1_2.call(stA0, lcA1, lcA2, null);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.cloneTo__Lio_cloudoffice_platform_cockpit_layout_Path_2Lio_cloudoffice_platform_cockpit_layout_Path_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = (refs_io_cloudoffice_platform_cockpit_layout_Path || (refs_io_cloudoffice_platform_cockpit_layout_Path = io_cloudoffice_platform_cockpit_layout_Path(false))).access$400__Lio_cloudoffice_platform_cockpit_layout_Path_2Lio_cloudoffice_platform_cockpit_layout_Path_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_layout_Path']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.layout.Path');
lcA0.onMessage__VLio_cloudoffice_platform_cockpit_layout_Path_2IILjava_lang_Object_2_3Ljava_lang_Object_2(lcA1, lcI2, lcI3, lcA4, lcA5);
return;

};
c['onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.onChange__VLjava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_layout_Path']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.layout.Path');
lcA0.onChange__VLio_cloudoffice_platform_cockpit_layout_Path_2I(lcA1, lcI2);
return;

};
c['onChange__VLjava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = lcA0.read__Lio_cloudoffice_platform_cockpit_layout_Path_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2(lcA1, lcA2);
return stA0;

};
c['read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_layout_Path']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.layout.Path');
var stA0 = lcA0.cloneTo__Lio_cloudoffice_platform_cockpit_layout_Path_2Lio_cloudoffice_platform_cockpit_layout_Path_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
c['cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_layout_Path']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.layout.Path');
lcA0.call__VLio_cloudoffice_platform_cockpit_layout_Path_2ILjava_lang_Object_2Ljava_lang_Object_2(lcA1, lcI2, lcA3, lcA4);
return;

};
c['call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Ljava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_layout_Path']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.layout.Path');
var stA0 = lcA0.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_layout_Path_2I(lcA1, lcI2);
return stA0;

};
c['getValue__Ljava_lang_Object_2Ljava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.setValue__VLjava_lang_Object_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_layout_Path']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.layout.Path');
lcA0.setValue__VLio_cloudoffice_platform_cockpit_layout_Path_2ILjava_lang_Object_2(lcA1, lcI2, lcA3);
return;

};
c['setValue__VLjava_lang_Object_2ILjava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_layout_Path$1_2 = function(lcA1) {
  var  lcA0 = this;
c.constructor.cons__V.call(lcA0);
return;

};
    m.access = 4096;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_layout_Path$Html4JavaTypefillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_layout_Path$Html4JavaType', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_layout_Path$Html4JavaTypefillInstOf });
    io_cloudoffice_platform_cockpit_layout_Path$Html4JavaTypefillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/layout/Path$Html4JavaType';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_layout_Path;
    var refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$PathModel;
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
vm.io_cloudoffice_platform_cockpit_layout_Path$Html4JavaType = io_cloudoffice_platform_cockpit_layout_Path$Html4JavaType;


function io_cloudoffice_platform_cockpit_layout_LayoutComponent$PathModel() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_layout_LayoutComponent$PathModel;
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
CLS['cons__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.togglesecuritystatus__VLio_cloudoffice_platform_cockpit_layout_Path_2 = function(lcA0) {
c.readDomainInformationAndTogglePathSecurity__VLio_cloudoffice_platform_cockpit_layout_Path_2(lcA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.readDomainInformationAndTogglePathSecurity__VLio_cloudoffice_platform_cockpit_layout_Path_2 = function(lcA0) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['_CONFIG']();var stA1 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['pathsListFetchEndpoint__Ljava_lang_String_2']();
var stA2 = null;var stA3 = new io_cloudoffice_platform_cockpit_layout_LayoutComponent$PathModel$1;
(refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$PathModel$1 || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$PathModel$1 = io_cloudoffice_platform_cockpit_layout_LayoutComponent$PathModel$1(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_layout_Path_2.call(stA3, lcA0);
invoker.fetch__VLjava_lang_String_2Ljava_util_Map_2Lio_cloudoffice_platform_cockpit_api_CallBack_2(stA0,stA1, stA2, stA3);
return;

};
c['readDomainInformationAndTogglePathSecurity__VLio_cloudoffice_platform_cockpit_layout_Path_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.togglepathsecurity__VLio_cloudoffice_platform_cockpit_layout_Domain_2Lio_cloudoffice_platform_cockpit_layout_Path_2 = function(lcA0, lcA1) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = lcA0.getPaths__Ljava_util_List_2();
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA2 = stA0;
    }
    X_10: for (;;) { IF: if (gt <= 10) {

var stI0 = invoker.hasNext__Z(lcA2);
if ((stI0) == 0) { gt = 82; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA2);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_layout_Path']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.layout.Path');
var lcA3 = stA0;
var stA0 = lcA3.getPath__Ljava_lang_String_2();
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](stA0);
if ((stI0) == 0) { gt = 79; break IF; }
var stA0 = lcA1.getPath__Ljava_lang_String_2();
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](stA0);
if ((stI0) == 0) { gt = 79; break IF; }
var stA0 = lcA1.getPath__Ljava_lang_String_2();
var stA1 = lcA3.getPath__Ljava_lang_String_2();
var stI0 = invoker.equalsIgnoreCase__ZLjava_lang_String_2(stA0,stA1);
if ((stI0) == 0) { gt = 79; break IF; }
var stA0 = lcA3;var stI1 = lcA1.isIsSecure__Z();
if ((stI1) != 0) { gt = 75; break IF; }
var stI1 = 1;{ gt = 76; break IF; }
    }
    X_75: for (;;) { IF: if (gt <= 75) {

var stI1 = 0;    }
    X_76: for (;;) { IF: if (gt <= 76) {
stA0.setIsSecure__VZ(stI1);
    }
    X_79: for (;;) { IF: if (gt <= 79) {
{ gt = 0; continue X_10; }
    }
    X_82: for (;;) { IF: if (gt <= 82) {
return;

    }
}}}}}}
};
c['togglepathsecurity__VLio_cloudoffice_platform_cockpit_layout_Domain_2Lio_cloudoffice_platform_cockpit_layout_Path_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.makepathashomepath__VLio_cloudoffice_platform_cockpit_layout_Path_2 = function(lcA0) {
c.readDomainInformationAndSaveHomePath__VLio_cloudoffice_platform_cockpit_layout_Path_2(lcA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.readDomainInformationAndSaveHomePath__VLio_cloudoffice_platform_cockpit_layout_Path_2 = function(lcA0) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['_CONFIG']();var stA1 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['pathsListFetchEndpoint__Ljava_lang_String_2']();
var stA2 = null;var stA3 = new io_cloudoffice_platform_cockpit_layout_LayoutComponent$PathModel$2;
(refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$PathModel$2 || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$PathModel$2 = io_cloudoffice_platform_cockpit_layout_LayoutComponent$PathModel$2(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_layout_Path_2.call(stA3, lcA0);
invoker.fetch__VLjava_lang_String_2Ljava_util_Map_2Lio_cloudoffice_platform_cockpit_api_CallBack_2(stA0,stA1, stA2, stA3);
return;

};
c['readDomainInformationAndSaveHomePath__VLio_cloudoffice_platform_cockpit_layout_Path_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.makehomepath__VLio_cloudoffice_platform_cockpit_layout_Domain_2Lio_cloudoffice_platform_cockpit_layout_Path_2 = function(lcA0, lcA1) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = lcA0.getPaths__Ljava_util_List_2();
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA2 = stA0;
    }
    X_10: for (;;) { IF: if (gt <= 10) {

var stI0 = invoker.hasNext__Z(lcA2);
if ((stI0) == 0) { gt = 79; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA2);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_layout_Path']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.layout.Path');
var lcA3 = stA0;
var stA0 = lcA3.getPath__Ljava_lang_String_2();
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](stA0);
if ((stI0) == 0) { gt = 71; break IF; }
var stA0 = lcA1.getPath__Ljava_lang_String_2();
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](stA0);
if ((stI0) == 0) { gt = 71; break IF; }
var stA0 = lcA1.getPath__Ljava_lang_String_2();
var stA1 = lcA3.getPath__Ljava_lang_String_2();
var stI0 = invoker.equalsIgnoreCase__ZLjava_lang_String_2(stA0,stA1);
if ((stI0) == 0) { gt = 71; break IF; }
lcA3.setIsHome__VZ(1);
{ gt = 76; break IF; }
    }
    X_71: for (;;) { IF: if (gt <= 71) {

lcA3.setIsHome__VZ(0);
    }
    X_76: for (;;) { IF: if (gt <= 76) {
{ gt = 0; continue X_10; }
    }
    X_79: for (;;) { IF: if (gt <= 79) {
return;

    }
}}}}}
};
c['makehomepath__VLio_cloudoffice_platform_cockpit_layout_Domain_2Lio_cloudoffice_platform_cockpit_layout_Path_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.removepath__VLio_cloudoffice_platform_cockpit_layout_Path_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_js_JSUIUtils || (refs_io_cloudoffice_platform_cockpit_js_JSUIUtils = vm.io_cloudoffice_platform_cockpit_js_JSUIUtils(false)))['getPath__Ljava_lang_String_2']();
var lcA1 = stA0;
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](lcA1);
if ((stI0) == 0) { gt = 61; break IF; }
var stA0 = lcA0.getPath__Ljava_lang_String_2();
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](stA0);
if ((stI0) == 0) { gt = 61; break IF; }
var stA0 = lcA1;var stA1 = lcA0.getPath__Ljava_lang_String_2();
var stI0 = invoker.equalsIgnoreCase__ZLjava_lang_String_2(stA0,stA1);
if ((stI0) != 0) { gt = 61; break IF; }
var stI0 = lcA0.isIsHome__Z();
if ((stI0) != 0) { gt = 53; break IF; }
c.readDomainInformationAndRemovePath__VLio_cloudoffice_platform_cockpit_layout_Path_2(lcA0);
var stA0 = lcA0.getPath__Ljava_lang_String_2();
c.deletePathAssociationFromLayout__VLjava_lang_String_2(stA0);
{ gt = 66; break IF; }
    }
    X_53: for (;;) { IF: if (gt <= 53) {

(refs_io_cloudoffice_platform_cockpit_api_Logger || (refs_io_cloudoffice_platform_cockpit_api_Logger = vm.io_cloudoffice_platform_cockpit_api_Logger(false)))['log__VLjava_lang_String_2'](">>> Current path is a home path, change home path and try again.");
{ gt = 66; break IF; }
    }
    X_61: for (;;) { IF: if (gt <= 61) {

(refs_io_cloudoffice_platform_cockpit_api_Logger || (refs_io_cloudoffice_platform_cockpit_api_Logger = vm.io_cloudoffice_platform_cockpit_api_Logger(false)))['log__VLjava_lang_String_2'](">>> This path is currently loaded, change path and try again.");
    }
    X_66: for (;;) { IF: if (gt <= 66) {
return;

    }
}}}}
};
    m.access = 8;
    m.cls = CLS;
    m = c.readDomainInformationAndRemovePath__VLio_cloudoffice_platform_cockpit_layout_Path_2 = function(lcA0) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['_CONFIG']();var stA1 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['pathsListFetchEndpoint__Ljava_lang_String_2']();
var stA2 = null;var stA3 = new io_cloudoffice_platform_cockpit_layout_LayoutComponent$PathModel$3;
(refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$PathModel$3 || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$PathModel$3 = io_cloudoffice_platform_cockpit_layout_LayoutComponent$PathModel$3(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_layout_Path_2.call(stA3, lcA0);
invoker.fetch__VLjava_lang_String_2Ljava_util_Map_2Lio_cloudoffice_platform_cockpit_api_CallBack_2(stA0,stA1, stA2, stA3);
return;

};
c['readDomainInformationAndRemovePath__VLio_cloudoffice_platform_cockpit_layout_Path_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.deletePathAssociationFromLayout__VLjava_lang_String_2 = function(lcA0) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['_CONFIG']();var stA1 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['pathAssociationsDeleteEndpoint__Ljava_lang_String_2Ljava_lang_String_2'](lcA0);
var stA2 = null;var stA3 = new io_cloudoffice_platform_cockpit_layout_LayoutComponent$PathModel$4;
(refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$PathModel$4 || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$PathModel$4 = io_cloudoffice_platform_cockpit_layout_LayoutComponent$PathModel$4(false))).constructor.cons__VLjava_lang_String_2.call(stA3, lcA0);
invoker.fetch__VLjava_lang_String_2Ljava_util_Map_2Lio_cloudoffice_platform_cockpit_api_CallBack_2(stA0,stA1, stA2, stA3);
return;

};
c['deletePathAssociationFromLayout__VLjava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.putpathoneditpanel__VLio_cloudoffice_platform_cockpit_layout_Path_2 = function(lcA0) {
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_Event;
var stA1 = stA0;var stA2 = "putpathoneditpanel";var stA3 = "invokefunction";var stA4 = lcA0.toString__Ljava_lang_String_2();
(refs_io_cloudoffice_platform_cockpit_api_Event || (refs_io_cloudoffice_platform_cockpit_api_Event = vm.io_cloudoffice_platform_cockpit_api_Event(false))).constructor['cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2'].call(stA1, stA2, stA3, stA4);
var lcA1 = stA0;
var stA0 = (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent = io_cloudoffice_platform_cockpit_layout_LayoutComponent(false))).getDefaultInstance__Lio_cloudoffice_platform_cockpit_api_Component_2();
invoker.listen__VLio_cloudoffice_platform_cockpit_api_Signal_2(stA0,lcA1);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_layout_LayoutComponent$PathModelfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_layout_LayoutComponent$PathModel', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_layout_LayoutComponent$PathModelfillInstOf });
    io_cloudoffice_platform_cockpit_layout_LayoutComponent$PathModelfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/layout/LayoutComponent$PathModel';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 33;
    CLS.$class.cnstr = CLS;
    var refs_java_lang_Object;
    var refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration;
    var refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$PathModel$1;
    var refs_io_cloudoffice_platform_cockpit_api_UtilValidate;
    var refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$PathModel$2;
    var refs_io_cloudoffice_platform_cockpit_js_JSUIUtils;
    var refs_io_cloudoffice_platform_cockpit_api_Logger;
    var refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$PathModel$3;
    var refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$PathModel$4;
    var refs_io_cloudoffice_platform_cockpit_api_Event;
    var refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_layout_LayoutComponent$PathModel = registerClass(exports,'io_cloudoffice_platform_cockpit_layout_LayoutComponent$PathModel',io_cloudoffice_platform_cockpit_layout_LayoutComponent$PathModel);


function io_cloudoffice_platform_cockpit_layout_LayoutComponent$PathModel$4() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_layout_LayoutComponent$PathModel$4;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$pathname = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$PathModel$4_val$pathname'] = v; return this['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$PathModel$4_val$pathname']; };
    m = CLS.cons__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$PathModel$4_val$pathname'] = lcA1;
(refs_java_lang_Object || (refs_java_lang_Object = vm.java_lang_Object(false))).constructor['cons__V'].call(lcA0);
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.handle__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,">>> Path(");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,lcA0['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$PathModel$4_val$pathname']);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,") association from layout deleted.");
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
(refs_io_cloudoffice_platform_cockpit_api_Logger || (refs_io_cloudoffice_platform_cockpit_api_Logger = vm.io_cloudoffice_platform_cockpit_api_Logger(false)))['log__VLjava_lang_String_2'](stA0);
return;

};
c['handle__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_layout_LayoutComponent$PathModel$4fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_layout_LayoutComponent$PathModel$4', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_CallBack(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_layout_LayoutComponent$PathModel$4fillInstOf });
    io_cloudoffice_platform_cockpit_layout_LayoutComponent$PathModel$4fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/layout/LayoutComponent$PathModel$4';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_CallBack(false).constructor.$class
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
    var refs_java_lang_Object;
    var refs_java_lang_StringBuilder;
    var refs_io_cloudoffice_platform_cockpit_api_Logger;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$PathModel$4_val$pathname'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_layout_LayoutComponent$PathModel$4 = io_cloudoffice_platform_cockpit_layout_LayoutComponent$PathModel$4;


function io_cloudoffice_platform_cockpit_layout_LayoutComponent$PathModel$3() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_layout_LayoutComponent$PathModel$3;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$path = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$PathModel$3_val$path'] = v; return this['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$PathModel$3_val$path']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_layout_Path_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$PathModel$3_val$path'] = lcA1;
(refs_java_lang_Object || (refs_java_lang_Object = vm.java_lang_Object(false))).constructor['cons__V'].call(lcA0);
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.handle__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;
(refs_io_cloudoffice_platform_cockpit_api_Logger || (refs_io_cloudoffice_platform_cockpit_api_Logger = vm.io_cloudoffice_platform_cockpit_api_Logger(false)))['log__VLjava_lang_String_2'](">>> Get information from the domain json.");
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor;
(refs_io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor || (refs_io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor = vm.io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor(false))).constructor['cons__V'].call(stA0);
var stA1 = lcA1;var stA2 = new io_cloudoffice_platform_cockpit_layout_Domain;
(refs_io_cloudoffice_platform_cockpit_layout_Domain || (refs_io_cloudoffice_platform_cockpit_layout_Domain = io_cloudoffice_platform_cockpit_layout_Domain(false))).constructor.cons__V.call(stA2);
var stA0 = invoker.getObject__Ljava_lang_Object_2Ljava_lang_String_2Ljava_lang_Object_2(stA0,stA1, stA2);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_layout_Domain']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.layout.Domain');
var lcA2 = stA0;
var stA0 = lcA2.getPaths__Ljava_util_List_2();
var stI0 = invoker.remove__ZLjava_lang_Object_2(stA0,lcA0['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$PathModel$3_val$path']);
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_Event;
var stA1 = stA0;var stA2 = "updatedomain";var stA3 = "invokefunction";var stA4 = lcA2.toString__Ljava_lang_String_2();
(refs_io_cloudoffice_platform_cockpit_api_Event || (refs_io_cloudoffice_platform_cockpit_api_Event = vm.io_cloudoffice_platform_cockpit_api_Event(false))).constructor['cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2'].call(stA1, stA2, stA3, stA4);
var lcA3 = stA0;
var stA0 = (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent = io_cloudoffice_platform_cockpit_layout_LayoutComponent(false))).getDefaultInstance__Lio_cloudoffice_platform_cockpit_api_Component_2();
invoker.listen__VLio_cloudoffice_platform_cockpit_api_Signal_2(stA0,lcA3);
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_Event;
(refs_io_cloudoffice_platform_cockpit_api_Event || (refs_io_cloudoffice_platform_cockpit_api_Event = vm.io_cloudoffice_platform_cockpit_api_Event(false))).constructor['cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2'].call(stA0, "invokefunction", "invokefunction", "reloadStyle");
var lcA4 = stA0;
var stA0 = (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent = io_cloudoffice_platform_cockpit_layout_LayoutComponent(false))).getDefaultInstance__Lio_cloudoffice_platform_cockpit_api_Component_2();
invoker.listen__VLio_cloudoffice_platform_cockpit_api_Signal_2(stA0,lcA4);
return;

};
c['handle__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_layout_LayoutComponent$PathModel$3fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_layout_LayoutComponent$PathModel$3', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_CallBack(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_layout_LayoutComponent$PathModel$3fillInstOf });
    io_cloudoffice_platform_cockpit_layout_LayoutComponent$PathModel$3fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/layout/LayoutComponent$PathModel$3';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_CallBack(false).constructor.$class
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
    var refs_java_lang_Object;
    var refs_io_cloudoffice_platform_cockpit_api_Logger;
    var refs_io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor;
    var refs_io_cloudoffice_platform_cockpit_layout_Domain;
    var refs_io_cloudoffice_platform_cockpit_api_Event;
    var refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$PathModel$3_val$path'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_layout_LayoutComponent$PathModel$3 = io_cloudoffice_platform_cockpit_layout_LayoutComponent$PathModel$3;


function io_cloudoffice_platform_cockpit_layout_LayoutComponent$PathModel$2() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_layout_LayoutComponent$PathModel$2;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$path = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$PathModel$2_val$path'] = v; return this['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$PathModel$2_val$path']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_layout_Path_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$PathModel$2_val$path'] = lcA1;
(refs_java_lang_Object || (refs_java_lang_Object = vm.java_lang_Object(false))).constructor['cons__V'].call(lcA0);
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.handle__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;
(refs_io_cloudoffice_platform_cockpit_api_Logger || (refs_io_cloudoffice_platform_cockpit_api_Logger = vm.io_cloudoffice_platform_cockpit_api_Logger(false)))['log__VLjava_lang_String_2'](">>> Get information from the domain json.");
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor;
(refs_io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor || (refs_io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor = vm.io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor(false))).constructor['cons__V'].call(stA0);
var stA1 = lcA1;var stA2 = new io_cloudoffice_platform_cockpit_layout_Domain;
(refs_io_cloudoffice_platform_cockpit_layout_Domain || (refs_io_cloudoffice_platform_cockpit_layout_Domain = io_cloudoffice_platform_cockpit_layout_Domain(false))).constructor.cons__V.call(stA2);
var stA0 = invoker.getObject__Ljava_lang_Object_2Ljava_lang_String_2Ljava_lang_Object_2(stA0,stA1, stA2);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_layout_Domain']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.layout.Domain');
var lcA2 = stA0;
(refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$PathModel || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$PathModel = io_cloudoffice_platform_cockpit_layout_LayoutComponent$PathModel(false))).makehomepath__VLio_cloudoffice_platform_cockpit_layout_Domain_2Lio_cloudoffice_platform_cockpit_layout_Path_2(lcA2, lcA0['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$PathModel$2_val$path']);
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_Event;
var stA1 = stA0;var stA2 = "updatedomain";var stA3 = "invokefunction";var stA4 = lcA2.toString__Ljava_lang_String_2();
(refs_io_cloudoffice_platform_cockpit_api_Event || (refs_io_cloudoffice_platform_cockpit_api_Event = vm.io_cloudoffice_platform_cockpit_api_Event(false))).constructor['cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2'].call(stA1, stA2, stA3, stA4);
var lcA3 = stA0;
var stA0 = (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent = io_cloudoffice_platform_cockpit_layout_LayoutComponent(false))).getDefaultInstance__Lio_cloudoffice_platform_cockpit_api_Component_2();
invoker.listen__VLio_cloudoffice_platform_cockpit_api_Signal_2(stA0,lcA3);
return;

};
c['handle__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_layout_LayoutComponent$PathModel$2fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_layout_LayoutComponent$PathModel$2', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_CallBack(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_layout_LayoutComponent$PathModel$2fillInstOf });
    io_cloudoffice_platform_cockpit_layout_LayoutComponent$PathModel$2fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/layout/LayoutComponent$PathModel$2';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_CallBack(false).constructor.$class
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
    var refs_java_lang_Object;
    var refs_io_cloudoffice_platform_cockpit_api_Logger;
    var refs_io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor;
    var refs_io_cloudoffice_platform_cockpit_layout_Domain;
    var refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$PathModel;
    var refs_io_cloudoffice_platform_cockpit_api_Event;
    var refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$PathModel$2_val$path'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_layout_LayoutComponent$PathModel$2 = io_cloudoffice_platform_cockpit_layout_LayoutComponent$PathModel$2;


function io_cloudoffice_platform_cockpit_layout_LayoutComponent$PathModel$1() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_layout_LayoutComponent$PathModel$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$path = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$PathModel$1_val$path'] = v; return this['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$PathModel$1_val$path']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_layout_Path_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$PathModel$1_val$path'] = lcA1;
(refs_java_lang_Object || (refs_java_lang_Object = vm.java_lang_Object(false))).constructor['cons__V'].call(lcA0);
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.handle__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;
(refs_io_cloudoffice_platform_cockpit_api_Logger || (refs_io_cloudoffice_platform_cockpit_api_Logger = vm.io_cloudoffice_platform_cockpit_api_Logger(false)))['log__VLjava_lang_String_2'](">>> Get information from the domain json.");
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor;
(refs_io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor || (refs_io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor = vm.io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor(false))).constructor['cons__V'].call(stA0);
var stA1 = lcA1;var stA2 = new io_cloudoffice_platform_cockpit_layout_Domain;
(refs_io_cloudoffice_platform_cockpit_layout_Domain || (refs_io_cloudoffice_platform_cockpit_layout_Domain = io_cloudoffice_platform_cockpit_layout_Domain(false))).constructor.cons__V.call(stA2);
var stA0 = invoker.getObject__Ljava_lang_Object_2Ljava_lang_String_2Ljava_lang_Object_2(stA0,stA1, stA2);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_layout_Domain']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.layout.Domain');
var lcA2 = stA0;
(refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$PathModel || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$PathModel = io_cloudoffice_platform_cockpit_layout_LayoutComponent$PathModel(false))).togglepathsecurity__VLio_cloudoffice_platform_cockpit_layout_Domain_2Lio_cloudoffice_platform_cockpit_layout_Path_2(lcA2, lcA0['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$PathModel$1_val$path']);
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_Event;
var stA1 = stA0;var stA2 = "updatedomain";var stA3 = "invokefunction";var stA4 = lcA2.toString__Ljava_lang_String_2();
(refs_io_cloudoffice_platform_cockpit_api_Event || (refs_io_cloudoffice_platform_cockpit_api_Event = vm.io_cloudoffice_platform_cockpit_api_Event(false))).constructor['cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2'].call(stA1, stA2, stA3, stA4);
var lcA3 = stA0;
var stA0 = (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent = io_cloudoffice_platform_cockpit_layout_LayoutComponent(false))).getDefaultInstance__Lio_cloudoffice_platform_cockpit_api_Component_2();
invoker.listen__VLio_cloudoffice_platform_cockpit_api_Signal_2(stA0,lcA3);
return;

};
c['handle__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_layout_LayoutComponent$PathModel$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_layout_LayoutComponent$PathModel$1', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_CallBack(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_layout_LayoutComponent$PathModel$1fillInstOf });
    io_cloudoffice_platform_cockpit_layout_LayoutComponent$PathModel$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/layout/LayoutComponent$PathModel$1';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_CallBack(false).constructor.$class
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
    var refs_java_lang_Object;
    var refs_io_cloudoffice_platform_cockpit_api_Logger;
    var refs_io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor;
    var refs_io_cloudoffice_platform_cockpit_layout_Domain;
    var refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$PathModel;
    var refs_io_cloudoffice_platform_cockpit_api_Event;
    var refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$PathModel$1_val$path'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_layout_LayoutComponent$PathModel$1 = io_cloudoffice_platform_cockpit_layout_LayoutComponent$PathModel$1;

vm.io_cloudoffice_platform_cockpit_api_WebDB$IndexTableManager = link('io/cloudoffice/platform/cockpit/api/WebDB$IndexTableManager', function(f) { vm.io_cloudoffice_platform_cockpit_api_WebDB$IndexTableManager =  f; });

function io_cloudoffice_platform_cockpit_layout_LayoutComponent$InvokeFunctionListener() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_layout_LayoutComponent$InvokeFunctionListener;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._this$0 = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$InvokeFunctionListener_this$0'] = v; return this['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$InvokeFunctionListener_this$0']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_layout_LayoutComponent_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$InvokeFunctionListener_this$0'] = lcA1;
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
var lcA2 = stA0;
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](lcA2);
if ((stI0) == 0) { gt = 257; break IF; }
var stA0 = invoker.getPackets__Ljava_util_List_2(lcA1);
var stA0 = invoker.get__Ljava_lang_Object_2I(stA0,0);
var lcA3 = stA0;
var stI0 = invoker.equalsIgnoreCase__ZLjava_lang_String_2(lcA2,"invokefunction");
if ((stI0) == 0) { gt = 85; break IF; }
if ((null) === (lcA3)) { gt = 257; break IF; }
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,">>> Handler process ");
var stA1 = (refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false)))['valueOf__Ljava_lang_String_2Ljava_lang_Object_2'](lcA3);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,".");
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
(refs_io_cloudoffice_platform_cockpit_api_Logger || (refs_io_cloudoffice_platform_cockpit_api_Logger = vm.io_cloudoffice_platform_cockpit_api_Logger(false)))['log__VLjava_lang_String_2'](stA0);
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$InvokeFunctionListener_this$0'];var stA1 = (refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false)))['valueOf__Ljava_lang_String_2Ljava_lang_Object_2'](lcA3);
invoker.invoke__VLjava_lang_String_2(stA0,stA1);
{ gt = 257; break IF; }
    }
    X_85: for (;;) { IF: if (gt <= 85) {

var stI0 = invoker.equalsIgnoreCase__ZLjava_lang_String_2(lcA2,"updatesubscribedcomponentlist");
if ((stI0) == 0) { gt = 120; break IF; }
if ((null) === (lcA3)) { gt = 257; break IF; }
(refs_io_cloudoffice_platform_cockpit_api_Logger || (refs_io_cloudoffice_platform_cockpit_api_Logger = vm.io_cloudoffice_platform_cockpit_api_Logger(false)))['log__VLjava_lang_String_2'](">>> Handler process updateSubscribedComponentList.");
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$InvokeFunctionListener_this$0'];var stA1 = "updateSubscribedComponentList";var stA2 = (refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false)))['valueOf__Ljava_lang_String_2Ljava_lang_Object_2'](lcA3);
invoker.invoke__VLjava_lang_String_2Ljava_lang_String_2(stA0,stA1, stA2);
{ gt = 257; break IF; }
    }
    X_120: for (;;) { IF: if (gt <= 120) {

var stI0 = invoker.equalsIgnoreCase__ZLjava_lang_String_2(lcA2,"opensubscribedcomponentlist");
if ((stI0) == 0) { gt = 155; break IF; }
if ((null) === (lcA3)) { gt = 257; break IF; }
(refs_io_cloudoffice_platform_cockpit_api_Logger || (refs_io_cloudoffice_platform_cockpit_api_Logger = vm.io_cloudoffice_platform_cockpit_api_Logger(false)))['log__VLjava_lang_String_2'](">>> Handler process opensubscribedcomponentlist.");
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$InvokeFunctionListener_this$0'];var stA1 = "opensubscribedcomponentlist";var stA2 = (refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false)))['valueOf__Ljava_lang_String_2Ljava_lang_Object_2'](lcA3);
invoker.invoke__VLjava_lang_String_2Ljava_lang_String_2(stA0,stA1, stA2);
{ gt = 257; break IF; }
    }
    X_155: for (;;) { IF: if (gt <= 155) {

var stI0 = invoker.equalsIgnoreCase__ZLjava_lang_String_2(lcA2,"updaterenderedlayout");
if ((stI0) == 0) { gt = 190; break IF; }
if ((null) === (lcA3)) { gt = 257; break IF; }
(refs_io_cloudoffice_platform_cockpit_api_Logger || (refs_io_cloudoffice_platform_cockpit_api_Logger = vm.io_cloudoffice_platform_cockpit_api_Logger(false)))['log__VLjava_lang_String_2'](">>> Handler process updaterenderedlayout.");
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$InvokeFunctionListener_this$0'];var stA1 = "updaterenderedlayout";var stA2 = (refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false)))['valueOf__Ljava_lang_String_2Ljava_lang_Object_2'](lcA3);
invoker.invoke__VLjava_lang_String_2Ljava_lang_String_2(stA0,stA1, stA2);
{ gt = 257; break IF; }
    }
    X_190: for (;;) { IF: if (gt <= 190) {

var stI0 = invoker.equalsIgnoreCase__ZLjava_lang_String_2(lcA2,"updatedomain");
if ((stI0) == 0) { gt = 225; break IF; }
if ((null) === (lcA3)) { gt = 257; break IF; }
(refs_io_cloudoffice_platform_cockpit_api_Logger || (refs_io_cloudoffice_platform_cockpit_api_Logger = vm.io_cloudoffice_platform_cockpit_api_Logger(false)))['log__VLjava_lang_String_2'](">>> Handler process updatedomain.");
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$InvokeFunctionListener_this$0'];var stA1 = "updatedomainJSON";var stA2 = (refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false)))['valueOf__Ljava_lang_String_2Ljava_lang_Object_2'](lcA3);
invoker.invoke__VLjava_lang_String_2Ljava_lang_String_2(stA0,stA1, stA2);
{ gt = 257; break IF; }
    }
    X_225: for (;;) { IF: if (gt <= 225) {

var stI0 = invoker.equalsIgnoreCase__ZLjava_lang_String_2(lcA2,"putpathoneditpanel");
if ((stI0) == 0) { gt = 257; break IF; }
if ((null) === (lcA3)) { gt = 257; break IF; }
(refs_io_cloudoffice_platform_cockpit_api_Logger || (refs_io_cloudoffice_platform_cockpit_api_Logger = vm.io_cloudoffice_platform_cockpit_api_Logger(false)))['log__VLjava_lang_String_2'](">>> Handler process putpathoneditpanel.");
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$InvokeFunctionListener_this$0'];var stA1 = "putpathoneditpanel";var stA2 = (refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false)))['valueOf__Ljava_lang_String_2Ljava_lang_Object_2'](lcA3);
invoker.invoke__VLjava_lang_String_2Ljava_lang_String_2(stA0,stA1, stA2);
    }
    X_257: for (;;) { IF: if (gt <= 257) {
return;

    }
}}}}}}}
};
c['onReceive__VLio_cloudoffice_platform_cockpit_api_Signal_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_layout_LayoutComponent_2Lio_cloudoffice_platform_cockpit_layout_LayoutComponent$1_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
c.constructor.cons__VLio_cloudoffice_platform_cockpit_layout_LayoutComponent_2.call(lcA0, lcA1);
return;

};
    m.access = 4096;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_layout_LayoutComponent$InvokeFunctionListenerfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_layout_LayoutComponent$InvokeFunctionListener', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_EventListener(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_layout_LayoutComponent$InvokeFunctionListenerfillInstOf });
    io_cloudoffice_platform_cockpit_layout_LayoutComponent$InvokeFunctionListenerfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/layout/LayoutComponent$InvokeFunctionListener';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_EventListener(false).constructor.$class
    ]; };
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
    var refs_java_lang_Object;
    var refs_io_cloudoffice_platform_cockpit_api_UtilValidate;
    var refs_java_lang_StringBuilder;
    var refs_java_lang_String;
    var refs_io_cloudoffice_platform_cockpit_api_Logger;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$InvokeFunctionListener_this$0'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_layout_LayoutComponent$InvokeFunctionListener = io_cloudoffice_platform_cockpit_layout_LayoutComponent$InvokeFunctionListener;

vm.io_cloudoffice_platform_cockpit_api_EventListener = link('io/cloudoffice/platform/cockpit/api/EventListener', function(f) { vm.io_cloudoffice_platform_cockpit_api_EventListener =  f; });

function io_cloudoffice_platform_cockpit_layout_LayoutComponent$DesignerModeListener() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_layout_LayoutComponent$DesignerModeListener;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._this$0 = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$DesignerModeListener_this$0'] = v; return this['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$DesignerModeListener_this$0']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_layout_LayoutComponent_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$DesignerModeListener_this$0'] = lcA1;
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
var stI0 = invoker.equalsIgnoreCase__ZLjava_lang_String_2(stA0,"designermode");
if ((stI0) == 0) { gt = 23; break IF; }
invoker.invoke__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$DesignerModeListener_this$0'],"toggleDesignMode");
    }
    X_23: for (;;) { IF: if (gt <= 23) {

var stA0 = invoker.getAction__Ljava_lang_String_2(lcA1);
var stI0 = invoker.equalsIgnoreCase__ZLjava_lang_String_2(stA0,"proppanel");
if ((stI0) == 0) { gt = 91; break IF; }
var stA0 = invoker.getPackets__Ljava_util_List_2(lcA1);
var stA0 = invoker.get__Ljava_lang_Object_2I(stA0,0);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_api_MapBuilder']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.api.MapBuilder');
var lcA2 = stA0;
var stA0 = lcA2;var stA1 = "layout";var stA2 = invoker.getView__Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$DesignerModeListener_this$0']);
if (stA2 !== null && !stA2['$instOf_io_cloudoffice_platform_cockpit_layout_Layout']) vm.java_lang_Class(false).castEx(stA2, 'io.cloudoffice.platform.cockpit.layout.Layout');
var stA2 = stA2.getId__Ljava_lang_String_2();
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2(stA0,stA1, stA2);
if ((null) === (lcA2)) { gt = 91; break IF; }
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$DesignerModeListener_this$0'];var stA1 = "readSassVariables";var stA2 = invoker.toJSON__Ljava_lang_String_2(lcA2);
invoker.invoke__VLjava_lang_String_2Ljava_lang_String_2(stA0,stA1, stA2);
    }
    X_91: for (;;) { IF: if (gt <= 91) {

var stA0 = invoker.getAction__Ljava_lang_String_2(lcA1);
var stI0 = invoker.equalsIgnoreCase__ZLjava_lang_String_2(stA0,"proppanelcomponent");
if ((stI0) == 0) { gt = 143; break IF; }
var stA0 = invoker.getPackets__Ljava_util_List_2(lcA1);
var stA0 = invoker.get__Ljava_lang_Object_2I(stA0,0);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_api_MapBuilder']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.api.MapBuilder');
var lcA2 = stA0;
if ((null) === (lcA2)) { gt = 143; break IF; }
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$DesignerModeListener_this$0'];var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA2,"invoke");
var stA2 = invoker.toJSON__Ljava_lang_String_2(lcA2);
invoker.invoke__VLjava_lang_String_2Ljava_lang_String_2(stA0,stA1, stA2);
    }
    X_143: for (;;) { IF: if (gt <= 143) {
return;

    }
}}}}
};
c['onReceive__VLio_cloudoffice_platform_cockpit_api_Signal_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_layout_LayoutComponent_2Lio_cloudoffice_platform_cockpit_layout_LayoutComponent$1_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
c.constructor.cons__VLio_cloudoffice_platform_cockpit_layout_LayoutComponent_2.call(lcA0, lcA1);
return;

};
    m.access = 4096;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_layout_LayoutComponent$DesignerModeListenerfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_layout_LayoutComponent$DesignerModeListener', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_EventListener(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_layout_LayoutComponent$DesignerModeListenerfillInstOf });
    io_cloudoffice_platform_cockpit_layout_LayoutComponent$DesignerModeListenerfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/layout/LayoutComponent$DesignerModeListener';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_EventListener(false).constructor.$class
    ]; };
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
    var refs_java_lang_Object;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$DesignerModeListener_this$0'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_layout_LayoutComponent$DesignerModeListener = io_cloudoffice_platform_cockpit_layout_LayoutComponent$DesignerModeListener;


function io_cloudoffice_platform_cockpit_layout_LayoutComponent$LoadLayout() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_layout_LayoutComponent$LoadLayout;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._this$0 = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$LoadLayout_this$0'] = v; return this['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$LoadLayout_this$0']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_layout_LayoutComponent_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$LoadLayout_this$0'] = lcA1;
(refs_java_lang_Object || (refs_java_lang_Object = vm.java_lang_Object(false))).constructor['cons__V'].call(lcA0);
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.onReceive__VLio_cloudoffice_platform_cockpit_api_Signal_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, 1);
Array.at(stA0, 0, "layout");
(refs_io_cloudoffice_platform_cockpit_js_VIEW || (refs_io_cloudoffice_platform_cockpit_js_VIEW = vm.io_cloudoffice_platform_cockpit_js_VIEW(false)))['render__V_3Ljava_lang_String_2'](stA0);
var stA0 = invoker.getPackets__Ljava_util_List_2(lcA1);
var stA0 = invoker.get__Ljava_lang_Object_2I(stA0,0);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_api_MapBuilder']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.api.MapBuilder');
var lcA2 = stA0;
if ((null) === (lcA2)) { gt = 37; break IF; }
(refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent = io_cloudoffice_platform_cockpit_layout_LayoutComponent(false))).getLayout__VLio_cloudoffice_platform_cockpit_api_MapBuilder_2(lcA2);
    }
    X_37: for (;;) { IF: if (gt <= 37) {
return;

    }
}}
};
c['onReceive__VLio_cloudoffice_platform_cockpit_api_Signal_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_layout_LayoutComponent_2Lio_cloudoffice_platform_cockpit_layout_LayoutComponent$1_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
c.constructor.cons__VLio_cloudoffice_platform_cockpit_layout_LayoutComponent_2.call(lcA0, lcA1);
return;

};
    m.access = 4096;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_layout_LayoutComponent$LoadLayoutfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_layout_LayoutComponent$LoadLayout', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_EventListener(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_layout_LayoutComponent$LoadLayoutfillInstOf });
    io_cloudoffice_platform_cockpit_layout_LayoutComponent$LoadLayoutfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/layout/LayoutComponent$LoadLayout';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_EventListener(false).constructor.$class
    ]; };
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
    var refs_java_lang_Object;
    var refs_io_cloudoffice_platform_cockpit_js_VIEW;
    var refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$LoadLayout_this$0'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_layout_LayoutComponent$LoadLayout = io_cloudoffice_platform_cockpit_layout_LayoutComponent$LoadLayout;

vm.io_cloudoffice_platform_cockpit_api_AbstractComponent = link('io/cloudoffice/platform/cockpit/api/AbstractComponent', function(f) { vm.io_cloudoffice_platform_cockpit_api_AbstractComponent =  f; });
vm.io_cloudoffice_platform_cockpit_api_MapBuilder = link('io/cloudoffice/platform/cockpit/api/MapBuilder', function(f) { vm.io_cloudoffice_platform_cockpit_api_MapBuilder =  f; });
vm.io_cloudoffice_platform_cockpit_js_VIEW = link('io/cloudoffice/platform/cockpit/js/VIEW', function(f) { vm.io_cloudoffice_platform_cockpit_js_VIEW =  f; });
vm.io_cloudoffice_platform_cockpit_api_Event = link('io/cloudoffice/platform/cockpit/api/Event', function(f) { vm.io_cloudoffice_platform_cockpit_api_Event =  f; });
vm.io_cloudoffice_platform_cockpit_api_Components = link('io/cloudoffice/platform/cockpit/api/Components', function(f) { vm.io_cloudoffice_platform_cockpit_api_Components =  f; });

function io_cloudoffice_platform_cockpit_layout_Layout() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_layout_Layout;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_TYPE'] = null;
  m = c._TYPE = function (v) {  if (arguments.length == 1) CLS['fld_TYPE'] = v; return CLS['fld_TYPE']; };
  m = c._proto = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_layout_Layout_proto'] = v; return this['fld_io_cloudoffice_platform_cockpit_layout_Layout_proto']; };
  m = c._prop_id = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_id'] = v; return this['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_id']; };
  m = c._prop_name = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_name'] = v; return this['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_name']; };
  m = c._prop_currentPath = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_currentPath'] = v; return this['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_currentPath']; };
  m = c._prop_domain = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_domain'] = v; return this['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_domain']; };
  m = c._prop_temppath = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_temppath'] = v; return this['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_temppath']; };
  m = c._prop_pathDrop = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_pathDrop'] = v; return this['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_pathDrop']; };
  m = c._prop_newPathPanelDisplay = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_newPathPanelDisplay'] = v; return this['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_newPathPanelDisplay']; };
  m = c._prop_themeId = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_themeId'] = v; return this['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_themeId']; };
  m = c._prop_designerOn = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_designerOn'] = v; return this['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_designerOn']; };
  m = c._prop_componentListDisplay = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_componentListDisplay'] = v; return this['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_componentListDisplay']; };
  m = c._prop_componentListLoader = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_componentListLoader'] = v; return this['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_componentListLoader']; };
  m = c._prop_subscribedComponents = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_subscribedComponents'] = v; return this['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_subscribedComponents']; };
  m = c._prop_subscribedComponentDropZone = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_subscribedComponentDropZone'] = v; return this['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_subscribedComponentDropZone']; };
  m = c._prop_layoutDrop = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_layoutDrop'] = v; return this['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_layoutDrop']; };
  m = c._prop_props = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_props'] = v; return this['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_props']; };
  m = c._prop_propOn = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_propOn'] = v; return this['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_propOn']; };
  m = c._prop_propPanel = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_propPanel'] = v; return this['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_propPanel']; };
  m = c._prop_rows = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_rows'] = v; return this['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_rows']; };
  m = c._prop_editable = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_editable'] = v; return this['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_editable']; };
  m = c._prop_inputfieldvalue = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_inputfieldvalue'] = v; return this['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_inputfieldvalue']; };
  m = c._prop_updateloader = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_updateloader'] = v; return this['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_updateloader']; };
  m = c._prop_isLoggedInUserCompanyAdmin = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_isLoggedInUserCompanyAdmin'] = v; return this['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_isLoggedInUserCompanyAdmin']; };
    m = c.modelFor__Ljava_lang_Class_2 = function() {
return (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent = io_cloudoffice_platform_cockpit_layout_LayoutComponent(false))).constructor.$class;

};
    m.access = 10;
    m.cls = CLS;
    m = c.getId__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_proto'],"id");
return lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_id'];

};
c['getId__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setId__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_id'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_id'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_proto'],"id", lcA2, lcA1);
return;

    }
}}
};
c['setId__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getName__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_proto'],"name");
return lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_name'];

};
c['getName__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setName__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_name'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_name'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_proto'],"name", lcA2, lcA1);
return;

    }
}}
};
c['setName__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getCurrentPath__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_proto'],"currentPath");
return lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_currentPath'];

};
c['getCurrentPath__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setCurrentPath__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_currentPath'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_currentPath'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_proto'],"currentPath", lcA2, lcA1);
return;

    }
}}
};
c['setCurrentPath__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getDomain__Lio_cloudoffice_platform_cockpit_layout_Domain_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_proto'],"domain");
if ((lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_domain']) !== (c._TYPE())) { gt = 40; break IF; }
var stA0 = lcA0;var stA1 = new io_cloudoffice_platform_cockpit_layout_Domain;
(refs_io_cloudoffice_platform_cockpit_layout_Domain || (refs_io_cloudoffice_platform_cockpit_layout_Domain = io_cloudoffice_platform_cockpit_layout_Domain(false))).constructor.cons__V.call(stA1);
var stA2 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_proto']);
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, stA2);
stA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_domain'] = stA1;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

if (lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_domain'] !== null && !lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_domain']['$instOf_io_cloudoffice_platform_cockpit_layout_Domain']) vm.java_lang_Class(false).castEx(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_domain'], 'io.cloudoffice.platform.cockpit.layout.Domain');
return lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_domain'];

    }
}}
};
c['getDomain__Lio_cloudoffice_platform_cockpit_layout_Domain_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setDomain__VLio_cloudoffice_platform_cockpit_layout_Domain_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_domain'];
if ((lcA2) !== (lcA1)) { gt = 18; break IF; }
return;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_domain'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_proto'],"domain", lcA2, lcA1);
return;

    }
}}
};
c['setDomain__VLio_cloudoffice_platform_cockpit_layout_Domain_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getTemppath__Lio_cloudoffice_platform_cockpit_layout_Path_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_proto'],"temppath");
if ((lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_temppath']) !== (c._TYPE())) { gt = 40; break IF; }
var stA0 = lcA0;var stA1 = new io_cloudoffice_platform_cockpit_layout_Path;
(refs_io_cloudoffice_platform_cockpit_layout_Path || (refs_io_cloudoffice_platform_cockpit_layout_Path = io_cloudoffice_platform_cockpit_layout_Path(false))).constructor.cons__V.call(stA1);
var stA2 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_proto']);
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, stA2);
stA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_temppath'] = stA1;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

if (lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_temppath'] !== null && !lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_temppath']['$instOf_io_cloudoffice_platform_cockpit_layout_Path']) vm.java_lang_Class(false).castEx(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_temppath'], 'io.cloudoffice.platform.cockpit.layout.Path');
return lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_temppath'];

    }
}}
};
c['getTemppath__Lio_cloudoffice_platform_cockpit_layout_Path_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setTemppath__VLio_cloudoffice_platform_cockpit_layout_Path_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_temppath'];
if ((lcA2) !== (lcA1)) { gt = 18; break IF; }
return;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_temppath'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_proto'],"temppath", lcA2, lcA1);
return;

    }
}}
};
c['setTemppath__VLio_cloudoffice_platform_cockpit_layout_Path_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isPathDrop__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_proto'],"pathDrop");
return lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_pathDrop'];

};
c['isPathDrop__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setPathDrop__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_pathDrop']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_pathDrop'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_proto'];var stA1 = "pathDrop";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2, stA3);
return;

    }
}}
};
c['setPathDrop__VZ'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isNewPathPanelDisplay__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_proto'],"newPathPanelDisplay");
return lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_newPathPanelDisplay'];

};
c['isNewPathPanelDisplay__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setNewPathPanelDisplay__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_newPathPanelDisplay']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_newPathPanelDisplay'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_proto'];var stA1 = "newPathPanelDisplay";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2, stA3);
return;

    }
}}
};
c['setNewPathPanelDisplay__VZ'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getThemeId__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_proto'],"themeId");
return lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_themeId'];

};
c['getThemeId__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setThemeId__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_themeId'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_themeId'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_proto'],"themeId", lcA2, lcA1);
return;

    }
}}
};
c['setThemeId__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isDesignerOn__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_proto'],"designerOn");
return lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_designerOn'];

};
c['isDesignerOn__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setDesignerOn__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_designerOn']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_designerOn'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_proto'];var stA1 = "designerOn";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2, stA3);
return;

    }
}}
};
c['setDesignerOn__VZ'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isComponentListDisplay__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_proto'],"componentListDisplay");
return lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_componentListDisplay'];

};
c['isComponentListDisplay__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setComponentListDisplay__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_componentListDisplay']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_componentListDisplay'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_proto'];var stA1 = "componentListDisplay";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2, stA3);
return;

    }
}}
};
c['setComponentListDisplay__VZ'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isComponentListLoader__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_proto'],"componentListLoader");
return lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_componentListLoader'];

};
c['isComponentListLoader__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setComponentListLoader__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_componentListLoader']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_componentListLoader'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_proto'];var stA1 = "componentListLoader";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2, stA3);
return;

    }
}}
};
c['setComponentListLoader__VZ'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getSubscribedComponents__Ljava_util_List_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_proto'],"subscribedComponents");
return lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_subscribedComponents'];

};
c['getSubscribedComponents__Ljava_util_List_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getSubscribedComponentDropZone__Lio_cloudoffice_platform_cockpit_layout_Column_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_proto'],"subscribedComponentDropZone");
if ((lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_subscribedComponentDropZone']) !== (c._TYPE())) { gt = 40; break IF; }
var stA0 = lcA0;var stA1 = new io_cloudoffice_platform_cockpit_layout_Column;
(refs_io_cloudoffice_platform_cockpit_layout_Column || (refs_io_cloudoffice_platform_cockpit_layout_Column = io_cloudoffice_platform_cockpit_layout_Column(false))).constructor.cons__V.call(stA1);
var stA2 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_proto']);
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, stA2);
stA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_subscribedComponentDropZone'] = stA1;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

if (lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_subscribedComponentDropZone'] !== null && !lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_subscribedComponentDropZone']['$instOf_io_cloudoffice_platform_cockpit_layout_Column']) vm.java_lang_Class(false).castEx(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_subscribedComponentDropZone'], 'io.cloudoffice.platform.cockpit.layout.Column');
return lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_subscribedComponentDropZone'];

    }
}}
};
c['getSubscribedComponentDropZone__Lio_cloudoffice_platform_cockpit_layout_Column_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setSubscribedComponentDropZone__VLio_cloudoffice_platform_cockpit_layout_Column_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_subscribedComponentDropZone'];
if ((lcA2) !== (lcA1)) { gt = 18; break IF; }
return;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_subscribedComponentDropZone'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_proto'],"subscribedComponentDropZone", lcA2, lcA1);
return;

    }
}}
};
c['setSubscribedComponentDropZone__VLio_cloudoffice_platform_cockpit_layout_Column_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isLayoutDrop__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_proto'],"layoutDrop");
return lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_layoutDrop'];

};
c['isLayoutDrop__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setLayoutDrop__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_layoutDrop']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_layoutDrop'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_proto'];var stA1 = "layoutDrop";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2, stA3);
return;

    }
}}
};
c['setLayoutDrop__VZ'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getProps__Ljava_util_List_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_proto'],"props");
return lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_props'];

};
c['getProps__Ljava_util_List_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isPropOn__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_proto'],"propOn");
return lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_propOn'];

};
c['isPropOn__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setPropOn__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_propOn']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_propOn'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_proto'];var stA1 = "propOn";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2, stA3);
return;

    }
}}
};
c['setPropOn__VZ'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getPropPanel__Lio_cloudoffice_platform_cockpit_layout_Properties_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_proto'],"propPanel");
if ((lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_propPanel']) !== (c._TYPE())) { gt = 40; break IF; }
var stA0 = lcA0;var stA1 = new io_cloudoffice_platform_cockpit_layout_Properties;
(refs_io_cloudoffice_platform_cockpit_layout_Properties || (refs_io_cloudoffice_platform_cockpit_layout_Properties = io_cloudoffice_platform_cockpit_layout_Properties(false))).constructor.cons__V.call(stA1);
var stA2 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_proto']);
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, stA2);
stA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_propPanel'] = stA1;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

if (lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_propPanel'] !== null && !lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_propPanel']['$instOf_io_cloudoffice_platform_cockpit_layout_Properties']) vm.java_lang_Class(false).castEx(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_propPanel'], 'io.cloudoffice.platform.cockpit.layout.Properties');
return lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_propPanel'];

    }
}}
};
c['getPropPanel__Lio_cloudoffice_platform_cockpit_layout_Properties_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setPropPanel__VLio_cloudoffice_platform_cockpit_layout_Properties_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_propPanel'];
if ((lcA2) !== (lcA1)) { gt = 18; break IF; }
return;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_propPanel'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_proto'],"propPanel", lcA2, lcA1);
return;

    }
}}
};
c['setPropPanel__VLio_cloudoffice_platform_cockpit_layout_Properties_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getRows__Ljava_util_List_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_proto'],"rows");
return lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_rows'];

};
c['getRows__Ljava_util_List_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isEditable__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_proto'],"editable");
return lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_editable'];

};
c['isEditable__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setEditable__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_editable']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_editable'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_proto'];var stA1 = "editable";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2, stA3);
return;

    }
}}
};
c['setEditable__VZ'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getInputfieldvalue__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_proto'],"inputfieldvalue");
return lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_inputfieldvalue'];

};
c['getInputfieldvalue__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setInputfieldvalue__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_inputfieldvalue'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_inputfieldvalue'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_proto'],"inputfieldvalue", lcA2, lcA1);
return;

    }
}}
};
c['setInputfieldvalue__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isUpdateloader__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_proto'],"updateloader");
return lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_updateloader'];

};
c['isUpdateloader__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setUpdateloader__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_updateloader']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_updateloader'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_proto'];var stA1 = "updateloader";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2, stA3);
return;

    }
}}
};
c['setUpdateloader__VZ'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isIsLoggedInUserCompanyAdmin__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_proto'],"isLoggedInUserCompanyAdmin");
return lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_isLoggedInUserCompanyAdmin'];

};
c['isIsLoggedInUserCompanyAdmin__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setIsLoggedInUserCompanyAdmin__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_isLoggedInUserCompanyAdmin']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_isLoggedInUserCompanyAdmin'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_proto'];var stA1 = "isLoggedInUserCompanyAdmin";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2, stA3);
return;

    }
}}
};
c['setIsLoggedInUserCompanyAdmin__VZ'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;
(refs_java_lang_Object || (refs_java_lang_Object = vm.java_lang_Object(false))).constructor['cons__V'].call(lcA0);
var stA0 = lcA0;var stA1 = invoker.createProto__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2(c._TYPE(),lcA0, lcA1);
stA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_proto'] = stA1;
var stA0 = lcA0;var stA1 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_proto'];var stA2 = "subscribedComponents";var stI3 = -1;var stA4 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, 0);
var stA1 = invoker.createList__Ljava_util_List_2Ljava_lang_String_2I_3Ljava_lang_String_2(stA1,stA2, stI3, stA4);
stA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_subscribedComponents'] = stA1;
var stA0 = lcA0;var stA1 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_proto'];var stA2 = "props";var stI3 = -1;var stA4 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, 0);
var stA1 = invoker.createList__Ljava_util_List_2Ljava_lang_String_2I_3Ljava_lang_String_2(stA1,stA2, stI3, stA4);
stA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_props'] = stA1;
var stA0 = lcA0;var stA1 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_proto'];var stA2 = "rows";var stI3 = -1;var stA4 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, 0);
var stA1 = invoker.createList__Ljava_util_List_2Ljava_lang_String_2I_3Ljava_lang_String_2(stA1,stA2, stI3, stA4);
stA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_rows'] = stA1;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = (refs_net_java_html_BrwsrCtx || (refs_net_java_html_BrwsrCtx = vm.net_java_html_BrwsrCtx(false)))['findDefault__Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'](c.constructor.$class);
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, stA1);
lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_domain'] = c._TYPE();
lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_temppath'] = c._TYPE();
lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_subscribedComponentDropZone'] = c._TYPE();
lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_propPanel'] = c._TYPE();
return;

};
CLS['cons__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Lio_cloudoffice_platform_cockpit_layout_Domain_2Lio_cloudoffice_platform_cockpit_layout_Path_2ZZLjava_lang_String_2ZZZLio_cloudoffice_platform_cockpit_layout_Column_2ZZLio_cloudoffice_platform_cockpit_layout_Properties_2ZLjava_lang_String_2ZZ_3Lio_cloudoffice_platform_cockpit_layout_ComponentDef_2 = function(lcA1, lcA2, lcA3, lcA4, lcA5, lcI6, lcI7, lcA8, lcI9, lcI10, lcI11, lcA12, lcI13, lcI14, lcA15, lcI16, lcA17, lcI18, lcI19, lcA20) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = (refs_net_java_html_BrwsrCtx || (refs_net_java_html_BrwsrCtx = vm.net_java_html_BrwsrCtx(false)))['findDefault__Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'](c.constructor.$class);
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, stA1);
lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_id'] = lcA1;
lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_name'] = lcA2;
lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_currentPath'] = lcA3;
lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_domain'] = lcA4;
lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_temppath'] = lcA5;
lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_pathDrop'] = lcI6;
lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_newPathPanelDisplay'] = lcI7;
lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_themeId'] = lcA8;
lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_designerOn'] = lcI9;
lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_componentListDisplay'] = lcI10;
lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_componentListLoader'] = lcI11;
lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_subscribedComponentDropZone'] = lcA12;
lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_layoutDrop'] = lcI13;
lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_propOn'] = lcI14;
lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_propPanel'] = lcA15;
lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_editable'] = lcI16;
lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_inputfieldvalue'] = lcA17;
lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_updateloader'] = lcI18;
lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_isLoggedInUserCompanyAdmin'] = lcI19;
invoker.initTo__VLjava_util_Collection_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_proto'],lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_subscribedComponents'], lcA20);
return;

};
CLS['cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Lio_cloudoffice_platform_cockpit_layout_Domain_2Lio_cloudoffice_platform_cockpit_layout_Path_2ZZLjava_lang_String_2ZZZLio_cloudoffice_platform_cockpit_layout_Column_2ZZLio_cloudoffice_platform_cockpit_layout_Properties_2ZLjava_lang_String_2ZZ_3Lio_cloudoffice_platform_cockpit_layout_ComponentDef_2'] = m;

    m.access = 129;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, (22));
var lcA3 = stA0;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_proto'];var stA1 = lcA2;var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, (22));
Array.at(stA2, 0, "id");
Array.at(stA2, 1, "name");
Array.at(stA2, 2, "currentPath");
Array.at(stA2, 3, "domain");
Array.at(stA2, 4, "temppath");
Array.at(stA2, 5, "pathDrop");
Array.at(stA2, (6), "newPathPanelDisplay");
Array.at(stA2, (7), "themeId");
Array.at(stA2, (8), "designerOn");
Array.at(stA2, (9), "componentListDisplay");
Array.at(stA2, (10), "componentListLoader");
Array.at(stA2, (11), "subscribedComponents");
Array.at(stA2, (12), "subscribedComponentDropZone");
Array.at(stA2, (13), "layoutDrop");
Array.at(stA2, (14), "props");
Array.at(stA2, (15), "propOn");
Array.at(stA2, (16), "propPanel");
Array.at(stA2, (17), "rows");
Array.at(stA2, (18), "editable");
Array.at(stA2, (19), "inputfieldvalue");
Array.at(stA2, (20), "updateloader");
Array.at(stA2, (21), "isLoggedInUserCompanyAdmin");
invoker.extract__VLjava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Object_2(stA0,stA1, stA2, lcA3);
if ((lcA3[0] || Array.at(lcA3, 0)) !== null && !(lcA3[0] || Array.at(lcA3, 0))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[0] || Array.at(lcA3, 0)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_id'] = (lcA3[0] || Array.at(lcA3, 0));
if ((lcA3[1] || Array.at(lcA3, 1)) !== null && !(lcA3[1] || Array.at(lcA3, 1))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[1] || Array.at(lcA3, 1)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_name'] = (lcA3[1] || Array.at(lcA3, 1));
if ((lcA3[2] || Array.at(lcA3, 2)) !== null && !(lcA3[2] || Array.at(lcA3, 2))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[2] || Array.at(lcA3, 2)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_currentPath'] = (lcA3[2] || Array.at(lcA3, 2));
var stA0 = lcA0;var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_proto'],(refs_io_cloudoffice_platform_cockpit_layout_Domain || (refs_io_cloudoffice_platform_cockpit_layout_Domain = io_cloudoffice_platform_cockpit_layout_Domain(false))).constructor.$class, (lcA3[3] || Array.at(lcA3, 3)));
stA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_domain'] = stA1;
var stA0 = lcA0;var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_proto'],(refs_io_cloudoffice_platform_cockpit_layout_Path || (refs_io_cloudoffice_platform_cockpit_layout_Path = io_cloudoffice_platform_cockpit_layout_Path(false))).constructor.$class, (lcA3[4] || Array.at(lcA3, 4)));
stA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_temppath'] = stA1;
var stA0 = lcA0;if (((lcA3[5] || Array.at(lcA3, 5))) !== null) { gt = 224; break IF; }
var stI1 = 0;{ gt = 236; break IF; }
    }
    X_224: for (;;) { IF: if (gt <= 224) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[5] || Array.at(lcA3, 5)));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_236: for (;;) { IF: if (gt <= 236) {
stA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_pathDrop'] = stI1;
var stA0 = lcA0;if (((lcA3[(6)] || Array.at(lcA3, (6)))) !== null) { gt = 251; break IF; }
var stI1 = 0;{ gt = 264; break IF; }
    }
    X_251: for (;;) { IF: if (gt <= 251) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[(6)] || Array.at(lcA3, (6))));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_264: for (;;) { IF: if (gt <= 264) {
stA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_newPathPanelDisplay'] = stI1;
if ((lcA3[(7)] || Array.at(lcA3, (7))) !== null && !(lcA3[(7)] || Array.at(lcA3, (7)))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[(7)] || Array.at(lcA3, (7))), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_themeId'] = (lcA3[(7)] || Array.at(lcA3, (7)));
var stA0 = lcA0;if (((lcA3[(8)] || Array.at(lcA3, (8)))) !== null) { gt = 290; break IF; }
var stI1 = 0;{ gt = 303; break IF; }
    }
    X_290: for (;;) { IF: if (gt <= 290) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[(8)] || Array.at(lcA3, (8))));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_303: for (;;) { IF: if (gt <= 303) {
stA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_designerOn'] = stI1;
var stA0 = lcA0;if (((lcA3[(9)] || Array.at(lcA3, (9)))) !== null) { gt = 318; break IF; }
var stI1 = 0;{ gt = 331; break IF; }
    }
    X_318: for (;;) { IF: if (gt <= 318) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[(9)] || Array.at(lcA3, (9))));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_331: for (;;) { IF: if (gt <= 331) {
stA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_componentListDisplay'] = stI1;
var stA0 = lcA0;if (((lcA3[(10)] || Array.at(lcA3, (10)))) !== null) { gt = 346; break IF; }
var stI1 = 0;{ gt = 359; break IF; }
    }
    X_346: for (;;) { IF: if (gt <= 346) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[(10)] || Array.at(lcA3, (10))));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_359: for (;;) { IF: if (gt <= 359) {
stA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_componentListLoader'] = stI1;
var stA0 = c.useAsArray___3Ljava_lang_Object_2Ljava_lang_Object_2((lcA3[(11)] || Array.at(lcA3, (11))));
var lcA4 = stA0;
var lcI5 = (lcA4).length;
var lcI6 = 0;
    }
    X_379: for (;;) { IF: if (gt <= 379) {

if ((lcI6) >= (lcI5)) { gt = 420; break IF; }
var lcA7 = (lcA4[lcI6] || Array.at(lcA4, lcI6));
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_subscribedComponents'];var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_proto'],(refs_io_cloudoffice_platform_cockpit_layout_ComponentDef || (refs_io_cloudoffice_platform_cockpit_layout_ComponentDef = io_cloudoffice_platform_cockpit_layout_ComponentDef(false))).constructor.$class, lcA7);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,stA1);
lcI6++;
{ gt = 0; continue X_379; }
    }
    X_420: for (;;) { IF: if (gt <= 420) {

var stA0 = lcA0;var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_proto'],(refs_io_cloudoffice_platform_cockpit_layout_Column || (refs_io_cloudoffice_platform_cockpit_layout_Column = io_cloudoffice_platform_cockpit_layout_Column(false))).constructor.$class, (lcA3[(12)] || Array.at(lcA3, (12))));
stA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_subscribedComponentDropZone'] = stA1;
var stA0 = lcA0;if (((lcA3[(13)] || Array.at(lcA3, (13)))) !== null) { gt = 449; break IF; }
var stI1 = 0;{ gt = 462; break IF; }
    }
    X_449: for (;;) { IF: if (gt <= 449) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[(13)] || Array.at(lcA3, (13))));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_462: for (;;) { IF: if (gt <= 462) {
stA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_layoutDrop'] = stI1;
var stA0 = c.useAsArray___3Ljava_lang_Object_2Ljava_lang_Object_2((lcA3[(14)] || Array.at(lcA3, (14))));
var lcA4 = stA0;
var lcI5 = (lcA4).length;
var lcI6 = 0;
    }
    X_482: for (;;) { IF: if (gt <= 482) {

if ((lcI6) >= (lcI5)) { gt = 523; break IF; }
var lcA7 = (lcA4[lcI6] || Array.at(lcA4, lcI6));
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_props'];var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_proto'],(refs_io_cloudoffice_platform_cockpit_layout_Prop || (refs_io_cloudoffice_platform_cockpit_layout_Prop = io_cloudoffice_platform_cockpit_layout_Prop(false))).constructor.$class, lcA7);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,stA1);
lcI6++;
{ gt = 0; continue X_482; }
    }
    X_523: for (;;) { IF: if (gt <= 523) {

var stA0 = lcA0;if (((lcA3[(15)] || Array.at(lcA3, (15)))) !== null) { gt = 535; break IF; }
var stI1 = 0;{ gt = 548; break IF; }
    }
    X_535: for (;;) { IF: if (gt <= 535) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[(15)] || Array.at(lcA3, (15))));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_548: for (;;) { IF: if (gt <= 548) {
stA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_propOn'] = stI1;
var stA0 = lcA0;var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_proto'],(refs_io_cloudoffice_platform_cockpit_layout_Properties || (refs_io_cloudoffice_platform_cockpit_layout_Properties = io_cloudoffice_platform_cockpit_layout_Properties(false))).constructor.$class, (lcA3[(16)] || Array.at(lcA3, (16))));
stA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_propPanel'] = stA1;
var stA0 = c.useAsArray___3Ljava_lang_Object_2Ljava_lang_Object_2((lcA3[(17)] || Array.at(lcA3, (17))));
var lcA4 = stA0;
var lcI5 = (lcA4).length;
var lcI6 = 0;
    }
    X_585: for (;;) { IF: if (gt <= 585) {

if ((lcI6) >= (lcI5)) { gt = 626; break IF; }
var lcA7 = (lcA4[lcI6] || Array.at(lcA4, lcI6));
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_rows'];var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_proto'],(refs_io_cloudoffice_platform_cockpit_layout_Row || (refs_io_cloudoffice_platform_cockpit_layout_Row = io_cloudoffice_platform_cockpit_layout_Row(false))).constructor.$class, lcA7);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,stA1);
lcI6++;
{ gt = 0; continue X_585; }
    }
    X_626: for (;;) { IF: if (gt <= 626) {

var stA0 = lcA0;if (((lcA3[(18)] || Array.at(lcA3, (18)))) !== null) { gt = 638; break IF; }
var stI1 = 0;{ gt = 651; break IF; }
    }
    X_638: for (;;) { IF: if (gt <= 638) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[(18)] || Array.at(lcA3, (18))));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_651: for (;;) { IF: if (gt <= 651) {
stA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_editable'] = stI1;
if ((lcA3[(19)] || Array.at(lcA3, (19))) !== null && !(lcA3[(19)] || Array.at(lcA3, (19)))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[(19)] || Array.at(lcA3, (19))), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_inputfieldvalue'] = (lcA3[(19)] || Array.at(lcA3, (19)));
var stA0 = lcA0;if (((lcA3[(20)] || Array.at(lcA3, (20)))) !== null) { gt = 677; break IF; }
var stI1 = 0;{ gt = 690; break IF; }
    }
    X_677: for (;;) { IF: if (gt <= 677) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[(20)] || Array.at(lcA3, (20))));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_690: for (;;) { IF: if (gt <= 690) {
stA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_updateloader'] = stI1;
var stA0 = lcA0;if (((lcA3[(21)] || Array.at(lcA3, (21)))) !== null) { gt = 705; break IF; }
var stI1 = 0;{ gt = 718; break IF; }
    }
    X_705: for (;;) { IF: if (gt <= 705) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[(21)] || Array.at(lcA3, (21))));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_718: for (;;) { IF: if (gt <= 718) {
stA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_isLoggedInUserCompanyAdmin'] = stI1;
return;

    }
}}}}}}}}}}}}}}}}}}}}}}}}}}}
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
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"id");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getId__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"name");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getName__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"currentPath");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getCurrentPath__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"domain");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_domain']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"temppath");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_temppath']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"pathDrop");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stI2 = lcA0.isPathDrop__Z();
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI2);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"newPathPanelDisplay");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stI2 = lcA0.isNewPathPanelDisplay__Z();
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI2);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"themeId");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getThemeId__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"designerOn");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stI2 = lcA0.isDesignerOn__Z();
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI2);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"componentListDisplay");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stI2 = lcA0.isComponentListDisplay__Z();
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI2);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"componentListLoader");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stI2 = lcA0.isComponentListLoader__Z();
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI2);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"subscribedComponents");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_subscribedComponents']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"subscribedComponentDropZone");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_subscribedComponentDropZone']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"layoutDrop");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stI2 = lcA0.isLayoutDrop__Z();
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI2);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"props");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_props']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"propOn");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stI2 = lcA0.isPropOn__Z();
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI2);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"propPanel");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_propPanel']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"rows");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_rows']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"editable");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stI2 = lcA0.isEditable__Z();
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI2);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"inputfieldvalue");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getInputfieldvalue__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"updateloader");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stI2 = lcA0.isUpdateloader__Z();
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI2);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"isLoggedInUserCompanyAdmin");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stI2 = lcA0.isIsLoggedInUserCompanyAdmin__Z();
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
    m = c.clone__Lio_cloudoffice_platform_cockpit_layout_Layout_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_proto']);
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_layout_Layout_2Lnet_java_html_BrwsrCtx_2.call(stA0, stA1);
return stA0;

};
c['clone__Lio_cloudoffice_platform_cockpit_layout_Layout_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Lio_cloudoffice_platform_cockpit_layout_Layout_2Lnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
var stA0 = new io_cloudoffice_platform_cockpit_layout_Layout;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, lcA1);
var lcA2 = stA0;
var stA0 = lcA2;var stA1 = lcA0.getId__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_id'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getName__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_name'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getCurrentPath__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_currentPath'] = stA1;
var stA0 = lcA2;if ((lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_domain']) !== null) { gt = 45; break IF; }
var stA1 = null;{ gt = 69; break IF; }
    }
    X_45: for (;;) { IF: if (gt <= 45) {

if ((lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_domain']) !== (c._TYPE())) { gt = 61; break IF; }
var stA1 = c._TYPE();{ gt = 69; break IF; }
    }
    X_61: for (;;) { IF: if (gt <= 61) {

var stA1 = lcA0.getDomain__Lio_cloudoffice_platform_cockpit_layout_Domain_2();
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, lcA1);
    }
    X_69: for (;;) { IF: if (gt <= 69) {
stA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_domain'] = stA1;
var stA0 = lcA2;if ((lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_temppath']) !== null) { gt = 84; break IF; }
var stA1 = null;{ gt = 108; break IF; }
    }
    X_84: for (;;) { IF: if (gt <= 84) {

if ((lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_temppath']) !== (c._TYPE())) { gt = 100; break IF; }
var stA1 = c._TYPE();{ gt = 108; break IF; }
    }
    X_100: for (;;) { IF: if (gt <= 100) {

var stA1 = lcA0.getTemppath__Lio_cloudoffice_platform_cockpit_layout_Path_2();
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, lcA1);
    }
    X_108: for (;;) { IF: if (gt <= 108) {
stA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_temppath'] = stA1;
var stA0 = lcA2;var stI1 = lcA0.isPathDrop__Z();
stA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_pathDrop'] = stI1;
var stA0 = lcA2;var stI1 = lcA0.isNewPathPanelDisplay__Z();
stA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_newPathPanelDisplay'] = stI1;
var stA0 = lcA2;var stA1 = lcA0.getThemeId__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_themeId'] = stA1;
var stA0 = lcA2;var stI1 = lcA0.isDesignerOn__Z();
stA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_designerOn'] = stI1;
var stA0 = lcA2;var stI1 = lcA0.isComponentListDisplay__Z();
stA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_componentListDisplay'] = stI1;
var stA0 = lcA2;var stI1 = lcA0.isComponentListLoader__Z();
stA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_componentListLoader'] = stI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_proto'];var stA1 = lcA2.getSubscribedComponents__Ljava_util_List_2();
invoker.cloneList__VLjava_util_Collection_2Lnet_java_html_BrwsrCtx_2Ljava_util_Collection_2(stA0,stA1, lcA1, lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_subscribedComponents']);
var stA0 = lcA2;if ((lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_subscribedComponentDropZone']) !== null) { gt = 187; break IF; }
var stA1 = null;{ gt = 211; break IF; }
    }
    X_187: for (;;) { IF: if (gt <= 187) {

if ((lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_subscribedComponentDropZone']) !== (c._TYPE())) { gt = 203; break IF; }
var stA1 = c._TYPE();{ gt = 211; break IF; }
    }
    X_203: for (;;) { IF: if (gt <= 203) {

var stA1 = lcA0.getSubscribedComponentDropZone__Lio_cloudoffice_platform_cockpit_layout_Column_2();
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, lcA1);
    }
    X_211: for (;;) { IF: if (gt <= 211) {
stA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_subscribedComponentDropZone'] = stA1;
var stA0 = lcA2;var stI1 = lcA0.isLayoutDrop__Z();
stA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_layoutDrop'] = stI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_proto'];var stA1 = lcA2.getProps__Ljava_util_List_2();
invoker.cloneList__VLjava_util_Collection_2Lnet_java_html_BrwsrCtx_2Ljava_util_Collection_2(stA0,stA1, lcA1, lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_props']);
var stA0 = lcA2;var stI1 = lcA0.isPropOn__Z();
stA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_propOn'] = stI1;
var stA0 = lcA2;if ((lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_propPanel']) !== null) { gt = 258; break IF; }
var stA1 = null;{ gt = 282; break IF; }
    }
    X_258: for (;;) { IF: if (gt <= 258) {

if ((lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_propPanel']) !== (c._TYPE())) { gt = 274; break IF; }
var stA1 = c._TYPE();{ gt = 282; break IF; }
    }
    X_274: for (;;) { IF: if (gt <= 274) {

var stA1 = lcA0.getPropPanel__Lio_cloudoffice_platform_cockpit_layout_Properties_2();
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, lcA1);
    }
    X_282: for (;;) { IF: if (gt <= 282) {
stA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_propPanel'] = stA1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_proto'];var stA1 = lcA2.getRows__Ljava_util_List_2();
invoker.cloneList__VLjava_util_Collection_2Lnet_java_html_BrwsrCtx_2Ljava_util_Collection_2(stA0,stA1, lcA1, lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_rows']);
var stA0 = lcA2;var stI1 = lcA0.isEditable__Z();
stA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_editable'] = stI1;
var stA0 = lcA2;var stA1 = lcA0.getInputfieldvalue__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_inputfieldvalue'] = stA1;
var stA0 = lcA2;var stI1 = lcA0.isUpdateloader__Z();
stA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_updateloader'] = stI1;
var stA0 = lcA2;var stI1 = lcA0.isIsLoggedInUserCompanyAdmin__Z();
stA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_isLoggedInUserCompanyAdmin'] = stI1;
return lcA2;

    }
}}}}}}}}}}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.applyBindings__Lio_cloudoffice_platform_cockpit_layout_Layout_2 = function() {
  var  lcA0 = this;
invoker.applyBindings__V(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_proto']);
return lcA0;

};
c['applyBindings__Lio_cloudoffice_platform_cockpit_layout_Layout_2'] = m;

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

var stI0 = lcA1 != null && lcA1['$instOf_io_cloudoffice_platform_cockpit_layout_Layout'] ? 1 : 0;
if ((stI0) != 0) { gt = 16; break IF; }
return 0;
    }
    X_16: for (;;) { IF: if (gt <= 16) {

if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_layout_Layout']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.layout.Layout');
var lcA2 = lcA1;
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_id'], lcA2['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_id']);
if ((stI0) != 0) { gt = 40; break IF; }
return 0;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_name'], lcA2['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_name']);
if ((stI0) != 0) { gt = 59; break IF; }
return 0;
    }
    X_59: for (;;) { IF: if (gt <= 59) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_currentPath'], lcA2['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_currentPath']);
if ((stI0) != 0) { gt = 78; break IF; }
return 0;
    }
    X_78: for (;;) { IF: if (gt <= 78) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_domain']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_domain']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 105; break IF; }
return 0;
    }
    X_105: for (;;) { IF: if (gt <= 105) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_temppath']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_temppath']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 132; break IF; }
return 0;
    }
    X_132: for (;;) { IF: if (gt <= 132) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_pathDrop']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_pathDrop']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 157; break IF; }
return 0;
    }
    X_157: for (;;) { IF: if (gt <= 157) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_newPathPanelDisplay']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_newPathPanelDisplay']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 182; break IF; }
return 0;
    }
    X_182: for (;;) { IF: if (gt <= 182) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_themeId'], lcA2['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_themeId']);
if ((stI0) != 0) { gt = 201; break IF; }
return 0;
    }
    X_201: for (;;) { IF: if (gt <= 201) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_designerOn']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_designerOn']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 226; break IF; }
return 0;
    }
    X_226: for (;;) { IF: if (gt <= 226) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_componentListDisplay']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_componentListDisplay']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 251; break IF; }
return 0;
    }
    X_251: for (;;) { IF: if (gt <= 251) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_componentListLoader']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_componentListLoader']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 276; break IF; }
return 0;
    }
    X_276: for (;;) { IF: if (gt <= 276) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_subscribedComponents']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_subscribedComponents']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 303; break IF; }
return 0;
    }
    X_303: for (;;) { IF: if (gt <= 303) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_subscribedComponentDropZone']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_subscribedComponentDropZone']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 330; break IF; }
return 0;
    }
    X_330: for (;;) { IF: if (gt <= 330) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_layoutDrop']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_layoutDrop']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 355; break IF; }
return 0;
    }
    X_355: for (;;) { IF: if (gt <= 355) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_props']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_props']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 382; break IF; }
return 0;
    }
    X_382: for (;;) { IF: if (gt <= 382) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_propOn']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_propOn']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 407; break IF; }
return 0;
    }
    X_407: for (;;) { IF: if (gt <= 407) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_propPanel']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_propPanel']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 434; break IF; }
return 0;
    }
    X_434: for (;;) { IF: if (gt <= 434) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_rows']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_rows']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 461; break IF; }
return 0;
    }
    X_461: for (;;) { IF: if (gt <= 461) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_editable']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_editable']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 486; break IF; }
return 0;
    }
    X_486: for (;;) { IF: if (gt <= 486) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_inputfieldvalue'], lcA2['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_inputfieldvalue']);
if ((stI0) != 0) { gt = 505; break IF; }
return 0;
    }
    X_505: for (;;) { IF: if (gt <= 505) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_updateloader']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_updateloader']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 530; break IF; }
return 0;
    }
    X_530: for (;;) { IF: if (gt <= 530) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_isLoggedInUserCompanyAdmin']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_isLoggedInUserCompanyAdmin']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 555; break IF; }
return 0;
    }
    X_555: for (;;) { IF: if (gt <= 555) {

return 1;

    }
}}}}}}}}}}}}}}}}}}}}}}}}}
};
c['equals__ZLjava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.hashCode__I = function() {
  var  lcA0 = this;
var stA0 = invoker.getName__Ljava_lang_String_2(c.constructor.$class);
var stI0 = invoker.hashCode__I(stA0);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_id'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_name'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_currentPath'], lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_domain']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_temppath']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_pathDrop']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_newPathPanelDisplay']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_themeId'], lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_designerOn']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_componentListDisplay']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_componentListLoader']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_subscribedComponents']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_subscribedComponentDropZone']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_layoutDrop']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_props']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_propOn']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_propPanel']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_rows']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_editable']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_inputfieldvalue'], lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_updateloader']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_isLoggedInUserCompanyAdmin']);
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
var stA0 = lcA0.clone__Lio_cloudoffice_platform_cockpit_layout_Layout_2();
return stA0;

};
c['clone__Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.access$100__Lio_cloudoffice_platform_cockpit_layout_Layout$Html4JavaType_2 = function() {
return c._TYPE();

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_layout_Layout_2 = function(lcA0) {
return lcA0['fld_io_cloudoffice_platform_cockpit_layout_Layout_proto'];

};
    m.access = 4104;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_layout_Layout$1_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2.call(lcA0, lcA1, lcA2);
return;

};
    m.access = 4096;
    m.cls = CLS;
    m = c.access$400__Lio_cloudoffice_platform_cockpit_layout_Layout_2Lio_cloudoffice_platform_cockpit_layout_Layout_2Lnet_java_html_BrwsrCtx_2 = function(lcA0, lcA1) {
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_layout_Layout_2Lnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
return stA0;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new io_cloudoffice_platform_cockpit_layout_Layout$Html4JavaType;
(refs_io_cloudoffice_platform_cockpit_layout_Layout$Html4JavaType || (refs_io_cloudoffice_platform_cockpit_layout_Layout$Html4JavaType = io_cloudoffice_platform_cockpit_layout_Layout$Html4JavaType(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_layout_Layout$1_2.call(stA0, null);
c._TYPE(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_layout_LayoutfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_layout_Layout', { value : true });
      vm.java_lang_Cloneable(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_layout_LayoutfillInstOf });
    io_cloudoffice_platform_cockpit_layout_LayoutfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/layout/Layout';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.java_lang_Cloneable(false).constructor.$class
    ]; };
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent;
    var refs_io_cloudoffice_platform_cockpit_layout_Domain;
    var refs_net_java_html_json_Models;
    var refs_io_cloudoffice_platform_cockpit_layout_Path;
    var refs_java_lang_Boolean;
    var refs_io_cloudoffice_platform_cockpit_layout_Column;
    var refs_io_cloudoffice_platform_cockpit_layout_Properties;
    var refs_java_lang_Object;
    var refs_net_java_html_BrwsrCtx;
    var refs_io_cloudoffice_platform_cockpit_layout_ComponentDef;
    var refs_io_cloudoffice_platform_cockpit_layout_Prop;
    var refs_io_cloudoffice_platform_cockpit_layout_Row;
    var refs_java_lang_StringBuilder;
    var refs_io_cloudoffice_platform_cockpit_layout_Layout$Html4JavaType;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_layout_Layout_proto'] = null;
    this['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_id'] = null;
    this['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_name'] = null;
    this['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_currentPath'] = null;
    this['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_domain'] = null;
    this['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_temppath'] = null;
    this['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_pathDrop'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_newPathPanelDisplay'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_themeId'] = null;
    this['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_designerOn'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_componentListDisplay'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_componentListLoader'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_subscribedComponents'] = null;
    this['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_subscribedComponentDropZone'] = null;
    this['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_layoutDrop'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_props'] = null;
    this['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_propOn'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_propPanel'] = null;
    this['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_rows'] = null;
    this['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_editable'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_inputfieldvalue'] = null;
    this['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_updateloader'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_layout_Layout_prop_isLoggedInUserCompanyAdmin'] = 0;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_layout_Layout = registerClass(exports,'io_cloudoffice_platform_cockpit_layout_Layout',io_cloudoffice_platform_cockpit_layout_Layout);


function io_cloudoffice_platform_cockpit_layout_Layout$Html4JavaType() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_layout_Layout$Html4JavaType;
  if (!CLS.$class) {
    var pp = vm.org_netbeans_html_json_spi_Proto$Type(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_org_netbeans_html_json_spi_Proto$Type || (refs_org_netbeans_html_json_spi_Proto$Type = vm.org_netbeans_html_json_spi_Proto$Type(false))).constructor['cons__VLjava_lang_Class_2Ljava_lang_Class_2II'].call(lcA0, (refs_io_cloudoffice_platform_cockpit_layout_Layout || (refs_io_cloudoffice_platform_cockpit_layout_Layout = io_cloudoffice_platform_cockpit_layout_Layout(false))).constructor.$class, (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent = io_cloudoffice_platform_cockpit_layout_LayoutComponent(false))).constructor.$class, (22), (30));
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"id", 0, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"name", 1, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"currentPath", 2, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"domain", 3, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"temppath", 4, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"pathDrop", 5, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"newPathPanelDisplay", (6), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"themeId", (7), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"designerOn", (8), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"componentListDisplay", (9), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"componentListLoader", (10), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"subscribedComponents", (11), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"subscribedComponentDropZone", (12), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"layoutDrop", (13), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"props", (14), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"propOn", (15), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"propPanel", (16), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"rows", (17), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"editable", (18), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"inputfieldvalue", (19), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"updateloader", (20), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"isLoggedInUserCompanyAdmin", (21), 0, 0);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"showNewPathPanel", 0);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"hideNewPathPanel", 1);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"showPaths", 2);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"savePath", 3);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"updatedomainJSON", 4);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"updatedomainpostprocess", 5);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"showLayouts", (6));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"showThemes", (7));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"showSassVariables", (8));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"readSassVariables", (9));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"showComponentStyle", (10));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"showComponentConfig", (11));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"showupdateloader", (12));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"hideupdateloader", (13));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"closePropPanel", (14));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"saveProperties", (15));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"opensubscribedcomponentlist", (16));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"updateSubscribedComponentList", (17));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"hideComponentList", (18));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"hideStylePanel", (19));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"reloadStyle", (20));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"reloadComponentStyle", (21));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"insertComponent", (22));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"createRow", (23));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"toggleDesignMode", (24));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"enableLayoutEdit", (25));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"disableLayoutEdit", (26));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"updateLayoutName", (27));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"updatelayout", (28));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"updaterenderedlayout", (29));
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.setValue__VLio_cloudoffice_platform_cockpit_layout_Layout_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0:{ gt = 104; break IF; }
  case 1:{ gt = 121; break IF; }
  case 2:{ gt = 138; break IF; }
  case 3:{ gt = 155; break IF; }
  case 4:{ gt = 172; break IF; }
  case 5:{ gt = 189; break IF; }
  case 6:{ gt = 209; break IF; }
  case 7:{ gt = 229; break IF; }
  case 8:{ gt = 246; break IF; }
  case 9:{ gt = 266; break IF; }
  case 10:{ gt = 286; break IF; }
  case 11:{ gt = 306; break IF; }
  case 12:{ gt = 320; break IF; }
  case 13:{ gt = 337; break IF; }
  case 14:{ gt = 357; break IF; }
  case 15:{ gt = 371; break IF; }
  case 16:{ gt = 391; break IF; }
  case 17:{ gt = 408; break IF; }
  case 18:{ gt = 422; break IF; }
  case 19:{ gt = 442; break IF; }
  case 20:{ gt = 459; break IF; }
  case 21:{ gt = 479; break IF; }
  default: { gt = 499; break IF; }
}
    }
    X_104: for (;;) { IF: if (gt <= 104) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_layout_Layout || (refs_io_cloudoffice_platform_cockpit_layout_Layout = io_cloudoffice_platform_cockpit_layout_Layout(false))).access$100__Lio_cloudoffice_platform_cockpit_layout_Layout$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setId__VLjava_lang_String_2(stA1);
return;
    }
    X_121: for (;;) { IF: if (gt <= 121) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_layout_Layout || (refs_io_cloudoffice_platform_cockpit_layout_Layout = io_cloudoffice_platform_cockpit_layout_Layout(false))).access$100__Lio_cloudoffice_platform_cockpit_layout_Layout$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setName__VLjava_lang_String_2(stA1);
return;
    }
    X_138: for (;;) { IF: if (gt <= 138) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_layout_Layout || (refs_io_cloudoffice_platform_cockpit_layout_Layout = io_cloudoffice_platform_cockpit_layout_Layout(false))).access$100__Lio_cloudoffice_platform_cockpit_layout_Layout$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setCurrentPath__VLjava_lang_String_2(stA1);
return;
    }
    X_155: for (;;) { IF: if (gt <= 155) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_layout_Layout || (refs_io_cloudoffice_platform_cockpit_layout_Layout = io_cloudoffice_platform_cockpit_layout_Layout(false))).access$100__Lio_cloudoffice_platform_cockpit_layout_Layout$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_layout_Domain || (refs_io_cloudoffice_platform_cockpit_layout_Domain = io_cloudoffice_platform_cockpit_layout_Domain(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_layout_Domain']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.layout.Domain');
stA0.setDomain__VLio_cloudoffice_platform_cockpit_layout_Domain_2(stA1);
return;
    }
    X_172: for (;;) { IF: if (gt <= 172) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_layout_Layout || (refs_io_cloudoffice_platform_cockpit_layout_Layout = io_cloudoffice_platform_cockpit_layout_Layout(false))).access$100__Lio_cloudoffice_platform_cockpit_layout_Layout$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_layout_Path || (refs_io_cloudoffice_platform_cockpit_layout_Path = io_cloudoffice_platform_cockpit_layout_Path(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_layout_Path']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.layout.Path');
stA0.setTemppath__VLio_cloudoffice_platform_cockpit_layout_Path_2(stA1);
return;
    }
    X_189: for (;;) { IF: if (gt <= 189) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_layout_Layout || (refs_io_cloudoffice_platform_cockpit_layout_Layout = io_cloudoffice_platform_cockpit_layout_Layout(false))).access$100__Lio_cloudoffice_platform_cockpit_layout_Layout$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setPathDrop__VZ(stI1);
return;
    }
    X_209: for (;;) { IF: if (gt <= 209) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_layout_Layout || (refs_io_cloudoffice_platform_cockpit_layout_Layout = io_cloudoffice_platform_cockpit_layout_Layout(false))).access$100__Lio_cloudoffice_platform_cockpit_layout_Layout$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setNewPathPanelDisplay__VZ(stI1);
return;
    }
    X_229: for (;;) { IF: if (gt <= 229) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_layout_Layout || (refs_io_cloudoffice_platform_cockpit_layout_Layout = io_cloudoffice_platform_cockpit_layout_Layout(false))).access$100__Lio_cloudoffice_platform_cockpit_layout_Layout$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setThemeId__VLjava_lang_String_2(stA1);
return;
    }
    X_246: for (;;) { IF: if (gt <= 246) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_layout_Layout || (refs_io_cloudoffice_platform_cockpit_layout_Layout = io_cloudoffice_platform_cockpit_layout_Layout(false))).access$100__Lio_cloudoffice_platform_cockpit_layout_Layout$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setDesignerOn__VZ(stI1);
return;
    }
    X_266: for (;;) { IF: if (gt <= 266) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_layout_Layout || (refs_io_cloudoffice_platform_cockpit_layout_Layout = io_cloudoffice_platform_cockpit_layout_Layout(false))).access$100__Lio_cloudoffice_platform_cockpit_layout_Layout$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setComponentListDisplay__VZ(stI1);
return;
    }
    X_286: for (;;) { IF: if (gt <= 286) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_layout_Layout || (refs_io_cloudoffice_platform_cockpit_layout_Layout = io_cloudoffice_platform_cockpit_layout_Layout(false))).access$100__Lio_cloudoffice_platform_cockpit_layout_Layout$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setComponentListLoader__VZ(stI1);
return;
    }
    X_306: for (;;) { IF: if (gt <= 306) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_layout_Layout || (refs_io_cloudoffice_platform_cockpit_layout_Layout = io_cloudoffice_platform_cockpit_layout_Layout(false))).access$100__Lio_cloudoffice_platform_cockpit_layout_Layout$Html4JavaType_2();
var stA1 = lcA1.getSubscribedComponents__Ljava_util_List_2();
invoker.replaceValue__VLjava_util_Collection_2Ljava_lang_Class_2Ljava_lang_Object_2(stA0,stA1, (refs_io_cloudoffice_platform_cockpit_layout_ComponentDef || (refs_io_cloudoffice_platform_cockpit_layout_ComponentDef = io_cloudoffice_platform_cockpit_layout_ComponentDef(false))).constructor.$class, lcA3);
return;
    }
    X_320: for (;;) { IF: if (gt <= 320) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_layout_Layout || (refs_io_cloudoffice_platform_cockpit_layout_Layout = io_cloudoffice_platform_cockpit_layout_Layout(false))).access$100__Lio_cloudoffice_platform_cockpit_layout_Layout$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_layout_Column || (refs_io_cloudoffice_platform_cockpit_layout_Column = io_cloudoffice_platform_cockpit_layout_Column(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_layout_Column']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.layout.Column');
stA0.setSubscribedComponentDropZone__VLio_cloudoffice_platform_cockpit_layout_Column_2(stA1);
return;
    }
    X_337: for (;;) { IF: if (gt <= 337) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_layout_Layout || (refs_io_cloudoffice_platform_cockpit_layout_Layout = io_cloudoffice_platform_cockpit_layout_Layout(false))).access$100__Lio_cloudoffice_platform_cockpit_layout_Layout$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setLayoutDrop__VZ(stI1);
return;
    }
    X_357: for (;;) { IF: if (gt <= 357) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_layout_Layout || (refs_io_cloudoffice_platform_cockpit_layout_Layout = io_cloudoffice_platform_cockpit_layout_Layout(false))).access$100__Lio_cloudoffice_platform_cockpit_layout_Layout$Html4JavaType_2();
var stA1 = lcA1.getProps__Ljava_util_List_2();
invoker.replaceValue__VLjava_util_Collection_2Ljava_lang_Class_2Ljava_lang_Object_2(stA0,stA1, (refs_io_cloudoffice_platform_cockpit_layout_Prop || (refs_io_cloudoffice_platform_cockpit_layout_Prop = io_cloudoffice_platform_cockpit_layout_Prop(false))).constructor.$class, lcA3);
return;
    }
    X_371: for (;;) { IF: if (gt <= 371) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_layout_Layout || (refs_io_cloudoffice_platform_cockpit_layout_Layout = io_cloudoffice_platform_cockpit_layout_Layout(false))).access$100__Lio_cloudoffice_platform_cockpit_layout_Layout$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setPropOn__VZ(stI1);
return;
    }
    X_391: for (;;) { IF: if (gt <= 391) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_layout_Layout || (refs_io_cloudoffice_platform_cockpit_layout_Layout = io_cloudoffice_platform_cockpit_layout_Layout(false))).access$100__Lio_cloudoffice_platform_cockpit_layout_Layout$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_layout_Properties || (refs_io_cloudoffice_platform_cockpit_layout_Properties = io_cloudoffice_platform_cockpit_layout_Properties(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_layout_Properties']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.layout.Properties');
stA0.setPropPanel__VLio_cloudoffice_platform_cockpit_layout_Properties_2(stA1);
return;
    }
    X_408: for (;;) { IF: if (gt <= 408) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_layout_Layout || (refs_io_cloudoffice_platform_cockpit_layout_Layout = io_cloudoffice_platform_cockpit_layout_Layout(false))).access$100__Lio_cloudoffice_platform_cockpit_layout_Layout$Html4JavaType_2();
var stA1 = lcA1.getRows__Ljava_util_List_2();
invoker.replaceValue__VLjava_util_Collection_2Ljava_lang_Class_2Ljava_lang_Object_2(stA0,stA1, (refs_io_cloudoffice_platform_cockpit_layout_Row || (refs_io_cloudoffice_platform_cockpit_layout_Row = io_cloudoffice_platform_cockpit_layout_Row(false))).constructor.$class, lcA3);
return;
    }
    X_422: for (;;) { IF: if (gt <= 422) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_layout_Layout || (refs_io_cloudoffice_platform_cockpit_layout_Layout = io_cloudoffice_platform_cockpit_layout_Layout(false))).access$100__Lio_cloudoffice_platform_cockpit_layout_Layout$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setEditable__VZ(stI1);
return;
    }
    X_442: for (;;) { IF: if (gt <= 442) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_layout_Layout || (refs_io_cloudoffice_platform_cockpit_layout_Layout = io_cloudoffice_platform_cockpit_layout_Layout(false))).access$100__Lio_cloudoffice_platform_cockpit_layout_Layout$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setInputfieldvalue__VLjava_lang_String_2(stA1);
return;
    }
    X_459: for (;;) { IF: if (gt <= 459) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_layout_Layout || (refs_io_cloudoffice_platform_cockpit_layout_Layout = io_cloudoffice_platform_cockpit_layout_Layout(false))).access$100__Lio_cloudoffice_platform_cockpit_layout_Layout$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setUpdateloader__VZ(stI1);
return;
    }
    X_479: for (;;) { IF: if (gt <= 479) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_layout_Layout || (refs_io_cloudoffice_platform_cockpit_layout_Layout = io_cloudoffice_platform_cockpit_layout_Layout(false))).access$100__Lio_cloudoffice_platform_cockpit_layout_Layout$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setIsLoggedInUserCompanyAdmin__VZ(stI1);
return;
    }
    X_499: for (;;) { IF: if (gt <= 499) {
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

    }
}}}}}}}}}}}}}}}}}}}}}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_layout_Layout_2I = function(lcA1, lcI2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0:{ gt = 104; break IF; }
  case 1:{ gt = 109; break IF; }
  case 2:{ gt = 114; break IF; }
  case 3:{ gt = 119; break IF; }
  case 4:{ gt = 124; break IF; }
  case 5:{ gt = 129; break IF; }
  case 6:{ gt = 137; break IF; }
  case 7:{ gt = 145; break IF; }
  case 8:{ gt = 150; break IF; }
  case 9:{ gt = 158; break IF; }
  case 10:{ gt = 166; break IF; }
  case 11:{ gt = 174; break IF; }
  case 12:{ gt = 179; break IF; }
  case 13:{ gt = 184; break IF; }
  case 14:{ gt = 192; break IF; }
  case 15:{ gt = 197; break IF; }
  case 16:{ gt = 205; break IF; }
  case 17:{ gt = 210; break IF; }
  case 18:{ gt = 215; break IF; }
  case 19:{ gt = 223; break IF; }
  case 20:{ gt = 228; break IF; }
  case 21:{ gt = 236; break IF; }
  default: { gt = 244; break IF; }
}
    }
    X_104: for (;;) { IF: if (gt <= 104) {

var stA0 = lcA1.getId__Ljava_lang_String_2();
return stA0;
    }
    X_109: for (;;) { IF: if (gt <= 109) {

var stA0 = lcA1.getName__Ljava_lang_String_2();
return stA0;
    }
    X_114: for (;;) { IF: if (gt <= 114) {

var stA0 = lcA1.getCurrentPath__Ljava_lang_String_2();
return stA0;
    }
    X_119: for (;;) { IF: if (gt <= 119) {

var stA0 = lcA1.getDomain__Lio_cloudoffice_platform_cockpit_layout_Domain_2();
return stA0;
    }
    X_124: for (;;) { IF: if (gt <= 124) {

var stA0 = lcA1.getTemppath__Lio_cloudoffice_platform_cockpit_layout_Path_2();
return stA0;
    }
    X_129: for (;;) { IF: if (gt <= 129) {

var stI0 = lcA1.isPathDrop__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_137: for (;;) { IF: if (gt <= 137) {

var stI0 = lcA1.isNewPathPanelDisplay__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_145: for (;;) { IF: if (gt <= 145) {

var stA0 = lcA1.getThemeId__Ljava_lang_String_2();
return stA0;
    }
    X_150: for (;;) { IF: if (gt <= 150) {

var stI0 = lcA1.isDesignerOn__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_158: for (;;) { IF: if (gt <= 158) {

var stI0 = lcA1.isComponentListDisplay__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_166: for (;;) { IF: if (gt <= 166) {

var stI0 = lcA1.isComponentListLoader__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_174: for (;;) { IF: if (gt <= 174) {

var stA0 = lcA1.getSubscribedComponents__Ljava_util_List_2();
return stA0;
    }
    X_179: for (;;) { IF: if (gt <= 179) {

var stA0 = lcA1.getSubscribedComponentDropZone__Lio_cloudoffice_platform_cockpit_layout_Column_2();
return stA0;
    }
    X_184: for (;;) { IF: if (gt <= 184) {

var stI0 = lcA1.isLayoutDrop__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_192: for (;;) { IF: if (gt <= 192) {

var stA0 = lcA1.getProps__Ljava_util_List_2();
return stA0;
    }
    X_197: for (;;) { IF: if (gt <= 197) {

var stI0 = lcA1.isPropOn__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_205: for (;;) { IF: if (gt <= 205) {

var stA0 = lcA1.getPropPanel__Lio_cloudoffice_platform_cockpit_layout_Properties_2();
return stA0;
    }
    X_210: for (;;) { IF: if (gt <= 210) {

var stA0 = lcA1.getRows__Ljava_util_List_2();
return stA0;
    }
    X_215: for (;;) { IF: if (gt <= 215) {

var stI0 = lcA1.isEditable__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_223: for (;;) { IF: if (gt <= 223) {

var stA0 = lcA1.getInputfieldvalue__Ljava_lang_String_2();
return stA0;
    }
    X_228: for (;;) { IF: if (gt <= 228) {

var stI0 = lcA1.isUpdateloader__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_236: for (;;) { IF: if (gt <= 236) {

var stI0 = lcA1.isIsLoggedInUserCompanyAdmin__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_244: for (;;) { IF: if (gt <= 244) {
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

    }
}}}}}}}}}}}}}}}}}}}}}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.call__VLio_cloudoffice_platform_cockpit_layout_Layout_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0:{ gt = 136; break IF; }
  case 1:{ gt = 141; break IF; }
  case 2:{ gt = 146; break IF; }
  case 3:{ gt = 151; break IF; }
  case 4:{ gt = 156; break IF; }
  case 5:{ gt = 170; break IF; }
  case 6:{ gt = 175; break IF; }
  case 7:{ gt = 180; break IF; }
  case 8:{ gt = 185; break IF; }
  case 9:{ gt = 190; break IF; }
  case 10:{ gt = 204; break IF; }
  case 11:{ gt = 218; break IF; }
  case 12:{ gt = 232; break IF; }
  case 13:{ gt = 237; break IF; }
  case 14:{ gt = 242; break IF; }
  case 15:{ gt = 247; break IF; }
  case 16:{ gt = 252; break IF; }
  case 17:{ gt = 266; break IF; }
  case 18:{ gt = 280; break IF; }
  case 19:{ gt = 285; break IF; }
  case 20:{ gt = 290; break IF; }
  case 21:{ gt = 295; break IF; }
  case 22:{ gt = 300; break IF; }
  case 23:{ gt = 318; break IF; }
  case 24:{ gt = 323; break IF; }
  case 25:{ gt = 328; break IF; }
  case 26:{ gt = 333; break IF; }
  case 27:{ gt = 338; break IF; }
  case 28:{ gt = 343; break IF; }
  case 29:{ gt = 348; break IF; }
  default: { gt = 362; break IF; }
}
    }
    X_136: for (;;) { IF: if (gt <= 136) {

(refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent = io_cloudoffice_platform_cockpit_layout_LayoutComponent(false))).showNewPathPanel__VLio_cloudoffice_platform_cockpit_layout_Layout_2(lcA1);
return;
    }
    X_141: for (;;) { IF: if (gt <= 141) {

(refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent = io_cloudoffice_platform_cockpit_layout_LayoutComponent(false))).hideNewPathPanel__VLio_cloudoffice_platform_cockpit_layout_Layout_2(lcA1);
return;
    }
    X_146: for (;;) { IF: if (gt <= 146) {

(refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent = io_cloudoffice_platform_cockpit_layout_LayoutComponent(false))).showPaths__VLio_cloudoffice_platform_cockpit_layout_Layout_2(lcA1);
return;
    }
    X_151: for (;;) { IF: if (gt <= 151) {

(refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent = io_cloudoffice_platform_cockpit_layout_LayoutComponent(false))).savePath__VLio_cloudoffice_platform_cockpit_layout_Layout_2(lcA1);
return;
    }
    X_156: for (;;) { IF: if (gt <= 156) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_layout_Layout || (refs_io_cloudoffice_platform_cockpit_layout_Layout = io_cloudoffice_platform_cockpit_layout_Layout(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_layout_Layout_2(lcA1);
var stA1 = invoker.toString__Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_String_2(stA1,lcA3, null);
(refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent = io_cloudoffice_platform_cockpit_layout_LayoutComponent(false))).updatedomainJSON__VLio_cloudoffice_platform_cockpit_layout_Layout_2Ljava_lang_String_2(stA0, stA1);
return;
    }
    X_170: for (;;) { IF: if (gt <= 170) {

(refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent = io_cloudoffice_platform_cockpit_layout_LayoutComponent(false))).updatedomainpostprocess__VLio_cloudoffice_platform_cockpit_layout_Layout_2(lcA1);
return;
    }
    X_175: for (;;) { IF: if (gt <= 175) {

(refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent = io_cloudoffice_platform_cockpit_layout_LayoutComponent(false))).showLayouts__VLio_cloudoffice_platform_cockpit_layout_Layout_2(lcA1);
return;
    }
    X_180: for (;;) { IF: if (gt <= 180) {

(refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent = io_cloudoffice_platform_cockpit_layout_LayoutComponent(false))).showThemes__VLio_cloudoffice_platform_cockpit_layout_Layout_2(lcA1);
return;
    }
    X_185: for (;;) { IF: if (gt <= 185) {

(refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent = io_cloudoffice_platform_cockpit_layout_LayoutComponent(false))).showSassVariables__VLio_cloudoffice_platform_cockpit_layout_Layout_2(lcA1);
return;
    }
    X_190: for (;;) { IF: if (gt <= 190) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_layout_Layout || (refs_io_cloudoffice_platform_cockpit_layout_Layout = io_cloudoffice_platform_cockpit_layout_Layout(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_layout_Layout_2(lcA1);
var stA1 = invoker.toString__Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_String_2(stA1,lcA3, null);
(refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent = io_cloudoffice_platform_cockpit_layout_LayoutComponent(false))).readSassVariables__VLio_cloudoffice_platform_cockpit_layout_Layout_2Ljava_lang_String_2(stA0, stA1);
return;
    }
    X_204: for (;;) { IF: if (gt <= 204) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_layout_Layout || (refs_io_cloudoffice_platform_cockpit_layout_Layout = io_cloudoffice_platform_cockpit_layout_Layout(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_layout_Layout_2(lcA1);
var stA1 = invoker.toString__Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_String_2(stA1,lcA3, null);
(refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent = io_cloudoffice_platform_cockpit_layout_LayoutComponent(false))).showComponentStyle__VLio_cloudoffice_platform_cockpit_layout_Layout_2Ljava_lang_String_2(stA0, stA1);
return;
    }
    X_218: for (;;) { IF: if (gt <= 218) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_layout_Layout || (refs_io_cloudoffice_platform_cockpit_layout_Layout = io_cloudoffice_platform_cockpit_layout_Layout(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_layout_Layout_2(lcA1);
var stA1 = invoker.toString__Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_String_2(stA1,lcA3, null);
(refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent = io_cloudoffice_platform_cockpit_layout_LayoutComponent(false))).showComponentConfig__VLio_cloudoffice_platform_cockpit_layout_Layout_2Ljava_lang_String_2(stA0, stA1);
return;
    }
    X_232: for (;;) { IF: if (gt <= 232) {

(refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent = io_cloudoffice_platform_cockpit_layout_LayoutComponent(false))).showupdateloader__VLio_cloudoffice_platform_cockpit_layout_Layout_2(lcA1);
return;
    }
    X_237: for (;;) { IF: if (gt <= 237) {

(refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent = io_cloudoffice_platform_cockpit_layout_LayoutComponent(false))).hideupdateloader__VLio_cloudoffice_platform_cockpit_layout_Layout_2(lcA1);
return;
    }
    X_242: for (;;) { IF: if (gt <= 242) {

(refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent = io_cloudoffice_platform_cockpit_layout_LayoutComponent(false))).closePropPanel__VLio_cloudoffice_platform_cockpit_layout_Layout_2(lcA1);
return;
    }
    X_247: for (;;) { IF: if (gt <= 247) {

(refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent = io_cloudoffice_platform_cockpit_layout_LayoutComponent(false))).saveProperties__VLio_cloudoffice_platform_cockpit_layout_Layout_2(lcA1);
return;
    }
    X_252: for (;;) { IF: if (gt <= 252) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_layout_Layout || (refs_io_cloudoffice_platform_cockpit_layout_Layout = io_cloudoffice_platform_cockpit_layout_Layout(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_layout_Layout_2(lcA1);
var stA1 = invoker.toString__Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_String_2(stA1,lcA3, null);
(refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent = io_cloudoffice_platform_cockpit_layout_LayoutComponent(false))).opensubscribedcomponentlist__VLio_cloudoffice_platform_cockpit_layout_Layout_2Ljava_lang_String_2(stA0, stA1);
return;
    }
    X_266: for (;;) { IF: if (gt <= 266) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_layout_Layout || (refs_io_cloudoffice_platform_cockpit_layout_Layout = io_cloudoffice_platform_cockpit_layout_Layout(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_layout_Layout_2(lcA1);
var stA1 = invoker.toString__Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_String_2(stA1,lcA3, null);
(refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent = io_cloudoffice_platform_cockpit_layout_LayoutComponent(false))).updateSubscribedComponentList__VLio_cloudoffice_platform_cockpit_layout_Layout_2Ljava_lang_String_2(stA0, stA1);
return;
    }
    X_280: for (;;) { IF: if (gt <= 280) {

(refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent = io_cloudoffice_platform_cockpit_layout_LayoutComponent(false))).hideComponentList__VLio_cloudoffice_platform_cockpit_layout_Layout_2(lcA1);
return;
    }
    X_285: for (;;) { IF: if (gt <= 285) {

(refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent = io_cloudoffice_platform_cockpit_layout_LayoutComponent(false))).hideStylePanel__VLio_cloudoffice_platform_cockpit_layout_Layout_2(lcA1);
return;
    }
    X_290: for (;;) { IF: if (gt <= 290) {

(refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent = io_cloudoffice_platform_cockpit_layout_LayoutComponent(false))).reloadStyle__VLio_cloudoffice_platform_cockpit_layout_Layout_2(lcA1);
return;
    }
    X_295: for (;;) { IF: if (gt <= 295) {

(refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent = io_cloudoffice_platform_cockpit_layout_LayoutComponent(false))).reloadComponentStyle__VLio_cloudoffice_platform_cockpit_layout_Layout_2(lcA1);
return;
    }
    X_300: for (;;) { IF: if (gt <= 300) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_layout_Layout || (refs_io_cloudoffice_platform_cockpit_layout_Layout = io_cloudoffice_platform_cockpit_layout_Layout(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_layout_Layout_2(lcA1);
var stA1 = invoker.toModel__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_layout_ComponentDef || (refs_io_cloudoffice_platform_cockpit_layout_ComponentDef = io_cloudoffice_platform_cockpit_layout_ComponentDef(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_layout_ComponentDef']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.layout.ComponentDef');
(refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent = io_cloudoffice_platform_cockpit_layout_LayoutComponent(false))).insertComponent__VLio_cloudoffice_platform_cockpit_layout_Layout_2Lio_cloudoffice_platform_cockpit_layout_ComponentDef_2(stA0, stA1);
return;
    }
    X_318: for (;;) { IF: if (gt <= 318) {

(refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent = io_cloudoffice_platform_cockpit_layout_LayoutComponent(false))).createRow__VLio_cloudoffice_platform_cockpit_layout_Layout_2(lcA1);
return;
    }
    X_323: for (;;) { IF: if (gt <= 323) {

(refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent = io_cloudoffice_platform_cockpit_layout_LayoutComponent(false))).toggleDesignMode__VLio_cloudoffice_platform_cockpit_layout_Layout_2(lcA1);
return;
    }
    X_328: for (;;) { IF: if (gt <= 328) {

(refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent = io_cloudoffice_platform_cockpit_layout_LayoutComponent(false))).enableLayoutEdit__VLio_cloudoffice_platform_cockpit_layout_Layout_2(lcA1);
return;
    }
    X_333: for (;;) { IF: if (gt <= 333) {

(refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent = io_cloudoffice_platform_cockpit_layout_LayoutComponent(false))).disableLayoutEdit__VLio_cloudoffice_platform_cockpit_layout_Layout_2(lcA1);
return;
    }
    X_338: for (;;) { IF: if (gt <= 338) {

(refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent = io_cloudoffice_platform_cockpit_layout_LayoutComponent(false))).updateLayoutName__VLio_cloudoffice_platform_cockpit_layout_Layout_2(lcA1);
return;
    }
    X_343: for (;;) { IF: if (gt <= 343) {

(refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent = io_cloudoffice_platform_cockpit_layout_LayoutComponent(false))).updatelayout__VLio_cloudoffice_platform_cockpit_layout_Layout_2(lcA1);
return;
    }
    X_348: for (;;) { IF: if (gt <= 348) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_layout_Layout || (refs_io_cloudoffice_platform_cockpit_layout_Layout = io_cloudoffice_platform_cockpit_layout_Layout(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_layout_Layout_2(lcA1);
var stA1 = invoker.toString__Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_String_2(stA1,lcA3, null);
(refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent = io_cloudoffice_platform_cockpit_layout_LayoutComponent(false))).updaterenderedlayout__VLio_cloudoffice_platform_cockpit_layout_Layout_2Ljava_lang_String_2(stA0, stA1);
return;
    }
    X_362: for (;;) { IF: if (gt <= 362) {
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

    }
}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_layout_Layout']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.layout.Layout');
var stA0 = (refs_io_cloudoffice_platform_cockpit_layout_Layout || (refs_io_cloudoffice_platform_cockpit_layout_Layout = io_cloudoffice_platform_cockpit_layout_Layout(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_layout_Layout_2(lcA1);
return stA0;

};
c['protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.onChange__VLio_cloudoffice_platform_cockpit_layout_Layout_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLio_cloudoffice_platform_cockpit_layout_Layout_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
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
    m = c.read__Lio_cloudoffice_platform_cockpit_layout_Layout_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = new io_cloudoffice_platform_cockpit_layout_Layout;
(refs_io_cloudoffice_platform_cockpit_layout_Layout || (refs_io_cloudoffice_platform_cockpit_layout_Layout = io_cloudoffice_platform_cockpit_layout_Layout(false))).constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_layout_Layout$1_2.call(stA0, lcA1, lcA2, null);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.cloneTo__Lio_cloudoffice_platform_cockpit_layout_Layout_2Lio_cloudoffice_platform_cockpit_layout_Layout_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = (refs_io_cloudoffice_platform_cockpit_layout_Layout || (refs_io_cloudoffice_platform_cockpit_layout_Layout = io_cloudoffice_platform_cockpit_layout_Layout(false))).access$400__Lio_cloudoffice_platform_cockpit_layout_Layout_2Lio_cloudoffice_platform_cockpit_layout_Layout_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_layout_Layout']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.layout.Layout');
lcA0.onMessage__VLio_cloudoffice_platform_cockpit_layout_Layout_2IILjava_lang_Object_2_3Ljava_lang_Object_2(lcA1, lcI2, lcI3, lcA4, lcA5);
return;

};
c['onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.onChange__VLjava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_layout_Layout']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.layout.Layout');
lcA0.onChange__VLio_cloudoffice_platform_cockpit_layout_Layout_2I(lcA1, lcI2);
return;

};
c['onChange__VLjava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = lcA0.read__Lio_cloudoffice_platform_cockpit_layout_Layout_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2(lcA1, lcA2);
return stA0;

};
c['read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_layout_Layout']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.layout.Layout');
var stA0 = lcA0.cloneTo__Lio_cloudoffice_platform_cockpit_layout_Layout_2Lio_cloudoffice_platform_cockpit_layout_Layout_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
c['cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_layout_Layout']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.layout.Layout');
lcA0.call__VLio_cloudoffice_platform_cockpit_layout_Layout_2ILjava_lang_Object_2Ljava_lang_Object_2(lcA1, lcI2, lcA3, lcA4);
return;

};
c['call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Ljava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_layout_Layout']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.layout.Layout');
var stA0 = lcA0.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_layout_Layout_2I(lcA1, lcI2);
return stA0;

};
c['getValue__Ljava_lang_Object_2Ljava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.setValue__VLjava_lang_Object_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_layout_Layout']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.layout.Layout');
lcA0.setValue__VLio_cloudoffice_platform_cockpit_layout_Layout_2ILjava_lang_Object_2(lcA1, lcI2, lcA3);
return;

};
c['setValue__VLjava_lang_Object_2ILjava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_layout_Layout$1_2 = function(lcA1) {
  var  lcA0 = this;
c.constructor.cons__V.call(lcA0);
return;

};
    m.access = 4096;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_layout_Layout$Html4JavaTypefillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_layout_Layout$Html4JavaType', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_layout_Layout$Html4JavaTypefillInstOf });
    io_cloudoffice_platform_cockpit_layout_Layout$Html4JavaTypefillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/layout/Layout$Html4JavaType';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_layout_Layout;
    var refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent;
    var refs_org_netbeans_html_json_spi_Proto$Type;
    var refs_java_lang_String;
    var refs_io_cloudoffice_platform_cockpit_layout_Domain;
    var refs_io_cloudoffice_platform_cockpit_layout_Path;
    var refs_java_lang_Boolean;
    var refs_io_cloudoffice_platform_cockpit_layout_ComponentDef;
    var refs_io_cloudoffice_platform_cockpit_layout_Column;
    var refs_io_cloudoffice_platform_cockpit_layout_Prop;
    var refs_io_cloudoffice_platform_cockpit_layout_Properties;
    var refs_io_cloudoffice_platform_cockpit_layout_Row;
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
vm.io_cloudoffice_platform_cockpit_layout_Layout$Html4JavaType = io_cloudoffice_platform_cockpit_layout_Layout$Html4JavaType;

vm.java_lang_Boolean = function() {
  var instance = arguments.length == 0 || arguments[0] === true;
  delete vm.java_lang_Boolean;
  return link('java/lang/Boolean', function(f) { vm.java_lang_Boolean = f;})(instance);
}
vm.java_lang_String = function() {
  var instance = arguments.length == 0 || arguments[0] === true;
  delete vm.java_lang_String;
  return link('java/lang/String', function(f) { vm.java_lang_String = f;})(instance);
}
vm.org_netbeans_html_json_spi_Proto$Type = link('org/netbeans/html/json/spi/Proto$Type', function(f) { vm.org_netbeans_html_json_spi_Proto$Type =  f; });

function io_cloudoffice_platform_cockpit_layout_LayoutComponent$ColumnComponent() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_layout_LayoutComponent$ColumnComponent;
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
CLS['cons__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.enableColumnEdit__VLio_cloudoffice_platform_cockpit_layout_Column_2 = function(lcA0) {
var stA0 = lcA0;var stA1 = lcA0.getName__Ljava_lang_String_2();
stA0.setInputfieldvalue__VLjava_lang_String_2(stA1);
lcA0.setEditable__VZ(1);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.disableColumnEdit__VLio_cloudoffice_platform_cockpit_layout_Column_2 = function(lcA0) {
lcA0.setInputfieldvalue__VLjava_lang_String_2("");
lcA0.setEditable__VZ(0);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.updateColumnName__VLio_cloudoffice_platform_cockpit_layout_Column_2 = function(lcA0) {
var stA0 = lcA0;var stA1 = lcA0.getInputfieldvalue__Ljava_lang_String_2();
stA0.setName__VLjava_lang_String_2(stA1);
c.disableColumnEdit__VLio_cloudoffice_platform_cockpit_layout_Column_2(lcA0);
var stA0 = lcA0.toString__Ljava_lang_String_2();
c.updateColumnNameOnLayoutJSON__VLjava_lang_String_2(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.showSassVariables__VLio_cloudoffice_platform_cockpit_layout_Column_2 = function(lcA0) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['builder__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2']();
var stA1 = "id";var stA2 = lcA0.getId__Ljava_lang_String_2();
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2(stA0,stA1, stA2);
var lcA1 = stA0;
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_Components || (refs_io_cloudoffice_platform_cockpit_api_Components = vm.io_cloudoffice_platform_cockpit_api_Components(false)))['_LAYOUT']();var stA1 = new vm.io_cloudoffice_platform_cockpit_api_Event;
(refs_io_cloudoffice_platform_cockpit_api_Event || (refs_io_cloudoffice_platform_cockpit_api_Event = vm.io_cloudoffice_platform_cockpit_api_Event(false))).constructor['cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2'].call(stA1, "proppanel", "designermode", lcA1);
invoker.listen__VLio_cloudoffice_platform_cockpit_api_Signal_2(stA0,stA1);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.hoverComponent__VLio_cloudoffice_platform_cockpit_layout_Column_2 = function(lcA0) {
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"LayoutManager.componentHover(\"");
var stA1 = lcA0.getId__Ljava_lang_String_2();
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"\")");
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
(refs_io_cloudoffice_platform_cockpit_js_VIEW || (refs_io_cloudoffice_platform_cockpit_js_VIEW = vm.io_cloudoffice_platform_cockpit_js_VIEW(false)))['invokeJSFunction__VLjava_lang_String_2'](stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.deleteCoumn__VLio_cloudoffice_platform_cockpit_layout_Column_2 = function(lcA0) {
var stA0 = lcA0.toString__Ljava_lang_String_2();
c.deleteColumnFromLayoutJSON__VLjava_lang_String_2(stA0);
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_Event;
(refs_io_cloudoffice_platform_cockpit_api_Event || (refs_io_cloudoffice_platform_cockpit_api_Event = vm.io_cloudoffice_platform_cockpit_api_Event(false))).constructor['cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2'].call(stA0, "invokefunction", "invokefunction", "showupdateloader");
var lcA1 = stA0;
var stA0 = (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent = io_cloudoffice_platform_cockpit_layout_LayoutComponent(false))).getDefaultInstance__Lio_cloudoffice_platform_cockpit_api_Component_2();
invoker.listen__VLio_cloudoffice_platform_cockpit_api_Signal_2(stA0,lcA1);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.showComponentList__VLio_cloudoffice_platform_cockpit_layout_Column_2 = function(lcA0) {
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_Event;
var stA1 = stA0;var stA2 = "opensubscribedcomponentlist";var stA3 = "invokefunction";var stA4 = lcA0.toString__Ljava_lang_String_2();
(refs_io_cloudoffice_platform_cockpit_api_Event || (refs_io_cloudoffice_platform_cockpit_api_Event = vm.io_cloudoffice_platform_cockpit_api_Event(false))).constructor['cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2'].call(stA1, stA2, stA3, stA4);
var lcA1 = stA0;
var stA0 = (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent = io_cloudoffice_platform_cockpit_layout_LayoutComponent(false))).getDefaultInstance__Lio_cloudoffice_platform_cockpit_api_Component_2();
invoker.listen__VLio_cloudoffice_platform_cockpit_api_Signal_2(stA0,lcA1);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.updateColumnNameOnLayoutJSON__VLjava_lang_String_2 = function(lcA0) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['_CONFIG']();var stA1 = "layout";var stA2 = (refs_io_cloudoffice_platform_cockpit_js_JSUIUtils || (refs_io_cloudoffice_platform_cockpit_js_JSUIUtils = vm.io_cloudoffice_platform_cockpit_js_JSUIUtils(false)))['getLayout__Ljava_lang_String_2']();
var stA1 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['configFetchEndpoint__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2'](stA1, stA2);
var stA2 = null;var stA3 = new io_cloudoffice_platform_cockpit_layout_LayoutComponent$ColumnComponent$1;
(refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$ColumnComponent$1 || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$ColumnComponent$1 = io_cloudoffice_platform_cockpit_layout_LayoutComponent$ColumnComponent$1(false))).constructor.cons__VLjava_lang_String_2.call(stA3, lcA0);
invoker.fetch__VLjava_lang_String_2Ljava_util_Map_2Lio_cloudoffice_platform_cockpit_api_CallBack_2(stA0,stA1, stA2, stA3);
return;

};
c['updateColumnNameOnLayoutJSON__VLjava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.updateColumnName__VLio_cloudoffice_platform_cockpit_layout_Layout_2Ljava_lang_String_2 = function(lcA0, lcA1) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor;
(refs_io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor || (refs_io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor = vm.io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor(false))).constructor['cons__V'].call(stA0);
var stA1 = lcA1;var stA2 = new io_cloudoffice_platform_cockpit_layout_Column;
(refs_io_cloudoffice_platform_cockpit_layout_Column || (refs_io_cloudoffice_platform_cockpit_layout_Column = io_cloudoffice_platform_cockpit_layout_Column(false))).constructor.cons__V.call(stA2);
var stA0 = invoker.getObject__Ljava_lang_Object_2Ljava_lang_String_2Ljava_lang_Object_2(stA0,stA1, stA2);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_layout_Column']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.layout.Column');
var lcA2 = stA0;
if ((null) === (lcA2)) { gt = 158; break IF; }
var stA0 = lcA2.getId__Ljava_lang_String_2();
var lcA3 = stA0;
var stA0 = lcA0.getRows__Ljava_util_List_2();
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA4 = stA0;
    }
    X_43: for (;;) { IF: if (gt <= 43) {

var stI0 = invoker.hasNext__Z(lcA4);
if ((stI0) == 0) { gt = 158; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA4);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_layout_Row']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.layout.Row');
var lcA5 = stA0;
var stA0 = lcA5.getColumns__Ljava_util_List_2();
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA6 = stA0;
    }
    X_77: for (;;) { IF: if (gt <= 77) {

var stI0 = invoker.hasNext__Z(lcA6);
if ((stI0) == 0) { gt = 155; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA6);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_layout_Column']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.layout.Column');
var lcA7 = stA0;
var stA0 = lcA3;var stA1 = lcA7.getId__Ljava_lang_String_2();
var stI0 = invoker.equalsIgnoreCase__ZLjava_lang_String_2(stA0,stA1);
if ((stI0) == 0) { gt = 147; break IF; }
var stA0 = lcA7;var stA1 = lcA2.getName__Ljava_lang_String_2();
stA0.setName__VLjava_lang_String_2(stA1);
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['_CONFIG']();var stA1 = lcA0.getId__Ljava_lang_String_2();
var stA1 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['layoutConfigPostEndpoint__Ljava_lang_String_2Ljava_lang_String_2'](stA1);
var stA2 = lcA0.toString__Ljava_lang_String_2();
var stA3 = new io_cloudoffice_platform_cockpit_layout_LayoutComponent$ColumnComponent$2;
(refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$ColumnComponent$2 || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$ColumnComponent$2 = io_cloudoffice_platform_cockpit_layout_LayoutComponent$ColumnComponent$2(false))).constructor.cons__V.call(stA3);
invoker.post__VLjava_lang_String_2Ljava_lang_String_2Lio_cloudoffice_platform_cockpit_api_CallBack_2(stA0,stA1, stA2, stA3);
{ gt = 152; break IF; }
    }
    X_147: for (;;) { IF: if (gt <= 147) {

(refs_io_cloudoffice_platform_cockpit_api_Logger || (refs_io_cloudoffice_platform_cockpit_api_Logger = vm.io_cloudoffice_platform_cockpit_api_Logger(false)))['log__VLjava_lang_String_2'](">>> Column name not updated.");
    }
    X_152: for (;;) { IF: if (gt <= 152) {
{ gt = 0; continue X_77; }
    }
    X_155: for (;;) { IF: if (gt <= 155) {
{ gt = 0; continue X_43; }
    }
    X_158: for (;;) { IF: if (gt <= 158) {
return;

    }
}}}}}}}
};
c['updateColumnName__VLio_cloudoffice_platform_cockpit_layout_Layout_2Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.deleteColumnFromLayoutJSON__VLjava_lang_String_2 = function(lcA0) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['_CONFIG']();var stA1 = "layout";var stA2 = (refs_io_cloudoffice_platform_cockpit_js_JSUIUtils || (refs_io_cloudoffice_platform_cockpit_js_JSUIUtils = vm.io_cloudoffice_platform_cockpit_js_JSUIUtils(false)))['getLayout__Ljava_lang_String_2']();
var stA1 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['configFetchEndpoint__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2'](stA1, stA2);
var stA2 = null;var stA3 = new io_cloudoffice_platform_cockpit_layout_LayoutComponent$ColumnComponent$3;
(refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$ColumnComponent$3 || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$ColumnComponent$3 = io_cloudoffice_platform_cockpit_layout_LayoutComponent$ColumnComponent$3(false))).constructor.cons__VLjava_lang_String_2.call(stA3, lcA0);
invoker.fetch__VLjava_lang_String_2Ljava_util_Map_2Lio_cloudoffice_platform_cockpit_api_CallBack_2(stA0,stA1, stA2, stA3);
return;

};
c['deleteColumnFromLayoutJSON__VLjava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.deleteColumnFromRow__VLio_cloudoffice_platform_cockpit_layout_Layout_2Ljava_lang_String_2 = function(lcA0, lcA1) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor;
(refs_io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor || (refs_io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor = vm.io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor(false))).constructor['cons__V'].call(stA0);
var stA1 = lcA1;var stA2 = new io_cloudoffice_platform_cockpit_layout_Column;
(refs_io_cloudoffice_platform_cockpit_layout_Column || (refs_io_cloudoffice_platform_cockpit_layout_Column = io_cloudoffice_platform_cockpit_layout_Column(false))).constructor.cons__V.call(stA2);
var stA0 = invoker.getObject__Ljava_lang_Object_2Ljava_lang_String_2Ljava_lang_Object_2(stA0,stA1, stA2);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_layout_Column']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.layout.Column');
var lcA2 = stA0;
if ((null) === (lcA2)) { gt = 99; break IF; }
var stA0 = lcA0;var stA1 = lcA2.getId__Ljava_lang_String_2();
var stA0 = c.getRowByColumnId__Lio_cloudoffice_platform_cockpit_layout_Row_2Lio_cloudoffice_platform_cockpit_layout_Layout_2Ljava_lang_String_2(stA0, stA1);
var lcA3 = stA0;
if ((null) === (lcA3)) { gt = 91; break IF; }
var stA0 = lcA3.getColumns__Ljava_util_List_2();
var stI0 = invoker.remove__ZLjava_lang_Object_2(stA0,lcA2);
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['_CONFIG']();var stA1 = lcA0.getId__Ljava_lang_String_2();
var stA2 = lcA3.getId__Ljava_lang_String_2();
var stA3 = lcA2.getId__Ljava_lang_String_2();
var stA1 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['layoutStylePostEndpoint__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2'](stA1, stA2, stA3, "column", "delete");
var stA2 = lcA0.toString__Ljava_lang_String_2();
var stA3 = new io_cloudoffice_platform_cockpit_layout_LayoutComponent$ColumnComponent$4;
(refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$ColumnComponent$4 || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$ColumnComponent$4 = io_cloudoffice_platform_cockpit_layout_LayoutComponent$ColumnComponent$4(false))).constructor.cons__V.call(stA3);
invoker.post__VLjava_lang_String_2Ljava_lang_String_2Lio_cloudoffice_platform_cockpit_api_CallBack_2(stA0,stA1, stA2, stA3);
{ gt = 96; break IF; }
    }
    X_91: for (;;) { IF: if (gt <= 91) {

(refs_io_cloudoffice_platform_cockpit_api_Logger || (refs_io_cloudoffice_platform_cockpit_api_Logger = vm.io_cloudoffice_platform_cockpit_api_Logger(false)))['log__VLjava_lang_String_2'](">>> Row not found.");
    }
    X_96: for (;;) { IF: if (gt <= 96) {
{ gt = 104; break IF; }
    }
    X_99: for (;;) { IF: if (gt <= 99) {

(refs_io_cloudoffice_platform_cockpit_api_Logger || (refs_io_cloudoffice_platform_cockpit_api_Logger = vm.io_cloudoffice_platform_cockpit_api_Logger(false)))['log__VLjava_lang_String_2'](">>> Column information is invalid.");
    }
    X_104: for (;;) { IF: if (gt <= 104) {
return;

    }
}}}}}
};
c['deleteColumnFromRow__VLio_cloudoffice_platform_cockpit_layout_Layout_2Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.getRowByColumnId__Lio_cloudoffice_platform_cockpit_layout_Row_2Lio_cloudoffice_platform_cockpit_layout_Layout_2Ljava_lang_String_2 = function(lcA0, lcA1) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var lcA2 = null;
var stA0 = lcA0.getRows__Ljava_util_List_2();
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA3 = stA0;
    }
    X_12: for (;;) { IF: if (gt <= 12) {

var stI0 = invoker.hasNext__Z(lcA3);
if ((stI0) == 0) { gt = 94; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA3);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_layout_Row']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.layout.Row');
var lcA4 = stA0;
var stA0 = lcA4.getColumns__Ljava_util_List_2();
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA5 = stA0;
    }
    X_44: for (;;) { IF: if (gt <= 44) {

var stI0 = invoker.hasNext__Z(lcA5);
if ((stI0) == 0) { gt = 91; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA5);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_layout_Column']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.layout.Column');
var lcA6 = stA0;
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](lcA1);
if ((stI0) == 0) { gt = 88; break IF; }
var stA0 = lcA1;var stA1 = lcA6.getId__Ljava_lang_String_2();
var stI0 = invoker.equalsIgnoreCase__ZLjava_lang_String_2(stA0,stA1);
if ((stI0) == 0) { gt = 88; break IF; }
var lcA2 = lcA4;
    }
    X_88: for (;;) { IF: if (gt <= 88) {
{ gt = 0; continue X_44; }
    }
    X_91: for (;;) { IF: if (gt <= 91) {
{ gt = 0; continue X_12; }
    }
    X_94: for (;;) { IF: if (gt <= 94) {

return lcA2;

    }
}}}}}}
};
c['getRowByColumnId__Lio_cloudoffice_platform_cockpit_layout_Row_2Lio_cloudoffice_platform_cockpit_layout_Layout_2Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_layout_LayoutComponent$ColumnComponentfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_layout_LayoutComponent$ColumnComponent', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_layout_LayoutComponent$ColumnComponentfillInstOf });
    io_cloudoffice_platform_cockpit_layout_LayoutComponent$ColumnComponentfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/layout/LayoutComponent$ColumnComponent';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 33;
    CLS.$class.cnstr = CLS;
    var refs_java_lang_Object;
    var refs_io_cloudoffice_platform_cockpit_api_MapBuilder;
    var refs_io_cloudoffice_platform_cockpit_api_Components;
    var refs_io_cloudoffice_platform_cockpit_api_Event;
    var refs_java_lang_StringBuilder;
    var refs_io_cloudoffice_platform_cockpit_js_VIEW;
    var refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent;
    var refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration;
    var refs_io_cloudoffice_platform_cockpit_js_JSUIUtils;
    var refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$ColumnComponent$1;
    var refs_io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor;
    var refs_io_cloudoffice_platform_cockpit_layout_Column;
    var refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$ColumnComponent$2;
    var refs_io_cloudoffice_platform_cockpit_api_Logger;
    var refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$ColumnComponent$3;
    var refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$ColumnComponent$4;
    var refs_io_cloudoffice_platform_cockpit_api_UtilValidate;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_layout_LayoutComponent$ColumnComponent = registerClass(exports,'io_cloudoffice_platform_cockpit_layout_LayoutComponent$ColumnComponent',io_cloudoffice_platform_cockpit_layout_LayoutComponent$ColumnComponent);


function io_cloudoffice_platform_cockpit_layout_LayoutComponent$ColumnComponent$4() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_layout_LayoutComponent$ColumnComponent$4;
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
    m.access = 0;
    m.cls = CLS;
    m = c.handle__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;
(refs_io_cloudoffice_platform_cockpit_api_Logger || (refs_io_cloudoffice_platform_cockpit_api_Logger = vm.io_cloudoffice_platform_cockpit_api_Logger(false)))['log__VLjava_lang_String_2'](">>> Column deleted.");
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_Event;
(refs_io_cloudoffice_platform_cockpit_api_Event || (refs_io_cloudoffice_platform_cockpit_api_Event = vm.io_cloudoffice_platform_cockpit_api_Event(false))).constructor['cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2'].call(stA0, "invokefunction", "invokefunction", "updatelayout");
var lcA2 = stA0;
var stA0 = (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent = io_cloudoffice_platform_cockpit_layout_LayoutComponent(false))).getDefaultInstance__Lio_cloudoffice_platform_cockpit_api_Component_2();
invoker.listen__VLio_cloudoffice_platform_cockpit_api_Signal_2(stA0,lcA2);
return;

};
c['handle__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_layout_LayoutComponent$ColumnComponent$4fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_layout_LayoutComponent$ColumnComponent$4', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_CallBack(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_layout_LayoutComponent$ColumnComponent$4fillInstOf });
    io_cloudoffice_platform_cockpit_layout_LayoutComponent$ColumnComponent$4fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/layout/LayoutComponent$ColumnComponent$4';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_CallBack(false).constructor.$class
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
    var refs_java_lang_Object;
    var refs_io_cloudoffice_platform_cockpit_api_Logger;
    var refs_io_cloudoffice_platform_cockpit_api_Event;
    var refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_layout_LayoutComponent$ColumnComponent$4 = io_cloudoffice_platform_cockpit_layout_LayoutComponent$ColumnComponent$4;


function io_cloudoffice_platform_cockpit_layout_LayoutComponent$ColumnComponent$3() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_layout_LayoutComponent$ColumnComponent$3;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$columnString = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$ColumnComponent$3_val$columnString'] = v; return this['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$ColumnComponent$3_val$columnString']; };
    m = CLS.cons__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$ColumnComponent$3_val$columnString'] = lcA1;
(refs_java_lang_Object || (refs_java_lang_Object = vm.java_lang_Object(false))).constructor['cons__V'].call(lcA0);
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.handle__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor;
(refs_io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor || (refs_io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor = vm.io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor(false))).constructor['cons__V'].call(stA0);
var stA1 = lcA1;var stA2 = new io_cloudoffice_platform_cockpit_layout_Layout;
(refs_io_cloudoffice_platform_cockpit_layout_Layout || (refs_io_cloudoffice_platform_cockpit_layout_Layout = io_cloudoffice_platform_cockpit_layout_Layout(false))).constructor.cons__V.call(stA2);
var stA0 = invoker.getObject__Ljava_lang_Object_2Ljava_lang_String_2Ljava_lang_Object_2(stA0,stA1, stA2);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_layout_Layout']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.layout.Layout');
var lcA2 = stA0;
(refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$ColumnComponent || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$ColumnComponent = io_cloudoffice_platform_cockpit_layout_LayoutComponent$ColumnComponent(false))).deleteColumnFromRow__VLio_cloudoffice_platform_cockpit_layout_Layout_2Ljava_lang_String_2(lcA2, lcA0['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$ColumnComponent$3_val$columnString']);
return;

};
c['handle__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_layout_LayoutComponent$ColumnComponent$3fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_layout_LayoutComponent$ColumnComponent$3', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_CallBack(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_layout_LayoutComponent$ColumnComponent$3fillInstOf });
    io_cloudoffice_platform_cockpit_layout_LayoutComponent$ColumnComponent$3fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/layout/LayoutComponent$ColumnComponent$3';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_CallBack(false).constructor.$class
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
    var refs_java_lang_Object;
    var refs_io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor;
    var refs_io_cloudoffice_platform_cockpit_layout_Layout;
    var refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$ColumnComponent;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$ColumnComponent$3_val$columnString'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_layout_LayoutComponent$ColumnComponent$3 = io_cloudoffice_platform_cockpit_layout_LayoutComponent$ColumnComponent$3;


function io_cloudoffice_platform_cockpit_layout_LayoutComponent$ColumnComponent$2() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_layout_LayoutComponent$ColumnComponent$2;
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
    m.access = 0;
    m.cls = CLS;
    m = c.handle__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;
(refs_io_cloudoffice_platform_cockpit_api_Logger || (refs_io_cloudoffice_platform_cockpit_api_Logger = vm.io_cloudoffice_platform_cockpit_api_Logger(false)))['log__VLjava_lang_String_2'](">>> Column name updated.");
return;

};
c['handle__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_layout_LayoutComponent$ColumnComponent$2fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_layout_LayoutComponent$ColumnComponent$2', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_CallBack(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_layout_LayoutComponent$ColumnComponent$2fillInstOf });
    io_cloudoffice_platform_cockpit_layout_LayoutComponent$ColumnComponent$2fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/layout/LayoutComponent$ColumnComponent$2';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_CallBack(false).constructor.$class
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
    var refs_java_lang_Object;
    var refs_io_cloudoffice_platform_cockpit_api_Logger;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_layout_LayoutComponent$ColumnComponent$2 = io_cloudoffice_platform_cockpit_layout_LayoutComponent$ColumnComponent$2;


function io_cloudoffice_platform_cockpit_layout_LayoutComponent$ColumnComponent$1() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_layout_LayoutComponent$ColumnComponent$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$colString = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$ColumnComponent$1_val$colString'] = v; return this['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$ColumnComponent$1_val$colString']; };
    m = CLS.cons__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$ColumnComponent$1_val$colString'] = lcA1;
(refs_java_lang_Object || (refs_java_lang_Object = vm.java_lang_Object(false))).constructor['cons__V'].call(lcA0);
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.handle__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor;
(refs_io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor || (refs_io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor = vm.io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor(false))).constructor['cons__V'].call(stA0);
var stA1 = lcA1;var stA2 = new io_cloudoffice_platform_cockpit_layout_Layout;
(refs_io_cloudoffice_platform_cockpit_layout_Layout || (refs_io_cloudoffice_platform_cockpit_layout_Layout = io_cloudoffice_platform_cockpit_layout_Layout(false))).constructor.cons__V.call(stA2);
var stA0 = invoker.getObject__Ljava_lang_Object_2Ljava_lang_String_2Ljava_lang_Object_2(stA0,stA1, stA2);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_layout_Layout']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.layout.Layout');
var lcA2 = stA0;
(refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$ColumnComponent || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$ColumnComponent = io_cloudoffice_platform_cockpit_layout_LayoutComponent$ColumnComponent(false))).updateColumnName__VLio_cloudoffice_platform_cockpit_layout_Layout_2Ljava_lang_String_2(lcA2, lcA0['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$ColumnComponent$1_val$colString']);
return;

};
c['handle__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_layout_LayoutComponent$ColumnComponent$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_layout_LayoutComponent$ColumnComponent$1', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_CallBack(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_layout_LayoutComponent$ColumnComponent$1fillInstOf });
    io_cloudoffice_platform_cockpit_layout_LayoutComponent$ColumnComponent$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/layout/LayoutComponent$ColumnComponent$1';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_CallBack(false).constructor.$class
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
    var refs_java_lang_Object;
    var refs_io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor;
    var refs_io_cloudoffice_platform_cockpit_layout_Layout;
    var refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$ColumnComponent;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$ColumnComponent$1_val$colString'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_layout_LayoutComponent$ColumnComponent$1 = io_cloudoffice_platform_cockpit_layout_LayoutComponent$ColumnComponent$1;


function io_cloudoffice_platform_cockpit_layout_Column() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_layout_Column;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_TYPE'] = null;
  m = c._TYPE = function (v) {  if (arguments.length == 1) CLS['fld_TYPE'] = v; return CLS['fld_TYPE']; };
  m = c._proto = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_layout_Column_proto'] = v; return this['fld_io_cloudoffice_platform_cockpit_layout_Column_proto']; };
  m = c._prop_id = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_layout_Column_prop_id'] = v; return this['fld_io_cloudoffice_platform_cockpit_layout_Column_prop_id']; };
  m = c._prop_name = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_layout_Column_prop_name'] = v; return this['fld_io_cloudoffice_platform_cockpit_layout_Column_prop_name']; };
  m = c._prop_hasLayout = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_layout_Column_prop_hasLayout'] = v; return this['fld_io_cloudoffice_platform_cockpit_layout_Column_prop_hasLayout']; };
  m = c._prop_layout = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_layout_Column_prop_layout'] = v; return this['fld_io_cloudoffice_platform_cockpit_layout_Column_prop_layout']; };
  m = c._prop_components = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_layout_Column_prop_components'] = v; return this['fld_io_cloudoffice_platform_cockpit_layout_Column_prop_components']; };
  m = c._prop_editable = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_layout_Column_prop_editable'] = v; return this['fld_io_cloudoffice_platform_cockpit_layout_Column_prop_editable']; };
  m = c._prop_inputfieldvalue = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_layout_Column_prop_inputfieldvalue'] = v; return this['fld_io_cloudoffice_platform_cockpit_layout_Column_prop_inputfieldvalue']; };
    m = c.modelFor__Ljava_lang_Class_2 = function() {
return (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$ColumnComponent || (refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$ColumnComponent = io_cloudoffice_platform_cockpit_layout_LayoutComponent$ColumnComponent(false))).constructor.$class;

};
    m.access = 10;
    m.cls = CLS;
    m = c.getId__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Column_proto'],"id");
return lcA0['fld_io_cloudoffice_platform_cockpit_layout_Column_prop_id'];

};
c['getId__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setId__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Column_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_Column_prop_id'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_layout_Column_prop_id'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Column_proto'],"id", lcA2, lcA1);
return;

    }
}}
};
c['setId__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getName__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Column_proto'],"name");
return lcA0['fld_io_cloudoffice_platform_cockpit_layout_Column_prop_name'];

};
c['getName__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setName__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Column_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_Column_prop_name'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_layout_Column_prop_name'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Column_proto'],"name", lcA2, lcA1);
return;

    }
}}
};
c['setName__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isHasLayout__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Column_proto'],"hasLayout");
return lcA0['fld_io_cloudoffice_platform_cockpit_layout_Column_prop_hasLayout'];

};
c['isHasLayout__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setHasLayout__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Column_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_layout_Column_prop_hasLayout']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_layout_Column_prop_hasLayout'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_Column_proto'];var stA1 = "hasLayout";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2, stA3);
return;

    }
}}
};
c['setHasLayout__VZ'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getLayout__Lio_cloudoffice_platform_cockpit_layout_Layout_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Column_proto'],"layout");
if ((lcA0['fld_io_cloudoffice_platform_cockpit_layout_Column_prop_layout']) !== (c._TYPE())) { gt = 40; break IF; }
var stA0 = lcA0;var stA1 = new io_cloudoffice_platform_cockpit_layout_Layout;
(refs_io_cloudoffice_platform_cockpit_layout_Layout || (refs_io_cloudoffice_platform_cockpit_layout_Layout = io_cloudoffice_platform_cockpit_layout_Layout(false))).constructor.cons__V.call(stA1);
var stA2 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Column_proto']);
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, stA2);
stA0['fld_io_cloudoffice_platform_cockpit_layout_Column_prop_layout'] = stA1;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

if (lcA0['fld_io_cloudoffice_platform_cockpit_layout_Column_prop_layout'] !== null && !lcA0['fld_io_cloudoffice_platform_cockpit_layout_Column_prop_layout']['$instOf_io_cloudoffice_platform_cockpit_layout_Layout']) vm.java_lang_Class(false).castEx(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Column_prop_layout'], 'io.cloudoffice.platform.cockpit.layout.Layout');
return lcA0['fld_io_cloudoffice_platform_cockpit_layout_Column_prop_layout'];

    }
}}
};
c['getLayout__Lio_cloudoffice_platform_cockpit_layout_Layout_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setLayout__VLio_cloudoffice_platform_cockpit_layout_Layout_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Column_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_Column_prop_layout'];
if ((lcA2) !== (lcA1)) { gt = 18; break IF; }
return;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

lcA0['fld_io_cloudoffice_platform_cockpit_layout_Column_prop_layout'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Column_proto'],"layout", lcA2, lcA1);
return;

    }
}}
};
c['setLayout__VLio_cloudoffice_platform_cockpit_layout_Layout_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getComponents__Ljava_util_List_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Column_proto'],"components");
return lcA0['fld_io_cloudoffice_platform_cockpit_layout_Column_prop_components'];

};
c['getComponents__Ljava_util_List_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isEditable__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Column_proto'],"editable");
return lcA0['fld_io_cloudoffice_platform_cockpit_layout_Column_prop_editable'];

};
c['isEditable__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setEditable__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Column_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_layout_Column_prop_editable']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_layout_Column_prop_editable'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_Column_proto'];var stA1 = "editable";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2, stA3);
return;

    }
}}
};
c['setEditable__VZ'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getInputfieldvalue__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Column_proto'],"inputfieldvalue");
return lcA0['fld_io_cloudoffice_platform_cockpit_layout_Column_prop_inputfieldvalue'];

};
c['getInputfieldvalue__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setInputfieldvalue__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Column_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_Column_prop_inputfieldvalue'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_layout_Column_prop_inputfieldvalue'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Column_proto'],"inputfieldvalue", lcA2, lcA1);
return;

    }
}}
};
c['setInputfieldvalue__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;
(refs_java_lang_Object || (refs_java_lang_Object = vm.java_lang_Object(false))).constructor['cons__V'].call(lcA0);
var stA0 = lcA0;var stA1 = invoker.createProto__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2(c._TYPE(),lcA0, lcA1);
stA0['fld_io_cloudoffice_platform_cockpit_layout_Column_proto'] = stA1;
var stA0 = lcA0;var stA1 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_Column_proto'];var stA2 = "components";var stI3 = -1;var stA4 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, 0);
var stA1 = invoker.createList__Ljava_util_List_2Ljava_lang_String_2I_3Ljava_lang_String_2(stA1,stA2, stI3, stA4);
stA0['fld_io_cloudoffice_platform_cockpit_layout_Column_prop_components'] = stA1;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = (refs_net_java_html_BrwsrCtx || (refs_net_java_html_BrwsrCtx = vm.net_java_html_BrwsrCtx(false)))['findDefault__Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'](c.constructor.$class);
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, stA1);
lcA0['fld_io_cloudoffice_platform_cockpit_layout_Column_prop_layout'] = c._TYPE();
return;

};
CLS['cons__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLjava_lang_String_2Ljava_lang_String_2ZLio_cloudoffice_platform_cockpit_layout_Layout_2ZLjava_lang_String_2_3Lio_cloudoffice_platform_cockpit_layout_ComponentDef_2 = function(lcA1, lcA2, lcI3, lcA4, lcI5, lcA6, lcA7) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = (refs_net_java_html_BrwsrCtx || (refs_net_java_html_BrwsrCtx = vm.net_java_html_BrwsrCtx(false)))['findDefault__Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'](c.constructor.$class);
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, stA1);
lcA0['fld_io_cloudoffice_platform_cockpit_layout_Column_prop_id'] = lcA1;
lcA0['fld_io_cloudoffice_platform_cockpit_layout_Column_prop_name'] = lcA2;
lcA0['fld_io_cloudoffice_platform_cockpit_layout_Column_prop_hasLayout'] = lcI3;
lcA0['fld_io_cloudoffice_platform_cockpit_layout_Column_prop_layout'] = lcA4;
lcA0['fld_io_cloudoffice_platform_cockpit_layout_Column_prop_editable'] = lcI5;
lcA0['fld_io_cloudoffice_platform_cockpit_layout_Column_prop_inputfieldvalue'] = lcA6;
invoker.initTo__VLjava_util_Collection_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Column_proto'],lcA0['fld_io_cloudoffice_platform_cockpit_layout_Column_prop_components'], lcA7);
return;

};
CLS['cons__VLjava_lang_String_2Ljava_lang_String_2ZLio_cloudoffice_platform_cockpit_layout_Layout_2ZLjava_lang_String_2_3Lio_cloudoffice_platform_cockpit_layout_ComponentDef_2'] = m;

    m.access = 129;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, (7));
var lcA3 = stA0;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_Column_proto'];var stA1 = lcA2;var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, (7));
Array.at(stA2, 0, "id");
Array.at(stA2, 1, "name");
Array.at(stA2, 2, "hasLayout");
Array.at(stA2, 3, "layout");
Array.at(stA2, 4, "components");
Array.at(stA2, 5, "editable");
Array.at(stA2, (6), "inputfieldvalue");
invoker.extract__VLjava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Object_2(stA0,stA1, stA2, lcA3);
if ((lcA3[0] || Array.at(lcA3, 0)) !== null && !(lcA3[0] || Array.at(lcA3, 0))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[0] || Array.at(lcA3, 0)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_layout_Column_prop_id'] = (lcA3[0] || Array.at(lcA3, 0));
if ((lcA3[1] || Array.at(lcA3, 1)) !== null && !(lcA3[1] || Array.at(lcA3, 1))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[1] || Array.at(lcA3, 1)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_layout_Column_prop_name'] = (lcA3[1] || Array.at(lcA3, 1));
var stA0 = lcA0;if (((lcA3[2] || Array.at(lcA3, 2))) !== null) { gt = 92; break IF; }
var stI1 = 0;{ gt = 104; break IF; }
    }
    X_92: for (;;) { IF: if (gt <= 92) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[2] || Array.at(lcA3, 2)));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_104: for (;;) { IF: if (gt <= 104) {
stA0['fld_io_cloudoffice_platform_cockpit_layout_Column_prop_hasLayout'] = stI1;
var stA0 = lcA0;var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Column_proto'],(refs_io_cloudoffice_platform_cockpit_layout_Layout || (refs_io_cloudoffice_platform_cockpit_layout_Layout = io_cloudoffice_platform_cockpit_layout_Layout(false))).constructor.$class, (lcA3[3] || Array.at(lcA3, 3)));
stA0['fld_io_cloudoffice_platform_cockpit_layout_Column_prop_layout'] = stA1;
var stA0 = c.useAsArray___3Ljava_lang_Object_2Ljava_lang_Object_2((lcA3[4] || Array.at(lcA3, 4)));
var lcA4 = stA0;
var lcI5 = (lcA4).length;
var lcI6 = 0;
    }
    X_139: for (;;) { IF: if (gt <= 139) {

if ((lcI6) >= (lcI5)) { gt = 180; break IF; }
var lcA7 = (lcA4[lcI6] || Array.at(lcA4, lcI6));
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_Column_prop_components'];var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Column_proto'],(refs_io_cloudoffice_platform_cockpit_layout_ComponentDef || (refs_io_cloudoffice_platform_cockpit_layout_ComponentDef = io_cloudoffice_platform_cockpit_layout_ComponentDef(false))).constructor.$class, lcA7);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,stA1);
lcI6++;
{ gt = 0; continue X_139; }
    }
    X_180: for (;;) { IF: if (gt <= 180) {

var stA0 = lcA0;if (((lcA3[5] || Array.at(lcA3, 5))) !== null) { gt = 191; break IF; }
var stI1 = 0;{ gt = 203; break IF; }
    }
    X_191: for (;;) { IF: if (gt <= 191) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[5] || Array.at(lcA3, 5)));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_203: for (;;) { IF: if (gt <= 203) {
stA0['fld_io_cloudoffice_platform_cockpit_layout_Column_prop_editable'] = stI1;
if ((lcA3[(6)] || Array.at(lcA3, (6))) !== null && !(lcA3[(6)] || Array.at(lcA3, (6)))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[(6)] || Array.at(lcA3, (6))), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_layout_Column_prop_inputfieldvalue'] = (lcA3[(6)] || Array.at(lcA3, (6)));
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
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"id");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getId__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"name");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getName__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"hasLayout");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stI2 = lcA0.isHasLayout__Z();
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI2);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"layout");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_layout_Column_prop_layout']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"components");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_layout_Column_prop_components']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"editable");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stI2 = lcA0.isEditable__Z();
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI2);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"inputfieldvalue");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getInputfieldvalue__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(125));
var stA0 = invoker.toString__Ljava_lang_String_2(lcA1);
return stA0;

};
c['toString__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Lio_cloudoffice_platform_cockpit_layout_Column_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Column_proto']);
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_layout_Column_2Lnet_java_html_BrwsrCtx_2.call(stA0, stA1);
return stA0;

};
c['clone__Lio_cloudoffice_platform_cockpit_layout_Column_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Lio_cloudoffice_platform_cockpit_layout_Column_2Lnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
var stA0 = new io_cloudoffice_platform_cockpit_layout_Column;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, lcA1);
var lcA2 = stA0;
var stA0 = lcA2;var stA1 = lcA0.getId__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_layout_Column_prop_id'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getName__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_layout_Column_prop_name'] = stA1;
var stA0 = lcA2;var stI1 = lcA0.isHasLayout__Z();
stA0['fld_io_cloudoffice_platform_cockpit_layout_Column_prop_hasLayout'] = stI1;
var stA0 = lcA2;if ((lcA0['fld_io_cloudoffice_platform_cockpit_layout_Column_prop_layout']) !== null) { gt = 45; break IF; }
var stA1 = null;{ gt = 69; break IF; }
    }
    X_45: for (;;) { IF: if (gt <= 45) {

if ((lcA0['fld_io_cloudoffice_platform_cockpit_layout_Column_prop_layout']) !== (c._TYPE())) { gt = 61; break IF; }
var stA1 = c._TYPE();{ gt = 69; break IF; }
    }
    X_61: for (;;) { IF: if (gt <= 61) {

var stA1 = lcA0.getLayout__Lio_cloudoffice_platform_cockpit_layout_Layout_2();
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, lcA1);
    }
    X_69: for (;;) { IF: if (gt <= 69) {
stA0['fld_io_cloudoffice_platform_cockpit_layout_Column_prop_layout'] = stA1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_Column_proto'];var stA1 = lcA2.getComponents__Ljava_util_List_2();
invoker.cloneList__VLjava_util_Collection_2Lnet_java_html_BrwsrCtx_2Ljava_util_Collection_2(stA0,stA1, lcA1, lcA0['fld_io_cloudoffice_platform_cockpit_layout_Column_prop_components']);
var stA0 = lcA2;var stI1 = lcA0.isEditable__Z();
stA0['fld_io_cloudoffice_platform_cockpit_layout_Column_prop_editable'] = stI1;
var stA0 = lcA2;var stA1 = lcA0.getInputfieldvalue__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_layout_Column_prop_inputfieldvalue'] = stA1;
return lcA2;

    }
}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.applyBindings__Lio_cloudoffice_platform_cockpit_layout_Column_2 = function() {
  var  lcA0 = this;
invoker.applyBindings__V(lcA0['fld_io_cloudoffice_platform_cockpit_layout_Column_proto']);
return lcA0;

};
c['applyBindings__Lio_cloudoffice_platform_cockpit_layout_Column_2'] = m;

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

var stI0 = lcA1 != null && lcA1['$instOf_io_cloudoffice_platform_cockpit_layout_Column'] ? 1 : 0;
if ((stI0) != 0) { gt = 16; break IF; }
return 0;
    }
    X_16: for (;;) { IF: if (gt <= 16) {

if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_layout_Column']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.layout.Column');
var lcA2 = lcA1;
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_layout_Column_prop_id'], lcA2['fld_io_cloudoffice_platform_cockpit_layout_Column_prop_id']);
if ((stI0) != 0) { gt = 40; break IF; }
return 0;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_layout_Column_prop_name'], lcA2['fld_io_cloudoffice_platform_cockpit_layout_Column_prop_name']);
if ((stI0) != 0) { gt = 59; break IF; }
return 0;
    }
    X_59: for (;;) { IF: if (gt <= 59) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_layout_Column_prop_hasLayout']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_layout_Column_prop_hasLayout']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 84; break IF; }
return 0;
    }
    X_84: for (;;) { IF: if (gt <= 84) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_layout_Column_prop_layout']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_layout_Column_prop_layout']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 111; break IF; }
return 0;
    }
    X_111: for (;;) { IF: if (gt <= 111) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_layout_Column_prop_components']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_layout_Column_prop_components']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 138; break IF; }
return 0;
    }
    X_138: for (;;) { IF: if (gt <= 138) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_layout_Column_prop_editable']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_layout_Column_prop_editable']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 163; break IF; }
return 0;
    }
    X_163: for (;;) { IF: if (gt <= 163) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_layout_Column_prop_inputfieldvalue'], lcA2['fld_io_cloudoffice_platform_cockpit_layout_Column_prop_inputfieldvalue']);
if ((stI0) != 0) { gt = 182; break IF; }
return 0;
    }
    X_182: for (;;) { IF: if (gt <= 182) {

return 1;

    }
}}}}}}}}}}
};
c['equals__ZLjava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.hashCode__I = function() {
  var  lcA0 = this;
var stA0 = invoker.getName__Ljava_lang_String_2(c.constructor.$class);
var stI0 = invoker.hashCode__I(stA0);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_layout_Column_prop_id'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_layout_Column_prop_name'], lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_layout_Column_prop_hasLayout']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_layout_Column_prop_layout']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_layout_Column_prop_components']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_layout_Column_prop_editable']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_layout_Column_prop_inputfieldvalue'], lcI1);
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
var stA0 = lcA0.clone__Lio_cloudoffice_platform_cockpit_layout_Column_2();
return stA0;

};
c['clone__Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.access$100__Lio_cloudoffice_platform_cockpit_layout_Column$Html4JavaType_2 = function() {
return c._TYPE();

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_layout_Column_2 = function(lcA0) {
return lcA0['fld_io_cloudoffice_platform_cockpit_layout_Column_proto'];

};
    m.access = 4104;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_layout_Column$1_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2.call(lcA0, lcA1, lcA2);
return;

};
    m.access = 4096;
    m.cls = CLS;
    m = c.access$400__Lio_cloudoffice_platform_cockpit_layout_Column_2Lio_cloudoffice_platform_cockpit_layout_Column_2Lnet_java_html_BrwsrCtx_2 = function(lcA0, lcA1) {
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_layout_Column_2Lnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
return stA0;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new io_cloudoffice_platform_cockpit_layout_Column$Html4JavaType;
(refs_io_cloudoffice_platform_cockpit_layout_Column$Html4JavaType || (refs_io_cloudoffice_platform_cockpit_layout_Column$Html4JavaType = io_cloudoffice_platform_cockpit_layout_Column$Html4JavaType(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_layout_Column$1_2.call(stA0, null);
c._TYPE(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_layout_ColumnfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_layout_Column', { value : true });
      vm.java_lang_Cloneable(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_layout_ColumnfillInstOf });
    io_cloudoffice_platform_cockpit_layout_ColumnfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/layout/Column';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.java_lang_Cloneable(false).constructor.$class
    ]; };
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_io_cloudoffice_platform_cockpit_layout_LayoutComponent$ColumnComponent;
    var refs_java_lang_Boolean;
    var refs_io_cloudoffice_platform_cockpit_layout_Layout;
    var refs_net_java_html_json_Models;
    var refs_java_lang_Object;
    var refs_net_java_html_BrwsrCtx;
    var refs_io_cloudoffice_platform_cockpit_layout_ComponentDef;
    var refs_java_lang_StringBuilder;
    var refs_io_cloudoffice_platform_cockpit_layout_Column$Html4JavaType;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_layout_Column_proto'] = null;
    this['fld_io_cloudoffice_platform_cockpit_layout_Column_prop_id'] = null;
    this['fld_io_cloudoffice_platform_cockpit_layout_Column_prop_name'] = null;
    this['fld_io_cloudoffice_platform_cockpit_layout_Column_prop_hasLayout'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_layout_Column_prop_layout'] = null;
    this['fld_io_cloudoffice_platform_cockpit_layout_Column_prop_components'] = null;
    this['fld_io_cloudoffice_platform_cockpit_layout_Column_prop_editable'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_layout_Column_prop_inputfieldvalue'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_layout_Column = registerClass(exports,'io_cloudoffice_platform_cockpit_layout_Column',io_cloudoffice_platform_cockpit_layout_Column);


function io_cloudoffice_platform_cockpit_layout_ComponentDef$1() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_layout_ComponentDef$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_layout_ComponentDef$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_layout_ComponentDef$1', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_layout_ComponentDef$1fillInstOf });
    io_cloudoffice_platform_cockpit_layout_ComponentDef$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/layout/ComponentDef$1';
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
vm.io_cloudoffice_platform_cockpit_layout_ComponentDef$1 = io_cloudoffice_platform_cockpit_layout_ComponentDef$1;


function io_cloudoffice_platform_cockpit_layout_Domain$1() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_layout_Domain$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_layout_Domain$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_layout_Domain$1', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_layout_Domain$1fillInstOf });
    io_cloudoffice_platform_cockpit_layout_Domain$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/layout/Domain$1';
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
vm.io_cloudoffice_platform_cockpit_layout_Domain$1 = io_cloudoffice_platform_cockpit_layout_Domain$1;


function io_cloudoffice_platform_cockpit_layout_Layout$1() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_layout_Layout$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_layout_Layout$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_layout_Layout$1', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_layout_Layout$1fillInstOf });
    io_cloudoffice_platform_cockpit_layout_Layout$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/layout/Layout$1';
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
vm.io_cloudoffice_platform_cockpit_layout_Layout$1 = io_cloudoffice_platform_cockpit_layout_Layout$1;


function io_cloudoffice_platform_cockpit_layout_LayoutComponent$LayoutWidthControlListener() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_layout_LayoutComponent$LayoutWidthControlListener;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._this$0 = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$LayoutWidthControlListener_this$0'] = v; return this['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$LayoutWidthControlListener_this$0']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_layout_LayoutComponent_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$LayoutWidthControlListener_this$0'] = lcA1;
(refs_java_lang_Object || (refs_java_lang_Object = vm.java_lang_Object(false))).constructor['cons__V'].call(lcA0);
return;

};
CLS['cons__VLio_cloudoffice_platform_cockpit_layout_LayoutComponent_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.onReceive__VLio_cloudoffice_platform_cockpit_api_Signal_2 = function(lcA1) {
  var  lcA0 = this;
c.processAction__VLio_cloudoffice_platform_cockpit_api_Signal_2.call(lcA0, lcA1);
return;

};
c['onReceive__VLio_cloudoffice_platform_cockpit_api_Signal_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.processAction__VLio_cloudoffice_platform_cockpit_api_Signal_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = invoker.getAction__Ljava_lang_String_2(lcA1);
var lcA2 = stA0;
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](lcA2);
if ((stI0) == 0) { gt = 51; break IF; }
var stA0 = invoker.getPackets__Ljava_util_List_2(lcA1);
var stA0 = invoker.get__Ljava_lang_Object_2I(stA0,0);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_api_MapBuilder']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.api.MapBuilder');
var lcA3 = stA0;
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2(lcA3,"action", lcA2);
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$LayoutWidthControlListener_this$0'];var stA1 = "reshapeLayoutRow";var stA2 = invoker.toJSON__Ljava_lang_String_2(lcA3);
invoker.invoke__VLjava_lang_String_2Ljava_lang_String_2(stA0,stA1, stA2);
    }
    X_51: for (;;) { IF: if (gt <= 51) {
return;

    }
}}
};
    m.access = 2;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_layout_LayoutComponent$LayoutWidthControlListenerfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_layout_LayoutComponent$LayoutWidthControlListener', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_EventListener(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_layout_LayoutComponent$LayoutWidthControlListenerfillInstOf });
    io_cloudoffice_platform_cockpit_layout_LayoutComponent$LayoutWidthControlListenerfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/layout/LayoutComponent$LayoutWidthControlListener';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_EventListener(false).constructor.$class
    ]; };
    CLS.$class.access = 33;
    CLS.$class.cnstr = CLS;
    var refs_java_lang_Object;
    var refs_io_cloudoffice_platform_cockpit_api_UtilValidate;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_layout_LayoutComponent$LayoutWidthControlListener_this$0'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_layout_LayoutComponent$LayoutWidthControlListener = registerClass(exports,'io_cloudoffice_platform_cockpit_layout_LayoutComponent$LayoutWidthControlListener',io_cloudoffice_platform_cockpit_layout_LayoutComponent$LayoutWidthControlListener);


function io_cloudoffice_platform_cockpit_layout_Path$1() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_layout_Path$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_layout_Path$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_layout_Path$1', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_layout_Path$1fillInstOf });
    io_cloudoffice_platform_cockpit_layout_Path$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/layout/Path$1';
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
vm.io_cloudoffice_platform_cockpit_layout_Path$1 = io_cloudoffice_platform_cockpit_layout_Path$1;


function io_cloudoffice_platform_cockpit_layout_Prop$1() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_layout_Prop$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_layout_Prop$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_layout_Prop$1', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_layout_Prop$1fillInstOf });
    io_cloudoffice_platform_cockpit_layout_Prop$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/layout/Prop$1';
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
vm.io_cloudoffice_platform_cockpit_layout_Prop$1 = io_cloudoffice_platform_cockpit_layout_Prop$1;


function io_cloudoffice_platform_cockpit_layout_Properties$1() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_layout_Properties$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_layout_Properties$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_layout_Properties$1', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_layout_Properties$1fillInstOf });
    io_cloudoffice_platform_cockpit_layout_Properties$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/layout/Properties$1';
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
vm.io_cloudoffice_platform_cockpit_layout_Properties$1 = io_cloudoffice_platform_cockpit_layout_Properties$1;


function io_cloudoffice_platform_cockpit_layout_Row$1() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_layout_Row$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_layout_Row$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_layout_Row$1', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_layout_Row$1fillInstOf });
    io_cloudoffice_platform_cockpit_layout_Row$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/layout/Row$1';
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
vm.io_cloudoffice_platform_cockpit_layout_Row$1 = io_cloudoffice_platform_cockpit_layout_Row$1;


function io_cloudoffice_platform_cockpit_layout_Site$1() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_layout_Site$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_layout_Site$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_layout_Site$1', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_layout_Site$1fillInstOf });
    io_cloudoffice_platform_cockpit_layout_Site$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/layout/Site$1';
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
vm.io_cloudoffice_platform_cockpit_layout_Site$1 = io_cloudoffice_platform_cockpit_layout_Site$1;


function io_cloudoffice_platform_cockpit_layout_Workspace$1() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_layout_Workspace$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_layout_Workspace$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_layout_Workspace$1', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_layout_Workspace$1fillInstOf });
    io_cloudoffice_platform_cockpit_layout_Workspace$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/layout/Workspace$1';
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
vm.io_cloudoffice_platform_cockpit_layout_Workspace$1 = io_cloudoffice_platform_cockpit_layout_Workspace$1;

  invoker.registerProperty__VLjava_lang_String_2IZZ = function(target, p1, p2, p3, p4) {
    return target['registerProperty__VLjava_lang_String_2IZZ'](p1,p2,p3,p4);
  };
  invoker.registerFunction__VLjava_lang_String_2I = function(target, p1, p2) {
    return target['registerFunction__VLjava_lang_String_2I'](p1,p2);
  };
  invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2 = function(target, p1, p2) {
    return target['extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2'](p1,p2);
  };
  invoker.booleanValue__Z = function(target) {
    return target['booleanValue__Z']();
  };
  invoker.replaceValue__VLjava_util_Collection_2Ljava_lang_Class_2Ljava_lang_Object_2 = function(target, p1, p2, p3) {
    return target['replaceValue__VLjava_util_Collection_2Ljava_lang_Class_2Ljava_lang_Object_2'](p1,p2,p3);
  };
  invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2 = function(target, p1) {
    return target['append__Ljava_lang_StringBuilder_2Ljava_lang_String_2'](p1);
  };
  invoker.append__Ljava_lang_StringBuilder_2I = function(target, p1) {
    return target['append__Ljava_lang_StringBuilder_2I'](p1);
  };
  invoker.toString__Ljava_lang_String_2 = function(target) {
    return target['toString__Ljava_lang_String_2']();
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
  invoker.getName__Ljava_lang_String_2 = function(target) {
    return target['getName__Ljava_lang_String_2']();
  };
  invoker.hashCode__I = function(target) {
    return target['hashCode__I']();
  };
  invoker.hashPlus__ILjava_lang_Object_2I = function(target, p1, p2) {
    return target['hashPlus__ILjava_lang_Object_2I'](p1,p2);
  };
  invoker.listen__VLio_cloudoffice_platform_cockpit_api_Signal_2 = function(target, p1) {
    return target['listen__VLio_cloudoffice_platform_cockpit_api_Signal_2'](p1);
  };
  invoker.getFlags__Ljava_util_Map_2 = function(target) {
    return target['getFlags__Ljava_util_Map_2']();
  };
  invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2 = function(target, p1) {
    return target['get__Ljava_lang_Object_2Ljava_lang_Object_2'](p1);
  };
  invoker.indexOf__ILjava_lang_String_2 = function(target, p1) {
    return target['indexOf__ILjava_lang_String_2'](p1);
  };
  invoker.substring__Ljava_lang_String_2II = function(target, p1, p2) {
    return target['substring__Ljava_lang_String_2II'](p1,p2);
  };
  invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2 = function(target, p1, p2) {
    return target['addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2'](p1,p2);
  };
  invoker.fetch__VLjava_lang_String_2Ljava_util_Map_2Lio_cloudoffice_platform_cockpit_api_CallBack_2 = function(target, p1, p2, p3) {
    return target['fetch__VLjava_lang_String_2Ljava_util_Map_2Lio_cloudoffice_platform_cockpit_api_CallBack_2'](p1,p2,p3);
  };
  invoker.getObject__Ljava_lang_Object_2Ljava_lang_String_2Ljava_lang_Object_2 = function(target, p1, p2) {
    return target['getObject__Ljava_lang_Object_2Ljava_lang_String_2Ljava_lang_Object_2'](p1,p2);
  };
  invoker.size__I = function(target) {
    return target['size__I']();
  };
  invoker.get__Ljava_lang_Object_2I = function(target, p1) {
    return target['get__Ljava_lang_Object_2I'](p1);
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
  invoker.equalsIgnoreCase__ZLjava_lang_String_2 = function(target, p1) {
    return target['equalsIgnoreCase__ZLjava_lang_String_2'](p1);
  };
  invoker.remove__ZLjava_lang_Object_2 = function(target, p1) {
    return target['remove__ZLjava_lang_Object_2'](p1);
  };
  invoker.post__VLjava_lang_String_2Ljava_lang_String_2Lio_cloudoffice_platform_cockpit_api_CallBack_2 = function(target, p1, p2, p3) {
    return target['post__VLjava_lang_String_2Ljava_lang_String_2Lio_cloudoffice_platform_cockpit_api_CallBack_2'](p1,p2,p3);
  };
  invoker.attachListener__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_EventListener_2 = function(target, p1, p2) {
    return target['attachListener__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_EventListener_2'](p1,p2);
  };
  invoker.setDefaultViewName__VLjava_lang_String_2 = function(target, p1) {
    return target['setDefaultViewName__VLjava_lang_String_2'](p1);
  };
  invoker.setOfflineIndexedStorage__VLio_cloudoffice_platform_cockpit_api_WebDB$IndexedTable_2 = function(target, p1) {
    return target['setOfflineIndexedStorage__VLio_cloudoffice_platform_cockpit_api_WebDB$IndexedTable_2'](p1);
  };
  invoker.getOfflineIndexedStorage__Lio_cloudoffice_platform_cockpit_api_WebDB$IndexedTable_2 = function(target) {
    return target['getOfflineIndexedStorage__Lio_cloudoffice_platform_cockpit_api_WebDB$IndexedTable_2']();
  };
  invoker.createTable__V = function(target) {
    return target['createTable__V']();
  };
  invoker.replaceAll__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2 = function(target, p1, p2) {
    return target['replaceAll__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2'](p1,p2);
  };
  invoker.toLowerCase__Ljava_lang_String_2 = function(target) {
    return target['toLowerCase__Ljava_lang_String_2']();
  };
  invoker.getString__Ljava_lang_String_2Ljava_lang_String_2 = function(target, p1) {
    return target['getString__Ljava_lang_String_2Ljava_lang_String_2'](p1);
  };
  invoker.getJsonArray__Lorg_json_JSONArray_2Ljava_lang_String_2 = function(target, p1) {
    return target['getJsonArray__Lorg_json_JSONArray_2Ljava_lang_String_2'](p1);
  };
  invoker.clear__V = function(target) {
    return target['clear__V']();
  };
  invoker.length__I = function(target) {
    return target['length__I']();
  };
  invoker.getJSONObject__Lorg_json_JSONObject_2I = function(target, p1) {
    return target['getJSONObject__Lorg_json_JSONObject_2I'](p1);
  };
  invoker.add__ZLjava_lang_Object_2 = function(target, p1) {
    return target['add__ZLjava_lang_Object_2'](p1);
  };
  invoker.split___3Ljava_lang_String_2Ljava_lang_String_2 = function(target, p1) {
    return target['split___3Ljava_lang_String_2Ljava_lang_String_2'](p1);
  };
  invoker.concat__Ljava_lang_String_2Ljava_lang_String_2 = function(target, p1) {
    return target['concat__Ljava_lang_String_2Ljava_lang_String_2'](p1);
  };
  invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2 = function(target, p1, p2) {
    return target['put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2'](p1,p2);
  };
  invoker.addAll__ZLjava_util_Collection_2 = function(target, p1) {
    return target['addAll__ZLjava_util_Collection_2'](p1);
  };
  invoker.intValue__I = function(target) {
    return target['intValue__I']();
  };
  invoker.toJSON__Ljava_lang_String_2 = function(target) {
    return target['toJSON__Ljava_lang_String_2']();
  };
  invoker.matcher__Ljava_util_regex_Matcher_2Ljava_lang_CharSequence_2 = function(target, p1) {
    return target['matcher__Ljava_util_regex_Matcher_2Ljava_lang_CharSequence_2'](p1);
  };
  invoker.find__Z = function(target) {
    return target['find__Z']();
  };
  invoker.group__Ljava_lang_String_2 = function(target) {
    return target['group__Ljava_lang_String_2']();
  };
  invoker.group__Ljava_lang_String_2I = function(target, p1) {
    return target['group__Ljava_lang_String_2I'](p1);
  };
  invoker.getBoolean__ZLjava_lang_String_2 = function(target, p1) {
    return target['getBoolean__ZLjava_lang_String_2'](p1);
  };
  invoker.setView__VLjava_lang_Object_2 = function(target, p1) {
    return target['setView__VLjava_lang_Object_2'](p1);
  };
  invoker.getComponentName__Ljava_lang_String_2 = function(target) {
    return target['getComponentName__Ljava_lang_String_2']();
  };
  invoker.getDefaultViewName__Ljava_lang_String_2 = function(target) {
    return target['getDefaultViewName__Ljava_lang_String_2']();
  };
  invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Z = function(target, p1, p2) {
    return target['addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Z'](p1,p2);
  };
  invoker.get__Ljava_util_Map_2 = function(target) {
    return target['get__Ljava_util_Map_2']();
  };
  invoker.invoke__VLjava_lang_String_2 = function(target, p1) {
    return target['invoke__VLjava_lang_String_2'](p1);
  };
  invoker.delay__VI = function(target, p1) {
    return target['delay__VI'](p1);
  };
  invoker.trim__Ljava_lang_String_2 = function(target) {
    return target['trim__Ljava_lang_String_2']();
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
  invoker.getView__Ljava_lang_Object_2 = function(target) {
    return target['getView__Ljava_lang_Object_2']();
  };
  invoker.getArray___3Ljava_lang_Object_2Ljava_lang_String_2 = function(target, p1) {
    return target['getArray___3Ljava_lang_Object_2Ljava_lang_String_2'](p1);
  };
  invoker.getAction__Ljava_lang_String_2 = function(target) {
    return target['getAction__Ljava_lang_String_2']();
  };
  invoker.getPackets__Ljava_util_List_2 = function(target) {
    return target['getPackets__Ljava_util_List_2']();
  };
  invoker.invoke__VLjava_lang_String_2Ljava_lang_String_2 = function(target, p1, p2) {
    return target['invoke__VLjava_lang_String_2Ljava_lang_String_2'](p1,p2);
  };
  invoker.toString__Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_String_2 = function(target, p1, p2) {
    return target['toString__Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_String_2'](p1,p2);
  };
  invoker.toModel__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2 = function(target, p1, p2) {
    return target['toModel__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2'](p1,p2);
  };
  exports['registerResource']('META-INF/MANIFEST.MF', 'TWFuaWZlc3QtVmVyc2lvbjogMS4wDQpCbmQtTGFzdE1vZGlmaWVkOiAxNTk3Nzc1MTM1MzU3DQpCdWlsZC1KZGs6IDEuOC4wXzEzMQ0KQnVpbHQtQnk6IGV1c2lhDQpCdW5kbGUtTWFuaWZlc3RWZXJzaW9uOiAyDQpCdW5kbGUtTmFtZTogRW5naW5lIENvbXBvbmVudHMgQ2xhc3Nsb2FkZXINCkJ1bmRsZS1TeW1ib2xpY05hbWU6IGlvLmNsb3Vkb2ZmaWNlLnBsYXRmb3JtLmNvY2twaXQubGF5b3V0DQpCdW5kbGUtVmVyc2lvbjogMS4xLjANCkNyZWF0ZWQtQnk6IEFwYWNoZSBNYXZlbiBCdW5kbGUgUGx1Z2luDQpFeHBvcnQtUGFja2FnZTogaW8uY2xvdWRvZmZpY2UucGxhdGZvcm0uY29ja3BpdC5sYXlvdXQ7dXNlczo9ImlvLmNsb3Vkb2YNCiBmaWNlLnBsYXRmb3JtLmNvY2twaXQuYXBpIjt2ZXJzaW9uPSIxLjEuMCINCkltcG9ydC1QYWNrYWdlOiBpby5jbG91ZG9mZmljZS5wbGF0Zm9ybS5jb2NrcGl0LmFwaTt2ZXJzaW9uPSJbMS4xLDIpIixpbw0KIC5jbG91ZG9mZmljZS5wbGF0Zm9ybS5jb2NrcGl0LmpzO3ZlcnNpb249IlsxLjEsMikiLG5ldC5qYXZhLmh0bWw7dmVyc2lvDQogbj0iWzEuNiwyKSIsbmV0LmphdmEuaHRtbC5qc29uO3ZlcnNpb249IlsxLjYsMikiLG9yZy5qc29uO3ZlcnNpb249IlsyMDENCiA4MDgxMy4wLDIwMTgwODE0KSIsb3JnLm5ldGJlYW5zLmh0bWwuanNvbi5zcGk7dmVyc2lvbj0iWzEuNiwyKSINCk1haW4tQ2xhc3M6ICR7cHJvamVjdC5tYWluY2xhc3N9DQpUb29sOiBCbmQtMi4xLjAuMjAxMzA0MjYtMTIyMjEzDQo=');
});