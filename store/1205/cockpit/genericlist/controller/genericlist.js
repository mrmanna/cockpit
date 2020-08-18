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

function io_cloudoffice_platform_cockpit_genericlist_FilterType$1() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_genericlist_FilterType$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_genericlist_FilterType$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_genericlist_FilterType$1', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_genericlist_FilterType$1fillInstOf });
    io_cloudoffice_platform_cockpit_genericlist_FilterType$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/genericlist/FilterType$1';
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
vm.io_cloudoffice_platform_cockpit_genericlist_FilterType$1 = io_cloudoffice_platform_cockpit_genericlist_FilterType$1;


function io_cloudoffice_platform_cockpit_genericlist_FilterType$Html4JavaType() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_genericlist_FilterType$Html4JavaType;
  if (!CLS.$class) {
    var pp = vm.org_netbeans_html_json_spi_Proto$Type(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_org_netbeans_html_json_spi_Proto$Type || (refs_org_netbeans_html_json_spi_Proto$Type = vm.org_netbeans_html_json_spi_Proto$Type(false))).constructor['cons__VLjava_lang_Class_2Ljava_lang_Class_2II'].call(lcA0, (refs_io_cloudoffice_platform_cockpit_genericlist_FilterType || (refs_io_cloudoffice_platform_cockpit_genericlist_FilterType = io_cloudoffice_platform_cockpit_genericlist_FilterType(false))).constructor.$class, (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$FilterTypeManager || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$FilterTypeManager = io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$FilterTypeManager(false))).constructor.$class, 5, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"itemId", 0, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"itemType", 1, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"itemName", 2, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"filterType", 3, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"isSelected", 4, 0, 0);
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.setValue__VLio_cloudoffice_platform_cockpit_genericlist_FilterType_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0:{ gt = 36; break IF; }
  case 1:{ gt = 53; break IF; }
  case 2:{ gt = 70; break IF; }
  case 3:{ gt = 87; break IF; }
  case 4:{ gt = 104; break IF; }
  default: { gt = 124; break IF; }
}
    }
    X_36: for (;;) { IF: if (gt <= 36) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_genericlist_FilterType || (refs_io_cloudoffice_platform_cockpit_genericlist_FilterType = io_cloudoffice_platform_cockpit_genericlist_FilterType(false))).access$100__Lio_cloudoffice_platform_cockpit_genericlist_FilterType$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setItemId__VLjava_lang_String_2(stA1);
return;
    }
    X_53: for (;;) { IF: if (gt <= 53) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_genericlist_FilterType || (refs_io_cloudoffice_platform_cockpit_genericlist_FilterType = io_cloudoffice_platform_cockpit_genericlist_FilterType(false))).access$100__Lio_cloudoffice_platform_cockpit_genericlist_FilterType$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setItemType__VLjava_lang_String_2(stA1);
return;
    }
    X_70: for (;;) { IF: if (gt <= 70) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_genericlist_FilterType || (refs_io_cloudoffice_platform_cockpit_genericlist_FilterType = io_cloudoffice_platform_cockpit_genericlist_FilterType(false))).access$100__Lio_cloudoffice_platform_cockpit_genericlist_FilterType$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setItemName__VLjava_lang_String_2(stA1);
return;
    }
    X_87: for (;;) { IF: if (gt <= 87) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_genericlist_FilterType || (refs_io_cloudoffice_platform_cockpit_genericlist_FilterType = io_cloudoffice_platform_cockpit_genericlist_FilterType(false))).access$100__Lio_cloudoffice_platform_cockpit_genericlist_FilterType$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setFilterType__VLjava_lang_String_2(stA1);
return;
    }
    X_104: for (;;) { IF: if (gt <= 104) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_genericlist_FilterType || (refs_io_cloudoffice_platform_cockpit_genericlist_FilterType = io_cloudoffice_platform_cockpit_genericlist_FilterType(false))).access$100__Lio_cloudoffice_platform_cockpit_genericlist_FilterType$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setIsSelected__VZ(stI1);
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
    m = c.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_genericlist_FilterType_2I = function(lcA1, lcI2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0:{ gt = 36; break IF; }
  case 1:{ gt = 41; break IF; }
  case 2:{ gt = 46; break IF; }
  case 3:{ gt = 51; break IF; }
  case 4:{ gt = 56; break IF; }
  default: { gt = 64; break IF; }
}
    }
    X_36: for (;;) { IF: if (gt <= 36) {

var stA0 = lcA1.getItemId__Ljava_lang_String_2();
return stA0;
    }
    X_41: for (;;) { IF: if (gt <= 41) {

var stA0 = lcA1.getItemType__Ljava_lang_String_2();
return stA0;
    }
    X_46: for (;;) { IF: if (gt <= 46) {

var stA0 = lcA1.getItemName__Ljava_lang_String_2();
return stA0;
    }
    X_51: for (;;) { IF: if (gt <= 51) {

var stA0 = lcA1.getFilterType__Ljava_lang_String_2();
return stA0;
    }
    X_56: for (;;) { IF: if (gt <= 56) {

var stI0 = lcA1.isIsSelected__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
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
    m = c.call__VLio_cloudoffice_platform_cockpit_genericlist_FilterType_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_genericlist_FilterType']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.genericlist.FilterType');
var stA0 = (refs_io_cloudoffice_platform_cockpit_genericlist_FilterType || (refs_io_cloudoffice_platform_cockpit_genericlist_FilterType = io_cloudoffice_platform_cockpit_genericlist_FilterType(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_genericlist_FilterType_2(lcA1);
return stA0;

};
c['protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.onChange__VLio_cloudoffice_platform_cockpit_genericlist_FilterType_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLio_cloudoffice_platform_cockpit_genericlist_FilterType_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
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
    m = c.read__Lio_cloudoffice_platform_cockpit_genericlist_FilterType_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = new io_cloudoffice_platform_cockpit_genericlist_FilterType;
(refs_io_cloudoffice_platform_cockpit_genericlist_FilterType || (refs_io_cloudoffice_platform_cockpit_genericlist_FilterType = io_cloudoffice_platform_cockpit_genericlist_FilterType(false))).constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_genericlist_FilterType$1_2.call(stA0, lcA1, lcA2, null);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.cloneTo__Lio_cloudoffice_platform_cockpit_genericlist_FilterType_2Lio_cloudoffice_platform_cockpit_genericlist_FilterType_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = (refs_io_cloudoffice_platform_cockpit_genericlist_FilterType || (refs_io_cloudoffice_platform_cockpit_genericlist_FilterType = io_cloudoffice_platform_cockpit_genericlist_FilterType(false))).access$400__Lio_cloudoffice_platform_cockpit_genericlist_FilterType_2Lio_cloudoffice_platform_cockpit_genericlist_FilterType_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_genericlist_FilterType']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.genericlist.FilterType');
lcA0.onMessage__VLio_cloudoffice_platform_cockpit_genericlist_FilterType_2IILjava_lang_Object_2_3Ljava_lang_Object_2(lcA1, lcI2, lcI3, lcA4, lcA5);
return;

};
c['onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.onChange__VLjava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_genericlist_FilterType']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.genericlist.FilterType');
lcA0.onChange__VLio_cloudoffice_platform_cockpit_genericlist_FilterType_2I(lcA1, lcI2);
return;

};
c['onChange__VLjava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = lcA0.read__Lio_cloudoffice_platform_cockpit_genericlist_FilterType_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2(lcA1, lcA2);
return stA0;

};
c['read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_genericlist_FilterType']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.genericlist.FilterType');
var stA0 = lcA0.cloneTo__Lio_cloudoffice_platform_cockpit_genericlist_FilterType_2Lio_cloudoffice_platform_cockpit_genericlist_FilterType_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
c['cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_genericlist_FilterType']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.genericlist.FilterType');
lcA0.call__VLio_cloudoffice_platform_cockpit_genericlist_FilterType_2ILjava_lang_Object_2Ljava_lang_Object_2(lcA1, lcI2, lcA3, lcA4);
return;

};
c['call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Ljava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_genericlist_FilterType']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.genericlist.FilterType');
var stA0 = lcA0.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_genericlist_FilterType_2I(lcA1, lcI2);
return stA0;

};
c['getValue__Ljava_lang_Object_2Ljava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.setValue__VLjava_lang_Object_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_genericlist_FilterType']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.genericlist.FilterType');
lcA0.setValue__VLio_cloudoffice_platform_cockpit_genericlist_FilterType_2ILjava_lang_Object_2(lcA1, lcI2, lcA3);
return;

};
c['setValue__VLjava_lang_Object_2ILjava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_genericlist_FilterType$1_2 = function(lcA1) {
  var  lcA0 = this;
c.constructor.cons__V.call(lcA0);
return;

};
    m.access = 4096;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_genericlist_FilterType$Html4JavaTypefillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_genericlist_FilterType$Html4JavaType', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_genericlist_FilterType$Html4JavaTypefillInstOf });
    io_cloudoffice_platform_cockpit_genericlist_FilterType$Html4JavaTypefillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/genericlist/FilterType$Html4JavaType';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_genericlist_FilterType;
    var refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$FilterTypeManager;
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
vm.io_cloudoffice_platform_cockpit_genericlist_FilterType$Html4JavaType = io_cloudoffice_platform_cockpit_genericlist_FilterType$Html4JavaType;

vm.java_lang_StringBuilder = link('java/lang/StringBuilder', function(f) { vm.java_lang_StringBuilder =  f; });
vm.java_lang_UnsupportedOperationException = link('java/lang/UnsupportedOperationException', function(f) { vm.java_lang_UnsupportedOperationException =  f; });
vm.java_lang_Boolean = link('java/lang/Boolean', function(f) { vm.java_lang_Boolean =  f; });
vm.java_lang_String = link('java/lang/String', function(f) { vm.java_lang_String =  f; });
vm.org_netbeans_html_json_spi_Proto$Type = link('org/netbeans/html/json/spi/Proto$Type', function(f) { vm.org_netbeans_html_json_spi_Proto$Type =  f; });

function io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$FilterTypeManager() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$FilterTypeManager;
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
    function io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$FilterTypeManagerfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$FilterTypeManager', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$FilterTypeManagerfillInstOf });
    io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$FilterTypeManagerfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/genericlist/GenericListComponent$FilterTypeManager';
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
vm.io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$FilterTypeManager = registerClass(exports,'io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$FilterTypeManager',io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$FilterTypeManager);


function io_cloudoffice_platform_cockpit_genericlist_FilterType() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_genericlist_FilterType;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_TYPE'] = null;
  m = c._TYPE = function (v) {  if (arguments.length == 1) CLS['fld_TYPE'] = v; return CLS['fld_TYPE']; };
  m = c._proto = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_genericlist_FilterType_proto'] = v; return this['fld_io_cloudoffice_platform_cockpit_genericlist_FilterType_proto']; };
  m = c._prop_itemId = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_genericlist_FilterType_prop_itemId'] = v; return this['fld_io_cloudoffice_platform_cockpit_genericlist_FilterType_prop_itemId']; };
  m = c._prop_itemType = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_genericlist_FilterType_prop_itemType'] = v; return this['fld_io_cloudoffice_platform_cockpit_genericlist_FilterType_prop_itemType']; };
  m = c._prop_itemName = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_genericlist_FilterType_prop_itemName'] = v; return this['fld_io_cloudoffice_platform_cockpit_genericlist_FilterType_prop_itemName']; };
  m = c._prop_filterType = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_genericlist_FilterType_prop_filterType'] = v; return this['fld_io_cloudoffice_platform_cockpit_genericlist_FilterType_prop_filterType']; };
  m = c._prop_isSelected = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_genericlist_FilterType_prop_isSelected'] = v; return this['fld_io_cloudoffice_platform_cockpit_genericlist_FilterType_prop_isSelected']; };
    m = c.modelFor__Ljava_lang_Class_2 = function() {
return (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$FilterTypeManager || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$FilterTypeManager = io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$FilterTypeManager(false))).constructor.$class;

};
    m.access = 10;
    m.cls = CLS;
    m = c.getItemId__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_FilterType_proto'],"itemId");
return lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_FilterType_prop_itemId'];

};
c['getItemId__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setItemId__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_FilterType_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_FilterType_prop_itemId'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_FilterType_prop_itemId'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_FilterType_proto'],"itemId", lcA2, lcA1);
return;

    }
}}
};
c['setItemId__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getItemType__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_FilterType_proto'],"itemType");
return lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_FilterType_prop_itemType'];

};
c['getItemType__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setItemType__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_FilterType_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_FilterType_prop_itemType'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_FilterType_prop_itemType'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_FilterType_proto'],"itemType", lcA2, lcA1);
return;

    }
}}
};
c['setItemType__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getItemName__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_FilterType_proto'],"itemName");
return lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_FilterType_prop_itemName'];

};
c['getItemName__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setItemName__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_FilterType_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_FilterType_prop_itemName'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_FilterType_prop_itemName'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_FilterType_proto'],"itemName", lcA2, lcA1);
return;

    }
}}
};
c['setItemName__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getFilterType__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_FilterType_proto'],"filterType");
return lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_FilterType_prop_filterType'];

};
c['getFilterType__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setFilterType__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_FilterType_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_FilterType_prop_filterType'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_FilterType_prop_filterType'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_FilterType_proto'],"filterType", lcA2, lcA1);
return;

    }
}}
};
c['setFilterType__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isIsSelected__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_FilterType_proto'],"isSelected");
return lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_FilterType_prop_isSelected'];

};
c['isIsSelected__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setIsSelected__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_FilterType_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_FilterType_prop_isSelected']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_FilterType_prop_isSelected'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_FilterType_proto'];var stA1 = "isSelected";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2, stA3);
return;

    }
}}
};
c['setIsSelected__VZ'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.createProto__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2(c._TYPE(),lcA0, lcA1);
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_FilterType_proto'] = stA1;
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
    m = CLS.cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Z = function(lcA1, lcA2, lcA3, lcA4, lcI5) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = (refs_net_java_html_BrwsrCtx || (refs_net_java_html_BrwsrCtx = vm.net_java_html_BrwsrCtx(false)))['findDefault__Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'](c.constructor.$class);
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, stA1);
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_FilterType_prop_itemId'] = lcA1;
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_FilterType_prop_itemType'] = lcA2;
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_FilterType_prop_itemName'] = lcA3;
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_FilterType_prop_filterType'] = lcA4;
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_FilterType_prop_isSelected'] = lcI5;
return;

};
CLS['cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 5);
var lcA3 = stA0;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_FilterType_proto'];var stA1 = lcA2;var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, 5);
Array.at(stA2, 0, "itemId");
Array.at(stA2, 1, "itemType");
Array.at(stA2, 2, "itemName");
Array.at(stA2, 3, "filterType");
Array.at(stA2, 4, "isSelected");
invoker.extract__VLjava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Object_2(stA0,stA1, stA2, lcA3);
if ((lcA3[0] || Array.at(lcA3, 0)) !== null && !(lcA3[0] || Array.at(lcA3, 0))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[0] || Array.at(lcA3, 0)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_FilterType_prop_itemId'] = (lcA3[0] || Array.at(lcA3, 0));
if ((lcA3[1] || Array.at(lcA3, 1)) !== null && !(lcA3[1] || Array.at(lcA3, 1))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[1] || Array.at(lcA3, 1)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_FilterType_prop_itemType'] = (lcA3[1] || Array.at(lcA3, 1));
if ((lcA3[2] || Array.at(lcA3, 2)) !== null && !(lcA3[2] || Array.at(lcA3, 2))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[2] || Array.at(lcA3, 2)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_FilterType_prop_itemName'] = (lcA3[2] || Array.at(lcA3, 2));
if ((lcA3[3] || Array.at(lcA3, 3)) !== null && !(lcA3[3] || Array.at(lcA3, 3))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[3] || Array.at(lcA3, 3)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_FilterType_prop_filterType'] = (lcA3[3] || Array.at(lcA3, 3));
var stA0 = lcA0;if (((lcA3[4] || Array.at(lcA3, 4))) !== null) { gt = 99; break IF; }
var stI1 = 0;{ gt = 111; break IF; }
    }
    X_99: for (;;) { IF: if (gt <= 99) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[4] || Array.at(lcA3, 4)));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_111: for (;;) { IF: if (gt <= 111) {
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_FilterType_prop_isSelected'] = stI1;
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
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"itemType");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getItemType__Ljava_lang_String_2();
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
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"filterType");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getFilterType__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"isSelected");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stI2 = lcA0.isIsSelected__Z();
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
    m = c.clone__Lio_cloudoffice_platform_cockpit_genericlist_FilterType_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_FilterType_proto']);
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_genericlist_FilterType_2Lnet_java_html_BrwsrCtx_2.call(stA0, stA1);
return stA0;

};
c['clone__Lio_cloudoffice_platform_cockpit_genericlist_FilterType_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Lio_cloudoffice_platform_cockpit_genericlist_FilterType_2Lnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = new io_cloudoffice_platform_cockpit_genericlist_FilterType;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, lcA1);
var lcA2 = stA0;
var stA0 = lcA2;var stA1 = lcA0.getItemId__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_FilterType_prop_itemId'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getItemType__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_FilterType_prop_itemType'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getItemName__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_FilterType_prop_itemName'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getFilterType__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_FilterType_prop_filterType'] = stA1;
var stA0 = lcA2;var stI1 = lcA0.isIsSelected__Z();
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_FilterType_prop_isSelected'] = stI1;
return lcA2;

};
    m.access = 2;
    m.cls = CLS;
    m = c.applyBindings__Lio_cloudoffice_platform_cockpit_genericlist_FilterType_2 = function() {
  var  lcA0 = this;
invoker.applyBindings__V(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_FilterType_proto']);
return lcA0;

};
c['applyBindings__Lio_cloudoffice_platform_cockpit_genericlist_FilterType_2'] = m;

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

var stI0 = lcA1 != null && lcA1['$instOf_io_cloudoffice_platform_cockpit_genericlist_FilterType'] ? 1 : 0;
if ((stI0) != 0) { gt = 16; break IF; }
return 0;
    }
    X_16: for (;;) { IF: if (gt <= 16) {

if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_genericlist_FilterType']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.genericlist.FilterType');
var lcA2 = lcA1;
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_FilterType_prop_itemId'], lcA2['fld_io_cloudoffice_platform_cockpit_genericlist_FilterType_prop_itemId']);
if ((stI0) != 0) { gt = 40; break IF; }
return 0;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_FilterType_prop_itemType'], lcA2['fld_io_cloudoffice_platform_cockpit_genericlist_FilterType_prop_itemType']);
if ((stI0) != 0) { gt = 59; break IF; }
return 0;
    }
    X_59: for (;;) { IF: if (gt <= 59) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_FilterType_prop_itemName'], lcA2['fld_io_cloudoffice_platform_cockpit_genericlist_FilterType_prop_itemName']);
if ((stI0) != 0) { gt = 78; break IF; }
return 0;
    }
    X_78: for (;;) { IF: if (gt <= 78) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_FilterType_prop_filterType'], lcA2['fld_io_cloudoffice_platform_cockpit_genericlist_FilterType_prop_filterType']);
if ((stI0) != 0) { gt = 97; break IF; }
return 0;
    }
    X_97: for (;;) { IF: if (gt <= 97) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_FilterType_prop_isSelected']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_genericlist_FilterType_prop_isSelected']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 122; break IF; }
return 0;
    }
    X_122: for (;;) { IF: if (gt <= 122) {

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
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_FilterType_prop_itemId'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_FilterType_prop_itemType'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_FilterType_prop_itemName'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_FilterType_prop_filterType'], lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_FilterType_prop_isSelected']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
return lcI1;

};
c['hashCode__I'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Ljava_lang_Object_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0.clone__Lio_cloudoffice_platform_cockpit_genericlist_FilterType_2();
return stA0;

};
c['clone__Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.access$100__Lio_cloudoffice_platform_cockpit_genericlist_FilterType$Html4JavaType_2 = function() {
return c._TYPE();

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_genericlist_FilterType_2 = function(lcA0) {
return lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_FilterType_proto'];

};
    m.access = 4104;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_genericlist_FilterType$1_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2.call(lcA0, lcA1, lcA2);
return;

};
    m.access = 4096;
    m.cls = CLS;
    m = c.access$400__Lio_cloudoffice_platform_cockpit_genericlist_FilterType_2Lio_cloudoffice_platform_cockpit_genericlist_FilterType_2Lnet_java_html_BrwsrCtx_2 = function(lcA0, lcA1) {
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_genericlist_FilterType_2Lnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
return stA0;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new io_cloudoffice_platform_cockpit_genericlist_FilterType$Html4JavaType;
(refs_io_cloudoffice_platform_cockpit_genericlist_FilterType$Html4JavaType || (refs_io_cloudoffice_platform_cockpit_genericlist_FilterType$Html4JavaType = io_cloudoffice_platform_cockpit_genericlist_FilterType$Html4JavaType(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_genericlist_FilterType$1_2.call(stA0, null);
c._TYPE(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_genericlist_FilterTypefillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_genericlist_FilterType', { value : true });
      vm.java_lang_Cloneable(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_genericlist_FilterTypefillInstOf });
    io_cloudoffice_platform_cockpit_genericlist_FilterTypefillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/genericlist/FilterType';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.java_lang_Cloneable(false).constructor.$class
    ]; };
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$FilterTypeManager;
    var refs_java_lang_Boolean;
    var refs_net_java_html_BrwsrCtx;
    var refs_java_lang_StringBuilder;
    var refs_io_cloudoffice_platform_cockpit_genericlist_FilterType$Html4JavaType;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_genericlist_FilterType_proto'] = null;
    this['fld_io_cloudoffice_platform_cockpit_genericlist_FilterType_prop_itemId'] = null;
    this['fld_io_cloudoffice_platform_cockpit_genericlist_FilterType_prop_itemType'] = null;
    this['fld_io_cloudoffice_platform_cockpit_genericlist_FilterType_prop_itemName'] = null;
    this['fld_io_cloudoffice_platform_cockpit_genericlist_FilterType_prop_filterType'] = null;
    this['fld_io_cloudoffice_platform_cockpit_genericlist_FilterType_prop_isSelected'] = 0;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_genericlist_FilterType = registerClass(exports,'io_cloudoffice_platform_cockpit_genericlist_FilterType',io_cloudoffice_platform_cockpit_genericlist_FilterType);

vm.java_lang_Cloneable = link('java/lang/Cloneable', function(f) { vm.java_lang_Cloneable =  f; });
vm.net_java_html_BrwsrCtx = link('net/java/html/BrwsrCtx', function(f) { vm.net_java_html_BrwsrCtx =  f; });

function io_cloudoffice_platform_cockpit_genericlist_GenericListColumn$1() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_genericlist_GenericListColumn$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_genericlist_GenericListColumn$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn$1', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_genericlist_GenericListColumn$1fillInstOf });
    io_cloudoffice_platform_cockpit_genericlist_GenericListColumn$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/genericlist/GenericListColumn$1';
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
vm.io_cloudoffice_platform_cockpit_genericlist_GenericListColumn$1 = io_cloudoffice_platform_cockpit_genericlist_GenericListColumn$1;


function io_cloudoffice_platform_cockpit_genericlist_GenericListColumn$Html4JavaType() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_genericlist_GenericListColumn$Html4JavaType;
  if (!CLS.$class) {
    var pp = vm.org_netbeans_html_json_spi_Proto$Type(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_org_netbeans_html_json_spi_Proto$Type || (refs_org_netbeans_html_json_spi_Proto$Type = vm.org_netbeans_html_json_spi_Proto$Type(false))).constructor['cons__VLjava_lang_Class_2Ljava_lang_Class_2II'].call(lcA0, (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn = io_cloudoffice_platform_cockpit_genericlist_GenericListColumn(false))).constructor.$class, (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$GenericListColumnManager || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$GenericListColumnManager = io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$GenericListColumnManager(false))).constructor.$class, (11), 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"columnId", 0, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"columnHeader", 1, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"columnIndex", 2, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"columnPosition", 3, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"columnWidth", 4, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"columnClass", 5, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"isVisible", (6), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"isSortable", (7), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"itemIconClass", (8), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"itemIconColor", (9), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"itemText", (10), 0, 0);
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.setValue__VLio_cloudoffice_platform_cockpit_genericlist_GenericListColumn_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0:{ gt = 60; break IF; }
  case 1:{ gt = 77; break IF; }
  case 2:{ gt = 94; break IF; }
  case 3:{ gt = 114; break IF; }
  case 4:{ gt = 131; break IF; }
  case 5:{ gt = 148; break IF; }
  case 6:{ gt = 165; break IF; }
  case 7:{ gt = 185; break IF; }
  case 8:{ gt = 205; break IF; }
  case 9:{ gt = 222; break IF; }
  case 10:{ gt = 239; break IF; }
  default: { gt = 256; break IF; }
}
    }
    X_60: for (;;) { IF: if (gt <= 60) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn = io_cloudoffice_platform_cockpit_genericlist_GenericListColumn(false))).access$100__Lio_cloudoffice_platform_cockpit_genericlist_GenericListColumn$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setColumnId__VLjava_lang_String_2(stA1);
return;
    }
    X_77: for (;;) { IF: if (gt <= 77) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn = io_cloudoffice_platform_cockpit_genericlist_GenericListColumn(false))).access$100__Lio_cloudoffice_platform_cockpit_genericlist_GenericListColumn$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setColumnHeader__VLjava_lang_String_2(stA1);
return;
    }
    X_94: for (;;) { IF: if (gt <= 94) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn = io_cloudoffice_platform_cockpit_genericlist_GenericListColumn(false))).access$100__Lio_cloudoffice_platform_cockpit_genericlist_GenericListColumn$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Integer || (refs_java_lang_Integer = vm.java_lang_Integer(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Integer']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Integer');
var stI1 = invoker.intValue__I(stA1);
stA0.setColumnIndex__VI(stI1);
return;
    }
    X_114: for (;;) { IF: if (gt <= 114) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn = io_cloudoffice_platform_cockpit_genericlist_GenericListColumn(false))).access$100__Lio_cloudoffice_platform_cockpit_genericlist_GenericListColumn$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setColumnPosition__VLjava_lang_String_2(stA1);
return;
    }
    X_131: for (;;) { IF: if (gt <= 131) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn = io_cloudoffice_platform_cockpit_genericlist_GenericListColumn(false))).access$100__Lio_cloudoffice_platform_cockpit_genericlist_GenericListColumn$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setColumnWidth__VLjava_lang_String_2(stA1);
return;
    }
    X_148: for (;;) { IF: if (gt <= 148) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn = io_cloudoffice_platform_cockpit_genericlist_GenericListColumn(false))).access$100__Lio_cloudoffice_platform_cockpit_genericlist_GenericListColumn$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setColumnClass__VLjava_lang_String_2(stA1);
return;
    }
    X_165: for (;;) { IF: if (gt <= 165) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn = io_cloudoffice_platform_cockpit_genericlist_GenericListColumn(false))).access$100__Lio_cloudoffice_platform_cockpit_genericlist_GenericListColumn$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setIsVisible__VZ(stI1);
return;
    }
    X_185: for (;;) { IF: if (gt <= 185) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn = io_cloudoffice_platform_cockpit_genericlist_GenericListColumn(false))).access$100__Lio_cloudoffice_platform_cockpit_genericlist_GenericListColumn$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setIsSortable__VZ(stI1);
return;
    }
    X_205: for (;;) { IF: if (gt <= 205) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn = io_cloudoffice_platform_cockpit_genericlist_GenericListColumn(false))).access$100__Lio_cloudoffice_platform_cockpit_genericlist_GenericListColumn$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setItemIconClass__VLjava_lang_String_2(stA1);
return;
    }
    X_222: for (;;) { IF: if (gt <= 222) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn = io_cloudoffice_platform_cockpit_genericlist_GenericListColumn(false))).access$100__Lio_cloudoffice_platform_cockpit_genericlist_GenericListColumn$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setItemIconColor__VLjava_lang_String_2(stA1);
return;
    }
    X_239: for (;;) { IF: if (gt <= 239) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn = io_cloudoffice_platform_cockpit_genericlist_GenericListColumn(false))).access$100__Lio_cloudoffice_platform_cockpit_genericlist_GenericListColumn$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setItemText__VLjava_lang_String_2(stA1);
return;
    }
    X_256: for (;;) { IF: if (gt <= 256) {
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

    }
}}}}}}}}}}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_genericlist_GenericListColumn_2I = function(lcA1, lcI2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0:{ gt = 60; break IF; }
  case 1:{ gt = 65; break IF; }
  case 2:{ gt = 70; break IF; }
  case 3:{ gt = 78; break IF; }
  case 4:{ gt = 83; break IF; }
  case 5:{ gt = 88; break IF; }
  case 6:{ gt = 93; break IF; }
  case 7:{ gt = 101; break IF; }
  case 8:{ gt = 109; break IF; }
  case 9:{ gt = 114; break IF; }
  case 10:{ gt = 119; break IF; }
  default: { gt = 124; break IF; }
}
    }
    X_60: for (;;) { IF: if (gt <= 60) {

var stA0 = lcA1.getColumnId__Ljava_lang_String_2();
return stA0;
    }
    X_65: for (;;) { IF: if (gt <= 65) {

var stA0 = lcA1.getColumnHeader__Ljava_lang_String_2();
return stA0;
    }
    X_70: for (;;) { IF: if (gt <= 70) {

var stI0 = lcA1.getColumnIndex__I();
var stA0 = (refs_java_lang_Integer || (refs_java_lang_Integer = vm.java_lang_Integer(false)))['valueOf__Ljava_lang_Integer_2I'](stI0);
return stA0;
    }
    X_78: for (;;) { IF: if (gt <= 78) {

var stA0 = lcA1.getColumnPosition__Ljava_lang_String_2();
return stA0;
    }
    X_83: for (;;) { IF: if (gt <= 83) {

var stA0 = lcA1.getColumnWidth__Ljava_lang_String_2();
return stA0;
    }
    X_88: for (;;) { IF: if (gt <= 88) {

var stA0 = lcA1.getColumnClass__Ljava_lang_String_2();
return stA0;
    }
    X_93: for (;;) { IF: if (gt <= 93) {

var stI0 = lcA1.isIsVisible__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_101: for (;;) { IF: if (gt <= 101) {

var stI0 = lcA1.isIsSortable__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_109: for (;;) { IF: if (gt <= 109) {

var stA0 = lcA1.getItemIconClass__Ljava_lang_String_2();
return stA0;
    }
    X_114: for (;;) { IF: if (gt <= 114) {

var stA0 = lcA1.getItemIconColor__Ljava_lang_String_2();
return stA0;
    }
    X_119: for (;;) { IF: if (gt <= 119) {

var stA0 = lcA1.getItemText__Ljava_lang_String_2();
return stA0;
    }
    X_124: for (;;) { IF: if (gt <= 124) {
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

    }
}}}}}}}}}}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.call__VLio_cloudoffice_platform_cockpit_genericlist_GenericListColumn_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.genericlist.GenericListColumn');
var stA0 = (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn = io_cloudoffice_platform_cockpit_genericlist_GenericListColumn(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_genericlist_GenericListColumn_2(lcA1);
return stA0;

};
c['protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.onChange__VLio_cloudoffice_platform_cockpit_genericlist_GenericListColumn_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLio_cloudoffice_platform_cockpit_genericlist_GenericListColumn_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
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
    m = c.read__Lio_cloudoffice_platform_cockpit_genericlist_GenericListColumn_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = new io_cloudoffice_platform_cockpit_genericlist_GenericListColumn;
(refs_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn = io_cloudoffice_platform_cockpit_genericlist_GenericListColumn(false))).constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_genericlist_GenericListColumn$1_2.call(stA0, lcA1, lcA2, null);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.cloneTo__Lio_cloudoffice_platform_cockpit_genericlist_GenericListColumn_2Lio_cloudoffice_platform_cockpit_genericlist_GenericListColumn_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn = io_cloudoffice_platform_cockpit_genericlist_GenericListColumn(false))).access$400__Lio_cloudoffice_platform_cockpit_genericlist_GenericListColumn_2Lio_cloudoffice_platform_cockpit_genericlist_GenericListColumn_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.genericlist.GenericListColumn');
lcA0.onMessage__VLio_cloudoffice_platform_cockpit_genericlist_GenericListColumn_2IILjava_lang_Object_2_3Ljava_lang_Object_2(lcA1, lcI2, lcI3, lcA4, lcA5);
return;

};
c['onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.onChange__VLjava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.genericlist.GenericListColumn');
lcA0.onChange__VLio_cloudoffice_platform_cockpit_genericlist_GenericListColumn_2I(lcA1, lcI2);
return;

};
c['onChange__VLjava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = lcA0.read__Lio_cloudoffice_platform_cockpit_genericlist_GenericListColumn_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2(lcA1, lcA2);
return stA0;

};
c['read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.genericlist.GenericListColumn');
var stA0 = lcA0.cloneTo__Lio_cloudoffice_platform_cockpit_genericlist_GenericListColumn_2Lio_cloudoffice_platform_cockpit_genericlist_GenericListColumn_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
c['cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.genericlist.GenericListColumn');
lcA0.call__VLio_cloudoffice_platform_cockpit_genericlist_GenericListColumn_2ILjava_lang_Object_2Ljava_lang_Object_2(lcA1, lcI2, lcA3, lcA4);
return;

};
c['call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Ljava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.genericlist.GenericListColumn');
var stA0 = lcA0.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_genericlist_GenericListColumn_2I(lcA1, lcI2);
return stA0;

};
c['getValue__Ljava_lang_Object_2Ljava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.setValue__VLjava_lang_Object_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.genericlist.GenericListColumn');
lcA0.setValue__VLio_cloudoffice_platform_cockpit_genericlist_GenericListColumn_2ILjava_lang_Object_2(lcA1, lcI2, lcA3);
return;

};
c['setValue__VLjava_lang_Object_2ILjava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_genericlist_GenericListColumn$1_2 = function(lcA1) {
  var  lcA0 = this;
c.constructor.cons__V.call(lcA0);
return;

};
    m.access = 4096;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_genericlist_GenericListColumn$Html4JavaTypefillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn$Html4JavaType', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_genericlist_GenericListColumn$Html4JavaTypefillInstOf });
    io_cloudoffice_platform_cockpit_genericlist_GenericListColumn$Html4JavaTypefillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/genericlist/GenericListColumn$Html4JavaType';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn;
    var refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$GenericListColumnManager;
    var refs_org_netbeans_html_json_spi_Proto$Type;
    var refs_java_lang_String;
    var refs_java_lang_Integer;
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
vm.io_cloudoffice_platform_cockpit_genericlist_GenericListColumn$Html4JavaType = io_cloudoffice_platform_cockpit_genericlist_GenericListColumn$Html4JavaType;

vm.java_lang_Integer = link('java/lang/Integer', function(f) { vm.java_lang_Integer =  f; });

function io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$GenericListColumnManager() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$GenericListColumnManager;
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
    function io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$GenericListColumnManagerfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$GenericListColumnManager', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$GenericListColumnManagerfillInstOf });
    io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$GenericListColumnManagerfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/genericlist/GenericListComponent$GenericListColumnManager';
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
vm.io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$GenericListColumnManager = registerClass(exports,'io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$GenericListColumnManager',io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$GenericListColumnManager);


function io_cloudoffice_platform_cockpit_genericlist_GenericListColumn() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_genericlist_GenericListColumn;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_TYPE'] = null;
  m = c._TYPE = function (v) {  if (arguments.length == 1) CLS['fld_TYPE'] = v; return CLS['fld_TYPE']; };
  m = c._proto = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_proto'] = v; return this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_proto']; };
  m = c._prop_columnId = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_columnId'] = v; return this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_columnId']; };
  m = c._prop_columnHeader = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_columnHeader'] = v; return this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_columnHeader']; };
  m = c._prop_columnIndex = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_columnIndex'] = v; return this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_columnIndex']; };
  m = c._prop_columnPosition = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_columnPosition'] = v; return this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_columnPosition']; };
  m = c._prop_columnWidth = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_columnWidth'] = v; return this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_columnWidth']; };
  m = c._prop_columnClass = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_columnClass'] = v; return this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_columnClass']; };
  m = c._prop_isVisible = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_isVisible'] = v; return this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_isVisible']; };
  m = c._prop_isSortable = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_isSortable'] = v; return this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_isSortable']; };
  m = c._prop_itemIconClass = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_itemIconClass'] = v; return this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_itemIconClass']; };
  m = c._prop_itemIconColor = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_itemIconColor'] = v; return this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_itemIconColor']; };
  m = c._prop_itemText = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_itemText'] = v; return this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_itemText']; };
    m = c.modelFor__Ljava_lang_Class_2 = function() {
return (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$GenericListColumnManager || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$GenericListColumnManager = io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$GenericListColumnManager(false))).constructor.$class;

};
    m.access = 10;
    m.cls = CLS;
    m = c.getColumnId__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_proto'],"columnId");
return lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_columnId'];

};
c['getColumnId__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setColumnId__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_columnId'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_columnId'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_proto'],"columnId", lcA2, lcA1);
return;

    }
}}
};
c['setColumnId__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getColumnHeader__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_proto'],"columnHeader");
return lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_columnHeader'];

};
c['getColumnHeader__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setColumnHeader__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_columnHeader'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_columnHeader'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_proto'],"columnHeader", lcA2, lcA1);
return;

    }
}}
};
c['setColumnHeader__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getColumnIndex__I = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_proto'],"columnIndex");
return lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_columnIndex'];

};
c['getColumnIndex__I'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setColumnIndex__VI = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_proto']);
var stA0 = (refs_java_lang_Integer || (refs_java_lang_Integer = vm.java_lang_Integer(false)))['valueOf__Ljava_lang_Integer_2I'](lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_columnIndex']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Integer || (refs_java_lang_Integer = vm.java_lang_Integer(false)))['valueOf__Ljava_lang_Integer_2I'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_columnIndex'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_proto'];var stA1 = "columnIndex";var stA2 = lcA2;var stA3 = (refs_java_lang_Integer || (refs_java_lang_Integer = vm.java_lang_Integer(false)))['valueOf__Ljava_lang_Integer_2I'](lcI1);
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2, stA3);
return;

    }
}}
};
c['setColumnIndex__VI'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getColumnPosition__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_proto'],"columnPosition");
return lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_columnPosition'];

};
c['getColumnPosition__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setColumnPosition__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_columnPosition'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_columnPosition'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_proto'],"columnPosition", lcA2, lcA1);
return;

    }
}}
};
c['setColumnPosition__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getColumnWidth__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_proto'],"columnWidth");
return lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_columnWidth'];

};
c['getColumnWidth__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setColumnWidth__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_columnWidth'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_columnWidth'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_proto'],"columnWidth", lcA2, lcA1);
return;

    }
}}
};
c['setColumnWidth__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getColumnClass__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_proto'],"columnClass");
return lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_columnClass'];

};
c['getColumnClass__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setColumnClass__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_columnClass'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_columnClass'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_proto'],"columnClass", lcA2, lcA1);
return;

    }
}}
};
c['setColumnClass__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isIsVisible__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_proto'],"isVisible");
return lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_isVisible'];

};
c['isIsVisible__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setIsVisible__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_isVisible']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_isVisible'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_proto'];var stA1 = "isVisible";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2, stA3);
return;

    }
}}
};
c['setIsVisible__VZ'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isIsSortable__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_proto'],"isSortable");
return lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_isSortable'];

};
c['isIsSortable__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setIsSortable__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_isSortable']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_isSortable'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_proto'];var stA1 = "isSortable";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2, stA3);
return;

    }
}}
};
c['setIsSortable__VZ'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getItemIconClass__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_proto'],"itemIconClass");
return lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_itemIconClass'];

};
c['getItemIconClass__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setItemIconClass__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_itemIconClass'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_itemIconClass'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_proto'],"itemIconClass", lcA2, lcA1);
return;

    }
}}
};
c['setItemIconClass__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getItemIconColor__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_proto'],"itemIconColor");
return lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_itemIconColor'];

};
c['getItemIconColor__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setItemIconColor__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_itemIconColor'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_itemIconColor'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_proto'],"itemIconColor", lcA2, lcA1);
return;

    }
}}
};
c['setItemIconColor__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getItemText__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_proto'],"itemText");
return lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_itemText'];

};
c['getItemText__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setItemText__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_itemText'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_itemText'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_proto'],"itemText", lcA2, lcA1);
return;

    }
}}
};
c['setItemText__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.createProto__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2(c._TYPE(),lcA0, lcA1);
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_proto'] = stA1;
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
    m = CLS.cons__VLjava_lang_String_2Ljava_lang_String_2ILjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2ZZLjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2 = function(lcA1, lcA2, lcI3, lcA4, lcA5, lcA6, lcI7, lcI8, lcA9, lcA10, lcA11) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = (refs_net_java_html_BrwsrCtx || (refs_net_java_html_BrwsrCtx = vm.net_java_html_BrwsrCtx(false)))['findDefault__Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'](c.constructor.$class);
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, stA1);
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_columnId'] = lcA1;
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_columnHeader'] = lcA2;
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_columnIndex'] = lcI3;
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_columnPosition'] = lcA4;
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_columnWidth'] = lcA5;
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_columnClass'] = lcA6;
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_isVisible'] = lcI7;
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_isSortable'] = lcI8;
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_itemIconClass'] = lcA9;
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_itemIconColor'] = lcA10;
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_itemText'] = lcA11;
return;

};
CLS['cons__VLjava_lang_String_2Ljava_lang_String_2ILjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2ZZLjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, (11));
var lcA3 = stA0;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_proto'];var stA1 = lcA2;var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, (11));
Array.at(stA2, 0, "columnId");
Array.at(stA2, 1, "columnHeader");
Array.at(stA2, 2, "columnIndex");
Array.at(stA2, 3, "columnPosition");
Array.at(stA2, 4, "columnWidth");
Array.at(stA2, 5, "columnClass");
Array.at(stA2, (6), "isVisible");
Array.at(stA2, (7), "isSortable");
Array.at(stA2, (8), "itemIconClass");
Array.at(stA2, (9), "itemIconColor");
Array.at(stA2, (10), "itemText");
invoker.extract__VLjava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Object_2(stA0,stA1, stA2, lcA3);
if ((lcA3[0] || Array.at(lcA3, 0)) !== null && !(lcA3[0] || Array.at(lcA3, 0))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[0] || Array.at(lcA3, 0)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_columnId'] = (lcA3[0] || Array.at(lcA3, 0));
if ((lcA3[1] || Array.at(lcA3, 1)) !== null && !(lcA3[1] || Array.at(lcA3, 1))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[1] || Array.at(lcA3, 1)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_columnHeader'] = (lcA3[1] || Array.at(lcA3, 1));
var stA0 = lcA0;if (((lcA3[2] || Array.at(lcA3, 2))) !== null) { gt = 116; break IF; }
var stI1 = 0;{ gt = 128; break IF; }
    }
    X_116: for (;;) { IF: if (gt <= 116) {

var stA1 = invoker.numberValue__Ljava_lang_Number_2Ljava_lang_Object_2(c._TYPE(),(lcA3[2] || Array.at(lcA3, 2)));
var stI1 = invoker.intValue__I(stA1);
    }
    X_128: for (;;) { IF: if (gt <= 128) {
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_columnIndex'] = stI1;
if ((lcA3[3] || Array.at(lcA3, 3)) !== null && !(lcA3[3] || Array.at(lcA3, 3))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[3] || Array.at(lcA3, 3)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_columnPosition'] = (lcA3[3] || Array.at(lcA3, 3));
if ((lcA3[4] || Array.at(lcA3, 4)) !== null && !(lcA3[4] || Array.at(lcA3, 4))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[4] || Array.at(lcA3, 4)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_columnWidth'] = (lcA3[4] || Array.at(lcA3, 4));
if ((lcA3[5] || Array.at(lcA3, 5)) !== null && !(lcA3[5] || Array.at(lcA3, 5))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[5] || Array.at(lcA3, 5)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_columnClass'] = (lcA3[5] || Array.at(lcA3, 5));
var stA0 = lcA0;if (((lcA3[(6)] || Array.at(lcA3, (6)))) !== null) { gt = 173; break IF; }
var stI1 = 0;{ gt = 186; break IF; }
    }
    X_173: for (;;) { IF: if (gt <= 173) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[(6)] || Array.at(lcA3, (6))));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_186: for (;;) { IF: if (gt <= 186) {
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_isVisible'] = stI1;
var stA0 = lcA0;if (((lcA3[(7)] || Array.at(lcA3, (7)))) !== null) { gt = 201; break IF; }
var stI1 = 0;{ gt = 214; break IF; }
    }
    X_201: for (;;) { IF: if (gt <= 201) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[(7)] || Array.at(lcA3, (7))));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_214: for (;;) { IF: if (gt <= 214) {
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_isSortable'] = stI1;
if ((lcA3[(8)] || Array.at(lcA3, (8))) !== null && !(lcA3[(8)] || Array.at(lcA3, (8)))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[(8)] || Array.at(lcA3, (8))), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_itemIconClass'] = (lcA3[(8)] || Array.at(lcA3, (8)));
if ((lcA3[(9)] || Array.at(lcA3, (9))) !== null && !(lcA3[(9)] || Array.at(lcA3, (9)))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[(9)] || Array.at(lcA3, (9))), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_itemIconColor'] = (lcA3[(9)] || Array.at(lcA3, (9)));
if ((lcA3[(10)] || Array.at(lcA3, (10))) !== null && !(lcA3[(10)] || Array.at(lcA3, (10)))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[(10)] || Array.at(lcA3, (10))), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_itemText'] = (lcA3[(10)] || Array.at(lcA3, (10)));
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
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"columnId");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getColumnId__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"columnHeader");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getColumnHeader__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"columnIndex");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stI2 = lcA0.getColumnIndex__I();
var stA2 = (refs_java_lang_Integer || (refs_java_lang_Integer = vm.java_lang_Integer(false)))['valueOf__Ljava_lang_Integer_2I'](stI2);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"columnPosition");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getColumnPosition__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"columnWidth");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getColumnWidth__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"columnClass");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getColumnClass__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"isVisible");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stI2 = lcA0.isIsVisible__Z();
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI2);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"isSortable");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stI2 = lcA0.isIsSortable__Z();
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI2);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"itemIconClass");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getItemIconClass__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"itemIconColor");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getItemIconColor__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"itemText");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getItemText__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(125));
var stA0 = invoker.toString__Ljava_lang_String_2(lcA1);
return stA0;

};
c['toString__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Lio_cloudoffice_platform_cockpit_genericlist_GenericListColumn_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_proto']);
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_genericlist_GenericListColumn_2Lnet_java_html_BrwsrCtx_2.call(stA0, stA1);
return stA0;

};
c['clone__Lio_cloudoffice_platform_cockpit_genericlist_GenericListColumn_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Lio_cloudoffice_platform_cockpit_genericlist_GenericListColumn_2Lnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = new io_cloudoffice_platform_cockpit_genericlist_GenericListColumn;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, lcA1);
var lcA2 = stA0;
var stA0 = lcA2;var stA1 = lcA0.getColumnId__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_columnId'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getColumnHeader__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_columnHeader'] = stA1;
var stA0 = lcA2;var stI1 = lcA0.getColumnIndex__I();
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_columnIndex'] = stI1;
var stA0 = lcA2;var stA1 = lcA0.getColumnPosition__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_columnPosition'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getColumnWidth__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_columnWidth'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getColumnClass__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_columnClass'] = stA1;
var stA0 = lcA2;var stI1 = lcA0.isIsVisible__Z();
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_isVisible'] = stI1;
var stA0 = lcA2;var stI1 = lcA0.isIsSortable__Z();
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_isSortable'] = stI1;
var stA0 = lcA2;var stA1 = lcA0.getItemIconClass__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_itemIconClass'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getItemIconColor__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_itemIconColor'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getItemText__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_itemText'] = stA1;
return lcA2;

};
    m.access = 2;
    m.cls = CLS;
    m = c.applyBindings__Lio_cloudoffice_platform_cockpit_genericlist_GenericListColumn_2 = function() {
  var  lcA0 = this;
invoker.applyBindings__V(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_proto']);
return lcA0;

};
c['applyBindings__Lio_cloudoffice_platform_cockpit_genericlist_GenericListColumn_2'] = m;

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

var stI0 = lcA1 != null && lcA1['$instOf_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn'] ? 1 : 0;
if ((stI0) != 0) { gt = 16; break IF; }
return 0;
    }
    X_16: for (;;) { IF: if (gt <= 16) {

if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.genericlist.GenericListColumn');
var lcA2 = lcA1;
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_columnId'], lcA2['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_columnId']);
if ((stI0) != 0) { gt = 40; break IF; }
return 0;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_columnHeader'], lcA2['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_columnHeader']);
if ((stI0) != 0) { gt = 59; break IF; }
return 0;
    }
    X_59: for (;;) { IF: if (gt <= 59) {

var stI0 = invoker.isSame__ZII(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_columnIndex'], lcA2['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_columnIndex']);
if ((stI0) != 0) { gt = 78; break IF; }
return 0;
    }
    X_78: for (;;) { IF: if (gt <= 78) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_columnPosition'], lcA2['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_columnPosition']);
if ((stI0) != 0) { gt = 97; break IF; }
return 0;
    }
    X_97: for (;;) { IF: if (gt <= 97) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_columnWidth'], lcA2['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_columnWidth']);
if ((stI0) != 0) { gt = 116; break IF; }
return 0;
    }
    X_116: for (;;) { IF: if (gt <= 116) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_columnClass'], lcA2['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_columnClass']);
if ((stI0) != 0) { gt = 135; break IF; }
return 0;
    }
    X_135: for (;;) { IF: if (gt <= 135) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_isVisible']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_isVisible']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 160; break IF; }
return 0;
    }
    X_160: for (;;) { IF: if (gt <= 160) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_isSortable']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_isSortable']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 185; break IF; }
return 0;
    }
    X_185: for (;;) { IF: if (gt <= 185) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_itemIconClass'], lcA2['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_itemIconClass']);
if ((stI0) != 0) { gt = 204; break IF; }
return 0;
    }
    X_204: for (;;) { IF: if (gt <= 204) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_itemIconColor'], lcA2['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_itemIconColor']);
if ((stI0) != 0) { gt = 223; break IF; }
return 0;
    }
    X_223: for (;;) { IF: if (gt <= 223) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_itemText'], lcA2['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_itemText']);
if ((stI0) != 0) { gt = 242; break IF; }
return 0;
    }
    X_242: for (;;) { IF: if (gt <= 242) {

return 1;

    }
}}}}}}}}}}}}}}
};
c['equals__ZLjava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.hashCode__I = function() {
  var  lcA0 = this;
var stA0 = invoker.getName__Ljava_lang_String_2(c.constructor.$class);
var stI0 = invoker.hashCode__I(stA0);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_columnId'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_columnHeader'], lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Integer || (refs_java_lang_Integer = vm.java_lang_Integer(false)))['valueOf__Ljava_lang_Integer_2I'](lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_columnIndex']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_columnPosition'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_columnWidth'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_columnClass'], lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_isVisible']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_isSortable']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_itemIconClass'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_itemIconColor'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_itemText'], lcI1);
var lcI1 = stI0;
return lcI1;

};
c['hashCode__I'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Ljava_lang_Object_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0.clone__Lio_cloudoffice_platform_cockpit_genericlist_GenericListColumn_2();
return stA0;

};
c['clone__Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.access$100__Lio_cloudoffice_platform_cockpit_genericlist_GenericListColumn$Html4JavaType_2 = function() {
return c._TYPE();

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_genericlist_GenericListColumn_2 = function(lcA0) {
return lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_proto'];

};
    m.access = 4104;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_genericlist_GenericListColumn$1_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2.call(lcA0, lcA1, lcA2);
return;

};
    m.access = 4096;
    m.cls = CLS;
    m = c.access$400__Lio_cloudoffice_platform_cockpit_genericlist_GenericListColumn_2Lio_cloudoffice_platform_cockpit_genericlist_GenericListColumn_2Lnet_java_html_BrwsrCtx_2 = function(lcA0, lcA1) {
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_genericlist_GenericListColumn_2Lnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
return stA0;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new io_cloudoffice_platform_cockpit_genericlist_GenericListColumn$Html4JavaType;
(refs_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn$Html4JavaType || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn$Html4JavaType = io_cloudoffice_platform_cockpit_genericlist_GenericListColumn$Html4JavaType(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_genericlist_GenericListColumn$1_2.call(stA0, null);
c._TYPE(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_genericlist_GenericListColumnfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn', { value : true });
      vm.java_lang_Cloneable(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_genericlist_GenericListColumnfillInstOf });
    io_cloudoffice_platform_cockpit_genericlist_GenericListColumnfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/genericlist/GenericListColumn';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.java_lang_Cloneable(false).constructor.$class
    ]; };
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$GenericListColumnManager;
    var refs_java_lang_Integer;
    var refs_java_lang_Boolean;
    var refs_net_java_html_BrwsrCtx;
    var refs_java_lang_StringBuilder;
    var refs_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn$Html4JavaType;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_proto'] = null;
    this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_columnId'] = null;
    this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_columnHeader'] = null;
    this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_columnIndex'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_columnPosition'] = null;
    this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_columnWidth'] = null;
    this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_columnClass'] = null;
    this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_isVisible'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_isSortable'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_itemIconClass'] = null;
    this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_itemIconColor'] = null;
    this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn_prop_itemText'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_genericlist_GenericListColumn = registerClass(exports,'io_cloudoffice_platform_cockpit_genericlist_GenericListColumn',io_cloudoffice_platform_cockpit_genericlist_GenericListColumn);


function io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$1() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$view = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$1_val$view'] = v; return this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$1_val$view']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$1_val$view'] = lcA1;
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.handle__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;
(refs_io_cloudoffice_platform_cockpit_api_Logger || (refs_io_cloudoffice_platform_cockpit_api_Logger = vm.io_cloudoffice_platform_cockpit_api_Logger(false)))['log__VLjava_lang_String_2']("Save Callback");
c.runtimeViewAdjustmentByConfiguration__VLio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$1_val$view']);
(refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent = io_cloudoffice_platform_cockpit_genericlist_GenericListComponent(false))).closeConfigurationPanel__VLio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$1_val$view']);
return;

};
c['handle__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.runtimeViewAdjustmentByConfiguration__VLio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = lcA1.getConfiguration__Lio_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_2();
var lcA2 = stA0;
var stA0 = lcA2.getDefaultitemview__Ljava_lang_String_2();
var lcA3 = stA0;
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](lcA3);
if ((stI0) == 0) { gt = 34; break IF; }
var stI0 = invoker.equalsIgnoreCase__ZLjava_lang_String_2(lcA3,"GRID");
if ((stI0) == 0) { gt = 34; break IF; }
lcA1.setGridViewEnabled__VZ(1);
{ gt = 39; break IF; }
    }
    X_34: for (;;) { IF: if (gt <= 34) {

lcA1.setGridViewEnabled__VZ(0);
    }
    X_39: for (;;) { IF: if (gt <= 39) {

var stA0 = lcA2.getVisibleCreateButon__Ljava_lang_String_2();
var lcA4 = stA0;
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](lcA4);
if ((stI0) == 0) { gt = 71; break IF; }
var stI0 = invoker.equalsIgnoreCase__ZLjava_lang_String_2(lcA4,"SHOW");
if ((stI0) == 0) { gt = 71; break IF; }
lcA1.setIsVisibleCreateButon__VZ(1);
{ gt = 76; break IF; }
    }
    X_71: for (;;) { IF: if (gt <= 71) {

lcA1.setIsVisibleCreateButon__VZ(0);
    }
    X_76: for (;;) { IF: if (gt <= 76) {

var stA0 = lcA1.getConfiguredFilters__Ljava_util_List_2();
invoker.clear__V(stA0);
var stA0 = lcA1.getConfiguration__Lio_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_2();
var stA0 = stA0.getFilters__Ljava_util_List_2();
var lcA5 = stA0;
var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA5);
var lcA6 = stA0;
    }
    X_103: for (;;) { IF: if (gt <= 103) {

var stI0 = invoker.hasNext__Z(lcA6);
if ((stI0) == 0) { gt = 148; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA6);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_genericlist_FilterType']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.genericlist.FilterType');
var lcA7 = stA0;
var stI0 = lcA7.isIsSelected__Z();
if ((stI0) == 0) { gt = 145; break IF; }
var stA0 = lcA1.getConfiguredFilters__Ljava_util_List_2();
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,lcA7);
    }
    X_145: for (;;) { IF: if (gt <= 145) {
{ gt = 0; continue X_103; }
    }
    X_148: for (;;) { IF: if (gt <= 148) {

var stA0 = lcA1.getRows__Ljava_util_List_2();
var lcA6 = stA0;
var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA6);
var lcA7 = stA0;
    }
    X_163: for (;;) { IF: if (gt <= 163) {

var stI0 = invoker.hasNext__Z(lcA7);
if ((stI0) == 0) { gt = 236; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA7);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_genericlist_GenericListRow']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.genericlist.GenericListRow');
var lcA8 = stA0;
var stA0 = lcA8.getColumns__Ljava_util_List_2();
var lcA9 = stA0;
var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA9);
var lcA10 = stA0;
    }
    X_201: for (;;) { IF: if (gt <= 201) {

var stI0 = invoker.hasNext__Z(lcA10);
if ((stI0) == 0) { gt = 233; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA10);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.genericlist.GenericListColumn');
var lcA11 = stA0;
c.updateCoulmn__VLio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2Lio_cloudoffice_platform_cockpit_genericlist_GenericListColumn_2.call(lcA0, lcA1, lcA11);
{ gt = 0; continue X_201; }
    }
    X_233: for (;;) { IF: if (gt <= 233) {
{ gt = 0; continue X_163; }
    }
    X_236: for (;;) { IF: if (gt <= 236) {
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"Filters: ");
var stA1 = lcA1.getConfiguredFilters__Ljava_util_List_2();
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2(stA0,stA1);
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
(refs_io_cloudoffice_platform_cockpit_api_Logger || (refs_io_cloudoffice_platform_cockpit_api_Logger = vm.io_cloudoffice_platform_cockpit_api_Logger(false)))['log__VLjava_lang_String_2'](stA0);
return;

    }
}}}}}}}}}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.updateCoulmn__VLio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2Lio_cloudoffice_platform_cockpit_genericlist_GenericListColumn_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = lcA2.getColumnId__Ljava_lang_String_2();
var lcA3 = stA0;
var stA0 = lcA1.getConfiguration__Lio_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_2();
var stA0 = stA0.getColumns__Ljava_util_List_2();
var lcA4 = stA0;
var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA4);
var lcA5 = stA0;
    }
    X_23: for (;;) { IF: if (gt <= 23) {

var stI0 = invoker.hasNext__Z(lcA5);
if ((stI0) == 0) { gt = 116; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA5);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.genericlist.GenericListColumn');
var lcA6 = stA0;
var stA0 = lcA6.getColumnId__Ljava_lang_String_2();
var lcA7 = stA0;
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](lcA3);
if ((stI0) == 0) { gt = 113; break IF; }
var stI0 = invoker.equalsIgnoreCase__ZLjava_lang_String_2(lcA3,lcA7);
if ((stI0) == 0) { gt = 113; break IF; }
var stA0 = lcA2;var stA1 = lcA6.getColumnHeader__Ljava_lang_String_2();
stA0.setColumnHeader__VLjava_lang_String_2(stA1);
var stA0 = lcA2;var stA1 = lcA6.getColumnPosition__Ljava_lang_String_2();
stA0.setColumnPosition__VLjava_lang_String_2(stA1);
var stA0 = lcA2;var stA1 = lcA6.getColumnWidth__Ljava_lang_String_2();
stA0.setColumnWidth__VLjava_lang_String_2(stA1);
var stA0 = lcA2;var stI1 = lcA6.isIsVisible__Z();
stA0.setIsVisible__VZ(stI1);
var stA0 = lcA2;var stI1 = lcA6.isIsSortable__Z();
stA0.setIsSortable__VZ(stI1);
    }
    X_113: for (;;) { IF: if (gt <= 113) {
{ gt = 0; continue X_23; }
    }
    X_116: for (;;) { IF: if (gt <= 116) {
return;

    }
}}}}
};
    m.access = 2;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$1', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_CallBack(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$1fillInstOf });
    io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/genericlist/GenericListComponent$1';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_CallBack(false).constructor.$class
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_Logger;
    var refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent;
    var refs_io_cloudoffice_platform_cockpit_api_UtilValidate;
    var refs_java_lang_StringBuilder;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$1_val$view'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$1 = io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$1;

vm.io_cloudoffice_platform_cockpit_api_CallBack = link('io/cloudoffice/platform/cockpit/api/CallBack', function(f) { vm.io_cloudoffice_platform_cockpit_api_CallBack =  f; });
vm.io_cloudoffice_platform_cockpit_api_UtilValidate = link('io/cloudoffice/platform/cockpit/api/UtilValidate', function(f) { vm.io_cloudoffice_platform_cockpit_api_UtilValidate =  f; });

function io_cloudoffice_platform_cockpit_genericlist_GenericListComponent() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_genericlist_GenericListComponent;
  if (!CLS.$class) {
    var pp = vm.io_cloudoffice_platform_cockpit_api_AbstractComponent(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_COLUMN_NAME'] = null;
  m = c._COLUMN_NAME = function (v) {  if (arguments.length == 1) CLS['fld_COLUMN_NAME'] = v; return CLS['fld_COLUMN_NAME']; };
c['_COLUMN_NAME'] = m;

  CLS['fld_COLUMN_CREATOR'] = null;
  m = c._COLUMN_CREATOR = function (v) {  if (arguments.length == 1) CLS['fld_COLUMN_CREATOR'] = v; return CLS['fld_COLUMN_CREATOR']; };
c['_COLUMN_CREATOR'] = m;

  CLS['fld_COLUMN_FILE_VIESION'] = null;
  m = c._COLUMN_FILE_VIESION = function (v) {  if (arguments.length == 1) CLS['fld_COLUMN_FILE_VIESION'] = v; return CLS['fld_COLUMN_FILE_VIESION']; };
c['_COLUMN_FILE_VIESION'] = m;

  CLS['fld_COLUMN_FILE_SIZE'] = null;
  m = c._COLUMN_FILE_SIZE = function (v) {  if (arguments.length == 1) CLS['fld_COLUMN_FILE_SIZE'] = v; return CLS['fld_COLUMN_FILE_SIZE']; };
c['_COLUMN_FILE_SIZE'] = m;

  CLS['fld_COLUMN_EMAIL'] = null;
  m = c._COLUMN_EMAIL = function (v) {  if (arguments.length == 1) CLS['fld_COLUMN_EMAIL'] = v; return CLS['fld_COLUMN_EMAIL']; };
c['_COLUMN_EMAIL'] = m;

  CLS['fld_COLUMN_PHONE'] = null;
  m = c._COLUMN_PHONE = function (v) {  if (arguments.length == 1) CLS['fld_COLUMN_PHONE'] = v; return CLS['fld_COLUMN_PHONE']; };
c['_COLUMN_PHONE'] = m;

  CLS['fld_COLUMN_CSS_CLASS'] = null;
  m = c._COLUMN_CSS_CLASS = function (v) {  if (arguments.length == 1) CLS['fld_COLUMN_CSS_CLASS'] = v; return CLS['fld_COLUMN_CSS_CLASS']; };
c['_COLUMN_CSS_CLASS'] = m;

    m = c.getInstance__Lio_cloudoffice_platform_cockpit_api_Component_2Ljava_lang_String_2 = function(lcA0) {
var stA0 = new io_cloudoffice_platform_cockpit_genericlist_GenericListComponent;
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
c['_componentName'].call(lcA0, "genericlist-component");
return;

};
c['setComponentName__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.bindEventListeners__V = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = "loginsuccess";var stA2 = new io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$LoginEventListener;
(refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$LoginEventListener || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$LoginEventListener = io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$LoginEventListener(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_genericlist_GenericListComponent_2.call(stA2, lcA0);
invoker.attachListener__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_EventListener_2(stA0,stA1, stA2);
var stA0 = lcA0;var stA1 = "designermode";var stA2 = new io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$DesignModeListener;
(refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$DesignModeListener || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$DesignModeListener = io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$DesignModeListener(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_genericlist_GenericListComponent_2Lio_cloudoffice_platform_cockpit_genericlist_GenericListComponent$1_2.call(stA2, lcA0, null);
invoker.attachListener__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_EventListener_2(stA0,stA1, stA2);
var stA0 = lcA0;var stA1 = "loadintialdata";var stA2 = new io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$LoadInitialDataListener;
(refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$LoadInitialDataListener || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$LoadInitialDataListener = io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$LoadInitialDataListener(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_genericlist_GenericListComponent_2Lio_cloudoffice_platform_cockpit_genericlist_GenericListComponent$1_2.call(stA2, lcA0, null);
invoker.attachListener__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_EventListener_2(stA0,stA1, stA2);
var stA0 = lcA0;var stA1 = "loadlist";var stA2 = new io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$LoadListListener;
(refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$LoadListListener || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$LoadListListener = io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$LoadListListener(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_genericlist_GenericListComponent_2Lio_cloudoffice_platform_cockpit_genericlist_GenericListComponent$1_2.call(stA2, lcA0, null);
invoker.attachListener__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_EventListener_2(stA0,stA1, stA2);
var stA0 = lcA0;var stA1 = "invokefunction";var stA2 = new io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$FunctionInvokeListener;
(refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$FunctionInvokeListener || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$FunctionInvokeListener = io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$FunctionInvokeListener(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_genericlist_GenericListComponent_2Lio_cloudoffice_platform_cockpit_genericlist_GenericListComponent$1_2.call(stA2, lcA0, null);
invoker.attachListener__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_EventListener_2(stA0,stA1, stA2);
var stA0 = lcA0;var stA1 = "viewchange";var stA2 = new io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$ViewChangeListener;
(refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$ViewChangeListener || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$ViewChangeListener = io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$ViewChangeListener(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_genericlist_GenericListComponent_2Lio_cloudoffice_platform_cockpit_genericlist_GenericListComponent$1_2.call(stA2, lcA0, null);
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
var stA0 = lcA0;var stA1 = invoker.getName__Ljava_lang_String_2((refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistView || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistView = io_cloudoffice_platform_cockpit_genericlist_GenericlistView(false))).constructor.$class);
invoker.setDefaultViewName__VLjava_lang_String_2(stA0,stA1);
var stA0 = lcA0;var stA1 = invoker.getName__Ljava_lang_String_2((refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration = io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration(false))).constructor.$class);
invoker.setDefaultConfigViewName__VLjava_lang_String_2(stA0,stA1);
return;

};
c['bindViewNames__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.paginationNavigation__VLio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = lcA0.isHasMoreItemAvailable__Z();
var lcI1 = stI0;
if ((lcI1) == 0) { gt = 17; break IF; }
lcA0.setEnableNext__VZ(1);
{ gt = 22; break IF; }
    }
    X_17: for (;;) { IF: if (gt <= 17) {

lcA0.setEnableNext__VZ(0);
    }
    X_22: for (;;) { IF: if (gt <= 22) {

var stI0 = lcA0.getPageNumber__I();
var lcI2 = stI0;
if ((lcI2) <= (1)) { gt = 40; break IF; }
lcA0.setEnablePrevious__VZ(1);
{ gt = 45; break IF; }
    }
    X_40: for (;;) { IF: if (gt <= 40) {

lcA0.setEnablePrevious__VZ(0);
    }
    X_45: for (;;) { IF: if (gt <= 45) {
return;

    }
}}}}}
};
c['paginationNavigation__VLio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.selectBatch__VLio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = lcA0.isBatchSelected__Z();
if ((stI0) != 0) { gt = 19; break IF; }
lcA0.setBatchSelected__VZ(1);
c.checkAll__VLio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2(lcA0);
{ gt = 28; break IF; }
    }
    X_19: for (;;) { IF: if (gt <= 19) {

lcA0.setBatchSelected__VZ(0);
c.uncheckAll__VLio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2(lcA0);
    }
    X_28: for (;;) { IF: if (gt <= 28) {
return;

    }
}}}
};
    m.access = 8;
    m.cls = CLS;
    m = c.selectSingle__VLio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2Lio_cloudoffice_platform_cockpit_genericlist_GenericListRow_2 = function(lcA0, lcA1) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = lcA1.isIsSelected__Z();
if ((stI0) != 0) { gt = 15; break IF; }
lcA1.setIsSelected__VZ(1);
{ gt = 20; break IF; }
    }
    X_15: for (;;) { IF: if (gt <= 15) {

lcA1.setIsSelected__VZ(0);
    }
    X_20: for (;;) { IF: if (gt <= 20) {

var lcI2 = 0;
var stA0 = lcA0.getRows__Ljava_util_List_2();
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA3 = stA0;
    }
    X_32: for (;;) { IF: if (gt <= 32) {

var stI0 = invoker.hasNext__Z(lcA3);
if ((stI0) == 0) { gt = 73; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA3);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_genericlist_GenericListRow']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.genericlist.GenericListRow');
var lcA4 = stA0;
var stI0 = lcA4.isIsSelected__Z();
if ((stI0) == 0) { gt = 65; break IF; }
var lcI2 = 1;
{ gt = 70; break IF; }
    }
    X_65: for (;;) { IF: if (gt <= 65) {

var lcI2 = 0;
{ gt = 73; break IF; }
    }
    X_70: for (;;) { IF: if (gt <= 70) {
{ gt = 0; continue X_32; }
    }
    X_73: for (;;) { IF: if (gt <= 73) {

if ((lcI2) == 0) { gt = 85; break IF; }
lcA0.setBatchSelected__VZ(1);
{ gt = 90; break IF; }
    }
    X_85: for (;;) { IF: if (gt <= 85) {

lcA0.setBatchSelected__VZ(0);
    }
    X_90: for (;;) { IF: if (gt <= 90) {
return;

    }
}}}}}}}}}
};
    m.access = 8;
    m.cls = CLS;
    m = c.checkAll__VLio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = lcA0.getRows__Ljava_util_List_2();
var lcA1 = stA0;
var stI0 = invoker.isEmpty__Z(lcA1);
if ((stI0) != 0) { gt = 48; break IF; }
var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA1);
var lcA2 = stA0;
    }
    X_21: for (;;) { IF: if (gt <= 21) {

var stI0 = invoker.hasNext__Z(lcA2);
if ((stI0) == 0) { gt = 48; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA2);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_genericlist_GenericListRow']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.genericlist.GenericListRow');
var lcA3 = stA0;
lcA3.setIsSelected__VZ(1);
{ gt = 0; continue X_21; }
    }
    X_48: for (;;) { IF: if (gt <= 48) {
return;

    }
}}}
};
    m.access = 8;
    m.cls = CLS;
    m = c.uncheckAll__VLio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = lcA0.getRows__Ljava_util_List_2();
var lcA1 = stA0;
var stI0 = invoker.isEmpty__Z(lcA1);
if ((stI0) != 0) { gt = 48; break IF; }
var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA1);
var lcA2 = stA0;
    }
    X_21: for (;;) { IF: if (gt <= 21) {

var stI0 = invoker.hasNext__Z(lcA2);
if ((stI0) == 0) { gt = 48; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA2);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_genericlist_GenericListRow']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.genericlist.GenericListRow');
var lcA3 = stA0;
lcA3.setIsSelected__VZ(0);
{ gt = 0; continue X_21; }
    }
    X_48: for (;;) { IF: if (gt <= 48) {
return;

    }
}}}
};
    m.access = 8;
    m.cls = CLS;
    m = c.clearBeforeloadList__VLio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2Ljava_lang_String_2 = function(lcA0, lcA1) {
lcA0.setPageNumber__VI(0);
var stA0 = lcA0.getRows__Ljava_util_List_2();
invoker.clear__V(stA0);
var stA0 = new io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$VirtualItemListAsyncRequest;
var stA1 = stA0;var stA2 = "\"/VirtualItem-portlet.searchitem/search\"";var stA3 = new io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$VirtualItemListAsyncRequestCallback;
(refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$VirtualItemListAsyncRequestCallback || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$VirtualItemListAsyncRequestCallback = io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$VirtualItemListAsyncRequestCallback(false))).constructor.cons__V.call(stA3);
(refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$VirtualItemListAsyncRequest || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$VirtualItemListAsyncRequest = io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$VirtualItemListAsyncRequest(false))).constructor.cons__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_ServerCallback_2Lio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2Ljava_lang_String_2.call(stA1, stA2, stA3, lcA0, lcA1);
var lcA2 = stA0;
invoker.call__V(lcA2);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.loadList__VLio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2Ljava_lang_String_2 = function(lcA0, lcA1) {
var stA0 = new io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$VirtualItemListAsyncRequest;
var stA1 = stA0;var stA2 = "\"/VirtualItem-portlet.searchitem/search\"";var stA3 = new io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$VirtualItemListAsyncRequestCallback;
(refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$VirtualItemListAsyncRequestCallback || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$VirtualItemListAsyncRequestCallback = io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$VirtualItemListAsyncRequestCallback(false))).constructor.cons__V.call(stA3);
(refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$VirtualItemListAsyncRequest || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$VirtualItemListAsyncRequest = io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$VirtualItemListAsyncRequest(false))).constructor.cons__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_ServerCallback_2Lio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2Ljava_lang_String_2.call(stA1, stA2, stA3, lcA0, lcA1);
var lcA2 = stA0;
invoker.call__V(lcA2);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.reloadList__VLio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2 = function(lcA0) {
lcA0.setHeaderTitle__VLjava_lang_String_2("");
lcA0.setPageNumber__VI(1);
var stA0 = lcA0.getRows__Ljava_util_List_2();
invoker.clear__V(stA0);
var stA0 = c.getConfiguredFilters__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Lio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2(lcA0);
var lcA1 = stA0;
var stA0 = new io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$VirtualItemListAsyncRequest;
var stA1 = stA0;var stA2 = "\"/VirtualItem-portlet.searchitem/search\"";var stA3 = new io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$VirtualItemListAsyncRequestCallback;
(refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$VirtualItemListAsyncRequestCallback || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$VirtualItemListAsyncRequestCallback = io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$VirtualItemListAsyncRequestCallback(false))).constructor.cons__V.call(stA3);
var stA4 = lcA0;var stA5 = invoker.toJSON__Ljava_lang_String_2(lcA1);
(refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$VirtualItemListAsyncRequest || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$VirtualItemListAsyncRequest = io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$VirtualItemListAsyncRequest(false))).constructor.cons__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_ServerCallback_2Lio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2Ljava_lang_String_2.call(stA1, stA2, stA3, stA4, stA5);
var lcA2 = stA0;
invoker.call__V(lcA2);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.next__VLio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = lcA0.isHasMoreItemAvailable__Z();
if ((stI0) == 0) { gt = 32; break IF; }
var stI0 = lcA0.getPageNumber__I();
var lcI1 = (((stI0) + (1)) | 0);
lcA0.setPageNumber__VI(lcI1);
var stA0 = c.getConfiguredFilters__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Lio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2(lcA0);
var lcA2 = stA0;
var stA0 = lcA0;var stA1 = invoker.toJSON__Ljava_lang_String_2(lcA2);
c.loadList__VLio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2Ljava_lang_String_2(stA0, stA1);
    }
    X_32: for (;;) { IF: if (gt <= 32) {
return;

    }
}}
};
    m.access = 8;
    m.cls = CLS;
    m = c.previous__VLio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = lcA0.getPageNumber__I();
if ((stI0) <= (1)) { gt = 33; break IF; }
var stI0 = lcA0.getPageNumber__I();
var lcI1 = (((stI0) - (1)) | 0);
lcA0.setPageNumber__VI(lcI1);
var stA0 = c.getConfiguredFilters__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Lio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2(lcA0);
var lcA2 = stA0;
var stA0 = lcA0;var stA1 = invoker.toJSON__Ljava_lang_String_2(lcA2);
c.loadList__VLio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2Ljava_lang_String_2(stA0, stA1);
    }
    X_33: for (;;) { IF: if (gt <= 33) {
return;

    }
}}
};
    m.access = 8;
    m.cls = CLS;
    m = c.enableListView__VLio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2 = function(lcA0) {
lcA0.setGridViewEnabled__VZ(0);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.enableGridView__VLio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2 = function(lcA0) {
lcA0.setGridViewEnabled__VZ(1);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.openConfig__VLio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2 = function(lcA0) {
lcA0.setDesignerMode__VZ(1);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.closeConfigurationPanel__VLio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2 = function(lcA0) {
lcA0.setDesignerMode__VZ(0);
c.resetConfigurationModelFromJSON__VLio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2(lcA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.loadDetail__VLio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2Lio_cloudoffice_platform_cockpit_genericlist_GenericListRow_2 = function(lcA0, lcA1) {
c.addFilter__VLio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2Lio_cloudoffice_platform_cockpit_genericlist_GenericListRow_2(lcA0, lcA1);
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['builder__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2']();
var stA1 = "itemId";var stA2 = lcA1.getItemId__Ljava_lang_String_2();
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2(stA0,stA1, stA2);
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Z(stA0,"isSplitView", 1);
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2(stA0,"viewType", "metaMode");
var lcA2 = stA0;
var stA0 = lcA0.getDetailComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA0 = invoker.getComponent__Ljava_lang_String_2(stA0);
var lcA3 = stA0;
var stA0 = lcA0.getDetailComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA0 = invoker.getInstanceId__Ljava_lang_String_2(stA0);
var lcA4 = stA0;
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_Event;
(refs_io_cloudoffice_platform_cockpit_api_Event || (refs_io_cloudoffice_platform_cockpit_api_Event = vm.io_cloudoffice_platform_cockpit_api_Event(false))).constructor['cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2'].call(stA0, "loaditemdetail", "loaditemdetail", lcA2);
var lcA5 = stA0;
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_Components || (refs_io_cloudoffice_platform_cockpit_api_Components = vm.io_cloudoffice_platform_cockpit_api_Components(false)))['get__Lio_cloudoffice_platform_cockpit_api_Component_2Ljava_lang_String_2Ljava_lang_String_2'](lcA3, lcA4);
invoker.listen__VLio_cloudoffice_platform_cockpit_api_Signal_2(stA0,lcA5);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.showActionMenu__VLio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2Lio_cloudoffice_platform_cockpit_genericlist_GenericListRow_2 = function(lcA0, lcA1) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['builder__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2']();
var stA1 = "itemId";var stA2 = lcA1.getItemId__Ljava_lang_String_2();
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2(stA0,stA1, stA2);
var stA1 = "itemName";var stA2 = lcA1.getItemName__Ljava_lang_String_2();
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2(stA0,stA1, stA2);
var stA1 = "itemType";var stA2 = lcA1.getItemType__Ljava_lang_String_2();
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2(stA0,stA1, stA2);
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Z(stA0,"isFromList", 1);
var stA1 = "component";var stA2 = lcA0.getDetailComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA2 = invoker.getComponent__Ljava_lang_String_2(stA2);
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2(stA0,stA1, stA2);
var stA1 = "instanceId";var stA2 = lcA0.getDetailComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA2 = invoker.getInstanceId__Ljava_lang_String_2(stA2);
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2(stA0,stA1, stA2);
var stA1 = "maximumPermission";var stA2 = c.getMaximumPermission__Ljava_lang_String_2Lio_cloudoffice_platform_cockpit_genericlist_GenericListRow_2(lcA1);
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2(stA0,stA1, stA2);
var lcA2 = stA0;
var stA0 = lcA0.getActionMenuComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA0 = invoker.getComponent__Ljava_lang_String_2(stA0);
var lcA3 = stA0;
var stA0 = lcA0.getActionMenuComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA0 = invoker.getInstanceId__Ljava_lang_String_2(stA0);
var lcA4 = stA0;
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_Event;
(refs_io_cloudoffice_platform_cockpit_api_Event || (refs_io_cloudoffice_platform_cockpit_api_Event = vm.io_cloudoffice_platform_cockpit_api_Event(false))).constructor['cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2'].call(stA0, "toogleactionmenu", "toogleactionmenu", lcA2);
var lcA5 = stA0;
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_Components || (refs_io_cloudoffice_platform_cockpit_api_Components = vm.io_cloudoffice_platform_cockpit_api_Components(false)))['get__Lio_cloudoffice_platform_cockpit_api_Component_2Ljava_lang_String_2Ljava_lang_String_2'](lcA3, lcA4);
invoker.listen__VLio_cloudoffice_platform_cockpit_api_Signal_2(stA0,lcA5);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.createNewItem__VLio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2 = function(lcA0) {
lcA0.setVisible__VZ(0);
var stA0 = lcA0.getDetailComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA0 = invoker.getComponent__Ljava_lang_String_2(stA0);
var lcA1 = stA0;
var stA0 = lcA0.getDetailComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA0 = invoker.getInstanceId__Ljava_lang_String_2(stA0);
var lcA2 = stA0;
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_Event;
(refs_io_cloudoffice_platform_cockpit_api_Event || (refs_io_cloudoffice_platform_cockpit_api_Event = vm.io_cloudoffice_platform_cockpit_api_Event(false))).constructor['cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2'].call(stA0, "invokefunction", "invokefunction", "enableCreateMode");
var lcA3 = stA0;
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_Components || (refs_io_cloudoffice_platform_cockpit_api_Components = vm.io_cloudoffice_platform_cockpit_api_Components(false)))['get__Lio_cloudoffice_platform_cockpit_api_Component_2Ljava_lang_String_2Ljava_lang_String_2'](lcA1, lcA2);
invoker.listen__VLio_cloudoffice_platform_cockpit_api_Signal_2(stA0,lcA3);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.showCollectionHoverAction__VLio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = lcA0.getCollectionComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA0 = invoker.getComponent__Ljava_lang_String_2(stA0);
var lcA1 = stA0;
var stA0 = lcA0.getCollectionComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA0 = invoker.getInstanceId__Ljava_lang_String_2(stA0);
var lcA2 = stA0;
var stI0 = c.hasSelectedItem__ZLio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2(lcA0);
if ((stI0) == 0) { gt = 51; break IF; }
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_Event;
(refs_io_cloudoffice_platform_cockpit_api_Event || (refs_io_cloudoffice_platform_cockpit_api_Event = vm.io_cloudoffice_platform_cockpit_api_Event(false))).constructor['cons__VLjava_lang_String_2Ljava_lang_String_2'].call(stA0, "addtocollectionaction", "hover");
var lcA3 = stA0;
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_Components || (refs_io_cloudoffice_platform_cockpit_api_Components = vm.io_cloudoffice_platform_cockpit_api_Components(false)))['get__Lio_cloudoffice_platform_cockpit_api_Component_2Ljava_lang_String_2Ljava_lang_String_2'](lcA1, lcA2);
invoker.listen__VLio_cloudoffice_platform_cockpit_api_Signal_2(stA0,lcA3);
{ gt = 103; break IF; }
    }
    X_51: for (;;) { IF: if (gt <= 51) {
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_Event;
(refs_io_cloudoffice_platform_cockpit_api_Event || (refs_io_cloudoffice_platform_cockpit_api_Event = vm.io_cloudoffice_platform_cockpit_api_Event(false))).constructor['cons__VLjava_lang_String_2Ljava_lang_String_2'].call(stA0, "createnewcollectionaction", "hover");
var lcA3 = stA0;
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,lcA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,",");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,lcA2);
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
(refs_io_cloudoffice_platform_cockpit_api_Logger || (refs_io_cloudoffice_platform_cockpit_api_Logger = vm.io_cloudoffice_platform_cockpit_api_Logger(false)))['log__VLjava_lang_String_2'](stA0);
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_Components || (refs_io_cloudoffice_platform_cockpit_api_Components = vm.io_cloudoffice_platform_cockpit_api_Components(false)))['get__Lio_cloudoffice_platform_cockpit_api_Component_2Ljava_lang_String_2Ljava_lang_String_2'](lcA1, lcA2);
invoker.listen__VLio_cloudoffice_platform_cockpit_api_Signal_2(stA0,lcA3);
    }
    X_103: for (;;) { IF: if (gt <= 103) {
return;

    }
}}}
};
    m.access = 8;
    m.cls = CLS;
    m = c.getSelectedListItems__VLio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2 = function(lcA0) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['builder__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2']();
var stA1 = "selecteditems";var stA2 = c.getSelectedItems__Ljava_util_List_2Lio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2(lcA0);
var stA0 = invoker.addFieldMapList__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_util_List_2(stA0,stA1, stA2);
var lcA1 = stA0;
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_Event;
(refs_io_cloudoffice_platform_cockpit_api_Event || (refs_io_cloudoffice_platform_cockpit_api_Event = vm.io_cloudoffice_platform_cockpit_api_Event(false))).constructor['cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2'].call(stA0, "createnewcollectionwithchildrenaction", "hover", lcA1);
var lcA2 = stA0;
var stA0 = lcA0.getCollectionComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA0 = invoker.getComponent__Ljava_lang_String_2(stA0);
var stA1 = lcA0.getCollectionComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA1 = invoker.getInstanceId__Ljava_lang_String_2(stA1);
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_Components || (refs_io_cloudoffice_platform_cockpit_api_Components = vm.io_cloudoffice_platform_cockpit_api_Components(false)))['get__Lio_cloudoffice_platform_cockpit_api_Component_2Ljava_lang_String_2Ljava_lang_String_2'](stA0, stA1);
invoker.listen__VLio_cloudoffice_platform_cockpit_api_Signal_2(stA0,lcA2);
return;

};
c['getSelectedListItems__VLio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.getSelectedListItemsToCollection__VLio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2 = function(lcA0) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['builder__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2']();
var stA1 = "selecteditems";var stA2 = c.getSelectedItems__Ljava_util_List_2Lio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2(lcA0);
var stA0 = invoker.addFieldMapList__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_util_List_2(stA0,stA1, stA2);
var lcA1 = stA0;
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_Event;
(refs_io_cloudoffice_platform_cockpit_api_Event || (refs_io_cloudoffice_platform_cockpit_api_Event = vm.io_cloudoffice_platform_cockpit_api_Event(false))).constructor['cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2'].call(stA0, "listdataaddtocollectionaction", "hover", lcA1);
var lcA2 = stA0;
var stA0 = lcA0.getCollectionComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA0 = invoker.getComponent__Ljava_lang_String_2(stA0);
var stA1 = lcA0.getCollectionComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA1 = invoker.getInstanceId__Ljava_lang_String_2(stA1);
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_Components || (refs_io_cloudoffice_platform_cockpit_api_Components = vm.io_cloudoffice_platform_cockpit_api_Components(false)))['get__Lio_cloudoffice_platform_cockpit_api_Component_2Ljava_lang_String_2Ljava_lang_String_2'](stA0, stA1);
invoker.listen__VLio_cloudoffice_platform_cockpit_api_Signal_2(stA0,lcA2);
return;

};
c['getSelectedListItemsToCollection__VLio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.showList__VLio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2 = function(lcA0) {
lcA0.setVisible__VZ(1);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.hideList__VLio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2 = function(lcA0) {
lcA0.setVisible__VZ(0);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.save__VLio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2 = function(lcA0) {
var stA0 = lcA0.clone__Lio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2();
var lcA1 = stA0;
var stA0 = lcA1.getRows__Ljava_util_List_2();
invoker.clear__V(stA0);
var stA0 = lcA1.getConfiguredColumns__Ljava_util_List_2();
invoker.clear__V(stA0);
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['_CONFIG']();var stA1 = "genericlist";var stA2 = lcA0.getInstance__Ljava_lang_String_2();
var stA1 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['configPostEndpoint__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2'](stA1, stA2, "");
var stA2 = lcA1.toString__Ljava_lang_String_2();
var stA3 = new io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$1;
(refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$1 || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$1 = io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$1(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2.call(stA3, lcA0);
invoker.post__VLjava_lang_String_2Ljava_lang_String_2Lio_cloudoffice_platform_cockpit_api_CallBack_2(stA0,stA1, stA2, stA3);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.loadInitialData__VLio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

lcA0.setPageNumber__VI(1);
var stA0 = c.getConfiguredFilters__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Lio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2(lcA0);
var lcA1 = stA0;
var stA0 = invoker.toJSON__Ljava_lang_String_2(lcA1);
var stI0 = invoker.equalsIgnoreCase__ZLjava_lang_String_2(stA0,"{}");
if ((stI0) != 0) { gt = 58; break IF; }
var stA0 = lcA0.getRows__Ljava_util_List_2();
invoker.clear__V(stA0);
var stA0 = new io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$VirtualItemListAsyncRequest;
var stA1 = stA0;var stA2 = "\"/VirtualItem-portlet.searchitem/search\"";var stA3 = new io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$VirtualItemListAsyncRequestCallback;
(refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$VirtualItemListAsyncRequestCallback || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$VirtualItemListAsyncRequestCallback = io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$VirtualItemListAsyncRequestCallback(false))).constructor.cons__V.call(stA3);
var stA4 = lcA0;var stA5 = invoker.toJSON__Ljava_lang_String_2(lcA1);
(refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$VirtualItemListAsyncRequest || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$VirtualItemListAsyncRequest = io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$VirtualItemListAsyncRequest(false))).constructor.cons__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_ServerCallback_2Lio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2Ljava_lang_String_2.call(stA1, stA2, stA3, stA4, stA5);
var lcA2 = stA0;
invoker.call__V(lcA2);
    }
    X_58: for (;;) { IF: if (gt <= 58) {
return;

    }
}}
};
    m.access = 8;
    m.cls = CLS;
    m = c.updateHeaderTitle__VLio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2Ljava_lang_String_2 = function(lcA0, lcA1) {
lcA0.setHeaderTitle__VLjava_lang_String_2(lcA1);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.resetConfiguration__VLio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2 = function(lcA0) {
c.resetConfigurationModelFromJSON__VLio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2(lcA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.addFilter__VLio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2Lio_cloudoffice_platform_cockpit_genericlist_GenericListRow_2 = function(lcA0, lcA1) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['builder__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2']();
var stA1 = "itemId";var stA2 = lcA1.getItemId__Ljava_lang_String_2();
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2(stA0,stA1, stA2);
var stA1 = "itemName";var stA2 = lcA1.getItemName__Ljava_lang_String_2();
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2(stA0,stA1, stA2);
var stA1 = "itemType";var stA2 = lcA1.getItemType__Ljava_lang_String_2();
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2(stA0,stA1, stA2);
var lcA2 = stA0;
var stA0 = lcA0.getSearchBoxComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA0 = invoker.getComponent__Ljava_lang_String_2(stA0);
var lcA3 = stA0;
var stA0 = lcA0.getSearchBoxComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA0 = invoker.getInstanceId__Ljava_lang_String_2(stA0);
var lcA4 = stA0;
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_Event;
(refs_io_cloudoffice_platform_cockpit_api_Event || (refs_io_cloudoffice_platform_cockpit_api_Event = vm.io_cloudoffice_platform_cockpit_api_Event(false))).constructor['cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2'].call(stA0, "addfilter", "addfilter", lcA2);
var lcA5 = stA0;
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_Components || (refs_io_cloudoffice_platform_cockpit_api_Components = vm.io_cloudoffice_platform_cockpit_api_Components(false)))['get__Lio_cloudoffice_platform_cockpit_api_Component_2Ljava_lang_String_2Ljava_lang_String_2'](lcA3, lcA4);
invoker.listen__VLio_cloudoffice_platform_cockpit_api_Signal_2(stA0,lcA5);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.getMaximumPermission__Ljava_lang_String_2Lio_cloudoffice_platform_cockpit_genericlist_GenericListRow_2 = function(lcA0) {

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
    m = c.hasSelectedItem__ZLio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = lcA0.getRows__Ljava_util_List_2();
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA1 = stA0;
    }
    X_10: for (;;) { IF: if (gt <= 10) {

var stI0 = invoker.hasNext__Z(lcA1);
if ((stI0) == 0) { gt = 67; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA1);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_genericlist_GenericListRow']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.genericlist.GenericListRow');
var lcA2 = stA0;
var stA0 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA0);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"C#");
var stI1 = lcA2.isIsSelected__Z();
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Z(stA0,stI1);
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
(refs_io_cloudoffice_platform_cockpit_api_Logger || (refs_io_cloudoffice_platform_cockpit_api_Logger = vm.io_cloudoffice_platform_cockpit_api_Logger(false)))['log__VLjava_lang_String_2'](stA0);
var stI0 = lcA2.isIsSelected__Z();
if ((stI0) == 0) { gt = 64; break IF; }
return 1;
    }
    X_64: for (;;) { IF: if (gt <= 64) {
{ gt = 0; continue X_10; }
    }
    X_67: for (;;) { IF: if (gt <= 67) {

return 0;

    }
}}}}
};
    m.access = 10;
    m.cls = CLS;
    m = c.getSelectedItems__Ljava_util_List_2Lio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
var stA0 = new vm.java_util_ArrayList;
(refs_java_util_ArrayList || (refs_java_util_ArrayList = vm.java_util_ArrayList(false))).constructor['cons__V'].call(stA0);
var lcA1 = stA0;
var stA0 = lcA0.getRows__Ljava_util_List_2();
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA2 = stA0;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

var stI0 = invoker.hasNext__Z(lcA2);
if ((stI0) == 0) { gt = 110; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA2);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_genericlist_GenericListRow']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.genericlist.GenericListRow');
var lcA3 = stA0;
var stI0 = lcA3.isIsSelected__Z();
if ((stI0) == 0) { gt = 107; break IF; }
var stA0 = new vm.java_util_HashMap;
(refs_java_util_HashMap || (refs_java_util_HashMap = vm.java_util_HashMap(false))).constructor['cons__V'].call(stA0);
var lcA4 = stA0;
var stA0 = lcA4;var stA1 = "itemId";var stA2 = lcA3.getItemId__Ljava_lang_String_2();
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = lcA4;var stA1 = "itemType";var stA2 = lcA3.getItemType__Ljava_lang_String_2();
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = lcA4;var stA1 = "itemName";var stA2 = lcA3.getItemName__Ljava_lang_String_2();
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
var stI0 = invoker.add__ZLjava_lang_Object_2(lcA1,lcA4);
    }
    X_107: for (;;) { IF: if (gt <= 107) {
{ gt = 0; continue X_18; }
    }
    X_110: for (;;) { IF: if (gt <= 110) {

return lcA1;

    }
}}}}
};
    m.access = 10;
    m.cls = CLS;
    m = c.resetConfigurationModelFromJSON__VLio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2 = function(lcA0) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['_CONFIG']();var stA1 = "genericlist";var stA2 = lcA0.getInstance__Ljava_lang_String_2();
var stA1 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['configFetchEndpoint__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2'](stA1, stA2);
var stA2 = null;var stA3 = new io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$2;
(refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$2 || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$2 = io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$2(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2.call(stA3, lcA0);
invoker.fetch__VLjava_lang_String_2Ljava_util_Map_2Lio_cloudoffice_platform_cockpit_api_CallBack_2(stA0,stA1, stA2, stA3);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.getConfiguredFilters__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Lio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['builder__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2']();
var lcA1 = stA0;
var stA0 = new vm.java_util_ArrayList;
(refs_java_util_ArrayList || (refs_java_util_ArrayList = vm.java_util_ArrayList(false))).constructor['cons__V'].call(stA0);
var lcA2 = stA0;
var stA0 = lcA0.getConfiguredFilters__Ljava_util_List_2();
var lcA3 = stA0;
var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA3);
var lcA4 = stA0;
    }
    X_25: for (;;) { IF: if (gt <= 25) {

var stI0 = invoker.hasNext__Z(lcA4);
if ((stI0) == 0) { gt = 62; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA4);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_genericlist_FilterType']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.genericlist.FilterType');
var lcA5 = stA0;
var stA0 = lcA2;var stA1 = lcA5.getItemType__Ljava_lang_String_2();
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,stA1);
{ gt = 0; continue X_25; }
    }
    X_62: for (;;) { IF: if (gt <= 62) {

var stI0 = invoker.size__I(lcA2);
if ((stI0) <= 0) { gt = 80; break IF; }
var stA0 = invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_util_List_2(lcA1,"filters", lcA2);
    }
    X_80: for (;;) { IF: if (gt <= 80) {

return lcA1;

    }
}}}}
};
    m.access = 8;
    m.cls = CLS;
    m = c.class__V = function() {
c._COLUMN_NAME("name");
c._COLUMN_CREATOR("creator");
c._COLUMN_FILE_VIESION("version");
c._COLUMN_FILE_SIZE("size");
c._COLUMN_EMAIL("email");
c._COLUMN_PHONE("phone");
c._COLUMN_CSS_CLASS("item-title");
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_genericlist_GenericListComponentfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_genericlist_GenericListComponentfillInstOf });
    io_cloudoffice_platform_cockpit_genericlist_GenericListComponentfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/genericlist/GenericListComponent';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 33;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_io_cloudoffice_platform_cockpit_api_AbstractComponent;
    var refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$LoginEventListener;
    var refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$DesignModeListener;
    var refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$LoadInitialDataListener;
    var refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$LoadListListener;
    var refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$FunctionInvokeListener;
    var refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$ViewChangeListener;
    var refs_java_lang_UnsupportedOperationException;
    var refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistView;
    var refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration;
    var refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$VirtualItemListAsyncRequestCallback;
    var refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$VirtualItemListAsyncRequest;
    var refs_io_cloudoffice_platform_cockpit_api_MapBuilder;
    var refs_io_cloudoffice_platform_cockpit_api_Event;
    var refs_io_cloudoffice_platform_cockpit_api_Components;
    var refs_java_lang_StringBuilder;
    var refs_io_cloudoffice_platform_cockpit_api_Logger;
    var refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration;
    var refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$1;
    var refs_java_util_ArrayList;
    var refs_java_util_HashMap;
    var refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$2;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_genericlist_GenericListComponent = registerClass(exports,'io_cloudoffice_platform_cockpit_genericlist_GenericListComponent',io_cloudoffice_platform_cockpit_genericlist_GenericListComponent);


function io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$2() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$2;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$view = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$2_val$view'] = v; return this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$2_val$view']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$2_val$view'] = lcA1;
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
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$2_val$view'].getConfiguration__Lio_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_2();
var lcA3 = stA0;
var stA0 = invoker.getJsonObject__Lorg_json_JSONObject_2Ljava_lang_String_2(lcA2,"configuration");
var lcA4 = stA0;
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_Object_2'](lcA4);
if ((stI0) == 0) { gt = 631; break IF; }
var stA0 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA4,"defaultitemview");
var lcA5 = stA0;
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](lcA5);
if ((stI0) == 0) { gt = 65; break IF; }
var stI0 = invoker.equalsIgnoreCase__ZLjava_lang_String_2(lcA5,"GRID");
if ((stI0) == 0) { gt = 65; break IF; }
lcA3.setDefaultitemview__VLjava_lang_String_2("GRID");
{ gt = 71; break IF; }
    }
    X_65: for (;;) { IF: if (gt <= 65) {

lcA3.setDefaultitemview__VLjava_lang_String_2("LIST");
    }
    X_71: for (;;) { IF: if (gt <= 71) {

var stA0 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA4,"visibleCreateButon");
var lcA6 = stA0;
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](lcA6);
if ((stI0) == 0) { gt = 107; break IF; }
var stI0 = invoker.equalsIgnoreCase__ZLjava_lang_String_2(lcA6,"SHOW");
if ((stI0) == 0) { gt = 107; break IF; }
lcA3.setVisibleCreateButon__VLjava_lang_String_2("SHOW");
{ gt = 113; break IF; }
    }
    X_107: for (;;) { IF: if (gt <= 107) {

lcA3.setVisibleCreateButon__VLjava_lang_String_2("HIDE");
    }
    X_113: for (;;) { IF: if (gt <= 113) {

var stA0 = lcA3.getFilters__Ljava_util_List_2();
var stI0 = invoker.isEmpty__Z(stA0);
if ((stI0) != 0) { gt = 134; break IF; }
var stA0 = lcA3.getFilters__Ljava_util_List_2();
invoker.clear__V(stA0);
    }
    X_134: for (;;) { IF: if (gt <= 134) {

var stA0 = invoker.getJSONArray__Lorg_json_JSONArray_2Ljava_lang_String_2(lcA4,"filters");
var stA0 = invoker.toList__Ljava_util_List_2(stA0);
var lcA7 = stA0;
var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA7);
var lcA8 = stA0;
    }
    X_155: for (;;) { IF: if (gt <= 155) {

var stI0 = invoker.hasNext__Z(lcA8);
if ((stI0) == 0) { gt = 268; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA8);
var lcA9 = stA0;
if (lcA9 !== null && !lcA9['$instOf_java_util_Map']) vm.java_lang_Class(false).castEx(lcA9, 'java.util.Map');
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['query__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_util_Map_2'](lcA9);
var lcA10 = stA0;
var stA0 = new io_cloudoffice_platform_cockpit_genericlist_FilterType;
(refs_io_cloudoffice_platform_cockpit_genericlist_FilterType || (refs_io_cloudoffice_platform_cockpit_genericlist_FilterType = io_cloudoffice_platform_cockpit_genericlist_FilterType(false))).constructor.cons__V.call(stA0);
var lcA11 = stA0;
var stA0 = lcA11;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA10,"itemId");
stA0.setItemId__VLjava_lang_String_2(stA1);
var stA0 = lcA11;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA10,"itemType");
stA0.setItemType__VLjava_lang_String_2(stA1);
var stA0 = lcA11;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA10,"itemName");
stA0.setItemName__VLjava_lang_String_2(stA1);
var stA0 = lcA11;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA10,"filterType");
stA0.setFilterType__VLjava_lang_String_2(stA1);
var stA0 = lcA11;var stI1 = invoker.getBoolean__ZLjava_lang_String_2(lcA10,"isSelected");
stA0.setIsSelected__VZ(stI1);
var stA0 = lcA3.getFilters__Ljava_util_List_2();
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,lcA11);
{ gt = 0; continue X_155; }
    }
    X_268: for (;;) { IF: if (gt <= 268) {

var stA0 = lcA3.getColumns__Ljava_util_List_2();
var stI0 = invoker.isEmpty__Z(stA0);
if ((stI0) != 0) { gt = 289; break IF; }
var stA0 = lcA3.getColumns__Ljava_util_List_2();
invoker.clear__V(stA0);
    }
    X_289: for (;;) { IF: if (gt <= 289) {

var stA0 = invoker.getJSONArray__Lorg_json_JSONArray_2Ljava_lang_String_2(lcA4,"columns");
var stA0 = invoker.toList__Ljava_util_List_2(stA0);
var lcA8 = stA0;
var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA8);
var lcA9 = stA0;
    }
    X_310: for (;;) { IF: if (gt <= 310) {

var stI0 = invoker.hasNext__Z(lcA9);
if ((stI0) == 0) { gt = 447; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA9);
var lcA10 = stA0;
if (lcA10 !== null && !lcA10['$instOf_java_util_Map']) vm.java_lang_Class(false).castEx(lcA10, 'java.util.Map');
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['query__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_util_Map_2'](lcA10);
var lcA11 = stA0;
var stA0 = new io_cloudoffice_platform_cockpit_genericlist_GenericListColumn;
(refs_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn = io_cloudoffice_platform_cockpit_genericlist_GenericListColumn(false))).constructor.cons__V.call(stA0);
var lcA12 = stA0;
var stA0 = lcA12;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA11,"columnId");
stA0.setColumnId__VLjava_lang_String_2(stA1);
var stA0 = lcA12;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA11,"columnHeader");
stA0.setColumnHeader__VLjava_lang_String_2(stA1);
var stA0 = lcA12;var stI1 = invoker.getInt__ILjava_lang_String_2(lcA11,"columnIndex");
stA0.setColumnIndex__VI(stI1);
var stA0 = lcA12;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA11,"columnPosition");
stA0.setColumnPosition__VLjava_lang_String_2(stA1);
var stA0 = lcA12;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA11,"columnWidth");
stA0.setColumnWidth__VLjava_lang_String_2(stA1);
var stA0 = lcA12;var stI1 = invoker.getBoolean__ZLjava_lang_String_2(lcA11,"isVisible");
stA0.setIsVisible__VZ(stI1);
var stA0 = lcA12;var stI1 = invoker.getBoolean__ZLjava_lang_String_2(lcA11,"isSortable");
stA0.setIsSortable__VZ(stI1);
var stA0 = lcA3.getColumns__Ljava_util_List_2();
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,lcA12);
{ gt = 0; continue X_310; }
    }
    X_447: for (;;) { IF: if (gt <= 447) {

var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$2_val$view'].getConfiguration__Lio_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_2();
var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA4,"listItemCount");
stA0.setListItemCount__VLjava_lang_String_2(stA1);
var stA0 = invoker.getJSONObject__Lorg_json_JSONObject_2Ljava_lang_String_2(lcA4,"detailComponentDefinition");
var lcA9 = stA0;
var stA0 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA9,"component");
var lcA10 = stA0;
var stA0 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA9,"instanceId");
var lcA11 = stA0;
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_ComponentDef;
(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor['cons__V'].call(stA0);
var lcA12 = stA0;
invoker.setComponent__VLjava_lang_String_2(lcA12,lcA10);
invoker.setInstanceId__VLjava_lang_String_2(lcA12,lcA11);
lcA3.setDetailComponentDefinition__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2(lcA12);
var stA0 = invoker.getJSONObject__Lorg_json_JSONObject_2Ljava_lang_String_2(lcA4,"actionMenuComponentDefinition");
var lcA13 = stA0;
var stA0 = lcA3.getActionMenuComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA13,"component");
invoker.setComponent__VLjava_lang_String_2(stA0,stA1);
var stA0 = lcA3.getActionMenuComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA13,"instanceId");
invoker.setInstanceId__VLjava_lang_String_2(stA0,stA1);
var stA0 = invoker.getJSONObject__Lorg_json_JSONObject_2Ljava_lang_String_2(lcA4,"collectionComponentDefinition");
var lcA14 = stA0;
var stA0 = lcA3.getCollectionComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA14,"component");
invoker.setComponent__VLjava_lang_String_2(stA0,stA1);
var stA0 = lcA3.getCollectionComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA14,"instanceId");
invoker.setInstanceId__VLjava_lang_String_2(stA0,stA1);
var stA0 = invoker.getJSONObject__Lorg_json_JSONObject_2Ljava_lang_String_2(lcA4,"searchBoxComponentDefinition");
var lcA15 = stA0;
var stA0 = lcA3.getSearchBoxComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA15,"component");
invoker.setComponent__VLjava_lang_String_2(stA0,stA1);
var stA0 = lcA3.getSearchBoxComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA15,"instanceId");
invoker.setInstanceId__VLjava_lang_String_2(stA0,stA1);
    }
    X_631: for (;;) { IF: if (gt <= 631) {
return;

    }
}}}}}}}}}}}}
};
c['handle__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$2fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$2', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_CallBack(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$2fillInstOf });
    io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$2fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/genericlist/GenericListComponent$2';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_CallBack(false).constructor.$class
    ]; };
    CLS.$class.access = 65584;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_MapBuilder;
    var refs_io_cloudoffice_platform_cockpit_api_UtilValidate;
    var refs_io_cloudoffice_platform_cockpit_genericlist_FilterType;
    var refs_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn;
    var refs_io_cloudoffice_platform_cockpit_api_ComponentDef;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$2_val$view'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$2 = io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$2;

vm.io_cloudoffice_platform_cockpit_api_ComponentDef = link('io/cloudoffice/platform/cockpit/api/ComponentDef', function(f) { vm.io_cloudoffice_platform_cockpit_api_ComponentDef =  f; });
vm.java_util_HashMap = link('java/util/HashMap', function(f) { vm.java_util_HashMap =  f; });
vm.java_util_ArrayList = link('java/util/ArrayList', function(f) { vm.java_util_ArrayList =  f; });
vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration = link('io/cloudoffice/platform/cockpit/api/ComponentConfiguration', function(f) { vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration =  f; });
vm.io_cloudoffice_platform_cockpit_api_Components = link('io/cloudoffice/platform/cockpit/api/Components', function(f) { vm.io_cloudoffice_platform_cockpit_api_Components =  f; });
vm.io_cloudoffice_platform_cockpit_api_Event = link('io/cloudoffice/platform/cockpit/api/Event', function(f) { vm.io_cloudoffice_platform_cockpit_api_Event =  f; });
vm.io_cloudoffice_platform_cockpit_api_MapBuilder = link('io/cloudoffice/platform/cockpit/api/MapBuilder', function(f) { vm.io_cloudoffice_platform_cockpit_api_MapBuilder =  f; });

function io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$VirtualItemListAsyncRequestCallback() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$VirtualItemListAsyncRequestCallback;
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

    m.access = 1;
    m.cls = CLS;
    m = c.process__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = invoker.getRequest__Lio_cloudoffice_platform_cockpit_api_AsyncRequest_2(lcA0);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$VirtualItemListAsyncRequest']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.genericlist.GenericListComponent$VirtualItemListAsyncRequest');
var lcA2 = stA0;
var stA0 = invoker.getView__Ljava_lang_Object_2(lcA2);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_genericlist_GenericlistView']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.genericlist.GenericlistView');
var lcA3 = stA0;
if ((null) === (lcA1)) { gt = 27; break IF; }
c.processCallbackData__VLio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2Ljava_lang_String_2.call(lcA0, lcA3, lcA1);
    }
    X_27: for (;;) { IF: if (gt <= 27) {

c.controlDisplayLoader__VLio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2.call(lcA0, lcA3);
return;

    }
}}
};
c['process__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.processCallbackData__VLio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2Ljava_lang_String_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['query__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Z'](lcA2, 1);
var stA0 = invoker.getArray__Ljava_util_List_2(stA0);
var lcA3 = stA0;
var stI0 = invoker.size__I(lcA3);
if ((stI0) <= 0) { gt = 24; break IF; }
c.processResults__VLio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2Ljava_util_List_2.call(lcA0, lcA1, lcA3);
    }
    X_24: for (;;) { IF: if (gt <= 24) {
return;

    }
}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.controlDisplayLoader__VLio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = lcA1.getLoader__Lio_cloudoffice_platform_cockpit_api_HelperItemView_2();
invoker.setActive__VZ(stA0,0);
var stA0 = lcA1.getRows__Ljava_util_List_2();
var stI0 = invoker.size__I(stA0);
if ((stI0) <= 0) { gt = 28; break IF; }
lcA1.setListnotavailablemessagedisplay__VZ(0);
{ gt = 33; break IF; }
    }
    X_28: for (;;) { IF: if (gt <= 28) {

lcA1.setListnotavailablemessagedisplay__VZ(1);
    }
    X_33: for (;;) { IF: if (gt <= 33) {
return;

    }
}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.processResults__VLio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2Ljava_util_List_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA2);
var lcA3 = stA0;
    }
    X_7: for (;;) { IF: if (gt <= 7) {

var stI0 = invoker.hasNext__Z(lcA3);
if ((stI0) == 0) { gt = 115; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA3);
if (stA0 !== null && !stA0['$instOf_java_util_Map']) vm.java_lang_Class(false).castEx(stA0, 'java.util.Map');
var lcA4 = stA0;
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor;
(refs_io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor || (refs_io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor = vm.io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor(false))).constructor['cons__V'].call(stA0);
var stA1 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['query__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_util_Map_2'](lcA4);
var stA1 = invoker.toJSON__Ljava_lang_String_2(stA1);
var stA2 = new io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo;
(refs_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo || (refs_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo = io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo(false))).constructor.cons__V.call(stA2);
var stA0 = invoker.getObject__Ljava_lang_Object_2Ljava_lang_String_2Ljava_lang_Object_2(stA0,stA1, stA2);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.genericlist.VirtualItemInfo');
var lcA5 = stA0;
var stA0 = lcA5.getItemId__Ljava_lang_String_2();
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](stA0);
if ((stI0) == 0) { gt = 112; break IF; }
var stA0 = lcA5.getItemId__Ljava_lang_String_2();
var stI0 = invoker.equalsIgnoreCase__ZLjava_lang_String_2(stA0,"-10");
if ((stI0) == 0) { gt = 91; break IF; }
c.processInfo__VLio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2Lio_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_2.call(lcA0, lcA1, lcA5);
{ gt = 112; break IF; }
    }
    X_91: for (;;) { IF: if (gt <= 91) {

var stA0 = c.getRowWithConfiguredColumns__Lio_cloudoffice_platform_cockpit_genericlist_GenericListRow_2Lio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2Lio_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_2.call(lcA0, lcA1, lcA5);
var lcA6 = stA0;
var stA0 = lcA1.getRows__Ljava_util_List_2();
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,lcA6);
    }
    X_112: for (;;) { IF: if (gt <= 112) {
{ gt = 0; continue X_7; }
    }
    X_115: for (;;) { IF: if (gt <= 115) {
return;

    }
}}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.getRowWithConfiguredColumns__Lio_cloudoffice_platform_cockpit_genericlist_GenericListRow_2Lio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2Lio_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
var stA0 = new io_cloudoffice_platform_cockpit_genericlist_GenericListRow;
(refs_io_cloudoffice_platform_cockpit_genericlist_GenericListRow || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListRow = io_cloudoffice_platform_cockpit_genericlist_GenericListRow(false))).constructor.cons__V.call(stA0);
var lcA3 = stA0;
var stA0 = lcA3;var stA1 = lcA2.getItemId__Ljava_lang_String_2();
stA0.setItemId__VLjava_lang_String_2(stA1);
var stA0 = lcA3;var stA1 = lcA2.getItemType__Ljava_lang_String_2();
stA0.setItemType__VLjava_lang_String_2(stA1);
var stA0 = lcA3;var stA1 = lcA2.getItemName__Ljava_lang_String_2();
stA0.setItemName__VLjava_lang_String_2(stA1);
var stA0 = lcA3;var stA1 = lcA2.getThumbnailURL__Ljava_lang_String_2();
stA0.setThumbnail__VLjava_lang_String_2(stA1);
var stA0 = lcA3;var stA1 = lcA2.getAvatar__Ljava_lang_String_2();
stA0.setAvatar__VLjava_lang_String_2(stA1);
var stA0 = lcA3;var stI1 = lcA2.isHasOwnerPermission__Z();
stA0.setHasOwnerPermission__VZ(stI1);
var stA0 = lcA3;var stI1 = lcA2.isHasAdminPermission__Z();
stA0.setHasAdminPermission__VZ(stI1);
var stA0 = lcA3;var stI1 = lcA2.isHasWritePermission__Z();
stA0.setHasWritePermission__VZ(stI1);
var stA0 = lcA3;var stI1 = lcA2.isHasReadPermission__Z();
stA0.setHasReadPermission__VZ(stI1);
var stA0 = lcA1.getConfiguredColumns__Ljava_util_List_2();
var lcA4 = stA0;
var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA4);
var lcA5 = stA0;
    }
    X_95: for (;;) { IF: if (gt <= 95) {

var stI0 = invoker.hasNext__Z(lcA5);
if ((stI0) == 0) { gt = 644; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA5);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.genericlist.GenericListColumn');
var lcA6 = stA0;
var stA0 = lcA6.getColumnId__Ljava_lang_String_2();
var lcA7 = stA0;
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_Object_2'](lcA6);
if ((stI0) == 0) { gt = 641; break IF; }
var stA0 = new io_cloudoffice_platform_cockpit_genericlist_GenericListColumn;
(refs_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn = io_cloudoffice_platform_cockpit_genericlist_GenericListColumn(false))).constructor.cons__V.call(stA0);
var lcA8 = stA0;
var stI0 = invoker.equalsIgnoreCase__ZLjava_lang_String_2(lcA7,(refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent = io_cloudoffice_platform_cockpit_genericlist_GenericListComponent(false)))._COLUMN_NAME());
if ((stI0) == 0) { gt = 228; break IF; }
var stA0 = lcA8;var stA1 = lcA2.getItemName__Ljava_lang_String_2();
stA0.setItemText__VLjava_lang_String_2(stA1);
var stA0 = lcA8;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,(refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent = io_cloudoffice_platform_cockpit_genericlist_GenericListComponent(false)))._COLUMN_CSS_CLASS());
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1," ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,(refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent = io_cloudoffice_platform_cockpit_genericlist_GenericListComponent(false)))._COLUMN_NAME());
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
stA0.setColumnClass__VLjava_lang_String_2(stA1);
var stA0 = lcA8;var stA1 = lcA2.getItemType__Ljava_lang_String_2();
var stA2 = lcA2.getExtension__Ljava_lang_String_2();
var stA1 = (refs_io_cloudoffice_platform_cockpit_api_IconModel || (refs_io_cloudoffice_platform_cockpit_api_IconModel = vm.io_cloudoffice_platform_cockpit_api_IconModel(false)))['getItemTypeIconClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2'](stA1, stA2);
stA0.setItemIconClass__VLjava_lang_String_2(stA1);
var stA0 = lcA8;var stA1 = lcA2.getItemType__Ljava_lang_String_2();
var stA2 = lcA2.getExtension__Ljava_lang_String_2();
var stA1 = (refs_io_cloudoffice_platform_cockpit_api_IconModel || (refs_io_cloudoffice_platform_cockpit_api_IconModel = vm.io_cloudoffice_platform_cockpit_api_IconModel(false)))['getItemTypeIconColor__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2'](stA1, stA2);
stA0.setItemIconColor__VLjava_lang_String_2(stA1);
{ gt = 559; break IF; }
    }
    X_228: for (;;) { IF: if (gt <= 228) {

var stI0 = invoker.equalsIgnoreCase__ZLjava_lang_String_2(lcA7,(refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent = io_cloudoffice_platform_cockpit_genericlist_GenericListComponent(false)))._COLUMN_CREATOR());
if ((stI0) == 0) { gt = 291; break IF; }
var stA0 = lcA8;var stA1 = lcA2.getCreatedBy__Ljava_lang_String_2();
stA0.setItemText__VLjava_lang_String_2(stA1);
var stA0 = lcA8;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,(refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent = io_cloudoffice_platform_cockpit_genericlist_GenericListComponent(false)))._COLUMN_CSS_CLASS());
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1," ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,(refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent = io_cloudoffice_platform_cockpit_genericlist_GenericListComponent(false)))._COLUMN_CREATOR());
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
stA0.setColumnClass__VLjava_lang_String_2(stA1);
lcA8.setItemIconClass__VLjava_lang_String_2("fa fa-user");
{ gt = 559; break IF; }
    }
    X_291: for (;;) { IF: if (gt <= 291) {

var stI0 = invoker.equalsIgnoreCase__ZLjava_lang_String_2(lcA7,(refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent = io_cloudoffice_platform_cockpit_genericlist_GenericListComponent(false)))._COLUMN_FILE_VIESION());
if ((stI0) == 0) { gt = 354; break IF; }
var stA0 = lcA8;var stA1 = lcA2.getVersion__Ljava_lang_String_2();
stA0.setItemText__VLjava_lang_String_2(stA1);
var stA0 = lcA8;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,(refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent = io_cloudoffice_platform_cockpit_genericlist_GenericListComponent(false)))._COLUMN_CSS_CLASS());
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1," ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,(refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent = io_cloudoffice_platform_cockpit_genericlist_GenericListComponent(false)))._COLUMN_FILE_VIESION());
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
stA0.setColumnClass__VLjava_lang_String_2(stA1);
lcA8.setItemIconClass__VLjava_lang_String_2("fa fa-vimeo");
{ gt = 559; break IF; }
    }
    X_354: for (;;) { IF: if (gt <= 354) {

var stI0 = invoker.equalsIgnoreCase__ZLjava_lang_String_2(lcA7,(refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent = io_cloudoffice_platform_cockpit_genericlist_GenericListComponent(false)))._COLUMN_FILE_SIZE());
if ((stI0) == 0) { gt = 417; break IF; }
var stA0 = lcA8;var stA1 = lcA2.getSizeToDisplay__Ljava_lang_String_2();
stA0.setItemText__VLjava_lang_String_2(stA1);
var stA0 = lcA8;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,(refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent = io_cloudoffice_platform_cockpit_genericlist_GenericListComponent(false)))._COLUMN_CSS_CLASS());
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1," ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,(refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent = io_cloudoffice_platform_cockpit_genericlist_GenericListComponent(false)))._COLUMN_FILE_SIZE());
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
stA0.setColumnClass__VLjava_lang_String_2(stA1);
lcA8.setItemIconClass__VLjava_lang_String_2("fa fa-cube");
{ gt = 559; break IF; }
    }
    X_417: for (;;) { IF: if (gt <= 417) {

var stI0 = invoker.equalsIgnoreCase__ZLjava_lang_String_2(lcA7,(refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent = io_cloudoffice_platform_cockpit_genericlist_GenericListComponent(false)))._COLUMN_EMAIL());
if ((stI0) == 0) { gt = 480; break IF; }
var stA0 = lcA8;var stA1 = lcA2.getEmailAddress__Ljava_lang_String_2();
stA0.setItemText__VLjava_lang_String_2(stA1);
var stA0 = lcA8;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,(refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent = io_cloudoffice_platform_cockpit_genericlist_GenericListComponent(false)))._COLUMN_CSS_CLASS());
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1," ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,(refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent = io_cloudoffice_platform_cockpit_genericlist_GenericListComponent(false)))._COLUMN_EMAIL());
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
stA0.setColumnClass__VLjava_lang_String_2(stA1);
lcA8.setItemIconClass__VLjava_lang_String_2("fa fa-envelope");
{ gt = 559; break IF; }
    }
    X_480: for (;;) { IF: if (gt <= 480) {

var stI0 = invoker.equalsIgnoreCase__ZLjava_lang_String_2(lcA7,(refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent = io_cloudoffice_platform_cockpit_genericlist_GenericListComponent(false)))._COLUMN_PHONE());
if ((stI0) == 0) { gt = 559; break IF; }
var stA0 = lcA8;var stA1 = lcA2.getPersMobile__Ljava_lang_String_2();
stA0.setItemText__VLjava_lang_String_2(stA1);
var stA0 = lcA2.getPersMobile__Ljava_lang_String_2();
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isEmpty__ZLjava_lang_String_2'](stA0);
if ((stI0) == 0) { gt = 519; break IF; }
var stA0 = lcA8;var stA1 = lcA2.getPersPhone__Ljava_lang_String_2();
stA0.setItemText__VLjava_lang_String_2(stA1);
    }
    X_519: for (;;) { IF: if (gt <= 519) {

var stA0 = lcA8;var stA1 = new vm.java_lang_StringBuilder;
(refs_java_lang_StringBuilder || (refs_java_lang_StringBuilder = vm.java_lang_StringBuilder(false))).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,(refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent = io_cloudoffice_platform_cockpit_genericlist_GenericListComponent(false)))._COLUMN_CSS_CLASS());
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1," ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,(refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent = io_cloudoffice_platform_cockpit_genericlist_GenericListComponent(false)))._COLUMN_PHONE());
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
stA0.setColumnClass__VLjava_lang_String_2(stA1);
lcA8.setItemIconClass__VLjava_lang_String_2("fa fa-phone");
    }
    X_559: for (;;) { IF: if (gt <= 559) {

var stA0 = lcA8;var stA1 = lcA6.getColumnId__Ljava_lang_String_2();
stA0.setColumnId__VLjava_lang_String_2(stA1);
var stA0 = lcA8;var stA1 = lcA6.getColumnHeader__Ljava_lang_String_2();
stA0.setColumnHeader__VLjava_lang_String_2(stA1);
var stA0 = lcA8;var stI1 = lcA6.getColumnIndex__I();
stA0.setColumnIndex__VI(stI1);
var stA0 = lcA8;var stA1 = lcA6.getColumnPosition__Ljava_lang_String_2();
stA0.setColumnPosition__VLjava_lang_String_2(stA1);
var stA0 = lcA8;var stA1 = lcA6.getColumnWidth__Ljava_lang_String_2();
stA0.setColumnWidth__VLjava_lang_String_2(stA1);
var stA0 = lcA8;var stI1 = lcA6.isIsVisible__Z();
stA0.setIsVisible__VZ(stI1);
var stA0 = lcA8;var stI1 = lcA6.isIsSortable__Z();
stA0.setIsSortable__VZ(stI1);
var stA0 = lcA3.getColumns__Ljava_util_List_2();
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,lcA8);
    }
    X_641: for (;;) { IF: if (gt <= 641) {
{ gt = 0; continue X_95; }
    }
    X_644: for (;;) { IF: if (gt <= 644) {

return lcA3;

    }
}}}}}}}}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.processInfo__VLio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2Lio_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = lcA2.isHasMore__Z();
var lcI3 = stI0;
lcA1.setHasMoreItemAvailable__VZ(lcI3);
var lcI4 = 1;
var stA0 = lcA1.getConfiguration__Lio_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_2();
var stA0 = stA0.getListItemCount__Ljava_lang_String_2();
var lcA5 = stA0;
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](lcA5);
if ((stI0) == 0) { gt = 40; break IF; }
var stA0 = (refs_java_lang_Integer || (refs_java_lang_Integer = vm.java_lang_Integer(false)))['valueOf__Ljava_lang_Integer_2Ljava_lang_String_2'](lcA5);
var stI0 = invoker.intValue__I(stA0);
var lcI4 = stI0;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

if ((lcI3) == 0) { gt = 58; break IF; }
var stA0 = lcA1;var stI1 = lcA1.getPageNumber__I();
stA0.setCurrentItemCount__VI(__mul32(stI1,lcI4));
{ gt = 66; break IF; }
    }
    X_58: for (;;) { IF: if (gt <= 58) {

var stA0 = lcA1;var stI1 = lcA2.getTotalCount__I();
stA0.setCurrentItemCount__VI(stI1);
    }
    X_66: for (;;) { IF: if (gt <= 66) {

var stA0 = lcA1;var stI1 = lcA2.getTotalCount__I();
stA0.setTotalItems__VI(stI1);
return;

    }
}}}}
};
    m.access = 2;
    m.cls = CLS;    __mul32 = function(x, y) {
        return (((x * (y >> 16)) << 16) + x * (y & 0xFFFF)) | 0;
    };

    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$VirtualItemListAsyncRequestCallbackfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$VirtualItemListAsyncRequestCallback', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$VirtualItemListAsyncRequestCallbackfillInstOf });
    io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$VirtualItemListAsyncRequestCallbackfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/genericlist/GenericListComponent$VirtualItemListAsyncRequestCallback';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 33;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_ServerCallback;
    var refs_io_cloudoffice_platform_cockpit_api_MapBuilder;
    var refs_io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor;
    var refs_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo;
    var refs_io_cloudoffice_platform_cockpit_api_UtilValidate;
    var refs_io_cloudoffice_platform_cockpit_genericlist_GenericListRow;
    var refs_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn;
    var refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent;
    var refs_java_lang_StringBuilder;
    var refs_io_cloudoffice_platform_cockpit_api_IconModel;
    var refs_java_lang_Integer;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$VirtualItemListAsyncRequestCallback = registerClass(exports,'io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$VirtualItemListAsyncRequestCallback',io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$VirtualItemListAsyncRequestCallback);

vm.io_cloudoffice_platform_cockpit_api_IconModel = link('io/cloudoffice/platform/cockpit/api/IconModel', function(f) { vm.io_cloudoffice_platform_cockpit_api_IconModel =  f; });

function io_cloudoffice_platform_cockpit_genericlist_GenericListRow() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_genericlist_GenericListRow;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_TYPE'] = null;
  m = c._TYPE = function (v) {  if (arguments.length == 1) CLS['fld_TYPE'] = v; return CLS['fld_TYPE']; };
  m = c._proto = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_proto'] = v; return this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_proto']; };
  m = c._prop_index = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_index'] = v; return this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_index']; };
  m = c._prop_itemId = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_itemId'] = v; return this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_itemId']; };
  m = c._prop_itemName = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_itemName'] = v; return this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_itemName']; };
  m = c._prop_itemType = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_itemType'] = v; return this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_itemType']; };
  m = c._prop_thumbnail = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_thumbnail'] = v; return this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_thumbnail']; };
  m = c._prop_avatar = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_avatar'] = v; return this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_avatar']; };
  m = c._prop_isSelected = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_isSelected'] = v; return this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_isSelected']; };
  m = c._prop_columns = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_columns'] = v; return this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_columns']; };
  m = c._prop_hasOwnerPermission = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_hasOwnerPermission'] = v; return this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_hasOwnerPermission']; };
  m = c._prop_hasAdminPermission = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_hasAdminPermission'] = v; return this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_hasAdminPermission']; };
  m = c._prop_hasWritePermission = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_hasWritePermission'] = v; return this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_hasWritePermission']; };
  m = c._prop_hasReadPermission = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_hasReadPermission'] = v; return this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_hasReadPermission']; };
    m = c.modelFor__Ljava_lang_Class_2 = function() {
return (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$GenericListRowManager || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$GenericListRowManager = io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$GenericListRowManager(false))).constructor.$class;

};
    m.access = 10;
    m.cls = CLS;
    m = c.getIndex__I = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_proto'],"index");
return lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_index'];

};
c['getIndex__I'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setIndex__VI = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_proto']);
var stA0 = (refs_java_lang_Integer || (refs_java_lang_Integer = vm.java_lang_Integer(false)))['valueOf__Ljava_lang_Integer_2I'](lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_index']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Integer || (refs_java_lang_Integer = vm.java_lang_Integer(false)))['valueOf__Ljava_lang_Integer_2I'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_index'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_proto'];var stA1 = "index";var stA2 = lcA2;var stA3 = (refs_java_lang_Integer || (refs_java_lang_Integer = vm.java_lang_Integer(false)))['valueOf__Ljava_lang_Integer_2I'](lcI1);
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2, stA3);
return;

    }
}}
};
c['setIndex__VI'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getItemId__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_proto'],"itemId");
return lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_itemId'];

};
c['getItemId__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setItemId__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_itemId'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_itemId'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_proto'],"itemId", lcA2, lcA1);
return;

    }
}}
};
c['setItemId__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getItemName__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_proto'],"itemName");
return lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_itemName'];

};
c['getItemName__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setItemName__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_itemName'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_itemName'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_proto'],"itemName", lcA2, lcA1);
return;

    }
}}
};
c['setItemName__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getItemType__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_proto'],"itemType");
return lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_itemType'];

};
c['getItemType__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setItemType__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_itemType'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_itemType'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_proto'],"itemType", lcA2, lcA1);
return;

    }
}}
};
c['setItemType__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getThumbnail__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_proto'],"thumbnail");
return lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_thumbnail'];

};
c['getThumbnail__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setThumbnail__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_thumbnail'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_thumbnail'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_proto'],"thumbnail", lcA2, lcA1);
return;

    }
}}
};
c['setThumbnail__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getAvatar__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_proto'],"avatar");
return lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_avatar'];

};
c['getAvatar__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setAvatar__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_avatar'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_avatar'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_proto'],"avatar", lcA2, lcA1);
return;

    }
}}
};
c['setAvatar__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isIsSelected__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_proto'],"isSelected");
return lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_isSelected'];

};
c['isIsSelected__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setIsSelected__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_isSelected']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_isSelected'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_proto'];var stA1 = "isSelected";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2, stA3);
return;

    }
}}
};
c['setIsSelected__VZ'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getColumns__Ljava_util_List_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_proto'],"columns");
return lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_columns'];

};
c['getColumns__Ljava_util_List_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isHasOwnerPermission__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_proto'],"hasOwnerPermission");
return lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_hasOwnerPermission'];

};
c['isHasOwnerPermission__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setHasOwnerPermission__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_hasOwnerPermission']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_hasOwnerPermission'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_proto'];var stA1 = "hasOwnerPermission";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
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
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_proto'],"hasAdminPermission");
return lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_hasAdminPermission'];

};
c['isHasAdminPermission__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setHasAdminPermission__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_hasAdminPermission']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_hasAdminPermission'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_proto'];var stA1 = "hasAdminPermission";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
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
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_proto'],"hasWritePermission");
return lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_hasWritePermission'];

};
c['isHasWritePermission__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setHasWritePermission__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_hasWritePermission']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_hasWritePermission'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_proto'];var stA1 = "hasWritePermission";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
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
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_proto'],"hasReadPermission");
return lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_hasReadPermission'];

};
c['isHasReadPermission__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setHasReadPermission__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_hasReadPermission']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_hasReadPermission'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_proto'];var stA1 = "hasReadPermission";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
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
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_proto'] = stA1;
var stA0 = lcA0;var stA1 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_proto'];var stA2 = "columns";var stI3 = -1;var stA4 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, 0);
var stA1 = invoker.createList__Ljava_util_List_2Ljava_lang_String_2I_3Ljava_lang_String_2(stA1,stA2, stI3, stA4);
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_columns'] = stA1;
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
    m = CLS.cons__VILjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2ZZZZZ_3Lio_cloudoffice_platform_cockpit_genericlist_GenericListColumn_2 = function(lcI1, lcA2, lcA3, lcA4, lcA5, lcA6, lcI7, lcI8, lcI9, lcI10, lcI11, lcA12) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = (refs_net_java_html_BrwsrCtx || (refs_net_java_html_BrwsrCtx = vm.net_java_html_BrwsrCtx(false)))['findDefault__Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'](c.constructor.$class);
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, stA1);
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_index'] = lcI1;
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_itemId'] = lcA2;
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_itemName'] = lcA3;
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_itemType'] = lcA4;
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_thumbnail'] = lcA5;
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_avatar'] = lcA6;
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_isSelected'] = lcI7;
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_hasOwnerPermission'] = lcI8;
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_hasAdminPermission'] = lcI9;
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_hasWritePermission'] = lcI10;
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_hasReadPermission'] = lcI11;
invoker.initTo__VLjava_util_Collection_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_proto'],lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_columns'], lcA12);
return;

};
CLS['cons__VILjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2ZZZZZ_3Lio_cloudoffice_platform_cockpit_genericlist_GenericListColumn_2'] = m;

    m.access = 129;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, (12));
var lcA3 = stA0;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_proto'];var stA1 = lcA2;var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, (12));
Array.at(stA2, 0, "index");
Array.at(stA2, 1, "itemId");
Array.at(stA2, 2, "itemName");
Array.at(stA2, 3, "itemType");
Array.at(stA2, 4, "thumbnail");
Array.at(stA2, 5, "avatar");
Array.at(stA2, (6), "isSelected");
Array.at(stA2, (7), "columns");
Array.at(stA2, (8), "hasOwnerPermission");
Array.at(stA2, (9), "hasAdminPermission");
Array.at(stA2, (10), "hasWritePermission");
Array.at(stA2, (11), "hasReadPermission");
invoker.extract__VLjava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Object_2(stA0,stA1, stA2, lcA3);
var stA0 = lcA0;if (((lcA3[0] || Array.at(lcA3, 0))) !== null) { gt = 102; break IF; }
var stI1 = 0;{ gt = 114; break IF; }
    }
    X_102: for (;;) { IF: if (gt <= 102) {

var stA1 = invoker.numberValue__Ljava_lang_Number_2Ljava_lang_Object_2(c._TYPE(),(lcA3[0] || Array.at(lcA3, 0)));
var stI1 = invoker.intValue__I(stA1);
    }
    X_114: for (;;) { IF: if (gt <= 114) {
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_index'] = stI1;
if ((lcA3[1] || Array.at(lcA3, 1)) !== null && !(lcA3[1] || Array.at(lcA3, 1))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[1] || Array.at(lcA3, 1)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_itemId'] = (lcA3[1] || Array.at(lcA3, 1));
if ((lcA3[2] || Array.at(lcA3, 2)) !== null && !(lcA3[2] || Array.at(lcA3, 2))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[2] || Array.at(lcA3, 2)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_itemName'] = (lcA3[2] || Array.at(lcA3, 2));
if ((lcA3[3] || Array.at(lcA3, 3)) !== null && !(lcA3[3] || Array.at(lcA3, 3))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[3] || Array.at(lcA3, 3)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_itemType'] = (lcA3[3] || Array.at(lcA3, 3));
if ((lcA3[4] || Array.at(lcA3, 4)) !== null && !(lcA3[4] || Array.at(lcA3, 4))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[4] || Array.at(lcA3, 4)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_thumbnail'] = (lcA3[4] || Array.at(lcA3, 4));
if ((lcA3[5] || Array.at(lcA3, 5)) !== null && !(lcA3[5] || Array.at(lcA3, 5))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[5] || Array.at(lcA3, 5)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_avatar'] = (lcA3[5] || Array.at(lcA3, 5));
var stA0 = lcA0;if (((lcA3[(6)] || Array.at(lcA3, (6)))) !== null) { gt = 179; break IF; }
var stI1 = 0;{ gt = 192; break IF; }
    }
    X_179: for (;;) { IF: if (gt <= 179) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[(6)] || Array.at(lcA3, (6))));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_192: for (;;) { IF: if (gt <= 192) {
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_isSelected'] = stI1;
var stA0 = c.useAsArray___3Ljava_lang_Object_2Ljava_lang_Object_2((lcA3[(7)] || Array.at(lcA3, (7))));
var lcA4 = stA0;
var lcI5 = (lcA4).length;
var lcI6 = 0;
    }
    X_212: for (;;) { IF: if (gt <= 212) {

if ((lcI6) >= (lcI5)) { gt = 253; break IF; }
var lcA7 = (lcA4[lcI6] || Array.at(lcA4, lcI6));
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_columns'];var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_proto'],(refs_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn = io_cloudoffice_platform_cockpit_genericlist_GenericListColumn(false))).constructor.$class, lcA7);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,stA1);
lcI6++;
{ gt = 0; continue X_212; }
    }
    X_253: for (;;) { IF: if (gt <= 253) {

var stA0 = lcA0;if (((lcA3[(8)] || Array.at(lcA3, (8)))) !== null) { gt = 265; break IF; }
var stI1 = 0;{ gt = 278; break IF; }
    }
    X_265: for (;;) { IF: if (gt <= 265) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[(8)] || Array.at(lcA3, (8))));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_278: for (;;) { IF: if (gt <= 278) {
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_hasOwnerPermission'] = stI1;
var stA0 = lcA0;if (((lcA3[(9)] || Array.at(lcA3, (9)))) !== null) { gt = 293; break IF; }
var stI1 = 0;{ gt = 306; break IF; }
    }
    X_293: for (;;) { IF: if (gt <= 293) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[(9)] || Array.at(lcA3, (9))));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_306: for (;;) { IF: if (gt <= 306) {
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_hasAdminPermission'] = stI1;
var stA0 = lcA0;if (((lcA3[(10)] || Array.at(lcA3, (10)))) !== null) { gt = 321; break IF; }
var stI1 = 0;{ gt = 334; break IF; }
    }
    X_321: for (;;) { IF: if (gt <= 321) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[(10)] || Array.at(lcA3, (10))));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_334: for (;;) { IF: if (gt <= 334) {
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_hasWritePermission'] = stI1;
var stA0 = lcA0;if (((lcA3[(11)] || Array.at(lcA3, (11)))) !== null) { gt = 349; break IF; }
var stI1 = 0;{ gt = 362; break IF; }
    }
    X_349: for (;;) { IF: if (gt <= 349) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[(11)] || Array.at(lcA3, (11))));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_362: for (;;) { IF: if (gt <= 362) {
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_hasReadPermission'] = stI1;
return;

    }
}}}}}}}}}}}}}}}
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
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"index");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stI2 = lcA0.getIndex__I();
var stA2 = (refs_java_lang_Integer || (refs_java_lang_Integer = vm.java_lang_Integer(false)))['valueOf__Ljava_lang_Integer_2I'](stI2);
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
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"itemType");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getItemType__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"thumbnail");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getThumbnail__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"avatar");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getAvatar__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"isSelected");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stI2 = lcA0.isIsSelected__Z();
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI2);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"columns");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_columns']);
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
    m = c.clone__Lio_cloudoffice_platform_cockpit_genericlist_GenericListRow_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_proto']);
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_genericlist_GenericListRow_2Lnet_java_html_BrwsrCtx_2.call(stA0, stA1);
return stA0;

};
c['clone__Lio_cloudoffice_platform_cockpit_genericlist_GenericListRow_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Lio_cloudoffice_platform_cockpit_genericlist_GenericListRow_2Lnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = new io_cloudoffice_platform_cockpit_genericlist_GenericListRow;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, lcA1);
var lcA2 = stA0;
var stA0 = lcA2;var stI1 = lcA0.getIndex__I();
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_index'] = stI1;
var stA0 = lcA2;var stA1 = lcA0.getItemId__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_itemId'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getItemName__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_itemName'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getItemType__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_itemType'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getThumbnail__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_thumbnail'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getAvatar__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_avatar'] = stA1;
var stA0 = lcA2;var stI1 = lcA0.isIsSelected__Z();
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_isSelected'] = stI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_proto'];var stA1 = lcA2.getColumns__Ljava_util_List_2();
invoker.cloneList__VLjava_util_Collection_2Lnet_java_html_BrwsrCtx_2Ljava_util_Collection_2(stA0,stA1, lcA1, lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_columns']);
var stA0 = lcA2;var stI1 = lcA0.isHasOwnerPermission__Z();
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_hasOwnerPermission'] = stI1;
var stA0 = lcA2;var stI1 = lcA0.isHasAdminPermission__Z();
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_hasAdminPermission'] = stI1;
var stA0 = lcA2;var stI1 = lcA0.isHasWritePermission__Z();
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_hasWritePermission'] = stI1;
var stA0 = lcA2;var stI1 = lcA0.isHasReadPermission__Z();
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_hasReadPermission'] = stI1;
return lcA2;

};
    m.access = 2;
    m.cls = CLS;
    m = c.applyBindings__Lio_cloudoffice_platform_cockpit_genericlist_GenericListRow_2 = function() {
  var  lcA0 = this;
invoker.applyBindings__V(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_proto']);
return lcA0;

};
c['applyBindings__Lio_cloudoffice_platform_cockpit_genericlist_GenericListRow_2'] = m;

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

var stI0 = lcA1 != null && lcA1['$instOf_io_cloudoffice_platform_cockpit_genericlist_GenericListRow'] ? 1 : 0;
if ((stI0) != 0) { gt = 16; break IF; }
return 0;
    }
    X_16: for (;;) { IF: if (gt <= 16) {

if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_genericlist_GenericListRow']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.genericlist.GenericListRow');
var lcA2 = lcA1;
var stI0 = invoker.isSame__ZII(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_index'], lcA2['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_index']);
if ((stI0) != 0) { gt = 40; break IF; }
return 0;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_itemId'], lcA2['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_itemId']);
if ((stI0) != 0) { gt = 59; break IF; }
return 0;
    }
    X_59: for (;;) { IF: if (gt <= 59) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_itemName'], lcA2['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_itemName']);
if ((stI0) != 0) { gt = 78; break IF; }
return 0;
    }
    X_78: for (;;) { IF: if (gt <= 78) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_itemType'], lcA2['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_itemType']);
if ((stI0) != 0) { gt = 97; break IF; }
return 0;
    }
    X_97: for (;;) { IF: if (gt <= 97) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_thumbnail'], lcA2['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_thumbnail']);
if ((stI0) != 0) { gt = 116; break IF; }
return 0;
    }
    X_116: for (;;) { IF: if (gt <= 116) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_avatar'], lcA2['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_avatar']);
if ((stI0) != 0) { gt = 135; break IF; }
return 0;
    }
    X_135: for (;;) { IF: if (gt <= 135) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_isSelected']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_isSelected']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 160; break IF; }
return 0;
    }
    X_160: for (;;) { IF: if (gt <= 160) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_columns']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_columns']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 187; break IF; }
return 0;
    }
    X_187: for (;;) { IF: if (gt <= 187) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_hasOwnerPermission']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_hasOwnerPermission']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 212; break IF; }
return 0;
    }
    X_212: for (;;) { IF: if (gt <= 212) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_hasAdminPermission']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_hasAdminPermission']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 237; break IF; }
return 0;
    }
    X_237: for (;;) { IF: if (gt <= 237) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_hasWritePermission']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_hasWritePermission']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 262; break IF; }
return 0;
    }
    X_262: for (;;) { IF: if (gt <= 262) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_hasReadPermission']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_hasReadPermission']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 287; break IF; }
return 0;
    }
    X_287: for (;;) { IF: if (gt <= 287) {

return 1;

    }
}}}}}}}}}}}}}}}
};
c['equals__ZLjava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.hashCode__I = function() {
  var  lcA0 = this;
var stA0 = invoker.getName__Ljava_lang_String_2(c.constructor.$class);
var stI0 = invoker.hashCode__I(stA0);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Integer || (refs_java_lang_Integer = vm.java_lang_Integer(false)))['valueOf__Ljava_lang_Integer_2I'](lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_index']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_itemId'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_itemName'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_itemType'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_thumbnail'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_avatar'], lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_isSelected']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_columns']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_hasOwnerPermission']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_hasAdminPermission']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_hasWritePermission']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_hasReadPermission']);
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
var stA0 = lcA0.clone__Lio_cloudoffice_platform_cockpit_genericlist_GenericListRow_2();
return stA0;

};
c['clone__Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.access$100__Lio_cloudoffice_platform_cockpit_genericlist_GenericListRow$Html4JavaType_2 = function() {
return c._TYPE();

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_genericlist_GenericListRow_2 = function(lcA0) {
return lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_proto'];

};
    m.access = 4104;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_genericlist_GenericListRow$1_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2.call(lcA0, lcA1, lcA2);
return;

};
    m.access = 4096;
    m.cls = CLS;
    m = c.access$400__Lio_cloudoffice_platform_cockpit_genericlist_GenericListRow_2Lio_cloudoffice_platform_cockpit_genericlist_GenericListRow_2Lnet_java_html_BrwsrCtx_2 = function(lcA0, lcA1) {
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_genericlist_GenericListRow_2Lnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
return stA0;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new io_cloudoffice_platform_cockpit_genericlist_GenericListRow$Html4JavaType;
(refs_io_cloudoffice_platform_cockpit_genericlist_GenericListRow$Html4JavaType || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListRow$Html4JavaType = io_cloudoffice_platform_cockpit_genericlist_GenericListRow$Html4JavaType(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_genericlist_GenericListRow$1_2.call(stA0, null);
c._TYPE(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_genericlist_GenericListRowfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_genericlist_GenericListRow', { value : true });
      vm.java_lang_Cloneable(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_genericlist_GenericListRowfillInstOf });
    io_cloudoffice_platform_cockpit_genericlist_GenericListRowfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/genericlist/GenericListRow';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.java_lang_Cloneable(false).constructor.$class
    ]; };
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$GenericListRowManager;
    var refs_java_lang_Integer;
    var refs_java_lang_Boolean;
    var refs_net_java_html_BrwsrCtx;
    var refs_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn;
    var refs_java_lang_StringBuilder;
    var refs_io_cloudoffice_platform_cockpit_genericlist_GenericListRow$Html4JavaType;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_proto'] = null;
    this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_index'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_itemId'] = null;
    this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_itemName'] = null;
    this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_itemType'] = null;
    this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_thumbnail'] = null;
    this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_avatar'] = null;
    this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_isSelected'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_columns'] = null;
    this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_hasOwnerPermission'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_hasAdminPermission'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_hasWritePermission'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListRow_prop_hasReadPermission'] = 0;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_genericlist_GenericListRow = registerClass(exports,'io_cloudoffice_platform_cockpit_genericlist_GenericListRow',io_cloudoffice_platform_cockpit_genericlist_GenericListRow);


function io_cloudoffice_platform_cockpit_genericlist_GenericListRow$Html4JavaType() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_genericlist_GenericListRow$Html4JavaType;
  if (!CLS.$class) {
    var pp = vm.org_netbeans_html_json_spi_Proto$Type(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_org_netbeans_html_json_spi_Proto$Type || (refs_org_netbeans_html_json_spi_Proto$Type = vm.org_netbeans_html_json_spi_Proto$Type(false))).constructor['cons__VLjava_lang_Class_2Ljava_lang_Class_2II'].call(lcA0, (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListRow || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListRow = io_cloudoffice_platform_cockpit_genericlist_GenericListRow(false))).constructor.$class, (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$GenericListRowManager || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$GenericListRowManager = io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$GenericListRowManager(false))).constructor.$class, (12), 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"index", 0, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"itemId", 1, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"itemName", 2, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"itemType", 3, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"thumbnail", 4, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"avatar", 5, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"isSelected", (6), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"columns", (7), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"hasOwnerPermission", (8), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"hasAdminPermission", (9), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"hasWritePermission", (10), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"hasReadPermission", (11), 0, 0);
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.setValue__VLio_cloudoffice_platform_cockpit_genericlist_GenericListRow_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0:{ gt = 64; break IF; }
  case 1:{ gt = 84; break IF; }
  case 2:{ gt = 101; break IF; }
  case 3:{ gt = 118; break IF; }
  case 4:{ gt = 135; break IF; }
  case 5:{ gt = 152; break IF; }
  case 6:{ gt = 169; break IF; }
  case 7:{ gt = 189; break IF; }
  case 8:{ gt = 203; break IF; }
  case 9:{ gt = 223; break IF; }
  case 10:{ gt = 243; break IF; }
  case 11:{ gt = 263; break IF; }
  default: { gt = 283; break IF; }
}
    }
    X_64: for (;;) { IF: if (gt <= 64) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListRow || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListRow = io_cloudoffice_platform_cockpit_genericlist_GenericListRow(false))).access$100__Lio_cloudoffice_platform_cockpit_genericlist_GenericListRow$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Integer || (refs_java_lang_Integer = vm.java_lang_Integer(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Integer']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Integer');
var stI1 = invoker.intValue__I(stA1);
stA0.setIndex__VI(stI1);
return;
    }
    X_84: for (;;) { IF: if (gt <= 84) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListRow || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListRow = io_cloudoffice_platform_cockpit_genericlist_GenericListRow(false))).access$100__Lio_cloudoffice_platform_cockpit_genericlist_GenericListRow$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setItemId__VLjava_lang_String_2(stA1);
return;
    }
    X_101: for (;;) { IF: if (gt <= 101) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListRow || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListRow = io_cloudoffice_platform_cockpit_genericlist_GenericListRow(false))).access$100__Lio_cloudoffice_platform_cockpit_genericlist_GenericListRow$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setItemName__VLjava_lang_String_2(stA1);
return;
    }
    X_118: for (;;) { IF: if (gt <= 118) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListRow || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListRow = io_cloudoffice_platform_cockpit_genericlist_GenericListRow(false))).access$100__Lio_cloudoffice_platform_cockpit_genericlist_GenericListRow$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setItemType__VLjava_lang_String_2(stA1);
return;
    }
    X_135: for (;;) { IF: if (gt <= 135) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListRow || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListRow = io_cloudoffice_platform_cockpit_genericlist_GenericListRow(false))).access$100__Lio_cloudoffice_platform_cockpit_genericlist_GenericListRow$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setThumbnail__VLjava_lang_String_2(stA1);
return;
    }
    X_152: for (;;) { IF: if (gt <= 152) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListRow || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListRow = io_cloudoffice_platform_cockpit_genericlist_GenericListRow(false))).access$100__Lio_cloudoffice_platform_cockpit_genericlist_GenericListRow$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setAvatar__VLjava_lang_String_2(stA1);
return;
    }
    X_169: for (;;) { IF: if (gt <= 169) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListRow || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListRow = io_cloudoffice_platform_cockpit_genericlist_GenericListRow(false))).access$100__Lio_cloudoffice_platform_cockpit_genericlist_GenericListRow$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setIsSelected__VZ(stI1);
return;
    }
    X_189: for (;;) { IF: if (gt <= 189) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListRow || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListRow = io_cloudoffice_platform_cockpit_genericlist_GenericListRow(false))).access$100__Lio_cloudoffice_platform_cockpit_genericlist_GenericListRow$Html4JavaType_2();
var stA1 = lcA1.getColumns__Ljava_util_List_2();
invoker.replaceValue__VLjava_util_Collection_2Ljava_lang_Class_2Ljava_lang_Object_2(stA0,stA1, (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn = io_cloudoffice_platform_cockpit_genericlist_GenericListColumn(false))).constructor.$class, lcA3);
return;
    }
    X_203: for (;;) { IF: if (gt <= 203) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListRow || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListRow = io_cloudoffice_platform_cockpit_genericlist_GenericListRow(false))).access$100__Lio_cloudoffice_platform_cockpit_genericlist_GenericListRow$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setHasOwnerPermission__VZ(stI1);
return;
    }
    X_223: for (;;) { IF: if (gt <= 223) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListRow || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListRow = io_cloudoffice_platform_cockpit_genericlist_GenericListRow(false))).access$100__Lio_cloudoffice_platform_cockpit_genericlist_GenericListRow$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setHasAdminPermission__VZ(stI1);
return;
    }
    X_243: for (;;) { IF: if (gt <= 243) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListRow || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListRow = io_cloudoffice_platform_cockpit_genericlist_GenericListRow(false))).access$100__Lio_cloudoffice_platform_cockpit_genericlist_GenericListRow$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setHasWritePermission__VZ(stI1);
return;
    }
    X_263: for (;;) { IF: if (gt <= 263) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListRow || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListRow = io_cloudoffice_platform_cockpit_genericlist_GenericListRow(false))).access$100__Lio_cloudoffice_platform_cockpit_genericlist_GenericListRow$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setHasReadPermission__VZ(stI1);
return;
    }
    X_283: for (;;) { IF: if (gt <= 283) {
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

    }
}}}}}}}}}}}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_genericlist_GenericListRow_2I = function(lcA1, lcI2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0:{ gt = 64; break IF; }
  case 1:{ gt = 72; break IF; }
  case 2:{ gt = 77; break IF; }
  case 3:{ gt = 82; break IF; }
  case 4:{ gt = 87; break IF; }
  case 5:{ gt = 92; break IF; }
  case 6:{ gt = 97; break IF; }
  case 7:{ gt = 105; break IF; }
  case 8:{ gt = 110; break IF; }
  case 9:{ gt = 118; break IF; }
  case 10:{ gt = 126; break IF; }
  case 11:{ gt = 134; break IF; }
  default: { gt = 142; break IF; }
}
    }
    X_64: for (;;) { IF: if (gt <= 64) {

var stI0 = lcA1.getIndex__I();
var stA0 = (refs_java_lang_Integer || (refs_java_lang_Integer = vm.java_lang_Integer(false)))['valueOf__Ljava_lang_Integer_2I'](stI0);
return stA0;
    }
    X_72: for (;;) { IF: if (gt <= 72) {

var stA0 = lcA1.getItemId__Ljava_lang_String_2();
return stA0;
    }
    X_77: for (;;) { IF: if (gt <= 77) {

var stA0 = lcA1.getItemName__Ljava_lang_String_2();
return stA0;
    }
    X_82: for (;;) { IF: if (gt <= 82) {

var stA0 = lcA1.getItemType__Ljava_lang_String_2();
return stA0;
    }
    X_87: for (;;) { IF: if (gt <= 87) {

var stA0 = lcA1.getThumbnail__Ljava_lang_String_2();
return stA0;
    }
    X_92: for (;;) { IF: if (gt <= 92) {

var stA0 = lcA1.getAvatar__Ljava_lang_String_2();
return stA0;
    }
    X_97: for (;;) { IF: if (gt <= 97) {

var stI0 = lcA1.isIsSelected__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_105: for (;;) { IF: if (gt <= 105) {

var stA0 = lcA1.getColumns__Ljava_util_List_2();
return stA0;
    }
    X_110: for (;;) { IF: if (gt <= 110) {

var stI0 = lcA1.isHasOwnerPermission__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_118: for (;;) { IF: if (gt <= 118) {

var stI0 = lcA1.isHasAdminPermission__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_126: for (;;) { IF: if (gt <= 126) {

var stI0 = lcA1.isHasWritePermission__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_134: for (;;) { IF: if (gt <= 134) {

var stI0 = lcA1.isHasReadPermission__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_142: for (;;) { IF: if (gt <= 142) {
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

    }
}}}}}}}}}}}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.call__VLio_cloudoffice_platform_cockpit_genericlist_GenericListRow_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_genericlist_GenericListRow']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.genericlist.GenericListRow');
var stA0 = (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListRow || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListRow = io_cloudoffice_platform_cockpit_genericlist_GenericListRow(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_genericlist_GenericListRow_2(lcA1);
return stA0;

};
c['protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.onChange__VLio_cloudoffice_platform_cockpit_genericlist_GenericListRow_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLio_cloudoffice_platform_cockpit_genericlist_GenericListRow_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
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
    m = c.read__Lio_cloudoffice_platform_cockpit_genericlist_GenericListRow_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = new io_cloudoffice_platform_cockpit_genericlist_GenericListRow;
(refs_io_cloudoffice_platform_cockpit_genericlist_GenericListRow || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListRow = io_cloudoffice_platform_cockpit_genericlist_GenericListRow(false))).constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_genericlist_GenericListRow$1_2.call(stA0, lcA1, lcA2, null);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.cloneTo__Lio_cloudoffice_platform_cockpit_genericlist_GenericListRow_2Lio_cloudoffice_platform_cockpit_genericlist_GenericListRow_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListRow || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListRow = io_cloudoffice_platform_cockpit_genericlist_GenericListRow(false))).access$400__Lio_cloudoffice_platform_cockpit_genericlist_GenericListRow_2Lio_cloudoffice_platform_cockpit_genericlist_GenericListRow_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_genericlist_GenericListRow']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.genericlist.GenericListRow');
lcA0.onMessage__VLio_cloudoffice_platform_cockpit_genericlist_GenericListRow_2IILjava_lang_Object_2_3Ljava_lang_Object_2(lcA1, lcI2, lcI3, lcA4, lcA5);
return;

};
c['onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.onChange__VLjava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_genericlist_GenericListRow']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.genericlist.GenericListRow');
lcA0.onChange__VLio_cloudoffice_platform_cockpit_genericlist_GenericListRow_2I(lcA1, lcI2);
return;

};
c['onChange__VLjava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = lcA0.read__Lio_cloudoffice_platform_cockpit_genericlist_GenericListRow_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2(lcA1, lcA2);
return stA0;

};
c['read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_genericlist_GenericListRow']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.genericlist.GenericListRow');
var stA0 = lcA0.cloneTo__Lio_cloudoffice_platform_cockpit_genericlist_GenericListRow_2Lio_cloudoffice_platform_cockpit_genericlist_GenericListRow_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
c['cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_genericlist_GenericListRow']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.genericlist.GenericListRow');
lcA0.call__VLio_cloudoffice_platform_cockpit_genericlist_GenericListRow_2ILjava_lang_Object_2Ljava_lang_Object_2(lcA1, lcI2, lcA3, lcA4);
return;

};
c['call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Ljava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_genericlist_GenericListRow']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.genericlist.GenericListRow');
var stA0 = lcA0.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_genericlist_GenericListRow_2I(lcA1, lcI2);
return stA0;

};
c['getValue__Ljava_lang_Object_2Ljava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.setValue__VLjava_lang_Object_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_genericlist_GenericListRow']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.genericlist.GenericListRow');
lcA0.setValue__VLio_cloudoffice_platform_cockpit_genericlist_GenericListRow_2ILjava_lang_Object_2(lcA1, lcI2, lcA3);
return;

};
c['setValue__VLjava_lang_Object_2ILjava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_genericlist_GenericListRow$1_2 = function(lcA1) {
  var  lcA0 = this;
c.constructor.cons__V.call(lcA0);
return;

};
    m.access = 4096;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_genericlist_GenericListRow$Html4JavaTypefillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_genericlist_GenericListRow$Html4JavaType', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_genericlist_GenericListRow$Html4JavaTypefillInstOf });
    io_cloudoffice_platform_cockpit_genericlist_GenericListRow$Html4JavaTypefillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/genericlist/GenericListRow$Html4JavaType';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_genericlist_GenericListRow;
    var refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$GenericListRowManager;
    var refs_org_netbeans_html_json_spi_Proto$Type;
    var refs_java_lang_Integer;
    var refs_java_lang_String;
    var refs_java_lang_Boolean;
    var refs_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn;
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
vm.io_cloudoffice_platform_cockpit_genericlist_GenericListRow$Html4JavaType = io_cloudoffice_platform_cockpit_genericlist_GenericListRow$Html4JavaType;


function io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$GenericListRowManager() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$GenericListRowManager;
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
    function io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$GenericListRowManagerfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$GenericListRowManager', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$GenericListRowManagerfillInstOf });
    io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$GenericListRowManagerfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/genericlist/GenericListComponent$GenericListRowManager';
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
vm.io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$GenericListRowManager = registerClass(exports,'io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$GenericListRowManager',io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$GenericListRowManager);


function io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_TYPE'] = null;
  m = c._TYPE = function (v) {  if (arguments.length == 1) CLS['fld_TYPE'] = v; return CLS['fld_TYPE']; };
  m = c._proto = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_proto'] = v; return this['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_proto']; };
  m = c._prop_itemId = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_itemId'] = v; return this['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_itemId']; };
  m = c._prop_itemUserId = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_itemUserId'] = v; return this['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_itemUserId']; };
  m = c._prop_itemName = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_itemName'] = v; return this['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_itemName']; };
  m = c._prop_itemType = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_itemType'] = v; return this['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_itemType']; };
  m = c._prop_collectionType = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_collectionType'] = v; return this['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_collectionType']; };
  m = c._prop_itemTypeIconClass = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_itemTypeIconClass'] = v; return this['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_itemTypeIconClass']; };
  m = c._prop_itemTypeIconColor = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_itemTypeIconColor'] = v; return this['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_itemTypeIconColor']; };
  m = c._prop_avatar = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_avatar'] = v; return this['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_avatar']; };
  m = c._prop_createdBy = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_createdBy'] = v; return this['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_createdBy']; };
  m = c._prop_createDate = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_createDate'] = v; return this['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_createDate']; };
  m = c._prop_actualCreatedDate = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_actualCreatedDate'] = v; return this['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_actualCreatedDate']; };
  m = c._prop_createDateInMS = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_createDateInMS'] = v; return this['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_createDateInMS']; };
  m = c._prop_modifiedBy = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_modifiedBy'] = v; return this['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_modifiedBy']; };
  m = c._prop_modified = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_modified'] = v; return this['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_modified']; };
  m = c._prop_modifiedTime = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_modifiedTime'] = v; return this['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_modifiedTime']; };
  m = c._prop_actualModifieddDate = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_actualModifieddDate'] = v; return this['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_actualModifieddDate']; };
  m = c._prop_mimType = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_mimType'] = v; return this['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_mimType']; };
  m = c._prop_extension = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_extension'] = v; return this['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_extension']; };
  m = c._prop_version = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_version'] = v; return this['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_version']; };
  m = c._prop_sizeToDisplay = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_sizeToDisplay'] = v; return this['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_sizeToDisplay']; };
  m = c._prop_hasOwnerPermission = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_hasOwnerPermission'] = v; return this['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_hasOwnerPermission']; };
  m = c._prop_hasAdminPermission = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_hasAdminPermission'] = v; return this['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_hasAdminPermission']; };
  m = c._prop_hasWritePermission = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_hasWritePermission'] = v; return this['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_hasWritePermission']; };
  m = c._prop_hasReadPermission = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_hasReadPermission'] = v; return this['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_hasReadPermission']; };
  m = c._prop_hasSubjectPermission = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_hasSubjectPermission'] = v; return this['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_hasSubjectPermission']; };
  m = c._prop_totalCount = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_totalCount'] = v; return this['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_totalCount']; };
  m = c._prop_nextPageNumber = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_nextPageNumber'] = v; return this['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_nextPageNumber']; };
  m = c._prop_hasMore = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_hasMore'] = v; return this['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_hasMore']; };
  m = c._prop_checked = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_checked'] = v; return this['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_checked']; };
  m = c._prop_checkedTitle = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_checkedTitle'] = v; return this['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_checkedTitle']; };
  m = c._prop_thumbnailURL = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_thumbnailURL'] = v; return this['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_thumbnailURL']; };
  m = c._prop_emailAddress = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_emailAddress'] = v; return this['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_emailAddress']; };
  m = c._prop_persPhone = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_persPhone'] = v; return this['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_persPhone']; };
  m = c._prop_persMobile = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_persMobile'] = v; return this['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_persMobile']; };
    m = c.modelFor__Ljava_lang_Class_2 = function() {
return (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$VirtualItemInfoModel || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$VirtualItemInfoModel = io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$VirtualItemInfoModel(false))).constructor.$class;

};
    m.access = 10;
    m.cls = CLS;
    m = c.getItemId__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_proto'],"itemId");
return lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_itemId'];

};
c['getItemId__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setItemId__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_itemId'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_itemId'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_proto'],"itemId", lcA2, lcA1);
return;

    }
}}
};
c['setItemId__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getItemUserId__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_proto'],"itemUserId");
return lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_itemUserId'];

};
c['getItemUserId__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setItemUserId__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_itemUserId'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_itemUserId'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_proto'],"itemUserId", lcA2, lcA1);
return;

    }
}}
};
c['setItemUserId__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getItemName__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_proto'],"itemName");
return lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_itemName'];

};
c['getItemName__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setItemName__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_itemName'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_itemName'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_proto'],"itemName", lcA2, lcA1);
return;

    }
}}
};
c['setItemName__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getItemType__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_proto'],"itemType");
return lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_itemType'];

};
c['getItemType__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setItemType__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_itemType'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_itemType'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_proto'],"itemType", lcA2, lcA1);
return;

    }
}}
};
c['setItemType__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getCollectionType__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_proto'],"collectionType");
return lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_collectionType'];

};
c['getCollectionType__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setCollectionType__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_collectionType'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_collectionType'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_proto'],"collectionType", lcA2, lcA1);
return;

    }
}}
};
c['setCollectionType__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getItemTypeIconClass__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_proto'],"itemTypeIconClass");
return lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_itemTypeIconClass'];

};
c['getItemTypeIconClass__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setItemTypeIconClass__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_itemTypeIconClass'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_itemTypeIconClass'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_proto'],"itemTypeIconClass", lcA2, lcA1);
return;

    }
}}
};
c['setItemTypeIconClass__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getItemTypeIconColor__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_proto'],"itemTypeIconColor");
return lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_itemTypeIconColor'];

};
c['getItemTypeIconColor__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setItemTypeIconColor__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_itemTypeIconColor'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_itemTypeIconColor'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_proto'],"itemTypeIconColor", lcA2, lcA1);
return;

    }
}}
};
c['setItemTypeIconColor__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getAvatar__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_proto'],"avatar");
return lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_avatar'];

};
c['getAvatar__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setAvatar__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_avatar'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_avatar'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_proto'],"avatar", lcA2, lcA1);
return;

    }
}}
};
c['setAvatar__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getCreatedBy__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_proto'],"createdBy");
return lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_createdBy'];

};
c['getCreatedBy__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setCreatedBy__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_createdBy'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_createdBy'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_proto'],"createdBy", lcA2, lcA1);
return;

    }
}}
};
c['setCreatedBy__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getCreateDate__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_proto'],"createDate");
return lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_createDate'];

};
c['getCreateDate__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setCreateDate__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_createDate'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_createDate'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_proto'],"createDate", lcA2, lcA1);
return;

    }
}}
};
c['setCreateDate__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getActualCreatedDate__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_proto'],"actualCreatedDate");
return lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_actualCreatedDate'];

};
c['getActualCreatedDate__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setActualCreatedDate__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_actualCreatedDate'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_actualCreatedDate'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_proto'],"actualCreatedDate", lcA2, lcA1);
return;

    }
}}
};
c['setActualCreatedDate__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getCreateDateInMS__J = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_proto'],"createDateInMS");
return lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_createDateInMS'];

};
c['getCreateDateInMS__J'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setCreateDateInMS__VJ = function(lcL1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_proto']);
var stA0 = (refs_java_lang_Long || (refs_java_lang_Long = vm.java_lang_Long(false)))['valueOf__Ljava_lang_Long_2J'](lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_createDateInMS']);
var lcA3 = stA0;
var stA0 = c._TYPE();var stA1 = lcA3;var stA2 = (refs_java_lang_Long || (refs_java_lang_Long = vm.java_lang_Long(false)))['valueOf__Ljava_lang_Long_2J'](lcL1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_createDateInMS'] = lcL1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_proto'];var stA1 = "createDateInMS";var stA2 = lcA3;var stA3 = (refs_java_lang_Long || (refs_java_lang_Long = vm.java_lang_Long(false)))['valueOf__Ljava_lang_Long_2J'](lcL1);
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2, stA3);
return;

    }
}}
};
c['setCreateDateInMS__VJ'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getModifiedBy__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_proto'],"modifiedBy");
return lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_modifiedBy'];

};
c['getModifiedBy__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setModifiedBy__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_modifiedBy'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_modifiedBy'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_proto'],"modifiedBy", lcA2, lcA1);
return;

    }
}}
};
c['setModifiedBy__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getModified__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_proto'],"modified");
return lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_modified'];

};
c['getModified__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setModified__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_modified'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_modified'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_proto'],"modified", lcA2, lcA1);
return;

    }
}}
};
c['setModified__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getModifiedTime__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_proto'],"modifiedTime");
return lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_modifiedTime'];

};
c['getModifiedTime__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setModifiedTime__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_modifiedTime'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_modifiedTime'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_proto'],"modifiedTime", lcA2, lcA1);
return;

    }
}}
};
c['setModifiedTime__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getActualModifieddDate__J = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_proto'],"actualModifieddDate");
return lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_actualModifieddDate'];

};
c['getActualModifieddDate__J'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setActualModifieddDate__VJ = function(lcL1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_proto']);
var stA0 = (refs_java_lang_Long || (refs_java_lang_Long = vm.java_lang_Long(false)))['valueOf__Ljava_lang_Long_2J'](lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_actualModifieddDate']);
var lcA3 = stA0;
var stA0 = c._TYPE();var stA1 = lcA3;var stA2 = (refs_java_lang_Long || (refs_java_lang_Long = vm.java_lang_Long(false)))['valueOf__Ljava_lang_Long_2J'](lcL1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_actualModifieddDate'] = lcL1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_proto'];var stA1 = "actualModifieddDate";var stA2 = lcA3;var stA3 = (refs_java_lang_Long || (refs_java_lang_Long = vm.java_lang_Long(false)))['valueOf__Ljava_lang_Long_2J'](lcL1);
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2, stA3);
return;

    }
}}
};
c['setActualModifieddDate__VJ'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getMimType__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_proto'],"mimType");
return lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_mimType'];

};
c['getMimType__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setMimType__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_mimType'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_mimType'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_proto'],"mimType", lcA2, lcA1);
return;

    }
}}
};
c['setMimType__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getExtension__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_proto'],"extension");
return lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_extension'];

};
c['getExtension__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setExtension__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_extension'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_extension'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_proto'],"extension", lcA2, lcA1);
return;

    }
}}
};
c['setExtension__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getVersion__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_proto'],"version");
return lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_version'];

};
c['getVersion__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setVersion__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_version'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_version'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_proto'],"version", lcA2, lcA1);
return;

    }
}}
};
c['setVersion__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getSizeToDisplay__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_proto'],"sizeToDisplay");
return lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_sizeToDisplay'];

};
c['getSizeToDisplay__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setSizeToDisplay__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_sizeToDisplay'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_sizeToDisplay'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_proto'],"sizeToDisplay", lcA2, lcA1);
return;

    }
}}
};
c['setSizeToDisplay__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isHasOwnerPermission__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_proto'],"hasOwnerPermission");
return lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_hasOwnerPermission'];

};
c['isHasOwnerPermission__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setHasOwnerPermission__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_hasOwnerPermission']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_hasOwnerPermission'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_proto'];var stA1 = "hasOwnerPermission";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
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
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_proto'],"hasAdminPermission");
return lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_hasAdminPermission'];

};
c['isHasAdminPermission__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setHasAdminPermission__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_hasAdminPermission']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_hasAdminPermission'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_proto'];var stA1 = "hasAdminPermission";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
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
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_proto'],"hasWritePermission");
return lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_hasWritePermission'];

};
c['isHasWritePermission__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setHasWritePermission__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_hasWritePermission']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_hasWritePermission'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_proto'];var stA1 = "hasWritePermission";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
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
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_proto'],"hasReadPermission");
return lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_hasReadPermission'];

};
c['isHasReadPermission__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setHasReadPermission__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_hasReadPermission']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_hasReadPermission'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_proto'];var stA1 = "hasReadPermission";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2, stA3);
return;

    }
}}
};
c['setHasReadPermission__VZ'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isHasSubjectPermission__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_proto'],"hasSubjectPermission");
return lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_hasSubjectPermission'];

};
c['isHasSubjectPermission__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setHasSubjectPermission__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_hasSubjectPermission']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_hasSubjectPermission'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_proto'];var stA1 = "hasSubjectPermission";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2, stA3);
return;

    }
}}
};
c['setHasSubjectPermission__VZ'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getTotalCount__I = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_proto'],"totalCount");
return lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_totalCount'];

};
c['getTotalCount__I'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setTotalCount__VI = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_proto']);
var stA0 = (refs_java_lang_Integer || (refs_java_lang_Integer = vm.java_lang_Integer(false)))['valueOf__Ljava_lang_Integer_2I'](lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_totalCount']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Integer || (refs_java_lang_Integer = vm.java_lang_Integer(false)))['valueOf__Ljava_lang_Integer_2I'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_totalCount'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_proto'];var stA1 = "totalCount";var stA2 = lcA2;var stA3 = (refs_java_lang_Integer || (refs_java_lang_Integer = vm.java_lang_Integer(false)))['valueOf__Ljava_lang_Integer_2I'](lcI1);
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2, stA3);
return;

    }
}}
};
c['setTotalCount__VI'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getNextPageNumber__I = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_proto'],"nextPageNumber");
return lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_nextPageNumber'];

};
c['getNextPageNumber__I'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setNextPageNumber__VI = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_proto']);
var stA0 = (refs_java_lang_Integer || (refs_java_lang_Integer = vm.java_lang_Integer(false)))['valueOf__Ljava_lang_Integer_2I'](lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_nextPageNumber']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Integer || (refs_java_lang_Integer = vm.java_lang_Integer(false)))['valueOf__Ljava_lang_Integer_2I'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_nextPageNumber'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_proto'];var stA1 = "nextPageNumber";var stA2 = lcA2;var stA3 = (refs_java_lang_Integer || (refs_java_lang_Integer = vm.java_lang_Integer(false)))['valueOf__Ljava_lang_Integer_2I'](lcI1);
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2, stA3);
return;

    }
}}
};
c['setNextPageNumber__VI'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isHasMore__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_proto'],"hasMore");
return lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_hasMore'];

};
c['isHasMore__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setHasMore__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_hasMore']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_hasMore'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_proto'];var stA1 = "hasMore";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2, stA3);
return;

    }
}}
};
c['setHasMore__VZ'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isChecked__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_proto'],"checked");
return lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_checked'];

};
c['isChecked__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setChecked__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_checked']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_checked'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_proto'];var stA1 = "checked";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2, stA3);
return;

    }
}}
};
c['setChecked__VZ'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getCheckedTitle__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_proto'],"checkedTitle");
return lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_checkedTitle'];

};
c['getCheckedTitle__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setCheckedTitle__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_checkedTitle'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_checkedTitle'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_proto'],"checkedTitle", lcA2, lcA1);
return;

    }
}}
};
c['setCheckedTitle__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getThumbnailURL__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_proto'],"thumbnailURL");
return lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_thumbnailURL'];

};
c['getThumbnailURL__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setThumbnailURL__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_thumbnailURL'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_thumbnailURL'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_proto'],"thumbnailURL", lcA2, lcA1);
return;

    }
}}
};
c['setThumbnailURL__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getEmailAddress__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_proto'],"emailAddress");
return lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_emailAddress'];

};
c['getEmailAddress__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setEmailAddress__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_emailAddress'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_emailAddress'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_proto'],"emailAddress", lcA2, lcA1);
return;

    }
}}
};
c['setEmailAddress__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getPersPhone__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_proto'],"persPhone");
return lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_persPhone'];

};
c['getPersPhone__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setPersPhone__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_persPhone'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_persPhone'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_proto'],"persPhone", lcA2, lcA1);
return;

    }
}}
};
c['setPersPhone__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getPersMobile__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_proto'],"persMobile");
return lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_persMobile'];

};
c['getPersMobile__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setPersMobile__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_persMobile'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_persMobile'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_proto'],"persMobile", lcA2, lcA1);
return;

    }
}}
};
c['setPersMobile__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.createProto__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2(c._TYPE(),lcA0, lcA1);
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_proto'] = stA1;
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
    m = CLS.cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2JLjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2JLjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2ZZZZZIIZZLjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2 = function(lcA1, lcA2, lcA3, lcA4, lcA5, lcA6, lcA7, lcA8, lcA9, lcA10, lcA11, lcL12, lcA14, lcA15, lcA16, lcL17, lcA19, lcA20, lcA21, lcA22, lcI23, lcI24, lcI25, lcI26, lcI27, lcI28, lcI29, lcI30, lcI31, lcA32, lcA33, lcA34, lcA35, lcA36) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = (refs_net_java_html_BrwsrCtx || (refs_net_java_html_BrwsrCtx = vm.net_java_html_BrwsrCtx(false)))['findDefault__Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'](c.constructor.$class);
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, stA1);
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_itemId'] = lcA1;
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_itemUserId'] = lcA2;
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_itemName'] = lcA3;
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_itemType'] = lcA4;
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_collectionType'] = lcA5;
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_itemTypeIconClass'] = lcA6;
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_itemTypeIconColor'] = lcA7;
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_avatar'] = lcA8;
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_createdBy'] = lcA9;
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_createDate'] = lcA10;
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_actualCreatedDate'] = lcA11;
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_createDateInMS'] = lcL12;
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_modifiedBy'] = lcA14;
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_modified'] = lcA15;
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_modifiedTime'] = lcA16;
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_actualModifieddDate'] = lcL17;
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_mimType'] = lcA19;
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_extension'] = lcA20;
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_version'] = lcA21;
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_sizeToDisplay'] = lcA22;
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_hasOwnerPermission'] = lcI23;
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_hasAdminPermission'] = lcI24;
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_hasWritePermission'] = lcI25;
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_hasReadPermission'] = lcI26;
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_hasSubjectPermission'] = lcI27;
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_totalCount'] = lcI28;
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_nextPageNumber'] = lcI29;
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_hasMore'] = lcI30;
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_checked'] = lcI31;
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_checkedTitle'] = lcA32;
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_thumbnailURL'] = lcA33;
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_emailAddress'] = lcA34;
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_persPhone'] = lcA35;
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_persMobile'] = lcA36;
return;

};
CLS['cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2JLjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2JLjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2ZZZZZIIZZLjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, (34));
var lcA3 = stA0;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_proto'];var stA1 = lcA2;var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, (34));
Array.at(stA2, 0, "itemId");
Array.at(stA2, 1, "itemUserId");
Array.at(stA2, 2, "itemName");
Array.at(stA2, 3, "itemType");
Array.at(stA2, 4, "collectionType");
Array.at(stA2, 5, "itemTypeIconClass");
Array.at(stA2, (6), "itemTypeIconColor");
Array.at(stA2, (7), "avatar");
Array.at(stA2, (8), "createdBy");
Array.at(stA2, (9), "createDate");
Array.at(stA2, (10), "actualCreatedDate");
Array.at(stA2, (11), "createDateInMS");
Array.at(stA2, (12), "modifiedBy");
Array.at(stA2, (13), "modified");
Array.at(stA2, (14), "modifiedTime");
Array.at(stA2, (15), "actualModifieddDate");
Array.at(stA2, (16), "mimType");
Array.at(stA2, (17), "extension");
Array.at(stA2, (18), "version");
Array.at(stA2, (19), "sizeToDisplay");
Array.at(stA2, (20), "hasOwnerPermission");
Array.at(stA2, (21), "hasAdminPermission");
Array.at(stA2, (22), "hasWritePermission");
Array.at(stA2, (23), "hasReadPermission");
Array.at(stA2, (24), "hasSubjectPermission");
Array.at(stA2, (25), "totalCount");
Array.at(stA2, (26), "nextPageNumber");
Array.at(stA2, (27), "hasMore");
Array.at(stA2, (28), "checked");
Array.at(stA2, (29), "checkedTitle");
Array.at(stA2, (30), "thumbnailURL");
Array.at(stA2, (31), "emailAddress");
Array.at(stA2, (32), "persPhone");
Array.at(stA2, (33), "persMobile");
invoker.extract__VLjava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Object_2(stA0,stA1, stA2, lcA3);
if ((lcA3[0] || Array.at(lcA3, 0)) !== null && !(lcA3[0] || Array.at(lcA3, 0))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[0] || Array.at(lcA3, 0)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_itemId'] = (lcA3[0] || Array.at(lcA3, 0));
if ((lcA3[1] || Array.at(lcA3, 1)) !== null && !(lcA3[1] || Array.at(lcA3, 1))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[1] || Array.at(lcA3, 1)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_itemUserId'] = (lcA3[1] || Array.at(lcA3, 1));
if ((lcA3[2] || Array.at(lcA3, 2)) !== null && !(lcA3[2] || Array.at(lcA3, 2))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[2] || Array.at(lcA3, 2)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_itemName'] = (lcA3[2] || Array.at(lcA3, 2));
if ((lcA3[3] || Array.at(lcA3, 3)) !== null && !(lcA3[3] || Array.at(lcA3, 3))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[3] || Array.at(lcA3, 3)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_itemType'] = (lcA3[3] || Array.at(lcA3, 3));
if ((lcA3[4] || Array.at(lcA3, 4)) !== null && !(lcA3[4] || Array.at(lcA3, 4))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[4] || Array.at(lcA3, 4)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_collectionType'] = (lcA3[4] || Array.at(lcA3, 4));
if ((lcA3[5] || Array.at(lcA3, 5)) !== null && !(lcA3[5] || Array.at(lcA3, 5))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[5] || Array.at(lcA3, 5)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_itemTypeIconClass'] = (lcA3[5] || Array.at(lcA3, 5));
if ((lcA3[(6)] || Array.at(lcA3, (6))) !== null && !(lcA3[(6)] || Array.at(lcA3, (6)))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[(6)] || Array.at(lcA3, (6))), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_itemTypeIconColor'] = (lcA3[(6)] || Array.at(lcA3, (6)));
if ((lcA3[(7)] || Array.at(lcA3, (7))) !== null && !(lcA3[(7)] || Array.at(lcA3, (7)))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[(7)] || Array.at(lcA3, (7))), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_avatar'] = (lcA3[(7)] || Array.at(lcA3, (7)));
if ((lcA3[(8)] || Array.at(lcA3, (8))) !== null && !(lcA3[(8)] || Array.at(lcA3, (8)))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[(8)] || Array.at(lcA3, (8))), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_createdBy'] = (lcA3[(8)] || Array.at(lcA3, (8)));
if ((lcA3[(9)] || Array.at(lcA3, (9))) !== null && !(lcA3[(9)] || Array.at(lcA3, (9)))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[(9)] || Array.at(lcA3, (9))), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_createDate'] = (lcA3[(9)] || Array.at(lcA3, (9)));
if ((lcA3[(10)] || Array.at(lcA3, (10))) !== null && !(lcA3[(10)] || Array.at(lcA3, (10)))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[(10)] || Array.at(lcA3, (10))), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_actualCreatedDate'] = (lcA3[(10)] || Array.at(lcA3, (10)));
var stA0 = lcA0;if (((lcA3[(11)] || Array.at(lcA3, (11)))) !== null) { gt = 359; break IF; }
var stL1 = (0).toLong();{ gt = 372; break IF; }
    }
    X_359: for (;;) { IF: if (gt <= 359) {

var stA1 = invoker.numberValue__Ljava_lang_Number_2Ljava_lang_Object_2(c._TYPE(),(lcA3[(11)] || Array.at(lcA3, (11))));
var stL1 = invoker.longValue__J(stA1);
    }
    X_372: for (;;) { IF: if (gt <= 372) {
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_createDateInMS'] = stL1;
if ((lcA3[(12)] || Array.at(lcA3, (12))) !== null && !(lcA3[(12)] || Array.at(lcA3, (12)))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[(12)] || Array.at(lcA3, (12))), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_modifiedBy'] = (lcA3[(12)] || Array.at(lcA3, (12)));
if ((lcA3[(13)] || Array.at(lcA3, (13))) !== null && !(lcA3[(13)] || Array.at(lcA3, (13)))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[(13)] || Array.at(lcA3, (13))), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_modified'] = (lcA3[(13)] || Array.at(lcA3, (13)));
if ((lcA3[(14)] || Array.at(lcA3, (14))) !== null && !(lcA3[(14)] || Array.at(lcA3, (14)))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[(14)] || Array.at(lcA3, (14))), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_modifiedTime'] = (lcA3[(14)] || Array.at(lcA3, (14)));
var stA0 = lcA0;if (((lcA3[(15)] || Array.at(lcA3, (15)))) !== null) { gt = 420; break IF; }
var stL1 = (0).toLong();{ gt = 433; break IF; }
    }
    X_420: for (;;) { IF: if (gt <= 420) {

var stA1 = invoker.numberValue__Ljava_lang_Number_2Ljava_lang_Object_2(c._TYPE(),(lcA3[(15)] || Array.at(lcA3, (15))));
var stL1 = invoker.longValue__J(stA1);
    }
    X_433: for (;;) { IF: if (gt <= 433) {
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_actualModifieddDate'] = stL1;
if ((lcA3[(16)] || Array.at(lcA3, (16))) !== null && !(lcA3[(16)] || Array.at(lcA3, (16)))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[(16)] || Array.at(lcA3, (16))), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_mimType'] = (lcA3[(16)] || Array.at(lcA3, (16)));
if ((lcA3[(17)] || Array.at(lcA3, (17))) !== null && !(lcA3[(17)] || Array.at(lcA3, (17)))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[(17)] || Array.at(lcA3, (17))), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_extension'] = (lcA3[(17)] || Array.at(lcA3, (17)));
if ((lcA3[(18)] || Array.at(lcA3, (18))) !== null && !(lcA3[(18)] || Array.at(lcA3, (18)))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[(18)] || Array.at(lcA3, (18))), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_version'] = (lcA3[(18)] || Array.at(lcA3, (18)));
if ((lcA3[(19)] || Array.at(lcA3, (19))) !== null && !(lcA3[(19)] || Array.at(lcA3, (19)))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[(19)] || Array.at(lcA3, (19))), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_sizeToDisplay'] = (lcA3[(19)] || Array.at(lcA3, (19)));
var stA0 = lcA0;if (((lcA3[(20)] || Array.at(lcA3, (20)))) !== null) { gt = 492; break IF; }
var stI1 = 0;{ gt = 505; break IF; }
    }
    X_492: for (;;) { IF: if (gt <= 492) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[(20)] || Array.at(lcA3, (20))));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_505: for (;;) { IF: if (gt <= 505) {
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_hasOwnerPermission'] = stI1;
var stA0 = lcA0;if (((lcA3[(21)] || Array.at(lcA3, (21)))) !== null) { gt = 520; break IF; }
var stI1 = 0;{ gt = 533; break IF; }
    }
    X_520: for (;;) { IF: if (gt <= 520) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[(21)] || Array.at(lcA3, (21))));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_533: for (;;) { IF: if (gt <= 533) {
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_hasAdminPermission'] = stI1;
var stA0 = lcA0;if (((lcA3[(22)] || Array.at(lcA3, (22)))) !== null) { gt = 548; break IF; }
var stI1 = 0;{ gt = 561; break IF; }
    }
    X_548: for (;;) { IF: if (gt <= 548) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[(22)] || Array.at(lcA3, (22))));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_561: for (;;) { IF: if (gt <= 561) {
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_hasWritePermission'] = stI1;
var stA0 = lcA0;if (((lcA3[(23)] || Array.at(lcA3, (23)))) !== null) { gt = 576; break IF; }
var stI1 = 0;{ gt = 589; break IF; }
    }
    X_576: for (;;) { IF: if (gt <= 576) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[(23)] || Array.at(lcA3, (23))));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_589: for (;;) { IF: if (gt <= 589) {
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_hasReadPermission'] = stI1;
var stA0 = lcA0;if (((lcA3[(24)] || Array.at(lcA3, (24)))) !== null) { gt = 604; break IF; }
var stI1 = 0;{ gt = 617; break IF; }
    }
    X_604: for (;;) { IF: if (gt <= 604) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[(24)] || Array.at(lcA3, (24))));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_617: for (;;) { IF: if (gt <= 617) {
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_hasSubjectPermission'] = stI1;
var stA0 = lcA0;if (((lcA3[(25)] || Array.at(lcA3, (25)))) !== null) { gt = 632; break IF; }
var stI1 = 0;{ gt = 645; break IF; }
    }
    X_632: for (;;) { IF: if (gt <= 632) {

var stA1 = invoker.numberValue__Ljava_lang_Number_2Ljava_lang_Object_2(c._TYPE(),(lcA3[(25)] || Array.at(lcA3, (25))));
var stI1 = invoker.intValue__I(stA1);
    }
    X_645: for (;;) { IF: if (gt <= 645) {
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_totalCount'] = stI1;
var stA0 = lcA0;if (((lcA3[(26)] || Array.at(lcA3, (26)))) !== null) { gt = 660; break IF; }
var stI1 = 0;{ gt = 673; break IF; }
    }
    X_660: for (;;) { IF: if (gt <= 660) {

var stA1 = invoker.numberValue__Ljava_lang_Number_2Ljava_lang_Object_2(c._TYPE(),(lcA3[(26)] || Array.at(lcA3, (26))));
var stI1 = invoker.intValue__I(stA1);
    }
    X_673: for (;;) { IF: if (gt <= 673) {
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_nextPageNumber'] = stI1;
var stA0 = lcA0;if (((lcA3[(27)] || Array.at(lcA3, (27)))) !== null) { gt = 688; break IF; }
var stI1 = 0;{ gt = 701; break IF; }
    }
    X_688: for (;;) { IF: if (gt <= 688) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[(27)] || Array.at(lcA3, (27))));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_701: for (;;) { IF: if (gt <= 701) {
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_hasMore'] = stI1;
var stA0 = lcA0;if (((lcA3[(28)] || Array.at(lcA3, (28)))) !== null) { gt = 716; break IF; }
var stI1 = 0;{ gt = 729; break IF; }
    }
    X_716: for (;;) { IF: if (gt <= 716) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[(28)] || Array.at(lcA3, (28))));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_729: for (;;) { IF: if (gt <= 729) {
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_checked'] = stI1;
if ((lcA3[(29)] || Array.at(lcA3, (29))) !== null && !(lcA3[(29)] || Array.at(lcA3, (29)))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[(29)] || Array.at(lcA3, (29))), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_checkedTitle'] = (lcA3[(29)] || Array.at(lcA3, (29)));
if ((lcA3[(30)] || Array.at(lcA3, (30))) !== null && !(lcA3[(30)] || Array.at(lcA3, (30)))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[(30)] || Array.at(lcA3, (30))), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_thumbnailURL'] = (lcA3[(30)] || Array.at(lcA3, (30)));
if ((lcA3[(31)] || Array.at(lcA3, (31))) !== null && !(lcA3[(31)] || Array.at(lcA3, (31)))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[(31)] || Array.at(lcA3, (31))), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_emailAddress'] = (lcA3[(31)] || Array.at(lcA3, (31)));
if ((lcA3[(32)] || Array.at(lcA3, (32))) !== null && !(lcA3[(32)] || Array.at(lcA3, (32)))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[(32)] || Array.at(lcA3, (32))), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_persPhone'] = (lcA3[(32)] || Array.at(lcA3, (32)));
if ((lcA3[(33)] || Array.at(lcA3, (33))) !== null && !(lcA3[(33)] || Array.at(lcA3, (33)))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[(33)] || Array.at(lcA3, (33))), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_persMobile'] = (lcA3[(33)] || Array.at(lcA3, (33)));
return;

    }
}}}}}}}}}}}}}}}}}}}}}}}
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
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"itemUserId");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getItemUserId__Ljava_lang_String_2();
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
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"collectionType");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getCollectionType__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"itemTypeIconClass");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getItemTypeIconClass__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"itemTypeIconColor");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getItemTypeIconColor__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"avatar");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getAvatar__Ljava_lang_String_2();
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
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"createDate");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getCreateDate__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"actualCreatedDate");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getActualCreatedDate__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"createDateInMS");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stL2 = lcA0.getCreateDateInMS__J();
var stA2 = (refs_java_lang_Long || (refs_java_lang_Long = vm.java_lang_Long(false)))['valueOf__Ljava_lang_Long_2J'](stL2);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"modifiedBy");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getModifiedBy__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"modified");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getModified__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"modifiedTime");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getModifiedTime__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"actualModifieddDate");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stL2 = lcA0.getActualModifieddDate__J();
var stA2 = (refs_java_lang_Long || (refs_java_lang_Long = vm.java_lang_Long(false)))['valueOf__Ljava_lang_Long_2J'](stL2);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"mimType");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getMimType__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"extension");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getExtension__Ljava_lang_String_2();
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
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"sizeToDisplay");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getSizeToDisplay__Ljava_lang_String_2();
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
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"hasSubjectPermission");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stI2 = lcA0.isHasSubjectPermission__Z();
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI2);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"totalCount");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stI2 = lcA0.getTotalCount__I();
var stA2 = (refs_java_lang_Integer || (refs_java_lang_Integer = vm.java_lang_Integer(false)))['valueOf__Ljava_lang_Integer_2I'](stI2);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"nextPageNumber");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stI2 = lcA0.getNextPageNumber__I();
var stA2 = (refs_java_lang_Integer || (refs_java_lang_Integer = vm.java_lang_Integer(false)))['valueOf__Ljava_lang_Integer_2I'](stI2);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"hasMore");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stI2 = lcA0.isHasMore__Z();
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI2);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"checked");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stI2 = lcA0.isChecked__Z();
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI2);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"checkedTitle");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getCheckedTitle__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"thumbnailURL");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getThumbnailURL__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"emailAddress");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getEmailAddress__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"persPhone");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getPersPhone__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"persMobile");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getPersMobile__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(125));
var stA0 = invoker.toString__Ljava_lang_String_2(lcA1);
return stA0;

};
c['toString__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Lio_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_proto']);
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_2Lnet_java_html_BrwsrCtx_2.call(stA0, stA1);
return stA0;

};
c['clone__Lio_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Lio_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_2Lnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = new io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, lcA1);
var lcA2 = stA0;
var stA0 = lcA2;var stA1 = lcA0.getItemId__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_itemId'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getItemUserId__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_itemUserId'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getItemName__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_itemName'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getItemType__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_itemType'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getCollectionType__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_collectionType'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getItemTypeIconClass__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_itemTypeIconClass'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getItemTypeIconColor__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_itemTypeIconColor'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getAvatar__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_avatar'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getCreatedBy__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_createdBy'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getCreateDate__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_createDate'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getActualCreatedDate__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_actualCreatedDate'] = stA1;
var stA0 = lcA2;var stL1 = lcA0.getCreateDateInMS__J();
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_createDateInMS'] = stL1;
var stA0 = lcA2;var stA1 = lcA0.getModifiedBy__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_modifiedBy'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getModified__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_modified'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getModifiedTime__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_modifiedTime'] = stA1;
var stA0 = lcA2;var stL1 = lcA0.getActualModifieddDate__J();
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_actualModifieddDate'] = stL1;
var stA0 = lcA2;var stA1 = lcA0.getMimType__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_mimType'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getExtension__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_extension'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getVersion__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_version'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getSizeToDisplay__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_sizeToDisplay'] = stA1;
var stA0 = lcA2;var stI1 = lcA0.isHasOwnerPermission__Z();
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_hasOwnerPermission'] = stI1;
var stA0 = lcA2;var stI1 = lcA0.isHasAdminPermission__Z();
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_hasAdminPermission'] = stI1;
var stA0 = lcA2;var stI1 = lcA0.isHasWritePermission__Z();
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_hasWritePermission'] = stI1;
var stA0 = lcA2;var stI1 = lcA0.isHasReadPermission__Z();
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_hasReadPermission'] = stI1;
var stA0 = lcA2;var stI1 = lcA0.isHasSubjectPermission__Z();
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_hasSubjectPermission'] = stI1;
var stA0 = lcA2;var stI1 = lcA0.getTotalCount__I();
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_totalCount'] = stI1;
var stA0 = lcA2;var stI1 = lcA0.getNextPageNumber__I();
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_nextPageNumber'] = stI1;
var stA0 = lcA2;var stI1 = lcA0.isHasMore__Z();
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_hasMore'] = stI1;
var stA0 = lcA2;var stI1 = lcA0.isChecked__Z();
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_checked'] = stI1;
var stA0 = lcA2;var stA1 = lcA0.getCheckedTitle__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_checkedTitle'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getThumbnailURL__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_thumbnailURL'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getEmailAddress__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_emailAddress'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getPersPhone__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_persPhone'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getPersMobile__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_persMobile'] = stA1;
return lcA2;

};
    m.access = 2;
    m.cls = CLS;
    m = c.applyBindings__Lio_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_2 = function() {
  var  lcA0 = this;
invoker.applyBindings__V(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_proto']);
return lcA0;

};
c['applyBindings__Lio_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_2'] = m;

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

var stI0 = lcA1 != null && lcA1['$instOf_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo'] ? 1 : 0;
if ((stI0) != 0) { gt = 16; break IF; }
return 0;
    }
    X_16: for (;;) { IF: if (gt <= 16) {

if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.genericlist.VirtualItemInfo');
var lcA2 = lcA1;
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_itemId'], lcA2['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_itemId']);
if ((stI0) != 0) { gt = 40; break IF; }
return 0;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_itemUserId'], lcA2['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_itemUserId']);
if ((stI0) != 0) { gt = 59; break IF; }
return 0;
    }
    X_59: for (;;) { IF: if (gt <= 59) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_itemName'], lcA2['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_itemName']);
if ((stI0) != 0) { gt = 78; break IF; }
return 0;
    }
    X_78: for (;;) { IF: if (gt <= 78) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_itemType'], lcA2['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_itemType']);
if ((stI0) != 0) { gt = 97; break IF; }
return 0;
    }
    X_97: for (;;) { IF: if (gt <= 97) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_collectionType'], lcA2['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_collectionType']);
if ((stI0) != 0) { gt = 116; break IF; }
return 0;
    }
    X_116: for (;;) { IF: if (gt <= 116) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_itemTypeIconClass'], lcA2['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_itemTypeIconClass']);
if ((stI0) != 0) { gt = 135; break IF; }
return 0;
    }
    X_135: for (;;) { IF: if (gt <= 135) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_itemTypeIconColor'], lcA2['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_itemTypeIconColor']);
if ((stI0) != 0) { gt = 154; break IF; }
return 0;
    }
    X_154: for (;;) { IF: if (gt <= 154) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_avatar'], lcA2['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_avatar']);
if ((stI0) != 0) { gt = 173; break IF; }
return 0;
    }
    X_173: for (;;) { IF: if (gt <= 173) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_createdBy'], lcA2['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_createdBy']);
if ((stI0) != 0) { gt = 192; break IF; }
return 0;
    }
    X_192: for (;;) { IF: if (gt <= 192) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_createDate'], lcA2['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_createDate']);
if ((stI0) != 0) { gt = 211; break IF; }
return 0;
    }
    X_211: for (;;) { IF: if (gt <= 211) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_actualCreatedDate'], lcA2['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_actualCreatedDate']);
if ((stI0) != 0) { gt = 230; break IF; }
return 0;
    }
    X_230: for (;;) { IF: if (gt <= 230) {

var stI0 = invoker.isSame__ZDD(c._TYPE(),__toFP(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_createDateInMS']), __toFP(lcA2['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_createDateInMS']));
if ((stI0) != 0) { gt = 251; break IF; }
return 0;
    }
    X_251: for (;;) { IF: if (gt <= 251) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_modifiedBy'], lcA2['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_modifiedBy']);
if ((stI0) != 0) { gt = 270; break IF; }
return 0;
    }
    X_270: for (;;) { IF: if (gt <= 270) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_modified'], lcA2['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_modified']);
if ((stI0) != 0) { gt = 289; break IF; }
return 0;
    }
    X_289: for (;;) { IF: if (gt <= 289) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_modifiedTime'], lcA2['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_modifiedTime']);
if ((stI0) != 0) { gt = 308; break IF; }
return 0;
    }
    X_308: for (;;) { IF: if (gt <= 308) {

var stI0 = invoker.isSame__ZDD(c._TYPE(),__toFP(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_actualModifieddDate']), __toFP(lcA2['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_actualModifieddDate']));
if ((stI0) != 0) { gt = 329; break IF; }
return 0;
    }
    X_329: for (;;) { IF: if (gt <= 329) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_mimType'], lcA2['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_mimType']);
if ((stI0) != 0) { gt = 348; break IF; }
return 0;
    }
    X_348: for (;;) { IF: if (gt <= 348) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_extension'], lcA2['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_extension']);
if ((stI0) != 0) { gt = 367; break IF; }
return 0;
    }
    X_367: for (;;) { IF: if (gt <= 367) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_version'], lcA2['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_version']);
if ((stI0) != 0) { gt = 386; break IF; }
return 0;
    }
    X_386: for (;;) { IF: if (gt <= 386) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_sizeToDisplay'], lcA2['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_sizeToDisplay']);
if ((stI0) != 0) { gt = 405; break IF; }
return 0;
    }
    X_405: for (;;) { IF: if (gt <= 405) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_hasOwnerPermission']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_hasOwnerPermission']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 430; break IF; }
return 0;
    }
    X_430: for (;;) { IF: if (gt <= 430) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_hasAdminPermission']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_hasAdminPermission']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 455; break IF; }
return 0;
    }
    X_455: for (;;) { IF: if (gt <= 455) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_hasWritePermission']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_hasWritePermission']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 480; break IF; }
return 0;
    }
    X_480: for (;;) { IF: if (gt <= 480) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_hasReadPermission']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_hasReadPermission']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 505; break IF; }
return 0;
    }
    X_505: for (;;) { IF: if (gt <= 505) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_hasSubjectPermission']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_hasSubjectPermission']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 530; break IF; }
return 0;
    }
    X_530: for (;;) { IF: if (gt <= 530) {

var stI0 = invoker.isSame__ZII(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_totalCount'], lcA2['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_totalCount']);
if ((stI0) != 0) { gt = 549; break IF; }
return 0;
    }
    X_549: for (;;) { IF: if (gt <= 549) {

var stI0 = invoker.isSame__ZII(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_nextPageNumber'], lcA2['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_nextPageNumber']);
if ((stI0) != 0) { gt = 568; break IF; }
return 0;
    }
    X_568: for (;;) { IF: if (gt <= 568) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_hasMore']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_hasMore']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 593; break IF; }
return 0;
    }
    X_593: for (;;) { IF: if (gt <= 593) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_checked']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_checked']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 618; break IF; }
return 0;
    }
    X_618: for (;;) { IF: if (gt <= 618) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_checkedTitle'], lcA2['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_checkedTitle']);
if ((stI0) != 0) { gt = 637; break IF; }
return 0;
    }
    X_637: for (;;) { IF: if (gt <= 637) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_thumbnailURL'], lcA2['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_thumbnailURL']);
if ((stI0) != 0) { gt = 656; break IF; }
return 0;
    }
    X_656: for (;;) { IF: if (gt <= 656) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_emailAddress'], lcA2['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_emailAddress']);
if ((stI0) != 0) { gt = 675; break IF; }
return 0;
    }
    X_675: for (;;) { IF: if (gt <= 675) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_persPhone'], lcA2['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_persPhone']);
if ((stI0) != 0) { gt = 694; break IF; }
return 0;
    }
    X_694: for (;;) { IF: if (gt <= 694) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_persMobile'], lcA2['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_persMobile']);
if ((stI0) != 0) { gt = 713; break IF; }
return 0;
    }
    X_713: for (;;) { IF: if (gt <= 713) {

return 1;

    }
}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}
};
c['equals__ZLjava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.hashCode__I = function() {
  var  lcA0 = this;
var stA0 = invoker.getName__Ljava_lang_String_2(c.constructor.$class);
var stI0 = invoker.hashCode__I(stA0);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_itemId'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_itemUserId'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_itemName'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_itemType'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_collectionType'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_itemTypeIconClass'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_itemTypeIconColor'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_avatar'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_createdBy'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_createDate'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_actualCreatedDate'], lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Long || (refs_java_lang_Long = vm.java_lang_Long(false)))['valueOf__Ljava_lang_Long_2J'](lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_createDateInMS']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_modifiedBy'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_modified'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_modifiedTime'], lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Long || (refs_java_lang_Long = vm.java_lang_Long(false)))['valueOf__Ljava_lang_Long_2J'](lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_actualModifieddDate']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_mimType'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_extension'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_version'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_sizeToDisplay'], lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_hasOwnerPermission']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_hasAdminPermission']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_hasWritePermission']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_hasReadPermission']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_hasSubjectPermission']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Integer || (refs_java_lang_Integer = vm.java_lang_Integer(false)))['valueOf__Ljava_lang_Integer_2I'](lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_totalCount']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Integer || (refs_java_lang_Integer = vm.java_lang_Integer(false)))['valueOf__Ljava_lang_Integer_2I'](lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_nextPageNumber']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_hasMore']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_checked']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_checkedTitle'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_thumbnailURL'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_emailAddress'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_persPhone'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_persMobile'], lcI1);
var lcI1 = stI0;
return lcI1;

};
c['hashCode__I'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Ljava_lang_Object_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0.clone__Lio_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_2();
return stA0;

};
c['clone__Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.access$100__Lio_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo$Html4JavaType_2 = function() {
return c._TYPE();

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_2 = function(lcA0) {
return lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_proto'];

};
    m.access = 4104;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo$1_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2.call(lcA0, lcA1, lcA2);
return;

};
    m.access = 4096;
    m.cls = CLS;
    m = c.access$400__Lio_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_2Lio_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_2Lnet_java_html_BrwsrCtx_2 = function(lcA0, lcA1) {
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_2Lnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
return stA0;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo$Html4JavaType;
(refs_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo$Html4JavaType || (refs_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo$Html4JavaType = io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo$Html4JavaType(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo$1_2.call(stA0, null);
c._TYPE(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;    var __add64 = Number.prototype['__bit64']['add64'];
    var __sub64 = Number.prototype['__bit64']['sub64'];
    var __mul64 = Number.prototype['__bit64']['mul64'];
    var __div64 = Number.prototype['__bit64']['div64'];
    var __mod64 = Number.prototype['__bit64']['mod64'];
    var __and64 = Number.prototype['__bit64']['and64'];
    var __or64 = Number.prototype['__bit64']['or64'];
    var __xor64 = Number.prototype['__bit64']['xor64'];
    var __neg64 = Number.prototype['__bit64']['neg64'];
    var __shl64 = Number.prototype['__bit64']['shl64'];
    var __shr64 = Number.prototype['__bit64']['shr64'];
    var __ushr64 = Number.prototype['__bit64']['ushr64'];
    var __compare64 = Number.prototype['__bit64']['compare64'];
    var __toFP = Number.prototype['__bit64']['toFP'];

    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfofillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo', { value : true });
      vm.java_lang_Cloneable(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfofillInstOf });
    io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfofillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/genericlist/VirtualItemInfo';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.java_lang_Cloneable(false).constructor.$class
    ]; };
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$VirtualItemInfoModel;
    var refs_java_lang_Long;
    var refs_java_lang_Boolean;
    var refs_java_lang_Integer;
    var refs_net_java_html_BrwsrCtx;
    var refs_java_lang_StringBuilder;
    var refs_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo$Html4JavaType;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_proto'] = null;
    this['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_itemId'] = null;
    this['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_itemUserId'] = null;
    this['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_itemName'] = null;
    this['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_itemType'] = null;
    this['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_collectionType'] = null;
    this['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_itemTypeIconClass'] = null;
    this['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_itemTypeIconColor'] = null;
    this['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_avatar'] = null;
    this['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_createdBy'] = null;
    this['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_createDate'] = null;
    this['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_actualCreatedDate'] = null;
    this['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_createDateInMS'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_modifiedBy'] = null;
    this['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_modified'] = null;
    this['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_modifiedTime'] = null;
    this['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_actualModifieddDate'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_mimType'] = null;
    this['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_extension'] = null;
    this['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_version'] = null;
    this['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_sizeToDisplay'] = null;
    this['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_hasOwnerPermission'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_hasAdminPermission'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_hasWritePermission'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_hasReadPermission'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_hasSubjectPermission'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_totalCount'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_nextPageNumber'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_hasMore'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_checked'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_checkedTitle'] = null;
    this['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_thumbnailURL'] = null;
    this['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_emailAddress'] = null;
    this['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_persPhone'] = null;
    this['fld_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_prop_persMobile'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo = registerClass(exports,'io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo',io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo);


function io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo$Html4JavaType() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo$Html4JavaType;
  if (!CLS.$class) {
    var pp = vm.org_netbeans_html_json_spi_Proto$Type(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_org_netbeans_html_json_spi_Proto$Type || (refs_org_netbeans_html_json_spi_Proto$Type = vm.org_netbeans_html_json_spi_Proto$Type(false))).constructor['cons__VLjava_lang_Class_2Ljava_lang_Class_2II'].call(lcA0, (refs_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo || (refs_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo = io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo(false))).constructor.$class, (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$VirtualItemInfoModel || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$VirtualItemInfoModel = io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$VirtualItemInfoModel(false))).constructor.$class, (34), 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"itemId", 0, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"itemUserId", 1, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"itemName", 2, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"itemType", 3, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"collectionType", 4, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"itemTypeIconClass", 5, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"itemTypeIconColor", (6), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"avatar", (7), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"createdBy", (8), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"createDate", (9), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"actualCreatedDate", (10), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"createDateInMS", (11), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"modifiedBy", (12), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"modified", (13), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"modifiedTime", (14), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"actualModifieddDate", (15), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"mimType", (16), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"extension", (17), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"version", (18), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"sizeToDisplay", (19), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"hasOwnerPermission", (20), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"hasAdminPermission", (21), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"hasWritePermission", (22), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"hasReadPermission", (23), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"hasSubjectPermission", (24), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"totalCount", (25), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"nextPageNumber", (26), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"hasMore", (27), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"checked", (28), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"checkedTitle", (29), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"thumbnailURL", (30), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"emailAddress", (31), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"persPhone", (32), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"persMobile", (33), 0, 0);
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.setValue__VLio_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0:{ gt = 152; break IF; }
  case 1:{ gt = 169; break IF; }
  case 2:{ gt = 186; break IF; }
  case 3:{ gt = 203; break IF; }
  case 4:{ gt = 220; break IF; }
  case 5:{ gt = 237; break IF; }
  case 6:{ gt = 254; break IF; }
  case 7:{ gt = 271; break IF; }
  case 8:{ gt = 288; break IF; }
  case 9:{ gt = 305; break IF; }
  case 10:{ gt = 322; break IF; }
  case 11:{ gt = 339; break IF; }
  case 12:{ gt = 359; break IF; }
  case 13:{ gt = 376; break IF; }
  case 14:{ gt = 393; break IF; }
  case 15:{ gt = 410; break IF; }
  case 16:{ gt = 430; break IF; }
  case 17:{ gt = 447; break IF; }
  case 18:{ gt = 464; break IF; }
  case 19:{ gt = 481; break IF; }
  case 20:{ gt = 498; break IF; }
  case 21:{ gt = 518; break IF; }
  case 22:{ gt = 538; break IF; }
  case 23:{ gt = 558; break IF; }
  case 24:{ gt = 578; break IF; }
  case 25:{ gt = 598; break IF; }
  case 26:{ gt = 618; break IF; }
  case 27:{ gt = 638; break IF; }
  case 28:{ gt = 658; break IF; }
  case 29:{ gt = 678; break IF; }
  case 30:{ gt = 695; break IF; }
  case 31:{ gt = 712; break IF; }
  case 32:{ gt = 729; break IF; }
  case 33:{ gt = 746; break IF; }
  default: { gt = 763; break IF; }
}
    }
    X_152: for (;;) { IF: if (gt <= 152) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo || (refs_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo = io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo(false))).access$100__Lio_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setItemId__VLjava_lang_String_2(stA1);
return;
    }
    X_169: for (;;) { IF: if (gt <= 169) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo || (refs_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo = io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo(false))).access$100__Lio_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setItemUserId__VLjava_lang_String_2(stA1);
return;
    }
    X_186: for (;;) { IF: if (gt <= 186) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo || (refs_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo = io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo(false))).access$100__Lio_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setItemName__VLjava_lang_String_2(stA1);
return;
    }
    X_203: for (;;) { IF: if (gt <= 203) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo || (refs_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo = io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo(false))).access$100__Lio_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setItemType__VLjava_lang_String_2(stA1);
return;
    }
    X_220: for (;;) { IF: if (gt <= 220) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo || (refs_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo = io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo(false))).access$100__Lio_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setCollectionType__VLjava_lang_String_2(stA1);
return;
    }
    X_237: for (;;) { IF: if (gt <= 237) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo || (refs_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo = io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo(false))).access$100__Lio_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setItemTypeIconClass__VLjava_lang_String_2(stA1);
return;
    }
    X_254: for (;;) { IF: if (gt <= 254) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo || (refs_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo = io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo(false))).access$100__Lio_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setItemTypeIconColor__VLjava_lang_String_2(stA1);
return;
    }
    X_271: for (;;) { IF: if (gt <= 271) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo || (refs_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo = io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo(false))).access$100__Lio_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setAvatar__VLjava_lang_String_2(stA1);
return;
    }
    X_288: for (;;) { IF: if (gt <= 288) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo || (refs_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo = io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo(false))).access$100__Lio_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setCreatedBy__VLjava_lang_String_2(stA1);
return;
    }
    X_305: for (;;) { IF: if (gt <= 305) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo || (refs_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo = io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo(false))).access$100__Lio_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setCreateDate__VLjava_lang_String_2(stA1);
return;
    }
    X_322: for (;;) { IF: if (gt <= 322) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo || (refs_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo = io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo(false))).access$100__Lio_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setActualCreatedDate__VLjava_lang_String_2(stA1);
return;
    }
    X_339: for (;;) { IF: if (gt <= 339) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo || (refs_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo = io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo(false))).access$100__Lio_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Long || (refs_java_lang_Long = vm.java_lang_Long(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Long']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Long');
var stL1 = invoker.longValue__J(stA1);
stA0.setCreateDateInMS__VJ(stL1);
return;
    }
    X_359: for (;;) { IF: if (gt <= 359) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo || (refs_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo = io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo(false))).access$100__Lio_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setModifiedBy__VLjava_lang_String_2(stA1);
return;
    }
    X_376: for (;;) { IF: if (gt <= 376) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo || (refs_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo = io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo(false))).access$100__Lio_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setModified__VLjava_lang_String_2(stA1);
return;
    }
    X_393: for (;;) { IF: if (gt <= 393) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo || (refs_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo = io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo(false))).access$100__Lio_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setModifiedTime__VLjava_lang_String_2(stA1);
return;
    }
    X_410: for (;;) { IF: if (gt <= 410) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo || (refs_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo = io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo(false))).access$100__Lio_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Long || (refs_java_lang_Long = vm.java_lang_Long(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Long']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Long');
var stL1 = invoker.longValue__J(stA1);
stA0.setActualModifieddDate__VJ(stL1);
return;
    }
    X_430: for (;;) { IF: if (gt <= 430) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo || (refs_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo = io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo(false))).access$100__Lio_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setMimType__VLjava_lang_String_2(stA1);
return;
    }
    X_447: for (;;) { IF: if (gt <= 447) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo || (refs_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo = io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo(false))).access$100__Lio_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setExtension__VLjava_lang_String_2(stA1);
return;
    }
    X_464: for (;;) { IF: if (gt <= 464) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo || (refs_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo = io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo(false))).access$100__Lio_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setVersion__VLjava_lang_String_2(stA1);
return;
    }
    X_481: for (;;) { IF: if (gt <= 481) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo || (refs_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo = io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo(false))).access$100__Lio_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setSizeToDisplay__VLjava_lang_String_2(stA1);
return;
    }
    X_498: for (;;) { IF: if (gt <= 498) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo || (refs_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo = io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo(false))).access$100__Lio_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setHasOwnerPermission__VZ(stI1);
return;
    }
    X_518: for (;;) { IF: if (gt <= 518) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo || (refs_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo = io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo(false))).access$100__Lio_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setHasAdminPermission__VZ(stI1);
return;
    }
    X_538: for (;;) { IF: if (gt <= 538) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo || (refs_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo = io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo(false))).access$100__Lio_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setHasWritePermission__VZ(stI1);
return;
    }
    X_558: for (;;) { IF: if (gt <= 558) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo || (refs_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo = io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo(false))).access$100__Lio_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setHasReadPermission__VZ(stI1);
return;
    }
    X_578: for (;;) { IF: if (gt <= 578) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo || (refs_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo = io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo(false))).access$100__Lio_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setHasSubjectPermission__VZ(stI1);
return;
    }
    X_598: for (;;) { IF: if (gt <= 598) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo || (refs_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo = io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo(false))).access$100__Lio_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Integer || (refs_java_lang_Integer = vm.java_lang_Integer(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Integer']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Integer');
var stI1 = invoker.intValue__I(stA1);
stA0.setTotalCount__VI(stI1);
return;
    }
    X_618: for (;;) { IF: if (gt <= 618) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo || (refs_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo = io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo(false))).access$100__Lio_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Integer || (refs_java_lang_Integer = vm.java_lang_Integer(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Integer']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Integer');
var stI1 = invoker.intValue__I(stA1);
stA0.setNextPageNumber__VI(stI1);
return;
    }
    X_638: for (;;) { IF: if (gt <= 638) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo || (refs_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo = io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo(false))).access$100__Lio_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setHasMore__VZ(stI1);
return;
    }
    X_658: for (;;) { IF: if (gt <= 658) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo || (refs_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo = io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo(false))).access$100__Lio_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setChecked__VZ(stI1);
return;
    }
    X_678: for (;;) { IF: if (gt <= 678) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo || (refs_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo = io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo(false))).access$100__Lio_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setCheckedTitle__VLjava_lang_String_2(stA1);
return;
    }
    X_695: for (;;) { IF: if (gt <= 695) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo || (refs_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo = io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo(false))).access$100__Lio_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setThumbnailURL__VLjava_lang_String_2(stA1);
return;
    }
    X_712: for (;;) { IF: if (gt <= 712) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo || (refs_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo = io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo(false))).access$100__Lio_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setEmailAddress__VLjava_lang_String_2(stA1);
return;
    }
    X_729: for (;;) { IF: if (gt <= 729) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo || (refs_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo = io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo(false))).access$100__Lio_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setPersPhone__VLjava_lang_String_2(stA1);
return;
    }
    X_746: for (;;) { IF: if (gt <= 746) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo || (refs_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo = io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo(false))).access$100__Lio_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setPersMobile__VLjava_lang_String_2(stA1);
return;
    }
    X_763: for (;;) { IF: if (gt <= 763) {
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

    }
}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_2I = function(lcA1, lcI2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0:{ gt = 152; break IF; }
  case 1:{ gt = 157; break IF; }
  case 2:{ gt = 162; break IF; }
  case 3:{ gt = 167; break IF; }
  case 4:{ gt = 172; break IF; }
  case 5:{ gt = 177; break IF; }
  case 6:{ gt = 182; break IF; }
  case 7:{ gt = 187; break IF; }
  case 8:{ gt = 192; break IF; }
  case 9:{ gt = 197; break IF; }
  case 10:{ gt = 202; break IF; }
  case 11:{ gt = 207; break IF; }
  case 12:{ gt = 215; break IF; }
  case 13:{ gt = 220; break IF; }
  case 14:{ gt = 225; break IF; }
  case 15:{ gt = 230; break IF; }
  case 16:{ gt = 238; break IF; }
  case 17:{ gt = 243; break IF; }
  case 18:{ gt = 248; break IF; }
  case 19:{ gt = 253; break IF; }
  case 20:{ gt = 258; break IF; }
  case 21:{ gt = 266; break IF; }
  case 22:{ gt = 274; break IF; }
  case 23:{ gt = 282; break IF; }
  case 24:{ gt = 290; break IF; }
  case 25:{ gt = 298; break IF; }
  case 26:{ gt = 306; break IF; }
  case 27:{ gt = 314; break IF; }
  case 28:{ gt = 322; break IF; }
  case 29:{ gt = 330; break IF; }
  case 30:{ gt = 335; break IF; }
  case 31:{ gt = 340; break IF; }
  case 32:{ gt = 345; break IF; }
  case 33:{ gt = 350; break IF; }
  default: { gt = 355; break IF; }
}
    }
    X_152: for (;;) { IF: if (gt <= 152) {

var stA0 = lcA1.getItemId__Ljava_lang_String_2();
return stA0;
    }
    X_157: for (;;) { IF: if (gt <= 157) {

var stA0 = lcA1.getItemUserId__Ljava_lang_String_2();
return stA0;
    }
    X_162: for (;;) { IF: if (gt <= 162) {

var stA0 = lcA1.getItemName__Ljava_lang_String_2();
return stA0;
    }
    X_167: for (;;) { IF: if (gt <= 167) {

var stA0 = lcA1.getItemType__Ljava_lang_String_2();
return stA0;
    }
    X_172: for (;;) { IF: if (gt <= 172) {

var stA0 = lcA1.getCollectionType__Ljava_lang_String_2();
return stA0;
    }
    X_177: for (;;) { IF: if (gt <= 177) {

var stA0 = lcA1.getItemTypeIconClass__Ljava_lang_String_2();
return stA0;
    }
    X_182: for (;;) { IF: if (gt <= 182) {

var stA0 = lcA1.getItemTypeIconColor__Ljava_lang_String_2();
return stA0;
    }
    X_187: for (;;) { IF: if (gt <= 187) {

var stA0 = lcA1.getAvatar__Ljava_lang_String_2();
return stA0;
    }
    X_192: for (;;) { IF: if (gt <= 192) {

var stA0 = lcA1.getCreatedBy__Ljava_lang_String_2();
return stA0;
    }
    X_197: for (;;) { IF: if (gt <= 197) {

var stA0 = lcA1.getCreateDate__Ljava_lang_String_2();
return stA0;
    }
    X_202: for (;;) { IF: if (gt <= 202) {

var stA0 = lcA1.getActualCreatedDate__Ljava_lang_String_2();
return stA0;
    }
    X_207: for (;;) { IF: if (gt <= 207) {

var stL0 = lcA1.getCreateDateInMS__J();
var stA0 = (refs_java_lang_Long || (refs_java_lang_Long = vm.java_lang_Long(false)))['valueOf__Ljava_lang_Long_2J'](stL0);
return stA0;
    }
    X_215: for (;;) { IF: if (gt <= 215) {

var stA0 = lcA1.getModifiedBy__Ljava_lang_String_2();
return stA0;
    }
    X_220: for (;;) { IF: if (gt <= 220) {

var stA0 = lcA1.getModified__Ljava_lang_String_2();
return stA0;
    }
    X_225: for (;;) { IF: if (gt <= 225) {

var stA0 = lcA1.getModifiedTime__Ljava_lang_String_2();
return stA0;
    }
    X_230: for (;;) { IF: if (gt <= 230) {

var stL0 = lcA1.getActualModifieddDate__J();
var stA0 = (refs_java_lang_Long || (refs_java_lang_Long = vm.java_lang_Long(false)))['valueOf__Ljava_lang_Long_2J'](stL0);
return stA0;
    }
    X_238: for (;;) { IF: if (gt <= 238) {

var stA0 = lcA1.getMimType__Ljava_lang_String_2();
return stA0;
    }
    X_243: for (;;) { IF: if (gt <= 243) {

var stA0 = lcA1.getExtension__Ljava_lang_String_2();
return stA0;
    }
    X_248: for (;;) { IF: if (gt <= 248) {

var stA0 = lcA1.getVersion__Ljava_lang_String_2();
return stA0;
    }
    X_253: for (;;) { IF: if (gt <= 253) {

var stA0 = lcA1.getSizeToDisplay__Ljava_lang_String_2();
return stA0;
    }
    X_258: for (;;) { IF: if (gt <= 258) {

var stI0 = lcA1.isHasOwnerPermission__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_266: for (;;) { IF: if (gt <= 266) {

var stI0 = lcA1.isHasAdminPermission__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_274: for (;;) { IF: if (gt <= 274) {

var stI0 = lcA1.isHasWritePermission__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_282: for (;;) { IF: if (gt <= 282) {

var stI0 = lcA1.isHasReadPermission__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_290: for (;;) { IF: if (gt <= 290) {

var stI0 = lcA1.isHasSubjectPermission__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_298: for (;;) { IF: if (gt <= 298) {

var stI0 = lcA1.getTotalCount__I();
var stA0 = (refs_java_lang_Integer || (refs_java_lang_Integer = vm.java_lang_Integer(false)))['valueOf__Ljava_lang_Integer_2I'](stI0);
return stA0;
    }
    X_306: for (;;) { IF: if (gt <= 306) {

var stI0 = lcA1.getNextPageNumber__I();
var stA0 = (refs_java_lang_Integer || (refs_java_lang_Integer = vm.java_lang_Integer(false)))['valueOf__Ljava_lang_Integer_2I'](stI0);
return stA0;
    }
    X_314: for (;;) { IF: if (gt <= 314) {

var stI0 = lcA1.isHasMore__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_322: for (;;) { IF: if (gt <= 322) {

var stI0 = lcA1.isChecked__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_330: for (;;) { IF: if (gt <= 330) {

var stA0 = lcA1.getCheckedTitle__Ljava_lang_String_2();
return stA0;
    }
    X_335: for (;;) { IF: if (gt <= 335) {

var stA0 = lcA1.getThumbnailURL__Ljava_lang_String_2();
return stA0;
    }
    X_340: for (;;) { IF: if (gt <= 340) {

var stA0 = lcA1.getEmailAddress__Ljava_lang_String_2();
return stA0;
    }
    X_345: for (;;) { IF: if (gt <= 345) {

var stA0 = lcA1.getPersPhone__Ljava_lang_String_2();
return stA0;
    }
    X_350: for (;;) { IF: if (gt <= 350) {

var stA0 = lcA1.getPersMobile__Ljava_lang_String_2();
return stA0;
    }
    X_355: for (;;) { IF: if (gt <= 355) {
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

    }
}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.call__VLio_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.genericlist.VirtualItemInfo');
var stA0 = (refs_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo || (refs_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo = io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_2(lcA1);
return stA0;

};
c['protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.onChange__VLio_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLio_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
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
    m = c.read__Lio_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = new io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo;
(refs_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo || (refs_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo = io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo(false))).constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo$1_2.call(stA0, lcA1, lcA2, null);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.cloneTo__Lio_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_2Lio_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = (refs_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo || (refs_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo = io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo(false))).access$400__Lio_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_2Lio_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.genericlist.VirtualItemInfo');
lcA0.onMessage__VLio_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_2IILjava_lang_Object_2_3Ljava_lang_Object_2(lcA1, lcI2, lcI3, lcA4, lcA5);
return;

};
c['onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.onChange__VLjava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.genericlist.VirtualItemInfo');
lcA0.onChange__VLio_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_2I(lcA1, lcI2);
return;

};
c['onChange__VLjava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = lcA0.read__Lio_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2(lcA1, lcA2);
return stA0;

};
c['read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.genericlist.VirtualItemInfo');
var stA0 = lcA0.cloneTo__Lio_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_2Lio_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
c['cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.genericlist.VirtualItemInfo');
lcA0.call__VLio_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_2ILjava_lang_Object_2Ljava_lang_Object_2(lcA1, lcI2, lcA3, lcA4);
return;

};
c['call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Ljava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.genericlist.VirtualItemInfo');
var stA0 = lcA0.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_2I(lcA1, lcI2);
return stA0;

};
c['getValue__Ljava_lang_Object_2Ljava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.setValue__VLjava_lang_Object_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.genericlist.VirtualItemInfo');
lcA0.setValue__VLio_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo_2ILjava_lang_Object_2(lcA1, lcI2, lcA3);
return;

};
c['setValue__VLjava_lang_Object_2ILjava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo$1_2 = function(lcA1) {
  var  lcA0 = this;
c.constructor.cons__V.call(lcA0);
return;

};
    m.access = 4096;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo$Html4JavaTypefillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo$Html4JavaType', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo$Html4JavaTypefillInstOf });
    io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo$Html4JavaTypefillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/genericlist/VirtualItemInfo$Html4JavaType';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo;
    var refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$VirtualItemInfoModel;
    var refs_org_netbeans_html_json_spi_Proto$Type;
    var refs_java_lang_String;
    var refs_java_lang_Long;
    var refs_java_lang_Boolean;
    var refs_java_lang_Integer;
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
vm.io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo$Html4JavaType = io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo$Html4JavaType;

vm.java_lang_Long = link('java/lang/Long', function(f) { vm.java_lang_Long =  f; });

function io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$VirtualItemInfoModel() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$VirtualItemInfoModel;
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
    function io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$VirtualItemInfoModelfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$VirtualItemInfoModel', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$VirtualItemInfoModelfillInstOf });
    io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$VirtualItemInfoModelfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/genericlist/GenericListComponent$VirtualItemInfoModel';
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
vm.io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$VirtualItemInfoModel = registerClass(exports,'io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$VirtualItemInfoModel',io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$VirtualItemInfoModel);

vm.io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor = link('io/cloudoffice/platform/cockpit/api/JSON2ObjectConvertor', function(f) { vm.io_cloudoffice_platform_cockpit_api_JSON2ObjectConvertor =  f; });
vm.io_cloudoffice_platform_cockpit_api_ServerCallback = link('io/cloudoffice/platform/cockpit/api/ServerCallback', function(f) { vm.io_cloudoffice_platform_cockpit_api_ServerCallback =  f; });

function io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$VirtualItemListAsyncRequest() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$VirtualItemListAsyncRequest;
  if (!CLS.$class) {
    var pp = vm.io_cloudoffice_platform_cockpit_api_AsyncRequest(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_ServerCallback_2Lio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2Ljava_lang_String_2 = function(lcA1, lcA2, lcA3, lcA4) {
  var  lcA0 = this;
(refs_io_cloudoffice_platform_cockpit_api_AsyncRequest || (refs_io_cloudoffice_platform_cockpit_api_AsyncRequest = vm.io_cloudoffice_platform_cockpit_api_AsyncRequest(false))).constructor['cons__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_ServerCallback_2Ljava_lang_Object_2'].call(lcA0, lcA1, lcA2, lcA3);
c.showLoader__VLio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2.call(lcA0, lcA3);
c.prepareSearchQuery__VLio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2Ljava_lang_String_2.call(lcA0, lcA3, lcA4);
return;

};
CLS['cons__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_ServerCallback_2Lio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.showLoader__VLio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = lcA1.getLoader__Lio_cloudoffice_platform_cockpit_api_HelperItemView_2();
invoker.setActive__VZ(stA0,1);
lcA1.setListnotavailablemessagedisplay__VZ(0);
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.prepareSearchQuery__VLio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2Ljava_lang_String_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_Query;
(refs_io_cloudoffice_platform_cockpit_api_Query || (refs_io_cloudoffice_platform_cockpit_api_Query = vm.io_cloudoffice_platform_cockpit_api_Query(false))).constructor['cons__V'].call(stA0);
var lcA3 = stA0;
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['query__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2'](lcA2);
var lcA4 = stA0;
var stA0 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA4,"searchKey");
var lcA5 = stA0;
var stA0 = lcA1.getConfiguration__Lio_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_2();
var stA0 = stA0.getListItemCount__Ljava_lang_String_2();
var lcA6 = stA0;
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](lcA6);
if ((stI0) == 0) { gt = 55; break IF; }
var stA0 = lcA3;var stA1 = (refs_java_lang_Integer || (refs_java_lang_Integer = vm.java_lang_Integer(false)))['valueOf__Ljava_lang_Integer_2Ljava_lang_String_2'](lcA6);
var stI1 = invoker.intValue__I(stA1);
invoker.setLimit__VI(stA0,stI1);
{ gt = 60; break IF; }
    }
    X_55: for (;;) { IF: if (gt <= 55) {

invoker.setLimit__VI(lcA3,0);
    }
    X_60: for (;;) { IF: if (gt <= 60) {

var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isEmpty__ZLjava_lang_String_2'](lcA5);
if ((stI0) == 0) { gt = 86; break IF; }
var stA0 = lcA3;var stI1 = lcA1.getPageNumber__I();
invoker.setPageNumber__VI(stA0,stI1);
c.prepareFromClause__VLio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2Lio_cloudoffice_platform_cockpit_api_Query_2Ljava_lang_String_2.call(lcA0, lcA1, lcA3, lcA2);
{ gt = 97; break IF; }
    }
    X_86: for (;;) { IF: if (gt <= 86) {

invoker.setPageNumber__VI(lcA3,1);
c.prepareSearchKeyClause__VLio_cloudoffice_platform_cockpit_api_Query_2Ljava_lang_String_2.call(lcA0, lcA3, lcA2);
    }
    X_97: for (;;) { IF: if (gt <= 97) {

var stA0 = invoker.getList__Ljava_util_List_2Ljava_lang_String_2(lcA4,"relatedItems");
var lcA7 = stA0;
if ((null) === (lcA7)) { gt = 122; break IF; }
c.prepareSelectedOrClauseGroup__VLio_cloudoffice_platform_cockpit_api_Query_2Ljava_util_List_2.call(lcA0, lcA3, lcA7);
{ gt = 127; break IF; }
    }
    X_122: for (;;) { IF: if (gt <= 122) {

c.prepareDefaultOrClauseGroup__VLio_cloudoffice_platform_cockpit_api_Query_2.call(lcA0, lcA3);
    }
    X_127: for (;;) { IF: if (gt <= 127) {

invoker.setQuery__VLio_cloudoffice_platform_cockpit_api_Query_2(lcA0,lcA3);
return;

    }
}}}}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.prepareSearchKeyClause__VLio_cloudoffice_platform_cockpit_api_Query_2Ljava_lang_String_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['query__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2'](lcA2);
var lcA3 = stA0;
var stA0 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA3,"searchKey");
var lcA4 = stA0;
var stA0 = invoker.getList__Ljava_util_List_2Ljava_lang_String_2(lcA3,"filters");
var lcA5 = stA0;
var stA0 = invoker.get__Ljava_lang_Object_2I(lcA5,0);
if (stA0 !== null && !stA0['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA0, 'java.lang.String');
var lcA6 = stA0;
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_Clause;
(refs_io_cloudoffice_platform_cockpit_api_Clause || (refs_io_cloudoffice_platform_cockpit_api_Clause = vm.io_cloudoffice_platform_cockpit_api_Clause(false))).constructor['cons__V'].call(stA0);
var lcA7 = stA0;
var stA0 = invoker.getKey__Ljava_util_List_2(lcA7);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,"description");
var stA0 = invoker.getKey__Ljava_util_List_2(lcA7);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,"assetTagNames");
invoker.setValue__VLjava_lang_String_2(lcA7,lcA4);
invoker.setLike__VZ(lcA7,1);
invoker.setItemType__VLjava_lang_String_2(lcA7,lcA6);
invoker.setType__VLjava_lang_String_2(lcA7,"VIRTUAL");
var stA0 = lcA7;var stA1 = invoker.name__Ljava_lang_String_2((refs_io_cloudoffice_platform_cockpit_api_ClauseModel$Occur || (refs_io_cloudoffice_platform_cockpit_api_ClauseModel$Occur = vm.io_cloudoffice_platform_cockpit_api_ClauseModel$Occur(false)))['_MUST']());
invoker.setOccur__VLjava_lang_String_2(stA0,stA1);
var stA0 = invoker.getWhereClause__Ljava_util_List_2(lcA1);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,lcA7);
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.prepareFromClause__VLio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2Lio_cloudoffice_platform_cockpit_api_Query_2Ljava_lang_String_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['query__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2'](lcA3);
var lcA4 = stA0;
var stA0 = invoker.getList__Ljava_util_List_2Ljava_lang_String_2(lcA4,"filters");
var lcA5 = stA0;
if ((null) === (lcA5)) { gt = 36; break IF; }
var stA0 = invoker.getFromClause__Ljava_util_List_2(lcA2);
var stI0 = invoker.addAll__ZLjava_util_Collection_2(stA0,lcA5);
{ gt = 91; break IF; }
    }
    X_36: for (;;) { IF: if (gt <= 36) {

var stA0 = lcA1.getConfiguredFilters__Ljava_util_List_2();
var lcA6 = stA0;
var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA6);
var lcA7 = stA0;
    }
    X_51: for (;;) { IF: if (gt <= 51) {

var stI0 = invoker.hasNext__Z(lcA7);
if ((stI0) == 0) { gt = 91; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA7);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_genericlist_FilterType']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.genericlist.FilterType');
var lcA8 = stA0;
var stA0 = invoker.getFromClause__Ljava_util_List_2(lcA2);
var stA1 = lcA8.getItemType__Ljava_lang_String_2();
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,stA1);
{ gt = 0; continue X_51; }
    }
    X_91: for (;;) { IF: if (gt <= 91) {
return;

    }
}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.prepareSelectedOrClauseGroup__VLio_cloudoffice_platform_cockpit_api_Query_2Ljava_util_List_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA2);
var lcA3 = stA0;
    }
    X_7: for (;;) { IF: if (gt <= 7) {

var stI0 = invoker.hasNext__Z(lcA3);
if ((stI0) == 0) { gt = 225; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA3);
if (stA0 !== null && !stA0['$instOf_java_util_Map']) vm.java_lang_Class(false).castEx(stA0, 'java.util.Map');
var lcA4 = stA0;
var stA0 = invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2(lcA4,"itemId");
if (stA0 !== null && !stA0['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA0, 'java.lang.String');
var lcA5 = stA0;
var stA0 = invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2(lcA4,"itemType");
if (stA0 !== null && !stA0['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA0, 'java.lang.String');
var lcA6 = stA0;
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_ClauseGroup;
(refs_io_cloudoffice_platform_cockpit_api_ClauseGroup || (refs_io_cloudoffice_platform_cockpit_api_ClauseGroup = vm.io_cloudoffice_platform_cockpit_api_ClauseGroup(false))).constructor['cons__V'].call(stA0);
var lcA7 = stA0;
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_Clause;
(refs_io_cloudoffice_platform_cockpit_api_Clause || (refs_io_cloudoffice_platform_cockpit_api_Clause = vm.io_cloudoffice_platform_cockpit_api_Clause(false))).constructor['cons__V'].call(stA0);
var lcA8 = stA0;
var stA0 = invoker.getKey__Ljava_util_List_2(lcA8);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,"relatedItemId");
invoker.setValue__VLjava_lang_String_2(lcA8,lcA5);
invoker.setLike__VZ(lcA8,0);
invoker.setItemType__VLjava_lang_String_2(lcA8,lcA6);
invoker.setType__VLjava_lang_String_2(lcA8,"VIRTUAL_RELATED");
var stA0 = lcA8;var stA1 = invoker.name__Ljava_lang_String_2((refs_io_cloudoffice_platform_cockpit_api_ClauseModel$Occur || (refs_io_cloudoffice_platform_cockpit_api_ClauseModel$Occur = vm.io_cloudoffice_platform_cockpit_api_ClauseModel$Occur(false)))['_MUST']());
invoker.setOccur__VLjava_lang_String_2(stA0,stA1);
var stA0 = invoker.getClauses__Ljava_util_List_2(lcA7);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,lcA8);
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_Clause;
(refs_io_cloudoffice_platform_cockpit_api_Clause || (refs_io_cloudoffice_platform_cockpit_api_Clause = vm.io_cloudoffice_platform_cockpit_api_Clause(false))).constructor['cons__V'].call(stA0);
var lcA8 = stA0;
var stA0 = invoker.getKey__Ljava_util_List_2(lcA8);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,"relatedItemType");
invoker.setValue__VLjava_lang_String_2(lcA8,lcA6);
invoker.setItemType__VLjava_lang_String_2(lcA8,lcA6);
invoker.setType__VLjava_lang_String_2(lcA8,"RELATED");
invoker.setLike__VZ(lcA8,0);
var stA0 = lcA8;var stA1 = invoker.name__Ljava_lang_String_2((refs_io_cloudoffice_platform_cockpit_api_ClauseModel$Occur || (refs_io_cloudoffice_platform_cockpit_api_ClauseModel$Occur = vm.io_cloudoffice_platform_cockpit_api_ClauseModel$Occur(false)))['_MUST']());
invoker.setOccur__VLjava_lang_String_2(stA0,stA1);
var stA0 = invoker.getClauses__Ljava_util_List_2(lcA7);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,lcA8);
var stA0 = invoker.getOrClauseGroups__Ljava_util_List_2(lcA1);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,lcA7);
{ gt = 0; continue X_7; }
    }
    X_225: for (;;) { IF: if (gt <= 225) {
return;

    }
}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.prepareDefaultOrClauseGroup__VLio_cloudoffice_platform_cockpit_api_Query_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_Session || (refs_io_cloudoffice_platform_cockpit_api_Session = vm.io_cloudoffice_platform_cockpit_api_Session(false)))['getCompany__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2']();
var lcA2 = stA0;
var stA0 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA2,"itemId");
var lcA3 = stA0;
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_ClauseGroup;
(refs_io_cloudoffice_platform_cockpit_api_ClauseGroup || (refs_io_cloudoffice_platform_cockpit_api_ClauseGroup = vm.io_cloudoffice_platform_cockpit_api_ClauseGroup(false))).constructor['cons__V'].call(stA0);
var lcA4 = stA0;
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_Clause;
(refs_io_cloudoffice_platform_cockpit_api_Clause || (refs_io_cloudoffice_platform_cockpit_api_Clause = vm.io_cloudoffice_platform_cockpit_api_Clause(false))).constructor['cons__V'].call(stA0);
var lcA5 = stA0;
var stA0 = invoker.getKey__Ljava_util_List_2(lcA5);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,"relatedItemId");
invoker.setValue__VLjava_lang_String_2(lcA5,lcA3);
invoker.setLike__VZ(lcA5,0);
invoker.setItemType__VLjava_lang_String_2(lcA5,"GROUP");
invoker.setType__VLjava_lang_String_2(lcA5,"VIRTUAL_RELATED");
var stA0 = lcA5;var stA1 = invoker.name__Ljava_lang_String_2((refs_io_cloudoffice_platform_cockpit_api_ClauseModel$Occur || (refs_io_cloudoffice_platform_cockpit_api_ClauseModel$Occur = vm.io_cloudoffice_platform_cockpit_api_ClauseModel$Occur(false)))['_MUST']());
invoker.setOccur__VLjava_lang_String_2(stA0,stA1);
var stA0 = invoker.getClauses__Ljava_util_List_2(lcA4);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,lcA5);
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_Clause;
(refs_io_cloudoffice_platform_cockpit_api_Clause || (refs_io_cloudoffice_platform_cockpit_api_Clause = vm.io_cloudoffice_platform_cockpit_api_Clause(false))).constructor['cons__V'].call(stA0);
var lcA5 = stA0;
var stA0 = invoker.getKey__Ljava_util_List_2(lcA5);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,"relatedItemType");
invoker.setValue__VLjava_lang_String_2(lcA5,"GROUP");
invoker.setItemType__VLjava_lang_String_2(lcA5,"GROUP");
invoker.setType__VLjava_lang_String_2(lcA5,"RELATED");
invoker.setLike__VZ(lcA5,0);
var stA0 = lcA5;var stA1 = invoker.name__Ljava_lang_String_2((refs_io_cloudoffice_platform_cockpit_api_ClauseModel$Occur || (refs_io_cloudoffice_platform_cockpit_api_ClauseModel$Occur = vm.io_cloudoffice_platform_cockpit_api_ClauseModel$Occur(false)))['_MUST']());
invoker.setOccur__VLjava_lang_String_2(stA0,stA1);
var stA0 = invoker.getClauses__Ljava_util_List_2(lcA4);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,lcA5);
var stA0 = invoker.getOrClauseGroups__Ljava_util_List_2(lcA1);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,lcA4);
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.preparePostData__V = function() {
  var  lcA0 = this;
var stA0 = new vm.java_util_HashMap;
(refs_java_util_HashMap || (refs_java_util_HashMap = vm.java_util_HashMap(false))).constructor['cons__V'].call(stA0);
var lcA1 = stA0;
var stA0 = lcA1;var stA1 = "query";var stA2 = invoker.getQuery__Lio_cloudoffice_platform_cockpit_api_Query_2(lcA0);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
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
    function io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$VirtualItemListAsyncRequestfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$VirtualItemListAsyncRequest', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$VirtualItemListAsyncRequestfillInstOf });
    io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$VirtualItemListAsyncRequestfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/genericlist/GenericListComponent$VirtualItemListAsyncRequest';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 33;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_AsyncRequest;
    var refs_io_cloudoffice_platform_cockpit_api_Query;
    var refs_io_cloudoffice_platform_cockpit_api_MapBuilder;
    var refs_io_cloudoffice_platform_cockpit_api_UtilValidate;
    var refs_java_lang_Integer;
    var refs_io_cloudoffice_platform_cockpit_api_Clause;
    var refs_io_cloudoffice_platform_cockpit_api_ClauseModel$Occur;
    var refs_io_cloudoffice_platform_cockpit_api_ClauseGroup;
    var refs_io_cloudoffice_platform_cockpit_api_Session;
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
vm.io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$VirtualItemListAsyncRequest = registerClass(exports,'io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$VirtualItemListAsyncRequest',io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$VirtualItemListAsyncRequest);

vm.io_cloudoffice_platform_cockpit_api_Session = link('io/cloudoffice/platform/cockpit/api/Session', function(f) { vm.io_cloudoffice_platform_cockpit_api_Session =  f; });
vm.io_cloudoffice_platform_cockpit_api_ClauseGroup = link('io/cloudoffice/platform/cockpit/api/ClauseGroup', function(f) { vm.io_cloudoffice_platform_cockpit_api_ClauseGroup =  f; });
vm.io_cloudoffice_platform_cockpit_api_ClauseModel$Occur = link('io/cloudoffice/platform/cockpit/api/ClauseModel$Occur', function(f) { vm.io_cloudoffice_platform_cockpit_api_ClauseModel$Occur =  f; });
vm.io_cloudoffice_platform_cockpit_api_Clause = link('io/cloudoffice/platform/cockpit/api/Clause', function(f) { vm.io_cloudoffice_platform_cockpit_api_Clause =  f; });
vm.io_cloudoffice_platform_cockpit_api_Query = link('io/cloudoffice/platform/cockpit/api/Query', function(f) { vm.io_cloudoffice_platform_cockpit_api_Query =  f; });
vm.io_cloudoffice_platform_cockpit_api_AsyncRequest = link('io/cloudoffice/platform/cockpit/api/AsyncRequest', function(f) { vm.io_cloudoffice_platform_cockpit_api_AsyncRequest =  f; });

function io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_TYPE'] = null;
  m = c._TYPE = function (v) {  if (arguments.length == 1) CLS['fld_TYPE'] = v; return CLS['fld_TYPE']; };
  m = c._proto = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_proto'] = v; return this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_proto']; };
  m = c._prop_visibleCreateButon = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_visibleCreateButon'] = v; return this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_visibleCreateButon']; };
  m = c._prop_defaultitemview = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_defaultitemview'] = v; return this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_defaultitemview']; };
  m = c._prop_filters = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_filters'] = v; return this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_filters']; };
  m = c._prop_columns = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_columns'] = v; return this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_columns']; };
  m = c._prop_listItemCount = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_listItemCount'] = v; return this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_listItemCount']; };
  m = c._prop_detailComponentDefinition = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_detailComponentDefinition'] = v; return this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_detailComponentDefinition']; };
  m = c._prop_actionMenuComponentDefinition = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_actionMenuComponentDefinition'] = v; return this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_actionMenuComponentDefinition']; };
  m = c._prop_collectionComponentDefinition = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_collectionComponentDefinition'] = v; return this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_collectionComponentDefinition']; };
  m = c._prop_searchBoxComponentDefinition = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_searchBoxComponentDefinition'] = v; return this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_searchBoxComponentDefinition']; };
    m = c.modelFor__Ljava_lang_Class_2 = function() {
return (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$GenericlistManager || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$GenericlistManager = io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$GenericlistManager(false))).constructor.$class;

};
    m.access = 10;
    m.cls = CLS;
    m = c.getVisibleCreateButon__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_proto'],"visibleCreateButon");
return lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_visibleCreateButon'];

};
c['getVisibleCreateButon__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setVisibleCreateButon__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_visibleCreateButon'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_visibleCreateButon'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_proto'],"visibleCreateButon", lcA2, lcA1);
return;

    }
}}
};
c['setVisibleCreateButon__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getDefaultitemview__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_proto'],"defaultitemview");
return lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_defaultitemview'];

};
c['getDefaultitemview__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setDefaultitemview__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_defaultitemview'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_defaultitemview'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_proto'],"defaultitemview", lcA2, lcA1);
return;

    }
}}
};
c['setDefaultitemview__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getFilters__Ljava_util_List_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_proto'],"filters");
return lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_filters'];

};
c['getFilters__Ljava_util_List_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getColumns__Ljava_util_List_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_proto'],"columns");
return lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_columns'];

};
c['getColumns__Ljava_util_List_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getListItemCount__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_proto'],"listItemCount");
return lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_listItemCount'];

};
c['getListItemCount__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setListItemCount__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_listItemCount'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_listItemCount'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_proto'],"listItemCount", lcA2, lcA1);
return;

    }
}}
};
c['setListItemCount__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getDetailComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_proto'],"detailComponentDefinition");
if ((lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_detailComponentDefinition']) !== (c._TYPE())) { gt = 40; break IF; }
var stA0 = lcA0;var stA1 = new vm.io_cloudoffice_platform_cockpit_api_ComponentDef;
(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor['cons__V'].call(stA1);
var stA2 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_proto']);
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, stA2);
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_detailComponentDefinition'] = stA1;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

if (lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_detailComponentDefinition'] !== null && !lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_detailComponentDefinition']['$instOf_io_cloudoffice_platform_cockpit_api_ComponentDef']) vm.java_lang_Class(false).castEx(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_detailComponentDefinition'], 'io.cloudoffice.platform.cockpit.api.ComponentDef');
return lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_detailComponentDefinition'];

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

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_detailComponentDefinition'];
if ((lcA2) !== (lcA1)) { gt = 18; break IF; }
return;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_detailComponentDefinition'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_proto'],"detailComponentDefinition", lcA2, lcA1);
return;

    }
}}
};
c['setDetailComponentDefinition__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getActionMenuComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_proto'],"actionMenuComponentDefinition");
if ((lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_actionMenuComponentDefinition']) !== (c._TYPE())) { gt = 40; break IF; }
var stA0 = lcA0;var stA1 = new vm.io_cloudoffice_platform_cockpit_api_ComponentDef;
(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor['cons__V'].call(stA1);
var stA2 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_proto']);
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, stA2);
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_actionMenuComponentDefinition'] = stA1;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

if (lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_actionMenuComponentDefinition'] !== null && !lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_actionMenuComponentDefinition']['$instOf_io_cloudoffice_platform_cockpit_api_ComponentDef']) vm.java_lang_Class(false).castEx(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_actionMenuComponentDefinition'], 'io.cloudoffice.platform.cockpit.api.ComponentDef');
return lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_actionMenuComponentDefinition'];

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

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_actionMenuComponentDefinition'];
if ((lcA2) !== (lcA1)) { gt = 18; break IF; }
return;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_actionMenuComponentDefinition'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_proto'],"actionMenuComponentDefinition", lcA2, lcA1);
return;

    }
}}
};
c['setActionMenuComponentDefinition__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getCollectionComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_proto'],"collectionComponentDefinition");
if ((lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_collectionComponentDefinition']) !== (c._TYPE())) { gt = 40; break IF; }
var stA0 = lcA0;var stA1 = new vm.io_cloudoffice_platform_cockpit_api_ComponentDef;
(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor['cons__V'].call(stA1);
var stA2 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_proto']);
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, stA2);
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_collectionComponentDefinition'] = stA1;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

if (lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_collectionComponentDefinition'] !== null && !lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_collectionComponentDefinition']['$instOf_io_cloudoffice_platform_cockpit_api_ComponentDef']) vm.java_lang_Class(false).castEx(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_collectionComponentDefinition'], 'io.cloudoffice.platform.cockpit.api.ComponentDef');
return lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_collectionComponentDefinition'];

    }
}}
};
c['getCollectionComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setCollectionComponentDefinition__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_collectionComponentDefinition'];
if ((lcA2) !== (lcA1)) { gt = 18; break IF; }
return;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_collectionComponentDefinition'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_proto'],"collectionComponentDefinition", lcA2, lcA1);
return;

    }
}}
};
c['setCollectionComponentDefinition__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getSearchBoxComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_proto'],"searchBoxComponentDefinition");
if ((lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_searchBoxComponentDefinition']) !== (c._TYPE())) { gt = 40; break IF; }
var stA0 = lcA0;var stA1 = new vm.io_cloudoffice_platform_cockpit_api_ComponentDef;
(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor['cons__V'].call(stA1);
var stA2 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_proto']);
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, stA2);
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_searchBoxComponentDefinition'] = stA1;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

if (lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_searchBoxComponentDefinition'] !== null && !lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_searchBoxComponentDefinition']['$instOf_io_cloudoffice_platform_cockpit_api_ComponentDef']) vm.java_lang_Class(false).castEx(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_searchBoxComponentDefinition'], 'io.cloudoffice.platform.cockpit.api.ComponentDef');
return lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_searchBoxComponentDefinition'];

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

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_searchBoxComponentDefinition'];
if ((lcA2) !== (lcA1)) { gt = 18; break IF; }
return;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_searchBoxComponentDefinition'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_proto'],"searchBoxComponentDefinition", lcA2, lcA1);
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
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_proto'] = stA1;
var stA0 = lcA0;var stA1 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_proto'];var stA2 = "filters";var stI3 = -1;var stA4 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, 0);
var stA1 = invoker.createList__Ljava_util_List_2Ljava_lang_String_2I_3Ljava_lang_String_2(stA1,stA2, stI3, stA4);
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_filters'] = stA1;
var stA0 = lcA0;var stA1 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_proto'];var stA2 = "columns";var stI3 = -1;var stA4 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, 0);
var stA1 = invoker.createList__Ljava_util_List_2Ljava_lang_String_2I_3Ljava_lang_String_2(stA1,stA2, stI3, stA4);
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_columns'] = stA1;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = (refs_net_java_html_BrwsrCtx || (refs_net_java_html_BrwsrCtx = vm.net_java_html_BrwsrCtx(false)))['findDefault__Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'](c.constructor.$class);
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, stA1);
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_detailComponentDefinition'] = c._TYPE();
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_actionMenuComponentDefinition'] = c._TYPE();
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_collectionComponentDefinition'] = c._TYPE();
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_searchBoxComponentDefinition'] = c._TYPE();
return;

};
CLS['cons__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Lio_cloudoffice_platform_cockpit_api_ComponentDef_2Lio_cloudoffice_platform_cockpit_api_ComponentDef_2Lio_cloudoffice_platform_cockpit_api_ComponentDef_2Lio_cloudoffice_platform_cockpit_api_ComponentDef_2_3Lio_cloudoffice_platform_cockpit_genericlist_FilterType_2 = function(lcA1, lcA2, lcA3, lcA4, lcA5, lcA6, lcA7, lcA8) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = (refs_net_java_html_BrwsrCtx || (refs_net_java_html_BrwsrCtx = vm.net_java_html_BrwsrCtx(false)))['findDefault__Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'](c.constructor.$class);
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, stA1);
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_visibleCreateButon'] = lcA1;
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_defaultitemview'] = lcA2;
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_listItemCount'] = lcA3;
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_detailComponentDefinition'] = lcA4;
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_actionMenuComponentDefinition'] = lcA5;
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_collectionComponentDefinition'] = lcA6;
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_searchBoxComponentDefinition'] = lcA7;
invoker.initTo__VLjava_util_Collection_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_proto'],lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_filters'], lcA8);
return;

};
CLS['cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Lio_cloudoffice_platform_cockpit_api_ComponentDef_2Lio_cloudoffice_platform_cockpit_api_ComponentDef_2Lio_cloudoffice_platform_cockpit_api_ComponentDef_2Lio_cloudoffice_platform_cockpit_api_ComponentDef_2_3Lio_cloudoffice_platform_cockpit_genericlist_FilterType_2'] = m;

    m.access = 129;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, (9));
var lcA3 = stA0;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_proto'];var stA1 = lcA2;var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, (9));
Array.at(stA2, 0, "visibleCreateButon");
Array.at(stA2, 1, "defaultitemview");
Array.at(stA2, 2, "filters");
Array.at(stA2, 3, "columns");
Array.at(stA2, 4, "listItemCount");
Array.at(stA2, 5, "detailComponentDefinition");
Array.at(stA2, (6), "actionMenuComponentDefinition");
Array.at(stA2, (7), "collectionComponentDefinition");
Array.at(stA2, (8), "searchBoxComponentDefinition");
invoker.extract__VLjava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Object_2(stA0,stA1, stA2, lcA3);
if ((lcA3[0] || Array.at(lcA3, 0)) !== null && !(lcA3[0] || Array.at(lcA3, 0))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[0] || Array.at(lcA3, 0)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_visibleCreateButon'] = (lcA3[0] || Array.at(lcA3, 0));
if ((lcA3[1] || Array.at(lcA3, 1)) !== null && !(lcA3[1] || Array.at(lcA3, 1))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[1] || Array.at(lcA3, 1)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_defaultitemview'] = (lcA3[1] || Array.at(lcA3, 1));
var stA0 = c.useAsArray___3Ljava_lang_Object_2Ljava_lang_Object_2((lcA3[2] || Array.at(lcA3, 2)));
var lcA4 = stA0;
var lcI5 = (lcA4).length;
var lcI6 = 0;
    }
    X_109: for (;;) { IF: if (gt <= 109) {

if ((lcI6) >= (lcI5)) { gt = 150; break IF; }
var lcA7 = (lcA4[lcI6] || Array.at(lcA4, lcI6));
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_filters'];var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_proto'],(refs_io_cloudoffice_platform_cockpit_genericlist_FilterType || (refs_io_cloudoffice_platform_cockpit_genericlist_FilterType = io_cloudoffice_platform_cockpit_genericlist_FilterType(false))).constructor.$class, lcA7);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,stA1);
lcI6++;
{ gt = 0; continue X_109; }
    }
    X_150: for (;;) { IF: if (gt <= 150) {

var stA0 = c.useAsArray___3Ljava_lang_Object_2Ljava_lang_Object_2((lcA3[3] || Array.at(lcA3, 3)));
var lcA4 = stA0;
var lcI5 = (lcA4).length;
var lcI6 = 0;
    }
    X_166: for (;;) { IF: if (gt <= 166) {

if ((lcI6) >= (lcI5)) { gt = 207; break IF; }
var lcA7 = (lcA4[lcI6] || Array.at(lcA4, lcI6));
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_columns'];var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_proto'],(refs_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn = io_cloudoffice_platform_cockpit_genericlist_GenericListColumn(false))).constructor.$class, lcA7);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,stA1);
lcI6++;
{ gt = 0; continue X_166; }
    }
    X_207: for (;;) { IF: if (gt <= 207) {

if ((lcA3[4] || Array.at(lcA3, 4)) !== null && !(lcA3[4] || Array.at(lcA3, 4))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[4] || Array.at(lcA3, 4)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_listItemCount'] = (lcA3[4] || Array.at(lcA3, 4));
var stA0 = lcA0;var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_proto'],(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor.$class, (lcA3[5] || Array.at(lcA3, 5)));
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_detailComponentDefinition'] = stA1;
var stA0 = lcA0;var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_proto'],(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor.$class, (lcA3[(6)] || Array.at(lcA3, (6))));
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_actionMenuComponentDefinition'] = stA1;
var stA0 = lcA0;var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_proto'],(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor.$class, (lcA3[(7)] || Array.at(lcA3, (7))));
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_collectionComponentDefinition'] = stA1;
var stA0 = lcA0;var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_proto'],(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor.$class, (lcA3[(8)] || Array.at(lcA3, (8))));
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_searchBoxComponentDefinition'] = stA1;
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
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"visibleCreateButon");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getVisibleCreateButon__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"defaultitemview");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getDefaultitemview__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"filters");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_filters']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"columns");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_columns']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"listItemCount");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getListItemCount__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"detailComponentDefinition");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_detailComponentDefinition']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"actionMenuComponentDefinition");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_actionMenuComponentDefinition']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"collectionComponentDefinition");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_collectionComponentDefinition']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"searchBoxComponentDefinition");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_searchBoxComponentDefinition']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(125));
var stA0 = invoker.toString__Ljava_lang_String_2(lcA1);
return stA0;

};
c['toString__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Lio_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_proto']);
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_2Lnet_java_html_BrwsrCtx_2.call(stA0, stA1);
return stA0;

};
c['clone__Lio_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Lio_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_2Lnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
var stA0 = new io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, lcA1);
var lcA2 = stA0;
var stA0 = lcA2;var stA1 = lcA0.getVisibleCreateButon__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_visibleCreateButon'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getDefaultitemview__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_defaultitemview'] = stA1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_proto'];var stA1 = lcA2.getFilters__Ljava_util_List_2();
invoker.cloneList__VLjava_util_Collection_2Lnet_java_html_BrwsrCtx_2Ljava_util_Collection_2(stA0,stA1, lcA1, lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_filters']);
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_proto'];var stA1 = lcA2.getColumns__Ljava_util_List_2();
invoker.cloneList__VLjava_util_Collection_2Lnet_java_html_BrwsrCtx_2Ljava_util_Collection_2(stA0,stA1, lcA1, lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_columns']);
var stA0 = lcA2;var stA1 = lcA0.getListItemCount__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_listItemCount'] = stA1;
var stA0 = lcA2;if ((lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_detailComponentDefinition']) !== null) { gt = 77; break IF; }
var stA1 = null;{ gt = 101; break IF; }
    }
    X_77: for (;;) { IF: if (gt <= 77) {

if ((lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_detailComponentDefinition']) !== (c._TYPE())) { gt = 93; break IF; }
var stA1 = c._TYPE();{ gt = 101; break IF; }
    }
    X_93: for (;;) { IF: if (gt <= 93) {

var stA1 = lcA0.getDetailComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, lcA1);
    }
    X_101: for (;;) { IF: if (gt <= 101) {
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_detailComponentDefinition'] = stA1;
var stA0 = lcA2;if ((lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_actionMenuComponentDefinition']) !== null) { gt = 116; break IF; }
var stA1 = null;{ gt = 140; break IF; }
    }
    X_116: for (;;) { IF: if (gt <= 116) {

if ((lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_actionMenuComponentDefinition']) !== (c._TYPE())) { gt = 132; break IF; }
var stA1 = c._TYPE();{ gt = 140; break IF; }
    }
    X_132: for (;;) { IF: if (gt <= 132) {

var stA1 = lcA0.getActionMenuComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, lcA1);
    }
    X_140: for (;;) { IF: if (gt <= 140) {
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_actionMenuComponentDefinition'] = stA1;
var stA0 = lcA2;if ((lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_collectionComponentDefinition']) !== null) { gt = 155; break IF; }
var stA1 = null;{ gt = 179; break IF; }
    }
    X_155: for (;;) { IF: if (gt <= 155) {

if ((lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_collectionComponentDefinition']) !== (c._TYPE())) { gt = 171; break IF; }
var stA1 = c._TYPE();{ gt = 179; break IF; }
    }
    X_171: for (;;) { IF: if (gt <= 171) {

var stA1 = lcA0.getCollectionComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, lcA1);
    }
    X_179: for (;;) { IF: if (gt <= 179) {
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_collectionComponentDefinition'] = stA1;
var stA0 = lcA2;if ((lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_searchBoxComponentDefinition']) !== null) { gt = 194; break IF; }
var stA1 = null;{ gt = 218; break IF; }
    }
    X_194: for (;;) { IF: if (gt <= 194) {

if ((lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_searchBoxComponentDefinition']) !== (c._TYPE())) { gt = 210; break IF; }
var stA1 = c._TYPE();{ gt = 218; break IF; }
    }
    X_210: for (;;) { IF: if (gt <= 210) {

var stA1 = lcA0.getSearchBoxComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, lcA1);
    }
    X_218: for (;;) { IF: if (gt <= 218) {
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_searchBoxComponentDefinition'] = stA1;
return lcA2;

    }
}}}}}}}}}}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.applyBindings__Lio_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_2 = function() {
  var  lcA0 = this;
invoker.applyBindings__V(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_proto']);
return lcA0;

};
c['applyBindings__Lio_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_2'] = m;

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

var stI0 = lcA1 != null && lcA1['$instOf_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration'] ? 1 : 0;
if ((stI0) != 0) { gt = 16; break IF; }
return 0;
    }
    X_16: for (;;) { IF: if (gt <= 16) {

if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.genericlist.GenericlistConfiguration');
var lcA2 = lcA1;
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_visibleCreateButon'], lcA2['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_visibleCreateButon']);
if ((stI0) != 0) { gt = 40; break IF; }
return 0;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_defaultitemview'], lcA2['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_defaultitemview']);
if ((stI0) != 0) { gt = 59; break IF; }
return 0;
    }
    X_59: for (;;) { IF: if (gt <= 59) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_filters']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_filters']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 86; break IF; }
return 0;
    }
    X_86: for (;;) { IF: if (gt <= 86) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_columns']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_columns']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 113; break IF; }
return 0;
    }
    X_113: for (;;) { IF: if (gt <= 113) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_listItemCount'], lcA2['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_listItemCount']);
if ((stI0) != 0) { gt = 132; break IF; }
return 0;
    }
    X_132: for (;;) { IF: if (gt <= 132) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_detailComponentDefinition']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_detailComponentDefinition']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 159; break IF; }
return 0;
    }
    X_159: for (;;) { IF: if (gt <= 159) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_actionMenuComponentDefinition']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_actionMenuComponentDefinition']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 186; break IF; }
return 0;
    }
    X_186: for (;;) { IF: if (gt <= 186) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_collectionComponentDefinition']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_collectionComponentDefinition']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 213; break IF; }
return 0;
    }
    X_213: for (;;) { IF: if (gt <= 213) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_searchBoxComponentDefinition']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_searchBoxComponentDefinition']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 240; break IF; }
return 0;
    }
    X_240: for (;;) { IF: if (gt <= 240) {

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
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_visibleCreateButon'], lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_defaultitemview'], lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_filters']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_columns']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_listItemCount'], lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_detailComponentDefinition']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_actionMenuComponentDefinition']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_collectionComponentDefinition']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_searchBoxComponentDefinition']);
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
var stA0 = lcA0.clone__Lio_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_2();
return stA0;

};
c['clone__Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.access$100__Lio_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration$Html4JavaType_2 = function() {
return c._TYPE();

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_2 = function(lcA0) {
return lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_proto'];

};
    m.access = 4104;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration$1_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2.call(lcA0, lcA1, lcA2);
return;

};
    m.access = 4096;
    m.cls = CLS;
    m = c.access$400__Lio_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_2Lio_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_2Lnet_java_html_BrwsrCtx_2 = function(lcA0, lcA1) {
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_2Lnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
return stA0;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration$Html4JavaType;
(refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration$Html4JavaType || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration$Html4JavaType = io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration$Html4JavaType(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration$1_2.call(stA0, null);
c._TYPE(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_genericlist_GenericlistConfigurationfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration', { value : true });
      vm.java_lang_Cloneable(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_genericlist_GenericlistConfigurationfillInstOf });
    io_cloudoffice_platform_cockpit_genericlist_GenericlistConfigurationfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/genericlist/GenericlistConfiguration';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.java_lang_Cloneable(false).constructor.$class
    ]; };
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$GenericlistManager;
    var refs_io_cloudoffice_platform_cockpit_api_ComponentDef;
    var refs_net_java_html_json_Models;
    var refs_net_java_html_BrwsrCtx;
    var refs_io_cloudoffice_platform_cockpit_genericlist_FilterType;
    var refs_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn;
    var refs_java_lang_StringBuilder;
    var refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration$Html4JavaType;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_proto'] = null;
    this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_visibleCreateButon'] = null;
    this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_defaultitemview'] = null;
    this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_filters'] = null;
    this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_columns'] = null;
    this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_listItemCount'] = null;
    this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_detailComponentDefinition'] = null;
    this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_actionMenuComponentDefinition'] = null;
    this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_collectionComponentDefinition'] = null;
    this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_prop_searchBoxComponentDefinition'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration = registerClass(exports,'io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration',io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration);


function io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration$Html4JavaType() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration$Html4JavaType;
  if (!CLS.$class) {
    var pp = vm.org_netbeans_html_json_spi_Proto$Type(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_org_netbeans_html_json_spi_Proto$Type || (refs_org_netbeans_html_json_spi_Proto$Type = vm.org_netbeans_html_json_spi_Proto$Type(false))).constructor['cons__VLjava_lang_Class_2Ljava_lang_Class_2II'].call(lcA0, (refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration = io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration(false))).constructor.$class, (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$GenericlistManager || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$GenericlistManager = io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$GenericlistManager(false))).constructor.$class, (9), 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"visibleCreateButon", 0, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"defaultitemview", 1, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"filters", 2, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"columns", 3, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"listItemCount", 4, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"detailComponentDefinition", 5, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"actionMenuComponentDefinition", (6), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"collectionComponentDefinition", (7), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"searchBoxComponentDefinition", (8), 0, 0);
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.setValue__VLio_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0:{ gt = 52; break IF; }
  case 1:{ gt = 69; break IF; }
  case 2:{ gt = 86; break IF; }
  case 3:{ gt = 100; break IF; }
  case 4:{ gt = 114; break IF; }
  case 5:{ gt = 131; break IF; }
  case 6:{ gt = 148; break IF; }
  case 7:{ gt = 165; break IF; }
  case 8:{ gt = 182; break IF; }
  default: { gt = 199; break IF; }
}
    }
    X_52: for (;;) { IF: if (gt <= 52) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration = io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration(false))).access$100__Lio_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setVisibleCreateButon__VLjava_lang_String_2(stA1);
return;
    }
    X_69: for (;;) { IF: if (gt <= 69) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration = io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration(false))).access$100__Lio_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setDefaultitemview__VLjava_lang_String_2(stA1);
return;
    }
    X_86: for (;;) { IF: if (gt <= 86) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration = io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration(false))).access$100__Lio_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration$Html4JavaType_2();
var stA1 = lcA1.getFilters__Ljava_util_List_2();
invoker.replaceValue__VLjava_util_Collection_2Ljava_lang_Class_2Ljava_lang_Object_2(stA0,stA1, (refs_io_cloudoffice_platform_cockpit_genericlist_FilterType || (refs_io_cloudoffice_platform_cockpit_genericlist_FilterType = io_cloudoffice_platform_cockpit_genericlist_FilterType(false))).constructor.$class, lcA3);
return;
    }
    X_100: for (;;) { IF: if (gt <= 100) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration = io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration(false))).access$100__Lio_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration$Html4JavaType_2();
var stA1 = lcA1.getColumns__Ljava_util_List_2();
invoker.replaceValue__VLjava_util_Collection_2Ljava_lang_Class_2Ljava_lang_Object_2(stA0,stA1, (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn = io_cloudoffice_platform_cockpit_genericlist_GenericListColumn(false))).constructor.$class, lcA3);
return;
    }
    X_114: for (;;) { IF: if (gt <= 114) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration = io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration(false))).access$100__Lio_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setListItemCount__VLjava_lang_String_2(stA1);
return;
    }
    X_131: for (;;) { IF: if (gt <= 131) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration = io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration(false))).access$100__Lio_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_api_ComponentDef']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.api.ComponentDef');
stA0.setDetailComponentDefinition__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2(stA1);
return;
    }
    X_148: for (;;) { IF: if (gt <= 148) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration = io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration(false))).access$100__Lio_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_api_ComponentDef']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.api.ComponentDef');
stA0.setActionMenuComponentDefinition__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2(stA1);
return;
    }
    X_165: for (;;) { IF: if (gt <= 165) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration = io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration(false))).access$100__Lio_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_api_ComponentDef']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.api.ComponentDef');
stA0.setCollectionComponentDefinition__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2(stA1);
return;
    }
    X_182: for (;;) { IF: if (gt <= 182) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration = io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration(false))).access$100__Lio_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_api_ComponentDef']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.api.ComponentDef');
stA0.setSearchBoxComponentDefinition__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2(stA1);
return;
    }
    X_199: for (;;) { IF: if (gt <= 199) {
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

    }
}}}}}}}}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_2I = function(lcA1, lcI2) {
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
  case 8:{ gt = 92; break IF; }
  default: { gt = 97; break IF; }
}
    }
    X_52: for (;;) { IF: if (gt <= 52) {

var stA0 = lcA1.getVisibleCreateButon__Ljava_lang_String_2();
return stA0;
    }
    X_57: for (;;) { IF: if (gt <= 57) {

var stA0 = lcA1.getDefaultitemview__Ljava_lang_String_2();
return stA0;
    }
    X_62: for (;;) { IF: if (gt <= 62) {

var stA0 = lcA1.getFilters__Ljava_util_List_2();
return stA0;
    }
    X_67: for (;;) { IF: if (gt <= 67) {

var stA0 = lcA1.getColumns__Ljava_util_List_2();
return stA0;
    }
    X_72: for (;;) { IF: if (gt <= 72) {

var stA0 = lcA1.getListItemCount__Ljava_lang_String_2();
return stA0;
    }
    X_77: for (;;) { IF: if (gt <= 77) {

var stA0 = lcA1.getDetailComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
return stA0;
    }
    X_82: for (;;) { IF: if (gt <= 82) {

var stA0 = lcA1.getActionMenuComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
return stA0;
    }
    X_87: for (;;) { IF: if (gt <= 87) {

var stA0 = lcA1.getCollectionComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
return stA0;
    }
    X_92: for (;;) { IF: if (gt <= 92) {

var stA0 = lcA1.getSearchBoxComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
return stA0;
    }
    X_97: for (;;) { IF: if (gt <= 97) {
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

    }
}}}}}}}}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.call__VLio_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.genericlist.GenericlistConfiguration');
var stA0 = (refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration = io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_2(lcA1);
return stA0;

};
c['protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.onChange__VLio_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLio_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
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
    m = c.read__Lio_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = new io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration;
(refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration = io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration(false))).constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration$1_2.call(stA0, lcA1, lcA2, null);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.cloneTo__Lio_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_2Lio_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = (refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration = io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration(false))).access$400__Lio_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_2Lio_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.genericlist.GenericlistConfiguration');
lcA0.onMessage__VLio_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_2IILjava_lang_Object_2_3Ljava_lang_Object_2(lcA1, lcI2, lcI3, lcA4, lcA5);
return;

};
c['onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.onChange__VLjava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.genericlist.GenericlistConfiguration');
lcA0.onChange__VLio_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_2I(lcA1, lcI2);
return;

};
c['onChange__VLjava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = lcA0.read__Lio_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2(lcA1, lcA2);
return stA0;

};
c['read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.genericlist.GenericlistConfiguration');
var stA0 = lcA0.cloneTo__Lio_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_2Lio_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
c['cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.genericlist.GenericlistConfiguration');
lcA0.call__VLio_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_2ILjava_lang_Object_2Ljava_lang_Object_2(lcA1, lcI2, lcA3, lcA4);
return;

};
c['call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Ljava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.genericlist.GenericlistConfiguration');
var stA0 = lcA0.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_2I(lcA1, lcI2);
return stA0;

};
c['getValue__Ljava_lang_Object_2Ljava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.setValue__VLjava_lang_Object_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.genericlist.GenericlistConfiguration');
lcA0.setValue__VLio_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_2ILjava_lang_Object_2(lcA1, lcI2, lcA3);
return;

};
c['setValue__VLjava_lang_Object_2ILjava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration$1_2 = function(lcA1) {
  var  lcA0 = this;
c.constructor.cons__V.call(lcA0);
return;

};
    m.access = 4096;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration$Html4JavaTypefillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration$Html4JavaType', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration$Html4JavaTypefillInstOf });
    io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration$Html4JavaTypefillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/genericlist/GenericlistConfiguration$Html4JavaType';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration;
    var refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$GenericlistManager;
    var refs_org_netbeans_html_json_spi_Proto$Type;
    var refs_java_lang_String;
    var refs_io_cloudoffice_platform_cockpit_genericlist_FilterType;
    var refs_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn;
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
vm.io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration$Html4JavaType = io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration$Html4JavaType;

vm.net_java_html_json_Models = link('net/java/html/json/Models', function(f) { vm.net_java_html_json_Models =  f; });

function io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$GenericlistManager() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$GenericlistManager;
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
    function io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$GenericlistManagerfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$GenericlistManager', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$GenericlistManagerfillInstOf });
    io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$GenericlistManagerfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/genericlist/GenericListComponent$GenericlistManager';
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
vm.io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$GenericlistManager = registerClass(exports,'io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$GenericlistManager',io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$GenericlistManager);


function io_cloudoffice_platform_cockpit_genericlist_GenericlistView() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_genericlist_GenericlistView;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_TYPE'] = null;
  m = c._TYPE = function (v) {  if (arguments.length == 1) CLS['fld_TYPE'] = v; return CLS['fld_TYPE']; };
  m = c._proto = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_proto'] = v; return this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_proto']; };
  m = c._prop_instance = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_instance'] = v; return this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_instance']; };
  m = c._prop_designerMode = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_designerMode'] = v; return this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_designerMode']; };
  m = c._prop_configuration = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_configuration'] = v; return this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_configuration']; };
  m = c._prop_visible = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_visible'] = v; return this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_visible']; };
  m = c._prop_gridViewEnabled = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_gridViewEnabled'] = v; return this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_gridViewEnabled']; };
  m = c._prop_isVisibleCreateButon = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_isVisibleCreateButon'] = v; return this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_isVisibleCreateButon']; };
  m = c._prop_configuredFilters = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_configuredFilters'] = v; return this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_configuredFilters']; };
  m = c._prop_listnotavailablemessagedisplay = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_listnotavailablemessagedisplay'] = v; return this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_listnotavailablemessagedisplay']; };
  m = c._prop_batchSelected = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_batchSelected'] = v; return this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_batchSelected']; };
  m = c._prop_totalItems = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_totalItems'] = v; return this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_totalItems']; };
  m = c._prop_currentItemCount = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_currentItemCount'] = v; return this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_currentItemCount']; };
  m = c._prop_hasMoreItemAvailable = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_hasMoreItemAvailable'] = v; return this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_hasMoreItemAvailable']; };
  m = c._prop_pageNumber = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_pageNumber'] = v; return this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_pageNumber']; };
  m = c._prop_enableNext = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_enableNext'] = v; return this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_enableNext']; };
  m = c._prop_enablePrevious = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_enablePrevious'] = v; return this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_enablePrevious']; };
  m = c._prop_rows = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_rows'] = v; return this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_rows']; };
  m = c._prop_configuredColumns = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_configuredColumns'] = v; return this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_configuredColumns']; };
  m = c._prop_detailComponentDefinition = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_detailComponentDefinition'] = v; return this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_detailComponentDefinition']; };
  m = c._prop_actionMenuComponentDefinition = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_actionMenuComponentDefinition'] = v; return this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_actionMenuComponentDefinition']; };
  m = c._prop_collectionComponentDefinition = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_collectionComponentDefinition'] = v; return this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_collectionComponentDefinition']; };
  m = c._prop_searchBoxComponentDefinition = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_searchBoxComponentDefinition'] = v; return this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_searchBoxComponentDefinition']; };
  m = c._prop_loader = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_loader'] = v; return this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_loader']; };
  m = c._prop_headerTitle = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_headerTitle'] = v; return this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_headerTitle']; };
    m = c.modelFor__Ljava_lang_Class_2 = function() {
return (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent = io_cloudoffice_platform_cockpit_genericlist_GenericListComponent(false))).constructor.$class;

};
    m.access = 10;
    m.cls = CLS;
    m = c.getInstance__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_proto'],"instance");
return lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_instance'];

};
c['getInstance__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setInstance__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_instance'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_instance'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_proto'],"instance", lcA2, lcA1);
return;

    }
}}
};
c['setInstance__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isDesignerMode__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_proto'],"designerMode");
return lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_designerMode'];

};
c['isDesignerMode__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setDesignerMode__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_designerMode']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_designerMode'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_proto'];var stA1 = "designerMode";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2, stA3);
return;

    }
}}
};
c['setDesignerMode__VZ'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getConfiguration__Lio_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_proto'],"configuration");
if ((lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_configuration']) !== (c._TYPE())) { gt = 40; break IF; }
var stA0 = lcA0;var stA1 = new io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration;
(refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration = io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration(false))).constructor.cons__V.call(stA1);
var stA2 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_proto']);
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, stA2);
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_configuration'] = stA1;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

if (lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_configuration'] !== null && !lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_configuration']['$instOf_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration']) vm.java_lang_Class(false).castEx(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_configuration'], 'io.cloudoffice.platform.cockpit.genericlist.GenericlistConfiguration');
return lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_configuration'];

    }
}}
};
c['getConfiguration__Lio_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setConfiguration__VLio_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_configuration'];
if ((lcA2) !== (lcA1)) { gt = 18; break IF; }
return;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_configuration'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_proto'],"configuration", lcA2, lcA1);
return;

    }
}}
};
c['setConfiguration__VLio_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isVisible__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_proto'],"visible");
return lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_visible'];

};
c['isVisible__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setVisible__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_visible']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_visible'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_proto'];var stA1 = "visible";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2, stA3);
return;

    }
}}
};
c['setVisible__VZ'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isGridViewEnabled__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_proto'],"gridViewEnabled");
return lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_gridViewEnabled'];

};
c['isGridViewEnabled__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setGridViewEnabled__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_gridViewEnabled']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_gridViewEnabled'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_proto'];var stA1 = "gridViewEnabled";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2, stA3);
return;

    }
}}
};
c['setGridViewEnabled__VZ'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isIsVisibleCreateButon__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_proto'],"isVisibleCreateButon");
return lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_isVisibleCreateButon'];

};
c['isIsVisibleCreateButon__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setIsVisibleCreateButon__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_isVisibleCreateButon']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_isVisibleCreateButon'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_proto'];var stA1 = "isVisibleCreateButon";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2, stA3);
return;

    }
}}
};
c['setIsVisibleCreateButon__VZ'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getConfiguredFilters__Ljava_util_List_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_proto'],"configuredFilters");
return lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_configuredFilters'];

};
c['getConfiguredFilters__Ljava_util_List_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isListnotavailablemessagedisplay__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_proto'],"listnotavailablemessagedisplay");
return lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_listnotavailablemessagedisplay'];

};
c['isListnotavailablemessagedisplay__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setListnotavailablemessagedisplay__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_listnotavailablemessagedisplay']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_listnotavailablemessagedisplay'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_proto'];var stA1 = "listnotavailablemessagedisplay";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2, stA3);
return;

    }
}}
};
c['setListnotavailablemessagedisplay__VZ'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isBatchSelected__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_proto'],"batchSelected");
return lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_batchSelected'];

};
c['isBatchSelected__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setBatchSelected__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_batchSelected']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_batchSelected'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_proto'];var stA1 = "batchSelected";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2, stA3);
return;

    }
}}
};
c['setBatchSelected__VZ'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getTotalItems__I = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_proto'],"totalItems");
return lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_totalItems'];

};
c['getTotalItems__I'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setTotalItems__VI = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_proto']);
var stA0 = (refs_java_lang_Integer || (refs_java_lang_Integer = vm.java_lang_Integer(false)))['valueOf__Ljava_lang_Integer_2I'](lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_totalItems']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Integer || (refs_java_lang_Integer = vm.java_lang_Integer(false)))['valueOf__Ljava_lang_Integer_2I'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_totalItems'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_proto'];var stA1 = "totalItems";var stA2 = lcA2;var stA3 = (refs_java_lang_Integer || (refs_java_lang_Integer = vm.java_lang_Integer(false)))['valueOf__Ljava_lang_Integer_2I'](lcI1);
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2, stA3);
return;

    }
}}
};
c['setTotalItems__VI'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getCurrentItemCount__I = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_proto'],"currentItemCount");
return lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_currentItemCount'];

};
c['getCurrentItemCount__I'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setCurrentItemCount__VI = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_proto']);
var stA0 = (refs_java_lang_Integer || (refs_java_lang_Integer = vm.java_lang_Integer(false)))['valueOf__Ljava_lang_Integer_2I'](lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_currentItemCount']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Integer || (refs_java_lang_Integer = vm.java_lang_Integer(false)))['valueOf__Ljava_lang_Integer_2I'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_currentItemCount'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_proto'];var stA1 = "currentItemCount";var stA2 = lcA2;var stA3 = (refs_java_lang_Integer || (refs_java_lang_Integer = vm.java_lang_Integer(false)))['valueOf__Ljava_lang_Integer_2I'](lcI1);
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2, stA3);
return;

    }
}}
};
c['setCurrentItemCount__VI'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isHasMoreItemAvailable__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_proto'],"hasMoreItemAvailable");
return lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_hasMoreItemAvailable'];

};
c['isHasMoreItemAvailable__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setHasMoreItemAvailable__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_hasMoreItemAvailable']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_hasMoreItemAvailable'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_proto'];var stA1 = "hasMoreItemAvailable";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2, stA3);
var lcA3 = lcA0;
(refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent = io_cloudoffice_platform_cockpit_genericlist_GenericListComponent(false))).paginationNavigation__VLio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2(lcA3);
return;

    }
}}
};
c['setHasMoreItemAvailable__VZ'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getPageNumber__I = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_proto'],"pageNumber");
return lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_pageNumber'];

};
c['getPageNumber__I'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setPageNumber__VI = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_proto']);
var stA0 = (refs_java_lang_Integer || (refs_java_lang_Integer = vm.java_lang_Integer(false)))['valueOf__Ljava_lang_Integer_2I'](lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_pageNumber']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Integer || (refs_java_lang_Integer = vm.java_lang_Integer(false)))['valueOf__Ljava_lang_Integer_2I'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_pageNumber'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_proto'];var stA1 = "pageNumber";var stA2 = lcA2;var stA3 = (refs_java_lang_Integer || (refs_java_lang_Integer = vm.java_lang_Integer(false)))['valueOf__Ljava_lang_Integer_2I'](lcI1);
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2, stA3);
return;

    }
}}
};
c['setPageNumber__VI'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isEnableNext__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_proto'],"enableNext");
return lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_enableNext'];

};
c['isEnableNext__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setEnableNext__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_enableNext']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_enableNext'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_proto'];var stA1 = "enableNext";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2, stA3);
return;

    }
}}
};
c['setEnableNext__VZ'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isEnablePrevious__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_proto'],"enablePrevious");
return lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_enablePrevious'];

};
c['isEnablePrevious__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setEnablePrevious__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_proto']);
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_enablePrevious']);
var lcA2 = stA0;
var stA0 = c._TYPE();var stA1 = lcA2;var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 30; break IF; }
return;
    }
    X_30: for (;;) { IF: if (gt <= 30) {

lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_enablePrevious'] = lcI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_proto'];var stA1 = "enablePrevious";var stA2 = lcA2;var stA3 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2, stA3);
return;

    }
}}
};
c['setEnablePrevious__VZ'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getRows__Ljava_util_List_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_proto'],"rows");
return lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_rows'];

};
c['getRows__Ljava_util_List_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getConfiguredColumns__Ljava_util_List_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_proto'],"configuredColumns");
return lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_configuredColumns'];

};
c['getConfiguredColumns__Ljava_util_List_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getDetailComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_proto'],"detailComponentDefinition");
if ((lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_detailComponentDefinition']) !== (c._TYPE())) { gt = 40; break IF; }
var stA0 = lcA0;var stA1 = new vm.io_cloudoffice_platform_cockpit_api_ComponentDef;
(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor['cons__V'].call(stA1);
var stA2 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_proto']);
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, stA2);
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_detailComponentDefinition'] = stA1;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

if (lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_detailComponentDefinition'] !== null && !lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_detailComponentDefinition']['$instOf_io_cloudoffice_platform_cockpit_api_ComponentDef']) vm.java_lang_Class(false).castEx(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_detailComponentDefinition'], 'io.cloudoffice.platform.cockpit.api.ComponentDef');
return lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_detailComponentDefinition'];

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

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_detailComponentDefinition'];
if ((lcA2) !== (lcA1)) { gt = 18; break IF; }
return;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_detailComponentDefinition'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_proto'],"detailComponentDefinition", lcA2, lcA1);
return;

    }
}}
};
c['setDetailComponentDefinition__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getActionMenuComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_proto'],"actionMenuComponentDefinition");
if ((lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_actionMenuComponentDefinition']) !== (c._TYPE())) { gt = 40; break IF; }
var stA0 = lcA0;var stA1 = new vm.io_cloudoffice_platform_cockpit_api_ComponentDef;
(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor['cons__V'].call(stA1);
var stA2 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_proto']);
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, stA2);
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_actionMenuComponentDefinition'] = stA1;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

if (lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_actionMenuComponentDefinition'] !== null && !lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_actionMenuComponentDefinition']['$instOf_io_cloudoffice_platform_cockpit_api_ComponentDef']) vm.java_lang_Class(false).castEx(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_actionMenuComponentDefinition'], 'io.cloudoffice.platform.cockpit.api.ComponentDef');
return lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_actionMenuComponentDefinition'];

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

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_actionMenuComponentDefinition'];
if ((lcA2) !== (lcA1)) { gt = 18; break IF; }
return;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_actionMenuComponentDefinition'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_proto'],"actionMenuComponentDefinition", lcA2, lcA1);
return;

    }
}}
};
c['setActionMenuComponentDefinition__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getCollectionComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_proto'],"collectionComponentDefinition");
if ((lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_collectionComponentDefinition']) !== (c._TYPE())) { gt = 40; break IF; }
var stA0 = lcA0;var stA1 = new vm.io_cloudoffice_platform_cockpit_api_ComponentDef;
(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor['cons__V'].call(stA1);
var stA2 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_proto']);
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, stA2);
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_collectionComponentDefinition'] = stA1;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

if (lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_collectionComponentDefinition'] !== null && !lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_collectionComponentDefinition']['$instOf_io_cloudoffice_platform_cockpit_api_ComponentDef']) vm.java_lang_Class(false).castEx(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_collectionComponentDefinition'], 'io.cloudoffice.platform.cockpit.api.ComponentDef');
return lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_collectionComponentDefinition'];

    }
}}
};
c['getCollectionComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setCollectionComponentDefinition__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_collectionComponentDefinition'];
if ((lcA2) !== (lcA1)) { gt = 18; break IF; }
return;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_collectionComponentDefinition'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_proto'],"collectionComponentDefinition", lcA2, lcA1);
return;

    }
}}
};
c['setCollectionComponentDefinition__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getSearchBoxComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_proto'],"searchBoxComponentDefinition");
if ((lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_searchBoxComponentDefinition']) !== (c._TYPE())) { gt = 40; break IF; }
var stA0 = lcA0;var stA1 = new vm.io_cloudoffice_platform_cockpit_api_ComponentDef;
(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor['cons__V'].call(stA1);
var stA2 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_proto']);
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, stA2);
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_searchBoxComponentDefinition'] = stA1;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

if (lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_searchBoxComponentDefinition'] !== null && !lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_searchBoxComponentDefinition']['$instOf_io_cloudoffice_platform_cockpit_api_ComponentDef']) vm.java_lang_Class(false).castEx(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_searchBoxComponentDefinition'], 'io.cloudoffice.platform.cockpit.api.ComponentDef');
return lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_searchBoxComponentDefinition'];

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

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_searchBoxComponentDefinition'];
if ((lcA2) !== (lcA1)) { gt = 18; break IF; }
return;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_searchBoxComponentDefinition'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_proto'],"searchBoxComponentDefinition", lcA2, lcA1);
return;

    }
}}
};
c['setSearchBoxComponentDefinition__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getLoader__Lio_cloudoffice_platform_cockpit_api_HelperItemView_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_proto'],"loader");
if ((lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_loader']) !== (c._TYPE())) { gt = 40; break IF; }
var stA0 = lcA0;var stA1 = new vm.io_cloudoffice_platform_cockpit_api_HelperItemView;
(refs_io_cloudoffice_platform_cockpit_api_HelperItemView || (refs_io_cloudoffice_platform_cockpit_api_HelperItemView = vm.io_cloudoffice_platform_cockpit_api_HelperItemView(false))).constructor['cons__V'].call(stA1);
var stA2 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_proto']);
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, stA2);
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_loader'] = stA1;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

if (lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_loader'] !== null && !lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_loader']['$instOf_io_cloudoffice_platform_cockpit_api_HelperItemView']) vm.java_lang_Class(false).castEx(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_loader'], 'io.cloudoffice.platform.cockpit.api.HelperItemView');
return lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_loader'];

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

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_loader'];
if ((lcA2) !== (lcA1)) { gt = 18; break IF; }
return;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_loader'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_proto'],"loader", lcA2, lcA1);
return;

    }
}}
};
c['setLoader__VLio_cloudoffice_platform_cockpit_api_HelperItemView_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getHeaderTitle__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_proto'],"headerTitle");
return lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_headerTitle'];

};
c['getHeaderTitle__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setHeaderTitle__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_proto']);
var lcA2 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_headerTitle'];
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA2, lcA1);
if ((stI0) == 0) { gt = 24; break IF; }
return;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_headerTitle'] = lcA1;
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_proto'],"headerTitle", lcA2, lcA1);
return;

    }
}}
};
c['setHeaderTitle__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.createProto__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2(c._TYPE(),lcA0, lcA1);
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_proto'] = stA1;
var stA0 = lcA0;var stA1 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_proto'];var stA2 = "configuredFilters";var stI3 = -1;var stA4 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, 0);
var stA1 = invoker.createList__Ljava_util_List_2Ljava_lang_String_2I_3Ljava_lang_String_2(stA1,stA2, stI3, stA4);
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_configuredFilters'] = stA1;
var stA0 = lcA0;var stA1 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_proto'];var stA2 = "rows";var stI3 = -1;var stA4 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, 0);
var stA1 = invoker.createList__Ljava_util_List_2Ljava_lang_String_2I_3Ljava_lang_String_2(stA1,stA2, stI3, stA4);
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_rows'] = stA1;
var stA0 = lcA0;var stA1 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_proto'];var stA2 = "configuredColumns";var stI3 = -1;var stA4 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, 0);
var stA1 = invoker.createList__Ljava_util_List_2Ljava_lang_String_2I_3Ljava_lang_String_2(stA1,stA2, stI3, stA4);
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_configuredColumns'] = stA1;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = (refs_net_java_html_BrwsrCtx || (refs_net_java_html_BrwsrCtx = vm.net_java_html_BrwsrCtx(false)))['findDefault__Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'](c.constructor.$class);
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, stA1);
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_configuration'] = c._TYPE();
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_detailComponentDefinition'] = c._TYPE();
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_actionMenuComponentDefinition'] = c._TYPE();
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_collectionComponentDefinition'] = c._TYPE();
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_searchBoxComponentDefinition'] = c._TYPE();
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_loader'] = c._TYPE();
return;

};
CLS['cons__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLjava_lang_String_2ZLio_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_2ZZZZZIIZIZZLio_cloudoffice_platform_cockpit_api_ComponentDef_2Lio_cloudoffice_platform_cockpit_api_ComponentDef_2Lio_cloudoffice_platform_cockpit_api_ComponentDef_2Lio_cloudoffice_platform_cockpit_api_ComponentDef_2Lio_cloudoffice_platform_cockpit_api_HelperItemView_2Ljava_lang_String_2_3Lio_cloudoffice_platform_cockpit_genericlist_FilterType_2 = function(lcA1, lcI2, lcA3, lcI4, lcI5, lcI6, lcI7, lcI8, lcI9, lcI10, lcI11, lcI12, lcI13, lcI14, lcA15, lcA16, lcA17, lcA18, lcA19, lcA20, lcA21) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = (refs_net_java_html_BrwsrCtx || (refs_net_java_html_BrwsrCtx = vm.net_java_html_BrwsrCtx(false)))['findDefault__Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'](c.constructor.$class);
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, stA1);
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_instance'] = lcA1;
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_designerMode'] = lcI2;
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_configuration'] = lcA3;
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_visible'] = lcI4;
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_gridViewEnabled'] = lcI5;
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_isVisibleCreateButon'] = lcI6;
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_listnotavailablemessagedisplay'] = lcI7;
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_batchSelected'] = lcI8;
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_totalItems'] = lcI9;
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_currentItemCount'] = lcI10;
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_hasMoreItemAvailable'] = lcI11;
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_pageNumber'] = lcI12;
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_enableNext'] = lcI13;
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_enablePrevious'] = lcI14;
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_detailComponentDefinition'] = lcA15;
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_actionMenuComponentDefinition'] = lcA16;
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_collectionComponentDefinition'] = lcA17;
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_searchBoxComponentDefinition'] = lcA18;
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_loader'] = lcA19;
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_headerTitle'] = lcA20;
invoker.initTo__VLjava_util_Collection_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_proto'],lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_configuredFilters'], lcA21);
return;

};
CLS['cons__VLjava_lang_String_2ZLio_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_2ZZZZZIIZIZZLio_cloudoffice_platform_cockpit_api_ComponentDef_2Lio_cloudoffice_platform_cockpit_api_ComponentDef_2Lio_cloudoffice_platform_cockpit_api_ComponentDef_2Lio_cloudoffice_platform_cockpit_api_ComponentDef_2Lio_cloudoffice_platform_cockpit_api_HelperItemView_2Ljava_lang_String_2_3Lio_cloudoffice_platform_cockpit_genericlist_FilterType_2'] = m;

    m.access = 129;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, (23));
var lcA3 = stA0;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_proto'];var stA1 = lcA2;var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, (23));
Array.at(stA2, 0, "instance");
Array.at(stA2, 1, "designerMode");
Array.at(stA2, 2, "configuration");
Array.at(stA2, 3, "visible");
Array.at(stA2, 4, "gridViewEnabled");
Array.at(stA2, 5, "isVisibleCreateButon");
Array.at(stA2, (6), "configuredFilters");
Array.at(stA2, (7), "listnotavailablemessagedisplay");
Array.at(stA2, (8), "batchSelected");
Array.at(stA2, (9), "totalItems");
Array.at(stA2, (10), "currentItemCount");
Array.at(stA2, (11), "hasMoreItemAvailable");
Array.at(stA2, (12), "pageNumber");
Array.at(stA2, (13), "enableNext");
Array.at(stA2, (14), "enablePrevious");
Array.at(stA2, (15), "rows");
Array.at(stA2, (16), "configuredColumns");
Array.at(stA2, (17), "detailComponentDefinition");
Array.at(stA2, (18), "actionMenuComponentDefinition");
Array.at(stA2, (19), "collectionComponentDefinition");
Array.at(stA2, (20), "searchBoxComponentDefinition");
Array.at(stA2, (21), "loader");
Array.at(stA2, (22), "headerTitle");
invoker.extract__VLjava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Object_2(stA0,stA1, stA2, lcA3);
if ((lcA3[0] || Array.at(lcA3, 0)) !== null && !(lcA3[0] || Array.at(lcA3, 0))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[0] || Array.at(lcA3, 0)), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_instance'] = (lcA3[0] || Array.at(lcA3, 0));
var stA0 = lcA0;if (((lcA3[1] || Array.at(lcA3, 1))) !== null) { gt = 179; break IF; }
var stI1 = 0;{ gt = 191; break IF; }
    }
    X_179: for (;;) { IF: if (gt <= 179) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[1] || Array.at(lcA3, 1)));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_191: for (;;) { IF: if (gt <= 191) {
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_designerMode'] = stI1;
var stA0 = lcA0;var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_proto'],(refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration = io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration(false))).constructor.$class, (lcA3[2] || Array.at(lcA3, 2)));
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_configuration'] = stA1;
var stA0 = lcA0;if (((lcA3[3] || Array.at(lcA3, 3))) !== null) { gt = 221; break IF; }
var stI1 = 0;{ gt = 233; break IF; }
    }
    X_221: for (;;) { IF: if (gt <= 221) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[3] || Array.at(lcA3, 3)));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_233: for (;;) { IF: if (gt <= 233) {
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_visible'] = stI1;
var stA0 = lcA0;if (((lcA3[4] || Array.at(lcA3, 4))) !== null) { gt = 247; break IF; }
var stI1 = 0;{ gt = 259; break IF; }
    }
    X_247: for (;;) { IF: if (gt <= 247) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[4] || Array.at(lcA3, 4)));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_259: for (;;) { IF: if (gt <= 259) {
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_gridViewEnabled'] = stI1;
var stA0 = lcA0;if (((lcA3[5] || Array.at(lcA3, 5))) !== null) { gt = 273; break IF; }
var stI1 = 0;{ gt = 285; break IF; }
    }
    X_273: for (;;) { IF: if (gt <= 273) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[5] || Array.at(lcA3, 5)));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_285: for (;;) { IF: if (gt <= 285) {
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_isVisibleCreateButon'] = stI1;
var stA0 = c.useAsArray___3Ljava_lang_Object_2Ljava_lang_Object_2((lcA3[(6)] || Array.at(lcA3, (6))));
var lcA4 = stA0;
var lcI5 = (lcA4).length;
var lcI6 = 0;
    }
    X_305: for (;;) { IF: if (gt <= 305) {

if ((lcI6) >= (lcI5)) { gt = 347; break IF; }
var lcA7 = (lcA4[lcI6] || Array.at(lcA4, lcI6));
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_configuredFilters'];var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_proto'],(refs_io_cloudoffice_platform_cockpit_genericlist_FilterType || (refs_io_cloudoffice_platform_cockpit_genericlist_FilterType = io_cloudoffice_platform_cockpit_genericlist_FilterType(false))).constructor.$class, lcA7);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,stA1);
lcI6++;
{ gt = 0; continue X_305; }
    }
    X_347: for (;;) { IF: if (gt <= 347) {

var stA0 = lcA0;if (((lcA3[(7)] || Array.at(lcA3, (7)))) !== null) { gt = 359; break IF; }
var stI1 = 0;{ gt = 372; break IF; }
    }
    X_359: for (;;) { IF: if (gt <= 359) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[(7)] || Array.at(lcA3, (7))));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_372: for (;;) { IF: if (gt <= 372) {
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_listnotavailablemessagedisplay'] = stI1;
var stA0 = lcA0;if (((lcA3[(8)] || Array.at(lcA3, (8)))) !== null) { gt = 387; break IF; }
var stI1 = 0;{ gt = 400; break IF; }
    }
    X_387: for (;;) { IF: if (gt <= 387) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[(8)] || Array.at(lcA3, (8))));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_400: for (;;) { IF: if (gt <= 400) {
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_batchSelected'] = stI1;
var stA0 = lcA0;if (((lcA3[(9)] || Array.at(lcA3, (9)))) !== null) { gt = 415; break IF; }
var stI1 = 0;{ gt = 428; break IF; }
    }
    X_415: for (;;) { IF: if (gt <= 415) {

var stA1 = invoker.numberValue__Ljava_lang_Number_2Ljava_lang_Object_2(c._TYPE(),(lcA3[(9)] || Array.at(lcA3, (9))));
var stI1 = invoker.intValue__I(stA1);
    }
    X_428: for (;;) { IF: if (gt <= 428) {
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_totalItems'] = stI1;
var stA0 = lcA0;if (((lcA3[(10)] || Array.at(lcA3, (10)))) !== null) { gt = 443; break IF; }
var stI1 = 0;{ gt = 456; break IF; }
    }
    X_443: for (;;) { IF: if (gt <= 443) {

var stA1 = invoker.numberValue__Ljava_lang_Number_2Ljava_lang_Object_2(c._TYPE(),(lcA3[(10)] || Array.at(lcA3, (10))));
var stI1 = invoker.intValue__I(stA1);
    }
    X_456: for (;;) { IF: if (gt <= 456) {
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_currentItemCount'] = stI1;
var stA0 = lcA0;if (((lcA3[(11)] || Array.at(lcA3, (11)))) !== null) { gt = 471; break IF; }
var stI1 = 0;{ gt = 484; break IF; }
    }
    X_471: for (;;) { IF: if (gt <= 471) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[(11)] || Array.at(lcA3, (11))));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_484: for (;;) { IF: if (gt <= 484) {
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_hasMoreItemAvailable'] = stI1;
var stA0 = lcA0;if (((lcA3[(12)] || Array.at(lcA3, (12)))) !== null) { gt = 499; break IF; }
var stI1 = 0;{ gt = 512; break IF; }
    }
    X_499: for (;;) { IF: if (gt <= 499) {

var stA1 = invoker.numberValue__Ljava_lang_Number_2Ljava_lang_Object_2(c._TYPE(),(lcA3[(12)] || Array.at(lcA3, (12))));
var stI1 = invoker.intValue__I(stA1);
    }
    X_512: for (;;) { IF: if (gt <= 512) {
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_pageNumber'] = stI1;
var stA0 = lcA0;if (((lcA3[(13)] || Array.at(lcA3, (13)))) !== null) { gt = 527; break IF; }
var stI1 = 0;{ gt = 540; break IF; }
    }
    X_527: for (;;) { IF: if (gt <= 527) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[(13)] || Array.at(lcA3, (13))));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_540: for (;;) { IF: if (gt <= 540) {
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_enableNext'] = stI1;
var stA0 = lcA0;if (((lcA3[(14)] || Array.at(lcA3, (14)))) !== null) { gt = 555; break IF; }
var stI1 = 0;{ gt = 568; break IF; }
    }
    X_555: for (;;) { IF: if (gt <= 555) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(c._TYPE(),(lcA3[(14)] || Array.at(lcA3, (14))));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_568: for (;;) { IF: if (gt <= 568) {
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_enablePrevious'] = stI1;
var stA0 = c.useAsArray___3Ljava_lang_Object_2Ljava_lang_Object_2((lcA3[(15)] || Array.at(lcA3, (15))));
var lcA4 = stA0;
var lcI5 = (lcA4).length;
var lcI6 = 0;
    }
    X_588: for (;;) { IF: if (gt <= 588) {

if ((lcI6) >= (lcI5)) { gt = 630; break IF; }
var lcA7 = (lcA4[lcI6] || Array.at(lcA4, lcI6));
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_rows'];var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_proto'],(refs_io_cloudoffice_platform_cockpit_genericlist_GenericListRow || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListRow = io_cloudoffice_platform_cockpit_genericlist_GenericListRow(false))).constructor.$class, lcA7);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,stA1);
lcI6++;
{ gt = 0; continue X_588; }
    }
    X_630: for (;;) { IF: if (gt <= 630) {

var stA0 = c.useAsArray___3Ljava_lang_Object_2Ljava_lang_Object_2((lcA3[(16)] || Array.at(lcA3, (16))));
var lcA4 = stA0;
var lcI5 = (lcA4).length;
var lcI6 = 0;
    }
    X_647: for (;;) { IF: if (gt <= 647) {

if ((lcI6) >= (lcI5)) { gt = 689; break IF; }
var lcA7 = (lcA4[lcI6] || Array.at(lcA4, lcI6));
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_configuredColumns'];var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_proto'],(refs_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn = io_cloudoffice_platform_cockpit_genericlist_GenericListColumn(false))).constructor.$class, lcA7);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,stA1);
lcI6++;
{ gt = 0; continue X_647; }
    }
    X_689: for (;;) { IF: if (gt <= 689) {

var stA0 = lcA0;var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_proto'],(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor.$class, (lcA3[(17)] || Array.at(lcA3, (17))));
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_detailComponentDefinition'] = stA1;
var stA0 = lcA0;var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_proto'],(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor.$class, (lcA3[(18)] || Array.at(lcA3, (18))));
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_actionMenuComponentDefinition'] = stA1;
var stA0 = lcA0;var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_proto'],(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor.$class, (lcA3[(19)] || Array.at(lcA3, (19))));
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_collectionComponentDefinition'] = stA1;
var stA0 = lcA0;var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_proto'],(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor.$class, (lcA3[(20)] || Array.at(lcA3, (20))));
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_searchBoxComponentDefinition'] = stA1;
var stA0 = lcA0;var stA1 = invoker.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_proto'],(refs_io_cloudoffice_platform_cockpit_api_HelperItemView || (refs_io_cloudoffice_platform_cockpit_api_HelperItemView = vm.io_cloudoffice_platform_cockpit_api_HelperItemView(false))).constructor.$class, (lcA3[(21)] || Array.at(lcA3, (21))));
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_loader'] = stA1;
if ((lcA3[(22)] || Array.at(lcA3, (22))) !== null && !(lcA3[(22)] || Array.at(lcA3, (22)))['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx((lcA3[(22)] || Array.at(lcA3, (22))), 'java.lang.String');
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_headerTitle'] = (lcA3[(22)] || Array.at(lcA3, (22)));
return;

    }
}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}
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
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_configuration']);
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
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"gridViewEnabled");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stI2 = lcA0.isGridViewEnabled__Z();
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI2);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"isVisibleCreateButon");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stI2 = lcA0.isIsVisibleCreateButon__Z();
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI2);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"configuredFilters");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_configuredFilters']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"listnotavailablemessagedisplay");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stI2 = lcA0.isListnotavailablemessagedisplay__Z();
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI2);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"batchSelected");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stI2 = lcA0.isBatchSelected__Z();
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI2);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"totalItems");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stI2 = lcA0.getTotalItems__I();
var stA2 = (refs_java_lang_Integer || (refs_java_lang_Integer = vm.java_lang_Integer(false)))['valueOf__Ljava_lang_Integer_2I'](stI2);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"currentItemCount");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stI2 = lcA0.getCurrentItemCount__I();
var stA2 = (refs_java_lang_Integer || (refs_java_lang_Integer = vm.java_lang_Integer(false)))['valueOf__Ljava_lang_Integer_2I'](stI2);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"hasMoreItemAvailable");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stI2 = lcA0.isHasMoreItemAvailable__Z();
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI2);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"pageNumber");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stI2 = lcA0.getPageNumber__I();
var stA2 = (refs_java_lang_Integer || (refs_java_lang_Integer = vm.java_lang_Integer(false)))['valueOf__Ljava_lang_Integer_2I'](stI2);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"enableNext");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stI2 = lcA0.isEnableNext__Z();
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI2);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"enablePrevious");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stI2 = lcA0.isEnablePrevious__Z();
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI2);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"rows");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_rows']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"configuredColumns");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_configuredColumns']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"detailComponentDefinition");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_detailComponentDefinition']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"actionMenuComponentDefinition");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_actionMenuComponentDefinition']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"collectionComponentDefinition");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_collectionComponentDefinition']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"searchBoxComponentDefinition");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_searchBoxComponentDefinition']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"loader");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_loader']);
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"headerTitle");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = c._TYPE();var stA2 = lcA0.getHeaderTitle__Ljava_lang_String_2();
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(125));
var stA0 = invoker.toString__Ljava_lang_String_2(lcA1);
return stA0;

};
c['toString__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Lio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_proto']);
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2Lnet_java_html_BrwsrCtx_2.call(stA0, stA1);
return stA0;

};
c['clone__Lio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Lio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2Lnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
var stA0 = new io_cloudoffice_platform_cockpit_genericlist_GenericlistView;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, lcA1);
var lcA2 = stA0;
var stA0 = lcA2;var stA1 = lcA0.getInstance__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_instance'] = stA1;
var stA0 = lcA2;var stI1 = lcA0.isDesignerMode__Z();
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_designerMode'] = stI1;
var stA0 = lcA2;if ((lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_configuration']) !== null) { gt = 37; break IF; }
var stA1 = null;{ gt = 61; break IF; }
    }
    X_37: for (;;) { IF: if (gt <= 37) {

if ((lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_configuration']) !== (c._TYPE())) { gt = 53; break IF; }
var stA1 = c._TYPE();{ gt = 61; break IF; }
    }
    X_53: for (;;) { IF: if (gt <= 53) {

var stA1 = lcA0.getConfiguration__Lio_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_2();
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, lcA1);
    }
    X_61: for (;;) { IF: if (gt <= 61) {
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_configuration'] = stA1;
var stA0 = lcA2;var stI1 = lcA0.isVisible__Z();
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_visible'] = stI1;
var stA0 = lcA2;var stI1 = lcA0.isGridViewEnabled__Z();
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_gridViewEnabled'] = stI1;
var stA0 = lcA2;var stI1 = lcA0.isIsVisibleCreateButon__Z();
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_isVisibleCreateButon'] = stI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_proto'];var stA1 = lcA2.getConfiguredFilters__Ljava_util_List_2();
invoker.cloneList__VLjava_util_Collection_2Lnet_java_html_BrwsrCtx_2Ljava_util_Collection_2(stA0,stA1, lcA1, lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_configuredFilters']);
var stA0 = lcA2;var stI1 = lcA0.isListnotavailablemessagedisplay__Z();
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_listnotavailablemessagedisplay'] = stI1;
var stA0 = lcA2;var stI1 = lcA0.isBatchSelected__Z();
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_batchSelected'] = stI1;
var stA0 = lcA2;var stI1 = lcA0.getTotalItems__I();
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_totalItems'] = stI1;
var stA0 = lcA2;var stI1 = lcA0.getCurrentItemCount__I();
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_currentItemCount'] = stI1;
var stA0 = lcA2;var stI1 = lcA0.isHasMoreItemAvailable__Z();
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_hasMoreItemAvailable'] = stI1;
var stA0 = lcA2;var stI1 = lcA0.getPageNumber__I();
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_pageNumber'] = stI1;
var stA0 = lcA2;var stI1 = lcA0.isEnableNext__Z();
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_enableNext'] = stI1;
var stA0 = lcA2;var stI1 = lcA0.isEnablePrevious__Z();
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_enablePrevious'] = stI1;
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_proto'];var stA1 = lcA2.getRows__Ljava_util_List_2();
invoker.cloneList__VLjava_util_Collection_2Lnet_java_html_BrwsrCtx_2Ljava_util_Collection_2(stA0,stA1, lcA1, lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_rows']);
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_proto'];var stA1 = lcA2.getConfiguredColumns__Ljava_util_List_2();
invoker.cloneList__VLjava_util_Collection_2Lnet_java_html_BrwsrCtx_2Ljava_util_Collection_2(stA0,stA1, lcA1, lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_configuredColumns']);
var stA0 = lcA2;if ((lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_detailComponentDefinition']) !== null) { gt = 212; break IF; }
var stA1 = null;{ gt = 236; break IF; }
    }
    X_212: for (;;) { IF: if (gt <= 212) {

if ((lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_detailComponentDefinition']) !== (c._TYPE())) { gt = 228; break IF; }
var stA1 = c._TYPE();{ gt = 236; break IF; }
    }
    X_228: for (;;) { IF: if (gt <= 228) {

var stA1 = lcA0.getDetailComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, lcA1);
    }
    X_236: for (;;) { IF: if (gt <= 236) {
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_detailComponentDefinition'] = stA1;
var stA0 = lcA2;if ((lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_actionMenuComponentDefinition']) !== null) { gt = 251; break IF; }
var stA1 = null;{ gt = 275; break IF; }
    }
    X_251: for (;;) { IF: if (gt <= 251) {

if ((lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_actionMenuComponentDefinition']) !== (c._TYPE())) { gt = 267; break IF; }
var stA1 = c._TYPE();{ gt = 275; break IF; }
    }
    X_267: for (;;) { IF: if (gt <= 267) {

var stA1 = lcA0.getActionMenuComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, lcA1);
    }
    X_275: for (;;) { IF: if (gt <= 275) {
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_actionMenuComponentDefinition'] = stA1;
var stA0 = lcA2;if ((lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_collectionComponentDefinition']) !== null) { gt = 290; break IF; }
var stA1 = null;{ gt = 314; break IF; }
    }
    X_290: for (;;) { IF: if (gt <= 290) {

if ((lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_collectionComponentDefinition']) !== (c._TYPE())) { gt = 306; break IF; }
var stA1 = c._TYPE();{ gt = 314; break IF; }
    }
    X_306: for (;;) { IF: if (gt <= 306) {

var stA1 = lcA0.getCollectionComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, lcA1);
    }
    X_314: for (;;) { IF: if (gt <= 314) {
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_collectionComponentDefinition'] = stA1;
var stA0 = lcA2;if ((lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_searchBoxComponentDefinition']) !== null) { gt = 329; break IF; }
var stA1 = null;{ gt = 353; break IF; }
    }
    X_329: for (;;) { IF: if (gt <= 329) {

if ((lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_searchBoxComponentDefinition']) !== (c._TYPE())) { gt = 345; break IF; }
var stA1 = c._TYPE();{ gt = 353; break IF; }
    }
    X_345: for (;;) { IF: if (gt <= 345) {

var stA1 = lcA0.getSearchBoxComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, lcA1);
    }
    X_353: for (;;) { IF: if (gt <= 353) {
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_searchBoxComponentDefinition'] = stA1;
var stA0 = lcA2;if ((lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_loader']) !== null) { gt = 368; break IF; }
var stA1 = null;{ gt = 392; break IF; }
    }
    X_368: for (;;) { IF: if (gt <= 368) {

if ((lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_loader']) !== (c._TYPE())) { gt = 384; break IF; }
var stA1 = c._TYPE();{ gt = 392; break IF; }
    }
    X_384: for (;;) { IF: if (gt <= 384) {

var stA1 = lcA0.getLoader__Lio_cloudoffice_platform_cockpit_api_HelperItemView_2();
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'](stA1, lcA1);
    }
    X_392: for (;;) { IF: if (gt <= 392) {
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_loader'] = stA1;
var stA0 = lcA2;var stA1 = lcA0.getHeaderTitle__Ljava_lang_String_2();
stA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_headerTitle'] = stA1;
return lcA2;

    }
}}}}}}}}}}}}}}}}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.applyBindings__Lio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2 = function() {
  var  lcA0 = this;
invoker.applyBindings__V(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_proto']);
return lcA0;

};
c['applyBindings__Lio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2'] = m;

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

var stI0 = lcA1 != null && lcA1['$instOf_io_cloudoffice_platform_cockpit_genericlist_GenericlistView'] ? 1 : 0;
if ((stI0) != 0) { gt = 16; break IF; }
return 0;
    }
    X_16: for (;;) { IF: if (gt <= 16) {

if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_genericlist_GenericlistView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.genericlist.GenericlistView');
var lcA2 = lcA1;
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_instance'], lcA2['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_instance']);
if ((stI0) != 0) { gt = 40; break IF; }
return 0;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_designerMode']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_designerMode']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 65; break IF; }
return 0;
    }
    X_65: for (;;) { IF: if (gt <= 65) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_configuration']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_configuration']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 92; break IF; }
return 0;
    }
    X_92: for (;;) { IF: if (gt <= 92) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_visible']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_visible']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 117; break IF; }
return 0;
    }
    X_117: for (;;) { IF: if (gt <= 117) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_gridViewEnabled']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_gridViewEnabled']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 142; break IF; }
return 0;
    }
    X_142: for (;;) { IF: if (gt <= 142) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_isVisibleCreateButon']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_isVisibleCreateButon']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 167; break IF; }
return 0;
    }
    X_167: for (;;) { IF: if (gt <= 167) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_configuredFilters']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_configuredFilters']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 194; break IF; }
return 0;
    }
    X_194: for (;;) { IF: if (gt <= 194) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_listnotavailablemessagedisplay']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_listnotavailablemessagedisplay']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 219; break IF; }
return 0;
    }
    X_219: for (;;) { IF: if (gt <= 219) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_batchSelected']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_batchSelected']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 244; break IF; }
return 0;
    }
    X_244: for (;;) { IF: if (gt <= 244) {

var stI0 = invoker.isSame__ZII(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_totalItems'], lcA2['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_totalItems']);
if ((stI0) != 0) { gt = 263; break IF; }
return 0;
    }
    X_263: for (;;) { IF: if (gt <= 263) {

var stI0 = invoker.isSame__ZII(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_currentItemCount'], lcA2['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_currentItemCount']);
if ((stI0) != 0) { gt = 282; break IF; }
return 0;
    }
    X_282: for (;;) { IF: if (gt <= 282) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_hasMoreItemAvailable']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_hasMoreItemAvailable']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 307; break IF; }
return 0;
    }
    X_307: for (;;) { IF: if (gt <= 307) {

var stI0 = invoker.isSame__ZII(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_pageNumber'], lcA2['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_pageNumber']);
if ((stI0) != 0) { gt = 326; break IF; }
return 0;
    }
    X_326: for (;;) { IF: if (gt <= 326) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_enableNext']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_enableNext']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 351; break IF; }
return 0;
    }
    X_351: for (;;) { IF: if (gt <= 351) {

var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_enablePrevious']);
var stA2 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA2['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_enablePrevious']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 376; break IF; }
return 0;
    }
    X_376: for (;;) { IF: if (gt <= 376) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_rows']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_rows']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 403; break IF; }
return 0;
    }
    X_403: for (;;) { IF: if (gt <= 403) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_configuredColumns']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_configuredColumns']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 430; break IF; }
return 0;
    }
    X_430: for (;;) { IF: if (gt <= 430) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_detailComponentDefinition']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_detailComponentDefinition']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 457; break IF; }
return 0;
    }
    X_457: for (;;) { IF: if (gt <= 457) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_actionMenuComponentDefinition']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_actionMenuComponentDefinition']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 484; break IF; }
return 0;
    }
    X_484: for (;;) { IF: if (gt <= 484) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_collectionComponentDefinition']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_collectionComponentDefinition']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 511; break IF; }
return 0;
    }
    X_511: for (;;) { IF: if (gt <= 511) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_searchBoxComponentDefinition']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_searchBoxComponentDefinition']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 538; break IF; }
return 0;
    }
    X_538: for (;;) { IF: if (gt <= 538) {

var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_loader']);
var stA2 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA2, lcA2['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_loader']);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 565; break IF; }
return 0;
    }
    X_565: for (;;) { IF: if (gt <= 565) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_headerTitle'], lcA2['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_headerTitle']);
if ((stI0) != 0) { gt = 584; break IF; }
return 0;
    }
    X_584: for (;;) { IF: if (gt <= 584) {

return 1;

    }
}}}}}}}}}}}}}}}}}}}}}}}}}}
};
c['equals__ZLjava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.hashCode__I = function() {
  var  lcA0 = this;
var stA0 = invoker.getName__Ljava_lang_String_2(c.constructor.$class);
var stI0 = invoker.hashCode__I(stA0);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_instance'], lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_designerMode']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_configuration']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_visible']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_gridViewEnabled']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_isVisibleCreateButon']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_configuredFilters']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_listnotavailablemessagedisplay']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_batchSelected']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Integer || (refs_java_lang_Integer = vm.java_lang_Integer(false)))['valueOf__Ljava_lang_Integer_2I'](lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_totalItems']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Integer || (refs_java_lang_Integer = vm.java_lang_Integer(false)))['valueOf__Ljava_lang_Integer_2I'](lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_currentItemCount']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_hasMoreItemAvailable']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Integer || (refs_java_lang_Integer = vm.java_lang_Integer(false)))['valueOf__Ljava_lang_Integer_2I'](lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_pageNumber']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_enableNext']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_enablePrevious']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_rows']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_configuredColumns']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_detailComponentDefinition']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_actionMenuComponentDefinition']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_collectionComponentDefinition']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_searchBoxComponentDefinition']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stA0 = c._TYPE();var stA1 = c.thisToNull__Ljava_lang_Object_2Ljava_lang_Object_2.call(lcA0, lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_loader']);
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(c._TYPE(),lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_headerTitle'], lcI1);
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
var stA0 = lcA0.clone__Lio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2();
return stA0;

};
c['clone__Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.access$100__Lio_cloudoffice_platform_cockpit_genericlist_GenericlistView$Html4JavaType_2 = function() {
return c._TYPE();

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2 = function(lcA0) {
return lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_proto'];

};
    m.access = 4104;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_genericlist_GenericlistView$1_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
c.constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2.call(lcA0, lcA1, lcA2);
return;

};
    m.access = 4096;
    m.cls = CLS;
    m = c.access$400__Lio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2Lio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2Lnet_java_html_BrwsrCtx_2 = function(lcA0, lcA1) {
var stA0 = c.clone__Lio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2Lnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
return stA0;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new io_cloudoffice_platform_cockpit_genericlist_GenericlistView$Html4JavaType;
(refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistView$Html4JavaType || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistView$Html4JavaType = io_cloudoffice_platform_cockpit_genericlist_GenericlistView$Html4JavaType(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_genericlist_GenericlistView$1_2.call(stA0, null);
c._TYPE(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_genericlist_GenericlistViewfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_genericlist_GenericlistView', { value : true });
      vm.java_lang_Cloneable(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_genericlist_GenericlistViewfillInstOf });
    io_cloudoffice_platform_cockpit_genericlist_GenericlistViewfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/genericlist/GenericlistView';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.java_lang_Cloneable(false).constructor.$class
    ]; };
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent;
    var refs_java_lang_Boolean;
    var refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration;
    var refs_net_java_html_json_Models;
    var refs_java_lang_Integer;
    var refs_io_cloudoffice_platform_cockpit_api_ComponentDef;
    var refs_io_cloudoffice_platform_cockpit_api_HelperItemView;
    var refs_net_java_html_BrwsrCtx;
    var refs_io_cloudoffice_platform_cockpit_genericlist_FilterType;
    var refs_io_cloudoffice_platform_cockpit_genericlist_GenericListRow;
    var refs_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn;
    var refs_java_lang_StringBuilder;
    var refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistView$Html4JavaType;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_proto'] = null;
    this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_instance'] = null;
    this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_designerMode'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_configuration'] = null;
    this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_visible'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_gridViewEnabled'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_isVisibleCreateButon'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_configuredFilters'] = null;
    this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_listnotavailablemessagedisplay'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_batchSelected'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_totalItems'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_currentItemCount'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_hasMoreItemAvailable'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_pageNumber'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_enableNext'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_enablePrevious'] = 0;
    this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_rows'] = null;
    this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_configuredColumns'] = null;
    this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_detailComponentDefinition'] = null;
    this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_actionMenuComponentDefinition'] = null;
    this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_collectionComponentDefinition'] = null;
    this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_searchBoxComponentDefinition'] = null;
    this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_loader'] = null;
    this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericlistView_prop_headerTitle'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_genericlist_GenericlistView = registerClass(exports,'io_cloudoffice_platform_cockpit_genericlist_GenericlistView',io_cloudoffice_platform_cockpit_genericlist_GenericlistView);


function io_cloudoffice_platform_cockpit_genericlist_GenericlistView$Html4JavaType() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_genericlist_GenericlistView$Html4JavaType;
  if (!CLS.$class) {
    var pp = vm.org_netbeans_html_json_spi_Proto$Type(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_org_netbeans_html_json_spi_Proto$Type || (refs_org_netbeans_html_json_spi_Proto$Type = vm.org_netbeans_html_json_spi_Proto$Type(false))).constructor['cons__VLjava_lang_Class_2Ljava_lang_Class_2II'].call(lcA0, (refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistView || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistView = io_cloudoffice_platform_cockpit_genericlist_GenericlistView(false))).constructor.$class, (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent = io_cloudoffice_platform_cockpit_genericlist_GenericListComponent(false))).constructor.$class, (23), (25));
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"instance", 0, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"designerMode", 1, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"configuration", 2, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"visible", 3, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"gridViewEnabled", 4, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"isVisibleCreateButon", 5, 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"configuredFilters", (6), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"listnotavailablemessagedisplay", (7), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"batchSelected", (8), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"totalItems", (9), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"currentItemCount", (10), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"hasMoreItemAvailable", (11), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"pageNumber", (12), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"enableNext", (13), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"enablePrevious", (14), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"rows", (15), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"configuredColumns", (16), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"detailComponentDefinition", (17), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"actionMenuComponentDefinition", (18), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"collectionComponentDefinition", (19), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"searchBoxComponentDefinition", (20), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"loader", (21), 0, 0);
invoker.registerProperty__VLjava_lang_String_2IZZ(lcA0,"headerTitle", (22), 0, 0);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"selectBatch", 0);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"selectSingle", 1);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"checkAll", 2);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"uncheckAll", 3);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"clearBeforeloadList", 4);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"loadList", 5);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"reloadList", (6));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"next", (7));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"previous", (8));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"enableListView", (9));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"enableGridView", (10));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"openConfig", (11));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"closeConfigurationPanel", (12));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"loadDetail", (13));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"showActionMenu", (14));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"createNewItem", (15));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"showCollectionHoverAction", (16));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"getSelectedListItems", (17));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"getSelectedListItemsToCollection", (18));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"showList", (19));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"hideList", (20));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"save", (21));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"loadInitialData", (22));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"updateHeaderTitle", (23));
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"resetConfiguration", (24));
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.setValue__VLio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0:{ gt = 108; break IF; }
  case 1:{ gt = 125; break IF; }
  case 2:{ gt = 145; break IF; }
  case 3:{ gt = 162; break IF; }
  case 4:{ gt = 182; break IF; }
  case 5:{ gt = 202; break IF; }
  case 6:{ gt = 222; break IF; }
  case 7:{ gt = 236; break IF; }
  case 8:{ gt = 256; break IF; }
  case 9:{ gt = 276; break IF; }
  case 10:{ gt = 296; break IF; }
  case 11:{ gt = 316; break IF; }
  case 12:{ gt = 336; break IF; }
  case 13:{ gt = 356; break IF; }
  case 14:{ gt = 376; break IF; }
  case 15:{ gt = 396; break IF; }
  case 16:{ gt = 410; break IF; }
  case 17:{ gt = 424; break IF; }
  case 18:{ gt = 441; break IF; }
  case 19:{ gt = 458; break IF; }
  case 20:{ gt = 475; break IF; }
  case 21:{ gt = 492; break IF; }
  case 22:{ gt = 509; break IF; }
  default: { gt = 526; break IF; }
}
    }
    X_108: for (;;) { IF: if (gt <= 108) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistView || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistView = io_cloudoffice_platform_cockpit_genericlist_GenericlistView(false))).access$100__Lio_cloudoffice_platform_cockpit_genericlist_GenericlistView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setInstance__VLjava_lang_String_2(stA1);
return;
    }
    X_125: for (;;) { IF: if (gt <= 125) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistView || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistView = io_cloudoffice_platform_cockpit_genericlist_GenericlistView(false))).access$100__Lio_cloudoffice_platform_cockpit_genericlist_GenericlistView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setDesignerMode__VZ(stI1);
return;
    }
    X_145: for (;;) { IF: if (gt <= 145) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistView || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistView = io_cloudoffice_platform_cockpit_genericlist_GenericlistView(false))).access$100__Lio_cloudoffice_platform_cockpit_genericlist_GenericlistView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration = io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.genericlist.GenericlistConfiguration');
stA0.setConfiguration__VLio_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_2(stA1);
return;
    }
    X_162: for (;;) { IF: if (gt <= 162) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistView || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistView = io_cloudoffice_platform_cockpit_genericlist_GenericlistView(false))).access$100__Lio_cloudoffice_platform_cockpit_genericlist_GenericlistView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setVisible__VZ(stI1);
return;
    }
    X_182: for (;;) { IF: if (gt <= 182) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistView || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistView = io_cloudoffice_platform_cockpit_genericlist_GenericlistView(false))).access$100__Lio_cloudoffice_platform_cockpit_genericlist_GenericlistView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setGridViewEnabled__VZ(stI1);
return;
    }
    X_202: for (;;) { IF: if (gt <= 202) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistView || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistView = io_cloudoffice_platform_cockpit_genericlist_GenericlistView(false))).access$100__Lio_cloudoffice_platform_cockpit_genericlist_GenericlistView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setIsVisibleCreateButon__VZ(stI1);
return;
    }
    X_222: for (;;) { IF: if (gt <= 222) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistView || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistView = io_cloudoffice_platform_cockpit_genericlist_GenericlistView(false))).access$100__Lio_cloudoffice_platform_cockpit_genericlist_GenericlistView$Html4JavaType_2();
var stA1 = lcA1.getConfiguredFilters__Ljava_util_List_2();
invoker.replaceValue__VLjava_util_Collection_2Ljava_lang_Class_2Ljava_lang_Object_2(stA0,stA1, (refs_io_cloudoffice_platform_cockpit_genericlist_FilterType || (refs_io_cloudoffice_platform_cockpit_genericlist_FilterType = io_cloudoffice_platform_cockpit_genericlist_FilterType(false))).constructor.$class, lcA3);
return;
    }
    X_236: for (;;) { IF: if (gt <= 236) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistView || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistView = io_cloudoffice_platform_cockpit_genericlist_GenericlistView(false))).access$100__Lio_cloudoffice_platform_cockpit_genericlist_GenericlistView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setListnotavailablemessagedisplay__VZ(stI1);
return;
    }
    X_256: for (;;) { IF: if (gt <= 256) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistView || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistView = io_cloudoffice_platform_cockpit_genericlist_GenericlistView(false))).access$100__Lio_cloudoffice_platform_cockpit_genericlist_GenericlistView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setBatchSelected__VZ(stI1);
return;
    }
    X_276: for (;;) { IF: if (gt <= 276) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistView || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistView = io_cloudoffice_platform_cockpit_genericlist_GenericlistView(false))).access$100__Lio_cloudoffice_platform_cockpit_genericlist_GenericlistView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Integer || (refs_java_lang_Integer = vm.java_lang_Integer(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Integer']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Integer');
var stI1 = invoker.intValue__I(stA1);
stA0.setTotalItems__VI(stI1);
return;
    }
    X_296: for (;;) { IF: if (gt <= 296) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistView || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistView = io_cloudoffice_platform_cockpit_genericlist_GenericlistView(false))).access$100__Lio_cloudoffice_platform_cockpit_genericlist_GenericlistView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Integer || (refs_java_lang_Integer = vm.java_lang_Integer(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Integer']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Integer');
var stI1 = invoker.intValue__I(stA1);
stA0.setCurrentItemCount__VI(stI1);
return;
    }
    X_316: for (;;) { IF: if (gt <= 316) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistView || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistView = io_cloudoffice_platform_cockpit_genericlist_GenericlistView(false))).access$100__Lio_cloudoffice_platform_cockpit_genericlist_GenericlistView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setHasMoreItemAvailable__VZ(stI1);
return;
    }
    X_336: for (;;) { IF: if (gt <= 336) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistView || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistView = io_cloudoffice_platform_cockpit_genericlist_GenericlistView(false))).access$100__Lio_cloudoffice_platform_cockpit_genericlist_GenericlistView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Integer || (refs_java_lang_Integer = vm.java_lang_Integer(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Integer']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Integer');
var stI1 = invoker.intValue__I(stA1);
stA0.setPageNumber__VI(stI1);
return;
    }
    X_356: for (;;) { IF: if (gt <= 356) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistView || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistView = io_cloudoffice_platform_cockpit_genericlist_GenericlistView(false))).access$100__Lio_cloudoffice_platform_cockpit_genericlist_GenericlistView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setEnableNext__VZ(stI1);
return;
    }
    X_376: for (;;) { IF: if (gt <= 376) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistView || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistView = io_cloudoffice_platform_cockpit_genericlist_GenericlistView(false))).access$100__Lio_cloudoffice_platform_cockpit_genericlist_GenericlistView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.Boolean');
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setEnablePrevious__VZ(stI1);
return;
    }
    X_396: for (;;) { IF: if (gt <= 396) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistView || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistView = io_cloudoffice_platform_cockpit_genericlist_GenericlistView(false))).access$100__Lio_cloudoffice_platform_cockpit_genericlist_GenericlistView$Html4JavaType_2();
var stA1 = lcA1.getRows__Ljava_util_List_2();
invoker.replaceValue__VLjava_util_Collection_2Ljava_lang_Class_2Ljava_lang_Object_2(stA0,stA1, (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListRow || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListRow = io_cloudoffice_platform_cockpit_genericlist_GenericListRow(false))).constructor.$class, lcA3);
return;
    }
    X_410: for (;;) { IF: if (gt <= 410) {
var stA0 = (refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistView || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistView = io_cloudoffice_platform_cockpit_genericlist_GenericlistView(false))).access$100__Lio_cloudoffice_platform_cockpit_genericlist_GenericlistView$Html4JavaType_2();
var stA1 = lcA1.getConfiguredColumns__Ljava_util_List_2();
invoker.replaceValue__VLjava_util_Collection_2Ljava_lang_Class_2Ljava_lang_Object_2(stA0,stA1, (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn = io_cloudoffice_platform_cockpit_genericlist_GenericListColumn(false))).constructor.$class, lcA3);
return;
    }
    X_424: for (;;) { IF: if (gt <= 424) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistView || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistView = io_cloudoffice_platform_cockpit_genericlist_GenericlistView(false))).access$100__Lio_cloudoffice_platform_cockpit_genericlist_GenericlistView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_api_ComponentDef']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.api.ComponentDef');
stA0.setDetailComponentDefinition__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2(stA1);
return;
    }
    X_441: for (;;) { IF: if (gt <= 441) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistView || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistView = io_cloudoffice_platform_cockpit_genericlist_GenericlistView(false))).access$100__Lio_cloudoffice_platform_cockpit_genericlist_GenericlistView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_api_ComponentDef']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.api.ComponentDef');
stA0.setActionMenuComponentDefinition__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2(stA1);
return;
    }
    X_458: for (;;) { IF: if (gt <= 458) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistView || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistView = io_cloudoffice_platform_cockpit_genericlist_GenericlistView(false))).access$100__Lio_cloudoffice_platform_cockpit_genericlist_GenericlistView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_api_ComponentDef']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.api.ComponentDef');
stA0.setCollectionComponentDefinition__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2(stA1);
return;
    }
    X_475: for (;;) { IF: if (gt <= 475) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistView || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistView = io_cloudoffice_platform_cockpit_genericlist_GenericlistView(false))).access$100__Lio_cloudoffice_platform_cockpit_genericlist_GenericlistView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_api_ComponentDef']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.api.ComponentDef');
stA0.setSearchBoxComponentDefinition__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2(stA1);
return;
    }
    X_492: for (;;) { IF: if (gt <= 492) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistView || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistView = io_cloudoffice_platform_cockpit_genericlist_GenericlistView(false))).access$100__Lio_cloudoffice_platform_cockpit_genericlist_GenericlistView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_api_HelperItemView || (refs_io_cloudoffice_platform_cockpit_api_HelperItemView = vm.io_cloudoffice_platform_cockpit_api_HelperItemView(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_api_HelperItemView']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.api.HelperItemView');
stA0.setLoader__VLio_cloudoffice_platform_cockpit_api_HelperItemView_2(stA1);
return;
    }
    X_509: for (;;) { IF: if (gt <= 509) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistView || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistView = io_cloudoffice_platform_cockpit_genericlist_GenericlistView(false))).access$100__Lio_cloudoffice_platform_cockpit_genericlist_GenericlistView$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) vm.java_lang_Class(false).castEx(stA1, 'java.lang.String');
stA0.setHeaderTitle__VLjava_lang_String_2(stA1);
return;
    }
    X_526: for (;;) { IF: if (gt <= 526) {
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

    }
}}}}}}}}}}}}}}}}}}}}}}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2I = function(lcA1, lcI2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0:{ gt = 108; break IF; }
  case 1:{ gt = 113; break IF; }
  case 2:{ gt = 121; break IF; }
  case 3:{ gt = 126; break IF; }
  case 4:{ gt = 134; break IF; }
  case 5:{ gt = 142; break IF; }
  case 6:{ gt = 150; break IF; }
  case 7:{ gt = 155; break IF; }
  case 8:{ gt = 163; break IF; }
  case 9:{ gt = 171; break IF; }
  case 10:{ gt = 179; break IF; }
  case 11:{ gt = 187; break IF; }
  case 12:{ gt = 195; break IF; }
  case 13:{ gt = 203; break IF; }
  case 14:{ gt = 211; break IF; }
  case 15:{ gt = 219; break IF; }
  case 16:{ gt = 224; break IF; }
  case 17:{ gt = 229; break IF; }
  case 18:{ gt = 234; break IF; }
  case 19:{ gt = 239; break IF; }
  case 20:{ gt = 244; break IF; }
  case 21:{ gt = 249; break IF; }
  case 22:{ gt = 254; break IF; }
  default: { gt = 259; break IF; }
}
    }
    X_108: for (;;) { IF: if (gt <= 108) {

var stA0 = lcA1.getInstance__Ljava_lang_String_2();
return stA0;
    }
    X_113: for (;;) { IF: if (gt <= 113) {

var stI0 = lcA1.isDesignerMode__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_121: for (;;) { IF: if (gt <= 121) {

var stA0 = lcA1.getConfiguration__Lio_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_2();
return stA0;
    }
    X_126: for (;;) { IF: if (gt <= 126) {

var stI0 = lcA1.isVisible__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_134: for (;;) { IF: if (gt <= 134) {

var stI0 = lcA1.isGridViewEnabled__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_142: for (;;) { IF: if (gt <= 142) {

var stI0 = lcA1.isIsVisibleCreateButon__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_150: for (;;) { IF: if (gt <= 150) {

var stA0 = lcA1.getConfiguredFilters__Ljava_util_List_2();
return stA0;
    }
    X_155: for (;;) { IF: if (gt <= 155) {

var stI0 = lcA1.isListnotavailablemessagedisplay__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_163: for (;;) { IF: if (gt <= 163) {

var stI0 = lcA1.isBatchSelected__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_171: for (;;) { IF: if (gt <= 171) {

var stI0 = lcA1.getTotalItems__I();
var stA0 = (refs_java_lang_Integer || (refs_java_lang_Integer = vm.java_lang_Integer(false)))['valueOf__Ljava_lang_Integer_2I'](stI0);
return stA0;
    }
    X_179: for (;;) { IF: if (gt <= 179) {

var stI0 = lcA1.getCurrentItemCount__I();
var stA0 = (refs_java_lang_Integer || (refs_java_lang_Integer = vm.java_lang_Integer(false)))['valueOf__Ljava_lang_Integer_2I'](stI0);
return stA0;
    }
    X_187: for (;;) { IF: if (gt <= 187) {

var stI0 = lcA1.isHasMoreItemAvailable__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_195: for (;;) { IF: if (gt <= 195) {

var stI0 = lcA1.getPageNumber__I();
var stA0 = (refs_java_lang_Integer || (refs_java_lang_Integer = vm.java_lang_Integer(false)))['valueOf__Ljava_lang_Integer_2I'](stI0);
return stA0;
    }
    X_203: for (;;) { IF: if (gt <= 203) {

var stI0 = lcA1.isEnableNext__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_211: for (;;) { IF: if (gt <= 211) {

var stI0 = lcA1.isEnablePrevious__Z();
var stA0 = (refs_java_lang_Boolean || (refs_java_lang_Boolean = vm.java_lang_Boolean(false)))['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_219: for (;;) { IF: if (gt <= 219) {

var stA0 = lcA1.getRows__Ljava_util_List_2();
return stA0;
    }
    X_224: for (;;) { IF: if (gt <= 224) {

var stA0 = lcA1.getConfiguredColumns__Ljava_util_List_2();
return stA0;
    }
    X_229: for (;;) { IF: if (gt <= 229) {

var stA0 = lcA1.getDetailComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
return stA0;
    }
    X_234: for (;;) { IF: if (gt <= 234) {

var stA0 = lcA1.getActionMenuComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
return stA0;
    }
    X_239: for (;;) { IF: if (gt <= 239) {

var stA0 = lcA1.getCollectionComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
return stA0;
    }
    X_244: for (;;) { IF: if (gt <= 244) {

var stA0 = lcA1.getSearchBoxComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
return stA0;
    }
    X_249: for (;;) { IF: if (gt <= 249) {

var stA0 = lcA1.getLoader__Lio_cloudoffice_platform_cockpit_api_HelperItemView_2();
return stA0;
    }
    X_254: for (;;) { IF: if (gt <= 254) {

var stA0 = lcA1.getHeaderTitle__Ljava_lang_String_2();
return stA0;
    }
    X_259: for (;;) { IF: if (gt <= 259) {
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

    }
}}}}}}}}}}}}}}}}}}}}}}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.call__VLio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0:{ gt = 116; break IF; }
  case 1:{ gt = 121; break IF; }
  case 2:{ gt = 139; break IF; }
  case 3:{ gt = 144; break IF; }
  case 4:{ gt = 149; break IF; }
  case 5:{ gt = 163; break IF; }
  case 6:{ gt = 177; break IF; }
  case 7:{ gt = 182; break IF; }
  case 8:{ gt = 187; break IF; }
  case 9:{ gt = 192; break IF; }
  case 10:{ gt = 197; break IF; }
  case 11:{ gt = 202; break IF; }
  case 12:{ gt = 207; break IF; }
  case 13:{ gt = 212; break IF; }
  case 14:{ gt = 230; break IF; }
  case 15:{ gt = 248; break IF; }
  case 16:{ gt = 253; break IF; }
  case 17:{ gt = 258; break IF; }
  case 18:{ gt = 263; break IF; }
  case 19:{ gt = 268; break IF; }
  case 20:{ gt = 273; break IF; }
  case 21:{ gt = 278; break IF; }
  case 22:{ gt = 283; break IF; }
  case 23:{ gt = 288; break IF; }
  case 24:{ gt = 302; break IF; }
  default: { gt = 307; break IF; }
}
    }
    X_116: for (;;) { IF: if (gt <= 116) {

(refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent = io_cloudoffice_platform_cockpit_genericlist_GenericListComponent(false))).selectBatch__VLio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2(lcA1);
return;
    }
    X_121: for (;;) { IF: if (gt <= 121) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistView || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistView = io_cloudoffice_platform_cockpit_genericlist_GenericlistView(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2(lcA1);
var stA1 = invoker.toModel__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_genericlist_GenericListRow || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListRow = io_cloudoffice_platform_cockpit_genericlist_GenericListRow(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_genericlist_GenericListRow']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.genericlist.GenericListRow');
(refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent = io_cloudoffice_platform_cockpit_genericlist_GenericListComponent(false))).selectSingle__VLio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2Lio_cloudoffice_platform_cockpit_genericlist_GenericListRow_2(stA0, stA1);
return;
    }
    X_139: for (;;) { IF: if (gt <= 139) {

(refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent = io_cloudoffice_platform_cockpit_genericlist_GenericListComponent(false))).checkAll__VLio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2(lcA1);
return;
    }
    X_144: for (;;) { IF: if (gt <= 144) {

(refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent = io_cloudoffice_platform_cockpit_genericlist_GenericListComponent(false))).uncheckAll__VLio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2(lcA1);
return;
    }
    X_149: for (;;) { IF: if (gt <= 149) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistView || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistView = io_cloudoffice_platform_cockpit_genericlist_GenericlistView(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2(lcA1);
var stA1 = invoker.toString__Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_String_2(stA1,lcA3, null);
(refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent = io_cloudoffice_platform_cockpit_genericlist_GenericListComponent(false))).clearBeforeloadList__VLio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2Ljava_lang_String_2(stA0, stA1);
return;
    }
    X_163: for (;;) { IF: if (gt <= 163) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistView || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistView = io_cloudoffice_platform_cockpit_genericlist_GenericlistView(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2(lcA1);
var stA1 = invoker.toString__Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_String_2(stA1,lcA3, null);
(refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent = io_cloudoffice_platform_cockpit_genericlist_GenericListComponent(false))).loadList__VLio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2Ljava_lang_String_2(stA0, stA1);
return;
    }
    X_177: for (;;) { IF: if (gt <= 177) {

(refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent = io_cloudoffice_platform_cockpit_genericlist_GenericListComponent(false))).reloadList__VLio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2(lcA1);
return;
    }
    X_182: for (;;) { IF: if (gt <= 182) {

(refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent = io_cloudoffice_platform_cockpit_genericlist_GenericListComponent(false))).next__VLio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2(lcA1);
return;
    }
    X_187: for (;;) { IF: if (gt <= 187) {

(refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent = io_cloudoffice_platform_cockpit_genericlist_GenericListComponent(false))).previous__VLio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2(lcA1);
return;
    }
    X_192: for (;;) { IF: if (gt <= 192) {

(refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent = io_cloudoffice_platform_cockpit_genericlist_GenericListComponent(false))).enableListView__VLio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2(lcA1);
return;
    }
    X_197: for (;;) { IF: if (gt <= 197) {

(refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent = io_cloudoffice_platform_cockpit_genericlist_GenericListComponent(false))).enableGridView__VLio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2(lcA1);
return;
    }
    X_202: for (;;) { IF: if (gt <= 202) {

(refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent = io_cloudoffice_platform_cockpit_genericlist_GenericListComponent(false))).openConfig__VLio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2(lcA1);
return;
    }
    X_207: for (;;) { IF: if (gt <= 207) {

(refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent = io_cloudoffice_platform_cockpit_genericlist_GenericListComponent(false))).closeConfigurationPanel__VLio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2(lcA1);
return;
    }
    X_212: for (;;) { IF: if (gt <= 212) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistView || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistView = io_cloudoffice_platform_cockpit_genericlist_GenericlistView(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2(lcA1);
var stA1 = invoker.toModel__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_genericlist_GenericListRow || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListRow = io_cloudoffice_platform_cockpit_genericlist_GenericListRow(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_genericlist_GenericListRow']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.genericlist.GenericListRow');
(refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent = io_cloudoffice_platform_cockpit_genericlist_GenericListComponent(false))).loadDetail__VLio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2Lio_cloudoffice_platform_cockpit_genericlist_GenericListRow_2(stA0, stA1);
return;
    }
    X_230: for (;;) { IF: if (gt <= 230) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistView || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistView = io_cloudoffice_platform_cockpit_genericlist_GenericlistView(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2(lcA1);
var stA1 = invoker.toModel__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,(refs_io_cloudoffice_platform_cockpit_genericlist_GenericListRow || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListRow = io_cloudoffice_platform_cockpit_genericlist_GenericListRow(false))).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_io_cloudoffice_platform_cockpit_genericlist_GenericListRow']) vm.java_lang_Class(false).castEx(stA1, 'io.cloudoffice.platform.cockpit.genericlist.GenericListRow');
(refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent = io_cloudoffice_platform_cockpit_genericlist_GenericListComponent(false))).showActionMenu__VLio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2Lio_cloudoffice_platform_cockpit_genericlist_GenericListRow_2(stA0, stA1);
return;
    }
    X_248: for (;;) { IF: if (gt <= 248) {

(refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent = io_cloudoffice_platform_cockpit_genericlist_GenericListComponent(false))).createNewItem__VLio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2(lcA1);
return;
    }
    X_253: for (;;) { IF: if (gt <= 253) {

(refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent = io_cloudoffice_platform_cockpit_genericlist_GenericListComponent(false))).showCollectionHoverAction__VLio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2(lcA1);
return;
    }
    X_258: for (;;) { IF: if (gt <= 258) {

(refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent = io_cloudoffice_platform_cockpit_genericlist_GenericListComponent(false))).getSelectedListItems__VLio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2(lcA1);
return;
    }
    X_263: for (;;) { IF: if (gt <= 263) {

(refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent = io_cloudoffice_platform_cockpit_genericlist_GenericListComponent(false))).getSelectedListItemsToCollection__VLio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2(lcA1);
return;
    }
    X_268: for (;;) { IF: if (gt <= 268) {

(refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent = io_cloudoffice_platform_cockpit_genericlist_GenericListComponent(false))).showList__VLio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2(lcA1);
return;
    }
    X_273: for (;;) { IF: if (gt <= 273) {

(refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent = io_cloudoffice_platform_cockpit_genericlist_GenericListComponent(false))).hideList__VLio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2(lcA1);
return;
    }
    X_278: for (;;) { IF: if (gt <= 278) {

(refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent = io_cloudoffice_platform_cockpit_genericlist_GenericListComponent(false))).save__VLio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2(lcA1);
return;
    }
    X_283: for (;;) { IF: if (gt <= 283) {

(refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent = io_cloudoffice_platform_cockpit_genericlist_GenericListComponent(false))).loadInitialData__VLio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2(lcA1);
return;
    }
    X_288: for (;;) { IF: if (gt <= 288) {

var stA0 = lcA1;var stA1 = (refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistView || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistView = io_cloudoffice_platform_cockpit_genericlist_GenericlistView(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2(lcA1);
var stA1 = invoker.toString__Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_String_2(stA1,lcA3, null);
(refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent = io_cloudoffice_platform_cockpit_genericlist_GenericListComponent(false))).updateHeaderTitle__VLio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2Ljava_lang_String_2(stA0, stA1);
return;
    }
    X_302: for (;;) { IF: if (gt <= 302) {

(refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent = io_cloudoffice_platform_cockpit_genericlist_GenericListComponent(false))).resetConfiguration__VLio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2(lcA1);
return;
    }
    X_307: for (;;) { IF: if (gt <= 307) {
var stA0 = new vm.java_lang_UnsupportedOperationException;
(refs_java_lang_UnsupportedOperationException || (refs_java_lang_UnsupportedOperationException = vm.java_lang_UnsupportedOperationException(false))).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

    }
}}}}}}}}}}}}}}}}}}}}}}}}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_genericlist_GenericlistView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.genericlist.GenericlistView');
var stA0 = (refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistView || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistView = io_cloudoffice_platform_cockpit_genericlist_GenericlistView(false))).access$200__Lorg_netbeans_html_json_spi_Proto_2Lio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2(lcA1);
return stA0;

};
c['protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.onChange__VLio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2I = function(lcA1, lcI2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0: { gt = 20; break IF; }
  default: { gt = 25; break IF; }
}
    }
    X_20: for (;;) { IF: if (gt <= 20) {

(refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent = io_cloudoffice_platform_cockpit_genericlist_GenericListComponent(false))).paginationNavigation__VLio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2(lcA1);
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
    m = c.onMessage__VLio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
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
    m = c.read__Lio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = new io_cloudoffice_platform_cockpit_genericlist_GenericlistView;
(refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistView || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistView = io_cloudoffice_platform_cockpit_genericlist_GenericlistView(false))).constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_genericlist_GenericlistView$1_2.call(stA0, lcA1, lcA2, null);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.cloneTo__Lio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2Lio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = (refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistView || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistView = io_cloudoffice_platform_cockpit_genericlist_GenericlistView(false))).access$400__Lio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2Lio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_genericlist_GenericlistView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.genericlist.GenericlistView');
lcA0.onMessage__VLio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2IILjava_lang_Object_2_3Ljava_lang_Object_2(lcA1, lcI2, lcI3, lcA4, lcA5);
return;

};
c['onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.onChange__VLjava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_genericlist_GenericlistView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.genericlist.GenericlistView');
lcA0.onChange__VLio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2I(lcA1, lcI2);
return;

};
c['onChange__VLjava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = lcA0.read__Lio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2(lcA1, lcA2);
return stA0;

};
c['read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_genericlist_GenericlistView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.genericlist.GenericlistView');
var stA0 = lcA0.cloneTo__Lio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2Lio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
c['cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_genericlist_GenericlistView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.genericlist.GenericlistView');
lcA0.call__VLio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2ILjava_lang_Object_2Ljava_lang_Object_2(lcA1, lcI2, lcA3, lcA4);
return;

};
c['call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Ljava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_genericlist_GenericlistView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.genericlist.GenericlistView');
var stA0 = lcA0.getValue__Ljava_lang_Object_2Lio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2I(lcA1, lcI2);
return stA0;

};
c['getValue__Ljava_lang_Object_2Ljava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.setValue__VLjava_lang_Object_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_io_cloudoffice_platform_cockpit_genericlist_GenericlistView']) vm.java_lang_Class(false).castEx(lcA1, 'io.cloudoffice.platform.cockpit.genericlist.GenericlistView');
lcA0.setValue__VLio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2ILjava_lang_Object_2(lcA1, lcI2, lcA3);
return;

};
c['setValue__VLjava_lang_Object_2ILjava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_genericlist_GenericlistView$1_2 = function(lcA1) {
  var  lcA0 = this;
c.constructor.cons__V.call(lcA0);
return;

};
    m.access = 4096;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_genericlist_GenericlistView$Html4JavaTypefillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_genericlist_GenericlistView$Html4JavaType', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_genericlist_GenericlistView$Html4JavaTypefillInstOf });
    io_cloudoffice_platform_cockpit_genericlist_GenericlistView$Html4JavaTypefillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/genericlist/GenericlistView$Html4JavaType';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistView;
    var refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent;
    var refs_org_netbeans_html_json_spi_Proto$Type;
    var refs_java_lang_String;
    var refs_java_lang_Boolean;
    var refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration;
    var refs_io_cloudoffice_platform_cockpit_genericlist_FilterType;
    var refs_java_lang_Integer;
    var refs_io_cloudoffice_platform_cockpit_genericlist_GenericListRow;
    var refs_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn;
    var refs_io_cloudoffice_platform_cockpit_api_ComponentDef;
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
vm.io_cloudoffice_platform_cockpit_genericlist_GenericlistView$Html4JavaType = io_cloudoffice_platform_cockpit_genericlist_GenericlistView$Html4JavaType;

vm.io_cloudoffice_platform_cockpit_api_HelperItemView = link('io/cloudoffice/platform/cockpit/api/HelperItemView', function(f) { vm.io_cloudoffice_platform_cockpit_api_HelperItemView =  f; });

function io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$ViewChangeListener() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$ViewChangeListener;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._this$0 = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$ViewChangeListener_this$0'] = v; return this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$ViewChangeListener_this$0']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_genericlist_GenericListComponent_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$ViewChangeListener_this$0'] = lcA1;
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
if ((stI0) == 0) { gt = 59; break IF; }
var stI0 = invoker.equalsIgnoreCase__ZLjava_lang_String_2(lcA2,"updateheaderaction");
if ((stI0) == 0) { gt = 59; break IF; }
var stA0 = invoker.getPackets__Ljava_util_List_2(lcA1);
var stA0 = invoker.get__Ljava_lang_Object_2I(stA0,0);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_api_MapBuilder']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.api.MapBuilder');
var lcA3 = stA0;
if ((null) === (lcA3)) { gt = 59; break IF; }
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$ViewChangeListener_this$0'];var stA1 = "updateHeaderTitle";var stA2 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA3,"title");
invoker.invoke__VLjava_lang_String_2Ljava_lang_String_2(stA0,stA1, stA2);
    }
    X_59: for (;;) { IF: if (gt <= 59) {
return;

    }
}}
};
c['onReceive__VLio_cloudoffice_platform_cockpit_api_Signal_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_genericlist_GenericListComponent_2Lio_cloudoffice_platform_cockpit_genericlist_GenericListComponent$1_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
c.constructor.cons__VLio_cloudoffice_platform_cockpit_genericlist_GenericListComponent_2.call(lcA0, lcA1);
return;

};
    m.access = 4096;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$ViewChangeListenerfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$ViewChangeListener', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_EventListener(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$ViewChangeListenerfillInstOf });
    io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$ViewChangeListenerfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/genericlist/GenericListComponent$ViewChangeListener';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_EventListener(false).constructor.$class
    ]; };
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_UtilValidate;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$ViewChangeListener_this$0'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$ViewChangeListener = io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$ViewChangeListener;

vm.io_cloudoffice_platform_cockpit_api_EventListener = link('io/cloudoffice/platform/cockpit/api/EventListener', function(f) { vm.io_cloudoffice_platform_cockpit_api_EventListener =  f; });

function io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$FunctionInvokeListener() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$FunctionInvokeListener;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._this$0 = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$FunctionInvokeListener_this$0'] = v; return this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$FunctionInvokeListener_this$0']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_genericlist_GenericListComponent_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$FunctionInvokeListener_this$0'] = lcA1;
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
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$FunctionInvokeListener_this$0'];var stA1 = (refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false)))['valueOf__Ljava_lang_String_2Ljava_lang_Object_2'](lcA2);
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
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_genericlist_GenericListComponent_2Lio_cloudoffice_platform_cockpit_genericlist_GenericListComponent$1_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
c.constructor.cons__VLio_cloudoffice_platform_cockpit_genericlist_GenericListComponent_2.call(lcA0, lcA1);
return;

};
    m.access = 4096;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$FunctionInvokeListenerfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$FunctionInvokeListener', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_EventListener(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$FunctionInvokeListenerfillInstOf });
    io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$FunctionInvokeListenerfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/genericlist/GenericListComponent$FunctionInvokeListener';
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
    this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$FunctionInvokeListener_this$0'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$FunctionInvokeListener = io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$FunctionInvokeListener;


function io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$LoadListListener() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$LoadListListener;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._this$0 = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$LoadListListener_this$0'] = v; return this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$LoadListListener_this$0']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_genericlist_GenericListComponent_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$LoadListListener_this$0'] = lcA1;
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
if ((stI0) == 0) { gt = 82; break IF; }
var stA0 = invoker.getPackets__Ljava_util_List_2(lcA1);
var stA0 = invoker.get__Ljava_lang_Object_2I(stA0,0);
if (stA0 !== null && !stA0['$instOf_io_cloudoffice_platform_cockpit_api_MapBuilder']) vm.java_lang_Class(false).castEx(stA0, 'io.cloudoffice.platform.cockpit.api.MapBuilder');
var lcA3 = stA0;
if ((null) === (lcA3)) { gt = 82; break IF; }
var stI0 = invoker.equalsIgnoreCase__ZLjava_lang_String_2(lcA2,"loadlist");
if ((stI0) == 0) { gt = 60; break IF; }
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$LoadListListener_this$0'];var stA1 = "loadList";var stA2 = invoker.toJSON__Ljava_lang_String_2(lcA3);
invoker.invoke__VLjava_lang_String_2Ljava_lang_String_2(stA0,stA1, stA2);
{ gt = 82; break IF; }
    }
    X_60: for (;;) { IF: if (gt <= 60) {

var stI0 = invoker.equalsIgnoreCase__ZLjava_lang_String_2(lcA2,"clearbeforeloadlist");
if ((stI0) == 0) { gt = 82; break IF; }
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$LoadListListener_this$0'];var stA1 = "clearBeforeloadList";var stA2 = invoker.toJSON__Ljava_lang_String_2(lcA3);
invoker.invoke__VLjava_lang_String_2Ljava_lang_String_2(stA0,stA1, stA2);
    }
    X_82: for (;;) { IF: if (gt <= 82) {
return;

    }
}}}
};
c['onReceive__VLio_cloudoffice_platform_cockpit_api_Signal_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_genericlist_GenericListComponent_2Lio_cloudoffice_platform_cockpit_genericlist_GenericListComponent$1_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
c.constructor.cons__VLio_cloudoffice_platform_cockpit_genericlist_GenericListComponent_2.call(lcA0, lcA1);
return;

};
    m.access = 4096;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$LoadListListenerfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$LoadListListener', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_EventListener(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$LoadListListenerfillInstOf });
    io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$LoadListListenerfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/genericlist/GenericListComponent$LoadListListener';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_EventListener(false).constructor.$class
    ]; };
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_UtilValidate;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$LoadListListener_this$0'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$LoadListListener = io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$LoadListListener;


function io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$LoadInitialDataListener() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$LoadInitialDataListener;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._this$0 = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$LoadInitialDataListener_this$0'] = v; return this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$LoadInitialDataListener_this$0']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_genericlist_GenericListComponent_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$LoadInitialDataListener_this$0'] = lcA1;
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.onReceive__VLio_cloudoffice_platform_cockpit_api_Signal_2 = function(lcA1) {
  var  lcA0 = this;
invoker.invoke__VLjava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$LoadInitialDataListener_this$0'],"loadInitialData");
return;

};
c['onReceive__VLio_cloudoffice_platform_cockpit_api_Signal_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_genericlist_GenericListComponent_2Lio_cloudoffice_platform_cockpit_genericlist_GenericListComponent$1_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
c.constructor.cons__VLio_cloudoffice_platform_cockpit_genericlist_GenericListComponent_2.call(lcA0, lcA1);
return;

};
    m.access = 4096;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$LoadInitialDataListenerfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$LoadInitialDataListener', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_EventListener(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$LoadInitialDataListenerfillInstOf });
    io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$LoadInitialDataListenerfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/genericlist/GenericListComponent$LoadInitialDataListener';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_EventListener(false).constructor.$class
    ]; };
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$LoadInitialDataListener_this$0'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$LoadInitialDataListener = io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$LoadInitialDataListener;


function io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$DesignModeListener() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$DesignModeListener;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._this$0 = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$DesignModeListener_this$0'] = v; return this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$DesignModeListener_this$0']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_genericlist_GenericListComponent_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$DesignModeListener_this$0'] = lcA1;
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
var stA0 = lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$DesignModeListener_this$0'];var stA1 = (refs_java_lang_String || (refs_java_lang_String = vm.java_lang_String(false)))['valueOf__Ljava_lang_String_2Ljava_lang_Object_2'](lcA2);
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
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_genericlist_GenericListComponent_2Lio_cloudoffice_platform_cockpit_genericlist_GenericListComponent$1_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
c.constructor.cons__VLio_cloudoffice_platform_cockpit_genericlist_GenericListComponent_2.call(lcA0, lcA1);
return;

};
    m.access = 4096;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$DesignModeListenerfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$DesignModeListener', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_EventListener(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$DesignModeListenerfillInstOf });
    io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$DesignModeListenerfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/genericlist/GenericListComponent$DesignModeListener';
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
    this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$DesignModeListener_this$0'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$DesignModeListener = io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$DesignModeListener;


function io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$LoginEventListener() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$LoginEventListener;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._this$0 = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$LoginEventListener_this$0'] = v; return this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$LoginEventListener_this$0']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_genericlist_GenericListComponent_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$LoginEventListener_this$0'] = lcA1;
return;

};
CLS['cons__VLio_cloudoffice_platform_cockpit_genericlist_GenericListComponent_2'] = m;

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
(refs_io_cloudoffice_platform_cockpit_js_VIEW || (refs_io_cloudoffice_platform_cockpit_js_VIEW = vm.io_cloudoffice_platform_cockpit_js_VIEW(false)))['renderView__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2']("genericlist", "genericlist", "genericlist");
(refs_io_cloudoffice_platform_cockpit_js_VIEW || (refs_io_cloudoffice_platform_cockpit_js_VIEW = vm.io_cloudoffice_platform_cockpit_js_VIEW(false)))['renderView__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2']("genericlist", "listview", "listview");
(refs_io_cloudoffice_platform_cockpit_js_VIEW || (refs_io_cloudoffice_platform_cockpit_js_VIEW = vm.io_cloudoffice_platform_cockpit_js_VIEW(false)))['renderView__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2']("genericlist", "gridview", "gridview");
var stA0 = invoker.getInstanceId__Ljava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$LoginEventListener_this$0']);
var lcA2 = stA0;
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['_CONFIG']();var stA1 = (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration || (refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration = vm.io_cloudoffice_platform_cockpit_api_ComponentConfiguration(false)))['configFetchEndpoint__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2']("genericlist", lcA2);
var stA2 = null;var stA3 = new io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$LoginEventListener$1;
(refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$LoginEventListener$1 || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$LoginEventListener$1 = io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$LoginEventListener$1(false))).constructor.cons__VLio_cloudoffice_platform_cockpit_genericlist_GenericListComponent$LoginEventListener_2.call(stA3, lcA0);
invoker.fetch__VLjava_lang_String_2Ljava_util_Map_2Lio_cloudoffice_platform_cockpit_api_CallBack_2(stA0,stA1, stA2, stA3);
return;

};
    m.access = 0;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$LoginEventListenerfillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$LoginEventListener', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_EventListener(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$LoginEventListenerfillInstOf });
    io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$LoginEventListenerfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/genericlist/GenericListComponent$LoginEventListener';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_EventListener(false).constructor.$class
    ]; };
    CLS.$class.access = 33;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_js_VIEW;
    var refs_io_cloudoffice_platform_cockpit_api_ComponentConfiguration;
    var refs_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$LoginEventListener$1;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$LoginEventListener_this$0'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$LoginEventListener = registerClass(exports,'io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$LoginEventListener',io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$LoginEventListener);


function io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$LoginEventListener$1() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$LoginEventListener$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._this$1 = function (v) {  if (arguments.length == 1) this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$LoginEventListener$1_this$1'] = v; return this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$LoginEventListener$1_this$1']; };
    m = CLS.cons__VLio_cloudoffice_platform_cockpit_genericlist_GenericListComponent$LoginEventListener_2 = function(lcA1) {
  var  lcA0 = this;
lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$LoginEventListener$1_this$1'] = lcA1;
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.handle__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['query__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2'](lcA1);
var lcA2 = stA0;
var stA0 = new io_cloudoffice_platform_cockpit_genericlist_GenericlistView;
(refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistView || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistView = io_cloudoffice_platform_cockpit_genericlist_GenericlistView(false))).constructor.cons__V.call(stA0);
var lcA3 = stA0;
var stA0 = lcA3;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA2,"instance");
stA0.setInstance__VLjava_lang_String_2(stA1);
c.prepareConfigurationModelFromJSON__VLio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2Lio_cloudoffice_platform_cockpit_api_MapBuilder_2.call(lcA0, lcA3, lcA2);
lcA3.setVisible__VZ(1);
invoker.setView__VLjava_lang_Object_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$LoginEventListener$1_this$1']['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$LoginEventListener_this$0'],lcA3);
var stA0 = invoker.getDefaultViewName__Ljava_lang_String_2(lcA0['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$LoginEventListener$1_this$1']['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$LoginEventListener_this$0']);
var stA1 = (refs_net_java_html_json_Models || (refs_net_java_html_json_Models = vm.net_java_html_json_Models(false)))['toRaw__Ljava_lang_Object_2Ljava_lang_Object_2'](lcA3);
(refs_io_cloudoffice_platform_cockpit_js_VIEW || (refs_io_cloudoffice_platform_cockpit_js_VIEW = vm.io_cloudoffice_platform_cockpit_js_VIEW(false)))['bind__VLjava_lang_String_2Ljava_lang_Object_2'](stA0, stA1);
return;

};
c['handle__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.prepareConfigurationModelFromJSON__VLio_cloudoffice_platform_cockpit_genericlist_GenericlistView_2Lio_cloudoffice_platform_cockpit_api_MapBuilder_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = lcA1.getConfiguration__Lio_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_2();
var lcA3 = stA0;
var stA0 = invoker.getJsonObject__Lorg_json_JSONObject_2Ljava_lang_String_2(lcA2,"configuration");
var lcA4 = stA0;
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_Object_2'](lcA4);
if ((stI0) == 0) { gt = 832; break IF; }
var stA0 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA4,"defaultitemview");
var lcA5 = stA0;
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](lcA5);
if ((stI0) == 0) { gt = 62; break IF; }
var stI0 = invoker.equalsIgnoreCase__ZLjava_lang_String_2(lcA5,"GRID");
if ((stI0) == 0) { gt = 62; break IF; }
lcA3.setDefaultitemview__VLjava_lang_String_2("GRID");
lcA1.setGridViewEnabled__VZ(1);
{ gt = 73; break IF; }
    }
    X_62: for (;;) { IF: if (gt <= 62) {

lcA3.setDefaultitemview__VLjava_lang_String_2("LIST");
lcA1.setGridViewEnabled__VZ(0);
    }
    X_73: for (;;) { IF: if (gt <= 73) {

var stA0 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA4,"visibleCreateButon");
var lcA6 = stA0;
var stI0 = (refs_io_cloudoffice_platform_cockpit_api_UtilValidate || (refs_io_cloudoffice_platform_cockpit_api_UtilValidate = vm.io_cloudoffice_platform_cockpit_api_UtilValidate(false)))['isNotEmpty__ZLjava_lang_String_2'](lcA6);
if ((stI0) == 0) { gt = 117; break IF; }
var stI0 = invoker.equalsIgnoreCase__ZLjava_lang_String_2(lcA6,"SHOW");
if ((stI0) == 0) { gt = 117; break IF; }
var stA0 = lcA1.getConfiguration__Lio_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_2();
stA0.setVisibleCreateButon__VLjava_lang_String_2("SHOW");
lcA1.setIsVisibleCreateButon__VZ(1);
{ gt = 131; break IF; }
    }
    X_117: for (;;) { IF: if (gt <= 117) {

var stA0 = lcA1.getConfiguration__Lio_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_2();
stA0.setVisibleCreateButon__VLjava_lang_String_2("HIDE");
lcA1.setIsVisibleCreateButon__VZ(0);
    }
    X_131: for (;;) { IF: if (gt <= 131) {

var stA0 = lcA1.getConfiguredFilters__Ljava_util_List_2();
var stI0 = invoker.isEmpty__Z(stA0);
if ((stI0) != 0) { gt = 152; break IF; }
var stA0 = lcA1.getConfiguredFilters__Ljava_util_List_2();
invoker.clear__V(stA0);
    }
    X_152: for (;;) { IF: if (gt <= 152) {

var stA0 = lcA3.getFilters__Ljava_util_List_2();
var stI0 = invoker.isEmpty__Z(stA0);
if ((stI0) != 0) { gt = 173; break IF; }
var stA0 = lcA3.getFilters__Ljava_util_List_2();
invoker.clear__V(stA0);
    }
    X_173: for (;;) { IF: if (gt <= 173) {

var stA0 = invoker.getJSONArray__Lorg_json_JSONArray_2Ljava_lang_String_2(lcA4,"filters");
var stA0 = invoker.toList__Ljava_util_List_2(stA0);
var lcA7 = stA0;
var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA7);
var lcA8 = stA0;
    }
    X_194: for (;;) { IF: if (gt <= 194) {

var stI0 = invoker.hasNext__Z(lcA8);
if ((stI0) == 0) { gt = 328; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA8);
var lcA9 = stA0;
if (lcA9 !== null && !lcA9['$instOf_java_util_Map']) vm.java_lang_Class(false).castEx(lcA9, 'java.util.Map');
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['query__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_util_Map_2'](lcA9);
var lcA10 = stA0;
var stA0 = new io_cloudoffice_platform_cockpit_genericlist_FilterType;
(refs_io_cloudoffice_platform_cockpit_genericlist_FilterType || (refs_io_cloudoffice_platform_cockpit_genericlist_FilterType = io_cloudoffice_platform_cockpit_genericlist_FilterType(false))).constructor.cons__V.call(stA0);
var lcA11 = stA0;
var stA0 = lcA11;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA10,"itemId");
stA0.setItemId__VLjava_lang_String_2(stA1);
var stA0 = lcA11;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA10,"itemType");
stA0.setItemType__VLjava_lang_String_2(stA1);
var stA0 = lcA11;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA10,"itemName");
stA0.setItemName__VLjava_lang_String_2(stA1);
var stA0 = lcA11;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA10,"filterType");
stA0.setFilterType__VLjava_lang_String_2(stA1);
var stI0 = invoker.getBoolean__ZLjava_lang_String_2(lcA10,"isSelected");
var lcI12 = stI0;
lcA11.setIsSelected__VZ(lcI12);
if ((lcI12) == 0) { gt = 313; break IF; }
var stA0 = lcA1.getConfiguredFilters__Ljava_util_List_2();
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,lcA11);
    }
    X_313: for (;;) { IF: if (gt <= 313) {

var stA0 = lcA3.getFilters__Ljava_util_List_2();
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,lcA11);
{ gt = 0; continue X_194; }
    }
    X_328: for (;;) { IF: if (gt <= 328) {

var stA0 = lcA3.getColumns__Ljava_util_List_2();
var stI0 = invoker.isEmpty__Z(stA0);
if ((stI0) != 0) { gt = 349; break IF; }
var stA0 = lcA3.getColumns__Ljava_util_List_2();
invoker.clear__V(stA0);
    }
    X_349: for (;;) { IF: if (gt <= 349) {

var stA0 = lcA1.getConfiguredColumns__Ljava_util_List_2();
var stI0 = invoker.isEmpty__Z(stA0);
if ((stI0) != 0) { gt = 370; break IF; }
var stA0 = lcA1.getConfiguredColumns__Ljava_util_List_2();
invoker.clear__V(stA0);
    }
    X_370: for (;;) { IF: if (gt <= 370) {

var stA0 = invoker.getJSONArray__Lorg_json_JSONArray_2Ljava_lang_String_2(lcA4,"columns");
var stA0 = invoker.toList__Ljava_util_List_2(stA0);
var lcA8 = stA0;
var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA8);
var lcA9 = stA0;
    }
    X_391: for (;;) { IF: if (gt <= 391) {

var stI0 = invoker.hasNext__Z(lcA9);
if ((stI0) == 0) { gt = 542; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA9);
var lcA10 = stA0;
if (lcA10 !== null && !lcA10['$instOf_java_util_Map']) vm.java_lang_Class(false).castEx(lcA10, 'java.util.Map');
var stA0 = (refs_io_cloudoffice_platform_cockpit_api_MapBuilder || (refs_io_cloudoffice_platform_cockpit_api_MapBuilder = vm.io_cloudoffice_platform_cockpit_api_MapBuilder(false)))['query__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_util_Map_2'](lcA10);
var lcA11 = stA0;
var stA0 = new io_cloudoffice_platform_cockpit_genericlist_GenericListColumn;
(refs_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn || (refs_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn = io_cloudoffice_platform_cockpit_genericlist_GenericListColumn(false))).constructor.cons__V.call(stA0);
var lcA12 = stA0;
var stA0 = lcA12;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA11,"columnId");
stA0.setColumnId__VLjava_lang_String_2(stA1);
var stA0 = lcA12;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA11,"columnHeader");
stA0.setColumnHeader__VLjava_lang_String_2(stA1);
var stA0 = lcA12;var stI1 = invoker.getInt__ILjava_lang_String_2(lcA11,"columnIndex");
stA0.setColumnIndex__VI(stI1);
var stA0 = lcA12;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA11,"columnPosition");
stA0.setColumnPosition__VLjava_lang_String_2(stA1);
var stA0 = lcA12;var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA11,"columnWidth");
stA0.setColumnWidth__VLjava_lang_String_2(stA1);
var stA0 = lcA12;var stI1 = invoker.getBoolean__ZLjava_lang_String_2(lcA11,"isVisible");
stA0.setIsVisible__VZ(stI1);
var stA0 = lcA12;var stI1 = invoker.getBoolean__ZLjava_lang_String_2(lcA11,"isSortable");
stA0.setIsSortable__VZ(stI1);
var stA0 = lcA3.getColumns__Ljava_util_List_2();
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,lcA12);
var stA0 = lcA1.getConfiguredColumns__Ljava_util_List_2();
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,lcA12);
{ gt = 0; continue X_391; }
    }
    X_542: for (;;) { IF: if (gt <= 542) {

var stA0 = lcA1.getConfiguration__Lio_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration_2();
var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA4,"listItemCount");
stA0.setListItemCount__VLjava_lang_String_2(stA1);
var stA0 = invoker.getJSONObject__Lorg_json_JSONObject_2Ljava_lang_String_2(lcA4,"detailComponentDefinition");
var lcA9 = stA0;
var stA0 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA9,"component");
var lcA10 = stA0;
var stA0 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA9,"instanceId");
var lcA11 = stA0;
var stA0 = new vm.io_cloudoffice_platform_cockpit_api_ComponentDef;
(refs_io_cloudoffice_platform_cockpit_api_ComponentDef || (refs_io_cloudoffice_platform_cockpit_api_ComponentDef = vm.io_cloudoffice_platform_cockpit_api_ComponentDef(false))).constructor['cons__V'].call(stA0);
var lcA12 = stA0;
invoker.setComponent__VLjava_lang_String_2(lcA12,lcA10);
invoker.setInstanceId__VLjava_lang_String_2(lcA12,lcA11);
lcA1.setDetailComponentDefinition__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2(lcA12);
lcA3.setDetailComponentDefinition__VLio_cloudoffice_platform_cockpit_api_ComponentDef_2(lcA12);
var stA0 = invoker.getJSONObject__Lorg_json_JSONObject_2Ljava_lang_String_2(lcA4,"actionMenuComponentDefinition");
var lcA13 = stA0;
var stA0 = lcA3.getActionMenuComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA13,"component");
invoker.setComponent__VLjava_lang_String_2(stA0,stA1);
var stA0 = lcA3.getActionMenuComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA13,"instanceId");
invoker.setInstanceId__VLjava_lang_String_2(stA0,stA1);
var stA0 = lcA1.getActionMenuComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA13,"component");
invoker.setComponent__VLjava_lang_String_2(stA0,stA1);
var stA0 = lcA1.getActionMenuComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA13,"instanceId");
invoker.setInstanceId__VLjava_lang_String_2(stA0,stA1);
var stA0 = invoker.getJSONObject__Lorg_json_JSONObject_2Ljava_lang_String_2(lcA4,"collectionComponentDefinition");
var lcA14 = stA0;
var stA0 = lcA3.getCollectionComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA14,"component");
invoker.setComponent__VLjava_lang_String_2(stA0,stA1);
var stA0 = lcA3.getCollectionComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA14,"instanceId");
invoker.setInstanceId__VLjava_lang_String_2(stA0,stA1);
var stA0 = lcA1.getCollectionComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA14,"component");
invoker.setComponent__VLjava_lang_String_2(stA0,stA1);
var stA0 = lcA1.getCollectionComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA14,"instanceId");
invoker.setInstanceId__VLjava_lang_String_2(stA0,stA1);
var stA0 = invoker.getJSONObject__Lorg_json_JSONObject_2Ljava_lang_String_2(lcA4,"searchBoxComponentDefinition");
var lcA15 = stA0;
var stA0 = lcA3.getSearchBoxComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA15,"component");
invoker.setComponent__VLjava_lang_String_2(stA0,stA1);
var stA0 = lcA3.getSearchBoxComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA15,"instanceId");
invoker.setInstanceId__VLjava_lang_String_2(stA0,stA1);
var stA0 = lcA1.getSearchBoxComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA15,"component");
invoker.setComponent__VLjava_lang_String_2(stA0,stA1);
var stA0 = lcA1.getSearchBoxComponentDefinition__Lio_cloudoffice_platform_cockpit_api_ComponentDef_2();
var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(lcA15,"instanceId");
invoker.setInstanceId__VLjava_lang_String_2(stA0,stA1);
    }
    X_832: for (;;) { IF: if (gt <= 832) {
return;

    }
}}}}}}}}}}}}}}}
};
    m.access = 2;
    m.cls = CLS;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$LoginEventListener$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$LoginEventListener$1', { value : true });
      vm.io_cloudoffice_platform_cockpit_api_CallBack(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$LoginEventListener$1fillInstOf });
    io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$LoginEventListener$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/genericlist/GenericListComponent$LoginEventListener$1';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        vm.io_cloudoffice_platform_cockpit_api_CallBack(false).constructor.$class
    ]; };
    CLS.$class.access = 65568;
    CLS.$class.cnstr = CLS;
    var refs_io_cloudoffice_platform_cockpit_api_MapBuilder;
    var refs_io_cloudoffice_platform_cockpit_genericlist_GenericlistView;
    var refs_net_java_html_json_Models;
    var refs_io_cloudoffice_platform_cockpit_js_VIEW;
    var refs_io_cloudoffice_platform_cockpit_api_UtilValidate;
    var refs_io_cloudoffice_platform_cockpit_genericlist_FilterType;
    var refs_io_cloudoffice_platform_cockpit_genericlist_GenericListColumn;
    var refs_io_cloudoffice_platform_cockpit_api_ComponentDef;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$LoginEventListener$1_this$1'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$LoginEventListener$1 = io_cloudoffice_platform_cockpit_genericlist_GenericListComponent$LoginEventListener$1;

vm.io_cloudoffice_platform_cockpit_js_VIEW = link('io/cloudoffice/platform/cockpit/js/VIEW', function(f) { vm.io_cloudoffice_platform_cockpit_js_VIEW =  f; });
vm.io_cloudoffice_platform_cockpit_api_AbstractComponent = link('io/cloudoffice/platform/cockpit/api/AbstractComponent', function(f) { vm.io_cloudoffice_platform_cockpit_api_AbstractComponent =  f; });
vm.io_cloudoffice_platform_cockpit_api_Logger = link('io/cloudoffice/platform/cockpit/api/Logger', function(f) { vm.io_cloudoffice_platform_cockpit_api_Logger =  f; });

function io_cloudoffice_platform_cockpit_genericlist_GenericListRow$1() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_genericlist_GenericListRow$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_genericlist_GenericListRow$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_genericlist_GenericListRow$1', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_genericlist_GenericListRow$1fillInstOf });
    io_cloudoffice_platform_cockpit_genericlist_GenericListRow$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/genericlist/GenericListRow$1';
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
vm.io_cloudoffice_platform_cockpit_genericlist_GenericListRow$1 = io_cloudoffice_platform_cockpit_genericlist_GenericListRow$1;


function io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration$1() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration$1', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration$1fillInstOf });
    io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/genericlist/GenericlistConfiguration$1';
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
vm.io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration$1 = io_cloudoffice_platform_cockpit_genericlist_GenericlistConfiguration$1;


function io_cloudoffice_platform_cockpit_genericlist_GenericlistView$1() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_genericlist_GenericlistView$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_genericlist_GenericlistView$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_genericlist_GenericlistView$1', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_genericlist_GenericlistView$1fillInstOf });
    io_cloudoffice_platform_cockpit_genericlist_GenericlistView$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/genericlist/GenericlistView$1';
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
vm.io_cloudoffice_platform_cockpit_genericlist_GenericlistView$1 = io_cloudoffice_platform_cockpit_genericlist_GenericlistView$1;


function io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo$1() {
  var m;
  var CLS = io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    c.constructor = CLS;
    function io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo$1', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo$1fillInstOf });
    io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'io/cloudoffice/platform/cockpit/genericlist/VirtualItemInfo$1';
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
vm.io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo$1 = io_cloudoffice_platform_cockpit_genericlist_VirtualItemInfo$1;

  invoker.registerProperty__VLjava_lang_String_2IZZ = function(target, p1, p2, p3, p4) {
    return target['registerProperty__VLjava_lang_String_2IZZ'](p1,p2,p3,p4);
  };
  invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2 = function(target, p1, p2) {
    return target['extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2'](p1,p2);
  };
  invoker.booleanValue__Z = function(target) {
    return target['booleanValue__Z']();
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
  invoker.intValue__I = function(target) {
    return target['intValue__I']();
  };
  invoker.numberValue__Ljava_lang_Number_2Ljava_lang_Object_2 = function(target, p1) {
    return target['numberValue__Ljava_lang_Number_2Ljava_lang_Object_2'](p1);
  };
  invoker.isSame__ZII = function(target, p1, p2) {
    return target['isSame__ZII'](p1,p2);
  };
  invoker.equalsIgnoreCase__ZLjava_lang_String_2 = function(target, p1) {
    return target['equalsIgnoreCase__ZLjava_lang_String_2'](p1);
  };
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
  invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2 = function(target, p1) {
    return target['append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2'](p1);
  };
  invoker.attachListener__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_EventListener_2 = function(target, p1, p2) {
    return target['attachListener__VLjava_lang_String_2Lio_cloudoffice_platform_cockpit_api_EventListener_2'](p1,p2);
  };
  invoker.setDefaultViewName__VLjava_lang_String_2 = function(target, p1) {
    return target['setDefaultViewName__VLjava_lang_String_2'](p1);
  };
  invoker.setDefaultConfigViewName__VLjava_lang_String_2 = function(target, p1) {
    return target['setDefaultConfigViewName__VLjava_lang_String_2'](p1);
  };
  invoker.isEmpty__Z = function(target) {
    return target['isEmpty__Z']();
  };
  invoker.call__V = function(target) {
    return target['call__V']();
  };
  invoker.toJSON__Ljava_lang_String_2 = function(target) {
    return target['toJSON__Ljava_lang_String_2']();
  };
  invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2 = function(target, p1, p2) {
    return target['addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_lang_String_2'](p1,p2);
  };
  invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Z = function(target, p1, p2) {
    return target['addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Z'](p1,p2);
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
  invoker.addFieldMapList__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_util_List_2 = function(target, p1, p2) {
    return target['addFieldMapList__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_util_List_2'](p1,p2);
  };
  invoker.post__VLjava_lang_String_2Ljava_lang_String_2Lio_cloudoffice_platform_cockpit_api_CallBack_2 = function(target, p1, p2, p3) {
    return target['post__VLjava_lang_String_2Ljava_lang_String_2Lio_cloudoffice_platform_cockpit_api_CallBack_2'](p1,p2,p3);
  };
  invoker.append__Ljava_lang_StringBuilder_2Z = function(target, p1) {
    return target['append__Ljava_lang_StringBuilder_2Z'](p1);
  };
  invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2 = function(target, p1, p2) {
    return target['put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2'](p1,p2);
  };
  invoker.fetch__VLjava_lang_String_2Ljava_util_Map_2Lio_cloudoffice_platform_cockpit_api_CallBack_2 = function(target, p1, p2, p3) {
    return target['fetch__VLjava_lang_String_2Ljava_util_Map_2Lio_cloudoffice_platform_cockpit_api_CallBack_2'](p1,p2,p3);
  };
  invoker.size__I = function(target) {
    return target['size__I']();
  };
  invoker.addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_util_List_2 = function(target, p1, p2) {
    return target['addField__Lio_cloudoffice_platform_cockpit_api_MapBuilder_2Ljava_lang_String_2Ljava_util_List_2'](p1,p2);
  };
  invoker.getJsonObject__Lorg_json_JSONObject_2Ljava_lang_String_2 = function(target, p1) {
    return target['getJsonObject__Lorg_json_JSONObject_2Ljava_lang_String_2'](p1);
  };
  invoker.getString__Ljava_lang_String_2Ljava_lang_String_2 = function(target, p1) {
    return target['getString__Ljava_lang_String_2Ljava_lang_String_2'](p1);
  };
  invoker.getJSONArray__Lorg_json_JSONArray_2Ljava_lang_String_2 = function(target, p1) {
    return target['getJSONArray__Lorg_json_JSONArray_2Ljava_lang_String_2'](p1);
  };
  invoker.toList__Ljava_util_List_2 = function(target) {
    return target['toList__Ljava_util_List_2']();
  };
  invoker.getBoolean__ZLjava_lang_String_2 = function(target, p1) {
    return target['getBoolean__ZLjava_lang_String_2'](p1);
  };
  invoker.getInt__ILjava_lang_String_2 = function(target, p1) {
    return target['getInt__ILjava_lang_String_2'](p1);
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
  invoker.getRequest__Lio_cloudoffice_platform_cockpit_api_AsyncRequest_2 = function(target) {
    return target['getRequest__Lio_cloudoffice_platform_cockpit_api_AsyncRequest_2']();
  };
  invoker.getView__Ljava_lang_Object_2 = function(target) {
    return target['getView__Ljava_lang_Object_2']();
  };
  invoker.getArray__Ljava_util_List_2 = function(target) {
    return target['getArray__Ljava_util_List_2']();
  };
  invoker.setActive__VZ = function(target, p1) {
    return target['setActive__VZ'](p1);
  };
  invoker.getObject__Ljava_lang_Object_2Ljava_lang_String_2Ljava_lang_Object_2 = function(target, p1, p2) {
    return target['getObject__Ljava_lang_Object_2Ljava_lang_String_2Ljava_lang_Object_2'](p1,p2);
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
  invoker.longValue__J = function(target) {
    return target['longValue__J']();
  };
  invoker.isSame__ZDD = function(target, p1, p2) {
    return target['isSame__ZDD'](p1,p2);
  };
  invoker.setLimit__VI = function(target, p1) {
    return target['setLimit__VI'](p1);
  };
  invoker.setPageNumber__VI = function(target, p1) {
    return target['setPageNumber__VI'](p1);
  };
  invoker.getList__Ljava_util_List_2Ljava_lang_String_2 = function(target, p1) {
    return target['getList__Ljava_util_List_2Ljava_lang_String_2'](p1);
  };
  invoker.setQuery__VLio_cloudoffice_platform_cockpit_api_Query_2 = function(target, p1) {
    return target['setQuery__VLio_cloudoffice_platform_cockpit_api_Query_2'](p1);
  };
  invoker.get__Ljava_lang_Object_2I = function(target, p1) {
    return target['get__Ljava_lang_Object_2I'](p1);
  };
  invoker.getKey__Ljava_util_List_2 = function(target) {
    return target['getKey__Ljava_util_List_2']();
  };
  invoker.setValue__VLjava_lang_String_2 = function(target, p1) {
    return target['setValue__VLjava_lang_String_2'](p1);
  };
  invoker.setLike__VZ = function(target, p1) {
    return target['setLike__VZ'](p1);
  };
  invoker.setItemType__VLjava_lang_String_2 = function(target, p1) {
    return target['setItemType__VLjava_lang_String_2'](p1);
  };
  invoker.setType__VLjava_lang_String_2 = function(target, p1) {
    return target['setType__VLjava_lang_String_2'](p1);
  };
  invoker.name__Ljava_lang_String_2 = function(target) {
    return target['name__Ljava_lang_String_2']();
  };
  invoker.setOccur__VLjava_lang_String_2 = function(target, p1) {
    return target['setOccur__VLjava_lang_String_2'](p1);
  };
  invoker.getWhereClause__Ljava_util_List_2 = function(target) {
    return target['getWhereClause__Ljava_util_List_2']();
  };
  invoker.getFromClause__Ljava_util_List_2 = function(target) {
    return target['getFromClause__Ljava_util_List_2']();
  };
  invoker.addAll__ZLjava_util_Collection_2 = function(target, p1) {
    return target['addAll__ZLjava_util_Collection_2'](p1);
  };
  invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2 = function(target, p1) {
    return target['get__Ljava_lang_Object_2Ljava_lang_Object_2'](p1);
  };
  invoker.getClauses__Ljava_util_List_2 = function(target) {
    return target['getClauses__Ljava_util_List_2']();
  };
  invoker.getOrClauseGroups__Ljava_util_List_2 = function(target) {
    return target['getOrClauseGroups__Ljava_util_List_2']();
  };
  invoker.getQuery__Lio_cloudoffice_platform_cockpit_api_Query_2 = function(target) {
    return target['getQuery__Lio_cloudoffice_platform_cockpit_api_Query_2']();
  };
  invoker.getEndpoint__Ljava_lang_String_2 = function(target) {
    return target['getEndpoint__Ljava_lang_String_2']();
  };
  invoker.put__VLjava_lang_String_2Ljava_lang_Object_2 = function(target, p1, p2) {
    return target['put__VLjava_lang_String_2Ljava_lang_Object_2'](p1,p2);
  };
  invoker.registerFunction__VLjava_lang_String_2I = function(target, p1, p2) {
    return target['registerFunction__VLjava_lang_String_2I'](p1,p2);
  };
  invoker.toModel__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2 = function(target, p1, p2) {
    return target['toModel__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2'](p1,p2);
  };
  invoker.toString__Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_String_2 = function(target, p1, p2) {
    return target['toString__Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_String_2'](p1,p2);
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
  invoker.invoke__VLjava_lang_String_2 = function(target, p1) {
    return target['invoke__VLjava_lang_String_2'](p1);
  };
  invoker.setView__VLjava_lang_Object_2 = function(target, p1) {
    return target['setView__VLjava_lang_Object_2'](p1);
  };
  invoker.getDefaultViewName__Ljava_lang_String_2 = function(target) {
    return target['getDefaultViewName__Ljava_lang_String_2']();
  };
  exports['registerResource']('META-INF/MANIFEST.MF', 'TWFuaWZlc3QtVmVyc2lvbjogMS4wDQpCbmQtTGFzdE1vZGlmaWVkOiAxNTk3NzY0MDYwMTU4DQpCdWlsZC1KZGs6IDEuOC4wXzEzMQ0KQnVpbHQtQnk6IGV1c2lhDQpCdW5kbGUtTWFuaWZlc3RWZXJzaW9uOiAyDQpCdW5kbGUtTmFtZTogR2FkZ2V0IEdlbmVyaWMgTGlzdA0KQnVuZGxlLVN5bWJvbGljTmFtZTogaW8uY2xvdWRvZmZpY2UucGxhdGZvcm0uY29ja3BpdC5nZW5lcmljbGlzdA0KQnVuZGxlLVZlcnNpb246IDEuMS4wDQpDcmVhdGVkLUJ5OiBBcGFjaGUgTWF2ZW4gQnVuZGxlIFBsdWdpbg0KRXhwb3J0LVBhY2thZ2U6IGlvLmNsb3Vkb2ZmaWNlLnBsYXRmb3JtLmNvY2twaXQuZ2VuZXJpY2xpc3Q7dXNlczo9ImlvLmNsDQogb3Vkb2ZmaWNlLnBsYXRmb3JtLmNvY2twaXQuYXBpIjt2ZXJzaW9uPSIxLjEuMCINCkltcG9ydC1QYWNrYWdlOiBpby5jbG91ZG9mZmljZS5wbGF0Zm9ybS5jb2NrcGl0LmFwaTt2ZXJzaW9uPSJbMS4xLDIpIixpbw0KIC5jbG91ZG9mZmljZS5wbGF0Zm9ybS5jb2NrcGl0LmpzO3ZlcnNpb249IlsxLjEsMikiLG5ldC5qYXZhLmh0bWw7dmVyc2lvDQogbj0iWzEuNiwyKSIsbmV0LmphdmEuaHRtbC5qc29uO3ZlcnNpb249IlsxLjYsMikiLG9yZy5qc29uO3ZlcnNpb249IlsyMDENCiA4MDgxMy4wLDIwMTgwODE0KSIsb3JnLm5ldGJlYW5zLmh0bWwuanNvbi5zcGk7dmVyc2lvbj0iWzEuNiwyKSINClRvb2w6IEJuZC0yLjEuMC4yMDEzMDQyNi0xMjIyMTMNCg==');
});